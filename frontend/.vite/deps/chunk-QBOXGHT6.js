import {
  Text,
  init_index_es,
  safelySpreadTextProps
} from "./chunk-4FVJSECC.js";
import {
  require_prop_types
} from "./chunk-YEKUMOGJ.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __esm,
  __export,
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@twilio-paste/paragraph/dist/index.es.js
var index_es_exports = {};
__export(index_es_exports, {
  Paragraph: () => Paragraph
});
var React, import_prop_types, Paragraph;
var init_index_es2 = __esm({
  "node_modules/@twilio-paste/paragraph/dist/index.es.js"() {
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_index_es();
    Paragraph = React.forwardRef(({ children, element = "PARAGRAPH", marginBottom, ...props }, ref) => React.createElement(Text, { ...safelySpreadTextProps(props), as: "p", color: "colorText", element, fontSize: "fontSize30", fontWeight: "fontWeightNormal", lineHeight: "lineHeight40", marginBottom: marginBottom || "space70", ref }, children));
    Paragraph.displayName = "Paragraph";
    Paragraph.propTypes = { element: import_prop_types.default.string, marginBottom: import_prop_types.default.oneOf(["space0"]) };
  }
});

export {
  Paragraph,
  index_es_exports,
  init_index_es2 as init_index_es
};
//# sourceMappingURL=chunk-QBOXGHT6.js.map
