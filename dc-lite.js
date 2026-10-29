// Minimal renderer for the design pages: {{holes}}, <sc-for>, <sc-if>, onClick handlers and setState.
(function () {
  window.DCLogic = class {
    constructor(props) { this.props = props || {}; this.state = {}; }
    setState(patch) {
      Object.assign(this.state, typeof patch === 'function' ? patch(this.state) : patch);
      if (this._render) this._render();
    }
    forceUpdate() { if (this._render) this._render(); }
  };

  var WHOLE = /^\s*\{\{([^}]+)\}\}\s*$/;
  var ANY = /\{\{([^}]+)\}\}/g;

  function get(path, scope) {
    path = path.trim();
    if (path === 'true') return true;
    if (path === 'false') return false;
    if (path === 'null') return null;
    if (/^-?\d+(\.\d+)?$/.test(path)) return Number(path);
    var parts = path.split('.');
    var v = scope;
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return undefined;
      v = v[parts[i]];
    }
    return v;
  }

  function interp(s, scope) {
    return s.replace(ANY, function (_, p) { var v = get(p, scope); return v == null ? '' : String(v); });
  }

  function render(node, scope, out) {
    if (node.nodeType === 3) { out.appendChild(document.createTextNode(interp(node.nodeValue, scope))); return; }
    if (node.nodeType !== 1) return;
    var tag = node.localName;
    if (tag === 'sc-for') {
      var lm = WHOLE.exec(node.getAttribute('list') || '');
      var list = (lm && get(lm[1], scope)) || [];
      var as = node.getAttribute('as') || 'item';
      list.forEach(function (item, i) {
        var s = Object.create(scope);
        s[as] = item;
        s.$index = i;
        node.childNodes.forEach(function (c) { render(c, s, out); });
      });
      return;
    }
    if (tag === 'sc-if') {
      var im = WHOLE.exec(node.getAttribute('value') || '');
      if (im && get(im[1], scope)) node.childNodes.forEach(function (c) { render(c, scope, out); });
      return;
    }
    var el = document.createElementNS(node.namespaceURI, tag);
    Array.prototype.forEach.call(node.attributes, function (a) {
      var name = a.name;
      if (name.indexOf('hint-') === 0) return;
      var m = WHOLE.exec(a.value);
      if (/^on[a-z]/.test(name) && m) {
        var fn = get(m[1], scope);
        if (typeof fn === 'function') el.addEventListener(name.slice(2), fn);
        return;
      }
      if (m) {
        var v = get(m[1], scope);
        if (v === false || v == null) return;
        el.setAttribute(name, v === true ? '' : String(v));
      } else {
        el.setAttribute(name, interp(a.value, scope));
      }
    });
    node.childNodes.forEach(function (c) { render(c, scope, el); });
    out.appendChild(el);
  }

  window.dcBoot = function () {
    var tpl = document.getElementById('dc-template');
    var root = document.getElementById('dc-root');
    var comp = new Component({});
    comp._render = function () {
      var vals = comp.renderVals() || {};
      var frag = document.createDocumentFragment();
      tpl.content.childNodes.forEach(function (c) { render(c, vals, frag); });
      root.replaceChildren(frag);
    };
    comp._render();
    if (comp.componentDidMount) comp.componentDidMount();
  };
})();
