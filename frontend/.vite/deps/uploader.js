import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-ROME4SDB.js";

// node_modules/preact/dist/preact.module.js
var preact_module_exports = {};
__export(preact_module_exports, {
  Component: () => b,
  Fragment: () => k,
  cloneElement: () => F,
  createContext: () => G,
  createElement: () => y,
  createRef: () => _,
  h: () => y,
  hydrate: () => E,
  isValidElement: () => t,
  options: () => l,
  render: () => B,
  toChildArray: () => C
});
function h(n2, l3) {
  for (var u3 in l3)
    n2[u3] = l3[u3];
  return n2;
}
function p(n2) {
  var l3 = n2.parentNode;
  l3 && l3.removeChild(n2);
}
function y(l3, u3, t3) {
  var i3, o4, r3, f3 = {};
  for (r3 in u3)
    "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o4 = u3[r3] : f3[r3] = u3[r3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
    for (r3 in l3.defaultProps)
      void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
  return d(l3, f3, i3, o4, null);
}
function d(n2, t3, i3, o4, r3) {
  var f3 = { type: n2, props: t3, key: i3, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
  return null == r3 && null != l.vnode && l.vnode(f3), f3;
}
function _() {
  return { current: null };
}
function k(n2) {
  return n2.children;
}
function b(n2, l3) {
  this.props = n2, this.context = l3;
}
function g(n2, l3) {
  if (null == l3)
    return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++)
    if (null != (u3 = n2.__k[l3]) && null != u3.__e)
      return u3.__d || u3.__e;
  return "function" == typeof n2.type ? g(n2) : null;
}
function m(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return m(n2);
  }
}
function w(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
}
function x() {
  var n2, l3, u3, t3, o4, r3, e3, c3, s3;
  for (i.sort(f); n2 = i.shift(); )
    n2.__d && (l3 = i.length, t3 = void 0, o4 = void 0, r3 = void 0, c3 = (e3 = (u3 = n2).__v).__e, (s3 = u3.__P) && (t3 = [], o4 = [], (r3 = h({}, e3)).__v = e3.__v + 1, z(s3, e3, r3, u3.__n, void 0 !== s3.ownerSVGElement, null != e3.__h ? [c3] : null, t3, null == c3 ? g(e3) : c3, e3.__h, o4), L(t3, e3, o4), e3.__e != c3 && m(e3)), i.length > l3 && i.sort(f));
  x.__r = 0;
}
function P(n2, l3, u3, t3, i3, o4, r3, f3, e3, a3, h3) {
  var p3, y3, _4, b3, m3, w4, x4, P4, C3, D3 = 0, H3 = t3 && t3.__k || s, I3 = H3.length, T4 = I3, j4 = l3.length;
  for (u3.__k = [], p3 = 0; p3 < j4; p3++)
    null != (b3 = u3.__k[p3] = null == (b3 = l3[p3]) || "boolean" == typeof b3 || "function" == typeof b3 ? null : "string" == typeof b3 || "number" == typeof b3 || "bigint" == typeof b3 ? d(null, b3, null, null, b3) : v(b3) ? d(k, { children: b3 }, null, null, null) : b3.__b > 0 ? d(b3.type, b3.props, b3.key, b3.ref ? b3.ref : null, b3.__v) : b3) ? (b3.__ = u3, b3.__b = u3.__b + 1, -1 === (P4 = A(b3, H3, x4 = p3 + D3, T4)) ? _4 = c : (_4 = H3[P4] || c, H3[P4] = void 0, T4--), z(n2, b3, _4, i3, o4, r3, f3, e3, a3, h3), m3 = b3.__e, (y3 = b3.ref) && _4.ref != y3 && (_4.ref && N(_4.ref, null, b3), h3.push(y3, b3.__c || m3, b3)), null != m3 && (null == w4 && (w4 = m3), (C3 = _4 === c || null === _4.__v) ? -1 == P4 && D3-- : P4 !== x4 && (P4 === x4 + 1 ? D3++ : P4 > x4 ? T4 > j4 - x4 ? D3 += P4 - x4 : D3-- : D3 = P4 < x4 && P4 == x4 - 1 ? P4 - x4 : 0), x4 = p3 + D3, "function" != typeof b3.type || P4 === x4 && _4.__k !== b3.__k ? "function" == typeof b3.type || P4 === x4 && !C3 ? void 0 !== b3.__d ? (e3 = b3.__d, b3.__d = void 0) : e3 = m3.nextSibling : e3 = S(n2, m3, e3) : e3 = $(b3, e3, n2), "function" == typeof u3.type && (u3.__d = e3))) : (_4 = H3[p3]) && null == _4.key && _4.__e && (_4.__e == e3 && (_4.__ = t3, e3 = g(_4)), O(_4, _4, false), H3[p3] = null);
  for (u3.__e = w4, p3 = I3; p3--; )
    null != H3[p3] && ("function" == typeof u3.type && null != H3[p3].__e && H3[p3].__e == u3.__d && (u3.__d = H3[p3].__e.nextSibling), O(H3[p3], H3[p3]));
}
function $(n2, l3, u3) {
  for (var t3, i3 = n2.__k, o4 = 0; i3 && o4 < i3.length; o4++)
    (t3 = i3[o4]) && (t3.__ = n2, l3 = "function" == typeof t3.type ? $(t3, l3, u3) : S(u3, t3.__e, l3));
  return l3;
}
function C(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (v(n2) ? n2.some(function(n3) {
    C(n3, l3);
  }) : l3.push(n2)), l3;
}
function S(n2, l3, u3) {
  return null == u3 || u3.parentNode !== n2 ? n2.insertBefore(l3, null) : l3 == u3 && null != l3.parentNode || n2.insertBefore(l3, u3), l3.nextSibling;
}
function A(n2, l3, u3, t3) {
  var i3 = n2.key, o4 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
  if (null === e3 || e3 && i3 == e3.key && o4 === e3.type)
    return u3;
  if (t3 > (null != e3 ? 1 : 0))
    for (; r3 >= 0 || f3 < l3.length; ) {
      if (r3 >= 0) {
        if ((e3 = l3[r3]) && i3 == e3.key && o4 === e3.type)
          return r3;
        r3--;
      }
      if (f3 < l3.length) {
        if ((e3 = l3[f3]) && i3 == e3.key && o4 === e3.type)
          return f3;
        f3++;
      }
    }
  return -1;
}
function D(n2, l3, u3, t3, i3) {
  var o4;
  for (o4 in u3)
    "children" === o4 || "key" === o4 || o4 in l3 || I(n2, o4, null, u3[o4], t3);
  for (o4 in l3)
    i3 && "function" != typeof l3[o4] || "children" === o4 || "key" === o4 || "value" === o4 || "checked" === o4 || u3[o4] === l3[o4] || I(n2, o4, l3[o4], u3[o4], t3);
}
function H(n2, l3, u3) {
  "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
}
function I(n2, l3, u3, t3, i3) {
  var o4;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
          for (l3 in t3)
            u3 && l3 in u3 || H(n2.style, l3, "");
        if (u3)
          for (l3 in u3)
            t3 && u3[l3] === t3[l3] || H(n2.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      o4 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/, "$1")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o4] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = Date.now(), n2.addEventListener(l3, o4 ? j : T, o4)) : n2.removeEventListener(l3, o4 ? j : T, o4);
    else if ("dangerouslySetInnerHTML" !== l3) {
      if (i3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && "role" !== l3 && l3 in n2)
        try {
          n2[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
    }
}
function T(n2) {
  var u3 = this.l[n2.type + false];
  if (n2.t) {
    if (n2.t <= u3.u)
      return;
  } else
    n2.t = Date.now();
  return u3(l.event ? l.event(n2) : n2);
}
function j(n2) {
  return this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function z(n2, u3, t3, i3, o4, r3, f3, e3, c3, s3) {
  var a3, p3, y3, d3, _4, g4, m3, w4, x4, $3, C3, S2, A4, D3, H3, I3 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != t3.__h && (c3 = t3.__h, e3 = u3.__e = t3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
  n:
    if ("function" == typeof I3)
      try {
        if (w4 = u3.props, x4 = (a3 = I3.contextType) && i3[a3.__c], $3 = a3 ? x4 ? x4.props.value : a3.__ : i3, t3.__c ? m3 = (p3 = u3.__c = t3.__c).__ = p3.__E : ("prototype" in I3 && I3.prototype.render ? u3.__c = p3 = new I3(w4, $3) : (u3.__c = p3 = new b(w4, $3), p3.constructor = I3, p3.render = q), x4 && x4.sub(p3), p3.props = w4, p3.state || (p3.state = {}), p3.context = $3, p3.__n = i3, y3 = p3.__d = true, p3.__h = [], p3._sb = []), null == p3.__s && (p3.__s = p3.state), null != I3.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = h({}, p3.__s)), h(p3.__s, I3.getDerivedStateFromProps(w4, p3.__s))), d3 = p3.props, _4 = p3.state, p3.__v = u3, y3)
          null == I3.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
        else {
          if (null == I3.getDerivedStateFromProps && w4 !== d3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(w4, $3), !p3.__e && (null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(w4, p3.__s, $3) || u3.__v === t3.__v)) {
            for (u3.__v !== t3.__v && (p3.props = w4, p3.state = p3.__s, p3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), C3 = 0; C3 < p3._sb.length; C3++)
              p3.__h.push(p3._sb[C3]);
            p3._sb = [], p3.__h.length && f3.push(p3);
            break n;
          }
          null != p3.componentWillUpdate && p3.componentWillUpdate(w4, p3.__s, $3), null != p3.componentDidUpdate && p3.__h.push(function() {
            p3.componentDidUpdate(d3, _4, g4);
          });
        }
        if (p3.context = $3, p3.props = w4, p3.__P = n2, p3.__e = false, S2 = l.__r, A4 = 0, "prototype" in I3 && I3.prototype.render) {
          for (p3.state = p3.__s, p3.__d = false, S2 && S2(u3), a3 = p3.render(p3.props, p3.state, p3.context), D3 = 0; D3 < p3._sb.length; D3++)
            p3.__h.push(p3._sb[D3]);
          p3._sb = [];
        } else
          do {
            p3.__d = false, S2 && S2(u3), a3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
          } while (p3.__d && ++A4 < 25);
        p3.state = p3.__s, null != p3.getChildContext && (i3 = h(h({}, i3), p3.getChildContext())), y3 || null == p3.getSnapshotBeforeUpdate || (g4 = p3.getSnapshotBeforeUpdate(d3, _4)), P(n2, v(H3 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? H3 : [H3], u3, t3, i3, o4, r3, f3, e3, c3, s3), p3.base = u3.__e, u3.__h = null, p3.__h.length && f3.push(p3), m3 && (p3.__E = p3.__ = null);
      } catch (n3) {
        u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, t3);
      }
    else
      null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = M(t3.__e, u3, t3, i3, o4, r3, f3, c3, s3);
  (a3 = l.diffed) && a3(u3);
}
function L(n2, u3, t3) {
  for (var i3 = 0; i3 < t3.length; i3++)
    N(t3[i3], t3[++i3], t3[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function M(l3, u3, t3, i3, o4, r3, f3, e3, s3) {
  var a3, h3, y3, d3 = t3.props, _4 = u3.props, k4 = u3.type, b3 = 0;
  if ("svg" === k4 && (o4 = true), null != r3) {
    for (; b3 < r3.length; b3++)
      if ((a3 = r3[b3]) && "setAttribute" in a3 == !!k4 && (k4 ? a3.localName === k4 : 3 === a3.nodeType)) {
        l3 = a3, r3[b3] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === k4)
      return document.createTextNode(_4);
    l3 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", k4) : document.createElement(k4, _4.is && _4), r3 = null, e3 = false;
  }
  if (null === k4)
    d3 === _4 || e3 && l3.data === _4 || (l3.data = _4);
  else {
    if (r3 = r3 && n.call(l3.childNodes), h3 = (d3 = t3.props || c).dangerouslySetInnerHTML, y3 = _4.dangerouslySetInnerHTML, !e3) {
      if (null != r3)
        for (d3 = {}, b3 = 0; b3 < l3.attributes.length; b3++)
          d3[l3.attributes[b3].name] = l3.attributes[b3].value;
      (y3 || h3) && (y3 && (h3 && y3.__html == h3.__html || y3.__html === l3.innerHTML) || (l3.innerHTML = y3 && y3.__html || ""));
    }
    if (D(l3, _4, d3, o4, e3), y3)
      u3.__k = [];
    else if (P(l3, v(b3 = u3.props.children) ? b3 : [b3], u3, t3, i3, o4 && "foreignObject" !== k4, r3, f3, r3 ? r3[0] : t3.__k && g(t3, 0), e3, s3), null != r3)
      for (b3 = r3.length; b3--; )
        null != r3[b3] && p(r3[b3]);
    e3 || ("value" in _4 && void 0 !== (b3 = _4.value) && (b3 !== l3.value || "progress" === k4 && !b3 || "option" === k4 && b3 !== d3.value) && I(l3, "value", b3, d3.value, false), "checked" in _4 && void 0 !== (b3 = _4.checked) && b3 !== l3.checked && I(l3, "checked", b3, d3.checked, false));
  }
  return l3;
}
function N(n2, u3, t3) {
  try {
    "function" == typeof n2 ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function O(n2, u3, t3) {
  var i3, o4;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || N(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount)
      try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    i3.base = i3.__P = null, n2.__c = void 0;
  }
  if (i3 = n2.__k)
    for (o4 = 0; o4 < i3.length; o4++)
      i3[o4] && O(i3[o4], u3, t3 || "function" != typeof n2.type);
  t3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function B(u3, t3, i3) {
  var o4, r3, f3, e3;
  l.__ && l.__(u3, t3), r3 = (o4 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], z(t3, u3 = (!o4 && i3 || t3).__k = y(k, null, [u3]), r3 || c, c, void 0 !== t3.ownerSVGElement, !o4 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o4 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o4, e3), L(f3, u3, e3);
}
function E(n2, l3) {
  B(n2, l3, E);
}
function F(l3, u3, t3) {
  var i3, o4, r3, f3, e3 = h({}, l3.props);
  for (r3 in l3.type && l3.type.defaultProps && (f3 = l3.type.defaultProps), u3)
    "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o4 = u3[r3] : e3[r3] = void 0 === u3[r3] && void 0 !== f3 ? f3[r3] : u3[r3];
  return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), d(l3.type, e3, i3 || l3.key, o4 || l3.ref, null);
}
function G(n2, l3) {
  var u3 = { __c: l3 = "__cC" + e++, __: n2, Consumer: function(n3, l4) {
    return n3.children(l4);
  }, Provider: function(n3) {
    var u4, t3;
    return this.getChildContext || (u4 = [], (t3 = {})[l3] = this, this.getChildContext = function() {
      return t3;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u4.some(function(n5) {
        n5.__e = true, w(n5);
      });
    }, this.sub = function(n4) {
      u4.push(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
      };
    }), n3.children;
  } };
  return u3.Provider.__ = u3.Consumer.contextType = u3;
}
var n, l, u, t, i, o, r, f, e, c, s, a, v;
var init_preact_module = __esm({
  "node_modules/preact/dist/preact.module.js"() {
    c = {};
    s = [];
    a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    v = Array.isArray;
    n = s.slice, l = { __e: function(n2, l3, u3, t3) {
      for (var i3, o4, r3; l3 = l3.__; )
        if ((i3 = l3.__c) && !i3.__)
          try {
            if ((o4 = i3.constructor) && null != o4.getDerivedStateFromError && (i3.setState(o4.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3)
              return i3.__E = i3;
          } catch (l4) {
            n2 = l4;
          }
      throw n2;
    } }, u = 0, t = function(n2) {
      return null != n2 && void 0 === n2.constructor;
    }, b.prototype.setState = function(n2, l3) {
      var u3;
      u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), w(this));
    }, b.prototype.forceUpdate = function(n2) {
      this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
    }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
      return n2.__v.__b - l3.__v.__b;
    }, x.__r = 0, e = 0;
  }
});

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module_exports = {};
__export(jsxRuntime_module_exports, {
  Fragment: () => k,
  jsx: () => o2,
  jsxDEV: () => o2,
  jsxs: () => o2
});
function o2(o4, e3, n2, t3, f3, l3) {
  var s3, u3, a3 = {};
  for (u3 in e3)
    "ref" == u3 ? s3 = e3[u3] : a3[u3] = e3[u3];
  var i3 = { type: o4, props: a3, key: n2, ref: s3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_2, __source: f3, __self: l3 };
  if ("function" == typeof o4 && (s3 = o4.defaultProps))
    for (u3 in s3)
      void 0 === a3[u3] && (a3[u3] = s3[u3]);
  return l.vnode && l.vnode(i3), i3;
}
var _2;
var init_jsxRuntime_module = __esm({
  "node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"() {
    init_preact_module();
    init_preact_module();
    _2 = 0;
  }
});

// node_modules/@upload-io/upload-api-client-upload-js/dist/main.js
var require_main = __commonJS({
  "node_modules/@upload-io/upload-api-client-upload-js/dist/main.js"(exports, module) {
    module.exports = /******/
    function() {
      "use strict";
      var __webpack_modules__ = {
        /***/
        "./src/index.ts": (
          /***/
          function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
            __webpack_require__2.r(__webpack_exports__);
            __webpack_require__2.d(__webpack_exports__, {
              "beginMultipartUpload": function() {
                return (
                  /* reexport */
                  beginMultipartUpload
                );
              },
              "completeUploadPart": function() {
                return (
                  /* reexport */
                  completeUploadPart
                );
              },
              "getUploadPart": function() {
                return (
                  /* reexport */
                  getUploadPart
                );
              },
              "request": function() {
                return (
                  /* reexport */
                  request
                );
              }
            });
            ;
            function _await(value, then, direct) {
              if (direct) {
                return then ? then(value) : value;
              }
              if (!value || !value.then) {
                value = Promise.resolve(value);
              }
              return then ? value.then(then) : value;
            }
            function _async(f3) {
              return function() {
                for (var args = [], i3 = 0; i3 < arguments.length; i3++) {
                  args[i3] = arguments[i3];
                }
                try {
                  return Promise.resolve(f3.apply(this, args));
                } catch (e3) {
                  return Promise.reject(e3);
                }
              };
            }
            var request = _async(function(config, options) {
              var url = getUrl(config, options);
              return _await(sendRequest(config, options, url), function(response) {
                var responseBody = getResponseBody(response);
                var responseHeader = getResponseHeader(response, options.responseHeader);
                return {
                  url,
                  ok: response.status >= 200 && response.status < 300,
                  status: response.status,
                  statusText: response.statusText,
                  body: responseHeader || responseBody
                };
              });
            });
            var sendRequest = _async(function(config, options, url) {
              var xhr = new XMLHttpRequest();
              xhr.open(options.method, url, true);
              xhr.withCredentials = config.WITH_CREDENTIALS;
              return _await(getHeaders(config, options), function(headers) {
                headers.forEach(function(value, key) {
                  xhr.setRequestHeader(key, value);
                });
                return new Promise(function(resolve2) {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                      resolve2(xhr);
                    }
                  };
                  xhr.send(getRequestBody(options));
                });
              });
            });
            var getHeaders = _async(function(config, options) {
              return _await(resolve(options, config.USERNAME), function(username) {
                return _await(resolve(options, config.PASSWORD), function(password) {
                  return _await(resolve(options, config.HEADERS), function(defaultHeaders) {
                    var headers = new Headers(Object.assign(Object.assign({
                      Accept: contentTypeJson
                    }, defaultHeaders), options.headers));
                    if (isStringWithValue(username) && isStringWithValue(password)) {
                      var credentials = btoa("".concat(username, ":").concat(password));
                      headers.append("Authorization", "Basic ".concat(credentials));
                    }
                    if (options.body) {
                      headers.append(contentType, contentTypeJson);
                    }
                    return headers;
                  });
                });
              });
            });
            var resolve = _async(function(options, resolver) {
              return typeof resolver === "function" ? resolver(options) : resolver;
            });
            var contentType = "Content-Type";
            var contentTypeJson = "application/json";
            function isDefined(value) {
              return value !== void 0 && value !== null;
            }
            function isStringWithValue(value) {
              return typeof value === "string" && value !== "";
            }
            function getQueryString(params) {
              var qs = [];
              Object.keys(params).forEach(function(key) {
                var value = params[key];
                if (isDefined(value)) {
                  if (Array.isArray(value)) {
                    value.forEach(function(value2) {
                      qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(String(value2))));
                    });
                  } else {
                    qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(String(value))));
                  }
                }
              });
              if (qs.length > 0) {
                return "?".concat(qs.join("&"));
              }
              return "";
            }
            function getUrl(config, options) {
              var path = options.path.replace(/[:]/g, "_");
              var url = "".concat(config.BASE).concat(path);
              if (options.query) {
                return "".concat(url).concat(getQueryString(options.query));
              }
              return url;
            }
            function getRequestBody(options) {
              if (options.body) {
                return JSON.stringify(options.body);
              }
              return void 0;
            }
            function getResponseHeader(xhr, responseHeader) {
              if (responseHeader) {
                return xhr.getResponseHeader(responseHeader);
              }
              return null;
            }
            function getResponseBody(xhr) {
              var headerValue = xhr.getResponseHeader(contentType);
              if (headerValue) {
                var isJSON = headerValue.toLowerCase().startsWith(contentTypeJson);
                if (isJSON) {
                  return JSON.parse(xhr.responseText);
                } else {
                  return xhr.responseText;
                }
              }
              return null;
            }
            ;
            function UploadsService_await(value, then, direct) {
              if (direct) {
                return then ? then(value) : value;
              }
              if (!value || !value.then) {
                value = Promise.resolve(value);
              }
              return then ? value.then(then) : value;
            }
            function UploadsService_async(f3) {
              return function() {
                for (var args = [], i3 = 0; i3 < arguments.length; i3++) {
                  args[i3] = arguments[i3];
                }
                try {
                  return Promise.resolve(f3.apply(this, args));
                } catch (e3) {
                  return Promise.reject(e3);
                }
              };
            }
            var getUploadPart = UploadsService_async(function(config, accountId, uploadId, uploadPartIndex) {
              return request(config, {
                method: "GET",
                path: "".concat(accounts).concat(accountId).concat(uploads, "/").concat(uploadId).concat(parts).concat(uploadPartIndex)
              });
            });
            var completeUploadPart = UploadsService_async(function(config, accountId, uploadId, uploadPartIndex, requestBody) {
              return request(config, {
                method: "PUT",
                path: "".concat(accounts).concat(accountId).concat(uploads, "/").concat(uploadId).concat(parts).concat(uploadPartIndex),
                body: requestBody
              });
            });
            var beginMultipartUpload = UploadsService_async(function(config, accountId, requestBody) {
              return request(config, {
                method: "POST",
                path: "".concat(accounts).concat(accountId).concat(uploads),
                body: requestBody
              });
            });
            var accounts = "/v2/accounts/";
            var uploads = "/uploads";
            var parts = "/parts/";
            ;
          }
        )
        /******/
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) {
          return __webpack_module_cache__[moduleId].exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      !function() {
        __webpack_require__.d = function(exports2, definition) {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      }();
      !function() {
        __webpack_require__.o = function(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
      }();
      !function() {
        __webpack_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
      }();
      return __webpack_require__("./src/index.ts");
    }();
  }
});

// node_modules/progress-smoother/dist/main.js
var require_main2 = __commonJS({
  "node_modules/progress-smoother/dist/main.js"(exports, module) {
    module.exports = /******/
    function() {
      "use strict";
      var __webpack_modules__ = {
        /***/
        "./src/index.ts": (
          /***/
          function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
            __webpack_require__2.r(__webpack_exports__);
            __webpack_require__2.d(__webpack_exports__, {
              "ProgressSmoother": function() {
                return (
                  /* reexport */
                  ProgressSmoother
                );
              }
            });
            ;
            function ProgressSmoother(config) {
              var _a, _b;
              var minFinishDuration = 1e3;
              var maxForecastFactor = 0.33;
              var minSetupTime = (_a = config.minDelayUntilFirstValue) !== null && _a !== void 0 ? _a : 0;
              var minTeardownTime = (_b = config.teardownTime) !== null && _b !== void 0 ? _b : 0;
              var valueIncreaseRatePerSecond = config.valueIncreaseRatePerSecond, averageTimeBetweenValues = config.averageTimeBetweenValues, maxValue = config.maxValue, valueIncreaseDelta = config.valueIncreaseDelta;
              var _lastReading;
              var lastTimeMinus1 = Date.now();
              var lastYieldedValue = 0;
              var movingAverage = 0;
              function returnMonotonic(getValue) {
                var value = getValue();
                if (value > lastYieldedValue) {
                  lastYieldedValue = value;
                }
                return lastYieldedValue;
              }
              function hasFinished(lastReading) {
                return lastReading.value === maxValue;
              }
              function fromLastReading(lastReading, now) {
                if (hasFinished(lastReading)) {
                  var teardownTime = Math.max(minFinishDuration, minTeardownTime);
                  var millisElapsed = now - lastReading.time;
                  var percentageIntoTeardown = millisElapsed / teardownTime;
                  var percentageIntoTeardownCapped = Math.min(1, percentageIntoTeardown);
                  var percentageIntoTeardownEased = easeInQuad(percentageIntoTeardownCapped);
                  var delta = lastReading.value - movingAverage;
                  return movingAverage + delta * percentageIntoTeardownEased;
                }
                return calculateEMA(lastReading.value, now, lastTimeMinus1);
              }
              function forecastInitialValue(now) {
                var maxForecastSize = Math.min(valueIncreaseDelta, maxValue * maxForecastFactor);
                var maxForecastTransferTime = maxForecastSize / valueIncreaseRatePerSecond * 1e3;
                var maxTwiddleTime = minSetupTime + maxForecastTransferTime;
                var millisElapsed = now - lastTimeMinus1;
                var percentageIntoTwiddleTime = millisElapsed / maxTwiddleTime;
                var percentageIntoTwiddleTimeCapped = Math.min(1, percentageIntoTwiddleTime);
                return percentageIntoTwiddleTimeCapped * maxForecastSize;
              }
              function alpha(now, lastTime) {
                var alphaMagicNumber = 3.5;
                return 1 - Math.exp(-(now - lastTime) / (averageTimeBetweenValues * alphaMagicNumber));
              }
              function calculateEMA(value, now, lastTime) {
                var a3 = alpha(now, lastTime);
                return a3 * value + (1 - a3) * movingAverage;
              }
              function easeInQuad(x4) {
                return x4 * x4;
              }
              function setValue(value, nowMaybe) {
                if (_lastReading !== void 0) {
                  if (hasFinished(_lastReading)) {
                    return;
                  }
                  movingAverage = calculateEMA(_lastReading.value, _lastReading.time, lastTimeMinus1);
                  lastTimeMinus1 = _lastReading.time;
                }
                _lastReading = {
                  time: nowMaybe !== null && nowMaybe !== void 0 ? nowMaybe : Date.now(),
                  value: Math.min(value, maxValue)
                };
              }
              function smoothedValue(nowMaybe) {
                return returnMonotonic(function() {
                  var now = nowMaybe !== null && nowMaybe !== void 0 ? nowMaybe : Date.now();
                  if (_lastReading !== void 0) {
                    return fromLastReading(_lastReading, now);
                  }
                  return forecastInitialValue(now);
                });
              }
              function smoothedFactor(nowMaybe) {
                return smoothedValue(nowMaybe) / maxValue;
              }
              return {
                setValue,
                smoothedValue,
                smoothedFactor
              };
            }
            ;
          }
        )
        /******/
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) {
          return __webpack_module_cache__[moduleId].exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      !function() {
        __webpack_require__.d = function(exports2, definition) {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      }();
      !function() {
        __webpack_require__.o = function(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
      }();
      !function() {
        __webpack_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
      }();
      return __webpack_require__("./src/index.ts");
    }();
  }
});

// node_modules/upload-js/dist/main.js
var require_main3 = __commonJS({
  "node_modules/upload-js/dist/main.js"(exports, module) {
    module.exports = /******/
    function() {
      "use strict";
      var __webpack_modules__ = {
        /***/
        "./src/index.ts": (
          /***/
          function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
            __webpack_require__2.r(__webpack_exports__);
            __webpack_require__2.d(__webpack_exports__, {
              "Upload": function() {
                return (
                  /* reexport */
                  Upload
                );
              },
              "UploadApiError": function() {
                return (
                  /* reexport */
                  UploadApiError
                );
              }
            });
            ;
            var upload_api_client_upload_js_namespaceObject = require_main();
            ;
            ;
            function _call(body, then, direct) {
              if (direct) {
                return then ? then(body()) : body();
              }
              try {
                var result = Promise.resolve(body());
                return then ? result.then(then) : result;
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
            function _rethrow(thrown, value) {
              if (thrown)
                throw value;
              return value;
            }
            function _finallyRethrows(body, finalizer) {
              try {
                var result = body();
              } catch (e3) {
                return finalizer(true, e3);
              }
              if (result && result.then) {
                return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
              }
              return finalizer(false, result);
            }
            function _empty() {
            }
            function _awaitIgnored(value, direct) {
              if (!direct) {
                return value && value.then ? value.then(_empty) : Promise.resolve();
              }
            }
            function _settle(pact, state, value) {
              if (!pact.s) {
                if (value instanceof _Pact) {
                  if (value.s) {
                    if (state & 1) {
                      state = value.s;
                    }
                    value = value.v;
                  } else {
                    value.o = _settle.bind(null, pact, state);
                    return;
                  }
                }
                if (value && value.then) {
                  value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
                  return;
                }
                pact.s = state;
                pact.v = value;
                var observer = pact.o;
                if (observer) {
                  observer(pact);
                }
              }
            }
            var _Pact = function() {
              function _Pact2() {
              }
              _Pact2.prototype.then = function(onFulfilled, onRejected) {
                var result = new _Pact2();
                var state = this.s;
                if (state) {
                  var callback = state & 1 ? onFulfilled : onRejected;
                  if (callback) {
                    try {
                      _settle(result, 1, callback(this.v));
                    } catch (e3) {
                      _settle(result, 2, e3);
                    }
                    return result;
                  } else {
                    return this;
                  }
                }
                this.o = function(_this) {
                  try {
                    var value = _this.v;
                    if (_this.s & 1) {
                      _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
                    } else if (onRejected) {
                      _settle(result, 1, onRejected(value));
                    } else {
                      _settle(result, 2, value);
                    }
                  } catch (e3) {
                    _settle(result, 2, e3);
                  }
                };
                return result;
              };
              return _Pact2;
            }();
            function _isSettledPact(thenable) {
              return thenable instanceof _Pact && thenable.s & 1;
            }
            function _for(test, update, body) {
              var stage;
              for (; ; ) {
                var shouldContinue = test();
                if (_isSettledPact(shouldContinue)) {
                  shouldContinue = shouldContinue.v;
                }
                if (!shouldContinue) {
                  return result;
                }
                if (shouldContinue.then) {
                  stage = 0;
                  break;
                }
                var result = body();
                if (result && result.then) {
                  if (_isSettledPact(result)) {
                    result = result.s;
                  } else {
                    stage = 1;
                    break;
                  }
                }
                if (update) {
                  var updateValue = update();
                  if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
                    stage = 2;
                    break;
                  }
                }
              }
              var pact = new _Pact();
              var reject = _settle.bind(null, pact, 2);
              (stage === 0 ? shouldContinue.then(_resumeAfterTest) : stage === 1 ? result.then(_resumeAfterBody) : updateValue.then(_resumeAfterUpdate)).then(void 0, reject);
              return pact;
              function _resumeAfterBody(value) {
                result = value;
                do {
                  if (update) {
                    updateValue = update();
                    if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
                      updateValue.then(_resumeAfterUpdate).then(void 0, reject);
                      return;
                    }
                  }
                  shouldContinue = test();
                  if (!shouldContinue || _isSettledPact(shouldContinue) && !shouldContinue.v) {
                    _settle(pact, 1, result);
                    return;
                  }
                  if (shouldContinue.then) {
                    shouldContinue.then(_resumeAfterTest).then(void 0, reject);
                    return;
                  }
                  result = body();
                  if (_isSettledPact(result)) {
                    result = result.v;
                  }
                } while (!result || !result.then);
                result.then(_resumeAfterBody).then(void 0, reject);
              }
              function _resumeAfterTest(shouldContinue2) {
                if (shouldContinue2) {
                  result = body();
                  if (result && result.then) {
                    result.then(_resumeAfterBody).then(void 0, reject);
                  } else {
                    _resumeAfterBody(result);
                  }
                } else {
                  _settle(pact, 1, result);
                }
              }
              function _resumeAfterUpdate() {
                if (shouldContinue = test()) {
                  if (shouldContinue.then) {
                    shouldContinue.then(_resumeAfterTest).then(void 0, reject);
                  } else {
                    _resumeAfterTest(shouldContinue);
                  }
                } else {
                  _settle(pact, 1, result);
                }
              }
            }
            function _continue(value, then) {
              return value && value.then ? value.then(then) : then(value);
            }
            function _async(f3) {
              return function() {
                for (var args = [], i3 = 0; i3 < arguments.length; i3++) {
                  args[i3] = arguments[i3];
                }
                try {
                  return Promise.resolve(f3.apply(this, args));
                } catch (e3) {
                  return Promise.reject(e3);
                }
              };
            }
            function Mutex() {
              var mutex;
              var resolver;
              var safe = function safe2(callback) {
                return _call(acquire, function() {
                  return _finallyRethrows(callback, function(_wasThrown, _result) {
                    release();
                    return _rethrow(_wasThrown, _result);
                  });
                });
              };
              var acquire = _async(function() {
                return _continue(_for(function() {
                  return mutex !== void 0;
                }, void 0, function() {
                  return _awaitIgnored(mutex);
                }), function() {
                  mutex = new Promise(function(resolve) {
                    resolver = resolve;
                  });
                });
              });
              var release = function release2() {
                if (resolver === void 0) {
                  throw new Error("Unable to release mutex: already released.");
                }
                resolver();
                resolver = void 0;
                mutex = void 0;
              };
              return {
                safe
              };
            }
            ;
            var external_progress_smoother_namespaceObject = require_main2();
            ;
            ;
            function _typeof(obj) {
              "@babel/helpers - typeof";
              return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                return typeof obj2;
              } : function(obj2) {
                return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
              }, _typeof(obj);
            }
            function _defineProperties(target, props) {
              for (var i3 = 0; i3 < props.length; i3++) {
                var descriptor = props[i3];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps)
                _defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                _defineProperties(Constructor, staticProps);
              Object.defineProperty(Constructor, "prototype", { writable: false });
              return Constructor;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
              Object.defineProperty(subClass, "prototype", { writable: false });
              if (superClass)
                _setPrototypeOf(subClass, superClass);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived), result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              } else if (call !== void 0) {
                throw new TypeError("Derived constructors may only return object or undefined");
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _wrapNativeSuper(Class) {
              var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
              _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
                if (Class2 === null || !_isNativeFunction(Class2))
                  return Class2;
                if (typeof Class2 !== "function") {
                  throw new TypeError("Super expression must either be null or a function");
                }
                if (typeof _cache !== "undefined") {
                  if (_cache.has(Class2))
                    return _cache.get(Class2);
                  _cache.set(Class2, Wrapper);
                }
                function Wrapper() {
                  return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
                }
                Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
                return _setPrototypeOf(Wrapper, Class2);
              };
              return _wrapNativeSuper(Class);
            }
            function _construct(Parent, args, Class) {
              if (_isNativeReflectConstruct()) {
                _construct = Reflect.construct;
              } else {
                _construct = function _construct2(Parent2, args2, Class2) {
                  var a3 = [null];
                  a3.push.apply(a3, args2);
                  var Constructor = Function.bind.apply(Parent2, a3);
                  var instance = new Constructor();
                  if (Class2)
                    _setPrototypeOf(instance, Class2.prototype);
                  return instance;
                };
              }
              return _construct.apply(null, arguments);
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy === "function")
                return true;
              try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                }));
                return true;
              } catch (e3) {
                return false;
              }
            }
            function _isNativeFunction(fn2) {
              return Function.toString.call(fn2).indexOf("[native code]") !== -1;
            }
            function _setPrototypeOf(o4, p3) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o5, p4) {
                o5.__proto__ = p4;
                return o5;
              };
              return _setPrototypeOf(o4, p3);
            }
            function _getPrototypeOf(o4) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o5) {
                return o5.__proto__ || Object.getPrototypeOf(o5);
              };
              return _getPrototypeOf(o4);
            }
            var UploadApiError = function(_Error) {
              _inherits(UploadApiError2, _Error);
              var _super = _createSuper(UploadApiError2);
              function UploadApiError2(response) {
                var _this;
                _classCallCheck(this, UploadApiError2);
                _this = _super.call(this, response.error.message);
                _this.errorCode = response.error.code;
                _this.details = response.error.details;
                return _this;
              }
              return _createClass(UploadApiError2);
            }(_wrapNativeSuper(Error));
            ;
            function Upload_rethrow(thrown, value) {
              if (thrown)
                throw value;
              return value;
            }
            function Upload_finallyRethrows(body, finalizer) {
              try {
                var result = body();
              } catch (e3) {
                return finalizer(true, e3);
              }
              if (result && result.then) {
                return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
              }
              return finalizer(false, result);
            }
            function _continueIgnored(value) {
              if (value && value.then) {
                return value.then(Upload_empty);
              }
            }
            function _toConsumableArray(arr) {
              return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
            }
            function _nonIterableSpread() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function _unsupportedIterableToArray(o4, minLen) {
              if (!o4)
                return;
              if (typeof o4 === "string")
                return _arrayLikeToArray(o4, minLen);
              var n2 = Object.prototype.toString.call(o4).slice(8, -1);
              if (n2 === "Object" && o4.constructor)
                n2 = o4.constructor.name;
              if (n2 === "Map" || n2 === "Set")
                return Array.from(o4);
              if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
                return _arrayLikeToArray(o4, minLen);
            }
            function _iterableToArray(iter) {
              if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
                return Array.from(iter);
            }
            function _arrayWithoutHoles(arr) {
              if (Array.isArray(arr))
                return _arrayLikeToArray(arr);
            }
            function _arrayLikeToArray(arr, len) {
              if (len == null || len > arr.length)
                len = arr.length;
              for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
                arr2[i3] = arr[i3];
              }
              return arr2;
            }
            function Upload_empty() {
            }
            var accountIdLength = 7;
            function Upload_awaitIgnored(value, direct) {
              if (!direct) {
                return value && value.then ? value.then(Upload_empty) : Promise.resolve();
              }
            }
            var specialApiKeyAccountId = "W142hJk";
            function Upload_async(f3) {
              return function() {
                for (var args = [], i3 = 0; i3 < arguments.length; i3++) {
                  args[i3] = arguments[i3];
                }
                try {
                  return Promise.resolve(f3.apply(this, args));
                } catch (e3) {
                  return Promise.reject(e3);
                }
              };
            }
            var specialApiKeys = ["free", "demo"];
            function _await(value, then, direct) {
              if (direct) {
                return then ? then(value) : value;
              }
              if (!value || !value.then) {
                value = Promise.resolve(value);
              }
              return then ? value.then(then) : value;
            }
            var apiKeyPrefix = "public_";
            function Upload_call(body, then, direct) {
              if (direct) {
                return then ? then(body()) : body();
              }
              try {
                var result = Promise.resolve(body());
                return then ? result.then(then) : result;
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
            var maxUploadConcurrency = 5;
            function _callIgnored(body, direct) {
              return Upload_call(body, Upload_empty, direct);
            }
            var refreshBeforeExpirySeconds = 20;
            function _catch(body, recover) {
              try {
                var result = body();
              } catch (e3) {
                return recover(e3);
              }
              if (result && result.then) {
                return result.then(void 0, recover);
              }
              return result;
            }
            var onProgressInterval = 100;
            function _invokeIgnored(body) {
              var result = body();
              if (result && result.then) {
                return result.then(Upload_empty);
              }
            }
            var retryAuthAfterErrorSeconds = 5;
            var minJwtTtlSeconds = 10;
            var maxJwtTtlSeconds = 2147483;
            var accessTokenPathBase = "/api/v1/access_tokens/";
            var logPrefix = "[upload-js] ";
            function Upload(config) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j;
              var accountId;
              var authMutex = Mutex();
              var apiUrl = (_b = (_a = config.internal) === null || _a === void 0 ? void 0 : _a.apiUrl) !== null && _b !== void 0 ? _b : "https://api.bytescale.com";
              var cdnUrl = (_d = (_c = config.internal) === null || _c === void 0 ? void 0 : _c.cdnUrl) !== null && _d !== void 0 ? _d : "https://upcdn.io";
              var authenticateWithApiKey = (_f = (_e = config.internal) === null || _e === void 0 ? void 0 : _e.authenticateWithApiKey) !== null && _f !== void 0 ? _f : true;
              var headers = (_g = config.internal) === null || _g === void 0 ? void 0 : _g.headers;
              var debugMode = config.debug === true;
              var wasCalled = " was called.";
              var lastAuthSession;
              if ((config !== null && config !== void 0 ? config : void 0) === void 0) {
                throw new Error("".concat(logPrefix, "Config parameter required."));
              }
              if (config.debug === true) {
                console.log("".concat(logPrefix, "Initialized with API key '").concat(config.apiKey, "'"));
              }
              if (((_h = config.apiKey) !== null && _h !== void 0 ? _h : void 0) === void 0) {
                throw new Error("".concat(logPrefix, "Please provide an API key via the 'apiKey' config parameter."));
              }
              if (config.apiKey.trim() !== config.apiKey) {
                throw new Error("".concat(logPrefix, "API key needs trimming (whitespace detected)."));
              }
              if (((_j = config.internal) === null || _j === void 0 ? void 0 : _j.authenticateWithApiKey) === false) {
                accountId = config.internal.accountId;
              } else {
                if (specialApiKeys.includes(config.apiKey)) {
                  accountId = specialApiKeyAccountId;
                } else {
                  if (!config.apiKey.startsWith(apiKeyPrefix)) {
                    throw new Error("".concat(logPrefix, 'API key must begin with "').concat(apiKeyPrefix, '".'));
                  }
                  accountId = config.apiKey.substr(apiKeyPrefix.length, accountIdLength);
                  if (accountId.length !== accountIdLength) {
                    throw new Error("".concat(logPrefix, "API key is too short!"));
                  }
                }
              }
              var accessTokenUrl = "".concat(cdnUrl).concat(accessTokenPathBase).concat(accountId);
              var beginAuthSession = Upload_async(function(authUrl, authHeaders) {
                return Upload_awaitIgnored(callAuthMethod(Upload_async(function(x4) {
                  return x4.beginAuthSession(authUrl, authHeaders);
                }), Upload_async(function() {
                  debug("'beginAuthSession'".concat(wasCalled));
                  if ((lastAuthSession === null || lastAuthSession === void 0 ? void 0 : lastAuthSession.authUrl) === authUrl) {
                    error("'beginAuthSession' already called. Ignoring this call. Hint: call 'endAuthSession' and then 'beginAuthSession' if you want to restart the auth session.");
                    return;
                  }
                  return Upload_call(doEndAuthSession, function() {
                    var authSession = {
                      accessToken: void 0,
                      accessTokenRefreshHandle: void 0,
                      isActive: true,
                      authUrl
                    };
                    lastAuthSession = authSession;
                    return Upload_awaitIgnored(refreshAccessToken(authUrl, authHeaders, authSession));
                  });
                })));
              });
              var endAuthSession = Upload_async(function() {
                return Upload_awaitIgnored(callAuthMethod(Upload_async(function(x4) {
                  return x4.endAuthSession();
                }), Upload_async(function() {
                  debug("'endAuthSession'".concat(wasCalled));
                  return _callIgnored(doEndAuthSession);
                })));
              });
              var uploadFile = Upload_async(function(file) {
                var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                debug("'uploadFile'".concat(wasCalled));
                var cancellationHandlers = [];
                var addCancellationHandler = function addCancellationHandler2(ca) {
                  cancellationHandlers.push(ca);
                };
                var cancel = function cancel2() {
                  return cancellationHandlers.forEach(function(x4) {
                    return x4();
                  });
                };
                if (params.onBegin !== void 0) {
                  params.onBegin({
                    cancel
                  });
                }
                return _catch(function() {
                  return _await(beginFileUpload(file, params, addCancellationHandler));
                }, function(e3) {
                  cancel();
                  throw e3;
                });
              });
              var url = function url2(filePath, transformationOrParams) {
                var _a2;
                var defaultSlug = "raw";
                var params = typeof transformationOrParams === "string" ? {
                  transformation: transformationOrParams
                } : transformationOrParams;
                return "".concat(cdnUrl, "/").concat(accountId, "/").concat((_a2 = params === null || params === void 0 ? void 0 : params.transformation) !== null && _a2 !== void 0 ? _a2 : defaultSlug).concat(filePath).concat((params === null || params === void 0 ? void 0 : params.auth) === true ? "?_auth=true" : "");
              };
              var self = {
                beginAuthSession,
                endAuthSession,
                uploadFile,
                url
              };
              var doEndAuthSession = Upload_async(function() {
                return Upload_awaitIgnored(authMutex.safe(Upload_async(function() {
                  if (lastAuthSession === void 0) {
                    return;
                  }
                  var authSession = lastAuthSession;
                  lastAuthSession = void 0;
                  if (authSession.accessTokenRefreshHandle !== void 0) {
                    clearTimeout(authSession.accessTokenRefreshHandle);
                  }
                  authSession.isActive = false;
                  return _callIgnored(deleteAccessToken);
                })));
              });
              var beginFileUpload = Upload_async(function(file, params, addCancellationHandler) {
                var progressSmoother = (0, external_progress_smoother_namespaceObject.ProgressSmoother)({
                  maxValue: file.size,
                  teardownTime: 1e3,
                  minDelayUntilFirstValue: 2e3,
                  valueIncreaseDelta: 200 * 1024,
                  valueIncreaseRatePerSecond: 50 * 1024,
                  averageTimeBetweenValues: 1e3
                  // When running, XHR should (hopefully) report at least every second, regardless of connection speed.
                });
                var reportProgress = function reportProgress2(stopReportingProgress) {
                  if (params.onProgress === void 0) {
                    stopReportingProgress();
                  } else {
                    var bytesSent = progressSmoother.smoothedValue();
                    var bytesTotal = file.size;
                    if (bytesSent === bytesTotal) {
                      stopReportingProgress();
                    }
                    params.onProgress({
                      bytesSent,
                      bytesTotal,
                      progress: Math.round(bytesSent / bytesTotal * 100)
                    });
                  }
                };
                return withProgressReporting(onProgressInterval, reportProgress, Upload_async(function() {
                  var uploadRequest = {
                    path: params.path,
                    metadata: params.metadata,
                    mime: normalizeMimeType(file.type),
                    originalFileName: file.name,
                    protocol: "1.1",
                    size: file.size,
                    tags: params.tags
                  };
                  debug("Initiating file upload. Params = ".concat(JSON.stringify(uploadRequest)));
                  return _await((0, upload_api_client_upload_js_namespaceObject.beginMultipartUpload)(getConfig(), accountId, uploadRequest), function(_beginMultipartUpload) {
                    var uploadMetadata = handleApiResult(_beginMultipartUpload);
                    debug("Initiated file upload. Metadata = ".concat(JSON.stringify(uploadMetadata)));
                    var incUploadIndex = function() {
                      var lastUploadIndex = 0;
                      return function() {
                        if (lastUploadIndex === uploadMetadata.uploadParts.count - 1) {
                          return void 0;
                        }
                        return ++lastUploadIndex;
                      };
                    }();
                    var nextPartQueue = [uploadMetadata.uploadParts.first];
                    var getNextPart = Upload_async(function(workerIndex) {
                      var nextPart = nextPartQueue.pop();
                      if (nextPart !== void 0) {
                        debug("Dequeued part ".concat(nextPart.uploadPartIndex, "."), workerIndex);
                        return nextPart;
                      }
                      var uploadPartIndex = incUploadIndex();
                      if (uploadPartIndex === void 0) {
                        debug("No parts remaining.", workerIndex);
                        return void 0;
                      }
                      debug("Fetching metadata for part ".concat(uploadPartIndex, "."), workerIndex);
                      return _await((0, upload_api_client_upload_js_namespaceObject.getUploadPart)(getConfig(), accountId, uploadMetadata.uploadId, uploadPartIndex), handleApiResult);
                    });
                    var bytesSentByEachWorker = [];
                    var uploadNextPart = function uploadNextPart2(workerIndex) {
                      return _await(getNextPart(workerIndex), function(nextPart) {
                        return _invokeIgnored(function() {
                          if (nextPart !== void 0) {
                            var lastBytesSent = 0;
                            var progress = function progress2(_ref) {
                              var bytesSent = _ref.bytesSent;
                              if (bytesSentByEachWorker[workerIndex] === void 0) {
                                bytesSentByEachWorker[workerIndex] = bytesSent;
                              } else {
                                bytesSentByEachWorker[workerIndex] -= lastBytesSent;
                                bytesSentByEachWorker[workerIndex] += bytesSent;
                              }
                              lastBytesSent = bytesSent;
                              var totalBytesSent = bytesSentByEachWorker.reduce(function(a3, b3) {
                                return a3 + b3;
                              });
                              progressSmoother.setValue(totalBytesSent);
                            };
                            return _await(uploadPart(file, nextPart, progress, addCancellationHandler, workerIndex), function() {
                              return Upload_awaitIgnored(uploadNextPart2(workerIndex));
                            });
                          }
                        });
                      });
                    };
                    return _await(Promise.all(_toConsumableArray(Array(maxUploadConcurrency).keys()).map(function(workerIndex) {
                      return _await(uploadNextPart(workerIndex));
                    })), function() {
                      var uploadedFile = Object.assign({
                        accountId,
                        file
                      }, uploadMetadata.file);
                      debug("File upload completed.");
                      return uploadedFile;
                    });
                  });
                }));
              });
              var putUploadPart = Upload_async(function(url2, content, progress, addCancellationHandler) {
                var xhr = new XMLHttpRequest();
                var pending = true;
                addCancellationHandler(function() {
                  if (pending) {
                    xhr.abort();
                  }
                });
                return Upload_finallyRethrows(function() {
                  return _await(new Promise(function(resolve, reject) {
                    xhr.upload.addEventListener("progress", function(evt) {
                      if (evt.lengthComputable) {
                        progress({
                          bytesSent: evt.loaded,
                          bytesTotal: evt.total
                        });
                      }
                    }, false);
                    xhr.addEventListener("load", function() {
                      progress({
                        bytesSent: content.size,
                        bytesTotal: content.size
                      });
                      if (Math.floor(xhr.status / 100) === 2) {
                        var etag = xhr.getResponseHeader("etag");
                        if (etag === null || etag === void 0) {
                          reject(new Error("File upload error: no etag header in upload response."));
                        } else {
                          resolve({
                            etag
                          });
                        }
                      } else {
                        reject(new Error("File upload error: status code ".concat(xhr.status)));
                      }
                    });
                    xhr.onabort = function() {
                      return reject(new Error("File upload cancelled."));
                    };
                    xhr.onerror = function() {
                      return reject(new Error("File upload error."));
                    };
                    xhr.ontimeout = function() {
                      return reject(new Error("File upload timeout."));
                    };
                    xhr.open("PUT", url2);
                    xhr.send(content);
                  }));
                }, function(_wasThrown, _result) {
                  pending = false;
                  return Upload_rethrow(_wasThrown, _result);
                });
              });
              var uploadPart = Upload_async(function(file, part, progress, addCancellationHandler, workerIndex) {
                var content = part.range.inclusiveEnd === -1 ? new Blob() : file.slice(part.range.inclusiveStart, part.range.inclusiveEnd + 1);
                debug("Uploading part ".concat(part.uploadPartIndex, "."), workerIndex);
                return _await(putUploadPart(part.uploadUrl, content, progress, addCancellationHandler), function(_ref2) {
                  var etag = _ref2.etag;
                  return _await((0, upload_api_client_upload_js_namespaceObject.completeUploadPart)(getConfig(), accountId, part.uploadId, part.uploadPartIndex, {
                    etag
                  }), function(_completeUploadPart) {
                    handleApiResult(_completeUploadPart);
                    debug("Uploaded part ".concat(part.uploadPartIndex, "."), workerIndex);
                  });
                });
              });
              var withProgressReporting = Upload_async(function(tickInterval, tick, scope) {
                var whileReportingResolved;
                var whileReporting = new Promise(function(resolve) {
                  whileReportingResolved = resolve;
                });
                var isReporting = true;
                var stopReporting = function stopReporting2() {
                  if (isReporting) {
                    whileReportingResolved();
                    clearInterval(intervalHandle);
                    isReporting = false;
                  }
                };
                var intervalHandle = setInterval(function() {
                  return tick(stopReporting);
                }, tickInterval);
                return Upload_finallyRethrows(function() {
                  return Upload_call(scope, function(result) {
                    return _await(whileReporting, function() {
                      return result;
                    });
                  });
                }, function(_wasThrown2, _result2) {
                  stopReporting();
                  return Upload_rethrow(_wasThrown2, _result2);
                });
              });
              var deleteAccessToken = Upload_async(function() {
                return Upload_awaitIgnored(deleteNoResponse(
                  accessTokenUrl,
                  {},
                  true
                  // Required, else CDN response's `Set-Cookie` header will be silently ignored.
                ));
              });
              var callAuthMethod = Upload_async(function(other, me) {
                var authInstance = getAuthInstance();
                return _invokeIgnored(function() {
                  if (authInstance !== self) {
                    return Upload_awaitIgnored(other(authInstance));
                  } else {
                    return _callIgnored(me);
                  }
                });
              });
              var getAuthInstance = function getAuthInstance2() {
                var globalKey = "uploadJsAuthInstance";
                var globalAuthInstance = window[globalKey];
                if (globalAuthInstance === void 0) {
                  globalAuthInstance = self;
                  window[globalKey] = self;
                }
                return globalAuthInstance;
              };
              var refreshAccessToken = Upload_async(function(authUrl, authHeaders, authSession) {
                return _continueIgnored(_catch(function() {
                  return Upload_awaitIgnored(authMutex.safe(Upload_async(function() {
                    if (!authSession.isActive) {
                      return;
                    }
                    return Upload_call(authHeaders, function(_authHeaders) {
                      return _await(getAccessToken(authUrl, _authHeaders), function(token) {
                        return _await(putJsonGetJson(
                          accessTokenUrl,
                          {},
                          {
                            accessToken: token
                          },
                          true
                          // Required, else CDN response's `Set-Cookie` header will be silently ignored.
                        ), function(setTokenResult) {
                          var desiredTtlSeconds = setTokenResult.ttlSeconds - refreshBeforeExpirySeconds;
                          if (desiredTtlSeconds < minJwtTtlSeconds) {
                            warn("JWT expiration is too short: waiting for ".concat(minJwtTtlSeconds, " seconds before refreshing."));
                          }
                          authSession.accessToken = setTokenResult.accessToken;
                          authSession.accessTokenRefreshHandle = window.setTimeout(function() {
                            refreshAccessToken(authUrl, authHeaders, authSession).then(function() {
                            }, function(e3) {
                              return error("Permanent error when refreshing access token: ".concat(e3));
                            });
                          }, Math.min(maxJwtTtlSeconds, Math.max(minJwtTtlSeconds, desiredTtlSeconds)) * 1e3);
                        });
                      });
                    });
                  })));
                }, function(e3) {
                  error("Error when refreshing access token: ".concat(e3));
                  return _await(new Promise(function(resolve) {
                    return setTimeout(resolve, retryAuthAfterErrorSeconds * 1e3);
                  }), function() {
                    return Upload_awaitIgnored(refreshAccessToken(authUrl, authHeaders, authSession));
                  });
                }));
              });
              var putJsonGetJson = Upload_async(function(url2, headers2, requestBody, withCredentials) {
                return _await(nonUploadApiRequest({
                  method: "PUT",
                  path: url2,
                  headers: headers2,
                  body: requestBody
                }, withCredentials), function(_nonUploadApiRequest) {
                  return _await(handleApiResult(_nonUploadApiRequest));
                });
              });
              var getAccessToken = Upload_async(function(authUrl, headers2) {
                var endpointName = "Your auth API endpoint";
                return _await(nonUploadApiRequest({
                  method: "GET",
                  path: authUrl,
                  headers: headers2
                }, false), function(result) {
                  if (!result.ok) {
                    throw new Error("".concat(logPrefix).concat(endpointName, " returned a failed response. Please ensure the endpoint's status code is 200."));
                  }
                  var jwt = result.body;
                  if (typeof jwt !== "string") {
                    throw new Error("".concat(logPrefix).concat(endpointName, " returned an unsupported response. Please ensure: 1) 'Content-Type: text/plain' is in the HTTP response headers 2) the status code is 200."));
                  }
                  if (jwt.length === 0) {
                    throw new Error("".concat(logPrefix).concat(endpointName, " returned an empty string. Please return a valid JWT instead."));
                  }
                  if (jwt.trim().length !== jwt.length) {
                    throw new Error("".concat(logPrefix).concat(endpointName, " returned whitespace around the JWT, please remove it."));
                  }
                  return jwt;
                });
              });
              var deleteNoResponse = Upload_async(function(url2, headers2, withCredentials) {
                return _await(nonUploadApiRequest({
                  method: "DELETE",
                  path: url2,
                  headers: headers2
                }, withCredentials), function(_nonUploadApiRequest2) {
                  handleApiResult(_nonUploadApiRequest2);
                });
              });
              var handleApiResult = function handleApiResult2(result) {
                var _a2;
                if (result.ok) {
                  return result.body;
                }
                var errorResponseMaybe = result.body;
                if (typeof ((_a2 = errorResponseMaybe === null || errorResponseMaybe === void 0 ? void 0 : errorResponseMaybe.error) === null || _a2 === void 0 ? void 0 : _a2.code) === "string") {
                  throw new UploadApiError(errorResponseMaybe);
                }
                throw new Error("".concat(logPrefix, "Network error. If problem persists, and your network connectivity is healthy, please contact support@bytescale.com and provide: (a) time of failed request in UTC (b) screenshot of failed network response body (c) screenshot of failed network response header (d) browser + version."));
              };
              var nonUploadApiRequest = Upload_async(function(options, withCredentials) {
                return (0, upload_api_client_upload_js_namespaceObject.request)({
                  BASE: options.path,
                  WITH_CREDENTIALS: withCredentials
                }, Object.assign(Object.assign({}, options), {
                  path: ""
                  // We set to "" because we're using "BASE" above instead.
                }));
              });
              var getConfig = function getConfig2() {
                var apiConfig = {
                  BASE: apiUrl,
                  WITH_CREDENTIALS: true
                };
                if (authenticateWithApiKey) {
                  apiConfig.USERNAME = "apikey";
                  apiConfig.PASSWORD = config.apiKey;
                }
                var accessToken = lastAuthSession === null || lastAuthSession === void 0 ? void 0 : lastAuthSession.accessToken;
                if (headers !== void 0 || accessToken !== void 0) {
                  apiConfig.HEADERS = Upload_async(function() {
                    return _await(headers === void 0 ? {} : headers(), function(headersFromConfig) {
                      var accessToken2 = lastAuthSession === null || lastAuthSession === void 0 ? void 0 : lastAuthSession.accessToken;
                      return Object.assign(Object.assign({}, headersFromConfig), accessToken2 === void 0 ? {} : {
                        "authorization-token": accessToken2
                      });
                    }, headers === void 0);
                  });
                }
                return apiConfig;
              };
              var normalizeMimeType = function normalizeMimeType2(mime) {
                var normal = mime.toLowerCase();
                var regex = /^[a-z0-9]+\/[a-z0-9+\-._]+(?:;[^=]+=[^;]+)*$/;
                return regex.test(normal) ? normal : void 0;
              };
              var debug = function debug2(message, workerIndex) {
                if (debugMode) {
                  console.log("".concat(logPrefix).concat(message).concat(workerIndex !== void 0 ? " (Worker ".concat(workerIndex, ")") : ""));
                }
              };
              var error = function error2(message) {
                console.error("".concat(logPrefix).concat(message));
              };
              var warn = function warn2(message) {
                console.warn("".concat(logPrefix).concat(message));
              };
              return self;
            }
            ;
          }
        )
        /******/
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) {
          return __webpack_module_cache__[moduleId].exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      !function() {
        __webpack_require__.d = function(exports2, definition) {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      }();
      !function() {
        __webpack_require__.o = function(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
      }();
      !function() {
        __webpack_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
      }();
      return __webpack_require__("./src/index.ts");
    }();
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames() {
        var classes = [];
        for (var i3 = 0; i3 < arguments.length; i3++) {
          var arg = arguments[i3];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/preact/hooks/dist/hooks.module.js
function d2(t3, u3) {
  l.__h && l.__h(r2, t3, o3 || u3), o3 = 0;
  var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
  return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
}
function h2(n2) {
  return o3 = 1, s2(B2, n2);
}
function s2(n2, u3, i3) {
  var o4 = d2(t2++, 2);
  if (o4.t = n2, !o4.__c && (o4.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
    var t3 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t3, n3);
    t3 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
  }], o4.__c = r2, !r2.u)) {
    var f3 = function(n3, t3, r3) {
      if (!o4.__c.__H)
        return true;
      var u4 = o4.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u4.every(function(n4) {
        return !n4.__N;
      }))
        return !c3 || c3.call(this, n3, t3, r3);
      var i4 = false;
      return u4.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), !(!i4 && o4.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
    };
    r2.u = true;
    var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n3, t3, r3) {
      if (this.__e) {
        var u4 = c3;
        c3 = void 0, f3(n3, t3, r3), c3 = u4;
      }
      e3 && e3.call(this, n3, t3, r3);
    }, r2.shouldComponentUpdate = f3;
  }
  return o4.__N || o4.__;
}
function p2(u3, i3) {
  var o4 = d2(t2++, 3);
  !l.__s && z2(o4.__H, i3) && (o4.__ = u3, o4.i = i3, r2.__H.__h.push(o4));
}
function y2(u3, i3) {
  var o4 = d2(t2++, 4);
  !l.__s && z2(o4.__H, i3) && (o4.__ = u3, o4.i = i3, r2.__h.push(o4));
}
function _3(n2) {
  return o3 = 5, F2(function() {
    return { current: n2 };
  }, []);
}
function A2(n2, t3, r3) {
  o3 = 6, y2(function() {
    return "function" == typeof n2 ? (n2(t3()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t3(), function() {
      return n2.current = null;
    }) : void 0;
  }, null == r3 ? r3 : r3.concat(n2));
}
function F2(n2, r3) {
  var u3 = d2(t2++, 7);
  return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
}
function T2(n2, t3) {
  return o3 = 8, F2(function() {
    return n2;
  }, t3);
}
function q2(n2) {
  var u3 = r2.context[n2.__c], i3 = d2(t2++, 9);
  return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
}
function x2(t3, r3) {
  l.useDebugValue && l.useDebugValue(r3 ? r3(t3) : t3);
}
function P2(n2) {
  var u3 = d2(t2++, 10), i3 = h2();
  return u3.__ = n2, r2.componentDidCatch || (r2.componentDidCatch = function(n3, t3) {
    u3.__ && u3.__(n3, t3), i3[1](n3);
  }), [i3[0], function() {
    i3[1](void 0);
  }];
}
function V() {
  var n2 = d2(t2++, 11);
  if (!n2.__) {
    for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; )
      u3 = u3.__;
    var i3 = u3.__m || (u3.__m = [0, 0]);
    n2.__ = "P" + i3[0] + "-" + i3[1]++;
  }
  return n2.__;
}
function b2() {
  for (var t3; t3 = f2.shift(); )
    if (t3.__P && t3.__H)
      try {
        t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
      } catch (r3) {
        t3.__H.__h = [], l.__e(r3, t3.__v);
      }
}
function j2(n2) {
  var t3, r3 = function() {
    clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r3, 100);
  g2 && (t3 = requestAnimationFrame(r3));
}
function k2(n2) {
  var t3 = r2, u3 = n2.__c;
  "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
}
function w2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function z2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
function B2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}
var t2, r2, u2, i2, o3, f2, c2, e2, a2, v2, l2, m2, g2;
var init_hooks_module = __esm({
  "node_modules/preact/hooks/dist/hooks.module.js"() {
    init_preact_module();
    o3 = 0;
    f2 = [];
    c2 = [];
    e2 = l.__b;
    a2 = l.__r;
    v2 = l.diffed;
    l2 = l.__c;
    m2 = l.unmount;
    l.__b = function(n2) {
      r2 = null, e2 && e2(n2);
    }, l.__r = function(n2) {
      a2 && a2(n2), t2 = 0;
      var i3 = (r2 = n2.__c).__H;
      i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
        n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
      })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [], t2 = 0)), u2 = r2;
    }, l.diffed = function(t3) {
      v2 && v2(t3);
      var o4 = t3.__c;
      o4 && o4.__H && (o4.__H.__h.length && (1 !== f2.push(o4) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o4.__H.__.forEach(function(n2) {
        n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
      })), u2 = r2 = null;
    }, l.__c = function(t3, r3) {
      r3.some(function(t4) {
        try {
          t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
            return !n2.__ || w2(n2);
          });
        } catch (u3) {
          r3.some(function(n2) {
            n2.__h && (n2.__h = []);
          }), r3 = [], l.__e(u3, t4.__v);
        }
      }), l2 && l2(t3, r3);
    }, l.unmount = function(t3) {
      m2 && m2(t3);
      var r3, u3 = t3.__c;
      u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
        try {
          k2(n2);
        } catch (n3) {
          r3 = n3;
        }
      }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
    };
    g2 = "function" == typeof requestAnimationFrame;
  }
});

// node_modules/preact/compat/dist/compat.module.js
var compat_module_exports = {};
__export(compat_module_exports, {
  Children: () => O2,
  Component: () => b,
  Fragment: () => k,
  PureComponent: () => w3,
  StrictMode: () => yn,
  Suspense: () => U,
  SuspenseList: () => V2,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ln,
  cloneElement: () => hn,
  createContext: () => G,
  createElement: () => y,
  createFactory: () => fn,
  createPortal: () => z3,
  createRef: () => _,
  default: () => wn,
  findDOMNode: () => dn,
  flushSync: () => mn,
  forwardRef: () => k3,
  hydrate: () => J,
  isElement: () => Cn,
  isFragment: () => sn,
  isValidElement: () => an,
  lazy: () => M2,
  memo: () => x3,
  render: () => G2,
  startTransition: () => _n,
  unmountComponentAtNode: () => vn,
  unstable_batchedUpdates: () => pn,
  useCallback: () => T2,
  useContext: () => q2,
  useDebugValue: () => x2,
  useDeferredValue: () => bn,
  useEffect: () => p2,
  useErrorBoundary: () => P2,
  useId: () => V,
  useImperativeHandle: () => A2,
  useInsertionEffect: () => gn,
  useLayoutEffect: () => y2,
  useMemo: () => F2,
  useReducer: () => s2,
  useRef: () => _3,
  useState: () => h2,
  useSyncExternalStore: () => En,
  useTransition: () => Sn,
  version: () => cn
});
function g3(n2, t3) {
  for (var e3 in t3)
    n2[e3] = t3[e3];
  return n2;
}
function C2(n2, t3) {
  for (var e3 in n2)
    if ("__source" !== e3 && !(e3 in t3))
      return true;
  for (var r3 in t3)
    if ("__source" !== r3 && n2[r3] !== t3[r3])
      return true;
  return false;
}
function E2(n2, t3) {
  return n2 === t3 && (0 !== n2 || 1 / n2 == 1 / t3) || n2 != n2 && t3 != t3;
}
function w3(n2) {
  this.props = n2;
}
function x3(n2, e3) {
  function r3(n3) {
    var t3 = this.props.ref, r4 = t3 == n3.ref;
    return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r4 : C2(this.props, n3);
  }
  function u3(e4) {
    return this.shouldComponentUpdate = r3, y(n2, e4);
  }
  return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3;
}
function k3(n2) {
  function t3(t4) {
    var e3 = g3({}, t4);
    return delete e3.ref, n2(e3, t4.ref || null);
  }
  return t3.$$typeof = N2, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
}
function I2(n2, t3, e3) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return I2(n3, t3, e3);
  })), n2;
}
function L2(n2, t3, e3) {
  return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return L2(n3, t3, e3);
  }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
}
function U() {
  this.__u = 0, this.t = null, this.__b = null;
}
function D2(n2) {
  var t3 = n2.__.__c;
  return t3 && t3.__a && t3.__a(n2);
}
function M2(n2) {
  var e3, r3, u3;
  function o4(o5) {
    if (e3 || (e3 = n2()).then(function(n3) {
      r3 = n3.default || n3;
    }, function(n3) {
      u3 = n3;
    }), u3)
      throw u3;
    if (!r3)
      throw e3;
    return y(r3, o5);
  }
  return o4.displayName = "Lazy", o4.__f = true, o4;
}
function V2() {
  this.u = null, this.o = null;
}
function P3(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function j3(n2) {
  var e3 = this, r3 = n2.i;
  e3.componentWillUnmount = function() {
    B(null, e3.l), e3.l = null, e3.i = null;
  }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), e3.i.appendChild(n3);
  }, insertBefore: function(n3, t3) {
    this.childNodes.push(n3), e3.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
  } }), B(y(P3, { context: e3.context }, n2.__v), e3.l);
}
function z3(n2, e3) {
  var r3 = y(j3, { __v: n2, i: e3 });
  return r3.containerInfo = e3, r3;
}
function G2(n2, t3, e3) {
  return null == t3.__k && (t3.textContent = ""), B(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
}
function J(n2, t3, e3) {
  return E(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
}
function Q() {
}
function X() {
  return this.cancelBubble;
}
function nn() {
  return this.defaultPrevented;
}
function fn(n2) {
  return y.bind(null, n2);
}
function an(n2) {
  return !!n2 && n2.$$typeof === B3;
}
function sn(n2) {
  return an(n2) && n2.type === k;
}
function hn(n2) {
  return an(n2) ? F.apply(null, arguments) : n2;
}
function vn(n2) {
  return !!n2.__k && (B(null, n2), true);
}
function dn(n2) {
  return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
}
function _n(n2) {
  n2();
}
function bn(n2) {
  return n2;
}
function Sn() {
  return [false, _n];
}
function En(n2, t3) {
  var e3 = t3(), r3 = h2({ h: { __: e3, v: t3 } }), u3 = r3[0].h, o4 = r3[1];
  return y2(function() {
    u3.__ = e3, u3.v = t3, E2(u3.__, t3()) || o4({ h: u3 });
  }, [n2, e3, t3]), p2(function() {
    return E2(u3.__, u3.v()) || o4({ h: u3 }), n2(function() {
      E2(u3.__, u3.v()) || o4({ h: u3 });
    });
  }, [n2]), e3;
}
var R, N2, A3, O2, T3, F3, W, B3, H2, Z, Y, $2, q3, K, tn, en, rn, un, on, ln, cn, pn, mn, yn, gn, Cn, wn;
var init_compat_module = __esm({
  "node_modules/preact/compat/dist/compat.module.js"() {
    init_preact_module();
    init_preact_module();
    init_hooks_module();
    init_hooks_module();
    (w3.prototype = new b()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
      return C2(this.props, n2) || C2(this.state, t3);
    };
    R = l.__b;
    l.__b = function(n2) {
      n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
    };
    N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    A3 = function(n2, t3) {
      return null == n2 ? null : C(C(n2).map(t3));
    };
    O2 = { map: A3, forEach: A3, count: function(n2) {
      return n2 ? C(n2).length : 0;
    }, only: function(n2) {
      var t3 = C(n2);
      if (1 !== t3.length)
        throw "Children.only";
      return t3[0];
    }, toArray: C };
    T3 = l.__e;
    l.__e = function(n2, t3, e3, r3) {
      if (n2.then) {
        for (var u3, o4 = t3; o4 = o4.__; )
          if ((u3 = o4.__c) && u3.__c)
            return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
      }
      T3(n2, t3, e3, r3);
    };
    F3 = l.unmount;
    l.unmount = function(n2) {
      var t3 = n2.__c;
      t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), F3 && F3(n2);
    }, (U.prototype = new b()).__c = function(n2, t3) {
      var e3 = t3.__c, r3 = this;
      null == r3.t && (r3.t = []), r3.t.push(e3);
      var u3 = D2(r3.__v), o4 = false, i3 = function() {
        o4 || (o4 = true, e3.__R = null, u3 ? u3(l3) : l3());
      };
      e3.__R = i3;
      var l3 = function() {
        if (!--r3.__u) {
          if (r3.state.__a) {
            var n3 = r3.state.__a;
            r3.__v.__k[0] = L2(n3, n3.__c.__P, n3.__c.__O);
          }
          var t4;
          for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
            t4.forceUpdate();
        }
      }, c3 = true === t3.__h;
      r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
    }, U.prototype.componentWillUnmount = function() {
      this.t = [];
    }, U.prototype.render = function(n2, e3) {
      if (this.__b) {
        if (this.__v.__k) {
          var r3 = document.createElement("div"), o4 = this.__v.__k[0].__c;
          this.__v.__k[0] = I2(this.__b, r3, o4.__O = o4.__P);
        }
        this.__b = null;
      }
      var i3 = e3.__a && y(k, null, n2.fallback);
      return i3 && (i3.__h = null), [y(k, null, e3.__a ? null : n2.children), i3];
    };
    W = function(n2, t3, e3) {
      if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
        for (e3 = n2.u; e3; ) {
          for (; e3.length > 3; )
            e3.pop()();
          if (e3[1] < e3[0])
            break;
          n2.u = e3 = e3[2];
        }
    };
    (V2.prototype = new b()).__a = function(n2) {
      var t3 = this, e3 = D2(t3.__v), r3 = t3.o.get(n2);
      return r3[0]++, function(u3) {
        var o4 = function() {
          t3.props.revealOrder ? (r3.push(u3), W(t3, n2, r3)) : u3();
        };
        e3 ? e3(o4) : o4();
      };
    }, V2.prototype.render = function(n2) {
      this.u = null, this.o = /* @__PURE__ */ new Map();
      var t3 = C(n2.children);
      n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
      for (var e3 = t3.length; e3--; )
        this.o.set(t3[e3], this.u = [1, 0, this.u]);
      return n2.children;
    }, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
      var n2 = this;
      this.o.forEach(function(t3, e3) {
        W(n2, e3, t3);
      });
    };
    B3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
    Y = /[A-Z0-9]/g;
    $2 = "undefined" != typeof document;
    q3 = function(n2) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
    };
    b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
      Object.defineProperty(b.prototype, t3, { configurable: true, get: function() {
        return this["UNSAFE_" + t3];
      }, set: function(n2) {
        Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
      } });
    });
    K = l.event;
    l.event = function(n2) {
      return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
    };
    en = { enumerable: false, configurable: true, get: function() {
      return this.class;
    } };
    rn = l.vnode;
    l.vnode = function(n2) {
      "string" == typeof n2.type && function(n3) {
        var t3 = n3.props, e3 = n3.type, u3 = {};
        for (var o4 in t3) {
          var i3 = t3[o4];
          if (!("value" === o4 && "defaultValue" in t3 && null == i3 || $2 && "children" === o4 && "noscript" === e3 || "class" === o4 || "className" === o4)) {
            var l3 = o4.toLowerCase();
            "defaultValue" === o4 && "value" in t3 && null == t3.value ? o4 = "value" : "download" === o4 && true === i3 ? i3 = "" : "ondoubleclick" === l3 ? o4 = "ondblclick" : "onchange" !== l3 || "input" !== e3 && "textarea" !== e3 || q3(t3.type) ? "onfocus" === l3 ? o4 = "onfocusin" : "onblur" === l3 ? o4 = "onfocusout" : Z.test(o4) ? o4 = l3 : -1 === e3.indexOf("-") && H2.test(o4) ? o4 = o4.replace(Y, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l3 = o4 = "oninput", "oninput" === l3 && u3[o4 = l3] && (o4 = "oninputCapture"), u3[o4] = i3;
          }
        }
        "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = C(t3.children).forEach(function(n4) {
          n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
        })), "select" == e3 && null != u3.defaultValue && (u3.value = C(t3.children).forEach(function(n4) {
          n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
        })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", en)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
      }(n2), n2.$$typeof = B3, rn && rn(n2);
    };
    un = l.__r;
    l.__r = function(n2) {
      un && un(n2), tn = n2.__c;
    };
    on = l.diffed;
    l.diffed = function(n2) {
      on && on(n2);
      var t3 = n2.props, e3 = n2.__e;
      null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), tn = null;
    };
    ln = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
      return tn.__n[n2.__c].props.value;
    } } } };
    cn = "17.0.2";
    pn = function(n2, t3) {
      return n2(t3);
    };
    mn = function(n2, t3) {
      return n2(t3);
    };
    yn = k;
    gn = y2;
    Cn = an;
    wn = { useState: h2, useId: V, useReducer: s2, useEffect: p2, useLayoutEffect: y2, useInsertionEffect: gn, useTransition: Sn, useDeferredValue: bn, useSyncExternalStore: En, startTransition: _n, useRef: _3, useImperativeHandle: A2, useMemo: F2, useCallback: T2, useContext: q2, useDebugValue: x2, version: "17.0.2", Children: O2, render: G2, hydrate: J, unmountComponentAtNode: vn, createPortal: z3, createElement: y, createContext: G, createFactory: fn, cloneElement: hn, createRef: _, Fragment: k, isValidElement: an, isElement: Cn, isFragment: sn, findDOMNode: dn, Component: b, PureComponent: w3, memo: x3, forwardRef: k3, flushSync: mn, unstable_batchedUpdates: pn, StrictMode: yn, Suspense: U, SuspenseList: V2, lazy: M2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln };
  }
});

// node_modules/uploader/dist/main.js
var require_main4 = __commonJS({
  "node_modules/uploader/dist/main.js"(exports, module) {
    (function() {
      "use strict";
      var __webpack_modules__ = {
        /***/
        "./node_modules/@upload-io/style-loader/dist/runtime/injectStylesIntoStyleTag.js": (
          /***/
          function(module2) {
            var stylesInDOM = [];
            function getIndexByIdentifier(identifier) {
              var result = -1;
              for (var i3 = 0; i3 < stylesInDOM.length; i3++) {
                if (stylesInDOM[i3].identifier === identifier) {
                  result = i3;
                  break;
                }
              }
              return result;
            }
            function modulesToDom(list, options) {
              var idCountMap = {};
              var identifiers = [];
              for (var i3 = 0; i3 < list.length; i3++) {
                var item = list[i3];
                var id = options.base ? item[0] + options.base : item[0];
                var count = idCountMap[id] || 0;
                var identifier = "".concat(id, " ").concat(count);
                idCountMap[id] = count + 1;
                var indexByIdentifier = getIndexByIdentifier(identifier);
                var obj = {
                  css: item[1],
                  media: item[2],
                  sourceMap: item[3],
                  supports: item[4],
                  layer: item[5]
                };
                if (indexByIdentifier !== -1) {
                  stylesInDOM[indexByIdentifier].references++;
                  stylesInDOM[indexByIdentifier].updater(obj);
                } else {
                  var updater = addElementStyle(obj, options);
                  options.byIndex = i3;
                  stylesInDOM.splice(i3, 0, {
                    identifier,
                    updater,
                    references: 1
                  });
                }
                identifiers.push(identifier);
              }
              return identifiers;
            }
            function addElementStyle(obj, options) {
              var api = options.domAPI(options);
              api.update(obj);
              var updater = function updater2(newObj) {
                if (newObj) {
                  if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
                    return;
                  }
                  api.update(obj = newObj);
                } else {
                  api.remove();
                }
              };
              return updater;
            }
            module2.exports = function(list, options) {
              options = options || {};
              list = list || [];
              var lastIdentifiers = modulesToDom(list, options);
              return function update(newList) {
                newList = newList || [];
                for (var i3 = 0; i3 < lastIdentifiers.length; i3++) {
                  var identifier = lastIdentifiers[i3];
                  var index = getIndexByIdentifier(identifier);
                  stylesInDOM[index].references--;
                }
                var newLastIdentifiers = modulesToDom(newList, options);
                for (var _i = 0; _i < lastIdentifiers.length; _i++) {
                  var _identifier = lastIdentifiers[_i];
                  var _index = getIndexByIdentifier(_identifier);
                  if (stylesInDOM[_index].references === 0) {
                    stylesInDOM[_index].updater();
                    stylesInDOM.splice(_index, 1);
                  }
                }
                lastIdentifiers = newLastIdentifiers;
              };
            };
          }
        ),
        /***/
        "./node_modules/@upload-io/style-loader/dist/runtime/insertStyleElement.js": (
          /***/
          function(module2) {
            function insertStyleElement(options) {
              if (typeof document === "undefined") {
                return void 0;
              }
              var element = document.createElement("style");
              options.setAttributes(element, options.attributes);
              options.insert(element, options.options);
              return element;
            }
            module2.exports = insertStyleElement;
          }
        ),
        /***/
        "./node_modules/@upload-io/style-loader/dist/runtime/setAttributesWithoutAttributes.js": (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            function setAttributesWithoutAttributes(styleElement) {
              var nonce = true ? __webpack_require__2.nc : 0;
              if (nonce) {
                styleElement.setAttribute("nonce", nonce);
              }
            }
            module2.exports = setAttributesWithoutAttributes;
          }
        ),
        /***/
        "./node_modules/@upload-io/style-loader/dist/runtime/styleDomAPI.js": (
          /***/
          function(module2) {
            function apply(styleElement, options, obj) {
              var css = "";
              if (obj.supports) {
                css += "@supports (".concat(obj.supports, ") {");
              }
              if (obj.media) {
                css += "@media ".concat(obj.media, " {");
              }
              var needLayer = typeof obj.layer !== "undefined";
              if (needLayer) {
                css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
              }
              css += obj.css;
              if (needLayer) {
                css += "}";
              }
              if (obj.media) {
                css += "}";
              }
              if (obj.supports) {
                css += "}";
              }
              options.styleTagTransform(css, styleElement, options.options);
            }
            function removeStyleElement(styleElement) {
              if (styleElement.parentNode === null) {
                return false;
              }
              styleElement.parentNode.removeChild(styleElement);
            }
            function domAPI(options) {
              var styleElement = options.insertStyleElement(options);
              return {
                update: function update(obj) {
                  apply(styleElement, options, obj);
                },
                remove: function remove() {
                  removeStyleElement(styleElement);
                }
              };
            }
            module2.exports = domAPI;
          }
        ),
        /***/
        "./node_modules/@upload-io/style-loader/dist/runtime/styleTagTransform.js": (
          /***/
          function(module2) {
            function styleTagTransform(css, styleElement) {
              if (styleElement === void 0) {
                return;
              }
              if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = css;
              } else {
                while (styleElement.firstChild) {
                  styleElement.removeChild(styleElement.firstChild);
                }
                styleElement.appendChild(document.createTextNode(css));
              }
            }
            module2.exports = styleTagTransform;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/Modal.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i3) {
              return i3[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, '.uploader__body{overflow:hidden}.uploader--with-modal{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999}.uploader__modal{background:var(--shade-900);border-radius:.5em;z-index:100000;position:relative;overflow:auto;top:-5%;height:60%;width:75%;max-width:65.625em;max-height:41.25em}@media (max-height: 700px){.uploader__modal{top:-1%;height:80%}}@media (max-width: 750px), (max-height: 420px){.uploader__modal{top:0;height:100%;width:100%;max-width:none;max-height:none;border-radius:0}}.uploader__modal__close{position:absolute;right:0;top:0;z-index:2}.uploader__modal__close a{-webkit-transition:0.1s color linear;-o-transition:0.1s color linear;-moz-transition:0.1s color linear;transition:0.1s color linear;color:var(--shade-500);padding:1.125em 1.0625em .8125em .875em;display:inline-block}.uploader__backdrop{content:" ";background:rgba(0,0,0,0.5);position:fixed;left:0;right:0;top:0;bottom:0;z-index:99999}.uploader__modal,.uploader__backdrop{opacity:0;-webkit-transition:0.15s opacity linear;-o-transition:0.15s opacity linear;-moz-transition:0.15s opacity linear;transition:0.15s opacity linear}.uploader__modal.show,.uploader__backdrop.show{opacity:1}\n', ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/UploadWidgetContainer.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i3) {
              return i3[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".uploader{--btn-text-color: var(--shade-200);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-moz-box-sizing:border-box;box-sizing:border-box;color:var(--shade-100);font-family:var(--base-font-family);font-size:var(--base-font-size);line-height:1;text-align:left;position:static}.uploader__root{position:absolute;left:0;right:0;top:0;bottom:0}.uploader a,.uploader p,.uploader button{font-size:inherit;margin:0}.uploader a{border-bottom:none;padding:0}.uploader svg{margin-bottom:0}.uploader__controls{text-align:center;padding:.9375em}.uploader__controls--space button:not(:last-child){margin-right:0.5em}.uploader a{color:var(--primary-color)}.uploader a,.uploader a:hover,.uploader a:active,.uploader a:focus{text-decoration:underline}.uploader a:hover:not(:disabled):not(.disabled){color:var(--primary-active-color)}.uploader .btn{-webkit-transition:0.1s border-color linear, 0.1s background-color linear;-o-transition:0.1s border-color linear, 0.1s background-color linear;-moz-transition:0.1s border-color linear, 0.1s background-color linear;transition:0.1s border-color linear, 0.1s background-color linear;display:inline-block;font-weight:400;color:var(--btn-text-color);text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:rgba(0,0,0,0);border:.0625em solid rgba(0,0,0,0);padding:0 1em;line-height:3;border-radius:0.3125em}.uploader .btn,.uploader .btn:hover,.uploader .btn:active,.uploader .btn:focus{text-decoration:none}.uploader .btn:not(:disabled):not(.disabled){cursor:pointer}.uploader .btn:hover:not(:disabled):not(.disabled){color:var(--shade-300)}.uploader .btn--primary{color:var(--shade-900);background-color:var(--primary-color);border-color:var(--primary-color)}.uploader .btn--primary:hover:not(:disabled):not(.disabled){background-color:var(--primary-active-color);border-color:var(--primary-active-color);color:var(--shade-900)}.uploader .btn--primary-outline{color:var(--primary-color);border-color:var(--primary-color)}.uploader .btn.disabled{opacity:0.5;cursor:default}.uploader .btn--file{position:relative;overflow:hidden;margin-bottom:0}.uploader .btn--file__input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.uploader .btn--upload{font-size:1.11em;padding:0.2em 1.6em;margin-bottom:1.5em}.uploader .text-secondary{color:var(--shade-400)}.uploader .vcenter{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.uploader .hcenter{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploader .nudge-up-1{position:relative;top:-1px}.uploader .ml-0{margin-left:0}.uploader .ml-1{margin-left:.3125em}.uploader .ml-2{margin-left:.4375em}.uploader .ml-3{margin-left:.5em}.uploader .ml-4{margin-left:.625em}.uploader .mr-0{margin-right:0}.uploader .mr-1{margin-right:.3125em}.uploader .mr-2{margin-right:.4375em}.uploader .mr-3{margin-right:.5em}.uploader .mr-4{margin-right:.625em}.uploader .mb-0{margin-bottom:0}.uploader .mb-1{margin-bottom:.3125em}.uploader .mb-2{margin-bottom:.4375em}.uploader .mb-3{margin-bottom:.5em}.uploader .mb-4{margin-bottom:.625em}.uploader .mt-0{margin-top:0}.uploader .mt-1{margin-top:.3125em}.uploader .mt-2{margin-top:.4375em}.uploader .mt-3{margin-top:.5em}.uploader .mt-4{margin-top:.625em}.uploader .mt-5{margin-top:1.25em}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageCropper.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i3) {
              return i3[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, '.uploader__image-cropper__overlay{position:absolute;background:rgba(255,255,255,0.5)}.uploader__image-cropper__clip{overflow:hidden}.uploader__image-cropper__clip img{max-width:unset}.uploader__image-cropper__clip:before{content:" ";display:block;background:rgba(255,255,255,0.15);position:absolute;left:-2px;right:-2px;top:-2px;bottom:-2px}.uploader__image-cropper__clip--circular,.uploader__image-cropper__clip--circular:before{border-radius:100%}\n', ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageEditorLayout.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i3) {
              return i3[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".uploader__image-editor{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;height:100%;width:100%}.uploader__image-editor img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.uploader__image-editor__header{padding:0.825em 0.8em 0.75em 0.8em}.uploader__image-editor__header--empty-non-modal{min-height:.9375em}.uploader__image-editor__image{width:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}.uploader__image-editor__image-padding{position:absolute;top:0;bottom:0;left:.9375em;right:.9375em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.uploader__image-editor__image-inner{max-width:100%;max-height:100%}.uploader__modal .uploader__image-editor__header{padding-top:0;padding-bottom:1.3em;margin-top:-1em}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/Spinner.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i3) {
              return i3[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, "@-webkit-keyframes spinner{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spinner{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.spinner{display:block !important;border:0.275em solid var(--shade-700);border-right-color:transparent;border-radius:50%;-webkit-animation:spinner 0.75s linear infinite;-moz-animation:spinner 0.75s linear infinite;animation:spinner 0.75s linear infinite}.spinner__container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;width:100%}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i3) {
              return i3[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".uploader__resizable-square{position:absolute;cursor:move}.uploader__resizable-square__nw,.uploader__resizable-square__ne,.uploader__resizable-square__sw,.uploader__resizable-square__se{width:1em;height:1em;opacity:0.75;background-color:var(--shade-900);border:.0625em solid var(--primary-color);border-radius:100%;position:absolute;display:block !important}.uploader__resizable-square__nw{top:-.5em;left:-.5em;cursor:nw-resize}.uploader__resizable-square__ne{top:-.5em;right:-.5em;cursor:ne-resize}.uploader__resizable-square__sw{bottom:-.5em;left:-.5em;cursor:sw-resize}.uploader__resizable-square__se{bottom:-.5em;right:-.5em;cursor:se-resize}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/fileIcons/ProgressIcon.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i3) {
              return i3[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".progress-icon{display:block}.progress-icon__container{display:inline-block;position:relative}.progress-icon__circle{-webkit-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;-o-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;-moz-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50%;stroke:var(--primary-color)}.progress-icon__circle__bg{-webkit-transition:.3s opacity linear;-o-transition:.3s opacity linear;-moz-transition:.3s opacity linear;transition:.3s opacity linear;fill:var(--shade-700)}.progress-icon__circle--error{stroke:var(--error-color)}.progress-icon__thumbnail{-webkit-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;-o-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;-moz-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;-webkit-transition-delay:.3s;-moz-transition-delay:.3s;-o-transition-delay:.3s;transition-delay:.3s;background-repeat:no-repeat;background-position:center center;background-size:contain;opacity:1;position:absolute;left:0;right:0;top:0;bottom:0;-webkit-transform:scale(1, 1);-moz-transform:scale(1, 1);-ms-transform:scale(1, 1);-o-transform:scale(1, 1);transform:scale(1, 1)}.progress-icon__thumbnail--hidden{opacity:0;-webkit-transform:scale(0.1, 0.1);-moz-transform:scale(0.1, 0.1);-ms-transform:scale(0.1, 0.1);-o-transform:scale(0.1, 0.1);transform:scale(0.1, 0.1)}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/files/SubmittedFileComponent.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i3) {
              return i3[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".breakpoint-md .uploader__submitted-file{max-width:100%;width:100%}.breakpoint-lg .uploader__submitted-file{max-width:50%;width:50%}.breakpoint-xl .uploader__submitted-file{max-width:33.333333%;width:33.333333%}.breakpoint-xl .uploader__submitted-file--loners{max-width:46%;width:46%}.uploader__submitted-file{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:.3125em 0}.uploader__submitted-file__container{margin:0 .3125em;background:var(--shade-800);border-radius:.4375em}.uploader__submitted-file__inner{padding:1.3125em 1.4375em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.uploader__submitted-file__text{margin-left:.4375em;margin-right:.5em;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.uploader__submitted-file__action{min-width:4.625em;text-align:right;display:inline-block}.uploader__submitted-file__action--performed{color:var(--shade-300)}.uploader__submitted-file__message{font-size:0.75em;margin-top:0.2em;display:block;line-height:1.1em}.uploader__submitted-file__name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;height:1.1em}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/screens/UploaderMainScreen.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i3) {
              return i3[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".uploader__main-screen{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;height:100%;width:100%}.uploader__main-screen__file-list{margin:auto 0;overflow-y:auto;width:100%}.uploader__main-screen__file-list__inner{padding:.9375em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploader__main-screen__info{color:var(--btn-text-color);text-align:center;padding:1.15em 0}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/widgetBase/WidgetBase.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i3) {
              return i3[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".uploader__widget-base{border-radius:.3125em;position:absolute;top:.9375em;left:.9375em;right:.9375em;bottom:.9375em;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.uploader__widget-base__modal-bg{color:var(--shade-600);position:absolute;z-index:1}.uploader__widget-base__modal-bg--dragging{color:var(--primary-color)}.uploader__widget-base__modal-bg--dragging *{pointer-events:none}.uploader__widget-base__children{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:2;position:absolute;bottom:0;top:0;left:0;right:0}.uploader__widget-base__children--is-modal{top:2.5em}.uploader__widget-base--draggable{border:.125em dashed var(--shade-600)}.uploader__widget-base--dragging{border-color:var(--primary-color)}.uploader__widget-base--dragging *{pointer-events:none}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/runtime/api.js": (
          /***/
          function(module2) {
            module2.exports = function(cssWithMappingToString) {
              var list = [];
              list.toString = function toString() {
                return this.map(function(item) {
                  var content = cssWithMappingToString(item);
                  if (item[2]) {
                    return "@media ".concat(item[2], " {").concat(content, "}");
                  }
                  return content;
                }).join("");
              };
              list.i = function(modules, mediaQuery, dedupe) {
                if (typeof modules === "string") {
                  modules = [[null, modules, ""]];
                }
                var alreadyImportedModules = {};
                if (dedupe) {
                  for (var i3 = 0; i3 < this.length; i3++) {
                    var id = this[i3][0];
                    if (id != null) {
                      alreadyImportedModules[id] = true;
                    }
                  }
                }
                for (var _i = 0; _i < modules.length; _i++) {
                  var item = [].concat(modules[_i]);
                  if (dedupe && alreadyImportedModules[item[0]]) {
                    continue;
                  }
                  if (mediaQuery) {
                    if (!item[2]) {
                      item[2] = mediaQuery;
                    } else {
                      item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                    }
                  }
                  list.push(item);
                }
              };
              return list;
            };
          }
        )
        /******/
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) {
          return __webpack_module_cache__[moduleId].exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          /******/
          id: moduleId,
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      !function() {
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? (
            /******/
            function() {
              return module2["default"];
            }
          ) : (
            /******/
            function() {
              return module2;
            }
          );
          __webpack_require__.d(getter, { a: getter });
          return getter;
        };
      }();
      !function() {
        __webpack_require__.d = function(exports2, definition) {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      }();
      !function() {
        __webpack_require__.o = function(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
      }();
      !function() {
        __webpack_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
      }();
      var __webpack_exports__ = {};
      !function() {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "UploadWidgetResult": function() {
            return (
              /* reexport */
              UploadWidgetResult
            );
          },
          "Uploader": function() {
            return (
              /* reexport */
              Uploader
            );
          },
          "UploaderLocaleEnUs": function() {
            return (
              /* reexport */
              UploaderLocaleEnUs
            );
          }
        });
        ;
        var jsx_runtime_namespaceObject = (init_jsxRuntime_module(), __toCommonJS(jsxRuntime_module_exports));
        ;
        ;
        var external_upload_js_namespaceObject = require_main3();
        ;
        ;
        var UploaderLocaleEnUs = {
          "error!": "Error!",
          "done": "Done",
          "addAnotherFile": "Add another file...",
          "addAnotherImage": "Add another image...",
          "cancel": "cancel",
          "cancelInPreviewWindow": "Cancel",
          "cancelled!": "cancelled",
          "continue": "Continue",
          "customValidationFailed": "Failed to validate file.",
          "crop": "Crop",
          "finish": "Finished",
          "finishIcon": true,
          "image": "Image",
          "maxFilesReached": "Maximum number of files:",
          "maxImagesReached": "Maximum number of images:",
          "maxSize": "File size limit:",
          "next": "Next",
          "of": "of",
          "orDragDropFile": "...or drag and drop a file.",
          "orDragDropFiles": "...or drag and drop files.",
          "orDragDropImage": "...or drag and drop an image.",
          "orDragDropImages": "...or drag and drop images.",
          "pleaseWait": "Please wait...",
          "removed!": "removed",
          "remove": "remove",
          "skip": "Skip",
          "unsupportedFileType": "File type not supported.",
          "uploadFile": "Upload a File",
          "uploadFiles": "Upload a File",
          "uploadImage": "Upload an Image",
          "uploadImages": "Upload an Image",
          "processingFile": "Processing file..."
        };
        ;
        var UploadWidgetEditorRequired;
        (function(UploadWidgetEditorRequired2) {
          function from(options2) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var cropShape = (_b = (_a = options2 === null || options2 === void 0 ? void 0 : options2.images) === null || _a === void 0 ? void 0 : _a.cropShape) !== null && _b !== void 0 ? _b : "rect";
            var crop = (_d = (_c = options2 === null || options2 === void 0 ? void 0 : options2.images) === null || _c === void 0 ? void 0 : _c.crop) !== null && _d !== void 0 ? _d : true;
            return {
              images: {
                crop,
                cropFilePath: (_f = (_e = options2 === null || options2 === void 0 ? void 0 : options2.images) === null || _e === void 0 ? void 0 : _e.cropFilePath) !== null && _f !== void 0 ? _f : function(originalImage) {
                  return "".concat(originalImage.filePath, ".crop");
                },
                cropRatio: cropShape === "circ" ? 1 : (_g = options2 === null || options2 === void 0 ? void 0 : options2.images) === null || _g === void 0 ? void 0 : _g.cropRatio,
                cropShape,
                // Prevents introducing a new step for existing users where previously they didn't expect any interruption, but
                // shows previews for new file types (PDFs) to users who are already expecting interruption for image uploads.
                // "If at least one editor option is enabled, then previews are enabled by default".
                preview: (_j = (_h = options2 === null || options2 === void 0 ? void 0 : options2.images) === null || _h === void 0 ? void 0 : _h.preview) !== null && _j !== void 0 ? _j : crop
              }
            };
          }
          UploadWidgetEditorRequired2.from = from;
        })(UploadWidgetEditorRequired || (UploadWidgetEditorRequired = {}));
        ;
        function _slicedToArray(arr, i3) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i3) || _unsupportedIterableToArray(arr, i3) || _nonIterableRest();
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return _arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return _arrayLikeToArray(o4, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function _iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function rgb2hsv(r3, g4, b3) {
          var v3 = Math.max(r3, g4, b3);
          var c3 = v3 - Math.min(r3, g4, b3);
          var h3 = c3 && (v3 === r3 ? (g4 - b3) / c3 : v3 === g4 ? 2 + (b3 - r3) / c3 : 4 + (r3 - g4) / c3);
          return [60 * (h3 < 0 ? h3 + 6 : h3), v3 && c3 / v3, v3];
        }
        function hsv2rgb(h3, s3, v3) {
          var f3 = function f4(n2) {
            var k4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (n2 + h3 / 60) % 6;
            return v3 - v3 * s3 * Math.max(Math.min(k4, 4 - k4, 1), 0);
          };
          return [f3(5), f3(3), f3(1)];
        }
        function hexToRgb(hex) {
          var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
          hex = hex.replace(shorthandRegex, function(_4, r3, g4, b3) {
            return "".concat(r3).concat(r3).concat(g4).concat(g4).concat(b3).concat(b3);
          });
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          if (result === null) {
            throw new Error("Invalid color code: ".concat(hex));
          }
          return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
        }
        function highlightColor(hex, amount) {
          var _hexToRgb = hexToRgb(hex), _hexToRgb2 = _slicedToArray(_hexToRgb, 3), r3 = _hexToRgb2[0], g4 = _hexToRgb2[1], b3 = _hexToRgb2[2];
          var _rgb2hsv = rgb2hsv(r3, g4, b3), _rgb2hsv2 = _slicedToArray(_rgb2hsv, 3), h3 = _rgb2hsv2[0], s3 = _rgb2hsv2[1], v3 = _rgb2hsv2[2];
          var clipToFactor = function clipToFactor2(x4) {
            return Math.min(1, Math.max(0, x4));
          };
          var _hsv2rgb$map = hsv2rgb(h3, clipToFactor(s3 + amount * -1), clipToFactor(v3 / 255 + amount) * 255).map(Math.round), _hsv2rgb$map2 = _slicedToArray(_hsv2rgb$map, 3), rNew = _hsv2rgb$map2[0], gNew = _hsv2rgb$map2[1], bNew = _hsv2rgb$map2[2];
          return "rgb(".concat(rNew, ", ").concat(gNew, ", ").concat(bNew, ")");
        }
        ;
        var UploaderColorOptionsRequired;
        (function(UploaderColorOptionsRequired2) {
          function from(options2) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            var primaryDefault = "#377dff";
            var activeDefault = "#528fff";
            var primary = (_a = options2 === null || options2 === void 0 ? void 0 : options2.primary) !== null && _a !== void 0 ? _a : primaryDefault;
            var active;
            try {
              active = highlightColor(primary, 0.1);
            } catch (e3) {
              console.error("Invalid hex code '".concat(primary, "', using default colours."));
              primary = primaryDefault;
              active = activeDefault;
            }
            return {
              primary,
              active: (_b = options2 === null || options2 === void 0 ? void 0 : options2.active) !== null && _b !== void 0 ? _b : active,
              error: (_c = options2 === null || options2 === void 0 ? void 0 : options2.error) !== null && _c !== void 0 ? _c : "#d23f4d",
              shade100: (_d = options2 === null || options2 === void 0 ? void 0 : options2.shade100) !== null && _d !== void 0 ? _d : "#333",
              shade200: (_e = options2 === null || options2 === void 0 ? void 0 : options2.shade200) !== null && _e !== void 0 ? _e : "#7a7a7a",
              shade300: (_f = options2 === null || options2 === void 0 ? void 0 : options2.shade300) !== null && _f !== void 0 ? _f : "#999",
              shade400: (_g = options2 === null || options2 === void 0 ? void 0 : options2.shade400) !== null && _g !== void 0 ? _g : "#a5a6a8",
              shade500: (_h = options2 === null || options2 === void 0 ? void 0 : options2.shade500) !== null && _h !== void 0 ? _h : "#d3d3d3",
              shade600: (_j = options2 === null || options2 === void 0 ? void 0 : options2.shade600) !== null && _j !== void 0 ? _j : "#dddddd",
              shade700: (_k = options2 === null || options2 === void 0 ? void 0 : options2.shade700) !== null && _k !== void 0 ? _k : "#f0f0f0",
              shade800: (_l = options2 === null || options2 === void 0 ? void 0 : options2.shade800) !== null && _l !== void 0 ? _l : "#f8f8f8",
              shade900: (_m = options2 === null || options2 === void 0 ? void 0 : options2.shade900) !== null && _m !== void 0 ? _m : "#fff"
              // 900 DONE
            };
          }
          UploaderColorOptionsRequired2.from = from;
        })(UploaderColorOptionsRequired || (UploaderColorOptionsRequired = {}));
        ;
        var UploadWidgetFontSizeRequired;
        (function(UploadWidgetFontSizeRequired2) {
          function from(options2) {
            var _a;
            return {
              base: (_a = options2 === null || options2 === void 0 ? void 0 : options2.base) !== null && _a !== void 0 ? _a : 16
            };
          }
          UploadWidgetFontSizeRequired2.from = from;
        })(UploadWidgetFontSizeRequired || (UploadWidgetFontSizeRequired = {}));
        ;
        var UploadWidgetFontFamilyRequired;
        (function(UploadWidgetFontFamilyRequired2) {
          function from(options2) {
            var _a;
            return {
              base: (_a = options2 === null || options2 === void 0 ? void 0 : options2.base) !== null && _a !== void 0 ? _a : "-apple-system, blinkmacsystemfont, Segoe UI, helvetica, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
            };
          }
          UploadWidgetFontFamilyRequired2.from = from;
        })(UploadWidgetFontFamilyRequired || (UploadWidgetFontFamilyRequired = {}));
        ;
        var UploadWidgetStylesRequired;
        (function(UploadWidgetStylesRequired2) {
          function from(options2) {
            return {
              colors: UploaderColorOptionsRequired.from(options2 === null || options2 === void 0 ? void 0 : options2.colors),
              fontFamilies: UploadWidgetFontFamilyRequired.from(options2 === null || options2 === void 0 ? void 0 : options2.fontFamilies),
              fontSizes: UploadWidgetFontSizeRequired.from(options2 === null || options2 === void 0 ? void 0 : options2.fontSizes)
            };
          }
          UploadWidgetStylesRequired2.from = from;
        })(UploadWidgetStylesRequired || (UploadWidgetStylesRequired = {}));
        ;
        function _await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function _async(f3) {
          return function() {
            for (var args = [], i3 = 0; i3 < arguments.length; i3++) {
              args[i3] = arguments[i3];
            }
            try {
              return Promise.resolve(f3.apply(this, args));
            } catch (e3) {
              return Promise.reject(e3);
            }
          };
        }
        var UploadWidgetConfigRequired;
        (function(UploadWidgetConfigRequired2) {
          function from(options2) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var layout = (_a = options2.layout) !== null && _a !== void 0 ? _a : "modal";
            var multi = (_b = options2.multi) !== null && _b !== void 0 ? _b : options2.maxFileCount !== void 0 && options2.maxFileCount > 1;
            return {
              container: options2.container,
              editor: UploadWidgetEditorRequired.from(options2.editor),
              layout,
              locale: Object.assign(Object.assign({}, UploaderLocaleEnUs), options2.locale),
              maxFileCount: options2.maxFileCount,
              maxFileSizeBytes: options2.maxFileSizeBytes,
              metadata: options2.metadata,
              mimeTypes: (_c = options2.mimeTypes) === null || _c === void 0 ? void 0 : _c.map(function(x4) {
                return x4.trim().toLowerCase();
              }),
              multi,
              onInit: (_d = options2.onInit) !== null && _d !== void 0 ? _d : function() {
              },
              onUpdate: (_e = options2.onUpdate) !== null && _e !== void 0 ? _e : function() {
              },
              onPreUpload: _async(function(file) {
                var onValidate = options2.onValidate, onPreUpload = options2.onPreUpload;
                return _await(onValidate === void 0 ? {} : onValidate(file), function(_onValidate) {
                  var _Object$assign = Object.assign({}, onValidate === void 0 ? _onValidate : {
                    errorMessage: _onValidate
                  });
                  return _await(onPreUpload === void 0 ? {} : onPreUpload(file), function(_onPreUpload) {
                    return Object.assign(_Object$assign, _onPreUpload);
                  }, onPreUpload === void 0);
                }, onValidate === void 0);
              }),
              path: options2.path,
              showFinishButton: (_f = options2.showFinishButton) !== null && _f !== void 0 ? _f : multi ? layout === "modal" : false,
              showRemoveButton: (_g = options2.showRemoveButton) !== null && _g !== void 0 ? _g : true,
              styles: UploadWidgetStylesRequired.from(options2.styles),
              tags: (_h = options2.tags) !== null && _h !== void 0 ? _h : []
            };
          }
          UploadWidgetConfigRequired2.from = from;
        })(UploadWidgetConfigRequired || (UploadWidgetConfigRequired = {}));
        ;
        var external_preact_namespaceObject = (init_preact_module(), __toCommonJS(preact_module_exports));
        ;
        ;
        var UploadInstanceMaybe;
        (function(UploadInstanceMaybe2) {
          function isUploadInstance(object) {
            return typeof object.uploadFile === "function";
          }
          UploadInstanceMaybe2.isUploadInstance = isUploadInstance;
        })(UploadInstanceMaybe || (UploadInstanceMaybe = {}));
        var injectStylesIntoStyleTag = __webpack_require__("./node_modules/@upload-io/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
        var injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag);
        var styleDomAPI = __webpack_require__("./node_modules/@upload-io/style-loader/dist/runtime/styleDomAPI.js");
        var styleDomAPI_default = __webpack_require__.n(styleDomAPI);
        var setAttributesWithoutAttributes = __webpack_require__("./node_modules/@upload-io/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
        var setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes);
        var insertStyleElement = __webpack_require__("./node_modules/@upload-io/style-loader/dist/runtime/insertStyleElement.js");
        var insertStyleElement_default = __webpack_require__.n(insertStyleElement);
        var styleTagTransform = __webpack_require__("./node_modules/@upload-io/style-loader/dist/runtime/styleTagTransform.js");
        var styleTagTransform_default = __webpack_require__.n(styleTagTransform);
        var UploadWidgetContainer = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/UploadWidgetContainer.scss");
        ;
        var options = {};
        options.styleTagTransform = styleTagTransform_default();
        options.setAttributes = setAttributesWithoutAttributes_default();
        options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        options.domAPI = styleDomAPI_default();
        options.insertStyleElement = insertStyleElement_default();
        var update = injectStylesIntoStyleTag_default()(UploadWidgetContainer.default, options);
        var uploader_UploadWidgetContainer = UploadWidgetContainer.default && UploadWidgetContainer.default.locals ? UploadWidgetContainer.default.locals : void 0;
        ;
        var external_classnames_namespaceObject = require_classnames();
        ;
        var external_classnames_default = __webpack_require__.n(external_classnames_namespaceObject);
        var WidgetBase = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/widgetBase/WidgetBase.scss");
        ;
        var WidgetBase_options = {};
        WidgetBase_options.styleTagTransform = styleTagTransform_default();
        WidgetBase_options.setAttributes = setAttributesWithoutAttributes_default();
        WidgetBase_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        WidgetBase_options.domAPI = styleDomAPI_default();
        WidgetBase_options.insertStyleElement = insertStyleElement_default();
        var WidgetBase_update = injectStylesIntoStyleTag_default()(WidgetBase.default, WidgetBase_options);
        var widgetBase_WidgetBase = WidgetBase.default && WidgetBase.default.locals ? WidgetBase.default.locals : void 0;
        ;
        var baseWidth = 600;
        var baseHeight = 400;
        var baseNotchSize = 50;
        var DashedBackgroundSvg = function DashedBackgroundSvg2(_ref) {
          var className = _ref.className, width = _ref.width, height = _ref.height, notchSize = _ref.notchSize;
          var widthDelta = baseWidth - width;
          var heightDelta = baseHeight - height;
          var notchDelta = baseNotchSize - notchSize;
          return (0, jsx_runtime_namespaceObject.jsxs)("svg", Object.assign({
            width,
            height,
            className,
            xmlns: "http://www.w3.org/2000/svg"
          }, {
            children: [(0, jsx_runtime_namespaceObject.jsxs)("defs", {
              children: [(0, jsx_runtime_namespaceObject.jsx)("path", {
                d: "M76 99h".concat(536 - (widthDelta - notchDelta), "a7 7 0 0 1 7 7v").concat(36 - notchDelta, "a7 7 0 0 0 7 7h").concat(36 - notchDelta, "a7 7 0 0 1 7 7v").concat(336 - (heightDelta - notchDelta), "a7 7 0 0 1-7 7H76a7 7 0 0 1-7-7V106a7 7 0 0 1 7-7Z"),
                id: "rectWithNotch"
              }), (0, jsx_runtime_namespaceObject.jsx)("mask", Object.assign({
                id: "rectWithNotchMask",
                maskContentUnits: "userSpaceOnUse",
                maskUnits: "objectBoundingBox",
                x: "0",
                y: "0",
                width,
                height,
                fill: "#fff"
              }, {
                children: (0, jsx_runtime_namespaceObject.jsx)("use", {
                  xlinkHref: "#rectWithNotch"
                })
              }))]
            }), (0, jsx_runtime_namespaceObject.jsx)("use", {
              mask: "url(#rectWithNotchMask)",
              xlinkHref: "#rectWithNotch",
              transform: "translate(-69 -99)",
              stroke: "currentColor",
              strokeWidth: "4",
              fill: "none",
              fillRule: "evenodd",
              strokeDasharray: "4"
            })]
          }));
        };
        ;
        var WidgetBaseBackground = function WidgetBaseBackground2(_ref) {
          var closeButtonSize = _ref.closeButtonSize, isDragging = _ref.isDragging, dimensions = _ref.dimensions;
          if (dimensions === void 0) {
            return (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {});
          }
          return (0, jsx_runtime_namespaceObject.jsx)(DashedBackgroundSvg, {
            width: dimensions.width,
            height: dimensions.height,
            notchSize: closeButtonSize,
            className: external_classnames_default()("uploader__widget-base__modal-bg", {
              "uploader__widget-base__modal-bg--dragging": isDragging
            })
          });
        };
        ;
        var compat_namespaceObject = (init_compat_module(), __toCommonJS(compat_module_exports));
        ;
        ;
        var __rest = function(s3, e3) {
          var t3 = {};
          for (var p3 in s3) {
            if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
              t3[p3] = s3[p3];
          }
          if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
              if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
                t3[p3[i3]] = s3[p3[i3]];
            }
          return t3;
        };
        var ResizedSvg = function ResizedSvg2(_a) {
          var children = _a.children, className = _a.className, originalHeight = _a.originalHeight, originalWidth = _a.originalWidth, style = _a.style, rest = __rest(_a, ["children", "className", "originalHeight", "originalWidth", "style"]);
          var widthMaybe = rest === null || rest === void 0 ? void 0 : rest.width;
          var heightMaybe = rest === null || rest === void 0 ? void 0 : rest.height;
          return (0, jsx_runtime_namespaceObject.jsx)("svg", Object.assign({
            viewBox: "0 0 ".concat(originalWidth, " ").concat(originalHeight),
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className,
            style: Object.assign(Object.assign({}, style), heightMaybe !== void 0 ? {
              height: "".concat(heightMaybe, "px"),
              width: "".concat(heightMaybe * (originalWidth / originalHeight), "px")
            } : widthMaybe !== void 0 ? {
              width: "".concat(widthMaybe, "px"),
              height: "".concat(widthMaybe * (originalHeight / originalWidth), "px")
            } : {})
          }, {
            children
          }));
        };
        ;
        var CloseSvg = function CloseSvg2(_ref) {
          var className = _ref.className, width = _ref.width;
          return (0, jsx_runtime_namespaceObject.jsx)(ResizedSvg, Object.assign({
            originalWidth: 27,
            originalHeight: 26,
            width: width !== null && width !== void 0 ? width : 27,
            className
          }, {
            children: (0, jsx_runtime_namespaceObject.jsxs)("g", Object.assign({
              transform: "rotate(45 6.547 16.13)",
              fill: "currentColor",
              fillRule: "evenodd"
            }, {
              children: [(0, jsx_runtime_namespaceObject.jsx)("rect", {
                x: "7.75",
                width: "2.5",
                height: "18",
                rx: "1.25"
              }), (0, jsx_runtime_namespaceObject.jsx)("rect", {
                transform: "rotate(90 9 9)",
                x: "7.75",
                width: "2.5",
                height: "18",
                rx: "1.25"
              })]
            }))
          }));
        };
        var Modal = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/Modal.scss");
        ;
        var Modal_options = {};
        Modal_options.styleTagTransform = styleTagTransform_default();
        Modal_options.setAttributes = setAttributesWithoutAttributes_default();
        Modal_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        Modal_options.domAPI = styleDomAPI_default();
        Modal_options.insertStyleElement = insertStyleElement_default();
        var Modal_update = injectStylesIntoStyleTag_default()(Modal.default, Modal_options);
        var modal_Modal = Modal.default && Modal.default.locals ? Modal.default.locals : void 0;
        ;
        function Modal_slicedToArray(arr, i3) {
          return Modal_arrayWithHoles(arr) || Modal_iterableToArrayLimit(arr, i3) || Modal_unsupportedIterableToArray(arr, i3) || Modal_nonIterableRest();
        }
        function Modal_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Modal_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return Modal_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return Modal_arrayLikeToArray(o4, minLen);
        }
        function Modal_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function Modal_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function Modal_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var modalTransitionDuration = 250;
        var modalCloseButtonSize = 27;
        var modalCloseButtonPadding = 11;
        var Modal_Modal = function Modal2(_ref) {
          var children = _ref.children, closeModal = _ref.closeModal;
          var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = Modal_slicedToArray(_useState, 2), isClosed = _useState2[0], setIsClosed = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(false), _useState4 = Modal_slicedToArray(_useState3, 2), visible = _useState4[0], setVisible = _useState4[1];
          var _useState5 = (0, compat_namespaceObject.useState)(false), _useState6 = Modal_slicedToArray(_useState5, 2), showModalAsync = _useState6[0], setShowModalAsync = _useState6[1];
          var showModal = visible && !isClosed;
          var doClose = function doClose2() {
            setIsClosed(true);
          };
          (0, compat_namespaceObject.useEffect)(function() {
            if (!visible) {
              setVisible(true);
            }
          }, [visible]);
          (0, compat_namespaceObject.useEffect)(function() {
            if (!isClosed) {
              return;
            }
            var timeout = setTimeout(function() {
              closeModal();
            }, modalTransitionDuration);
            return function() {
              return clearTimeout(timeout);
            };
          }, [isClosed]);
          (0, compat_namespaceObject.useLayoutEffect)(function() {
            var oldHtmlClass = document.documentElement.className;
            var oldBodyClass = document.body.className;
            document.documentElement.className = "".concat(oldHtmlClass, " uploader__html");
            document.body.className = "".concat(oldBodyClass, " uploader__body");
            return function() {
              document.documentElement.className = oldHtmlClass;
              document.body.className = oldBodyClass;
            };
          }, []);
          (0, compat_namespaceObject.useEffect)(function() {
            if (showModal && !showModalAsync) {
              var f3 = window.requestAnimationFrame(function() {
                setShowModalAsync(true);
              });
              return function() {
                return window.cancelAnimationFrame(f3);
              };
            } else if (showModalAsync) {
              setShowModalAsync(false);
            }
          }, [showModal]);
          return (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
            children: [showModal && (0, jsx_runtime_namespaceObject.jsx)("div", {
              className: external_classnames_default()("uploader__backdrop", {
                show: showModalAsync
              }),
              onMouseDown: doClose
            }), showModal && (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
              className: external_classnames_default()("uploader__modal", {
                show: showModalAsync
              })
            }, {
              children: [children, (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                className: "uploader__modal__close"
              }, {
                children: (0, jsx_runtime_namespaceObject.jsx)("a", Object.assign({
                  href: "#close",
                  onClick: function onClick(e3) {
                    e3.preventDefault();
                    doClose();
                  }
                }, {
                  children: (0, jsx_runtime_namespaceObject.jsx)(CloseSvg, {
                    width: modalCloseButtonSize
                  })
                }))
              }))]
            }))]
          });
        };
        ;
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || UseDimensionsFromElement_unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return UseDimensionsFromElement_arrayLikeToArray(arr);
        }
        function UseDimensionsFromElement_slicedToArray(arr, i3) {
          return UseDimensionsFromElement_arrayWithHoles(arr) || UseDimensionsFromElement_iterableToArrayLimit(arr, i3) || UseDimensionsFromElement_unsupportedIterableToArray(arr, i3) || UseDimensionsFromElement_nonIterableRest();
        }
        function UseDimensionsFromElement_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseDimensionsFromElement_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UseDimensionsFromElement_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return UseDimensionsFromElement_arrayLikeToArray(o4, minLen);
        }
        function UseDimensionsFromElement_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function UseDimensionsFromElement_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function UseDimensionsFromElement_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function useElementRef() {
          var _useState = (0, compat_namespaceObject.useState)(void 0), _useState2 = UseDimensionsFromElement_slicedToArray(_useState, 2), element = _useState2[0], setElement = _useState2[1];
          var elementRef = (0, compat_namespaceObject.useCallback)(function(e3) {
            setElement(e3 !== null && e3 !== void 0 ? e3 : void 0);
          }, []);
          return [element, elementRef];
        }
        function getElementDimensionsOnResize(isElementReady, imageSizeDeps) {
          var _useElementRef = useElementRef(), _useElementRef2 = UseDimensionsFromElement_slicedToArray(_useElementRef, 2), element = _useElementRef2[0], elementRef = _useElementRef2[1];
          var dimensions = doGetElementDimensionsOnResize(isElementReady, element, element, imageSizeDeps);
          return [dimensions, elementRef];
        }
        function getElementDimensionsOnParentResize(isElementReady, imageSizeDeps) {
          var _useElementRef3 = useElementRef(), _useElementRef4 = UseDimensionsFromElement_slicedToArray(_useElementRef3, 2), element = _useElementRef4[0], elementRef = _useElementRef4[1];
          var _useElementRef5 = useElementRef(), _useElementRef6 = UseDimensionsFromElement_slicedToArray(_useElementRef5, 2), parentElement = _useElementRef6[0], parentElementRef = _useElementRef6[1];
          var dimensions = doGetElementDimensionsOnResize(isElementReady, element, parentElement, imageSizeDeps);
          return [dimensions, elementRef, parentElementRef];
        }
        function doGetElementDimensionsOnResize(isElementReady, element, parentElement, imageSizeDeps) {
          var _useState3 = (0, compat_namespaceObject.useState)(void 0), _useState4 = UseDimensionsFromElement_slicedToArray(_useState3, 2), dimensions = _useState4[0], setDimensions = _useState4[1];
          (0, compat_namespaceObject.useLayoutEffect)(function() {
            var updateDimensions = function updateDimensions2() {
              if (isElementReady) {
                setDimensions(getDimensionsFromElement(element));
              }
            };
            if (element === void 0 || parentElement === void 0) {
              return;
            }
            var observer = new ResizeObserver(updateDimensions);
            observer.observe(parentElement);
            return function() {
              return observer.disconnect();
            };
          }, [element, isElementReady].concat(_toConsumableArray(imageSizeDeps)));
          return dimensions;
        }
        function getDimensionsFromElement(element) {
          if (element === void 0) {
            return void 0;
          }
          var domRect = element.getBoundingClientRect();
          return {
            width: domRect.width,
            height: domRect.height,
            x: element.offsetLeft,
            y: element.offsetTop
          };
        }
        ;
        function WidgetBase_slicedToArray(arr, i3) {
          return WidgetBase_arrayWithHoles(arr) || WidgetBase_iterableToArrayLimit(arr, i3) || WidgetBase_unsupportedIterableToArray(arr, i3) || WidgetBase_nonIterableRest();
        }
        function WidgetBase_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function WidgetBase_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return WidgetBase_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return WidgetBase_arrayLikeToArray(o4, minLen);
        }
        function WidgetBase_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function WidgetBase_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function WidgetBase_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var WidgetBase_WidgetBase = function WidgetBase2(_ref) {
          var children = _ref.children, htmlProps = _ref.htmlProps, isDraggable = _ref.isDraggable, isDragging = _ref.isDragging, layout = _ref.layout;
          var _a, _b;
          var _getElementDimensions = getElementDimensionsOnResize(true, []), _getElementDimensions2 = WidgetBase_slicedToArray(_getElementDimensions, 2), dimensions = _getElementDimensions2[0], containerRef = _getElementDimensions2[1];
          var breakpoints = [{
            width: 650,
            value: "md"
          }, {
            width: 930,
            value: "lg"
          }];
          var lastBreakpoint = "xl";
          var breakpoint = (_b = dimensions === void 0 ? void 0 : (_a = breakpoints.find(function(x4) {
            return dimensions.width <= x4.width;
          })) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : lastBreakpoint;
          return (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
            ref: containerRef,
            className: external_classnames_default()("uploader__widget-base", "breakpoint-".concat(breakpoint), {
              "uploader__widget-base--draggable": isDraggable === true && layout !== "modal",
              "uploader__widget-base--dragging": isDragging === true && layout !== "modal"
            })
          }, htmlProps, {
            children: [isDraggable === true && layout === "modal" && (0, jsx_runtime_namespaceObject.jsx)(WidgetBaseBackground, {
              isDragging: isDragging === true,
              dimensions,
              closeButtonSize: modalCloseButtonSize + modalCloseButtonPadding
            }), (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
              className: external_classnames_default()("uploader__widget-base__children", {
                "uploader__widget-base__children--is-modal": layout === "modal"
              })
            }, {
              children
            }))]
          }));
        };
        ;
        var RightSvg = function RightSvg2(_ref) {
          var className = _ref.className, width = _ref.width;
          return (0, jsx_runtime_namespaceObject.jsx)(ResizedSvg, Object.assign({
            originalWidth: 13,
            originalHeight: 10,
            width: width !== null && width !== void 0 ? width : 13,
            className
          }, {
            children: (0, jsx_runtime_namespaceObject.jsx)("path", {
              d: "M6.293.293a.999.999 0 0 0 0 1.414L8.586 4H1a1 1 0 0 0 0 2h7.586L6.293 8.293a.999.999 0 1 0 1.414 1.414L12.414 5 7.707.293a.999.999 0 0 0-1.414 0Z",
              fill: "currentColor",
              fillRule: "nonzero"
            })
          }));
        };
        ;
        var ConfigError = function ConfigError2(_ref) {
          var error = _ref.error, layout = _ref.layout;
          var _a;
          var errorMessage = ((_a = error.message) !== null && _a !== void 0 ? _a : "unknown error").replace("[upload-js] ", "");
          var isApiKeyError = errorMessage.toLowerCase().includes("api key");
          return (0, jsx_runtime_namespaceObject.jsxs)(WidgetBase_WidgetBase, Object.assign({
            layout,
            multi: false
          }, {
            children: [(0, jsx_runtime_namespaceObject.jsx)("h1", {
              children: isApiKeyError ? "Almost there..." : "Oops!"
            }), (0, jsx_runtime_namespaceObject.jsx)("p", {
              children: errorMessage
            }), isApiKeyError ? (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
              className: "mt-5"
            }, {
              children: [(0, jsx_runtime_namespaceObject.jsxs)("a", Object.assign({
                href: "https://www.bytescale.com/get-started",
                className: "btn btn--primary-outline"
              }, {
                children: ["Get API Key ", (0, jsx_runtime_namespaceObject.jsx)(RightSvg, {
                  width: 12,
                  className: "ml-2"
                })]
              })), " "]
            })) : (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {})]
          }));
        };
        ;
        function isDefined(object) {
          return object !== void 0;
        }
        function assertUnreachable(_x) {
          throw new Error("Didn't expect to get here: ".concat(JSON.stringify(_x)));
        }
        ;
        function UploadButton_slicedToArray(arr, i3) {
          return UploadButton_arrayWithHoles(arr) || UploadButton_iterableToArrayLimit(arr, i3) || UploadButton_unsupportedIterableToArray(arr, i3) || UploadButton_nonIterableRest();
        }
        function UploadButton_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadButton_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UploadButton_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return UploadButton_arrayLikeToArray(o4, minLen);
        }
        function UploadButton_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function UploadButton_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function UploadButton_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var UploadButton = function UploadButton2(_ref) {
          var className = _ref.className, options2 = _ref.options, onUpload = _ref.onUpload, text = _ref.text;
          var _a;
          var _useState = (0, compat_namespaceObject.useState)(Math.random()), _useState2 = UploadButton_slicedToArray(_useState, 1), fileInputKey = _useState2[0];
          var _useState3 = (0, compat_namespaceObject.useState)("uploader__input-".concat(Math.round(Math.random() * 1e6))), _useState4 = UploadButton_slicedToArray(_useState3, 1), inputId = _useState4[0];
          return (0, jsx_runtime_namespaceObject.jsxs)("label", Object.assign({
            className: external_classnames_default()("btn btn--file", className),
            htmlFor: inputId
          }, {
            children: [text, (0, jsx_runtime_namespaceObject.jsx)("input", Object.assign({
              id: inputId,
              name: inputId,
              accept: (_a = options2.mimeTypes) === null || _a === void 0 ? void 0 : _a.join(","),
              type: "file",
              className: "btn--file__input"
            }, options2.multi ? {
              multiple: true
            } : {}, {
              onChange: function onChange(e3) {
                var _a2, _b;
                var input = e3.target;
                var files = Array.from((_b = (_a2 = input.files) !== null && _a2 !== void 0 ? _a2 : void 0) !== null && _b !== void 0 ? _b : []);
                if (files.length > 0) {
                  onUpload(files);
                }
              }
            }), fileInputKey)]
          }));
        };
        ;
        var UploaderWelcomeScreen = function UploaderWelcomeScreen2(_ref) {
          var addFiles = _ref.addFiles, options2 = _ref.options, isImageUploader = _ref.isImageUploader;
          var multi = options2.multi, locale = options2.locale;
          return (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
            children: [(0, jsx_runtime_namespaceObject.jsx)(UploadButton, {
              options: options2,
              text: isImageUploader ? multi ? locale.uploadImages : locale.uploadImage : multi ? locale.uploadFiles : locale.uploadFile,
              className: "btn--primary btn--upload",
              onUpload: addFiles
            }), (0, jsx_runtime_namespaceObject.jsx)("p", Object.assign({
              className: "text-secondary mb-0"
            }, {
              children: isImageUploader ? multi ? locale.orDragDropImages : locale.orDragDropImage : multi ? locale.orDragDropFiles : locale.orDragDropFile
            }))]
          });
        };
        var ProgressIcon = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/fileIcons/ProgressIcon.scss");
        ;
        var ProgressIcon_options = {};
        ProgressIcon_options.styleTagTransform = styleTagTransform_default();
        ProgressIcon_options.setAttributes = setAttributesWithoutAttributes_default();
        ProgressIcon_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        ProgressIcon_options.domAPI = styleDomAPI_default();
        ProgressIcon_options.insertStyleElement = insertStyleElement_default();
        var ProgressIcon_update = injectStylesIntoStyleTag_default()(ProgressIcon.default, ProgressIcon_options);
        var fileIcons_ProgressIcon = ProgressIcon.default && ProgressIcon.default.locals ? ProgressIcon.default.locals : void 0;
        ;
        function ProgressIcon_slicedToArray(arr, i3) {
          return ProgressIcon_arrayWithHoles(arr) || ProgressIcon_iterableToArrayLimit(arr, i3) || ProgressIcon_unsupportedIterableToArray(arr, i3) || ProgressIcon_nonIterableRest();
        }
        function ProgressIcon_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ProgressIcon_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return ProgressIcon_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return ProgressIcon_arrayLikeToArray(o4, minLen);
        }
        function ProgressIcon_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function ProgressIcon_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function ProgressIcon_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var progressWheelVanish = 300;
        var progressWheelDelay = 350;
        var ProgressIcon_ProgressIcon = function ProgressIcon2(_ref) {
          var height = _ref.height, progress = _ref.progress, onCompleteImageSource = _ref.onCompleteImageSource, isError = _ref.isError;
          var _useState = (0, compat_namespaceObject.useState)(progress === 1), _useState2 = ProgressIcon_slicedToArray(_useState, 2), completed = _useState2[0], setCompleted = _useState2[1];
          var radius = height / 2;
          var stokeWidth = radius * 2;
          var size = stokeWidth * 2;
          var circumference = radius * 2 * Math.PI;
          var strokeDashoffset = circumference - progress * circumference;
          var strokeDasharray = "".concat(circumference, " ").concat(circumference);
          (0, compat_namespaceObject.useEffect)(function() {
            if (progress === 1 && !completed) {
              var timeout = setTimeout(function() {
                setCompleted(true);
              }, progressWheelDelay - 50);
              return function() {
                return clearTimeout(timeout);
              };
            }
          }, [progress]);
          return (0, jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
            className: "progress-icon__container"
          }, {
            children: [(0, jsx_runtime_namespaceObject.jsxs)("svg", Object.assign({
              className: "progress-icon",
              width: size,
              height: size
            }, {
              children: [(0, jsx_runtime_namespaceObject.jsx)("circle", {
                className: "progress-icon__circle__bg",
                strokeWidth: 0,
                r: size / 2,
                cx: size / 2,
                cy: size / 2,
                style: {
                  opacity: completed ? 0 : 1
                }
              }), (0, jsx_runtime_namespaceObject.jsx)("circle", {
                className: external_classnames_default()("progress-icon__circle", {
                  "progress-icon__circle--error": isError
                }),
                strokeWidth: completed ? 0 : stokeWidth,
                fill: "transparent",
                r: completed ? 0 : radius,
                cx: stokeWidth,
                cy: stokeWidth,
                style: {
                  strokeDasharray,
                  strokeDashoffset,
                  opacity: completed ? 0 : 1
                }
              })]
            })), (0, jsx_runtime_namespaceObject.jsx)("span", {
              className: external_classnames_default()("progress-icon__thumbnail", {
                "progress-icon__thumbnail--hidden": !completed
              }),
              style: {
                backgroundImage: "url(".concat(onCompleteImageSource, ")")
              }
            })]
          }));
        };
        ;
        var Document = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMjIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjAgMjIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMTAwIDBIMTVDNyAwIDAgNyAwIDE1djE5MGMwIDggNyAxNSAxNSAxNWgxMzBjOCAwIDE1LTcgMTUtMTVWNjBsLTM1LTI1LTI1LTM1eiIgc3R5bGU9ImZpbGw6IzQyODVmNCIvPjxwYXRoIGQ9Ik00MCAxNjBoODB2LTEwSDQwdjEwem0wIDIwaDYwdi0xMEg0MHYxMHptMC03MHYxMGg4MHYtMTBINDB6bTAgMzBoODB2LTEwSDQwdjEweiIgc3R5bGU9ImZpbGw6I2YxZjFmMSIvPjxwYXRoIGQ9Ik0xMDAgMHY0NWMwIDggNyAxNSAxNSAxNWg0NUwxMDAgMHoiIHN0eWxlPSJmaWxsOiNhMWMyZmEiLz48L3N2Zz4K";
        ;
        var Spreadsheet = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMjEwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjAgMjEwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNXoiIHN0eWxlPSJmaWxsOiM0M2EwNDciLz48cGF0aCBkPSJNMTYwIDUwaC01MFYwbDUwIDUweiIgc3R5bGU9ImZpbGw6I2M4ZTZjOSIvPjxwYXRoIGQ9Im0xMTAgNTAgNTAgNTBWNTBoLTUweiIgc3R5bGU9ImZpbGw6IzJlN2QzMiIvPjxwYXRoIGQ9Ik0xMTUgMTAwSDM1djcwaDkwdi03MGgtMTB6bS03MCAxMGgyMHYxMEg0NXYtMTB6bTAgMjBoMjB2MTBINDV2LTEwem0wIDIwaDIwdjEwSDQ1di0xMHptNzAgMTBINzV2LTEwaDQwdjEwem0wLTIwSDc1di0xMGg0MHYxMHptMC0yMEg3NXYtMTBoNDB2MTB6IiBzdHlsZT0iZmlsbDojZThmNWU5Ii8+PC9zdmc+Cg==";
        ;
        var Slideshow = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiNEMzUyMzAiLz48cGF0aCBmaWxsPSIjRkY4NDY0IiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiNCNDQyMjMiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTIxLjY1OSA5NEgzOC4zMzNDMzMuNzM3IDk0IDMwIDk3LjcyMyAzMCAxMDIuM3Y0NS42NWMwIDQuNTc3IDMuNzM3IDguMyA4LjMzMyA4LjNINzUuODN2OC4zYzAgMS45NTktMS42MTMgMy45NjctNC40MjUgNS41MjQtMy4yNDIgMS43ODgtNy41OTEgMi43NzYtMTIuMjM3IDIuNzc2VjE3N2g0MS42NjR2LTQuMTVjLTQuNjYzIDAtOS4wMTItLjk4NC0xMi4yMzctMi43NzYtMi44MTItMS41NTctNC40MjUtMy41NjUtNC40MjUtNS41MjR2LTguM2gzNy40OTdjNC41OTYgMCA4LjMzMy0zLjcyMyA4LjMzMy04LjNWMTAyLjNjMC00LjU3Ny0zLjczNy04LjMtOC4zMzMtOC4zaC0uMDA4Wm0tMzYuNDggNzguODVINzQuODE3YzMuMjQxLTIuMTkxIDUuMTgzLTUuMDg0IDUuMTgzLTguMyAwIDMuMjE2IDEuOTQyIDYuMTA5IDUuMTgzIDguM2gtLjAwNFpNMzguMzMzIDEwMi4zaDgzLjMyNnYzNy4zNUgzOC4zMzNWMTAyLjNjLS4wMTMgMCAwIDAgMCAwWm0wIDQ1LjY1di00LjE1aDgzLjMyNnY0LjE1SDM4LjMzM1oiLz48cGF0aCBkPSJNNjcuOTg2IDEzNi43Yy4zMzYuMi43MTMuMyAxLjA4NS4zLjMxMSAwIC42MzQtLjA3Ni45MzMtLjIxMmwyNC44NTctMTJBMS45OTMgMS45OTMgMCAwIDAgOTYgMTIzYzAtLjc1Mi0uNDQtMS40NTItMS4xNC0xLjc4OGwtMjQuODU2LTEyYTIuMTQ1IDIuMTQ1IDAgMCAwLTIuMDIyLjA4OEExLjk5MyAxLjk5MyAwIDAgMCA2NyAxMTF2MjRjMCAuNjg4LjM3NyAxLjMzNi45ODIgMS43aC4wMDRabTMuMTYxLTIyLjQ2NEw4OS4yOTcgMTIzbC0xOC4xNSA4Ljc2NFYxMTQuMjM2WiIvPjwvZz48L2c+PC9nPjwvc3ZnPgo=";
        ;
        var Archive = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM4NkFCRUIiLz48cGF0aCBmaWxsPSIjQzRENEYxIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiM3MThGQzMiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzkgOTEuNjkxaDE4LjMzOHY5LjE2OUgzOXpNNDguMTY5IDEwMC44NmgxOC4zMzh2OS4xNjlINDguMTY5eiIvPjxwYXRoIGQ9Ik00OC4xNjkgMTAwLjg2aDkuMTY5djE4LjMzOGgtOS4xNjl6TTM5IDczLjM1M2gxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSA4Mi41MjJoMTguMzM4djkuMTY5SDQ4LjE2OXpNMzkgNTUuMDE1aDE4LjMzOHY5LjE2OUgzOXpNNDguMTY5IDY0LjE4NGgxOC4zMzh2OS4xNjlINDguMTY5ek0zOSAzNi42NzZoMTguMzM4djkuMTY5SDM5ek00OC4xNjkgNDUuODQ2aDE4LjMzOHY5LjE2OUg0OC4xNjl6TTM5IDE4LjMzOGgxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSAyNy41MDdoMTguMzM4djkuMTY5SDQ4LjE2OXpNMzkgMGgxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSA5LjE2OWgxOC4zMzh2OS4xNjlINDguMTY5eiIvPjxwYXRoIGQ9Ik01Mi43NTQgMTE3LjAzYzcuNTk2IDAgMTMuNzUzIDYuMTU3IDEzLjc1MyAxMy43NTN2MTMuNzU0YTkuMTcgOS4xNyAwIDAgMS05LjE2OSA5LjE2OUg0OC4xN2E5LjE3IDkuMTcgMCAwIDEtOS4xNjktOS4xN3YtMTMuNzUzYzAtNy41OTYgNi4xNTgtMTMuNzU0IDEzLjc1NC0xMy43NTRabTAgOS4xNjlhNC41ODUgNC41ODUgMCAwIDAtNC41ODUgNC41ODR2OS4xN2E0LjU4NSA0LjU4NSAwIDEgMCA5LjE3IDB2LTkuMTdhNC41ODUgNC41ODUgMCAwIDAtNC41ODUtNC41ODRaIi8+PC9nPjwvZz48L2c+PC9zdmc+Cg==";
        ;
        var Code = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xNDUgMjEwSDE1Yy04LjMgMC0xNS02LjctMTUtMTVWMTVDMCA2LjcgNi43IDAgMTUgMGg5NWw1MCA1MHYxNDVjMCA4LjMtNi43IDE1LTE1IDE1WiIgZmlsbD0iIzQwNzREMSIvPjxwYXRoIGZpbGw9IiM4RkIwRUEiIGQ9Ik0xNjAgNTBoLTUwVjB6Ii8+PHBhdGggZmlsbD0iIzQwNjM5RSIgZD0ibTExMCA1MCA1MCA1MFY1MHoiLz48cGF0aCBkPSJNNjkuNjUxIDE2MC4wNjN2LTUuNDE3SDY0LjJjLTMuNDc0IDAtNS43NjYtLjUwMy02Ljg3NC0xLjUwOS0xLjEwOS0xLjAwNi0xLjY2My0yLjIxNy0xLjY2My0zLjYzNCAwLTEuMDUyLjIyOC0yLjY3NC42ODYtNC44NjlsLjg5MS00LjAxMWMuNDgtMi4xNDkuNzItMy44ODYuNzItNS4yMTIgMC0xLjUwOC0uMjU3LTIuODQ1LS43NzEtNC4wMTEtLjUxNS0xLjE2Ni0xLjI4LTIuMjk3LTIuMjk4LTMuMzk0LTEuMDE3LTEuMDk3LTIuNjExLTIuMjE3LTQuNzgyLTMuMzYgMi4xNzEtMS4xNDMgMy43NjUtMi4yNjkgNC43ODItMy4zNzcgMS4wMTgtMS4xMDkgMS43ODMtMi4yNCAyLjI5OC0zLjM5NS41MTQtMS4xNTQuNzcxLTIuNDg1Ljc3MS0zLjk5NCAwLTEuMzI2LS4yNC0zLjA3NC0uNzItNS4yNDZsLS44OTEtNC4wMTFjLS40NTgtMi4xNzItLjY4Ni0zLjc3Mi0uNjg2LTQuOCAwLTEuNDYzLjU2LTIuNjkyIDEuNjgtMy42ODYgMS4xMi0uOTk0IDMuNDA2LTEuNDkxIDYuODU3LTEuNDkxaDUuNDUxVjg5LjE2aC01LjUyYy02LjQyMiAwLTEwLjU2IDEuMDQtMTIuNDExIDMuMTItMS44NTEgMi4wOC0yLjc3NyA0LjQxMS0yLjc3NyA2Ljk5NCAwIDEuMzcyLjE3MSAyLjg2OS41MTQgNC40OTJsLjY1MiAyLjgxMS41ODIgMy4wNTIuNDQ2IDEuODE3Yy4xNi44LjI0IDEuNjIzLjI0IDIuNDY4IDAgMi4yODYtLjc0MyA0LjE4OS0yLjIyOCA1LjcwOS0xLjQ4NiAxLjUyLTQuMDU4IDIuMjgtNy43MTUgMi4yOEgzOC4yOHY1LjQ1MWgzLjE1NGMzLjcwMyAwIDYuMjg2Ljc3MiA3Ljc0OSAyLjMxNSAxLjQ2MyAxLjU0MiAyLjE5NCAzLjQxMSAyLjE5NCA1LjYwNSAwIC44LS4wOCAxLjYzNS0uMjQgMi41MDNsLS40NDYgMS44ODYtLjU4MiAzLjA1MS0uNjUyIDIuODEyYy0uMzQzIDEuNi0uNTE0IDMuMDg1LS41MTQgNC40NTcgMCAyLjYwNi45MjYgNC45MzcgMi43NzcgNi45OTQgMS44NTEgMi4wNTcgNS45ODkgMy4wODYgMTIuNDExIDMuMDg2aDUuNTJabTI3LjI0NiAwYzYuNDIzIDAgMTAuNTY2LTEuMDIzIDEyLjQyOS0zLjA2OSAxLjg2My0yLjA0NSAyLjc5NC00LjM3MSAyLjc5NC02Ljk3NyAwLTEuMzcxLS4xODMtMi44NjgtLjU0OS00LjQ5MWwtLjY1MS0yLjgxMi0uNTgzLTMuMDUxLS40MTEtMS44ODZjLS4xODMtLjgtLjI3NS0xLjYtLjI3NS0yLjQgMC0yLjI4Ni43NDktNC4xOTQgMi4yNDYtNS43MjYgMS40OTctMS41MzEgNC4wNzQtMi4yOTcgNy43MzItMi4yOTdoMy4xMnYtNS40NTFoLTMuMTJjLTMuNzAzIDAtNi4yOTItLjc3Mi03Ljc2Ni0yLjMxNC0xLjQ3NC0xLjU0My0yLjIxMi0zLjQtMi4yMTItNS41NzIgMC0uODIzLjA5Mi0xLjY4LjI3NS0yLjU3MWwuNDExLTEuODE3LjU4My0zLjA1Mi42NTEtMi44MTFjLjM2Ni0xLjYuNTQ5LTMuMDk3LjU0OS00LjQ5MiAwLTIuNTgzLS45MzEtNC45MTQtMi43OTQtNi45OTRzLTYuMDA2LTMuMTItMTIuNDI5LTMuMTJoLTUuNTJ2NS40ODZoNS40NTJjMy40NzQgMCA1Ljc2NS40OTcgNi44NzQgMS40OTEgMS4xMDguOTk0IDEuNjYzIDIuMjEyIDEuNjYzIDMuNjUyIDAgMS4wNTEtLjIyOSAyLjY2Mi0uNjg2IDQuODM0bC0uODkxIDQuMDExYy0uNDM1IDIuMTcyLS42NTIgMy45Mi0uNjUyIDUuMjQ2IDAgMS41MDkuMjQ2IDIuODQuNzM3IDMuOTk0LjQ5MiAxLjE1NSAxLjI0NiAyLjI4NiAyLjI2MyAzLjM5NSAxLjAxNyAxLjEwOCAyLjYxMiAyLjIzNCA0Ljc4MyAzLjM3Ny0yLjE3MSAxLjE0My0zLjc2NiAyLjI2My00Ljc4MyAzLjM2LTEuMDE3IDEuMDk3LTEuNzcxIDIuMjI4LTIuMjYzIDMuMzk0LS40OTEgMS4xNjYtLjczNyAyLjUwMy0uNzM3IDQuMDExIDAgMS4zMjYuMjE3IDMuMDYzLjY1MiA1LjIxMmwuODkxIDQuMDExYy40NTcgMi4xOTUuNjg2IDMuODA2LjY4NiA0LjgzNSAwIDEuNDQtLjU1NSAyLjY2Mi0xLjY2MyAzLjY2OC0xLjEwOSAxLjAwNi0zLjQgMS41MDktNi44NzQgMS41MDloLTUuNDUydjUuNDE3aDUuNTJaIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPgo=";
        ;
        var svgs_Image = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM0ZDhhZmEiLz48cGF0aCBmaWxsPSIjOTViNmZmIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiMzZTcxZTQiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTI3IDE3MUgzM3YtMTguODU3bDI3LjExOC0zMy4wNDkgMzkuNzExIDMzLjA0OUwxMjcgMTQwLjI4OXpNMTMxIDExMC41YzAgOC4wMDktNi40OTEgMTQuNS0xNC41IDE0LjVzLTE0LjUtNi40OTEtMTQuNS0xNC41UzEwOC40OTEgOTYgMTE2LjUgOTZzMTQuNSA2LjQ5MSAxNC41IDE0LjVaIi8+PC9nPjwvZz48L2c+PC9zdmc+Cg==";
        ;
        var Video = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM4QzUwRTciLz48cGF0aCBmaWxsPSIjQjM4MEZGIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiM3QzNGRDgiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0iTTEyNi45NTggMTA0SDMzLjA0MkEyLjA0MiAyLjA0MiAwIDAgMCAzMSAxMDYuMDMxdjYwLjkzOGMwIDEuMTE3LjkxOSAyLjAzMSAyLjA0MiAyLjAzMWg5My45MTZhMi4wNDIgMi4wNDIgMCAwIDAgMi4wNDItMi4wMzFWMTA2LjAzYTIuMDQyIDIuMDQyIDAgMCAwLTIuMDQyLTIuMDMxWm0tNzkuNjI1IDQuMDYzdjguMTI0aC04LjE2NnYtOC4xMjRoOC4xNjZabS04LjE2NiAzNi41NjJoOC4xNjZ2OC4xMjVoLTguMTY2di04LjEyNVptMC00LjA2M3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm0wLTEyLjE4N3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm0wIDM2LjU2M3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm02NS4zMzMtNC4wNjNoLTQ5di00OC43NWg0OXY0OC43NVptMTYuMzMzLTguMTI1aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabTAtMTIuMTg4aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabTAtMTIuMTg3aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabS04LjE2NiAzNi41NjN2LTguMTI1aDguMTY2djguMTI1aC04LjE2NlptOC4xNjYtNDguNzVoLTguMTY2di04LjEyNmg4LjE2NnY4LjEyNloiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L2c+PC9zdmc+Cg==";
        ;
        var Audio = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiMwNzkxRkYiLz48cGF0aCBmaWxsPSIjQjNEREZGIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiMwQTdDRDkiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0iTTg5LjQwNSA5NS4wMWM5LjQ4IDIuMDQ1IDE3LjI4MSA2LjkwNCAyMy40MDcgMTQuNTc4IDYuMTI1IDcuNjc0IDkuMTg4IDE2LjQ4IDkuMTg4IDI2LjQxNyAwIDkuOTM3LTMuMDYzIDE4Ljc0My05LjE4OCAyNi40MTYtNi4xMjYgNy42NzQtMTMuOTI4IDEyLjUzNC0yMy40MDcgMTQuNTc5di05LjY0OWM2Ljg1NC0yLjA0NSAxMi40MzEtNS45MTggMTYuNzM0LTExLjYxOCA0LjMwMi01LjcgNi40NTQtMTIuMjc4IDYuNDU0LTE5LjczM3MtMi4xNTItMTQuMDMzLTYuNDU0LTE5LjczM2MtNC4zMDMtNS43LTkuODgtOS41NzMtMTYuNzM0LTExLjYxOFY5NXYuMDFabTExLjU5MiA0MWMwIDguNzctMy44NjQgMTUuMDU1LTExLjU5MiAxOC44NTN2LTM3LjcxMmMzLjIwOCAxLjYwOSA1Ljk0MiA0LjI0IDguMjA0IDcuODk1IDIuMjYxIDMuNjU1IDMuMzkyIDcuMzA5IDMuMzkyIDEwLjk2M2gtLjAwNFpNMzggMTIxLjk3N2gxOC41OTFsMjMuNDA3LTIzLjQ2djc0Ljk3OWwtMjMuNDA3LTIzLjQ2SDM4di0yOC4wNjQuMDA1WiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvZz48L3N2Zz4K";
        ;
        var Unknown = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xNDUgMjEwSDE1Yy04LjMgMC0xNS02LjctMTUtMTVWMTVDMCA2LjcgNi43IDAgMTUgMGg5NWw1MCA1MHYxNDVjMCA4LjMtNi43IDE1LTE1IDE1WiIgZmlsbD0iI2M5ZGNmZCIvPjxwYXRoIGZpbGw9IiNFQ0YzRkYiIGQ9Ik0xNjAgNTBoLTUwVjB6Ii8+PHBhdGggZmlsbD0iI2JjZDRmZSIgZD0ibTExMCA1MCA1MCA1MFY1MHoiLz48L2c+PC9zdmc+Cg==";
        ;
        function getFileIconImageSource(fileName, mime) {
          var _a;
          var fn2 = fileName.toLowerCase().trim();
          var result = fileExtensionIcons.find(function(x4) {
            return x4.extensions.some(function(ext) {
              return fn2.endsWith(ext);
            }) || x4.mime.some(function(m3) {
              return mime.startsWith(m3);
            });
          });
          return (_a = result === null || result === void 0 ? void 0 : result.icon) !== null && _a !== void 0 ? _a : Unknown;
        }
        var fileExtensionIcons = [{
          icon: Document,
          extensions: [".docx", ".doc", ".txt", ".md", ".markdown", ".mkdown", ".mkdn", ".pdf"],
          mime: ["application/x-abiword", "application/msword", "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
        }, {
          icon: Spreadsheet,
          extensions: [".xlsx", ".xls", ".csv", ".tsv", ".psv"],
          mime: ["application/ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]
        }, {
          icon: Slideshow,
          extensions: [".pptx", ".ppt"],
          mime: ["application/vnd.apple.keynote", "application/ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation"]
        }, {
          icon: Archive,
          extensions: [".zip", ".tar", ".tar.gz", ".rar"],
          mime: []
        }, {
          icon: svgs_Image,
          extensions: [],
          mime: ["image/"]
        }, {
          icon: Video,
          extensions: [],
          mime: ["video/"]
        }, {
          icon: Audio,
          extensions: [],
          mime: ["audio/"]
        }, {
          icon: Code,
          extensions: [".json", ".js", ".ts", ".htm", ".html", ".css", ".sass"],
          mime: []
        }];
        var SubmittedFileComponent = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/files/SubmittedFileComponent.scss");
        ;
        var SubmittedFileComponent_options = {};
        SubmittedFileComponent_options.styleTagTransform = styleTagTransform_default();
        SubmittedFileComponent_options.setAttributes = setAttributesWithoutAttributes_default();
        SubmittedFileComponent_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        SubmittedFileComponent_options.domAPI = styleDomAPI_default();
        SubmittedFileComponent_options.insertStyleElement = insertStyleElement_default();
        var SubmittedFileComponent_update = injectStylesIntoStyleTag_default()(SubmittedFileComponent.default, SubmittedFileComponent_options);
        var files_SubmittedFileComponent = SubmittedFileComponent.default && SubmittedFileComponent.default.locals ? SubmittedFileComponent.default.locals : void 0;
        ;
        var svgs_Error = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNkMjNmNGQiIGN4PSIxNSIgY3k9IjE1IiByPSIxNSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuNiA3LjYpIiBmaWxsPSIjRkZGIj48cmVjdCB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgNy40MjUgNy40MjUpIiB4PSI1LjkyNSIgeT0iLTEuNTc1IiB3aWR0aD0iMyIgaGVpZ2h0PSIxOCIgcng9IjEuNSIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDcuNDI1IDcuNDI1KSIgeD0iNS45MjUiIHk9Ii0xLjU3NSIgd2lkdGg9IjMiIGhlaWdodD0iMTgiIHJ4PSIxLjUiLz48L2c+PC9nPjwvc3ZnPgo=";
        ;
        var Link = function Link2(_ref) {
          var prefix = _ref.prefix, suffix = _ref.suffix, text = _ref.text, url = _ref.url;
          return (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
            children: [prefix, " ", (0, jsx_runtime_namespaceObject.jsx)("a", Object.assign({
              href: url,
              target: "_blank",
              rel: "noopener"
            }, {
              children: text
            })), " ", suffix]
          });
        };
        function replaceFirstLink(text) {
          var matches = /^(.*?)(https?:\/\/[^\s)]+)(.*?)$/.exec(text);
          if (matches === null) {
            return void 0;
          }
          var prefix = matches[1];
          var url = matches[2];
          var suffix = matches[3];
          return (0, jsx_runtime_namespaceObject.jsx)(Link, {
            text: url,
            url,
            prefix,
            suffix
          });
        }
        function replaceUploadIo(text) {
          var find = "bytescale";
          var index = text.toLowerCase().indexOf(find);
          if (index === -1) {
            return void 0;
          }
          return (0, jsx_runtime_namespaceObject.jsx)(Link, {
            text: "Bytescale",
            url: "https://www.bytescale.com/pricing",
            prefix: text.substring(0, index),
            suffix: text.substring(index + find.length)
          });
        }
        var Hypermedia = function Hypermedia2(_ref2) {
          var text = _ref2.text;
          var _a, _b;
          return (_b = (_a = replaceFirstLink(text)) !== null && _a !== void 0 ? _a : replaceUploadIo(text)) !== null && _b !== void 0 ? _b : (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {
            children: text
          });
        };
        ;
        function SubmittedFileComponent_slicedToArray(arr, i3) {
          return SubmittedFileComponent_arrayWithHoles(arr) || SubmittedFileComponent_iterableToArrayLimit(arr, i3) || SubmittedFileComponent_unsupportedIterableToArray(arr, i3) || SubmittedFileComponent_nonIterableRest();
        }
        function SubmittedFileComponent_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function SubmittedFileComponent_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return SubmittedFileComponent_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return SubmittedFileComponent_arrayLikeToArray(o4, minLen);
        }
        function SubmittedFileComponent_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function SubmittedFileComponent_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function SubmittedFileComponent_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var removalAnimationTime = 1e3;
        var SubmittedFileComponent_SubmittedFileComponent = function SubmittedFileComponent2(_ref) {
          var file = _ref.file, fileCount = _ref.fileCount, remove = _ref.remove, locale = _ref.locale, showRemoveButton = _ref.showRemoveButton;
          var _a, _b;
          var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = SubmittedFileComponent_slicedToArray(_useState, 2), isDelayedRemove = _useState2[0], setIsDelayedRemove = _useState2[1];
          var delayedRemove = function delayedRemove2() {
            setIsDelayedRemove(true);
          };
          (0, compat_namespaceObject.useEffect)(function() {
            if (!isDelayedRemove) {
              return;
            }
            var timeout = setTimeout(function() {
              remove();
            }, removalAnimationTime);
            return function() {
              return clearTimeout(timeout);
            };
          }, [isDelayedRemove]);
          var progressMargin = 0.02;
          var thumbnail = Unknown;
          var progress = 0;
          var fileName;
          var fileMessage;
          switch (file.type) {
            case "preprocessing":
              progress = 0;
              fileName = file.file.name;
              fileMessage = locale.processingFile;
              break;
            case "uploading":
              progress = Math.min(file.progress, 1 - progressMargin);
              fileName = file.file.name;
              break;
            case "uploaded":
              progress = 1;
              thumbnail = getFileIconImageSource(file.uploadedFile.file.name, file.uploadedFile.mime);
              fileName = file.uploadedFile.file.name;
              break;
            case "error":
              progress = 1;
              thumbnail = svgs_Error;
              fileMessage = (_b = (_a = file.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : "Unexpected error occurred.";
              fileName = file.file.name;
              break;
            default:
              assertUnreachable(file);
          }
          return (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
            className: external_classnames_default()("uploader__submitted-file", {
              "uploader__submitted-file--loners": fileCount <= 2
            })
          }, {
            children: (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
              className: "uploader__submitted-file__container"
            }, {
              children: (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                className: "uploader__submitted-file__inner"
              }, {
                children: [(0, jsx_runtime_namespaceObject.jsx)(ProgressIcon_ProgressIcon, {
                  progress: Math.max(progressMargin, progress),
                  onCompleteImageSource: thumbnail,
                  height: 15,
                  isError: file.type === "error"
                }), " ", (0, jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
                  className: "uploader__submitted-file__text"
                }, {
                  children: [(0, jsx_runtime_namespaceObject.jsx)("span", Object.assign({
                    className: "uploader__submitted-file__name",
                    title: fileName
                  }, {
                    children: fileName
                  })), fileMessage !== void 0 && (0, jsx_runtime_namespaceObject.jsx)("span", Object.assign({
                    className: "uploader__submitted-file__message"
                  }, {
                    children: (0, jsx_runtime_namespaceObject.jsx)(Hypermedia, {
                      text: fileMessage
                    })
                  }))]
                })), isDelayedRemove ? (0, jsx_runtime_namespaceObject.jsx)("span", Object.assign({
                  className: "uploader__submitted-file__action uploader__submitted-file__action--performed"
                }, {
                  children: file.type === "uploading" ? locale["cancelled!"] : locale["removed!"]
                })) : (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {
                  children: (showRemoveButton || file.type === "uploading") && (0, jsx_runtime_namespaceObject.jsx)("a", Object.assign({
                    className: "uploader__submitted-file__action",
                    href: "#remove",
                    onClick: function onClick(e3) {
                      e3.preventDefault();
                      delayedRemove();
                    }
                  }, {
                    children: file.type === "uploading" ? locale.cancel : locale.remove
                  }))
                })]
              }))
            }))
          }));
        };
        var UploaderMainScreen = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/screens/UploaderMainScreen.scss");
        ;
        var UploaderMainScreen_options = {};
        UploaderMainScreen_options.styleTagTransform = styleTagTransform_default();
        UploaderMainScreen_options.setAttributes = setAttributesWithoutAttributes_default();
        UploaderMainScreen_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        UploaderMainScreen_options.domAPI = styleDomAPI_default();
        UploaderMainScreen_options.insertStyleElement = insertStyleElement_default();
        var UploaderMainScreen_update = injectStylesIntoStyleTag_default()(UploaderMainScreen.default, UploaderMainScreen_options);
        var screens_UploaderMainScreen = UploaderMainScreen.default && UploaderMainScreen.default.locals ? UploaderMainScreen.default.locals : void 0;
        ;
        var UploaderMainScreen_UploaderMainScreen = function UploaderMainScreen2(_ref) {
          var addFiles = _ref.addFiles, submittedFiles = _ref.submittedFiles, uploadedFiles = _ref.uploadedFiles, options2 = _ref.options, _remove = _ref.remove, finalize = _ref.finalize, isImageUploader = _ref.isImageUploader;
          var finishedUploading = submittedFiles.every(function(x4) {
            return x4.type !== "uploading";
          });
          var canFinish = finishedUploading && uploadedFiles.length > 0;
          var locale = options2.locale;
          var hasButtons = options2.multi || options2.showFinishButton;
          return (
            // Div required to break-out of flex-box layout.
            (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
              className: "uploader__main-screen"
            }, {
              children: [(0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                className: "uploader__main-screen__file-list"
              }, {
                children: (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                  className: "uploader__main-screen__file-list__inner"
                }, {
                  children: submittedFiles.map(function(file) {
                    return (0, jsx_runtime_namespaceObject.jsx)(SubmittedFileComponent_SubmittedFileComponent, {
                      file,
                      fileCount: submittedFiles.length,
                      locale,
                      remove: function remove() {
                        return _remove(file.fileIndex);
                      },
                      showRemoveButton: options2.showRemoveButton
                    }, file.fileIndex);
                  })
                }))
              })), hasButtons && (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                className: "uploader__controls"
              }, {
                children: [options2.multi && (options2.maxFileCount === void 0 || submittedFiles.length < options2.maxFileCount ? (0, jsx_runtime_namespaceObject.jsx)(UploadButton, {
                  options: options2,
                  text: isImageUploader ? locale.addAnotherImage : locale.addAnotherFile,
                  onUpload: addFiles
                }) : (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                  className: "uploader__main-screen__info"
                }, {
                  children: [isImageUploader ? locale.maxImagesReached : locale.maxFilesReached, " ", options2.maxFileCount]
                }))), options2.showFinishButton && (0, jsx_runtime_namespaceObject.jsx)("a", Object.assign({
                  href: "#done",
                  className: external_classnames_default()("btn btn--primary", {
                    disabled: !canFinish
                  }),
                  onClick: function onClick(e3) {
                    e3.preventDefault();
                    if (canFinish) {
                      finalize();
                    }
                  }
                }, {
                  children: finishedUploading ? (0, jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
                    className: "vcenter hcenter"
                  }, {
                    children: [locale.finish, " ", locale.finishIcon && (0, jsx_runtime_namespaceObject.jsx)(RightSvg, {
                      width: 12,
                      className: "ml-2"
                    })]
                  })) : locale.pleaseWait
                }))]
              }))]
            }))
          );
        };
        ;
        function isUploadedFile(file) {
          return file.type === "uploaded";
        }
        ;
        function UseDragDrop_slicedToArray(arr, i3) {
          return UseDragDrop_arrayWithHoles(arr) || UseDragDrop_iterableToArrayLimit(arr, i3) || UseDragDrop_unsupportedIterableToArray(arr, i3) || UseDragDrop_nonIterableRest();
        }
        function UseDragDrop_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseDragDrop_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UseDragDrop_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return UseDragDrop_arrayLikeToArray(o4, minLen);
        }
        function UseDragDrop_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function UseDragDrop_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function UseDragDrop_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function useDragDrop(acceptFiles) {
          var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = UseDragDrop_slicedToArray(_useState, 2), isDragging = _useState2[0], setIsDragging = _useState2[1];
          var handleDragEnter = function handleDragEnter2(e3) {
            e3.preventDefault();
            e3.stopPropagation();
            setIsDragging(true);
          };
          var handleDragLeave = function handleDragLeave2(e3) {
            var _a;
            e3.preventDefault();
            e3.stopPropagation();
            if (e3.relatedTarget !== null && ((_a = e3 === null || e3 === void 0 ? void 0 : e3.currentTarget) === null || _a === void 0 ? void 0 : _a.contains(e3.relatedTarget)) === true) {
              return;
            }
            setIsDragging(false);
          };
          var handleDragOver = function handleDragOver2(e3) {
            e3.preventDefault();
            e3.stopPropagation();
            if (e3.dataTransfer !== null) {
              e3.dataTransfer.dropEffect = "copy";
            }
          };
          var handleDrop = function handleDrop2(e3) {
            e3.preventDefault();
            e3.stopPropagation();
            setIsDragging(false);
            if (e3.dataTransfer !== null) {
              var files = Array.from(e3.dataTransfer.files);
              if (files.length > 0) {
                acceptFiles(files);
              }
            }
          };
          return {
            isDragging,
            onDrop: function onDrop(e3) {
              return handleDrop(e3);
            },
            onDragOver: function onDragOver(e3) {
              return handleDragOver(e3);
            },
            onDragEnter: function onDragEnter(e3) {
              return handleDragEnter(e3);
            },
            onDragLeave: function onDragLeave(e3) {
              return handleDragLeave(e3);
            }
          };
        }
        ;
        function humanFileSize(bytes) {
          var dp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          var reference = bytes;
          var thresh = 1024;
          var sep = " ";
          var r3 = Math.pow(10, dp);
          var units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
          var magnitude = 0;
          if (Math.abs(reference) < thresh) {
            return "".concat(reference).concat(sep).concat(units[magnitude]);
          }
          do {
            bytes /= thresh;
            reference /= thresh;
            ++magnitude;
          } while (Math.round(Math.abs(reference) * r3) / r3 >= thresh && magnitude < units.length - 1);
          var number = bytes.toFixed(dp);
          return number + sep + units[magnitude];
        }
        ;
        var UploadWidgetResult;
        (function(UploadWidgetResult2) {
          function from(upload, originalFile, editedFile) {
            var _a;
            var calculateFileUrl = function calculateFileUrl2() {
              if (editedFile === void 0) {
                return upload.url(originalFile.filePath);
              }
              return upload.url(editedFile.filePath, {
                transformation: "image"
              });
            };
            return {
              editedFile,
              originalFile,
              fileUrl: calculateFileUrl(),
              filePath: (_a = editedFile === null || editedFile === void 0 ? void 0 : editedFile.filePath) !== null && _a !== void 0 ? _a : originalFile.filePath
            };
          }
          UploadWidgetResult2.from = from;
        })(UploadWidgetResult || (UploadWidgetResult = {}));
        ;
        var RectWithPos;
        (function(RectWithPos2) {
          function toCssProps(r3) {
            return {
              width: r3.width,
              height: r3.height,
              left: r3.x,
              top: r3.y
            };
          }
          RectWithPos2.toCssProps = toCssProps;
        })(RectWithPos || (RectWithPos = {}));
        var ResizableSquare = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.scss");
        ;
        var ResizableSquare_options = {};
        ResizableSquare_options.styleTagTransform = styleTagTransform_default();
        ResizableSquare_options.setAttributes = setAttributesWithoutAttributes_default();
        ResizableSquare_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        ResizableSquare_options.domAPI = styleDomAPI_default();
        ResizableSquare_options.insertStyleElement = insertStyleElement_default();
        var ResizableSquare_update = injectStylesIntoStyleTag_default()(ResizableSquare.default, ResizableSquare_options);
        var shapes_ResizableSquare = ResizableSquare.default && ResizableSquare.default.locals ? ResizableSquare.default.locals : void 0;
        ;
        function Draggable_slicedToArray(arr, i3) {
          return Draggable_arrayWithHoles(arr) || Draggable_iterableToArrayLimit(arr, i3) || Draggable_unsupportedIterableToArray(arr, i3) || Draggable_nonIterableRest();
        }
        function Draggable_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Draggable_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return Draggable_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return Draggable_arrayLikeToArray(o4, minLen);
        }
        function Draggable_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function Draggable_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function Draggable_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var Draggable = function Draggable2(_ref) {
          var boundary = _ref.boundary, children = _ref.children, className = _ref.className, onMoveCallback = _ref.onMove, style = _ref.style, startingValue = _ref.startingValue, geometryMutatorId = _ref.geometryMutatorId;
          var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = Draggable_slicedToArray(_useState, 2), isDragging = _useState2[0], setIsDragging = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(0), _useState4 = Draggable_slicedToArray(_useState3, 2), startX = _useState4[0], setStartX = _useState4[1];
          var _useState5 = (0, compat_namespaceObject.useState)(0), _useState6 = Draggable_slicedToArray(_useState5, 2), startY = _useState6[0], setStartY = _useState6[1];
          var _useState7 = (0, compat_namespaceObject.useState)(0), _useState8 = Draggable_slicedToArray(_useState7, 2), lastXDelta = _useState8[0], setLastXDelta = _useState8[1];
          var _useState9 = (0, compat_namespaceObject.useState)(0), _useState10 = Draggable_slicedToArray(_useState9, 2), lastYDelta = _useState10[0], setLastYDelta = _useState10[1];
          var _useState11 = (0, compat_namespaceObject.useState)(startingValue), _useState12 = Draggable_slicedToArray(_useState11, 2), start = _useState12[0], setStart = _useState12[1];
          var clip = function clip2(min, max, value) {
            return Math.min(Math.max(value, min), max);
          };
          var clipDimension = function clipDimension2(length, value) {
            return clip(length * -1, length, value);
          };
          var setPositionStart = function setPositionStart2(e3) {
            setStartX(e3.pageX);
            setStartY(e3.pageY);
          };
          var getPositionDelta = function getPositionDelta2(e3) {
            return {
              x: e3.pageX - startX + lastXDelta,
              y: e3.pageY - startY + lastYDelta
            };
          };
          var onDown = function onDown2(e3) {
            e3.stopPropagation();
            e3.target.setPointerCapture(e3.pointerId);
            setIsDragging(true);
            setPositionStart(e3);
            if (startingValue.lastUpdatedBy !== geometryMutatorId) {
              setLastXDelta(0);
              setLastYDelta(0);
              setStart(startingValue);
            }
          };
          var onUp = function onUp2(e3) {
            setIsDragging(false);
            e3.target.releasePointerCapture(e3.pointerId);
            var _getPositionDelta = getPositionDelta(e3), x4 = _getPositionDelta.x, y3 = _getPositionDelta.y;
            setLastYDelta(clipDimension(boundary.height, y3));
            setLastXDelta(clipDimension(boundary.width, x4));
          };
          var onMove = function onMove2(e3) {
            if (!isDragging) {
              return;
            }
            var _getPositionDelta2 = getPositionDelta(e3), x4 = _getPositionDelta2.x, y3 = _getPositionDelta2.y;
            onMoveCallback(x4, y3, start);
          };
          var onTouchStart = function onTouchStart2(e3) {
            e3.preventDefault();
          };
          return (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
            className,
            style,
            onPointerDown: onDown,
            onPointerMove: onMove,
            onPointerUp: onUp,
            onPointerCancel: onUp,
            onTouchStart
          }, {
            children
          }));
        };
        ;
        function ResizableSquare_slicedToArray(arr, i3) {
          return ResizableSquare_arrayWithHoles(arr) || ResizableSquare_iterableToArrayLimit(arr, i3) || ResizableSquare_unsupportedIterableToArray(arr, i3) || ResizableSquare_nonIterableRest();
        }
        function ResizableSquare_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ResizableSquare_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return ResizableSquare_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return ResizableSquare_arrayLikeToArray(o4, minLen);
        }
        function ResizableSquare_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function ResizableSquare_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function ResizableSquare_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var CornerDragger = function CornerDragger2(_ref) {
          var boundary = _ref.boundary, corner = _ref.corner, geometry = _ref.geometry, setGeometry = _ref.setGeometry;
          return (0, jsx_runtime_namespaceObject.jsx)(Draggable, {
            className: "uploader__resizable-square__".concat(corner),
            boundary,
            geometryMutatorId: corner,
            startingValue: geometry,
            onMove: function onMove(x4, y3, g4) {
              return setGeometry(corner, {
                x: corner === "nw" || corner === "sw" ? g4.x + x4 : g4.x,
                y: corner === "nw" || corner === "ne" ? g4.y + y3 : g4.y,
                width: corner === "nw" || corner === "sw" ? g4.width - x4 : g4.width + x4,
                height: corner === "nw" || corner === "ne" ? g4.height - y3 : g4.height + y3
              });
            }
          });
        };
        var ResizableSquare_ResizableSquare = function ResizableSquare2(_ref2) {
          var boundary = _ref2.boundary, ratio = _ref2.ratio, onResized = _ref2.onResized, children = _ref2.children;
          var minSize = 50;
          var adjustedBoundary = {
            width: boundary.width - minSize,
            height: boundary.height - minSize
          };
          var reRatio = function reRatio2(g4, fixed) {
            if (ratio === void 0) {
              return Object.assign(Object.assign({}, g4), {
                lastUpdatedBy: fixed
              });
            }
            var width = Math.min(g4.height * ratio, g4.width);
            var height = width / ratio;
            return {
              lastUpdatedBy: fixed,
              height,
              width,
              x: fixed === "ne" || fixed === "se" ? g4.x : fixed === "center" ? g4.x + g4.width / 2 - width / 2 : g4.x + (g4.width - width),
              y: fixed === "sw" || fixed === "se" ? g4.y : fixed === "center" ? g4.y + g4.height / 2 - height / 2 : g4.y + (g4.height - height)
            };
          };
          var clip = function clip2(g4) {
            var x4 = Math.min(boundary.width - minSize, Math.max(0, g4.x));
            var y3 = Math.min(boundary.height - minSize, Math.max(0, g4.y));
            var xClip = Math.min(0, g4.x);
            var yClip = Math.min(0, g4.y);
            return {
              x: x4,
              y: y3,
              width: Math.max(minSize, Math.min(g4.width + xClip, boundary.width - x4)),
              height: Math.max(minSize, Math.min(g4.height + yClip, boundary.height - y3))
            };
          };
          var clipAndReRatio = function clipAndReRatio2(g4, fixed) {
            return reRatio(clip(g4), fixed);
          };
          var calculateInitialGeometry = function calculateInitialGeometry2() {
            return clipAndReRatio({
              x: 0,
              y: 0,
              width: boundary.width,
              height: boundary.height
            }, "center");
          };
          var _useState = (0, compat_namespaceObject.useState)(calculateInitialGeometry), _useState2 = ResizableSquare_slicedToArray(_useState, 2), geometry = _useState2[0], setGeometryUnsafe = _useState2[1];
          var setGeometry = function setGeometry2(corner, set) {
            return setGeometryUnsafe(clipAndReRatio(set, corner));
          };
          var onGeometryChange = function onGeometryChange2() {
            var isSameAsBoundary = geometry.x === 0 && geometry.y === 0 && geometry.width === boundary.width && geometry.height === boundary.height;
            onResized(isSameAsBoundary ? void 0 : {
              geometry,
              boundary
            });
          };
          (0, compat_namespaceObject.useLayoutEffect)(onGeometryChange, [geometry]);
          (0, compat_namespaceObject.useLayoutEffect)(function() {
            setGeometryUnsafe(calculateInitialGeometry());
            onGeometryChange();
          }, [boundary]);
          return (0, jsx_runtime_namespaceObject.jsxs)(Draggable, Object.assign({
            className: "uploader__resizable-square",
            boundary: adjustedBoundary,
            style: RectWithPos.toCssProps(geometry),
            geometryMutatorId: "center",
            startingValue: geometry,
            onMove: function onMove(x4, y3, g4) {
              return setGeometry("center", {
                x: g4.x + x4,
                y: g4.y + y3,
                width: g4.width,
                height: g4.height
              });
            }
          }, {
            children: [children, (0, jsx_runtime_namespaceObject.jsx)(CornerDragger, {
              corner: "nw",
              setGeometry,
              geometry,
              boundary: adjustedBoundary
            }), (0, jsx_runtime_namespaceObject.jsx)(CornerDragger, {
              corner: "ne",
              setGeometry,
              geometry,
              boundary: adjustedBoundary
            }), (0, jsx_runtime_namespaceObject.jsx)(CornerDragger, {
              corner: "se",
              setGeometry,
              geometry,
              boundary: adjustedBoundary
            }), (0, jsx_runtime_namespaceObject.jsx)(CornerDragger, {
              corner: "sw",
              setGeometry,
              geometry,
              boundary: adjustedBoundary
            })]
          }));
        };
        ;
        var isEditableImage = function isEditableImage2(originalImage) {
          return originalImage.mime.toLowerCase().startsWith("image/");
        };
        var isReadOnlyImage = function isReadOnlyImage2(originalImage) {
          var mime = originalImage.mime.toLowerCase();
          return mime.startsWith("application/pdf") || mime.startsWith("video/");
        };
        ;
        var nativelySupportedImages = ["image/jpeg", "image/gif", "image/png", "image/webp"];
        function calculateImagePreviewUrl(originalImage) {
          if (isImageNativelySupported(originalImage)) {
            return {
              url: URL.createObjectURL(originalImage.file),
              external: false,
              urlForDimensions: void 0
            };
          }
          var enlarge = requiresServeSideEnlargement(originalImage);
          var imageUrl = originalImage.fileUrl.replace("/raw/", "/image/");
          var maxDimension = 1e3;
          return {
            url: "".concat(imageUrl, "?f=webp&f2=jpg").concat(enlarge ? "&w=".concat(maxDimension, "&h=").concat(maxDimension, "&fit=max") : ""),
            external: true,
            urlForDimensions: enlarge ? "".concat(imageUrl, "?f=jpg") : void 0
          };
        }
        function isImageNativelySupported(originalImage) {
          return nativelySupportedImages.includes(originalImage.mime);
        }
        function requiresServeSideEnlargement(originalImage) {
          return isReadOnlyImage(originalImage) || originalImage.mime === "image/svg+xml";
        }
        var Spinner = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/Spinner.scss");
        ;
        var Spinner_options = {};
        Spinner_options.styleTagTransform = styleTagTransform_default();
        Spinner_options.setAttributes = setAttributesWithoutAttributes_default();
        Spinner_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        Spinner_options.domAPI = styleDomAPI_default();
        Spinner_options.insertStyleElement = insertStyleElement_default();
        var Spinner_update = injectStylesIntoStyleTag_default()(Spinner.default, Spinner_options);
        var editors_Spinner = Spinner.default && Spinner.default.locals ? Spinner.default.locals : void 0;
        ;
        function Spinner_slicedToArray(arr, i3) {
          return Spinner_arrayWithHoles(arr) || Spinner_iterableToArrayLimit(arr, i3) || Spinner_unsupportedIterableToArray(arr, i3) || Spinner_nonIterableRest();
        }
        function Spinner_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Spinner_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return Spinner_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return Spinner_arrayLikeToArray(o4, minLen);
        }
        function Spinner_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function Spinner_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function Spinner_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var Spinner_Spinner = function Spinner2() {
          var _a, _b;
          var _getElementDimensions = getElementDimensionsOnResize(true, []), _getElementDimensions2 = Spinner_slicedToArray(_getElementDimensions, 2), dimensions = _getElementDimensions2[0], containerRef = _getElementDimensions2[1];
          var relativeSize = 0.5;
          var lowestDim = Math.min((_a = dimensions === null || dimensions === void 0 ? void 0 : dimensions.width) !== null && _a !== void 0 ? _a : 0, (_b = dimensions === null || dimensions === void 0 ? void 0 : dimensions.height) !== null && _b !== void 0 ? _b : 0);
          var lowestDimCss = "".concat(Math.round(lowestDim * relativeSize), "px");
          return (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
            "class": "spinner__container",
            ref: containerRef
          }, {
            children: (0, jsx_runtime_namespaceObject.jsx)("div", {
              className: "spinner",
              style: {
                width: lowestDimCss,
                height: lowestDimCss
              }
            })
          }));
        };
        var ImageEditorLayout = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageEditorLayout.scss");
        ;
        var ImageEditorLayout_options = {};
        ImageEditorLayout_options.styleTagTransform = styleTagTransform_default();
        ImageEditorLayout_options.setAttributes = setAttributesWithoutAttributes_default();
        ImageEditorLayout_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        ImageEditorLayout_options.domAPI = styleDomAPI_default();
        ImageEditorLayout_options.insertStyleElement = insertStyleElement_default();
        var ImageEditorLayout_update = injectStylesIntoStyleTag_default()(ImageEditorLayout.default, ImageEditorLayout_options);
        var editors_ImageEditorLayout = ImageEditorLayout.default && ImageEditorLayout.default.locals ? ImageEditorLayout.default.locals : void 0;
        ;
        function ImageEditorLayout_slicedToArray(arr, i3) {
          return ImageEditorLayout_arrayWithHoles(arr) || ImageEditorLayout_iterableToArrayLimit(arr, i3) || ImageEditorLayout_unsupportedIterableToArray(arr, i3) || ImageEditorLayout_nonIterableRest();
        }
        function ImageEditorLayout_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ImageEditorLayout_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return ImageEditorLayout_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return ImageEditorLayout_arrayLikeToArray(o4, minLen);
        }
        function ImageEditorLayout_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function ImageEditorLayout_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function ImageEditorLayout_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var ImageEditorLayout_ImageEditorLayout = function ImageEditorLayout2(_ref) {
          var actions = _ref.actions, originalImage = _ref.originalImage, header = _ref.header, image = _ref.image, modal = _ref.modal;
          var _useState = (0, compat_namespaceObject.useState)(""), _useState2 = ImageEditorLayout_slicedToArray(_useState, 2), imageUrl = _useState2[0], setImageUrl = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(false), _useState4 = ImageEditorLayout_slicedToArray(_useState3, 2), imageLoaded = _useState4[0], setImageLoaded = _useState4[1];
          var _useState5 = (0, compat_namespaceObject.useState)(false), _useState6 = ImageEditorLayout_slicedToArray(_useState5, 2), imageLoadedReal = _useState6[0], setImageLoadedReal = _useState6[1];
          var _useState7 = (0, compat_namespaceObject.useState)("uploader__image-editor__image-".concat(Math.round(Math.random() * 1e5))), _useState8 = ImageEditorLayout_slicedToArray(_useState7, 1), containerId = _useState8[0];
          var _getElementDimensions = getElementDimensionsOnParentResize(imageLoadedReal, [imageUrl, imageLoaded]), _getElementDimensions2 = ImageEditorLayout_slicedToArray(_getElementDimensions, 3), imgDimensions = _getElementDimensions2[0], imgRef = _getElementDimensions2[1], containerRef = _getElementDimensions2[2];
          (0, compat_namespaceObject.useLayoutEffect)(function() {
            var _calculateImagePrevie = calculateImagePreviewUrl(originalImage), url = _calculateImagePrevie.url, external = _calculateImagePrevie.external;
            setImageUrl(url);
            setImageLoaded(!external);
            setImageLoadedReal(false);
          }, [originalImage.fileUrl]);
          return (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
            className: "uploader__image-editor"
          }, {
            children: [(0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
              className: external_classnames_default()({
                "uploader__image-editor__header": header !== void 0,
                "uploader__image-editor__header--empty-non-modal": header === void 0 && !modal
              })
            }, {
              children: header
            })), (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
              className: "uploader__image-editor__image",
              ref: containerRef
            }, {
              children: (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                className: "uploader__image-editor__image-padding"
              }, {
                children: [!imageLoaded && (0, jsx_runtime_namespaceObject.jsx)(Spinner_Spinner, {}), (0, jsx_runtime_namespaceObject.jsx)("img", {
                  id: containerId,
                  src: imageUrl,
                  onLoad: function onLoad() {
                    setImageLoaded(true);
                    setImageLoadedReal(true);
                  },
                  className: "uploader__image-editor__image-inner",
                  style: imageLoaded ? {} : {
                    display: "none"
                  },
                  ref: imgRef,
                  draggable: false
                }), imgDimensions !== void 0 && imageLoaded && image !== void 0 && image({
                  imgDimensions,
                  imageUrl
                })]
              }))
            })), (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
              className: "uploader__image-editor__actions uploader__controls uploader__controls--space"
            }, {
              children: actions
            }))]
          }));
        };
        ;
        var getImageEditorHeader = function getImageEditorHeader2(_ref) {
          var imageCount = _ref.imageCount, imageIndex = _ref.imageIndex, options2 = _ref.options;
          var locale = options2.locale;
          var multi = options2.multi ? {
            imageIndex,
            imageCount
          } : void 0;
          return multi === void 0 || multi.imageCount === 1 ? void 0 : (0, jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
            className: "text-secondary"
          }, {
            children: [locale.image, " ", multi.imageIndex + 1, " ", locale.of, " ", multi.imageCount]
          }));
        };
        ;
        function FormUtils_slicedToArray(arr, i3) {
          return FormUtils_arrayWithHoles(arr) || FormUtils_iterableToArrayLimit(arr, i3) || FormUtils_unsupportedIterableToArray(arr, i3) || FormUtils_nonIterableRest();
        }
        function FormUtils_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function FormUtils_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return FormUtils_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return FormUtils_arrayLikeToArray(o4, minLen);
        }
        function FormUtils_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function FormUtils_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function FormUtils_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var transientFlagTimeout = 1500;
        function useTransientFlag() {
          var _useState = (0, compat_namespaceObject.useState)(void 0), _useState2 = FormUtils_slicedToArray(_useState, 2), onTimeout = _useState2[0], setOnTimeout = _useState2[1];
          var flag = onTimeout !== void 0;
          (0, compat_namespaceObject.useEffect)(function() {
            if (onTimeout !== void 0) {
              var handle = setTimeout(function() {
                setOnTimeout(void 0);
                onTimeout();
              }, transientFlagTimeout);
              return function() {
                return clearTimeout(handle);
              };
            }
            return function() {
            };
          }, [flag]);
          return [flag, function(onTimeout2) {
            return setOnTimeout(onTimeout2 !== null && onTimeout2 !== void 0 ? onTimeout2 : function() {
            });
          }];
        }
        ;
        function SubmitButton_slicedToArray(arr, i3) {
          return SubmitButton_arrayWithHoles(arr) || SubmitButton_iterableToArrayLimit(arr, i3) || SubmitButton_unsupportedIterableToArray(arr, i3) || SubmitButton_nonIterableRest();
        }
        function SubmitButton_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function SubmitButton_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return SubmitButton_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return SubmitButton_arrayLikeToArray(o4, minLen);
        }
        function SubmitButton_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function SubmitButton_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function SubmitButton_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var SubmitButton = function SubmitButton2(_ref) {
          var busyText = _ref.busyText, idleText = _ref.idleText, locale = _ref.locale, onSubmit = _ref.onSubmit, showIcon = _ref.showIcon;
          var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = SubmitButton_slicedToArray(_useState, 2), isSubmitting = _useState2[0], setIsSubmitting = _useState2[1];
          var _useTransientFlag = useTransientFlag(), _useTransientFlag2 = SubmitButton_slicedToArray(_useTransientFlag, 2), isError = _useTransientFlag2[0], setIsError = _useTransientFlag2[1];
          var isDisabled = isSubmitting || isError;
          var submitAsync = function submitAsync2(e3) {
            e3.preventDefault();
            setIsSubmitting(true);
            onSubmit().then(function() {
            }, function(e4) {
              console.error(e4);
              setIsError();
              setIsSubmitting(false);
            });
          };
          return (0, jsx_runtime_namespaceObject.jsxs)("button", Object.assign({
            disabled: isDisabled,
            onClick: submitAsync,
            className: external_classnames_default()("btn btn--primary", {
              disabled: isDisabled
            })
          }, {
            children: [isSubmitting ? busyText : isError ? locale["error!"] : idleText, " ", showIcon && (0, jsx_runtime_namespaceObject.jsx)(RightSvg, {
              width: 12,
              className: "ml-2"
            })]
          }));
        };
        ;
        function ImageEditorButtons_await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function ImageEditorButtons_async(f3) {
          return function() {
            for (var args = [], i3 = 0; i3 < arguments.length; i3++) {
              args[i3] = arguments[i3];
            }
            try {
              return Promise.resolve(f3.apply(this, args));
            } catch (e3) {
              return Promise.reject(e3);
            }
          };
        }
        var ImageEditorButtons = function ImageEditorButtons2(_ref) {
          var options2 = _ref.options, onFinish = _ref.onFinish;
          var locale = options2.locale;
          return (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
            children: [(0, jsx_runtime_namespaceObject.jsx)("button", Object.assign({
              onClick: function onClick() {
                onFinish(false).then(function() {
                }, function(e3) {
                  console.error("Unable to cancel upload.", e3);
                });
              },
              className: "btn"
            }, {
              children: locale.cancelInPreviewWindow
            })), (0, jsx_runtime_namespaceObject.jsx)(SubmitButton, {
              onSubmit: ImageEditorButtons_async(function() {
                return onFinish(true);
              }),
              locale,
              idleText: locale["continue"],
              busyText: locale.pleaseWait,
              showIcon: false
            })]
          });
        };
        var ImageCropper = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageCropper.scss");
        ;
        var ImageCropper_options = {};
        ImageCropper_options.styleTagTransform = styleTagTransform_default();
        ImageCropper_options.setAttributes = setAttributesWithoutAttributes_default();
        ImageCropper_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        ImageCropper_options.domAPI = styleDomAPI_default();
        ImageCropper_options.insertStyleElement = insertStyleElement_default();
        var ImageCropper_update = injectStylesIntoStyleTag_default()(ImageCropper.default, ImageCropper_options);
        var editors_ImageCropper = ImageCropper.default && ImageCropper.default.locals ? ImageCropper.default.locals : void 0;
        ;
        function ImageCropper_await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function _empty() {
        }
        function _invokeIgnored(body) {
          var result = body();
          if (result && result.then) {
            return result.then(_empty);
          }
        }
        function ImageCropper_async(f3) {
          return function() {
            for (var args = [], i3 = 0; i3 < arguments.length; i3++) {
              args[i3] = arguments[i3];
            }
            try {
              return Promise.resolve(f3.apply(this, args));
            } catch (e3) {
              return Promise.reject(e3);
            }
          };
        }
        function ImageCropper_slicedToArray(arr, i3) {
          return ImageCropper_arrayWithHoles(arr) || ImageCropper_iterableToArrayLimit(arr, i3) || ImageCropper_unsupportedIterableToArray(arr, i3) || ImageCropper_nonIterableRest();
        }
        function ImageCropper_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ImageCropper_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return ImageCropper_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return ImageCropper_arrayLikeToArray(o4, minLen);
        }
        function ImageCropper_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function ImageCropper_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function ImageCropper_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function makeCropJson(originalFilePathRelative, geometry, boundary, nativeImageSize) {
          var scale = nativeImageSize.width / boundary.width;
          return {
            inputPath: originalFilePathRelative,
            pipeline: {
              steps: [{
                geometry: {
                  offset: {
                    x: Math.round(geometry.x * scale),
                    y: Math.round(geometry.y * scale)
                  },
                  size: {
                    width: Math.round(geometry.width * scale),
                    height: Math.round(geometry.height * scale),
                    type: "widthxheight!"
                  }
                },
                type: "crop"
              }]
            }
          };
        }
        var ImageCropper_ImageCropper = function ImageCropper2(props) {
          var options2 = props.options, originalImage = props.originalImage, upload = props.upload, onFinish = props.onFinish;
          var _useState = (0, compat_namespaceObject.useState)(void 0), _useState2 = ImageCropper_slicedToArray(_useState, 2), geometry = _useState2[0], setGeometry = _useState2[1];
          var submit = ImageCropper_async(function(keep) {
            var _a;
            return _invokeIgnored(function() {
              if (!keep || geometry === void 0) {
                onFinish(keep, void 0);
              } else {
                return ImageCropper_await(new Promise(function(resolve) {
                  var _a2;
                  var img = new Image();
                  var imgInfo = calculateImagePreviewUrl(originalImage);
                  img.onload = function() {
                    resolve({
                      width: img.naturalWidth,
                      height: img.naturalHeight
                    });
                  };
                  img.src = (_a2 = imgInfo.urlForDimensions) !== null && _a2 !== void 0 ? _a2 : imgInfo.url;
                }), function(nativeImageSize) {
                  var originalImageUploadedName = originalImage.filePath.substring(originalImage.filePath.lastIndexOf("/") + 1);
                  var cropJson = makeCropJson(originalImageUploadedName, geometry.geometry, geometry.boundary, nativeImageSize);
                  var blob = new Blob([JSON.stringify(cropJson)], {
                    type: "application/json"
                  });
                  return ImageCropper_await(upload.uploadFile({
                    name: "".concat((_a = originalImage.originalFileName) !== null && _a !== void 0 ? _a : "image", ".crop"),
                    type: blob.type,
                    size: blob.size,
                    slice: function slice(start, end) {
                      return blob.slice(start, end);
                    }
                  }, {
                    path: options2.editor.images.cropFilePath(originalImage)
                  }), function(editedFile) {
                    onFinish(keep, editedFile);
                  });
                });
              }
            });
          });
          return (0, jsx_runtime_namespaceObject.jsx)(ImageEditorLayout_ImageEditorLayout, {
            modal: options2.layout === "modal",
            header: getImageEditorHeader(props),
            actions: (0, jsx_runtime_namespaceObject.jsx)(ImageEditorButtons, {
              options: options2,
              onFinish: submit
            }),
            image: function image(_ref) {
              var imgDimensions = _ref.imgDimensions, imageUrl = _ref.imageUrl;
              var _a, _b, _c, _d;
              return (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                className: "uploader__image-cropper__overlay",
                style: RectWithPos.toCssProps(imgDimensions)
              }, {
                children: (0, jsx_runtime_namespaceObject.jsx)(ResizableSquare_ResizableSquare, Object.assign({
                  boundary: imgDimensions,
                  onResized: setGeometry,
                  ratio: options2.editor.images.cropRatio
                }, {
                  children: (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                    className: external_classnames_default()("uploader__image-cropper__clip", {
                      "uploader__image-cropper__clip--circular": options2.editor.images.cropShape === "circ"
                    }),
                    style: {
                      width: (_a = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.width) !== null && _a !== void 0 ? _a : imgDimensions.width,
                      height: (_b = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.height) !== null && _b !== void 0 ? _b : imgDimensions.height
                    }
                  }, {
                    children: (0, jsx_runtime_namespaceObject.jsx)("img", {
                      src: imageUrl,
                      draggable: false,
                      style: {
                        width: imgDimensions.width,
                        height: imgDimensions.height,
                        transform: "translateX(".concat(((_c = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.x) !== null && _c !== void 0 ? _c : 0) * -1, "px) translateY(").concat(((_d = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.y) !== null && _d !== void 0 ? _d : 0) * -1, "px)")
                      }
                    })
                  }))
                }))
              }));
            },
            originalImage
          });
        };
        ;
        function ImagePreview_await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function ImagePreview_async(f3) {
          return function() {
            for (var args = [], i3 = 0; i3 < arguments.length; i3++) {
              args[i3] = arguments[i3];
            }
            try {
              return Promise.resolve(f3.apply(this, args));
            } catch (e3) {
              return Promise.reject(e3);
            }
          };
        }
        var ImagePreview = function ImagePreview2(props) {
          var options2 = props.options, originalImage = props.originalImage, onFinish = props.onFinish;
          var submit = ImagePreview_async(function(keep) {
            onFinish(keep);
            return ImagePreview_await();
          });
          return (0, jsx_runtime_namespaceObject.jsx)(ImageEditorLayout_ImageEditorLayout, {
            modal: options2.layout === "modal",
            header: getImageEditorHeader(props),
            actions: (0, jsx_runtime_namespaceObject.jsx)(ImageEditorButtons, {
              options: options2,
              onFinish: submit
            }),
            originalImage
          });
        };
        ;
        function canCropImage(options2, originalImage) {
          return options2.editor.images.crop && isEditableImage(originalImage);
        }
        var ImageEditor = function ImageEditor2(_ref) {
          var imageCount = _ref.imageCount, imageIndex = _ref.imageIndex, originalImage = _ref.originalImage, upload = _ref.upload, onImageEdited = _ref.onImageEdited, options2 = _ref.options;
          return canCropImage(options2, originalImage) ? (0, jsx_runtime_namespaceObject.jsx)(ImageCropper_ImageCropper, {
            imageCount,
            imageIndex,
            options: options2,
            onFinish: onImageEdited,
            upload,
            originalImage
          }) : (0, jsx_runtime_namespaceObject.jsx)(ImagePreview, {
            imageCount,
            imageIndex,
            options: options2,
            onFinish: function onFinish(keep) {
              return onImageEdited(keep, void 0);
            },
            originalImage
          });
        };
        ;
        function UseImageList_toConsumableArray(arr) {
          return UseImageList_arrayWithoutHoles(arr) || UseImageList_iterableToArray(arr) || UseImageList_unsupportedIterableToArray(arr) || UseImageList_nonIterableSpread();
        }
        function UseImageList_nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseImageList_iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        function UseImageList_arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return UseImageList_arrayLikeToArray(arr);
        }
        function UseImageList_slicedToArray(arr, i3) {
          return UseImageList_arrayWithHoles(arr) || UseImageList_iterableToArrayLimit(arr, i3) || UseImageList_unsupportedIterableToArray(arr, i3) || UseImageList_nonIterableRest();
        }
        function UseImageList_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseImageList_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UseImageList_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return UseImageList_arrayLikeToArray(o4, minLen);
        }
        function UseImageList_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function UseImageList_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function UseImageList_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function useImageList(images) {
          var _useState = (0, compat_namespaceObject.useState)(images[0]), _useState2 = UseImageList_slicedToArray(_useState, 2), currentImage = _useState2[0], setCurrentImage = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(0), _useState4 = UseImageList_slicedToArray(_useState3, 2), imageIndex = _useState4[0], setImageIndex = _useState4[1];
          var _useState5 = (0, compat_namespaceObject.useState)(images.length), _useState6 = UseImageList_slicedToArray(_useState5, 2), imageCount = _useState6[0], setImageCount = _useState6[1];
          var editingFiles = images.map(function(x4) {
            return x4.uploadedFile.filePath;
          });
          var currentFile = currentImage.uploadedFile.filePath;
          (0, compat_namespaceObject.useLayoutEffect)(function() {
            var hasFinishedEditing = !editingFiles.includes(currentFile);
            if (hasFinishedEditing) {
              setCurrentImage(images[0]);
              setImageIndex(function(i3) {
                return i3 + 1;
              });
            }
            setImageCount(imageIndex + images.length);
          }, [imageIndex, currentFile].concat(UseImageList_toConsumableArray(editingFiles)));
          return {
            currentFile,
            imageCount,
            imageIndex,
            currentImage
          };
        }
        ;
        var UploaderImageListEditor = function UploaderImageListEditor2(_ref) {
          var images = _ref.images, _onImageEdited = _ref.onImageEdited, upload = _ref.upload, options2 = _ref.options;
          var _useImageList = useImageList(images), currentFile = _useImageList.currentFile, imageCount = _useImageList.imageCount, imageIndex = _useImageList.imageIndex, currentImage = _useImageList.currentImage;
          return (0, jsx_runtime_namespaceObject.jsx)(ImageEditor, {
            options: options2,
            imageCount,
            imageIndex,
            originalImage: currentImage.uploadedFile,
            onImageEdited: function onImageEdited(keep, editedFile) {
              return _onImageEdited(keep, editedFile, currentImage.fileIndex);
            },
            upload
          }, currentFile);
        };
        ;
        function UseShowImageEditor_slicedToArray(arr, i3) {
          return UseShowImageEditor_arrayWithHoles(arr) || UseShowImageEditor_iterableToArrayLimit(arr, i3) || UseShowImageEditor_unsupportedIterableToArray(arr, i3) || UseShowImageEditor_nonIterableRest();
        }
        function UseShowImageEditor_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseShowImageEditor_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UseShowImageEditor_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return UseShowImageEditor_arrayLikeToArray(o4, minLen);
        }
        function UseShowImageEditor_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function UseShowImageEditor_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function UseShowImageEditor_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function useShowImageEditor(pendingImages, onFileUploadDelay) {
          var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = UseShowImageEditor_slicedToArray(_useState, 2), showImageScreen = _useState2[0], setShowImageScreen = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(null), _useState4 = UseShowImageEditor_slicedToArray(_useState3, 2), showImageScreenTimeout = _useState4[0], setShowImageScreenTimeout = _useState4[1];
          (0, compat_namespaceObject.useEffect)(function() {
            if (pendingImages.length > 0) {
              var timeout = setTimeout(function() {
                setShowImageScreen(true);
              }, onFileUploadDelay);
              setShowImageScreenTimeout(timeout);
              return function() {
                return clearTimeout(timeout);
              };
            }
            if (showImageScreen) {
              setShowImageScreen(false);
            }
            if (showImageScreenTimeout !== null) {
              clearTimeout(showImageScreenTimeout);
              setShowImageScreenTimeout(null);
            }
          }, [pendingImages.length, showImageScreen]);
          return showImageScreen;
        }
        ;
        function UploadWidget_await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function _catch(body, recover) {
          try {
            var result = body();
          } catch (e3) {
            return recover(e3);
          }
          if (result && result.then) {
            return result.then(void 0, recover);
          }
          return result;
        }
        function _continue(value, then) {
          return value && value.then ? value.then(then) : then(value);
        }
        function UploadWidget_async(f3) {
          return function() {
            for (var args = [], i3 = 0; i3 < arguments.length; i3++) {
              args[i3] = arguments[i3];
            }
            try {
              return Promise.resolve(f3.apply(this, args));
            } catch (e3) {
              return Promise.reject(e3);
            }
          };
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
            return typeof obj2;
          } : function(obj2) {
            return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          }, _typeof(obj);
        }
        function UploadWidget_toConsumableArray(arr) {
          return UploadWidget_arrayWithoutHoles(arr) || UploadWidget_iterableToArray(arr) || UploadWidget_unsupportedIterableToArray(arr) || UploadWidget_nonIterableSpread();
        }
        function UploadWidget_nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadWidget_iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        function UploadWidget_arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return UploadWidget_arrayLikeToArray(arr);
        }
        function UploadWidget_slicedToArray(arr, i3) {
          return UploadWidget_arrayWithHoles(arr) || UploadWidget_iterableToArrayLimit(arr, i3) || UploadWidget_unsupportedIterableToArray(arr, i3) || UploadWidget_nonIterableRest();
        }
        function UploadWidget_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadWidget_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UploadWidget_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return UploadWidget_arrayLikeToArray(o4, minLen);
        }
        function UploadWidget_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function UploadWidget_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function UploadWidget_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var UploadWidget_rest = function(s3, e3) {
          var t3 = {};
          for (var p3 in s3) {
            if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
              t3[p3] = s3[p3];
          }
          if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
              if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
                t3[p3[i3]] = s3[p3[i3]];
            }
          return t3;
        };
        function isValidMimeType(allowedMimeTypes, actualMimeType) {
          if (allowedMimeTypes === void 0 || allowedMimeTypes.length === 0) {
            return true;
          }
          var normalize = function normalize2(x4) {
            return x4.trim().toLowerCase();
          };
          var actualNormalized = normalize(actualMimeType);
          return allowedMimeTypes.some(function(x4) {
            var requiredNormalized = normalize(x4);
            return requiredNormalized === actualNormalized || requiredNormalized.endsWith("*") && actualNormalized.startsWith(requiredNormalized.substring(0, requiredNormalized.length - 1));
          });
        }
        var UploadWidget = function UploadWidget2(_ref) {
          var resolve = _ref.resolve, options2 = _ref.options, upload = _ref.upload;
          var _a;
          var _useState = (0, compat_namespaceObject.useState)(0), _useState2 = UploadWidget_slicedToArray(_useState, 2), setNextSparseFileIndex = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(true), _useState4 = UploadWidget_slicedToArray(_useState3, 2), isInitialUpdate = _useState4[0], setIsInitialUpdate = _useState4[1];
          var _useState5 = (0, compat_namespaceObject.useState)({}), _useState6 = UploadWidget_slicedToArray(_useState5, 2), submittedFiles = _useState6[0], setSubmittedFiles = _useState6[1];
          var submittedFileList = Object.values(submittedFiles).filter(isDefined);
          var uploadedFiles = submittedFileList.filter(isUploadedFile);
          var onFileUploadDelay = progressWheelDelay + (progressWheelVanish - 100);
          var multi = options2.multi, tags = options2.tags, metadata = options2.metadata, path = options2.path;
          var uploadWidgetResult = uploadedFiles.map(function(x4) {
            return UploadWidgetResult.from(upload, x4.uploadedFile, x4.editedFile);
          });
          var canEditImages = options2.editor.images.crop;
          var canPreviewImages = options2.editor.images.preview;
          var pendingImages = uploadedFiles.filter(function(x4) {
            return !x4.isSubmitted && ((canEditImages || canPreviewImages) && isEditableImage(x4.uploadedFile) || canPreviewImages && isReadOnlyImage(x4.uploadedFile));
          });
          var showImageEditor = useShowImageEditor(pendingImages, onFileUploadDelay);
          var onImageSubmitted = function onImageSubmitted2(keep, editedFile, sparseFileIndex) {
            if (!keep) {
              removeSubmittedFile(sparseFileIndex);
            } else {
              updateFile(sparseFileIndex, "uploaded", function(file) {
                return Object.assign(Object.assign({}, file), {
                  editedFile,
                  isSubmitted: true
                });
              });
            }
          };
          var finalize = function finalize2() {
            resolve(uploadWidgetResult);
          };
          (0, compat_namespaceObject.useLayoutEffect)(function() {
            if (pendingImages.length > 0) {
              return;
            }
            if (isInitialUpdate) {
              setIsInitialUpdate(false);
              return;
            }
            options2.onUpdate(uploadWidgetResult);
            var shouldCloseModalImmediatelyAfterUpload = !multi && uploadedFiles.length > 0 && !options2.showFinishButton && options2.layout === "modal";
            if (shouldCloseModalImmediatelyAfterUpload) {
              var firstUploadedFile = uploadWidgetResult.slice(0, 1);
              var doResolve = function doResolve2() {
                return resolve(firstUploadedFile);
              };
              var previousScreenWasEditor = uploadedFiles[0].isSubmitted;
              if (previousScreenWasEditor) {
                doResolve();
              } else {
                var timeout = setTimeout(doResolve, onFileUploadDelay);
                return function() {
                  return clearTimeout(timeout);
                };
              }
            }
          }, [pendingImages.length].concat(UploadWidget_toConsumableArray(uploadedFiles.map(function(x4) {
            return x4.uploadedFile.fileUrl;
          }))));
          var removeSubmittedFile = function removeSubmittedFile2(fileIndex) {
            setSubmittedFiles(function(x4) {
              var _a2 = x4, _b2 = fileIndex, removed = _a2[_b2], rest = UploadWidget_rest(_a2, [_typeof(_b2) === "symbol" ? _b2 : _b2 + ""]);
              if ((removed === null || removed === void 0 ? void 0 : removed.type) === "uploading") {
                removed.cancel();
              }
              return rest;
            });
          };
          var setSubmittedFile = function setSubmittedFile2(fileIndex, file) {
            setSubmittedFiles(function(x4) {
              return Object.assign(Object.assign({}, x4), _defineProperty({}, fileIndex, file));
            });
          };
          var updateFile = function updateFile2(fileIndex, fileType, file) {
            setSubmittedFiles(function(x4) {
              var oldFile = x4[fileIndex];
              if (oldFile === void 0 || oldFile.type !== fileType) {
                return x4;
              }
              return Object.assign(Object.assign({}, x4), _defineProperty({}, fileIndex, file(oldFile)));
            });
          };
          var doUpload = UploadWidget_async(function(file, fileIndex) {
            var _a2, _b2;
            var raiseError = function raiseError2(error) {
              setSubmittedFile(fileIndex, {
                file,
                fileIndex,
                error,
                type: "error"
              });
              throw error;
            };
            var maxFileSizeBytes = options2.maxFileSizeBytes, mimeTypes2 = options2.mimeTypes, onPreUpload = options2.onPreUpload;
            if (maxFileSizeBytes !== void 0 && file.size > maxFileSizeBytes) {
              raiseError(new Error("".concat(options2.locale.maxSize, " ").concat(humanFileSize(maxFileSizeBytes))));
            }
            if (!isValidMimeType(mimeTypes2, file.type)) {
              raiseError(new Error(options2.locale.unsupportedFileType));
            }
            setSubmittedFile(fileIndex, {
              file,
              fileIndex,
              type: "preprocessing"
            });
            var preUploadResult;
            return _continue(_catch(function() {
              return UploadWidget_await(onPreUpload(file), function(_onPreUpload) {
                preUploadResult = (_a2 = _onPreUpload) !== null && _a2 !== void 0 ? _a2 : void 0;
              });
            }, function(e3) {
              preUploadResult = {
                errorMessage: options2.locale.customValidationFailed
              };
              console.error("[uploader] onPreUpload function raised an error.", e3);
            }), function() {
              if ((preUploadResult === null || preUploadResult === void 0 ? void 0 : preUploadResult.errorMessage) !== void 0) {
                raiseError(new Error(preUploadResult.errorMessage));
              }
              var fileToUpload = (_b2 = preUploadResult === null || preUploadResult === void 0 ? void 0 : preUploadResult.transformedFile) !== null && _b2 !== void 0 ? _b2 : file;
              return UploadWidget_await(upload.uploadFile(fileToUpload, {
                path,
                metadata,
                tags,
                onBegin: function onBegin(_ref2) {
                  var cancel = _ref2.cancel;
                  return setSubmittedFile(fileIndex, {
                    // IMPORTANT: use 'setSubmittedFile' as file may already exist in collection as a "validating" file.
                    file: fileToUpload,
                    fileIndex,
                    cancel,
                    progress: 0,
                    type: "uploading"
                  });
                },
                onProgress: function onProgress(_ref3) {
                  var bytesSent = _ref3.bytesSent, bytesTotal = _ref3.bytesTotal;
                  return updateFile(fileIndex, "uploading", function(uploadingFile) {
                    return Object.assign(Object.assign({}, uploadingFile), {
                      progress: bytesSent / bytesTotal
                    });
                  });
                }
              }));
            });
          });
          var addFiles = function addFiles2(files) {
            return setNextSparseFileIndex(function(nextSparseFileIndex) {
              var maxFiles = multi ? options2.maxFileCount : 1;
              var filesToTake = maxFiles === void 0 ? files.length : Math.min(files.length, maxFiles - submittedFileList.length);
              if (filesToTake <= 0) {
                return nextSparseFileIndex;
              }
              files.slice(0, filesToTake).forEach(function(file, i3) {
                var fileIndex = nextSparseFileIndex + i3;
                doUpload(file, fileIndex).then(function(uploadedFile) {
                  updateFile(fileIndex, "uploading", function() {
                    return {
                      fileIndex,
                      uploadedFile,
                      editedFile: void 0,
                      isSubmitted: false,
                      type: "uploaded"
                    };
                  });
                }, function(error) {
                  updateFile(fileIndex, "uploading", function(uploadingFile) {
                    return {
                      fileIndex,
                      error,
                      file: uploadingFile.file,
                      type: "error"
                    };
                  });
                });
              });
              return nextSparseFileIndex + files.length;
            });
          };
          var _b = useDragDrop(addFiles), isDragging = _b.isDragging, rootProps = UploadWidget_rest(_b, ["isDragging"]);
          var mimeTypes = (_a = options2.mimeTypes) !== null && _a !== void 0 ? _a : [];
          var isImageUploader = mimeTypes.length > 0 && mimeTypes.every(function(x4) {
            return x4.trim().toLowerCase().startsWith("image/");
          });
          return (0, jsx_runtime_namespaceObject.jsx)(WidgetBase_WidgetBase, Object.assign({
            htmlProps: rootProps,
            isDraggable: true,
            isDragging,
            layout: options2.layout,
            multi: options2.multi
          }, {
            children: submittedFileList.length === 0 ? (0, jsx_runtime_namespaceObject.jsx)(UploaderWelcomeScreen, {
              options: options2,
              addFiles,
              isImageUploader
            }) : showImageEditor && pendingImages.length > 0 ? (0, jsx_runtime_namespaceObject.jsx)(UploaderImageListEditor, {
              images: pendingImages,
              onImageEdited: onImageSubmitted,
              upload,
              options: options2
            }) : (0, jsx_runtime_namespaceObject.jsx)(UploaderMainScreen_UploaderMainScreen, {
              options: options2,
              addFiles,
              submittedFiles: submittedFileList,
              uploadedFiles,
              remove: removeSubmittedFile,
              finalize,
              isImageUploader
            })
          }));
        };
        ;
        var UploadWidgetContainer_UploadWidgetContainer = function UploadWidgetContainer2(_ref) {
          var upload = _ref.upload, resolve = _ref.resolve, reject = _ref.reject, options2 = _ref.options;
          return (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {
            children: upload.type === "error" ? (0, jsx_runtime_namespaceObject.jsx)(ConfigError, {
              error: upload.value,
              layout: options2.layout
            }) : (0, jsx_runtime_namespaceObject.jsx)(UploadWidget, {
              resolve,
              reject,
              options: options2,
              upload: upload.value
            })
          });
        };
        ;
        function ModalContainer_slicedToArray(arr, i3) {
          return ModalContainer_arrayWithHoles(arr) || ModalContainer_iterableToArrayLimit(arr, i3) || ModalContainer_unsupportedIterableToArray(arr, i3) || ModalContainer_nonIterableRest();
        }
        function ModalContainer_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ModalContainer_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return ModalContainer_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return ModalContainer_arrayLikeToArray(o4, minLen);
        }
        function ModalContainer_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function ModalContainer_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function ModalContainer_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var ModalContainer = function ModalContainer2(_ref) {
          var widgetProps = _ref.widgetProps;
          var _useState = (0, compat_namespaceObject.useState)(true), _useState2 = ModalContainer_slicedToArray(_useState, 2), isOpen = _useState2[0], setIsOpen = _useState2[1];
          var resolve = function resolve2(files) {
            widgetProps.resolve(files);
            setIsOpen(false);
          };
          var reject = function reject2(error) {
            widgetProps.reject(error);
            setIsOpen(false);
          };
          if (!isOpen) {
            return (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {});
          }
          return (0, jsx_runtime_namespaceObject.jsx)(Modal_Modal, Object.assign({
            closeModal: function closeModal() {
              return resolve([]);
            }
          }, {
            children: (0, jsx_runtime_namespaceObject.jsx)(UploadWidgetContainer_UploadWidgetContainer, Object.assign({}, widgetProps, {
              resolve,
              reject
            }))
          }));
        };
        ;
        function RootContainer_slicedToArray(arr, i3) {
          return RootContainer_arrayWithHoles(arr) || RootContainer_iterableToArrayLimit(arr, i3) || RootContainer_unsupportedIterableToArray(arr, i3) || RootContainer_nonIterableRest();
        }
        function RootContainer_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function RootContainer_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return RootContainer_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return RootContainer_arrayLikeToArray(o4, minLen);
        }
        function RootContainer_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function RootContainer_iterableToArrayLimit(arr, i3) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n2 = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
              _arr.push(_s.value);
              if (i3 && _arr.length === i3)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n2 && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function RootContainer_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var RootContainer = function RootContainer2(_ref) {
          var widgetProps = _ref.widgetProps;
          var _useState = (0, compat_namespaceObject.useState)(0), _useState2 = RootContainer_slicedToArray(_useState, 2), refreshKey = _useState2[0], setRefreshKey = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(widgetProps.options), _useState4 = RootContainer_slicedToArray(_useState3, 2), options2 = _useState4[0], setOptions = _useState4[1];
          var widgetPropsUpdated = Object.assign(Object.assign({}, widgetProps), {
            options: options2
          });
          (0, compat_namespaceObject.useEffect)(function() {
            options2.onInit({
              close: function close() {
                widgetProps.resolve([]);
              },
              reset: function reset() {
                setRefreshKey(function(x4) {
                  return x4 + 1;
                });
              },
              updateConfig: function updateConfig(newOptionsPartial) {
                setOptions(UploadWidgetConfigRequired.from(newOptionsPartial));
              }
            });
          }, []);
          return (0, jsx_runtime_namespaceObject.jsx)(external_preact_namespaceObject.Fragment, {
            children: (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
              className: external_classnames_default()("uploader", {
                "uploader--with-modal": options2.layout === "modal"
              }),
              style: {
                "--error-color": options2.styles.colors.error,
                "--primary-color": options2.styles.colors.primary,
                "--primary-active-color": options2.styles.colors.active,
                "--shade-100": options2.styles.colors.shade100,
                "--shade-200": options2.styles.colors.shade200,
                "--shade-300": options2.styles.colors.shade300,
                "--shade-400": options2.styles.colors.shade400,
                "--shade-500": options2.styles.colors.shade500,
                "--shade-600": options2.styles.colors.shade600,
                "--shade-700": options2.styles.colors.shade700,
                "--shade-800": options2.styles.colors.shade800,
                "--shade-900": options2.styles.colors.shade900,
                "--base-font-family": options2.styles.fontFamilies.base,
                "--base-font-size": "".concat(options2.styles.fontSizes.base, "px")
              }
            }, {
              children: options2.layout === "modal" ? (0, jsx_runtime_namespaceObject.jsx)(ModalContainer, {
                widgetProps: widgetPropsUpdated
              }) : (0, jsx_runtime_namespaceObject.jsx)(UploadWidgetContainer_UploadWidgetContainer, Object.assign({}, widgetPropsUpdated))
            }))
          }, refreshKey);
        };
        ;
        function UploadManager_toConsumableArray(arr) {
          return UploadManager_arrayWithoutHoles(arr) || UploadManager_iterableToArray(arr) || UploadManager_unsupportedIterableToArray(arr) || UploadManager_nonIterableSpread();
        }
        function UploadManager_nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadManager_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UploadManager_arrayLikeToArray(o4, minLen);
          var n2 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n2 === "Object" && o4.constructor)
            n2 = o4.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return Array.from(o4);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return UploadManager_arrayLikeToArray(o4, minLen);
        }
        function UploadManager_iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        function UploadManager_arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return UploadManager_arrayLikeToArray(arr);
        }
        function UploadManager_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
            arr2[i3] = arr[i3];
          }
          return arr2;
        }
        function UploadManager_await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function _rethrow(thrown, value) {
          if (thrown)
            throw value;
          return value;
        }
        function _finallyRethrows(body, finalizer) {
          try {
            var result = body();
          } catch (e3) {
            return finalizer(true, e3);
          }
          if (result && result.then) {
            return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
          }
          return finalizer(false, result);
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i3 = 0; i3 < props.length; i3++) {
            var descriptor = props[i3];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        var UploadManager = function() {
          function UploadManager2(instance) {
            _classCallCheck(this, UploadManager2);
            this.instance = instance;
            this.uploadCancellations = [];
          }
          _createClass(UploadManager2, [{
            key: "cancelAll",
            value: function cancelAll() {
              this.uploadCancellations.forEach(function(cancel) {
                return cancel();
              });
            }
          }, {
            key: "beginAuthSession",
            value: function beginAuthSession(authUrl, authHeaders) {
              try {
                var _this2 = this;
                return UploadManager_await(_this2.instance.beginAuthSession(authUrl, authHeaders));
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
          }, {
            key: "endAuthSession",
            value: function endAuthSession() {
              try {
                var _this4 = this;
                return UploadManager_await(_this4.instance.endAuthSession());
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
          }, {
            key: "uploadFile",
            value: function uploadFile(file, params) {
              try {
                var _this6 = this;
                var cancellation;
                return _finallyRethrows(function() {
                  return UploadManager_await(_this6.instance.uploadFile(file, Object.assign(Object.assign({}, params), {
                    onBegin: function onBegin(onBeginParams) {
                      cancellation = onBeginParams.cancel;
                      _this6.uploadCancellations = [].concat(UploadManager_toConsumableArray(_this6.uploadCancellations), [cancellation]);
                      if ((params === null || params === void 0 ? void 0 : params.onBegin) !== void 0) {
                        params.onBegin(onBeginParams);
                      }
                    }
                  })));
                }, function(_wasThrown, _result) {
                  _this6.uploadCancellations = _this6.uploadCancellations.filter(function(x4) {
                    return x4 !== cancellation;
                  });
                  return _rethrow(_wasThrown, _result);
                });
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
          }, {
            key: "url",
            value: function url(filePath, slugOrParams) {
              return this.instance.url(filePath, slugOrParams);
            }
          }]);
          return UploadManager2;
        }();
        ;
        function Uploader_await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function _call(body, then, direct) {
          if (direct) {
            return then ? then(body()) : body();
          }
          try {
            var result = Promise.resolve(body());
            return then ? result.then(then) : result;
          } catch (e3) {
            return Promise.reject(e3);
          }
        }
        function Uploader_async(f3) {
          return function() {
            for (var args = [], i3 = 0; i3 < arguments.length; i3++) {
              args[i3] = arguments[i3];
            }
            try {
              return Promise.resolve(f3.apply(this, args));
            } catch (e3) {
              return Promise.reject(e3);
            }
          };
        }
        function Uploader(uploadOrConfig) {
          var uploadMaybe;
          if (UploadInstanceMaybe.isUploadInstance(uploadOrConfig)) {
            uploadMaybe = {
              type: "upload",
              value: uploadOrConfig
            };
          } else {
            try {
              uploadMaybe = {
                type: "upload",
                value: (0, external_upload_js_namespaceObject.Upload)(uploadOrConfig)
              };
            } catch (e3) {
              uploadMaybe = {
                type: "error",
                value: e3
              };
            }
          }
          var open = Uploader_async(function() {
            var optionsMaybe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            var _a;
            var options2 = UploadWidgetConfigRequired.from(optionsMaybe);
            return _call(getBody, function(body) {
              var container = options2.container !== void 0 ? typeof options2.container === "string" ? (_a = document.querySelector(options2.container)) !== null && _a !== void 0 ? _a : void 0 : options2.container : void 0;
              var widget = document.createElement("div");
              (container !== null && container !== void 0 ? container : body).appendChild(widget);
              widget.className = "uploader__root";
              var uploadManager;
              var upload2 = uploadMaybe;
              if (uploadMaybe.type === "upload") {
                uploadManager = new UploadManager(uploadMaybe.value);
                upload2 = {
                  type: "upload",
                  value: uploadManager
                };
              }
              return Uploader_await(new Promise(function(resolve, reject) {
                var props = {
                  upload: upload2,
                  resolve,
                  reject,
                  options: options2
                };
                (0, external_preact_namespaceObject.render)((0, jsx_runtime_namespaceObject.jsx)(RootContainer, {
                  widgetProps: props
                }), widget);
              }), function(uploadedFiles) {
                widget.remove();
                uploadManager === null || uploadManager === void 0 ? void 0 : uploadManager.cancelAll();
                return uploadedFiles;
              });
            });
          });
          var getBody = Uploader_async(function() {
            return new Promise(function(resolve) {
              var attempt = function attempt2() {
                var _a;
                var bodyMaybe = (_a = document.body) !== null && _a !== void 0 ? _a : void 0;
                if (bodyMaybe !== void 0) {
                  resolve(bodyMaybe);
                }
                setTimeout(attempt2, 100);
              };
              attempt();
            });
          });
          var upload = uploadMaybe.type === "upload" ? uploadMaybe.value : {};
          return Object.assign(Object.assign({}, upload), {
            open
          });
        }
        ;
      }();
      module.exports = __webpack_exports__;
    })();
  }
});
export default require_main4();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=uploader.js.map
