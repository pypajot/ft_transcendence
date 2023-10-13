import {
  f,
  init_IconWrapper
} from "./chunk-PZIV5PRA.js";
import {
  init_index_es,
  useUID2
} from "./chunk-GU34WTAK.js";
import "./chunk-2IGXOFGD.js";
import "./chunk-YEKUMOGJ.js";
import "./chunk-PFLXYQ37.js";
import "./chunk-OTY6O57J.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@twilio-paste/icons/esm/MoreIcon.js
var r = __toESM(require_react());
init_index_es();
init_IconWrapper();
var i = r.forwardRef(({ as: p, display: t, element: l = "ICON", size: s, color: a, title: o, decorative: e }, c) => {
  const n = `MoreIcon-${useUID2()}`;
  if (!e && o == null)
    throw new Error("[MoreIcon]: Missing a title for non-decorative icon.");
  return r.createElement(f, { as: p, display: t, element: l, size: s, color: a, ref: c }, r.createElement("svg", { role: "img", "aria-hidden": e, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 20 20", "aria-labelledby": n }, o ? r.createElement("title", { id: n }, o) : null, r.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M10 14.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-6c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-6c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S8.5 4.827 8.5 4s.673-1.5 1.5-1.5z" })));
});
i.displayName = "MoreIcon";
export {
  i as MoreIcon
};
//# sourceMappingURL=@twilio-paste_icons_esm_MoreIcon.js.map
