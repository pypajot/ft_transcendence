import {
  Box,
  f,
  init_IconWrapper,
  init_index_es as init_index_es5,
  safelySpreadBoxProps
} from "./chunk-PZIV5PRA.js";
import {
  init_index_es as init_index_es6,
  useUID2
} from "./chunk-GU34WTAK.js";
import {
  init_index_es as init_index_es4,
  isIconSizeTokenProp
} from "./chunk-2IGXOFGD.js";
import {
  require_prop_types
} from "./chunk-YEKUMOGJ.js";
import {
  animated,
  export_keyframes,
  export_styled,
  init_index_es,
  init_index_es2,
  init_index_es3,
  useSpring,
  useTheme
} from "./chunk-PFLXYQ37.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __esm,
  __export,
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@twilio-paste/spinner/dist/index.es.js
var index_es_exports = {};
__export(index_es_exports, {
  Spinner: () => Spinner
});
var React, import_prop_types, circleGeometry, circleCircumference, SvgKeyframes, CircleKeyframes, StyledCircleTrack, AnimatedStyledCircle, StyledSvg, Spinner;
var init_index_es7 = __esm({
  "node_modules/@twilio-paste/spinner/dist/index.es.js"() {
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_index_es6();
    init_IconWrapper();
    init_index_es3();
    init_index_es4();
    init_index_es2();
    init_index_es2();
    circleGeometry = { cx: 50, cy: 50, r: 45 };
    circleCircumference = Math.PI * 2 * 45;
    SvgKeyframes = export_keyframes`
  0%,
  15% {
    stroke-dashoffset: ${circleCircumference * 0.9999};
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: ${circleCircumference * 0.2};
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: ${circleCircumference * 0.9999};
    transform: rotate(360deg);
  }
`;
    CircleKeyframes = export_keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;
    StyledCircleTrack = export_styled.circle({ transformOrigin: "center", opacity: 0.25 });
    AnimatedStyledCircle = export_styled.circle(({ show }) => ({ transformOrigin: "center", animation: `1.5s ease-in-out infinite both ${CircleKeyframes}`, strokeDasharray: circleCircumference, opacity: show ? 1 : 0 }));
    StyledSvg = export_styled.svg({ height: "100%", width: "100%", display: "block", animation: `4.25s linear infinite both ${SvgKeyframes}` });
    Spinner = React.forwardRef(({ size, color = "currentColor", title, as, display, decorative, delay = 250, element = "SPINNER" }, ref) => {
      let titleId = `spinner-${useUID2()}`, { borderWidths: { borderWidth40 } } = useTheme(), [show, setShow] = React.useState(delay === 0);
      if (!decorative && title == null)
        throw new Error("[Spinner]: Missing a title for non-decorative icon.");
      return React.useEffect(() => {
        if (delay === 0)
          return;
        let showTimer = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(showTimer);
      }, [delay]), React.createElement(f, { as, element, display, size, color, "aria-hidden": decorative, ref }, React.createElement(StyledSvg, { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", "aria-labelledby": titleId }, title ? React.createElement("title", { id: titleId }, title) : null, React.createElement("g", { strokeWidth: borderWidth40, stroke: "currentColor", strokeLinecap: "round", fill: "transparent" }, React.createElement(StyledCircleTrack, { ...circleGeometry }), React.createElement(AnimatedStyledCircle, { show, ...circleGeometry }))));
    });
    Spinner.displayName = "Spinner";
    Spinner.propTypes = { title: import_prop_types.default.string, delay: import_prop_types.default.number, element: import_prop_types.default.string, size: isIconSizeTokenProp };
  }
});

// node_modules/@twilio-paste/icons/esm/LinkExternalIcon.js
var r, a;
var init_LinkExternalIcon = __esm({
  "node_modules/@twilio-paste/icons/esm/LinkExternalIcon.js"() {
    r = __toESM(require_react());
    init_index_es6();
    init_IconWrapper();
    a = r.forwardRef(({ as: l, display: i, element: t = "ICON", size: p, color: s, title: e, decorative: o }, c) => {
      const n2 = `LinkExternalIcon-${useUID2()}`;
      if (!o && e == null)
        throw new Error("[LinkExternalIcon]: Missing a title for non-decorative icon.");
      return r.createElement(f, { as: l, display: i, element: t, size: p, color: s, ref: c }, r.createElement("svg", { role: "img", "aria-hidden": o, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 20 20", "aria-labelledby": n2 }, e ? r.createElement("title", { id: n2 }, e) : null, r.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M8.4 4.5a.5.5 0 01.5.5v.1a.5.5 0 01-.5.5H5.6v8.8h8.8v-2.8a.5.5 0 01.41-.492l.09-.008h.1a.5.5 0 01.492.41l.008.09V15a.5.5 0 01-.41.492L15 15.5H5a.5.5 0 01-.492-.41L4.5 15V5a.5.5 0 01.41-.492L5 4.5h3.4zm6.6 0a.5.5 0 01.5.5v.1l-.001.01.001 3.29a.5.5 0 01-.5.5h-.1a.5.5 0 01-.5-.5l-.001-1.935-3.967 3.967a.611.611 0 01-.78.07l-.084-.07a.611.611 0 01-.07-.78l.07-.084L13.534 5.6H11.6a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5H15z" })));
    });
    a.displayName = "LinkExternalIcon";
  }
});

// node_modules/@twilio-paste/anchor/dist/index.es.js
var index_es_exports2 = {};
__export(index_es_exports2, {
  Anchor: () => Anchor,
  isExternalUrl: () => isExternalUrl,
  secureExternalLink: () => secureExternalLink
});
var React3, React2, import_prop_types2, React22, AnchorPropTypes, DefaultAnchor, InverseAnchor, AnchorVariants, EXTERNAL_URL_REGEX, EXTERNAL_TARGET_DEFAULT, EXTERNAL_REL_DEFAULT, isExternalUrl, secureExternalLink, Anchor;
var init_index_es8 = __esm({
  "node_modules/@twilio-paste/anchor/dist/index.es.js"() {
    React3 = __toESM(require_react());
    init_index_es5();
    init_LinkExternalIcon();
    React2 = __toESM(require_react());
    init_index_es5();
    import_prop_types2 = __toESM(require_prop_types());
    React22 = __toESM(require_react());
    init_index_es5();
    AnchorPropTypes = { children: import_prop_types2.default.node.isRequired, href: import_prop_types2.default.string.isRequired, rel: import_prop_types2.default.string, showExternal: import_prop_types2.default.bool, tabIndex: import_prop_types2.default.oneOf([0, -1]), target: import_prop_types2.default.oneOf(["_self", "_blank", "_parent", "_top"]), variant: import_prop_types2.default.oneOf(["default", "inverse"]), element: import_prop_types2.default.string, i18nExternalLinkLabel: import_prop_types2.default.string };
    DefaultAnchor = React2.forwardRef((props, ref) => React2.createElement(Box, { ...props, as: "a", color: "colorTextLink", fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", outline: "none", ref, textDecoration: "underline", _active: { color: "colorTextLinkStrongest", textDecoration: "none" }, _focus: { boxShadow: "shadowFocus", color: "colorTextLink", textDecoration: "underline" }, _hover: { color: "colorTextLinkStronger", textDecoration: "none" } }, props.children));
    DefaultAnchor.displayName = "DefaultAnchor";
    InverseAnchor = React22.forwardRef((props, ref) => React22.createElement(Box, { ...props, as: "a", color: "colorTextInverse", fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", outline: "none", ref, textDecoration: "underline", _active: { color: "colorTextInverse", textDecoration: "none" }, _focus: { boxShadow: "shadowFocusInverse", color: "colorTextInverse", textDecoration: "underline" }, _hover: { color: "colorTextInverse", textDecoration: "none" } }, props.children));
    InverseAnchor.displayName = "InverseAnchor";
    AnchorVariants = { inverse: InverseAnchor, default: DefaultAnchor };
    EXTERNAL_URL_REGEX = /^(https?:)\S*$/;
    EXTERNAL_TARGET_DEFAULT = "_blank";
    EXTERNAL_REL_DEFAULT = "noreferrer noopener";
    isExternalUrl = (url) => EXTERNAL_URL_REGEX.test(url);
    secureExternalLink = (href) => {
      if (!!isExternalUrl(href))
        return { rel: EXTERNAL_REL_DEFAULT, target: EXTERNAL_TARGET_DEFAULT };
    };
    Anchor = React3.forwardRef(({ element = "ANCHOR", variant = "default", showExternal, display, height, minHeight, maxHeight, width, minWidth, maxWidth, size, margin, marginBottom, marginLeft, marginRight, marginTop, marginX = null, marginY = null, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX = null, paddingY = null, verticalAlign, i18nExternalLinkLabel = "(link takes you to an external page)", ...props }, ref) => {
      let AnchorComponent = AnchorVariants[variant];
      return React3.createElement(AnchorComponent, { href: props.href, ref, variant, ...secureExternalLink(props.href), ...safelySpreadBoxProps(props), element, display, height, minHeight, maxHeight, width, minWidth, maxWidth, size, margin, marginBottom, marginLeft, marginRight, marginTop, marginX, marginY, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, verticalAlign }, showExternal ? React3.createElement(Box, { as: "span" }, props.children, React3.createElement(Box, { as: "span", display: "inline-block", flexShrink: 0, verticalAlign: "middle" }, React3.createElement(a, { decorative: false, title: i18nExternalLinkLabel }))) : props.children);
    });
    Anchor.displayName = "Anchor";
    Anchor.propTypes = AnchorPropTypes;
  }
});

// node_modules/@twilio-paste/icons/esm/ArrowForwardIcon.js
var r2, n;
var init_ArrowForwardIcon = __esm({
  "node_modules/@twilio-paste/icons/esm/ArrowForwardIcon.js"() {
    r2 = __toESM(require_react());
    init_index_es6();
    init_IconWrapper();
    n = r2.forwardRef(({ as: a2, display: i, element: p = "ICON", size: t, color: s, title: o, decorative: e }, w) => {
      const l = `ArrowForwardIcon-${useUID2()}`;
      if (!e && o == null)
        throw new Error("[ArrowForwardIcon]: Missing a title for non-decorative icon.");
      return r2.createElement(f, { as: a2, display: i, element: p, size: t, color: s, ref: w }, r2.createElement("svg", { role: "img", "aria-hidden": e, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 20 20", "aria-labelledby": l }, o ? r2.createElement("title", { id: l }, o) : null, r2.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M14.991 9.91l.007.05v.08l-.01.07-.01.029a.489.489 0 01-.205.272l-3.832 3.444a.596.596 0 01-.78 0 .459.459 0 01-.063-.632l.063-.069 2.957-2.659H5.513A.504.504 0 015 10a.5.5 0 01.42-.488l.093-.008h7.604l-2.956-2.658a.459.459 0 01-.063-.632l.063-.069a.598.598 0 01.704-.057l.076.057 3.832 3.444c.098.064.172.16.206.272l.012.049z" })));
    });
    n.displayName = "ArrowForwardIcon";
  }
});

// node_modules/@twilio-paste/button/dist/index.es.js
var index_es_exports3 = {};
__export(index_es_exports3, {
  Button: () => Button,
  ButtonPropTypes: () => ButtonPropTypes,
  ButtonToggleStyles: () => ToggleStyles,
  DestructiveSecondaryButtonToggleStyles: () => DestructiveSecondaryToggleStyles,
  DirectButtonPropTypes: () => DirectButtonPropTypes
});
var React13, import_prop_types3, React4, React23, React32, React42, React5, React6, React7, React8, React9, React10, React11, React12, __create, __defProp, __getOwnPropDesc, __getOwnPropNames, __getProtoOf, __hasOwnProp, __commonJS, __copyProps, __toESM2, require_cjs, DirectButtonPropTypes, ButtonPropTypes, import_deepmerge2, import_deepmerge, ResetStyles, BaseStyles, SizeStyles, ToggleStyles, DestructiveSecondaryToggleStyles, ToggleIconButtonStyles, defaultStyles, loadingStyles, disabledStyles, ButtonStyleMapping, PrimaryButton, import_deepmerge3, defaultStyles2, loadingStyles2, disabledStyles2, ButtonStyleMapping2, PrimaryIconButton, import_deepmerge4, defaultStyles3, baseLoadingStyles, loadingStyles3, baseDisabledStyles, disabledStyles3, ButtonStyleMapping3, SecondaryButton, import_deepmerge5, defaultStyles4, loadingStyles4, disabledStyles4, ButtonStyleMapping4, SecondaryIconButton, import_deepmerge6, defaultStyles5, loadingStyles5, disabledStyles5, ButtonStyleMapping5, DestructiveButton, import_deepmerge7, defaultStyles6, loadingStyles6, disabledStyles6, ButtonStyleMapping6, DestructiveIconButton, import_deepmerge8, defaultStyles7, loadingStyles7, disabledStyles7, ButtonStyleMapping7, DestructiveLinkButton, import_deepmerge9, defaultStyles8, baseLoadingStyles2, loadingStyles8, baseDisabledStyles2, disabledStyles8, ButtonStyleMapping8, DestructiveSecondaryButton, import_deepmerge10, defaultStyles9, loadingStyles9, disabledStyles9, ButtonStyleMapping9, LinkButton, import_deepmerge11, defaultStyles10, loadingStyles10, disabledStyles10, ButtonStyleMapping10, InverseButton, import_deepmerge12, defaultStyles11, loadingStyles11, disabledStyles11, ButtonStyleMapping11, InverseLinkButton, import_deepmerge13, defaultStyles12, loadingStyles12, disabledStyles12, ButtonStyleMapping12, ResetButton, AnimatedBox, getButtonSize, getButtonState, handlePropValidation, variantsWithoutBoundingBox, ButtonContents, getButtonComponent, Button;
var init_index_es9 = __esm({
  "node_modules/@twilio-paste/button/dist/index.es.js"() {
    React13 = __toESM(require_react());
    init_index_es5();
    init_index_es7();
    init_index_es8();
    init_index_es();
    init_ArrowForwardIcon();
    init_LinkExternalIcon();
    import_prop_types3 = __toESM(require_prop_types());
    React4 = __toESM(require_react());
    init_index_es5();
    React23 = __toESM(require_react());
    init_index_es5();
    React32 = __toESM(require_react());
    init_index_es5();
    React42 = __toESM(require_react());
    init_index_es5();
    React5 = __toESM(require_react());
    init_index_es5();
    React6 = __toESM(require_react());
    init_index_es5();
    React7 = __toESM(require_react());
    init_index_es5();
    React8 = __toESM(require_react());
    init_index_es5();
    React9 = __toESM(require_react());
    init_index_es5();
    React10 = __toESM(require_react());
    init_index_es5();
    React11 = __toESM(require_react());
    init_index_es5();
    React12 = __toESM(require_react());
    init_index_es5();
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
    DirectButtonPropTypes = { as: import_prop_types3.default.string, fullWidth: import_prop_types3.default.bool, href: import_prop_types3.default.string, size: import_prop_types3.default.oneOf(["small", "default", "icon", "icon_small", "reset", "rounded_small", "circle", "circle_small"]).isRequired, tabIndex: import_prop_types3.default.oneOf([0, -1]), type: import_prop_types3.default.oneOf(["submit", "button", "reset"]), disabled: import_prop_types3.default.bool, buttonState: import_prop_types3.default.oneOf(["disabled", "loading", "default"]).isRequired, variant: import_prop_types3.default.oneOf(["primary", "secondary", "destructive", "destructive_link", "destructive_secondary", "link", "inverse_link", "inverse", "reset", "primary_icon", "secondary_icon", "destructive_icon"]) };
    ButtonPropTypes = { as: import_prop_types3.default.string, element: import_prop_types3.default.string, fullWidth: import_prop_types3.default.bool, href: import_prop_types3.default.string, size: import_prop_types3.default.oneOf(["small", "default", "icon", "icon_small", "reset", "rounded_small", "circle", "circle_small"]), tabIndex: import_prop_types3.default.oneOf([0, -1]), type: import_prop_types3.default.oneOf(["submit", "button", "reset"]), disabled: import_prop_types3.default.bool, loading: import_prop_types3.default.bool, variant: import_prop_types3.default.oneOf(["primary", "secondary", "destructive", "destructive_link", "destructive_secondary", "link", "inverse_link", "inverse", "reset", "primary_icon", "secondary_icon", "destructive_icon"]).isRequired, i18nExternalLinkLabel: import_prop_types3.default.string };
    import_deepmerge2 = __toESM2(require_cjs());
    import_deepmerge = __toESM2(require_cjs());
    ResetStyles = { appearance: "none", background: "none", display: "inline-block", border: "none", outline: "none", transition: "background-color 100ms ease-in, box-shadow 100ms ease-in, color 100ms ease-in", fontFamily: "inherit", fontWeight: "fontWeightSemibold", textDecoration: "none", position: "relative", margin: "space0", _hover: { textDecoration: "none" }, _focus: { textDecoration: "none", boxShadow: "shadowFocus" }, _active: { textDecoration: "none" } };
    BaseStyles = { default: (0, import_deepmerge.default)(ResetStyles, { cursor: "pointer", _active: { boxShadow: "none" } }), disabled: (0, import_deepmerge.default)(ResetStyles, { cursor: "not-allowed" }), loading: (0, import_deepmerge.default)(ResetStyles, { cursor: "wait" }) };
    SizeStyles = { default: { paddingTop: "space30", paddingBottom: "space30", paddingLeft: "space40", paddingRight: "space40", borderRadius: "borderRadius20", fontSize: "fontSize30", lineHeight: "lineHeight20" }, small: { paddingTop: "space20", paddingBottom: "space20", paddingLeft: "space30", paddingRight: "space30", borderRadius: "borderRadius10", fontSize: "fontSize30", lineHeight: "lineHeight20" }, icon: { padding: "space30", borderRadius: "borderRadius20" }, icon_small: { padding: "space20", borderRadius: "borderRadius20" }, reset: { paddingTop: "space0", paddingRight: "space0", paddingBottom: "space0", paddingLeft: "space0", borderWidth: "borderWidth0", fontSize: "inherit" }, rounded_small: { borderRadius: "borderRadiusPill", paddingTop: "space20", paddingBottom: "space20", paddingLeft: "space30", paddingRight: "space30", fontSize: "fontSize30", lineHeight: "lineHeight20" }, circle: { padding: "space30", borderRadius: "borderRadiusCircle" }, circle_small: { padding: "space20", borderRadius: "borderRadiusCircle" } };
    ToggleStyles = { transition: "background-color 150ms ease-in, box-shadow 150ms ease-in, color 150ms ease-in", color: "colorText", backgroundColor: "colorBackgroundBody", _disabled: { backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderWeaker", color: "colorTextWeaker" }, _hover: { backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderPrimary", color: "colorTextPrimary" }, _active: { backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderPrimaryStrongest", color: "colorTextPrimaryStrongest" }, _pressed: { backgroundColor: "colorBackgroundPrimaryWeakest", boxShadow: "shadowBorderPrimary", color: "colorTextPrimary" }, _pressed_hover: { backgroundColor: "colorBackgroundPrimaryWeakest", boxShadow: "shadowBorderPrimaryStronger", color: "colorTextPrimaryStronger" }, _pressed_active: { backgroundColor: "colorBackgroundPrimaryWeakest", boxShadow: "shadowBorderPrimaryStrongest", color: "colorTextPrimaryStrongest" }, _pressed_focus: { backgroundColor: "colorBackgroundPrimaryWeakest", boxShadow: "shadowFocusShadowBorder", color: "colorTextPrimary" }, _pressed_disabled: { backgroundColor: "colorBackgroundStrong", boxShadow: "shadowBorderWeaker", color: "colorTextWeakest" } };
    DestructiveSecondaryToggleStyles = { transition: "background-color 150ms ease-in, box-shadow 150ms ease-in, color 150ms ease-in", color: "colorTextError", backgroundColor: "colorBackgroundBody", _disabled: { backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderWeaker", color: "colorTextWeaker" }, _hover: { backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderError", color: "colorTextError" }, _active: { backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderErrorStrongest", color: "colorTextErrorStrongest" }, _pressed: { backgroundColor: "colorBackgroundErrorWeakest", boxShadow: "shadowBorderError", color: "colorTextError" }, _pressed_hover: { backgroundColor: "colorBackgroundErrorWeakest", boxShadow: "shadowBorderErrorStronger", color: "colorTextErrorStronger" }, _pressed_active: { backgroundColor: "colorBackgroundErrorWeakest", boxShadow: "shadowBorderError", color: "colorTextError" }, _pressed_focus: { backgroundColor: "colorBackgroundErrorWeakest", boxShadow: "shadowFocusShadowBorder", color: "colorTextError" }, _pressed_disabled: { backgroundColor: "colorBackgroundStrong", boxShadow: "shadowBorderWeaker", color: "colorTextWeakest" } };
    ToggleIconButtonStyles = { transition: "background-color 150ms ease-in, box-shadow 150ms ease-in, color 150ms ease-in", color: "colorTextIcon", backgroundColor: "colorBackgroundBody", _hover: { backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderPrimary", color: "colorTextPrimaryStronger" }, _active: { backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderPrimaryStrongest", color: "colorTextPrimaryStrongest" }, _disabled: { backgroundColor: "colorBackgroundBody", color: "colorTextWeaker" }, _pressed: { backgroundColor: "colorBackgroundPrimaryWeakest", boxShadow: "shadowBorderPrimary", color: "colorTextPrimary" }, _pressed_hover: { backgroundColor: "colorBackgroundPrimaryWeakest", boxShadow: "shadowBorderPrimaryStronger", color: "colorTextPrimaryStronger" }, _pressed_focus: { backgroundColor: "colorBackgroundPrimaryWeakest", boxShadow: "shadowFocusShadowBorder", color: "colorTextPrimary" }, _pressed_disabled: { backgroundColor: "colorBackgroundStrong", boxShadow: "shadowBorderWeaker", color: "colorTextWeakest" } };
    defaultStyles = (0, import_deepmerge2.default)(BaseStyles.default, { color: "colorTextInverse", backgroundColor: "colorBackgroundPrimary", boxShadow: "shadowBorderPrimary", _hover: { color: "colorTextPrimary", backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderPrimary" }, _focus: { boxShadow: "shadowFocus" }, _active: { color: "colorTextPrimaryStrong", backgroundColor: "colorBackgroundPrimaryWeakest", boxShadow: "shadowBorderPrimaryStrong" } });
    loadingStyles = (0, import_deepmerge2.default)(BaseStyles.loading, { color: "colorTextPrimary", backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderWeak" });
    disabledStyles = (0, import_deepmerge2.default)(BaseStyles.disabled, { color: "colorTextWeakest", backgroundColor: "colorBackgroundStrong", boxShadow: "shadowBorderWeaker" });
    ButtonStyleMapping = { default: defaultStyles, loading: loadingStyles, disabled: disabledStyles };
    PrimaryButton = React4.forwardRef(({ size, buttonState, fullWidth, ...props }, ref) => React4.createElement(Box, { ref, width: fullWidth ? "100%" : "auto", ...safelySpreadBoxProps(props), ...ButtonStyleMapping[buttonState], ...SizeStyles[size] }));
    PrimaryButton.defaultProps = { as: "button" };
    PrimaryButton.displayName = "PrimaryButton";
    import_deepmerge3 = __toESM2(require_cjs());
    defaultStyles2 = (0, import_deepmerge3.default)(BaseStyles.default, { color: "colorTextPrimary", _hover: { color: "colorTextPrimaryStrongest" }, _active: { color: "colorTextPrimaryStrongest" } });
    loadingStyles2 = (0, import_deepmerge3.default)(BaseStyles.loading, { color: "colorTextPrimary" });
    disabledStyles2 = (0, import_deepmerge3.default)(BaseStyles.disabled, { color: "colorTextWeaker" });
    ButtonStyleMapping2 = { default: defaultStyles2, loading: loadingStyles2, disabled: disabledStyles2 };
    PrimaryIconButton = React23.forwardRef(({ size, buttonState, fullWidth, ...props }, ref) => React23.createElement(Box, { ref, width: fullWidth ? "100%" : "auto", ...safelySpreadBoxProps(props), ...ButtonStyleMapping2[buttonState], ...SizeStyles[size] }));
    PrimaryIconButton.defaultProps = { as: "button" };
    PrimaryIconButton.displayName = "PrimaryIconButton";
    import_deepmerge4 = __toESM2(require_cjs());
    defaultStyles3 = (0, import_deepmerge4.default)(BaseStyles.default, { color: "colorText", backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderWeak", _hover: { color: "colorTextPrimary", backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderPrimary" }, _focus: { boxShadow: "shadowFocusShadowBorder" }, _active: { color: "colorTextPrimaryStrong", backgroundColor: "colorBackgroundPrimaryWeakest", boxShadow: "shadowBorderPrimaryStrong" } });
    baseLoadingStyles = { color: "colorTextPrimary", backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderWeak" };
    loadingStyles3 = (0, import_deepmerge4.default)(BaseStyles.loading, { ...baseLoadingStyles, _hover: baseLoadingStyles, _active: baseLoadingStyles, _focus: baseLoadingStyles });
    baseDisabledStyles = { color: "colorTextWeaker", backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderWeaker" };
    disabledStyles3 = (0, import_deepmerge4.default)(BaseStyles.disabled, { ...baseDisabledStyles, _hover: baseDisabledStyles, _active: baseDisabledStyles, _focus: baseDisabledStyles, _pressed: { backgroundColor: "colorBackgroundStrong", color: "colorTextWeak", boxShadow: "none" }, _pressed_hover: { backgroundColor: "colorBackgroundStrong", color: "colorTextWeak", boxShadow: "none" } });
    ButtonStyleMapping3 = { default: defaultStyles3, loading: loadingStyles3, disabled: disabledStyles3 };
    SecondaryButton = React32.forwardRef(({ size, buttonState, fullWidth, pressed, ...props }, ref) => {
      let toggleStyles = pressed === void 0 ? {} : ToggleStyles;
      return React32.createElement(Box, { ref, width: fullWidth ? "100%" : "auto", "aria-pressed": pressed, ...safelySpreadBoxProps(props), ...ButtonStyleMapping3[buttonState], ...toggleStyles, ...SizeStyles[size] });
    });
    SecondaryButton.defaultProps = { as: "button" };
    SecondaryButton.displayName = "SecondaryButton";
    import_deepmerge5 = __toESM2(require_cjs());
    defaultStyles4 = (0, import_deepmerge5.default)(BaseStyles.default, { color: "colorTextIcon", _hover: { color: "colorTextPrimaryStrongest" }, _active: { color: "colorTextPrimaryStrongest" } });
    loadingStyles4 = (0, import_deepmerge5.default)(BaseStyles.loading, { color: "colorTextPrimary" });
    disabledStyles4 = (0, import_deepmerge5.default)(BaseStyles.disabled, { color: "colorTextWeaker", _pressed: { backgroundColor: "colorBackgroundStrong", color: "colorTextWeak" }, _pressed_hover: { backgroundColor: "colorBackgroundStrong", color: "colorTextWeak" } });
    ButtonStyleMapping4 = { default: defaultStyles4, loading: loadingStyles4, disabled: disabledStyles4 };
    SecondaryIconButton = React42.forwardRef(({ size, buttonState, fullWidth, pressed, ...props }, ref) => {
      let toggleStyles = pressed === void 0 ? {} : ToggleIconButtonStyles;
      return React42.createElement(Box, { ref, "aria-pressed": pressed, width: fullWidth ? "100%" : "auto", ...safelySpreadBoxProps(props), ...toggleStyles, ...ButtonStyleMapping4[buttonState], ...SizeStyles[size] });
    });
    SecondaryIconButton.defaultProps = { as: "button" };
    SecondaryIconButton.displayName = "SecondaryIconButton";
    import_deepmerge6 = __toESM2(require_cjs());
    defaultStyles5 = (0, import_deepmerge6.default)(BaseStyles.default, { color: "colorTextInverse", backgroundColor: "colorBackgroundDestructive", boxShadow: "shadowBorderDestructive", _hover: { color: "colorTextDestructive", backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderDestructive" }, _focus: { boxShadow: "shadowFocus" }, _active: { color: "colorTextDestructive", backgroundColor: "colorBackgroundDestructiveWeakest", boxShadow: "shadowBorderDestructive" } });
    loadingStyles5 = (0, import_deepmerge6.default)(BaseStyles.loading, { color: "colorTextDestructive", backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderWeak" });
    disabledStyles5 = (0, import_deepmerge6.default)(BaseStyles.disabled, { color: "colorTextWeakest", backgroundColor: "colorBackgroundStrong", boxShadow: "shadowBorderWeaker" });
    ButtonStyleMapping5 = { default: defaultStyles5, loading: loadingStyles5, disabled: disabledStyles5 };
    DestructiveButton = React5.forwardRef(({ size, buttonState, fullWidth, ...props }, ref) => React5.createElement(Box, { ref, width: fullWidth ? "100%" : "auto", ...safelySpreadBoxProps(props), ...ButtonStyleMapping5[buttonState], ...SizeStyles[size] }));
    DestructiveButton.defaultProps = { as: "button" };
    DestructiveButton.displayName = "DestructiveButton";
    import_deepmerge7 = __toESM2(require_cjs());
    defaultStyles6 = (0, import_deepmerge7.default)(BaseStyles.default, { color: "colorTextDestructive", _hover: { color: "colorTextDestructiveStrongest" }, _active: { color: "colorTextDestructiveStrongest" } });
    loadingStyles6 = (0, import_deepmerge7.default)(BaseStyles.loading, { color: "colorTextDestructive" });
    disabledStyles6 = (0, import_deepmerge7.default)(BaseStyles.disabled, { color: "colorTextWeaker" });
    ButtonStyleMapping6 = { default: defaultStyles6, loading: loadingStyles6, disabled: disabledStyles6 };
    DestructiveIconButton = React6.forwardRef(({ size, buttonState, fullWidth, ...props }, ref) => React6.createElement(Box, { ref, width: fullWidth ? "100%" : "auto", ...safelySpreadBoxProps(props), ...ButtonStyleMapping6[buttonState], ...SizeStyles[size] }));
    DestructiveIconButton.defaultProps = { as: "button" };
    DestructiveIconButton.displayName = "DestructiveIconButton";
    import_deepmerge8 = __toESM2(require_cjs());
    defaultStyles7 = (0, import_deepmerge8.default)(BaseStyles.default, { color: "colorTextLinkDestructive", textAlign: "left", transition: "none", _hover: { color: "colorTextLinkDestructiveStrongest", textDecoration: "underline" }, _active: { color: "colorTextLinkDestructiveStrongest", textDecoration: "underline" } });
    loadingStyles7 = (0, import_deepmerge8.default)(BaseStyles.loading, { color: "colorTextLinkDestructive", textAlign: "left", _hover: { color: "colorTextLinkDestructiveStronger" }, _active: { color: "colorTextLinkDestructiveStronger" }, _focus: { color: "colorTextLinkDestructiveStronger" } });
    disabledStyles7 = (0, import_deepmerge8.default)(BaseStyles.disabled, { color: "colorTextWeaker", textAlign: "left", _hover: { color: "colorTextLinkDestructiveWeak" }, _active: { color: "colorTextLinkDestructiveWeak" }, _focus: { color: "colorTextLinkDestructiveWeak" } });
    ButtonStyleMapping7 = { default: defaultStyles7, loading: loadingStyles7, disabled: disabledStyles7 };
    DestructiveLinkButton = React7.forwardRef(({ size, buttonState, fullWidth, ...props }, ref) => React7.createElement(Box, { ref, width: fullWidth ? "100%" : "auto", ...safelySpreadBoxProps(props), ...ButtonStyleMapping7[buttonState], ...SizeStyles[size] }));
    DestructiveLinkButton.defaultProps = { as: "a" };
    DestructiveLinkButton.displayName = "DestructiveLinkButton";
    import_deepmerge9 = __toESM2(require_cjs());
    defaultStyles8 = (0, import_deepmerge9.default)(BaseStyles.default, { color: "colorTextDestructive", backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderWeak", _hover: { color: "colorTextDestructive", backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderDestructive" }, _focus: { boxShadow: "shadowFocusShadowBorder" }, _active: { color: "colorTextDestructive", backgroundColor: "colorBackgroundDestructiveWeakest", boxShadow: "shadowBorderDestructive" } });
    baseLoadingStyles2 = { color: "colorTextDestructive", backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderWeak" };
    loadingStyles8 = (0, import_deepmerge9.default)(BaseStyles.loading, { ...baseLoadingStyles2, _hover: baseLoadingStyles2, _active: baseLoadingStyles2, _focus: baseLoadingStyles2 });
    baseDisabledStyles2 = { color: "colorTextWeaker", backgroundColor: "colorBackgroundBody", boxShadow: "shadowBorderWeaker" };
    disabledStyles8 = (0, import_deepmerge9.default)(BaseStyles.disabled, { ...baseDisabledStyles2, _hover: baseDisabledStyles2, _active: baseDisabledStyles2, _focus: baseDisabledStyles2 });
    ButtonStyleMapping8 = { default: defaultStyles8, loading: loadingStyles8, disabled: disabledStyles8 };
    DestructiveSecondaryButton = React8.forwardRef(({ size, buttonState, fullWidth, pressed, ...props }, ref) => {
      let toggleStyles = pressed === void 0 ? {} : DestructiveSecondaryToggleStyles;
      return React8.createElement(Box, { ref, width: fullWidth ? "100%" : "auto", "aria-pressed": pressed, ...safelySpreadBoxProps(props), ...ButtonStyleMapping8[buttonState], ...toggleStyles, ...SizeStyles[size] });
    });
    DestructiveSecondaryButton.defaultProps = { as: "button" };
    DestructiveSecondaryButton.displayName = "DestructiveSecondaryButton";
    import_deepmerge10 = __toESM2(require_cjs());
    defaultStyles9 = (0, import_deepmerge10.default)(BaseStyles.default, { color: "colorTextPrimary", textAlign: "left", transition: "none", _hover: { color: "colorTextPrimaryStrongest", textDecoration: "underline" }, _active: { color: "colorTextPrimaryStrongest", textDecoration: "underline" } });
    loadingStyles9 = (0, import_deepmerge10.default)(BaseStyles.loading, { color: "colorTextPrimary", textAlign: "left" });
    disabledStyles9 = (0, import_deepmerge10.default)(BaseStyles.disabled, { color: "colorTextWeaker", textAlign: "left" });
    ButtonStyleMapping9 = { default: defaultStyles9, loading: loadingStyles9, disabled: disabledStyles9 };
    LinkButton = React9.forwardRef(({ size, buttonState, fullWidth, ...props }, ref) => React9.createElement(Box, { ref, width: fullWidth ? "100%" : "auto", ...safelySpreadBoxProps(props), ...ButtonStyleMapping9[buttonState], ...SizeStyles[size] }));
    LinkButton.defaultProps = { as: "a" };
    LinkButton.displayName = "LinkButton";
    import_deepmerge11 = __toESM2(require_cjs());
    defaultStyles10 = (0, import_deepmerge11.default)(BaseStyles.default, { color: "colorTextInverse", backgroundColor: "colorBackgroundInverse", boxShadow: "shadowBorderInverseWeaker", _hover: { color: "colorTextInverse", backgroundColor: "colorBackgroundInverseStrong", boxShadow: "shadowBorderInverseStronger" }, _focus: { boxShadow: "shadowFocusInverse" }, _active: { color: "colorTextInverse", backgroundColor: "colorBackgroundInverseStrong", boxShadow: "shadowBorderInverseStrongest" } });
    loadingStyles10 = (0, import_deepmerge11.default)(BaseStyles.loading, { color: "colorTextInverse", backgroundColor: "colorBackgroundInverseStrong", boxShadow: "shadowBorderInverseWeaker" });
    disabledStyles10 = (0, import_deepmerge11.default)(BaseStyles.disabled, { color: "colorTextInverseWeakest", backgroundColor: "colorBackgroundInverseStrong", boxShadow: "shadowBorderInverseWeakest" });
    ButtonStyleMapping10 = { default: defaultStyles10, loading: loadingStyles10, disabled: disabledStyles10 };
    InverseButton = React10.forwardRef(({ size, buttonState, fullWidth, ...props }, ref) => React10.createElement(Box, { ref, width: fullWidth ? "100%" : "auto", ...safelySpreadBoxProps(props), ...ButtonStyleMapping10[buttonState], ...SizeStyles[size] }));
    InverseButton.defaultProps = { as: "button" };
    InverseButton.displayName = "InverseButton";
    import_deepmerge12 = __toESM2(require_cjs());
    defaultStyles11 = (0, import_deepmerge12.default)(BaseStyles.default, { color: "colorTextInverse", textAlign: "left", transition: "none", _hover: { color: "colorTextInverseWeaker", textDecoration: "underline" }, _focus: { boxShadow: "shadowFocusInverse" }, _active: { color: "colorTextInverseWeaker", textDecoration: "underline" } });
    loadingStyles11 = (0, import_deepmerge12.default)(BaseStyles.loading, { color: "colorTextInverse", textAlign: "left" });
    disabledStyles11 = (0, import_deepmerge12.default)(BaseStyles.disabled, { color: "colorTextInverseWeakest", textAlign: "left" });
    ButtonStyleMapping11 = { default: defaultStyles11, loading: loadingStyles11, disabled: disabledStyles11 };
    InverseLinkButton = React11.forwardRef(({ size, buttonState, fullWidth, ...props }, ref) => React11.createElement(Box, { ref, width: fullWidth ? "100%" : "auto", ...safelySpreadBoxProps(props), ...ButtonStyleMapping11[buttonState], ...SizeStyles[size] }));
    InverseLinkButton.defaultProps = { as: "a" };
    InverseLinkButton.displayName = "InverseLinkButton";
    import_deepmerge13 = __toESM2(require_cjs());
    defaultStyles12 = (0, import_deepmerge13.default)(BaseStyles.default, { fontWeight: "inherit", color: "inherit" });
    loadingStyles12 = (0, import_deepmerge13.default)(BaseStyles.loading, { fontSize: "inherit", fontWeight: "inherit" });
    disabledStyles12 = (0, import_deepmerge13.default)(BaseStyles.disabled, { fontSize: "inherit", fontWeight: "inherit" });
    ButtonStyleMapping12 = { default: defaultStyles12, loading: loadingStyles12, disabled: disabledStyles12 };
    ResetButton = React12.forwardRef(({ size, buttonState, fullWidth, ...props }, ref) => React12.createElement(Box, { ref, width: fullWidth ? "100%" : "auto", ...ButtonStyleMapping12[buttonState], ...SizeStyles[size], ...props }));
    ResetButton.defaultProps = { as: "button" };
    ResetButton.displayName = "ResetButton";
    AnimatedBox = animated(Box);
    getButtonSize = (variant, children, size) => {
      let smartSize = "default";
      return size != null ? smartSize = size : variant === "link" || variant === "destructive_link" || variant === "reset" ? smartSize = "reset" : React13.Children.count(children) === 1 && React13.Children.forEach(children, (child) => {
        React13.isValidElement(child) && typeof child.type.displayName == "string" && child.type.displayName.includes("Icon") && (smartSize = "icon");
      }), smartSize;
    };
    getButtonState = (disabled, loading) => disabled ? "disabled" : loading ? "loading" : "default";
    handlePropValidation = ({ as, href, tabIndex, variant, size, fullWidth, children, disabled, loading, pressed }) => {
      let hasHref = href != null && href !== "", hasTabIndex = tabIndex != null;
      if (as !== "a" && hasHref)
        throw new Error(`[Paste: Button] You cannot pass href into a button without the 'a' tag.  Use 'as="a"'.`);
      if (as === "a") {
        if (!hasHref)
          throw new Error("[Paste: Button] Missing href prop for link button.");
        if (variant === "link" || variant === "inverse_link")
          throw new Error("[Paste: Button] Using Button component as an Anchor. Use the Paste Anchor component instead.");
        if (variant !== "primary" && variant !== "secondary" && variant !== "reset" && variant !== "inverse")
          throw new Error('[Paste: Button] <Button as="a"> only works with the following variants: primary and secondary.');
        if (disabled || loading)
          throw new Error('[Paste: Button] <Button as="a"> cannot be disabled or loading.');
      }
      if (variant === "reset" && size !== "reset")
        throw new Error('[Paste: Button] The "RESET" variant can only be used with the "RESET" size.');
      if ((size === "icon" || size === "icon_small" || size === "circle" || size === "circle_small") && fullWidth)
        throw new Error("[Paste: Button] Icon buttons should not be fullWidth.");
      if (children == null)
        throw new Error("[Paste: Button] Must have non-null children.");
      if (hasTabIndex && !(tabIndex === 0 || tabIndex === -1))
        throw new Error("[Paste: Button] tabIndex must be 0 or -1.");
      if (pressed && !(variant === "secondary" || variant === "secondary_icon" || variant === "destructive_secondary"))
        throw new Error('[Paste: Button] pressed can only be used with "secondary" and "secondary_icon" and "destructive_secondary" variants.');
    };
    variantsWithoutBoundingBox = /* @__PURE__ */ new Set(["link", "destructive_link", "inverse_link", "reset"]);
    ButtonContents = ({ buttonState, children, showLoading, variant }) => {
      let buttonVariantHasBoundingBox = variant && variantsWithoutBoundingBox.has(variant);
      return React13.createElement(React13.Fragment, null, React13.createElement(Box, { as: "span", display: "flex", textDecoration: "inherit", opacity: buttonState === "loading" ? "0" : "1", justifyContent: buttonVariantHasBoundingBox ? null : "center", columnGap: "space20", alignItems: "center", width: "100%" }, children), showLoading ? React13.createElement(Box, { as: "span", position: "absolute", top: 0, right: 0, bottom: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", lineHeight: "lineHeight30" }, React13.createElement(Spinner, { decorative: true, delay: 0 })) : null);
    };
    ButtonContents.displayName = "ButtonContents";
    getButtonComponent = (variant) => {
      switch (variant) {
        case "primary_icon":
          return PrimaryIconButton;
        case "secondary":
          return SecondaryButton;
        case "secondary_icon":
          return SecondaryIconButton;
        case "destructive":
          return DestructiveButton;
        case "destructive_icon":
          return DestructiveIconButton;
        case "destructive_secondary":
          return DestructiveSecondaryButton;
        case "link":
          return LinkButton;
        case "destructive_link":
          return DestructiveLinkButton;
        case "reset":
          return ResetButton;
        case "inverse":
          return InverseButton;
        case "inverse_link":
          return InverseLinkButton;
        case "primary":
        default:
          return PrimaryButton;
      }
    };
    Button = React13.forwardRef(({ element = "BUTTON", i18nExternalLinkLabel = "(link takes you to an external page)", ...props }, ref) => {
      let { size, variant, children, disabled, loading, ...rest } = props, [hovered, setHovered] = React13.useState(false), arrowIconStyles = useSpring({ translateX: hovered ? "4px" : "0px", config: { mass: 0.1, tension: 275, friction: 16 } }), smartDefaultSize = React13.useMemo(() => getButtonSize(variant, children, size), [size, variant, children]);
      handlePropValidation({ ...props, size: smartDefaultSize });
      let buttonState = getButtonState(disabled, loading), showLoading = buttonState === "loading", showDisabled = buttonState !== "default", ButtonComponent = getButtonComponent(variant), externalLinkProps = props.href != null ? secureExternalLink(props.href) : null, injectIconChildren = children;
      return props.as === "a" && props.href != null && typeof children == "string" && variant !== "reset" && (injectIconChildren = React13.createElement(React13.Fragment, null, children, externalLinkProps != null ? React13.createElement(a, { decorative: false, title: i18nExternalLinkLabel }) : React13.createElement(AnimatedBox, { style: arrowIconStyles }, React13.createElement(n, { decorative: true })))), React13.createElement(ButtonComponent, { ...externalLinkProps, ...rest, onMouseEnter: (event) => {
        typeof rest.onMouseEnter == "function" && rest.onMouseEnter(event), setHovered(true);
      }, onMouseLeave: (event) => {
        typeof rest.onMouseLeave == "function" && rest.onMouseLeave(event), setHovered(false);
      }, buttonState, disabled: showDisabled, element, variant, size: smartDefaultSize, "aria-busy": buttonState === "loading" ? "true" : "false", ref }, React13.createElement(ButtonContents, { buttonState, showLoading, variant }, injectIconChildren));
    });
    Button.defaultProps = { as: "button", fullWidth: false, disabled: false, loading: false, type: "button", variant: "primary" };
    Button.propTypes = ButtonPropTypes;
    Button.displayName = "Button";
  }
});

export {
  Spinner,
  index_es_exports,
  init_index_es7 as init_index_es,
  a,
  init_LinkExternalIcon,
  secureExternalLink,
  Anchor,
  index_es_exports2,
  init_index_es8 as init_index_es2,
  n,
  init_ArrowForwardIcon,
  DirectButtonPropTypes,
  ButtonPropTypes,
  ToggleStyles,
  DestructiveSecondaryToggleStyles,
  Button,
  index_es_exports3,
  init_index_es9 as init_index_es3
};
//# sourceMappingURL=chunk-TKHMU2RL.js.map
