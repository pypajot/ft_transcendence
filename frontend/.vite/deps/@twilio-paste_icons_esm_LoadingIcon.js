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

// node_modules/@twilio-paste/icons/esm/LoadingIcon.js
var o = __toESM(require_react());
init_index_es();
init_IconWrapper();
var n = o.forwardRef(({ as: a, display: i, element: p = "ICON", size: t, color: s, title: r, decorative: e }, d) => {
  const l = `LoadingIcon-${useUID2()}`;
  if (!e && r == null)
    throw new Error("[LoadingIcon]: Missing a title for non-decorative icon.");
  return o.createElement(f, { as: a, display: i, element: p, size: t, color: s, ref: d }, o.createElement("svg", { role: "img", "aria-hidden": e, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 20 20", "aria-labelledby": l }, r ? o.createElement("title", { id: l }, r) : null, o.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M17.043 11.39l.08.014c.239.062.38.3.317.534-.89 3.255-3.932 5.562-7.444 5.562-2.935 0-5.553-1.613-6.85-4.064l-.278 2.85-.015.077a.457.457 0 01-.471.327.429.429 0 01-.4-.47l.41-4.19.017-.085a.456.456 0 01.592-.294l3.96 1.47.072.034a.428.428 0 01.177.53l-.036.071a.457.457 0 01-.542.187l-2.748-1.02c1.124 2.23 3.473 3.705 6.112 3.705 3.104 0 5.792-2.038 6.579-4.915a.447.447 0 01.468-.322zm-7.04-8.89c2.936 0 5.554 1.613 6.85 4.064l.28-2.849.014-.078a.457.457 0 01.471-.327.429.429 0 01.4.47l-.41 4.19-.017.085a.456.456 0 01-.592.295l-3.96-1.47-.072-.035a.428.428 0 01-.177-.53l.036-.071a.457.457 0 01.542-.186l2.748 1.019c-1.124-2.23-3.473-3.705-6.112-3.705-3.104 0-5.792 2.038-6.579 4.915a.447.447 0 01-.468.322l-.08-.013a.435.435 0 01-.317-.534C3.45 4.807 6.492 2.5 10.004 2.5z" })));
});
n.displayName = "LoadingIcon";
export {
  n as LoadingIcon
};
//# sourceMappingURL=@twilio-paste_icons_esm_LoadingIcon.js.map
