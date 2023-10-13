import {
  require_prop_types
} from "./chunk-YEKUMOGJ.js";
import {
  DefaultTheme,
  init_index_es3 as init_index_es
} from "./chunk-PFLXYQ37.js";
import {
  __esm,
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@twilio-paste/style-props/dist/index.es.js
var import_prop_types, import_prop_types2, import_prop_types3, BACKGROUND_PROPS, BORDER_RADIUS_PROPS, BORDER_WIDTH_PROPS, BORDER_COLOR_PROPS, BORDER_STYLE_PROPS, BORDER_PROPS, FLEXBOX_PROPS, GRID_PROPS, OVERFLOW_PROPS, LAYOUT_PROPS, POSITION_PROPS, SHADOW_PROPS, MARGIN_PROPS, PADDING_PROPS, GAP_PROPS, SPACE_PROPS, TYPOGRAPHY_PROPS, propValidator, BackgroundColorOptions, isBackgroundColorTokenProp, BorderRadiusOptions, BorderWidthOptions, BorderColorOptions, isBorderRadiusTokenProp, isBorderWidthTokenProp, isBorderColorTokenProp, ResponsiveProp, IconSizeOptions, isWidthTokenProp, isMinWidthTokenProp, isMaxWidthTokenProp, isHeightTokenProp, isMinHeightTokenProp, isMaxHeightTokenProp, isIconSizeTokenProp, ZIndexOptions, isZIndexTokenProp, BoxShadowOptions, isBoxShadowTokenProp, SpaceOptions, MarginOptions, isSpaceTokenProp, isPaddingTokenProp, isMarginTokenProp, isGapTokenProp, FontFamilyOptions, FontSizeOptions, FontWeightOptions, LineHeightOptions, TextColorOptions, isFontFamilyTokenProp, isFontSizeTokenProp, isFontWeightTokenProp, isLineHeightTokenProp, isTextColorTokenProp, StyleResetProp;
var init_index_es2 = __esm({
  "node_modules/@twilio-paste/style-props/dist/index.es.js"() {
    init_index_es();
    init_index_es();
    import_prop_types = __toESM(require_prop_types());
    init_index_es();
    import_prop_types2 = __toESM(require_prop_types());
    init_index_es();
    init_index_es();
    init_index_es();
    init_index_es();
    import_prop_types3 = __toESM(require_prop_types());
    BACKGROUND_PROPS = ["background", "backgroundColor", "backgroundImage", "backgroundSize", "backgroundPosition", "backgroundRepeat", "backgroundAttachment"];
    BORDER_RADIUS_PROPS = ["borderRadius", "borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"];
    BORDER_WIDTH_PROPS = ["borderWidth", "borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"];
    BORDER_COLOR_PROPS = ["borderColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"];
    BORDER_STYLE_PROPS = ["borderStyle", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle"];
    BORDER_PROPS = [...BORDER_RADIUS_PROPS, ...BORDER_WIDTH_PROPS, ...BORDER_COLOR_PROPS, ...BORDER_STYLE_PROPS, "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderX", "borderY"];
    FLEXBOX_PROPS = ["alignContent", "alignItems", "alignSelf", "flex", "flexBasis", "flexDirection", "flexGrow", "flexShrink", "flexWrap", "justifyContent", "justifyItems", "justifySelf", "order"];
    GRID_PROPS = ["gridColumn", "gridRow", "gridAutoFlow", "gridAutoColumns", "gridAutoRows", "gridTemplateColumns", "gridTemplateRows", "gridTemplateAreas", "gridArea"];
    OVERFLOW_PROPS = ["overflow", "overflowX", "overflowY"];
    LAYOUT_PROPS = [...OVERFLOW_PROPS, "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "size", "display", "verticalAlign"];
    POSITION_PROPS = ["position", "left", "right", "top", "bottom", "zIndex"];
    SHADOW_PROPS = ["boxShadow", "textShadow"];
    MARGIN_PROPS = ["margin", "m", "marginTop", "mt", "marginRight", "mr", "marginBottom", "mb", "marginLeft", "ml", "marginX", "mx", "marginY", "my"];
    PADDING_PROPS = ["padding", "p", "paddingTop", "pt", "paddingRight", "pr", "paddingBottom", "pb", "paddingLeft", "pl", "paddingX", "px", "paddingY", "py"];
    GAP_PROPS = ["columnGap", "rowGap"];
    SPACE_PROPS = [...MARGIN_PROPS, ...PADDING_PROPS, ...GAP_PROPS];
    TYPOGRAPHY_PROPS = ["fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "textAlign", "color", "textDecoration", "textOverflow", "textTransform", "whiteSpace", "wordBreak", "wordWrap", "overflowWrap"];
    propValidator = (optionsList) => (props, propName, componentName) => {
      let suppliedValue = props[propName], propError = new Error(`[${componentName}]: invalid prop supplied "${propName}=${suppliedValue}", expected a token value. See https://paste.twilio.design/tokens for available options.`), isInvalidToken = (value) => !optionsList.includes(value);
      if (suppliedValue != null) {
        if (Array.isArray(suppliedValue)) {
          for (let value of suppliedValue)
            if (isInvalidToken(value))
              return propError;
        } else if (isInvalidToken(suppliedValue))
          return propError;
      }
      return null;
    };
    BackgroundColorOptions = ["none", "transparent", ...Object.keys(DefaultTheme.backgroundColors)];
    isBackgroundColorTokenProp = propValidator(BackgroundColorOptions);
    BorderRadiusOptions = Object.keys(DefaultTheme.radii);
    BorderWidthOptions = Object.keys(DefaultTheme.borderWidths);
    BorderColorOptions = ["transparent", ...Object.keys(DefaultTheme.borderColors)];
    isBorderRadiusTokenProp = propValidator(BorderRadiusOptions);
    isBorderWidthTokenProp = propValidator(BorderWidthOptions);
    isBorderColorTokenProp = propValidator(BorderColorOptions);
    ResponsiveProp = (type) => import_prop_types2.default.oneOfType([type, import_prop_types2.default.arrayOf(type)]);
    IconSizeOptions = Object.keys(DefaultTheme.iconSizes);
    isWidthTokenProp = ResponsiveProp(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]));
    isMinWidthTokenProp = ResponsiveProp(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]));
    isMaxWidthTokenProp = ResponsiveProp(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]));
    isHeightTokenProp = ResponsiveProp(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]));
    isMinHeightTokenProp = ResponsiveProp(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]));
    isMaxHeightTokenProp = ResponsiveProp(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]));
    isIconSizeTokenProp = propValidator(IconSizeOptions);
    ZIndexOptions = Object.keys(DefaultTheme.zIndices);
    isZIndexTokenProp = propValidator(ZIndexOptions);
    BoxShadowOptions = ["none", ...Object.keys(DefaultTheme.shadows)];
    isBoxShadowTokenProp = propValidator(BoxShadowOptions);
    SpaceOptions = Object.keys(DefaultTheme.space);
    MarginOptions = ["auto", ...Object.keys(DefaultTheme.space)];
    isSpaceTokenProp = propValidator(SpaceOptions);
    isPaddingTokenProp = propValidator(SpaceOptions);
    isMarginTokenProp = propValidator(MarginOptions);
    isGapTokenProp = propValidator(SpaceOptions);
    FontFamilyOptions = ["inherit", ...Object.keys(DefaultTheme.fonts)];
    FontSizeOptions = ["100%", "inherit", ...Object.keys(DefaultTheme.fontSizes)];
    FontWeightOptions = ["inherit", ...Object.keys(DefaultTheme.fontWeights)];
    LineHeightOptions = ["unset", "inherit", ...Object.keys(DefaultTheme.lineHeights)];
    TextColorOptions = ["currentColor", "inherit", ...Object.keys(DefaultTheme.textColors)];
    isFontFamilyTokenProp = propValidator(FontFamilyOptions);
    isFontSizeTokenProp = propValidator(FontSizeOptions);
    isFontWeightTokenProp = propValidator(FontWeightOptions);
    isLineHeightTokenProp = propValidator(LineHeightOptions);
    isTextColorTokenProp = propValidator(TextColorOptions);
    StyleResetProp = import_prop_types3.default.oneOf(["none", "inherit", "initial", "unset"]);
  }
});

export {
  BACKGROUND_PROPS,
  BORDER_PROPS,
  FLEXBOX_PROPS,
  GRID_PROPS,
  OVERFLOW_PROPS,
  LAYOUT_PROPS,
  POSITION_PROPS,
  SHADOW_PROPS,
  SPACE_PROPS,
  TYPOGRAPHY_PROPS,
  ResponsiveProp,
  isWidthTokenProp,
  isMinWidthTokenProp,
  isMaxWidthTokenProp,
  isHeightTokenProp,
  isMinHeightTokenProp,
  isMaxHeightTokenProp,
  isIconSizeTokenProp,
  isSpaceTokenProp,
  isPaddingTokenProp,
  isMarginTokenProp,
  init_index_es2 as init_index_es
};
//# sourceMappingURL=chunk-2IGXOFGD.js.map
