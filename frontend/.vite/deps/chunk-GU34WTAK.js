import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __esm,
  __export,
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@twilio-paste/uid-library/dist/index.es.js
var index_es_exports = {};
__export(index_es_exports, {
  UIDFork: () => UIDFork,
  uid: () => uid,
  useUID: () => useUID2,
  useUIDSeed: () => useUIDSeed2
});
var import_react, React3, import_react2, React, import_react3, import_react4, generateUID, uid, createSource, counter, source, getId, getPrefix, generateUID2, useUIDState, useUID, useUIDSeed, UIDFork, useId, maybeReactUseId, useUID2, useUIDSeed2;
var init_index_es = __esm({
  "node_modules/@twilio-paste/uid-library/dist/index.es.js"() {
    import_react = __toESM(require_react());
    React3 = __toESM(require_react());
    import_react2 = __toESM(require_react());
    React = __toESM(require_react());
    import_react3 = __toESM(require_react());
    import_react4 = __toESM(require_react());
    generateUID = function() {
      var counter2 = 1, map = /* @__PURE__ */ new WeakMap(), uid2 = function(item, index) {
        return typeof item == "number" || typeof item == "string" ? index ? "idx-".concat(index) : "val-".concat(item) : map.has(item) ? "uid" + map.get(item) : (map.set(item, counter2++), uid2(item));
      };
      return uid2;
    };
    uid = generateUID();
    createSource = function(prefix) {
      return prefix === void 0 && (prefix = ""), { value: 1, prefix, uid: generateUID() };
    };
    counter = createSource();
    source = React.createContext(createSource());
    getId = function(source2) {
      return source2.value++;
    };
    getPrefix = function(source2) {
      return source2 ? source2.prefix : "";
    };
    generateUID2 = function(context) {
      var quartz = context || counter, prefix = getPrefix(quartz), id = getId(quartz), uid2 = prefix + id, gen = function(item) {
        return uid2 + quartz.uid(item);
      };
      return { uid: uid2, gen };
    };
    useUIDState = function() {
      var context = (0, import_react4.useContext)(source), uid2 = (0, import_react4.useState)(function() {
        return generateUID2(context);
      })[0];
      return uid2;
    };
    useUID = function() {
      var uid2 = useUIDState().uid;
      return uid2;
    };
    useUIDSeed = function() {
      var gen = useUIDState().gen;
      return gen;
    };
    UIDFork = function(_a) {
      var children = _a.children, _b = _a.prefix, prefix = _b === void 0 ? "" : _b, id = useUID(), valueSource = (0, import_react2.useState)(function() {
        return createSource(id + "-" + prefix);
      })[0];
      return React3.createElement(source.Provider, { value: valueSource }, children);
    };
    useId = "useId";
    maybeReactUseId = import_react.default[useId];
    useUID2 = maybeReactUseId !== void 0 ? maybeReactUseId : useUID;
    useUIDSeed2 = maybeReactUseId !== void 0 ? () => {
      let id = maybeReactUseId();
      return (seed) => `${id}-${seed}`;
    } : useUIDSeed;
  }
});

export {
  uid,
  useUID2,
  useUIDSeed2,
  index_es_exports,
  init_index_es
};
//# sourceMappingURL=chunk-GU34WTAK.js.map
