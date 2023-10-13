import {
  Button,
  init_index_es3 as init_index_es7
} from "./chunk-TKHMU2RL.js";
import {
  Text,
  init_index_es as init_index_es8,
  safelySpreadTextProps
} from "./chunk-4FVJSECC.js";
import {
  Box,
  f,
  getCustomElementStyles,
  init_IconWrapper,
  init_index_es as init_index_es5,
  safelySpreadBoxProps
} from "./chunk-PZIV5PRA.js";
import {
  init_index_es as init_index_es6,
  useUID2
} from "./chunk-GU34WTAK.js";
import {
  ResponsiveProp,
  init_index_es as init_index_es4,
  isHeightTokenProp,
  isMarginTokenProp,
  isMaxHeightTokenProp,
  isMaxWidthTokenProp,
  isMinHeightTokenProp,
  isMinWidthTokenProp,
  isPaddingTokenProp,
  isWidthTokenProp
} from "./chunk-2IGXOFGD.js";
import {
  require_prop_types
} from "./chunk-YEKUMOGJ.js";
import {
  animated,
  css,
  export_styled,
  init_index_es,
  init_index_es2,
  init_index_es3,
  pasteBaseStyles,
  useTransition
} from "./chunk-PFLXYQ37.js";
import {
  require_react_dom
} from "./chunk-OTY6O57J.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __esm,
  __export,
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@twilio-paste/modal-dialog-primitive/dist/index.es.js
var index_es_exports = {};
__export(index_es_exports, {
  ModalDialogPrimitiveContent: () => DialogContent,
  ModalDialogPrimitiveOverlay: () => DialogOverlay
});
function canUseDOM() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function useForceUpdate() {
  var _useState = (0, import_react4.useState)(/* @__PURE__ */ Object.create(null)), dispatch = _useState[1];
  return (0, import_react4.useCallback)(function() {
    dispatch(/* @__PURE__ */ Object.create(null));
  }, []);
}
function getOwnerDocument(element) {
  return canUseDOM() ? element ? element.ownerDocument : document : null;
}
function isFunction(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
function noop() {
}
function useCheckStyles(packageName) {
  if (false)
    var name;
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!!o2) {
    if (typeof o2 == "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor && (n2 = o2.constructor.name), n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  }
}
function _createForOfIteratorHelperLoose(o2, allowArrayLike) {
  var it;
  if (typeof Symbol > "u" || o2[Symbol.iterator] == null) {
    if (Array.isArray(o2) || (it = _unsupportedIterableToArray(o2)) || allowArrayLike && o2 && typeof o2.length == "number") {
      it && (o2 = it);
      var i = 0;
      return function() {
        return i >= o2.length ? { done: true } : { done: false, value: o2[i++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  return it = o2[Symbol.iterator](), it.next.bind(it);
}
function assignRef(ref, value) {
  if (ref != null)
    if (isFunction(ref))
      ref(value);
    else
      try {
        ref.current = value;
      } catch {
        throw new Error('Cannot assign value "' + value + '" to ref "' + ref + '"');
      }
}
function useComposedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++)
    refs[_key] = arguments[_key];
  return (0, import_react6.useCallback)(function(node) {
    for (var _iterator = _createForOfIteratorHelperLoose(refs), _step; !(_step = _iterator()).done; ) {
      var ref = _step.value;
      assignRef(ref, node);
    }
  }, refs);
}
function composeEventHandlers(theirHandler, ourHandler) {
  return function(event) {
    if (theirHandler && theirHandler(event), !event.defaultPrevented)
      return ourHandler(event);
  };
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i;
  for (i = 0; i < sourceKeys.length; i++)
    key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
function _extends() {
  return _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends.apply(this, arguments);
}
function assignRef2(ref, value) {
  return typeof ref == "function" ? ref(value) : ref && (ref.current = value), ref;
}
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react7.useState)(function() {
    return { value: initialValue, callback, facade: { get current() {
      return ref.value;
    }, set current(value) {
      var last = ref.value;
      last !== value && (ref.value = value, ref.callback(value, last));
    } } };
  })[0];
  return ref.callback = callback, ref.facade;
}
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef2(ref, newValue);
    });
  });
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
      e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]]);
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++)
      (ar || !(i in from)) && (ar || (ar = Array.prototype.slice.call(from, 0, i)), ar[i] = from[i]);
  return to.concat(ar || Array.prototype.slice.call(from));
}
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  middleware === void 0 && (middleware = ItoI);
  var buffer = [], assigned = false, medium = { read: function() {
    if (assigned)
      throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return buffer.length ? buffer[buffer.length - 1] : defaults;
  }, useMedium: function(data) {
    var item = middleware(data, assigned);
    return buffer.push(item), function() {
      buffer = buffer.filter(function(x) {
        return x !== item;
      });
    };
  }, assignSyncMedium: function(cb) {
    for (assigned = true; buffer.length; ) {
      var cbs = buffer;
      buffer = [], cbs.forEach(cb);
    }
    buffer = { push: function(x) {
      return cb(x);
    }, filter: function() {
      return buffer;
    } };
  }, assignMedium: function(cb) {
    assigned = true;
    var pendingQueue = [];
    if (buffer.length) {
      var cbs = buffer;
      buffer = [], cbs.forEach(cb), pendingQueue = buffer;
    }
    var executeQueue = function() {
      var cbs2 = pendingQueue;
      pendingQueue = [], cbs2.forEach(cb);
    }, cycle = function() {
      return Promise.resolve().then(executeQueue);
    };
    cycle(), buffer = { push: function(x) {
      pendingQueue.push(x), cycle();
    }, filter: function(filter) {
      return pendingQueue = pendingQueue.filter(filter), buffer;
    } };
  } };
  return medium;
}
function createMedium(defaults, middleware) {
  return middleware === void 0 && (middleware = ItoI), innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options2) {
  options2 === void 0 && (options2 = {});
  var medium = innerCreateMedium(null);
  return medium.options = __assign({ async: true, ssr: false }, options2), medium;
}
function exportSidecar(medium, exported) {
  return medium.useMedium(exported), SideCar;
}
function _setPrototypeOf(o2, p) {
  return _setPrototypeOf = Object.setPrototypeOf || function(o22, p2) {
    return o22.__proto__ = p2, o22;
  }, _setPrototypeOf(o2, p);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype), subClass.prototype.constructor = subClass, _setPrototypeOf(subClass, superClass);
}
function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }) : obj[key] = value, obj;
}
function withSideEffect(reducePropsToState2, handleStateChangeOnClient2) {
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
  }
  return function(WrappedComponent) {
    var mountedInstances = [], state;
    function emitChange() {
      state = reducePropsToState2(mountedInstances.map(function(instance) {
        return instance.props;
      })), handleStateChangeOnClient2(state);
    }
    var SideEffect = function(_PureComponent) {
      _inheritsLoose(SideEffect2, _PureComponent);
      function SideEffect2() {
        return _PureComponent.apply(this, arguments) || this;
      }
      SideEffect2.peek = function() {
        return state;
      };
      var _proto = SideEffect2.prototype;
      return _proto.componentDidMount = function() {
        mountedInstances.push(this), emitChange();
      }, _proto.componentDidUpdate = function() {
        emitChange();
      }, _proto.componentWillUnmount = function() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1), emitChange();
      }, _proto.render = function() {
        return import_react9.default.createElement(WrappedComponent, this.props);
      }, SideEffect2;
    }(import_react9.PureComponent);
    return _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")"), SideEffect;
  };
}
function deferAction(action) {
  setTimeout(action, 1);
}
function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null, i = startIndex;
  do {
    var item = allNodes[i];
    if (item.guard)
      item.node.dataset.focusAutoGuard && (lastGuard = item);
    else if (item.lockItem) {
      if (i !== startIndex)
        return;
      lastGuard = null;
    } else
      break;
  } while ((i += step) !== end);
  lastGuard && (lastGuard.node.tabIndex = 0);
}
function reducePropsToState(propsList) {
  return propsList.filter(function(_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}
function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];
  trap && !lastActiveTrap && attachHandler();
  var lastTrap = lastActiveTrap, sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap, lastTrap && !sameTrap && (lastTrap.onDeactivation(), traps.filter(function(_ref6) {
    var id = _ref6.id;
    return id === lastTrap.id;
  }).length || lastTrap.returnFocus(!trap)), trap ? (lastActiveFocus = null, (!sameTrap || lastTrap.observed !== trap.observed) && trap.onActivation(), activateTrap(true), deferAction(activateTrap)) : (detachHandler(), lastActiveFocus = null);
}
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  return nonce && tag.setAttribute("nonce", nonce), tag;
}
function injectStyles(tag, css2) {
  tag.styleSheet ? tag.styleSheet.cssText = css2 : tag.appendChild(document.createTextNode(css2));
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React10.useRef([]), touchStartRef = React10.useRef([0, 0]), activeAxis = React10.useRef(), id = React10.useState(idCounter++)[0], Style2 = React10.useState(styleSingleton)[0], lastProps = React10.useRef(props);
  React10.useEffect(function() {
    lastProps.current = props;
  }, [props]), React10.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef3), true).filter(Boolean);
      return allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(id)), allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React10.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2)
      return !lastProps.current.allowPinchZoom;
    var touch = getTouchXY(event), touchStart = touchStartRef.current, deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0], deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1], currentAxis, target = event.target, moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range")
      return false;
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection)
      return true;
    if (canBeScrolledInMainDirection ? currentAxis = moveDirection : (currentAxis = moveDirection === "v" ? "h" : "v", canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target)), !canBeScrolledInMainDirection)
      return false;
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY) && (activeAxis.current = currentAxis), !currentAxis)
      return true;
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []), shouldPrevent = React10.useCallback(function(_event) {
    var event = _event;
    if (!(!lockStack.length || lockStack[lockStack.length - 1] !== Style2)) {
      var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event), sourceEvent = shouldPreventQueue.current.filter(function(e) {
        return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
      })[0];
      if (sourceEvent && sourceEvent.should) {
        event.cancelable && event.preventDefault();
        return;
      }
      if (!sourceEvent) {
        var shardNodes = (lastProps.current.shards || []).map(extractRef3).filter(Boolean).filter(function(node) {
          return node.contains(event.target);
        }), shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
        shouldStop && event.cancelable && event.preventDefault();
      }
    }
  }, []), shouldCancel = React10.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event), setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []), scrollTouchStart = React10.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event), activeAxis.current = void 0;
  }, []), scrollWheel = React10.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []), scrollTouchMove = React10.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React10.useEffect(function() {
    return lockStack.push(Style2), props.setCallbacks({ onScrollCapture: scrollWheel, onWheelCapture: scrollWheel, onTouchMoveCapture: scrollTouchMove }), document.addEventListener("wheel", shouldPrevent, nonPassive), document.addEventListener("touchmove", shouldPrevent, nonPassive), document.addEventListener("touchstart", scrollTouchStart, nonPassive), function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      }), document.removeEventListener("wheel", shouldPrevent, nonPassive), document.removeEventListener("touchmove", shouldPrevent, nonPassive), document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React10.createElement(React10.Fragment, null, inert ? React10.createElement(Style2, { styles: generateStyle(id) }) : null, removeScrollBar ? React10.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null);
}
function _extends2() {
  return _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i;
  for (i = 0; i < sourceKeys.length; i++)
    key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
function createAriaHider(dialogNode) {
  var originalValues = [], rootNodes = [], ownerDocument = getOwnerDocument(dialogNode);
  return dialogNode ? (Array.prototype.forEach.call(ownerDocument.querySelectorAll("body > *"), function(node) {
    var _dialogNode$parentNod, _dialogNode$parentNod2, portalNode = (_dialogNode$parentNod = dialogNode.parentNode) == null || (_dialogNode$parentNod2 = _dialogNode$parentNod.parentNode) == null ? void 0 : _dialogNode$parentNod2.parentNode;
    if (node !== portalNode) {
      var attr = node.getAttribute("aria-hidden"), alreadyHidden = attr !== null && attr !== "false";
      alreadyHidden || (originalValues.push(attr), rootNodes.push(node), node.setAttribute("aria-hidden", "true"));
    }
  }), function() {
    rootNodes.forEach(function(node, index) {
      var originalValue = originalValues[index];
      originalValue === null ? node.removeAttribute("aria-hidden") : node.setAttribute("aria-hidden", originalValue);
    });
  }) : noop;
}
var import_react, import_react2, import_react3, import_react4, import_react_dom, import_react5, import_react6, React6, React3, import_react7, import_react8, React, React2, React5, import_react9, React11, React7, React10, React9, React8, __create, __defProp, __getOwnPropDesc, __getOwnPropNames, __getProtoOf, __hasOwnProp, __commonJS, __copyProps, __toESM2, require_ReactPropTypesSecret, require_factoryWithThrowingShims, require_prop_types2, useIsomorphicLayoutEffect, Portal, FOCUS_GROUP, FOCUS_DISABLED, FOCUS_ALLOW, FOCUS_AUTO, FOCUS_NO_AUTOFOCUS, hiddenGuard, InFocusGuard, __assign, SideCar, mediumFocus, mediumBlur, mediumEffect, mediumSidecar, emptyArray, FocusLock, Lock_default, index_es_default, toArray, asArray, getFirst, isElementHidden, getParentNode, isTopNode, isVisibleUncached, isVisibleCached, isAutoFocusAllowedUncached, isAutoFocusAllowedCached, getDataset, isHTMLButtonElement, isHTMLInputElement, isRadioElement, notHiddenInput, isAutoFocusAllowed, isGuard, isNotAGuard, isDefined, tabSort, orderByTabIndex, tabbables, queryTabbables, queryGuardTabbables, getFocusablesWithShadowDom, getFocusablesWithIFrame, getFocusables, getParentAutofocusables, filterFocusable, filterAutoFocusable, getTabbableNodes, getAllTabbableNodes, parentAutofocusables, contains, filterNested, getTopParent, getAllAffectedNodes, safeProbe, getActiveElement, focusInFrame, focusInsideIframe, focusInside, focusIsHidden, findSelectedRadio, correctNode, correctNodes, pickFirstFocus, pickFocusable, NEW_FOCUS, newFocus, findAutoFocused, pickAutofocus, getParents, getCommonParent, getTopCommonParent, allParentAutofocusables, reorderNodes, getFocusMerge, getFocusabledIn, focusOn, guardCount, lockDisabled, setFocus, es2015_default, focusOnBody, isFreeFocus, lastActiveTrap, lastActiveFocus, lastPortaledElement, focusWasOutsideWindow, defaultWhitelist, focusWhitelisted, recordPortal, focusIsPortaledPair, extractRef, focusWasOutside, checkInHost, withinHost, activateTrap, onTrap, onBlur, onFocus, FocusWatcher, FocusTrap, onWindowBlur, attachHandler, detachHandler, Trap_default, FocusLockCombination, _ref, sideCar, propTypes, Combination_default, es2015_default2, zeroRightClassName, fullWidthClassName, noScrollbarsClassName, removedBarSizeVariable, effectCar, nothing, RemoveScroll, currentNonce, getNonce, stylesheetSingleton, styleHookSingleton, styleSingleton, zeroGap, parse, getOffset, getGapWidth, Style, getStyles, RemoveScrollBar, passiveSupported, options, nonPassive, alwaysContainsScroll, elementCanBeScrolled, elementCouldBeVScrolled, elementCouldBeHScrolled, locationCouldBeScrolled, getVScrollVariables, getHScrollVariables, elementCouldBeScrolled, getScrollVariables, getDirectionFactor, handleScroll, getTouchXY, getDeltaXY, extractRef3, deltaCompare, generateStyle, idCounter, lockStack, sidecar_default, ReactRemoveScroll, Combination_default2, import_prop_types, _excluded, _excluded2, _excluded3, overlayPropTypes, DialogOverlay, DialogInner, DialogContent;
var init_index_es9 = __esm({
  "node_modules/@twilio-paste/modal-dialog-primitive/dist/index.es.js"() {
    import_react = __toESM(require_react());
    import_react2 = __toESM(require_react());
    import_react3 = __toESM(require_react());
    import_react4 = __toESM(require_react());
    import_react_dom = __toESM(require_react_dom());
    import_react5 = __toESM(require_react());
    import_react6 = __toESM(require_react());
    React6 = __toESM(require_react());
    React3 = __toESM(require_react());
    import_react7 = __toESM(require_react());
    import_react8 = __toESM(require_react());
    React = __toESM(require_react());
    React2 = __toESM(require_react());
    React5 = __toESM(require_react());
    import_react9 = __toESM(require_react());
    React11 = __toESM(require_react());
    React7 = __toESM(require_react());
    React10 = __toESM(require_react());
    React9 = __toESM(require_react());
    React8 = __toESM(require_react());
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
    require_ReactPropTypesSecret = __commonJS({ "../../../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    } });
    require_factoryWithThrowingShims = __commonJS({ "../../../../node_modules/prop-types/factoryWithThrowingShims.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      function emptyFunction() {
      }
      function emptyFunctionWithReset() {
      }
      emptyFunctionWithReset.resetWarningCache = emptyFunction;
      module.exports = function() {
        function shim(props, propName, componentName, location, propFullName, secret) {
          if (secret !== ReactPropTypesSecret) {
            var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw err.name = "Invariant Violation", err;
          }
        }
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        var ReactPropTypes = { array: shim, bigint: shim, bool: shim, func: shim, number: shim, object: shim, string: shim, symbol: shim, any: shim, arrayOf: getShim, element: shim, elementType: shim, instanceOf: getShim, node: shim, objectOf: getShim, oneOf: getShim, oneOfType: getShim, shape: getShim, exact: getShim, checkPropTypes: emptyFunctionWithReset, resetWarningCache: emptyFunction };
        return ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
      };
    } });
    require_prop_types2 = __commonJS({ "../../../../node_modules/prop-types/index.js"(exports, module) {
      module.exports = require_factoryWithThrowingShims()();
      var ReactIs, throwOnDirectAccess;
    } });
    useIsomorphicLayoutEffect = canUseDOM() ? import_react3.useLayoutEffect : import_react3.useEffect;
    Portal = function(_ref2) {
      var children = _ref2.children, _ref$type = _ref2.type, type = _ref$type === void 0 ? "reach-portal" : _ref$type, containerRef = _ref2.containerRef, mountNode = (0, import_react2.useRef)(null), portalNode = (0, import_react2.useRef)(null), forceUpdate = useForceUpdate();
      return useIsomorphicLayoutEffect(function() {
        if (!!mountNode.current) {
          var ownerDocument = mountNode.current.ownerDocument, body = (containerRef == null ? void 0 : containerRef.current) || ownerDocument.body;
          return portalNode.current = ownerDocument == null ? void 0 : ownerDocument.createElement(type), body.appendChild(portalNode.current), forceUpdate(), function() {
            portalNode.current && body && body.removeChild(portalNode.current);
          };
        }
      }, [type, forceUpdate, containerRef]), portalNode.current ? (0, import_react_dom.createPortal)(children, portalNode.current) : (0, import_react2.createElement)("span", { ref: mountNode });
    };
    FOCUS_GROUP = "data-focus-lock";
    FOCUS_DISABLED = "data-focus-lock-disabled";
    FOCUS_ALLOW = "data-no-focus-lock";
    FOCUS_AUTO = "data-autofocus-inside";
    FOCUS_NO_AUTOFOCUS = "data-no-autofocus";
    hiddenGuard = { width: "1px", height: "0px", padding: 0, overflow: "hidden", position: "fixed", top: "1px", left: "1px" };
    InFocusGuard = function(_ref2) {
      var children = _ref2.children;
      return React.createElement(React.Fragment, null, React.createElement("div", { key: "guard-first", "data-focus-guard": true, "data-focus-auto-guard": true, style: hiddenGuard }), children, children && React.createElement("div", { key: "guard-last", "data-focus-guard": true, "data-focus-auto-guard": true, style: hiddenGuard }));
    };
    InFocusGuard.propTypes = {};
    InFocusGuard.defaultProps = { children: null };
    __assign = function() {
      return __assign = Object.assign || function(t) {
        for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
          s = arguments[i];
          for (var p in s)
            Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        }
        return t;
      }, __assign.apply(this, arguments);
    };
    SideCar = function(_a) {
      var sideCar2 = _a.sideCar, rest = __rest(_a, ["sideCar"]);
      if (!sideCar2)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
      var Target = sideCar2.read();
      if (!Target)
        throw new Error("Sidecar medium not found");
      return React2.createElement(Target, __assign({}, rest));
    };
    SideCar.isSideCarExport = true;
    mediumFocus = createMedium({}, function(_ref2) {
      var target = _ref2.target, currentTarget = _ref2.currentTarget;
      return { target, currentTarget };
    });
    mediumBlur = createMedium();
    mediumEffect = createMedium();
    mediumSidecar = createSidecarMedium({ async: true });
    emptyArray = [];
    FocusLock = React3.forwardRef(function(props, parentRef) {
      var _extends22, _React$useState = React3.useState(), realObserved = _React$useState[0], setObserved = _React$useState[1], observed = React3.useRef(), isActive = React3.useRef(false), originalFocusedElement = React3.useRef(null), children = props.children, disabled = props.disabled, noFocusGuards = props.noFocusGuards, persistentFocus = props.persistentFocus, crossFrame = props.crossFrame, autoFocus = props.autoFocus, allowTextSelection = props.allowTextSelection, group = props.group, className = props.className, whiteList = props.whiteList, hasPositiveIndices = props.hasPositiveIndices, _props$shards = props.shards, shards = _props$shards === void 0 ? emptyArray : _props$shards, _props$as = props.as, Container = _props$as === void 0 ? "div" : _props$as, _props$lockProps = props.lockProps, containerProps = _props$lockProps === void 0 ? {} : _props$lockProps, SideCar2 = props.sideCar, shouldReturnFocus = props.returnFocus, focusOptions = props.focusOptions, onActivationCallback = props.onActivation, onDeactivationCallback = props.onDeactivation, _React$useState2 = React3.useState({}), id = _React$useState2[0], onActivation = React3.useCallback(function() {
        originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement, observed.current && onActivationCallback && onActivationCallback(observed.current), isActive.current = true;
      }, [onActivationCallback]), onDeactivation = React3.useCallback(function() {
        isActive.current = false, onDeactivationCallback && onDeactivationCallback(observed.current);
      }, [onDeactivationCallback]);
      (0, import_react8.useEffect)(function() {
        disabled || (originalFocusedElement.current = null);
      }, []);
      var returnFocus = React3.useCallback(function(allowDefer) {
        var returnFocusTo = originalFocusedElement.current;
        if (returnFocusTo && returnFocusTo.focus) {
          var howToReturnFocus = typeof shouldReturnFocus == "function" ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;
          if (howToReturnFocus) {
            var returnFocusOptions = typeof howToReturnFocus == "object" ? howToReturnFocus : void 0;
            originalFocusedElement.current = null, allowDefer ? Promise.resolve().then(function() {
              return returnFocusTo.focus(returnFocusOptions);
            }) : returnFocusTo.focus(returnFocusOptions);
          }
        }
      }, [shouldReturnFocus]), onFocus3 = React3.useCallback(function(event) {
        isActive.current && mediumFocus.useMedium(event);
      }, []), onBlur3 = mediumBlur.useMedium, setObserveNode = React3.useCallback(function(newObserved) {
        observed.current !== newObserved && (observed.current = newObserved, setObserved(newObserved));
      }, []), lockProps = _extends((_extends22 = {}, _extends22[FOCUS_DISABLED] = disabled && "disabled", _extends22[FOCUS_GROUP] = group, _extends22), containerProps), hasLeadingGuards = noFocusGuards !== true, hasTailingGuards = hasLeadingGuards && noFocusGuards !== "tail", mergedRef = useMergeRefs([parentRef, setObserveNode]);
      return React3.createElement(React3.Fragment, null, hasLeadingGuards && [React3.createElement("div", { key: "guard-first", "data-focus-guard": true, tabIndex: disabled ? -1 : 0, style: hiddenGuard }), hasPositiveIndices ? React3.createElement("div", { key: "guard-nearest", "data-focus-guard": true, tabIndex: disabled ? -1 : 1, style: hiddenGuard }) : null], !disabled && React3.createElement(SideCar2, { id, sideCar: mediumSidecar, observed: realObserved, disabled, persistentFocus, crossFrame, autoFocus, whiteList, shards, onActivation, onDeactivation, returnFocus, focusOptions }), React3.createElement(Container, _extends({ ref: mergedRef }, lockProps, { className, onBlur: onBlur3, onFocus: onFocus3 }), children), hasTailingGuards && React3.createElement("div", { "data-focus-guard": true, tabIndex: disabled ? -1 : 0, style: hiddenGuard }));
    });
    FocusLock.propTypes = {};
    FocusLock.defaultProps = { children: void 0, disabled: false, returnFocus: false, focusOptions: void 0, noFocusGuards: false, autoFocus: true, persistentFocus: false, crossFrame: true, hasPositiveIndices: void 0, allowTextSelection: void 0, group: void 0, className: void 0, whiteList: void 0, shards: void 0, as: "div", lockProps: {}, onActivation: void 0, onDeactivation: void 0 };
    Lock_default = FocusLock;
    index_es_default = withSideEffect;
    toArray = function(a) {
      for (var ret = Array(a.length), i = 0; i < a.length; ++i)
        ret[i] = a[i];
      return ret;
    };
    asArray = function(a) {
      return Array.isArray(a) ? a : [a];
    };
    getFirst = function(a) {
      return Array.isArray(a) ? a[0] : a;
    };
    isElementHidden = function(node) {
      if (node.nodeType !== Node.ELEMENT_NODE)
        return false;
      var computedStyle = window.getComputedStyle(node, null);
      return !computedStyle || !computedStyle.getPropertyValue ? false : computedStyle.getPropertyValue("display") === "none" || computedStyle.getPropertyValue("visibility") === "hidden";
    };
    getParentNode = function(node) {
      return node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? node.parentNode.host : node.parentNode;
    };
    isTopNode = function(node) {
      return node === document || node && node.nodeType === Node.DOCUMENT_NODE;
    };
    isVisibleUncached = function(node, checkParent) {
      return !node || isTopNode(node) || !isElementHidden(node) && checkParent(getParentNode(node));
    };
    isVisibleCached = function(visibilityCache, node) {
      var cached = visibilityCache.get(node);
      if (cached !== void 0)
        return cached;
      var result = isVisibleUncached(node, isVisibleCached.bind(void 0, visibilityCache));
      return visibilityCache.set(node, result), result;
    };
    isAutoFocusAllowedUncached = function(node, checkParent) {
      return node && !isTopNode(node) ? isAutoFocusAllowed(node) ? checkParent(getParentNode(node)) : false : true;
    };
    isAutoFocusAllowedCached = function(cache, node) {
      var cached = cache.get(node);
      if (cached !== void 0)
        return cached;
      var result = isAutoFocusAllowedUncached(node, isAutoFocusAllowedCached.bind(void 0, cache));
      return cache.set(node, result), result;
    };
    getDataset = function(node) {
      return node.dataset;
    };
    isHTMLButtonElement = function(node) {
      return node.tagName === "BUTTON";
    };
    isHTMLInputElement = function(node) {
      return node.tagName === "INPUT";
    };
    isRadioElement = function(node) {
      return isHTMLInputElement(node) && node.type === "radio";
    };
    notHiddenInput = function(node) {
      return !((isHTMLInputElement(node) || isHTMLButtonElement(node)) && (node.type === "hidden" || node.disabled));
    };
    isAutoFocusAllowed = function(node) {
      var attribute = node.getAttribute(FOCUS_NO_AUTOFOCUS);
      return ![true, "true", ""].includes(attribute);
    };
    isGuard = function(node) {
      var _a;
      return Boolean(node && ((_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.focusGuard));
    };
    isNotAGuard = function(node) {
      return !isGuard(node);
    };
    isDefined = function(x) {
      return Boolean(x);
    };
    tabSort = function(a, b) {
      var tabDiff = a.tabIndex - b.tabIndex, indexDiff = a.index - b.index;
      if (tabDiff) {
        if (!a.tabIndex)
          return 1;
        if (!b.tabIndex)
          return -1;
      }
      return tabDiff || indexDiff;
    };
    orderByTabIndex = function(nodes, filterNegative, keepGuards) {
      return toArray(nodes).map(function(node, index) {
        return { node, index, tabIndex: keepGuards && node.tabIndex === -1 ? (node.dataset || {}).focusGuard ? 0 : -1 : node.tabIndex };
      }).filter(function(data) {
        return !filterNegative || data.tabIndex >= 0;
      }).sort(tabSort);
    };
    tabbables = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"];
    queryTabbables = tabbables.join(",");
    queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
    getFocusablesWithShadowDom = function(parent, withGuards) {
      return toArray((parent.shadowRoot || parent).children).reduce(function(acc, child) {
        return acc.concat(child.matches(withGuards ? queryGuardTabbables : queryTabbables) ? [child] : [], getFocusablesWithShadowDom(child));
      }, []);
    };
    getFocusablesWithIFrame = function(parent, withGuards) {
      var _a;
      return parent instanceof HTMLIFrameElement && ((_a = parent.contentDocument) === null || _a === void 0 ? void 0 : _a.body) ? getFocusables([parent.contentDocument.body], withGuards) : [parent];
    };
    getFocusables = function(parents, withGuards) {
      return parents.reduce(function(acc, parent) {
        var _a, focusableWithShadowDom = getFocusablesWithShadowDom(parent, withGuards), focusableWithIframes = (_a = []).concat.apply(_a, focusableWithShadowDom.map(function(node) {
          return getFocusablesWithIFrame(node, withGuards);
        }));
        return acc.concat(focusableWithIframes, parent.parentNode ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function(node) {
          return node === parent;
        }) : []);
      }, []);
    };
    getParentAutofocusables = function(parent) {
      var parentFocus = parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"));
      return toArray(parentFocus).map(function(node) {
        return getFocusables([node]);
      }).reduce(function(acc, nodes) {
        return acc.concat(nodes);
      }, []);
    };
    filterFocusable = function(nodes, visibilityCache) {
      return toArray(nodes).filter(function(node) {
        return isVisibleCached(visibilityCache, node);
      }).filter(function(node) {
        return notHiddenInput(node);
      });
    };
    filterAutoFocusable = function(nodes, cache) {
      return cache === void 0 && (cache = /* @__PURE__ */ new Map()), toArray(nodes).filter(function(node) {
        return isAutoFocusAllowedCached(cache, node);
      });
    };
    getTabbableNodes = function(topNodes, visibilityCache, withGuards) {
      return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
    };
    getAllTabbableNodes = function(topNodes, visibilityCache) {
      return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
    };
    parentAutofocusables = function(topNode, visibilityCache) {
      return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
    };
    contains = function(scope, element) {
      return scope.shadowRoot ? contains(scope.shadowRoot, element) : Object.getPrototypeOf(scope).contains !== void 0 && Object.getPrototypeOf(scope).contains.call(scope, element) ? true : toArray(scope.children).some(function(child) {
        var _a;
        if (child instanceof HTMLIFrameElement) {
          var iframeBody = (_a = child.contentDocument) === null || _a === void 0 ? void 0 : _a.body;
          return iframeBody ? contains(iframeBody, element) : false;
        }
        return contains(child, element);
      });
    };
    filterNested = function(nodes) {
      for (var contained = /* @__PURE__ */ new Set(), l = nodes.length, i = 0; i < l; i += 1)
        for (var j = i + 1; j < l; j += 1) {
          var position = nodes[i].compareDocumentPosition(nodes[j]);
          (position & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && contained.add(j), (position & Node.DOCUMENT_POSITION_CONTAINS) > 0 && contained.add(i);
        }
      return nodes.filter(function(_, index) {
        return !contained.has(index);
      });
    };
    getTopParent = function(node) {
      return node.parentNode ? getTopParent(node.parentNode) : node;
    };
    getAllAffectedNodes = function(node) {
      var nodes = asArray(node);
      return nodes.filter(Boolean).reduce(function(acc, currentNode) {
        var group = currentNode.getAttribute(FOCUS_GROUP);
        return acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, '="').concat(group, '"]:not([').concat(FOCUS_DISABLED, '="disabled"])')))) : [currentNode]), acc;
      }, []);
    };
    safeProbe = function(cb) {
      try {
        return cb();
      } catch {
        return;
      }
    };
    getActiveElement = function(inDocument) {
      if (inDocument === void 0 && (inDocument = document), !(!inDocument || !inDocument.activeElement)) {
        var activeElement = inDocument.activeElement;
        return activeElement.shadowRoot ? getActiveElement(activeElement.shadowRoot) : activeElement instanceof HTMLIFrameElement && safeProbe(function() {
          return activeElement.contentWindow.document;
        }) ? getActiveElement(activeElement.contentWindow.document) : activeElement;
      }
    };
    focusInFrame = function(frame, activeElement) {
      return frame === activeElement;
    };
    focusInsideIframe = function(topNode, activeElement) {
      return Boolean(toArray(topNode.querySelectorAll("iframe")).some(function(node) {
        return focusInFrame(node, activeElement);
      }));
    };
    focusInside = function(topNode, activeElement) {
      return activeElement === void 0 && (activeElement = getActiveElement(getFirst(topNode).ownerDocument)), !activeElement || activeElement.dataset && activeElement.dataset.focusGuard ? false : getAllAffectedNodes(topNode).some(function(node) {
        return contains(node, activeElement) || focusInsideIframe(node, activeElement);
      });
    };
    focusIsHidden = function(inDocument) {
      inDocument === void 0 && (inDocument = document);
      var activeElement = getActiveElement(inDocument);
      return activeElement ? toArray(inDocument.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function(node) {
        return contains(node, activeElement);
      }) : false;
    };
    findSelectedRadio = function(node, nodes) {
      return nodes.filter(isRadioElement).filter(function(el) {
        return el.name === node.name;
      }).filter(function(el) {
        return el.checked;
      })[0] || node;
    };
    correctNode = function(node, nodes) {
      return isRadioElement(node) && node.name ? findSelectedRadio(node, nodes) : node;
    };
    correctNodes = function(nodes) {
      var resultSet = /* @__PURE__ */ new Set();
      return nodes.forEach(function(node) {
        return resultSet.add(correctNode(node, nodes));
      }), nodes.filter(function(node) {
        return resultSet.has(node);
      });
    };
    pickFirstFocus = function(nodes) {
      return nodes[0] && nodes.length > 1 ? correctNode(nodes[0], nodes) : nodes[0];
    };
    pickFocusable = function(nodes, index) {
      return nodes.length > 1 ? nodes.indexOf(correctNode(nodes[index], nodes)) : index;
    };
    NEW_FOCUS = "NEW_FOCUS";
    newFocus = function(innerNodes, outerNodes, activeElement, lastNode) {
      var cnt = innerNodes.length, firstFocus = innerNodes[0], lastFocus = innerNodes[cnt - 1], isOnGuard = isGuard(activeElement);
      if (!(activeElement && innerNodes.indexOf(activeElement) >= 0)) {
        var activeIndex = activeElement !== void 0 ? outerNodes.indexOf(activeElement) : -1, lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex, lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1, indexDiff = activeIndex - lastIndex, firstNodeIndex = outerNodes.indexOf(firstFocus), lastNodeIndex = outerNodes.indexOf(lastFocus), correctedNodes = correctNodes(outerNodes), correctedIndex = activeElement !== void 0 ? correctedNodes.indexOf(activeElement) : -1, correctedIndexDiff = correctedIndex - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex), returnFirstNode = pickFocusable(innerNodes, 0), returnLastNode = pickFocusable(innerNodes, cnt - 1);
        if (activeIndex === -1 || lastNodeInside === -1)
          return NEW_FOCUS;
        if (!indexDiff && lastNodeInside >= 0)
          return lastNodeInside;
        if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1)
          return returnLastNode;
        if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1)
          return returnFirstNode;
        if (indexDiff && Math.abs(correctedIndexDiff) > 1)
          return lastNodeInside;
        if (activeIndex <= firstNodeIndex)
          return returnLastNode;
        if (activeIndex > lastNodeIndex)
          return returnFirstNode;
        if (indexDiff)
          return Math.abs(indexDiff) > 1 ? lastNodeInside : (cnt + lastNodeInside + indexDiff) % cnt;
      }
    };
    findAutoFocused = function(autoFocusables) {
      return function(node) {
        var _a, autofocus = (_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.autofocus;
        return node.autofocus || autofocus !== void 0 && autofocus !== "false" || autoFocusables.indexOf(node) >= 0;
      };
    };
    pickAutofocus = function(nodesIndexes, orderedNodes, groups) {
      var nodes = nodesIndexes.map(function(_a) {
        var node = _a.node;
        return node;
      }), autoFocusable = filterAutoFocusable(nodes.filter(findAutoFocused(groups)));
      return autoFocusable && autoFocusable.length ? pickFirstFocus(autoFocusable) : pickFirstFocus(filterAutoFocusable(orderedNodes));
    };
    getParents = function(node, parents) {
      return parents === void 0 && (parents = []), parents.push(node), node.parentNode && getParents(node.parentNode.host || node.parentNode, parents), parents;
    };
    getCommonParent = function(nodeA, nodeB) {
      for (var parentsA = getParents(nodeA), parentsB = getParents(nodeB), i = 0; i < parentsA.length; i += 1) {
        var currentParent = parentsA[i];
        if (parentsB.indexOf(currentParent) >= 0)
          return currentParent;
      }
      return false;
    };
    getTopCommonParent = function(baseActiveElement, leftEntry, rightEntries) {
      var activeElements = asArray(baseActiveElement), leftEntries = asArray(leftEntry), activeElement = activeElements[0], topCommon = false;
      return leftEntries.filter(Boolean).forEach(function(entry) {
        topCommon = getCommonParent(topCommon || entry, entry) || topCommon, rightEntries.filter(Boolean).forEach(function(subEntry) {
          var common = getCommonParent(activeElement, subEntry);
          common && (!topCommon || contains(common, topCommon) ? topCommon = common : topCommon = getCommonParent(common, topCommon));
        });
      }), topCommon;
    };
    allParentAutofocusables = function(entries, visibilityCache) {
      return entries.reduce(function(acc, node) {
        return acc.concat(parentAutofocusables(node, visibilityCache));
      }, []);
    };
    reorderNodes = function(srcNodes, dstNodes) {
      var remap = /* @__PURE__ */ new Map();
      return dstNodes.forEach(function(entity) {
        return remap.set(entity.node, entity);
      }), srcNodes.map(function(node) {
        return remap.get(node);
      }).filter(isDefined);
    };
    getFocusMerge = function(topNode, lastNode) {
      var activeElement = getActiveElement(asArray(topNode).length > 0 ? document : getFirst(topNode).ownerDocument), entries = getAllAffectedNodes(topNode).filter(isNotAGuard), commonParent = getTopCommonParent(activeElement || topNode, topNode, entries), visibilityCache = /* @__PURE__ */ new Map(), anyFocusable = getAllTabbableNodes(entries, visibilityCache), innerElements = getTabbableNodes(entries, visibilityCache).filter(function(_a) {
        var node = _a.node;
        return isNotAGuard(node);
      });
      if (!(!innerElements[0] && (innerElements = anyFocusable, !innerElements[0]))) {
        var outerNodes = getAllTabbableNodes([commonParent], visibilityCache).map(function(_a) {
          var node = _a.node;
          return node;
        }), orderedInnerElements = reorderNodes(outerNodes, innerElements), innerNodes = orderedInnerElements.map(function(_a) {
          var node = _a.node;
          return node;
        }), newId = newFocus(innerNodes, outerNodes, activeElement, lastNode);
        if (newId === NEW_FOCUS) {
          var focusNode = pickAutofocus(anyFocusable, innerNodes, allParentAutofocusables(entries, visibilityCache));
          if (focusNode)
            return { node: focusNode };
          console.warn("focus-lock: cannot find any node to move focus into");
          return;
        }
        return newId === void 0 ? newId : orderedInnerElements[newId];
      }
    };
    getFocusabledIn = function(topNode) {
      var entries = getAllAffectedNodes(topNode).filter(isNotAGuard), commonParent = getTopCommonParent(topNode, topNode, entries), visibilityCache = /* @__PURE__ */ new Map(), outerNodes = getTabbableNodes([commonParent], visibilityCache, true), innerElements = getTabbableNodes(entries, visibilityCache).filter(function(_a) {
        var node = _a.node;
        return isNotAGuard(node);
      }).map(function(_a) {
        var node = _a.node;
        return node;
      });
      return outerNodes.map(function(_a) {
        var node = _a.node, index = _a.index;
        return { node, index, lockItem: innerElements.indexOf(node) >= 0, guard: isGuard(node) };
      });
    };
    focusOn = function(target, focusOptions) {
      "focus" in target && target.focus(focusOptions), "contentWindow" in target && target.contentWindow && target.contentWindow.focus();
    };
    guardCount = 0;
    lockDisabled = false;
    setFocus = function(topNode, lastNode, options2) {
      options2 === void 0 && (options2 = {});
      var focusable = getFocusMerge(topNode, lastNode);
      if (!lockDisabled && focusable) {
        if (guardCount > 2) {
          console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), lockDisabled = true, setTimeout(function() {
            lockDisabled = false;
          }, 1);
          return;
        }
        guardCount++, focusOn(focusable.node, options2.focusOptions), guardCount--;
      }
    };
    es2015_default = setFocus;
    focusOnBody = function() {
      return document && document.activeElement === document.body;
    };
    isFreeFocus = function() {
      return focusOnBody() || focusIsHidden();
    };
    lastActiveTrap = null;
    lastActiveFocus = null;
    lastPortaledElement = null;
    focusWasOutsideWindow = false;
    defaultWhitelist = function() {
      return true;
    };
    focusWhitelisted = function(activeElement) {
      return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
    };
    recordPortal = function(observerNode, portaledElement) {
      lastPortaledElement = { observerNode, portaledElement };
    };
    focusIsPortaledPair = function(element) {
      return lastPortaledElement && lastPortaledElement.portaledElement === element;
    };
    extractRef = function(ref) {
      return ref && "current" in ref ? ref.current : ref;
    };
    focusWasOutside = function(crossFrameOption) {
      return crossFrameOption ? Boolean(focusWasOutsideWindow) : focusWasOutsideWindow === "meanwhile";
    };
    checkInHost = function checkInHost2(check, el, boundary) {
      return el && (el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) || el.parentNode && checkInHost2(check, el.parentNode, boundary));
    };
    withinHost = function(activeElement, workingArea) {
      return workingArea.some(function(area) {
        return checkInHost(activeElement, area, area);
      });
    };
    activateTrap = function() {
      var result = false;
      if (lastActiveTrap) {
        var _lastActiveTrap = lastActiveTrap, observed = _lastActiveTrap.observed, persistentFocus = _lastActiveTrap.persistentFocus, autoFocus = _lastActiveTrap.autoFocus, shards = _lastActiveTrap.shards, crossFrame = _lastActiveTrap.crossFrame, focusOptions = _lastActiveTrap.focusOptions, workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement, activeElement = document && document.activeElement;
        if (workingNode) {
          var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));
          if ((!activeElement || focusWhitelisted(activeElement)) && (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) && (workingNode && !(focusInside(workingArea) || activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement, workingNode)) && (document && !lastActiveFocus && activeElement && !autoFocus ? (activeElement.blur && activeElement.blur(), document.body.focus()) : (result = es2015_default(workingArea, lastActiveFocus, { focusOptions }), lastPortaledElement = {})), focusWasOutsideWindow = false, lastActiveFocus = document && document.activeElement), document) {
            var newActiveElement = document && document.activeElement, allNodes = getFocusabledIn(workingArea), focusedIndex = allNodes.map(function(_ref2) {
              var node = _ref2.node;
              return node;
            }).indexOf(newActiveElement);
            focusedIndex > -1 && (allNodes.filter(function(_ref2) {
              var guard = _ref2.guard, node = _ref2.node;
              return guard && node.dataset.focusAutoGuard;
            }).forEach(function(_ref3) {
              var node = _ref3.node;
              return node.removeAttribute("tabIndex");
            }), autoGuard(focusedIndex, allNodes.length, 1, allNodes), autoGuard(focusedIndex, -1, -1, allNodes));
          }
        }
      }
      return result;
    };
    onTrap = function(event) {
      activateTrap() && event && (event.stopPropagation(), event.preventDefault());
    };
    onBlur = function() {
      return deferAction(activateTrap);
    };
    onFocus = function(event) {
      var source = event.target, currentNode = event.currentTarget;
      currentNode.contains(source) || recordPortal(currentNode, source);
    };
    FocusWatcher = function() {
      return null;
    };
    FocusTrap = function(_ref4) {
      var children = _ref4.children;
      return React5.createElement("div", { onBlur, onFocus }, children);
    };
    FocusTrap.propTypes = {};
    onWindowBlur = function() {
      focusWasOutsideWindow = "just", deferAction(function() {
        focusWasOutsideWindow = "meanwhile";
      });
    };
    attachHandler = function() {
      document.addEventListener("focusin", onTrap), document.addEventListener("focusout", onBlur), window.addEventListener("blur", onWindowBlur);
    };
    detachHandler = function() {
      document.removeEventListener("focusin", onTrap), document.removeEventListener("focusout", onBlur), window.removeEventListener("blur", onWindowBlur);
    };
    mediumFocus.assignSyncMedium(onFocus);
    mediumBlur.assignMedium(onBlur);
    mediumEffect.assignMedium(function(cb) {
      return cb({ moveFocusInside: es2015_default, focusInside });
    });
    Trap_default = index_es_default(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);
    FocusLockCombination = React6.forwardRef(function(props, ref) {
      return React6.createElement(Lock_default, _extends({ sideCar: Trap_default, ref }, props));
    });
    _ref = Lock_default.propTypes || {};
    sideCar = _ref.sideCar;
    propTypes = _objectWithoutPropertiesLoose(_ref, ["sideCar"]);
    FocusLockCombination.propTypes = {};
    Combination_default = FocusLockCombination;
    es2015_default2 = Combination_default;
    zeroRightClassName = "right-scroll-bar-position";
    fullWidthClassName = "width-before-scroll-bar";
    noScrollbarsClassName = "with-scroll-bars-hidden";
    removedBarSizeVariable = "--removed-body-scroll-bar-size";
    effectCar = createSidecarMedium();
    nothing = function() {
    };
    RemoveScroll = React7.forwardRef(function(props, parentRef) {
      var ref = React7.useRef(null), _a = React7.useState({ onScrollCapture: nothing, onWheelCapture: nothing, onTouchMoveCapture: nothing }), callbacks = _a[0], setCallbacks = _a[1], forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar2 = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), SideCar2 = sideCar2, containerRef = useMergeRefs([ref, parentRef]), containerProps = __assign(__assign({}, rest), callbacks);
      return React7.createElement(React7.Fragment, null, enabled && React7.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }), forwardProps ? React7.cloneElement(React7.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React7.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children));
    });
    RemoveScroll.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
    RemoveScroll.classNames = { fullWidth: fullWidthClassName, zeroRight: zeroRightClassName };
    getNonce = function() {
      if (currentNonce)
        return currentNonce;
      if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__;
    };
    stylesheetSingleton = function() {
      var counter = 0, stylesheet = null;
      return { add: function(style) {
        counter == 0 && (stylesheet = makeStyleTag()) && (injectStyles(stylesheet, style), insertStyleTag(stylesheet)), counter++;
      }, remove: function() {
        counter--, !counter && stylesheet && (stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet), stylesheet = null);
      } };
    };
    styleHookSingleton = function() {
      var sheet = stylesheetSingleton();
      return function(styles, isDynamic) {
        React8.useEffect(function() {
          return sheet.add(styles), function() {
            sheet.remove();
          };
        }, [styles && isDynamic]);
      };
    };
    styleSingleton = function() {
      var useStyle = styleHookSingleton(), Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        return useStyle(styles, dynamic), null;
      };
      return Sheet;
    };
    zeroGap = { left: 0, top: 0, right: 0, gap: 0 };
    parse = function(x) {
      return parseInt(x || "", 10) || 0;
    };
    getOffset = function(gapMode) {
      var cs = window.getComputedStyle(document.body), left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"], top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"], right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
      return [parse(left), parse(top), parse(right)];
    };
    getGapWidth = function(gapMode) {
      if (gapMode === void 0 && (gapMode = "margin"), typeof window > "u")
        return zeroGap;
      var offsets = getOffset(gapMode), documentWidth = document.documentElement.clientWidth, windowWidth = window.innerWidth;
      return { left: offsets[0], top: offsets[1], right: offsets[2], gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]) };
    };
    Style = styleSingleton();
    getStyles = function(_a, allowRelative, gapMode, important) {
      var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
      return gapMode === void 0 && (gapMode = "margin"), `
  .`.concat(noScrollbarsClassName, ` {
   overflow: hidden `).concat(important, `;
   padding-right: `).concat(gap, "px ").concat(important, `;
  }
  body {
    overflow: hidden `).concat(important, `;
    overscroll-behavior: contain;
    `).concat([allowRelative && "position: relative ".concat(important, ";"), gapMode === "margin" && `
    padding-left: `.concat(left, `px;
    padding-top: `).concat(top, `px;
    padding-right: `).concat(right, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(gap, "px ").concat(important, `;
    `), gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(zeroRightClassName, ` {
    right: `).concat(gap, "px ").concat(important, `;
  }
  
  .`).concat(fullWidthClassName, ` {
    margin-right: `).concat(gap, "px ").concat(important, `;
  }
  
  .`).concat(zeroRightClassName, " .").concat(zeroRightClassName, ` {
    right: 0 `).concat(important, `;
  }
  
  .`).concat(fullWidthClassName, " .").concat(fullWidthClassName, ` {
    margin-right: 0 `).concat(important, `;
  }
  
  body {
    `).concat(removedBarSizeVariable, ": ").concat(gap, `px;
  }
`);
    };
    RemoveScrollBar = function(props) {
      var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a, gap = React9.useMemo(function() {
        return getGapWidth(gapMode);
      }, [gapMode]);
      return React9.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, noImportant ? "" : "!important") });
    };
    passiveSupported = false;
    if (typeof window < "u")
      try {
        options = Object.defineProperty({}, "passive", { get: function() {
          return passiveSupported = true, true;
        } }), window.addEventListener("test", options, options), window.removeEventListener("test", options, options);
      } catch {
        passiveSupported = false;
      }
    nonPassive = passiveSupported ? { passive: false } : false;
    alwaysContainsScroll = function(node) {
      return node.tagName === "TEXTAREA";
    };
    elementCanBeScrolled = function(node, overflow) {
      var styles = window.getComputedStyle(node);
      return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
    };
    elementCouldBeVScrolled = function(node) {
      return elementCanBeScrolled(node, "overflowY");
    };
    elementCouldBeHScrolled = function(node) {
      return elementCanBeScrolled(node, "overflowX");
    };
    locationCouldBeScrolled = function(axis, node) {
      var ownerDocument = node.ownerDocument, current = node;
      do {
        typeof ShadowRoot < "u" && current instanceof ShadowRoot && (current = current.host);
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
          var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
          if (s > d)
            return true;
        }
        current = current.parentNode;
      } while (current && current !== ownerDocument.body);
      return false;
    };
    getVScrollVariables = function(_a) {
      var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
      return [scrollTop, scrollHeight, clientHeight];
    };
    getHScrollVariables = function(_a) {
      var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
      return [scrollLeft, scrollWidth, clientWidth];
    };
    elementCouldBeScrolled = function(axis, node) {
      return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
    };
    getScrollVariables = function(axis, node) {
      return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
    };
    getDirectionFactor = function(axis, direction) {
      return axis === "h" && direction === "rtl" ? -1 : 1;
    };
    handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
      var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction), delta = directionFactor * sourceDelta, target = event.target, targetInLock = endTarget.contains(target), shouldCancelScroll = false, isDeltaPositive = delta > 0, availableScroll = 0, availableScrollTop = 0;
      do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2], elementScroll = scroll_1 - capacity - directionFactor * position;
        (position || elementScroll) && elementCouldBeScrolled(axis, target) && (availableScroll += elementScroll, availableScrollTop += position), target = target.parentNode;
      } while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
      return (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll) || !isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) && (shouldCancelScroll = true), shouldCancelScroll;
    };
    getTouchXY = function(event) {
      return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
    };
    getDeltaXY = function(event) {
      return [event.deltaX, event.deltaY];
    };
    extractRef3 = function(ref) {
      return ref && "current" in ref ? ref.current : ref;
    };
    deltaCompare = function(x, y) {
      return x[0] === y[0] && x[1] === y[1];
    };
    generateStyle = function(id) {
      return `
  .block-interactivity-`.concat(id, ` {pointer-events: none;}
  .allow-interactivity-`).concat(id, ` {pointer-events: all;}
`);
    };
    idCounter = 0;
    lockStack = [];
    sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);
    ReactRemoveScroll = React11.forwardRef(function(props, ref) {
      return React11.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
    });
    ReactRemoveScroll.classNames = RemoveScroll.classNames;
    Combination_default2 = ReactRemoveScroll;
    import_prop_types = __toESM2(require_prop_types2());
    _excluded = ["as", "isOpen"];
    _excluded2 = ["allowPinchZoom", "as", "dangerouslyBypassFocusLock", "dangerouslyBypassScrollLock", "initialFocusRef", "onClick", "onDismiss", "onKeyDown", "onMouseDown", "unstable_lockFocusAcrossFrames"];
    _excluded3 = ["as", "onClick", "onKeyDown"];
    overlayPropTypes = { allowPinchZoom: import_prop_types.default.bool, dangerouslyBypassFocusLock: import_prop_types.default.bool, dangerouslyBypassScrollLock: import_prop_types.default.bool, initialFocusRef: function() {
      return null;
    }, onDismiss: import_prop_types.default.func };
    DialogOverlay = (0, import_react.forwardRef)(function(_ref2, forwardedRef) {
      var _ref$as = _ref2.as, Comp = _ref$as === void 0 ? "div" : _ref$as, _ref$isOpen = _ref2.isOpen, isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen, props = _objectWithoutPropertiesLoose2(_ref2, _excluded);
      return useCheckStyles("dialog"), (0, import_react.useEffect)(function() {
        isOpen ? window.__REACH_DISABLE_TOOLTIPS = true : window.requestAnimationFrame(function() {
          window.__REACH_DISABLE_TOOLTIPS = false;
        });
      }, [isOpen]), isOpen ? (0, import_react.createElement)(Portal, { "data-reach-dialog-wrapper": "" }, (0, import_react.createElement)(DialogInner, _extends2({ ref: forwardedRef, as: Comp }, props))) : null;
    });
    DialogInner = (0, import_react.forwardRef)(function(_ref2, forwardedRef) {
      var allowPinchZoom = _ref2.allowPinchZoom, _ref2$as = _ref2.as, Comp = _ref2$as === void 0 ? "div" : _ref2$as, _ref2$dangerouslyBypa = _ref2.dangerouslyBypassFocusLock, dangerouslyBypassFocusLock = _ref2$dangerouslyBypa === void 0 ? false : _ref2$dangerouslyBypa, _ref2$dangerouslyBypa2 = _ref2.dangerouslyBypassScrollLock, dangerouslyBypassScrollLock = _ref2$dangerouslyBypa2 === void 0 ? false : _ref2$dangerouslyBypa2, initialFocusRef2 = _ref2.initialFocusRef, onClick = _ref2.onClick, _ref2$onDismiss = _ref2.onDismiss, onDismiss = _ref2$onDismiss === void 0 ? noop : _ref2$onDismiss, onKeyDown = _ref2.onKeyDown, onMouseDown = _ref2.onMouseDown, unstable_lockFocusAcrossFrames = _ref2.unstable_lockFocusAcrossFrames, props = _objectWithoutPropertiesLoose2(_ref2, _excluded2), lockFocusAcrossFramesIsDefined = unstable_lockFocusAcrossFrames !== void 0, mouseDownTarget = (0, import_react.useRef)(null), overlayNode = (0, import_react.useRef)(null), ref = useComposedRefs(overlayNode, forwardedRef), activateFocusLock = (0, import_react.useCallback)(function() {
        initialFocusRef2 && initialFocusRef2.current && initialFocusRef2.current.focus();
      }, [initialFocusRef2]);
      function handleClick(event) {
        mouseDownTarget.current === event.target && (event.stopPropagation(), onDismiss(event));
      }
      function handleKeyDown(event) {
        event.key === "Escape" && (event.stopPropagation(), onDismiss(event));
      }
      function handleMouseDown(event) {
        mouseDownTarget.current = event.target;
      }
      return (0, import_react.useEffect)(function() {
        return overlayNode.current ? createAriaHider(overlayNode.current) : void 0;
      }, []), (0, import_react.createElement)(es2015_default2, { autoFocus: true, returnFocus: true, onActivation: activateFocusLock, disabled: dangerouslyBypassFocusLock, crossFrame: unstable_lockFocusAcrossFrames ?? true }, (0, import_react.createElement)(Combination_default2, { allowPinchZoom, enabled: !dangerouslyBypassScrollLock }, (0, import_react.createElement)(Comp, _extends2({}, props, { ref, "data-reach-dialog-overlay": "", onClick: composeEventHandlers(onClick, handleClick), onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown), onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown) }))));
    });
    DialogContent = (0, import_react.forwardRef)(function(_ref3, forwardedRef) {
      var _ref3$as = _ref3.as, Comp = _ref3$as === void 0 ? "div" : _ref3$as, onClick = _ref3.onClick;
      _ref3.onKeyDown;
      var props = _objectWithoutPropertiesLoose2(_ref3, _excluded3);
      return (0, import_react.createElement)(Comp, _extends2({ "aria-modal": "true", role: "dialog", tabIndex: -1 }, props, { ref: forwardedRef, "data-reach-dialog-content": "", onClick: composeEventHandlers(onClick, function(event) {
        event.stopPropagation();
      }) }));
    });
  }
});

// node_modules/@twilio-paste/flex/dist/index.es.js
var index_es_exports2 = {};
__export(index_es_exports2, {
  Flex: () => Flex
});
var React12, import_prop_types2, getGrow, getShrink, getSuffix, getBasis, getVertical, getWrap, RemapedVerticalAlignments, vAlignToProps, RemapedHorizontalAlignments, hAlignToProps, getFlexStyles, Flex;
var init_index_es10 = __esm({
  "node_modules/@twilio-paste/flex/dist/index.es.js"() {
    React12 = __toESM(require_react());
    import_prop_types2 = __toESM(require_prop_types());
    init_index_es5();
    init_index_es4();
    getGrow = ({ grow }) => Array.isArray(grow) ? grow.map((value) => Number(value)) : typeof grow == "number" ? grow : grow ? 1 : 0;
    getShrink = ({ shrink, basis }) => Array.isArray(shrink) ? shrink.map((value) => Number(value)) : typeof shrink == "number" ? shrink : typeof shrink == "boolean" ? shrink ? 1 : 0 : basis && basis !== "auto" ? 0 : 1;
    getSuffix = (item) => {
      let suffix = typeof item == "number" || String(Number.parseInt(item, 10)) === item ? "px" : "";
      return item + suffix;
    };
    getBasis = ({ basis }) => Array.isArray(basis) ? basis.map((value) => getSuffix(value)) : basis ? getSuffix(basis) : "auto";
    getVertical = ({ vertical }) => Array.isArray(vertical) ? vertical.map((value) => typeof value == "boolean" ? value === true ? "column" : "row" : value) : vertical ? "column" : "row";
    getWrap = ({ wrap }) => Array.isArray(wrap) ? wrap.map((value) => typeof value == "boolean" ? value === true ? "wrap" : "nowrap" : value) : wrap ? "wrap" : "nowrap";
    RemapedVerticalAlignments = { top: "flex-start", center: "center", bottom: "flex-end", stretch: "stretch" };
    vAlignToProps = ({ vAlignContent }) => Array.isArray(vAlignContent) ? vAlignContent.map((value) => RemapedVerticalAlignments[value]) : vAlignContent ? RemapedVerticalAlignments[vAlignContent] : "flex-start";
    RemapedHorizontalAlignments = { left: "flex-start", center: "center", right: "flex-end", around: "space-around", between: "space-between" };
    hAlignToProps = ({ hAlignContent }) => Array.isArray(hAlignContent) ? hAlignContent.map((value) => RemapedHorizontalAlignments[value]) : hAlignContent ? RemapedHorizontalAlignments[hAlignContent] : "flex-start";
    getFlexStyles = (props) => {
      let styles = { justifyContent: props.vertical ? vAlignToProps(props) : hAlignToProps(props), alignItems: props.vertical ? hAlignToProps(props) : vAlignToProps(props) };
      return (props.grow || props.shrink || props.basis) && (styles.flexGrow = getGrow(props), styles.flexShrink = getShrink(props), styles.flexBasis = getBasis(props)), props.vertical && (styles.flexDirection = getVertical(props)), props.wrap && (styles.flexWrap = getWrap(props)), styles;
    };
    Flex = React12.forwardRef(({ as, basis, children, display, element = "FLEX", hAlignContent, grow, marginTop, marginRight, marginBottom, marginLeft, margin, marginX, marginY, paddingTop, paddingRight, paddingBottom, paddingLeft, padding, paddingX, paddingY, maxWidth, minWidth = "size0", width, height, minHeight, maxHeight, size, shrink, vertical, vAlignContent, wrap, ...props }, ref) => {
      let FlexStyles = React12.useMemo(() => getFlexStyles({ basis, hAlignContent, grow, shrink, vertical, vAlignContent, wrap }), [basis, hAlignContent, grow, shrink, vertical, vAlignContent, wrap]);
      size && (width || height) && console.error("[Paste Flex]: you cannot set a height or width when using the size attribute"), (marginX && (margin || marginBottom || marginLeft || marginRight || marginTop) || marginY && (margin || marginBottom || marginLeft || marginRight || marginTop)) && console.error("[Paste Flex]: you cannot set a top, right, bottom or left margin when using the marginX or marginY attributes."), (paddingX && (padding || paddingBottom || paddingLeft || paddingRight || paddingTop) || paddingY && (padding || paddingBottom || paddingLeft || paddingRight || paddingTop)) && console.error("[Paste Flex]: you cannot set a top, right, bottom or left padding when using the paddingX or paddingY attributes.");
      let margins = marginX || marginY ? { marginX, marginY } : { margin, marginBottom, marginLeft, marginRight, marginTop }, paddings = paddingX || paddingY ? { paddingX, paddingY } : { padding, paddingBottom, paddingLeft, paddingRight, paddingTop }, widths = size ? { size } : { height, width };
      return React12.createElement(Box, { ...FlexStyles, ...safelySpreadBoxProps(props), ref, as, display, element, ...margins, ...paddings, minHeight, maxHeight, maxWidth, minWidth, ...widths }, children);
    });
    Flex.displayName = "Flex";
    Flex.defaultProps = { display: "flex" };
    Flex.propTypes = { as: import_prop_types2.default.string, display: ResponsiveProp(import_prop_types2.default.oneOf(["flex", "inline-flex"])), element: import_prop_types2.default.string, vertical: ResponsiveProp(import_prop_types2.default.bool), vAlignContent: ResponsiveProp(import_prop_types2.default.oneOf(["top", "center", "bottom", "stretch"])), hAlignContent: ResponsiveProp(import_prop_types2.default.oneOf(["left", "center", "right", "around", "between"])), grow: ResponsiveProp(import_prop_types2.default.oneOfType([import_prop_types2.default.bool, import_prop_types2.default.number])), shrink: ResponsiveProp(import_prop_types2.default.oneOfType([import_prop_types2.default.bool, import_prop_types2.default.number])), basis: ResponsiveProp(import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.number])), wrap: ResponsiveProp(import_prop_types2.default.bool), width: isWidthTokenProp, minWidth: isMinWidthTokenProp, maxWidth: isMaxWidthTokenProp, height: isHeightTokenProp, minHeight: isMinHeightTokenProp, maxHeight: isMaxHeightTokenProp, size: isWidthTokenProp, margin: isMarginTokenProp, marginTop: isMarginTokenProp, marginRight: isMarginTokenProp, marginBottom: isMarginTokenProp, marginLeft: isMarginTokenProp, marginX: isMarginTokenProp, marginY: isMarginTokenProp, padding: isPaddingTokenProp, paddingTop: isPaddingTokenProp, paddingRight: isPaddingTokenProp, paddingBottom: isPaddingTokenProp, paddingLeft: isPaddingTokenProp, paddingX: isPaddingTokenProp, paddingY: isPaddingTokenProp };
  }
});

// node_modules/@twilio-paste/screen-reader-only/dist/index.es.js
var index_es_exports3 = {};
__export(index_es_exports3, {
  ScreenReaderOnly: () => ScreenReaderOnly
});
var React13, import_prop_types3, ScreenReaderOnly;
var init_index_es11 = __esm({
  "node_modules/@twilio-paste/screen-reader-only/dist/index.es.js"() {
    React13 = __toESM(require_react());
    import_prop_types3 = __toESM(require_prop_types());
    init_index_es5();
    ScreenReaderOnly = React13.forwardRef(({ as = "span", children, ...props }, ref) => React13.createElement(Box, { ...props, as, border: "none", clip: "rect(0 0 0 0)", height: "1px", margin: "spaceNegative10", overflow: "hidden", padding: "space0", position: "absolute", ref, textTransform: "none", whiteSpace: "nowrap", width: "1px" }, children));
    ScreenReaderOnly.displayName = "ScreenReaderOnly";
  }
});

// node_modules/@twilio-paste/icons/esm/CloseIcon.js
var o, n;
var init_CloseIcon = __esm({
  "node_modules/@twilio-paste/icons/esm/CloseIcon.js"() {
    o = __toESM(require_react());
    init_index_es6();
    init_IconWrapper();
    n = o.forwardRef(({ as: i, display: s, element: p = "ICON", size: t, color: a, title: r, decorative: e }, c) => {
      const l = `CloseIcon-${useUID2()}`;
      if (!e && r == null)
        throw new Error("[CloseIcon]: Missing a title for non-decorative icon.");
      return o.createElement(f, { as: i, display: s, element: p, size: t, color: a, ref: c }, o.createElement("svg", { role: "img", "aria-hidden": e, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 20 20", "aria-labelledby": l }, r ? o.createElement("title", { id: l }, r) : null, o.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M15.16 13.514L11.645 10l3.515-3.514a1.165 1.165 0 00-1.646-1.646L10 8.355 6.486 4.84A1.165 1.165 0 004.84 6.486L8.355 10 4.84 13.514a1.165 1.165 0 001.646 1.646L10 11.645l3.514 3.515a1.165 1.165 0 001.646-1.646z" })));
    });
    n.displayName = "CloseIcon";
  }
});

// node_modules/@twilio-paste/heading/dist/index.es.js
var index_es_exports4 = {};
__export(index_es_exports4, {
  Heading: () => Heading,
  HeadingPropTypes: () => HeadingPropTypes
});
function getHeadingProps(headingVariant, marginBottom) {
  switch (headingVariant) {
    case "heading10":
      return { marginBottom: marginBottom || "space70", fontSize: "fontSize90", fontWeight: "fontWeightSemibold", lineHeight: "lineHeight90", letterSpacing: "-.02em" };
    case "heading30":
      return { marginBottom: marginBottom || "space50", fontSize: "fontSize60", fontWeight: "fontWeightSemibold", lineHeight: "lineHeight60", letterSpacing: "-.02em" };
    case "heading40":
      return { marginBottom: marginBottom || "space40", fontSize: "fontSize40", fontWeight: "fontWeightSemibold", lineHeight: "lineHeight40", letterSpacing: "-.02em" };
    case "heading50":
      return { marginBottom: marginBottom || "space30", fontSize: "fontSize30", fontWeight: "fontWeightSemibold", lineHeight: "lineHeight30", letterSpacing: "-.02em" };
    case "heading60":
      return { marginBottom: marginBottom || "space30", fontSize: "fontSize20", fontWeight: "fontWeightSemibold", lineHeight: "lineHeight20", letterSpacing: "-.02em" };
    case "heading20":
    default:
      return { marginBottom: marginBottom || "space60", fontSize: "fontSize70", fontWeight: "fontWeightSemibold", lineHeight: "lineHeight70", letterSpacing: "-.02em" };
  }
}
var React14, import_prop_types4, HeadingPropTypes, Heading;
var init_index_es12 = __esm({
  "node_modules/@twilio-paste/heading/dist/index.es.js"() {
    React14 = __toESM(require_react());
    init_index_es8();
    import_prop_types4 = __toESM(require_prop_types());
    HeadingPropTypes = { as: import_prop_types4.default.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "div", "label", "span"]).isRequired, element: import_prop_types4.default.string, marginBottom: import_prop_types4.default.oneOf(["space0"]), variant: import_prop_types4.default.oneOf(["heading10", "heading20", "heading30", "heading40", "heading50", "heading60"]).isRequired, display: import_prop_types4.default.string };
    Heading = React14.forwardRef(({ as, children, display = "block", element = "HEADING", id, marginBottom, variant, ...props }, ref) => React14.createElement(Text, { ...safelySpreadTextProps(props), ...getHeadingProps(variant, marginBottom), as, display, element, id, color: "colorText", variant, ref }, children));
    Heading.displayName = "Heading";
    Heading.propTypes = HeadingPropTypes;
  }
});

// node_modules/@twilio-paste/modal/dist/index.es.js
var index_es_exports5 = {};
__export(index_es_exports5, {
  Modal: () => Modal,
  ModalBody: () => ModalBody,
  ModalContext: () => ModalContext,
  ModalDialogContent: () => ModalDialogContent,
  ModalDialogOverlay: () => ModalDialogOverlay,
  ModalFooter: () => ModalFooter,
  ModalFooterActions: () => ModalFooterActions,
  ModalHeader: () => ModalHeader,
  ModalHeading: () => ModalHeading,
  modalBodyStyles: () => modalBodyStyles,
  modalFooterStyles: () => modalFooterStyles,
  modalHeaderStyles: () => modalHeaderStyles,
  useModalContext: () => useModalContext
});
var React22, import_prop_types5, React15, React32, import_prop_types6, React42, import_prop_types7, React52, import_prop_types8, React62, import_prop_types9, React72, import_prop_types10, ModalContext, useModalContext, ModalDialogOverlay, ModalDialogContent, getAnimationStates, Modal, ModalHeader, ModalHeading, ModalBody, ModalFooter, ModalFooterActions, modalHeaderStyles, modalBodyStyles, modalFooterStyles;
var init_index_es13 = __esm({
  "node_modules/@twilio-paste/modal/dist/index.es.js"() {
    React22 = __toESM(require_react());
    import_prop_types5 = __toESM(require_prop_types());
    init_index_es2();
    init_index_es();
    init_index_es5();
    init_index_es3();
    init_index_es9();
    React15 = __toESM(require_react());
    React32 = __toESM(require_react());
    import_prop_types6 = __toESM(require_prop_types());
    init_index_es5();
    init_index_es7();
    init_index_es10();
    init_index_es11();
    init_CloseIcon();
    React42 = __toESM(require_react());
    import_prop_types7 = __toESM(require_prop_types());
    init_index_es12();
    React52 = __toESM(require_react());
    import_prop_types8 = __toESM(require_prop_types());
    init_index_es5();
    React62 = __toESM(require_react());
    import_prop_types9 = __toESM(require_prop_types());
    init_index_es5();
    React72 = __toESM(require_react());
    import_prop_types10 = __toESM(require_prop_types());
    init_index_es5();
    ModalContext = React15.createContext(null);
    useModalContext = () => {
      let context = React15.useContext(ModalContext);
      if (!context)
        throw new Error("useModalContext must be used with ModalContextProvider");
      return context;
    };
    ModalDialogOverlay = animated(export_styled(DialogOverlay)(css({ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundColor: "colorBackgroundOverlay", zIndex: "zIndex80" }), pasteBaseStyles, getCustomElementStyles));
    ModalDialogContent = animated(export_styled(DialogContent)(({ size }) => css({ width: "100%", maxWidth: size === "wide" ? "size80" : "size60", maxHeight: "90%", minHeight: "170px", backgroundColor: "colorBackgroundBody", borderColor: "colorBorderWeaker", borderRadius: "borderRadius30", borderStyle: "solid", borderWidth: "borderWidth10", boxShadow: "shadow", display: "flex", flexDirection: "column" })));
    getAnimationStates = () => ({ from: { opacity: 0, transform: "scale(0.675)" }, enter: { opacity: 1, transform: "scale(1)" }, leave: { opacity: 0, transform: "scale(0.675)" }, config: { mass: 0.5, tension: 370, friction: 26 } });
    Modal = React22.forwardRef(({ children, element = "MODAL", isOpen, onDismiss, allowPinchZoom = true, initialFocusRef, ariaLabelledby, size, ...props }, ref) => {
      let transitions = useTransition(isOpen, getAnimationStates());
      return React22.createElement(ModalContext.Provider, { value: { onDismiss } }, transitions((styles, item) => item && React22.createElement(ModalDialogOverlay, { onDismiss, allowPinchZoom, initialFocusRef, style: { opacity: styles.opacity }, "data-paste-element": `${element}_OVERLAY`, variant: size }, React22.createElement(Box, { as: ModalDialogContent, "aria-labelledby": ariaLabelledby, ...safelySpreadBoxProps(props), element, ref, style: styles, size, variant: size }, children))));
    });
    Modal.displayName = "Modal";
    Modal.propTypes = { children: import_prop_types5.default.node.isRequired, element: import_prop_types5.default.string, isOpen: import_prop_types5.default.bool.isRequired, onDismiss: import_prop_types5.default.func.isRequired, allowPinchZoom: import_prop_types5.default.bool, size: import_prop_types5.default.oneOf(["default", "wide"]).isRequired, initialFocusRef: import_prop_types5.default.object, ariaLabelledby: import_prop_types5.default.string.isRequired };
    ModalHeader = React32.forwardRef(({ children, element = "MODAL_HEADER", i18nDismissLabel = "Close modal", ...props }, ref) => {
      let { onDismiss } = useModalContext();
      return React32.createElement(Box, { ...safelySpreadBoxProps(props), as: "div", element, ref, padding: "space90", flexShrink: 0 }, React32.createElement(Flex, { hAlignContent: "between" }, React32.createElement(Flex, { vAlignContent: "center", grow: 1, marginRight: "space70" }, children), React32.createElement(Button, { element: `${element}_CLOSE_BUTTON`, variant: "secondary_icon", size: "reset", onClick: () => onDismiss() }, React32.createElement(n, { element: `${element}_CLOSE_ICON`, decorative: true, size: "sizeIcon60" }), React32.createElement(ScreenReaderOnly, null, i18nDismissLabel))));
    });
    ModalHeader.displayName = "ModalHeader";
    ModalHeader.propTypes = { children: import_prop_types6.default.node.isRequired, element: import_prop_types6.default.string };
    ModalHeading = React42.forwardRef(({ children, as = "h2", element = "MODAL_HEADING", ...props }, ref) => React42.createElement(Heading, { ...props, as, element, marginBottom: "space0", variant: "heading30", ref }, children));
    ModalHeading.displayName = "ModalHeading";
    ModalHeading.propTypes = { children: import_prop_types7.default.node.isRequired, as: import_prop_types7.default.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]), element: import_prop_types7.default.string };
    ModalBody = React52.forwardRef(({ children, element = "MODAL_BODY", ...props }, ref) => React52.createElement(Box, { ...safelySpreadBoxProps(props), overflowY: "auto", padding: "space90", paddingTop: "space0", as: "div", element, ref }, children));
    ModalBody.displayName = "ModalBody";
    ModalBody.propTypes = { children: import_prop_types8.default.node.isRequired, element: import_prop_types8.default.string };
    ModalFooter = React62.forwardRef(({ children, element = "MODAL_FOOTER", ...props }, ref) => React62.createElement(Box, { ...safelySpreadBoxProps(props), flexShrink: 0, display: "flex", padding: "space90", paddingTop: "space0", as: "div", element, ref }, children));
    ModalFooter.displayName = "ModalFooter";
    ModalFooter.propTypes = { children: import_prop_types9.default.node.isRequired, element: import_prop_types9.default.string };
    ModalFooterActions = React72.forwardRef(({ children, element = "MODAL_FOOTER_ACTIONS", justify, ...props }, ref) => {
      let count = React72.Children.count(children);
      return React72.createElement(Box, { ...safelySpreadBoxProps(props), display: "flex", justifyContent: justify === "start" ? "flex-start" : "flex-end", flexShrink: justify === "start" ? null : 0, flexWrap: "wrap", flexGrow: 1, element, alignItems: "center", ref }, React72.Children.map(children, (child, index) => React72.createElement(Box, { marginRight: count !== index + 1 ? "space50" : null, element: `${element}_ITEM` }, child)));
    });
    ModalFooterActions.displayName = "ModalFooterActions";
    ModalFooterActions.propTypes = { children: import_prop_types10.default.node.isRequired, element: import_prop_types10.default.string, justify: import_prop_types10.default.oneOf(["start", "end"]) };
    modalHeaderStyles = { borderBottomStyle: "solid", borderBottomWidth: "borderWidth10", borderBottomColor: "colorBorderWeak", padding: "space50", margin: "space0", flexShrink: 0 };
    modalBodyStyles = { overflowY: "auto", padding: "space50", paddingBottom: "space60" };
    modalFooterStyles = { borderTopStyle: "solid", borderTopWidth: "borderWidth10", borderTopColor: "colorBorderWeak", padding: "space50", display: "flex", flexShrink: 0 };
  }
});

export {
  ScreenReaderOnly,
  index_es_exports3 as index_es_exports,
  init_index_es11 as init_index_es,
  n,
  init_CloseIcon,
  index_es_exports as index_es_exports2,
  init_index_es9 as init_index_es2,
  Flex,
  index_es_exports2 as index_es_exports3,
  init_index_es10 as init_index_es3,
  HeadingPropTypes,
  Heading,
  index_es_exports4,
  init_index_es12 as init_index_es4,
  ModalContext,
  useModalContext,
  ModalDialogOverlay,
  ModalDialogContent,
  Modal,
  ModalHeader,
  ModalHeading,
  ModalBody,
  ModalFooter,
  ModalFooterActions,
  modalHeaderStyles,
  modalBodyStyles,
  modalFooterStyles,
  index_es_exports5,
  init_index_es13 as init_index_es5
};
//# sourceMappingURL=chunk-OX7QNYTR.js.map
