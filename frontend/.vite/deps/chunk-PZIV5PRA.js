import {
  BACKGROUND_PROPS,
  BORDER_PROPS,
  FLEXBOX_PROPS,
  GRID_PROPS,
  LAYOUT_PROPS,
  POSITION_PROPS,
  SHADOW_PROPS,
  SPACE_PROPS,
  TYPOGRAPHY_PROPS,
  init_index_es as init_index_es2
} from "./chunk-2IGXOFGD.js";
import {
  background,
  border,
  compose,
  createShouldForwardProp,
  css,
  export_styled,
  flexbox,
  grid,
  index_esm_default9,
  init_index_es2 as init_index_es,
  layout,
  position,
  props,
  space,
  system,
  typography
} from "./chunk-PFLXYQ37.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __esm,
  __export,
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@twilio-paste/box/dist/index.es.js
var index_es_exports = {};
__export(index_es_exports, {
  BOX_PROPS_TO_BLOCK: () => BOX_PROPS_TO_BLOCK,
  Box: () => Box,
  StyledBox: () => StyledBox,
  getCustomElementStyles: () => getCustomElementStyles,
  safelySpreadBoxProps: () => safelySpreadBoxProps
});
var React, __create, __defProp, __getOwnPropDesc, __getOwnPropNames, __getProtoOf, __hasOwnProp, __commonJS, __copyProps, __toESM2, require_cjs, import_deepmerge, PseudoPropStyles, customStyleProps, PasteStyleProps, getPseudoStyles, getCustomElementStyles, BOX_PROPS_TO_BLOCK, safelySpreadBoxProps, coreVersionNumberPlaceholder, stylingPropsWithoutSize, shouldForwardProp, StyledBox, Box;
var init_index_es3 = __esm({
  "node_modules/@twilio-paste/box/dist/index.es.js"() {
    React = __toESM(require_react());
    init_index_es();
    init_index_es();
    init_index_es2();
    __create = Object.create;
    __defProp = Object.defineProperty;
    __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    __getOwnPropNames = Object.getOwnPropertyNames;
    __getProtoOf = Object.getPrototypeOf;
    __hasOwnProp = Object.prototype.hasOwnProperty;
    __commonJS = (cb, mod) => function() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    __copyProps = (to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames(from))
          !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      return to;
    };
    __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
    require_cjs = __commonJS({ "../../../../node_modules/deepmerge/dist/cjs.js"(exports, module) {
      "use strict";
      var isMergeableObject = function(value) {
        return isNonNullObject(value) && !isSpecial(value);
      };
      function isNonNullObject(value) {
        return !!value && typeof value == "object";
      }
      function isSpecial(value) {
        var stringValue = Object.prototype.toString.call(value);
        return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
      }
      var canUseSymbol = typeof Symbol == "function" && Symbol.for, REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
      function isReactElement(value) {
        return value.$$typeof === REACT_ELEMENT_TYPE;
      }
      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
      }
      function cloneUnlessOtherwiseSpecified(value, options) {
        return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
      }
      function defaultArrayMerge(target, source, options) {
        return target.concat(source).map(function(element) {
          return cloneUnlessOtherwiseSpecified(element, options);
        });
      }
      function getMergeFunction(key, options) {
        if (!options.customMerge)
          return deepmerge;
        var customMerge = options.customMerge(key);
        return typeof customMerge == "function" ? customMerge : deepmerge;
      }
      function getEnumerableOwnPropertySymbols(target) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
          return target.propertyIsEnumerable(symbol);
        }) : [];
      }
      function getKeys(target) {
        return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
      }
      function propertyIsOnObject(object, property) {
        try {
          return property in object;
        } catch {
          return false;
        }
      }
      function propertyIsUnsafe(target, key) {
        return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
      }
      function mergeObject(target, source, options) {
        var destination = {};
        return options.isMergeableObject(target) && getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        }), getKeys(source).forEach(function(key) {
          propertyIsUnsafe(target, key) || (propertyIsOnObject(target, key) && options.isMergeableObject(source[key]) ? destination[key] = getMergeFunction(key, options)(target[key], source[key], options) : destination[key] = cloneUnlessOtherwiseSpecified(source[key], options));
        }), destination;
      }
      function deepmerge(target, source, options) {
        options = options || {}, options.arrayMerge = options.arrayMerge || defaultArrayMerge, options.isMergeableObject = options.isMergeableObject || isMergeableObject, options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
        var sourceIsArray = Array.isArray(source), targetIsArray = Array.isArray(target), sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
        return sourceAndTargetTypesMatch ? sourceIsArray ? options.arrayMerge(target, source, options) : mergeObject(target, source, options) : cloneUnlessOtherwiseSpecified(source, options);
      }
      deepmerge.all = function(array, options) {
        if (!Array.isArray(array))
          throw new Error("first argument should be an array");
        return array.reduce(function(prev, next) {
          return deepmerge(prev, next, options);
        }, {});
      };
      var deepmerge_1 = deepmerge;
      module.exports = deepmerge_1;
    } });
    import_deepmerge = __toESM2(require_cjs());
    PseudoPropStyles = { _hover: "&:hover", _active: "&:active, &[data-active=true]", _focus: "&:focus", _focus_hover: "&:focus:hover", _focus_placeholder: "&:focus::placeholder", _visited: "&:visited", _even: "&:nth-of-type(even)", _odd: "&:nth-of-type(odd)", _disabled: "&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover", _disabled_focus: "&:disabled:focus,&[aria-disabled=true]:focus", _checked: "&:checked, &[aria-checked=true]", _checked_hover: "&:checked:hover, &[aria-checked=true]:hover", _mixed: "&:indeterminate, &[aria-checked=mixed]", _selected: "&[aria-selected=true]", _selected_hover: "&[aria-selected=true]:hover", _selected_focus: "&[aria-selected=true]:focus", _selected_focusVisible: "&[aria-selected=true]:focus-visible", _invalid: "&:invalid, &[aria-invalid=true]", _pressed: "&[aria-pressed=true]", _pressed_focus: "&[aria-pressed=true]:focus", _pressed_hover: "&[aria-pressed=true]:hover", _pressed_active: "&[aria-pressed=true]:active, &[aria-pressed=true][data-active=true]", _pressed_disabled: "&[aria-pressed=true]:disabled, &[aria-pressed=true][aria-disabled=true]", _readOnly: "&[aria-readonly=true], &[readonly]", _first: "&:first-of-type", _last: "&:last-of-type", _expanded: "&[aria-expanded=true]", _grabbed: "&[aria-grabbed=true]", _notFirst: "&:not(:first-of-type)", _notLast: "&:not(:last-of-type)", _groupHover: "[role=group]:hover &", _before: "&:before", _after: "&:after", _focusWithin: "&:focus-within", _focusVisible: "&:focus-visible", _placeholder: "&::placeholder", __moz_focus_inner: "&::-moz-focus-inner", __webkit_datetime_edit: "&::-webkit-datetime-edit", __webkit_calendar_picker_indicator_hover: "&::-webkit-calendar-picker-indicator:hover", __webkit_inner_spin_button: "&::-webkit-inner-spin-button", __webkit_outer_spin_button: "&::-webkit-outer-spin-button" };
    customStyleProps = { color: { property: "color", scale: "textColors" }, backgroundColor: { property: "backgroundColor", scale: "backgroundColors" }, borderColor: { property: "borderColor", scale: "borderColors" }, borderBottomColor: { property: "borderBottomColor", scale: "borderColors" }, borderLeftColor: { property: "borderLeftColor", scale: "borderColors" }, borderRightColor: { property: "borderRightColor", scale: "borderColors" }, borderTopColor: { property: "borderTopColor", scale: "borderColors" }, content: true, cursor: true, appearance: true, transition: true, transitionDelay: true, transform: true, animation: true, transformOrigin: true, visibility: true, userSelect: true, pointerEvents: true, boxSizing: true, resize: true, listStyleType: true, listStylePosition: true, listStyleImage: true, objectFit: true, objectPosition: true, outline: true, float: true, willChange: true, clip: true, backgroundAttachment: true, textAlign: true, textTransform: true, textDecoration: true, textOverflow: true, whiteSpace: true, wordBreak: true, wordWrap: true, overflowWrap: true, opacity: true, borderCollapse: true, borderSpacing: true, tableLayout: true, fontVariantNumeric: true, inset: true, columnGap: { property: "columnGap", scale: "space" }, rowGap: { property: "rowGap", scale: "space" }, "-moz-appearance": true };
    PasteStyleProps = system(customStyleProps);
    getPseudoStyles = (props2) => {
      let pseudoProps = Object.keys(props2).filter((propName) => propName.startsWith("_"));
      if (pseudoProps.length === 0)
        return {};
      let pseudoStyles = {};
      return pseudoProps.forEach((pseudoProp) => {
        PseudoPropStyles[pseudoProp] != null && (pseudoStyles[PseudoPropStyles[pseudoProp]] = props2[pseudoProp]);
      }), css(pseudoStyles);
    };
    getCustomElementStyles = (props2) => {
      if (props2 != null && props2.theme != null && props2.theme.elements != null) {
        let themeElements = props2.theme.elements, targetElement = props2["data-paste-element"];
        if (themeElements[targetElement] != null) {
          let elementOverrides = themeElements[targetElement], computedStyles = css(elementOverrides)(props2), { variants, ...elementStyles } = computedStyles, variantStyles = {};
          return props2.variant != null && variants != null && variants[props2.variant] != null && (variantStyles = variants[props2.variant]), () => (0, import_deepmerge.default)(elementStyles, variantStyles);
        }
      }
      return {};
    };
    BOX_PROPS_TO_BLOCK = [...LAYOUT_PROPS, ...SPACE_PROPS, ...BACKGROUND_PROPS, ...BORDER_PROPS, ...SHADOW_PROPS, ...POSITION_PROPS, ...FLEXBOX_PROPS, ...GRID_PROPS, ...TYPOGRAPHY_PROPS, ...Object.keys(PseudoPropStyles), "className", "style"];
    safelySpreadBoxProps = (props2) => Object.keys(props2).reduce((newProps, key) => (BOX_PROPS_TO_BLOCK.includes(key) || (newProps[key] = props2[key]), newProps), {});
    coreVersionNumberPlaceholder = "20.0.0";
    stylingPropsWithoutSize = props.filter((item) => item !== "size");
    shouldForwardProp = createShouldForwardProp([...stylingPropsWithoutSize, ...Object.keys({ ...customStyleProps, ...PseudoPropStyles })]);
    StyledBox = export_styled("div", { shouldForwardProp })({ boxSizing: "border-box" }, compose(space, layout, flexbox, grid, background, border, index_esm_default9, position, typography, PasteStyleProps), getPseudoStyles, getCustomElementStyles);
    Box = React.forwardRef(({ children, element = "BOX", ...props2 }, ref) => React.createElement(StyledBox, { "data-paste-element": element, "data-paste-core-version": coreVersionNumberPlaceholder, ref, ...props2 }, children));
    Box.displayName = "Box";
  }
});

// node_modules/@twilio-paste/icons/esm/helpers/IconWrapper.js
var x, d, B, S, t, l, n, s, a, c, m, f;
var init_IconWrapper = __esm({
  "node_modules/@twilio-paste/icons/esm/helpers/IconWrapper.js"() {
    x = __toESM(require_react());
    init_index_es3();
    d = Object.defineProperty;
    B = Object.defineProperties;
    S = Object.getOwnPropertyDescriptors;
    t = Object.getOwnPropertySymbols;
    l = Object.prototype.hasOwnProperty;
    n = Object.prototype.propertyIsEnumerable;
    s = (o, e, r) => e in o ? d(o, e, { enumerable: true, configurable: true, writable: true, value: r }) : o[e] = r;
    a = (o, e) => {
      for (var r in e || (e = {}))
        l.call(e, r) && s(o, r, e[r]);
      if (t)
        for (var r of t(e))
          n.call(e, r) && s(o, r, e[r]);
      return o;
    };
    c = (o, e) => B(o, S(e));
    m = (o, e) => {
      var r = {};
      for (var p in o)
        l.call(o, p) && e.indexOf(p) < 0 && (r[p] = o[p]);
      if (o != null && t)
        for (var p of t(o))
          e.indexOf(p) < 0 && n.call(o, p) && (r[p] = o[p]);
      return r;
    };
    f = x.forwardRef((h, P) => {
      var i = h, { as: o = "span", color: e = "currentColor", display: r = "block", element: p = "ICON", size: y = "sizeIcon30" } = i, I = m(i, ["as", "color", "display", "element", "size"]);
      return x.createElement(Box, c(a({}, safelySpreadBoxProps(I)), { as: o, element: p, lineHeight: "lineHeight0", display: r, color: e, size: y, ref: P, flexShrink: 0 }));
    });
    f.displayName = "IconWrapper";
  }
});

export {
  getCustomElementStyles,
  safelySpreadBoxProps,
  Box,
  index_es_exports,
  init_index_es3 as init_index_es,
  f,
  init_IconWrapper
};
//# sourceMappingURL=chunk-PZIV5PRA.js.map
