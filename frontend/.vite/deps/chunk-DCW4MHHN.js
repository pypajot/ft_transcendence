import {
  require_react_dom
} from "./chunk-OTY6O57J.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __esm,
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@twilio-paste/lexical-library/dist/index.es.js
var default2, react_star, default3, react_dom_star, __create, __defProp, __getOwnPropDesc, __getOwnPropNames, __getProtoOf, __hasOwnProp, __esm2, __commonJS, __export, __copyProps, __reExport, __toESM2, __toCommonJS, react_exports, init_react, require_LexicalErrorBoundary_prod, require_LexicalErrorBoundary, require_Lexical_prod, require_Lexical, require_LexicalSelection_prod, require_LexicalSelection, require_LexicalUtils_prod, require_LexicalUtils, require_LexicalLink_prod, require_LexicalLink, require_LexicalComposerContext_prod, require_LexicalComposerContext, require_LexicalComposer_prod, require_LexicalComposer, require_useLexicalEditable_prod, require_useLexicalEditable, require_LexicalText_prod, require_LexicalText, react_dom_exports, init_react_dom, require_LexicalDragon_prod, require_LexicalDragon, require_LexicalHtml_prod, require_LexicalHtml, require_LexicalClipboard_prod, require_LexicalClipboard, require_LexicalPlainText_prod, require_LexicalPlainText, require_LexicalPlainTextPlugin_prod, require_LexicalPlainTextPlugin, require_LexicalContentEditable_prod, require_LexicalContentEditable, require_LexicalHistory_prod, require_LexicalHistory, require_LexicalHistoryPlugin_prod, require_LexicalHistoryPlugin, require_LexicalRichText_prod, require_LexicalRichText, require_LexicalRichTextPlugin_prod, require_LexicalRichTextPlugin, require_LexicalOnChangePlugin_prod, require_LexicalOnChangePlugin, require_LexicalList_prod, require_LexicalList, require_LexicalListPlugin_prod, require_LexicalListPlugin, require_LexicalCheckListPlugin_prod, require_LexicalCheckListPlugin, require_LexicalLinkPlugin_prod, require_LexicalLinkPlugin, require_LexicalTable_prod, require_LexicalTable, require_LexicalTablePlugin_prod, require_LexicalTablePlugin, require_LexicalAutoLinkPlugin_prod, require_LexicalAutoLinkPlugin, require_LexicalAutoFocusPlugin_prod, require_LexicalAutoFocusPlugin, require_LexicalClearEditorPlugin_prod, require_LexicalClearEditorPlugin, import_LexicalErrorBoundary, import_lexical, import_link, import_LexicalComposer, import_LexicalPlainTextPlugin, import_LexicalContentEditable, import_LexicalHistoryPlugin, import_LexicalRichTextPlugin, import_LexicalOnChangePlugin, import_LexicalListPlugin, import_LexicalCheckListPlugin, import_LexicalLinkPlugin, import_LexicalTablePlugin, import_LexicalAutoLinkPlugin, import_LexicalAutoFocusPlugin, import_LexicalClearEditorPlugin, import_LexicalComposerContext, export_$createParagraphNode, export_$createTextNode, export_$getRoot, export_$getSelection, export_AutoFocusPlugin, export_AutoLinkNode, export_AutoLinkPlugin, export_CLEAR_EDITOR_COMMAND, export_COMMAND_PRIORITY_CRITICAL, export_COMMAND_PRIORITY_EDITOR, export_COMMAND_PRIORITY_HIGH, export_COMMAND_PRIORITY_LOW, export_COMMAND_PRIORITY_NORMAL, export_CheckListPlugin, export_ClearEditorPlugin, export_ContentEditable, export_ErrorBoundary, export_HistoryPlugin, export_KEY_ENTER_COMMAND, export_LexicalComposer, export_LinkPlugin, export_ListPlugin, export_OnChangePlugin, export_PlainTextPlugin, export_RichTextPlugin, export_TablePlugin, export_useLexicalComposerContext;
var init_index_es = __esm({
  "node_modules/@twilio-paste/lexical-library/dist/index.es.js"() {
    default2 = __toESM(require_react());
    react_star = __toESM(require_react());
    default3 = __toESM(require_react_dom());
    react_dom_star = __toESM(require_react_dom());
    __create = Object.create;
    __defProp = Object.defineProperty;
    __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    __getOwnPropNames = Object.getOwnPropertyNames;
    __getProtoOf = Object.getPrototypeOf;
    __hasOwnProp = Object.prototype.hasOwnProperty;
    __esm2 = (fn, res) => function() {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    };
    __commonJS = (cb, mod) => function() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    __copyProps = (to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames(from))
          !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      return to;
    };
    __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
    __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
    __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    react_exports = {};
    __export(react_exports, { default: () => default2 });
    init_react = __esm2({ "esm-externals:react"() {
      __reExport(react_exports, react_star);
    } });
    require_LexicalErrorBoundary_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalErrorBoundary.prod.js"(exports, module) {
      "use strict";
      var h = (init_react(), __toCommonJS(react_exports));
      function m(b, c) {
        return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, a) {
          return g.__proto__ = a, g;
        }, m(b, c);
      }
      function n(b, c) {
        b.prototype = Object.create(c.prototype), b.prototype.constructor = b, m(b, c);
      }
      function r(b, c) {
        return b === void 0 && (b = []), c === void 0 && (c = []), b.length !== c.length || b.some(function(g, a) {
          return !Object.is(g, c[a]);
        });
      }
      var t = { error: null }, u = function(b) {
        function c() {
          for (var a, d = arguments.length, f = Array(d), e = 0; e < d; e++)
            f[e] = arguments[e];
          return a = b.call.apply(b, [this].concat(f)) || this, a.state = t, a.resetErrorBoundary = function() {
            for (var k, p = arguments.length, q = Array(p), l = 0; l < p; l++)
              q[l] = arguments[l];
            a.props.onReset == null || (k = a.props).onReset.apply(k, q), a.reset();
          }, a;
        }
        n(c, b), c.getDerivedStateFromError = function(a) {
          return { error: a };
        };
        var g = c.prototype;
        return g.reset = function() {
          this.setState(t);
        }, g.componentDidCatch = function(a, d) {
          var f, e;
          (f = (e = this.props).onError) == null || f.call(e, a, d);
        }, g.componentDidUpdate = function(a, d) {
          var f = this.props.resetKeys;
          if (this.state.error !== null && d.error !== null && r(a.resetKeys, f)) {
            var e, k;
            (e = (k = this.props).onResetKeysChange) == null || e.call(k, a.resetKeys, f), this.reset();
          }
        }, g.render = function() {
          var a = this.state.error, d = this.props, f = d.fallbackRender, e = d.FallbackComponent;
          if (d = d.fallback, a !== null) {
            if (a = { error: a, resetErrorBoundary: this.resetErrorBoundary }, h.isValidElement(d))
              return d;
            if (typeof f == "function")
              return f(a);
            if (e)
              return h.createElement(e, a);
            throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
          }
          return this.props.children;
        }, c;
      }(h.Component);
      module.exports = function({ children: b, onError: c }) {
        return h.createElement(u, { fallback: h.createElement("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" } }, "An error was thrown."), onError: c }, b);
      };
    } });
    require_LexicalErrorBoundary = __commonJS({ "../../../node_modules/@lexical/react/LexicalErrorBoundary.js"(exports, module) {
      "use strict";
      var LexicalErrorBoundary = require_LexicalErrorBoundary_prod();
      module.exports = LexicalErrorBoundary;
    } });
    require_Lexical_prod = __commonJS({ "../../../node_modules/lexical/Lexical.prod.js"(exports) {
      "use strict";
      var aa = {}, ca = {}, da = {}, ea = {}, fa = {}, ha = {}, ka = {}, ma = {}, na = {}, pa = {}, qa = {}, ra = {}, sa = {}, ta = {}, ua = {}, va = {}, xa = {}, ya = {}, za = {}, Aa = {}, Ba = {}, Ca = {}, Fa = {}, Ga = {}, Ha = {}, Ia = {}, Ja = {}, Ka = {}, La = {}, Ma = {}, Na = {}, Oa = {}, Pa = {}, Qa = {}, Ra = {}, Sa = {};
      function q(a) {
        let b = new URLSearchParams();
        b.append("code", a);
        for (let c = 1; c < arguments.length; c++)
          b.append("v", arguments[c]);
        throw Error(`Minified Lexical error #${a}; visit https://lexical.dev/docs/error?${b} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
      }
      var Ta = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ua = Ta && "documentMode" in document ? document.documentMode : null, t = Ta && /Mac|iPod|iPhone|iPad/.test(navigator.platform), Wa = Ta && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Xa = Ta && "InputEvent" in window && !Ua ? "getTargetRanges" in new window.InputEvent("input") : false, Ya = Ta && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Za = Ta && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, $a = Ta && /^(?=.*Chrome).*/i.test(navigator.userAgent), ab = Ta && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !$a, bb = Ya || Za || ab ? " " : "​", cb = Wa ? " " : bb, db = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]/, eb = /^[^\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/, fb = { bold: 1, code: 16, highlight: 128, italic: 2, strikethrough: 4, subscript: 32, superscript: 64, underline: 8 }, gb = { directionless: 1, unmergeable: 2 }, hb = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 }, ib = { 2: "center", 6: "end", 4: "justify", 1: "left", 3: "right", 5: "start" }, jb = { normal: 0, segmented: 2, token: 1 }, kb = { 0: "normal", 2: "segmented", 1: "token" }, ob = false, pb = 0;
      function qb(a) {
        pb = a.timeStamp;
      }
      function rb(a, b, c) {
        return b.__lexicalLineBreak === a || a[`__lexicalKey_${c._key}`] !== void 0;
      }
      function sb(a) {
        return a.getEditorState().read(() => {
          let b = v();
          return b !== null ? b.clone() : null;
        });
      }
      function tb(a, b, c) {
        ob = true;
        let d = 100 < performance.now() - pb;
        try {
          w(a, () => {
            let e = v() || sb(a);
            var f = /* @__PURE__ */ new Map(), g = a.getRootElement(), h = a._editorState, k = a._blockCursorElement;
            let n = false, m = "";
            for (var p = 0; p < b.length; p++) {
              var l = b[p], r = l.type, u = l.target, x = ub(u, h);
              if (!(x === null && u !== g || z(x))) {
                if (r === "characterData") {
                  if (l = d && B(x))
                    a: {
                      l = e, r = u;
                      var y = x;
                      if (C(l)) {
                        var A = l.anchor.getNode();
                        if (A.is(y) && l.format !== A.getFormat()) {
                          l = false;
                          break a;
                        }
                      }
                      l = r.nodeType === 3 && y.isAttached();
                    }
                  l && (y = vb(a._window), r = l = null, y !== null && y.anchorNode === u && (l = y.anchorOffset, r = y.focusOffset), u = u.nodeValue, u !== null && wb(x, u, l, r, false));
                } else if (r === "childList") {
                  for (n = true, r = l.addedNodes, y = 0; y < r.length; y++) {
                    A = r[y];
                    var Y = xb(A), ba = A.parentNode;
                    ba == null || A === k || Y !== null || A.nodeName === "BR" && rb(A, ba, a) || (Wa && (Y = A.innerText || A.nodeValue) && (m += Y), ba.removeChild(A));
                  }
                  if (l = l.removedNodes, r = l.length, 0 < r) {
                    for (y = 0, A = 0; A < r; A++)
                      ba = l[A], (ba.nodeName === "BR" && rb(ba, u, a) || k === ba) && (u.appendChild(ba), y++);
                    r !== y && (u === g && (x = h._nodeMap.get("root")), f.set(u, x));
                  }
                }
              }
            }
            if (0 < f.size)
              for (let [Va, la] of f)
                if (D(la))
                  for (f = la.getChildrenKeys(), g = Va.firstChild, h = 0; h < f.length; h++)
                    k = a.getElementByKey(f[h]), k !== null && (g == null ? (Va.appendChild(k), g = k) : g !== k && Va.replaceChild(k, g), g = g.nextSibling);
                else
                  B(la) && la.markDirty();
            if (f = c.takeRecords(), 0 < f.length) {
              for (g = 0; g < f.length; g++)
                for (k = f[g], h = k.addedNodes, k = k.target, p = 0; p < h.length; p++)
                  x = h[p], u = x.parentNode, u == null || x.nodeName !== "BR" || rb(x, k, a) || u.removeChild(x);
              c.takeRecords();
            }
            e !== null && (n && (e.dirty = true, yb(e)), Wa && zb(a) && e.insertRawText(m));
          });
        } finally {
          ob = false;
        }
      }
      function Ab(a) {
        let b = a._observer;
        if (b !== null) {
          let c = b.takeRecords();
          tb(a, c, b);
        }
      }
      function Bb(a) {
        pb === 0 && Cb(a).addEventListener("textInput", qb, true), a._observer = new MutationObserver((b, c) => {
          tb(a, b, c);
        });
      }
      function Db(a, b) {
        let c = a.__mode, d = a.__format;
        a = a.__style;
        let e = b.__mode, f = b.__format;
        return b = b.__style, (c === null || c === e) && (d === null || d === f) && (a === null || a === b);
      }
      function Eb(a, b) {
        let c = a.mergeWithSibling(b), d = F()._normalizedNodes;
        return d.add(a.__key), d.add(b.__key), c;
      }
      function Fb(a) {
        if (a.__text === "" && a.isSimpleText() && !a.isUnmergeable())
          a.remove();
        else {
          for (var b; (b = a.getPreviousSibling()) !== null && B(b) && b.isSimpleText() && !b.isUnmergeable(); )
            if (b.__text === "")
              b.remove();
            else {
              Db(b, a) && (a = Eb(b, a));
              break;
            }
          for (var c; (c = a.getNextSibling()) !== null && B(c) && c.isSimpleText() && !c.isUnmergeable(); )
            if (c.__text === "")
              c.remove();
            else {
              Db(a, c) && Eb(a, c);
              break;
            }
        }
      }
      function Gb(a) {
        return Hb(a.anchor), Hb(a.focus), a;
      }
      function Hb(a) {
        for (; a.type === "element"; ) {
          var b = a.getNode(), c = a.offset;
          if (c === b.getChildrenSize() ? (b = b.getChildAtIndex(c - 1), c = true) : (b = b.getChildAtIndex(c), c = false), B(b)) {
            a.set(b.__key, c ? b.getTextContentSize() : 0, "text");
            break;
          } else if (!D(b))
            break;
          a.set(b.__key, c ? b.getChildrenSize() : 0, "element");
        }
      }
      var Ib = 1, Jb = typeof queueMicrotask == "function" ? queueMicrotask : (a) => {
        Promise.resolve().then(a);
      };
      function Kb(a) {
        let b = document.activeElement;
        if (b === null)
          return false;
        let c = b.nodeName;
        return z(ub(a)) && (c === "INPUT" || c === "TEXTAREA" || b.contentEditable === "true" && b.__lexicalEditor == null);
      }
      function Lb(a, b, c) {
        let d = a.getRootElement();
        try {
          return d !== null && d.contains(b) && d.contains(c) && b !== null && !Kb(b) && Mb(b) === a;
        } catch {
          return false;
        }
      }
      function Mb(a) {
        for (; a != null; ) {
          let b = a.__lexicalEditor;
          if (b != null)
            return b;
          a = Nb(a);
        }
        return null;
      }
      function Ub(a) {
        return a.isToken() || a.isSegmented();
      }
      function Vb(a) {
        for (; a != null; ) {
          if (a.nodeType === 3)
            return a;
          a = a.firstChild;
        }
        return null;
      }
      function Wb(a, b, c) {
        return b = fb[b], a & b && (c === null || (c & b) === 0) ? a ^ b : c === null || c & b ? a | b : a;
      }
      function Xb(a) {
        return B(a) || Yb(a) || z(a);
      }
      function Zb(a, b) {
        if (b != null)
          a.__key = b;
        else {
          G(), 99 < $b && q(14), b = F();
          var c = ac(), d = "" + Ib++;
          c._nodeMap.set(d, a), D(a) ? b._dirtyElements.set(d, true) : b._dirtyLeaves.add(d), b._cloneNotNeeded.add(d), b._dirtyType = 1, a.__key = d;
        }
      }
      function bc(a) {
        var b = a.getParent();
        if (b !== null) {
          let e = a.getWritable();
          b = b.getWritable();
          var c = a.getPreviousSibling();
          if (a = a.getNextSibling(), c === null)
            if (a !== null) {
              var d = a.getWritable();
              b.__first = a.__key, d.__prev = null;
            } else
              b.__first = null;
          else {
            if (d = c.getWritable(), a !== null) {
              let f = a.getWritable();
              f.__prev = d.__key, d.__next = f.__key;
            } else
              d.__next = null;
            e.__prev = null;
          }
          a === null ? c !== null ? (a = c.getWritable(), b.__last = c.__key, a.__next = null) : b.__last = null : (a = a.getWritable(), c !== null ? (c = c.getWritable(), c.__next = a.__key, a.__prev = c.__key) : a.__prev = null, e.__next = null), b.__size--, e.__parent = null;
        }
      }
      function cc(a) {
        99 < $b && q(14);
        var b = a.getLatest(), c = b.__parent, d = ac();
        let e = F(), f = d._nodeMap;
        if (d = e._dirtyElements, c !== null)
          a:
            for (; c !== null; ) {
              if (d.has(c))
                break a;
              let g = f.get(c);
              if (g === void 0)
                break;
              d.set(c, false), c = g.__parent;
            }
        b = b.__key, e._dirtyType = 1, D(a) ? d.set(b, true) : e._dirtyLeaves.add(b);
      }
      function H(a) {
        G();
        var b = F();
        let c = b._compositionKey;
        a !== c && (b._compositionKey = a, c !== null && (b = I(c), b !== null && b.getWritable()), a !== null && (a = I(a), a !== null && a.getWritable()));
      }
      function dc() {
        return ec() ? null : F()._compositionKey;
      }
      function I(a, b) {
        return a = (b || ac())._nodeMap.get(a), a === void 0 ? null : a;
      }
      function xb(a, b) {
        let c = F();
        return a = a[`__lexicalKey_${c._key}`], a !== void 0 ? I(a, b) : null;
      }
      function ub(a, b) {
        for (; a != null; ) {
          let c = xb(a, b);
          if (c !== null)
            return c;
          a = Nb(a);
        }
        return null;
      }
      function fc(a) {
        let b = Object.assign({}, a._decorators);
        return a._pendingDecorators = b;
      }
      function gc(a) {
        return a.read(() => hc().getTextContent());
      }
      function ic(a, b) {
        w(a, () => {
          var c = ac();
          if (!c.isEmpty())
            if (b === "root")
              hc().markDirty();
            else {
              c = c._nodeMap;
              for (let [, d] of c)
                d.markDirty();
            }
        }, a._pendingEditorState === null ? { tag: "history-merge" } : void 0);
      }
      function hc() {
        return ac()._nodeMap.get("root");
      }
      function yb(a) {
        G();
        let b = ac();
        a !== null && (a.dirty = true, a._cachedNodes = null), b._selection = a;
      }
      function jc(a) {
        var b = F(), c;
        a: {
          for (c = a; c != null; ) {
            let d = c[`__lexicalKey_${b._key}`];
            if (d !== void 0) {
              c = d;
              break a;
            }
            c = Nb(c);
          }
          c = null;
        }
        return c === null ? (b = b.getRootElement(), a === b ? I("root") : null) : I(c);
      }
      function kc(a) {
        return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(a);
      }
      function lc(a) {
        let b = [];
        for (; a !== null; )
          b.push(a), a = a._parentEditor;
        return b;
      }
      function mc() {
        return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
      }
      function nc(a, b, c) {
        if (b = vb(b._window), b !== null) {
          var d = b.anchorNode, { anchorOffset: e, focusOffset: f } = b;
          if (d !== null && (b = d.nodeType === 3 ? d.nodeValue : null, d = ub(d), b !== null && B(d))) {
            if (b === bb && c) {
              let g = c.length;
              b = c, f = e = g;
            }
            b !== null && wb(d, b, e, f, a);
          }
        }
      }
      function wb(a, b, c, d, e) {
        let f = a;
        if (f.isAttached() && (e || !f.isDirty())) {
          let n = f.isComposing(), m = b;
          if ((n || e) && b[b.length - 1] === bb && (m = b.slice(0, -1)), b = f.getTextContent(), e || m !== b)
            if (m === "")
              if (H(null), Ya || Za || ab)
                f.remove();
              else {
                let p = F();
                setTimeout(() => {
                  p.update(() => {
                    f.isAttached() && f.remove();
                  });
                }, 20);
              }
            else {
              e = f.getParent(), b = oc();
              var g = f.getTextContentSize(), h = dc(), k = f.getKey();
              f.isToken() || h !== null && k === h && !n || C(b) && (e !== null && !e.canInsertTextBefore() && b.anchor.offset === 0 || b.anchor.key === a.__key && b.anchor.offset === 0 && !f.canInsertTextBefore() || b.focus.key === a.__key && b.focus.offset === g && !f.canInsertTextAfter()) ? f.markDirty() : (a = v(), C(a) && c !== null && d !== null && (a.setTextNodeRange(f, c, f, d), f.isSegmented() && (c = f.getTextContent(), c = J(c), f.replace(c), f = c)), f.setTextContent(m));
            }
        }
      }
      function pc(a, b) {
        if (b.isSegmented())
          return true;
        if (!a.isCollapsed())
          return false;
        a = a.anchor.offset;
        let c = b.getParentOrThrow(), d = b.isToken();
        return a === 0 ? ((a = !b.canInsertTextBefore() || !c.canInsertTextBefore() || d) || (b = b.getPreviousSibling(), a = (B(b) || D(b) && b.isInline()) && !b.canInsertTextAfter()), a) : a === b.getTextContentSize() ? !b.canInsertTextAfter() || !c.canInsertTextAfter() || d : false;
      }
      function qc(a, b) {
        a.__lexicalClassNameCache === void 0 && (a.__lexicalClassNameCache = {});
        let c = a.__lexicalClassNameCache, d = c[b];
        return d !== void 0 ? d : (a = a[b], typeof a == "string" ? (a = a.split(" "), c[b] = a) : a);
      }
      function rc(a, b, c, d, e) {
        c.size !== 0 && (c = d.__type, d = d.__key, b = b.get(c), b === void 0 && q(33, c), c = b.klass, b = a.get(c), b === void 0 && (b = /* @__PURE__ */ new Map(), a.set(c, b)), a = b.get(d), c = a === "destroyed" && e === "created", (a === void 0 || c) && b.set(d, c ? "updated" : e));
      }
      function sc(a, b, c) {
        let d = a.getParent(), e = c;
        return d !== null && (b && c === 0 ? (e = a.getIndexWithinParent(), a = d) : b || c !== a.getChildrenSize() || (e = a.getIndexWithinParent() + 1, a = d)), a.getChildAtIndex(b ? e - 1 : e);
      }
      function tc(a, b) {
        var c = a.offset;
        return a.type === "element" ? (a = a.getNode(), sc(a, b, c)) : (a = a.getNode(), b && c === 0 || !b && c === a.getTextContentSize() ? (c = b ? a.getPreviousSibling() : a.getNextSibling(), c === null ? sc(a.getParentOrThrow(), b, a.getIndexWithinParent() + (b ? 0 : 1)) : c) : null);
      }
      function zb(a) {
        return a = (a = Cb(a).event) && a.inputType, a === "insertFromPaste" || a === "insertFromPasteAsQuotation";
      }
      function uc(a) {
        return !K(a) && !a.isLastChild() && !a.isInline();
      }
      function vc(a, b) {
        return a = a._keyToDOMMap.get(b), a === void 0 && q(75, b), a;
      }
      function Nb(a) {
        return a = a.assignedSlot || a.parentElement, a !== null && a.nodeType === 11 ? a.host : a;
      }
      function wc(a, b) {
        for (a = a.getParent(); a !== null; ) {
          if (a.is(b))
            return true;
          a = a.getParent();
        }
        return false;
      }
      function Cb(a) {
        return a = a._window, a === null && q(78), a;
      }
      function xc(a) {
        for (a = a.getParentOrThrow(); a !== null && !L(a); )
          a = a.getParentOrThrow();
        return a;
      }
      function L(a) {
        return K(a) || D(a) && a.isShadowRoot();
      }
      function yc(a) {
        return a = a.constructor.clone(a), Zb(a, null), a;
      }
      function zc(a) {
        var b = F();
        let c = a.constructor.getType();
        return b = b._nodes.get(c), b === void 0 && q(97), b = b.replace, b !== null ? (b = b(a), b instanceof a.constructor || q(98), b) : a;
      }
      function Ac(a, b) {
        a = a.getParent(), !K(a) || D(b) || z(b) || q(99);
      }
      function Bc(a) {
        return (z(a) || D(a) && !a.canBeEmpty()) && !a.isInline();
      }
      function Cc(a, b, c) {
        c.style.removeProperty("caret-color"), b._blockCursorElement = null, b = a.parentElement, b !== null && b.removeChild(a);
      }
      function vb(a) {
        return Ta ? (a || window).getSelection() : null;
      }
      function Dc(a, b) {
        let c = a.getChildAtIndex(b);
        c == null && (c = a), L(a) && q(102);
        let d = (g) => {
          let h = g.getParentOrThrow(), k = L(h), n = g !== c || k ? yc(g) : g;
          if (k)
            return g.insertAfter(n), [g, n, n];
          let [m, p, l] = d(h);
          return g = g.getNextSiblings(), l.append(n, ...g), [m, p, n];
        }, [e, f] = d(c);
        return [e, f];
      }
      function Ec(a, b) {
        for (; a !== hc() && a != null; ) {
          if (b(a))
            return a;
          a = a.getParent();
        }
        return null;
      }
      function Fc(a) {
        let b = [], c = [a];
        for (; 0 < c.length; ) {
          let d = c.pop();
          d === void 0 && q(112), D(d) && c.unshift(...d.getChildren()), d !== a && b.push(d);
        }
        return b;
      }
      function Gc(a, b, c, d, e, f) {
        for (a = a.getFirstChild(); a !== null; ) {
          let g = a.__key;
          a.__parent === b && (D(a) && Gc(a, g, c, d, e, f), c.has(g) || f.delete(g), e.push(g)), a = a.getNextSibling();
        }
      }
      function Hc(a, b, c, d) {
        a = a._nodeMap, b = b._nodeMap;
        let e = [];
        for (let [f] of d) {
          let g = b.get(f);
          g === void 0 || g.isAttached() || (D(g) && Gc(g, f, a, b, e, d), a.has(f) || d.delete(f), e.push(f));
        }
        for (let f of e)
          b.delete(f);
        for (let f of c)
          d = b.get(f), d === void 0 || d.isAttached() || (a.has(f) || c.delete(f), b.delete(f));
      }
      var M = "", N = "", Ic = "", Jc, O, Kc, Lc = false, Mc = false, Nc, Oc = null, Pc, Qc, Rc, Sc, bd, cd;
      function dd(a, b) {
        let c = Rc.get(a);
        if (b !== null) {
          let d = ed(a);
          d.parentNode === b && b.removeChild(d);
        }
        Sc.has(a) || O._keyToDOMMap.delete(a), D(c) && (a = fd(c, Rc), gd(a, 0, a.length - 1, null)), c !== void 0 && rc(cd, Kc, Nc, c, "destroyed");
      }
      function gd(a, b, c, d) {
        for (; b <= c; ++b) {
          let e = a[b];
          e !== void 0 && dd(e, d);
        }
      }
      function hd(a, b) {
        a.setProperty("text-align", b);
      }
      function id(a, b) {
        var c = Jc.theme.indent;
        if (typeof c == "string") {
          let d = a.classList.contains(c);
          0 < b && !d ? a.classList.add(c) : 1 > b && d && a.classList.remove(c);
        }
        c = getComputedStyle(a).getPropertyValue("--lexical-indent-base-value") || "40px", a.style.setProperty("padding-inline-start", b === 0 ? "" : `calc(${b} * ${c})`);
      }
      function jd(a, b) {
        a = a.style, b === 0 ? hd(a, "") : b === 1 ? hd(a, "left") : b === 2 ? hd(a, "center") : b === 3 ? hd(a, "right") : b === 4 ? hd(a, "justify") : b === 5 ? hd(a, "start") : b === 6 && hd(a, "end");
      }
      function kd(a, b, c) {
        let d = Sc.get(a);
        d === void 0 && q(60);
        let e = d.createDOM(Jc, O);
        var f = O._keyToDOMMap;
        if (e["__lexicalKey_" + O._key] = a, f.set(a, e), B(d) ? e.setAttribute("data-lexical-text", "true") : z(d) && e.setAttribute("data-lexical-decorator", "true"), D(d)) {
          if (a = d.__indent, f = d.__size, a !== 0 && id(e, a), f !== 0) {
            --f, a = fd(d, Sc);
            var g = N;
            N = "", ld(a, d, 0, f, e, null), md(d, e), N = g;
          }
          a = d.__format, a !== 0 && jd(e, a), d.isInline() || nd(null, d, e), uc(d) && (M += `

`, Ic += `

`);
        } else
          f = d.getTextContent(), z(d) ? (g = d.decorate(O, Jc), g !== null && od(a, g), e.contentEditable = "false") : B(d) && (d.isDirectionless() || (N += f)), M += f, Ic += f;
        return b !== null && (c != null ? b.insertBefore(e, c) : (c = b.__lexicalLineBreak, c != null ? b.insertBefore(e, c) : b.appendChild(e))), rc(cd, Kc, Nc, d, "created"), e;
      }
      function ld(a, b, c, d, e, f) {
        let g = M;
        for (M = ""; c <= d; ++c)
          kd(a[c], e, f);
        uc(b) && (M += `

`), e.__lexicalTextContent = M, M = g + M;
      }
      function pd(a, b) {
        return a = b.get(a), Yb(a) || z(a) && a.isInline();
      }
      function nd(a, b, c) {
        a = a !== null && (a.__size === 0 || pd(a.__last, Rc)), b = b.__size === 0 || pd(b.__last, Sc), a ? b || (b = c.__lexicalLineBreak, b != null && c.removeChild(b), c.__lexicalLineBreak = null) : b && (b = document.createElement("br"), c.__lexicalLineBreak = b, c.appendChild(b));
      }
      function md(a, b) {
        var c = b.__lexicalDir;
        if (b.__lexicalDirTextContent !== N || c !== Oc) {
          let f = N === "";
          if (f)
            var d = Oc;
          else
            d = N, d = db.test(d) ? "rtl" : eb.test(d) ? "ltr" : null;
          if (d !== c) {
            let g = b.classList, h = Jc.theme;
            var e = c !== null ? h[c] : void 0;
            let k = d !== null ? h[d] : void 0;
            e !== void 0 && (typeof e == "string" && (e = e.split(" "), e = h[c] = e), g.remove(...e)), d === null || f && d === "ltr" ? b.removeAttribute("dir") : (k !== void 0 && (typeof k == "string" && (c = k.split(" "), k = h[d] = c), k !== void 0 && g.add(...k)), b.dir = d), Mc || (a.getWritable().__dir = d);
          }
          Oc = d, b.__lexicalDirTextContent = N, b.__lexicalDir = d;
        }
      }
      function fd(a, b) {
        let c = [];
        for (a = a.__first; a !== null; ) {
          let d = b.get(a);
          d === void 0 && q(101), c.push(a), a = d.__next;
        }
        return c;
      }
      function qd(a, b) {
        var c = Rc.get(a), d = Sc.get(a);
        c !== void 0 && d !== void 0 || q(61);
        var e = Lc || Qc.has(a) || Pc.has(a);
        let f = vc(O, a);
        if (c === d && !e)
          return D(c) ? (d = f.__lexicalTextContent, d !== void 0 && (M += d, Ic += d), d = f.__lexicalDirTextContent, d !== void 0 && (N += d)) : (d = c.getTextContent(), B(c) && !c.isDirectionless() && (N += d), Ic += d, M += d), f;
        if (c !== d && e && rc(cd, Kc, Nc, d, "updated"), d.updateDOM(c, f, Jc))
          return d = kd(a, null, null), b === null && q(62), b.replaceChild(d, f), dd(a, null), d;
        if (D(c) && D(d)) {
          if (a = d.__indent, a !== c.__indent && id(f, a), a = d.__format, a !== c.__format && jd(f, a), e) {
            a = d, e = N, N = "", b = M;
            var g = c.__size, h = a.__size;
            if (M = "", g === 1 && h === 1) {
              var k = c.__first, n = a.__first;
              if (k === n)
                qd(k, f);
              else {
                var m = ed(k);
                n = kd(n, null, null), f.replaceChild(n, m), dd(k, null);
              }
            } else {
              n = fd(c, Rc);
              var p = fd(a, Sc);
              if (g === 0)
                h !== 0 && ld(p, a, 0, h - 1, f, null);
              else if (h === 0)
                g !== 0 && (k = f.__lexicalLineBreak == null, gd(n, 0, g - 1, k ? null : f), k && (f.textContent = ""));
              else {
                var l = n;
                n = p, p = g - 1, g = h - 1;
                let u = f.firstChild, x = 0;
                for (h = 0; x <= p && h <= g; ) {
                  var r = l[x];
                  let y = n[h];
                  if (r === y)
                    u = rd(qd(y, f)), x++, h++;
                  else {
                    k === void 0 && (k = new Set(l)), m === void 0 && (m = new Set(n));
                    let A = m.has(r), Y = k.has(y);
                    A ? (Y ? (r = vc(O, y), r === u ? u = rd(qd(y, f)) : (u != null ? f.insertBefore(r, u) : f.appendChild(r), qd(y, f)), x++) : kd(y, f, u), h++) : (u = rd(ed(r)), dd(r, f), x++);
                  }
                }
                k = x > p, m = h > g, k && !m ? (k = n[g + 1], k = k === void 0 ? null : O.getElementByKey(k), ld(n, a, h, g, f, k)) : m && !k && gd(l, x, p, f);
              }
            }
            uc(a) && (M += `

`), f.__lexicalTextContent = M, M = b + M, md(a, f), N = e, K(d) || d.isInline() || nd(c, d, f);
          }
          uc(d) && (M += `

`, Ic += `

`);
        } else
          c = d.getTextContent(), z(d) ? (e = d.decorate(O, Jc), e !== null && od(a, e)) : B(d) && !d.isDirectionless() && (N += c), M += c, Ic += c;
        return !Mc && K(d) && d.__cachedText !== Ic && (d = d.getWritable(), d.__cachedText = Ic), f;
      }
      function od(a, b) {
        let c = O._pendingDecorators, d = O._decorators;
        if (c === null) {
          if (d[a] === b)
            return;
          c = fc(O);
        }
        c[a] = b;
      }
      function rd(a) {
        return a = a.nextSibling, a !== null && a === O._blockCursorElement && (a = a.nextSibling), a;
      }
      function ed(a) {
        let b = bd.get(a);
        return b === void 0 && q(75, a), b;
      }
      var sd = Object.freeze({}), zd = [["keydown", td], ["pointerdown", ud], ["compositionstart", vd], ["compositionend", wd], ["input", xd], ["click", yd], ["cut", sd], ["copy", sd], ["dragstart", sd], ["dragover", sd], ["dragend", sd], ["paste", sd], ["focus", sd], ["blur", sd], ["drop", sd]];
      Xa && zd.push(["beforeinput", (a, b) => Ad(a, b)]);
      var Bd = 0, Cd = 0, Dd = 0, Ed = null, Fd = 0, Gd = false, Hd = false, Id = false, Jd = false, Kd = [0, "", 0, "root", 0];
      function Ld(a, b, c, d, e) {
        let f = a.anchor, g = a.focus, h = f.getNode();
        var k = F();
        let n = vb(k._window), m = n !== null ? n.anchorNode : null, p = f.key;
        k = k.getElementByKey(p);
        let l = c.length;
        return p !== g.key || !B(h) || (!e && (!Xa || Dd < d + 50) || h.isDirty() && 2 > l || kc(c)) && f.offset !== g.offset && !h.isComposing() || Ub(h) || h.isDirty() && 1 < l || (e || !Xa) && k !== null && !h.isComposing() && m !== Vb(k) || n !== null && b !== null && (!b.collapsed || b.startContainer !== n.anchorNode || b.startOffset !== n.anchorOffset) || h.getFormat() !== a.format || h.getStyle() !== a.style || pc(a, h);
      }
      function Md(a, b) {
        return a !== null && a.nodeValue !== null && a.nodeType === 3 && b !== 0 && b !== a.nodeValue.length;
      }
      function Nd(a, b, c) {
        let { anchorNode: d, anchorOffset: e, focusNode: f, focusOffset: g } = a;
        Gd && (Gd = false, Md(d, e) && Md(f, g)) || w(b, () => {
          if (!c)
            yb(null);
          else if (Lb(b, d, f)) {
            var h = v();
            if (C(h)) {
              var k = h.anchor, n = k.getNode();
              if (h.isCollapsed()) {
                a.type === "Range" && a.anchorNode === a.focusNode && (h.dirty = true);
                var m = Cb(b).event;
                m = m ? m.timeStamp : performance.now();
                let [p, l, r, u, x] = Kd;
                m < x + 200 && k.offset === r && k.key === u ? (h.format = p, h.style = l) : k.type === "text" ? (h.format = n.getFormat(), h.style = n.getStyle()) : k.type === "element" && (h.format = 0, h.style = "");
              } else {
                k = 255, n = false, m = h.getNodes();
                let p = m.length;
                for (let l = 0; l < p; l++) {
                  let r = m[l];
                  if (B(r) && (n = true, k &= r.getFormat(), k === 0))
                    break;
                }
                h.format = n ? k : 0;
              }
            }
            R(b, aa, void 0);
          }
        });
      }
      function yd(a, b) {
        w(b, () => {
          let c = v();
          var d = vb(b._window);
          let e = oc();
          if (d)
            if (C(c)) {
              let g = c.anchor;
              var f = g.getNode();
              g.type === "element" && g.offset === 0 && c.isCollapsed() && !K(f) && hc().getChildrenSize() === 1 && f.getTopLevelElementOrThrow().isEmpty() && e !== null && c.is(e) ? (d.removeAllRanges(), c.dirty = true) : a.detail !== 3 || c.isCollapsed() || (d = c.focus.getNode(), f !== d && (D(f) ? f.select(0) : f.getParentOrThrow().select(0)));
            } else
              a.pointerType === "touch" && (f = d.anchorNode, f !== null && (f = f.nodeType, f === 1 || f === 3)) && (d = Od(e, d, b), yb(d));
          R(b, ca, a);
        });
      }
      function ud(a, b) {
        let c = a.target;
        a = a.pointerType, c instanceof Node && a !== "touch" && w(b, () => {
          z(ub(c)) || (Hd = true);
        });
      }
      function Pd(a) {
        return a.getTargetRanges ? (a = a.getTargetRanges(), a.length === 0 ? null : a[0]) : null;
      }
      function Qd(a, b) {
        return a !== b || D(a) || D(b) || !a.isToken() || !b.isToken();
      }
      function Ad(a, b) {
        let c = a.inputType, d = Pd(a);
        c === "deleteCompositionText" || Wa && zb(b) || c !== "insertCompositionText" && w(b, () => {
          let e = v();
          if (c === "deleteContentBackward") {
            if (e === null) {
              var f = oc();
              if (!C(f))
                return;
              yb(f.clone());
            }
            if (C(e)) {
              Cd === 229 && a.timeStamp < Bd + 30 && b.isComposing() && e.anchor.key === e.focus.key ? (H(null), Bd = 0, setTimeout(() => {
                w(b, () => {
                  H(null);
                });
              }, 30), C(e) && (f = e.anchor.getNode(), f.markDirty(), e.format = f.getFormat(), e.style = f.getStyle())) : (a.preventDefault(), R(b, da, true));
              return;
            }
          }
          if (C(e)) {
            f = a.data, Ed !== null && nc(false, b, Ed), e.dirty && Ed === null || !e.isCollapsed() || K(e.anchor.getNode()) || d === null || e.applyDOMRange(d), Ed = null;
            var g = e.focus, h = e.anchor.getNode();
            if (g = g.getNode(), c === "insertText" || c === "insertTranspose")
              f === `
` ? (a.preventDefault(), R(b, ea, false)) : f === `

` ? (a.preventDefault(), R(b, fa, void 0)) : f == null && a.dataTransfer ? (f = a.dataTransfer.getData("text/plain"), a.preventDefault(), e.insertRawText(f)) : f != null && Ld(e, d, f, a.timeStamp, true) ? (a.preventDefault(), R(b, ha, f)) : Ed = f, Dd = a.timeStamp;
            else
              switch (a.preventDefault(), c) {
                case "insertFromYank":
                case "insertFromDrop":
                case "insertReplacementText":
                  R(b, ha, a);
                  break;
                case "insertFromComposition":
                  H(null), R(b, ha, a);
                  break;
                case "insertLineBreak":
                  H(null), R(b, ea, false);
                  break;
                case "insertParagraph":
                  H(null), Id && !Za ? (Id = false, R(b, ea, false)) : R(b, fa, void 0);
                  break;
                case "insertFromPaste":
                case "insertFromPasteAsQuotation":
                  R(b, ka, a);
                  break;
                case "deleteByComposition":
                  Qd(h, g) && R(b, ma, a);
                  break;
                case "deleteByDrag":
                case "deleteByCut":
                  R(b, ma, a);
                  break;
                case "deleteContent":
                  R(b, da, false);
                  break;
                case "deleteWordBackward":
                  R(b, na, true);
                  break;
                case "deleteWordForward":
                  R(b, na, false);
                  break;
                case "deleteHardLineBackward":
                case "deleteSoftLineBackward":
                  R(b, pa, true);
                  break;
                case "deleteContentForward":
                case "deleteHardLineForward":
                case "deleteSoftLineForward":
                  R(b, pa, false);
                  break;
                case "formatStrikeThrough":
                  R(b, qa, "strikethrough");
                  break;
                case "formatBold":
                  R(b, qa, "bold");
                  break;
                case "formatItalic":
                  R(b, qa, "italic");
                  break;
                case "formatUnderline":
                  R(b, qa, "underline");
                  break;
                case "historyUndo":
                  R(b, ra, void 0);
                  break;
                case "historyRedo":
                  R(b, sa, void 0);
              }
          }
        });
      }
      function xd(a, b) {
        a.stopPropagation(), w(b, () => {
          var c = v(), d = a.data, e = Pd(a);
          if (d != null && C(c) && Ld(c, e, d, a.timeStamp, false)) {
            Jd && (Rd(b, d), Jd = false);
            var f = c.anchor, g = f.getNode();
            if (e = vb(b._window), e === null)
              return;
            let h = f.offset;
            (f = Xa && !c.isCollapsed() && B(g) && e.anchorNode !== null) && (g = g.getTextContent().slice(0, h) + d + g.getTextContent().slice(h + c.focus.offset), e = e.anchorNode, f = g === (e.nodeType === 3 ? e.nodeValue : null)), f || R(b, ha, d), d = d.length, Wa && 1 < d && a.inputType === "insertCompositionText" && !b.isComposing() && (c.anchor.offset -= d), Ya || Za || ab || !b.isComposing() || (Bd = 0, H(null));
          } else
            nc(false, b, d !== null ? d : void 0), Jd && (Rd(b, d || void 0), Jd = false);
          G(), c = F(), Ab(c);
        }), Ed = null;
      }
      function vd(a, b) {
        w(b, () => {
          let c = v();
          if (C(c) && !b.isComposing()) {
            let d = c.anchor, e = c.anchor.getNode();
            H(d.key), (a.timeStamp < Bd + 30 || d.type === "element" || !c.isCollapsed() || e.getFormat() !== c.format || e.getStyle() !== c.style) && R(b, ha, cb);
          }
        });
      }
      function Rd(a, b) {
        var c = a._compositionKey;
        if (H(null), c !== null && b != null) {
          if (b === "") {
            b = I(c), a = Vb(a.getElementByKey(c)), a !== null && a.nodeValue !== null && B(b) && wb(b, a.nodeValue, null, null, true);
            return;
          }
          if (b[b.length - 1] === `
` && (c = v(), C(c))) {
            b = c.focus, c.anchor.set(b.key, b.offset, b.type), R(a, Ba, null);
            return;
          }
        }
        nc(true, a, b);
      }
      function wd(a, b) {
        Wa ? Jd = true : w(b, () => {
          Rd(b, a.data);
        });
      }
      function td(a, b) {
        if (Bd = a.timeStamp, Cd = a.keyCode, !b.isComposing()) {
          var { keyCode: c, shiftKey: d, ctrlKey: e, metaKey: f, altKey: g } = a;
          if (!R(b, ta, a)) {
            if (c !== 39 || e || f || g)
              if (c !== 39 || g || d || !e && !f)
                if (c !== 37 || e || f || g)
                  if (c !== 37 || g || d || !e && !f)
                    if (c !== 38 || e || f)
                      if (c !== 40 || e || f)
                        if (c === 13 && d)
                          Id = true, R(b, Ba, a);
                        else if (c === 32)
                          R(b, Ca, a);
                        else if (t && e && c === 79)
                          a.preventDefault(), Id = true, R(b, ea, true);
                        else if (c !== 13 || d) {
                          var h = t ? g || f ? false : c === 8 || c === 72 && e : e || g || f ? false : c === 8;
                          h ? c === 8 ? R(b, Fa, a) : (a.preventDefault(), R(b, da, true)) : c === 27 ? R(b, Ga, a) : (h = t ? d || g || f ? false : c === 46 || c === 68 && e : e || g || f ? false : c === 46, h ? c === 46 ? R(b, Ha, a) : (a.preventDefault(), R(b, da, false)) : c === 8 && (t ? g : e) ? (a.preventDefault(), R(b, na, true)) : c === 46 && (t ? g : e) ? (a.preventDefault(), R(b, na, false)) : t && f && c === 8 ? (a.preventDefault(), R(b, pa, true)) : t && f && c === 46 ? (a.preventDefault(), R(b, pa, false)) : c === 66 && !g && (t ? f : e) ? (a.preventDefault(), R(b, qa, "bold")) : c === 85 && !g && (t ? f : e) ? (a.preventDefault(), R(b, qa, "underline")) : c === 73 && !g && (t ? f : e) ? (a.preventDefault(), R(b, qa, "italic")) : c !== 9 || g || e || f ? c === 90 && !d && (t ? f : e) ? (a.preventDefault(), R(b, ra, void 0)) : (h = t ? c === 90 && f && d : c === 89 && e || c === 90 && e && d, h ? (a.preventDefault(), R(b, sa, void 0)) : Sd(b._editorState._selection) ? (h = d ? false : c === 67 ? t ? f : e : false, h ? (a.preventDefault(), R(b, Na, a)) : (h = d ? false : c === 88 ? t ? f : e : false, h ? (a.preventDefault(), R(b, Oa, a)) : c === 65 && (t ? f : e) && (a.preventDefault(), R(b, Pa, a)))) : !Wa && c === 65 && (t ? f : e) && (a.preventDefault(), R(b, Pa, a))) : R(b, Ia, a));
                        } else
                          Id = false, R(b, Ba, a);
                      else
                        R(b, Aa, a);
                    else
                      R(b, za, a);
                  else
                    R(b, ya, a);
                else
                  R(b, xa, a);
              else
                R(b, va, a);
            else
              R(b, ua, a);
            (e || d || g || f) && R(b, Sa, a);
          }
        }
      }
      function Td(a) {
        let b = a.__lexicalEventHandles;
        return b === void 0 && (b = [], a.__lexicalEventHandles = b), b;
      }
      var Ud = /* @__PURE__ */ new Map();
      function Vd(a) {
        a = a.target;
        let b = vb(a == null ? null : a.nodeType === 9 ? a.defaultView : a.ownerDocument.defaultView);
        if (b !== null) {
          var c = Mb(b.anchorNode);
          if (c !== null) {
            Hd && (Hd = false, w(c, () => {
              var g = oc(), h = b.anchorNode;
              h !== null && (h = h.nodeType, h === 1 || h === 3) && (g = Od(g, b, c), yb(g));
            })), a = lc(c), a = a[a.length - 1];
            var d = a._key, e = Ud.get(d), f = e || a;
            f !== c && Nd(b, f, false), Nd(b, c, true), c !== a ? Ud.set(d, c) : e && Ud.delete(d);
          }
        }
      }
      function Wd(a, b) {
        Fd === 0 && a.ownerDocument.addEventListener("selectionchange", Vd), Fd++, a.__lexicalEditor = b;
        let c = Td(a);
        for (let d = 0; d < zd.length; d++) {
          let [e, f] = zd[d], g = typeof f == "function" ? (h) => {
            h._lexicalHandled !== true && (h._lexicalHandled = true, b.isEditable() && f(h, b));
          } : (h) => {
            if (h._lexicalHandled !== true && (h._lexicalHandled = true, b.isEditable()))
              switch (e) {
                case "cut":
                  return R(b, Oa, h);
                case "copy":
                  return R(b, Na, h);
                case "paste":
                  return R(b, ka, h);
                case "dragstart":
                  return R(b, Ka, h);
                case "dragover":
                  return R(b, La, h);
                case "dragend":
                  return R(b, Ma, h);
                case "focus":
                  return R(b, Qa, h);
                case "blur":
                  return R(b, Ra, h);
                case "drop":
                  return R(b, Ja, h);
              }
          };
          a.addEventListener(e, g), c.push(() => {
            a.removeEventListener(e, g);
          });
        }
      }
      function Xd(a, b, c) {
        G();
        var d = a.__key;
        let e = a.getParent();
        if (e !== null) {
          var f = v();
          if (C(f) && D(a)) {
            var { anchor: g, focus: h } = f, k = g.getNode(), n = h.getNode();
            wc(k, a) && g.set(a.__key, 0, "element"), wc(n, a) && h.set(a.__key, 0, "element");
          }
          if (k = f, n = false, C(k) && b) {
            f = k.anchor;
            let m = k.focus;
            f.key === d && (Yd(f, a, e, a.getPreviousSibling(), a.getNextSibling()), n = true), m.key === d && (Yd(m, a, e, a.getPreviousSibling(), a.getNextSibling()), n = true);
          } else
            Sd(k) && b && a.isSelected() && a.selectPrevious();
          C(k) && b && !n ? (d = a.getIndexWithinParent(), bc(a), Zd(k, e, d, -1)) : bc(a), c || L(e) || e.canBeEmpty() || !e.isEmpty() || Xd(e, b), b && K(e) && e.isEmpty() && e.selectEnd();
        }
      }
      var $d = class {
        static getType() {
          q(64, this.name);
        }
        static clone() {
          q(65, this.name);
        }
        constructor(a) {
          this.__type = this.constructor.getType(), this.__next = this.__prev = this.__parent = null, Zb(this, a);
        }
        getType() {
          return this.__type;
        }
        isAttached() {
          for (var a = this.__key; a !== null; ) {
            if (a === "root")
              return true;
            if (a = I(a), a === null)
              break;
            a = a.__parent;
          }
          return false;
        }
        isSelected(a) {
          if (a = a || v(), a == null)
            return false;
          let b = a.getNodes().some((c) => c.__key === this.__key);
          return B(this) ? b : C(a) && a.anchor.type === "element" && a.focus.type === "element" && a.anchor.key === a.focus.key && a.anchor.offset === a.focus.offset ? false : b;
        }
        getKey() {
          return this.__key;
        }
        getIndexWithinParent() {
          var a = this.getParent();
          if (a === null)
            return -1;
          a = a.getFirstChild();
          let b = 0;
          for (; a !== null; ) {
            if (this.is(a))
              return b;
            b++, a = a.getNextSibling();
          }
          return -1;
        }
        getParent() {
          let a = this.getLatest().__parent;
          return a === null ? null : I(a);
        }
        getParentOrThrow() {
          let a = this.getParent();
          return a === null && q(66, this.__key), a;
        }
        getTopLevelElement() {
          let a = this;
          for (; a !== null; ) {
            let b = a.getParent();
            if (L(b))
              return a;
            a = b;
          }
          return null;
        }
        getTopLevelElementOrThrow() {
          let a = this.getTopLevelElement();
          return a === null && q(67, this.__key), a;
        }
        getParents() {
          let a = [], b = this.getParent();
          for (; b !== null; )
            a.push(b), b = b.getParent();
          return a;
        }
        getParentKeys() {
          let a = [], b = this.getParent();
          for (; b !== null; )
            a.push(b.__key), b = b.getParent();
          return a;
        }
        getPreviousSibling() {
          let a = this.getLatest().__prev;
          return a === null ? null : I(a);
        }
        getPreviousSiblings() {
          let a = [];
          var b = this.getParent();
          if (b === null)
            return a;
          for (b = b.getFirstChild(); b !== null && !b.is(this); )
            a.push(b), b = b.getNextSibling();
          return a;
        }
        getNextSibling() {
          let a = this.getLatest().__next;
          return a === null ? null : I(a);
        }
        getNextSiblings() {
          let a = [], b = this.getNextSibling();
          for (; b !== null; )
            a.push(b), b = b.getNextSibling();
          return a;
        }
        getCommonAncestor(a) {
          let b = this.getParents();
          var c = a.getParents();
          D(this) && b.unshift(this), D(a) && c.unshift(a), a = b.length;
          var d = c.length;
          if (a === 0 || d === 0 || b[a - 1] !== c[d - 1])
            return null;
          for (c = new Set(c), d = 0; d < a; d++) {
            let e = b[d];
            if (c.has(e))
              return e;
          }
          return null;
        }
        is(a) {
          return a == null ? false : this.__key === a.__key;
        }
        isBefore(a) {
          if (this === a)
            return false;
          if (a.isParentOf(this))
            return true;
          if (this.isParentOf(a))
            return false;
          var b = this.getCommonAncestor(a);
          let c = this;
          for (; ; ) {
            var d = c.getParentOrThrow();
            if (d === b) {
              d = c.getIndexWithinParent();
              break;
            }
            c = d;
          }
          for (c = a; ; ) {
            if (a = c.getParentOrThrow(), a === b) {
              b = c.getIndexWithinParent();
              break;
            }
            c = a;
          }
          return d < b;
        }
        isParentOf(a) {
          let b = this.__key;
          if (b === a.__key)
            return false;
          for (; a !== null; ) {
            if (a.__key === b)
              return true;
            a = a.getParent();
          }
          return false;
        }
        getNodesBetween(a) {
          let b = this.isBefore(a), c = [], d = /* @__PURE__ */ new Set();
          for (var e = this; ; ) {
            var f = e.__key;
            if (d.has(f) || (d.add(f), c.push(e)), e === a)
              break;
            if (f = D(e) ? b ? e.getFirstChild() : e.getLastChild() : null, f !== null)
              e = f;
            else if (f = b ? e.getNextSibling() : e.getPreviousSibling(), f !== null)
              e = f;
            else {
              if (e = e.getParentOrThrow(), d.has(e.__key) || c.push(e), e === a)
                break;
              f = e;
              do
                f === null && q(68), e = b ? f.getNextSibling() : f.getPreviousSibling(), f = f.getParent(), f !== null && (e !== null || d.has(f.__key) || c.push(f));
              while (e === null);
            }
          }
          return b || c.reverse(), c;
        }
        isDirty() {
          let a = F()._dirtyLeaves;
          return a !== null && a.has(this.__key);
        }
        getLatest() {
          let a = I(this.__key);
          return a === null && q(113), a;
        }
        getWritable() {
          G();
          var a = ac(), b = F();
          a = a._nodeMap;
          let c = this.__key, d = this.getLatest(), e = d.__parent;
          b = b._cloneNotNeeded;
          var f = v();
          return f !== null && (f._cachedNodes = null), b.has(c) ? (cc(d), d) : (f = d.constructor.clone(d), f.__parent = e, f.__next = d.__next, f.__prev = d.__prev, D(d) && D(f) ? (f.__first = d.__first, f.__last = d.__last, f.__size = d.__size, f.__indent = d.__indent, f.__format = d.__format, f.__dir = d.__dir) : B(d) && B(f) && (f.__format = d.__format, f.__style = d.__style, f.__mode = d.__mode, f.__detail = d.__detail), b.add(c), f.__key = c, cc(f), a.set(c, f), f);
        }
        getTextContent() {
          return "";
        }
        getTextContentSize() {
          return this.getTextContent().length;
        }
        createDOM() {
          q(70);
        }
        updateDOM() {
          q(71);
        }
        exportDOM(a) {
          return { element: this.createDOM(a._config, a) };
        }
        exportJSON() {
          q(72);
        }
        static importJSON() {
          q(18, this.name);
        }
        static transform() {
          return null;
        }
        remove(a) {
          Xd(this, true, a);
        }
        replace(a, b) {
          G();
          var c = v();
          c !== null && (c = c.clone()), Ac(this, a);
          let d = this.getLatest(), e = this.__key, f = a.__key, g = a.getWritable();
          a = this.getParentOrThrow().getWritable();
          let h = a.__size;
          bc(g);
          let k = d.getPreviousSibling(), n = d.getNextSibling(), m = d.__prev, p = d.__next, l = d.__parent;
          return Xd(d, false, true), k === null ? a.__first = f : k.getWritable().__next = f, g.__prev = m, n === null ? a.__last = f : n.getWritable().__prev = f, g.__next = p, g.__parent = l, a.__size = h, b && this.getChildren().forEach((r) => {
            g.append(r);
          }), C(c) && (yb(c), b = c.anchor, c = c.focus, b.key === e && ae(b, g), c.key === e && ae(c, g)), dc() === e && H(f), g;
        }
        insertAfter(a, b = true) {
          G(), Ac(this, a);
          var c = this.getWritable();
          let d = a.getWritable();
          var e = d.getParent();
          let f = v();
          var g = false, h = false;
          if (e !== null) {
            var k = a.getIndexWithinParent();
            bc(d), C(f) && (h = e.__key, g = f.anchor, e = f.focus, g = g.type === "element" && g.key === h && g.offset === k + 1, h = e.type === "element" && e.key === h && e.offset === k + 1);
          }
          e = this.getNextSibling(), k = this.getParentOrThrow().getWritable();
          let n = d.__key, m = c.__next;
          return e === null ? k.__last = n : e.getWritable().__prev = n, k.__size++, c.__next = n, d.__next = m, d.__prev = c.__key, d.__parent = c.__parent, b && C(f) && (b = this.getIndexWithinParent(), Zd(f, k, b + 1), c = k.__key, g && f.anchor.set(c, b + 2, "element"), h && f.focus.set(c, b + 2, "element")), a;
        }
        insertBefore(a, b = true) {
          G(), Ac(this, a);
          var c = this.getWritable();
          let d = a.getWritable(), e = d.__key;
          bc(d);
          let f = this.getPreviousSibling(), g = this.getParentOrThrow().getWritable(), h = c.__prev, k = this.getIndexWithinParent();
          return f === null ? g.__first = e : f.getWritable().__next = e, g.__size++, c.__prev = e, d.__prev = h, d.__next = c.__key, d.__parent = c.__parent, c = v(), b && C(c) && (b = this.getParentOrThrow(), Zd(c, b, k)), a;
        }
        isParentRequired() {
          return false;
        }
        createParentElementNode() {
          return be();
        }
        selectPrevious(a, b) {
          G();
          let c = this.getPreviousSibling(), d = this.getParentOrThrow();
          return c === null ? d.select(0, 0) : D(c) ? c.select() : B(c) ? c.select(a, b) : (a = c.getIndexWithinParent() + 1, d.select(a, a));
        }
        selectNext(a, b) {
          G();
          let c = this.getNextSibling(), d = this.getParentOrThrow();
          return c === null ? d.select() : D(c) ? c.select(0, 0) : B(c) ? c.select(a, b) : (a = c.getIndexWithinParent(), d.select(a, a));
        }
        markDirty() {
          this.getWritable();
        }
      }, ce = class extends $d {
        static getType() {
          return "linebreak";
        }
        static clone(a) {
          return new ce(a.__key);
        }
        constructor(a) {
          super(a);
        }
        getTextContent() {
          return `
`;
        }
        createDOM() {
          return document.createElement("br");
        }
        updateDOM() {
          return false;
        }
        static importDOM() {
          return { br: (a) => {
            let b = a.parentElement, c, d;
            return b !== null && ((c = b.firstChild) === a || c.nextSibling === a && c.nodeType === 3 && (c.textContent || "").match(/^( |\t|\r?\n)+$/) !== null) && ((d = b.lastChild) === a || d.previousSibling === a && d.nodeType === 3 && (d.textContent || "").match(/^( |\t|\r?\n)+$/) !== null) ? null : { conversion: de, priority: 0 };
          } };
        }
        static importJSON() {
          return ee();
        }
        exportJSON() {
          return { type: "linebreak", version: 1 };
        }
      };
      function de() {
        return { node: ee() };
      }
      function ee() {
        return zc(new ce());
      }
      function Yb(a) {
        return a instanceof ce;
      }
      function fe(a, b) {
        return b & 16 ? "code" : b & 128 ? "mark" : b & 32 ? "sub" : b & 64 ? "sup" : null;
      }
      function ge(a, b) {
        return b & 1 ? "strong" : b & 2 ? "em" : "span";
      }
      function he(a, b, c, d, e) {
        a = d.classList, d = qc(e, "base"), d !== void 0 && a.add(...d), d = qc(e, "underlineStrikethrough");
        let f = false, g = b & 8 && b & 4;
        var h = c & 8 && c & 4;
        d !== void 0 && (h ? (f = true, g || a.add(...d)) : g && a.remove(...d));
        for (let k in fb)
          h = fb[k], d = qc(e, k), d !== void 0 && (c & h ? !f || k !== "underline" && k !== "strikethrough" ? ((b & h) === 0 || g && k === "underline" || k === "strikethrough") && a.add(...d) : b & h && a.remove(...d) : b & h && a.remove(...d));
      }
      function ie(a, b, c) {
        let d = b.firstChild;
        if (c = c.isComposing(), a += c ? bb : "", d == null)
          b.textContent = a;
        else if (b = d.nodeValue, b !== a)
          if (c || Wa) {
            c = b.length;
            let e = a.length, f = 0, g = 0;
            for (; f < c && f < e && b[f] === a[f]; )
              f++;
            for (; g + f < c && g + f < e && b[c - g - 1] === a[e - g - 1]; )
              g++;
            a = [f, c - f - g, a.slice(f, e - g)];
            let [h, k, n] = a;
            k !== 0 && d.deleteData(h, k), d.insertData(h, n);
          } else
            d.nodeValue = a;
      }
      function je(a, b) {
        return b = document.createElement(b), b.appendChild(a), b;
      }
      var ke = class extends $d {
        static getType() {
          return "text";
        }
        static clone(a) {
          return new ke(a.__text, a.__key);
        }
        constructor(a, b) {
          super(b), this.__text = a, this.__format = 0, this.__style = "", this.__detail = this.__mode = 0;
        }
        getFormat() {
          return this.getLatest().__format;
        }
        getDetail() {
          return this.getLatest().__detail;
        }
        getMode() {
          let a = this.getLatest();
          return kb[a.__mode];
        }
        getStyle() {
          return this.getLatest().__style;
        }
        isToken() {
          return this.getLatest().__mode === 1;
        }
        isComposing() {
          return this.__key === dc();
        }
        isSegmented() {
          return this.getLatest().__mode === 2;
        }
        isDirectionless() {
          return (this.getLatest().__detail & 1) !== 0;
        }
        isUnmergeable() {
          return (this.getLatest().__detail & 2) !== 0;
        }
        hasFormat(a) {
          return a = fb[a], (this.getFormat() & a) !== 0;
        }
        isSimpleText() {
          return this.__type === "text" && this.__mode === 0;
        }
        getTextContent() {
          return this.getLatest().__text;
        }
        getFormatFlags(a, b) {
          let c = this.getLatest().__format;
          return Wb(c, a, b);
        }
        createDOM(a) {
          var b = this.__format, c = fe(this, b);
          let d = ge(this, b), e = document.createElement(c === null ? d : c), f = e;
          return c !== null && (f = document.createElement(d), e.appendChild(f)), c = f, ie(this.__text, c, this), a = a.theme.text, a !== void 0 && he(d, 0, b, c, a), b = this.__style, b !== "" && (e.style.cssText = b), e;
        }
        updateDOM(a, b, c) {
          let d = this.__text;
          var e = a.__format, f = this.__format, g = fe(this, e);
          let h = fe(this, f);
          var k = ge(this, e);
          let n = ge(this, f);
          return (g === null ? k : g) !== (h === null ? n : h) ? true : g === h && k !== n ? (e = b.firstChild, e == null && q(48), a = g = document.createElement(n), ie(d, a, this), c = c.theme.text, c !== void 0 && he(n, 0, f, a, c), b.replaceChild(g, e), false) : (k = b, h !== null && g !== null && (k = b.firstChild, k == null && q(49)), ie(d, k, this), c = c.theme.text, c !== void 0 && e !== f && he(n, e, f, k, c), f = this.__style, a.__style !== f && (b.style.cssText = f), false);
        }
        static importDOM() {
          return { "#text": () => ({ conversion: le, priority: 0 }), b: () => ({ conversion: me, priority: 0 }), code: () => ({ conversion: ne, priority: 0 }), em: () => ({ conversion: ne, priority: 0 }), i: () => ({ conversion: ne, priority: 0 }), s: () => ({ conversion: ne, priority: 0 }), span: () => ({ conversion: oe, priority: 0 }), strong: () => ({ conversion: ne, priority: 0 }), sub: () => ({ conversion: ne, priority: 0 }), sup: () => ({ conversion: ne, priority: 0 }), u: () => ({ conversion: ne, priority: 0 }) };
        }
        static importJSON(a) {
          let b = J(a.text);
          return b.setFormat(a.format), b.setDetail(a.detail), b.setMode(a.mode), b.setStyle(a.style), b;
        }
        exportDOM(a) {
          return { element: a } = super.exportDOM(a), a !== null && (this.hasFormat("bold") && (a = je(a, "b")), this.hasFormat("italic") && (a = je(a, "i")), this.hasFormat("strikethrough") && (a = je(a, "s")), this.hasFormat("underline") && (a = je(a, "u"))), { element: a };
        }
        exportJSON() {
          return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), type: "text", version: 1 };
        }
        selectionTransform() {
        }
        setFormat(a) {
          let b = this.getWritable();
          return b.__format = typeof a == "string" ? fb[a] : a, b;
        }
        setDetail(a) {
          let b = this.getWritable();
          return b.__detail = typeof a == "string" ? gb[a] : a, b;
        }
        setStyle(a) {
          let b = this.getWritable();
          return b.__style = a, b;
        }
        toggleFormat(a) {
          return a = fb[a], this.setFormat(this.getFormat() ^ a);
        }
        toggleDirectionless() {
          let a = this.getWritable();
          return a.__detail ^= 1, a;
        }
        toggleUnmergeable() {
          let a = this.getWritable();
          return a.__detail ^= 2, a;
        }
        setMode(a) {
          if (a = jb[a], this.__mode === a)
            return this;
          let b = this.getWritable();
          return b.__mode = a, b;
        }
        setTextContent(a) {
          if (this.__text === a)
            return this;
          let b = this.getWritable();
          return b.__text = a, b;
        }
        select(a, b) {
          G();
          let c = v();
          var d = this.getTextContent();
          let e = this.__key;
          if (typeof d == "string" ? (d = d.length, a === void 0 && (a = d), b === void 0 && (b = d)) : b = a = 0, C(c))
            d = dc(), d !== c.anchor.key && d !== c.focus.key || H(e), c.setTextNodeRange(this, a, this, b);
          else
            return pe(e, a, e, b, "text", "text");
          return c;
        }
        spliceText(a, b, c, d) {
          let e = this.getWritable(), f = e.__text, g = c.length, h = a;
          0 > h && (h = g + h, 0 > h && (h = 0));
          let k = v();
          return d && C(k) && (a += g, k.setTextNodeRange(e, a, e, a)), b = f.slice(0, h) + c + f.slice(h + b), e.__text = b, e;
        }
        canInsertTextBefore() {
          return true;
        }
        canInsertTextAfter() {
          return true;
        }
        splitText(...a) {
          G();
          var b = this.getLatest(), c = b.getTextContent(), d = b.__key, e = dc(), f = new Set(a);
          a = [];
          for (var g = c.length, h = "", k = 0; k < g; k++)
            h !== "" && f.has(k) && (a.push(h), h = ""), h += c[k];
          if (h !== "" && a.push(h), f = a.length, f === 0)
            return [];
          if (a[0] === c)
            return [b];
          var n = a[0];
          c = b.getParentOrThrow(), k = b.getFormat();
          let m = b.getStyle(), p = b.__detail;
          g = false, b.isSegmented() ? (h = J(n), h.__format = k, h.__style = m, h.__detail = p, g = true) : (h = b.getWritable(), h.__text = n), b = v(), h = [h], n = n.length;
          for (let u = 1; u < f; u++) {
            var l = a[u], r = l.length;
            l = J(l).getWritable(), l.__format = k, l.__style = m, l.__detail = p;
            let x = l.__key;
            if (r = n + r, C(b)) {
              let y = b.anchor, A = b.focus;
              y.key === d && y.type === "text" && y.offset > n && y.offset <= r && (y.key = x, y.offset -= n, b.dirty = true), A.key === d && A.type === "text" && A.offset > n && A.offset <= r && (A.key = x, A.offset -= n, b.dirty = true);
            }
            e === d && H(x), n = r, h.push(l);
          }
          return d = this.getPreviousSibling(), e = this.getNextSibling(), d !== null && cc(d), e !== null && cc(e), d = c.getWritable(), e = this.getIndexWithinParent(), g ? (d.splice(e, 0, h), this.remove()) : d.splice(e, 1, h), C(b) && Zd(b, c, e, f - 1), h;
        }
        mergeWithSibling(a) {
          var b = a === this.getPreviousSibling();
          b || a === this.getNextSibling() || q(50);
          var c = this.__key;
          let d = a.__key, e = this.__text, f = e.length;
          dc() === d && H(c);
          let g = v();
          if (C(g)) {
            let h = g.anchor, k = g.focus;
            h !== null && h.key === d && (qe(h, b, c, a, f), g.dirty = true), k !== null && k.key === d && (qe(k, b, c, a, f), g.dirty = true);
          }
          return c = a.__text, this.setTextContent(b ? c + e : e + c), b = this.getWritable(), a.remove(), b;
        }
        isTextEntity() {
          return false;
        }
      };
      function oe(a) {
        let b = a.style.fontWeight === "700", c = a.style.textDecoration === "line-through", d = a.style.fontStyle === "italic", e = a.style.textDecoration === "underline", f = a.style.verticalAlign;
        return { forChild: (g) => (B(g) && (b && g.toggleFormat("bold"), c && g.toggleFormat("strikethrough"), d && g.toggleFormat("italic"), e && g.toggleFormat("underline"), f === "sub" && g.toggleFormat("subscript"), f === "super" && g.toggleFormat("superscript")), g), node: null };
      }
      function me(a) {
        let b = a.style.fontWeight === "normal";
        return { forChild: (c) => (B(c) && !b && c.toggleFormat("bold"), c), node: null };
      }
      var re = /* @__PURE__ */ new WeakMap();
      function le(a) {
        a.parentElement === null && q(129);
        for (var b = a.textContent || "", c, d = a.parentNode, e = [a]; d !== null && (c = re.get(d)) === void 0 && !(d.nodeName === "PRE" || d.nodeType === 1 && d.style.whiteSpace.startsWith("pre")); )
          e.push(d), d = d.parentNode;
        for (c = c === void 0 ? d : c, d = 0; d < e.length; d++)
          re.set(e[d], c);
        if (c !== null) {
          for (b = b.split(/(\r?\n|\t)/), a = [], e = b.length, c = 0; c < e; c++)
            d = b[c], d === `
` || d === `\r
` ? a.push(ee()) : d === "	" ? a.push(se()) : d !== "" && a.push(J(d));
          return { node: a };
        }
        if (b = b.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), b === "")
          return { node: null };
        if (b[0] === " ") {
          for (e = a, c = true; e !== null && (e = te(e, false)) !== null; )
            if (d = e.textContent || "", 0 < d.length) {
              /[ \t\n]$/.test(d) && (b = b.slice(1)), c = false;
              break;
            }
          c && (b = b.slice(1));
        }
        if (b[b.length - 1] === " ") {
          for (e = true; a !== null && (a = te(a, true)) !== null; )
            if (0 < (a.textContent || "").replace(/^( |\t|\r?\n)+/, "").length) {
              e = false;
              break;
            }
          e && (b = b.slice(0, b.length - 1));
        }
        return b === "" ? { node: null } : { node: J(b) };
      }
      var ue = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/, "i");
      function te(a, b) {
        for (; ; ) {
          for (var c = void 0; (c = b ? a.nextSibling : a.previousSibling) === null; )
            if (a = a.parentElement, a === null)
              return null;
          if (a = c, a.nodeType === 1 && (c = a.style.display, c === "" && a.nodeName.match(ue) === null || c !== "" && !c.startsWith("inline")))
            return null;
          for (; (c = b ? a.firstChild : a.lastChild) !== null; )
            a = c;
          if (a.nodeType === 3)
            return a;
          if (a.nodeName === "BR")
            return null;
        }
      }
      var ve = { code: "code", em: "italic", i: "italic", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
      function ne(a) {
        let b = ve[a.nodeName.toLowerCase()];
        return b === void 0 ? { node: null } : { forChild: (c) => (B(c) && !c.hasFormat(b) && c.toggleFormat(b), c), node: null };
      }
      function J(a = "") {
        return zc(new ke(a));
      }
      function B(a) {
        return a instanceof ke;
      }
      var we = class extends ke {
        static getType() {
          return "tab";
        }
        static clone(a) {
          let b = new we(a.__key);
          return b.__text = a.__text, b.__format = a.__format, b.__style = a.__style, b;
        }
        constructor(a) {
          super("	", a), this.__detail = 2;
        }
        static importDOM() {
          return null;
        }
        static importJSON(a) {
          let b = se();
          return b.setFormat(a.format), b.setStyle(a.style), b;
        }
        exportJSON() {
          return { ...super.exportJSON(), type: "tab", version: 1 };
        }
        setTextContent() {
          q(126);
        }
        setDetail() {
          q(127);
        }
        setMode() {
          q(128);
        }
        canInsertTextBefore() {
          return false;
        }
        canInsertTextAfter() {
          return false;
        }
      };
      function se() {
        return zc(new we());
      }
      var xe = class {
        constructor(a, b, c) {
          this._selection = null, this.key = a, this.offset = b, this.type = c;
        }
        is(a) {
          return this.key === a.key && this.offset === a.offset && this.type === a.type;
        }
        isBefore(a) {
          let b = this.getNode(), c = a.getNode(), d = this.offset;
          if (a = a.offset, D(b)) {
            var e = b.getDescendantByIndex(d);
            b = e ?? b;
          }
          return D(c) && (e = c.getDescendantByIndex(a), c = e ?? c), b === c ? d < a : b.isBefore(c);
        }
        getNode() {
          let a = I(this.key);
          return a === null && q(20), a;
        }
        set(a, b, c) {
          let d = this._selection, e = this.key;
          this.key = a, this.offset = b, this.type = c, ec() || (dc() === e && H(a), d !== null && (d._cachedNodes = null, d.dirty = true));
        }
      };
      function ye(a, b) {
        let c = b.__key, d = a.offset, e = "element";
        if (B(b))
          e = "text", b = b.getTextContentSize(), d > b && (d = b);
        else if (!D(b)) {
          var f = b.getNextSibling();
          B(f) ? (c = f.__key, d = 0, e = "text") : (f = b.getParent()) && (c = f.__key, d = b.getIndexWithinParent() + 1);
        }
        a.set(c, d, e);
      }
      function ae(a, b) {
        if (D(b)) {
          let c = b.getLastDescendant();
          D(c) || B(c) ? ye(a, c) : ye(a, b);
        } else
          ye(a, b);
      }
      function ze(a, b, c, d) {
        let e = a.getNode(), f = e.getChildAtIndex(a.offset), g = J(), h = K(e) ? be().append(g) : g;
        g.setFormat(c), g.setStyle(d), f === null ? e.append(h) : (f.insertBefore(h), b.type === "element" && b.key === a.key && b.offset !== a.offset && b.set(b.key, b.offset + 1, "element")), a.is(b) && b.set(g.__key, 0, "text"), a.set(g.__key, 0, "text");
      }
      function Ae(a, b, c, d) {
        a.key = b, a.offset = c, a.type = d;
      }
      var Ke = class {
        constructor(a) {
          this.dirty = false, this._nodes = a, this._cachedNodes = null;
        }
        is(a) {
          if (!Sd(a))
            return false;
          let b = this._nodes, c = a._nodes;
          return b.size === c.size && Array.from(b).every((d) => c.has(d));
        }
        add(a) {
          this.dirty = true, this._nodes.add(a), this._cachedNodes = null;
        }
        delete(a) {
          this.dirty = true, this._nodes.delete(a), this._cachedNodes = null;
        }
        clear() {
          this.dirty = true, this._nodes.clear(), this._cachedNodes = null;
        }
        has(a) {
          return this._nodes.has(a);
        }
        clone() {
          return new Ke(new Set(this._nodes));
        }
        extract() {
          return this.getNodes();
        }
        insertRawText() {
        }
        insertText() {
        }
        insertNodes(a, b) {
          let c = this.getNodes(), d = c.length;
          var e = c[d - 1];
          if (B(e))
            e = e.select();
          else {
            let f = e.getIndexWithinParent() + 1;
            e = e.getParentOrThrow().select(f, f);
          }
          for (e.insertNodes(a, b), a = 0; a < d; a++)
            c[a].remove();
          return true;
        }
        getNodes() {
          var a = this._cachedNodes;
          if (a !== null)
            return a;
          var b = this._nodes;
          a = [];
          for (let c of b)
            b = I(c), b !== null && a.push(b);
          return ec() || (this._cachedNodes = a), a;
        }
        getTextContent() {
          let a = this.getNodes(), b = "";
          for (let c = 0; c < a.length; c++)
            b += a[c].getTextContent();
          return b;
        }
      };
      function C(a) {
        return a instanceof Le;
      }
      var Me = class {
        constructor(a, b, c) {
          this.gridKey = a, this.anchor = b, this.focus = c, this.dirty = false, this._cachedNodes = null, b._selection = this, c._selection = this;
        }
        is(a) {
          return Ne(a) ? this.gridKey === a.gridKey && this.anchor.is(a.anchor) && this.focus.is(a.focus) : false;
        }
        set(a, b, c) {
          this.dirty = true, this.gridKey = a, this.anchor.key = b, this.focus.key = c, this._cachedNodes = null;
        }
        clone() {
          return new Me(this.gridKey, this.anchor, this.focus);
        }
        isCollapsed() {
          return false;
        }
        isBackward() {
          return this.focus.isBefore(this.anchor);
        }
        getCharacterOffsets() {
          return Oe(this);
        }
        extract() {
          return this.getNodes();
        }
        insertRawText() {
        }
        insertText() {
        }
        insertNodes(a, b) {
          let c = this.focus.getNode();
          return Gb(c.select(0, c.getChildrenSize())).insertNodes(a, b);
        }
        getShape() {
          var a = I(this.anchor.key);
          a === null && q(21);
          var b = a.getIndexWithinParent();
          a = a.getParentOrThrow().getIndexWithinParent();
          var c = I(this.focus.key);
          c === null && q(22);
          var d = c.getIndexWithinParent();
          let e = c.getParentOrThrow().getIndexWithinParent();
          return c = Math.min(b, d), b = Math.max(b, d), d = Math.min(a, e), a = Math.max(a, e), { fromX: Math.min(c, b), fromY: Math.min(d, a), toX: Math.max(c, b), toY: Math.max(d, a) };
        }
        getNodes() {
          function a(x) {
            let { cell: y, startColumn: A, startRow: Y } = x;
            h = Math.min(h, A), k = Math.min(k, Y), n = Math.max(n, A + y.__colSpan - 1), m = Math.max(m, Y + y.__rowSpan - 1);
          }
          var b = this._cachedNodes;
          if (b !== null)
            return b;
          var c = this.anchor.getNode();
          b = this.focus.getNode(), c = Ec(c, Pe);
          var d = Ec(b, Pe);
          Pe(c) || q(103), Pe(d) || q(104), b = c.getParent(), Qe(b) || q(105), b = b.getParent(), Re(b) || q(106);
          let [e, f, g] = Se(b, c, d), h = Math.min(f.startColumn, g.startColumn), k = Math.min(f.startRow, g.startRow), n = Math.max(f.startColumn + f.cell.__colSpan - 1, g.startColumn + g.cell.__colSpan - 1), m = Math.max(f.startRow + f.cell.__rowSpan - 1, g.startRow + g.cell.__rowSpan - 1);
          c = h, d = k;
          for (var p = h, l = k; h < c || k < d || n > p || m > l; ) {
            if (h < c) {
              var r = l - d;
              --c;
              for (var u = 0; u <= r; u++)
                a(e[d + u][c]);
            }
            if (k < d)
              for (r = p - c, --d, u = 0; u <= r; u++)
                a(e[d][c + u]);
            if (n > p)
              for (r = l - d, p += 1, u = 0; u <= r; u++)
                a(e[d + u][p]);
            if (m > l)
              for (r = p - c, l += 1, u = 0; u <= r; u++)
                a(e[l][c + u]);
          }
          for (b = [b], c = null, d = k; d <= m; d++)
            for (p = h; p <= n; p++)
              ({ cell: l } = e[d][p]), r = l.getParent(), Qe(r) || q(107), r !== c && b.push(r), b.push(l, ...Fc(l)), c = r;
          return ec() || (this._cachedNodes = b), b;
        }
        getTextContent() {
          let a = this.getNodes(), b = "";
          for (let c = 0; c < a.length; c++)
            b += a[c].getTextContent();
          return b;
        }
      };
      function Ne(a) {
        return a instanceof Me;
      }
      var Le = class {
        constructor(a, b, c, d) {
          this.anchor = a, this.focus = b, this.dirty = false, this.format = c, this.style = d, this._cachedNodes = null, a._selection = this, b._selection = this;
        }
        is(a) {
          return C(a) ? this.anchor.is(a.anchor) && this.focus.is(a.focus) && this.format === a.format && this.style === a.style : false;
        }
        isBackward() {
          return this.focus.isBefore(this.anchor);
        }
        isCollapsed() {
          return this.anchor.is(this.focus);
        }
        getNodes() {
          var a = this._cachedNodes;
          if (a !== null)
            return a;
          a = this.anchor;
          var b = this.focus, c = a.isBefore(b), d = c ? a : b;
          c = c ? b : a, a = d.getNode(), b = c.getNode();
          let e = d.offset;
          return d = c.offset, D(a) && (c = a.getDescendantByIndex(e), a = c ?? a), D(b) && (c = b.getDescendantByIndex(d), c !== null && c !== a && b.getChildAtIndex(d) === c && (c = c.getPreviousSibling()), b = c ?? b), a = a.is(b) ? D(a) && 0 < a.getChildrenSize() ? [] : [a] : a.getNodesBetween(b), ec() || (this._cachedNodes = a), a;
        }
        setTextNodeRange(a, b, c, d) {
          Ae(this.anchor, a.__key, b, "text"), Ae(this.focus, c.__key, d, "text"), this._cachedNodes = null, this.dirty = true;
        }
        getTextContent() {
          let a = this.getNodes();
          if (a.length === 0)
            return "";
          let b = a[0], c = a[a.length - 1], d = this.anchor, e = this.focus, f = d.isBefore(e), [g, h] = Oe(this), k = "", n = true;
          for (let m = 0; m < a.length; m++) {
            let p = a[m];
            if (D(p) && !p.isInline())
              n || (k += `
`), n = !p.isEmpty();
            else if (n = false, B(p)) {
              let l = p.getTextContent();
              p === b ? p === c ? (d.type !== "element" || e.type !== "element" || e.offset === d.offset) && (l = g < h ? l.slice(g, h) : l.slice(h, g)) : l = f ? l.slice(g) : l.slice(h) : p === c && (l = f ? l.slice(0, h) : l.slice(0, g)), k += l;
            } else
              !z(p) && !Yb(p) || p === c && this.isCollapsed() || (k += p.getTextContent());
          }
          return k;
        }
        applyDOMRange(a) {
          let b = F(), c = b.getEditorState()._selection;
          if (a = Te(a.startContainer, a.startOffset, a.endContainer, a.endOffset, b, c), a !== null) {
            var [d, e] = a;
            Ae(this.anchor, d.key, d.offset, d.type), Ae(this.focus, e.key, e.offset, e.type), this._cachedNodes = null;
          }
        }
        clone() {
          let a = this.anchor, b = this.focus;
          return new Le(new xe(a.key, a.offset, a.type), new xe(b.key, b.offset, b.type), this.format, this.style);
        }
        toggleFormat(a) {
          this.format = Wb(this.format, a, null), this.dirty = true;
        }
        setStyle(a) {
          this.style = a, this.dirty = true;
        }
        hasFormat(a) {
          return (this.format & fb[a]) !== 0;
        }
        insertRawText(a) {
          a = a.split(/(\r?\n|\t)/);
          let b = [], c = a.length;
          for (let d = 0; d < c; d++) {
            let e = a[d];
            e === `
` || e === `\r
` ? b.push(ee()) : e === "	" ? b.push(se()) : b.push(J(e));
          }
          this.insertNodes(b);
        }
        insertText(a) {
          var b = this.anchor, c = this.focus, d = this.isCollapsed() || b.isBefore(c), e = this.format, f = this.style;
          d && b.type === "element" ? ze(b, c, e, f) : d || c.type !== "element" || ze(c, b, e, f);
          var g = this.getNodes(), h = g.length, k = d ? c : b;
          c = (d ? b : c).offset;
          var n = k.offset;
          b = g[0], B(b) || q(26), d = b.getTextContent().length;
          var m = b.getParentOrThrow(), p = g[h - 1];
          if (this.isCollapsed() && c === d && (b.isSegmented() || b.isToken() || !b.canInsertTextAfter() || !m.canInsertTextAfter() && b.getNextSibling() === null)) {
            var l = b.getNextSibling();
            if (B(l) && l.canInsertTextBefore() && !Ub(l) || (l = J(), l.setFormat(e), m.canInsertTextAfter() ? b.insertAfter(l) : m.insertAfter(l)), l.select(0, 0), b = l, a !== "") {
              this.insertText(a);
              return;
            }
          } else if (this.isCollapsed() && c === 0 && (b.isSegmented() || b.isToken() || !b.canInsertTextBefore() || !m.canInsertTextBefore() && b.getPreviousSibling() === null)) {
            if (l = b.getPreviousSibling(), (!B(l) || Ub(l)) && (l = J(), l.setFormat(e), m.canInsertTextBefore() ? b.insertBefore(l) : m.insertBefore(l)), l.select(), b = l, a !== "") {
              this.insertText(a);
              return;
            }
          } else if (b.isSegmented() && c !== d)
            m = J(b.getTextContent()), m.setFormat(e), b.replace(m), b = m;
          else if (!(this.isCollapsed() || a === "" || (l = p.getParent(), m.canInsertTextBefore() && m.canInsertTextAfter() && (!D(l) || l.canInsertTextBefore() && l.canInsertTextAfter())))) {
            this.insertText(""), Ue(this.anchor, this.focus, null), this.insertText(a);
            return;
          }
          if (h === 1)
            if (b.isToken())
              a = J(a), a.select(), b.replace(a);
            else {
              if (g = b.getFormat(), h = b.getStyle(), c === n && (g !== e || h !== f))
                if (b.getTextContent() === "")
                  b.setFormat(e), b.setStyle(f);
                else {
                  g = J(a), g.setFormat(e), g.setStyle(f), g.select(), c === 0 ? b.insertBefore(g, false) : ([h] = b.splitText(c), h.insertAfter(g, false)), g.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= a.length);
                  return;
                }
              b = b.spliceText(c, n - c, a, true), b.getTextContent() === "" ? b.remove() : this.anchor.type === "text" && (b.isComposing() ? this.anchor.offset -= a.length : (this.format = g, this.style = h));
            }
          else {
            if (e = /* @__PURE__ */ new Set([...b.getParentKeys(), ...p.getParentKeys()]), l = D(b) ? b : b.getParentOrThrow(), f = D(p) ? p : p.getParentOrThrow(), m = p, !l.is(f) && f.isInline())
              do
                m = f, f = f.getParentOrThrow();
              while (f.isInline());
            k.type === "text" && (n !== 0 || p.getTextContent() === "") || k.type === "element" && p.getIndexWithinParent() < n ? B(p) && !p.isToken() && n !== p.getTextContentSize() ? (p.isSegmented() && (k = J(p.getTextContent()), p.replace(k), p = k), p = p.spliceText(0, n, ""), e.add(p.__key)) : (k = p.getParentOrThrow(), k.canBeEmpty() || k.getChildrenSize() !== 1 ? p.remove() : k.remove()) : e.add(p.__key), k = f.getChildren(), n = new Set(g), p = l.is(f), l = l.isInline() && b.getNextSibling() === null ? l : b;
            for (let r = k.length - 1; 0 <= r; r--) {
              let u = k[r];
              if (u.is(b) || D(u) && u.isParentOf(b))
                break;
              u.isAttached() && (!n.has(u) || u.is(m) ? p || l.insertAfter(u, false) : u.remove());
            }
            if (!p)
              for (k = f, n = null; k !== null; )
                f = k.getChildren(), p = f.length, (p === 0 || f[p - 1].is(n)) && (e.delete(k.__key), n = k), k = k.getParent();
            for (b.isToken() ? c === d ? b.select() : (a = J(a), a.select(), b.replace(a)) : (b = b.spliceText(c, d - c, a, true), b.getTextContent() === "" ? b.remove() : b.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= a.length)), a = 1; a < h; a++)
              b = g[a], e.has(b.__key) || b.remove();
          }
        }
        removeText() {
          this.insertText("");
        }
        formatText(a) {
          if (this.isCollapsed())
            this.toggleFormat(a), H(null);
          else {
            var b = this.getNodes(), c = [];
            for (var d of b)
              B(d) && c.push(d);
            var e = c.length;
            if (e === 0)
              this.toggleFormat(a), H(null);
            else {
              d = this.anchor;
              var f = this.focus, g = this.isBackward();
              b = g ? f : d, d = g ? d : f;
              var h = 0, k = c[0];
              if (f = b.type === "element" ? 0 : b.offset, b.type === "text" && f === k.getTextContentSize() && (h = 1, k = c[1], f = 0), k != null) {
                g = k.getFormatFlags(a, null);
                var n = e - 1, m = c[n];
                if (e = d.type === "text" ? d.offset : m.getTextContentSize(), k.is(m))
                  f !== e && (f === 0 && e === k.getTextContentSize() ? k.setFormat(g) : (a = k.splitText(f, e), a = f === 0 ? a[0] : a[1], a.setFormat(g), b.type === "text" && b.set(a.__key, 0, "text"), d.type === "text" && d.set(a.__key, e - f, "text")), this.format = g);
                else {
                  f !== 0 && ([, k] = k.splitText(f), f = 0), k.setFormat(g);
                  var p = m.getFormatFlags(a, g);
                  for (0 < e && (e !== m.getTextContentSize() && ([m] = m.splitText(e)), m.setFormat(p)), h += 1; h < n; h++) {
                    let l = c[h];
                    if (!l.isToken()) {
                      let r = l.getFormatFlags(a, p);
                      l.setFormat(r);
                    }
                  }
                  b.type === "text" && b.set(k.__key, f, "text"), d.type === "text" && d.set(m.__key, e, "text"), this.format = g | p;
                }
              }
            }
          }
        }
        insertNodes(a, b) {
          if (!this.isCollapsed()) {
            var c = this.isBackward() ? this.anchor : this.focus, d = c.getNode().getNextSibling();
            if (d = d ? d.getKey() : null, c = (c = c.getNode().getPreviousSibling()) ? c.getKey() : null, this.removeText(), this.isCollapsed() && this.focus.type === "element") {
              if (this.focus.key === d && this.focus.offset === 0) {
                var e = J();
                this.focus.getNode().insertBefore(e);
              } else
                this.focus.key === c && this.focus.offset === this.focus.getNode().getChildrenSize() && (e = J(), this.focus.getNode().insertAfter(e));
              e && (this.focus.set(e.__key, 0, "text"), this.anchor.set(e.__key, 0, "text"));
            }
          }
          e = this.anchor, c = e.offset;
          var f = e.getNode();
          d = f, e.type === "element" && (e = e.getNode(), d = e.getChildAtIndex(c - 1), d = d === null ? e : d), e = [];
          var g = f.getNextSiblings(), h = L(f) ? null : f.getTopLevelElementOrThrow();
          if (B(f))
            if (d = f.getTextContent().length, c === 0 && d !== 0)
              d = f.getPreviousSibling(), d = d !== null ? d : f.getParentOrThrow(), e.push(f);
            else if (c === d)
              d = f;
            else {
              if (f.isToken())
                return false;
              [d, f] = f.splitText(c), e.push(f);
            }
          f = d, e.push(...g), g = a[0];
          var k = false, n = null;
          for (let r = 0; r < a.length; r++) {
            var m = a[r];
            if (L(d) || z(d) || !D(m) || m.isInline())
              k && !D(m) && !z(m) && L(d.getParent()) && q(28);
            else {
              if (m.is(g)) {
                if (D(d) && d.isEmpty() && d.canReplaceWith(m)) {
                  d.replace(m), d = m, k = true;
                  continue;
                }
                if (k = m.getFirstDescendant(), Xb(k)) {
                  for (var p = k.getParentOrThrow(); p.isInline(); )
                    p = p.getParentOrThrow();
                  if (n = p.getChildren(), k = n.length, D(d)) {
                    var l = d.getFirstChild();
                    for (let u = 0; u < k; u++) {
                      let x = n[u];
                      l === null ? d.append(x) : l.insertAfter(x), l = x;
                    }
                  } else {
                    for (l = k - 1; 0 <= l; l--)
                      d.insertAfter(n[l]);
                    d = d.getParentOrThrow();
                  }
                  if (n = n[k - 1], p.remove(), k = true, p.is(m))
                    continue;
                }
              }
              B(d) && (h === null && q(27), d = h);
            }
            k = false, D(d) && !d.isInline() ? (n = m, z(m) && !m.isInline() ? d = a.length === 1 && d.canBeEmpty() && d.isEmpty() ? d.insertBefore(m, false) : d.insertAfter(m, false) : D(m) ? (m.canBeEmpty() || !m.isEmpty()) && (K(d) ? (p = d.getChildAtIndex(c), p !== null ? p.insertBefore(m) : d.append(m), d = m) : m.isInline() ? (d.append(m), d = m) : d = d.insertAfter(m, false)) : (p = d.getFirstChild(), p !== null ? p.insertBefore(m) : d.append(m), d = m)) : !D(m) || D(m) && m.isInline() || z(d) && !d.isInline() ? (n = m, C(this) && z(m) && (D(d) || B(d)) && !m.isInline() ? (B(d) ? (p = d.getParentOrThrow(), [d] = d.splitText(c), d = d.getIndexWithinParent() + 1) : (p = d, d = c), [, d] = Dc(p, d), d = d.insertBefore(m)) : d = d.insertAfter(m, false)) : (m = d.getParentOrThrow(), Yb(d) && d.remove(), d = m, r--);
          }
          if (b && (B(f) ? f.select() : (a = d.getPreviousSibling(), B(a) ? a.select() : (a = d.getIndexWithinParent(), d.getParentOrThrow().select(a, a)))), D(d)) {
            if (a = B(n) ? n : D(n) && n.isInline() ? n.getLastDescendant() : d.getLastDescendant(), b || (a === null ? d.select() : B(a) ? a.getTextContent() === "" ? a.selectPrevious() : a.select() : a.selectNext()), e.length !== 0)
              for (b = d, a = e.length - 1; 0 <= a; a--)
                c = e[a], h = c.getParentOrThrow(), !D(d) || Ve(c) || z(c) && (!c.isInline() || c.isIsolated()) ? D(d) || Ve(c) ? D(c) && !c.canInsertAfter(d) ? (f = h.constructor.clone(h), D(f) || q(29), f.append(c), d.insertAfter(f)) : d.insertAfter(c) : (d.insertBefore(c), d = c) : (b === d ? d.append(c) : d.insertBefore(c), d = c), h.isEmpty() && !h.canBeEmpty() && h.remove();
          } else
            b || (B(d) ? d.select() : (b = d.getParentOrThrow(), a = d.getIndexWithinParent() + 1, b.select(a, a)));
          return true;
        }
        insertParagraph() {
          this.isCollapsed() || this.removeText();
          var a = this.anchor, b = a.offset, c = [];
          if (a.type === "text") {
            var d = a.getNode(), e = d.getNextSiblings().reverse(), f = d.getParentOrThrow(), g = f.isInline(), h = g ? f.getTextContentSize() : d.getTextContentSize();
            b === 0 ? e.push(d) : (g && (c = f.getNextSiblings()), b === h || g && b === d.getTextContentSize() || ([, d] = d.splitText(b), e.push(d)));
          } else {
            if (f = a.getNode(), L(f)) {
              e = be(), c = f.getChildAtIndex(b), e.select(), c !== null ? c.insertBefore(e, false) : f.append(e);
              return;
            }
            e = f.getChildren().slice(b).reverse();
          }
          if (d = e.length, b === 0 && 0 < d && f.isInline()) {
            if (c = f.getParentOrThrow(), e = c.insertNewAfter(this, false), D(e))
              for (c = c.getChildren(), f = 0; f < c.length; f++)
                e.append(c[f]);
          } else if (g = f.insertNewAfter(this, false), g === null)
            this.insertLineBreak();
          else if (D(g))
            if (h = f.getFirstChild(), b === 0 && (f.is(a.getNode()) || h && h.is(a.getNode())) && 0 < d)
              f.insertBefore(g);
            else {
              if (f = null, b = c.length, a = g.getParentOrThrow(), 0 < b)
                for (h = 0; h < b; h++)
                  a.append(c[h]);
              if (d !== 0)
                for (c = 0; c < d; c++)
                  b = e[c], f === null ? g.append(b) : f.insertBefore(b), f = b;
              g.canBeEmpty() || g.getChildrenSize() !== 0 ? g.selectStart() : (g.selectPrevious(), g.remove());
            }
        }
        insertLineBreak(a) {
          let b = ee();
          var c = this.anchor;
          c.type === "element" && (c = c.getNode(), K(c) && this.insertParagraph()), a ? this.insertNodes([b], true) : this.insertNodes([b]) && b.selectNext(0, 0);
        }
        getCharacterOffsets() {
          return Oe(this);
        }
        extract() {
          var a = this.getNodes(), b = a.length, c = b - 1, d = this.anchor;
          let e = this.focus;
          var f = a[0];
          let g = a[c], [h, k] = Oe(this);
          return b === 0 ? [] : b === 1 ? B(f) && !this.isCollapsed() ? (a = h > k ? k : h, c = f.splitText(a, h > k ? h : k), a = a === 0 ? c[0] : c[1], a != null ? [a] : []) : [f] : (b = d.isBefore(e), B(f) && (d = b ? h : k, d === f.getTextContentSize() ? a.shift() : d !== 0 && ([, f] = f.splitText(d), a[0] = f)), B(g) && (f = g.getTextContent().length, b = b ? k : h, b === 0 ? a.pop() : b !== f && ([g] = g.splitText(b), a[c] = g)), a);
        }
        modify(a, b, c) {
          var d = this.focus, e = this.anchor, f = a === "move", g = tc(d, b);
          if (z(g) && !g.isIsolated())
            f && g.isKeyboardSelectable() ? (b = We(), b.add(g.__key), yb(b)) : (a = b ? g.getPreviousSibling() : g.getNextSibling(), B(a) ? (g = a.__key, b = b ? a.getTextContent().length : 0, d.set(g, b, "text"), f && e.set(g, b, "text")) : (c = g.getParentOrThrow(), D(a) ? (c = a.__key, g = b ? a.getChildrenSize() : 0) : (g = g.getIndexWithinParent(), c = c.__key, b || g++), d.set(c, g, "element"), f && e.set(c, g, "element")));
          else if (e = F(), d = vb(e._window)) {
            var h = e._blockCursorElement, k = e._rootElement;
            if (k === null || h === null || !D(g) || g.isInline() || g.canBeEmpty() || Cc(h, e, k), d.modify(a, b ? "backward" : "forward", c), 0 < d.rangeCount && (g = d.getRangeAt(0), e = this.anchor.getNode(), e = K(e) ? e : xc(e), this.applyDOMRange(g), this.dirty = true, !f)) {
              for (f = this.getNodes(), a = [], c = false, h = 0; h < f.length; h++)
                k = f[h], wc(k, e) ? a.push(k) : c = true;
              c && 0 < a.length && (b ? (b = a[0], D(b) ? b.selectStart() : b.getParentOrThrow().selectStart()) : (b = a[a.length - 1], D(b) ? b.selectEnd() : b.getParentOrThrow().selectEnd())), (d.anchorNode !== g.startContainer || d.anchorOffset !== g.startOffset) && (b = this.focus, f = this.anchor, d = f.key, g = f.offset, e = f.type, Ae(f, b.key, b.offset, b.type), Ae(b, d, g, e), this._cachedNodes = null);
            }
          }
        }
        deleteCharacter(a) {
          let b = this.isCollapsed();
          if (this.isCollapsed()) {
            var c = this.anchor, d = this.focus, e = c.getNode();
            if (!a && (c.type === "element" && D(e) && c.offset === e.getChildrenSize() || c.type === "text" && c.offset === e.getTextContentSize())) {
              var f = e.getParent();
              if (f = e.getNextSibling() || (f === null ? null : f.getNextSibling()), D(f) && f.isShadowRoot())
                return;
            }
            if (f = tc(d, a), z(f) && !f.isIsolated()) {
              f.isKeyboardSelectable() && D(e) && e.getChildrenSize() === 0 ? (e.remove(), a = We(), a.add(f.__key), yb(a)) : (f.remove(), F().dispatchCommand(aa, void 0));
              return;
            }
            if (!a && D(f) && D(e) && e.isEmpty()) {
              e.remove(), f.selectStart();
              return;
            }
            if (this.modify("extend", a, "character"), this.isCollapsed()) {
              if (a && c.offset === 0 && (c.type === "element" ? c.getNode() : c.getNode().getParentOrThrow()).collapseAtStart(this))
                return;
            } else {
              if (f = d.type === "text" ? d.getNode() : null, e = c.type === "text" ? c.getNode() : null, f !== null && f.isSegmented()) {
                if (c = d.offset, d = f.getTextContentSize(), f.is(e) || a && c !== d || !a && c !== 0) {
                  Xe(f, a, c);
                  return;
                }
              } else if (e !== null && e.isSegmented() && (c = c.offset, d = e.getTextContentSize(), e.is(f) || a && c !== 0 || !a && c !== d)) {
                Xe(e, a, c);
                return;
              }
              if (e = this.anchor, f = this.focus, c = e.getNode(), d = f.getNode(), c === d && e.type === "text" && f.type === "text") {
                var g = e.offset, h = f.offset;
                let k = g < h;
                d = k ? g : h, h = k ? h : g, g = h - 1, d !== g && (c = c.getTextContent().slice(d, h), kc(c) || (a ? f.offset = g : e.offset = g));
              }
            }
          }
          this.removeText(), a && !b && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0 && (a = this.anchor.getNode(), a.isEmpty() && K(a.getParent()) && a.getIndexWithinParent() === 0 && a.collapseAtStart(this));
        }
        deleteLine(a) {
          this.isCollapsed() && (this.anchor.type === "text" && this.modify("extend", a, "lineboundary"), (a ? this.focus : this.anchor).offset === 0 && this.modify("extend", a, "character")), this.removeText();
        }
        deleteWord(a) {
          this.isCollapsed() && this.modify("extend", a, "word"), this.removeText();
        }
      };
      function Sd(a) {
        return a instanceof Ke;
      }
      function Ye(a) {
        let b = a.offset;
        return a.type === "text" ? b : (a = a.getNode(), b === a.getChildrenSize() ? a.getTextContent().length : 0);
      }
      function Oe(a) {
        let b = a.anchor;
        return a = a.focus, b.type === "element" && a.type === "element" && b.key === a.key && b.offset === a.offset ? [0, 0] : [Ye(b), Ye(a)];
      }
      function Xe(a, b, c) {
        let d = a.getTextContent().split(/(?=\s)/g), e = d.length, f = 0, g = 0;
        for (let h = 0; h < e; h++) {
          let k = d[h], n = h === e - 1;
          if (g = f, f += k.length, b && f === c || f > c || n) {
            d.splice(h, 1), n && (g = void 0);
            break;
          }
        }
        b = d.join("").trim(), b === "" ? a.remove() : (a.setTextContent(b), a.select(g, g));
      }
      function Ze(a, b, c, d) {
        var e = b;
        if (a.nodeType === 1) {
          let h = false;
          var f = a.childNodes, g = f.length;
          e === g && (h = true, e = g - 1);
          let k = f[e];
          if (g = false, k === d._blockCursorElement ? (k = f[e + 1], g = true) : d._blockCursorElement !== null && e--, d = jc(k), B(d))
            e = h ? d.getTextContentSize() : 0;
          else {
            if (f = jc(a), f === null)
              return null;
            if (D(f) ? (a = f.getChildAtIndex(e), (b = D(a)) && (b = a.getParent(), b = c === null || b === null || !b.canBeEmpty() || b !== c.getNode()), b && (c = h ? a.getLastDescendant() : a.getFirstDescendant(), c === null ? (f = a, e = 0) : (a = c, f = D(a) ? a : a.getParentOrThrow())), B(a) ? (d = a, f = null, e = h ? a.getTextContentSize() : 0) : a !== f && h && !g && e++) : (e = f.getIndexWithinParent(), e = b === 0 && z(f) && jc(a) === f ? e : e + 1, f = f.getParentOrThrow()), D(f))
              return new xe(f.__key, e, "element");
          }
        } else
          d = jc(a);
        return B(d) ? new xe(d.__key, e, "text") : null;
      }
      function $e(a, b, c) {
        var d = a.offset, e = a.getNode();
        d === 0 ? (d = e.getPreviousSibling(), e = e.getParent(), b ? (c || !b) && d === null && D(e) && e.isInline() && (b = e.getPreviousSibling(), B(b) && (a.key = b.__key, a.offset = b.getTextContent().length)) : D(d) && !c && d.isInline() ? (a.key = d.__key, a.offset = d.getChildrenSize(), a.type = "element") : B(d) && (a.key = d.__key, a.offset = d.getTextContent().length)) : d === e.getTextContent().length && (d = e.getNextSibling(), e = e.getParent(), b && D(d) && d.isInline() ? (a.key = d.__key, a.offset = 0, a.type = "element") : (c || b) && d === null && D(e) && e.isInline() && !e.canInsertTextAfter() && (b = e.getNextSibling(), B(b) && (a.key = b.__key, a.offset = 0)));
      }
      function Ue(a, b, c) {
        if (a.type === "text" && b.type === "text") {
          var d = a.isBefore(b);
          let e = a.is(b);
          $e(a, d, e), $e(b, !d, e), e && (b.key = a.key, b.offset = a.offset, b.type = a.type), d = F(), d.isComposing() && d._compositionKey !== a.key && C(c) && (d = c.anchor, c = c.focus, Ae(a, d.key, d.offset, d.type), Ae(b, c.key, c.offset, c.type));
        }
      }
      function Te(a, b, c, d, e, f) {
        return a === null || c === null || !Lb(e, a, c) || (b = Ze(a, b, C(f) ? f.anchor : null, e), b === null) || (d = Ze(c, d, C(f) ? f.focus : null, e), d === null || b.type === "element" && d.type === "element" && (a = jc(a), c = jc(c), z(a) && z(c))) ? null : (Ue(b, d, f), [b, d]);
      }
      function Ve(a) {
        return D(a) && !a.isInline();
      }
      function pe(a, b, c, d, e, f) {
        let g = ac();
        return a = new Le(new xe(a, b, e), new xe(c, d, f), 0, ""), a.dirty = true, g._selection = a;
      }
      function We() {
        return new Ke(/* @__PURE__ */ new Set());
      }
      function af(a) {
        let b = a.getEditorState()._selection, c = vb(a._window);
        return Sd(b) || Ne(b) ? b.clone() : Od(b, c, a);
      }
      function Od(a, b, c) {
        var d = c._window;
        if (d === null)
          return null;
        var e = d.event, f = e ? e.type : void 0;
        d = f === "selectionchange", e = !ob && (d || f === "beforeinput" || f === "compositionstart" || f === "compositionend" || f === "click" && e && e.detail === 3 || f === "drop" || f === void 0);
        let g;
        if (!C(a) || e) {
          if (b === null)
            return null;
          if (e = b.anchorNode, f = b.focusNode, g = b.anchorOffset, b = b.focusOffset, d && C(a) && !Lb(c, e, f))
            return a.clone();
        } else
          return a.clone();
        if (c = Te(e, g, f, b, c, a), c === null)
          return null;
        let [h, k] = c;
        return new Le(h, k, C(a) ? a.format : 0, C(a) ? a.style : "");
      }
      function v() {
        return ac()._selection;
      }
      function oc() {
        return F()._editorState._selection;
      }
      function Zd(a, b, c, d = 1) {
        var e = a.anchor, f = a.focus, g = e.getNode(), h = f.getNode();
        if (b.is(g) || b.is(h)) {
          if (g = b.__key, a.isCollapsed())
            b = e.offset, (c <= b && 0 < d || c < b && 0 > d) && (c = Math.max(0, b + d), e.set(g, c, "element"), f.set(g, c, "element"), bf(a));
          else {
            let n = a.isBackward();
            h = n ? f : e;
            var k = h.getNode();
            e = n ? e : f, f = e.getNode(), b.is(k) && (k = h.offset, (c <= k && 0 < d || c < k && 0 > d) && h.set(g, Math.max(0, k + d), "element")), b.is(f) && (b = e.offset, (c <= b && 0 < d || c < b && 0 > d) && e.set(g, Math.max(0, b + d), "element"));
          }
          bf(a);
        }
      }
      function bf(a) {
        var b = a.anchor, c = b.offset;
        let d = a.focus;
        var e = d.offset, f = b.getNode(), g = d.getNode();
        if (a.isCollapsed())
          D(f) && (g = f.getChildrenSize(), g = (e = c >= g) ? f.getChildAtIndex(g - 1) : f.getChildAtIndex(c), B(g) && (c = 0, e && (c = g.getTextContentSize()), b.set(g.__key, c, "text"), d.set(g.__key, c, "text")));
        else {
          if (D(f)) {
            let h = f.getChildrenSize();
            c = (a = c >= h) ? f.getChildAtIndex(h - 1) : f.getChildAtIndex(c), B(c) && (f = 0, a && (f = c.getTextContentSize()), b.set(c.__key, f, "text"));
          }
          D(g) && (c = g.getChildrenSize(), e = (b = e >= c) ? g.getChildAtIndex(c - 1) : g.getChildAtIndex(e), B(e) && (g = 0, b && (g = e.getTextContentSize()), d.set(e.__key, g, "text")));
        }
      }
      function cf(a, b) {
        if (b = b.getEditorState()._selection, a = a._selection, C(a)) {
          var c = a.anchor;
          let d = a.focus, e;
          c.type === "text" && (e = c.getNode(), e.selectionTransform(b, a)), d.type === "text" && (c = d.getNode(), e !== c && c.selectionTransform(b, a));
        }
      }
      function Yd(a, b, c, d, e) {
        let f = null, g = 0, h = null;
        d !== null ? (f = d.__key, B(d) ? (g = d.getTextContentSize(), h = "text") : D(d) && (g = d.getChildrenSize(), h = "element")) : e !== null && (f = e.__key, B(e) ? h = "text" : D(e) && (h = "element")), f !== null && h !== null ? a.set(f, g, h) : (g = b.getIndexWithinParent(), g === -1 && (g = c.getChildrenSize()), a.set(c.__key, g, "element"));
      }
      function qe(a, b, c, d, e) {
        a.type === "text" ? (a.key = c, b || (a.offset += e)) : a.offset > d.getIndexWithinParent() && --a.offset;
      }
      function Se(a, b, c) {
        let d = [], e = null, f = null;
        a = a.getChildren();
        for (let m = 0; m < a.length; m++) {
          var g = a[m];
          Qe(g) || q(108);
          var h = g.getChildren();
          g = 0;
          for (let p of h) {
            for (Pe(p) || q(109); d[m] !== void 0 && d[m][g] !== void 0; )
              g++;
            h = m;
            var k = g, n = p;
            let l = { cell: n, startColumn: k, startRow: h }, r = n.__rowSpan, u = n.__colSpan;
            for (let x = 0; x < r; x++) {
              d[h + x] === void 0 && (d[h + x] = []);
              for (let y = 0; y < u; y++)
                d[h + x][k + y] = l;
            }
            b.is(n) && (e = l), c.is(n) && (f = l), g += p.__colSpan;
          }
        }
        return e === null && q(110), f === null && q(111), [d, e, f];
      }
      var S = null, T = null, Z = false, df = false, $b = 0, ef = { characterData: true, childList: true, subtree: true };
      function ec() {
        return Z || S !== null && S._readOnly;
      }
      function G() {
        Z && q(13);
      }
      function ac() {
        return S === null && q(15), S;
      }
      function F() {
        return T === null && q(16), T;
      }
      function ff(a, b, c) {
        var d = b.__type;
        let e = a._nodes.get(d);
        for (e === void 0 && q(30, d), a = c.get(d), a === void 0 && (a = Array.from(e.transforms), c.set(d, a)), c = a.length, d = 0; d < c && (a[d](b), b.isAttached()); d++)
          ;
      }
      function gf(a, b) {
        b = b._dirtyLeaves, a = a._nodeMap;
        for (let c of b)
          b = a.get(c), B(b) && b.isAttached() && b.isSimpleText() && !b.isUnmergeable() && Fb(b);
      }
      function hf(a, b) {
        let c = b._dirtyLeaves, d = b._dirtyElements;
        a = a._nodeMap;
        let e = dc(), f = /* @__PURE__ */ new Map();
        var g = c;
        let h = g.size;
        for (var k = d, n = k.size; 0 < h || 0 < n; ) {
          if (0 < h) {
            b._dirtyLeaves = /* @__PURE__ */ new Set();
            for (let m of g)
              g = a.get(m), B(g) && g.isAttached() && g.isSimpleText() && !g.isUnmergeable() && Fb(g), g !== void 0 && g !== void 0 && g.__key !== e && g.isAttached() && ff(b, g, f), c.add(m);
            if (g = b._dirtyLeaves, h = g.size, 0 < h) {
              $b++;
              continue;
            }
          }
          b._dirtyLeaves = /* @__PURE__ */ new Set(), b._dirtyElements = /* @__PURE__ */ new Map();
          for (let m of k)
            k = m[0], n = m[1], (k === "root" || n) && (g = a.get(k), g !== void 0 && g !== void 0 && g.__key !== e && g.isAttached() && ff(b, g, f), d.set(k, n));
          g = b._dirtyLeaves, h = g.size, k = b._dirtyElements, n = k.size, $b++;
        }
        b._dirtyLeaves = c, b._dirtyElements = d;
      }
      function jf(a, b) {
        var c = a.type, d = b.get(c);
        if (d === void 0 && q(17, c), c = d.klass, a.type !== c.getType() && q(18, c.name), c = c.importJSON(a), a = a.children, D(c) && Array.isArray(a))
          for (d = 0; d < a.length; d++) {
            let e = jf(a[d], b);
            c.append(e);
          }
        return c;
      }
      function kf(a, b) {
        let c = S, d = Z, e = T;
        S = a, Z = true, T = null;
        try {
          return b();
        } finally {
          S = c, Z = d, T = e;
        }
      }
      function lf(a, b) {
        let c = a._pendingEditorState, d = a._rootElement, e = a._headless || d === null;
        if (c !== null) {
          var f = a._editorState, g = f._selection, h = c._selection, k = a._dirtyType !== 0, n = S, m = Z, p = T, l = a._updating, r = a._observer, u = null;
          if (a._pendingEditorState = null, a._editorState = c, !e && k && r !== null) {
            T = a, S = c, Z = false, a._updating = true;
            try {
              let E = a._dirtyType, P = a._dirtyElements, Q = a._dirtyLeaves;
              r.disconnect();
              var x = E, y = P, A = Q;
              N = Ic = M = "", Lc = x === 2, Oc = null, O = a, Jc = a._config, Kc = a._nodes, Nc = O._listeners.mutation, Pc = y, Qc = A, Rc = f._nodeMap, Sc = c._nodeMap, Mc = c._readOnly, bd = new Map(a._keyToDOMMap);
              let ia = /* @__PURE__ */ new Map();
              cd = ia, qd("root", null), cd = bd = Jc = Sc = Rc = Qc = Pc = Kc = O = void 0, u = ia;
            } catch (E) {
              if (E instanceof Error && a._onError(E), df)
                throw E;
              mf(a, null, d, c), Bb(a), a._dirtyType = 2, df = true, lf(a, f), df = false;
              return;
            } finally {
              r.observe(d, ef), a._updating = l, S = n, Z = m, T = p;
            }
          }
          c._readOnly || (c._readOnly = true);
          var Y = a._dirtyLeaves, ba = a._dirtyElements, Va = a._normalizedNodes, la = a._updateTags, Tc = a._deferred;
          k && (a._dirtyType = 0, a._cloneNotNeeded.clear(), a._dirtyLeaves = /* @__PURE__ */ new Set(), a._dirtyElements = /* @__PURE__ */ new Map(), a._normalizedNodes = /* @__PURE__ */ new Set(), a._updateTags = /* @__PURE__ */ new Set());
          var Be = a._decorators, Ob = a._pendingDecorators || Be, Bf = c._nodeMap, Uc;
          for (Uc in Ob)
            Bf.has(Uc) || (Ob === Be && (Ob = fc(a)), delete Ob[Uc]);
          var ja = e ? null : vb(a._window);
          if (a._editable && ja !== null && (k || h === null || h.dirty)) {
            T = a, S = c;
            try {
              if (r !== null && r.disconnect(), k || h === null || h.dirty) {
                let E = a._blockCursorElement;
                E !== null && Cc(E, a, d);
                a: {
                  let P = ja.anchorNode, Q = ja.focusNode, ia = ja.anchorOffset, lb = ja.focusOffset, V = document.activeElement;
                  if (!(la.has("collaboration") && V !== d || V !== null && Kb(V)))
                    if (C(h)) {
                      var mb = h.anchor, Vc = h.focus, Ce = mb.key, Cf = Vc.key, De = vc(a, Ce), Ee = vc(a, Cf), Pb = mb.offset, Fe = Vc.offset, Wc = h.format, Xc = h.style, Ge = h.isCollapsed(), nb = De, Qb = Ee, Yc = false;
                      if (mb.type === "text") {
                        nb = Vb(De);
                        let W = mb.getNode();
                        Yc = W.getFormat() !== Wc || W.getStyle() !== Xc;
                      } else
                        C(g) && g.anchor.type === "text" && (Yc = true);
                      if (Vc.type === "text" && (Qb = Vb(Ee)), nb !== null && Qb !== null) {
                        if (Ge && (g === null || Yc || C(g) && (g.format !== Wc || g.style !== Xc))) {
                          var Df = performance.now();
                          Kd = [Wc, Xc, Pb, Ce, Df];
                        }
                        if (ia === Pb && lb === Fe && P === nb && Q === Qb && (ja.type !== "Range" || !Ge) && (V !== null && d.contains(V) || d.focus({ preventScroll: true }), mb.type !== "element"))
                          break a;
                        try {
                          ja.setBaseAndExtent(nb, Pb, Qb, Fe);
                        } catch {
                        }
                        if (!la.has("skip-scroll-into-view") && h.isCollapsed() && d !== null && d === document.activeElement) {
                          let W = h instanceof Le && h.anchor.type === "element" ? nb.childNodes[Pb] || null : 0 < ja.rangeCount ? ja.getRangeAt(0) : null;
                          if (W !== null) {
                            let X;
                            if (W instanceof Text) {
                              let U = document.createRange();
                              U.selectNode(W), X = U.getBoundingClientRect();
                            } else
                              X = W.getBoundingClientRect();
                            let wa = d.ownerDocument, Da = wa.defaultView;
                            if (Da !== null)
                              for (var { top: Zc, bottom: $c } = X, Rb, Sb, oa = d; oa !== null; ) {
                                let U = oa === wa.body;
                                if (U)
                                  Rb = 0, Sb = Cb(a).innerHeight;
                                else {
                                  let Tb = oa.getBoundingClientRect();
                                  Rb = Tb.top, Sb = Tb.bottom;
                                }
                                let Ea = 0;
                                if (Zc < Rb ? Ea = -(Rb - Zc) : $c > Sb && (Ea = $c - Sb), Ea !== 0)
                                  if (U)
                                    Da.scrollBy(0, Ea);
                                  else {
                                    let Tb = oa.scrollTop;
                                    oa.scrollTop += Ea;
                                    let He = oa.scrollTop - Tb;
                                    Zc -= He, $c -= He;
                                  }
                                if (U)
                                  break;
                                oa = Nb(oa);
                              }
                          }
                        }
                        Gd = true;
                      }
                    } else
                      g !== null && Lb(a, P, Q) && ja.removeAllRanges();
                }
              }
              a: {
                let E = a._blockCursorElement;
                if (C(h) && h.isCollapsed() && h.anchor.type === "element" && d.contains(document.activeElement)) {
                  let P = h.anchor, Q = P.getNode(), ia = P.offset, lb = Q.getChildrenSize(), V = false, W = null;
                  if (ia === lb) {
                    let X = Q.getChildAtIndex(ia - 1);
                    Bc(X) && (V = true);
                  } else {
                    let X = Q.getChildAtIndex(ia);
                    if (Bc(X)) {
                      let wa = X.getPreviousSibling();
                      (wa === null || Bc(wa)) && (V = true, W = a.getElementByKey(X.__key));
                    }
                  }
                  if (V) {
                    let X = a.getElementByKey(Q.__key);
                    if (E === null) {
                      let wa = a._config.theme, Da = document.createElement("div");
                      Da.contentEditable = "false", Da.setAttribute("data-lexical-cursor", "true");
                      let U = wa.blockCursor;
                      if (U !== void 0) {
                        if (typeof U == "string") {
                          let Ea = U.split(" ");
                          U = wa.blockCursor = Ea;
                        }
                        U !== void 0 && Da.classList.add(...U);
                      }
                      a._blockCursorElement = E = Da;
                    }
                    d.style.caretColor = "transparent", W === null ? X.appendChild(E) : X.insertBefore(E, W);
                    break a;
                  }
                }
                E !== null && Cc(E, a, d);
              }
              r !== null && r.observe(d, ef);
            } finally {
              T = p, S = n;
            }
          }
          if (u !== null) {
            var Ef = u;
            let E = Array.from(a._listeners.mutation), P = E.length;
            for (let Q = 0; Q < P; Q++) {
              let [ia, lb] = E[Q], V = Ef.get(lb);
              V !== void 0 && ia(V, { dirtyLeaves: Y, prevEditorState: f, updateTags: la });
            }
          }
          C(h) || h === null || g !== null && g.is(h) || a.dispatchCommand(aa, void 0);
          var ad = a._pendingDecorators;
          ad !== null && (a._decorators = ad, a._pendingDecorators = null, nf("decorator", a, true, ad));
          var Ff = gc(b || f), Ie = gc(c);
          if (Ff !== Ie && nf("textcontent", a, true, Ie), nf("update", a, true, { dirtyElements: ba, dirtyLeaves: Y, editorState: c, normalizedNodes: Va, prevEditorState: b || f, tags: la }), a._deferred = [], Tc.length !== 0) {
            let E = a._updating;
            a._updating = true;
            try {
              for (let P = 0; P < Tc.length; P++)
                Tc[P]();
            } finally {
              a._updating = E;
            }
          }
          var Je = a._updates;
          if (Je.length !== 0) {
            let E = Je.shift();
            if (E) {
              let [P, Q] = E;
              of(a, P, Q);
            }
          }
        }
      }
      function nf(a, b, c, ...d) {
        let e = b._updating;
        b._updating = c;
        try {
          let f = Array.from(b._listeners[a]);
          for (a = 0; a < f.length; a++)
            f[a].apply(null, d);
        } finally {
          b._updating = e;
        }
      }
      function R(a, b, c) {
        if (a._updating === false || T !== a) {
          let f = false;
          return a.update(() => {
            f = R(a, b, c);
          }), f;
        }
        let d = lc(a);
        for (let f = 4; 0 <= f; f--)
          for (let g = 0; g < d.length; g++) {
            var e = d[g]._commands.get(b);
            if (e !== void 0 && (e = e[f], e !== void 0)) {
              e = Array.from(e);
              let h = e.length;
              for (let k = 0; k < h; k++)
                if (e[k](c, a) === true)
                  return true;
            }
          }
        return false;
      }
      function pf(a, b) {
        let c = a._updates;
        for (b = b || false; c.length !== 0; ) {
          var d = c.shift();
          if (d) {
            let [e, f] = d, g;
            f !== void 0 && (d = f.onUpdate, g = f.tag, f.skipTransforms && (b = true), d && a._deferred.push(d), g && a._updateTags.add(g)), e();
          }
        }
        return b;
      }
      function of(a, b, c) {
        let d = a._updateTags;
        var e, f = e = false;
        if (c !== void 0) {
          var g = c.onUpdate;
          e = c.tag, e != null && d.add(e), e = c.skipTransforms || false, f = c.discrete || false;
        }
        g && a._deferred.push(g), c = a._editorState, g = a._pendingEditorState;
        let h = false;
        (g === null || g._readOnly) && (g = a._pendingEditorState = new qf(new Map((g || c)._nodeMap)), h = true), g._flushSync = f, f = S;
        let k = Z, n = T, m = a._updating;
        S = g, Z = false, a._updating = true, T = a;
        try {
          h && (a._headless ? c._selection != null && (g._selection = c._selection.clone()) : g._selection = af(a));
          let p = a._compositionKey;
          b(), e = pf(a, e), cf(g, a), a._dirtyType !== 0 && (e ? gf(g, a) : hf(g, a), pf(a), Hc(c, g, a._dirtyLeaves, a._dirtyElements)), p !== a._compositionKey && (g._flushSync = true);
          let l = g._selection;
          if (C(l)) {
            let r = g._nodeMap, u = l.focus.key;
            r.get(l.anchor.key) !== void 0 && r.get(u) !== void 0 || q(19);
          } else
            Sd(l) && l._nodes.size === 0 && (g._selection = null);
        } catch (p) {
          p instanceof Error && a._onError(p), a._pendingEditorState = c, a._dirtyType = 2, a._cloneNotNeeded.clear(), a._dirtyLeaves = /* @__PURE__ */ new Set(), a._dirtyElements.clear(), lf(a);
          return;
        } finally {
          S = f, Z = k, T = n, a._updating = m, $b = 0;
        }
        a._dirtyType !== 0 || rf(g, a) ? g._flushSync ? (g._flushSync = false, lf(a)) : h && Jb(() => {
          lf(a);
        }) : (g._flushSync = false, h && (d.clear(), a._deferred = [], a._pendingEditorState = null));
      }
      function w(a, b, c) {
        a._updating ? a._updates.push([b, c]) : of(a, b, c);
      }
      var sf = class extends $d {
        constructor(a) {
          super(a);
        }
        decorate() {
          q(47);
        }
        isIsolated() {
          return false;
        }
        isInline() {
          return true;
        }
        isKeyboardSelectable() {
          return true;
        }
      };
      function z(a) {
        return a instanceof sf;
      }
      var tf = class extends $d {
        constructor(a) {
          super(a), this.__last = this.__first = null, this.__indent = this.__format = this.__size = 0, this.__dir = null;
        }
        getFormat() {
          return this.getLatest().__format;
        }
        getFormatType() {
          let a = this.getFormat();
          return ib[a] || "";
        }
        getIndent() {
          return this.getLatest().__indent;
        }
        getChildren() {
          let a = [], b = this.getFirstChild();
          for (; b !== null; )
            a.push(b), b = b.getNextSibling();
          return a;
        }
        getChildrenKeys() {
          let a = [], b = this.getFirstChild();
          for (; b !== null; )
            a.push(b.__key), b = b.getNextSibling();
          return a;
        }
        getChildrenSize() {
          return this.getLatest().__size;
        }
        isEmpty() {
          return this.getChildrenSize() === 0;
        }
        isDirty() {
          let a = F()._dirtyElements;
          return a !== null && a.has(this.__key);
        }
        isLastChild() {
          let a = this.getLatest(), b = this.getParentOrThrow().getLastChild();
          return b !== null && b.is(a);
        }
        getAllTextNodes() {
          let a = [], b = this.getFirstChild();
          for (; b !== null; ) {
            if (B(b) && a.push(b), D(b)) {
              let c = b.getAllTextNodes();
              a.push(...c);
            }
            b = b.getNextSibling();
          }
          return a;
        }
        getFirstDescendant() {
          let a = this.getFirstChild();
          for (; a !== null; ) {
            if (D(a)) {
              let b = a.getFirstChild();
              if (b !== null) {
                a = b;
                continue;
              }
            }
            break;
          }
          return a;
        }
        getLastDescendant() {
          let a = this.getLastChild();
          for (; a !== null; ) {
            if (D(a)) {
              let b = a.getLastChild();
              if (b !== null) {
                a = b;
                continue;
              }
            }
            break;
          }
          return a;
        }
        getDescendantByIndex(a) {
          let b = this.getChildren(), c = b.length;
          return a >= c ? (a = b[c - 1], D(a) && a.getLastDescendant() || a || null) : (a = b[a], D(a) && a.getFirstDescendant() || a || null);
        }
        getFirstChild() {
          let a = this.getLatest().__first;
          return a === null ? null : I(a);
        }
        getFirstChildOrThrow() {
          let a = this.getFirstChild();
          return a === null && q(45, this.__key), a;
        }
        getLastChild() {
          let a = this.getLatest().__last;
          return a === null ? null : I(a);
        }
        getLastChildOrThrow() {
          let a = this.getLastChild();
          return a === null && q(96, this.__key), a;
        }
        getChildAtIndex(a) {
          var b = this.getChildrenSize();
          let c;
          if (a < b / 2) {
            for (c = this.getFirstChild(), b = 0; c !== null && b <= a; ) {
              if (b === a)
                return c;
              c = c.getNextSibling(), b++;
            }
            return null;
          }
          for (c = this.getLastChild(), --b; c !== null && b >= a; ) {
            if (b === a)
              return c;
            c = c.getPreviousSibling(), b--;
          }
          return null;
        }
        getTextContent() {
          let a = "", b = this.getChildren(), c = b.length;
          for (let d = 0; d < c; d++) {
            let e = b[d];
            a += e.getTextContent(), D(e) && d !== c - 1 && !e.isInline() && (a += `

`);
          }
          return a;
        }
        getTextContentSize() {
          let a = 0, b = this.getChildren(), c = b.length;
          for (let d = 0; d < c; d++) {
            let e = b[d];
            a += e.getTextContentSize(), D(e) && d !== c - 1 && !e.isInline() && (a += 2);
          }
          return a;
        }
        getDirection() {
          return this.getLatest().__dir;
        }
        hasFormat(a) {
          return a !== "" ? (a = hb[a], (this.getFormat() & a) !== 0) : false;
        }
        select(a, b) {
          G();
          let c = v(), d = a, e = b;
          var f = this.getChildrenSize();
          if (!this.canBeEmpty()) {
            if (a === 0 && b === 0) {
              if (a = this.getFirstChild(), B(a) || D(a))
                return a.select(0, 0);
            } else if (!(a !== void 0 && a !== f || b !== void 0 && b !== f) && (a = this.getLastChild(), B(a) || D(a)))
              return a.select();
          }
          if (d === void 0 && (d = f), e === void 0 && (e = f), f = this.__key, C(c))
            c.anchor.set(f, d, "element"), c.focus.set(f, e, "element"), c.dirty = true;
          else
            return pe(f, d, f, e, "element", "element");
          return c;
        }
        selectStart() {
          let a = this.getFirstDescendant();
          return D(a) || B(a) ? a.select(0, 0) : a !== null ? a.selectPrevious() : this.select(0, 0);
        }
        selectEnd() {
          let a = this.getLastDescendant();
          return D(a) || B(a) ? a.select() : a !== null ? a.selectNext() : this.select();
        }
        clear() {
          let a = this.getWritable();
          return this.getChildren().forEach((b) => b.remove()), a;
        }
        append(...a) {
          return this.splice(this.getChildrenSize(), 0, a);
        }
        setDirection(a) {
          let b = this.getWritable();
          return b.__dir = a, b;
        }
        setFormat(a) {
          return this.getWritable().__format = a !== "" ? hb[a] : 0, this;
        }
        setIndent(a) {
          return this.getWritable().__indent = a, this;
        }
        splice(a, b, c) {
          let d = c.length, e = this.getChildrenSize(), f = this.getWritable(), g = f.__key;
          var h = [], k = [];
          let n = this.getChildAtIndex(a + b), m = null, p = e - b + d;
          if (a !== 0)
            if (a === e)
              m = this.getLastChild();
            else {
              var l = this.getChildAtIndex(a);
              l !== null && (m = l.getPreviousSibling());
            }
          if (0 < b) {
            var r = m === null ? this.getFirstChild() : m.getNextSibling();
            for (l = 0; l < b; l++) {
              r === null && q(100);
              var u = r.getNextSibling(), x = r.__key;
              r = r.getWritable(), bc(r), k.push(x), r = u;
            }
          }
          for (l = m, u = 0; u < d; u++) {
            x = c[u], l !== null && x.is(l) && (m = l = l.getPreviousSibling()), r = x.getWritable(), r.__parent === g && p--, bc(r);
            let y = x.__key;
            l === null ? (f.__first = y, r.__prev = null) : (l = l.getWritable(), l.__next = y, r.__prev = l.__key), x.__key === g && q(76), r.__parent = g, h.push(y), l = x;
          }
          if (a + b === e ? l !== null && (l.getWritable().__next = null, f.__last = l.__key) : n !== null && (a = n.getWritable(), l !== null ? (b = l.getWritable(), a.__prev = l.__key, b.__next = n.__key) : a.__prev = null), f.__size = p, k.length && (a = v(), C(a))) {
            k = new Set(k), h = new Set(h);
            let { anchor: y, focus: A } = a;
            uf(y, k, h) && Yd(y, y.getNode(), this, m, n), uf(A, k, h) && Yd(A, A.getNode(), this, m, n), p !== 0 || this.canBeEmpty() || L(this) || this.remove();
          }
          return f;
        }
        exportJSON() {
          return { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), type: "element", version: 1 };
        }
        insertNewAfter() {
          return null;
        }
        canIndent() {
          return true;
        }
        collapseAtStart() {
          return false;
        }
        excludeFromCopy() {
          return false;
        }
        canExtractContents() {
          return true;
        }
        canReplaceWith() {
          return true;
        }
        canInsertAfter() {
          return true;
        }
        canBeEmpty() {
          return true;
        }
        canInsertTextBefore() {
          return true;
        }
        canInsertTextAfter() {
          return true;
        }
        isInline() {
          return false;
        }
        isShadowRoot() {
          return false;
        }
        canMergeWith() {
          return false;
        }
        extractWithChild() {
          return false;
        }
      };
      function D(a) {
        return a instanceof tf;
      }
      function uf(a, b, c) {
        for (a = a.getNode(); a; ) {
          let d = a.__key;
          if (b.has(d) && !c.has(d))
            return true;
          a = a.getParent();
        }
        return false;
      }
      var vf = class extends tf {
        static getType() {
          return "root";
        }
        static clone() {
          return new vf();
        }
        constructor() {
          super("root"), this.__cachedText = null;
        }
        getTopLevelElementOrThrow() {
          q(51);
        }
        getTextContent() {
          let a = this.__cachedText;
          return !ec() && F()._dirtyType !== 0 || a === null ? super.getTextContent() : a;
        }
        remove() {
          q(52);
        }
        replace() {
          q(53);
        }
        insertBefore() {
          q(54);
        }
        insertAfter() {
          q(55);
        }
        updateDOM() {
          return false;
        }
        append(...a) {
          for (let b = 0; b < a.length; b++) {
            let c = a[b];
            D(c) || z(c) || q(56);
          }
          return super.append(...a);
        }
        static importJSON(a) {
          let b = hc();
          return b.setFormat(a.format), b.setIndent(a.indent), b.setDirection(a.direction), b;
        }
        exportJSON() {
          return { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), type: "root", version: 1 };
        }
        collapseAtStart() {
          return true;
        }
      };
      function K(a) {
        return a instanceof vf;
      }
      function rf(a, b) {
        if (b = b.getEditorState()._selection, a = a._selection, a !== null) {
          if (a.dirty || !a.is(b))
            return true;
        } else if (b !== null)
          return true;
        return false;
      }
      function wf() {
        return new qf(/* @__PURE__ */ new Map([["root", new vf()]]));
      }
      function xf(a) {
        let b = a.exportJSON();
        var c = a.constructor;
        b.type !== c.getType() && q(130, c.name);
        let d = b.children;
        if (D(a))
          for (Array.isArray(d) || q(59, c.name), a = a.getChildren(), c = 0; c < a.length; c++) {
            let e = xf(a[c]);
            d.push(e);
          }
        return b;
      }
      var qf = class {
        constructor(a, b) {
          this._nodeMap = a, this._selection = b || null, this._readOnly = this._flushSync = false;
        }
        isEmpty() {
          return this._nodeMap.size === 1 && this._selection === null;
        }
        read(a) {
          return kf(this, a);
        }
        clone(a) {
          return a = new qf(this._nodeMap, a === void 0 ? this._selection : a), a._readOnly = true, a;
        }
        toJSON() {
          return kf(this, () => ({ root: xf(hc()) }));
        }
      }, yf = class extends tf {
        static getType() {
          return "paragraph";
        }
        static clone(a) {
          return new yf(a.__key);
        }
        createDOM(a) {
          let b = document.createElement("p");
          return a = qc(a.theme, "paragraph"), a !== void 0 && b.classList.add(...a), b;
        }
        updateDOM() {
          return false;
        }
        static importDOM() {
          return { p: () => ({ conversion: zf, priority: 0 }) };
        }
        exportDOM(a) {
          if ({ element: a } = super.exportDOM(a), a && this.isEmpty() && a.append(document.createElement("br")), a) {
            var b = this.getFormatType();
            a.style.textAlign = b, (b = this.getDirection()) && (a.dir = b), b = this.getIndent(), 0 < b && (a.style.textIndent = `${20 * b}px`);
          }
          return { element: a };
        }
        static importJSON(a) {
          let b = be();
          return b.setFormat(a.format), b.setIndent(a.indent), b.setDirection(a.direction), b;
        }
        exportJSON() {
          return { ...super.exportJSON(), type: "paragraph", version: 1 };
        }
        insertNewAfter(a, b) {
          a = be();
          let c = this.getDirection();
          return a.setDirection(c), this.insertAfter(a, b), a;
        }
        collapseAtStart() {
          let a = this.getChildren();
          if (a.length === 0 || B(a[0]) && a[0].getTextContent().trim() === "") {
            if (this.getNextSibling() !== null)
              return this.selectNext(), this.remove(), true;
            if (this.getPreviousSibling() !== null)
              return this.selectPrevious(), this.remove(), true;
          }
          return false;
        }
      };
      function zf(a) {
        let b = be();
        return a.style && (b.setFormat(a.style.textAlign), a = parseInt(a.style.textIndent, 10) / 20, 0 < a && b.setIndent(a)), { node: b };
      }
      function be() {
        return zc(new yf());
      }
      function mf(a, b, c, d) {
        let e = a._keyToDOMMap;
        e.clear(), a._editorState = wf(), a._pendingEditorState = d, a._compositionKey = null, a._dirtyType = 0, a._cloneNotNeeded.clear(), a._dirtyLeaves = /* @__PURE__ */ new Set(), a._dirtyElements.clear(), a._normalizedNodes = /* @__PURE__ */ new Set(), a._updateTags = /* @__PURE__ */ new Set(), a._updates = [], a._blockCursorElement = null, d = a._observer, d !== null && (d.disconnect(), a._observer = null), b !== null && (b.textContent = ""), c !== null && (c.textContent = "", e.set("root", c));
      }
      function Af(a) {
        let b = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set();
        return a.forEach((d) => {
          if (d = d.klass.importDOM != null ? d.klass.importDOM.bind(d.klass) : null, d != null && !c.has(d)) {
            c.add(d);
            var e = d();
            e !== null && Object.keys(e).forEach((f) => {
              let g = b.get(f);
              g === void 0 && (g = [], b.set(f, g)), g.push(e[f]);
            });
          }
        }), b;
      }
      var Gf = class {
        constructor(a, b, c, d, e, f, g) {
          this._parentEditor = b, this._rootElement = null, this._editorState = a, this._compositionKey = this._pendingEditorState = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = false, this._listeners = { decorator: /* @__PURE__ */ new Set(), editable: /* @__PURE__ */ new Set(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Set(), textcontent: /* @__PURE__ */ new Set(), update: /* @__PURE__ */ new Set() }, this._commands = /* @__PURE__ */ new Map(), this._config = d, this._nodes = c, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = mc(), this._onError = e, this._htmlConversions = f, this._editable = g, this._headless = b !== null && b._headless, this._blockCursorElement = this._window = null;
        }
        isComposing() {
          return this._compositionKey != null;
        }
        registerUpdateListener(a) {
          let b = this._listeners.update;
          return b.add(a), () => {
            b.delete(a);
          };
        }
        registerEditableListener(a) {
          let b = this._listeners.editable;
          return b.add(a), () => {
            b.delete(a);
          };
        }
        registerDecoratorListener(a) {
          let b = this._listeners.decorator;
          return b.add(a), () => {
            b.delete(a);
          };
        }
        registerTextContentListener(a) {
          let b = this._listeners.textcontent;
          return b.add(a), () => {
            b.delete(a);
          };
        }
        registerRootListener(a) {
          let b = this._listeners.root;
          return a(this._rootElement, null), b.add(a), () => {
            a(null, this._rootElement), b.delete(a);
          };
        }
        registerCommand(a, b, c) {
          c === void 0 && q(35);
          let d = this._commands;
          d.has(a) || d.set(a, [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()]);
          let e = d.get(a);
          e === void 0 && q(36, String(a));
          let f = e[c];
          return f.add(b), () => {
            f.delete(b), e.every((g) => g.size === 0) && d.delete(a);
          };
        }
        registerMutationListener(a, b) {
          this._nodes.get(a.getType()) === void 0 && q(37, a.name);
          let c = this._listeners.mutation;
          return c.set(b, a), () => {
            c.delete(b);
          };
        }
        registerNodeTransformToKlass(a, b) {
          var c = a.getType();
          return c = this._nodes.get(c), c === void 0 && q(37, a.name), c.transforms.add(b), c;
        }
        registerNodeTransform(a, b) {
          var c = this.registerNodeTransformToKlass(a, b);
          let d = [c];
          return c = c.replaceWithKlass, c != null && (c = this.registerNodeTransformToKlass(c, b), d.push(c)), ic(this, a.getType()), () => {
            d.forEach((e) => e.transforms.delete(b));
          };
        }
        hasNode(a) {
          return this._nodes.has(a.getType());
        }
        hasNodes(a) {
          return a.every(this.hasNode.bind(this));
        }
        dispatchCommand(a, b) {
          return R(this, a, b);
        }
        getDecorators() {
          return this._decorators;
        }
        getRootElement() {
          return this._rootElement;
        }
        getKey() {
          return this._key;
        }
        setRootElement(a) {
          let b = this._rootElement;
          if (a !== b) {
            let f = qc(this._config.theme, "root");
            var c = this._pendingEditorState || this._editorState;
            if (this._rootElement = a, mf(this, b, a, c), b !== null) {
              if (!this._config.disableEvents) {
                Fd !== 0 && (Fd--, Fd === 0 && b.ownerDocument.removeEventListener("selectionchange", Vd));
                var d = b.__lexicalEditor;
                if (d != null) {
                  if (d._parentEditor !== null) {
                    var e = lc(d);
                    e = e[e.length - 1]._key, Ud.get(e) === d && Ud.delete(e);
                  } else
                    Ud.delete(d._key);
                  b.__lexicalEditor = null;
                }
                for (d = Td(b), e = 0; e < d.length; e++)
                  d[e]();
                b.__lexicalEventHandles = [];
              }
              f != null && b.classList.remove(...f);
            }
            a !== null ? (c = (c = a.ownerDocument) && c.defaultView || null, d = a.style, d.userSelect = "text", d.whiteSpace = "pre-wrap", d.wordBreak = "break-word", a.setAttribute("data-lexical-editor", "true"), this._window = c, this._dirtyType = 2, Bb(this), this._updateTags.add("history-merge"), lf(this), this._config.disableEvents || Wd(a, this), f != null && a.classList.add(...f)) : (this._editorState = c, this._window = this._pendingEditorState = null), nf("root", this, false, a, b);
          }
        }
        getElementByKey(a) {
          return this._keyToDOMMap.get(a) || null;
        }
        getEditorState() {
          return this._editorState;
        }
        setEditorState(a, b) {
          a.isEmpty() && q(38), Ab(this);
          let c = this._pendingEditorState, d = this._updateTags;
          b = b !== void 0 ? b.tag : null, c === null || c.isEmpty() || (b != null && d.add(b), lf(this)), this._pendingEditorState = a, this._dirtyType = 2, this._dirtyElements.set("root", false), this._compositionKey = null, b != null && d.add(b), lf(this);
        }
        parseEditorState(a, b) {
          a = typeof a == "string" ? JSON.parse(a) : a;
          let c = wf(), d = S, e = Z, f = T, g = this._dirtyElements, h = this._dirtyLeaves, k = this._cloneNotNeeded, n = this._dirtyType;
          this._dirtyElements = /* @__PURE__ */ new Map(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyType = 0, S = c, Z = false, T = this;
          try {
            jf(a.root, this._nodes), b && b(), c._readOnly = true;
          } catch (m) {
            m instanceof Error && this._onError(m);
          } finally {
            this._dirtyElements = g, this._dirtyLeaves = h, this._cloneNotNeeded = k, this._dirtyType = n, S = d, Z = e, T = f;
          }
          return c;
        }
        update(a, b) {
          w(this, a, b);
        }
        focus(a, b = {}) {
          let c = this._rootElement;
          c !== null && (c.setAttribute("autocapitalize", "off"), w(this, () => {
            let d = v(), e = hc();
            d !== null ? d.dirty = true : e.getChildrenSize() !== 0 && (b.defaultSelection === "rootStart" ? e.selectStart() : e.selectEnd());
          }, { onUpdate: () => {
            c.removeAttribute("autocapitalize"), a && a();
          }, tag: "focus" }), this._pendingEditorState === null && c.removeAttribute("autocapitalize"));
        }
        blur() {
          var a = this._rootElement;
          a !== null && a.blur(), a = vb(this._window), a !== null && a.removeAllRanges();
        }
        isEditable() {
          return this._editable;
        }
        setEditable(a) {
          this._editable !== a && (this._editable = a, nf("editable", this, true, a));
        }
        toJSON() {
          return { editorState: this._editorState.toJSON() };
        }
      }, Hf = class extends tf {
        constructor(a, b) {
          super(b), this.__colSpan = a, this.__rowSpan = 1;
        }
        exportJSON() {
          return { ...super.exportJSON(), colSpan: this.__colSpan, rowSpan: this.__rowSpan };
        }
        getColSpan() {
          return this.__colSpan;
        }
        setColSpan(a) {
          return this.getWritable().__colSpan = a, this;
        }
        getRowSpan() {
          return this.__rowSpan;
        }
        setRowSpan(a) {
          return this.getWritable().__rowSpan = a, this;
        }
      };
      function Pe(a) {
        return a instanceof Hf;
      }
      var If = class extends tf {
      };
      function Re(a) {
        return a instanceof If;
      }
      var Jf = class extends tf {
      };
      function Qe(a) {
        return a instanceof Jf;
      }
      exports.$addUpdateTag = function(a) {
        G(), F()._updateTags.add(a);
      };
      exports.$applyNodeReplacement = zc;
      exports.$copyNode = yc;
      exports.$createLineBreakNode = ee;
      exports.$createNodeSelection = We;
      exports.$createParagraphNode = be;
      exports.$createRangeSelection = function() {
        let a = new xe("root", 0, "element"), b = new xe("root", 0, "element");
        return new Le(a, b, 0, "");
      };
      exports.$createTabNode = se;
      exports.$createTextNode = J;
      exports.$getAdjacentNode = tc;
      exports.$getNearestNodeFromDOMNode = ub;
      exports.$getNearestRootOrShadowRoot = xc;
      exports.$getNodeByKey = I;
      exports.$getPreviousSelection = oc;
      exports.$getRoot = hc;
      exports.$getSelection = v;
      exports.$getTextContent = function() {
        let a = v();
        return a === null ? "" : a.getTextContent();
      };
      exports.$hasAncestor = wc;
      exports.$hasUpdateTag = function(a) {
        return F()._updateTags.has(a);
      };
      exports.$insertNodes = function(a, b) {
        let c = v() || oc();
        return c === null && (c = hc().selectEnd()), c.insertNodes(a, b);
      };
      exports.$isBlockElementNode = Ve;
      exports.$isDecoratorNode = z;
      exports.$isElementNode = D;
      exports.$isInlineElementOrDecoratorNode = function(a) {
        return D(a) && a.isInline() || z(a) && a.isInline();
      };
      exports.$isLeafNode = Xb;
      exports.$isLineBreakNode = Yb;
      exports.$isNodeSelection = Sd;
      exports.$isParagraphNode = function(a) {
        return a instanceof yf;
      };
      exports.$isRangeSelection = C;
      exports.$isRootNode = K;
      exports.$isRootOrShadowRoot = L;
      exports.$isTabNode = function(a) {
        return a instanceof we;
      };
      exports.$isTextNode = B;
      exports.$nodesOfType = function(a) {
        var b = ac();
        let c = b._readOnly, d = a.getType();
        b = b._nodeMap;
        let e = [];
        for (let [, f] of b)
          f instanceof a && f.__type === d && (c || f.isAttached()) && e.push(f);
        return e;
      };
      exports.$normalizeSelection__EXPERIMENTAL = Gb;
      exports.$parseSerializedNode = function(a) {
        return jf(a, F()._nodes);
      };
      exports.$selectAll = function() {
        var a = hc();
        a = a.select(0, a.getChildrenSize()), yb(Gb(a));
      };
      exports.$setCompositionKey = H;
      exports.$setSelection = yb;
      exports.$splitNode = Dc;
      exports.BLUR_COMMAND = Ra;
      exports.CAN_REDO_COMMAND = {};
      exports.CAN_UNDO_COMMAND = {};
      exports.CLEAR_EDITOR_COMMAND = {};
      exports.CLEAR_HISTORY_COMMAND = {};
      exports.CLICK_COMMAND = ca;
      exports.COMMAND_PRIORITY_CRITICAL = 4;
      exports.COMMAND_PRIORITY_EDITOR = 0;
      exports.COMMAND_PRIORITY_HIGH = 3;
      exports.COMMAND_PRIORITY_LOW = 1;
      exports.COMMAND_PRIORITY_NORMAL = 2;
      exports.CONTROLLED_TEXT_INSERTION_COMMAND = ha;
      exports.COPY_COMMAND = Na;
      exports.CUT_COMMAND = Oa;
      exports.DELETE_CHARACTER_COMMAND = da;
      exports.DELETE_LINE_COMMAND = pa;
      exports.DELETE_WORD_COMMAND = na;
      exports.DEPRECATED_$computeGridMap = Se;
      exports.DEPRECATED_$createGridSelection = function() {
        let a = new xe("root", 0, "element"), b = new xe("root", 0, "element");
        return new Me("root", a, b);
      };
      exports.DEPRECATED_$getNodeTriplet = function(a) {
        a instanceof Hf || (a instanceof $d ? (a = Ec(a, Pe), Pe(a) || q(114)) : (a = Ec(a.getNode(), Pe), Pe(a) || q(114)));
        let b = a.getParent();
        Qe(b) || q(115);
        let c = b.getParent();
        return Re(c) || q(116), [a, b, c];
      };
      exports.DEPRECATED_$isGridCellNode = Pe;
      exports.DEPRECATED_$isGridNode = Re;
      exports.DEPRECATED_$isGridRowNode = Qe;
      exports.DEPRECATED_$isGridSelection = Ne;
      exports.DEPRECATED_GridCellNode = Hf;
      exports.DEPRECATED_GridNode = If;
      exports.DEPRECATED_GridRowNode = Jf;
      exports.DRAGEND_COMMAND = Ma;
      exports.DRAGOVER_COMMAND = La;
      exports.DRAGSTART_COMMAND = Ka;
      exports.DROP_COMMAND = Ja;
      exports.DecoratorNode = sf;
      exports.ElementNode = tf;
      exports.FOCUS_COMMAND = Qa;
      exports.FORMAT_ELEMENT_COMMAND = {};
      exports.FORMAT_TEXT_COMMAND = qa;
      exports.INDENT_CONTENT_COMMAND = {};
      exports.INSERT_LINE_BREAK_COMMAND = ea;
      exports.INSERT_PARAGRAPH_COMMAND = fa;
      exports.INSERT_TAB_COMMAND = {};
      exports.KEY_ARROW_DOWN_COMMAND = Aa;
      exports.KEY_ARROW_LEFT_COMMAND = xa;
      exports.KEY_ARROW_RIGHT_COMMAND = ua;
      exports.KEY_ARROW_UP_COMMAND = za;
      exports.KEY_BACKSPACE_COMMAND = Fa;
      exports.KEY_DELETE_COMMAND = Ha;
      exports.KEY_DOWN_COMMAND = ta;
      exports.KEY_ENTER_COMMAND = Ba;
      exports.KEY_ESCAPE_COMMAND = Ga;
      exports.KEY_MODIFIER_COMMAND = Sa;
      exports.KEY_SPACE_COMMAND = Ca;
      exports.KEY_TAB_COMMAND = Ia;
      exports.LineBreakNode = ce;
      exports.MOVE_TO_END = va;
      exports.MOVE_TO_START = ya;
      exports.OUTDENT_CONTENT_COMMAND = {};
      exports.PASTE_COMMAND = ka;
      exports.ParagraphNode = yf;
      exports.REDO_COMMAND = sa;
      exports.REMOVE_TEXT_COMMAND = ma;
      exports.RootNode = vf;
      exports.SELECTION_CHANGE_COMMAND = aa;
      exports.SELECT_ALL_COMMAND = Pa;
      exports.TabNode = we;
      exports.TextNode = ke;
      exports.UNDO_COMMAND = ra;
      exports.createCommand = function() {
        return {};
      };
      exports.createEditor = function(a) {
        var b = a || {}, c = T, d = b.theme || {};
        let e = a === void 0 ? c : b.parentEditor || null, f = b.disableEvents || false, g = wf(), h = b.namespace || (e !== null ? e._config.namespace : mc()), k = b.editorState, n = [vf, ke, ce, we, yf, ...b.nodes || []], m = b.onError;
        if (b = b.editable !== void 0 ? b.editable : true, a === void 0 && c !== null)
          a = c._nodes;
        else
          for (a = /* @__PURE__ */ new Map(), c = 0; c < n.length; c++) {
            let l = n[c], r = null;
            var p = null;
            typeof l != "function" && (p = l, l = p.replace, r = p.with, p = p.withKlass ? p.withKlass : null);
            let u = l.getType(), x = l.transform(), y = /* @__PURE__ */ new Set();
            x !== null && y.add(x), a.set(u, { klass: l, replace: r, replaceWithKlass: p, transforms: y });
          }
        return d = new Gf(g, e, a, { disableEvents: f, namespace: h, theme: d }, m || console.error, Af(a), b), k !== void 0 && (d._pendingEditorState = k, d._dirtyType = 2), d;
      };
      exports.getNearestEditorFromDOMNode = Mb;
      exports.isSelectionCapturedInDecoratorInput = Kb;
      exports.isSelectionWithinEditor = Lb;
    } });
    require_Lexical = __commonJS({ "../../../node_modules/lexical/Lexical.js"(exports, module) {
      "use strict";
      var Lexical = require_Lexical_prod();
      module.exports = Lexical;
    } });
    require_LexicalSelection_prod = __commonJS({ "../../../node_modules/@lexical/selection/LexicalSelection.prod.js"(exports) {
      "use strict";
      var k = require_Lexical(), u = /* @__PURE__ */ new Map();
      function v(a) {
        for (; a != null; ) {
          if (a.nodeType === Node.TEXT_NODE)
            return a;
          a = a.firstChild;
        }
        return null;
      }
      function w(a) {
        let b = a.parentNode;
        if (b == null)
          throw Error("Should never happen");
        return [b, Array.from(b.childNodes).indexOf(a)];
      }
      function y(a) {
        let b = {};
        a = a.split(";");
        for (let c of a)
          if (c !== "") {
            let [e, d] = c.split(/:([^]+)/);
            b[e.trim()] = d.trim();
          }
        return b;
      }
      function z(a) {
        let b = u.get(a);
        return b === void 0 && (b = y(a), u.set(a, b)), b;
      }
      function A(a) {
        let b = "";
        for (let c in a)
          c && (b += `${c}: ${a[c]};`);
        return b;
      }
      function B(a, b) {
        var c = z("getStyle" in a ? a.getStyle() : a.style);
        b = Object.entries(b).reduce((e, [d, f]) => (f === null ? delete e[d] : e[d] = f, e), { ...c }), c = A(b), a.setStyle(c), u.set(c, b);
      }
      function C(a) {
        for (; a !== null && !k.$isRootOrShadowRoot(a); ) {
          let b = a.getLatest(), c = a.getParent();
          b.getChildrenSize() === 0 && a.remove(true), a = c;
        }
      }
      function D(a, b, c, e, d = null) {
        if (b.length !== 0) {
          var f = b[0], h = /* @__PURE__ */ new Map(), g = [];
          f = k.$isElementNode(f) ? f : f.getParentOrThrow(), f.isInline() && (f = f.getParentOrThrow());
          for (var l = false; f !== null; ) {
            var m = f.getPreviousSibling();
            if (m !== null) {
              f = m, l = true;
              break;
            }
            if (f = f.getParentOrThrow(), k.$isRootOrShadowRoot(f))
              break;
          }
          m = /* @__PURE__ */ new Set();
          for (var q = 0; q < c; q++) {
            var p = b[q];
            k.$isElementNode(p) && p.getChildrenSize() === 0 && m.add(p.getKey());
          }
          var n = /* @__PURE__ */ new Set();
          for (q = 0; q < c; q++) {
            p = b[q];
            var r = p.getParent();
            if (r !== null && r.isInline() && (r = r.getParent()), r !== null && k.$isLeafNode(p) && !n.has(p.getKey())) {
              if (p = r.getKey(), h.get(p) === void 0) {
                let t = e();
                t.setFormat(r.getFormatType()), t.setIndent(r.getIndent()), g.push(t), h.set(p, t), r.getChildren().forEach((x) => {
                  t.append(x), n.add(x.getKey()), k.$isElementNode(x) && x.getChildrenKeys().forEach((G) => n.add(G));
                }), C(r);
              }
            } else
              m.has(p.getKey()) && (r = e(), r.setFormat(p.getFormatType()), r.setIndent(p.getIndent()), g.push(r), p.remove(true));
          }
          if (d !== null)
            for (b = 0; b < g.length; b++)
              d.append(g[b]);
          if (b = null, k.$isRootOrShadowRoot(f))
            if (l)
              if (d !== null)
                f.insertAfter(d);
              else
                for (d = g.length - 1; 0 <= d; d--)
                  f.insertAfter(g[d]);
            else if (l = f.getFirstChild(), k.$isElementNode(l) && (f = l), l === null)
              if (d)
                f.append(d);
              else
                for (d = 0; d < g.length; d++)
                  l = g[d], f.append(l), b = l;
            else if (d !== null)
              l.insertBefore(d);
            else
              for (f = 0; f < g.length; f++)
                d = g[f], l.insertBefore(d), b = d;
          else if (d)
            f.insertAfter(d);
          else
            for (d = g.length - 1; 0 <= d; d--)
              l = g[d], f.insertAfter(l), b = l;
          g = k.$getPreviousSelection(), k.$isRangeSelection(g) && g.anchor.getNode().isAttached() && g.focus.getNode().isAttached() ? k.$setSelection(g.clone()) : b !== null ? b.selectEnd() : a.dirty = true;
        }
      }
      function E(a, b, c, e) {
        a.modify(b ? "extend" : "move", c, e);
      }
      function F(a) {
        return a = a.anchor.getNode(), (k.$isRootNode(a) ? a : a.getParentOrThrow()).getDirection() === "rtl";
      }
      exports.$addNodeStyle = function(a) {
        a = a.getStyle();
        let b = y(a);
        u.set(a, b);
      };
      exports.$cloneWithProperties = function(a) {
        a = a.getLatest();
        let b = a.constructor.clone(a);
        return b.__parent = a.__parent, b.__next = a.__next, b.__prev = a.__prev, k.$isElementNode(a) && k.$isElementNode(b) ? (b.__first = a.__first, b.__last = a.__last, b.__size = a.__size, b.__format = a.__format, b.__indent = a.__indent, b.__dir = a.__dir, b) : (k.$isTextNode(a) && k.$isTextNode(b) && (b.__format = a.__format, b.__style = a.__style, b.__mode = a.__mode, b.__detail = a.__detail), b);
      };
      exports.$getSelectionStyleValueForProperty = function(a, b, c = "") {
        let e = null, d = a.getNodes();
        var f = a.anchor, h = a.focus, g = a.isBackward();
        let l = g ? h.offset : f.offset;
        if (f = g ? h.getNode() : f.getNode(), a.style !== "" && (a = z(a.style), a !== null && b in a))
          return a[b];
        for (a = 0; a < d.length; a++) {
          var m = d[a];
          if ((a === 0 || l !== 0 || !m.is(f)) && k.$isTextNode(m)) {
            if (h = b, g = c, m = m.getStyle(), m = z(m), h = m !== null && m[h] || g, e === null)
              e = h;
            else if (e !== h) {
              e = "";
              break;
            }
          }
        }
        return e === null ? c : e;
      };
      exports.$isAtNodeEnd = function(a) {
        return a.type === "text" ? a.offset === a.getNode().getTextContentSize() : a.offset === a.getNode().getChildrenSize();
      };
      exports.$isParentElementRTL = F;
      exports.$moveCaretSelection = E;
      exports.$moveCharacter = function(a, b, c) {
        let e = F(a);
        E(a, b, c ? !e : e, "character");
      };
      exports.$patchStyleText = function(a, b) {
        var c = a.getNodes();
        let e = c.length - 1, d = c[0], f = c[e];
        if (a.isCollapsed())
          B(a, b);
        else {
          var h = a.anchor, g = a.focus, l = d.getTextContent().length, m = g.offset, q = h.offset, p = h.isBefore(g), n = p ? q : m;
          a = p ? m : q;
          var r = p ? h.type : g.type, t = p ? g.type : h.type;
          if (h = p ? g.key : h.key, k.$isTextNode(d) && n === l && (g = d.getNextSibling(), k.$isTextNode(g) && (n = q = 0, d = g)), c.length === 1)
            k.$isTextNode(d) && (n = r === "element" ? 0 : q > m ? m : q, a = t === "element" ? l : q > m ? q : m, n !== a && (n === 0 && a === l ? (B(d, b), d.select(n, a)) : (c = d.splitText(n, a), c = n === 0 ? c[0] : c[1], B(c, b), c.select(0, a - n))));
          else
            for (k.$isTextNode(d) && n < d.getTextContentSize() && (n !== 0 && (d = d.splitText(n)[1]), B(d, b)), k.$isTextNode(f) && (n = f.getTextContent().length, f.__key !== h && a !== 0 && (a = n), a !== n && ([f] = f.splitText(a)), a !== 0 && B(f, b)), a = 1; a < e; a++)
              n = c[a], l = n.getKey(), k.$isTextNode(n) && l !== d.getKey() && l !== f.getKey() && !n.isToken() && B(n, b);
        }
      };
      exports.$selectAll = function(a) {
        let b = a.anchor;
        a = a.focus;
        var c = b.getNode().getTopLevelElementOrThrow().getParentOrThrow();
        let e = c.getFirstDescendant();
        c = c.getLastDescendant();
        let d = "element", f = "element", h = 0;
        k.$isTextNode(e) ? d = "text" : k.$isElementNode(e) || e === null || (e = e.getParentOrThrow()), k.$isTextNode(c) ? (f = "text", h = c.getTextContentSize()) : k.$isElementNode(c) || c === null || (c = c.getParentOrThrow()), e && c && (b.set(e.getKey(), 0, d), a.set(c.getKey(), h, f));
      };
      exports.$setBlocksType = function(a, b) {
        if (a.anchor.key === "root") {
          b = b();
          var c = k.$getRoot();
          (a = c.getFirstChild()) ? a.replace(b, true) : c.append(b);
        } else
          for (c = a.getNodes(), a = a.anchor.getNode().getParentOrThrow(), c.indexOf(a) === -1 && c.push(a), a.isInline() && (a = a.getParentOrThrow(), c.indexOf(a) === -1 && c.push(a)), a = 0; a < c.length; a++) {
            let f = c[a];
            var e = f;
            if (!k.$isElementNode(e) || k.$isRootOrShadowRoot(e))
              e = false;
            else {
              var d = e.getFirstChild();
              d = d === null || k.$isLineBreakNode(d) || k.$isTextNode(d) || d.isInline(), e = !e.isInline() && e.canBeEmpty() !== false && d;
            }
            e && (e = b(), e.setFormat(f.getFormatType()), e.setIndent(f.getIndent()), f.replace(e, true));
          }
      };
      exports.$shouldOverrideDefaultCharacterSelection = function(a, b) {
        return a = k.$getAdjacentNode(a.focus, b), k.$isDecoratorNode(a) && !a.isIsolated() || k.$isElementNode(a) && !a.isInline() && !a.canBeEmpty();
      };
      exports.$sliceSelectedTextNodeContent = function(a, b) {
        if (b.isSelected() && !b.isSegmented() && !b.isToken() && (k.$isRangeSelection(a) || k.DEPRECATED_$isGridSelection(a))) {
          var c = a.anchor.getNode(), e = a.focus.getNode(), d = b.is(c), f = b.is(e);
          if (d || f) {
            d = a.isBackward();
            let [h, g] = a.getCharacterOffsets();
            a = c.is(e), f = b.is(d ? e : c), e = b.is(d ? c : e), c = 0;
            let l;
            a ? (c = h > g ? g : h, l = h > g ? h : g) : f ? (c = d ? g : h, l = void 0) : e && (d = d ? h : g, c = 0, l = d), b.__text = b.__text.slice(c, l);
          }
        }
        return b;
      };
      exports.$wrapNodes = function(a, b, c = null) {
        var e = a.getNodes();
        let d = e.length;
        var f = a.anchor;
        if (d === 0 || d === 1 && f.type === "element" && f.getNode().getChildrenSize() === 0) {
          a = f.type === "text" ? f.getNode().getParentOrThrow() : f.getNode(), e = a.getChildren();
          let g = b();
          g.setFormat(a.getFormatType()), g.setIndent(a.getIndent()), e.forEach((l) => g.append(l)), c && (g = c.append(g)), a.replace(g);
        } else {
          f = null;
          var h = [];
          for (let g = 0; g < d; g++) {
            let l = e[g];
            k.$isRootOrShadowRoot(l) ? (D(a, h, h.length, b, c), h = [], f = l) : f === null || f !== null && k.$hasAncestor(l, f) ? h.push(l) : (D(a, h, h.length, b, c), h = [l]);
          }
          D(a, h, h.length, b, c);
        }
      };
      exports.createDOMRange = function(a, b, c, e, d) {
        let f = b.getKey(), h = e.getKey(), g = document.createRange(), l = a.getElementByKey(f);
        if (a = a.getElementByKey(h), k.$isTextNode(b) && (l = v(l)), k.$isTextNode(e) && (a = v(a)), b === void 0 || e === void 0 || l === null || a === null)
          return null;
        l.nodeName === "BR" && ([l, c] = w(l)), a.nodeName === "BR" && ([a, d] = w(a)), b = l.firstChild, l === a && b != null && b.nodeName === "BR" && c === 0 && d === 0 && (d = 1);
        try {
          g.setStart(l, c), g.setEnd(a, d);
        } catch {
          return null;
        }
        return !g.collapsed || c === d && f === h || (g.setStart(a, d), g.setEnd(l, c)), g;
      };
      exports.createRectsFromDOMRange = function(a, b) {
        var c = a.getRootElement();
        if (c === null)
          return [];
        a = c.getBoundingClientRect(), c = getComputedStyle(c), c = parseFloat(c.paddingLeft) + parseFloat(c.paddingRight), b = Array.from(b.getClientRects());
        let e = b.length;
        b.sort((f, h) => {
          let g = f.top - h.top;
          return 3 >= Math.abs(g) ? f.left - h.left : g;
        });
        let d;
        for (let f = 0; f < e; f++) {
          let h = b[f], g = h.width + c === a.width;
          d && d.top <= h.top && d.top + d.height > h.top && d.left + d.width > h.left || g ? (b.splice(f--, 1), e--) : d = h;
        }
        return b;
      };
      exports.getStyleObjectFromCSS = z;
      exports.trimTextContentFromAnchor = function(a, b, c) {
        let e = b.getNode();
        if (k.$isElementNode(e)) {
          var d = e.getDescendantByIndex(b.offset);
          d !== null && (e = d);
        }
        for (; 0 < c && e !== null; ) {
          var f = e.getPreviousSibling(), h = 0;
          if (f === null) {
            d = e.getParentOrThrow();
            for (var g = d.getPreviousSibling(); g === null; ) {
              if (d = d.getParent(), d === null) {
                f = null;
                break;
              }
              g = d.getPreviousSibling();
            }
            d !== null && (h = d.isInline() ? 0 : 2, f = k.$isElementNode(g) ? g.getLastDescendant() : g);
          }
          if (g = e.getTextContent(), g === "" && k.$isElementNode(e) && !e.isInline() && (g = `

`), d = e.getTextContentSize(), !k.$isTextNode(e) || c >= d)
            g = e.getParent(), e.remove(), g == null || g.getChildrenSize() !== 0 || k.$isRootNode(g) || g.remove(), c -= d + h, e = f;
          else {
            let l = e.getKey();
            h = a.getEditorState().read(() => {
              let q = k.$getNodeByKey(l);
              return k.$isTextNode(q) && q.isSimpleText() ? q.getTextContent() : null;
            }), f = d - c;
            let m = g.slice(0, f);
            h !== null && h !== g ? (c = k.$getPreviousSelection(), d = e, e.isSimpleText() ? e.setTextContent(h) : (d = k.$createTextNode(h), e.replace(d)), k.$isRangeSelection(c) && c.isCollapsed() && (c = c.anchor.offset, d.select(c, c))) : e.isSimpleText() ? (h = b.key === l, g = b.offset, g < c && (g = d), c = h ? g - c : 0, d = h ? g : f, h && c === 0 ? ([c] = e.splitText(c, d), c.remove()) : ([, c] = e.splitText(c, d), c.remove())) : (c = k.$createTextNode(m), e.replace(c)), c = 0;
          }
        }
      };
    } });
    require_LexicalSelection = __commonJS({ "../../../node_modules/@lexical/selection/LexicalSelection.js"(exports, module) {
      "use strict";
      var LexicalSelection = require_LexicalSelection_prod();
      module.exports = LexicalSelection;
    } });
    require_LexicalUtils_prod = __commonJS({ "../../../node_modules/@lexical/utils/LexicalUtils.prod.js"(exports) {
      "use strict";
      var g = require_LexicalSelection(), n = require_Lexical();
      function p(a) {
        let b = new URLSearchParams();
        b.append("code", a);
        for (let c = 1; c < arguments.length; c++)
          b.append("v", arguments[c]);
        throw Error(`Minified Lexical error #${a}; visit https://lexical.dev/docs/error?${b} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
      }
      function q(a, b) {
        for (let c of b)
          if (a.type.startsWith(c))
            return true;
        return false;
      }
      function t(a, b) {
        for (; a !== n.$getRoot() && a != null; ) {
          if (b(a))
            return a;
          a = a.getParent();
        }
        return null;
      }
      function u(a) {
        return a.nodeType === 1;
      }
      exports.$splitNode = n.$splitNode;
      exports.$dfs = function(a, b) {
        let c = [];
        a = (a || n.$getRoot()).getLatest(), b = b || (n.$isElementNode(a) ? a.getLastDescendant() : a);
        for (var f = a, d = 0; (f = f.getParent()) !== null; )
          d++;
        for (f = d; a !== null && !a.is(b); )
          if (c.push({ depth: f, node: a }), n.$isElementNode(a) && 0 < a.getChildrenSize())
            a = a.getFirstChild(), f++;
          else
            for (d = null; d === null && a !== null; )
              d = a.getNextSibling(), d === null ? (a = a.getParent(), f--) : a = d;
        return a !== null && a.is(b) && c.push({ depth: f, node: a }), c;
      };
      exports.$findMatchingParent = t;
      exports.$getNearestBlockElementAncestorOrThrow = function(a) {
        let b = t(a, (c) => n.$isElementNode(c) && !c.isInline());
        return n.$isElementNode(b) || p(4, a.__key), b;
      };
      exports.$getNearestNodeOfType = function(a, b) {
        for (; a != null; ) {
          if (a instanceof b)
            return a;
          a = a.getParent();
        }
        return null;
      };
      exports.$insertNodeToNearestRoot = function(a) {
        var b = n.$getSelection() || n.$getPreviousSelection();
        if (n.$isRangeSelection(b)) {
          var { focus: c } = b;
          if (b = c.getNode(), c = c.offset, n.$isRootOrShadowRoot(b))
            c = b.getChildAtIndex(c), c == null ? b.append(a) : c.insertBefore(a), a.selectNext();
          else {
            let f, d;
            n.$isTextNode(b) ? (f = b.getParentOrThrow(), d = b.getIndexWithinParent(), 0 < c && (d += 1, b.splitText(c))) : (f = b, d = c), [, b] = n.$splitNode(f, d), b.insertBefore(a), b.selectStart();
          }
        } else
          n.$isNodeSelection(b) || n.DEPRECATED_$isGridSelection(b) ? (b = b.getNodes(), b[b.length - 1].getTopLevelElementOrThrow().insertAfter(a)) : n.$getRoot().append(a), b = n.$createParagraphNode(), a.insertAfter(b), b.select();
        return a.getLatest();
      };
      exports.$restoreEditorState = function(a, b) {
        let c = /* @__PURE__ */ new Map(), f = a._pendingEditorState;
        for (let [d, e] of b._nodeMap) {
          let h = g.$cloneWithProperties(e);
          n.$isTextNode(h) && (h.__text = e.__text), c.set(d, h);
        }
        f && (f._nodeMap = c), a._dirtyType = 2, a = b._selection, n.$setSelection(a === null ? null : a.clone());
      };
      exports.$wrapNodeInElement = function(a, b) {
        return b = b(), a.replace(b), b.append(a), b;
      };
      exports.addClassNamesToElement = function(a, ...b) {
        b.forEach((c) => {
          typeof c == "string" && (c = c.split(" ").filter((f) => f !== ""), a.classList.add(...c));
        });
      };
      exports.isHTMLAnchorElement = function(a) {
        return u(a) && a.tagName === "A";
      };
      exports.isHTMLElement = u;
      exports.isMimeType = q;
      exports.mediaFileReader = function(a, b) {
        let c = a[Symbol.iterator]();
        return new Promise((f, d) => {
          let e = [], h = () => {
            let { done: m, value: k } = c.next();
            if (m)
              return f(e);
            let l = new FileReader();
            l.addEventListener("error", d), l.addEventListener("load", () => {
              let r = l.result;
              typeof r == "string" && e.push({ file: k, result: r }), h();
            }), q(k, b) ? l.readAsDataURL(k) : h();
          };
          h();
        });
      };
      exports.mergeRegister = function(...a) {
        return () => {
          a.forEach((b) => b());
        };
      };
      exports.objectKlassEquals = function(a, b) {
        return a !== null ? Object.getPrototypeOf(a).constructor.name === b.name : false;
      };
      exports.registerNestedElementResolver = function(a, b, c, f) {
        return a.registerNodeTransform(b, (d) => {
          a: {
            for (var e = d.getChildren(), h = 0; h < e.length; h++)
              if (e[h] instanceof b) {
                e = null;
                break a;
              }
            for (e = d; e !== null; )
              if (h = e, e = e.getParent(), e instanceof b) {
                e = { child: h, parent: e };
                break a;
              }
            e = null;
          }
          if (e !== null) {
            let { child: m, parent: k } = e;
            if (m.is(d)) {
              if (f(k, d), d = m.getNextSiblings(), e = d.length, k.insertAfter(m), e !== 0) {
                h = c(k), m.insertAfter(h);
                for (let l = 0; l < e; l++)
                  h.append(d[l]);
              }
              k.canBeEmpty() || k.getChildrenSize() !== 0 || k.remove();
            }
          }
        });
      };
      exports.removeClassNamesFromElement = function(a, ...b) {
        b.forEach((c) => {
          typeof c == "string" && a.classList.remove(...c.split(" "));
        });
      };
    } });
    require_LexicalUtils = __commonJS({ "../../../node_modules/@lexical/utils/LexicalUtils.js"(exports, module) {
      "use strict";
      var LexicalUtils = require_LexicalUtils_prod();
      module.exports = LexicalUtils;
    } });
    require_LexicalLink_prod = __commonJS({ "../../../node_modules/@lexical/link/LexicalLink.prod.js"(exports) {
      "use strict";
      var k = require_LexicalUtils(), n = require_Lexical(), p = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]), q = class extends n.ElementNode {
        static getType() {
          return "link";
        }
        static clone(a) {
          return new q(a.__url, { rel: a.__rel, target: a.__target, title: a.__title }, a.__key);
        }
        constructor(a, b = {}, d) {
          super(d);
          let { target: l = null, rel: h = null, title: e = null } = b;
          this.__url = a, this.__target = l, this.__rel = h, this.__title = e;
        }
        createDOM(a) {
          let b = document.createElement("a");
          return b.href = this.sanitizeUrl(this.__url), this.__target !== null && (b.target = this.__target), this.__rel !== null && (b.rel = this.__rel), this.__title !== null && (b.title = this.__title), k.addClassNamesToElement(b, a.theme.link), b;
        }
        updateDOM(a, b) {
          let d = this.__url, l = this.__target, h = this.__rel, e = this.__title;
          return d !== a.__url && (b.href = d), l !== a.__target && (l ? b.target = l : b.removeAttribute("target")), h !== a.__rel && (h ? b.rel = h : b.removeAttribute("rel")), e !== a.__title && (e ? b.title = e : b.removeAttribute("title")), false;
        }
        static importDOM() {
          return { a: () => ({ conversion: r, priority: 1 }) };
        }
        static importJSON(a) {
          let b = t(a.url, { rel: a.rel, target: a.target, title: a.title });
          return b.setFormat(a.format), b.setIndent(a.indent), b.setDirection(a.direction), b;
        }
        sanitizeUrl(a) {
          try {
            let b = new URL(a);
            if (!p.has(b.protocol))
              return "about:blank";
          } catch {
          }
          return a;
        }
        exportJSON() {
          return { ...super.exportJSON(), rel: this.getRel(), target: this.getTarget(), title: this.getTitle(), type: "link", url: this.getURL(), version: 1 };
        }
        getURL() {
          return this.getLatest().__url;
        }
        setURL(a) {
          this.getWritable().__url = a;
        }
        getTarget() {
          return this.getLatest().__target;
        }
        setTarget(a) {
          this.getWritable().__target = a;
        }
        getRel() {
          return this.getLatest().__rel;
        }
        setRel(a) {
          this.getWritable().__rel = a;
        }
        getTitle() {
          return this.getLatest().__title;
        }
        setTitle(a) {
          this.getWritable().__title = a;
        }
        insertNewAfter(a, b = true) {
          return a = this.getParentOrThrow().insertNewAfter(a, b), n.$isElementNode(a) ? (b = t(this.__url, { rel: this.__rel, target: this.__target, title: this.__title }), a.append(b), b) : null;
        }
        canInsertTextBefore() {
          return false;
        }
        canInsertTextAfter() {
          return false;
        }
        canBeEmpty() {
          return false;
        }
        isInline() {
          return true;
        }
        extractWithChild(a, b) {
          if (!n.$isRangeSelection(b))
            return false;
          a = b.anchor.getNode();
          let d = b.focus.getNode();
          return this.isParentOf(a) && this.isParentOf(d) && 0 < b.getTextContent().length;
        }
      };
      function r(a) {
        let b = null;
        if (k.isHTMLAnchorElement(a)) {
          let d = a.textContent;
          d !== null && d !== "" && (b = t(a.getAttribute("href") || "", { rel: a.getAttribute("rel"), target: a.getAttribute("target"), title: a.getAttribute("title") }));
        }
        return { node: b };
      }
      function t(a, b) {
        return n.$applyNodeReplacement(new q(a, b));
      }
      function v(a) {
        return a instanceof q;
      }
      var w = class extends q {
        static getType() {
          return "autolink";
        }
        static clone(a) {
          return new w(a.__url, { rel: a.__rel, target: a.__target, title: a.__title }, a.__key);
        }
        static importJSON(a) {
          let b = x(a.url, { rel: a.rel, target: a.target, title: a.title });
          return b.setFormat(a.format), b.setIndent(a.indent), b.setDirection(a.direction), b;
        }
        static importDOM() {
          return null;
        }
        exportJSON() {
          return { ...super.exportJSON(), type: "autolink", version: 1 };
        }
        insertNewAfter(a, b = true) {
          return a = this.getParentOrThrow().insertNewAfter(a, b), n.$isElementNode(a) ? (b = x(this.__url, { rel: this._rel, target: this.__target, title: this.__title }), a.append(b), b) : null;
        }
      };
      function x(a, b) {
        return n.$applyNodeReplacement(new w(a, b));
      }
      var y = n.createCommand("TOGGLE_LINK_COMMAND");
      function z(a, b) {
        for (; a !== null && (a = a.getParent()) !== null && !b(a); )
          ;
        return a;
      }
      exports.$createAutoLinkNode = x;
      exports.$createLinkNode = t;
      exports.$isAutoLinkNode = function(a) {
        return a instanceof w;
      };
      exports.$isLinkNode = v;
      exports.AutoLinkNode = w;
      exports.LinkNode = q;
      exports.TOGGLE_LINK_COMMAND = y;
      exports.toggleLink = function(a, b = {}) {
        let { target: d, title: l } = b, h = b.rel === void 0 ? "noreferrer" : b.rel;
        if (b = n.$getSelection(), n.$isRangeSelection(b))
          if (b = b.extract(), a === null)
            b.forEach((m) => {
              if (m = m.getParent(), v(m)) {
                let c = m.getChildren();
                for (let f = 0; f < c.length; f++)
                  m.insertBefore(c[f]);
                m.remove();
              }
            });
          else {
            if (b.length === 1) {
              var e = b[0];
              if (e = v(e) ? e : z(e, v), e !== null) {
                e.setURL(a), d !== void 0 && e.setTarget(d), h !== null && e.setRel(h), l !== void 0 && e.setTitle(l);
                return;
              }
            }
            let m = null, c = null;
            b.forEach((f) => {
              var g = f.getParent();
              if (g !== c && g !== null && (!n.$isElementNode(f) || f.isInline()))
                if (v(g))
                  c = g, g.setURL(a), d !== void 0 && g.setTarget(d), h !== null && c.setRel(h), l !== void 0 && c.setTitle(l);
                else if (g.is(m) || (m = g, c = t(a, { rel: h, target: d }), v(g) ? f.getPreviousSibling() === null ? g.insertBefore(c) : g.insertAfter(c) : f.insertBefore(c)), v(f)) {
                  if (!f.is(c)) {
                    if (c !== null) {
                      g = f.getChildren();
                      for (let u = 0; u < g.length; u++)
                        c.append(g[u]);
                    }
                    f.remove();
                  }
                } else
                  c !== null && c.append(f);
            });
          }
      };
    } });
    require_LexicalLink = __commonJS({ "../../../node_modules/@lexical/link/LexicalLink.js"(exports, module) {
      "use strict";
      var LexicalLink = require_LexicalLink_prod();
      module.exports = LexicalLink;
    } });
    require_LexicalComposerContext_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalComposerContext.prod.js"(exports) {
      "use strict";
      var d = (init_react(), __toCommonJS(react_exports));
      function e(a) {
        let c = new URLSearchParams();
        c.append("code", a);
        for (let b = 1; b < arguments.length; b++)
          c.append("v", arguments[b]);
        throw Error(`Minified Lexical error #${a}; visit https://lexical.dev/docs/error?${c} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
      }
      var f = d.createContext(null);
      exports.LexicalComposerContext = f;
      exports.createLexicalComposerContext = function(a, c) {
        let b = null;
        return a != null && (b = a[1]), { getTheme: function() {
          return c ?? (b != null ? b.getTheme() : null);
        } };
      };
      exports.useLexicalComposerContext = function() {
        let a = d.useContext(f);
        return a == null && e(8), a;
      };
    } });
    require_LexicalComposerContext = __commonJS({ "../../../node_modules/@lexical/react/LexicalComposerContext.js"(exports, module) {
      "use strict";
      var LexicalComposerContext = require_LexicalComposerContext_prod();
      module.exports = LexicalComposerContext;
    } });
    require_LexicalComposer_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalComposer.prod.js"(exports) {
      "use strict";
      var e = require_LexicalComposerContext(), f = require_Lexical(), g = (init_react(), __toCommonJS(react_exports)), m = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", n = m ? g.useLayoutEffect : g.useEffect, p = { tag: "history-merge" };
      function q(a, c) {
        if (c !== null) {
          if (c === void 0)
            a.update(() => {
              var b = f.$getRoot();
              if (b.isEmpty()) {
                let d = f.$createParagraphNode();
                b.append(d), b = m ? document.activeElement : null, (f.$getSelection() !== null || b !== null && b === a.getRootElement()) && d.select();
              }
            }, p);
          else if (c !== null)
            switch (typeof c) {
              case "string":
                let b = a.parseEditorState(c);
                a.setEditorState(b, p);
                break;
              case "object":
                a.setEditorState(c, p);
                break;
              case "function":
                a.update(() => {
                  f.$getRoot().isEmpty() && c(a);
                }, p);
            }
        }
      }
      exports.LexicalComposer = function({ initialConfig: a, children: c }) {
        let b = g.useMemo(() => {
          let { theme: d, namespace: h, editor__DEPRECATED: r, nodes: t, onError: u, editorState: v } = a, w = e.createLexicalComposerContext(null, d), k = r || null;
          if (k === null) {
            let l = f.createEditor({ editable: a.editable, namespace: h, nodes: t, onError: (x) => u(x, l), theme: d });
            q(l, v), k = l;
          }
          return [k, w];
        }, []);
        return n(() => {
          let d = a.editable, [h] = b;
          h.setEditable(d !== void 0 ? d : true);
        }, []), g.createElement(e.LexicalComposerContext.Provider, { value: b }, c);
      };
    } });
    require_LexicalComposer = __commonJS({ "../../../node_modules/@lexical/react/LexicalComposer.js"(exports, module) {
      "use strict";
      var LexicalComposer2 = require_LexicalComposer_prod();
      module.exports = LexicalComposer2;
    } });
    require_useLexicalEditable_prod = __commonJS({ "../../../node_modules/@lexical/react/useLexicalEditable.prod.js"(exports, module) {
      "use strict";
      var b = require_LexicalComposerContext(), k = (init_react(), __toCommonJS(react_exports)), l = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? k.useLayoutEffect : k.useEffect;
      function m(a) {
        let [c] = b.useLexicalComposerContext(), e = k.useMemo(() => a(c), [c, a]), d = k.useRef(e.initialValueFn()), [n, g] = k.useState(d.current);
        return l(() => {
          let { initialValueFn: p, subscribe: q } = e, f = p();
          return d.current !== f && (d.current = f, g(f)), q((h) => {
            d.current = h, g(h);
          });
        }, [e, a]), n;
      }
      function r(a) {
        return { initialValueFn: () => a.isEditable(), subscribe: (c) => a.registerEditableListener(c) };
      }
      module.exports = function() {
        return m(r);
      };
    } });
    require_useLexicalEditable = __commonJS({ "../../../node_modules/@lexical/react/useLexicalEditable.js"(exports, module) {
      "use strict";
      var useLexicalEditable = require_useLexicalEditable_prod();
      module.exports = useLexicalEditable;
    } });
    require_LexicalText_prod = __commonJS({ "../../../node_modules/@lexical/text/LexicalText.prod.js"(exports) {
      "use strict";
      var g = require_Lexical();
      function r(c, h = true) {
        return c ? false : (c = t(), h && (c = c.trim()), c === "");
      }
      function t() {
        return g.$getRoot().getTextContent();
      }
      function u(c) {
        if (!r(c, false))
          return false;
        c = g.$getRoot().getChildren();
        let h = c.length;
        if (1 < h)
          return false;
        for (let e = 0; e < h; e++) {
          var b = c[e];
          if (g.$isDecoratorNode(b))
            return false;
          if (g.$isElementNode(b)) {
            if (!g.$isParagraphNode(b) || b.__indent !== 0)
              return false;
            b = b.getChildren();
            let n = b.length;
            for (let q = 0; q < n; q++)
              if (!g.$isTextNode(b[e]))
                return false;
          }
        }
        return true;
      }
      exports.$canShowPlaceholder = u;
      exports.$canShowPlaceholderCurry = function(c) {
        return () => u(c);
      };
      exports.$findTextIntersectionFromCharacters = function(c, h) {
        var b = c.getFirstChild();
        c = 0;
        a:
          for (; b !== null; ) {
            if (g.$isElementNode(b)) {
              var e = b.getFirstChild();
              if (e !== null) {
                b = e;
                continue;
              }
            } else if (g.$isTextNode(b)) {
              if (e = b.getTextContentSize(), c + e > h)
                return { node: b, offset: h - c };
              c += e;
            }
            if (e = b.getNextSibling(), e !== null)
              b = e;
            else {
              for (b = b.getParent(); b !== null; ) {
                if (e = b.getNextSibling(), e !== null) {
                  b = e;
                  continue a;
                }
                b = b.getParent();
              }
              break;
            }
          }
        return null;
      };
      exports.$isRootTextContentEmpty = r;
      exports.$isRootTextContentEmptyCurry = function(c, h) {
        return () => r(c, h);
      };
      exports.$rootTextContent = t;
      exports.registerLexicalTextEntity = function(c, h, b, e) {
        let n = (a) => {
          let d = g.$createTextNode(a.getTextContent());
          d.setFormat(a.getFormat()), a.replace(d);
        }, q = c.registerNodeTransform(g.TextNode, (a) => {
          if (a.isSimpleText()) {
            var d = a.getPreviousSibling(), l = a.getTextContent(), m = a;
            if (g.$isTextNode(d)) {
              var k = d.getTextContent(), f = h(k + l);
              if (d instanceof b) {
                if (f === null || d.getLatest().__mode !== 0) {
                  n(d);
                  return;
                }
                if (f = f.end - k.length, 0 < f) {
                  m = l.slice(0, f), m = k + m, d.select(), d.setTextContent(m), f === l.length ? a.remove() : (d = l.slice(f), a.setTextContent(d));
                  return;
                }
              } else if (f === null || f.start < k.length)
                return;
            }
            for (; ; ) {
              if (a = h(l), l = f = a === null ? "" : l.slice(a.end), f === "") {
                if (k = m.getNextSibling(), g.$isTextNode(k)) {
                  if (f = m.getTextContent() + k.getTextContent(), f = h(f), f === null) {
                    k instanceof b ? n(k) : k.markDirty();
                    break;
                  } else if (f.start !== 0)
                    break;
                }
              } else if (k = h(f), k !== null && k.start === 0)
                break;
              if (a === null)
                break;
              if (a.start === 0 && g.$isTextNode(d) && d.isTextEntity())
                continue;
              let p;
              if (a.start === 0 ? [p, m] = m.splitText(a.end) : [, p, m] = m.splitText(a.start, a.end), a = e(p), a.setFormat(p.getFormat()), p.replace(a), m == null)
                break;
            }
          }
        });
        return c = c.registerNodeTransform(b, (a) => {
          var d = a.getTextContent();
          let l = h(d);
          l === null || l.start !== 0 ? n(a) : d.length > l.end ? a.splitText(l.end) : (d = a.getPreviousSibling(), g.$isTextNode(d) && d.isTextEntity() && (n(d), n(a)), d = a.getNextSibling(), g.$isTextNode(d) && d.isTextEntity() && (n(d), a instanceof b && n(a)));
        }), [q, c];
      };
    } });
    require_LexicalText = __commonJS({ "../../../node_modules/@lexical/text/LexicalText.js"(exports, module) {
      "use strict";
      var LexicalText = require_LexicalText_prod();
      module.exports = LexicalText;
    } });
    react_dom_exports = {};
    __export(react_dom_exports, { default: () => default3 });
    init_react_dom = __esm2({ "esm-externals:react-dom"() {
      __reExport(react_dom_exports, react_dom_star);
    } });
    require_LexicalDragon_prod = __commonJS({ "../../../node_modules/@lexical/dragon/LexicalDragon.prod.js"(exports) {
      "use strict";
      var g = require_Lexical();
      exports.registerDragonSupport = function(m) {
        let t = window.location.origin, r = (l) => {
          if (l.origin === t) {
            var h = m.getRootElement();
            if (document.activeElement === h && (h = l.data, typeof h == "string")) {
              try {
                var a = JSON.parse(h);
              } catch {
                return;
              }
              if (a && a.protocol === "nuanria_messaging" && a.type === "request" && (a = a.payload) && a.functionId === "makeChanges" && (a = a.args)) {
                let [k, n, p, q, u] = a;
                m.update(() => {
                  let f = g.$getSelection();
                  if (g.$isRangeSelection(f)) {
                    var e = f.anchor;
                    let b = e.getNode(), c = 0, d = 0;
                    g.$isTextNode(b) && 0 <= k && 0 <= n && (c = k, d = k + n, f.setTextNodeRange(b, c, b, d)), (c !== d || p !== "") && (f.insertRawText(p), b = e.getNode()), g.$isTextNode(b) && (c = q, d = q + u, e = b.getTextContentSize(), c = c > e ? e : c, d = d > e ? e : d, f.setTextNodeRange(b, c, b, d)), l.stopImmediatePropagation();
                  }
                });
              }
            }
          }
        };
        return window.addEventListener("message", r, true), () => {
          window.removeEventListener("message", r, true);
        };
      };
    } });
    require_LexicalDragon = __commonJS({ "../../../node_modules/@lexical/dragon/LexicalDragon.js"(exports, module) {
      "use strict";
      var LexicalDragon = require_LexicalDragon_prod();
      module.exports = LexicalDragon;
    } });
    require_LexicalHtml_prod = __commonJS({ "../../../node_modules/@lexical/html/LexicalHtml.prod.js"(exports) {
      "use strict";
      var m = require_LexicalSelection(), q = require_Lexical();
      function r(c, d, h, a = null) {
        let e = a != null ? d.isSelected(a) : true, k = q.$isElementNode(d) && d.excludeFromCopy("html");
        var f = d;
        a !== null && (f = m.$cloneWithProperties(d), f = q.$isTextNode(f) && a != null ? m.$sliceSelectedTextNodeContent(a, f) : f);
        let g = q.$isElementNode(f) ? f.getChildren() : [], { element: b, after: l } = f.exportDOM(c);
        if (!b)
          return false;
        let n = document.createDocumentFragment();
        for (let p = 0; p < g.length; p++) {
          let t = g[p], w = r(c, t, n, a);
          !e && q.$isElementNode(d) && w && d.extractWithChild(t, a, "html") && (e = true);
        }
        return e && !k ? (b.append(n), h.append(b), l && (c = l.call(f, b)) && b.replaceWith(c)) : h.append(n), e;
      }
      var u = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
      function v(c, d, h = /* @__PURE__ */ new Map(), a) {
        let e = [];
        if (u.has(c.nodeName))
          return e;
        let k = null;
        var f, { nodeName: g } = c, b = d._htmlConversions.get(g.toLowerCase());
        if (g = null, b !== void 0)
          for (f of b)
            b = f(c), b !== null && (g === null || g.priority < b.priority) && (g = b);
        if (g = (f = g !== null ? g.conversion : null) ? f(c) : null, f = null, g !== null) {
          if (f = g.after, b = g.node, k = Array.isArray(b) ? b[b.length - 1] : b, k !== null) {
            for (var [, l] of h)
              if (k = l(k, a), !k)
                break;
            k && e.push(...Array.isArray(b) ? b : [k]);
          }
          g.forChild != null && h.set(c.nodeName, g.forChild);
        }
        for (c = c.childNodes, a = [], l = 0; l < c.length; l++)
          a.push(...v(c[l], d, new Map(h), k));
        return f != null && (a = f(a)), k == null ? e = e.concat(a) : q.$isElementNode(k) && k.append(...a), e;
      }
      exports.$generateHtmlFromNodes = function(c, d) {
        if (typeof document > "u" || typeof window > "u")
          throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
        let h = document.createElement("div"), a = q.$getRoot().getChildren();
        for (let e = 0; e < a.length; e++)
          r(c, a[e], h, d);
        return h.innerHTML;
      };
      exports.$generateNodesFromDOM = function(c, d) {
        d = d.body ? d.body.childNodes : [];
        let h = [];
        for (let e = 0; e < d.length; e++) {
          var a = d[e];
          u.has(a.nodeName) || (a = v(a, c), a !== null && (h = h.concat(a)));
        }
        return h;
      };
    } });
    require_LexicalHtml = __commonJS({ "../../../node_modules/@lexical/html/LexicalHtml.js"(exports, module) {
      "use strict";
      var LexicalHtml = require_LexicalHtml_prod();
      module.exports = LexicalHtml;
    } });
    require_LexicalClipboard_prod = __commonJS({ "../../../node_modules/@lexical/clipboard/LexicalClipboard.prod.js"(exports) {
      "use strict";
      var d = require_LexicalHtml(), p = require_LexicalSelection(), r = require_LexicalUtils(), u = require_Lexical();
      function z(a) {
        let b = new URLSearchParams();
        b.append("code", a);
        for (let c = 1; c < arguments.length; c++)
          b.append("v", arguments[c]);
        throw Error(`Minified Lexical error #${a}; visit https://lexical.dev/docs/error?${b} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
      }
      var A = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
      function B(a) {
        let b = u.$getSelection();
        if (b == null)
          throw Error("Expected valid LexicalSelection");
        return u.$isRangeSelection(b) && b.isCollapsed() || b.getNodes().length === 0 ? "" : d.$generateHtmlFromNodes(a, b);
      }
      function C(a) {
        let b = u.$getSelection();
        if (b == null)
          throw Error("Expected valid LexicalSelection");
        return u.$isRangeSelection(b) && b.isCollapsed() || b.getNodes().length === 0 ? null : JSON.stringify(D(a, b));
      }
      function E(a, b, c) {
        (u.DEPRECATED_$isGridSelection(c) || r.$findMatchingParent(c.anchor.getNode(), (e) => u.DEPRECATED_$isGridCellNode(e)) !== null && r.$findMatchingParent(c.focus.getNode(), (e) => u.DEPRECATED_$isGridCellNode(e)) !== null) && b.length === 1 && u.DEPRECATED_$isGridNode(b[0]) ? F(b, c, false, a) : I(b, c);
      }
      function I(a, b) {
        let c = [], e = null;
        for (let f = 0; f < a.length; f++) {
          let h = a[f], g = u.$isLineBreakNode(h);
          if (g || u.$isDecoratorNode(h) && h.isInline() || u.$isElementNode(h) && h.isInline() || u.$isTextNode(h) || h.isParentRequired()) {
            if (e === null && (e = h.createParentElementNode(), c.push(e), g))
              continue;
            e !== null && e.append(h);
          } else
            c.push(h), e = null;
        }
        u.$isRangeSelection(b) ? b.insertNodes(c) : u.DEPRECATED_$isGridSelection(b) && (a = b.anchor.getNode(), u.DEPRECATED_$isGridCellNode(a) || z(41), a.append(...c));
      }
      function F(a, b, c, e) {
        a.length === 1 && u.DEPRECATED_$isGridNode(a[0]) || z(42);
        var f = a[0];
        a = f.getChildren(), c = f.getFirstChildOrThrow().getChildrenSize();
        var h = f.getChildrenSize(), g = r.$findMatchingParent(b.anchor.getNode(), (l) => u.DEPRECATED_$isGridCellNode(l));
        b = (f = g && r.$findMatchingParent(g, (l) => u.DEPRECATED_$isGridRowNode(l))) && r.$findMatchingParent(f, (l) => u.DEPRECATED_$isGridNode(l)), u.DEPRECATED_$isGridCellNode(g) && u.DEPRECATED_$isGridRowNode(f) && u.DEPRECATED_$isGridNode(b) || z(43);
        var k = f.getIndexWithinParent(), m = Math.min(b.getChildrenSize() - 1, k + h - 1);
        h = g.getIndexWithinParent(), g = Math.min(f.getChildrenSize() - 1, h + c - 1), c = Math.min(h, g), f = Math.min(k, m), h = Math.max(h, g), k = Math.max(k, m), m = b.getChildren(), g = 0;
        let n, q;
        for (let l = f; l <= k; l++) {
          var t = m[l];
          u.DEPRECATED_$isGridRowNode(t) || z(24);
          var y = a[g];
          u.DEPRECATED_$isGridRowNode(y) || z(24), t = t.getChildren(), y = y.getChildren();
          let G = 0;
          for (let v = c; v <= h; v++) {
            let w = t[v];
            u.DEPRECATED_$isGridCellNode(w) || z(25);
            let H = y[G];
            u.DEPRECATED_$isGridCellNode(H) || z(25), l === f && v === c ? n = w.getKey() : l === k && v === h && (q = w.getKey());
            let N = w.getChildren();
            H.getChildren().forEach((x) => {
              u.$isTextNode(x) && u.$createParagraphNode().append(x), w.append(x);
            }), N.forEach((x) => x.remove()), G++;
          }
          g++;
        }
        n && q && (a = u.DEPRECATED_$createGridSelection(), a.set(b.getKey(), n, q), u.$setSelection(a), e.dispatchCommand(u.SELECTION_CHANGE_COMMAND, void 0));
      }
      function J(a, b, c, e = []) {
        let f = b != null ? c.isSelected(b) : true, h = u.$isElementNode(c) && c.excludeFromCopy("html");
        var g = c;
        if (b !== null) {
          var k = p.$cloneWithProperties(c);
          g = k = u.$isTextNode(k) && b != null ? p.$sliceSelectedTextNodeContent(b, k) : k;
        }
        let m = u.$isElementNode(g) ? g.getChildren() : [];
        var n = g;
        k = n.exportJSON();
        var q = n.constructor;
        k.type !== q.getType() && z(58, q.name);
        let t = k.children;
        for (u.$isElementNode(n) && (Array.isArray(t) || z(59, q.name)), u.$isTextNode(g) && (g = g.__text, 0 < g.length ? k.text = g : f = false), g = 0; g < m.length; g++)
          n = m[g], q = J(a, b, n, k.children), !f && u.$isElementNode(c) && q && c.extractWithChild(n, b, "clone") && (f = true);
        if (f && !h)
          e.push(k);
        else if (Array.isArray(k.children))
          for (a = 0; a < k.children.length; a++)
            e.push(k.children[a]);
        return f;
      }
      function D(a, b) {
        let c = [], e = u.$getRoot().getChildren();
        for (let f = 0; f < e.length; f++)
          J(a, b, e[f], c);
        return { namespace: a._config.namespace, nodes: c };
      }
      function K(a) {
        let b = [];
        for (let c = 0; c < a.length; c++) {
          let e = u.$parseSerializedNode(a[c]);
          u.$isTextNode(e) && p.$addNodeStyle(e), b.push(e);
        }
        return b;
      }
      var L = null;
      function M(a, b) {
        var c = A ? (a._window || window).getSelection() : null;
        if (!c)
          return false;
        var e = c.anchorNode;
        if (c = c.focusNode, e !== null && c !== null && !u.isSelectionWithinEditor(a, e, c) || (b.preventDefault(), b = b.clipboardData, e = u.$getSelection(), b === null || e === null))
          return false;
        c = B(a), a = C(a);
        let f = "";
        return e !== null && (f = e.getTextContent()), c !== null && b.setData("text/html", c), a !== null && b.setData("application/x-lexical-editor", a), b.setData("text/plain", f), true;
      }
      exports.$generateJSONFromSelectedNodes = D;
      exports.$generateNodesFromSerializedNodes = K;
      exports.$getHtmlContent = B;
      exports.$getLexicalContent = C;
      exports.$insertDataTransferForPlainText = function(a, b) {
        a = a.getData("text/plain") || a.getData("text/uri-list"), a != null && b.insertRawText(a);
      };
      exports.$insertDataTransferForRichText = function(a, b, c) {
        var e = a.getData("application/x-lexical-editor");
        if (e)
          try {
            let g = JSON.parse(e);
            if (g.namespace === c._config.namespace && Array.isArray(g.nodes)) {
              let k = K(g.nodes);
              return E(c, k, b);
            }
          } catch {
          }
        if (e = a.getData("text/html"))
          try {
            var f = new DOMParser().parseFromString(e, "text/html"), h = d.$generateNodesFromDOM(c, f);
            return E(c, h, b);
          } catch {
          }
        if (a = a.getData("text/plain") || a.getData("text/uri-list"), a != null)
          if (u.$isRangeSelection(b))
            for (a = a.split(/(\r?\n|\t)/), c = a.length, f = 0; f < c; f++)
              h = a[f], h === `
` || h === `\r
` ? b.insertParagraph() : h === "	" ? b.insertNodes([u.$createTabNode()]) : b.insertText(h);
          else
            b.insertRawText(a);
      };
      exports.$insertGeneratedNodes = E;
      exports.copyToClipboard = async function(a, b) {
        if (L !== null)
          return false;
        if (b !== null)
          return new Promise((g) => {
            a.update(() => {
              g(M(a, b));
            });
          });
        var c = a.getRootElement();
        let e = a._window == null ? window.document : a._window.document, f = A ? (a._window || window).getSelection() : null;
        if (c === null || f === null)
          return false;
        let h = e.createElement("span");
        return h.style.cssText = "position: fixed; top: -1000px;", h.append(e.createTextNode("#")), c.append(h), c = new Range(), c.setStart(h, 0), c.setEnd(h, 1), f.removeAllRanges(), f.addRange(c), new Promise((g) => {
          let k = a.registerCommand(u.COPY_COMMAND, (m) => (r.objectKlassEquals(m, ClipboardEvent) && (k(), L !== null && (window.clearTimeout(L), L = null), g(M(a, m))), true), u.COMMAND_PRIORITY_CRITICAL);
          L = window.setTimeout(() => {
            k(), L = null, g(false);
          }, 50), e.execCommand("copy"), h.remove();
        });
      };
    } });
    require_LexicalClipboard = __commonJS({ "../../../node_modules/@lexical/clipboard/LexicalClipboard.js"(exports, module) {
      "use strict";
      var LexicalClipboard = require_LexicalClipboard_prod();
      module.exports = LexicalClipboard;
    } });
    require_LexicalPlainText_prod = __commonJS({ "../../../node_modules/@lexical/plain-text/LexicalPlainText.prod.js"(exports) {
      "use strict";
      var a = require_LexicalClipboard(), f = require_LexicalSelection(), g = require_LexicalUtils(), h = require_Lexical(), k = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = k && "documentMode" in document ? document.documentMode : null;
      k && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      k && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
      var n = k && "InputEvent" in window && !m ? "getTargetRanges" in new window.InputEvent("input") : false, p = k && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), q = k && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, r = k && /^(?=.*Chrome).*/i.test(navigator.userAgent), t = k && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !r;
      function u(d, b) {
        b.update(() => {
          if (d !== null) {
            let c = d instanceof KeyboardEvent ? null : d.clipboardData, e = h.$getSelection();
            if (e !== null && c != null) {
              d.preventDefault();
              let l = a.$getHtmlContent(b);
              l !== null && c.setData("text/html", l), c.setData("text/plain", e.getTextContent());
            }
          }
        });
      }
      function v(d, b) {
        d.preventDefault(), b.update(() => {
          let c = h.$getSelection(), { clipboardData: e } = d;
          e != null && h.$isRangeSelection(c) && a.$insertDataTransferForPlainText(e, c);
        }, { tag: "paste" });
      }
      function w(d, b) {
        u(d, b), b.update(() => {
          let c = h.$getSelection();
          h.$isRangeSelection(c) && c.removeText();
        });
      }
      exports.registerPlainText = function(d) {
        return g.mergeRegister(d.registerCommand(h.DELETE_CHARACTER_COMMAND, (b) => {
          let c = h.$getSelection();
          return h.$isRangeSelection(c) ? (c.deleteCharacter(b), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.DELETE_WORD_COMMAND, (b) => {
          let c = h.$getSelection();
          return h.$isRangeSelection(c) ? (c.deleteWord(b), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.DELETE_LINE_COMMAND, (b) => {
          let c = h.$getSelection();
          return h.$isRangeSelection(c) ? (c.deleteLine(b), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.CONTROLLED_TEXT_INSERTION_COMMAND, (b) => {
          let c = h.$getSelection();
          if (!h.$isRangeSelection(c))
            return false;
          if (typeof b == "string")
            c.insertText(b);
          else {
            let e = b.dataTransfer;
            e != null ? a.$insertDataTransferForPlainText(e, c) : (b = b.data) && c.insertText(b);
          }
          return true;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.REMOVE_TEXT_COMMAND, () => {
          let b = h.$getSelection();
          return h.$isRangeSelection(b) ? (b.removeText(), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.INSERT_LINE_BREAK_COMMAND, (b) => {
          let c = h.$getSelection();
          return h.$isRangeSelection(c) ? (c.insertLineBreak(b), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.INSERT_PARAGRAPH_COMMAND, () => {
          let b = h.$getSelection();
          return h.$isRangeSelection(b) ? (b.insertLineBreak(), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.KEY_ARROW_LEFT_COMMAND, (b) => {
          let c = h.$getSelection();
          if (!h.$isRangeSelection(c))
            return false;
          let e = b.shiftKey;
          return f.$shouldOverrideDefaultCharacterSelection(c, true) ? (b.preventDefault(), f.$moveCharacter(c, e, true), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.KEY_ARROW_RIGHT_COMMAND, (b) => {
          let c = h.$getSelection();
          if (!h.$isRangeSelection(c))
            return false;
          let e = b.shiftKey;
          return f.$shouldOverrideDefaultCharacterSelection(c, false) ? (b.preventDefault(), f.$moveCharacter(c, e, false), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.KEY_BACKSPACE_COMMAND, (b) => {
          let c = h.$getSelection();
          return h.$isRangeSelection(c) ? (b.preventDefault(), d.dispatchCommand(h.DELETE_CHARACTER_COMMAND, true)) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.KEY_DELETE_COMMAND, (b) => {
          let c = h.$getSelection();
          return h.$isRangeSelection(c) ? (b.preventDefault(), d.dispatchCommand(h.DELETE_CHARACTER_COMMAND, false)) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.KEY_ENTER_COMMAND, (b) => {
          let c = h.$getSelection();
          if (!h.$isRangeSelection(c))
            return false;
          if (b !== null) {
            if ((q || p || t) && n)
              return false;
            b.preventDefault();
          }
          return d.dispatchCommand(h.INSERT_LINE_BREAK_COMMAND, false);
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.SELECT_ALL_COMMAND, () => (h.$selectAll(), true), h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.COPY_COMMAND, (b) => {
          let c = h.$getSelection();
          return h.$isRangeSelection(c) ? (u(b, d), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.CUT_COMMAND, (b) => {
          let c = h.$getSelection();
          return h.$isRangeSelection(c) ? (w(b, d), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.PASTE_COMMAND, (b) => {
          let c = h.$getSelection();
          return h.$isRangeSelection(c) ? (v(b, d), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.DROP_COMMAND, (b) => {
          let c = h.$getSelection();
          return h.$isRangeSelection(c) ? (b.preventDefault(), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR), d.registerCommand(h.DRAGSTART_COMMAND, (b) => {
          let c = h.$getSelection();
          return h.$isRangeSelection(c) ? (b.preventDefault(), true) : false;
        }, h.COMMAND_PRIORITY_EDITOR));
      };
    } });
    require_LexicalPlainText = __commonJS({ "../../../node_modules/@lexical/plain-text/LexicalPlainText.js"(exports, module) {
      "use strict";
      var LexicalPlainText = require_LexicalPlainText_prod();
      module.exports = LexicalPlainText;
    } });
    require_LexicalPlainTextPlugin_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalPlainTextPlugin.prod.js"(exports) {
      "use strict";
      var b = require_LexicalComposerContext(), g = require_useLexicalEditable(), l = (init_react(), __toCommonJS(react_exports)), m = require_LexicalText(), n = require_LexicalUtils(), p = (init_react_dom(), __toCommonJS(react_dom_exports)), t = require_LexicalDragon(), u = require_LexicalPlainText(), v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? l.useLayoutEffect : l.useEffect;
      function w(a) {
        return a.getEditorState().read(m.$canShowPlaceholderCurry(a.isComposing()));
      }
      function x(a) {
        let [d, c] = l.useState(() => w(a));
        return v(() => {
          function e() {
            let f = w(a);
            c(f);
          }
          return e(), n.mergeRegister(a.registerUpdateListener(() => {
            e();
          }), a.registerEditableListener(() => {
            e();
          }));
        }, [a]), d;
      }
      function y(a, d) {
        let [c, e] = l.useState(() => a.getDecorators());
        return v(() => a.registerDecoratorListener((f) => {
          p.flushSync(() => {
            e(f);
          });
        }), [a]), l.useEffect(() => {
          e(a.getDecorators());
        }, [a]), l.useMemo(() => {
          let f = [], q = Object.keys(c);
          for (let h = 0; h < q.length; h++) {
            let k = q[h], A = l.createElement(d, { onError: (z) => a._onError(z) }, l.createElement(l.Suspense, { fallback: null }, c[k])), r = a.getElementByKey(k);
            r !== null && f.push(p.createPortal(A, r, k));
          }
          return f;
        }, [d, c, a]);
      }
      function B(a) {
        v(() => n.mergeRegister(u.registerPlainText(a), t.registerDragonSupport(a)), [a]);
      }
      function C({ content: a }) {
        var [d] = b.useLexicalComposerContext();
        d = x(d);
        let c = g();
        return d ? typeof a == "function" ? a(c) : a : null;
      }
      exports.PlainTextPlugin = function({ contentEditable: a, placeholder: d, ErrorBoundary: c }) {
        let [e] = b.useLexicalComposerContext();
        return c = y(e, c), B(e), l.createElement(l.Fragment, null, a, l.createElement(C, { content: d }), c);
      };
    } });
    require_LexicalPlainTextPlugin = __commonJS({ "../../../node_modules/@lexical/react/LexicalPlainTextPlugin.js"(exports, module) {
      "use strict";
      var LexicalPlainTextPlugin = require_LexicalPlainTextPlugin_prod();
      module.exports = LexicalPlainTextPlugin;
    } });
    require_LexicalContentEditable_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalContentEditable.prod.js"(exports) {
      "use strict";
      var c = require_LexicalComposerContext(), h = (init_react(), __toCommonJS(react_exports));
      function n() {
        return n = Object.assign ? Object.assign.bind() : function(g) {
          for (var d = 1; d < arguments.length; d++) {
            var e = arguments[d], b;
            for (b in e)
              Object.prototype.hasOwnProperty.call(e, b) && (g[b] = e[b]);
          }
          return g;
        }, n.apply(this, arguments);
      }
      var p = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? h.useLayoutEffect : h.useEffect;
      exports.ContentEditable = function({ ariaActiveDescendant: g, ariaAutoComplete: d, ariaControls: e, ariaDescribedBy: b, ariaExpanded: q, ariaLabel: r, ariaLabelledBy: t, ariaMultiline: u, ariaOwns: v, ariaRequired: w, autoCapitalize: x, className: y, id: z, role: l = "textbox", spellCheck: A = true, style: B, tabIndex: C, "data-testid": D, ...E }) {
        let [f] = c.useLexicalComposerContext(), [a, m] = h.useState(false), F = h.useCallback((k) => {
          f.setRootElement(k);
        }, [f]);
        return p(() => (m(f.isEditable()), f.registerEditableListener((k) => {
          m(k);
        })), [f]), h.createElement("div", n({}, E, { "aria-activedescendant": a ? g : void 0, "aria-autocomplete": a ? d : "none", "aria-controls": a ? e : void 0, "aria-describedby": b, "aria-expanded": a && l === "combobox" ? !!q : void 0, "aria-label": r, "aria-labelledby": t, "aria-multiline": u, "aria-owns": a ? v : void 0, "aria-readonly": a ? void 0 : true, "aria-required": w, autoCapitalize: x, className: y, contentEditable: a, "data-testid": D, id: z, ref: F, role: l, spellCheck: A, style: B, tabIndex: C }));
      };
    } });
    require_LexicalContentEditable = __commonJS({ "../../../node_modules/@lexical/react/LexicalContentEditable.js"(exports, module) {
      "use strict";
      var LexicalContentEditable = require_LexicalContentEditable_prod();
      module.exports = LexicalContentEditable;
    } });
    require_LexicalHistory_prod = __commonJS({ "../../../node_modules/@lexical/history/LexicalHistory.prod.js"(exports) {
      "use strict";
      var c = require_LexicalUtils(), x = require_Lexical();
      function y(b, a, l, h, n) {
        if (b === null || l.size === 0 && h.size === 0 && !n)
          return 0;
        var f = a._selection, d = b._selection;
        if (n)
          return 1;
        if (!(x.$isRangeSelection(f) && x.$isRangeSelection(d) && d.isCollapsed() && f.isCollapsed()))
          return 0;
        n = a._nodeMap;
        let e = [];
        for (let m of l)
          l = n.get(m), l !== void 0 && e.push(l);
        for (let [m, p] of h)
          p && (h = n.get(m), h === void 0 || x.$isRootNode(h) || e.push(h));
        return e.length === 0 ? 0 : 1 < e.length ? (h = a._nodeMap, a = h.get(f.anchor.key), d = h.get(d.anchor.key), a && d && !b._nodeMap.has(a.__key) && x.$isTextNode(a) && a.__text.length === 1 && f.anchor.offset === 1 ? 2 : 0) : (a = e[0], b = b._nodeMap.get(a.__key), !x.$isTextNode(b) || !x.$isTextNode(a) || b.__mode !== a.__mode || (b = b.__text, a = a.__text, b === a) || (f = f.anchor, d = d.anchor, f.key !== d.key || f.type !== "text") ? 0 : (f = f.offset, d = d.offset, b = a.length - b.length, b === 1 && d === f - 1 ? 2 : b === -1 && d === f + 1 ? 3 : b === -1 && d === f ? 4 : 0));
      }
      function z(b, a) {
        let l = Date.now(), h = 0;
        return (n, f, d, e, m, p) => {
          let r = Date.now();
          if (p.has("historic"))
            return h = 0, l = r, 2;
          let q = y(n, f, e, m, b.isComposing()), v = (() => {
            var k = d === null || d.editor === b, g = p.has("history-push");
            if (!g && k && p.has("history-merge"))
              return 0;
            if (n === null)
              return 1;
            var t = f._selection;
            if (!(0 < e.size || 0 < m.size))
              return t !== null ? 0 : 2;
            if (g === false && q !== 0 && q === h && r < l + a && k)
              return 0;
            if (e.size === 1) {
              {
                g = Array.from(e)[0], k = n._nodeMap.get(g), g = f._nodeMap.get(g), t = n._selection;
                let u = f._selection, w = false;
                x.$isRangeSelection(t) && x.$isRangeSelection(u) && (w = t.anchor.type === "element" && t.focus.type === "element" && u.anchor.type === "text" && u.focus.type === "text"), k = !w && x.$isTextNode(k) && x.$isTextNode(g) ? k.__type === g.__type && k.__text === g.__text && k.__mode === g.__mode && k.__detail === g.__detail && k.__style === g.__style && k.__format === g.__format && k.__parent === g.__parent : false;
              }
              if (k)
                return 0;
            }
            return 1;
          })();
          return l = r, h = q, v;
        };
      }
      exports.createEmptyHistoryState = function() {
        return { current: null, redoStack: [], undoStack: [] };
      };
      exports.registerHistory = function(b, a, l) {
        let h = z(b, l);
        l = ({ editorState: d, prevEditorState: e, dirtyLeaves: m, dirtyElements: p, tags: r }) => {
          let q = a.current, v = a.redoStack, k = a.undoStack, g = q === null ? null : q.editorState;
          if (q === null || d !== g) {
            if (e = h(e, d, q, m, p, r), e === 1)
              v.length !== 0 && (a.redoStack = [], b.dispatchCommand(x.CAN_REDO_COMMAND, false)), q !== null && (k.push({ ...q }), b.dispatchCommand(x.CAN_UNDO_COMMAND, true));
            else if (e === 2)
              return;
            a.current = { editor: b, editorState: d };
          }
        };
        let n = c.mergeRegister(b.registerCommand(x.UNDO_COMMAND, () => {
          let d = a.redoStack, e = a.undoStack;
          if (e.length !== 0) {
            let m = a.current, p = e.pop();
            m !== null && (d.push(m), b.dispatchCommand(x.CAN_REDO_COMMAND, true)), e.length === 0 && b.dispatchCommand(x.CAN_UNDO_COMMAND, false), a.current = p || null, p && p.editor.setEditorState(p.editorState, { tag: "historic" });
          }
          return true;
        }, x.COMMAND_PRIORITY_EDITOR), b.registerCommand(x.REDO_COMMAND, () => {
          let d = a.redoStack;
          var e = a.undoStack;
          if (d.length !== 0) {
            let m = a.current;
            m !== null && (e.push(m), b.dispatchCommand(x.CAN_UNDO_COMMAND, true)), e = d.pop(), d.length === 0 && b.dispatchCommand(x.CAN_REDO_COMMAND, false), a.current = e || null, e && e.editor.setEditorState(e.editorState, { tag: "historic" });
          }
          return true;
        }, x.COMMAND_PRIORITY_EDITOR), b.registerCommand(x.CLEAR_EDITOR_COMMAND, () => (a.undoStack = [], a.redoStack = [], a.current = null, false), x.COMMAND_PRIORITY_EDITOR), b.registerCommand(x.CLEAR_HISTORY_COMMAND, () => (a.undoStack = [], a.redoStack = [], a.current = null, b.dispatchCommand(x.CAN_REDO_COMMAND, false), b.dispatchCommand(x.CAN_UNDO_COMMAND, false), true), x.COMMAND_PRIORITY_EDITOR), b.registerUpdateListener(l)), f = b.registerUpdateListener(l);
        return () => {
          n(), f();
        };
      };
    } });
    require_LexicalHistory = __commonJS({ "../../../node_modules/@lexical/history/LexicalHistory.js"(exports, module) {
      "use strict";
      var LexicalHistory = require_LexicalHistory_prod();
      module.exports = LexicalHistory;
    } });
    require_LexicalHistoryPlugin_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalHistoryPlugin.prod.js"(exports) {
      "use strict";
      var c = require_LexicalComposerContext(), history = require_LexicalHistory(), f = (init_react(), __toCommonJS(react_exports));
      function g(a, b, d = 1e3) {
        let e = f.useMemo(() => b || history.createEmptyHistoryState(), [b]);
        f.useEffect(() => history.registerHistory(a, e, d), [d, a, e]);
      }
      exports.createEmptyHistoryState = history.createEmptyHistoryState;
      exports.HistoryPlugin = function({ externalHistoryState: a }) {
        let [b] = c.useLexicalComposerContext();
        return g(b, a), null;
      };
    } });
    require_LexicalHistoryPlugin = __commonJS({ "../../../node_modules/@lexical/react/LexicalHistoryPlugin.js"(exports, module) {
      "use strict";
      var LexicalHistoryPlugin = require_LexicalHistoryPlugin_prod();
      module.exports = LexicalHistoryPlugin;
    } });
    require_LexicalRichText_prod = __commonJS({ "../../../node_modules/@lexical/rich-text/LexicalRichText.prod.js"(exports) {
      "use strict";
      var c = require_LexicalClipboard(), g = require_LexicalSelection(), h = require_LexicalUtils(), k = require_Lexical();
      function l(b, a) {
        return typeof document.caretRangeFromPoint < "u" ? (b = document.caretRangeFromPoint(b, a), b === null ? null : { node: b.startContainer, offset: b.startOffset }) : document.caretPositionFromPoint !== "undefined" ? (b = document.caretPositionFromPoint(b, a), b === null ? null : { node: b.offsetNode, offset: b.offset }) : null;
      }
      var n = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", p = n && "documentMode" in document ? document.documentMode : null;
      n && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      n && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
      var q = n && "InputEvent" in window && !p ? "getTargetRanges" in new window.InputEvent("input") : false, r = n && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), t = n && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, u = n && /^(?=.*Chrome).*/i.test(navigator.userAgent), v = n && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !u, w = k.createCommand("DRAG_DROP_PASTE_FILE"), x = class extends k.ElementNode {
        static getType() {
          return "quote";
        }
        static clone(b) {
          return new x(b.__key);
        }
        constructor(b) {
          super(b);
        }
        createDOM(b) {
          let a = document.createElement("blockquote");
          return h.addClassNamesToElement(a, b.theme.quote), a;
        }
        updateDOM() {
          return false;
        }
        static importDOM() {
          return { blockquote: () => ({ conversion: y, priority: 0 }) };
        }
        exportDOM(b) {
          if ({ element: b } = super.exportDOM(b), b && this.isEmpty() && b.append(document.createElement("br")), b) {
            var a = this.getFormatType();
            b.style.textAlign = a, (a = this.getDirection()) && (b.dir = a);
          }
          return { element: b };
        }
        static importJSON(b) {
          let a = z();
          return a.setFormat(b.format), a.setIndent(b.indent), a.setDirection(b.direction), a;
        }
        exportJSON() {
          return { ...super.exportJSON(), type: "quote" };
        }
        insertNewAfter(b, a) {
          b = k.$createParagraphNode();
          let d = this.getDirection();
          return b.setDirection(d), this.insertAfter(b, a), b;
        }
        collapseAtStart() {
          let b = k.$createParagraphNode();
          return this.getChildren().forEach((a) => b.append(a)), this.replace(b), true;
        }
      };
      function z() {
        return k.$applyNodeReplacement(new x());
      }
      var B = class extends k.ElementNode {
        static getType() {
          return "heading";
        }
        static clone(b) {
          return new B(b.__tag, b.__key);
        }
        constructor(b, a) {
          super(a), this.__tag = b;
        }
        getTag() {
          return this.__tag;
        }
        createDOM(b) {
          let a = this.__tag, d = document.createElement(a);
          return b = b.theme.heading, b !== void 0 && h.addClassNamesToElement(d, b[a]), d;
        }
        updateDOM() {
          return false;
        }
        static importDOM() {
          return { h1: () => ({ conversion: C, priority: 0 }), h2: () => ({ conversion: C, priority: 0 }), h3: () => ({ conversion: C, priority: 0 }), h4: () => ({ conversion: C, priority: 0 }), h5: () => ({ conversion: C, priority: 0 }), h6: () => ({ conversion: C, priority: 0 }), p: (b) => (b = b.firstChild, b !== null && D(b) ? { conversion: () => ({ node: null }), priority: 3 } : null), span: (b) => D(b) ? { conversion: () => ({ node: E("h1") }), priority: 3 } : null };
        }
        exportDOM(b) {
          if ({ element: b } = super.exportDOM(b), b && this.isEmpty() && b.append(document.createElement("br")), b) {
            var a = this.getFormatType();
            b.style.textAlign = a, (a = this.getDirection()) && (b.dir = a);
          }
          return { element: b };
        }
        static importJSON(b) {
          let a = E(b.tag);
          return a.setFormat(b.format), a.setIndent(b.indent), a.setDirection(b.direction), a;
        }
        exportJSON() {
          return { ...super.exportJSON(), tag: this.getTag(), type: "heading", version: 1 };
        }
        insertNewAfter(b, a = true) {
          b = b ? b.anchor.offset : 0, b = 0 < b && b < this.getTextContentSize() ? E(this.getTag()) : k.$createParagraphNode();
          let d = this.getDirection();
          return b.setDirection(d), this.insertAfter(b, a), b;
        }
        collapseAtStart() {
          let b = this.isEmpty() ? k.$createParagraphNode() : E(this.getTag());
          return this.getChildren().forEach((a) => b.append(a)), this.replace(b), true;
        }
        extractWithChild() {
          return true;
        }
      };
      function D(b) {
        return b.nodeName.toLowerCase() === "span" ? b.style.fontSize === "26pt" : false;
      }
      function C(b) {
        let a = b.nodeName.toLowerCase(), d = null;
        return (a === "h1" || a === "h2" || a === "h3" || a === "h4" || a === "h5" || a === "h6") && (d = E(a), b.style !== null && d.setFormat(b.style.textAlign)), { node: d };
      }
      function y(b) {
        let a = z();
        return b.style !== null && a.setFormat(b.style.textAlign), { node: a };
      }
      function E(b) {
        return k.$applyNodeReplacement(new B(b));
      }
      function F(b, a) {
        b.preventDefault(), a.update(() => {
          let d = k.$getSelection(), e = b instanceof InputEvent || b instanceof KeyboardEvent ? null : b.clipboardData;
          e != null && (k.$isRangeSelection(d) || k.DEPRECATED_$isGridSelection(d)) && c.$insertDataTransferForRichText(e, d, a);
        }, { tag: "paste" });
      }
      async function G(b, a) {
        await c.copyToClipboard(a, h.objectKlassEquals(b, ClipboardEvent) ? b : null), a.update(() => {
          let d = k.$getSelection();
          k.$isRangeSelection(d) ? d.removeText() : k.$isNodeSelection(d) && d.getNodes().forEach((e) => e.remove());
        });
      }
      function H(b) {
        let a = null;
        if (b instanceof DragEvent ? a = b.dataTransfer : b instanceof ClipboardEvent && (a = b.clipboardData), a === null)
          return [false, [], false];
        var d = a.types;
        return b = d.includes("Files"), d = d.includes("text/html") || d.includes("text/plain"), [b, Array.from(a.files), d];
      }
      function I(b) {
        var a = k.$getSelection();
        if (!k.$isRangeSelection(a))
          return false;
        let d = /* @__PURE__ */ new Set();
        a = a.getNodes();
        for (let m = 0; m < a.length; m++) {
          var e = a[m], f = e.getKey();
          d.has(f) || (e = h.$getNearestBlockElementAncestorOrThrow(e), f = e.getKey(), e.canIndent() && !d.has(f) && (d.add(f), b(e)));
        }
        return 0 < d.size;
      }
      function J(b) {
        return b = k.$getNearestNodeFromDOMNode(b), k.$isDecoratorNode(b);
      }
      exports.$createHeadingNode = E;
      exports.$createQuoteNode = z;
      exports.$isHeadingNode = function(b) {
        return b instanceof B;
      };
      exports.$isQuoteNode = function(b) {
        return b instanceof x;
      };
      exports.DRAG_DROP_PASTE = w;
      exports.HeadingNode = B;
      exports.QuoteNode = x;
      exports.eventFiles = H;
      exports.registerRichText = function(b) {
        return h.mergeRegister(b.registerCommand(k.CLICK_COMMAND, () => {
          let a = k.$getSelection();
          return k.$isNodeSelection(a) ? (a.clear(), true) : false;
        }, 0), b.registerCommand(k.DELETE_CHARACTER_COMMAND, (a) => {
          let d = k.$getSelection();
          return k.$isRangeSelection(d) ? (d.deleteCharacter(a), true) : false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.DELETE_WORD_COMMAND, (a) => {
          let d = k.$getSelection();
          return k.$isRangeSelection(d) ? (d.deleteWord(a), true) : false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.DELETE_LINE_COMMAND, (a) => {
          let d = k.$getSelection();
          return k.$isRangeSelection(d) ? (d.deleteLine(a), true) : false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.CONTROLLED_TEXT_INSERTION_COMMAND, (a) => {
          let d = k.$getSelection();
          if (typeof a == "string")
            k.$isRangeSelection(d) ? d.insertText(a) : k.DEPRECATED_$isGridSelection(d);
          else {
            if (!k.$isRangeSelection(d) && !k.DEPRECATED_$isGridSelection(d))
              return false;
            let e = a.dataTransfer;
            e != null ? c.$insertDataTransferForRichText(e, d, b) : k.$isRangeSelection(d) && (a = a.data) && d.insertText(a);
          }
          return true;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.REMOVE_TEXT_COMMAND, () => {
          let a = k.$getSelection();
          return k.$isRangeSelection(a) ? (a.removeText(), true) : false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.FORMAT_TEXT_COMMAND, (a) => {
          let d = k.$getSelection();
          return k.$isRangeSelection(d) ? (d.formatText(a), true) : false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.FORMAT_ELEMENT_COMMAND, (a) => {
          var d = k.$getSelection();
          if (!k.$isRangeSelection(d) && !k.$isNodeSelection(d))
            return false;
          d = d.getNodes();
          for (let e of d)
            d = h.$findMatchingParent(e, (f) => k.$isElementNode(f) && !f.isInline()), d !== null && d.setFormat(a);
          return true;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.INSERT_LINE_BREAK_COMMAND, (a) => {
          let d = k.$getSelection();
          return k.$isRangeSelection(d) ? (d.insertLineBreak(a), true) : false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.INSERT_PARAGRAPH_COMMAND, () => {
          let a = k.$getSelection();
          return k.$isRangeSelection(a) ? (a.insertParagraph(), true) : false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.INSERT_TAB_COMMAND, () => (k.$insertNodes([k.$createTabNode()]), true), k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.INDENT_CONTENT_COMMAND, () => I((a) => {
          let d = a.getIndent();
          a.setIndent(d + 1);
        }), k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.OUTDENT_CONTENT_COMMAND, () => I((a) => {
          let d = a.getIndent();
          0 < d && a.setIndent(d - 1);
        }), k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.KEY_ARROW_UP_COMMAND, (a) => {
          var d = k.$getSelection();
          if (k.$isNodeSelection(d) && !J(a.target)) {
            if (a = d.getNodes(), 0 < a.length)
              return a[0].selectPrevious(), true;
          } else if (k.$isRangeSelection(d) && (d = k.$getAdjacentNode(d.focus, true), !a.shiftKey && k.$isDecoratorNode(d) && !d.isIsolated() && !d.isInline()))
            return d.selectPrevious(), a.preventDefault(), true;
          return false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.KEY_ARROW_DOWN_COMMAND, (a) => {
          var d = k.$getSelection();
          if (k.$isNodeSelection(d)) {
            if (a = d.getNodes(), 0 < a.length)
              return a[0].selectNext(0, 0), true;
          } else if (k.$isRangeSelection(d)) {
            let e = d.focus;
            if (e.key === "root" && e.offset === k.$getRoot().getChildrenSize())
              return a.preventDefault(), true;
            if (d = k.$getAdjacentNode(d.focus, false), !a.shiftKey && k.$isDecoratorNode(d) && !d.isIsolated() && !d.isInline())
              return d.selectNext(), a.preventDefault(), true;
          }
          return false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.KEY_ARROW_LEFT_COMMAND, (a) => {
          let d = k.$getSelection();
          if (k.$isNodeSelection(d)) {
            var e = d.getNodes();
            if (0 < e.length)
              return a.preventDefault(), e[0].selectPrevious(), true;
          }
          return k.$isRangeSelection(d) && g.$shouldOverrideDefaultCharacterSelection(d, true) ? (e = a.shiftKey, a.preventDefault(), g.$moveCharacter(d, e, true), true) : false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.KEY_ARROW_RIGHT_COMMAND, (a) => {
          let d = k.$getSelection();
          if (k.$isNodeSelection(d) && !J(a.target)) {
            var e = d.getNodes();
            if (0 < e.length)
              return a.preventDefault(), e[0].selectNext(0, 0), true;
          }
          return k.$isRangeSelection(d) ? (e = a.shiftKey, g.$shouldOverrideDefaultCharacterSelection(d, false) ? (a.preventDefault(), g.$moveCharacter(d, e, false), true) : false) : false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.KEY_BACKSPACE_COMMAND, (a) => {
          if (J(a.target))
            return false;
          let d = k.$getSelection();
          if (!k.$isRangeSelection(d))
            return false;
          a.preventDefault(), { anchor: a } = d;
          let e = a.getNode();
          return d.isCollapsed() && a.offset === 0 && !k.$isRootNode(e) && 0 < h.$getNearestBlockElementAncestorOrThrow(e).getIndent() ? b.dispatchCommand(k.OUTDENT_CONTENT_COMMAND, void 0) : b.dispatchCommand(k.DELETE_CHARACTER_COMMAND, true);
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.KEY_DELETE_COMMAND, (a) => {
          if (J(a.target))
            return false;
          let d = k.$getSelection();
          return k.$isRangeSelection(d) ? (a.preventDefault(), b.dispatchCommand(k.DELETE_CHARACTER_COMMAND, false)) : false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.KEY_ENTER_COMMAND, (a) => {
          let d = k.$getSelection();
          if (!k.$isRangeSelection(d))
            return false;
          if (a !== null) {
            if ((t || r || v) && q)
              return false;
            if (a.preventDefault(), a.shiftKey)
              return b.dispatchCommand(k.INSERT_LINE_BREAK_COMMAND, false);
          }
          return b.dispatchCommand(k.INSERT_PARAGRAPH_COMMAND, void 0);
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.KEY_ESCAPE_COMMAND, () => {
          let a = k.$getSelection();
          return k.$isRangeSelection(a) ? (b.blur(), true) : false;
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.DROP_COMMAND, (a) => {
          let [, d] = H(a);
          if (0 < d.length) {
            var e = l(a.clientX, a.clientY);
            if (e !== null) {
              let { offset: m, node: K } = e;
              var f = k.$getNearestNodeFromDOMNode(K);
              if (f !== null) {
                if (e = k.$createRangeSelection(), k.$isTextNode(f))
                  e.anchor.set(f.getKey(), m, "text"), e.focus.set(f.getKey(), m, "text");
                else {
                  let A = f.getParentOrThrow().getKey();
                  f = f.getIndexWithinParent() + 1, e.anchor.set(A, f, "element"), e.focus.set(A, f, "element");
                }
                e = k.$normalizeSelection__EXPERIMENTAL(e), k.$setSelection(e);
              }
              b.dispatchCommand(w, d);
            }
            return a.preventDefault(), true;
          }
          return a = k.$getSelection(), !!k.$isRangeSelection(a);
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.DRAGSTART_COMMAND, (a) => {
          [a] = H(a);
          let d = k.$getSelection();
          return !(a && !k.$isRangeSelection(d));
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.DRAGOVER_COMMAND, (a) => {
          var [d] = H(a);
          let e = k.$getSelection();
          return d && !k.$isRangeSelection(e) ? false : (d = l(a.clientX, a.clientY), d !== null && (d = k.$getNearestNodeFromDOMNode(d.node), k.$isDecoratorNode(d) && a.preventDefault()), true);
        }, k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.SELECT_ALL_COMMAND, () => (k.$selectAll(), true), k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.COPY_COMMAND, (a) => (c.copyToClipboard(b, h.objectKlassEquals(a, ClipboardEvent) ? a : null), true), k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.CUT_COMMAND, (a) => (G(a, b), true), k.COMMAND_PRIORITY_EDITOR), b.registerCommand(k.PASTE_COMMAND, (a) => {
          let [, d, e] = H(a);
          if (0 < d.length && !e)
            return b.dispatchCommand(w, d), true;
          if (k.isSelectionCapturedInDecoratorInput(a.target))
            return false;
          let f = k.$getSelection();
          return k.$isRangeSelection(f) || k.DEPRECATED_$isGridSelection(f) ? (F(a, b), true) : false;
        }, k.COMMAND_PRIORITY_EDITOR));
      };
    } });
    require_LexicalRichText = __commonJS({ "../../../node_modules/@lexical/rich-text/LexicalRichText.js"(exports, module) {
      "use strict";
      var LexicalRichText = require_LexicalRichText_prod();
      module.exports = LexicalRichText;
    } });
    require_LexicalRichTextPlugin_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalRichTextPlugin.prod.js"(exports) {
      "use strict";
      var b = require_LexicalComposerContext(), g = require_useLexicalEditable(), l = (init_react(), __toCommonJS(react_exports)), m = require_LexicalText(), n = require_LexicalUtils(), p = (init_react_dom(), __toCommonJS(react_dom_exports)), t = require_LexicalDragon(), u = require_LexicalRichText(), v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? l.useLayoutEffect : l.useEffect;
      function w(a) {
        return a.getEditorState().read(m.$canShowPlaceholderCurry(a.isComposing()));
      }
      function x(a) {
        let [d, c] = l.useState(() => w(a));
        return v(() => {
          function e() {
            let f = w(a);
            c(f);
          }
          return e(), n.mergeRegister(a.registerUpdateListener(() => {
            e();
          }), a.registerEditableListener(() => {
            e();
          }));
        }, [a]), d;
      }
      function y(a, d) {
        let [c, e] = l.useState(() => a.getDecorators());
        return v(() => a.registerDecoratorListener((f) => {
          p.flushSync(() => {
            e(f);
          });
        }), [a]), l.useEffect(() => {
          e(a.getDecorators());
        }, [a]), l.useMemo(() => {
          let f = [], q = Object.keys(c);
          for (let h = 0; h < q.length; h++) {
            let k = q[h], A = l.createElement(d, { onError: (z) => a._onError(z) }, l.createElement(l.Suspense, { fallback: null }, c[k])), r = a.getElementByKey(k);
            r !== null && f.push(p.createPortal(A, r, k));
          }
          return f;
        }, [d, c, a]);
      }
      function B(a) {
        v(() => n.mergeRegister(u.registerRichText(a), t.registerDragonSupport(a)), [a]);
      }
      function C({ content: a }) {
        var [d] = b.useLexicalComposerContext();
        d = x(d);
        let c = g();
        return d ? typeof a == "function" ? a(c) : a : null;
      }
      exports.RichTextPlugin = function({ contentEditable: a, placeholder: d, ErrorBoundary: c }) {
        let [e] = b.useLexicalComposerContext();
        return c = y(e, c), B(e), l.createElement(l.Fragment, null, a, l.createElement(C, { content: d }), c);
      };
    } });
    require_LexicalRichTextPlugin = __commonJS({ "../../../node_modules/@lexical/react/LexicalRichTextPlugin.js"(exports, module) {
      "use strict";
      var LexicalRichTextPlugin = require_LexicalRichTextPlugin_prod();
      module.exports = LexicalRichTextPlugin;
    } });
    require_LexicalOnChangePlugin_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalOnChangePlugin.prod.js"(exports) {
      "use strict";
      var c = require_LexicalComposerContext(), g = (init_react(), __toCommonJS(react_exports)), h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? g.useLayoutEffect : g.useEffect;
      exports.OnChangePlugin = function({ ignoreHistoryMergeTagChange: d = true, ignoreSelectionChange: e = false, onChange: a }) {
        let [b] = c.useLexicalComposerContext();
        return h(() => {
          if (a)
            return b.registerUpdateListener(({ editorState: k, dirtyElements: l, dirtyLeaves: m, prevEditorState: n, tags: f }) => {
              e && l.size === 0 && m.size === 0 || d && f.has("history-merge") || n.isEmpty() || a(k, b, f);
            });
        }, [b, d, e, a]), null;
      };
    } });
    require_LexicalOnChangePlugin = __commonJS({ "../../../node_modules/@lexical/react/LexicalOnChangePlugin.js"(exports, module) {
      "use strict";
      var LexicalOnChangePlugin = require_LexicalOnChangePlugin_prod();
      module.exports = LexicalOnChangePlugin;
    } });
    require_LexicalList_prod = __commonJS({ "../../../node_modules/@lexical/list/LexicalList.prod.js"(exports) {
      "use strict";
      var h = require_Lexical(), k = require_LexicalUtils();
      function m(a) {
        let b = new URLSearchParams();
        b.append("code", a);
        for (let c = 1; c < arguments.length; c++)
          b.append("v", arguments[c]);
        throw Error(`Minified Lexical error #${a}; visit https://lexical.dev/docs/error?${b} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
      }
      function n(a) {
        let b = 1;
        for (a = a.getParent(); a != null; ) {
          if (p(a)) {
            if (a = a.getParent(), q(a)) {
              b++, a = a.getParent();
              continue;
            }
            m(40);
          }
          break;
        }
        return b;
      }
      function r(a) {
        a = a.getParent(), q(a) || m(40);
        let b = a;
        for (; b !== null; )
          b = b.getParent(), q(b) && (a = b);
        return a;
      }
      function t(a) {
        let b = [];
        a = a.getChildren().filter(p);
        for (let c = 0; c < a.length; c++) {
          let d = a[c], e = d.getFirstChild();
          q(e) ? b = b.concat(t(e)) : b.push(d);
        }
        return b;
      }
      function u(a) {
        return p(a) && q(a.getFirstChild());
      }
      function v(a) {
        for (; a.getNextSibling() == null && a.getPreviousSibling() == null; ) {
          let b = a.getParent();
          if (b == null || !p(a) && !q(a))
            break;
          a = b;
        }
        a.remove();
      }
      function w(a) {
        return y().append(a);
      }
      function z(a, b) {
        return p(a) && (b.length === 0 || b.length === 1 && a.is(b[0]) && a.getChildrenSize() === 0);
      }
      function B(a, b) {
        a.splice(a.getChildrenSize(), 0, b);
      }
      function C(a, b) {
        if (q(a))
          return a;
        let c = a.getPreviousSibling(), d = a.getNextSibling(), e = y();
        return e.setFormat(a.getFormatType()), e.setIndent(a.getIndent()), B(e, a.getChildren()), q(c) && b === c.getListType() ? (c.append(e), a.remove(), q(d) && b === d.getListType() && (B(c, d.getChildren()), d.remove()), c) : q(d) && b === d.getListType() ? (d.getFirstChildOrThrow().insertBefore(e), a.remove(), d) : (b = D(b), b.append(e), a.replace(b), E(b), b);
      }
      function F(a, b) {
        var c = a.getLastChild();
        let d = b.getFirstChild();
        c && d && u(c) && u(d) && (F(c.getFirstChild(), d.getFirstChild()), d.remove()), c = b.getChildren(), 0 < c.length && (a.append(...c), E(a)), b.remove();
      }
      function E(a, b) {
        if (a = b || a.getChildren(), a !== void 0)
          for (b = 0; b < a.length; b++) {
            let f = a[b];
            if (p(f)) {
              let g = f.getValue();
              var c = f, d = c.getParent(), e = 1;
              for (d != null && (q(d) ? e = d.getStart() : m(44)), c = c.getPreviousSiblings(), d = 0; d < c.length; d++) {
                let l = c[d];
                p(l) && !q(l.getFirstChild()) && e++;
              }
              g !== e && f.setValue(e);
            }
          }
      }
      function G(a) {
        if (!u(a)) {
          var b = a.getParent(), c = b ? b.getParent() : void 0, d = c ? c.getParent() : void 0;
          if (q(d) && p(c) && q(b)) {
            var e = b ? b.getFirstChild() : void 0, f = b ? b.getLastChild() : void 0;
            if (a.is(e))
              c.insertBefore(a), b.isEmpty() && c.remove();
            else if (a.is(f))
              c.insertAfter(a), b.isEmpty() && c.remove();
            else {
              var g = b.getListType();
              e = y();
              let l = D(g);
              e.append(l), a.getPreviousSiblings().forEach((x) => l.append(x)), f = y(), g = D(g), f.append(g), B(g, a.getNextSiblings()), c.insertBefore(e), c.insertAfter(f), c.replace(a);
            }
            E(b), E(d);
          }
        }
      }
      var H = class extends h.ElementNode {
        static getType() {
          return "listitem";
        }
        static clone(a) {
          return new H(a.__value, a.__checked, a.__key);
        }
        constructor(a, b, c) {
          super(c), this.__value = a === void 0 ? 1 : a, this.__checked = b;
        }
        createDOM(a) {
          let b = document.createElement("li"), c = this.getParent();
          return q(c) && c.getListType() === "check" && I(b, this, null), b.value = this.__value, J(b, a.theme, this), b;
        }
        updateDOM(a, b, c) {
          let d = this.getParent();
          return q(d) && d.getListType() === "check" && I(b, this, a), b.value = this.__value, J(b, c.theme, this), false;
        }
        static transform() {
          return (a) => {
            let b = a.getParent();
            q(b) && (E(b), b.getListType() !== "check" && a.getChecked() != null && a.setChecked(void 0));
          };
        }
        static importDOM() {
          return { li: () => ({ conversion: K, priority: 0 }) };
        }
        static importJSON(a) {
          let b = y();
          return b.setChecked(a.checked), b.setValue(a.value), b.setFormat(a.format), b.setDirection(a.direction), b;
        }
        exportJSON() {
          return { ...super.exportJSON(), checked: this.getChecked(), type: "listitem", value: this.getValue(), version: 1 };
        }
        append(...a) {
          for (let b = 0; b < a.length; b++) {
            let c = a[b];
            if (h.$isElementNode(c) && this.canMergeWith(c)) {
              let d = c.getChildren();
              this.append(...d), c.remove();
            } else
              super.append(c);
          }
          return this;
        }
        replace(a, b) {
          if (p(a))
            return super.replace(a);
          this.setIndent(0);
          let c = this.getParentOrThrow();
          if (!q(c))
            return a;
          if (c.__first === this.getKey())
            c.insertBefore(a);
          else if (c.__last === this.getKey())
            c.insertAfter(a);
          else {
            let d = D(c.getListType()), e = this.getNextSibling();
            for (; e; ) {
              let f = e;
              e = e.getNextSibling(), d.append(f);
            }
            c.insertAfter(a), a.insertAfter(d);
          }
          return b && this.getChildren().forEach((d) => {
            a.append(d);
          }), this.remove(), c.getChildrenSize() === 0 && c.remove(), a;
        }
        insertAfter(a, b = true) {
          var c = this.getParentOrThrow();
          q(c) || m(39);
          var d = this.getNextSiblings();
          if (p(a))
            return b = super.insertAfter(a, b), a = a.getParentOrThrow(), q(a) && E(a), b;
          if (q(a)) {
            for (c = a, a = a.getChildren(), d = a.length - 1; 0 <= d; d--)
              c = a[d], this.insertAfter(c, b);
            return c;
          }
          if (c.insertAfter(a, b), d.length !== 0) {
            let e = D(c.getListType());
            d.forEach((f) => e.append(f)), a.insertAfter(e, b);
          }
          return a;
        }
        remove(a) {
          let b = this.getPreviousSibling(), c = this.getNextSibling();
          super.remove(a), b && c && u(b) && u(c) ? (F(b.getFirstChild(), c.getFirstChild()), c.remove()) : c && (a = c.getParent(), q(a) && E(a));
        }
        insertNewAfter(a, b = true) {
          return a = y(this.__checked == null ? void 0 : false), this.insertAfter(a, b), a;
        }
        collapseAtStart(a) {
          let b = h.$createParagraphNode();
          this.getChildren().forEach((f) => b.append(f));
          var c = this.getParentOrThrow(), d = c.getParentOrThrow();
          let e = p(d);
          return c.getChildrenSize() === 1 ? e ? (c.remove(), d.select()) : (c.insertBefore(b), c.remove(), c = a.anchor, a = a.focus, d = b.getKey(), c.type === "element" && c.getNode().is(this) && c.set(d, c.offset, "element"), a.type === "element" && a.getNode().is(this) && a.set(d, a.offset, "element")) : (c.insertBefore(b), this.remove()), true;
        }
        getValue() {
          return this.getLatest().__value;
        }
        setValue(a) {
          this.getWritable().__value = a;
        }
        getChecked() {
          return this.getLatest().__checked;
        }
        setChecked(a) {
          this.getWritable().__checked = a;
        }
        toggleChecked() {
          this.setChecked(!this.__checked);
        }
        getIndent() {
          var a = this.getParent();
          if (a === null)
            return this.getLatest().__indent;
          a = a.getParentOrThrow();
          let b = 0;
          for (; p(a); )
            a = a.getParentOrThrow().getParentOrThrow(), b++;
          return b;
        }
        setIndent(a) {
          typeof a == "number" && -1 < a || m(117);
          let b = this.getIndent();
          for (; b !== a; )
            if (b < a) {
              a: {
                var c = /* @__PURE__ */ new Set();
                if (u(this) || c.has(this.getKey()))
                  break a;
                let g = this.getParent();
                var d = this.getNextSibling(), e = this.getPreviousSibling();
                if (u(d) && u(e)) {
                  if (e = e.getFirstChild(), q(e)) {
                    e.append(this);
                    var f = d.getFirstChild();
                    q(f) && (f = f.getChildren(), B(e, f), d.remove(), c.add(d.getKey())), E(e);
                  }
                } else
                  u(d) ? (d = d.getFirstChild(), q(d) && (c = d.getFirstChild(), c !== null && c.insertBefore(this), E(d))) : u(e) ? (d = e.getFirstChild(), q(d) && (d.append(this), E(d))) : q(g) && (c = y(), f = D(g.getListType()), c.append(f), f.append(this), e ? e.insertAfter(c) : d ? d.insertBefore(c) : g.append(c), E(f));
                q(g) && E(g);
              }
              b++;
            } else
              G(this), b--;
          return this;
        }
        insertBefore(a) {
          if (p(a)) {
            let b = this.getParentOrThrow();
            if (q(b)) {
              let c = this.getNextSiblings();
              E(b, c);
            }
          }
          return super.insertBefore(a);
        }
        canInsertAfter(a) {
          return p(a);
        }
        canReplaceWith(a) {
          return p(a);
        }
        canMergeWith(a) {
          return h.$isParagraphNode(a) || p(a);
        }
        extractWithChild(a, b) {
          if (!h.$isRangeSelection(b))
            return false;
          a = b.anchor.getNode();
          let c = b.focus.getNode();
          return this.isParentOf(a) && this.isParentOf(c) && this.getTextContent().length === b.getTextContent().length;
        }
        isParentRequired() {
          return true;
        }
        createParentElementNode() {
          return D("bullet");
        }
      };
      function J(a, b, c) {
        let d = [], e = [];
        var f = (b = b.list) ? b.listitem : void 0;
        if (b && b.nested)
          var g = b.nested.listitem;
        if (f !== void 0 && (f = f.split(" "), d.push(...f)), b) {
          f = c.getParent(), f = q(f) && f.getListType() === "check";
          let l = c.getChecked();
          f && !l || e.push(b.listitemUnchecked), f && l || e.push(b.listitemChecked), f && d.push(l ? b.listitemChecked : b.listitemUnchecked);
        }
        g !== void 0 && (g = g.split(" "), c.getChildren().some((l) => q(l)) ? d.push(...g) : e.push(...g)), 0 < e.length && k.removeClassNamesFromElement(a, ...e), 0 < d.length && k.addClassNamesToElement(a, ...d);
      }
      function I(a, b, c) {
        q(b.getFirstChild()) ? (a.removeAttribute("role"), a.removeAttribute("tabIndex"), a.removeAttribute("aria-checked")) : (a.setAttribute("role", "checkbox"), a.setAttribute("tabIndex", "-1"), c && b.__checked === c.__checked || a.setAttribute("aria-checked", b.getChecked() ? "true" : "false"));
      }
      function K(a) {
        return a = k.isHTMLElement(a) && a.getAttribute("aria-checked") === "true", { node: y(a) };
      }
      function y(a) {
        return h.$applyNodeReplacement(new H(void 0, a));
      }
      function p(a) {
        return a instanceof H;
      }
      var L = class extends h.ElementNode {
        static getType() {
          return "list";
        }
        static clone(a) {
          return new L(a.__listType || N[a.__tag], a.__start, a.__key);
        }
        constructor(a, b, c) {
          super(c), this.__listType = a = N[a] || a, this.__tag = a === "number" ? "ol" : "ul", this.__start = b;
        }
        getTag() {
          return this.__tag;
        }
        setListType(a) {
          let b = this.getWritable();
          b.__listType = a, b.__tag = a === "number" ? "ol" : "ul";
        }
        getListType() {
          return this.__listType;
        }
        getStart() {
          return this.__start;
        }
        createDOM(a) {
          let b = document.createElement(this.__tag);
          return this.__start !== 1 && b.setAttribute("start", String(this.__start)), b.__lexicalListType = this.__listType, O(b, a.theme, this), b;
        }
        updateDOM(a, b, c) {
          return a.__tag !== this.__tag ? true : (O(b, c.theme, this), false);
        }
        static importDOM() {
          return { ol: () => ({ conversion: P, priority: 0 }), ul: () => ({ conversion: P, priority: 0 }) };
        }
        static importJSON(a) {
          let b = D(a.listType, a.start);
          return b.setFormat(a.format), b.setIndent(a.indent), b.setDirection(a.direction), b;
        }
        exportDOM(a) {
          return { element: a } = super.exportDOM(a), a && (this.__start !== 1 && a.setAttribute("start", String(this.__start)), this.__listType === "check" && a.setAttribute("__lexicalListType", "check")), { element: a };
        }
        exportJSON() {
          return { ...super.exportJSON(), listType: this.getListType(), start: this.getStart(), tag: this.getTag(), type: "list", version: 1 };
        }
        canBeEmpty() {
          return false;
        }
        canIndent() {
          return false;
        }
        append(...a) {
          for (let c = 0; c < a.length; c++) {
            var b = a[c];
            if (p(b))
              super.append(b);
            else {
              let d = y();
              q(b) || h.$isElementNode(b) && (b = h.$createTextNode(b.getTextContent())), d.append(b), super.append(d);
            }
          }
          return E(this), this;
        }
        extractWithChild(a) {
          return p(a);
        }
      };
      function O(a, b, c) {
        let d = [], e = [];
        var f = b.list;
        if (f !== void 0) {
          let l = f[`${c.__tag}Depth`] || [];
          b = n(c) - 1;
          let x = b % l.length;
          var g = l[x];
          let M = f[c.__tag], A;
          if (f = f.nested, f !== void 0 && f.list && (A = f.list), M !== void 0 && d.push(M), g !== void 0)
            for (g = g.split(" "), d.push(...g), g = 0; g < l.length; g++)
              g !== x && e.push(c.__tag + g);
          A !== void 0 && (c = A.split(" "), 1 < b ? d.push(...c) : e.push(...c));
        }
        0 < e.length && k.removeClassNamesFromElement(a, ...e), 0 < d.length && k.addClassNamesToElement(a, ...d);
      }
      function Q(a) {
        let b = [];
        for (let d = 0; d < a.length; d++) {
          var c = a[d];
          p(c) ? (b.push(c), c = c.getChildren(), 1 < c.length && c.forEach((e) => {
            q(e) && b.push(w(e));
          })) : b.push(w(c));
        }
        return b;
      }
      function P(a) {
        let b = a.nodeName.toLowerCase(), c = null;
        return b === "ol" ? c = D("number", a.start) : b === "ul" && (c = k.isHTMLElement(a) && a.getAttribute("__lexicallisttype") === "check" ? D("check") : D("bullet")), { after: Q, node: c };
      }
      var N = { ol: "number", ul: "bullet" };
      function D(a, b = 1) {
        return h.$applyNodeReplacement(new L(a, b));
      }
      function q(a) {
        return a instanceof L;
      }
      var R = h.createCommand("INSERT_UNORDERED_LIST_COMMAND"), S = h.createCommand("INSERT_ORDERED_LIST_COMMAND"), T = h.createCommand("INSERT_CHECK_LIST_COMMAND"), U = h.createCommand("REMOVE_LIST_COMMAND");
      exports.$createListItemNode = y;
      exports.$createListNode = D;
      exports.$getListDepth = n;
      exports.$handleListInsertParagraph = function() {
        var a = h.$getSelection();
        if (!h.$isRangeSelection(a) || !a.isCollapsed() || (a = a.anchor.getNode(), !p(a) || a.getTextContent() !== ""))
          return false;
        var b = r(a), c = a.getParent();
        q(c) || m(40);
        let d = c.getParent(), e;
        if (h.$isRootOrShadowRoot(d))
          e = h.$createParagraphNode(), b.insertAfter(e);
        else if (p(d))
          e = y(), d.insertAfter(e);
        else
          return false;
        if (e.select(), b = a.getNextSiblings(), 0 < b.length) {
          let f = D(c.getListType());
          h.$isParagraphNode(e) ? e.insertAfter(f) : (c = y(), c.append(f), e.insertAfter(c)), b.forEach((g) => {
            g.remove(), f.append(g);
          });
        }
        return v(a), true;
      };
      exports.$isListItemNode = p;
      exports.$isListNode = q;
      exports.INSERT_CHECK_LIST_COMMAND = T;
      exports.INSERT_ORDERED_LIST_COMMAND = S;
      exports.INSERT_UNORDERED_LIST_COMMAND = R;
      exports.ListItemNode = H;
      exports.ListNode = L;
      exports.REMOVE_LIST_COMMAND = U;
      exports.insertList = function(a, b) {
        a.update(() => {
          var c = h.$getSelection();
          if (h.$isRangeSelection(c) || h.DEPRECATED_$isGridSelection(c)) {
            var d = c.getNodes();
            c = c.anchor.getNode();
            var e = c.getParent();
            if (z(c, d))
              d = D(b), h.$isRootOrShadowRoot(e) ? (c.replace(d), e = y(), h.$isElementNode(c) && (e.setFormat(c.getFormatType()), e.setIndent(c.getIndent())), d.append(e)) : p(c) && (c = c.getParentOrThrow(), B(d, c.getChildren()), c.replace(d));
            else
              for (c = /* @__PURE__ */ new Set(), e = 0; e < d.length; e++) {
                var f = d[e];
                if (h.$isElementNode(f) && f.isEmpty() && !c.has(f.getKey()))
                  C(f, b);
                else if (h.$isLeafNode(f))
                  for (f = f.getParent(); f != null; ) {
                    let l = f.getKey();
                    if (q(f)) {
                      if (!c.has(l)) {
                        var g = D(b);
                        B(g, f.getChildren()), f.replace(g), E(g), c.add(l);
                      }
                      break;
                    } else {
                      if (g = f.getParent(), h.$isRootOrShadowRoot(g) && !c.has(l)) {
                        c.add(l), C(f, b);
                        break;
                      }
                      f = g;
                    }
                  }
              }
          }
        });
      };
      exports.removeList = function(a) {
        a.update(() => {
          let b = h.$getSelection();
          if (h.$isRangeSelection(b)) {
            var c = /* @__PURE__ */ new Set(), d = b.getNodes(), e = b.anchor.getNode();
            if (z(e, d))
              c.add(r(e));
            else
              for (e = 0; e < d.length; e++) {
                var f = d[e];
                h.$isLeafNode(f) && (f = k.$getNearestNodeOfType(f, H), f != null && c.add(r(f)));
              }
            for (let g of c) {
              c = g, d = t(g);
              for (let l of d)
                d = h.$createParagraphNode(), B(d, l.getChildren()), c.insertAfter(d), c = d, l.__key === b.anchor.key && b.anchor.set(d.getKey(), 0, "element"), l.__key === b.focus.key && b.focus.set(d.getKey(), 0, "element"), l.remove();
              g.remove();
            }
          }
        });
      };
    } });
    require_LexicalList = __commonJS({ "../../../node_modules/@lexical/list/LexicalList.js"(exports, module) {
      "use strict";
      var LexicalList = require_LexicalList_prod();
      module.exports = LexicalList;
    } });
    require_LexicalListPlugin_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalListPlugin.prod.js"(exports) {
      "use strict";
      var b = require_LexicalList(), c = require_LexicalComposerContext(), d = (init_react(), __toCommonJS(react_exports)), e = require_LexicalUtils(), f = require_Lexical();
      function g(a) {
        d.useEffect(() => e.mergeRegister(a.registerCommand(b.INSERT_ORDERED_LIST_COMMAND, () => (b.insertList(a, "number"), true), f.COMMAND_PRIORITY_LOW), a.registerCommand(b.INSERT_UNORDERED_LIST_COMMAND, () => (b.insertList(a, "bullet"), true), f.COMMAND_PRIORITY_LOW), a.registerCommand(b.REMOVE_LIST_COMMAND, () => (b.removeList(a), true), f.COMMAND_PRIORITY_LOW), a.registerCommand(f.INSERT_PARAGRAPH_COMMAND, () => !!b.$handleListInsertParagraph(), f.COMMAND_PRIORITY_LOW)), [a]);
      }
      exports.ListPlugin = function() {
        let [a] = c.useLexicalComposerContext();
        return d.useEffect(() => {
          if (!a.hasNodes([b.ListNode, b.ListItemNode]))
            throw Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
        }, [a]), g(a), null;
      };
    } });
    require_LexicalListPlugin = __commonJS({ "../../../node_modules/@lexical/react/LexicalListPlugin.js"(exports, module) {
      "use strict";
      var LexicalListPlugin = require_LexicalListPlugin_prod();
      module.exports = LexicalListPlugin;
    } });
    require_LexicalCheckListPlugin_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalCheckListPlugin.prod.js"(exports) {
      "use strict";
      var e = require_LexicalList(), g = require_LexicalComposerContext(), k = require_LexicalUtils(), l = require_Lexical(), m = (init_react(), __toCommonJS(react_exports));
      function n(a, c) {
        let b = a.target;
        if (b !== null && k.isHTMLElement(b)) {
          var d = b.firstChild;
          (d == null || !k.isHTMLElement(d) || d.tagName !== "UL" && d.tagName !== "OL") && (d = b.parentNode) && d.__lexicalListType === "check" && (a = a.pageX, d = b.getBoundingClientRect(), (b.dir === "rtl" ? a < d.right && a > d.right - 20 : a > d.left && a < d.left + 20) && c());
        }
      }
      function p(a) {
        n(a, () => {
          let c = a.target, b = q(c);
          b != null && b.isEditable() && b.update(() => {
            if (a.target) {
              let d = l.$getNearestNodeFromDOMNode(c);
              e.$isListItemNode(d) && (c.focus(), d.toggleChecked());
            }
          });
        });
      }
      function r(a) {
        n(a, () => {
          a.preventDefault();
        });
      }
      function q(a) {
        for (; a; ) {
          if (a.__lexicalEditor)
            return a.__lexicalEditor;
          a = a.parentNode;
        }
        return null;
      }
      function t() {
        let a = document.activeElement;
        return a != null && a.tagName === "LI" && a.parentNode != null && a.parentNode.__lexicalListType === "check" ? a : null;
      }
      function u(a, c) {
        let b = c ? a.getPreviousSibling() : a.getNextSibling();
        for (; b == null && e.$isListItemNode(a); )
          a = a.getParentOrThrow().getParent(), a != null && (b = c ? a.getPreviousSibling() : a.getNextSibling());
        for (; e.$isListItemNode(b); ) {
          if (a = c ? b.getLastChild() : b.getFirstChild(), !e.$isListNode(a))
            return b;
          b = c ? a.getLastChild() : a.getFirstChild();
        }
        return null;
      }
      function v(a, c, b) {
        let d = t();
        return d != null && c.update(() => {
          var f = l.$getNearestNodeFromDOMNode(d);
          if (e.$isListItemNode(f) && (f = u(f, b), f != null)) {
            f.selectStart();
            let h = c.getElementByKey(f.__key);
            h != null && (a.preventDefault(), setTimeout(() => {
              h.focus();
            }, 0));
          }
        }), false;
      }
      exports.CheckListPlugin = function() {
        let [a] = g.useLexicalComposerContext();
        return m.useEffect(() => k.mergeRegister(a.registerCommand(e.INSERT_CHECK_LIST_COMMAND, () => (e.insertList(a, "check"), true), l.COMMAND_PRIORITY_LOW), a.registerCommand(l.KEY_ARROW_DOWN_COMMAND, (c) => v(c, a, false), l.COMMAND_PRIORITY_LOW), a.registerCommand(l.KEY_ARROW_UP_COMMAND, (c) => v(c, a, true), l.COMMAND_PRIORITY_LOW), a.registerCommand(l.KEY_ESCAPE_COMMAND, () => {
          if (t() != null) {
            let c = a.getRootElement();
            return c == null ? void 0 : c.focus(), true;
          }
          return false;
        }, l.COMMAND_PRIORITY_LOW), a.registerCommand(l.KEY_SPACE_COMMAND, (c) => {
          let b = t();
          return b != null && a.isEditable() ? (a.update(() => {
            let d = l.$getNearestNodeFromDOMNode(b);
            e.$isListItemNode(d) && (c.preventDefault(), d.toggleChecked());
          }), true) : false;
        }, l.COMMAND_PRIORITY_LOW), a.registerCommand(l.KEY_ARROW_LEFT_COMMAND, (c) => a.getEditorState().read(() => {
          var b = l.$getSelection();
          if (l.$isRangeSelection(b) && b.isCollapsed()) {
            var { anchor: d } = b;
            if ((b = d.type === "element") || d.offset === 0) {
              d = d.getNode();
              let f = k.$findMatchingParent(d, (h) => l.$isElementNode(h) && !h.isInline());
              if (e.$isListItemNode(f)) {
                let h = f.getParent();
                if (e.$isListNode(h) && h.getListType() === "check" && (b || f.getFirstDescendant() === d) && (b = a.getElementByKey(f.__key), b != null && document.activeElement !== b))
                  return b.focus(), c.preventDefault(), true;
              }
            }
          }
          return false;
        }), l.COMMAND_PRIORITY_LOW), a.registerRootListener((c, b) => {
          c !== null && (c.addEventListener("click", p), c.addEventListener("pointerdown", r)), b !== null && (b.removeEventListener("click", p), b.removeEventListener("pointerdown", r));
        }))), null;
      };
    } });
    require_LexicalCheckListPlugin = __commonJS({ "../../../node_modules/@lexical/react/LexicalCheckListPlugin.js"(exports, module) {
      "use strict";
      var LexicalCheckListPlugin = require_LexicalCheckListPlugin_prod();
      module.exports = LexicalCheckListPlugin;
    } });
    require_LexicalLinkPlugin_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalLinkPlugin.prod.js"(exports) {
      "use strict";
      var b = require_LexicalLink(), c = require_LexicalComposerContext(), k = require_LexicalUtils(), l = require_Lexical(), m = (init_react(), __toCommonJS(react_exports));
      exports.LinkPlugin = function({ validateUrl: d }) {
        let [e] = c.useLexicalComposerContext();
        return m.useEffect(() => {
          if (!e.hasNodes([b.LinkNode]))
            throw Error("LinkPlugin: LinkNode not registered on editor");
          return k.mergeRegister(e.registerCommand(b.TOGGLE_LINK_COMMAND, (a) => {
            if (a === null)
              return b.toggleLink(a), true;
            if (typeof a == "string")
              return d === void 0 || d(a) ? (b.toggleLink(a), true) : false;
            let { url: f, target: g, rel: h, title: n } = a;
            return b.toggleLink(f, { rel: h, target: g, title: n }), true;
          }, l.COMMAND_PRIORITY_LOW), d !== void 0 ? e.registerCommand(l.PASTE_COMMAND, (a) => {
            let f = l.$getSelection();
            if (!l.$isRangeSelection(f) || f.isCollapsed() || !(a instanceof ClipboardEvent) || a.clipboardData == null)
              return false;
            let g = a.clipboardData.getData("text");
            return d(g) ? f.getNodes().some((h) => l.$isElementNode(h)) ? false : (e.dispatchCommand(b.TOGGLE_LINK_COMMAND, g), a.preventDefault(), true) : false;
          }, l.COMMAND_PRIORITY_LOW) : () => {
          });
        }, [e, d]), null;
      };
    } });
    require_LexicalLinkPlugin = __commonJS({ "../../../node_modules/@lexical/react/LexicalLinkPlugin.js"(exports, module) {
      "use strict";
      var LexicalLinkPlugin = require_LexicalLinkPlugin_prod();
      module.exports = LexicalLinkPlugin;
    } });
    require_LexicalTable_prod = __commonJS({ "../../../node_modules/@lexical/table/LexicalTable.prod.js"(exports) {
      "use strict";
      var d = require_Lexical(), t = require_LexicalUtils(), w = /^(\d+(?:\.\d+)?)px$/, x = { BOTH: 3, COLUMN: 2, NO_STATUS: 0, ROW: 1 }, y = class extends d.DEPRECATED_GridCellNode {
        static getType() {
          return "tablecell";
        }
        static clone(a) {
          let b = new y(a.__headerState, a.__colSpan, a.__width, a.__key);
          return b.__rowSpan = a.__rowSpan, b.__backgroundColor = a.__backgroundColor, b;
        }
        static importDOM() {
          return { td: () => ({ conversion: z, priority: 0 }), th: () => ({ conversion: z, priority: 0 }) };
        }
        static importJSON(a) {
          let b = a.rowSpan || 1, c = B(a.headerState, a.colSpan || 1, a.width || void 0);
          return c.__rowSpan = b, c.__backgroundColor = a.backgroundColor || null, c;
        }
        constructor(a = x.NO_STATUS, b = 1, c, e) {
          super(b, e), this.__headerState = a, this.__width = c, this.__backgroundColor = null;
        }
        createDOM(a) {
          let b = document.createElement(this.getTag());
          return this.__width && (b.style.width = `${this.__width}px`), 1 < this.__colSpan && (b.colSpan = this.__colSpan), 1 < this.__rowSpan && (b.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (b.style.backgroundColor = this.__backgroundColor), t.addClassNamesToElement(b, a.theme.tableCell, this.hasHeader() && a.theme.tableCellHeader), b;
        }
        exportDOM(a) {
          if ({ element: a } = super.exportDOM(a), a) {
            var b = this.getParentOrThrow().getChildrenSize();
            a.style.border = "1px solid black", 1 < this.__colSpan && (a.colSpan = this.__colSpan), 1 < this.__rowSpan && (a.rowSpan = this.__rowSpan), a.style.width = `${this.getWidth() || Math.max(90, 700 / b)}px`, a.style.verticalAlign = "top", a.style.textAlign = "start", b = this.getBackgroundColor(), b !== null ? a.style.backgroundColor = b : this.hasHeader() && (a.style.backgroundColor = "#f2f3f5");
          }
          return { element: a };
        }
        exportJSON() {
          return { ...super.exportJSON(), backgroundColor: this.getBackgroundColor(), headerState: this.__headerState, type: "tablecell", width: this.getWidth() };
        }
        getTag() {
          return this.hasHeader() ? "th" : "td";
        }
        setHeaderStyles(a) {
          return this.getWritable().__headerState = a, this.__headerState;
        }
        getHeaderStyles() {
          return this.getLatest().__headerState;
        }
        setWidth(a) {
          return this.getWritable().__width = a, this.__width;
        }
        getWidth() {
          return this.getLatest().__width;
        }
        getBackgroundColor() {
          return this.getLatest().__backgroundColor;
        }
        setBackgroundColor(a) {
          this.getWritable().__backgroundColor = a;
        }
        toggleHeaderStyle(a) {
          let b = this.getWritable();
          return b.__headerState = (b.__headerState & a) === a ? b.__headerState - a : b.__headerState + a, b;
        }
        hasHeaderState(a) {
          return (this.getHeaderStyles() & a) === a;
        }
        hasHeader() {
          return this.getLatest().__headerState !== x.NO_STATUS;
        }
        updateDOM(a) {
          return a.__headerState !== this.__headerState || a.__width !== this.__width || a.__colSpan !== this.__colSpan || a.__rowSpan !== this.__rowSpan || a.__backgroundColor !== this.__backgroundColor;
        }
        isShadowRoot() {
          return true;
        }
        collapseAtStart() {
          return true;
        }
        canBeEmpty() {
          return false;
        }
        canIndent() {
          return false;
        }
      };
      function z(a) {
        var b = a.nodeName.toLowerCase();
        let c;
        return w.test(a.style.width) && (c = parseFloat(a.style.width)), b = B(b === "th" ? x.ROW : x.NO_STATUS, a.colSpan, c), b.__rowSpan = a.rowSpan, a = a.style.backgroundColor, a !== "" && (b.__backgroundColor = a), { forChild: (e, g) => C(g) && !d.$isElementNode(e) ? (g = d.$createParagraphNode(), d.$isLineBreakNode(e) && e.getTextContent() === `
` ? null : (g.append(e), g)) : e, node: b };
      }
      function B(a, b = 1, c) {
        return d.$applyNodeReplacement(new y(a, b, c));
      }
      function C(a) {
        return a instanceof y;
      }
      var D = class extends d.DEPRECATED_GridRowNode {
        static getType() {
          return "tablerow";
        }
        static clone(a) {
          return new D(a.__height, a.__key);
        }
        static importDOM() {
          return { tr: () => ({ conversion: aa, priority: 0 }) };
        }
        static importJSON(a) {
          return E(a.height);
        }
        constructor(a, b) {
          super(b), this.__height = a;
        }
        exportJSON() {
          return { ...super.exportJSON(), type: "tablerow", version: 1 };
        }
        createDOM(a) {
          let b = document.createElement("tr");
          return this.__height && (b.style.height = `${this.__height}px`), t.addClassNamesToElement(b, a.theme.tableRow), b;
        }
        isShadowRoot() {
          return true;
        }
        setHeight(a) {
          return this.getWritable().__height = a, this.__height;
        }
        getHeight() {
          return this.getLatest().__height;
        }
        updateDOM(a) {
          return a.__height !== this.__height;
        }
        canBeEmpty() {
          return false;
        }
        canIndent() {
          return false;
        }
      };
      function aa(a) {
        let b;
        return w.test(a.style.height) && (b = parseFloat(a.style.height)), { node: E(b) };
      }
      function E(a) {
        return d.$applyNodeReplacement(new D(a));
      }
      function F(a) {
        return a instanceof D;
      }
      function G(a) {
        let b = new URLSearchParams();
        b.append("code", a);
        for (let c = 1; c < arguments.length; c++)
          b.append("v", arguments[c]);
        throw Error(`Minified Lexical error #${a}; visit https://lexical.dev/docs/error?${b} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
      }
      var ba = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", I = class {
        constructor(a, b) {
          this.isHighlightingCells = false, this.focusY = this.focusX = this.anchorY = this.anchorX = -1, this.listenersToRemove = /* @__PURE__ */ new Set(), this.tableNodeKey = b, this.editor = a, this.grid = { cells: [], columns: 0, rows: 0 }, this.focusCell = this.anchorCell = this.focusCellNodeKey = this.anchorCellNodeKey = this.gridSelection = null, this.hasHijackedSelectionStyles = false, this.trackTableGrid();
        }
        getGrid() {
          return this.grid;
        }
        removeListeners() {
          Array.from(this.listenersToRemove).forEach((a) => a());
        }
        trackTableGrid() {
          let a = new MutationObserver((b) => {
            this.editor.update(() => {
              var c = false;
              for (let e = 0; e < b.length; e++) {
                let g = b[e].target.nodeName;
                if (g === "TABLE" || g === "TR") {
                  c = true;
                  break;
                }
              }
              if (c) {
                if (c = this.editor.getElementByKey(this.tableNodeKey), !c)
                  throw Error("Expected to find TableElement in DOM");
                this.grid = J(c);
              }
            });
          });
          this.editor.update(() => {
            let b = this.editor.getElementByKey(this.tableNodeKey);
            if (!b)
              throw Error("Expected to find TableElement in DOM");
            this.grid = J(b), a.observe(b, { childList: true, subtree: true });
          });
        }
        clearHighlight() {
          let a = this.editor;
          this.isHighlightingCells = false, this.focusY = this.focusX = this.anchorY = this.anchorX = -1, this.focusCell = this.anchorCell = this.focusCellNodeKey = this.anchorCellNodeKey = this.gridSelection = null, this.hasHijackedSelectionStyles = false, this.enableHighlightStyle(), a.update(() => {
            var b = d.$getNodeByKey(this.tableNodeKey);
            if (!K(b))
              throw Error("Expected TableNode.");
            if (b = a.getElementByKey(this.tableNodeKey), !b)
              throw Error("Expected to find TableElement in DOM");
            b = J(b), L(a, b, null), d.$setSelection(null), a.dispatchCommand(d.SELECTION_CHANGE_COMMAND, void 0);
          });
        }
        enableHighlightStyle() {
          let a = this.editor;
          a.update(() => {
            let b = a.getElementByKey(this.tableNodeKey);
            if (!b)
              throw Error("Expected to find TableElement in DOM");
            t.removeClassNamesFromElement(b, a._config.theme.tableSelection), b.classList.remove("disable-selection"), this.hasHijackedSelectionStyles = false;
          });
        }
        disableHighlightStyle() {
          let a = this.editor;
          a.update(() => {
            let b = a.getElementByKey(this.tableNodeKey);
            if (!b)
              throw Error("Expected to find TableElement in DOM");
            t.addClassNamesToElement(b, a._config.theme.tableSelection), this.hasHijackedSelectionStyles = true;
          });
        }
        updateTableGridSelection(a) {
          if (a != null && a.gridKey === this.tableNodeKey) {
            let b = this.editor;
            this.gridSelection = a, this.isHighlightingCells = true, this.disableHighlightStyle(), L(b, this.grid, this.gridSelection);
          } else
            a == null && this.clearHighlight();
        }
        setFocusCellForSelection(a, b = false) {
          let c = this.editor;
          c.update(() => {
            var e = d.$getNodeByKey(this.tableNodeKey);
            if (!K(e))
              throw Error("Expected TableNode.");
            if (!c.getElementByKey(this.tableNodeKey))
              throw Error("Expected to find TableElement in DOM");
            e = a.x;
            let g = a.y;
            if (this.focusCell = a, this.anchorCell !== null) {
              let h = ba ? (c._window || window).getSelection() : null;
              h && h.setBaseAndExtent(this.anchorCell.elem, 0, this.focusCell.elem, 0);
            }
            if (!this.isHighlightingCells && (this.anchorX !== e || this.anchorY !== g || b))
              this.isHighlightingCells = true, this.disableHighlightStyle();
            else if (e === this.focusX && g === this.focusY)
              return;
            this.focusX = e, this.focusY = g, this.isHighlightingCells && (e = d.$getNearestNodeFromDOMNode(a.elem), this.gridSelection != null && this.anchorCellNodeKey != null && C(e) && (e = e.getKey(), this.gridSelection = this.gridSelection.clone() || d.DEPRECATED_$createGridSelection(), this.focusCellNodeKey = e, this.gridSelection.set(this.tableNodeKey, this.anchorCellNodeKey, this.focusCellNodeKey), d.$setSelection(this.gridSelection), c.dispatchCommand(d.SELECTION_CHANGE_COMMAND, void 0), L(c, this.grid, this.gridSelection)));
          });
        }
        setAnchorCellForSelection(a) {
          this.isHighlightingCells = false, this.anchorCell = a, this.anchorX = a.x, this.anchorY = a.y, this.editor.update(() => {
            var b = d.$getNearestNodeFromDOMNode(a.elem);
            C(b) && (b = b.getKey(), this.gridSelection = d.DEPRECATED_$createGridSelection(), this.anchorCellNodeKey = b);
          });
        }
        formatCells(a) {
          this.editor.update(() => {
            let b = d.$getSelection();
            d.DEPRECATED_$isGridSelection(b) || G(11);
            let c = d.$createRangeSelection(), e = c.anchor, g = c.focus;
            b.getNodes().forEach((h) => {
              C(h) && h.getTextContentSize() !== 0 && (e.set(h.getKey(), 0, "element"), g.set(h.getKey(), h.getChildrenSize(), "element"), c.formatText(a));
            }), d.$setSelection(b), this.editor.dispatchCommand(d.SELECTION_CHANGE_COMMAND, void 0);
          });
        }
        clearText() {
          let a = this.editor;
          a.update(() => {
            let b = d.$getNodeByKey(this.tableNodeKey);
            if (!K(b))
              throw Error("Expected TableNode.");
            var c = d.$getSelection();
            d.DEPRECATED_$isGridSelection(c) || G(11), c = c.getNodes().filter(C), c.length === this.grid.columns * this.grid.rows ? (b.selectPrevious(), b.remove(), d.$getRoot().selectStart()) : (c.forEach((e) => {
              if (d.$isElementNode(e)) {
                let g = d.$createParagraphNode(), h = d.$createTextNode();
                g.append(h), e.append(g), e.getChildren().forEach((f) => {
                  f !== g && f.remove();
                });
              }
            }), L(a, this.grid, null), d.$setSelection(null), a.dispatchCommand(d.SELECTION_CHANGE_COMMAND, void 0));
          });
        }
      };
      function M(a) {
        for (; a != null; ) {
          let b = a.nodeName;
          if (b === "TD" || b === "TH") {
            if (a = a._cell, a === void 0)
              break;
            return a;
          }
          a = a.parentNode;
        }
        return null;
      }
      function J(a) {
        let b = [], c = { cells: b, columns: 0, rows: 0 };
        var e = a.firstChild;
        let g = a = 0;
        for (b.length = 0; e != null; ) {
          var h = e.nodeName;
          if (h === "TD" || h === "TH")
            h = e, h = { elem: h, hasBackgroundColor: h.style.backgroundColor !== "", highlighted: false, x: a, y: g }, e._cell = h, b[g] === void 0 && (b[g] = []), b[g][a] = h;
          else if (h = e.firstChild, h != null) {
            e = h;
            continue;
          }
          if (h = e.nextSibling, h != null)
            a++, e = h;
          else if (h = e.parentNode, h != null) {
            if (e = h.nextSibling, e == null)
              break;
            g++, a = 0;
          }
        }
        return c.columns = a + 1, c.rows = g + 1, c;
      }
      function L(a, b, c) {
        let e = new Set(c ? c.getNodes() : []);
        N(b, (g, h) => {
          let f = g.elem;
          e.has(h) ? (g.highlighted = true, O(a, g)) : (g.highlighted = false, ca(a, g), f.getAttribute("style") || f.removeAttribute("style"));
        });
      }
      function N(a, b) {
        ({ cells: a } = a);
        for (let c = 0; c < a.length; c++) {
          let e = a[c];
          for (let g = 0; g < e.length; g++) {
            let h = e[g], f = d.$getNearestNodeFromDOMNode(h.elem);
            f !== null && b(h, f, { x: g, y: c });
          }
        }
      }
      function da(a, b) {
        b.disableHighlightStyle(), N(b.grid, (c) => {
          c.highlighted = true, O(a, c);
        });
      }
      function ea(a, b) {
        b.enableHighlightStyle(), N(b.grid, (c) => {
          let e = c.elem;
          c.highlighted = false, ca(a, c), e.getAttribute("style") || e.removeAttribute("style");
        });
      }
      var fa = (a, b, c, e, g) => {
        let h = g === "forward";
        switch (g) {
          case "backward":
          case "forward":
            return c !== (h ? a.grid.columns - 1 : 0) ? (a = b.getCellNodeFromCordsOrThrow(c + (h ? 1 : -1), e, a.grid), h ? a.selectStart() : a.selectEnd()) : e !== (h ? a.grid.rows - 1 : 0) ? (a = b.getCellNodeFromCordsOrThrow(h ? 0 : a.grid.columns - 1, e + (h ? 1 : -1), a.grid), h ? a.selectStart() : a.selectEnd()) : h ? b.selectNext() : b.selectPrevious(), true;
          case "up":
            return e !== 0 ? b.getCellNodeFromCordsOrThrow(c, e - 1, a.grid).selectEnd() : b.selectPrevious(), true;
          case "down":
            return e !== a.grid.rows - 1 ? b.getCellNodeFromCordsOrThrow(c, e + 1, a.grid).selectStart() : b.selectNext(), true;
          default:
            return false;
        }
      }, ha = (a, b, c, e, g) => {
        let h = g === "forward";
        switch (g) {
          case "backward":
          case "forward":
            return c !== (h ? a.grid.columns - 1 : 0) && a.setFocusCellForSelection(b.getCellFromCordsOrThrow(c + (h ? 1 : -1), e, a.grid)), true;
          case "up":
            return e !== 0 ? (a.setFocusCellForSelection(b.getCellFromCordsOrThrow(c, e - 1, a.grid)), true) : false;
          case "down":
            return e !== a.grid.rows - 1 ? (a.setFocusCellForSelection(b.getCellFromCordsOrThrow(c, e + 1, a.grid)), true) : false;
          default:
            return false;
        }
      };
      function P(a, b) {
        if (d.$isRangeSelection(a) || d.DEPRECATED_$isGridSelection(a)) {
          let c = b.isParentOf(a.anchor.getNode());
          return a = b.isParentOf(a.focus.getNode()), c && a;
        }
        return false;
      }
      function O(a, b) {
        a = b.elem, b = d.$getNearestNodeFromDOMNode(a), C(b) || G(131), b.getBackgroundColor() === null ? a.style.setProperty("background-color", "rgb(172,206,247)") : a.style.setProperty("background-image", "linear-gradient(to right, rgba(172,206,247,0.85), rgba(172,206,247,0.85))"), a.style.setProperty("caret-color", "transparent");
      }
      function ca(a, b) {
        a = b.elem, b = d.$getNearestNodeFromDOMNode(a), C(b) || G(131), b.getBackgroundColor() === null && a.style.removeProperty("background-color"), a.style.removeProperty("background-image"), a.style.removeProperty("caret-color");
      }
      function Q(a) {
        return a = t.$findMatchingParent(a, C), C(a) ? a : null;
      }
      function ia(a) {
        return a = t.$findMatchingParent(a, K), K(a) ? a : null;
      }
      function R(a, b, c, e, g) {
        var h = d.$getSelection();
        if (!P(h, e))
          return false;
        if (d.$isRangeSelection(h) && h.isCollapsed()) {
          if (c === "backward" || c === "forward")
            return false;
          let { anchor: q, focus: r } = h;
          h = t.$findMatchingParent(q.getNode(), C);
          var f = t.$findMatchingParent(r.getNode(), C);
          if (!C(h) || !h.is(f))
            return false;
          f = a.getElementByKey(h.__key);
          var m = a.getElementByKey(q.key);
          if (m == null || f == null)
            return false;
          if (q.type === "element")
            f = m.getBoundingClientRect();
          else {
            if (f = window.getSelection(), f === null || f.rangeCount === 0)
              return false;
            f = f.getRangeAt(0).getBoundingClientRect();
          }
          if (m = c === "up" ? h.getFirstChild() : h.getLastChild(), m == null || (a = a.getElementByKey(m.__key), a == null))
            return false;
          if (a = a.getBoundingClientRect(), c === "up" ? a.top > f.top - f.height : f.bottom + f.height > a.bottom) {
            if (S(b), h = e.getCordsFromCellNode(h, g.grid), b.shiftKey)
              c = e.getCellFromCordsOrThrow(h.x, h.y, g.grid), g.setAnchorCellForSelection(c), g.setFocusCellForSelection(c, true);
            else
              return fa(g, e, h.x, h.y, c);
            return true;
          }
        } else if (d.DEPRECATED_$isGridSelection(h)) {
          let { anchor: q, focus: r } = h;
          return h = t.$findMatchingParent(q.getNode(), C), a = t.$findMatchingParent(r.getNode(), C), !C(h) || !C(a) ? false : (S(b), b.shiftKey ? (b = e.getCordsFromCellNode(a, g.grid), ha(g, e, b.x, b.y, c)) : (a.selectEnd(), true));
        }
        return false;
      }
      function S(a) {
        a.preventDefault(), a.stopImmediatePropagation(), a.stopPropagation();
      }
      var T = class extends d.DEPRECATED_GridNode {
        static getType() {
          return "table";
        }
        static clone(a) {
          return new T(a.__key);
        }
        static importDOM() {
          return { table: () => ({ conversion: ja, priority: 1 }) };
        }
        static importJSON() {
          return U();
        }
        constructor(a) {
          super(a);
        }
        exportJSON() {
          return { ...super.exportJSON(), type: "table", version: 1 };
        }
        createDOM(a) {
          let b = document.createElement("table");
          return t.addClassNamesToElement(b, a.theme.table), b;
        }
        updateDOM() {
          return false;
        }
        exportDOM(a) {
          return { ...super.exportDOM(a), after: (b) => {
            if (b) {
              let c = b.cloneNode(), e = document.createElement("colgroup"), g = document.createElement("tbody");
              if (g.append(...b.children), b = this.getFirstChildOrThrow(), !F(b))
                throw Error("Expected to find row node.");
              b = b.getChildrenSize();
              for (let h = 0; h < b; h++) {
                let f = document.createElement("col");
                e.append(f);
              }
              return c.replaceChildren(e, g), c;
            }
          } };
        }
        canExtractContents() {
          return false;
        }
        canBeEmpty() {
          return false;
        }
        isShadowRoot() {
          return true;
        }
        getCordsFromCellNode(a, b) {
          let { rows: c, cells: e } = b;
          for (b = 0; b < c; b++) {
            var g = e[b];
            if (g == null)
              throw Error(`Row not found at y:${b}`);
            if (g = g.findIndex(({ elem: h }) => d.$getNearestNodeFromDOMNode(h) === a), g !== -1)
              return { x: g, y: b };
          }
          throw Error("Cell not found in table.");
        }
        getCellFromCords(a, b, c) {
          return { cells: c } = c, b = c[b], b == null ? null : (a = b[a], a ?? null);
        }
        getCellFromCordsOrThrow(a, b, c) {
          if (a = this.getCellFromCords(a, b, c), !a)
            throw Error("Cell not found at cords.");
          return a;
        }
        getCellNodeFromCords(a, b, c) {
          return a = this.getCellFromCords(a, b, c), a == null ? null : (a = d.$getNearestNodeFromDOMNode(a.elem), C(a) ? a : null);
        }
        getCellNodeFromCordsOrThrow(a, b, c) {
          if (a = this.getCellNodeFromCords(a, b, c), !a)
            throw Error("Node at cords not TableCellNode.");
          return a;
        }
        canSelectBefore() {
          return true;
        }
        canIndent() {
          return false;
        }
      };
      function ja() {
        return { node: U() };
      }
      function U() {
        return d.$applyNodeReplacement(new T());
      }
      function K(a) {
        return a instanceof T;
      }
      function W(a) {
        if (a = t.$findMatchingParent(a, (b) => F(b)), F(a))
          return a;
        throw Error("Expected table cell to be inside of table row.");
      }
      function X(a) {
        if (a = t.$findMatchingParent(a, (b) => K(b)), K(a))
          return a;
        throw Error("Expected table cell to be inside of table.");
      }
      function ka(a, b) {
        let c = X(a), { x: e, y: g } = c.getCordsFromCellNode(a, b);
        return { above: c.getCellNodeFromCords(e, g - 1, b), below: c.getCellNodeFromCords(e, g + 1, b), left: c.getCellNodeFromCords(e - 1, g, b), right: c.getCellNodeFromCords(e + 1, g, b) };
      }
      function Y(a) {
        a = a.getFirstDescendant(), a === null && G(124), a.getParentOrThrow().selectStart();
      }
      function Z(a, b) {
        let c = a.getFirstChild();
        c !== null ? c.insertBefore(b) : a.append(b);
      }
      var la = d.createCommand("INSERT_TABLE_COMMAND");
      exports.$createTableCellNode = B;
      exports.$createTableNode = U;
      exports.$createTableNodeWithDimensions = function(a, b, c = true) {
        let e = U();
        for (let h = 0; h < a; h++) {
          let f = E();
          for (let m = 0; m < b; m++) {
            var g = x.NO_STATUS;
            typeof c == "object" ? (h === 0 && c.rows && (g |= x.ROW), m === 0 && c.columns && (g |= x.COLUMN)) : c && (h === 0 && (g |= x.ROW), m === 0 && (g |= x.COLUMN)), g = B(g);
            let q = d.$createParagraphNode();
            q.append(d.$createTextNode()), g.append(q), f.append(g);
          }
          e.append(f);
        }
        return e;
      };
      exports.$createTableRowNode = E;
      exports.$deleteTableColumn = function(a, b) {
        let c = a.getChildren();
        for (let g = 0; g < c.length; g++) {
          var e = c[g];
          if (F(e)) {
            if (e = e.getChildren(), b >= e.length || 0 > b)
              throw Error("Table column target index out of range");
            e[b].remove();
          }
        }
        return a;
      };
      exports.$deleteTableColumn__EXPERIMENTAL = function() {
        var a = d.$getSelection();
        d.$isRangeSelection(a) || d.DEPRECATED_$isGridSelection(a) || G(118);
        var b = a.anchor.getNode();
        a = a.focus.getNode();
        let [c, , e] = d.DEPRECATED_$getNodeTriplet(b);
        [b] = d.DEPRECATED_$getNodeTriplet(a);
        let [g, h, f] = d.DEPRECATED_$computeGridMap(e, c, b);
        var { startColumn: m } = h;
        let { startRow: q, startColumn: r } = f;
        a = Math.min(m, r), m = Math.max(m + c.__colSpan - 1, r + b.__colSpan - 1);
        let k = m - a + 1;
        if (g[0].length === m - a + 1)
          e.selectPrevious(), e.remove();
        else {
          var l = g.length;
          for (let n = 0; n < l; n++)
            for (let p = a; p <= m; p++) {
              let { cell: v, startColumn: u } = g[n][p];
              u < a ? p === a && v.setColSpan(v.__colSpan - Math.min(k, v.__colSpan - (a - u))) : u + v.__colSpan - 1 > m ? p === m && v.setColSpan(v.__colSpan - (m - u + 1)) : v.remove();
            }
          a = g[q], b = a[r + b.__colSpan], b !== void 0 ? ({ cell: b } = b, Y(b)) : ({ cell: b } = a[r - 1], Y(b));
        }
      };
      exports.$deleteTableRow__EXPERIMENTAL = function() {
        var a = d.$getSelection();
        d.$isRangeSelection(a) || d.DEPRECATED_$isGridSelection(a) || G(118);
        var b = a.anchor.getNode();
        a = a.focus.getNode();
        let [c, , e] = d.DEPRECATED_$getNodeTriplet(b);
        [a] = d.DEPRECATED_$getNodeTriplet(a);
        let [g, h, f] = d.DEPRECATED_$computeGridMap(e, c, a);
        ({ startRow: b } = h);
        var { startRow: m } = f;
        if (a = m + a.__rowSpan - 1, g.length === a - b + 1)
          e.remove();
        else {
          m = g[0].length;
          var q = g[a + 1], r = e.getChildAtIndex(a + 1);
          for (let l = a; l >= b; l--) {
            for (var k = m - 1; 0 <= k; k--) {
              let { cell: n, startRow: p, startColumn: v } = g[l][k];
              if (v === k && (l === b && p < b && n.setRowSpan(n.__rowSpan - (p - b)), p >= b && p + n.__rowSpan - 1 > a))
                if (n.setRowSpan(n.__rowSpan - (a - p + 1)), r === null && G(122), k === 0)
                  Z(r, n);
                else {
                  let { cell: u } = q[k - 1];
                  u.insertAfter(n);
                }
            }
            k = e.getChildAtIndex(l), d.DEPRECATED_$isGridRowNode(k) || G(123, String(l)), k.remove();
          }
          q !== void 0 ? ({ cell: b } = q[0], Y(b)) : ({ cell: b } = g[b - 1][0], Y(b));
        }
      };
      exports.$getElementGridForTableNode = function(a, b) {
        if (a = a.getElementByKey(b.getKey()), a == null)
          throw Error("Table Element Not Found");
        return J(a);
      };
      exports.$getTableCellNodeFromLexicalNode = function(a) {
        return a = t.$findMatchingParent(a, (b) => C(b)), C(a) ? a : null;
      };
      exports.$getTableColumnIndexFromTableCellNode = function(a) {
        return W(a).getChildren().findIndex((b) => b.is(a));
      };
      exports.$getTableNodeFromLexicalNodeOrThrow = X;
      exports.$getTableRowIndexFromTableCellNode = function(a) {
        let b = W(a);
        return X(b).getChildren().findIndex((c) => c.is(b));
      };
      exports.$getTableRowNodeFromTableCellNodeOrThrow = W;
      exports.$insertTableColumn = function(a, b, c = true, e, g) {
        let h = a.getChildren();
        for (let q = 0; q < h.length; q++) {
          let r = h[q];
          if (F(r))
            for (let k = 0; k < e; k++) {
              var f = r.getChildren();
              if (b >= f.length || 0 > b)
                throw Error("Table column target index out of range");
              f = f[b], C(f) || G(12);
              let { left: l, right: n } = ka(f, g);
              var m = x.NO_STATUS;
              (l && l.hasHeaderState(x.ROW) || n && n.hasHeaderState(x.ROW)) && (m |= x.ROW), m = B(m), m.append(d.$createParagraphNode()), c ? f.insertAfter(m) : f.insertBefore(m);
            }
        }
        return a;
      };
      exports.$insertTableColumn__EXPERIMENTAL = function(a = true) {
        function b() {
          let l = B(x.NO_STATUS).append(d.$createParagraphNode());
          return r === null && (r = l), l;
        }
        var c = d.$getSelection();
        d.$isRangeSelection(c) || d.DEPRECATED_$isGridSelection(c) || G(118);
        var e = c.anchor.getNode();
        c = c.focus.getNode(), [e] = d.DEPRECATED_$getNodeTriplet(e);
        let [g, , h] = d.DEPRECATED_$getNodeTriplet(c), [f, m, q] = d.DEPRECATED_$computeGridMap(h, g, e);
        e = f.length, c = a ? Math.max(m.startColumn, q.startColumn) : Math.min(m.startColumn, q.startColumn), a = a ? c + g.__colSpan - 1 : c - 1, c = h.getFirstChild(), d.DEPRECATED_$isGridRowNode(c) || G(120);
        let r = null;
        var k = c;
        a:
          for (c = 0; c < e; c++) {
            c !== 0 && (k = k.getNextSibling(), d.DEPRECATED_$isGridRowNode(k) || G(121));
            let l = f[c];
            if (0 > a) {
              Z(k, b());
              continue;
            }
            let { cell: n, startColumn: p, startRow: v } = l[a];
            if (p + n.__colSpan - 1 <= a) {
              let u = n, A = v, H = a;
              for (; A !== c && 1 < u.__rowSpan; )
                if (H -= n.__colSpan, 0 <= H) {
                  let { cell: V, startRow: ma } = l[H];
                  u = V, A = ma;
                } else {
                  k.append(b());
                  continue a;
                }
              u.insertAfter(b());
            } else
              n.setColSpan(n.__colSpan + 1);
          }
        r !== null && Y(r);
      };
      exports.$insertTableRow = function(a, b, c = true, e, g) {
        var h = a.getChildren();
        if (b >= h.length || 0 > b)
          throw Error("Table row target index out of range");
        if (b = h[b], F(b))
          for (h = 0; h < e; h++) {
            let m = b.getChildren(), q = m.length, r = E();
            for (let k = 0; k < q; k++) {
              var f = m[k];
              C(f) || G(12);
              let { above: l, below: n } = ka(f, g);
              f = x.NO_STATUS;
              let p = l && l.getWidth() || n && n.getWidth() || void 0;
              (l && l.hasHeaderState(x.COLUMN) || n && n.hasHeaderState(x.COLUMN)) && (f |= x.COLUMN), f = B(f, 1, p), f.append(d.$createParagraphNode()), r.append(f);
            }
            c ? b.insertAfter(r) : b.insertBefore(r);
          }
        else
          throw Error("Row before insertion index does not exist.");
        return a;
      };
      exports.$insertTableRow__EXPERIMENTAL = function(a = true) {
        var b = d.$getSelection();
        d.$isRangeSelection(b) || d.DEPRECATED_$isGridSelection(b) || G(118), b = b.focus.getNode();
        let [c, , e] = d.DEPRECATED_$getNodeTriplet(b), [g, h] = d.DEPRECATED_$computeGridMap(e, c, c);
        b = g[0].length;
        var { startRow: f } = h;
        if (a) {
          a = f + c.__rowSpan - 1;
          var m = g[a];
          f = E();
          for (var q = 0; q < b; q++) {
            let { cell: r, startRow: k } = m[q];
            k + r.__rowSpan - 1 <= a ? f.append(B(x.NO_STATUS)) : r.setRowSpan(r.__rowSpan + 1);
          }
          b = e.getChildAtIndex(a), d.DEPRECATED_$isGridRowNode(b) || G(119), b.insertAfter(f);
        } else {
          for (m = g[f], a = E(), q = 0; q < b; q++) {
            let { cell: r, startRow: k } = m[q];
            k === f ? a.append(B(x.NO_STATUS)) : r.setRowSpan(r.__rowSpan + 1);
          }
          b = e.getChildAtIndex(f), d.DEPRECATED_$isGridRowNode(b) || G(119), b.insertBefore(a);
        }
      };
      exports.$isTableCellNode = C;
      exports.$isTableNode = K;
      exports.$isTableRowNode = F;
      exports.$removeTableRowAtIndex = function(a, b) {
        let c = a.getChildren();
        if (b >= c.length || 0 > b)
          throw Error("Expected table cell to be inside of table row.");
        return c[b].remove(), a;
      };
      exports.$unmergeCell = function() {
        var a = d.$getSelection();
        d.$isRangeSelection(a) || d.DEPRECATED_$isGridSelection(a) || G(118), a = a.anchor.getNode();
        let [b, c, e] = d.DEPRECATED_$getNodeTriplet(a);
        a = b.__colSpan;
        let g = b.__rowSpan;
        if (1 < a) {
          for (var h = 1; h < a; h++)
            b.insertAfter(B(x.NO_STATUS));
          b.setColSpan(1);
        }
        if (1 < g) {
          let [q, r] = d.DEPRECATED_$computeGridMap(e, b, b), { startColumn: k, startRow: l } = r;
          for (h = 1; h < g; h++) {
            let n = l + h, p = q[n];
            var f = c.getNextSibling();
            d.DEPRECATED_$isGridRowNode(f) || G(125);
            var m = null;
            for (let v = 0; v < k; v++) {
              let u = p[v], A = u.cell;
              u.startRow === n && (m = A), 1 < A.__colSpan && (v += A.__colSpan - 1);
            }
            if (m === null)
              for (m = 0; m < a; m++)
                Z(f, B(x.NO_STATUS));
            else
              for (f = 0; f < a; f++)
                m.insertAfter(B(x.NO_STATUS));
          }
          b.setRowSpan(1);
        }
      };
      exports.INSERT_TABLE_COMMAND = la;
      exports.TableCellHeaderStates = x;
      exports.TableCellNode = y;
      exports.TableNode = T;
      exports.TableRowNode = D;
      exports.TableSelection = I;
      exports.applyTableHandlers = function(a, b, c, e) {
        function g(k) {
          return k = a.getCordsFromCellNode(k, f.grid), a.getCellFromCordsOrThrow(k.x, k.y, f.grid);
        }
        let h = c.getRootElement();
        if (h === null)
          throw Error("No root element.");
        let f = new I(c, a.getKey()), m = c._window || window;
        b.__lexicalTableSelection = f, b.addEventListener("mousedown", (k) => {
          setTimeout(() => {
            if (k.button === 0 && m) {
              var l = M(k.target);
              l !== null && (S(k), f.setAnchorCellForSelection(l));
              var n = () => {
                m.removeEventListener("mouseup", n), m.removeEventListener("mousemove", p);
              }, p = (v) => {
                let u = M(v.target);
                u === null || f.anchorX === u.x && f.anchorY === u.y || (v.preventDefault(), f.setFocusCellForSelection(u));
              };
              m.addEventListener("mouseup", n), m.addEventListener("mousemove", p);
            }
          }, 0);
        });
        let q = (k) => {
          k.button === 0 && c.update(() => {
            let l = d.$getSelection(), n = k.target;
            d.DEPRECATED_$isGridSelection(l) && l.gridKey === f.tableNodeKey && h.contains(n) && f.clearHighlight();
          });
        };
        m.addEventListener("mousedown", q), f.listenersToRemove.add(() => m.removeEventListener("mousedown", q)), f.listenersToRemove.add(c.registerCommand(d.KEY_ARROW_DOWN_COMMAND, (k) => R(c, k, "down", a, f), d.COMMAND_PRIORITY_HIGH)), f.listenersToRemove.add(c.registerCommand(d.KEY_ARROW_UP_COMMAND, (k) => R(c, k, "up", a, f), d.COMMAND_PRIORITY_HIGH)), f.listenersToRemove.add(c.registerCommand(d.KEY_ARROW_LEFT_COMMAND, (k) => R(c, k, "backward", a, f), d.COMMAND_PRIORITY_HIGH)), f.listenersToRemove.add(c.registerCommand(d.KEY_ARROW_RIGHT_COMMAND, (k) => R(c, k, "forward", a, f), d.COMMAND_PRIORITY_HIGH)), f.listenersToRemove.add(c.registerCommand(d.KEY_ESCAPE_COMMAND, (k) => {
          var l = d.$getSelection();
          return d.DEPRECATED_$isGridSelection(l) && (l = t.$findMatchingParent(l.focus.getNode(), C), C(l)) ? (S(k), l.selectEnd(), true) : false;
        }, d.COMMAND_PRIORITY_HIGH));
        let r = (k) => () => {
          var l = d.$getSelection();
          if (!P(l, a))
            return false;
          if (d.DEPRECATED_$isGridSelection(l))
            return f.clearText(), true;
          if (d.$isRangeSelection(l)) {
            let v = t.$findMatchingParent(l.anchor.getNode(), (u) => C(u));
            if (!C(v))
              return false;
            var n = l.anchor.getNode(), p = l.focus.getNode();
            if (n = a.isParentOf(n), p = a.isParentOf(p), n && !p || p && !n)
              return f.clearText(), true;
            if (n = (p = t.$findMatchingParent(l.anchor.getNode(), (u) => d.$isElementNode(u))) && t.$findMatchingParent(p, (u) => d.$isElementNode(u) && C(u.getParent())), !d.$isElementNode(n) || !d.$isElementNode(p))
              return false;
            if (k === d.DELETE_LINE_COMMAND && n.getPreviousSibling() === null)
              return true;
            if ((k === d.DELETE_CHARACTER_COMMAND || k === d.DELETE_WORD_COMMAND) && l.isCollapsed() && l.anchor.offset === 0 && p !== n) {
              l = p.getChildren();
              let u = d.$createParagraphNode();
              return l.forEach((A) => u.append(A)), p.replace(u), p.getWritable().__parent = v.getKey(), true;
            }
          }
          return false;
        };
        return [d.DELETE_WORD_COMMAND, d.DELETE_LINE_COMMAND, d.DELETE_CHARACTER_COMMAND].forEach((k) => {
          f.listenersToRemove.add(c.registerCommand(k, r(k), d.COMMAND_PRIORITY_CRITICAL));
        }), b = (k) => {
          let l = d.$getSelection();
          return P(l, a) ? d.DEPRECATED_$isGridSelection(l) ? (k.preventDefault(), k.stopPropagation(), f.clearText(), true) : (d.$isRangeSelection(l) && (k = t.$findMatchingParent(l.anchor.getNode(), (n) => C(n)), C(k)), false) : false;
        }, f.listenersToRemove.add(c.registerCommand(d.KEY_BACKSPACE_COMMAND, b, d.COMMAND_PRIORITY_CRITICAL)), f.listenersToRemove.add(c.registerCommand(d.KEY_DELETE_COMMAND, b, d.COMMAND_PRIORITY_CRITICAL)), f.listenersToRemove.add(c.registerCommand(d.FORMAT_TEXT_COMMAND, (k) => {
          let l = d.$getSelection();
          return P(l, a) ? d.DEPRECATED_$isGridSelection(l) ? (f.formatCells(k), true) : (d.$isRangeSelection(l) && (k = t.$findMatchingParent(l.anchor.getNode(), (n) => C(n)), C(k)), false) : false;
        }, d.COMMAND_PRIORITY_CRITICAL)), f.listenersToRemove.add(c.registerCommand(d.CONTROLLED_TEXT_INSERTION_COMMAND, () => {
          var k = d.$getSelection();
          return P(k, a) && (d.DEPRECATED_$isGridSelection(k) ? f.clearHighlight() : d.$isRangeSelection(k) && (k = t.$findMatchingParent(k.anchor.getNode(), (l) => C(l)), C(k))), false;
        }, d.COMMAND_PRIORITY_CRITICAL)), e && f.listenersToRemove.add(c.registerCommand(d.KEY_TAB_COMMAND, (k) => {
          var l = d.$getSelection();
          return !d.$isRangeSelection(l) || !l.isCollapsed() || !P(l, a) || (l = Q(l.anchor.getNode()), l === null) ? false : (S(k), l = a.getCordsFromCellNode(l, f.grid), fa(f, a, l.x, l.y, k.shiftKey ? "backward" : "forward"), true);
        }, d.COMMAND_PRIORITY_CRITICAL)), f.listenersToRemove.add(c.registerCommand(d.FOCUS_COMMAND, () => a.isSelected(), d.COMMAND_PRIORITY_HIGH)), f.listenersToRemove.add(c.registerCommand(d.SELECTION_CHANGE_COMMAND, () => {
          let k = d.$getSelection(), l = d.$getPreviousSelection();
          if (d.$isRangeSelection(k)) {
            let { anchor: A, focus: H } = k;
            var n = A.getNode(), p = H.getNode();
            n = Q(n), p = Q(p);
            var v = n && a.is(ia(n)), u = p && a.is(ia(p));
            let V = v !== u;
            u = v && u, v = k.isBackward(), V ? (n = k.clone(), n.focus.set(a.getKey(), v ? 0 : a.getChildrenSize(), "element"), d.$setSelection(n), da(c, f)) : u && !n.is(p) && (f.setAnchorCellForSelection(g(n)), f.setFocusCellForSelection(g(p), true));
          }
          return k && !k.is(l) && (d.DEPRECATED_$isGridSelection(k) || d.DEPRECATED_$isGridSelection(l)) && f.gridSelection && !f.gridSelection.is(l) ? (d.DEPRECATED_$isGridSelection(k) && k.gridKey === f.tableNodeKey ? f.updateTableGridSelection(k) : !d.DEPRECATED_$isGridSelection(k) && d.DEPRECATED_$isGridSelection(l) && l.gridKey === f.tableNodeKey && f.updateTableGridSelection(null), false) : (f.hasHijackedSelectionStyles && !a.isSelected() ? ea(c, f) : !f.hasHijackedSelectionStyles && a.isSelected() && da(c, f), false);
        }, d.COMMAND_PRIORITY_CRITICAL)), f;
      };
      exports.getCellFromTarget = M;
      exports.getTableSelectionFromTableElement = function(a) {
        return a.__lexicalTableSelection;
      };
    } });
    require_LexicalTable = __commonJS({ "../../../node_modules/@lexical/table/LexicalTable.js"(exports, module) {
      "use strict";
      var LexicalTable = require_LexicalTable_prod();
      module.exports = LexicalTable;
    } });
    require_LexicalTablePlugin_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalTablePlugin.prod.js"(exports) {
      "use strict";
      var c = require_LexicalComposerContext(), h = require_LexicalTable(), r = require_LexicalUtils(), w = require_Lexical(), x = (init_react(), __toCommonJS(react_exports));
      function y(m) {
        let n = new URLSearchParams();
        n.append("code", m);
        for (let p = 1; p < arguments.length; p++)
          n.append("v", arguments[p]);
        throw Error(`Minified Lexical error #${m}; visit https://lexical.dev/docs/error?${n} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
      }
      exports.TablePlugin = function({ hasCellMerge: m = true, hasCellBackgroundColor: n = true, hasTabHandler: p = true }) {
        let [d] = c.useLexicalComposerContext();
        return x.useEffect(() => (d.hasNodes([h.TableNode, h.TableCellNode, h.TableRowNode]) || y(10), d.registerCommand(h.INSERT_TABLE_COMMAND, ({ columns: a, rows: e, includeHeaders: g }) => (a = h.$createTableNodeWithDimensions(Number(e), Number(a), g), r.$insertNodeToNearestRoot(a), a = a.getFirstDescendant(), w.$isTextNode(a) && a.select(), true), w.COMMAND_PRIORITY_EDITOR)), [d]), x.useEffect(() => {
          let a = /* @__PURE__ */ new Map(), e = (b) => {
            let f = b.getKey(), l = d.getElementByKey(f);
            l && !a.has(f) && (b = h.applyTableHandlers(b, l, d, p), a.set(f, b));
          };
          d.getEditorState().read(() => {
            let b = w.$nodesOfType(h.TableNode);
            for (let f of b)
              h.$isTableNode(f) && e(f);
          });
          let g = d.registerMutationListener(h.TableNode, (b) => {
            for (let [f, l] of b)
              l === "created" ? d.getEditorState().read(() => {
                let q = w.$getNodeByKey(f);
                h.$isTableNode(q) && e(q);
              }) : l === "destroyed" && (b = a.get(f), b !== void 0 && (b.removeListeners(), a.delete(f)));
          });
          return () => {
            g();
            for (let [, b] of a)
              b.removeListeners();
          };
        }, [d, p]), x.useEffect(() => {
          if (!m)
            return d.registerNodeTransform(h.TableCellNode, (a) => {
              if (1 < a.getColSpan() || 1 < a.getRowSpan()) {
                var [, , e] = w.DEPRECATED_$getNodeTriplet(a);
                [a] = w.DEPRECATED_$computeGridMap(e, a, a);
                let f = a.length, l = a[0].length;
                if (e = e.getFirstChild(), !w.DEPRECATED_$isGridRowNode(e))
                  throw Error("Expected TableNode first child to be a RowNode");
                let q = [];
                for (let k = 0; k < f; k++) {
                  if (k !== 0 && (e = e.getNextSibling(), !w.DEPRECATED_$isGridRowNode(e)))
                    throw Error("Expected TableNode first child to be a RowNode");
                  let u = null;
                  for (let t = 0; t < l; t++) {
                    var g = a[k][t], b = g.cell;
                    if (g.startRow === k && g.startColumn === t)
                      u = b, q.push(b);
                    else if (1 < b.getColSpan() || 1 < b.getRowSpan())
                      if (b = h.$createTableCellNode(b.__headerState), u !== null)
                        u.insertAfter(b);
                      else {
                        g = e;
                        let v = g.getFirstChild();
                        v !== null ? v.insertBefore(b) : g.append(b);
                      }
                  }
                }
                for (let k of q)
                  k.setColSpan(1), k.setRowSpan(1);
              }
            });
        }, [d, m]), x.useEffect(() => {
          if (!n)
            return d.registerNodeTransform(h.TableCellNode, (a) => {
              a.getBackgroundColor() !== null && a.setBackgroundColor(null);
            });
        }, [d, n, m]), null;
      };
    } });
    require_LexicalTablePlugin = __commonJS({ "../../../node_modules/@lexical/react/LexicalTablePlugin.js"(exports, module) {
      "use strict";
      var LexicalTablePlugin = require_LexicalTablePlugin_prod();
      module.exports = LexicalTablePlugin;
    } });
    require_LexicalAutoLinkPlugin_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalAutoLinkPlugin.prod.js"(exports) {
      "use strict";
      var h = require_LexicalLink(), n = require_LexicalComposerContext(), p = require_LexicalUtils(), u = require_Lexical(), w = (init_react(), __toCommonJS(react_exports));
      function A(a) {
        let b = new URLSearchParams();
        b.append("code", a);
        for (let c = 1; c < arguments.length; c++)
          b.append("v", arguments[c]);
        throw Error(`Minified Lexical error #${a}; visit https://lexical.dev/docs/error?${b} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
      }
      function B(a, b) {
        for (let c = 0; c < b.length; c++) {
          let d = b[c](a);
          if (d)
            return d;
        }
        return null;
      }
      var C = /[.,;\s]/;
      function E(a) {
        a = a.getPreviousSibling(), u.$isElementNode(a) && (a = a.getLastDescendant());
        var b;
        return !(b = a === null || u.$isLineBreakNode(a)) && (b = u.$isTextNode(a)) && (a = a.getTextContent(), b = C.test(a[a.length - 1])), b;
      }
      function F(a) {
        return a = a.getNextSibling(), u.$isElementNode(a) && (a = a.getFirstDescendant()), a === null || u.$isLineBreakNode(a) || u.$isTextNode(a) && C.test(a.getTextContent()[0]);
      }
      function G(a, b, c) {
        var d = a.getChildren();
        let e = d.length;
        for (let f = 0; f < e; f++) {
          let l = d[f];
          if (!u.$isTextNode(l) || !l.isSimpleText()) {
            H(a), c(null, a.getURL());
            return;
          }
        }
        d = a.getTextContent(), b = B(d, b), b === null || b.text !== d ? (H(a), c(null, a.getURL())) : E(a) && F(a) ? (d = a.getURL(), d !== b.url && (a.setURL(b.url), c(b.url, d)), b.attributes && (d = a.getRel(), d !== b.attributes.rel && (a.setRel(b.attributes.rel || null), c(b.attributes.rel || null, d)), d = a.getTarget(), d !== b.attributes.target && (a.setTarget(b.attributes.target || null), c(b.attributes.target || null, d)))) : (H(a), c(null, a.getURL()));
      }
      function H(a) {
        let b = a.getChildren();
        var c = b.length;
        for (--c; 0 <= c; c--)
          a.insertAfter(b[c]);
        return a.remove(), b.map((d) => d.getLatest());
      }
      function I(a, b, c) {
        w.useEffect(() => {
          a.hasNodes([h.AutoLinkNode]) || A(77);
          let d = (e, f) => {
            c && c(e, f);
          };
          return p.mergeRegister(a.registerNodeTransform(u.TextNode, (e) => {
            var f = e.getParentOrThrow(), l = e.getPreviousSibling();
            if (h.$isAutoLinkNode(f))
              G(f, b, d);
            else if (!h.$isLinkNode(f)) {
              if (e.isSimpleText() && (C.test(e.getTextContent()[0]) || !h.$isAutoLinkNode(l))) {
                l = f = e.getTextContent();
                let m = 0, v = e;
                for (var g; (g = B(l, b)) && g !== null; ) {
                  let r = g.index, x = g.length, y = r + x;
                  var t = m + r, q = m + y, z = f, D = e;
                  if ((0 < t ? C.test(z[t - 1]) : E(D)) && (q < z.length ? C.test(z[q]) : F(D))) {
                    var k = void 0;
                    m + r === 0 ? [k, v] = v.splitText(m + x) : [, k, v] = v.splitText(m + r, m + r + x), t = h.$createAutoLinkNode(g.url, g.attributes), q = u.$createTextNode(g.text), q.setFormat(k.getFormat()), q.setDetail(k.getDetail()), t.append(q), k.replace(t), c && c(g.url, null), m = 0;
                  } else
                    m += y;
                  l = l.substring(y);
                }
              }
              f = e.getPreviousSibling(), g = e.getNextSibling(), k = e.getTextContent(), h.$isAutoLinkNode(f) && !C.test(k[0]) && (f.append(e), G(f, b, d), e = f.getURL(), c && c(null, e)), h.$isAutoLinkNode(g) && !C.test(k[k.length - 1]) && (H(g), G(g, b, d), e = g.getURL(), c && c(null, e));
            }
          }));
        }, [a, b, c]);
      }
      exports.AutoLinkPlugin = function({ matchers: a, onChange: b }) {
        let [c] = n.useLexicalComposerContext();
        return I(c, a, b), null;
      };
      exports.createLinkMatcherWithRegExp = function(a, b = (c) => c) {
        return (c) => {
          let d = a.exec(c);
          return d === null ? null : { index: d.index, length: d[0].length, text: d[0], url: b(c) };
        };
      };
    } });
    require_LexicalAutoLinkPlugin = __commonJS({ "../../../node_modules/@lexical/react/LexicalAutoLinkPlugin.js"(exports, module) {
      "use strict";
      var LexicalAutoLinkPlugin = require_LexicalAutoLinkPlugin_prod();
      module.exports = LexicalAutoLinkPlugin;
    } });
    require_LexicalAutoFocusPlugin_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalAutoFocusPlugin.prod.js"(exports) {
      "use strict";
      var e = require_LexicalComposerContext(), f = (init_react(), __toCommonJS(react_exports));
      exports.AutoFocusPlugin = function({ defaultSelection: c }) {
        let [a] = e.useLexicalComposerContext();
        return f.useEffect(() => {
          a.focus(() => {
            let d = document.activeElement, b = a.getRootElement();
            b === null || d !== null && b.contains(d) || b.focus({ preventScroll: true });
          }, { defaultSelection: c });
        }, [c, a]), null;
      };
    } });
    require_LexicalAutoFocusPlugin = __commonJS({ "../../../node_modules/@lexical/react/LexicalAutoFocusPlugin.js"(exports, module) {
      "use strict";
      var LexicalAutoFocusPlugin = require_LexicalAutoFocusPlugin_prod();
      module.exports = LexicalAutoFocusPlugin;
    } });
    require_LexicalClearEditorPlugin_prod = __commonJS({ "../../../node_modules/@lexical/react/LexicalClearEditorPlugin.prod.js"(exports) {
      "use strict";
      var a = require_LexicalComposerContext(), d = require_Lexical(), g = (init_react(), __toCommonJS(react_exports)), h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? g.useLayoutEffect : g.useEffect;
      exports.ClearEditorPlugin = function({ onClear: b }) {
        let [c] = a.useLexicalComposerContext();
        return h(() => c.registerCommand(d.CLEAR_EDITOR_COMMAND, () => (c.update(() => {
          if (b == null) {
            let e = d.$getRoot(), k = d.$getSelection(), f = d.$createParagraphNode();
            e.clear(), e.append(f), k !== null && f.select();
          } else
            b();
        }), true), d.COMMAND_PRIORITY_EDITOR), [c, b]), null;
      };
    } });
    require_LexicalClearEditorPlugin = __commonJS({ "../../../node_modules/@lexical/react/LexicalClearEditorPlugin.js"(exports, module) {
      "use strict";
      var LexicalClearEditorPlugin = require_LexicalClearEditorPlugin_prod();
      module.exports = LexicalClearEditorPlugin;
    } });
    import_LexicalErrorBoundary = __toESM2(require_LexicalErrorBoundary());
    import_lexical = __toESM2(require_Lexical());
    import_link = __toESM2(require_LexicalLink());
    import_LexicalComposer = __toESM2(require_LexicalComposer());
    import_LexicalPlainTextPlugin = __toESM2(require_LexicalPlainTextPlugin());
    import_LexicalContentEditable = __toESM2(require_LexicalContentEditable());
    import_LexicalHistoryPlugin = __toESM2(require_LexicalHistoryPlugin());
    import_LexicalRichTextPlugin = __toESM2(require_LexicalRichTextPlugin());
    import_LexicalOnChangePlugin = __toESM2(require_LexicalOnChangePlugin());
    import_LexicalListPlugin = __toESM2(require_LexicalListPlugin());
    import_LexicalCheckListPlugin = __toESM2(require_LexicalCheckListPlugin());
    import_LexicalLinkPlugin = __toESM2(require_LexicalLinkPlugin());
    import_LexicalTablePlugin = __toESM2(require_LexicalTablePlugin());
    import_LexicalAutoLinkPlugin = __toESM2(require_LexicalAutoLinkPlugin());
    import_LexicalAutoFocusPlugin = __toESM2(require_LexicalAutoFocusPlugin());
    import_LexicalClearEditorPlugin = __toESM2(require_LexicalClearEditorPlugin());
    import_LexicalComposerContext = __toESM2(require_LexicalComposerContext());
    export_$createParagraphNode = import_lexical.$createParagraphNode;
    export_$createTextNode = import_lexical.$createTextNode;
    export_$getRoot = import_lexical.$getRoot;
    export_$getSelection = import_lexical.$getSelection;
    export_AutoFocusPlugin = import_LexicalAutoFocusPlugin.AutoFocusPlugin;
    export_AutoLinkNode = import_link.AutoLinkNode;
    export_AutoLinkPlugin = import_LexicalAutoLinkPlugin.AutoLinkPlugin;
    export_CLEAR_EDITOR_COMMAND = import_lexical.CLEAR_EDITOR_COMMAND;
    export_COMMAND_PRIORITY_CRITICAL = import_lexical.COMMAND_PRIORITY_CRITICAL;
    export_COMMAND_PRIORITY_EDITOR = import_lexical.COMMAND_PRIORITY_EDITOR;
    export_COMMAND_PRIORITY_HIGH = import_lexical.COMMAND_PRIORITY_HIGH;
    export_COMMAND_PRIORITY_LOW = import_lexical.COMMAND_PRIORITY_LOW;
    export_COMMAND_PRIORITY_NORMAL = import_lexical.COMMAND_PRIORITY_NORMAL;
    export_CheckListPlugin = import_LexicalCheckListPlugin.CheckListPlugin;
    export_ClearEditorPlugin = import_LexicalClearEditorPlugin.ClearEditorPlugin;
    export_ContentEditable = import_LexicalContentEditable.ContentEditable;
    export_ErrorBoundary = import_LexicalErrorBoundary.default;
    export_HistoryPlugin = import_LexicalHistoryPlugin.HistoryPlugin;
    export_KEY_ENTER_COMMAND = import_lexical.KEY_ENTER_COMMAND;
    export_LexicalComposer = import_LexicalComposer.LexicalComposer;
    export_LinkPlugin = import_LexicalLinkPlugin.LinkPlugin;
    export_ListPlugin = import_LexicalListPlugin.ListPlugin;
    export_OnChangePlugin = import_LexicalOnChangePlugin.OnChangePlugin;
    export_PlainTextPlugin = import_LexicalPlainTextPlugin.PlainTextPlugin;
    export_RichTextPlugin = import_LexicalRichTextPlugin.RichTextPlugin;
    export_TablePlugin = import_LexicalTablePlugin.TablePlugin;
    export_useLexicalComposerContext = import_LexicalComposerContext.useLexicalComposerContext;
  }
});

export {
  export_$createParagraphNode,
  export_$createTextNode,
  export_$getRoot,
  export_$getSelection,
  export_AutoFocusPlugin,
  export_AutoLinkNode,
  export_AutoLinkPlugin,
  export_CLEAR_EDITOR_COMMAND,
  export_COMMAND_PRIORITY_CRITICAL,
  export_COMMAND_PRIORITY_EDITOR,
  export_COMMAND_PRIORITY_HIGH,
  export_COMMAND_PRIORITY_LOW,
  export_COMMAND_PRIORITY_NORMAL,
  export_CheckListPlugin,
  export_ClearEditorPlugin,
  export_ContentEditable,
  export_ErrorBoundary,
  export_HistoryPlugin,
  export_KEY_ENTER_COMMAND,
  export_LexicalComposer,
  export_LinkPlugin,
  export_ListPlugin,
  export_OnChangePlugin,
  export_PlainTextPlugin,
  export_RichTextPlugin,
  export_TablePlugin,
  export_useLexicalComposerContext,
  init_index_es
};
//# sourceMappingURL=chunk-DCW4MHHN.js.map
