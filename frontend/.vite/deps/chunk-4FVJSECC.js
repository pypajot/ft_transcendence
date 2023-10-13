import {
  OVERFLOW_PROPS,
  SHADOW_PROPS,
  SPACE_PROPS,
  TYPOGRAPHY_PROPS,
  init_index_es as init_index_es2
} from "./chunk-2IGXOFGD.js";
import {
  compose,
  createShouldForwardProp,
  css,
  display,
  export_styled,
  index_esm_default9,
  init_index_es2 as init_index_es,
  overflow,
  position,
  props,
  space,
  system,
  typography,
  verticalAlign
} from "./chunk-PFLXYQ37.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __esm,
  __export,
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@twilio-paste/text/dist/index.es.js
var index_es_exports = {};
__export(index_es_exports, {
  StyledText: () => StyledText,
  TEXT_PROPS_TO_BLOCK: () => TEXT_PROPS_TO_BLOCK,
  Text: () => Text,
  safelySpreadTextProps: () => safelySpreadTextProps
});
var React, __create, __defProp, __getOwnPropDesc, __getOwnPropNames, __getProtoOf, __hasOwnProp, __commonJS, __copyProps, __toESM2, require_cjs, import_deepmerge, PseudoPropStyles, customStyleProps, PasteStyleProps, getPseudoStyles, getCustomElementStyles, TEXT_PROPS_TO_BLOCK, safelySpreadTextProps, coreVersionNumberPlaceholder, shouldForwardProp, StyledText, Text;
var init_index_es3 = __esm({
  "node_modules/@twilio-paste/text/dist/index.es.js"() {
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
    PseudoPropStyles = { _hover: "&:hover", _active: "&:active, &[data-active=true]", _focus: "&:focus", _visited: "&:visited", _even: "&:nth-of-type(even)", _odd: "&:nth-of-type(odd)", _disabled: "&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover", _checked: "&:checked, &[aria-checked=true]", _mixed: "&:indeterminate, &[aria-checked=mixed]", _selected: "&[aria-selected=true]", _selected_hover: "&[aria-selected=true]:hover", _selected_focus: "&[aria-selected=true]:focus", _selected_focusVisible: "&[aria-selected=true]:focus-visible", _invalid: "&:invalid, &[aria-invalid=true]", _pressed: "&[aria-pressed=true]", _readOnly: "&[aria-readonly=true], &[readonly]", _first: "&:first-of-type", _last: "&:last-of-type", _expanded: "&[aria-expanded=true]", _grabbed: "&[aria-grabbed=true]", _notFirst: "&:not(:first-of-type)", _notLast: "&:not(:last-of-type)", _before: "&:before", _after: "&:after", _focusWithin: "&:focus-within" };
    customStyleProps = { color: { property: "color", scale: "textColors" }, cursor: true, outline: true, transition: true, transitionDelay: true, textDecoration: true, textTransform: true, whiteSpace: true, wordBreak: true, wordWrap: true, fontVariantNumeric: true, textOverflow: true, overflowWrap: true, listStyleType: true, listStylePosition: true, listStyleImage: true };
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
    TEXT_PROPS_TO_BLOCK = [...SHADOW_PROPS, ...SPACE_PROPS, ...TYPOGRAPHY_PROPS, ...OVERFLOW_PROPS, ...Object.keys(PseudoPropStyles), "display", "verticalAlign", "className", "style"];
    safelySpreadTextProps = (props2) => Object.keys(props2).reduce((newProps, key) => (TEXT_PROPS_TO_BLOCK.includes(key) || (newProps[key] = props2[key]), newProps), {});
    coreVersionNumberPlaceholder = "20.0.0";
    shouldForwardProp = createShouldForwardProp([...props, ...Object.keys({ ...customStyleProps, ...PseudoPropStyles })]);
    StyledText = export_styled("div", { shouldForwardProp })({ margin: 0, padding: 0 }, compose(index_esm_default9, display, overflow, position, space, typography, verticalAlign, PasteStyleProps), getPseudoStyles, getCustomElementStyles);
    Text = React.forwardRef(({ children, color = "colorText", fontSize = "fontSize30", lineHeight = "lineHeight30", element = "TEXT", ...props2 }, ref) => React.createElement(StyledText, { "data-paste-element": element, "data-paste-core-version": coreVersionNumberPlaceholder, ref, color, fontSize, lineHeight, ...props2 }, children));
    Text.displayName = "Text";
  }
});

export {
  safelySpreadTextProps,
  Text,
  index_es_exports,
  init_index_es3 as init_index_es
};
//# sourceMappingURL=chunk-4FVJSECC.js.map
