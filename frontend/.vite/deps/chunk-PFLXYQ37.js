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

// node_modules/@twilio-paste/animation-library/dist/index.es.js
function schedule(fn, queue) {
  sync ? (queue.delete(fn), fn(0)) : (queue.add(fn), start());
}
function start() {
  ts < 0 && (ts = 0, raf.frameLoop !== "demand" && nativeRaf(loop));
}
function stop() {
  ts = -1;
}
function loop() {
  ~ts && (nativeRaf(loop), raf.batchedUpdates(update));
}
function update() {
  let prevTs = ts;
  ts = raf.now();
  let count = findTimeout(ts);
  count && (eachSafely(timeouts.splice(0, count), (t2) => t2.handler()), pendingCount -= count), onStartQueue.flush(), updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667), onFrameQueue.flush(), writeQueue.flush(), onFinishQueue.flush(), pendingCount || stop();
}
function makeQueue() {
  let next = /* @__PURE__ */ new Set(), current = next;
  return { add(fn) {
    pendingCount += current == next && !next.has(fn) ? 1 : 0, next.add(fn);
  }, delete(fn) {
    return pendingCount -= current == next && next.has(fn) ? 1 : 0, next.delete(fn);
  }, flush(arg) {
    current.size && (next = /* @__PURE__ */ new Set(), pendingCount -= current.size, eachSafely(current, (fn) => fn(arg) && next.add(fn)), pendingCount += next.size, current = next);
  } };
}
function eachSafely(values, each2) {
  values.forEach((value) => {
    try {
      each2(value);
    } catch (e2) {
      raf.catch(e2);
    }
  });
}
function noop() {
}
function isEqual(a2, b2) {
  if (is.arr(a2)) {
    if (!is.arr(b2) || a2.length !== b2.length)
      return false;
    for (let i2 = 0; i2 < a2.length; i2++)
      if (a2[i2] !== b2[i2])
        return false;
    return true;
  }
  return a2 === b2;
}
function eachProp(obj, fn, ctx2) {
  if (is.arr(obj)) {
    for (let i2 = 0; i2 < obj.length; i2++)
      fn.call(ctx2, obj[i2], `${i2}`);
    return;
  }
  for (let key in obj)
    obj.hasOwnProperty(key) && fn.call(ctx2, obj[key], key);
}
function flush(queue, iterator) {
  if (queue.size) {
    let items = Array.from(queue);
    queue.clear(), each(items, iterator);
  }
}
function flushStartQueue() {
  startQueue.forEach(startSafely), startQueue.clear(), raf(advance);
}
function startSafely(animation) {
  currentFrame.includes(animation) || startUnsafely(animation);
}
function startUnsafely(animation) {
  currentFrame.splice(findIndex(currentFrame, (other) => other.priority > animation.priority), 0, animation);
}
function advance(dt) {
  let nextFrame = prevFrame;
  for (let i2 = 0; i2 < currentFrame.length; i2++) {
    let animation = currentFrame[i2];
    priority = animation.priority, animation.idle || (willAdvance(animation), animation.advance(dt), animation.idle || nextFrame.push(animation));
  }
  return priority = 0, prevFrame = currentFrame, prevFrame.length = 0, currentFrame = nextFrame, currentFrame.length > 0;
}
function findIndex(arr, test) {
  let index2 = arr.findIndex(test);
  return index2 < 0 ? arr.length : index2;
}
function call(...parts) {
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
function normalizeColor(color2) {
  let match;
  return typeof color2 == "number" ? color2 >>> 0 === color2 && color2 >= 0 && color2 <= 4294967295 ? color2 : null : (match = hex6.exec(color2)) ? parseInt(match[1] + "ff", 16) >>> 0 : colors$1 && colors$1[color2] !== void 0 ? colors$1[color2] : (match = rgb.exec(color2)) ? (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0 : (match = rgba.exec(color2)) ? (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0 : (match = hex3.exec(color2)) ? parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0 : (match = hex8.exec(color2)) ? parseInt(match[1], 16) >>> 0 : (match = hex4.exec(color2)) ? parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0 : (match = hsl.exec(color2)) ? (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0 : (match = hsla.exec(color2)) ? (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0 : null;
}
function hue2rgb(p2, q2, t2) {
  return t2 < 0 && (t2 += 1), t2 > 1 && (t2 -= 1), t2 < 1 / 6 ? p2 + (q2 - p2) * 6 * t2 : t2 < 1 / 2 ? q2 : t2 < 2 / 3 ? p2 + (q2 - p2) * (2 / 3 - t2) * 6 : p2;
}
function hslToRgb(h2, s2, l2) {
  let q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2, p2 = 2 * l2 - q2, r2 = hue2rgb(p2, q2, h2 + 1 / 3), g2 = hue2rgb(p2, q2, h2), b2 = hue2rgb(p2, q2, h2 - 1 / 3);
  return Math.round(r2 * 255) << 24 | Math.round(g2 * 255) << 16 | Math.round(b2 * 255) << 8;
}
function parse255(str) {
  let int = parseInt(str, 10);
  return int < 0 ? 0 : int > 255 ? 255 : int;
}
function parse360(str) {
  return (parseFloat(str) % 360 + 360) % 360 / 360;
}
function parse1(str) {
  let num = parseFloat(str);
  return num < 0 ? 0 : num > 1 ? 255 : Math.round(num * 255);
}
function parsePercentage(str) {
  let int = parseFloat(str);
  return int < 0 ? 0 : int > 100 ? 1 : int / 100;
}
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null)
    return input;
  int32Color = int32Color || 0;
  let r2 = (int32Color & 4278190080) >>> 24, g2 = (int32Color & 16711680) >>> 16, b2 = (int32Color & 65280) >>> 8, a2 = (int32Color & 255) / 255;
  return `rgba(${r2}, ${g2}, ${b2}, ${a2})`;
}
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity")
      return result;
    extrapolateLeft === "clamp" && (result = inputMin);
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity")
      return result;
    extrapolateRight === "clamp" && (result = inputMax);
  }
  return outputMin === outputMax ? outputMin : inputMin === inputMax ? input <= inputMin ? outputMin : outputMax : (inputMin === -1 / 0 ? result = -result : inputMax === 1 / 0 ? result = result - inputMin : result = (result - inputMin) / (inputMax - inputMin), result = easing(result), outputMin === -1 / 0 ? result = -result : outputMax === 1 / 0 ? result = result + outputMin : result = result * (outputMax - outputMin) + outputMin, result);
}
function findRange(input, inputRange) {
  for (var i2 = 1; i2 < inputRange.length - 1 && !(inputRange[i2] >= input); ++i2)
    ;
  return i2 - 1;
}
function _extends() {
  return _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends.apply(this, arguments);
}
function callFluidObserver(observer, event) {
  observer.eventObserved ? observer.eventObserved(event) : observer(event);
}
function callFluidObservers(target, event) {
  let observers = target[$observers];
  observers && observers.forEach((observer) => {
    callFluidObserver(observer, event);
  });
}
function addFluidObserver(target, observer) {
  if (target[$get]) {
    let observers = target[$observers];
    observers || setHidden(target, $observers, observers = /* @__PURE__ */ new Set()), observers.has(observer) || (observers.add(observer), target.observerAdded && target.observerAdded(observers.size, observer));
  }
  return observer;
}
function removeFluidObserver(target, observer) {
  let observers = target[$observers];
  if (observers && observers.has(observer)) {
    let count = observers.size - 1;
    count ? observers.delete(observer) : target[$observers] = null, target.observerRemoved && target.observerRemoved(count, observer);
  }
}
function deprecateInterpolate() {
  warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
function deprecateDirectCall() {
  warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function isAnimatedString(value) {
  return is.str(value) && (value[0] == "#" || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors$1 || {}));
}
function useForceUpdate() {
  let update3 = (0, import_react.useState)()[1], isMounted = useIsMounted();
  return () => {
    isMounted.current && update3(Math.random());
  };
}
function useMemoOne(getResult, inputs) {
  let [initial] = (0, import_react.useState)(() => ({ inputs, result: getResult() })), committed = (0, import_react.useRef)(), prevCache = committed.current, cache = prevCache;
  return cache ? Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs)) || (cache = { inputs, result: getResult() }) : cache = initial, (0, import_react.useEffect)(() => {
    committed.current = cache, prevCache == initial && (initial.inputs = initial.result = void 0);
  }, [cache]), cache.result;
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length)
    return false;
  for (let i2 = 0; i2 < next.length; i2++)
    if (next[i2] !== prev[i2])
      return false;
  return true;
}
function usePrev(value) {
  let prevRef = (0, import_react.useRef)();
  return (0, import_react.useEffect)(() => {
    prevRef.current = value;
  }), prevRef.current;
}
function makeAnimated(value) {
  return (isAnimatedString(value) ? AnimatedString : AnimatedValue).create(value);
}
function getAnimatedType(value) {
  let parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}
function _extends2() {
  return _extends2 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends2.apply(this, arguments);
}
function getAnimatedState(props2, host2) {
  let dependencies = /* @__PURE__ */ new Set();
  return TreeContext.dependencies = dependencies, props2.style && (props2 = _extends2({}, props2, { style: host2.createAnimatedStyle(props2.style) })), props2 = new AnimatedObject(props2), TreeContext.dependencies = null, [props2, dependencies];
}
function updateRef(ref, value) {
  return ref && (is.fun(ref) ? ref(value) : ref.current = value), value;
}
function _extends3() {
  return _extends3 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends3.apply(this, arguments);
}
function callProp(value, ...args) {
  return is.fun(value) ? value(...args) : value;
}
function getForwardProps(props2) {
  let forward = {}, count = 0;
  if (eachProp(props2, (value, prop) => {
    RESERVED_PROPS[prop] || (forward[prop] = value, count++);
  }), count)
    return forward;
}
function inferTo(props2) {
  let to2 = getForwardProps(props2);
  if (to2) {
    let out = { to: to2 };
    return eachProp(props2, (val, key) => key in to2 || (out[key] = val)), out;
  }
  return _extends3({}, props2);
}
function computeGoal(value) {
  return value = getFluidValue(value), is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals.createStringInterpolator({ range: [0, 1], output: [value, value] })(1) : value;
}
function hasProps(props2) {
  for (let _2 in props2)
    return true;
  return false;
}
function isAsyncTo(to2) {
  return is.fun(to2) || is.arr(to2) && is.obj(to2[0]);
}
function detachRefs(ctrl, ref) {
  var _ctrl$ref;
  (_ctrl$ref = ctrl.ref) == null || _ctrl$ref.delete(ctrl), ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    var _ctrl$ref2;
    (_ctrl$ref2 = ctrl.ref) == null || _ctrl$ref2.delete(ctrl), ref.add(ctrl), ctrl.ref = ref;
  }
}
function mergeConfig(config23, newConfig, defaultConfig) {
  defaultConfig && (defaultConfig = _extends3({}, defaultConfig), sanitizeConfig(defaultConfig, newConfig), newConfig = _extends3({}, defaultConfig, newConfig)), sanitizeConfig(config23, newConfig), Object.assign(config23, newConfig);
  for (let key in defaults)
    config23[key] == null && (config23[key] = defaults[key]);
  let { mass, frequency, damping } = config23;
  return is.und(frequency) || (frequency < 0.01 && (frequency = 0.01), damping < 0 && (damping = 0), config23.tension = Math.pow(2 * Math.PI / frequency, 2) * mass, config23.friction = 4 * Math.PI * damping * mass / frequency), config23;
}
function sanitizeConfig(config23, props2) {
  if (!is.und(props2.decay))
    config23.duration = void 0;
  else {
    let isTensionConfig = !is.und(props2.tension) || !is.und(props2.friction);
    (isTensionConfig || !is.und(props2.frequency) || !is.und(props2.damping) || !is.und(props2.mass)) && (config23.duration = void 0, config23.decay = void 0), isTensionConfig && (config23.frequency = void 0);
  }
}
function scheduleProps(callId, { key, props: props2, defaultProps, state, actions }) {
  return new Promise((resolve, reject) => {
    var _props$cancel;
    let delay, timeout, cancel = matchProp((_props$cancel = props2.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);
    if (cancel)
      onStart();
    else {
      is.und(props2.pause) || (state.paused = matchProp(props2.pause, key));
      let pause = defaultProps == null ? void 0 : defaultProps.pause;
      pause !== true && (pause = state.paused || matchProp(pause, key)), delay = callProp(props2.delay || 0, key), pause ? (state.resumeQueue.add(onResume), actions.pause()) : (actions.resume(), onResume());
    }
    function onPause() {
      state.resumeQueue.add(onResume), state.timeouts.delete(timeout), timeout.cancel(), delay = timeout.time - raf.now();
    }
    function onResume() {
      delay > 0 && !globals.skipAnimation ? (state.delayed = true, timeout = raf.setTimeout(onStart, delay), state.pauseQueue.add(onPause), state.timeouts.add(timeout)) : onStart();
    }
    function onStart() {
      state.delayed && (state.delayed = false), state.pauseQueue.delete(onPause), state.timeouts.delete(timeout), callId <= (state.cancelId || 0) && (cancel = true);
      try {
        actions.start(_extends3({}, props2, { callId, cancel }), resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}
function runAsync(to2, props2, state, target) {
  let { callId, parentId, onRest } = props2, { asyncTo: prevTo, promise: prevPromise } = state;
  return !parentId && to2 === prevTo && !props2.reset ? prevPromise : state.promise = (async () => {
    state.asyncId = callId, state.asyncTo = to2;
    let defaultProps = getDefaultProps(props2, (value, key) => key === "onRest" ? void 0 : value), preventBail, bail, bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject)), bailIfEnded = (bailSignal) => {
      let bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);
      if (bailResult)
        throw bailSignal.result = bailResult, bail(bailSignal), bailSignal;
    }, animate = (arg1, arg2) => {
      let bailSignal = new BailSignal(), skipAnimationSignal = new SkipAniamtionSignal();
      return (async () => {
        if (globals.skipAnimation)
          throw stopAsync(state), skipAnimationSignal.result = getFinishedResult(target, false), bail(skipAnimationSignal), skipAnimationSignal;
        bailIfEnded(bailSignal);
        let props22 = is.obj(arg1) ? _extends3({}, arg1) : _extends3({}, arg2, { to: arg1 });
        props22.parentId = callId, eachProp(defaultProps, (value, key) => {
          is.und(props22[key]) && (props22[key] = value);
        });
        let result2 = await target.start(props22);
        return bailIfEnded(bailSignal), state.paused && await new Promise((resume) => {
          state.resumeQueue.add(resume);
        }), result2;
      })();
    }, result;
    if (globals.skipAnimation)
      return stopAsync(state), getFinishedResult(target, false);
    try {
      let animating;
      is.arr(to2) ? animating = (async (queue) => {
        for (let props22 of queue)
          await animate(props22);
      })(to2) : animating = Promise.resolve(to2(animate, target.stop.bind(target))), await Promise.all([animating.then(preventBail), bailPromise]), result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal)
        result = err.result;
      else if (err instanceof SkipAniamtionSignal)
        result = err.result;
      else
        throw err;
    } finally {
      callId == state.asyncId && (state.asyncId = parentId, state.asyncTo = parentId ? prevTo : void 0, state.promise = parentId ? prevPromise : void 0);
    }
    return is.fun(onRest) && raf.batchedUpdates(() => {
      onRest(result, target, target.item);
    }), result;
  })();
}
function stopAsync(state, cancelId) {
  flush(state.timeouts, (t2) => t2.cancel()), state.pauseQueue.clear(), state.resumeQueue.clear(), state.asyncId = state.asyncTo = state.promise = void 0, cancelId && (state.cancelId = cancelId);
}
function checkFinished(target, to2) {
  let goal = computeGoal(to2), value = computeGoal(target.get());
  return isEqual(value, goal);
}
function createLoopUpdate(props2, loop2 = props2.loop, to2 = props2.to) {
  let loopRet = callProp(loop2);
  if (loopRet) {
    let overrides = loopRet !== true && inferTo(loopRet), reverse = (overrides || props2).reverse, reset = !overrides || overrides.reset;
    return createUpdate(_extends3({}, props2, { loop: loop2, default: false, pause: void 0, to: !reverse || isAsyncTo(to2) ? to2 : void 0, from: reset ? props2.from : void 0, reset }, overrides));
  }
}
function createUpdate(props2) {
  let { to: to2, from } = props2 = inferTo(props2), keys = /* @__PURE__ */ new Set();
  return is.obj(to2) && findDefined(to2, keys), is.obj(from) && findDefined(from, keys), props2.keys = keys.size ? Array.from(keys) : null, props2;
}
function declareUpdate(props2) {
  let update3 = createUpdate(props2);
  return is.und(update3.default) && (update3.default = getDefaultProps(update3)), update3;
}
function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}
function mergeActiveFn(target, props2, type) {
  target.animation[type] = props2[type] !== getDefaultProp(props2, type) ? resolveProp(props2[type], target.key) : void 0;
}
function sendEvent(target, type, ...args) {
  var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;
  (_target$animation$typ = (_target$animation = target.animation)[type]) == null || _target$animation$typ.call(_target$animation, ...args), (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null || _target$defaultProps$.call(_target$defaultProps, ...args);
}
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map((props2) => flushUpdate(ctrl, props2))).then((results) => getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props2, isLoop) {
  let { keys, to: to2, from, loop: loop2, onRest, onResolve } = props2, defaults23 = is.obj(props2.default) && props2.default;
  loop2 && (props2.loop = false), to2 === false && (props2.to = null), from === false && (props2.from = null);
  let asyncTo = is.arr(to2) || is.fun(to2) ? to2 : void 0;
  asyncTo ? (props2.to = void 0, props2.onRest = void 0, defaults23 && (defaults23.onRest = void 0)) : each(BATCHED_EVENTS, (key) => {
    let handler = props2[key];
    if (is.fun(handler)) {
      let queue = ctrl._events[key];
      props2[key] = ({ finished, cancelled }) => {
        let result2 = queue.get(handler);
        result2 ? (finished || (result2.finished = false), cancelled && (result2.cancelled = true)) : queue.set(handler, { value: null, finished: finished || false, cancelled: cancelled || false });
      }, defaults23 && (defaults23[key] = props2[key]);
    }
  });
  let state = ctrl._state;
  props2.pause === !state.paused ? (state.paused = props2.pause, flushCalls(props2.pause ? state.pauseQueue : state.resumeQueue)) : state.paused && (props2.pause = true);
  let promises = (keys || Object.keys(ctrl.springs)).map((key) => ctrl.springs[key].start(props2)), cancel = props2.cancel === true || getDefaultProp(props2, "cancel") === true;
  (asyncTo || cancel && state.asyncId) && promises.push(scheduleProps(++ctrl._lastAsyncId, { props: props2, state, actions: { pause: noop, resume: noop, start(props22, resolve) {
    cancel ? (stopAsync(state, ctrl._lastAsyncId), resolve(getCancelledResult(ctrl))) : (props22.onRest = onRest, resolve(runAsync(asyncTo, props22, state, ctrl)));
  } } })), state.paused && await new Promise((resume) => {
    state.resumeQueue.add(resume);
  });
  let result = getCombinedResult(ctrl, await Promise.all(promises));
  if (loop2 && result.finished && !(isLoop && result.noop)) {
    let nextProps = createLoopUpdate(props2, loop2, to2);
    if (nextProps)
      return prepareKeys(ctrl, [nextProps]), flushUpdate(ctrl, nextProps, true);
  }
  return onResolve && raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item)), result;
}
function getSprings(ctrl, props2) {
  let springs = _extends3({}, ctrl.springs);
  return props2 && each(toArray(props2), (props22) => {
    is.und(props22.keys) && (props22 = createUpdate(props22)), is.obj(props22.to) || (props22 = _extends3({}, props22, { to: void 0 })), prepareSprings(springs, props22, (key) => createSpring(key));
  }), setSprings(ctrl, springs), springs;
}
function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    ctrl.springs[key] || (ctrl.springs[key] = spring, addFluidObserver(spring, ctrl));
  });
}
function createSpring(key, observer) {
  let spring = new SpringValue();
  return spring.key = key, observer && addFluidObserver(spring, observer), spring;
}
function prepareSprings(springs, props2, create) {
  props2.keys && each(props2.keys, (key) => {
    (springs[key] || (springs[key] = create(key)))._prepareNode(props2);
  });
}
function prepareKeys(ctrl, queue) {
  each(queue, (props2) => {
    prepareSprings(ctrl.springs, props2, (key) => createSpring(key, ctrl));
  });
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++)
    key = sourceKeys[i2], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
function makeContext(target, init) {
  return Object.assign(target, React3.createContext(init)), target.Provider._context = target, target.Consumer._context = target, target;
}
function useSprings(length, props2, deps) {
  let propsFn = is.fun(props2) && props2;
  propsFn && !deps && (deps = []);
  let ref = (0, import_react2.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []), layoutId = (0, import_react2.useRef)(0), forceUpdate = useForceUpdate(), state = (0, import_react2.useMemo)(() => ({ ctrls: [], queue: [], flush(ctrl, updates2) {
    let springs2 = getSprings(ctrl, updates2);
    return layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key) => !ctrl.springs[key]) ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve) => {
      setSprings(ctrl, springs2), state.queue.push(() => {
        resolve(flushUpdateQueue(ctrl, updates2));
      }), forceUpdate();
    });
  } }), []), ctrls = (0, import_react2.useRef)([...state.ctrls]), updates = [], prevLength = usePrev(length) || 0;
  (0, import_react2.useMemo)(() => {
    each(ctrls.current.slice(length, prevLength), (ctrl) => {
      detachRefs(ctrl, ref), ctrl.stop(true);
    }), ctrls.current.length = length, declareUpdates(prevLength, length);
  }, [length]), (0, import_react2.useMemo)(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);
  function declareUpdates(startIndex, endIndex) {
    for (let i2 = startIndex; i2 < endIndex; i2++) {
      let ctrl = ctrls.current[i2] || (ctrls.current[i2] = new Controller(null, state.flush)), update3 = propsFn ? propsFn(i2, ctrl) : props2[i2];
      update3 && (updates[i2] = declareUpdate(update3));
    }
  }
  let springs = ctrls.current.map((ctrl, i2) => getSprings(ctrl, updates[i2])), context = (0, import_react2.useContext)(SpringContext), prevContext = usePrev(context), hasContext = context !== prevContext && hasProps(context);
  useLayoutEffect2(() => {
    layoutId.current++, state.ctrls = ctrls.current;
    let { queue } = state;
    queue.length && (state.queue = [], each(queue, (cb) => cb())), each(ctrls.current, (ctrl, i2) => {
      ref == null ? void 0 : ref.add(ctrl), hasContext && ctrl.start({ default: context });
      let update3 = updates[i2];
      update3 && (replaceRef(ctrl, update3.ref), ctrl.ref ? ctrl.queue.push(update3) : ctrl.start(update3));
    });
  }), useOnce(() => () => {
    each(state.ctrls, (ctrl) => ctrl.stop(true));
  });
  let values = springs.map((x2) => _extends3({}, x2));
  return ref ? [values, ref] : values;
}
function useSpring(props2, deps) {
  let isFn = is.fun(props2), [[values], ref] = useSprings(1, isFn ? props2 : [props2], isFn ? deps || [] : deps);
  return isFn || arguments.length == 2 ? [values, ref] : values;
}
function useTransition(data, props2, deps) {
  let propsFn = is.fun(props2) && props2, { reset, sort: sort2, trail = 0, expires = true, exitBeforeEnter = false, onDestroyed, ref: propsRef, config: propsConfig } = propsFn ? propsFn() : props2, ref = (0, import_react2.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []), items = toArray(data), transitions = [], usedTransitions = (0, import_react2.useRef)(null), prevTransitions = reset ? null : usedTransitions.current;
  useLayoutEffect2(() => {
    usedTransitions.current = transitions;
  }), useOnce(() => (each(usedTransitions.current, (t2) => {
    var _t$ctrl$ref;
    (_t$ctrl$ref = t2.ctrl.ref) == null || _t$ctrl$ref.add(t2.ctrl);
    let change = changes.get(t2);
    change && t2.ctrl.start(change.payload);
  }), () => {
    each(usedTransitions.current, (t2) => {
      t2.expired && clearTimeout(t2.expirationId), detachRefs(t2.ctrl, ref), t2.ctrl.stop(true);
    });
  }));
  let keys = getKeys(items, propsFn ? propsFn() : props2, prevTransitions), expired = reset && usedTransitions.current || [];
  useLayoutEffect2(() => each(expired, ({ ctrl, item, key }) => {
    detachRefs(ctrl, ref), callProp(onDestroyed, item, key);
  }));
  let reused = [];
  if (prevTransitions && each(prevTransitions, (t2, i2) => {
    t2.expired ? (clearTimeout(t2.expirationId), expired.push(t2)) : (i2 = reused[i2] = keys.indexOf(t2.key), ~i2 && (transitions[i2] = t2));
  }), each(items, (item, i2) => {
    transitions[i2] || (transitions[i2] = { key: keys[i2], item, phase: TransitionPhase.MOUNT, ctrl: new Controller() }, transitions[i2].ctrl.item = item);
  }), reused.length) {
    let i2 = -1, { leave } = propsFn ? propsFn() : props2;
    each(reused, (keyIndex, prevIndex) => {
      let t2 = prevTransitions[prevIndex];
      ~keyIndex ? (i2 = transitions.indexOf(t2), transitions[i2] = _extends3({}, t2, { item: items[keyIndex] })) : leave && transitions.splice(++i2, 0, t2);
    });
  }
  is.fun(sort2) && transitions.sort((a2, b2) => sort2(a2.item, b2.item));
  let delay = -trail, forceUpdate = useForceUpdate(), defaultProps = getDefaultProps(props2), changes = /* @__PURE__ */ new Map(), exitingTransitions = (0, import_react2.useRef)(/* @__PURE__ */ new Map()), forceChange = (0, import_react2.useRef)(false);
  each(transitions, (t2, i2) => {
    let key = t2.key, prevPhase = t2.phase, p2 = propsFn ? propsFn() : props2, to2, phase, propsDelay = callProp(p2.delay || 0, key);
    if (prevPhase == TransitionPhase.MOUNT)
      to2 = p2.enter, phase = TransitionPhase.ENTER;
    else {
      let isLeave = keys.indexOf(key) < 0;
      if (prevPhase != TransitionPhase.LEAVE)
        if (isLeave)
          to2 = p2.leave, phase = TransitionPhase.LEAVE;
        else if (to2 = p2.update)
          phase = TransitionPhase.UPDATE;
        else
          return;
      else if (!isLeave)
        to2 = p2.enter, phase = TransitionPhase.ENTER;
      else
        return;
    }
    if (to2 = callProp(to2, t2.item, i2), to2 = is.obj(to2) ? inferTo(to2) : { to: to2 }, !to2.config) {
      let config23 = propsConfig || defaultProps.config;
      to2.config = callProp(config23, t2.item, i2, phase);
    }
    delay += trail;
    let payload = _extends3({}, defaultProps, { delay: propsDelay + delay, ref: propsRef, immediate: p2.immediate, reset: false }, to2);
    if (phase == TransitionPhase.ENTER && is.und(payload.from)) {
      let _p = propsFn ? propsFn() : props2, from = is.und(_p.initial) || prevTransitions ? _p.from : _p.initial;
      payload.from = callProp(from, t2.item, i2);
    }
    let { onResolve } = payload;
    payload.onResolve = (result) => {
      callProp(onResolve, result);
      let transitions2 = usedTransitions.current, t22 = transitions2.find((t3) => t3.key === key);
      if (!!t22 && !(result.cancelled && t22.phase != TransitionPhase.UPDATE) && t22.ctrl.idle) {
        let idle = transitions2.every((t3) => t3.ctrl.idle);
        if (t22.phase == TransitionPhase.LEAVE) {
          let expiry = callProp(expires, t22.item);
          if (expiry !== false) {
            let expiryMs = expiry === true ? 0 : expiry;
            if (t22.expired = true, !idle && expiryMs > 0) {
              expiryMs <= 2147483647 && (t22.expirationId = setTimeout(forceUpdate, expiryMs));
              return;
            }
          }
        }
        idle && transitions2.some((t3) => t3.expired) && (exitingTransitions.current.delete(t22), exitBeforeEnter && (forceChange.current = true), forceUpdate());
      }
    };
    let springs = getSprings(t2.ctrl, payload);
    phase === TransitionPhase.LEAVE && exitBeforeEnter ? exitingTransitions.current.set(t2, { phase, springs, payload }) : changes.set(t2, { phase, springs, payload });
  });
  let context = (0, import_react2.useContext)(SpringContext), prevContext = usePrev(context), hasContext = context !== prevContext && hasProps(context);
  useLayoutEffect2(() => {
    hasContext && each(transitions, (t2) => {
      t2.ctrl.start({ default: context });
    });
  }, [context]), each(changes, (_2, t2) => {
    if (exitingTransitions.current.size) {
      let ind = transitions.findIndex((state) => state.key === t2.key);
      transitions.splice(ind, 1);
    }
  }), useLayoutEffect2(() => {
    each(exitingTransitions.current.size ? exitingTransitions.current : changes, ({ phase, payload }, t2) => {
      let { ctrl } = t2;
      t2.phase = phase, ref == null ? void 0 : ref.add(ctrl), hasContext && phase == TransitionPhase.ENTER && ctrl.start({ default: context }), payload && (replaceRef(ctrl, payload.ref), ctrl.ref && !forceChange.current ? ctrl.update(payload) : (ctrl.start(payload), forceChange.current && (forceChange.current = false)));
    });
  }, reset ? void 0 : deps);
  let renderTransitions = (render) => React3.createElement(React3.Fragment, null, transitions.map((t2, i2) => {
    let { springs } = changes.get(t2) || t2.ctrl, elem = render(_extends3({}, springs), t2.item, t2, i2);
    return elem && elem.type ? React3.createElement(elem.type, _extends3({}, elem.props, { key: is.str(t2.key) || is.num(t2.key) ? t2.key : t2.ctrl.id, ref: elem.ref })) : elem;
  }));
  return ref ? [renderTransitions, ref] : renderTransitions;
}
function getKeys(items, { key, keys = key }, prevTransitions) {
  if (keys === null) {
    let reused = /* @__PURE__ */ new Set();
    return items.map((item) => {
      let t2 = prevTransitions && prevTransitions.find((t22) => t22.item === item && t22.phase !== TransitionPhase.LEAVE && !reused.has(t22));
      return t2 ? (reused.add(t2), t2.key) : nextKey++;
    });
  }
  return is.und(keys) ? items : is.fun(keys) ? items.map(keys) : toArray(keys);
}
function isIdle(source) {
  return source.idle !== false;
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self2) {
  self2.idle || (self2.idle = true, each(getPayload(self2), (node) => {
    node.done = true;
  }), callFluidObservers(self2, { type: "idle", parent: self2 }));
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++)
    key = sourceKeys[i2], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
function dangerousStyleValue(name, value) {
  return value == null || typeof value == "boolean" || value === "" ? "" : typeof value == "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) ? value + "px" : ("" + value).trim();
}
function applyAnimatedValues(instance, props2) {
  if (!instance.nodeType || !instance.setAttribute)
    return false;
  let isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter", _ref = props2, { style, children, scrollTop, scrollLeft } = _ref, attributes = _objectWithoutPropertiesLoose2(_ref, _excluded$2), values = Object.values(attributes), names = Object.keys(attributes).map((name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, (n2) => "-" + n2.toLowerCase())));
  children !== void 0 && (instance.textContent = children);
  for (let name in style)
    if (style.hasOwnProperty(name)) {
      let value = dangerousStyleValue(name, style[name]);
      isCustomPropRE.test(name) ? instance.style.setProperty(name, value) : instance.style[name] = value;
    }
  names.forEach((name, i2) => {
    instance.setAttribute(name, values[i2]);
  }), scrollTop !== void 0 && (instance.scrollTop = scrollTop), scrollLeft !== void 0 && (instance.scrollLeft = scrollLeft);
}
function useReducedMotion() {
  let [prefersReducedMotion, setPrefersReducedMotion] = React4.useState(getMediaQueryList().matches);
  return React4.useEffect(() => {
    let mediaQueryList = getMediaQueryList(), handleChange = () => {
      setPrefersReducedMotion(mediaQueryList.matches);
    };
    return mediaQueryList.addListener(handleChange), () => {
      mediaQueryList.removeListener(handleChange);
    };
  }, []), prefersReducedMotion;
}
var React, import_react, React3, import_react2, React2, import_react3, import_react_dom, React4, updateQueue, raf, writeQueue, onStartQueue, onFrameQueue, onFinishQueue, timeouts, findTimeout, nativeRaf, ts, pendingCount, sync, defineHidden, is, each, toArray, flushCalls, isSSR, createStringInterpolator$1, to, colors$1, skipAnimation, willAdvance, assign, globals, startQueue, currentFrame, prevFrame, priority, frameLoop, colors, NUMBER, PERCENTAGE, rgb, rgba, hsl, hsla, hex3, hex4, hex6, hex8, createInterpolator, $get, $observers, hasFluidValue, getFluidValue, getFluidObservers, FluidValue, setFluidGetter, setHidden, numberRegex, colorRegex, unitRegex, rgbaRegex, cssVariableRegex, variableToRgba, parseCSSVariable, namedColorRegex, rgbaRound, createStringInterpolator, prefix, once, warnInterpolate, warnDirectCall, useLayoutEffect2, useIsMounted, useOnce, emptyDeps, $node, isAnimated, getAnimated, setAnimated, getPayload, Animated, AnimatedValue, AnimatedString, TreeContext, AnimatedObject, AnimatedArray, withAnimated, PropsObserver, cacheKey, createHost, getDisplayName, matchProp, resolveProp, getDefaultProp, noopTransform, getDefaultProps, DEFAULT_PROPS, RESERVED_PROPS, config, c1, c2, c3, c4, c5, bounceOut, easings, defaults, AnimationConfig, emptyArray, Animation, getCombinedResult, getNoopResult, getFinishedResult, getCancelledResult, BailSignal, SkipAniamtionSignal, isFrameValue, nextId$1, FrameValue, $P, HAS_ANIMATED, IS_ANIMATING, IS_PAUSED, hasAnimated, isAnimating, isPaused, setActiveBit, setPausedBit, SpringValue, ACTIVE_EVENTS, BATCHED_EVENTS, nextId, Controller, _excluded$3, SpringContext, ctx, SpringRef, TransitionPhase, nextKey, Interpolation, update2, _excluded$2, isCustomPropRE, attributeCache, isUnitlessNumber, prefixKey, prefixes, _excluded$1, domTransforms, pxTransforms, degTransforms, addUnit, isValueIdentity, AnimatedStyle, FluidTransform, primitives, _excluded, host, animated, REDUCED_MOTION_QUERY, isRenderingOnServer, getMediaQueryList;
var init_index_es = __esm({
  "node_modules/@twilio-paste/animation-library/dist/index.es.js"() {
    React = __toESM(require_react());
    import_react = __toESM(require_react());
    React3 = __toESM(require_react());
    import_react2 = __toESM(require_react());
    React2 = __toESM(require_react());
    import_react3 = __toESM(require_react());
    import_react_dom = __toESM(require_react_dom());
    React4 = __toESM(require_react());
    updateQueue = makeQueue();
    raf = (fn) => schedule(fn, updateQueue);
    writeQueue = makeQueue();
    raf.write = (fn) => schedule(fn, writeQueue);
    onStartQueue = makeQueue();
    raf.onStart = (fn) => schedule(fn, onStartQueue);
    onFrameQueue = makeQueue();
    raf.onFrame = (fn) => schedule(fn, onFrameQueue);
    onFinishQueue = makeQueue();
    raf.onFinish = (fn) => schedule(fn, onFinishQueue);
    timeouts = [];
    raf.setTimeout = (handler, ms) => {
      let time = raf.now() + ms, cancel = () => {
        let i2 = timeouts.findIndex((t2) => t2.cancel == cancel);
        ~i2 && timeouts.splice(i2, 1), pendingCount -= ~i2 ? 1 : 0;
      }, timeout = { time, handler, cancel };
      return timeouts.splice(findTimeout(time), 0, timeout), pendingCount += 1, start(), timeout;
    };
    findTimeout = (time) => ~(~timeouts.findIndex((t2) => t2.time > time) || ~timeouts.length);
    raf.cancel = (fn) => {
      onStartQueue.delete(fn), onFrameQueue.delete(fn), updateQueue.delete(fn), writeQueue.delete(fn), onFinishQueue.delete(fn);
    };
    raf.sync = (fn) => {
      sync = true, raf.batchedUpdates(fn), sync = false;
    };
    raf.throttle = (fn) => {
      let lastArgs;
      function queuedFn() {
        try {
          fn(...lastArgs);
        } finally {
          lastArgs = null;
        }
      }
      function throttled(...args) {
        lastArgs = args, raf.onStart(queuedFn);
      }
      return throttled.handler = fn, throttled.cancel = () => {
        onStartQueue.delete(queuedFn), lastArgs = null;
      }, throttled;
    };
    nativeRaf = typeof window < "u" ? window.requestAnimationFrame : () => {
    };
    raf.use = (impl) => nativeRaf = impl;
    raf.now = typeof performance < "u" ? () => performance.now() : Date.now;
    raf.batchedUpdates = (fn) => fn();
    raf.catch = console.error;
    raf.frameLoop = "always";
    raf.advance = () => {
      raf.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : update();
    };
    ts = -1;
    pendingCount = 0;
    sync = false;
    defineHidden = (obj, key, value) => Object.defineProperty(obj, key, { value, writable: true, configurable: true });
    is = { arr: Array.isArray, obj: (a2) => !!a2 && a2.constructor.name === "Object", fun: (a2) => typeof a2 == "function", str: (a2) => typeof a2 == "string", num: (a2) => typeof a2 == "number", und: (a2) => a2 === void 0 };
    each = (obj, fn) => obj.forEach(fn);
    toArray = (a2) => is.und(a2) ? [] : is.arr(a2) ? a2 : [a2];
    flushCalls = (queue, ...args) => flush(queue, (fn) => fn(...args));
    isSSR = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
    colors$1 = null;
    skipAnimation = false;
    willAdvance = noop;
    assign = (globals2) => {
      globals2.to && (to = globals2.to), globals2.now && (raf.now = globals2.now), globals2.colors !== void 0 && (colors$1 = globals2.colors), globals2.skipAnimation != null && (skipAnimation = globals2.skipAnimation), globals2.createStringInterpolator && (createStringInterpolator$1 = globals2.createStringInterpolator), globals2.requestAnimationFrame && raf.use(globals2.requestAnimationFrame), globals2.batchedUpdates && (raf.batchedUpdates = globals2.batchedUpdates), globals2.willAdvance && (willAdvance = globals2.willAdvance), globals2.frameLoop && (raf.frameLoop = globals2.frameLoop);
    };
    globals = Object.freeze({ __proto__: null, get createStringInterpolator() {
      return createStringInterpolator$1;
    }, get to() {
      return to;
    }, get colors() {
      return colors$1;
    }, get skipAnimation() {
      return skipAnimation;
    }, get willAdvance() {
      return willAdvance;
    }, assign });
    startQueue = /* @__PURE__ */ new Set();
    currentFrame = [];
    prevFrame = [];
    priority = 0;
    frameLoop = { get idle() {
      return !startQueue.size && !currentFrame.length;
    }, start(animation) {
      priority > animation.priority ? (startQueue.add(animation), raf.onStart(flushStartQueue)) : (startSafely(animation), raf(advance));
    }, advance, sort(animation) {
      if (priority)
        raf.onFrame(() => frameLoop.sort(animation));
      else {
        let prevIndex = currentFrame.indexOf(animation);
        ~prevIndex && (currentFrame.splice(prevIndex, 1), startUnsafely(animation));
      }
    }, clear() {
      currentFrame = [], startQueue.clear();
    } };
    colors = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 };
    NUMBER = "[-+]?\\d*\\.?\\d+";
    PERCENTAGE = NUMBER + "%";
    rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
    rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
    hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
    hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
    hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    hex6 = /^#([0-9a-fA-F]{6})$/;
    hex8 = /^#([0-9a-fA-F]{8})$/;
    createInterpolator = (range, output, extrapolate) => {
      if (is.fun(range))
        return range;
      if (is.arr(range))
        return createInterpolator({ range, output, extrapolate });
      if (is.str(range.output[0]))
        return createStringInterpolator$1(range);
      let config23 = range, outputRange = config23.output, inputRange = config23.range || [0, 1], extrapolateLeft = config23.extrapolateLeft || config23.extrapolate || "extend", extrapolateRight = config23.extrapolateRight || config23.extrapolate || "extend", easing = config23.easing || ((t2) => t2);
      return (input) => {
        let range2 = findRange(input, inputRange);
        return interpolate(input, inputRange[range2], inputRange[range2 + 1], outputRange[range2], outputRange[range2 + 1], easing, extrapolateLeft, extrapolateRight, config23.map);
      };
    };
    $get = Symbol.for("FluidValue.get");
    $observers = Symbol.for("FluidValue.observers");
    hasFluidValue = (arg) => Boolean(arg && arg[$get]);
    getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
    getFluidObservers = (target) => target[$observers] || null;
    FluidValue = class {
      constructor(get3) {
        if (this[$get] = void 0, this[$observers] = void 0, !get3 && !(get3 = this.get))
          throw Error("Unknown getter");
        setFluidGetter(this, get3);
      }
    };
    setFluidGetter = (target, get3) => setHidden(target, $get, get3);
    setHidden = (target, key, value) => Object.defineProperty(target, key, { value, writable: true, configurable: true });
    numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
    unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
    rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
    cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
    variableToRgba = (input) => {
      let [token, fallback] = parseCSSVariable(input);
      if (!token || isSSR())
        return input;
      let value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
      if (value)
        return value.trim();
      if (fallback && fallback.startsWith("--")) {
        let _value = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
        return _value || input;
      } else {
        if (fallback && cssVariableRegex.test(fallback))
          return variableToRgba(fallback);
        if (fallback)
          return fallback;
      }
      return input;
    };
    parseCSSVariable = (current) => {
      let match = cssVariableRegex.exec(current);
      if (!match)
        return [,];
      let [, token, fallback] = match;
      return [token, fallback];
    };
    rgbaRound = (_2, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
    createStringInterpolator = (config23) => {
      namedColorRegex || (namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join("|")})(?!\\w)`, "g") : /^\b$/);
      let output = config23.output.map((value) => getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba)), keyframes = output.map((value) => value.match(numberRegex).map(Number)), interpolators = keyframes[0].map((_2, i2) => keyframes.map((values) => {
        if (!(i2 in values))
          throw Error('The arity of each "output" value must be equal');
        return values[i2];
      })).map((output2) => createInterpolator(_extends({}, config23, { output: output2 })));
      return (input) => {
        var _output$find;
        let missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find((value) => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, "")), i2 = 0;
        return output[0].replace(numberRegex, () => `${interpolators[i2++](input)}${missingUnit || ""}`).replace(rgbaRegex, rgbaRound);
      };
    };
    prefix = "react-spring: ";
    once = (fn) => {
      let func = fn, called = false;
      if (typeof func != "function")
        throw new TypeError(`${prefix}once requires a function parameter`);
      return (...args) => {
        called || (func(...args), called = true);
      };
    };
    warnInterpolate = once(console.warn);
    warnDirectCall = once(console.warn);
    useLayoutEffect2 = typeof window < "u" && window.document && window.document.createElement ? React.useLayoutEffect : React.useEffect;
    useIsMounted = () => {
      let isMounted = (0, import_react.useRef)(false);
      return useLayoutEffect2(() => (isMounted.current = true, () => {
        isMounted.current = false;
      }), []), isMounted;
    };
    useOnce = (effect) => (0, import_react.useEffect)(effect, emptyDeps);
    emptyDeps = [];
    $node = Symbol.for("Animated:node");
    isAnimated = (value) => !!value && value[$node] === value;
    getAnimated = (owner) => owner && owner[$node];
    setAnimated = (owner, node) => defineHidden(owner, $node, node);
    getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
    Animated = class {
      constructor() {
        this.payload = void 0, setAnimated(this, this);
      }
      getPayload() {
        return this.payload || [];
      }
    };
    AnimatedValue = class extends Animated {
      constructor(_value) {
        super(), this.done = true, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = _value, is.num(this._value) && (this.lastPosition = this._value);
      }
      static create(value) {
        return new AnimatedValue(value);
      }
      getPayload() {
        return [this];
      }
      getValue() {
        return this._value;
      }
      setValue(value, step) {
        return is.num(value) && (this.lastPosition = value, step && (value = Math.round(value / step) * step, this.done && (this.lastPosition = value))), this._value === value ? false : (this._value = value, true);
      }
      reset() {
        let { done } = this;
        this.done = false, is.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, done && (this.lastVelocity = null), this.v0 = null);
      }
    };
    AnimatedString = class extends AnimatedValue {
      constructor(value) {
        super(0), this._string = null, this._toString = void 0, this._toString = createInterpolator({ output: [value, value] });
      }
      static create(value) {
        return new AnimatedString(value);
      }
      getValue() {
        let value = this._string;
        return value ?? (this._string = this._toString(this._value));
      }
      setValue(value) {
        if (is.str(value)) {
          if (value == this._string)
            return false;
          this._string = value, this._value = 1;
        } else if (super.setValue(value))
          this._string = null;
        else
          return false;
        return true;
      }
      reset(goal) {
        goal && (this._toString = createInterpolator({ output: [this.getValue(), goal] })), this._value = 0, super.reset();
      }
    };
    TreeContext = { dependencies: null };
    AnimatedObject = class extends Animated {
      constructor(source) {
        super(), this.source = source, this.setValue(source);
      }
      getValue(animated2) {
        let values = {};
        return eachProp(this.source, (source, key) => {
          isAnimated(source) ? values[key] = source.getValue(animated2) : hasFluidValue(source) ? values[key] = getFluidValue(source) : animated2 || (values[key] = source);
        }), values;
      }
      setValue(source) {
        this.source = source, this.payload = this._makePayload(source);
      }
      reset() {
        this.payload && each(this.payload, (node) => node.reset());
      }
      _makePayload(source) {
        if (source) {
          let payload = /* @__PURE__ */ new Set();
          return eachProp(source, this._addToPayload, payload), Array.from(payload);
        }
      }
      _addToPayload(source) {
        TreeContext.dependencies && hasFluidValue(source) && TreeContext.dependencies.add(source);
        let payload = getPayload(source);
        payload && each(payload, (node) => this.add(node));
      }
    };
    AnimatedArray = class extends AnimatedObject {
      constructor(source) {
        super(source);
      }
      static create(source) {
        return new AnimatedArray(source);
      }
      getValue() {
        return this.source.map((node) => node.getValue());
      }
      setValue(source) {
        let payload = this.getPayload();
        return source.length == payload.length ? payload.map((node, i2) => node.setValue(source[i2])).some(Boolean) : (super.setValue(source.map(makeAnimated)), true);
      }
    };
    withAnimated = (Component, host2) => {
      let hasInstance = !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
      return (0, import_react3.forwardRef)((givenProps, givenRef) => {
        let instanceRef = (0, import_react3.useRef)(null), ref = hasInstance && (0, import_react3.useCallback)((value) => {
          instanceRef.current = updateRef(givenRef, value);
        }, [givenRef]), [props2, deps] = getAnimatedState(givenProps, host2), forceUpdate = useForceUpdate(), callback = () => {
          let instance = instanceRef.current;
          if (hasInstance && !instance)
            return;
          (instance ? host2.applyAnimatedValues(instance, props2.getValue(true)) : false) === false && forceUpdate();
        }, observer = new PropsObserver(callback, deps), observerRef = (0, import_react3.useRef)();
        useLayoutEffect2(() => (observerRef.current = observer, each(deps, (dep) => addFluidObserver(dep, observer)), () => {
          observerRef.current && (each(observerRef.current.deps, (dep) => removeFluidObserver(dep, observerRef.current)), raf.cancel(observerRef.current.update));
        })), (0, import_react3.useEffect)(callback, []), useOnce(() => () => {
          let observer2 = observerRef.current;
          each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
        });
        let usedProps = host2.getComponentProps(props2.getValue());
        return React2.createElement(Component, _extends2({}, usedProps, { ref }));
      });
    };
    PropsObserver = class {
      constructor(update3, deps) {
        this.update = update3, this.deps = deps;
      }
      eventObserved(event) {
        event.type == "change" && raf.write(this.update);
      }
    };
    cacheKey = Symbol.for("AnimatedComponent");
    createHost = (components, { applyAnimatedValues: _applyAnimatedValues = () => false, createAnimatedStyle: _createAnimatedStyle = (style) => new AnimatedObject(style), getComponentProps: _getComponentProps = (props2) => props2 } = {}) => {
      let hostConfig = { applyAnimatedValues: _applyAnimatedValues, createAnimatedStyle: _createAnimatedStyle, getComponentProps: _getComponentProps }, animated2 = (Component) => {
        let displayName = getDisplayName(Component) || "Anonymous";
        return is.str(Component) ? Component = animated2[Component] || (animated2[Component] = withAnimated(Component, hostConfig)) : Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig)), Component.displayName = `Animated(${displayName})`, Component;
      };
      return eachProp(components, (Component, key) => {
        is.arr(components) && (key = getDisplayName(Component)), animated2[key] = animated2(Component);
      }), { animated: animated2 };
    };
    getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;
    matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));
    resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;
    getDefaultProp = (props2, key) => props2.default === true ? props2[key] : props2.default ? props2.default[key] : void 0;
    noopTransform = (value) => value;
    getDefaultProps = (props2, transform = noopTransform) => {
      let keys = DEFAULT_PROPS;
      props2.default && props2.default !== true && (props2 = props2.default, keys = Object.keys(props2));
      let defaults23 = {};
      for (let key of keys) {
        let value = transform(props2[key], key);
        is.und(value) || (defaults23[key] = value);
      }
      return defaults23;
    };
    DEFAULT_PROPS = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"];
    RESERVED_PROPS = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
    config = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } };
    c1 = 1.70158;
    c2 = c1 * 1.525;
    c3 = c1 + 1;
    c4 = 2 * Math.PI / 3;
    c5 = 2 * Math.PI / 4.5;
    bounceOut = (x2) => x2 < 1 / 2.75 ? 7.5625 * x2 * x2 : x2 < 2 / 2.75 ? 7.5625 * (x2 -= 1.5 / 2.75) * x2 + 0.75 : x2 < 2.5 / 2.75 ? 7.5625 * (x2 -= 2.25 / 2.75) * x2 + 0.9375 : 7.5625 * (x2 -= 2.625 / 2.75) * x2 + 0.984375;
    easings = { linear: (x2) => x2, easeInQuad: (x2) => x2 * x2, easeOutQuad: (x2) => 1 - (1 - x2) * (1 - x2), easeInOutQuad: (x2) => x2 < 0.5 ? 2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 2) / 2, easeInCubic: (x2) => x2 * x2 * x2, easeOutCubic: (x2) => 1 - Math.pow(1 - x2, 3), easeInOutCubic: (x2) => x2 < 0.5 ? 4 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 3) / 2, easeInQuart: (x2) => x2 * x2 * x2 * x2, easeOutQuart: (x2) => 1 - Math.pow(1 - x2, 4), easeInOutQuart: (x2) => x2 < 0.5 ? 8 * x2 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 4) / 2, easeInQuint: (x2) => x2 * x2 * x2 * x2 * x2, easeOutQuint: (x2) => 1 - Math.pow(1 - x2, 5), easeInOutQuint: (x2) => x2 < 0.5 ? 16 * x2 * x2 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 5) / 2, easeInSine: (x2) => 1 - Math.cos(x2 * Math.PI / 2), easeOutSine: (x2) => Math.sin(x2 * Math.PI / 2), easeInOutSine: (x2) => -(Math.cos(Math.PI * x2) - 1) / 2, easeInExpo: (x2) => x2 === 0 ? 0 : Math.pow(2, 10 * x2 - 10), easeOutExpo: (x2) => x2 === 1 ? 1 : 1 - Math.pow(2, -10 * x2), easeInOutExpo: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : x2 < 0.5 ? Math.pow(2, 20 * x2 - 10) / 2 : (2 - Math.pow(2, -20 * x2 + 10)) / 2, easeInCirc: (x2) => 1 - Math.sqrt(1 - Math.pow(x2, 2)), easeOutCirc: (x2) => Math.sqrt(1 - Math.pow(x2 - 1, 2)), easeInOutCirc: (x2) => x2 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x2, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x2 + 2, 2)) + 1) / 2, easeInBack: (x2) => c3 * x2 * x2 * x2 - c1 * x2 * x2, easeOutBack: (x2) => 1 + c3 * Math.pow(x2 - 1, 3) + c1 * Math.pow(x2 - 1, 2), easeInOutBack: (x2) => x2 < 0.5 ? Math.pow(2 * x2, 2) * ((c2 + 1) * 2 * x2 - c2) / 2 : (Math.pow(2 * x2 - 2, 2) * ((c2 + 1) * (x2 * 2 - 2) + c2) + 2) / 2, easeInElastic: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : -Math.pow(2, 10 * x2 - 10) * Math.sin((x2 * 10 - 10.75) * c4), easeOutElastic: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : Math.pow(2, -10 * x2) * Math.sin((x2 * 10 - 0.75) * c4) + 1, easeInOutElastic: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : x2 < 0.5 ? -(Math.pow(2, 20 * x2 - 10) * Math.sin((20 * x2 - 11.125) * c5)) / 2 : Math.pow(2, -20 * x2 + 10) * Math.sin((20 * x2 - 11.125) * c5) / 2 + 1, easeInBounce: (x2) => 1 - bounceOut(1 - x2), easeOutBounce: bounceOut, easeInOutBounce: (x2) => x2 < 0.5 ? (1 - bounceOut(1 - 2 * x2)) / 2 : (1 + bounceOut(2 * x2 - 1)) / 2 };
    defaults = _extends3({}, config.default, { mass: 1, damping: 1, easing: easings.linear, clamp: false });
    AnimationConfig = class {
      constructor() {
        this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, defaults);
      }
    };
    emptyArray = [];
    Animation = class {
      constructor() {
        this.changed = false, this.values = emptyArray, this.toValues = null, this.fromValues = emptyArray, this.to = void 0, this.from = void 0, this.config = new AnimationConfig(), this.immediate = false;
      }
    };
    getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target.get()) : results.every((result) => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every((result) => result.finished));
    getNoopResult = (value) => ({ value, noop: true, finished: true, cancelled: false });
    getFinishedResult = (value, finished, cancelled = false) => ({ value, finished, cancelled });
    getCancelledResult = (value) => ({ value, cancelled: true, finished: false });
    BailSignal = class extends Error {
      constructor() {
        super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
      }
    };
    SkipAniamtionSignal = class extends Error {
      constructor() {
        super("SkipAnimationSignal"), this.result = void 0;
      }
    };
    isFrameValue = (value) => value instanceof FrameValue;
    nextId$1 = 1;
    FrameValue = class extends FluidValue {
      constructor(...args) {
        super(...args), this.id = nextId$1++, this.key = void 0, this._priority = 0;
      }
      get priority() {
        return this._priority;
      }
      set priority(priority2) {
        this._priority != priority2 && (this._priority = priority2, this._onPriorityChange(priority2));
      }
      get() {
        let node = getAnimated(this);
        return node && node.getValue();
      }
      to(...args) {
        return globals.to(this, args);
      }
      interpolate(...args) {
        return deprecateInterpolate(), globals.to(this, args);
      }
      toJSON() {
        return this.get();
      }
      observerAdded(count) {
        count == 1 && this._attach();
      }
      observerRemoved(count) {
        count == 0 && this._detach();
      }
      _attach() {
      }
      _detach() {
      }
      _onChange(value, idle = false) {
        callFluidObservers(this, { type: "change", parent: this, value, idle });
      }
      _onPriorityChange(priority2) {
        this.idle || frameLoop.sort(this), callFluidObservers(this, { type: "priority", parent: this, priority: priority2 });
      }
    };
    $P = Symbol.for("SpringPhase");
    HAS_ANIMATED = 1;
    IS_ANIMATING = 2;
    IS_PAUSED = 4;
    hasAnimated = (target) => (target[$P] & HAS_ANIMATED) > 0;
    isAnimating = (target) => (target[$P] & IS_ANIMATING) > 0;
    isPaused = (target) => (target[$P] & IS_PAUSED) > 0;
    setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
    setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
    SpringValue = class extends FrameValue {
      constructor(arg1, arg2) {
        if (super(), this.key = void 0, this.animation = new Animation(), this.queue = void 0, this.defaultProps = {}, this._state = { paused: false, delayed: false, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !is.und(arg1) || !is.und(arg2)) {
          let props2 = is.obj(arg1) ? _extends3({}, arg1) : _extends3({}, arg2, { from: arg1 });
          is.und(props2.default) && (props2.default = true), this.start(props2);
        }
      }
      get idle() {
        return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
      }
      get goal() {
        return getFluidValue(this.animation.to);
      }
      get velocity() {
        let node = getAnimated(this);
        return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node2) => node2.lastVelocity || 0);
      }
      get hasAnimated() {
        return hasAnimated(this);
      }
      get isAnimating() {
        return isAnimating(this);
      }
      get isPaused() {
        return isPaused(this);
      }
      get isDelayed() {
        return this._state.delayed;
      }
      advance(dt) {
        let idle = true, changed = false, anim = this.animation, { config: config23, toValues } = anim, payload = getPayload(anim.to);
        !payload && hasFluidValue(anim.to) && (toValues = toArray(getFluidValue(anim.to))), anim.values.forEach((node2, i2) => {
          if (node2.done)
            return;
          let to2 = node2.constructor == AnimatedString ? 1 : payload ? payload[i2].lastPosition : toValues[i2], finished = anim.immediate, position2 = to2;
          if (!finished) {
            if (position2 = node2.lastPosition, config23.tension <= 0) {
              node2.done = true;
              return;
            }
            let elapsed = node2.elapsedTime += dt, from = anim.fromValues[i2], v0 = node2.v0 != null ? node2.v0 : node2.v0 = is.arr(config23.velocity) ? config23.velocity[i2] : config23.velocity, velocity;
            if (is.und(config23.duration))
              if (config23.decay) {
                let decay = config23.decay === true ? 0.998 : config23.decay, e2 = Math.exp(-(1 - decay) * elapsed);
                position2 = from + v0 / (1 - decay) * (1 - e2), finished = Math.abs(node2.lastPosition - position2) < 0.1, velocity = v0 * e2;
              } else {
                velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
                let precision = config23.precision || (from == to2 ? 5e-3 : Math.min(1, Math.abs(to2 - from) * 1e-3)), restVelocity = config23.restVelocity || precision / 10, bounceFactor = config23.clamp ? 0 : config23.bounce, canBounce = !is.und(bounceFactor), isGrowing = from == to2 ? node2.v0 > 0 : from < to2, isMoving, isBouncing = false, step = 1, numSteps = Math.ceil(dt / step);
                for (let n2 = 0; n2 < numSteps && (isMoving = Math.abs(velocity) > restVelocity, !(!isMoving && (finished = Math.abs(to2 - position2) <= precision, finished))); ++n2) {
                  canBounce && (isBouncing = position2 == to2 || position2 > to2 == isGrowing, isBouncing && (velocity = -velocity * bounceFactor, position2 = to2));
                  let springForce = -config23.tension * 1e-6 * (position2 - to2), dampingForce = -config23.friction * 1e-3 * velocity, acceleration = (springForce + dampingForce) / config23.mass;
                  velocity = velocity + acceleration * step, position2 = position2 + velocity * step;
                }
              }
            else {
              let p2 = 1;
              config23.duration > 0 && (this._memoizedDuration !== config23.duration && (this._memoizedDuration = config23.duration, node2.durationProgress > 0 && (node2.elapsedTime = config23.duration * node2.durationProgress, elapsed = node2.elapsedTime += dt)), p2 = (config23.progress || 0) + elapsed / this._memoizedDuration, p2 = p2 > 1 ? 1 : p2 < 0 ? 0 : p2, node2.durationProgress = p2), position2 = from + config23.easing(p2) * (to2 - from), velocity = (position2 - node2.lastPosition) / dt, finished = p2 == 1;
            }
            node2.lastVelocity = velocity, Number.isNaN(position2) && (console.warn("Got NaN while animating:", this), finished = true);
          }
          payload && !payload[i2].done && (finished = false), finished ? node2.done = true : idle = false, node2.setValue(position2, config23.round) && (changed = true);
        });
        let node = getAnimated(this), currVal = node.getValue();
        if (idle) {
          let finalVal = getFluidValue(anim.to);
          (currVal !== finalVal || changed) && !config23.decay ? (node.setValue(finalVal), this._onChange(finalVal)) : changed && config23.decay && this._onChange(currVal), this._stop();
        } else
          changed && this._onChange(currVal);
      }
      set(value) {
        return raf.batchedUpdates(() => {
          this._stop(), this._focus(value), this._set(value);
        }), this;
      }
      pause() {
        this._update({ pause: true });
      }
      resume() {
        this._update({ pause: false });
      }
      finish() {
        if (isAnimating(this)) {
          let { to: to2, config: config23 } = this.animation;
          raf.batchedUpdates(() => {
            this._onStart(), config23.decay || this._set(to2, false), this._stop();
          });
        }
        return this;
      }
      update(props2) {
        return (this.queue || (this.queue = [])).push(props2), this;
      }
      start(to2, arg2) {
        let queue;
        return is.und(to2) ? (queue = this.queue || [], this.queue = []) : queue = [is.obj(to2) ? to2 : _extends3({}, arg2, { to: to2 })], Promise.all(queue.map((props2) => this._update(props2))).then((results) => getCombinedResult(this, results));
      }
      stop(cancel) {
        let { to: to2 } = this.animation;
        return this._focus(this.get()), stopAsync(this._state, cancel && this._lastCallId), raf.batchedUpdates(() => this._stop(to2, cancel)), this;
      }
      reset() {
        this._update({ reset: true });
      }
      eventObserved(event) {
        event.type == "change" ? this._start() : event.type == "priority" && (this.priority = event.priority + 1);
      }
      _prepareNode(props2) {
        let key = this.key || "", { to: to2, from } = props2;
        to2 = is.obj(to2) ? to2[key] : to2, (to2 == null || isAsyncTo(to2)) && (to2 = void 0), from = is.obj(from) ? from[key] : from, from == null && (from = void 0);
        let range = { to: to2, from };
        return hasAnimated(this) || (props2.reverse && ([to2, from] = [from, to2]), from = getFluidValue(from), is.und(from) ? getAnimated(this) || this._set(to2) : this._set(from)), range;
      }
      _update(_ref, isLoop) {
        let props2 = _extends3({}, _ref), { key, defaultProps } = this;
        props2.default && Object.assign(defaultProps, getDefaultProps(props2, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value)), mergeActiveFn(this, props2, "onProps"), sendEvent(this, "onProps", props2, this);
        let range = this._prepareNode(props2);
        if (Object.isFrozen(this))
          throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
        let state = this._state;
        return scheduleProps(++this._lastCallId, { key, props: props2, defaultProps, state, actions: { pause: () => {
          isPaused(this) || (setPausedBit(this, true), flushCalls(state.pauseQueue), sendEvent(this, "onPause", getFinishedResult(this, checkFinished(this, this.animation.to)), this));
        }, resume: () => {
          isPaused(this) && (setPausedBit(this, false), isAnimating(this) && this._resume(), flushCalls(state.resumeQueue), sendEvent(this, "onResume", getFinishedResult(this, checkFinished(this, this.animation.to)), this));
        }, start: this._merge.bind(this, range) } }).then((result) => {
          if (props2.loop && result.finished && !(isLoop && result.noop)) {
            let nextProps = createLoopUpdate(props2);
            if (nextProps)
              return this._update(nextProps, true);
          }
          return result;
        });
      }
      _merge(range, props2, resolve) {
        if (props2.cancel)
          return this.stop(true), resolve(getCancelledResult(this));
        let hasToProp = !is.und(range.to), hasFromProp = !is.und(range.from);
        if (hasToProp || hasFromProp)
          if (props2.callId > this._lastToId)
            this._lastToId = props2.callId;
          else
            return resolve(getCancelledResult(this));
        let { key, defaultProps, animation: anim } = this, { to: prevTo, from: prevFrom } = anim, { to: to2 = prevTo, from = prevFrom } = range;
        hasFromProp && !hasToProp && (!props2.default || is.und(to2)) && (to2 = from), props2.reverse && ([to2, from] = [from, to2]);
        let hasFromChanged = !isEqual(from, prevFrom);
        hasFromChanged && (anim.from = from), from = getFluidValue(from);
        let hasToChanged = !isEqual(to2, prevTo);
        hasToChanged && this._focus(to2);
        let hasAsyncTo = isAsyncTo(props2.to), { config: config23 } = anim, { decay, velocity } = config23;
        (hasToProp || hasFromProp) && (config23.velocity = 0), props2.config && !hasAsyncTo && mergeConfig(config23, callProp(props2.config, key), props2.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
        let node = getAnimated(this);
        if (!node || is.und(to2))
          return resolve(getFinishedResult(this, true));
        let reset = is.und(props2.reset) ? hasFromProp && !props2.default : !is.und(from) && matchProp(props2.reset, key), value = reset ? from : this.get(), goal = computeGoal(to2), isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal), immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props2.immediate, key));
        if (hasToChanged) {
          let nodeType = getAnimatedType(to2);
          if (nodeType !== node.constructor)
            if (immediate)
              node = this._set(goal);
            else
              throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
        }
        let goalType = node.constructor, started = hasFluidValue(to2), finished = false;
        if (!started) {
          let hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
          (hasToChanged || hasValueChanged) && (finished = isEqual(computeGoal(value), goal), started = !finished), (!isEqual(anim.immediate, immediate) && !immediate || !isEqual(config23.decay, decay) || !isEqual(config23.velocity, velocity)) && (started = true);
        }
        if (finished && isAnimating(this) && (anim.changed && !reset ? started = true : started || this._stop(prevTo)), !hasAsyncTo && ((started || hasFluidValue(prevTo)) && (anim.values = node.getPayload(), anim.toValues = hasFluidValue(to2) ? null : goalType == AnimatedString ? [1] : toArray(goal)), anim.immediate != immediate && (anim.immediate = immediate, !immediate && !reset && this._set(prevTo)), started)) {
          let { onRest } = anim;
          each(ACTIVE_EVENTS, (type) => mergeActiveFn(this, props2, type));
          let result = getFinishedResult(this, checkFinished(this, prevTo));
          flushCalls(this._pendingCalls, result), this._pendingCalls.add(resolve), anim.changed && raf.batchedUpdates(() => {
            anim.changed = !reset, onRest == null ? void 0 : onRest(result, this), reset ? callProp(defaultProps.onRest, result) : anim.onStart == null || anim.onStart(result, this);
          });
        }
        reset && this._set(value), hasAsyncTo ? resolve(runAsync(props2.to, props2, this._state, this)) : started ? this._start() : isAnimating(this) && !hasToChanged ? this._pendingCalls.add(resolve) : resolve(getNoopResult(value));
      }
      _focus(value) {
        let anim = this.animation;
        value !== anim.to && (getFluidObservers(this) && this._detach(), anim.to = value, getFluidObservers(this) && this._attach());
      }
      _attach() {
        let priority2 = 0, { to: to2 } = this.animation;
        hasFluidValue(to2) && (addFluidObserver(to2, this), isFrameValue(to2) && (priority2 = to2.priority + 1)), this.priority = priority2;
      }
      _detach() {
        let { to: to2 } = this.animation;
        hasFluidValue(to2) && removeFluidObserver(to2, this);
      }
      _set(arg, idle = true) {
        let value = getFluidValue(arg);
        if (!is.und(value)) {
          let oldNode = getAnimated(this);
          if (!oldNode || !isEqual(value, oldNode.getValue())) {
            let nodeType = getAnimatedType(value);
            !oldNode || oldNode.constructor != nodeType ? setAnimated(this, nodeType.create(value)) : oldNode.setValue(value), oldNode && raf.batchedUpdates(() => {
              this._onChange(value, idle);
            });
          }
        }
        return getAnimated(this);
      }
      _onStart() {
        let anim = this.animation;
        anim.changed || (anim.changed = true, sendEvent(this, "onStart", getFinishedResult(this, checkFinished(this, anim.to)), this));
      }
      _onChange(value, idle) {
        idle || (this._onStart(), callProp(this.animation.onChange, value, this)), callProp(this.defaultProps.onChange, value, this), super._onChange(value, idle);
      }
      _start() {
        let anim = this.animation;
        getAnimated(this).reset(getFluidValue(anim.to)), anim.immediate || (anim.fromValues = anim.values.map((node) => node.lastPosition)), isAnimating(this) || (setActiveBit(this, true), isPaused(this) || this._resume());
      }
      _resume() {
        globals.skipAnimation ? this.finish() : frameLoop.start(this);
      }
      _stop(goal, cancel) {
        if (isAnimating(this)) {
          setActiveBit(this, false);
          let anim = this.animation;
          each(anim.values, (node) => {
            node.done = true;
          }), anim.toValues && (anim.onChange = anim.onPause = anim.onResume = void 0), callFluidObservers(this, { type: "idle", parent: this });
          let result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal ?? anim.to));
          flushCalls(this._pendingCalls, result), anim.changed && (anim.changed = false, sendEvent(this, "onRest", result, this));
        }
      }
    };
    ACTIVE_EVENTS = ["onStart", "onRest", "onChange", "onPause", "onResume"];
    BATCHED_EVENTS = ["onStart", "onChange", "onRest"];
    nextId = 1;
    Controller = class {
      constructor(props2, flush2) {
        this.id = nextId++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = false, this._item = void 0, this._state = { paused: false, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() }, this._events = { onStart: /* @__PURE__ */ new Map(), onChange: /* @__PURE__ */ new Map(), onRest: /* @__PURE__ */ new Map() }, this._onFrame = this._onFrame.bind(this), flush2 && (this._flush = flush2), props2 && this.start(_extends3({ default: true }, props2));
      }
      get idle() {
        return !this._state.asyncTo && Object.values(this.springs).every((spring) => spring.idle && !spring.isDelayed && !spring.isPaused);
      }
      get item() {
        return this._item;
      }
      set item(item) {
        this._item = item;
      }
      get() {
        let values = {};
        return this.each((spring, key) => values[key] = spring.get()), values;
      }
      set(values) {
        for (let key in values) {
          let value = values[key];
          is.und(value) || this.springs[key].set(value);
        }
      }
      update(props2) {
        return props2 && this.queue.push(createUpdate(props2)), this;
      }
      start(props2) {
        let { queue } = this;
        return props2 ? queue = toArray(props2).map(createUpdate) : this.queue = [], this._flush ? this._flush(this, queue) : (prepareKeys(this, queue), flushUpdateQueue(this, queue));
      }
      stop(arg, keys) {
        if (arg !== !!arg && (keys = arg), keys) {
          let springs = this.springs;
          each(toArray(keys), (key) => springs[key].stop(!!arg));
        } else
          stopAsync(this._state, this._lastAsyncId), this.each((spring) => spring.stop(!!arg));
        return this;
      }
      pause(keys) {
        if (is.und(keys))
          this.start({ pause: true });
        else {
          let springs = this.springs;
          each(toArray(keys), (key) => springs[key].pause());
        }
        return this;
      }
      resume(keys) {
        if (is.und(keys))
          this.start({ pause: false });
        else {
          let springs = this.springs;
          each(toArray(keys), (key) => springs[key].resume());
        }
        return this;
      }
      each(iterator) {
        eachProp(this.springs, iterator);
      }
      _onFrame() {
        let { onStart, onChange, onRest } = this._events, active = this._active.size > 0, changed = this._changed.size > 0;
        (active && !this._started || changed && !this._started) && (this._started = true, flush(onStart, ([onStart2, result]) => {
          result.value = this.get(), onStart2(result, this, this._item);
        }));
        let idle = !active && this._started, values = changed || idle && onRest.size ? this.get() : null;
        changed && onChange.size && flush(onChange, ([onChange2, result]) => {
          result.value = values, onChange2(result, this, this._item);
        }), idle && (this._started = false, flush(onRest, ([onRest2, result]) => {
          result.value = values, onRest2(result, this, this._item);
        }));
      }
      eventObserved(event) {
        if (event.type == "change")
          this._changed.add(event.parent), event.idle || this._active.add(event.parent);
        else if (event.type == "idle")
          this._active.delete(event.parent);
        else
          return;
        raf.onFrame(this._onFrame);
      }
    };
    _excluded$3 = ["children"];
    SpringContext = (_ref) => {
      let { children } = _ref, props2 = _objectWithoutPropertiesLoose(_ref, _excluded$3), inherited = (0, import_react2.useContext)(ctx), pause = props2.pause || !!inherited.pause, immediate = props2.immediate || !!inherited.immediate;
      props2 = useMemoOne(() => ({ pause, immediate }), [pause, immediate]);
      let { Provider } = ctx;
      return React3.createElement(Provider, { value: props2 }, children);
    };
    ctx = makeContext(SpringContext, {});
    SpringContext.Provider = ctx.Provider;
    SpringContext.Consumer = ctx.Consumer;
    SpringRef = () => {
      let current = [], SpringRef2 = function(props2) {
        deprecateDirectCall();
        let results = [];
        return each(current, (ctrl, i2) => {
          if (is.und(props2))
            results.push(ctrl.start());
          else {
            let update3 = _getProps(props2, ctrl, i2);
            update3 && results.push(ctrl.start(update3));
          }
        }), results;
      };
      SpringRef2.current = current, SpringRef2.add = function(ctrl) {
        current.includes(ctrl) || current.push(ctrl);
      }, SpringRef2.delete = function(ctrl) {
        let i2 = current.indexOf(ctrl);
        ~i2 && current.splice(i2, 1);
      }, SpringRef2.pause = function() {
        return each(current, (ctrl) => ctrl.pause(...arguments)), this;
      }, SpringRef2.resume = function() {
        return each(current, (ctrl) => ctrl.resume(...arguments)), this;
      }, SpringRef2.set = function(values) {
        each(current, (ctrl) => ctrl.set(values));
      }, SpringRef2.start = function(props2) {
        let results = [];
        return each(current, (ctrl, i2) => {
          if (is.und(props2))
            results.push(ctrl.start());
          else {
            let update3 = this._getProps(props2, ctrl, i2);
            update3 && results.push(ctrl.start(update3));
          }
        }), results;
      }, SpringRef2.stop = function() {
        return each(current, (ctrl) => ctrl.stop(...arguments)), this;
      }, SpringRef2.update = function(props2) {
        return each(current, (ctrl, i2) => ctrl.update(this._getProps(props2, ctrl, i2))), this;
      };
      let _getProps = function(arg, ctrl, index2) {
        return is.fun(arg) ? arg(index2, ctrl) : arg;
      };
      return SpringRef2._getProps = _getProps, SpringRef2;
    };
    (function(TransitionPhase2) {
      TransitionPhase2.MOUNT = "mount", TransitionPhase2.ENTER = "enter", TransitionPhase2.UPDATE = "update", TransitionPhase2.LEAVE = "leave";
    })(TransitionPhase || (TransitionPhase = {}));
    nextKey = 1;
    Interpolation = class extends FrameValue {
      constructor(source, args) {
        super(), this.key = void 0, this.idle = true, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = source, this.calc = createInterpolator(...args);
        let value = this._get(), nodeType = getAnimatedType(value);
        setAnimated(this, nodeType.create(value));
      }
      advance(_dt) {
        let value = this._get(), oldValue = this.get();
        isEqual(value, oldValue) || (getAnimated(this).setValue(value), this._onChange(value, this.idle)), !this.idle && checkIdle(this._active) && becomeIdle(this);
      }
      _get() {
        let inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
        return this.calc(...inputs);
      }
      _start() {
        this.idle && !checkIdle(this._active) && (this.idle = false, each(getPayload(this), (node) => {
          node.done = false;
        }), globals.skipAnimation ? (raf.batchedUpdates(() => this.advance()), becomeIdle(this)) : frameLoop.start(this));
      }
      _attach() {
        let priority2 = 1;
        each(toArray(this.source), (source) => {
          hasFluidValue(source) && addFluidObserver(source, this), isFrameValue(source) && (source.idle || this._active.add(source), priority2 = Math.max(priority2, source.priority + 1));
        }), this.priority = priority2, this._start();
      }
      _detach() {
        each(toArray(this.source), (source) => {
          hasFluidValue(source) && removeFluidObserver(source, this);
        }), this._active.clear(), becomeIdle(this);
      }
      eventObserved(event) {
        event.type == "change" ? event.idle ? this.advance() : (this._active.add(event.parent), this._start()) : event.type == "idle" ? this._active.delete(event.parent) : event.type == "priority" && (this.priority = toArray(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0));
      }
    };
    globals.assign({ createStringInterpolator, to: (source, args) => new Interpolation(source, args) });
    update2 = frameLoop.advance;
    _excluded$2 = ["style", "children", "scrollTop", "scrollLeft"];
    isCustomPropRE = /^--/;
    attributeCache = {};
    isUnitlessNumber = { animationIterationCount: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true };
    prefixKey = (prefix2, key) => prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
    prefixes = ["Webkit", "Ms", "Moz", "O"];
    isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => (prefixes.forEach((prefix2) => acc[prefixKey(prefix2, prop)] = acc[prop]), acc), isUnitlessNumber);
    _excluded$1 = ["x", "y", "z"];
    domTransforms = /^(matrix|translate|scale|rotate|skew)/;
    pxTransforms = /^(translate)/;
    degTransforms = /^(rotate|skew)/;
    addUnit = (value, unit) => is.num(value) && value !== 0 ? value + unit : value;
    isValueIdentity = (value, id) => is.arr(value) ? value.every((v2) => isValueIdentity(v2, id)) : is.num(value) ? value === id : parseFloat(value) === id;
    AnimatedStyle = class extends AnimatedObject {
      constructor(_ref) {
        let { x: x2, y: y2, z: z2 } = _ref, style = _objectWithoutPropertiesLoose2(_ref, _excluded$1), inputs = [], transforms3 = [];
        (x2 || y2 || z2) && (inputs.push([x2 || 0, y2 || 0, z2 || 0]), transforms3.push((xyz) => [`translate3d(${xyz.map((v2) => addUnit(v2, "px")).join(",")})`, isValueIdentity(xyz, 0)])), eachProp(style, (value, key) => {
          if (key === "transform")
            inputs.push([value || ""]), transforms3.push((transform) => [transform, transform === ""]);
          else if (domTransforms.test(key)) {
            if (delete style[key], is.und(value))
              return;
            let unit = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
            inputs.push(toArray(value)), transforms3.push(key === "rotate3d" ? ([x22, y22, z22, deg]) => [`rotate3d(${x22},${y22},${z22},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : (input) => [`${key}(${input.map((v2) => addUnit(v2, unit)).join(",")})`, isValueIdentity(input, key.startsWith("scale") ? 1 : 0)]);
          }
        }), inputs.length && (style.transform = new FluidTransform(inputs, transforms3)), super(style);
      }
    };
    FluidTransform = class extends FluidValue {
      constructor(inputs, transforms3) {
        super(), this._value = null, this.inputs = inputs, this.transforms = transforms3;
      }
      get() {
        return this._value || (this._value = this._get());
      }
      _get() {
        let transform = "", identity = true;
        return each(this.inputs, (input, i2) => {
          let arg1 = getFluidValue(input[0]), [t2, id] = this.transforms[i2](is.arr(arg1) ? arg1 : input.map(getFluidValue));
          transform += " " + t2, identity = identity && id;
        }), identity ? "none" : transform;
      }
      observerAdded(count) {
        count == 1 && each(this.inputs, (input) => each(input, (value) => hasFluidValue(value) && addFluidObserver(value, this)));
      }
      observerRemoved(count) {
        count == 0 && each(this.inputs, (input) => each(input, (value) => hasFluidValue(value) && removeFluidObserver(value, this)));
      }
      eventObserved(event) {
        event.type == "change" && (this._value = null), callFluidObservers(this, event);
      }
    };
    primitives = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
    _excluded = ["scrollTop", "scrollLeft"];
    globals.assign({ batchedUpdates: import_react_dom.unstable_batchedUpdates, createStringInterpolator, colors });
    host = createHost(primitives, { applyAnimatedValues, createAnimatedStyle: (style) => new AnimatedStyle(style), getComponentProps: (_ref) => _objectWithoutPropertiesLoose2(_ref, _excluded) });
    animated = host.animated;
    REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
    isRenderingOnServer = (() => typeof window > "u" || !window.location || !window.location.href || !window.matchMedia)();
    getMediaQueryList = () => isRenderingOnServer ? { matches: true, addListener: () => {
    }, removeListener: () => {
    } } : window.matchMedia(REDUCED_MOTION_QUERY);
  }
});

// node_modules/@twilio-paste/styling-library/dist/index.es.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    return cache[arg] === void 0 && (cache[arg] = fn(arg)), cache[arg];
  };
}
function memoize2(fn) {
  var cache = {};
  return function(arg) {
    return cache[arg] === void 0 && (cache[arg] = fn(arg)), cache[arg];
  };
}
function _extends4() {
  return _extends4 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends4.apply(this, arguments);
}
var default2, react_star, __create, __defProp, __getOwnPropDesc, __getOwnPropNames, __getProtoOf, __hasOwnProp, __esm2, __commonJS, __export2, __copyProps, __reExport, __toESM2, __toCommonJS, require_extends, react_exports, init_react, require_emotion_memoize_cjs_prod, require_emotion_memoize_cjs, require_emotion_is_prop_valid_cjs_prod, require_emotion_is_prop_valid_cjs, require_emotion_sheet_cjs_prod, require_emotion_sheet_cjs, require_stylis, require_emotion_weak_memoize_cjs_prod, require_emotion_weak_memoize_cjs, require_emotion_memoize_cjs_prod2, require_emotion_memoize_cjs2, require_emotion_cache_cjs_prod, require_emotion_cache_cjs, require_extends2, require_react_is_production_min, require_react_is, require_hoist_non_react_statics_cjs, require_emotion_react_isolated_hnrs_cjs_prod, require_emotion_utils_cjs_prod, require_emotion_utils_cjs, require_emotion_hash_cjs_prod, require_emotion_hash_cjs, require_emotion_unitless_cjs_prod, require_emotion_unitless_cjs, require_emotion_memoize_cjs_prod3, require_emotion_memoize_cjs3, require_emotion_serialize_cjs_prod, require_emotion_serialize_cjs, require_emotion_use_insertion_effect_with_fallbacks_cjs_prod, require_emotion_use_insertion_effect_with_fallbacks_cjs, require_emotion_element_20108edd_cjs_prod, require_emotion_react_cjs_prod, require_emotion_react_cjs, require_emotion_styled_base_cjs_prod, require_emotion_styled_cjs_prod, require_emotion_styled_cjs, require_object_assign, import_styled, import_cache, get, defaultBreakpoints, defaultTheme, aliases, multiples, scales, positiveOrNegative, transforms, responsive, css, import_object_assign, merge, sort, defaults2, createMediaQuery, getValue, get2, createParser, parseResponsiveStyle, parseResponsiveObject, createStyleFunction, system, compose, themeGet, emotion_memoize_browser_esm_default, memoize_browser_esm_default, reactPropsRegex, index, is_prop_valid_browser_esm_default, isNumber, getWidth, config2, layout, index_esm_default, config22, color, index_esm_default2, defaults22, config3, typography, index_esm_default3, config4, flexbox, index_esm_default4, defaults3, config5, grid, index_esm_default5, config6, border, index_esm_default6, config7, background, index_esm_default7, defaults4, config8, position, index_esm_default8, defaults5, isNumber3, getMargin, configs, margin, padding, space, shadow, index_esm_default9, get4, defaultBreakpoints2, defaultTheme2, aliases2, multiples2, scales2, positiveOrNegative2, transforms2, responsive2, css2, index_esm_default10, variant, buttonStyle, textStyle, colorStyle, width, height, minWidth, minHeight, maxWidth, maxHeight, size, verticalAlign, display, overflow, overflowX, overflowY, opacity, fontSize, fontFamily, fontWeight, lineHeight, textAlign, fontStyle, letterSpacing, alignItems, alignContent, justifyItems, justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, borderWidth, borderStyle, borderColor, borderTop, borderRight, borderBottom, borderLeft, borderRadius, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat, zIndex, top, right, bottom, left, all, props, createShouldForwardProp, index_esm_default11, import_react4, export_CacheProvider, export_EmotionCSS, export_StylingGlobals, export_ThemeContext, export_ThemeProvider, export_createCache, export_keyframes, export_styled, export_withTheme;
var init_index_es2 = __esm({
  "node_modules/@twilio-paste/styling-library/dist/index.es.js"() {
    default2 = __toESM(require_react());
    react_star = __toESM(require_react());
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
    __export2 = (target, all2) => {
      for (var name in all2)
        __defProp(target, name, { get: all2[name], enumerable: true });
    };
    __copyProps = (to2, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames(from))
          !__hasOwnProp.call(to2, key) && key !== except && __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      return to2;
    };
    __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
    __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
    __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    require_extends = __commonJS({ "../../../node_modules/@emotion/styled/node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
      function _extends22() {
        return module.exports = _extends22 = Object.assign ? Object.assign.bind() : function(target) {
          for (var i2 = 1; i2 < arguments.length; i2++) {
            var source = arguments[i2];
            for (var key in source)
              Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
          }
          return target;
        }, module.exports.__esModule = true, module.exports.default = module.exports, _extends22.apply(this, arguments);
      }
      module.exports = _extends22, module.exports.__esModule = true, module.exports.default = module.exports;
    } });
    react_exports = {};
    __export2(react_exports, { default: () => default2 });
    init_react = __esm2({ "esm-externals:react"() {
      __reExport(react_exports, react_star);
    } });
    require_emotion_memoize_cjs_prod = __commonJS({ "../../../node_modules/@emotion/styled/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function memoize3(fn) {
        var cache = /* @__PURE__ */ Object.create(null);
        return function(arg) {
          return cache[arg] === void 0 && (cache[arg] = fn(arg)), cache[arg];
        };
      }
      exports.default = memoize3;
    } });
    require_emotion_memoize_cjs = __commonJS({ "../../../node_modules/@emotion/styled/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_memoize_cjs_prod();
    } });
    require_emotion_is_prop_valid_cjs_prod = __commonJS({ "../../../node_modules/@emotion/styled/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var memoize3 = require_emotion_memoize_cjs();
      function _interopDefault(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      var memoize__default = _interopDefault(memoize3), reactPropsRegex2 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, isPropValid = memoize__default.default(function(prop) {
        return reactPropsRegex2.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      });
      exports.default = isPropValid;
    } });
    require_emotion_is_prop_valid_cjs = __commonJS({ "../../../node_modules/@emotion/styled/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_is_prop_valid_cjs_prod();
    } });
    require_emotion_sheet_cjs_prod = __commonJS({ "../../../node_modules/@emotion/cache/node_modules/@emotion/sheet/dist/emotion-sheet.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function sheetForTag(tag) {
        if (tag.sheet)
          return tag.sheet;
        for (var i2 = 0; i2 < document.styleSheets.length; i2++)
          if (document.styleSheets[i2].ownerNode === tag)
            return document.styleSheets[i2];
      }
      function createStyleElement(options) {
        var tag = document.createElement("style");
        return tag.setAttribute("data-emotion", options.key), options.nonce !== void 0 && tag.setAttribute("nonce", options.nonce), tag.appendChild(document.createTextNode("")), tag.setAttribute("data-s", ""), tag;
      }
      var StyleSheet = function() {
        function StyleSheet2(options) {
          var _this = this;
          this._insertTag = function(tag) {
            var before;
            _this.tags.length === 0 ? _this.insertionPoint ? before = _this.insertionPoint.nextSibling : _this.prepend ? before = _this.container.firstChild : before = _this.before : before = _this.tags[_this.tags.length - 1].nextSibling, _this.container.insertBefore(tag, before), _this.tags.push(tag);
          }, this.isSpeedy = options.speedy === void 0 ? true : options.speedy, this.tags = [], this.ctr = 0, this.nonce = options.nonce, this.key = options.key, this.container = options.container, this.prepend = options.prepend, this.insertionPoint = options.insertionPoint, this.before = null;
        }
        var _proto = StyleSheet2.prototype;
        return _proto.hydrate = function(nodes) {
          nodes.forEach(this._insertTag);
        }, _proto.insert = function(rule) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(createStyleElement(this));
          var tag = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var sheet = sheetForTag(tag);
            try {
              sheet.insertRule(rule, sheet.cssRules.length);
            } catch {
            }
          } else
            tag.appendChild(document.createTextNode(rule));
          this.ctr++;
        }, _proto.flush = function() {
          this.tags.forEach(function(tag) {
            return tag.parentNode && tag.parentNode.removeChild(tag);
          }), this.tags = [], this.ctr = 0;
        }, StyleSheet2;
      }();
      exports.StyleSheet = StyleSheet;
    } });
    require_emotion_sheet_cjs = __commonJS({ "../../../node_modules/@emotion/cache/node_modules/@emotion/sheet/dist/emotion-sheet.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_sheet_cjs_prod();
    } });
    require_stylis = __commonJS({ "../../../node_modules/@emotion/cache/node_modules/stylis/dist/umd/stylis.js"(exports, module) {
      (function(e2, r2) {
        typeof exports == "object" && typeof module < "u" ? r2(exports) : typeof define == "function" && define.amd ? define(["exports"], r2) : (e2 = e2 || self, r2(e2.stylis = {}));
      })(exports, function(e2) {
        "use strict";
        var r2 = "-ms-", a2 = "-moz-", c6 = "-webkit-", t2 = "comm", n2 = "rule", s2 = "decl", i2 = "@page", u2 = "@media", o2 = "@import", f2 = "@charset", l2 = "@viewport", p2 = "@supports", h2 = "@document", v2 = "@namespace", d2 = "@keyframes", b2 = "@font-face", w2 = "@counter-style", m2 = "@font-feature-values", g2 = Math.abs, k2 = String.fromCharCode, $2 = Object.assign;
        function x2(e22, r22) {
          return A2(e22, 0) ^ 45 ? (((r22 << 2 ^ A2(e22, 0)) << 2 ^ A2(e22, 1)) << 2 ^ A2(e22, 2)) << 2 ^ A2(e22, 3) : 0;
        }
        function E2(e22) {
          return e22.trim();
        }
        function y2(e22, r22) {
          return (e22 = r22.exec(e22)) ? e22[0] : e22;
        }
        function T2(e22, r22, a22) {
          return e22.replace(r22, a22);
        }
        function O2(e22, r22) {
          return e22.indexOf(r22);
        }
        function A2(e22, r22) {
          return e22.charCodeAt(r22) | 0;
        }
        function M2(e22, r22, a22) {
          return e22.slice(r22, a22);
        }
        function C2(e22) {
          return e22.length;
        }
        function S2(e22) {
          return e22.length;
        }
        function R2(e22, r22) {
          return r22.push(e22), e22;
        }
        function z2(e22, r22) {
          return e22.map(r22).join("");
        }
        e2.line = 1, e2.column = 1, e2.length = 0, e2.position = 0, e2.character = 0, e2.characters = "";
        function N2(r22, a22, c22, t22, n22, s22, i22) {
          return { value: r22, root: a22, parent: c22, type: t22, props: n22, children: s22, line: e2.line, column: e2.column, length: i22, return: "" };
        }
        function P2(e22, r22) {
          return $2(N2("", null, null, "", null, null, 0), e22, { length: -e22.length }, r22);
        }
        function j2() {
          return e2.character;
        }
        function U2() {
          return e2.character = e2.position > 0 ? A2(e2.characters, --e2.position) : 0, e2.column--, e2.character === 10 && (e2.column = 1, e2.line--), e2.character;
        }
        function _2() {
          return e2.character = e2.position < e2.length ? A2(e2.characters, e2.position++) : 0, e2.column++, e2.character === 10 && (e2.column = 1, e2.line++), e2.character;
        }
        function F2() {
          return A2(e2.characters, e2.position);
        }
        function I2() {
          return e2.position;
        }
        function L2(r22, a22) {
          return M2(e2.characters, r22, a22);
        }
        function D2(e22) {
          switch (e22) {
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
              return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125:
              return 4;
            case 58:
              return 3;
            case 34:
            case 39:
            case 40:
            case 91:
              return 2;
            case 41:
            case 93:
              return 1;
          }
          return 0;
        }
        function K2(r22) {
          return e2.line = e2.column = 1, e2.length = C2(e2.characters = r22), e2.position = 0, [];
        }
        function V2(r22) {
          return e2.characters = "", r22;
        }
        function W2(r22) {
          return E2(L2(e2.position - 1, Z2(r22 === 91 ? r22 + 2 : r22 === 40 ? r22 + 1 : r22)));
        }
        function Y2(e22) {
          return V2(G2(K2(e22)));
        }
        function B2(r22) {
          for (; (e2.character = F2()) && e2.character < 33; )
            _2();
          return D2(r22) > 2 || D2(e2.character) > 3 ? "" : " ";
        }
        function G2(r22) {
          for (; _2(); )
            switch (D2(e2.character)) {
              case 0:
                R2(J2(e2.position - 1), r22);
                break;
              case 2:
                R2(W2(e2.character), r22);
                break;
              default:
                R2(k2(e2.character), r22);
            }
          return r22;
        }
        function H2(r22, a22) {
          for (; --a22 && _2() && !(e2.character < 48 || e2.character > 102 || e2.character > 57 && e2.character < 65 || e2.character > 70 && e2.character < 97); )
            ;
          return L2(r22, I2() + (a22 < 6 && F2() == 32 && _2() == 32));
        }
        function Z2(r22) {
          for (; _2(); )
            switch (e2.character) {
              case r22:
                return e2.position;
              case 34:
              case 39:
                r22 !== 34 && r22 !== 39 && Z2(e2.character);
                break;
              case 40:
                r22 === 41 && Z2(r22);
                break;
              case 92:
                _2();
                break;
            }
          return e2.position;
        }
        function q2(r22, a22) {
          for (; _2() && r22 + e2.character !== 47 + 10; )
            if (r22 + e2.character === 42 + 42 && F2() === 47)
              break;
          return "/*" + L2(a22, e2.position - 1) + "*" + k2(r22 === 47 ? r22 : _2());
        }
        function J2(r22) {
          for (; !D2(F2()); )
            _2();
          return L2(r22, e2.position);
        }
        function Q2(e22) {
          return V2(X2("", null, null, null, [""], e22 = K2(e22), 0, [0], e22));
        }
        function X2(e22, r22, a22, c22, t22, n22, s22, i22, u22) {
          for (var o22 = 0, f22 = 0, l22 = s22, p22 = 0, h22 = 0, v22 = 0, d22 = 1, b22 = 1, w22 = 1, m22 = 0, g22 = "", $22 = t22, x22 = n22, E22 = c22, y22 = g22; b22; )
            switch (v22 = m22, m22 = _2()) {
              case 40:
                if (v22 != 108 && A2(y22, l22 - 1) == 58) {
                  O2(y22 += T2(W2(m22), "&", "&\f"), "&\f") != -1 && (w22 = -1);
                  break;
                }
              case 34:
              case 39:
              case 91:
                y22 += W2(m22);
                break;
              case 9:
              case 10:
              case 13:
              case 32:
                y22 += B2(v22);
                break;
              case 92:
                y22 += H2(I2() - 1, 7);
                continue;
              case 47:
                switch (F2()) {
                  case 42:
                  case 47:
                    R2(re(q2(_2(), I2()), r22, a22), u22);
                    break;
                  default:
                    y22 += "/";
                }
                break;
              case 123 * d22:
                i22[o22++] = C2(y22) * w22;
              case 125 * d22:
              case 59:
              case 0:
                switch (m22) {
                  case 0:
                  case 125:
                    b22 = 0;
                  case 59 + f22:
                    h22 > 0 && C2(y22) - l22 && R2(h22 > 32 ? ae(y22 + ";", c22, a22, l22 - 1) : ae(T2(y22, " ", "") + ";", c22, a22, l22 - 2), u22);
                    break;
                  case 59:
                    y22 += ";";
                  default:
                    if (R2(E22 = ee(y22, r22, a22, o22, f22, t22, i22, g22, $22 = [], x22 = [], l22), n22), m22 === 123)
                      if (f22 === 0)
                        X2(y22, r22, E22, E22, $22, n22, l22, i22, x22);
                      else
                        switch (p22 === 99 && A2(y22, 3) === 110 ? 100 : p22) {
                          case 100:
                          case 109:
                          case 115:
                            X2(e22, E22, E22, c22 && R2(ee(e22, E22, E22, 0, 0, t22, i22, g22, t22, $22 = [], l22), x22), t22, x22, l22, i22, c22 ? $22 : x22);
                            break;
                          default:
                            X2(y22, E22, E22, E22, [""], x22, 0, i22, x22);
                        }
                }
                o22 = f22 = h22 = 0, d22 = w22 = 1, g22 = y22 = "", l22 = s22;
                break;
              case 58:
                l22 = 1 + C2(y22), h22 = v22;
              default:
                if (d22 < 1) {
                  if (m22 == 123)
                    --d22;
                  else if (m22 == 125 && d22++ == 0 && U2() == 125)
                    continue;
                }
                switch (y22 += k2(m22), m22 * d22) {
                  case 38:
                    w22 = f22 > 0 ? 1 : (y22 += "\f", -1);
                    break;
                  case 44:
                    i22[o22++] = (C2(y22) - 1) * w22, w22 = 1;
                    break;
                  case 64:
                    F2() === 45 && (y22 += W2(_2())), p22 = F2(), f22 = l22 = C2(g22 = y22 += J2(I2())), m22++;
                    break;
                  case 45:
                    v22 === 45 && C2(y22) == 2 && (d22 = 0);
                }
            }
          return n22;
        }
        function ee(e22, r22, a22, c22, t22, s22, i22, u22, o22, f22, l22) {
          for (var p22 = t22 - 1, h22 = t22 === 0 ? s22 : [""], v22 = S2(h22), d22 = 0, b22 = 0, w22 = 0; d22 < c22; ++d22)
            for (var m22 = 0, k22 = M2(e22, p22 + 1, p22 = g2(b22 = i22[d22])), $22 = e22; m22 < v22; ++m22)
              ($22 = E2(b22 > 0 ? h22[m22] + " " + k22 : T2(k22, /&\f/g, h22[m22]))) && (o22[w22++] = $22);
          return N2(e22, r22, a22, t22 === 0 ? n2 : u22, o22, f22, l22);
        }
        function re(e22, r22, a22) {
          return N2(e22, r22, a22, t2, k2(j2()), M2(e22, 2, -2), 0);
        }
        function ae(e22, r22, a22, c22) {
          return N2(e22, r22, a22, s2, M2(e22, 0, c22), M2(e22, c22 + 1, -1), c22);
        }
        function ce(e22, t22, n22) {
          switch (x2(e22, t22)) {
            case 5103:
              return c6 + "print-" + e22 + e22;
            case 5737:
            case 4201:
            case 3177:
            case 3433:
            case 1641:
            case 4457:
            case 2921:
            case 5572:
            case 6356:
            case 5844:
            case 3191:
            case 6645:
            case 3005:
            case 6391:
            case 5879:
            case 5623:
            case 6135:
            case 4599:
            case 4855:
            case 4215:
            case 6389:
            case 5109:
            case 5365:
            case 5621:
            case 3829:
              return c6 + e22 + e22;
            case 4789:
              return a2 + e22 + e22;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return c6 + e22 + a2 + e22 + r2 + e22 + e22;
            case 5936:
              switch (A2(e22, t22 + 11)) {
                case 114:
                  return c6 + e22 + r2 + T2(e22, /[svh]\w+-[tblr]{2}/, "tb") + e22;
                case 108:
                  return c6 + e22 + r2 + T2(e22, /[svh]\w+-[tblr]{2}/, "tb-rl") + e22;
                case 45:
                  return c6 + e22 + r2 + T2(e22, /[svh]\w+-[tblr]{2}/, "lr") + e22;
              }
            case 6828:
            case 4268:
            case 2903:
              return c6 + e22 + r2 + e22 + e22;
            case 6165:
              return c6 + e22 + r2 + "flex-" + e22 + e22;
            case 5187:
              return c6 + e22 + T2(e22, /(\w+).+(:[^]+)/, c6 + "box-$1$2" + r2 + "flex-$1$2") + e22;
            case 5443:
              return c6 + e22 + r2 + "flex-item-" + T2(e22, /flex-|-self/g, "") + (y2(e22, /flex-|baseline/) ? "" : r2 + "grid-row-" + T2(e22, /flex-|-self/g, "")) + e22;
            case 4675:
              return c6 + e22 + r2 + "flex-line-pack" + T2(e22, /align-content|flex-|-self/g, "") + e22;
            case 5548:
              return c6 + e22 + r2 + T2(e22, "shrink", "negative") + e22;
            case 5292:
              return c6 + e22 + r2 + T2(e22, "basis", "preferred-size") + e22;
            case 6060:
              return c6 + "box-" + T2(e22, "-grow", "") + c6 + e22 + r2 + T2(e22, "grow", "positive") + e22;
            case 4554:
              return c6 + T2(e22, /([^-])(transform)/g, "$1" + c6 + "$2") + e22;
            case 6187:
              return T2(T2(T2(e22, /(zoom-|grab)/, c6 + "$1"), /(image-set)/, c6 + "$1"), e22, "") + e22;
            case 5495:
            case 3959:
              return T2(e22, /(image-set\([^]*)/, c6 + "$1$`$1");
            case 4968:
              return T2(T2(e22, /(.+:)(flex-)?(.*)/, c6 + "box-pack:$3" + r2 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + c6 + e22 + e22;
            case 4200:
              if (!y2(e22, /flex-|baseline/))
                return r2 + "grid-column-align" + M2(e22, t22) + e22;
              break;
            case 2592:
            case 3360:
              return r2 + T2(e22, "template-", "") + e22;
            case 4384:
            case 3616:
              return n22 && n22.some(function(e3, r22) {
                return t22 = r22, y2(e3.props, /grid-\w+-end/);
              }) ? ~O2(e22 + (n22 = n22[t22].value), "span") ? e22 : r2 + T2(e22, "-start", "") + e22 + r2 + "grid-row-span:" + (~O2(n22, "span") ? y2(n22, /\d+/) : +y2(n22, /\d+/) - +y2(e22, /\d+/)) + ";" : r2 + T2(e22, "-start", "") + e22;
            case 4896:
            case 4128:
              return n22 && n22.some(function(e3) {
                return y2(e3.props, /grid-\w+-start/);
              }) ? e22 : r2 + T2(T2(e22, "-end", "-span"), "span ", "") + e22;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return T2(e22, /(.+)-inline(.+)/, c6 + "$1$2") + e22;
            case 8116:
            case 7059:
            case 5753:
            case 5535:
            case 5445:
            case 5701:
            case 4933:
            case 4677:
            case 5533:
            case 5789:
            case 5021:
            case 4765:
              if (C2(e22) - 1 - t22 > 6)
                switch (A2(e22, t22 + 1)) {
                  case 109:
                    if (A2(e22, t22 + 4) !== 45)
                      break;
                  case 102:
                    return T2(e22, /(.+:)(.+)-([^]+)/, "$1" + c6 + "$2-$3$1" + a2 + (A2(e22, t22 + 3) == 108 ? "$3" : "$2-$3")) + e22;
                  case 115:
                    return ~O2(e22, "stretch") ? ce(T2(e22, "stretch", "fill-available"), t22, n22) + e22 : e22;
                }
              break;
            case 5152:
            case 5920:
              return T2(e22, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(a22, c22, t3, n3, s22, i22, u22) {
                return r2 + c22 + ":" + t3 + u22 + (n3 ? r2 + c22 + "-span:" + (s22 ? i22 : +i22 - +t3) + u22 : "") + e22;
              });
            case 4949:
              if (A2(e22, t22 + 6) === 121)
                return T2(e22, ":", ":" + c6) + e22;
              break;
            case 6444:
              switch (A2(e22, A2(e22, 14) === 45 ? 18 : 11)) {
                case 120:
                  return T2(e22, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + c6 + (A2(e22, 14) === 45 ? "inline-" : "") + "box$3$1" + c6 + "$2$3$1" + r2 + "$2box$3") + e22;
                case 100:
                  return T2(e22, ":", ":" + r2) + e22;
              }
              break;
            case 5719:
            case 2647:
            case 2135:
            case 3927:
            case 2391:
              return T2(e22, "scroll-", "scroll-snap-") + e22;
          }
          return e22;
        }
        function te(e22, r22) {
          for (var a22 = "", c22 = S2(e22), t22 = 0; t22 < c22; t22++)
            a22 += r22(e22[t22], t22, e22, r22) || "";
          return a22;
        }
        function ne(e22, r22, a22, c22) {
          switch (e22.type) {
            case o2:
            case s2:
              return e22.return = e22.return || e22.value;
            case t2:
              return "";
            case d2:
              return e22.return = e22.value + "{" + te(e22.children, c22) + "}";
            case n2:
              e22.value = e22.props.join(",");
          }
          return C2(a22 = te(e22.children, c22)) ? e22.return = e22.value + "{" + a22 + "}" : "";
        }
        function se(e22) {
          var r22 = S2(e22);
          return function(a22, c22, t22, n22) {
            for (var s22 = "", i22 = 0; i22 < r22; i22++)
              s22 += e22[i22](a22, c22, t22, n22) || "";
            return s22;
          };
        }
        function ie(e22) {
          return function(r22) {
            r22.root || (r22 = r22.return) && e22(r22);
          };
        }
        function ue(e22, t22, i22, u22) {
          if (e22.length > -1 && !e22.return)
            switch (e22.type) {
              case s2:
                e22.return = ce(e22.value, e22.length, i22);
                return;
              case d2:
                return te([P2(e22, { value: T2(e22.value, "@", "@" + c6) })], u22);
              case n2:
                if (e22.length)
                  return z2(e22.props, function(t3) {
                    switch (y2(t3, /(::plac\w+|:read-\w+)/)) {
                      case ":read-only":
                      case ":read-write":
                        return te([P2(e22, { props: [T2(t3, /:(read-\w+)/, ":" + a2 + "$1")] })], u22);
                      case "::placeholder":
                        return te([P2(e22, { props: [T2(t3, /:(plac\w+)/, ":" + c6 + "input-$1")] }), P2(e22, { props: [T2(t3, /:(plac\w+)/, ":" + a2 + "$1")] }), P2(e22, { props: [T2(t3, /:(plac\w+)/, r2 + "input-$1")] })], u22);
                    }
                    return "";
                  });
            }
        }
        function oe(e22) {
          switch (e22.type) {
            case n2:
              e22.props = e22.props.map(function(r22) {
                return z2(Y2(r22), function(r3, a22, c22) {
                  switch (A2(r3, 0)) {
                    case 12:
                      return M2(r3, 1, C2(r3));
                    case 0:
                    case 40:
                    case 43:
                    case 62:
                    case 126:
                      return r3;
                    case 58:
                      c22[++a22] === "global" && (c22[a22] = "", c22[++a22] = "\f" + M2(c22[a22], a22 = 1, -1));
                    case 32:
                      return a22 === 1 ? "" : r3;
                    default:
                      switch (a22) {
                        case 0:
                          return e22 = r3, S2(c22) > 1 ? "" : r3;
                        case (a22 = S2(c22) - 1):
                        case 2:
                          return a22 === 2 ? r3 + e22 + e22 : r3 + e22;
                        default:
                          return r3;
                      }
                  }
                });
              });
          }
        }
        e2.CHARSET = f2, e2.COMMENT = t2, e2.COUNTER_STYLE = w2, e2.DECLARATION = s2, e2.DOCUMENT = h2, e2.FONT_FACE = b2, e2.FONT_FEATURE_VALUES = m2, e2.IMPORT = o2, e2.KEYFRAMES = d2, e2.MEDIA = u2, e2.MOZ = a2, e2.MS = r2, e2.NAMESPACE = v2, e2.PAGE = i2, e2.RULESET = n2, e2.SUPPORTS = p2, e2.VIEWPORT = l2, e2.WEBKIT = c6, e2.abs = g2, e2.alloc = K2, e2.append = R2, e2.assign = $2, e2.caret = I2, e2.char = j2, e2.charat = A2, e2.combine = z2, e2.comment = re, e2.commenter = q2, e2.compile = Q2, e2.copy = P2, e2.dealloc = V2, e2.declaration = ae, e2.delimit = W2, e2.delimiter = Z2, e2.escaping = H2, e2.from = k2, e2.hash = x2, e2.identifier = J2, e2.indexof = O2, e2.match = y2, e2.middleware = se, e2.namespace = oe, e2.next = _2, e2.node = N2, e2.parse = X2, e2.peek = F2, e2.prefix = ce, e2.prefixer = ue, e2.prev = U2, e2.replace = T2, e2.ruleset = ee, e2.rulesheet = ie, e2.serialize = te, e2.sizeof = S2, e2.slice = L2, e2.stringify = ne, e2.strlen = C2, e2.substr = M2, e2.token = D2, e2.tokenize = Y2, e2.tokenizer = G2, e2.trim = E2, e2.whitespace = B2, Object.defineProperty(e2, "__esModule", { value: true });
      });
    } });
    require_emotion_weak_memoize_cjs_prod = __commonJS({ "../../../node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var weakMemoize = function(func) {
        var cache = /* @__PURE__ */ new WeakMap();
        return function(arg) {
          if (cache.has(arg))
            return cache.get(arg);
          var ret = func(arg);
          return cache.set(arg, ret), ret;
        };
      };
      exports.default = weakMemoize;
    } });
    require_emotion_weak_memoize_cjs = __commonJS({ "../../../node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_weak_memoize_cjs_prod();
    } });
    require_emotion_memoize_cjs_prod2 = __commonJS({ "../../../node_modules/@emotion/cache/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function memoize3(fn) {
        var cache = /* @__PURE__ */ Object.create(null);
        return function(arg) {
          return cache[arg] === void 0 && (cache[arg] = fn(arg)), cache[arg];
        };
      }
      exports.default = memoize3;
    } });
    require_emotion_memoize_cjs2 = __commonJS({ "../../../node_modules/@emotion/cache/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_memoize_cjs_prod2();
    } });
    require_emotion_cache_cjs_prod = __commonJS({ "../../../node_modules/@emotion/cache/dist/emotion-cache.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var sheet = require_emotion_sheet_cjs(), stylis = require_stylis(), weakMemoize = require_emotion_weak_memoize_cjs(), memoize3 = require_emotion_memoize_cjs2();
      function _interopDefault(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      var weakMemoize__default = _interopDefault(weakMemoize), memoize__default = _interopDefault(memoize3), identifierWithPointTracking = function(begin, points, index2) {
        for (var previous = 0, character = 0; previous = character, character = stylis.peek(), previous === 38 && character === 12 && (points[index2] = 1), !stylis.token(character); )
          stylis.next();
        return stylis.slice(begin, stylis.position);
      }, toRules = function(parsed, points) {
        var index2 = -1, character = 44;
        do
          switch (stylis.token(character)) {
            case 0:
              character === 38 && stylis.peek() === 12 && (points[index2] = 1), parsed[index2] += identifierWithPointTracking(stylis.position - 1, points, index2);
              break;
            case 2:
              parsed[index2] += stylis.delimit(character);
              break;
            case 4:
              if (character === 44) {
                parsed[++index2] = stylis.peek() === 58 ? "&\f" : "", points[index2] = parsed[index2].length;
                break;
              }
            default:
              parsed[index2] += stylis.from(character);
          }
        while (character = stylis.next());
        return parsed;
      }, getRules = function(value, points) {
        return stylis.dealloc(toRules(stylis.alloc(value), points));
      }, fixedElements = /* @__PURE__ */ new WeakMap(), compat = function(element) {
        if (!(element.type !== "rule" || !element.parent || element.length < 1)) {
          for (var value = element.value, parent = element.parent, isImplicitRule = element.column === parent.column && element.line === parent.line; parent.type !== "rule"; )
            if (parent = parent.parent, !parent)
              return;
          if (!(element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) && !isImplicitRule) {
            fixedElements.set(element, true);
            for (var points = [], rules = getRules(value, points), parentRules = parent.props, i2 = 0, k2 = 0; i2 < rules.length; i2++)
              for (var j2 = 0; j2 < parentRules.length; j2++, k2++)
                element.props[k2] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
          }
        }
      }, removeLabel = function(element) {
        if (element.type === "decl") {
          var value = element.value;
          value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98 && (element.return = "", element.value = "");
        }
      };
      function prefix2(value, length) {
        switch (stylis.hash(value, length)) {
          case 5103:
            return stylis.WEBKIT + "print-" + value + value;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return stylis.WEBKIT + value + value;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return stylis.WEBKIT + value + stylis.MOZ + value + stylis.MS + value + value;
          case 6828:
          case 4268:
            return stylis.WEBKIT + value + stylis.MS + value + value;
          case 6165:
            return stylis.WEBKIT + value + stylis.MS + "flex-" + value + value;
          case 5187:
            return stylis.WEBKIT + value + stylis.replace(value, /(\w+).+(:[^]+)/, stylis.WEBKIT + "box-$1$2" + stylis.MS + "flex-$1$2") + value;
          case 5443:
            return stylis.WEBKIT + value + stylis.MS + "flex-item-" + stylis.replace(value, /flex-|-self/, "") + value;
          case 4675:
            return stylis.WEBKIT + value + stylis.MS + "flex-line-pack" + stylis.replace(value, /align-content|flex-|-self/, "") + value;
          case 5548:
            return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, "shrink", "negative") + value;
          case 5292:
            return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, "basis", "preferred-size") + value;
          case 6060:
            return stylis.WEBKIT + "box-" + stylis.replace(value, "-grow", "") + stylis.WEBKIT + value + stylis.MS + stylis.replace(value, "grow", "positive") + value;
          case 4554:
            return stylis.WEBKIT + stylis.replace(value, /([^-])(transform)/g, "$1" + stylis.WEBKIT + "$2") + value;
          case 6187:
            return stylis.replace(stylis.replace(stylis.replace(value, /(zoom-|grab)/, stylis.WEBKIT + "$1"), /(image-set)/, stylis.WEBKIT + "$1"), value, "") + value;
          case 5495:
          case 3959:
            return stylis.replace(value, /(image-set\([^]*)/, stylis.WEBKIT + "$1$`$1");
          case 4968:
            return stylis.replace(stylis.replace(value, /(.+:)(flex-)?(.*)/, stylis.WEBKIT + "box-pack:$3" + stylis.MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + stylis.WEBKIT + value + value;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return stylis.replace(value, /(.+)-inline(.+)/, stylis.WEBKIT + "$1$2") + value;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (stylis.strlen(value) - 1 - length > 6)
              switch (stylis.charat(value, length + 1)) {
                case 109:
                  if (stylis.charat(value, length + 4) !== 45)
                    break;
                case 102:
                  return stylis.replace(value, /(.+:)(.+)-([^]+)/, "$1" + stylis.WEBKIT + "$2-$3$1" + stylis.MOZ + (stylis.charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
                case 115:
                  return ~stylis.indexof(value, "stretch") ? prefix2(stylis.replace(value, "stretch", "fill-available"), length) + value : value;
              }
            break;
          case 4949:
            if (stylis.charat(value, length + 1) !== 115)
              break;
          case 6444:
            switch (stylis.charat(value, stylis.strlen(value) - 3 - (~stylis.indexof(value, "!important") && 10))) {
              case 107:
                return stylis.replace(value, ":", ":" + stylis.WEBKIT) + value;
              case 101:
                return stylis.replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + stylis.WEBKIT + (stylis.charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + stylis.WEBKIT + "$2$3$1" + stylis.MS + "$2box$3") + value;
            }
            break;
          case 5936:
            switch (stylis.charat(value, length + 11)) {
              case 114:
                return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
              case 108:
                return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
              case 45:
                return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
            }
            return stylis.WEBKIT + value + stylis.MS + value + value;
        }
        return value;
      }
      var prefixer = function(element, index2, children, callback) {
        if (element.length > -1 && !element.return)
          switch (element.type) {
            case stylis.DECLARATION:
              element.return = prefix2(element.value, element.length);
              break;
            case stylis.KEYFRAMES:
              return stylis.serialize([stylis.copy(element, { value: stylis.replace(element.value, "@", "@" + stylis.WEBKIT) })], callback);
            case stylis.RULESET:
              if (element.length)
                return stylis.combine(element.props, function(value) {
                  switch (stylis.match(value, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                      return stylis.serialize([stylis.copy(element, { props: [stylis.replace(value, /:(read-\w+)/, ":" + stylis.MOZ + "$1")] })], callback);
                    case "::placeholder":
                      return stylis.serialize([stylis.copy(element, { props: [stylis.replace(value, /:(plac\w+)/, ":" + stylis.WEBKIT + "input-$1")] }), stylis.copy(element, { props: [stylis.replace(value, /:(plac\w+)/, ":" + stylis.MOZ + "$1")] }), stylis.copy(element, { props: [stylis.replace(value, /:(plac\w+)/, stylis.MS + "input-$1")] })], callback);
                  }
                  return "";
                });
          }
      }, isBrowser = typeof document < "u", getServerStylisCache = isBrowser ? void 0 : weakMemoize__default.default(function() {
        return memoize__default.default(function() {
          var cache = {};
          return function(name) {
            return cache[name];
          };
        });
      }), defaultStylisPlugins = [prefixer], createCache2 = function(options) {
        var key = options.key;
        if (isBrowser && key === "css") {
          var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
          Array.prototype.forEach.call(ssrStyles, function(node) {
            var dataEmotionAttribute = node.getAttribute("data-emotion");
            dataEmotionAttribute.indexOf(" ") !== -1 && (document.head.appendChild(node), node.setAttribute("data-s", ""));
          });
        }
        var stylisPlugins = options.stylisPlugins || defaultStylisPlugins, inserted = {}, container, nodesToHydrate = [];
        isBrowser && (container = options.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node) {
          for (var attrib = node.getAttribute("data-emotion").split(" "), i2 = 1; i2 < attrib.length; i2++)
            inserted[attrib[i2]] = true;
          nodesToHydrate.push(node);
        }));
        var _insert, omnipresentPlugins = [compat, removeLabel];
        if (isBrowser) {
          var currentSheet, finalizingPlugins = [stylis.stringify, stylis.rulesheet(function(rule) {
            currentSheet.insert(rule);
          })], serializer = stylis.middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins)), stylis$1 = function(styles) {
            return stylis.serialize(stylis.compile(styles), serializer);
          };
          _insert = function(selector, serialized, sheet2, shouldCache) {
            currentSheet = sheet2, stylis$1(selector ? selector + "{" + serialized.styles + "}" : serialized.styles), shouldCache && (cache.inserted[serialized.name] = true);
          };
        } else {
          var _finalizingPlugins = [stylis.stringify], _serializer = stylis.middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins)), _stylis = function(styles) {
            return stylis.serialize(stylis.compile(styles), _serializer);
          }, serverStylisCache = getServerStylisCache(stylisPlugins)(key), getRules2 = function(selector, serialized) {
            var name = serialized.name;
            return serverStylisCache[name] === void 0 && (serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles)), serverStylisCache[name];
          };
          _insert = function(selector, serialized, sheet2, shouldCache) {
            var name = serialized.name, rules = getRules2(selector, serialized);
            if (cache.compat === void 0)
              return shouldCache && (cache.inserted[name] = true), rules;
            if (shouldCache)
              cache.inserted[name] = rules;
            else
              return rules;
          };
        }
        var cache = { key, sheet: new sheet.StyleSheet({ key, container, nonce: options.nonce, speedy: options.speedy, prepend: options.prepend, insertionPoint: options.insertionPoint }), nonce: options.nonce, inserted, registered: {}, insert: _insert };
        return cache.sheet.hydrate(nodesToHydrate), cache;
      };
      exports.default = createCache2;
    } });
    require_emotion_cache_cjs = __commonJS({ "../../../node_modules/@emotion/cache/dist/emotion-cache.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_cache_cjs_prod();
    } });
    require_extends2 = __commonJS({ "../../../node_modules/@emotion/react/node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
      function _extends22() {
        return module.exports = _extends22 = Object.assign ? Object.assign.bind() : function(target) {
          for (var i2 = 1; i2 < arguments.length; i2++) {
            var source = arguments[i2];
            for (var key in source)
              Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
          }
          return target;
        }, module.exports.__esModule = true, module.exports.default = module.exports, _extends22.apply(this, arguments);
      }
      module.exports = _extends22, module.exports.__esModule = true, module.exports.default = module.exports;
    } });
    require_react_is_production_min = __commonJS({ "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(exports) {
      "use strict";
      var b2 = typeof Symbol == "function" && Symbol.for, c6 = b2 ? Symbol.for("react.element") : 60103, d2 = b2 ? Symbol.for("react.portal") : 60106, e2 = b2 ? Symbol.for("react.fragment") : 60107, f2 = b2 ? Symbol.for("react.strict_mode") : 60108, g2 = b2 ? Symbol.for("react.profiler") : 60114, h2 = b2 ? Symbol.for("react.provider") : 60109, k2 = b2 ? Symbol.for("react.context") : 60110, l2 = b2 ? Symbol.for("react.async_mode") : 60111, m2 = b2 ? Symbol.for("react.concurrent_mode") : 60111, n2 = b2 ? Symbol.for("react.forward_ref") : 60112, p2 = b2 ? Symbol.for("react.suspense") : 60113, q2 = b2 ? Symbol.for("react.suspense_list") : 60120, r2 = b2 ? Symbol.for("react.memo") : 60115, t2 = b2 ? Symbol.for("react.lazy") : 60116, v2 = b2 ? Symbol.for("react.block") : 60121, w2 = b2 ? Symbol.for("react.fundamental") : 60117, x2 = b2 ? Symbol.for("react.responder") : 60118, y2 = b2 ? Symbol.for("react.scope") : 60119;
      function z2(a2) {
        if (typeof a2 == "object" && a2 !== null) {
          var u2 = a2.$$typeof;
          switch (u2) {
            case c6:
              switch (a2 = a2.type, a2) {
                case l2:
                case m2:
                case e2:
                case g2:
                case f2:
                case p2:
                  return a2;
                default:
                  switch (a2 = a2 && a2.$$typeof, a2) {
                    case k2:
                    case n2:
                    case t2:
                    case r2:
                    case h2:
                      return a2;
                    default:
                      return u2;
                  }
              }
            case d2:
              return u2;
          }
        }
      }
      function A2(a2) {
        return z2(a2) === m2;
      }
      exports.AsyncMode = l2;
      exports.ConcurrentMode = m2;
      exports.ContextConsumer = k2;
      exports.ContextProvider = h2;
      exports.Element = c6;
      exports.ForwardRef = n2;
      exports.Fragment = e2;
      exports.Lazy = t2;
      exports.Memo = r2;
      exports.Portal = d2;
      exports.Profiler = g2;
      exports.StrictMode = f2;
      exports.Suspense = p2;
      exports.isAsyncMode = function(a2) {
        return A2(a2) || z2(a2) === l2;
      };
      exports.isConcurrentMode = A2;
      exports.isContextConsumer = function(a2) {
        return z2(a2) === k2;
      };
      exports.isContextProvider = function(a2) {
        return z2(a2) === h2;
      };
      exports.isElement = function(a2) {
        return typeof a2 == "object" && a2 !== null && a2.$$typeof === c6;
      };
      exports.isForwardRef = function(a2) {
        return z2(a2) === n2;
      };
      exports.isFragment = function(a2) {
        return z2(a2) === e2;
      };
      exports.isLazy = function(a2) {
        return z2(a2) === t2;
      };
      exports.isMemo = function(a2) {
        return z2(a2) === r2;
      };
      exports.isPortal = function(a2) {
        return z2(a2) === d2;
      };
      exports.isProfiler = function(a2) {
        return z2(a2) === g2;
      };
      exports.isStrictMode = function(a2) {
        return z2(a2) === f2;
      };
      exports.isSuspense = function(a2) {
        return z2(a2) === p2;
      };
      exports.isValidElementType = function(a2) {
        return typeof a2 == "string" || typeof a2 == "function" || a2 === e2 || a2 === m2 || a2 === g2 || a2 === f2 || a2 === p2 || a2 === q2 || typeof a2 == "object" && a2 !== null && (a2.$$typeof === t2 || a2.$$typeof === r2 || a2.$$typeof === h2 || a2.$$typeof === k2 || a2.$$typeof === n2 || a2.$$typeof === w2 || a2.$$typeof === x2 || a2.$$typeof === y2 || a2.$$typeof === v2);
      };
      exports.typeOf = z2;
    } });
    require_react_is = __commonJS({ "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      module.exports = require_react_is_production_min();
    } });
    require_hoist_non_react_statics_cjs = __commonJS({ "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
      "use strict";
      var reactIs = require_react_is(), REACT_STATICS = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, KNOWN_STATICS = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, FORWARD_REF_STATICS = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, MEMO_STATICS = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, TYPE_STATICS = {};
      TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
      TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
      function getStatics(component) {
        return reactIs.isMemo(component) ? MEMO_STATICS : TYPE_STATICS[component.$$typeof] || REACT_STATICS;
      }
      var defineProperty = Object.defineProperty, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getPrototypeOf = Object.getPrototypeOf, objectPrototype = Object.prototype;
      function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent != "string") {
          if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            inheritedComponent && inheritedComponent !== objectPrototype && hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
          var keys = getOwnPropertyNames(sourceComponent);
          getOwnPropertySymbols && (keys = keys.concat(getOwnPropertySymbols(sourceComponent)));
          for (var targetStatics = getStatics(targetComponent), sourceStatics = getStatics(sourceComponent), i2 = 0; i2 < keys.length; ++i2) {
            var key = keys[i2];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
              var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
              try {
                defineProperty(targetComponent, key, descriptor);
              } catch {
              }
            }
          }
        }
        return targetComponent;
      }
      module.exports = hoistNonReactStatics;
    } });
    require_emotion_react_isolated_hnrs_cjs_prod = __commonJS({ "../../../node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var hoistNonReactStatics$1 = require_hoist_non_react_statics_cjs();
      function _interopDefault(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      var hoistNonReactStatics__default = _interopDefault(hoistNonReactStatics$1), hoistNonReactStatics = function(targetComponent, sourceComponent) {
        return hoistNonReactStatics__default.default(targetComponent, sourceComponent);
      };
      exports.default = hoistNonReactStatics;
    } });
    require_emotion_utils_cjs_prod = __commonJS({ "../../../node_modules/@emotion/utils/dist/emotion-utils.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var isBrowser = typeof document < "u";
      function getRegisteredStyles(registered, registeredStyles, classNames) {
        var rawClassName = "";
        return classNames.split(" ").forEach(function(className) {
          registered[className] !== void 0 ? registeredStyles.push(registered[className] + ";") : rawClassName += className + " ";
        }), rawClassName;
      }
      var registerStyles = function(cache, serialized, isStringTag) {
        var className = cache.key + "-" + serialized.name;
        (isStringTag === false || isBrowser === false && cache.compat !== void 0) && cache.registered[className] === void 0 && (cache.registered[className] = serialized.styles);
      }, insertStyles = function(cache, serialized, isStringTag) {
        registerStyles(cache, serialized, isStringTag);
        var className = cache.key + "-" + serialized.name;
        if (cache.inserted[serialized.name] === void 0) {
          var stylesForSSR = "", current = serialized;
          do {
            var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
            !isBrowser && maybeStyles !== void 0 && (stylesForSSR += maybeStyles), current = current.next;
          } while (current !== void 0);
          if (!isBrowser && stylesForSSR.length !== 0)
            return stylesForSSR;
        }
      };
      exports.getRegisteredStyles = getRegisteredStyles;
      exports.insertStyles = insertStyles;
      exports.registerStyles = registerStyles;
    } });
    require_emotion_utils_cjs = __commonJS({ "../../../node_modules/@emotion/utils/dist/emotion-utils.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_utils_cjs_prod();
    } });
    require_emotion_hash_cjs_prod = __commonJS({ "../../../node_modules/@emotion/serialize/node_modules/@emotion/hash/dist/emotion-hash.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function murmur2(str) {
        for (var h2 = 0, k2, i2 = 0, len = str.length; len >= 4; ++i2, len -= 4)
          k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24, k2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16), k2 ^= k2 >>> 24, h2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
        switch (len) {
          case 3:
            h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
          case 2:
            h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
          case 1:
            h2 ^= str.charCodeAt(i2) & 255, h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
        }
        return h2 ^= h2 >>> 13, h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16), ((h2 ^ h2 >>> 15) >>> 0).toString(36);
      }
      exports.default = murmur2;
    } });
    require_emotion_hash_cjs = __commonJS({ "../../../node_modules/@emotion/serialize/node_modules/@emotion/hash/dist/emotion-hash.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_hash_cjs_prod();
    } });
    require_emotion_unitless_cjs_prod = __commonJS({ "../../../node_modules/@emotion/serialize/node_modules/@emotion/unitless/dist/emotion-unitless.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var unitlessKeys = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
      exports.default = unitlessKeys;
    } });
    require_emotion_unitless_cjs = __commonJS({ "../../../node_modules/@emotion/serialize/node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_unitless_cjs_prod();
    } });
    require_emotion_memoize_cjs_prod3 = __commonJS({ "../../../node_modules/@emotion/serialize/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function memoize3(fn) {
        var cache = /* @__PURE__ */ Object.create(null);
        return function(arg) {
          return cache[arg] === void 0 && (cache[arg] = fn(arg)), cache[arg];
        };
      }
      exports.default = memoize3;
    } });
    require_emotion_memoize_cjs3 = __commonJS({ "../../../node_modules/@emotion/serialize/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_memoize_cjs_prod3();
    } });
    require_emotion_serialize_cjs_prod = __commonJS({ "../../../node_modules/@emotion/serialize/dist/emotion-serialize.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var hashString = require_emotion_hash_cjs(), unitless = require_emotion_unitless_cjs(), memoize3 = require_emotion_memoize_cjs3();
      function _interopDefault(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      var hashString__default = _interopDefault(hashString), unitless__default = _interopDefault(unitless), memoize__default = _interopDefault(memoize3), hyphenateRegex = /[A-Z]|^ms/g, animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g, isCustomProperty = function(property) {
        return property.charCodeAt(1) === 45;
      }, isProcessableValue = function(value) {
        return value != null && typeof value != "boolean";
      }, processStyleName = memoize__default.default(function(styleName) {
        return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
      }), processStyleValue = function(key, value) {
        switch (key) {
          case "animation":
          case "animationName":
            if (typeof value == "string")
              return value.replace(animationRegex, function(match, p1, p2) {
                return cursor = { name: p1, styles: p2, next: cursor }, p1;
              });
        }
        return unitless__default.default[key] !== 1 && !isCustomProperty(key) && typeof value == "number" && value !== 0 ? value + "px" : value;
      };
      function handleInterpolation(mergedProps, registered, interpolation) {
        if (interpolation == null)
          return "";
        if (interpolation.__emotion_styles !== void 0)
          return interpolation;
        switch (typeof interpolation) {
          case "boolean":
            return "";
          case "object": {
            if (interpolation.anim === 1)
              return cursor = { name: interpolation.name, styles: interpolation.styles, next: cursor }, interpolation.name;
            if (interpolation.styles !== void 0) {
              var next = interpolation.next;
              if (next !== void 0)
                for (; next !== void 0; )
                  cursor = { name: next.name, styles: next.styles, next: cursor }, next = next.next;
              var styles = interpolation.styles + ";";
              return styles;
            }
            return createStringFromObject(mergedProps, registered, interpolation);
          }
          case "function": {
            if (mergedProps !== void 0) {
              var previousCursor = cursor, result = interpolation(mergedProps);
              return cursor = previousCursor, handleInterpolation(mergedProps, registered, result);
            }
            break;
          }
        }
        if (registered == null)
          return interpolation;
        var cached = registered[interpolation];
        return cached !== void 0 ? cached : interpolation;
      }
      function createStringFromObject(mergedProps, registered, obj) {
        var string = "";
        if (Array.isArray(obj))
          for (var i2 = 0; i2 < obj.length; i2++)
            string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
        else
          for (var _key in obj) {
            var value = obj[_key];
            if (typeof value != "object")
              registered != null && registered[value] !== void 0 ? string += _key + "{" + registered[value] + "}" : isProcessableValue(value) && (string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";");
            else if (Array.isArray(value) && typeof value[0] == "string" && (registered == null || registered[value[0]] === void 0))
              for (var _i = 0; _i < value.length; _i++)
                isProcessableValue(value[_i]) && (string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";");
            else {
              var interpolated = handleInterpolation(mergedProps, registered, value);
              switch (_key) {
                case "animation":
                case "animationName": {
                  string += processStyleName(_key) + ":" + interpolated + ";";
                  break;
                }
                default:
                  string += _key + "{" + interpolated + "}";
              }
            }
          }
        return string;
      }
      var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g, cursor, serializeStyles = function(args, registered, mergedProps) {
        if (args.length === 1 && typeof args[0] == "object" && args[0] !== null && args[0].styles !== void 0)
          return args[0];
        var stringMode = true, styles = "";
        cursor = void 0;
        var strings = args[0];
        strings == null || strings.raw === void 0 ? (stringMode = false, styles += handleInterpolation(mergedProps, registered, strings)) : styles += strings[0];
        for (var i2 = 1; i2 < args.length; i2++)
          styles += handleInterpolation(mergedProps, registered, args[i2]), stringMode && (styles += strings[i2]);
        labelPattern.lastIndex = 0;
        for (var identifierName = "", match; (match = labelPattern.exec(styles)) !== null; )
          identifierName += "-" + match[1];
        var name = hashString__default.default(styles) + identifierName;
        return { name, styles, next: cursor };
      };
      exports.serializeStyles = serializeStyles;
    } });
    require_emotion_serialize_cjs = __commonJS({ "../../../node_modules/@emotion/serialize/dist/emotion-serialize.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_serialize_cjs_prod();
    } });
    require_emotion_use_insertion_effect_with_fallbacks_cjs_prod = __commonJS({ "../../../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var React6 = (init_react(), __toCommonJS(react_exports));
      function _interopNamespace(e2) {
        if (e2 && e2.__esModule)
          return e2;
        var n2 = /* @__PURE__ */ Object.create(null);
        return e2 && Object.keys(e2).forEach(function(k2) {
          if (k2 !== "default") {
            var d2 = Object.getOwnPropertyDescriptor(e2, k2);
            Object.defineProperty(n2, k2, d2.get ? d2 : { enumerable: true, get: function() {
              return e2[k2];
            } });
          }
        }), n2.default = e2, Object.freeze(n2);
      }
      var React__namespace = _interopNamespace(React6), isBrowser = typeof document < "u", syncFallback = function(create) {
        return create();
      }, useInsertionEffect = React__namespace["useInsertionEffect"] ? React__namespace["useInsertionEffect"] : false, useInsertionEffectAlwaysWithSyncFallback = isBrowser && useInsertionEffect || syncFallback, useInsertionEffectWithLayoutFallback = useInsertionEffect || React6.useLayoutEffect;
      exports.useInsertionEffectAlwaysWithSyncFallback = useInsertionEffectAlwaysWithSyncFallback;
      exports.useInsertionEffectWithLayoutFallback = useInsertionEffectWithLayoutFallback;
    } });
    require_emotion_use_insertion_effect_with_fallbacks_cjs = __commonJS({ "../../../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_use_insertion_effect_with_fallbacks_cjs_prod();
    } });
    require_emotion_element_20108edd_cjs_prod = __commonJS({ "../../../node_modules/@emotion/react/dist/emotion-element-20108edd.cjs.prod.js"(exports) {
      "use strict";
      var React6 = (init_react(), __toCommonJS(react_exports)), createCache2 = require_emotion_cache_cjs(), _extends22 = require_extends2(), weakMemoize = require_emotion_weak_memoize_cjs(), _isolatedHnrs_dist_emotionReact_isolatedHnrs = require_emotion_react_isolated_hnrs_cjs_prod(), utils = require_emotion_utils_cjs(), serialize = require_emotion_serialize_cjs(), useInsertionEffectWithFallbacks = require_emotion_use_insertion_effect_with_fallbacks_cjs();
      function _interopDefault(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      var createCache__default = _interopDefault(createCache2), weakMemoize__default = _interopDefault(weakMemoize), isBrowser = typeof document < "u", hasOwnProperty = {}.hasOwnProperty, EmotionCacheContext = React6.createContext(typeof HTMLElement < "u" ? createCache__default.default({ key: "css" }) : null), CacheProvider2 = EmotionCacheContext.Provider, __unsafe_useEmotionCache = function() {
        return React6.useContext(EmotionCacheContext);
      };
      exports.withEmotionCache = function(func) {
        return React6.forwardRef(function(props2, ref) {
          var cache = React6.useContext(EmotionCacheContext);
          return func(props2, cache, ref);
        });
      };
      isBrowser || (exports.withEmotionCache = function(func) {
        return function(props2) {
          var cache = React6.useContext(EmotionCacheContext);
          return cache === null ? (cache = createCache__default.default({ key: "css" }), React6.createElement(EmotionCacheContext.Provider, { value: cache }, func(props2, cache))) : func(props2, cache);
        };
      });
      var ThemeContext2 = React6.createContext({}), useTheme2 = function() {
        return React6.useContext(ThemeContext2);
      }, getTheme = function(outerTheme, theme) {
        if (typeof theme == "function") {
          var mergedTheme = theme(outerTheme);
          return mergedTheme;
        }
        return _extends22({}, outerTheme, theme);
      }, createCacheWithTheme = weakMemoize__default.default(function(outerTheme) {
        return weakMemoize__default.default(function(theme) {
          return getTheme(outerTheme, theme);
        });
      }), ThemeProvider2 = function(props2) {
        var theme = React6.useContext(ThemeContext2);
        return props2.theme !== theme && (theme = createCacheWithTheme(theme)(props2.theme)), React6.createElement(ThemeContext2.Provider, { value: theme }, props2.children);
      };
      function withTheme2(Component) {
        var componentName = Component.displayName || Component.name || "Component", render = function(props2, ref) {
          var theme = React6.useContext(ThemeContext2);
          return React6.createElement(Component, _extends22({ theme, ref }, props2));
        }, WithTheme = React6.forwardRef(render);
        return WithTheme.displayName = "WithTheme(" + componentName + ")", _isolatedHnrs_dist_emotionReact_isolatedHnrs.default(WithTheme, Component);
      }
      var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", createEmotionProps = function(type, props2) {
        var newProps = {};
        for (var key in props2)
          hasOwnProperty.call(props2, key) && (newProps[key] = props2[key]);
        return newProps[typePropName] = type, newProps;
      }, Insertion = function(_ref) {
        var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
        utils.registerStyles(cache, serialized, isStringTag);
        var rules = useInsertionEffectWithFallbacks.useInsertionEffectAlwaysWithSyncFallback(function() {
          return utils.insertStyles(cache, serialized, isStringTag);
        });
        if (!isBrowser && rules !== void 0) {
          for (var _ref2, serializedNames = serialized.name, next = serialized.next; next !== void 0; )
            serializedNames += " " + next.name, next = next.next;
          return React6.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = { __html: rules }, _ref2.nonce = cache.sheet.nonce, _ref2));
        }
        return null;
      }, Emotion = exports.withEmotionCache(function(props2, cache, ref) {
        var cssProp = props2.css;
        typeof cssProp == "string" && cache.registered[cssProp] !== void 0 && (cssProp = cache.registered[cssProp]);
        var WrappedComponent = props2[typePropName], registeredStyles = [cssProp], className = "";
        typeof props2.className == "string" ? className = utils.getRegisteredStyles(cache.registered, registeredStyles, props2.className) : props2.className != null && (className = props2.className + " ");
        var serialized = serialize.serializeStyles(registeredStyles, void 0, React6.useContext(ThemeContext2));
        className += cache.key + "-" + serialized.name;
        var newProps = {};
        for (var key in props2)
          hasOwnProperty.call(props2, key) && key !== "css" && key !== typePropName && (newProps[key] = props2[key]);
        return newProps.ref = ref, newProps.className = className, React6.createElement(React6.Fragment, null, React6.createElement(Insertion, { cache, serialized, isStringTag: typeof WrappedComponent == "string" }), React6.createElement(WrappedComponent, newProps));
      });
      exports.CacheProvider = CacheProvider2;
      exports.Emotion = Emotion;
      exports.ThemeContext = ThemeContext2;
      exports.ThemeProvider = ThemeProvider2;
      exports.__unsafe_useEmotionCache = __unsafe_useEmotionCache;
      exports.createEmotionProps = createEmotionProps;
      exports.hasOwnProperty = hasOwnProperty;
      exports.isBrowser = isBrowser;
      exports.useTheme = useTheme2;
      exports.withTheme = withTheme2;
    } });
    require_emotion_react_cjs_prod = __commonJS({ "../../../node_modules/@emotion/react/dist/emotion-react.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var React6 = (init_react(), __toCommonJS(react_exports));
      require_emotion_cache_cjs();
      var emotionElement = require_emotion_element_20108edd_cjs_prod();
      require_extends2();
      require_emotion_weak_memoize_cjs();
      require_hoist_non_react_statics_cjs();
      require_emotion_react_isolated_hnrs_cjs_prod();
      var utils = require_emotion_utils_cjs(), serialize = require_emotion_serialize_cjs(), useInsertionEffectWithFallbacks = require_emotion_use_insertion_effect_with_fallbacks_cjs(), jsx = function(type, props2) {
        var args = arguments;
        if (props2 == null || !emotionElement.hasOwnProperty.call(props2, "css"))
          return React6.createElement.apply(void 0, args);
        var argsLength = args.length, createElementArgArray = new Array(argsLength);
        createElementArgArray[0] = emotionElement.Emotion, createElementArgArray[1] = emotionElement.createEmotionProps(type, props2);
        for (var i2 = 2; i2 < argsLength; i2++)
          createElementArgArray[i2] = args[i2];
        return React6.createElement.apply(null, createElementArgArray);
      }, Global2 = emotionElement.withEmotionCache(function(props2, cache) {
        var styles = props2.styles, serialized = serialize.serializeStyles([styles], void 0, React6.useContext(emotionElement.ThemeContext));
        if (!emotionElement.isBrowser) {
          for (var _ref, serializedNames = serialized.name, serializedStyles = serialized.styles, next = serialized.next; next !== void 0; )
            serializedNames += " " + next.name, serializedStyles += next.styles, next = next.next;
          var shouldCache = cache.compat === true, rules = cache.insert("", { name: serializedNames, styles: serializedStyles }, cache.sheet, shouldCache);
          return shouldCache ? null : React6.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = { __html: rules }, _ref.nonce = cache.sheet.nonce, _ref));
        }
        var sheetRef = React6.useRef();
        return useInsertionEffectWithFallbacks.useInsertionEffectWithLayoutFallback(function() {
          var key = cache.key + "-global", sheet = new cache.sheet.constructor({ key, nonce: cache.sheet.nonce, container: cache.sheet.container, speedy: cache.sheet.isSpeedy }), rehydrating = false, node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
          return cache.sheet.tags.length && (sheet.before = cache.sheet.tags[0]), node !== null && (rehydrating = true, node.setAttribute("data-emotion", key), sheet.hydrate([node])), sheetRef.current = [sheet, rehydrating], function() {
            sheet.flush();
          };
        }, [cache]), useInsertionEffectWithFallbacks.useInsertionEffectWithLayoutFallback(function() {
          var sheetRefCurrent = sheetRef.current, sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
          if (rehydrating) {
            sheetRefCurrent[1] = false;
            return;
          }
          if (serialized.next !== void 0 && utils.insertStyles(cache, serialized.next, true), sheet.tags.length) {
            var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
            sheet.before = element, sheet.flush();
          }
          cache.insert("", serialized, sheet, false);
        }, [cache, serialized.name]), null;
      });
      function css5() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
          args[_key] = arguments[_key];
        return serialize.serializeStyles(args);
      }
      var keyframes2 = function() {
        var insertable = css5.apply(void 0, arguments), name = "animation-" + insertable.name;
        return { name, styles: "@keyframes " + name + "{" + insertable.styles + "}", anim: 1, toString: function() {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        } };
      }, classnames = function classnames2(args) {
        for (var len = args.length, i2 = 0, cls = ""; i2 < len; i2++) {
          var arg = args[i2];
          if (arg != null) {
            var toAdd = void 0;
            switch (typeof arg) {
              case "boolean":
                break;
              case "object": {
                if (Array.isArray(arg))
                  toAdd = classnames2(arg);
                else {
                  toAdd = "";
                  for (var k2 in arg)
                    arg[k2] && k2 && (toAdd && (toAdd += " "), toAdd += k2);
                }
                break;
              }
              default:
                toAdd = arg;
            }
            toAdd && (cls && (cls += " "), cls += toAdd);
          }
        }
        return cls;
      };
      function merge3(registered, css6, className) {
        var registeredStyles = [], rawClassName = utils.getRegisteredStyles(registered, registeredStyles, className);
        return registeredStyles.length < 2 ? className : rawClassName + css6(registeredStyles);
      }
      var Insertion = function(_ref) {
        var cache = _ref.cache, serializedArr = _ref.serializedArr, rules = useInsertionEffectWithFallbacks.useInsertionEffectAlwaysWithSyncFallback(function() {
          for (var rules2 = "", i2 = 0; i2 < serializedArr.length; i2++) {
            var res = utils.insertStyles(cache, serializedArr[i2], false);
            !emotionElement.isBrowser && res !== void 0 && (rules2 += res);
          }
          if (!emotionElement.isBrowser)
            return rules2;
        });
        if (!emotionElement.isBrowser && rules.length !== 0) {
          var _ref2;
          return React6.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedArr.map(function(serialized) {
            return serialized.name;
          }).join(" "), _ref2.dangerouslySetInnerHTML = { __html: rules }, _ref2.nonce = cache.sheet.nonce, _ref2));
        }
        return null;
      }, ClassNames = emotionElement.withEmotionCache(function(props2, cache) {
        var hasRendered = false, serializedArr = [], css6 = function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
            args[_key] = arguments[_key];
          var serialized = serialize.serializeStyles(args, cache.registered);
          return serializedArr.push(serialized), utils.registerStyles(cache, serialized, false), cache.key + "-" + serialized.name;
        }, cx = function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
            args[_key2] = arguments[_key2];
          return merge3(cache.registered, css6, classnames(args));
        }, content = { css: css6, cx, theme: React6.useContext(emotionElement.ThemeContext) }, ele = props2.children(content);
        return hasRendered = true, React6.createElement(React6.Fragment, null, React6.createElement(Insertion, { cache, serializedArr }), ele);
      });
      exports.CacheProvider = emotionElement.CacheProvider;
      exports.ThemeContext = emotionElement.ThemeContext;
      exports.ThemeProvider = emotionElement.ThemeProvider;
      exports.__unsafe_useEmotionCache = emotionElement.__unsafe_useEmotionCache;
      exports.useTheme = emotionElement.useTheme;
      Object.defineProperty(exports, "withEmotionCache", { enumerable: true, get: function() {
        return emotionElement.withEmotionCache;
      } });
      exports.withTheme = emotionElement.withTheme;
      exports.ClassNames = ClassNames;
      exports.Global = Global2;
      exports.createElement = jsx;
      exports.css = css5;
      exports.jsx = jsx;
      exports.keyframes = keyframes2;
    } });
    require_emotion_react_cjs = __commonJS({ "../../../node_modules/@emotion/react/dist/emotion-react.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_react_cjs_prod();
    } });
    require_emotion_styled_base_cjs_prod = __commonJS({ "../../../node_modules/@emotion/styled/base/dist/emotion-styled-base.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var _extends22 = require_extends(), React6 = (init_react(), __toCommonJS(react_exports)), isPropValid = require_emotion_is_prop_valid_cjs(), react = require_emotion_react_cjs(), utils = require_emotion_utils_cjs(), serialize = require_emotion_serialize_cjs(), useInsertionEffectWithFallbacks = require_emotion_use_insertion_effect_with_fallbacks_cjs();
      function _interopDefault(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      var isPropValid__default = _interopDefault(isPropValid), testOmitPropsOnStringTag = isPropValid__default.default, testOmitPropsOnComponent = function(key) {
        return key !== "theme";
      }, getDefaultShouldForwardProp = function(tag) {
        return typeof tag == "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
      }, composeShouldForwardProps = function(tag, options, isReal) {
        var shouldForwardProp;
        if (options) {
          var optionsShouldForwardProp = options.shouldForwardProp;
          shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
            return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
          } : optionsShouldForwardProp;
        }
        return typeof shouldForwardProp != "function" && isReal && (shouldForwardProp = tag.__emotion_forwardProp), shouldForwardProp;
      }, isBrowser = typeof document < "u", Insertion = function(_ref) {
        var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
        utils.registerStyles(cache, serialized, isStringTag);
        var rules = useInsertionEffectWithFallbacks.useInsertionEffectAlwaysWithSyncFallback(function() {
          return utils.insertStyles(cache, serialized, isStringTag);
        });
        if (!isBrowser && rules !== void 0) {
          for (var _ref2, serializedNames = serialized.name, next = serialized.next; next !== void 0; )
            serializedNames += " " + next.name, next = next.next;
          return React6.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = { __html: rules }, _ref2.nonce = cache.sheet.nonce, _ref2));
        }
        return null;
      }, createStyled = function createStyled2(tag, options) {
        var isReal = tag.__emotion_real === tag, baseTag = isReal && tag.__emotion_base || tag, identifierName, targetClassName;
        options !== void 0 && (identifierName = options.label, targetClassName = options.target);
        var shouldForwardProp = composeShouldForwardProps(tag, options, isReal), defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag), shouldUseAs = !defaultShouldForwardProp("as");
        return function() {
          var args = arguments, styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
          if (identifierName !== void 0 && styles.push("label:" + identifierName + ";"), args[0] == null || args[0].raw === void 0)
            styles.push.apply(styles, args);
          else {
            styles.push(args[0][0]);
            for (var len = args.length, i2 = 1; i2 < len; i2++)
              styles.push(args[i2], args[0][i2]);
          }
          var Styled = react.withEmotionCache(function(props2, cache, ref) {
            var FinalTag = shouldUseAs && props2.as || baseTag, className = "", classInterpolations = [], mergedProps = props2;
            if (props2.theme == null) {
              mergedProps = {};
              for (var key in props2)
                mergedProps[key] = props2[key];
              mergedProps.theme = React6.useContext(react.ThemeContext);
            }
            typeof props2.className == "string" ? className = utils.getRegisteredStyles(cache.registered, classInterpolations, props2.className) : props2.className != null && (className = props2.className + " ");
            var serialized = serialize.serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
            className += cache.key + "-" + serialized.name, targetClassName !== void 0 && (className += " " + targetClassName);
            var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp, newProps = {};
            for (var _key in props2)
              shouldUseAs && _key === "as" || finalShouldForwardProp(_key) && (newProps[_key] = props2[_key]);
            return newProps.className = className, newProps.ref = ref, React6.createElement(React6.Fragment, null, React6.createElement(Insertion, { cache, serialized, isStringTag: typeof FinalTag == "string" }), React6.createElement(FinalTag, newProps));
          });
          return Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag == "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")", Styled.defaultProps = tag.defaultProps, Styled.__emotion_real = Styled, Styled.__emotion_base = baseTag, Styled.__emotion_styles = styles, Styled.__emotion_forwardProp = shouldForwardProp, Object.defineProperty(Styled, "toString", { value: function() {
            return "." + targetClassName;
          } }), Styled.withComponent = function(nextTag, nextOptions) {
            return createStyled2(nextTag, _extends22({}, options, nextOptions, { shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true) })).apply(void 0, styles);
          }, Styled;
        };
      };
      exports.default = createStyled;
    } });
    require_emotion_styled_cjs_prod = __commonJS({ "../../../node_modules/@emotion/styled/dist/emotion-styled.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      require_extends();
      init_react();
      require_emotion_is_prop_valid_cjs();
      var base_dist_emotionStyledBase = require_emotion_styled_base_cjs_prod();
      require_emotion_react_cjs();
      require_emotion_utils_cjs();
      require_emotion_serialize_cjs();
      require_emotion_use_insertion_effect_with_fallbacks_cjs();
      var tags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], newStyled = base_dist_emotionStyledBase.default.bind();
      tags.forEach(function(tagName) {
        newStyled[tagName] = newStyled(tagName);
      });
      exports.default = newStyled;
    } });
    require_emotion_styled_cjs = __commonJS({ "../../../node_modules/@emotion/styled/dist/emotion-styled.cjs.js"(exports, module) {
      "use strict";
      module.exports = require_emotion_styled_cjs_prod();
    } });
    require_object_assign = __commonJS({ "../../../node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val == null)
          throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign)
            return false;
          var test1 = new String("abc");
          if (test1[5] = "de", Object.getOwnPropertyNames(test1)[0] === "5")
            return false;
          for (var test2 = {}, i2 = 0; i2 < 10; i2++)
            test2["_" + String.fromCharCode(i2)] = i2;
          var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
            return test2[n2];
          });
          if (order2.join("") !== "0123456789")
            return false;
          var test3 = {};
          return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          }), Object.keys(Object.assign({}, test3)).join("") === "abcdefghijklmnopqrst";
        } catch {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        for (var from, to2 = toObject(target), symbols, s2 = 1; s2 < arguments.length; s2++) {
          from = Object(arguments[s2]);
          for (var key in from)
            hasOwnProperty.call(from, key) && (to2[key] = from[key]);
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i2 = 0; i2 < symbols.length; i2++)
              propIsEnumerable.call(from, symbols[i2]) && (to2[symbols[i2]] = from[symbols[i2]]);
          }
        }
        return to2;
      };
    } });
    import_styled = __toESM2(require_emotion_styled_cjs());
    import_cache = __toESM2(require_emotion_cache_cjs());
    get = (object, key, fallback) => {
      let keyAsArray = key && typeof key == "string" ? key.split(".") : [key], values = object;
      return keyAsArray.forEach((k2) => {
        values = values ? values[k2] : void 0;
      }), values === void 0 ? fallback : values;
    };
    defaultBreakpoints = [40, 52, 64].map((n2) => `${n2}em`);
    defaultTheme = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512], fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72] };
    aliases = { bg: "backgroundColor", m: "margin", mt: "marginTop", mr: "marginRight", mb: "marginBottom", ml: "marginLeft", mx: "marginX", my: "marginY", p: "padding", pt: "paddingTop", pr: "paddingRight", pb: "paddingBottom", pl: "paddingLeft", px: "paddingX", py: "paddingY" };
    multiples = { marginX: ["marginLeft", "marginRight"], marginY: ["marginTop", "marginBottom"], paddingX: ["paddingLeft", "paddingRight"], paddingY: ["paddingTop", "paddingBottom"], size: ["width", "height"] };
    scales = { color: "textColors", backgroundColor: "backgroundColors", borderColor: "borderColors", margin: "space", marginTop: "space", marginRight: "space", marginBottom: "space", marginLeft: "space", marginX: "space", marginY: "space", padding: "space", paddingTop: "space", paddingRight: "space", paddingBottom: "space", paddingLeft: "space", paddingX: "space", paddingY: "space", top: "space", right: "space", bottom: "space", left: "space", gridGap: "space", gridColumnGap: "space", gridRowGap: "space", gap: "space", columnGap: "space", rowGap: "space", fontFamily: "fonts", fontSize: "fontSizes", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", border: "borders", borderTop: "borders", borderRight: "borders", borderBottom: "borders", borderLeft: "borders", borderWidth: "borderWidths", borderStyle: "borderStyles", borderRadius: "radii", borderTopRightRadius: "radii", borderTopLeftRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", borderTopWidth: "borderWidths", borderTopColor: "borderColors", borderTopStyle: "borderStyles", borderBottomWidth: "borderWidths", borderBottomColor: "borderColors", borderBottomStyle: "borderStyles", borderLeftWidth: "borderWidths", borderLeftColor: "borderColors", borderLeftStyle: "borderStyles", borderRightWidth: "borderWidths", borderRightColor: "borderColors", borderRightStyle: "borderStyles", outlineColor: "outlineColors", boxShadow: "shadows", textShadow: "shadows", zIndex: "zIndices", width: "sizes", minWidth: "sizes", maxWidth: "sizes", height: "sizes", minHeight: "sizes", maxHeight: "sizes", flexBasis: "sizes", size: "sizes", "-webkit-text-fill-color": "textColors", fill: "fillColors", stroke: "strokeColors", colorScheme: "colorSchemes" };
    positiveOrNegative = (scale, value) => {
      if (typeof value != "number" || value >= 0)
        return get(scale, value, value);
      let absolute = Math.abs(value), n2 = get(scale, absolute, absolute);
      return typeof n2 == "string" ? `-${n2}` : n2 * -1;
    };
    transforms = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce((acc, curr) => ({ ...acc, [curr]: positiveOrNegative }), {});
    responsive = (styles) => (theme) => {
      let next = {}, mediaQueries = [null, ...get(theme, "breakpoints", defaultBreakpoints).map((n2) => `@media screen and (min-width: ${n2})`)];
      for (let key in styles) {
        let value = typeof styles[key] == "function" ? styles[key](theme) : styles[key];
        if (value != null) {
          if (!Array.isArray(value)) {
            next[key] = value;
            continue;
          }
          for (let i2 = 0; i2 < value.slice(0, mediaQueries.length).length; i2++) {
            let media = mediaQueries[i2];
            if (!media) {
              next[key] = value[i2];
              continue;
            }
            next[media] = next[media] || {}, value[i2] != null && (next[media][key] = value[i2]);
          }
        }
      }
      return next;
    };
    css = (args) => (props2 = {}) => {
      let theme = { ...defaultTheme, ...props2.theme || props2 }, result = {}, obj = typeof args == "function" ? args(theme) : args, styles = responsive(obj)(theme);
      for (let key in styles) {
        let x2 = styles[key], val = typeof x2 == "function" ? x2(theme) : x2;
        if (key === "variant") {
          let variant3 = css(get(theme, val))(theme);
          result = { ...result, ...variant3 };
          continue;
        }
        if (val && typeof val == "object") {
          result[key] = css(val)(theme);
          continue;
        }
        let prop = get(aliases, key, key), scaleName = get(scales, prop), scale = get(theme, scaleName, get(theme, prop, {})), value = get(transforms, prop, get)(scale, val, val);
        if (multiples[prop]) {
          let dirs = multiples[prop];
          for (let dir of dirs)
            result[dir] = value;
        } else
          result[prop] = value;
      }
      return result;
    };
    import_object_assign = __toESM2(require_object_assign());
    merge = function(a2, b2) {
      var result = (0, import_object_assign.default)({}, a2, b2);
      for (var key in a2) {
        var _assign;
        !a2[key] || typeof b2[key] != "object" || (0, import_object_assign.default)(result, (_assign = {}, _assign[key] = (0, import_object_assign.default)(a2[key], b2[key]), _assign));
      }
      return result;
    };
    sort = function(obj) {
      var next = {};
      return Object.keys(obj).sort(function(a2, b2) {
        return a2.localeCompare(b2, void 0, { numeric: true, sensitivity: "base" });
      }).forEach(function(key) {
        next[key] = obj[key];
      }), next;
    };
    defaults2 = { breakpoints: [40, 52, 64].map(function(n2) {
      return n2 + "em";
    }) };
    createMediaQuery = function(n2) {
      return "@media screen and (min-width: " + n2 + ")";
    };
    getValue = function(n2, scale) {
      return get2(scale, n2, n2);
    };
    get2 = function(obj, key, def, p2, undef) {
      for (key = key && key.split ? key.split(".") : [key], p2 = 0; p2 < key.length; p2++)
        obj = obj ? obj[key[p2]] : undef;
      return obj === undef ? def : obj;
    };
    createParser = function createParser2(config9) {
      var cache = {}, parse = function(props2) {
        var styles = {}, shouldSort = false, isCacheDisabled = props2.theme && props2.theme.disableStyledSystemCache;
        for (var key in props2)
          if (!!config9[key]) {
            var sx = config9[key], raw = props2[key], scale = get2(props2.theme, sx.scale, sx.defaults);
            if (typeof raw == "object") {
              if (cache.breakpoints = !isCacheDisabled && cache.breakpoints || get2(props2.theme, "breakpoints", defaults2.breakpoints), Array.isArray(raw)) {
                cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery)), styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props2));
                continue;
              }
              raw !== null && (styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props2)), shouldSort = true);
              continue;
            }
            (0, import_object_assign.default)(styles, sx(raw, scale, props2));
          }
        return shouldSort && (styles = sort(styles)), styles;
      };
      parse.config = config9, parse.propNames = Object.keys(config9), parse.cache = cache;
      var keys = Object.keys(config9).filter(function(k2) {
        return k2 !== "config";
      });
      return keys.length > 1 && keys.forEach(function(key) {
        var _createParser;
        parse[key] = createParser2((_createParser = {}, _createParser[key] = config9[key], _createParser));
      }), parse;
    };
    parseResponsiveStyle = function(mediaQueries, sx, scale, raw, _props) {
      var styles = {};
      return raw.slice(0, mediaQueries.length).forEach(function(value, i2) {
        var media = mediaQueries[i2], style3 = sx(value, scale, _props);
        if (!media)
          (0, import_object_assign.default)(styles, style3);
        else {
          var _assign2;
          (0, import_object_assign.default)(styles, (_assign2 = {}, _assign2[media] = (0, import_object_assign.default)({}, styles[media], style3), _assign2));
        }
      }), styles;
    };
    parseResponsiveObject = function(breakpoints, sx, scale, raw, _props) {
      var styles = {};
      for (var key in raw) {
        var breakpoint = breakpoints[key], value = raw[key], style3 = sx(value, scale, _props);
        if (!breakpoint)
          (0, import_object_assign.default)(styles, style3);
        else {
          var _assign3, media = createMediaQuery(breakpoint);
          (0, import_object_assign.default)(styles, (_assign3 = {}, _assign3[media] = (0, import_object_assign.default)({}, styles[media], style3), _assign3));
        }
      }
      return styles;
    };
    createStyleFunction = function(_ref) {
      var properties = _ref.properties, property = _ref.property, scale = _ref.scale, _ref$transform = _ref.transform, transform = _ref$transform === void 0 ? getValue : _ref$transform, defaultScale = _ref.defaultScale;
      properties = properties || [property];
      var sx = function(value, scale2, _props) {
        var result = {}, n2 = transform(value, scale2, _props);
        if (n2 !== null)
          return properties.forEach(function(prop) {
            result[prop] = n2;
          }), result;
      };
      return sx.scale = scale, sx.defaults = defaultScale, sx;
    };
    system = function(args) {
      args === void 0 && (args = {});
      var config9 = {};
      Object.keys(args).forEach(function(key) {
        var conf = args[key];
        if (conf === true) {
          config9[key] = createStyleFunction({ property: key, scale: key });
          return;
        }
        if (typeof conf == "function") {
          config9[key] = conf;
          return;
        }
        config9[key] = createStyleFunction(conf);
      });
      var parser = createParser(config9);
      return parser;
    };
    compose = function() {
      for (var config9 = {}, _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++)
        parsers[_key] = arguments[_key];
      parsers.forEach(function(parser2) {
        !parser2 || !parser2.config || (0, import_object_assign.default)(config9, parser2.config);
      });
      var parser = createParser(config9);
      return parser;
    };
    themeGet = function(path, fallback) {
      return fallback === void 0 && (fallback = null), function(props2) {
        return get2(props2.theme, path, fallback);
      };
    };
    emotion_memoize_browser_esm_default = memoize;
    memoize_browser_esm_default = memoize2;
    reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    index = memoize_browser_esm_default(function(prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    });
    is_prop_valid_browser_esm_default = index;
    isNumber = function(n2) {
      return typeof n2 == "number" && !isNaN(n2);
    };
    getWidth = function(n2, scale) {
      return get2(scale, n2, !isNumber(n2) || n2 > 1 ? n2 : n2 * 100 + "%");
    };
    config2 = { width: { property: "width", scale: "sizes", transform: getWidth }, height: { property: "height", scale: "sizes" }, minWidth: { property: "minWidth", scale: "sizes" }, minHeight: { property: "minHeight", scale: "sizes" }, maxWidth: { property: "maxWidth", scale: "sizes" }, maxHeight: { property: "maxHeight", scale: "sizes" }, size: { properties: ["width", "height"], scale: "sizes" }, overflow: true, overflowX: true, overflowY: true, display: true, verticalAlign: true };
    layout = system(config2);
    index_esm_default = layout;
    config22 = { color: { property: "color", scale: "colors" }, backgroundColor: { property: "backgroundColor", scale: "colors" }, opacity: true };
    config22.bg = config22.backgroundColor;
    color = system(config22);
    index_esm_default2 = color;
    defaults22 = { fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72] };
    config3 = { fontFamily: { property: "fontFamily", scale: "fonts" }, fontSize: { property: "fontSize", scale: "fontSizes", defaultScale: defaults22.fontSizes }, fontWeight: { property: "fontWeight", scale: "fontWeights" }, lineHeight: { property: "lineHeight", scale: "lineHeights" }, letterSpacing: { property: "letterSpacing", scale: "letterSpacings" }, textAlign: true, fontStyle: true };
    typography = system(config3);
    index_esm_default3 = typography;
    config4 = { alignItems: true, alignContent: true, justifyItems: true, justifyContent: true, flexWrap: true, flexDirection: true, flex: true, flexGrow: true, flexShrink: true, flexBasis: true, justifySelf: true, alignSelf: true, order: true };
    flexbox = system(config4);
    index_esm_default4 = flexbox;
    defaults3 = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] };
    config5 = { gridGap: { property: "gridGap", scale: "space", defaultScale: defaults3.space }, gridColumnGap: { property: "gridColumnGap", scale: "space", defaultScale: defaults3.space }, gridRowGap: { property: "gridRowGap", scale: "space", defaultScale: defaults3.space }, gridColumn: true, gridRow: true, gridAutoFlow: true, gridAutoColumns: true, gridAutoRows: true, gridTemplateColumns: true, gridTemplateRows: true, gridTemplateAreas: true, gridArea: true };
    grid = system(config5);
    index_esm_default5 = grid;
    config6 = { border: { property: "border", scale: "borders" }, borderWidth: { property: "borderWidth", scale: "borderWidths" }, borderStyle: { property: "borderStyle", scale: "borderStyles" }, borderColor: { property: "borderColor", scale: "colors" }, borderRadius: { property: "borderRadius", scale: "radii" }, borderTop: { property: "borderTop", scale: "borders" }, borderTopLeftRadius: { property: "borderTopLeftRadius", scale: "radii" }, borderTopRightRadius: { property: "borderTopRightRadius", scale: "radii" }, borderRight: { property: "borderRight", scale: "borders" }, borderBottom: { property: "borderBottom", scale: "borders" }, borderBottomLeftRadius: { property: "borderBottomLeftRadius", scale: "radii" }, borderBottomRightRadius: { property: "borderBottomRightRadius", scale: "radii" }, borderLeft: { property: "borderLeft", scale: "borders" }, borderX: { properties: ["borderLeft", "borderRight"], scale: "borders" }, borderY: { properties: ["borderTop", "borderBottom"], scale: "borders" } };
    config6.borderTopWidth = { property: "borderTopWidth", scale: "borderWidths" };
    config6.borderTopColor = { property: "borderTopColor", scale: "colors" };
    config6.borderTopStyle = { property: "borderTopStyle", scale: "borderStyles" };
    config6.borderTopLeftRadius = { property: "borderTopLeftRadius", scale: "radii" };
    config6.borderTopRightRadius = { property: "borderTopRightRadius", scale: "radii" };
    config6.borderBottomWidth = { property: "borderBottomWidth", scale: "borderWidths" };
    config6.borderBottomColor = { property: "borderBottomColor", scale: "colors" };
    config6.borderBottomStyle = { property: "borderBottomStyle", scale: "borderStyles" };
    config6.borderBottomLeftRadius = { property: "borderBottomLeftRadius", scale: "radii" };
    config6.borderBottomRightRadius = { property: "borderBottomRightRadius", scale: "radii" };
    config6.borderLeftWidth = { property: "borderLeftWidth", scale: "borderWidths" };
    config6.borderLeftColor = { property: "borderLeftColor", scale: "colors" };
    config6.borderLeftStyle = { property: "borderLeftStyle", scale: "borderStyles" };
    config6.borderRightWidth = { property: "borderRightWidth", scale: "borderWidths" };
    config6.borderRightColor = { property: "borderRightColor", scale: "colors" };
    config6.borderRightStyle = { property: "borderRightStyle", scale: "borderStyles" };
    border = system(config6);
    index_esm_default6 = border;
    config7 = { background: true, backgroundImage: true, backgroundSize: true, backgroundPosition: true, backgroundRepeat: true };
    config7.bgImage = config7.backgroundImage;
    config7.bgSize = config7.backgroundSize;
    config7.bgPosition = config7.backgroundPosition;
    config7.bgRepeat = config7.backgroundRepeat;
    background = system(config7);
    index_esm_default7 = background;
    defaults4 = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] };
    config8 = { position: true, zIndex: { property: "zIndex", scale: "zIndices" }, top: { property: "top", scale: "space", defaultScale: defaults4.space }, right: { property: "right", scale: "space", defaultScale: defaults4.space }, bottom: { property: "bottom", scale: "space", defaultScale: defaults4.space }, left: { property: "left", scale: "space", defaultScale: defaults4.space } };
    position = system(config8);
    index_esm_default8 = position;
    defaults5 = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] };
    isNumber3 = function(n2) {
      return typeof n2 == "number" && !isNaN(n2);
    };
    getMargin = function(n2, scale) {
      if (!isNumber3(n2))
        return get2(scale, n2, n2);
      var isNegative = n2 < 0, absolute = Math.abs(n2), value = get2(scale, absolute, absolute);
      return isNumber3(value) ? value * (isNegative ? -1 : 1) : isNegative ? "-" + value : value;
    };
    configs = {};
    configs.margin = { margin: { property: "margin", scale: "space", transform: getMargin, defaultScale: defaults5.space }, marginTop: { property: "marginTop", scale: "space", transform: getMargin, defaultScale: defaults5.space }, marginRight: { property: "marginRight", scale: "space", transform: getMargin, defaultScale: defaults5.space }, marginBottom: { property: "marginBottom", scale: "space", transform: getMargin, defaultScale: defaults5.space }, marginLeft: { property: "marginLeft", scale: "space", transform: getMargin, defaultScale: defaults5.space }, marginX: { properties: ["marginLeft", "marginRight"], scale: "space", transform: getMargin, defaultScale: defaults5.space }, marginY: { properties: ["marginTop", "marginBottom"], scale: "space", transform: getMargin, defaultScale: defaults5.space } };
    configs.margin.m = configs.margin.margin;
    configs.margin.mt = configs.margin.marginTop;
    configs.margin.mr = configs.margin.marginRight;
    configs.margin.mb = configs.margin.marginBottom;
    configs.margin.ml = configs.margin.marginLeft;
    configs.margin.mx = configs.margin.marginX;
    configs.margin.my = configs.margin.marginY;
    configs.padding = { padding: { property: "padding", scale: "space", defaultScale: defaults5.space }, paddingTop: { property: "paddingTop", scale: "space", defaultScale: defaults5.space }, paddingRight: { property: "paddingRight", scale: "space", defaultScale: defaults5.space }, paddingBottom: { property: "paddingBottom", scale: "space", defaultScale: defaults5.space }, paddingLeft: { property: "paddingLeft", scale: "space", defaultScale: defaults5.space }, paddingX: { properties: ["paddingLeft", "paddingRight"], scale: "space", defaultScale: defaults5.space }, paddingY: { properties: ["paddingTop", "paddingBottom"], scale: "space", defaultScale: defaults5.space } };
    configs.padding.p = configs.padding.padding;
    configs.padding.pt = configs.padding.paddingTop;
    configs.padding.pr = configs.padding.paddingRight;
    configs.padding.pb = configs.padding.paddingBottom;
    configs.padding.pl = configs.padding.paddingLeft;
    configs.padding.px = configs.padding.paddingX;
    configs.padding.py = configs.padding.paddingY;
    margin = system(configs.margin);
    padding = system(configs.padding);
    space = compose(margin, padding);
    shadow = system({ boxShadow: { property: "boxShadow", scale: "shadows" }, textShadow: { property: "textShadow", scale: "shadows" } });
    index_esm_default9 = shadow;
    get4 = function(obj, key, def, p2, undef) {
      for (key = key && key.split ? key.split(".") : [key], p2 = 0; p2 < key.length; p2++)
        obj = obj ? obj[key[p2]] : undef;
      return obj === undef ? def : obj;
    };
    defaultBreakpoints2 = [40, 52, 64].map(function(n2) {
      return n2 + "em";
    });
    defaultTheme2 = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512], fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72] };
    aliases2 = { bg: "backgroundColor", m: "margin", mt: "marginTop", mr: "marginRight", mb: "marginBottom", ml: "marginLeft", mx: "marginX", my: "marginY", p: "padding", pt: "paddingTop", pr: "paddingRight", pb: "paddingBottom", pl: "paddingLeft", px: "paddingX", py: "paddingY" };
    multiples2 = { marginX: ["marginLeft", "marginRight"], marginY: ["marginTop", "marginBottom"], paddingX: ["paddingLeft", "paddingRight"], paddingY: ["paddingTop", "paddingBottom"], size: ["width", "height"] };
    scales2 = { color: "colors", backgroundColor: "colors", borderColor: "colors", margin: "space", marginTop: "space", marginRight: "space", marginBottom: "space", marginLeft: "space", marginX: "space", marginY: "space", padding: "space", paddingTop: "space", paddingRight: "space", paddingBottom: "space", paddingLeft: "space", paddingX: "space", paddingY: "space", top: "space", right: "space", bottom: "space", left: "space", gridGap: "space", gridColumnGap: "space", gridRowGap: "space", gap: "space", columnGap: "space", rowGap: "space", fontFamily: "fonts", fontSize: "fontSizes", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", border: "borders", borderTop: "borders", borderRight: "borders", borderBottom: "borders", borderLeft: "borders", borderWidth: "borderWidths", borderStyle: "borderStyles", borderRadius: "radii", borderTopRightRadius: "radii", borderTopLeftRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", borderTopWidth: "borderWidths", borderTopColor: "colors", borderTopStyle: "borderStyles", borderBottomWidth: "borderWidths", borderBottomColor: "colors", borderBottomStyle: "borderStyles", borderLeftWidth: "borderWidths", borderLeftColor: "colors", borderLeftStyle: "borderStyles", borderRightWidth: "borderWidths", borderRightColor: "colors", borderRightStyle: "borderStyles", outlineColor: "colors", boxShadow: "shadows", textShadow: "shadows", zIndex: "zIndices", width: "sizes", minWidth: "sizes", maxWidth: "sizes", height: "sizes", minHeight: "sizes", maxHeight: "sizes", flexBasis: "sizes", size: "sizes", fill: "colors", stroke: "colors" };
    positiveOrNegative2 = function(scale, value) {
      if (typeof value != "number" || value >= 0)
        return get4(scale, value, value);
      var absolute = Math.abs(value), n2 = get4(scale, absolute, absolute);
      return typeof n2 == "string" ? "-" + n2 : n2 * -1;
    };
    transforms2 = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function(acc, curr) {
      var _extends22;
      return _extends4({}, acc, (_extends22 = {}, _extends22[curr] = positiveOrNegative2, _extends22));
    }, {});
    responsive2 = function(styles) {
      return function(theme) {
        var next = {}, breakpoints = get4(theme, "breakpoints", defaultBreakpoints2), mediaQueries = [null].concat(breakpoints.map(function(n2) {
          return "@media screen and (min-width: " + n2 + ")";
        }));
        for (var key in styles) {
          var value = typeof styles[key] == "function" ? styles[key](theme) : styles[key];
          if (value != null) {
            if (!Array.isArray(value)) {
              next[key] = value;
              continue;
            }
            for (var i2 = 0; i2 < value.slice(0, mediaQueries.length).length; i2++) {
              var media = mediaQueries[i2];
              if (!media) {
                next[key] = value[i2];
                continue;
              }
              next[media] = next[media] || {}, value[i2] != null && (next[media][key] = value[i2]);
            }
          }
        }
        return next;
      };
    };
    css2 = function css3(args) {
      return function(props2) {
        props2 === void 0 && (props2 = {});
        var theme = _extends4({}, defaultTheme2, {}, props2.theme || props2), result = {}, obj = typeof args == "function" ? args(theme) : args, styles = responsive2(obj)(theme);
        for (var key in styles) {
          var x2 = styles[key], val = typeof x2 == "function" ? x2(theme) : x2;
          if (key === "variant") {
            var variant3 = css3(get4(theme, val))(theme);
            result = _extends4({}, result, {}, variant3);
            continue;
          }
          if (val && typeof val == "object") {
            result[key] = css3(val)(theme);
            continue;
          }
          var prop = get4(aliases2, key, key), scaleName = get4(scales2, prop), scale = get4(theme, scaleName, get4(theme, prop, {})), transform = get4(transforms2, prop, get4), value = transform(scale, val, val);
          if (multiples2[prop])
            for (var dirs = multiples2[prop], i2 = 0; i2 < dirs.length; i2++)
              result[dirs[i2]] = value;
          else
            result[prop] = value;
        }
        return result;
      };
    };
    index_esm_default10 = css2;
    variant = function(_ref) {
      var _config, scale = _ref.scale, _ref$prop = _ref.prop, prop = _ref$prop === void 0 ? "variant" : _ref$prop, _ref$variants = _ref.variants, variants = _ref$variants === void 0 ? {} : _ref$variants, key = _ref.key, sx;
      Object.keys(variants).length ? sx = function(value, scale2, props2) {
        return index_esm_default10(get2(scale2, value, null))(props2.theme);
      } : sx = function(value, scale2) {
        return get2(scale2, value, null);
      }, sx.scale = scale || key, sx.defaults = variants;
      var config9 = (_config = {}, _config[prop] = sx, _config), parser = createParser(config9);
      return parser;
    };
    buttonStyle = variant({ key: "buttons" });
    textStyle = variant({ key: "textStyles", prop: "textStyle" });
    colorStyle = variant({ key: "colorStyles", prop: "colors" });
    width = index_esm_default.width;
    height = index_esm_default.height;
    minWidth = index_esm_default.minWidth;
    minHeight = index_esm_default.minHeight;
    maxWidth = index_esm_default.maxWidth;
    maxHeight = index_esm_default.maxHeight;
    size = index_esm_default.size;
    verticalAlign = index_esm_default.verticalAlign;
    display = index_esm_default.display;
    overflow = index_esm_default.overflow;
    overflowX = index_esm_default.overflowX;
    overflowY = index_esm_default.overflowY;
    opacity = index_esm_default2.opacity;
    fontSize = index_esm_default3.fontSize;
    fontFamily = index_esm_default3.fontFamily;
    fontWeight = index_esm_default3.fontWeight;
    lineHeight = index_esm_default3.lineHeight;
    textAlign = index_esm_default3.textAlign;
    fontStyle = index_esm_default3.fontStyle;
    letterSpacing = index_esm_default3.letterSpacing;
    alignItems = index_esm_default4.alignItems;
    alignContent = index_esm_default4.alignContent;
    justifyItems = index_esm_default4.justifyItems;
    justifyContent = index_esm_default4.justifyContent;
    flexWrap = index_esm_default4.flexWrap;
    flexDirection = index_esm_default4.flexDirection;
    flex = index_esm_default4.flex;
    flexGrow = index_esm_default4.flexGrow;
    flexShrink = index_esm_default4.flexShrink;
    flexBasis = index_esm_default4.flexBasis;
    justifySelf = index_esm_default4.justifySelf;
    alignSelf = index_esm_default4.alignSelf;
    order = index_esm_default4.order;
    gridGap = index_esm_default5.gridGap;
    gridColumnGap = index_esm_default5.gridColumnGap;
    gridRowGap = index_esm_default5.gridRowGap;
    gridColumn = index_esm_default5.gridColumn;
    gridRow = index_esm_default5.gridRow;
    gridAutoFlow = index_esm_default5.gridAutoFlow;
    gridAutoColumns = index_esm_default5.gridAutoColumns;
    gridAutoRows = index_esm_default5.gridAutoRows;
    gridTemplateColumns = index_esm_default5.gridTemplateColumns;
    gridTemplateRows = index_esm_default5.gridTemplateRows;
    gridTemplateAreas = index_esm_default5.gridTemplateAreas;
    gridArea = index_esm_default5.gridArea;
    borderWidth = index_esm_default6.borderWidth;
    borderStyle = index_esm_default6.borderStyle;
    borderColor = index_esm_default6.borderColor;
    borderTop = index_esm_default6.borderTop;
    borderRight = index_esm_default6.borderRight;
    borderBottom = index_esm_default6.borderBottom;
    borderLeft = index_esm_default6.borderLeft;
    borderRadius = index_esm_default6.borderRadius;
    backgroundImage = index_esm_default7.backgroundImage;
    backgroundSize = index_esm_default7.backgroundSize;
    backgroundPosition = index_esm_default7.backgroundPosition;
    backgroundRepeat = index_esm_default7.backgroundRepeat;
    zIndex = index_esm_default8.zIndex;
    top = index_esm_default8.top;
    right = index_esm_default8.right;
    bottom = index_esm_default8.bottom;
    left = index_esm_default8.left;
    all = compose(space, typography, color, layout, flexbox, border, background, position, grid, shadow, buttonStyle, textStyle, colorStyle);
    props = all.propNames;
    createShouldForwardProp = function(props2) {
      var regex = new RegExp("^(" + props2.join("|") + ")$");
      return emotion_memoize_browser_esm_default(function(prop) {
        return is_prop_valid_browser_esm_default(prop) && !regex.test(prop);
      });
    };
    index_esm_default11 = createShouldForwardProp(props);
    import_react4 = __toESM2(require_emotion_react_cjs());
    export_CacheProvider = import_react4.CacheProvider;
    export_EmotionCSS = import_react4.css;
    export_StylingGlobals = import_react4.Global;
    export_ThemeContext = import_react4.ThemeContext;
    export_ThemeProvider = import_react4.ThemeProvider;
    export_createCache = import_cache.default;
    export_keyframes = import_react4.keyframes;
    export_styled = import_styled.default;
    export_withTheme = import_react4.withTheme;
  }
});

// node_modules/@twilio-paste/design-tokens/dist/tokens.es6.js
var colorBackground, colorBackgroundBody, colorBackgroundNew, colorBackgroundUser, colorBackgroundWeak, colorBorder, colorBorderError, colorBorderInverse, colorBorderStrong, colorBorderUser, colorBorderWarning, colorBorderWeak, colorBorderWeaker, colorBorderWeakest, colorBrand, colorGray0, colorGray10, colorGray100, colorGray20, colorGray30, colorGray40, colorGray50, colorGray60, colorGray70, colorGray80, colorGray90, colorText, colorTextError, colorTextIcon, colorTextIconBusy, colorTextIconNew, colorTextInverse, colorTextInverseNew, colorTextLink, colorTextLinkWeak, colorTextNeutral, colorTextNew, colorTextPrimary, colorTextSuccess, colorTextUser, colorTextWarning, colorTextWeak, colorTextWeaker, colorTextWeakest, fontFamilyCode, fontFamilyDisplay, fontFamilyText, fontFamilyTextChineseSimplified, fontFamilyTextChineseTraditional, fontFamilyTextJapanese, fontFamilyTextKorean, shadow2, shadowBorder, shadowBorderError, shadowBorderStrong, shadowBorderUser, shadowBorderWeak, shadowBorderWeaker, shadowCard, shadowFocus, shadowFocusInset, shadowFocusInverse, shadowFocusInverseInset, shadowFocusShadowBorder, shadowHigh, shadowLow, size10, size110, size20, size30, size40, size50, size60, size70, size80, size90, space10, space100, space120, space140, space160, space180, space20, space200, space30, space40, space60, space70, space80, backgroundColors, borderColors, borderWidths, boxShadows, colors2, colorSchemes, dataVisualization, fonts, fontSizes, fontWeights, lineHeights, radii, sizings, spacings, textColors, zIndices;
var init_tokens_es6 = __esm({
  "node_modules/@twilio-paste/design-tokens/dist/tokens.es6.js"() {
    colorBackground = "rgb(244, 244, 246)";
    colorBackgroundBody = "rgb(255, 255, 255)";
    colorBackgroundNew = "rgb(245, 240, 252)";
    colorBackgroundUser = "rgb(200, 175, 240)";
    colorBackgroundWeak = "rgb(249, 249, 250)";
    colorBorder = "rgb(136, 145, 170)";
    colorBorderError = "rgb(214, 31, 31)";
    colorBorderInverse = "rgb(136, 145, 170)";
    colorBorderStrong = "rgb(96, 107, 133)";
    colorBorderUser = "rgb(231, 220, 250)";
    colorBorderWarning = "rgb(244, 124, 34)";
    colorBorderWeak = "rgb(202, 205, 216)";
    colorBorderWeaker = "rgb(225, 227, 234)";
    colorBorderWeakest = "rgb(255, 255, 255)";
    colorBrand = "rgb(0, 20, 137)";
    colorGray0 = "rgb(255, 255, 255)";
    colorGray10 = "rgb(244, 244, 246)";
    colorGray100 = "rgb(18, 28, 45)";
    colorGray20 = "rgb(225, 227, 234)";
    colorGray30 = "rgb(202, 205, 216)";
    colorGray40 = "rgb(174, 178, 193)";
    colorGray50 = "rgb(136, 145, 170)";
    colorGray60 = "rgb(96, 107, 133)";
    colorGray70 = "rgb(75, 86, 113)";
    colorGray80 = "rgb(57, 71, 98)";
    colorGray90 = "rgb(31, 48, 76)";
    colorText = "rgb(18, 28, 45)";
    colorTextError = "rgb(214, 31, 31)";
    colorTextIcon = "rgb(96, 107, 133)";
    colorTextIconBusy = "rgb(227, 106, 25)";
    colorTextIconNew = "rgb(109, 46, 209)";
    colorTextInverse = "rgb(255, 255, 255)";
    colorTextInverseNew = "rgb(200, 175, 240)";
    colorTextLink = "rgb(2, 99, 224)";
    colorTextLinkWeak = "rgb(153, 205, 255)";
    colorTextNeutral = "rgb(0, 20, 137)";
    colorTextNew = "rgb(109, 46, 209)";
    colorTextPrimary = "rgb(2, 99, 224)";
    colorTextSuccess = "rgb(14, 124, 58)";
    colorTextUser = "rgb(18, 28, 45)";
    colorTextWarning = "rgb(141, 49, 24)";
    colorTextWeak = "rgb(96, 107, 133)";
    colorTextWeaker = "rgb(174, 178, 193)";
    colorTextWeakest = "rgb(255, 255, 255)";
    fontFamilyCode = "'TwilioSansMono', Courier, monospace";
    fontFamilyDisplay = "'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
    fontFamilyText = "'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
    fontFamilyTextChineseSimplified = "'Inter var experimental', 'Inter var', 'Microsoft YaHei New', 微软雅黑, 'Microsoft Yahei', 'Microsoft JhengHei', 宋体, SimSun, sans-serif";
    fontFamilyTextChineseTraditional = "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif";
    fontFamilyTextJapanese = "'Inter var experimental', 'Inter var', Hiragino Sans, 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, Osaka, 'MS PGothic', sans-serif";
    fontFamilyTextKorean = "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif";
    shadow2 = "0 4px 16px 0 rgba(18, 28, 45, 0.2)";
    shadowBorder = "0 0 0 1px #8891aa";
    shadowBorderError = "0 0 0 1px #d61f1f";
    shadowBorderStrong = "0 0 0 1px #606b85";
    shadowBorderUser = "0 0 0 1px #8c5bd8";
    shadowBorderWeak = "0 0 0 1px #cacdd8";
    shadowBorderWeaker = "0 0 0 1px #e1e3ea";
    shadowCard = "0 2px 8px 0 rgba(18, 28, 45, 0.1)";
    shadowFocus = "0 0 0 4px rgba(2, 99, 224, 0.7)";
    shadowFocusInset = "inset 0 0 0 2px rgba(2, 99, 224, 0.7)";
    shadowFocusInverse = "0 0 0 4px rgba(255, 255, 255, 0.4)";
    shadowFocusInverseInset = "inset 0 0 0 2px rgba(255, 255, 255, 0.4)";
    shadowFocusShadowBorder = "0 0 0 4px rgba(2, 99, 224, 0.7), 0 0 0 1px #8891aa";
    shadowHigh = "0 16px 24px 0 rgba(18, 28, 45, 0.2)";
    shadowLow = "0 2px 8px 0 rgba(18, 28, 45, 0.1)";
    size10 = "5.5rem";
    size110 = "70.5rem";
    size20 = "12rem";
    size30 = "18.5rem";
    size40 = "25rem";
    size50 = "31.5rem";
    size60 = "38rem";
    size70 = "44.5rem";
    size80 = "51rem";
    size90 = "57.5rem";
    space10 = "0.125rem";
    space100 = "2.25rem";
    space120 = "2.75rem";
    space140 = "3.25rem";
    space160 = "3.75rem";
    space180 = "4.25rem";
    space20 = "0.25rem";
    space200 = "4.75rem";
    space30 = "0.5rem";
    space40 = "0.75rem";
    space60 = "1.25rem";
    space70 = "1.5rem";
    space80 = "1.75rem";
    backgroundColors = { colorBackground, colorBackgroundAvailable: "rgb(20, 176, 83)", colorBackgroundBody, colorBackgroundBodyInverse: "rgb(18, 28, 45)", colorBackgroundBrand: "rgb(0, 20, 137)", colorBackgroundBrandHighlight: "rgb(242, 47, 70)", colorBackgroundBrandHighlightWeakest: "rgba(242, 47, 70, 0.1)", colorBackgroundBrandStrong: "rgb(3, 11, 93)", colorBackgroundBrandStronger: "rgb(6, 3, 58)", colorBackgroundBusy: "rgb(244, 124, 34)", colorBackgroundDecorative10Weakest: "rgb(244, 244, 246)", colorBackgroundDecorative20Weakest: "rgb(235, 244, 255)", colorBackgroundDecorative30Weakest: "rgb(237, 253, 243)", colorBackgroundDecorative40Weakest: "rgb(245, 240, 252)", colorBackgroundDestructive: "rgb(214, 31, 31)", colorBackgroundDestructiveStrong: "rgb(117, 12, 12)", colorBackgroundDestructiveStronger: "rgb(74, 11, 11)", colorBackgroundDestructiveStrongest: "rgb(49, 12, 12)", colorBackgroundDestructiveWeak: "rgb(246, 177, 177)", colorBackgroundDestructiveWeaker: "rgb(252, 207, 207)", colorBackgroundDestructiveWeakest: "rgb(254, 236, 236)", colorBackgroundError: "rgb(214, 31, 31)", colorBackgroundErrorStrong: "rgb(117, 12, 12)", colorBackgroundErrorStronger: "rgb(74, 11, 11)", colorBackgroundErrorStrongest: "rgb(49, 12, 12)", colorBackgroundErrorWeakest: "rgb(254, 236, 236)", colorBackgroundInverse: "rgb(31, 48, 76)", colorBackgroundInverseStrong: "rgb(57, 71, 98)", colorBackgroundInverseStronger: "rgb(57, 71, 98)", colorBackgroundNeutralWeakest: "rgb(235, 244, 255)", colorBackgroundNew, colorBackgroundNewWeakest: "rgb(250, 247, 253)", colorBackgroundOffline: "rgb(174, 178, 193)", colorBackgroundOverlay: "rgba(6, 3, 58, 0.4)", colorBackgroundPrimary: "rgb(2, 99, 224)", colorBackgroundPrimaryStrong: "rgb(0, 20, 137)", colorBackgroundPrimaryStronger: "rgb(3, 11, 93)", colorBackgroundPrimaryStrongest: "rgb(6, 3, 58)", colorBackgroundPrimaryWeak: "rgb(153, 205, 255)", colorBackgroundPrimaryWeaker: "rgb(204, 228, 255)", colorBackgroundPrimaryWeakest: "rgb(235, 244, 255)", colorBackgroundRequired: "rgb(235, 86, 86)", colorBackgroundRowStriped: "rgb(244, 244, 246)", colorBackgroundStrong: "rgb(225, 227, 234)", colorBackgroundStronger: "rgb(136, 145, 170)", colorBackgroundStrongest: "rgb(75, 86, 113)", colorBackgroundSubaccount: "rgb(255, 251, 234)", colorBackgroundSuccess: "rgb(20, 176, 83)", colorBackgroundSuccessWeakest: "rgb(237, 253, 243)", colorBackgroundTrial: "rgb(209, 250, 224)", colorBackgroundUnavailable: "rgb(214, 31, 31)", colorBackgroundUser, colorBackgroundWarning: "rgb(244, 124, 34)", colorBackgroundWarningWeakest: "rgb(254, 245, 238)", colorBackgroundWeak };
    borderColors = { colorBorder, colorBorderDecorative10Weaker: "rgb(225, 227, 234)", colorBorderDecorative20Weaker: "rgb(204, 228, 255)", colorBorderDecorative30Weaker: "rgb(209, 250, 224)", colorBorderDecorative40Weaker: "rgb(231, 220, 250)", colorBorderDestructive: "rgb(214, 31, 31)", colorBorderDestructiveStrong: "rgb(117, 12, 12)", colorBorderDestructiveStronger: "rgb(74, 11, 11)", colorBorderDestructiveStrongest: "rgb(49, 12, 12)", colorBorderDestructiveWeak: "rgb(246, 177, 177)", colorBorderDestructiveWeaker: "rgb(252, 207, 207)", colorBorderDestructiveWeakest: "rgb(254, 236, 236)", colorBorderError, colorBorderErrorStrong: "rgb(117, 12, 12)", colorBorderErrorStronger: "rgb(74, 11, 11)", colorBorderErrorStrongest: "rgb(49, 12, 12)", colorBorderErrorWeak: "rgb(245, 138, 138)", colorBorderErrorWeaker: "rgb(252, 207, 207)", colorBorderErrorWeakest: "rgb(254, 236, 236)", colorBorderInverse, colorBorderInverseStrong: "rgb(225, 227, 234)", colorBorderInverseStronger: "rgb(244, 244, 246)", colorBorderInverseStrongest: "rgb(255, 255, 255)", colorBorderInverseWeaker: "rgb(57, 71, 98)", colorBorderInverseWeakest: "rgb(31, 48, 76)", colorBorderNeutral: "rgb(2, 99, 224)", colorBorderNeutralWeak: "rgb(102, 179, 255)", colorBorderNeutralWeaker: "rgb(204, 228, 255)", colorBorderNewWeaker: "rgb(231, 220, 250)", colorBorderPrimary: "rgb(2, 99, 224)", colorBorderPrimaryStrong: "rgb(0, 20, 137)", colorBorderPrimaryStronger: "rgb(3, 11, 93)", colorBorderPrimaryStrongest: "rgb(6, 3, 58)", colorBorderPrimaryWeak: "rgb(153, 205, 255)", colorBorderPrimaryWeaker: "rgb(204, 228, 255)", colorBorderPrimaryWeakest: "rgb(235, 244, 255)", colorBorderStrong, colorBorderSuccess: "rgb(20, 176, 83)", colorBorderSuccessWeak: "rgb(54, 213, 118)", colorBorderSuccessWeaker: "rgb(209, 250, 224)", colorBorderSuccessWeakest: "rgb(237, 253, 243)", colorBorderUser, colorBorderWarning, colorBorderWarningWeak: "rgb(255, 179, 122)", colorBorderWarningWeaker: "rgb(253, 220, 196)", colorBorderWarningWeakest: "rgb(254, 245, 238)", colorBorderWeak, colorBorderWeaker, colorBorderWeakest };
    borderWidths = { borderWidth0: "0", borderWidth10: "1px", borderWidth20: "2px", borderWidth30: "4px", borderWidth40: "8px" };
    boxShadows = { shadow: shadow2, shadowBorder, shadowBorderBottomDecorative10Weaker: "0 1px 0 #e1e3ea", shadowBorderBottomDecorative20Weaker: "0 1px 0 #cce4ff", shadowBorderBottomDecorative30Weaker: "0 1px 0 #d1fae0", shadowBorderBottomDecorative40Weaker: "0 1px 0 #e7dcfa", shadowBorderBottomErrorWeaker: "0 1px 0 #fccfcf", shadowBorderBottomInverseNewWeaker: "0 1px 0 #5817bd", shadowBorderBottomNeutralWeaker: "0 1px 0 #cce4ff", shadowBorderBottomNewWeaker: "0 1px 0 #e7dcfa", shadowBorderBottomPrimary: "0 1px 0 #006dfa", shadowBorderBottomSubaccount: "0 1px 0 #ffdd35", shadowBorderBottomSuccessWeaker: "0 1px 0 #d1fae0", shadowBorderBottomWarningWeaker: "0 1px 0 #fddcc4", shadowBorderDecorative10Weaker: "0 0 0 1px #e1e3ea", shadowBorderDecorative20Weaker: "0 0 0 1px #cce4ff", shadowBorderDecorative30Weaker: "0 0 0 1px #d1fae0", shadowBorderDecorative40Weaker: "0 0 0 1px #e7dcfa", shadowBorderDestructive: "0 0 0 1px #d61f1f", shadowBorderDestructiveStrong: "0 0 0 1px #750c0c", shadowBorderDestructiveStronger: "0 0 0 1px #4a0b0b", shadowBorderDestructiveStrongest: "0 0 0 1px #310c0c", shadowBorderDestructiveWeak: "0 0 0 1px #f6b1b1", shadowBorderDestructiveWeaker: "0 0 0 1px #fccfcf", shadowBorderError, shadowBorderErrorStrong: "0 0 0 1px #750c0c", shadowBorderErrorStronger: "0 0 0 1px #4a0b0b", shadowBorderErrorStrongest: "0 0 0 1px #310c0c", shadowBorderErrorWeak: "0 0 0 1px #eb5656", shadowBorderErrorWeaker: "0 0 0 1px #fccfcf", shadowBorderInverse: "0 0 0 1px #8891aa", shadowBorderInverseNewWeaker: "0 0 0 1px #5817bd", shadowBorderInverseStrong: "0 0 0 1px #e1e3ea", shadowBorderInverseStronger: "0 0 0 1px #f4f4f6", shadowBorderInverseStrongest: "0 0 0 1px #ffffff", shadowBorderInverseWeaker: "0 0 0 1px #394762", shadowBorderInverseWeakest: "0 0 0 1px #1f304c", shadowBorderNeutralWeaker: "0 0 0 1px #cce4ff", shadowBorderNewWeaker: "0 0 0 1px #e7dcfa", shadowBorderPrimary: "0 0 0 1px #0263e0", shadowBorderPrimaryStrong: "0 0 0 1px #001489", shadowBorderPrimaryStronger: "0 0 0 1px #030b5d", shadowBorderPrimaryStrongest: "0 0 0 1px #06033a", shadowBorderPrimaryWeak: "0 0 0 1px #99cdff", shadowBorderPrimaryWeaker: "0 0 0 1px #cce4ff", shadowBorderStrong, shadowBorderSubaccount: "0 0 0 1px #fff1b3", shadowBorderSuccessWeaker: "0 0 0 1px #d1fae0", shadowBorderUser, shadowBorderWarningWeaker: "0 0 0 1px #fddcc4", shadowBorderWeak, shadowBorderWeaker, shadowCard, shadowFocus, shadowFocusInset, shadowFocusInverse, shadowFocusInverseInset, shadowFocusShadowBorder, shadowHigh, shadowLow };
    colors2 = { colorBrand, colorBrandHighlight: "rgb(242, 47, 70)", colorGray0, colorGray10, colorGray20, colorGray30, colorGray40, colorGray50, colorGray60, colorGray70, colorGray80, colorGray90, colorGray100 };
    colorSchemes = { colorScheme: "light" };
    dataVisualization = { colorDataVisualization1: "rgb(0, 20, 137)", colorDataVisualization2: "rgb(14, 124, 58)", colorDataVisualization3: "rgb(13, 58, 31)", colorDataVisualization4: "rgb(0, 140, 255)", colorDataVisualization5: "rgb(57, 71, 98)", colorDataVisualization6: "rgb(166, 127, 227)", colorDataVisualization7: "rgb(109, 46, 209)", colorDataVisualization8: "rgb(136, 145, 170)", colorDataVisualization9: "rgb(117, 12, 12)", colorDataVisualization10: "rgb(235, 86, 86)" };
    fonts = { fontFamilyCode, fontFamilyDisplay, fontFamilyText, fontFamilyTextChineseSimplified, fontFamilyTextChineseTraditional, fontFamilyTextJapanese, fontFamilyTextKorean };
    fontSizes = { fontSize10: "0.625rem", fontSize20: "0.75rem", fontSize30: "0.875rem", fontSize40: "1rem", fontSize50: "1.125rem", fontSize60: "1.25rem", fontSize70: "1.5rem", fontSize80: "1.75rem", fontSize90: "2rem", fontSize100: "2.5rem", fontSize110: "3rem", fontSizeBase: "100%", fontSizeDisplay10: "2rem", fontSizeDisplay20: "3rem", fontSizeDisplay30: "4rem" };
    fontWeights = { fontWeightLight: "400", fontWeightNormal: "400", fontWeightMedium: "500", fontWeightSemibold: "600", fontWeightBold: "700", fontWeightExtrabold: "800" };
    lineHeights = { lineHeight0: "0", lineHeight05: "0.75rem", lineHeight10: "1rem", lineHeight20: "1.25rem", lineHeight30: "1.25rem", lineHeight40: "1.5rem", lineHeight50: "1.75rem", lineHeight60: "1.75rem", lineHeight70: "2rem", lineHeight80: "2.5rem", lineHeight90: "2.75rem", lineHeight100: "3.25rem", lineHeight110: "4rem", lineHeightDisplay10: "2.5rem", lineHeightDisplay20: "3.75rem", lineHeightDisplay30: "5rem" };
    radii = { borderRadius0: "0", borderRadius10: "2px", borderRadius20: "4px", borderRadius30: "8px", borderRadiusCircle: "50%", borderRadiusPill: "100px" };
    sizings = { size0: "0", size10, size20, size30, size40, size50, size60, size70, size80, size90, size100: "64rem", size110, size120: "77rem", sizeIcon05: "0.75rem", sizeIcon10: "1rem", sizeIcon20: "1.25rem", sizeIcon30: "1.25rem", sizeIcon40: "1.5rem", sizeIcon50: "1.75rem", sizeIcon60: "1.75rem", sizeIcon70: "2rem", sizeIcon80: "2.5rem", sizeIcon90: "2.75rem", sizeIcon100: "3.25rem", sizeIcon110: "4rem", sizeSidebar: "15rem", sizeSidebarCompact: "4.75rem", sizeSquare0: "0", sizeSquare10: "0.125rem", sizeSquare20: "0.25rem", sizeSquare25: "0.375rem", sizeSquare30: "0.5rem", sizeSquare40: "0.75rem", sizeSquare50: "1rem", sizeSquare60: "1.25rem", sizeSquare70: "1.5rem", sizeSquare80: "1.75rem", sizeSquare90: "2rem", sizeSquare100: "2.25rem", sizeSquare110: "2.5rem", sizeSquare120: "2.75rem", sizeSquare130: "3rem", sizeSquare140: "3.25rem", sizeSquare150: "3.5rem", sizeSquare160: "3.75rem", sizeSquare170: "4rem", sizeSquare180: "4.25rem", sizeSquare190: "4.5rem", sizeSquare200: "4.75rem", sizeTopbar: "4.75rem" };
    spacings = { space0: "0", space10, space20, space30, space40, space50: "1rem", space60, space70, space80, space90: "2rem", space100, space110: "2.5rem", space120, space130: "3rem", space140, space150: "3.5rem", space160, space170: "4rem", space180, space190: "4.5rem", space200, spaceNegative10: "-0.125rem", spaceNegative20: "-0.25rem", spaceNegative30: "-0.5rem", spaceNegative40: "-0.75rem", spaceNegative50: "-1rem", spaceNegative60: "-1.25rem", spaceNegative70: "-1.5rem", spaceNegative80: "-1.75rem", spaceNegative90: "-2rem", spaceNegative100: "-2.25rem", spaceNegative110: "-2.5rem", spaceNegative120: "-2.75rem", spaceNegative130: "-3rem", spaceNegative140: "-3.25rem", spaceNegative150: "-3.5rem", spaceNegative160: "-3.75rem", spaceNegative170: "-4rem", spaceNegative180: "-4.25rem", spaceNegative190: "-4.5rem", spaceNegative200: "-4.75rem" };
    textColors = { colorText, colorTextBrandHighlight: "rgb(242, 47, 70)", colorTextBrandInverse: "rgb(255, 255, 255)", colorTextDecorative10: "rgb(96, 107, 133)", colorTextDecorative20: "rgb(0, 20, 137)", colorTextDecorative30: "rgb(14, 124, 58)", colorTextDecorative40: "rgb(109, 46, 209)", colorTextDestructive: "rgb(214, 31, 31)", colorTextDestructiveStrong: "rgb(173, 17, 17)", colorTextDestructiveStronger: "rgb(74, 11, 11)", colorTextDestructiveStrongest: "rgb(49, 12, 12)", colorTextDestructiveWeak: "rgb(246, 177, 177)", colorTextError, colorTextErrorStrong: "rgb(173, 17, 17)", colorTextErrorStronger: "rgb(74, 11, 11)", colorTextErrorStrongest: "rgb(49, 12, 12)", colorTextErrorWeak: "rgb(235, 86, 86)", colorTextIcon, colorTextIconAvailable: "rgb(14, 124, 58)", colorTextIconBrandHighlight: "rgb(242, 47, 70)", colorTextIconBrandInverse: "rgb(255, 255, 255)", colorTextIconBusy, colorTextIconError: "rgb(214, 31, 31)", colorTextIconInverse: "rgb(136, 145, 170)", colorTextIconNeutral: "rgb(0, 20, 137)", colorTextIconNew, colorTextIconOffline: "rgb(96, 107, 133)", colorTextIconSuccess: "rgb(14, 124, 58)", colorTextIconUnavailable: "rgb(214, 31, 31)", colorTextIconWarning: "rgb(227, 106, 25)", colorTextInverse, colorTextInverseNew, colorTextInverseWeak: "rgb(202, 205, 216)", colorTextInverseWeaker: "rgb(136, 145, 170)", colorTextInverseWeakest: "rgb(75, 86, 113)", colorTextLink, colorTextLinkDestructive: "rgb(214, 31, 31)", colorTextLinkDestructiveStrong: "rgb(173, 17, 17)", colorTextLinkDestructiveStronger: "rgb(74, 11, 11)", colorTextLinkDestructiveStrongest: "rgb(49, 12, 12)", colorTextLinkDestructiveWeak: "rgb(246, 177, 177)", colorTextLinkStrong: "rgb(0, 20, 137)", colorTextLinkStronger: "rgb(3, 11, 93)", colorTextLinkStrongest: "rgb(6, 3, 58)", colorTextLinkWeak, colorTextNeutral, colorTextNew, colorTextPrimary, colorTextPrimaryStrong: "rgb(0, 20, 137)", colorTextPrimaryStronger: "rgb(3, 11, 93)", colorTextPrimaryStrongest: "rgb(6, 3, 58)", colorTextPrimaryWeak: "rgb(153, 205, 255)", colorTextSubaccount: "rgb(84, 51, 8)", colorTextSuccess, colorTextUser, colorTextWarning, colorTextWarningStrong: "rgb(141, 49, 24)", colorTextWeak, colorTextWeaker, colorTextWeakest };
    zIndices = { zIndex0: "0", zIndex10: "10", zIndex20: "20", zIndex30: "30", zIndex40: "40", zIndex50: "50", zIndex60: "60", zIndex70: "70", zIndex80: "80", zIndex90: "90" };
  }
});

// node_modules/@twilio-paste/design-tokens/dist/themes/sendgrid/tokens.es6.js
var colorBackground2, colorBackgroundBody2, colorBackgroundNew2, colorBackgroundUser2, colorBackgroundWeak2, colorBorder2, colorBorderError2, colorBorderInverse2, colorBorderStrong2, colorBorderUser2, colorBorderWarning2, colorBorderWeak2, colorBorderWeaker2, colorBorderWeakest2, colorBrand2, colorGray02, colorGray102, colorGray1002, colorGray202, colorGray302, colorGray402, colorGray502, colorGray602, colorGray702, colorGray802, colorGray902, colorText2, colorTextError2, colorTextIcon2, colorTextIconBusy2, colorTextIconNew2, colorTextInverse2, colorTextInverseNew2, colorTextLink2, colorTextLinkWeak2, colorTextNeutral2, colorTextNew2, colorTextPrimary2, colorTextSuccess2, colorTextUser2, colorTextWarning2, colorTextWeak2, colorTextWeaker2, colorTextWeakest2, fontFamilyCode2, fontFamilyDisplay2, fontFamilyText2, fontFamilyTextChineseSimplified2, fontFamilyTextChineseTraditional2, fontFamilyTextJapanese2, fontFamilyTextKorean2, shadow3, shadowBorder2, shadowBorderError2, shadowBorderStrong2, shadowBorderUser2, shadowBorderWeak2, shadowBorderWeaker2, shadowCard2, shadowFocus2, shadowFocusInset2, shadowFocusInverse2, shadowFocusInverseInset2, shadowFocusShadowBorder2, shadowHigh2, shadowLow2, size102, size1102, size202, size302, size402, size502, size602, size702, size802, size902, space102, space1002, space1202, space1402, space1602, space1802, space202, space2002, space302, space402, space602, space702, space802, backgroundColors2, borderColors2, borderWidths2, boxShadows2, colors3, colorSchemes2, dataVisualization2, fonts2, fontSizes2, fontWeights2, lineHeights2, radii2, sizings2, spacings2, textColors2, zIndices2;
var init_tokens_es62 = __esm({
  "node_modules/@twilio-paste/design-tokens/dist/themes/sendgrid/tokens.es6.js"() {
    colorBackground2 = "rgb(244, 244, 246)";
    colorBackgroundBody2 = "rgb(255, 255, 255)";
    colorBackgroundNew2 = "rgb(245, 240, 252)";
    colorBackgroundUser2 = "rgb(200, 175, 240)";
    colorBackgroundWeak2 = "rgb(249, 249, 250)";
    colorBorder2 = "rgb(136, 145, 170)";
    colorBorderError2 = "rgb(214, 31, 31)";
    colorBorderInverse2 = "rgb(136, 145, 170)";
    colorBorderStrong2 = "rgb(96, 107, 133)";
    colorBorderUser2 = "rgb(231, 220, 250)";
    colorBorderWarning2 = "rgb(244, 124, 34)";
    colorBorderWeak2 = "rgb(202, 205, 216)";
    colorBorderWeaker2 = "rgb(225, 227, 234)";
    colorBorderWeakest2 = "rgb(255, 255, 255)";
    colorBrand2 = "rgb(0, 20, 137)";
    colorGray02 = "rgb(255, 255, 255)";
    colorGray102 = "rgb(244, 244, 246)";
    colorGray1002 = "rgb(18, 28, 45)";
    colorGray202 = "rgb(225, 227, 234)";
    colorGray302 = "rgb(202, 205, 216)";
    colorGray402 = "rgb(174, 178, 193)";
    colorGray502 = "rgb(136, 145, 170)";
    colorGray602 = "rgb(96, 107, 133)";
    colorGray702 = "rgb(75, 86, 113)";
    colorGray802 = "rgb(57, 71, 98)";
    colorGray902 = "rgb(31, 48, 76)";
    colorText2 = "rgb(18, 28, 45)";
    colorTextError2 = "rgb(214, 31, 31)";
    colorTextIcon2 = "rgb(96, 107, 133)";
    colorTextIconBusy2 = "rgb(227, 106, 25)";
    colorTextIconNew2 = "rgb(109, 46, 209)";
    colorTextInverse2 = "rgb(255, 255, 255)";
    colorTextInverseNew2 = "rgb(200, 175, 240)";
    colorTextLink2 = "rgb(2, 99, 224)";
    colorTextLinkWeak2 = "rgb(153, 205, 255)";
    colorTextNeutral2 = "rgb(0, 20, 137)";
    colorTextNew2 = "rgb(109, 46, 209)";
    colorTextPrimary2 = "rgb(2, 99, 224)";
    colorTextSuccess2 = "rgb(14, 124, 58)";
    colorTextUser2 = "rgb(18, 28, 45)";
    colorTextWarning2 = "rgb(141, 49, 24)";
    colorTextWeak2 = "rgb(96, 107, 133)";
    colorTextWeaker2 = "rgb(174, 178, 193)";
    colorTextWeakest2 = "rgb(255, 255, 255)";
    fontFamilyCode2 = "'TwilioSansMono', Courier, monospace";
    fontFamilyDisplay2 = "'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
    fontFamilyText2 = "'Colfax', Helvetica, Arial, sans-serif";
    fontFamilyTextChineseSimplified2 = "'Inter var experimental', 'Inter var', 'Microsoft YaHei New', 微软雅黑, 'Microsoft Yahei', 'Microsoft JhengHei', 宋体, SimSun, sans-serif";
    fontFamilyTextChineseTraditional2 = "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif";
    fontFamilyTextJapanese2 = "'Inter var experimental', 'Inter var', Hiragino Sans, 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, Osaka, 'MS PGothic', sans-serif";
    fontFamilyTextKorean2 = "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif";
    shadow3 = "0 4px 16px 0 rgba(18, 28, 45, 0.2)";
    shadowBorder2 = "0 0 0 1px #8891aa";
    shadowBorderError2 = "0 0 0 1px #d61f1f";
    shadowBorderStrong2 = "0 0 0 1px #606b85";
    shadowBorderUser2 = "0 0 0 1px #8c5bd8";
    shadowBorderWeak2 = "0 0 0 1px #cacdd8";
    shadowBorderWeaker2 = "0 0 0 1px #e1e3ea";
    shadowCard2 = "0 2px 8px 0 rgba(18, 28, 45, 0.1)";
    shadowFocus2 = "0 0 0 4px rgba(2, 99, 224, 0.7)";
    shadowFocusInset2 = "inset 0 0 0 2px rgba(2, 99, 224, 0.7)";
    shadowFocusInverse2 = "0 0 0 4px rgba(255, 255, 255, 0.4)";
    shadowFocusInverseInset2 = "inset 0 0 0 2px rgba(255, 255, 255, 0.4)";
    shadowFocusShadowBorder2 = "0 0 0 4px rgba(2, 99, 224, 0.7), 0 0 0 1px #8891aa";
    shadowHigh2 = "0 16px 24px 0 rgba(18, 28, 45, 0.2)";
    shadowLow2 = "0 2px 8px 0 rgba(18, 28, 45, 0.1)";
    size102 = "5.5rem";
    size1102 = "70.5rem";
    size202 = "12rem";
    size302 = "18.5rem";
    size402 = "25rem";
    size502 = "31.5rem";
    size602 = "38rem";
    size702 = "44.5rem";
    size802 = "51rem";
    size902 = "57.5rem";
    space102 = "0.125rem";
    space1002 = "2.25rem";
    space1202 = "2.75rem";
    space1402 = "3.25rem";
    space1602 = "3.75rem";
    space1802 = "4.25rem";
    space202 = "0.25rem";
    space2002 = "4.75rem";
    space302 = "0.5rem";
    space402 = "0.75rem";
    space602 = "1.25rem";
    space702 = "1.5rem";
    space802 = "1.75rem";
    backgroundColors2 = { colorBackground: colorBackground2, colorBackgroundAvailable: "rgb(20, 176, 83)", colorBackgroundBody: colorBackgroundBody2, colorBackgroundBodyInverse: "rgb(18, 28, 45)", colorBackgroundBrand: "rgb(0, 20, 137)", colorBackgroundBrandHighlight: "rgb(242, 47, 70)", colorBackgroundBrandHighlightWeakest: "rgba(242, 47, 70, 0.1)", colorBackgroundBrandStrong: "rgb(3, 11, 93)", colorBackgroundBrandStronger: "rgb(6, 3, 58)", colorBackgroundBusy: "rgb(244, 124, 34)", colorBackgroundDecorative10Weakest: "rgb(244, 244, 246)", colorBackgroundDecorative20Weakest: "rgb(235, 244, 255)", colorBackgroundDecorative30Weakest: "rgb(237, 253, 243)", colorBackgroundDecorative40Weakest: "rgb(245, 240, 252)", colorBackgroundDestructive: "rgb(214, 31, 31)", colorBackgroundDestructiveStrong: "rgb(117, 12, 12)", colorBackgroundDestructiveStronger: "rgb(74, 11, 11)", colorBackgroundDestructiveStrongest: "rgb(49, 12, 12)", colorBackgroundDestructiveWeak: "rgb(246, 177, 177)", colorBackgroundDestructiveWeaker: "rgb(252, 207, 207)", colorBackgroundDestructiveWeakest: "rgb(254, 236, 236)", colorBackgroundError: "rgb(214, 31, 31)", colorBackgroundErrorStrong: "rgb(117, 12, 12)", colorBackgroundErrorStronger: "rgb(74, 11, 11)", colorBackgroundErrorStrongest: "rgb(49, 12, 12)", colorBackgroundErrorWeakest: "rgb(254, 236, 236)", colorBackgroundInverse: "rgb(31, 48, 76)", colorBackgroundInverseStrong: "rgb(57, 71, 98)", colorBackgroundInverseStronger: "rgb(57, 71, 98)", colorBackgroundNeutralWeakest: "rgb(235, 244, 255)", colorBackgroundNew: colorBackgroundNew2, colorBackgroundNewWeakest: "rgb(250, 247, 253)", colorBackgroundOffline: "rgb(174, 178, 193)", colorBackgroundOverlay: "rgba(6, 3, 58, 0.4)", colorBackgroundPrimary: "rgb(2, 99, 224)", colorBackgroundPrimaryStrong: "rgb(0, 20, 137)", colorBackgroundPrimaryStronger: "rgb(3, 11, 93)", colorBackgroundPrimaryStrongest: "rgb(6, 3, 58)", colorBackgroundPrimaryWeak: "rgb(153, 205, 255)", colorBackgroundPrimaryWeaker: "rgb(204, 228, 255)", colorBackgroundPrimaryWeakest: "rgb(235, 244, 255)", colorBackgroundRequired: "rgb(235, 86, 86)", colorBackgroundRowStriped: "rgb(244, 244, 246)", colorBackgroundStrong: "rgb(225, 227, 234)", colorBackgroundStronger: "rgb(136, 145, 170)", colorBackgroundStrongest: "rgb(75, 86, 113)", colorBackgroundSubaccount: "rgb(255, 251, 234)", colorBackgroundSuccess: "rgb(20, 176, 83)", colorBackgroundSuccessWeakest: "rgb(237, 253, 243)", colorBackgroundTrial: "rgb(209, 250, 224)", colorBackgroundUnavailable: "rgb(214, 31, 31)", colorBackgroundUser: colorBackgroundUser2, colorBackgroundWarning: "rgb(244, 124, 34)", colorBackgroundWarningWeakest: "rgb(254, 245, 238)", colorBackgroundWeak: colorBackgroundWeak2 };
    borderColors2 = { colorBorder: colorBorder2, colorBorderDecorative10Weaker: "rgb(225, 227, 234)", colorBorderDecorative20Weaker: "rgb(204, 228, 255)", colorBorderDecorative30Weaker: "rgb(209, 250, 224)", colorBorderDecorative40Weaker: "rgb(231, 220, 250)", colorBorderDestructive: "rgb(214, 31, 31)", colorBorderDestructiveStrong: "rgb(117, 12, 12)", colorBorderDestructiveStronger: "rgb(74, 11, 11)", colorBorderDestructiveStrongest: "rgb(49, 12, 12)", colorBorderDestructiveWeak: "rgb(246, 177, 177)", colorBorderDestructiveWeaker: "rgb(252, 207, 207)", colorBorderDestructiveWeakest: "rgb(254, 236, 236)", colorBorderError: colorBorderError2, colorBorderErrorStrong: "rgb(117, 12, 12)", colorBorderErrorStronger: "rgb(74, 11, 11)", colorBorderErrorStrongest: "rgb(49, 12, 12)", colorBorderErrorWeak: "rgb(245, 138, 138)", colorBorderErrorWeaker: "rgb(252, 207, 207)", colorBorderErrorWeakest: "rgb(254, 236, 236)", colorBorderInverse: colorBorderInverse2, colorBorderInverseStrong: "rgb(225, 227, 234)", colorBorderInverseStronger: "rgb(244, 244, 246)", colorBorderInverseStrongest: "rgb(255, 255, 255)", colorBorderInverseWeaker: "rgb(57, 71, 98)", colorBorderInverseWeakest: "rgb(31, 48, 76)", colorBorderNeutral: "rgb(2, 99, 224)", colorBorderNeutralWeak: "rgb(102, 179, 255)", colorBorderNeutralWeaker: "rgb(204, 228, 255)", colorBorderNewWeaker: "rgb(231, 220, 250)", colorBorderPrimary: "rgb(2, 99, 224)", colorBorderPrimaryStrong: "rgb(0, 20, 137)", colorBorderPrimaryStronger: "rgb(3, 11, 93)", colorBorderPrimaryStrongest: "rgb(6, 3, 58)", colorBorderPrimaryWeak: "rgb(153, 205, 255)", colorBorderPrimaryWeaker: "rgb(204, 228, 255)", colorBorderPrimaryWeakest: "rgb(235, 244, 255)", colorBorderStrong: colorBorderStrong2, colorBorderSuccess: "rgb(20, 176, 83)", colorBorderSuccessWeak: "rgb(54, 213, 118)", colorBorderSuccessWeaker: "rgb(209, 250, 224)", colorBorderSuccessWeakest: "rgb(237, 253, 243)", colorBorderUser: colorBorderUser2, colorBorderWarning: colorBorderWarning2, colorBorderWarningWeak: "rgb(255, 179, 122)", colorBorderWarningWeaker: "rgb(253, 220, 196)", colorBorderWarningWeakest: "rgb(254, 245, 238)", colorBorderWeak: colorBorderWeak2, colorBorderWeaker: colorBorderWeaker2, colorBorderWeakest: colorBorderWeakest2 };
    borderWidths2 = { borderWidth0: "0", borderWidth10: "1px", borderWidth20: "2px", borderWidth30: "4px", borderWidth40: "8px" };
    boxShadows2 = { shadow: shadow3, shadowBorder: shadowBorder2, shadowBorderBottomDecorative10Weaker: "0 1px 0 #e1e3ea", shadowBorderBottomDecorative20Weaker: "0 1px 0 #cce4ff", shadowBorderBottomDecorative30Weaker: "0 1px 0 #d1fae0", shadowBorderBottomDecorative40Weaker: "0 1px 0 #e7dcfa", shadowBorderBottomErrorWeaker: "0 1px 0 #fccfcf", shadowBorderBottomInverseNewWeaker: "0 1px 0 #5817bd", shadowBorderBottomNeutralWeaker: "0 1px 0 #cce4ff", shadowBorderBottomNewWeaker: "0 1px 0 #e7dcfa", shadowBorderBottomPrimary: "0 1px 0 #006dfa", shadowBorderBottomSubaccount: "0 1px 0 #ffdd35", shadowBorderBottomSuccessWeaker: "0 1px 0 #d1fae0", shadowBorderBottomWarningWeaker: "0 1px 0 #fddcc4", shadowBorderDecorative10Weaker: "0 0 0 1px #e1e3ea", shadowBorderDecorative20Weaker: "0 0 0 1px #cce4ff", shadowBorderDecorative30Weaker: "0 0 0 1px #d1fae0", shadowBorderDecorative40Weaker: "0 0 0 1px #e7dcfa", shadowBorderDestructive: "0 0 0 1px #d61f1f", shadowBorderDestructiveStrong: "0 0 0 1px #750c0c", shadowBorderDestructiveStronger: "0 0 0 1px #4a0b0b", shadowBorderDestructiveStrongest: "0 0 0 1px #310c0c", shadowBorderDestructiveWeak: "0 0 0 1px #f6b1b1", shadowBorderDestructiveWeaker: "0 0 0 1px #fccfcf", shadowBorderError: shadowBorderError2, shadowBorderErrorStrong: "0 0 0 1px #750c0c", shadowBorderErrorStronger: "0 0 0 1px #4a0b0b", shadowBorderErrorStrongest: "0 0 0 1px #310c0c", shadowBorderErrorWeak: "0 0 0 1px #eb5656", shadowBorderErrorWeaker: "0 0 0 1px #fccfcf", shadowBorderInverse: "0 0 0 1px #8891aa", shadowBorderInverseNewWeaker: "0 0 0 1px #5817bd", shadowBorderInverseStrong: "0 0 0 1px #e1e3ea", shadowBorderInverseStronger: "0 0 0 1px #f4f4f6", shadowBorderInverseStrongest: "0 0 0 1px #ffffff", shadowBorderInverseWeaker: "0 0 0 1px #394762", shadowBorderInverseWeakest: "0 0 0 1px #1f304c", shadowBorderNeutralWeaker: "0 0 0 1px #cce4ff", shadowBorderNewWeaker: "0 0 0 1px #e7dcfa", shadowBorderPrimary: "0 0 0 1px #0263e0", shadowBorderPrimaryStrong: "0 0 0 1px #001489", shadowBorderPrimaryStronger: "0 0 0 1px #030b5d", shadowBorderPrimaryStrongest: "0 0 0 1px #06033a", shadowBorderPrimaryWeak: "0 0 0 1px #99cdff", shadowBorderPrimaryWeaker: "0 0 0 1px #cce4ff", shadowBorderStrong: shadowBorderStrong2, shadowBorderSubaccount: "0 0 0 1px #fff1b3", shadowBorderSuccessWeaker: "0 0 0 1px #d1fae0", shadowBorderUser: shadowBorderUser2, shadowBorderWarningWeaker: "0 0 0 1px #fddcc4", shadowBorderWeak: shadowBorderWeak2, shadowBorderWeaker: shadowBorderWeaker2, shadowCard: shadowCard2, shadowFocus: shadowFocus2, shadowFocusInset: shadowFocusInset2, shadowFocusInverse: shadowFocusInverse2, shadowFocusInverseInset: shadowFocusInverseInset2, shadowFocusShadowBorder: shadowFocusShadowBorder2, shadowHigh: shadowHigh2, shadowLow: shadowLow2 };
    colors3 = { colorBrand: colorBrand2, colorBrandHighlight: "rgb(242, 47, 70)", colorGray0: colorGray02, colorGray10: colorGray102, colorGray20: colorGray202, colorGray30: colorGray302, colorGray40: colorGray402, colorGray50: colorGray502, colorGray60: colorGray602, colorGray70: colorGray702, colorGray80: colorGray802, colorGray90: colorGray902, colorGray100: colorGray1002 };
    colorSchemes2 = { colorScheme: "light" };
    dataVisualization2 = { colorDataVisualization1: "rgb(0, 20, 137)", colorDataVisualization2: "rgb(14, 124, 58)", colorDataVisualization3: "rgb(13, 58, 31)", colorDataVisualization4: "rgb(0, 140, 255)", colorDataVisualization5: "rgb(57, 71, 98)", colorDataVisualization6: "rgb(166, 127, 227)", colorDataVisualization7: "rgb(109, 46, 209)", colorDataVisualization8: "rgb(136, 145, 170)", colorDataVisualization9: "rgb(117, 12, 12)", colorDataVisualization10: "rgb(235, 86, 86)" };
    fonts2 = { fontFamilyCode: fontFamilyCode2, fontFamilyDisplay: fontFamilyDisplay2, fontFamilyText: fontFamilyText2, fontFamilyTextChineseSimplified: fontFamilyTextChineseSimplified2, fontFamilyTextChineseTraditional: fontFamilyTextChineseTraditional2, fontFamilyTextJapanese: fontFamilyTextJapanese2, fontFamilyTextKorean: fontFamilyTextKorean2 };
    fontSizes2 = { fontSize10: "0.625rem", fontSize20: "0.75rem", fontSize30: "0.875rem", fontSize40: "1rem", fontSize50: "1.125rem", fontSize60: "1.25rem", fontSize70: "1.5rem", fontSize80: "1.75rem", fontSize90: "2rem", fontSize100: "2.5rem", fontSize110: "3rem", fontSizeBase: "100%", fontSizeDisplay10: "2rem", fontSizeDisplay20: "3rem", fontSizeDisplay30: "4rem" };
    fontWeights2 = { fontWeightLight: "400", fontWeightNormal: "400", fontWeightMedium: "500", fontWeightSemibold: "600", fontWeightBold: "700", fontWeightExtrabold: "800" };
    lineHeights2 = { lineHeight0: "0", lineHeight05: "0.75rem", lineHeight10: "1rem", lineHeight20: "1.25rem", lineHeight30: "1.25rem", lineHeight40: "1.5rem", lineHeight50: "1.75rem", lineHeight60: "1.75rem", lineHeight70: "2rem", lineHeight80: "2.5rem", lineHeight90: "2.75rem", lineHeight100: "3.25rem", lineHeight110: "4rem", lineHeightDisplay10: "2.5rem", lineHeightDisplay20: "3.75rem", lineHeightDisplay30: "5rem" };
    radii2 = { borderRadius0: "0", borderRadius10: "2px", borderRadius20: "4px", borderRadius30: "8px", borderRadiusCircle: "50%", borderRadiusPill: "100px" };
    sizings2 = { size0: "0", size10: size102, size20: size202, size30: size302, size40: size402, size50: size502, size60: size602, size70: size702, size80: size802, size90: size902, size100: "64rem", size110: size1102, size120: "77rem", sizeIcon05: "0.75rem", sizeIcon10: "1rem", sizeIcon20: "1.25rem", sizeIcon30: "1.25rem", sizeIcon40: "1.5rem", sizeIcon50: "1.75rem", sizeIcon60: "1.75rem", sizeIcon70: "2rem", sizeIcon80: "2.5rem", sizeIcon90: "2.75rem", sizeIcon100: "3.25rem", sizeIcon110: "4rem", sizeSidebar: "15rem", sizeSidebarCompact: "4.75rem", sizeSquare0: "0", sizeSquare10: "0.125rem", sizeSquare20: "0.25rem", sizeSquare25: "0.375rem", sizeSquare30: "0.5rem", sizeSquare40: "0.75rem", sizeSquare50: "1rem", sizeSquare60: "1.25rem", sizeSquare70: "1.5rem", sizeSquare80: "1.75rem", sizeSquare90: "2rem", sizeSquare100: "2.25rem", sizeSquare110: "2.5rem", sizeSquare120: "2.75rem", sizeSquare130: "3rem", sizeSquare140: "3.25rem", sizeSquare150: "3.5rem", sizeSquare160: "3.75rem", sizeSquare170: "4rem", sizeSquare180: "4.25rem", sizeSquare190: "4.5rem", sizeSquare200: "4.75rem", sizeTopbar: "4.75rem" };
    spacings2 = { space0: "0", space10: space102, space20: space202, space30: space302, space40: space402, space50: "1rem", space60: space602, space70: space702, space80: space802, space90: "2rem", space100: space1002, space110: "2.5rem", space120: space1202, space130: "3rem", space140: space1402, space150: "3.5rem", space160: space1602, space170: "4rem", space180: space1802, space190: "4.5rem", space200: space2002, spaceNegative10: "-0.125rem", spaceNegative20: "-0.25rem", spaceNegative30: "-0.5rem", spaceNegative40: "-0.75rem", spaceNegative50: "-1rem", spaceNegative60: "-1.25rem", spaceNegative70: "-1.5rem", spaceNegative80: "-1.75rem", spaceNegative90: "-2rem", spaceNegative100: "-2.25rem", spaceNegative110: "-2.5rem", spaceNegative120: "-2.75rem", spaceNegative130: "-3rem", spaceNegative140: "-3.25rem", spaceNegative150: "-3.5rem", spaceNegative160: "-3.75rem", spaceNegative170: "-4rem", spaceNegative180: "-4.25rem", spaceNegative190: "-4.5rem", spaceNegative200: "-4.75rem" };
    textColors2 = { colorText: colorText2, colorTextBrandHighlight: "rgb(242, 47, 70)", colorTextBrandInverse: "rgb(255, 255, 255)", colorTextDecorative10: "rgb(96, 107, 133)", colorTextDecorative20: "rgb(0, 20, 137)", colorTextDecorative30: "rgb(14, 124, 58)", colorTextDecorative40: "rgb(109, 46, 209)", colorTextDestructive: "rgb(214, 31, 31)", colorTextDestructiveStrong: "rgb(173, 17, 17)", colorTextDestructiveStronger: "rgb(74, 11, 11)", colorTextDestructiveStrongest: "rgb(49, 12, 12)", colorTextDestructiveWeak: "rgb(246, 177, 177)", colorTextError: colorTextError2, colorTextErrorStrong: "rgb(173, 17, 17)", colorTextErrorStronger: "rgb(74, 11, 11)", colorTextErrorStrongest: "rgb(49, 12, 12)", colorTextErrorWeak: "rgb(235, 86, 86)", colorTextIcon: colorTextIcon2, colorTextIconAvailable: "rgb(14, 124, 58)", colorTextIconBrandHighlight: "rgb(242, 47, 70)", colorTextIconBrandInverse: "rgb(255, 255, 255)", colorTextIconBusy: colorTextIconBusy2, colorTextIconError: "rgb(214, 31, 31)", colorTextIconInverse: "rgb(136, 145, 170)", colorTextIconNeutral: "rgb(0, 20, 137)", colorTextIconNew: colorTextIconNew2, colorTextIconOffline: "rgb(96, 107, 133)", colorTextIconSuccess: "rgb(14, 124, 58)", colorTextIconUnavailable: "rgb(214, 31, 31)", colorTextIconWarning: "rgb(227, 106, 25)", colorTextInverse: colorTextInverse2, colorTextInverseNew: colorTextInverseNew2, colorTextInverseWeak: "rgb(202, 205, 216)", colorTextInverseWeaker: "rgb(136, 145, 170)", colorTextInverseWeakest: "rgb(75, 86, 113)", colorTextLink: colorTextLink2, colorTextLinkDestructive: "rgb(214, 31, 31)", colorTextLinkDestructiveStrong: "rgb(173, 17, 17)", colorTextLinkDestructiveStronger: "rgb(74, 11, 11)", colorTextLinkDestructiveStrongest: "rgb(49, 12, 12)", colorTextLinkDestructiveWeak: "rgb(246, 177, 177)", colorTextLinkStrong: "rgb(0, 20, 137)", colorTextLinkStronger: "rgb(3, 11, 93)", colorTextLinkStrongest: "rgb(6, 3, 58)", colorTextLinkWeak: colorTextLinkWeak2, colorTextNeutral: colorTextNeutral2, colorTextNew: colorTextNew2, colorTextPrimary: colorTextPrimary2, colorTextPrimaryStrong: "rgb(0, 20, 137)", colorTextPrimaryStronger: "rgb(3, 11, 93)", colorTextPrimaryStrongest: "rgb(6, 3, 58)", colorTextPrimaryWeak: "rgb(153, 205, 255)", colorTextSubaccount: "rgb(84, 51, 8)", colorTextSuccess: colorTextSuccess2, colorTextUser: colorTextUser2, colorTextWarning: colorTextWarning2, colorTextWarningStrong: "rgb(141, 49, 24)", colorTextWeak: colorTextWeak2, colorTextWeaker: colorTextWeaker2, colorTextWeakest: colorTextWeakest2 };
    zIndices2 = { zIndex0: "0", zIndex10: "10", zIndex20: "20", zIndex30: "30", zIndex40: "40", zIndex50: "50", zIndex60: "60", zIndex70: "70", zIndex80: "80", zIndex90: "90" };
  }
});

// node_modules/@twilio-paste/design-tokens/dist/themes/evergreen/tokens.es6.js
var colorBackground3, colorBackgroundBody3, colorBackgroundNew3, colorBackgroundOverlay, colorBackgroundUser3, colorBackgroundWeak3, colorBorder3, colorBorderError3, colorBorderInverse3, colorBorderNeutral, colorBorderPrimary, colorBorderStrong3, colorBorderSuccess, colorBorderUser3, colorBorderWarning3, colorBorderWeak3, colorBorderWeaker3, colorBorderWeakest3, colorBrand3, colorGray03, colorGray103, colorGray1003, colorGray203, colorGray303, colorGray403, colorGray503, colorGray603, colorGray703, colorGray803, colorGray903, colorText3, colorTextError3, colorTextIcon3, colorTextIconBusy3, colorTextIconNew3, colorTextInverse3, colorTextInverseNew3, colorTextLink3, colorTextLinkWeak3, colorTextNeutral3, colorTextNew3, colorTextPrimary3, colorTextSuccess3, colorTextUser3, colorTextWarning3, colorTextWeak3, colorTextWeaker3, colorTextWeakest3, fontFamilyCode3, fontFamilyDisplay3, fontFamilyText3, fontFamilyTextChineseSimplified3, fontFamilyTextChineseTraditional3, fontFamilyTextJapanese3, fontFamilyTextKorean3, shadow4, shadowBorder3, shadowBorderError3, shadowBorderStrong3, shadowBorderUser3, shadowBorderWeak3, shadowBorderWeaker3, shadowCard3, shadowFocus3, shadowFocusInset3, shadowFocusInverse3, shadowFocusInverseInset3, shadowFocusShadowBorder3, shadowHigh3, shadowLow3, size103, size1103, size203, size303, size403, size503, size603, size703, size803, size903, space103, space1003, space1203, space1403, space1603, space1803, space203, space2003, space303, space403, space603, space703, space803, backgroundColors3, borderColors3, borderWidths3, boxShadows3, colors4, colorSchemes3, dataVisualization3, fonts3, fontSizes3, fontWeights3, lineHeights3, radii3, sizings3, spacings3, textColors3, zIndices3;
var init_tokens_es63 = __esm({
  "node_modules/@twilio-paste/design-tokens/dist/themes/evergreen/tokens.es6.js"() {
    colorBackground3 = "rgb(244, 246, 250)";
    colorBackgroundBody3 = "rgb(255, 255, 255)";
    colorBackgroundNew3 = "rgb(231, 228, 249)";
    colorBackgroundOverlay = "rgba(71, 77, 102, 0.64)";
    colorBackgroundUser3 = "rgb(231, 228, 249)";
    colorBackgroundWeak3 = "rgb(249, 250, 252)";
    colorBorder3 = "rgb(216, 218, 229)";
    colorBorderError3 = "rgb(209, 67, 67)";
    colorBorderInverse3 = "rgb(136, 145, 170)";
    colorBorderNeutral = "rgb(51, 102, 255)";
    colorBorderPrimary = "rgb(51, 102, 255)";
    colorBorderStrong3 = "rgb(143, 149, 178)";
    colorBorderSuccess = "rgb(82, 189, 148)";
    colorBorderUser3 = "rgb(231, 220, 250)";
    colorBorderWarning3 = "rgb(222, 117, 72)";
    colorBorderWeak3 = "rgb(230, 232, 240)";
    colorBorderWeaker3 = "rgb(237, 239, 245)";
    colorBorderWeakest3 = "rgb(255, 255, 255)";
    colorBrand3 = "rgb(0, 20, 137)";
    colorGray03 = "rgb(255, 255, 255)";
    colorGray103 = "rgb(244, 244, 246)";
    colorGray1003 = "rgb(18, 28, 45)";
    colorGray203 = "rgb(225, 227, 234)";
    colorGray303 = "rgb(202, 205, 216)";
    colorGray403 = "rgb(174, 178, 193)";
    colorGray503 = "rgb(136, 145, 170)";
    colorGray603 = "rgb(96, 107, 133)";
    colorGray703 = "rgb(75, 86, 113)";
    colorGray803 = "rgb(57, 71, 98)";
    colorGray903 = "rgb(31, 48, 76)";
    colorText3 = "rgb(71, 77, 102)";
    colorTextError3 = "rgb(167, 54, 54)";
    colorTextIcon3 = "rgb(143, 149, 178)";
    colorTextIconBusy3 = "rgb(222, 117, 72)";
    colorTextIconNew3 = "rgb(109, 46, 209)";
    colorTextInverse3 = "rgb(255, 255, 255)";
    colorTextInverseNew3 = "rgb(200, 175, 240)";
    colorTextLink3 = "rgb(51, 102, 255)";
    colorTextLinkWeak3 = "rgb(157, 181, 255)";
    colorTextNeutral3 = "rgb(31, 61, 153)";
    colorTextNew3 = "rgb(82, 73, 136)";
    colorTextPrimary3 = "rgb(2, 99, 224)";
    colorTextSuccess3 = "rgb(36, 99, 75)";
    colorTextUser3 = "rgb(109, 46, 209)";
    colorTextWarning3 = "rgb(178, 94, 58)";
    colorTextWeak3 = "rgb(105, 111, 140)";
    colorTextWeaker3 = "rgb(143, 149, 178)";
    colorTextWeakest3 = "rgb(255, 255, 255)";
    fontFamilyCode3 = "'SF Mono', Monaco, Inconsolata, 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', monospace";
    fontFamilyDisplay3 = "'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
    fontFamilyText3 = "'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
    fontFamilyTextChineseSimplified3 = "'Inter var experimental', 'Inter var', 'Microsoft YaHei New', 微软雅黑, 'Microsoft Yahei', 'Microsoft JhengHei', 宋体, SimSun, sans-serif";
    fontFamilyTextChineseTraditional3 = "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif";
    fontFamilyTextJapanese3 = "'Inter var experimental', 'Inter var', Hiragino Sans, 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, Osaka, 'MS PGothic', sans-serif";
    fontFamilyTextKorean3 = "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif";
    shadow4 = "0 4px 16px 0 rgba(0, 0, 0, 0.5)";
    shadowBorder3 = "0 0 0 1px #D8DAE5";
    shadowBorderError3 = "0 0 0 1px #D14343";
    shadowBorderStrong3 = "0 0 0 1px #8F95B2";
    shadowBorderUser3 = "0 0 0 1px #8c5bd8";
    shadowBorderWeak3 = "0 0 0 1px #E6E8F0";
    shadowBorderWeaker3 = "0 0 0 1px #EDEFF5";
    shadowCard3 = "0 2px 4px 0 rgba(0, 0, 0, 0.4)";
    shadowFocus3 = "0 0 0 2px #ffffff, 0 0 0 3px #006dfa, 0 0 0 5px #cce4ff";
    shadowFocusInset3 = "inset 0 0 0 2px #9DB5FF";
    shadowFocusInverse3 = "0 0 0 4px rgba(255, 255, 255, 0.4)";
    shadowFocusInverseInset3 = "inset 0 0 0 2px rgba(255, 255, 255, 0.4)";
    shadowFocusShadowBorder3 = "0 0 0 1px #cacdd8, 0 0 0 3px #ffffff, 0 0 0 4px #006dfa, 0 0 0 6px #cce4ff";
    shadowHigh3 = "0 16px 24px 4px rgba(0, 0, 0, 0.5)";
    shadowLow3 = "0 2px 4px 0 rgba(0, 0, 0, 0.4)";
    size103 = "5.5rem";
    size1103 = "70.5rem";
    size203 = "12rem";
    size303 = "18.5rem";
    size403 = "25rem";
    size503 = "31.5rem";
    size603 = "38rem";
    size703 = "44.5rem";
    size803 = "51rem";
    size903 = "57.5rem";
    space103 = "0.125rem";
    space1003 = "2.25rem";
    space1203 = "2.75rem";
    space1403 = "3.25rem";
    space1603 = "3.75rem";
    space1803 = "4.25rem";
    space203 = "0.25rem";
    space2003 = "4.75rem";
    space303 = "0.5rem";
    space403 = "0.75rem";
    space603 = "1.25rem";
    space703 = "1.5rem";
    space803 = "1.75rem";
    backgroundColors3 = { colorBackground: colorBackground3, colorBackgroundAvailable: "rgb(82, 189, 148)", colorBackgroundBody: colorBackgroundBody3, colorBackgroundBodyInverse: "rgb(16, 24, 64)", colorBackgroundBrand: "rgb(71, 77, 102)", colorBackgroundBrandHighlight: "rgb(82, 189, 148)", colorBackgroundBrandHighlightWeakest: "rgb(220, 242, 234)", colorBackgroundBrandStrong: "rgb(3, 11, 93)", colorBackgroundBrandStronger: "rgb(6, 3, 58)", colorBackgroundBusy: "rgb(222, 117, 72)", colorBackgroundDecorative10Weakest: "rgb(244, 246, 250)", colorBackgroundDecorative20Weakest: "rgb(243, 246, 255)", colorBackgroundDecorative30Weakest: "rgb(238, 248, 244)", colorBackgroundDecorative40Weakest: "rgb(248, 247, 253)", colorBackgroundDestructive: "rgb(209, 67, 67)", colorBackgroundDestructiveStrong: "rgb(167, 54, 54)", colorBackgroundDestructiveStronger: "rgb(125, 40, 40)", colorBackgroundDestructiveStrongest: "rgb(79, 21, 21)", colorBackgroundDestructiveWeak: "rgb(244, 182, 182)", colorBackgroundDestructiveWeaker: "rgb(249, 218, 218)", colorBackgroundDestructiveWeakest: "rgb(253, 244, 244)", colorBackgroundError: "rgb(209, 67, 67)", colorBackgroundErrorStrong: "rgb(167, 54, 54)", colorBackgroundErrorStronger: "rgb(125, 40, 40)", colorBackgroundErrorStrongest: "rgb(49, 12, 12)", colorBackgroundErrorWeakest: "rgb(253, 244, 244)", colorBackgroundInverse: "rgb(16, 24, 64)", colorBackgroundInverseStrong: "rgb(71, 77, 102)", colorBackgroundInverseStronger: "rgb(105, 111, 140)", colorBackgroundNeutralWeakest: "rgb(244, 246, 250)", colorBackgroundNew: colorBackgroundNew3, colorBackgroundNewWeakest: "rgb(250, 247, 253)", colorBackgroundOffline: "rgb(193, 196, 214)", colorBackgroundOverlay, colorBackgroundPrimary: "rgb(51, 102, 255)", colorBackgroundPrimaryStrong: "rgb(41, 82, 204)", colorBackgroundPrimaryStronger: "rgb(31, 61, 153)", colorBackgroundPrimaryStrongest: "rgb(12, 30, 86)", colorBackgroundPrimaryWeak: "rgb(214, 224, 255)", colorBackgroundPrimaryWeaker: "rgb(235, 240, 255)", colorBackgroundPrimaryWeakest: "rgb(243, 246, 255)", colorBackgroundRequired: "rgb(235, 86, 86)", colorBackgroundRowStriped: "rgb(250, 251, 255)", colorBackgroundStrong: "rgb(230, 232, 240)", colorBackgroundStronger: "rgb(193, 196, 214)", colorBackgroundStrongest: "rgb(105, 111, 140)", colorBackgroundSubaccount: "rgb(255, 239, 210)", colorBackgroundSuccess: "rgb(82, 189, 148)", colorBackgroundSuccessWeakest: "rgb(238, 248, 244)", colorBackgroundTrial: "rgb(220, 242, 234)", colorBackgroundUnavailable: "rgb(209, 67, 67)", colorBackgroundUser: colorBackgroundUser3, colorBackgroundWarning: "rgb(222, 117, 72)", colorBackgroundWarningWeakest: "rgb(253, 247, 244)", colorBackgroundWeak: colorBackgroundWeak3 };
    borderColors3 = { colorBorder: colorBorder3, colorBorderDecorative10Weaker: "rgb(216, 218, 229)", colorBorderDecorative20Weaker: "rgb(214, 224, 255)", colorBorderDecorative30Weaker: "rgb(238, 248, 244)", colorBorderDecorative40Weaker: "rgb(231, 228, 249)", colorBorderDestructive: "rgb(209, 67, 67)", colorBorderDestructiveStrong: "rgb(167, 54, 54)", colorBorderDestructiveStronger: "rgb(125, 40, 40)", colorBorderDestructiveStrongest: "rgb(49, 12, 12)", colorBorderDestructiveWeak: "rgb(244, 182, 182)", colorBorderDestructiveWeaker: "rgb(249, 218, 218)", colorBorderDestructiveWeakest: "rgb(253, 244, 244)", colorBorderError: colorBorderError3, colorBorderErrorStrong: "rgb(167, 54, 54)", colorBorderErrorStronger: "rgb(125, 40, 40)", colorBorderErrorStrongest: "rgb(49, 12, 12)", colorBorderErrorWeak: "rgb(238, 145, 145)", colorBorderErrorWeaker: "rgb(244, 182, 182)", colorBorderErrorWeakest: "rgb(249, 218, 218)", colorBorderInverse: colorBorderInverse3, colorBorderInverseStrong: "rgb(225, 227, 234)", colorBorderInverseStronger: "rgb(244, 244, 246)", colorBorderInverseStrongest: "rgb(255, 255, 255)", colorBorderInverseWeaker: "rgb(57, 71, 98)", colorBorderInverseWeakest: "rgb(31, 48, 76)", colorBorderNeutral, colorBorderNeutralWeak: "rgb(157, 181, 255)", colorBorderNeutralWeaker: "rgb(214, 224, 255)", colorBorderNewWeaker: "rgb(231, 228, 249)", colorBorderPrimary, colorBorderPrimaryStrong: "rgb(41, 82, 204)", colorBorderPrimaryStronger: "rgb(31, 61, 153)", colorBorderPrimaryStrongest: "rgb(12, 30, 86)", colorBorderPrimaryWeak: "rgb(157, 181, 255)", colorBorderPrimaryWeaker: "rgb(214, 224, 255)", colorBorderPrimaryWeakest: "rgb(235, 240, 255)", colorBorderStrong: colorBorderStrong3, colorBorderSuccess, colorBorderSuccessWeak: "rgb(163, 230, 205)", colorBorderSuccessWeaker: "rgb(220, 242, 234)", colorBorderSuccessWeakest: "rgb(238, 248, 244)", colorBorderUser: colorBorderUser3, colorBorderWarning: colorBorderWarning3, colorBorderWarningWeak: "rgb(235, 172, 145)", colorBorderWarningWeaker: "rgb(242, 200, 182)", colorBorderWarningWeakest: "rgb(248, 227, 218)", colorBorderWeak: colorBorderWeak3, colorBorderWeaker: colorBorderWeaker3, colorBorderWeakest: colorBorderWeakest3 };
    borderWidths3 = { borderWidth0: "0", borderWidth10: "1px", borderWidth20: "2px", borderWidth30: "4px", borderWidth40: "8px" };
    boxShadows3 = { shadow: shadow4, shadowBorder: shadowBorder3, shadowBorderBottomDecorative10Weaker: "0 1px 0 #D8DAE5", shadowBorderBottomDecorative20Weaker: "0 1px 0 #D6E0FF", shadowBorderBottomDecorative30Weaker: "0 1px 0 #DCF2EA", shadowBorderBottomDecorative40Weaker: "0 1px 0 #D0CAF4", shadowBorderBottomErrorWeaker: "0 1px 0 #F4B6B6", shadowBorderBottomInverseNewWeaker: "0 1px 0 #5817bd", shadowBorderBottomNeutralWeaker: "0 1px 0 #9DB5FF", shadowBorderBottomNewWeaker: "0 1px 0 #D0CAF4", shadowBorderBottomPrimary: "0 1px 0 #006dfa", shadowBorderBottomSubaccount: "0 1px 0 #ffdd35", shadowBorderBottomSuccessWeaker: "0 1px 0 #DCF2EA", shadowBorderBottomWarningWeaker: "0 1px 0 #F2C8B6", shadowBorderDecorative10Weaker: "0 0 0 1px #e1e3ea", shadowBorderDecorative20Weaker: "0 0 0 1px #cce4ff", shadowBorderDecorative30Weaker: "0 0 0 1px #d1fae0", shadowBorderDecorative40Weaker: "0 0 0 1px #e7dcfa", shadowBorderDestructive: "0 0 0 1px #D14343", shadowBorderDestructiveStrong: "0 0 0 1px #A73636", shadowBorderDestructiveStronger: "0 0 0 1px #7D2828", shadowBorderDestructiveStrongest: "0 0 0 1px #310C0C", shadowBorderDestructiveWeak: "0 0 0 1px #F4B6B6", shadowBorderDestructiveWeaker: "0 0 0 1px #F9DADA", shadowBorderError: shadowBorderError3, shadowBorderErrorStrong: "0 0 0 1px #A73636", shadowBorderErrorStronger: "0 0 0 1px #7D2828", shadowBorderErrorStrongest: "0 0 0 1px #310c0c", shadowBorderErrorWeak: "0 0 0 1px #F4B6B6", shadowBorderErrorWeaker: "0 0 0 1px #fccfcf", shadowBorderInverse: "0 0 0 1px #8891aa", shadowBorderInverseNewWeaker: "0 0 0 1px #5817bd", shadowBorderInverseStrong: "0 0 0 1px #e1e3ea", shadowBorderInverseStronger: "0 0 0 1px #f4f4f6", shadowBorderInverseStrongest: "0 0 0 1px #ffffff", shadowBorderInverseWeaker: "0 0 0 1px #394762", shadowBorderInverseWeakest: "0 0 0 1px #1f304c", shadowBorderNeutralWeaker: "0 0 0 1px #cce4ff", shadowBorderNewWeaker: "0 0 0 1px #e7dcfa", shadowBorderPrimary: "0 0 0 1px #3366FF", shadowBorderPrimaryStrong: "0 0 0 1px #2952CC", shadowBorderPrimaryStronger: "0 0 0 1px #1F3D99", shadowBorderPrimaryStrongest: "0 0 0 1px #0C1E56", shadowBorderPrimaryWeak: "0 0 0 1px #9DB5FF", shadowBorderPrimaryWeaker: "0 0 0 1px #D6E0FF", shadowBorderStrong: shadowBorderStrong3, shadowBorderSubaccount: "0 0 0 1px #fff1b3", shadowBorderSuccessWeaker: "0 0 0 1px #d1fae0", shadowBorderUser: shadowBorderUser3, shadowBorderWarningWeaker: "0 0 0 1px #fddcc4", shadowBorderWeak: shadowBorderWeak3, shadowBorderWeaker: shadowBorderWeaker3, shadowCard: shadowCard3, shadowFocus: shadowFocus3, shadowFocusInset: shadowFocusInset3, shadowFocusInverse: shadowFocusInverse3, shadowFocusInverseInset: shadowFocusInverseInset3, shadowFocusShadowBorder: shadowFocusShadowBorder3, shadowHigh: shadowHigh3, shadowLow: shadowLow3 };
    colors4 = { colorBrand: colorBrand3, colorBrandHighlight: "rgb(242, 47, 70)", colorGray0: colorGray03, colorGray10: colorGray103, colorGray20: colorGray203, colorGray30: colorGray303, colorGray40: colorGray403, colorGray50: colorGray503, colorGray60: colorGray603, colorGray70: colorGray703, colorGray80: colorGray803, colorGray90: colorGray903, colorGray100: colorGray1003 };
    colorSchemes3 = { colorScheme: "light" };
    dataVisualization3 = { colorDataVisualization1: "rgb(4, 162, 174)", colorDataVisualization2: "rgb(209, 129, 0)", colorDataVisualization3: "rgb(24, 65, 191)", colorDataVisualization4: "rgb(122, 103, 233)", colorDataVisualization5: "rgb(17, 167, 110)", colorDataVisualization6: "rgb(10, 29, 123)", colorDataVisualization7: "rgb(221, 54, 173)", colorDataVisualization8: "rgb(206, 32, 28)", colorDataVisualization9: "rgb(105, 140, 247)", colorDataVisualization10: "rgb(243, 103, 43)" };
    fonts3 = { fontFamilyCode: fontFamilyCode3, fontFamilyDisplay: fontFamilyDisplay3, fontFamilyText: fontFamilyText3, fontFamilyTextChineseSimplified: fontFamilyTextChineseSimplified3, fontFamilyTextChineseTraditional: fontFamilyTextChineseTraditional3, fontFamilyTextJapanese: fontFamilyTextJapanese3, fontFamilyTextKorean: fontFamilyTextKorean3 };
    fontSizes3 = { fontSize10: "0.75rem", fontSize20: "0.75rem", fontSize30: "0.875rem", fontSize40: "0.875rem", fontSize50: "1rem", fontSize60: "1.25rem", fontSize70: "1.5rem", fontSize80: "2rem", fontSize90: "2rem", fontSize100: "3rem", fontSize110: "4rem", fontSizeBase: "100%", fontSizeDisplay10: "2rem", fontSizeDisplay20: "3rem", fontSizeDisplay30: "4rem" };
    fontWeights3 = { fontWeightLight: "300", fontWeightNormal: "400", fontWeightMedium: "500", fontWeightSemibold: "600", fontWeightBold: "700", fontWeightExtrabold: "800" };
    lineHeights3 = { lineHeight0: "0", lineHeight05: "0.75rem", lineHeight10: "1rem", lineHeight20: "1.25rem", lineHeight30: "1.25rem", lineHeight40: "1.5rem", lineHeight50: "1.75rem", lineHeight60: "1.75rem", lineHeight70: "2rem", lineHeight80: "2.5rem", lineHeight90: "2.75rem", lineHeight100: "3.25rem", lineHeight110: "4rem", lineHeightDisplay10: "2.5rem", lineHeightDisplay20: "3.75rem", lineHeightDisplay30: "5rem" };
    radii3 = { borderRadius0: "0", borderRadius10: "2px", borderRadius20: "4px", borderRadius30: "8px", borderRadiusCircle: "50%", borderRadiusPill: "100px" };
    sizings3 = { size0: "0", size10: size103, size20: size203, size30: size303, size40: size403, size50: size503, size60: size603, size70: size703, size80: size803, size90: size903, size100: "64rem", size110: size1103, size120: "77rem", sizeIcon05: "0.75rem", sizeIcon10: "1rem", sizeIcon20: "1.25rem", sizeIcon30: "1.25rem", sizeIcon40: "1.5rem", sizeIcon50: "1.75rem", sizeIcon60: "1.75rem", sizeIcon70: "2rem", sizeIcon80: "2.5rem", sizeIcon90: "2.75rem", sizeIcon100: "3.25rem", sizeIcon110: "4rem", sizeSidebar: "15rem", sizeSidebarCompact: "4.75rem", sizeSquare0: "0", sizeSquare10: "0.125rem", sizeSquare20: "0.25rem", sizeSquare25: "0.375rem", sizeSquare30: "0.5rem", sizeSquare40: "0.75rem", sizeSquare50: "1rem", sizeSquare60: "1.25rem", sizeSquare70: "1.5rem", sizeSquare80: "1.75rem", sizeSquare90: "2rem", sizeSquare100: "2.25rem", sizeSquare110: "2.5rem", sizeSquare120: "2.75rem", sizeSquare130: "3rem", sizeSquare140: "3.25rem", sizeSquare150: "3.5rem", sizeSquare160: "3.75rem", sizeSquare170: "4rem", sizeSquare180: "4.25rem", sizeSquare190: "4.5rem", sizeSquare200: "4.75rem", sizeTopbar: "4.75rem" };
    spacings3 = { space0: "0", space10: space103, space20: space203, space30: space303, space40: space403, space50: "1rem", space60: space603, space70: space703, space80: space803, space90: "2rem", space100: space1003, space110: "2.5rem", space120: space1203, space130: "3rem", space140: space1403, space150: "3.5rem", space160: space1603, space170: "4rem", space180: space1803, space190: "4.5rem", space200: space2003, spaceNegative10: "-0.125rem", spaceNegative20: "-0.25rem", spaceNegative30: "-0.5rem", spaceNegative40: "-0.75rem", spaceNegative50: "-1rem", spaceNegative60: "-1.25rem", spaceNegative70: "-1.5rem", spaceNegative80: "-1.75rem", spaceNegative90: "-2rem", spaceNegative100: "-2.25rem", spaceNegative110: "-2.5rem", spaceNegative120: "-2.75rem", spaceNegative130: "-3rem", spaceNegative140: "-3.25rem", spaceNegative150: "-3.5rem", spaceNegative160: "-3.75rem", spaceNegative170: "-4rem", spaceNegative180: "-4.25rem", spaceNegative190: "-4.5rem", spaceNegative200: "-4.75rem" };
    textColors3 = { colorText: colorText3, colorTextBrandHighlight: "rgb(82, 189, 148)", colorTextBrandInverse: "rgb(255, 255, 255)", colorTextDecorative10: "rgb(105, 111, 140)", colorTextDecorative20: "rgb(41, 82, 204)", colorTextDecorative30: "rgb(49, 113, 89)", colorTextDecorative40: "rgb(110, 98, 182)", colorTextDestructive: "rgb(199, 35, 35)", colorTextDestructiveStrong: "rgb(173, 17, 17)", colorTextDestructiveStronger: "rgb(74, 11, 11)", colorTextDestructiveStrongest: "rgb(49, 12, 12)", colorTextDestructiveWeak: "rgb(246, 177, 177)", colorTextError: colorTextError3, colorTextErrorStrong: "rgb(125, 40, 40)", colorTextErrorStronger: "rgb(49, 12, 12)", colorTextErrorStrongest: "rgb(49, 12, 12)", colorTextErrorWeak: "rgb(209, 67, 67)", colorTextIcon: colorTextIcon3, colorTextIconAvailable: "rgb(82, 189, 148)", colorTextIconBrandHighlight: "rgb(82, 189, 148)", colorTextIconBrandInverse: "rgb(255, 255, 255)", colorTextIconBusy: colorTextIconBusy3, colorTextIconError: "rgb(209, 67, 67)", colorTextIconInverse: "rgb(143, 149, 178)", colorTextIconNeutral: "rgb(41, 82, 204)", colorTextIconNew: colorTextIconNew3, colorTextIconOffline: "rgb(143, 149, 178)", colorTextIconSuccess: "rgb(82, 189, 148)", colorTextIconUnavailable: "rgb(209, 67, 67)", colorTextIconWarning: "rgb(222, 117, 72)", colorTextInverse: colorTextInverse3, colorTextInverseNew: colorTextInverseNew3, colorTextInverseWeak: "rgb(136, 145, 170)", colorTextInverseWeaker: "rgb(96, 107, 133)", colorTextInverseWeakest: "rgb(75, 86, 113)", colorTextLink: colorTextLink3, colorTextLinkDestructive: "rgb(209, 67, 67)", colorTextLinkDestructiveStrong: "rgb(125, 40, 40)", colorTextLinkDestructiveStronger: "rgb(49, 12, 12)", colorTextLinkDestructiveStrongest: "rgb(49, 12, 12)", colorTextLinkDestructiveWeak: "rgb(209, 67, 67)", colorTextLinkStrong: "rgb(31, 61, 153)", colorTextLinkStronger: "rgb(12, 30, 86)", colorTextLinkStrongest: "rgb(7, 19, 55)", colorTextLinkWeak: colorTextLinkWeak3, colorTextNeutral: colorTextNeutral3, colorTextNew: colorTextNew3, colorTextPrimary: colorTextPrimary3, colorTextPrimaryStrong: "rgb(0, 20, 137)", colorTextPrimaryStronger: "rgb(3, 11, 93)", colorTextPrimaryStrongest: "rgb(6, 3, 58)", colorTextPrimaryWeak: "rgb(153, 205, 255)", colorTextSubaccount: "rgb(84, 51, 8)", colorTextSuccess: colorTextSuccess3, colorTextUser: colorTextUser3, colorTextWarning: colorTextWarning3, colorTextWarningStrong: "rgb(133, 70, 43)", colorTextWeak: colorTextWeak3, colorTextWeaker: colorTextWeaker3, colorTextWeakest: colorTextWeakest3 };
    zIndices3 = { zIndex0: "0", zIndex10: "10", zIndex20: "20", zIndex30: "30", zIndex40: "40", zIndex50: "50", zIndex60: "60", zIndex70: "70", zIndex80: "80", zIndex90: "90" };
  }
});

// node_modules/@twilio-paste/design-tokens/dist/themes/dark/tokens.es6.js
var colorBackground4, colorBackgroundOverlay2, colorBorder4, colorBorderError4, colorBorderInverse4, colorBorderStrong4, colorBorderUser4, colorBorderWarning4, colorBorderWeak4, colorBrand4, colorGray04, colorGray104, colorGray1004, colorGray204, colorGray304, colorGray404, colorGray504, colorGray604, colorGray704, colorGray804, colorGray904, colorText4, colorTextError4, colorTextIcon4, colorTextIconBusy4, colorTextIconNew4, colorTextInverse4, colorTextInverseNew4, colorTextLink4, colorTextLinkStrong, colorTextNeutral4, colorTextNew4, colorTextPrimary4, colorTextSubaccount, colorTextSuccess4, colorTextUser4, colorTextWarning4, colorTextWeak4, colorTextWeaker4, colorTextWeakest4, fontFamilyCode4, fontFamilyDisplay4, fontFamilyText4, fontFamilyTextChineseSimplified4, fontFamilyTextChineseTraditional4, fontFamilyTextJapanese4, fontFamilyTextKorean4, shadow5, shadowBorder4, shadowBorderError4, shadowBorderStrong4, shadowBorderUser4, shadowBorderWeak4, shadowBorderWeaker4, shadowCard4, shadowFocus4, shadowFocusInset4, shadowFocusInverse4, shadowFocusInverseInset4, shadowFocusShadowBorder4, shadowHigh4, shadowLow4, size104, size1104, size204, size304, size404, size504, size604, size704, size804, size904, space104, space1004, space1204, space1404, space1604, space1804, space204, space2004, space304, space404, space604, space704, space804, backgroundColors4, borderColors4, borderWidths4, boxShadows4, colors5, colorSchemes4, dataVisualization4, fonts4, fontSizes4, fontWeights4, lineHeights4, radii4, sizings4, spacings4, textColors4, zIndices4;
var init_tokens_es64 = __esm({
  "node_modules/@twilio-paste/design-tokens/dist/themes/dark/tokens.es6.js"() {
    colorBackground4 = "rgb(18, 28, 45)";
    colorBackgroundOverlay2 = "rgba(18, 28, 45, 0.9)";
    colorBorder4 = "rgb(96, 107, 133)";
    colorBorderError4 = "rgb(214, 31, 31)";
    colorBorderInverse4 = "rgb(136, 145, 170)";
    colorBorderStrong4 = "rgb(136, 145, 170)";
    colorBorderUser4 = "rgb(88, 23, 189)";
    colorBorderWarning4 = "rgb(244, 124, 34)";
    colorBorderWeak4 = "rgb(57, 71, 98)";
    colorBrand4 = "rgb(0, 20, 137)";
    colorGray04 = "rgb(255, 255, 255)";
    colorGray104 = "rgb(244, 244, 246)";
    colorGray1004 = "rgb(18, 28, 45)";
    colorGray204 = "rgb(225, 227, 234)";
    colorGray304 = "rgb(202, 205, 216)";
    colorGray404 = "rgb(174, 178, 193)";
    colorGray504 = "rgb(136, 145, 170)";
    colorGray604 = "rgb(96, 107, 133)";
    colorGray704 = "rgb(75, 86, 113)";
    colorGray804 = "rgb(57, 71, 98)";
    colorGray904 = "rgb(31, 48, 76)";
    colorText4 = "rgb(244, 244, 246)";
    colorTextError4 = "rgb(235, 86, 86)";
    colorTextIcon4 = "rgb(136, 145, 170)";
    colorTextIconBusy4 = "rgb(255, 179, 122)";
    colorTextIconNew4 = "rgb(200, 175, 240)";
    colorTextInverse4 = "rgb(255, 255, 255)";
    colorTextInverseNew4 = "rgb(200, 175, 240)";
    colorTextLink4 = "rgb(0, 140, 255)";
    colorTextLinkStrong = "rgb(153, 205, 255)";
    colorTextNeutral4 = "rgb(204, 228, 255)";
    colorTextNew4 = "rgb(231, 220, 250)";
    colorTextPrimary4 = "rgb(0, 140, 255)";
    colorTextSubaccount = "rgb(255, 233, 128)";
    colorTextSuccess4 = "rgb(162, 246, 195)";
    colorTextUser4 = "rgb(255, 255, 255)";
    colorTextWarning4 = "rgb(255, 179, 122)";
    colorTextWeak4 = "rgb(136, 145, 170)";
    colorTextWeaker4 = "rgb(57, 71, 98)";
    colorTextWeakest4 = "rgb(13, 19, 28)";
    fontFamilyCode4 = "'TwilioSansMono', Courier, monospace";
    fontFamilyDisplay4 = "'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
    fontFamilyText4 = "'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
    fontFamilyTextChineseSimplified4 = "'Inter var experimental', 'Inter var', 'Microsoft YaHei New', 微软雅黑, 'Microsoft Yahei', 'Microsoft JhengHei', 宋体, SimSun, sans-serif";
    fontFamilyTextChineseTraditional4 = "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif";
    fontFamilyTextJapanese4 = "'Inter var experimental', 'Inter var', Hiragino Sans, 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, Osaka, 'MS PGothic', sans-serif";
    fontFamilyTextKorean4 = "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif";
    shadow5 = "0 4px 16px 0 rgba(0, 0, 0, 0.5)";
    shadowBorder4 = "0 0 0 1px #606b85";
    shadowBorderError4 = "0 0 0 1px #d61f1f";
    shadowBorderStrong4 = "0 0 0 1px #8891aa";
    shadowBorderUser4 = "0 0 0 1px #f5f0fc";
    shadowBorderWeak4 = "0 0 0 1px #394762";
    shadowBorderWeaker4 = "0 0 0 1px #1f304c";
    shadowCard4 = "0 2px 4px 0 rgba(0, 0, 0, 0.4)";
    shadowFocus4 = "0 0 0 4px #606b85";
    shadowFocusInset4 = "inset 0 0 0 2px #606b85";
    shadowFocusInverse4 = "0 0 0 4px #8891aa";
    shadowFocusInverseInset4 = "inset 0 0 0 2px rgba(255, 255, 255, 0.4)";
    shadowFocusShadowBorder4 = "0 0 0 4px #606b85, 0 0 0 1px #606b85";
    shadowHigh4 = "0 16px 24px 4px rgba(0, 0, 0, 0.5)";
    shadowLow4 = "0 2px 4px 0 rgba(0, 0, 0, 0.4)";
    size104 = "5.5rem";
    size1104 = "70.5rem";
    size204 = "12rem";
    size304 = "18.5rem";
    size404 = "25rem";
    size504 = "31.5rem";
    size604 = "38rem";
    size704 = "44.5rem";
    size804 = "51rem";
    size904 = "57.5rem";
    space104 = "0.125rem";
    space1004 = "2.25rem";
    space1204 = "2.75rem";
    space1404 = "3.25rem";
    space1604 = "3.75rem";
    space1804 = "4.25rem";
    space204 = "0.25rem";
    space2004 = "4.75rem";
    space304 = "0.5rem";
    space404 = "0.75rem";
    space604 = "1.25rem";
    space704 = "1.5rem";
    space804 = "1.75rem";
    backgroundColors4 = { colorBackground: colorBackground4, colorBackgroundAvailable: "rgb(20, 176, 83)", colorBackgroundBody: "rgb(13, 19, 28)", colorBackgroundBodyInverse: "rgb(18, 28, 45)", colorBackgroundBrand: "rgb(18, 28, 45)", colorBackgroundBrandHighlight: "rgb(242, 47, 70)", colorBackgroundBrandHighlightWeakest: "rgba(242, 47, 70, 0.1)", colorBackgroundBrandStrong: "rgb(31, 48, 76)", colorBackgroundBrandStronger: "rgb(18, 28, 45)", colorBackgroundBusy: "rgb(244, 124, 34)", colorBackgroundDecorative10Weakest: "rgb(18, 28, 45)", colorBackgroundDecorative20Weakest: "rgb(3, 11, 93)", colorBackgroundDecorative30Weakest: "rgb(5, 41, 18)", colorBackgroundDecorative40Weakest: "rgb(56, 14, 120)", colorBackgroundDestructive: "rgb(214, 31, 31)", colorBackgroundDestructiveStrong: "rgb(246, 177, 177)", colorBackgroundDestructiveStronger: "rgb(252, 207, 207)", colorBackgroundDestructiveStrongest: "rgb(254, 236, 236)", colorBackgroundDestructiveWeak: "rgb(57, 71, 98)", colorBackgroundDestructiveWeaker: "rgb(31, 48, 76)", colorBackgroundDestructiveWeakest: "rgb(18, 28, 45)", colorBackgroundError: "rgb(214, 31, 31)", colorBackgroundErrorStrong: "rgb(245, 138, 138)", colorBackgroundErrorStronger: "rgb(252, 207, 207)", colorBackgroundErrorStrongest: "rgb(254, 236, 236)", colorBackgroundErrorWeakest: "rgb(49, 12, 12)", colorBackgroundInverse: "rgb(31, 48, 76)", colorBackgroundInverseStrong: "rgb(57, 71, 98)", colorBackgroundInverseStronger: "rgb(57, 71, 98)", colorBackgroundNeutralWeakest: "rgb(3, 11, 93)", colorBackgroundNew: "rgb(56, 14, 120)", colorBackgroundNewWeakest: "rgb(18, 28, 45)", colorBackgroundOffline: "rgb(174, 178, 193)", colorBackgroundOverlay: colorBackgroundOverlay2, colorBackgroundPrimary: "rgb(2, 99, 224)", colorBackgroundPrimaryStrong: "rgb(153, 205, 255)", colorBackgroundPrimaryStronger: "rgb(204, 228, 255)", colorBackgroundPrimaryStrongest: "rgb(235, 244, 255)", colorBackgroundPrimaryWeak: "rgb(57, 71, 98)", colorBackgroundPrimaryWeaker: "rgb(31, 48, 76)", colorBackgroundPrimaryWeakest: "rgb(18, 28, 45)", colorBackgroundRequired: "rgb(235, 86, 86)", colorBackgroundRowStriped: "rgb(18, 28, 45)", colorBackgroundStrong: "rgb(31, 48, 76)", colorBackgroundStronger: "rgb(96, 107, 133)", colorBackgroundStrongest: "rgb(225, 227, 234)", colorBackgroundSubaccount: "rgb(18, 28, 45)", colorBackgroundSuccess: "rgb(20, 176, 83)", colorBackgroundSuccessWeakest: "rgb(5, 41, 18)", colorBackgroundTrial: "rgb(5, 41, 18)", colorBackgroundUnavailable: "rgb(214, 31, 31)", colorBackgroundUser: "rgb(88, 23, 189)", colorBackgroundWarning: "rgb(244, 124, 34)", colorBackgroundWarningWeakest: "rgb(64, 19, 15)", colorBackgroundWeak: "rgb(18, 28, 45)" };
    borderColors4 = { colorBorder: colorBorder4, colorBorderDecorative10Weaker: "rgb(31, 48, 76)", colorBorderDecorative20Weaker: "rgb(0, 20, 137)", colorBorderDecorative30Weaker: "rgb(13, 58, 31)", colorBorderDecorative40Weaker: "rgb(88, 23, 189)", colorBorderDestructive: "rgb(214, 31, 31)", colorBorderDestructiveStrong: "rgb(246, 177, 177)", colorBorderDestructiveStronger: "rgb(252, 207, 207)", colorBorderDestructiveStrongest: "rgb(254, 236, 236)", colorBorderDestructiveWeak: "rgb(57, 71, 98)", colorBorderDestructiveWeaker: "rgb(31, 48, 76)", colorBorderDestructiveWeakest: "rgb(18, 28, 45)", colorBorderError: colorBorderError4, colorBorderErrorStrong: "rgb(246, 177, 177)", colorBorderErrorStronger: "rgb(252, 207, 207)", colorBorderErrorStrongest: "rgb(254, 236, 236)", colorBorderErrorWeak: "rgb(173, 17, 17)", colorBorderErrorWeaker: "rgb(117, 12, 12)", colorBorderErrorWeakest: "rgb(49, 12, 12)", colorBorderInverse: colorBorderInverse4, colorBorderInverseStrong: "rgb(225, 227, 234)", colorBorderInverseStronger: "rgb(244, 244, 246)", colorBorderInverseStrongest: "rgb(255, 255, 255)", colorBorderInverseWeaker: "rgb(57, 71, 98)", colorBorderInverseWeakest: "rgb(31, 48, 76)", colorBorderNeutral: "rgb(2, 99, 224)", colorBorderNeutralWeak: "rgb(4, 60, 181)", colorBorderNeutralWeaker: "rgb(0, 20, 137)", colorBorderNewWeaker: "rgb(88, 23, 189)", colorBorderPrimary: "rgb(2, 99, 224)", colorBorderPrimaryStrong: "rgb(153, 205, 255)", colorBorderPrimaryStronger: "rgb(204, 228, 255)", colorBorderPrimaryStrongest: "rgb(235, 244, 255)", colorBorderPrimaryWeak: "rgb(57, 71, 98)", colorBorderPrimaryWeaker: "rgb(31, 48, 76)", colorBorderPrimaryWeakest: "rgb(18, 28, 45)", colorBorderStrong: colorBorderStrong4, colorBorderSuccess: "rgb(20, 176, 83)", colorBorderSuccessWeak: "rgb(14, 124, 58)", colorBorderSuccessWeaker: "rgb(13, 58, 31)", colorBorderSuccessWeakest: "rgb(5, 41, 18)", colorBorderUser: colorBorderUser4, colorBorderWarning: colorBorderWarning4, colorBorderWarningWeak: "rgb(195, 83, 35)", colorBorderWarningWeaker: "rgb(84, 25, 20)", colorBorderWarningWeakest: "rgb(64, 19, 15)", colorBorderWeak: colorBorderWeak4, colorBorderWeaker: "rgb(31, 48, 76)", colorBorderWeakest: "rgb(13, 19, 28)" };
    borderWidths4 = { borderWidth0: "0", borderWidth10: "1px", borderWidth20: "2px", borderWidth30: "4px", borderWidth40: "8px" };
    boxShadows4 = { shadow: shadow5, shadowBorder: shadowBorder4, shadowBorderBottomDecorative10Weaker: "0 1px 0 #1f304c", shadowBorderBottomDecorative20Weaker: "0 1px 0 #001489", shadowBorderBottomDecorative30Weaker: "0 1px 0 #0d3a1f", shadowBorderBottomDecorative40Weaker: "0 1px 0 #5817bd", shadowBorderBottomErrorWeaker: "0 1px 0 #750c0c", shadowBorderBottomInverseNewWeaker: "0 1px 0 #5817bd", shadowBorderBottomNeutralWeaker: "0 1px 0 #001489", shadowBorderBottomNewWeaker: "0 1px 0 #5817bd", shadowBorderBottomPrimary: "0 1px 0 #006dfa", shadowBorderBottomSubaccount: "0 1px 0 #c28e00", shadowBorderBottomSuccessWeaker: "0 1px 0 #0d3a1f", shadowBorderBottomWarningWeaker: "0 1px 0 #541914", shadowBorderDecorative10Weaker: "0 0 0 1px #1f304c", shadowBorderDecorative20Weaker: "0 0 0 1px #043cb5", shadowBorderDecorative30Weaker: "0 0 0 1px #0e7c3a", shadowBorderDecorative40Weaker: "0 0 0 1px #5817bd", shadowBorderDestructive: "0 0 0 1px #d61f1f", shadowBorderDestructiveStrong: "0 0 0 1px #f6b1b1", shadowBorderDestructiveStronger: "0 0 0 1px #fccfcf", shadowBorderDestructiveStrongest: "0 0 0 1px #feecec", shadowBorderDestructiveWeak: "0 0 0 1px #394762", shadowBorderDestructiveWeaker: "0 0 0 1px #1f304c", shadowBorderError: shadowBorderError4, shadowBorderErrorStrong: "0 0 0 1px #f6b1b1", shadowBorderErrorStronger: "0 0 0 1px #fccfcf", shadowBorderErrorStrongest: "0 0 0 1px #feecec", shadowBorderErrorWeak: "0 0 0 1px #ad1111", shadowBorderErrorWeaker: "0 0 0 1px #ad1111", shadowBorderInverse: "0 0 0 1px #8891aa", shadowBorderInverseNewWeaker: "0 0 0 1px #5817bd", shadowBorderInverseStrong: "0 0 0 1px #e1e3ea", shadowBorderInverseStronger: "0 0 0 1px #f4f4f6", shadowBorderInverseStrongest: "0 0 0 1px #ffffff", shadowBorderInverseWeaker: "0 0 0 1px #394762", shadowBorderInverseWeakest: "0 0 0 1px #1f304c", shadowBorderNeutralWeaker: "0 0 0 1px #043cb5", shadowBorderNewWeaker: "0 0 0 1px #5817bd", shadowBorderPrimary: "0 0 0 1px #0263e0", shadowBorderPrimaryStrong: "0 0 0 1px #99cdff", shadowBorderPrimaryStronger: "0 0 0 1px #cce4ff", shadowBorderPrimaryStrongest: "0 0 0 1px #ebf4ff", shadowBorderPrimaryWeak: "0 0 0 1px #394762", shadowBorderPrimaryWeaker: "0 0 0 1px #1f304c", shadowBorderStrong: shadowBorderStrong4, shadowBorderSubaccount: "0 0 0 1px #c28e00", shadowBorderSuccessWeaker: "0 0 0 1px #0e7c3a", shadowBorderUser: shadowBorderUser4, shadowBorderWarningWeaker: "0 0 0 1px #c35323", shadowBorderWeak: shadowBorderWeak4, shadowBorderWeaker: shadowBorderWeaker4, shadowCard: shadowCard4, shadowFocus: shadowFocus4, shadowFocusInset: shadowFocusInset4, shadowFocusInverse: shadowFocusInverse4, shadowFocusInverseInset: shadowFocusInverseInset4, shadowFocusShadowBorder: shadowFocusShadowBorder4, shadowHigh: shadowHigh4, shadowLow: shadowLow4 };
    colors5 = { colorBrand: colorBrand4, colorBrandHighlight: "rgb(242, 47, 70)", colorGray0: colorGray04, colorGray10: colorGray104, colorGray20: colorGray204, colorGray30: colorGray304, colorGray40: colorGray404, colorGray50: colorGray504, colorGray60: colorGray604, colorGray70: colorGray704, colorGray80: colorGray804, colorGray90: colorGray904, colorGray100: colorGray1004 };
    colorSchemes4 = { colorScheme: "dark" };
    dataVisualization4 = { colorDataVisualization1: "rgb(2, 99, 224)", colorDataVisualization2: "rgb(200, 175, 240)", colorDataVisualization3: "rgb(96, 107, 133)", colorDataVisualization4: "rgb(102, 179, 255)", colorDataVisualization5: "rgb(14, 124, 58)", colorDataVisualization6: "rgb(250, 153, 80)", colorDataVisualization7: "rgb(195, 83, 35)", colorDataVisualization8: "rgb(246, 177, 177)", colorDataVisualization9: "rgb(140, 91, 216)", colorDataVisualization10: "rgb(232, 180, 7)" };
    fonts4 = { fontFamilyCode: fontFamilyCode4, fontFamilyDisplay: fontFamilyDisplay4, fontFamilyText: fontFamilyText4, fontFamilyTextChineseSimplified: fontFamilyTextChineseSimplified4, fontFamilyTextChineseTraditional: fontFamilyTextChineseTraditional4, fontFamilyTextJapanese: fontFamilyTextJapanese4, fontFamilyTextKorean: fontFamilyTextKorean4 };
    fontSizes4 = { fontSize10: "0.625rem", fontSize20: "0.75rem", fontSize30: "0.875rem", fontSize40: "1rem", fontSize50: "1.125rem", fontSize60: "1.25rem", fontSize70: "1.5rem", fontSize80: "1.75rem", fontSize90: "2rem", fontSize100: "2.5rem", fontSize110: "3rem", fontSizeBase: "100%", fontSizeDisplay10: "2rem", fontSizeDisplay20: "3rem", fontSizeDisplay30: "4rem" };
    fontWeights4 = { fontWeightLight: "400", fontWeightNormal: "400", fontWeightMedium: "500", fontWeightSemibold: "600", fontWeightBold: "700", fontWeightExtrabold: "800" };
    lineHeights4 = { lineHeight0: "0", lineHeight05: "0.75rem", lineHeight10: "1rem", lineHeight20: "1.25rem", lineHeight30: "1.25rem", lineHeight40: "1.5rem", lineHeight50: "1.75rem", lineHeight60: "1.75rem", lineHeight70: "2rem", lineHeight80: "2.5rem", lineHeight90: "2.75rem", lineHeight100: "3.25rem", lineHeight110: "4rem", lineHeightDisplay10: "2.5rem", lineHeightDisplay20: "3.75rem", lineHeightDisplay30: "5rem" };
    radii4 = { borderRadius0: "0", borderRadius10: "2px", borderRadius20: "4px", borderRadius30: "8px", borderRadiusCircle: "50%", borderRadiusPill: "100px" };
    sizings4 = { size0: "0", size10: size104, size20: size204, size30: size304, size40: size404, size50: size504, size60: size604, size70: size704, size80: size804, size90: size904, size100: "64rem", size110: size1104, size120: "77rem", sizeIcon05: "0.75rem", sizeIcon10: "1rem", sizeIcon20: "1.25rem", sizeIcon30: "1.25rem", sizeIcon40: "1.5rem", sizeIcon50: "1.75rem", sizeIcon60: "1.75rem", sizeIcon70: "2rem", sizeIcon80: "2.5rem", sizeIcon90: "2.75rem", sizeIcon100: "3.25rem", sizeIcon110: "4rem", sizeSidebar: "15rem", sizeSidebarCompact: "4.75rem", sizeSquare0: "0", sizeSquare10: "0.125rem", sizeSquare20: "0.25rem", sizeSquare25: "0.375rem", sizeSquare30: "0.5rem", sizeSquare40: "0.75rem", sizeSquare50: "1rem", sizeSquare60: "1.25rem", sizeSquare70: "1.5rem", sizeSquare80: "1.75rem", sizeSquare90: "2rem", sizeSquare100: "2.25rem", sizeSquare110: "2.5rem", sizeSquare120: "2.75rem", sizeSquare130: "3rem", sizeSquare140: "3.25rem", sizeSquare150: "3.5rem", sizeSquare160: "3.75rem", sizeSquare170: "4rem", sizeSquare180: "4.25rem", sizeSquare190: "4.5rem", sizeSquare200: "4.75rem", sizeTopbar: "4.75rem" };
    spacings4 = { space0: "0", space10: space104, space20: space204, space30: space304, space40: space404, space50: "1rem", space60: space604, space70: space704, space80: space804, space90: "2rem", space100: space1004, space110: "2.5rem", space120: space1204, space130: "3rem", space140: space1404, space150: "3.5rem", space160: space1604, space170: "4rem", space180: space1804, space190: "4.5rem", space200: space2004, spaceNegative10: "-0.125rem", spaceNegative20: "-0.25rem", spaceNegative30: "-0.5rem", spaceNegative40: "-0.75rem", spaceNegative50: "-1rem", spaceNegative60: "-1.25rem", spaceNegative70: "-1.5rem", spaceNegative80: "-1.75rem", spaceNegative90: "-2rem", spaceNegative100: "-2.25rem", spaceNegative110: "-2.5rem", spaceNegative120: "-2.75rem", spaceNegative130: "-3rem", spaceNegative140: "-3.25rem", spaceNegative150: "-3.5rem", spaceNegative160: "-3.75rem", spaceNegative170: "-4rem", spaceNegative180: "-4.25rem", spaceNegative190: "-4.5rem", spaceNegative200: "-4.75rem" };
    textColors4 = { colorText: colorText4, colorTextBrandHighlight: "rgb(242, 47, 70)", colorTextBrandInverse: "rgb(255, 255, 255)", colorTextDecorative10: "rgb(225, 227, 234)", colorTextDecorative20: "rgb(204, 228, 255)", colorTextDecorative30: "rgb(162, 246, 195)", colorTextDecorative40: "rgb(231, 220, 250)", colorTextDestructive: "rgb(235, 86, 86)", colorTextDestructiveStrong: "rgb(246, 177, 177)", colorTextDestructiveStronger: "rgb(254, 236, 236)", colorTextDestructiveStrongest: "rgb(255, 255, 255)", colorTextDestructiveWeak: "rgb(57, 71, 98)", colorTextError: colorTextError4, colorTextErrorStrong: "rgb(246, 177, 177)", colorTextErrorStronger: "rgb(254, 236, 236)", colorTextErrorStrongest: "rgb(254, 236, 236)", colorTextErrorWeak: "rgb(235, 86, 86)", colorTextIcon: colorTextIcon4, colorTextIconAvailable: "rgb(54, 213, 118)", colorTextIconBrandHighlight: "rgb(242, 47, 70)", colorTextIconBrandInverse: "rgb(255, 255, 255)", colorTextIconBusy: colorTextIconBusy4, colorTextIconError: "rgb(235, 86, 86)", colorTextIconInverse: "rgb(225, 227, 234)", colorTextIconNeutral: "rgb(102, 179, 255)", colorTextIconNew: colorTextIconNew4, colorTextIconOffline: "rgb(244, 244, 246)", colorTextIconSuccess: "rgb(54, 213, 118)", colorTextIconUnavailable: "rgb(235, 86, 86)", colorTextIconWarning: "rgb(255, 179, 122)", colorTextInverse: colorTextInverse4, colorTextInverseNew: colorTextInverseNew4, colorTextInverseWeak: "rgb(202, 205, 216)", colorTextInverseWeaker: "rgb(136, 145, 170)", colorTextInverseWeakest: "rgb(75, 86, 113)", colorTextLink: colorTextLink4, colorTextLinkDestructive: "rgb(235, 86, 86)", colorTextLinkDestructiveStrong: "rgb(246, 177, 177)", colorTextLinkDestructiveStronger: "rgb(254, 236, 236)", colorTextLinkDestructiveStrongest: "rgb(255, 255, 255)", colorTextLinkDestructiveWeak: "rgb(57, 71, 98)", colorTextLinkStrong, colorTextLinkStronger: "rgb(235, 244, 255)", colorTextLinkStrongest: "rgb(255, 255, 255)", colorTextLinkWeak: "rgb(57, 71, 98)", colorTextNeutral: colorTextNeutral4, colorTextNew: colorTextNew4, colorTextPrimary: colorTextPrimary4, colorTextPrimaryStrong: "rgb(153, 205, 255)", colorTextPrimaryStronger: "rgb(153, 205, 255)", colorTextPrimaryStrongest: "rgb(255, 255, 255)", colorTextPrimaryWeak: "rgb(57, 71, 98)", colorTextSubaccount, colorTextSuccess: colorTextSuccess4, colorTextUser: colorTextUser4, colorTextWarning: colorTextWarning4, colorTextWarningStrong: "rgb(250, 194, 160)", colorTextWeak: colorTextWeak4, colorTextWeaker: colorTextWeaker4, colorTextWeakest: colorTextWeakest4 };
    zIndices4 = { zIndex0: "0", zIndex10: "10", zIndex20: "20", zIndex30: "30", zIndex40: "40", zIndex50: "50", zIndex60: "60", zIndex70: "70", zIndex80: "80", zIndex90: "90" };
  }
});

// node_modules/@twilio-paste/design-tokens/dist/themes/twilio/tokens.es6.js
var colorBackground5, colorBackgroundBody4, colorBackgroundNew4, colorBackgroundOverlay3, colorBackgroundUser4, colorBackgroundWeak4, colorBorder5, colorBorderError5, colorBorderInverse5, colorBorderStrong5, colorBorderUser5, colorBorderWarning5, colorBorderWeak5, colorBorderWeaker4, colorBorderWeakest4, colorBrand5, colorGray05, colorGray105, colorGray1005, colorGray205, colorGray305, colorGray405, colorGray505, colorGray605, colorGray705, colorGray805, colorGray905, colorText5, colorTextError5, colorTextIcon5, colorTextIconBusy5, colorTextIconNew5, colorTextInverse5, colorTextInverseNew5, colorTextLink5, colorTextLinkWeak4, colorTextNew5, colorTextPrimary5, colorTextSuccess5, colorTextUser5, colorTextWarning5, colorTextWeak5, colorTextWeaker5, colorTextWeakest5, fontFamilyCode5, fontFamilyDisplay5, fontFamilyText5, fontFamilyTextChineseSimplified5, fontFamilyTextChineseTraditional5, fontFamilyTextJapanese5, fontFamilyTextKorean5, shadow6, shadowBorder5, shadowBorderError5, shadowBorderStrong5, shadowBorderUser5, shadowBorderWeak5, shadowBorderWeaker5, shadowCard5, shadowFocus5, shadowFocusInset5, shadowFocusInverse5, shadowFocusInverseInset5, shadowFocusShadowBorder5, shadowHigh5, shadowLow5, size105, size1105, size205, size305, size405, size505, size605, size705, size805, size905, space105, space1005, space1205, space1405, space1605, space1805, space205, space2005, space305, space405, space605, space705, space805, backgroundColors5, borderColors5, borderWidths5, boxShadows5, colors6, colorSchemes5, dataVisualization5, fonts5, fontSizes5, fontWeights5, lineHeights5, radii5, sizings5, spacings5, textColors5, zIndices5;
var init_tokens_es65 = __esm({
  "node_modules/@twilio-paste/design-tokens/dist/themes/twilio/tokens.es6.js"() {
    colorBackground5 = "rgb(244, 244, 246)";
    colorBackgroundBody4 = "rgb(255, 255, 255)";
    colorBackgroundNew4 = "rgb(245, 240, 252)";
    colorBackgroundOverlay3 = "rgba(96, 107, 133, 0.5)";
    colorBackgroundUser4 = "rgb(250, 247, 253)";
    colorBackgroundWeak4 = "rgb(249, 249, 250)";
    colorBorder5 = "rgb(136, 145, 170)";
    colorBorderError5 = "rgb(199, 35, 35)";
    colorBorderInverse5 = "rgb(136, 145, 170)";
    colorBorderStrong5 = "rgb(96, 107, 133)";
    colorBorderUser5 = "rgb(231, 220, 250)";
    colorBorderWarning5 = "rgb(244, 124, 34)";
    colorBorderWeak5 = "rgb(202, 205, 216)";
    colorBorderWeaker4 = "rgb(225, 227, 234)";
    colorBorderWeakest4 = "rgb(255, 255, 255)";
    colorBrand5 = "rgb(0, 20, 137)";
    colorGray05 = "rgb(255, 255, 255)";
    colorGray105 = "rgb(244, 244, 246)";
    colorGray1005 = "rgb(18, 28, 45)";
    colorGray205 = "rgb(225, 227, 234)";
    colorGray305 = "rgb(202, 205, 216)";
    colorGray405 = "rgb(174, 178, 193)";
    colorGray505 = "rgb(136, 145, 170)";
    colorGray605 = "rgb(96, 107, 133)";
    colorGray705 = "rgb(75, 86, 113)";
    colorGray805 = "rgb(57, 71, 98)";
    colorGray905 = "rgb(31, 48, 76)";
    colorText5 = "rgb(18, 28, 45)";
    colorTextError5 = "rgb(199, 35, 35)";
    colorTextIcon5 = "rgb(96, 107, 133)";
    colorTextIconBusy5 = "rgb(227, 106, 25)";
    colorTextIconNew5 = "rgb(109, 46, 209)";
    colorTextInverse5 = "rgb(255, 255, 255)";
    colorTextInverseNew5 = "rgb(200, 175, 240)";
    colorTextLink5 = "rgb(2, 99, 224)";
    colorTextLinkWeak4 = "rgb(153, 205, 255)";
    colorTextNew5 = "rgb(109, 46, 209)";
    colorTextPrimary5 = "rgb(2, 99, 224)";
    colorTextSuccess5 = "rgb(11, 96, 45)";
    colorTextUser5 = "rgb(109, 46, 209)";
    colorTextWarning5 = "rgb(141, 49, 24)";
    colorTextWeak5 = "rgb(96, 107, 133)";
    colorTextWeaker5 = "rgb(174, 178, 193)";
    colorTextWeakest5 = "rgb(255, 255, 255)";
    fontFamilyCode5 = "'TwilioSansMono', Courier, monospace";
    fontFamilyDisplay5 = "'TwilioSansDisplay', 'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
    fontFamilyText5 = "'TwilioSansText', 'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
    fontFamilyTextChineseSimplified5 = "'Inter var experimental', 'Inter var', 'Microsoft YaHei New', 微软雅黑, 'Microsoft Yahei', 'Microsoft JhengHei', 宋体, SimSun, sans-serif";
    fontFamilyTextChineseTraditional5 = "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif";
    fontFamilyTextJapanese5 = "'Inter var experimental', 'Inter var', Hiragino Sans, 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, Osaka, 'MS PGothic', sans-serif";
    fontFamilyTextKorean5 = "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif";
    shadow6 = "0 4px 16px 0 rgba(18, 28, 45, 0.2)";
    shadowBorder5 = "0 0 0 1px #8891aa";
    shadowBorderError5 = "0 0 0 1px #c72323";
    shadowBorderStrong5 = "0 0 0 1px #606b85";
    shadowBorderUser5 = "0 0 0 1px #e7dcfa";
    shadowBorderWeak5 = "0 0 0 1px #cacdd8";
    shadowBorderWeaker5 = "0 0 0 1px #e1e3ea";
    shadowCard5 = "0 2px 8px 0 rgba(18, 28, 45, 0.1)";
    shadowFocus5 = "0 0 0 2px #ffffff, 0 0 0 3px #006dfa, 0 0 0 5px #cce4ff";
    shadowFocusInset5 = "inset 0 0 0 1px #006dfa, inset 0 0 0 3px #cce4ff";
    shadowFocusInverse5 = "0 0 0 1px #394762, 0 0 0 3px #121c2d, 0 0 0 4px #ffffff, 0 0 0 6px rgba(255, 255, 255, 0.2)";
    shadowFocusInverseInset5 = "0 0 0 1px #ffffff, inset 0 0 0 3px rgba(255, 255, 255, 0.2)";
    shadowFocusShadowBorder5 = "0 0 0 1px #cacdd8, 0 0 0 3px #ffffff, 0 0 0 4px #006dfa, 0 0 0 6px #cce4ff";
    shadowHigh5 = "0 16px 24px 0 rgba(18, 28, 45, 0.2)";
    shadowLow5 = "0 2px 8px 0 rgba(18, 28, 45, 0.1)";
    size105 = "5.5rem";
    size1105 = "70.5rem";
    size205 = "12rem";
    size305 = "18.5rem";
    size405 = "25rem";
    size505 = "31.5rem";
    size605 = "38rem";
    size705 = "44.5rem";
    size805 = "51rem";
    size905 = "57.5rem";
    space105 = "0.125rem";
    space1005 = "2.25rem";
    space1205 = "2.75rem";
    space1405 = "3.25rem";
    space1605 = "3.75rem";
    space1805 = "4.25rem";
    space205 = "0.25rem";
    space2005 = "4.75rem";
    space305 = "0.5rem";
    space405 = "0.75rem";
    space605 = "1.25rem";
    space705 = "1.5rem";
    space805 = "1.75rem";
    backgroundColors5 = { colorBackground: colorBackground5, colorBackgroundAvailable: "rgb(20, 176, 83)", colorBackgroundBody: colorBackgroundBody4, colorBackgroundBodyInverse: "rgb(18, 28, 45)", colorBackgroundBrand: "rgb(0, 20, 137)", colorBackgroundBrandHighlight: "rgb(242, 47, 70)", colorBackgroundBrandHighlightWeakest: "rgba(242, 47, 70, 0.1)", colorBackgroundBrandStrong: "rgb(3, 11, 93)", colorBackgroundBrandStronger: "rgb(6, 3, 58)", colorBackgroundBusy: "rgb(244, 124, 34)", colorBackgroundDecorative10Weakest: "rgb(244, 244, 246)", colorBackgroundDecorative20Weakest: "rgb(244, 249, 255)", colorBackgroundDecorative30Weakest: "rgb(237, 253, 243)", colorBackgroundDecorative40Weakest: "rgb(250, 247, 253)", colorBackgroundDestructive: "rgb(199, 35, 35)", colorBackgroundDestructiveStrong: "rgb(117, 12, 12)", colorBackgroundDestructiveStronger: "rgb(74, 11, 11)", colorBackgroundDestructiveStrongest: "rgb(49, 12, 12)", colorBackgroundDestructiveWeak: "rgb(246, 177, 177)", colorBackgroundDestructiveWeaker: "rgb(252, 207, 207)", colorBackgroundDestructiveWeakest: "rgb(254, 245, 245)", colorBackgroundError: "rgb(199, 35, 35)", colorBackgroundErrorStrong: "rgb(117, 12, 12)", colorBackgroundErrorStronger: "rgb(74, 11, 11)", colorBackgroundErrorStrongest: "rgb(49, 12, 12)", colorBackgroundErrorWeakest: "rgb(254, 245, 245)", colorBackgroundInverse: "rgb(18, 28, 45)", colorBackgroundInverseStrong: "rgb(31, 48, 76)", colorBackgroundInverseStronger: "rgb(57, 71, 98)", colorBackgroundNeutralWeakest: "rgb(244, 249, 255)", colorBackgroundNew: colorBackgroundNew4, colorBackgroundNewWeakest: "rgb(250, 247, 253)", colorBackgroundOffline: "rgb(174, 178, 193)", colorBackgroundOverlay: colorBackgroundOverlay3, colorBackgroundPrimary: "rgb(0, 109, 250)", colorBackgroundPrimaryStrong: "rgb(0, 20, 137)", colorBackgroundPrimaryStronger: "rgb(3, 11, 93)", colorBackgroundPrimaryStrongest: "rgb(6, 3, 58)", colorBackgroundPrimaryWeak: "rgb(153, 205, 255)", colorBackgroundPrimaryWeaker: "rgb(204, 228, 255)", colorBackgroundPrimaryWeakest: "rgb(244, 249, 255)", colorBackgroundRequired: "rgb(235, 86, 86)", colorBackgroundRowStriped: "rgb(249, 249, 250)", colorBackgroundStrong: "rgb(225, 227, 234)", colorBackgroundStronger: "rgb(136, 145, 170)", colorBackgroundStrongest: "rgb(75, 86, 113)", colorBackgroundSubaccount: "rgb(255, 251, 234)", colorBackgroundSuccess: "rgb(20, 176, 83)", colorBackgroundSuccessWeakest: "rgb(237, 253, 243)", colorBackgroundTrial: "rgb(209, 250, 224)", colorBackgroundUnavailable: "rgb(214, 31, 31)", colorBackgroundUser: colorBackgroundUser4, colorBackgroundWarning: "rgb(244, 124, 34)", colorBackgroundWarningWeakest: "rgb(253, 247, 244)", colorBackgroundWeak: colorBackgroundWeak4 };
    borderColors5 = { colorBorder: colorBorder5, colorBorderDecorative10Weaker: "rgb(225, 227, 234)", colorBorderDecorative20Weaker: "rgb(204, 228, 255)", colorBorderDecorative30Weaker: "rgb(209, 250, 224)", colorBorderDecorative40Weaker: "rgb(231, 220, 250)", colorBorderDestructive: "rgb(199, 35, 35)", colorBorderDestructiveStrong: "rgb(117, 12, 12)", colorBorderDestructiveStronger: "rgb(74, 11, 11)", colorBorderDestructiveStrongest: "rgb(49, 12, 12)", colorBorderDestructiveWeak: "rgb(246, 177, 177)", colorBorderDestructiveWeaker: "rgb(252, 207, 207)", colorBorderDestructiveWeakest: "rgb(254, 236, 236)", colorBorderError: colorBorderError5, colorBorderErrorStrong: "rgb(117, 12, 12)", colorBorderErrorStronger: "rgb(74, 11, 11)", colorBorderErrorStrongest: "rgb(49, 12, 12)", colorBorderErrorWeak: "rgb(245, 138, 138)", colorBorderErrorWeaker: "rgb(252, 207, 207)", colorBorderErrorWeakest: "rgb(254, 236, 236)", colorBorderInverse: colorBorderInverse5, colorBorderInverseStrong: "rgb(225, 227, 234)", colorBorderInverseStronger: "rgb(244, 244, 246)", colorBorderInverseStrongest: "rgb(255, 255, 255)", colorBorderInverseWeaker: "rgb(57, 71, 98)", colorBorderInverseWeakest: "rgb(18, 28, 45)", colorBorderNeutral: "rgb(2, 99, 224)", colorBorderNeutralWeak: "rgb(102, 179, 255)", colorBorderNeutralWeaker: "rgb(204, 228, 255)", colorBorderNewWeaker: "rgb(231, 220, 250)", colorBorderPrimary: "rgb(0, 109, 250)", colorBorderPrimaryStrong: "rgb(0, 20, 137)", colorBorderPrimaryStronger: "rgb(3, 11, 93)", colorBorderPrimaryStrongest: "rgb(6, 3, 58)", colorBorderPrimaryWeak: "rgb(153, 205, 255)", colorBorderPrimaryWeaker: "rgb(204, 228, 255)", colorBorderPrimaryWeakest: "rgb(235, 244, 255)", colorBorderStrong: colorBorderStrong5, colorBorderSuccess: "rgb(20, 176, 83)", colorBorderSuccessWeak: "rgb(123, 234, 165)", colorBorderSuccessWeaker: "rgb(209, 250, 224)", colorBorderSuccessWeakest: "rgb(237, 253, 243)", colorBorderUser: colorBorderUser5, colorBorderWarning: colorBorderWarning5, colorBorderWarningWeak: "rgb(255, 179, 122)", colorBorderWarningWeaker: "rgb(253, 220, 196)", colorBorderWarningWeakest: "rgb(254, 245, 238)", colorBorderWeak: colorBorderWeak5, colorBorderWeaker: colorBorderWeaker4, colorBorderWeakest: colorBorderWeakest4 };
    borderWidths5 = { borderWidth0: "0", borderWidth10: "1px", borderWidth20: "2px", borderWidth30: "4px", borderWidth40: "8px" };
    boxShadows5 = { shadow: shadow6, shadowBorder: shadowBorder5, shadowBorderBottomDecorative10Weaker: "0 1px 0 #aeb2c1", shadowBorderBottomDecorative20Weaker: "0 1px 0 #66b3ff", shadowBorderBottomDecorative30Weaker: "0 1px 0 #7beaa5", shadowBorderBottomDecorative40Weaker: "0 1px 0 #c8aff0", shadowBorderBottomErrorWeaker: "0 1px 0 #f58a8a", shadowBorderBottomInverseNewWeaker: "0 1px 0 #5817bd", shadowBorderBottomNeutralWeaker: "0 1px 0 #66b3ff", shadowBorderBottomNewWeaker: "0 1px 0 #c8aff0", shadowBorderBottomPrimary: "0 1px 0 #006dfa", shadowBorderBottomSubaccount: "0 1px 0 #ffdd35", shadowBorderBottomSuccessWeaker: "0 1px 0 #7beaa5", shadowBorderBottomWarningWeaker: "0 1px 0 #ffb37a", shadowBorderDecorative10Weaker: "0 0 0 1px #e1e3ea", shadowBorderDecorative20Weaker: "0 0 0 1px #cce4ff", shadowBorderDecorative30Weaker: "0 0 0 1px #d1fae0", shadowBorderDecorative40Weaker: "0 0 0 1px #e7dcfa", shadowBorderDestructive: "0 0 0 1px #c72323", shadowBorderDestructiveStrong: "0 0 0 1px #750c0c", shadowBorderDestructiveStronger: "0 0 0 1px #4a0b0b", shadowBorderDestructiveStrongest: "0 0 0 1px #310c0c", shadowBorderDestructiveWeak: "0 0 0 1px #f6b1b1", shadowBorderDestructiveWeaker: "0 0 0 1px #fccfcf", shadowBorderError: shadowBorderError5, shadowBorderErrorStrong: "0 0 0 1px #750c0c", shadowBorderErrorStronger: "0 0 0 1px #4a0b0b", shadowBorderErrorStrongest: "0 0 0 1px #310c0c", shadowBorderErrorWeak: "0 0 0 1px #eb5656", shadowBorderErrorWeaker: "0 0 0 1px #fccfcf", shadowBorderInverse: "0 0 0 1px #8891aa", shadowBorderInverseNewWeaker: "0 0 0 1px #5817bd", shadowBorderInverseStrong: "0 0 0 1px #e1e3ea", shadowBorderInverseStronger: "0 0 0 1px #f4f4f6", shadowBorderInverseStrongest: "0 0 0 1px #ffffff", shadowBorderInverseWeaker: "0 0 0 1px #394762", shadowBorderInverseWeakest: "0 0 0 1px #121c2d", shadowBorderNeutralWeaker: "0 0 0 1px #cce4ff", shadowBorderNewWeaker: "0 0 0 1px #e7dcfa", shadowBorderPrimary: "0 0 0 1px #006dfa", shadowBorderPrimaryStrong: "0 0 0 1px #001489", shadowBorderPrimaryStronger: "0 0 0 1px #030b5d", shadowBorderPrimaryStrongest: "0 0 0 1px #06033a", shadowBorderPrimaryWeak: "0 0 0 1px #99cdff", shadowBorderPrimaryWeaker: "0 0 0 1px #cce4ff", shadowBorderStrong: shadowBorderStrong5, shadowBorderSubaccount: "0 0 0 1px #fff1b3", shadowBorderSuccessWeaker: "0 0 0 1px #d1fae0", shadowBorderUser: shadowBorderUser5, shadowBorderWarningWeaker: "0 0 0 1px #fddcc4", shadowBorderWeak: shadowBorderWeak5, shadowBorderWeaker: shadowBorderWeaker5, shadowCard: shadowCard5, shadowFocus: shadowFocus5, shadowFocusInset: shadowFocusInset5, shadowFocusInverse: shadowFocusInverse5, shadowFocusInverseInset: shadowFocusInverseInset5, shadowFocusShadowBorder: shadowFocusShadowBorder5, shadowHigh: shadowHigh5, shadowLow: shadowLow5 };
    colors6 = { colorBrand: colorBrand5, colorBrandHighlight: "rgb(242, 47, 70)", colorGray0: colorGray05, colorGray10: colorGray105, colorGray20: colorGray205, colorGray30: colorGray305, colorGray40: colorGray405, colorGray50: colorGray505, colorGray60: colorGray605, colorGray70: colorGray705, colorGray80: colorGray805, colorGray90: colorGray905, colorGray100: colorGray1005 };
    colorSchemes5 = { colorScheme: "light" };
    dataVisualization5 = { colorDataVisualization1: "rgb(0, 20, 137)", colorDataVisualization2: "rgb(14, 124, 58)", colorDataVisualization3: "rgb(13, 58, 31)", colorDataVisualization4: "rgb(0, 140, 255)", colorDataVisualization5: "rgb(57, 71, 98)", colorDataVisualization6: "rgb(166, 127, 227)", colorDataVisualization7: "rgb(109, 46, 209)", colorDataVisualization8: "rgb(136, 145, 170)", colorDataVisualization9: "rgb(117, 12, 12)", colorDataVisualization10: "rgb(235, 86, 86)" };
    fonts5 = { fontFamilyCode: fontFamilyCode5, fontFamilyDisplay: fontFamilyDisplay5, fontFamilyText: fontFamilyText5, fontFamilyTextChineseSimplified: fontFamilyTextChineseSimplified5, fontFamilyTextChineseTraditional: fontFamilyTextChineseTraditional5, fontFamilyTextJapanese: fontFamilyTextJapanese5, fontFamilyTextKorean: fontFamilyTextKorean5 };
    fontSizes5 = { fontSize10: "0.625rem", fontSize20: "0.75rem", fontSize30: "0.875rem", fontSize40: "1rem", fontSize50: "1.125rem", fontSize60: "1.25rem", fontSize70: "1.5rem", fontSize80: "1.75rem", fontSize90: "2rem", fontSize100: "2.5rem", fontSize110: "3rem", fontSizeBase: "100%", fontSizeDisplay10: "2rem", fontSizeDisplay20: "3rem", fontSizeDisplay30: "4rem" };
    fontWeights5 = { fontWeightLight: "400", fontWeightNormal: "400", fontWeightMedium: "500", fontWeightSemibold: "600", fontWeightBold: "600", fontWeightExtrabold: "800" };
    lineHeights5 = { lineHeight0: "0", lineHeight05: "0.75rem", lineHeight10: "1rem", lineHeight20: "1.25rem", lineHeight30: "1.25rem", lineHeight40: "1.5rem", lineHeight50: "1.75rem", lineHeight60: "1.75rem", lineHeight70: "2rem", lineHeight80: "2.5rem", lineHeight90: "2.75rem", lineHeight100: "3.25rem", lineHeight110: "4rem", lineHeightDisplay10: "2.5rem", lineHeightDisplay20: "3.75rem", lineHeightDisplay30: "5rem" };
    radii5 = { borderRadius0: "0", borderRadius10: "2px", borderRadius20: "4px", borderRadius30: "8px", borderRadiusCircle: "50%", borderRadiusPill: "100px" };
    sizings5 = { size0: "0", size10: size105, size20: size205, size30: size305, size40: size405, size50: size505, size60: size605, size70: size705, size80: size805, size90: size905, size100: "64rem", size110: size1105, size120: "77rem", sizeIcon05: "0.75rem", sizeIcon10: "1rem", sizeIcon20: "1.25rem", sizeIcon30: "1.25rem", sizeIcon40: "1.5rem", sizeIcon50: "1.75rem", sizeIcon60: "1.75rem", sizeIcon70: "2rem", sizeIcon80: "2.5rem", sizeIcon90: "2.75rem", sizeIcon100: "3.25rem", sizeIcon110: "4rem", sizeSidebar: "15rem", sizeSidebarCompact: "4.75rem", sizeSquare0: "0", sizeSquare10: "0.125rem", sizeSquare20: "0.25rem", sizeSquare25: "0.375rem", sizeSquare30: "0.5rem", sizeSquare40: "0.75rem", sizeSquare50: "1rem", sizeSquare60: "1.25rem", sizeSquare70: "1.5rem", sizeSquare80: "1.75rem", sizeSquare90: "2rem", sizeSquare100: "2.25rem", sizeSquare110: "2.5rem", sizeSquare120: "2.75rem", sizeSquare130: "3rem", sizeSquare140: "3.25rem", sizeSquare150: "3.5rem", sizeSquare160: "3.75rem", sizeSquare170: "4rem", sizeSquare180: "4.25rem", sizeSquare190: "4.5rem", sizeSquare200: "4.75rem", sizeTopbar: "4.75rem" };
    spacings5 = { space0: "0", space10: space105, space20: space205, space30: space305, space40: space405, space50: "1rem", space60: space605, space70: space705, space80: space805, space90: "2rem", space100: space1005, space110: "2.5rem", space120: space1205, space130: "3rem", space140: space1405, space150: "3.5rem", space160: space1605, space170: "4rem", space180: space1805, space190: "4.5rem", space200: space2005, spaceNegative10: "-0.125rem", spaceNegative20: "-0.25rem", spaceNegative30: "-0.5rem", spaceNegative40: "-0.75rem", spaceNegative50: "-1rem", spaceNegative60: "-1.25rem", spaceNegative70: "-1.5rem", spaceNegative80: "-1.75rem", spaceNegative90: "-2rem", spaceNegative100: "-2.25rem", spaceNegative110: "-2.5rem", spaceNegative120: "-2.75rem", spaceNegative130: "-3rem", spaceNegative140: "-3.25rem", spaceNegative150: "-3.5rem", spaceNegative160: "-3.75rem", spaceNegative170: "-4rem", spaceNegative180: "-4.25rem", spaceNegative190: "-4.5rem", spaceNegative200: "-4.75rem" };
    textColors5 = { colorText: colorText5, colorTextBrandHighlight: "rgb(242, 47, 70)", colorTextBrandInverse: "rgb(255, 255, 255)", colorTextDecorative10: "rgb(96, 107, 133)", colorTextDecorative20: "rgb(0, 20, 137)", colorTextDecorative30: "rgb(11, 96, 45)", colorTextDecorative40: "rgb(109, 46, 209)", colorTextDestructive: "rgb(199, 35, 35)", colorTextDestructiveStrong: "rgb(173, 17, 17)", colorTextDestructiveStronger: "rgb(74, 11, 11)", colorTextDestructiveStrongest: "rgb(49, 12, 12)", colorTextDestructiveWeak: "rgb(246, 177, 177)", colorTextError: colorTextError5, colorTextErrorStrong: "rgb(117, 12, 12)", colorTextErrorStronger: "rgb(74, 11, 11)", colorTextErrorStrongest: "rgb(49, 12, 12)", colorTextErrorWeak: "rgb(235, 86, 86)", colorTextIcon: colorTextIcon5, colorTextIconAvailable: "rgb(14, 124, 58)", colorTextIconBrandHighlight: "rgb(242, 47, 70)", colorTextIconBrandInverse: "rgb(255, 255, 255)", colorTextIconBusy: colorTextIconBusy5, colorTextIconError: "rgb(199, 35, 35)", colorTextIconInverse: "rgb(136, 145, 170)", colorTextIconNeutral: "rgb(3, 11, 93)", colorTextIconNew: colorTextIconNew5, colorTextIconOffline: "rgb(96, 107, 133)", colorTextIconSuccess: "rgb(11, 96, 45)", colorTextIconUnavailable: "rgb(214, 31, 31)", colorTextIconWarning: "rgb(141, 49, 24)", colorTextInverse: colorTextInverse5, colorTextInverseNew: colorTextInverseNew5, colorTextInverseWeak: "rgb(202, 205, 216)", colorTextInverseWeaker: "rgb(136, 145, 170)", colorTextInverseWeakest: "rgb(75, 86, 113)", colorTextLink: colorTextLink5, colorTextLinkDestructive: "rgb(199, 35, 35)", colorTextLinkDestructiveStrong: "rgb(173, 17, 17)", colorTextLinkDestructiveStronger: "rgb(74, 11, 11)", colorTextLinkDestructiveStrongest: "rgb(49, 12, 12)", colorTextLinkDestructiveWeak: "rgb(246, 177, 177)", colorTextLinkStrong: "rgb(0, 20, 137)", colorTextLinkStronger: "rgb(3, 11, 93)", colorTextLinkStrongest: "rgb(6, 3, 58)", colorTextLinkWeak: colorTextLinkWeak4, colorTextNeutral: "rgb(3, 11, 93)", colorTextNew: colorTextNew5, colorTextPrimary: colorTextPrimary5, colorTextPrimaryStrong: "rgb(0, 20, 137)", colorTextPrimaryStronger: "rgb(3, 11, 93)", colorTextPrimaryStrongest: "rgb(6, 3, 58)", colorTextPrimaryWeak: "rgb(153, 205, 255)", colorTextSubaccount: "rgb(84, 51, 8)", colorTextSuccess: colorTextSuccess5, colorTextUser: colorTextUser5, colorTextWarning: colorTextWarning5, colorTextWarningStrong: "rgb(141, 49, 24)", colorTextWeak: colorTextWeak5, colorTextWeaker: colorTextWeaker5, colorTextWeakest: colorTextWeakest5 };
    zIndices5 = { zIndex0: "0", zIndex10: "10", zIndex20: "20", zIndex30: "30", zIndex40: "40", zIndex50: "50", zIndex60: "60", zIndex70: "70", zIndex80: "80", zIndex90: "90" };
  }
});

// node_modules/@twilio-paste/design-tokens/dist/themes/twilio-dark/tokens.es6.js
var colorBackground6, colorBackgroundOverlay4, colorBorder6, colorBorderError6, colorBorderInverse6, colorBorderStrong6, colorBorderUser6, colorBorderWarning6, colorBorderWeak6, colorBrand6, colorGray06, colorGray106, colorGray1006, colorGray206, colorGray306, colorGray406, colorGray506, colorGray606, colorGray706, colorGray806, colorGray906, colorText6, colorTextError6, colorTextIcon6, colorTextIconBusy6, colorTextIconNew6, colorTextInverse6, colorTextInverseNew6, colorTextLink6, colorTextLinkStrong2, colorTextNeutral5, colorTextNew6, colorTextPrimary6, colorTextSubaccount2, colorTextSuccess6, colorTextUser6, colorTextWarning6, colorTextWeak6, colorTextWeaker6, colorTextWeakest6, fontFamilyCode6, fontFamilyDisplay6, fontFamilyText6, fontFamilyTextChineseSimplified6, fontFamilyTextChineseTraditional6, fontFamilyTextJapanese6, fontFamilyTextKorean6, shadow7, shadowBorder6, shadowBorderError6, shadowBorderStrong6, shadowBorderUser6, shadowBorderWeak6, shadowBorderWeaker6, shadowCard6, shadowFocus6, shadowFocusInset6, shadowFocusInverse6, shadowFocusInverseInset6, shadowFocusShadowBorder6, shadowHigh6, shadowLow6, size106, size1106, size206, size306, size406, size506, size606, size706, size806, size906, space106, space1006, space1206, space1406, space1606, space1806, space206, space2006, space306, space406, space606, space706, space806, backgroundColors6, borderColors6, borderWidths6, boxShadows6, colors7, colorSchemes6, dataVisualization6, fonts6, fontSizes6, fontWeights6, lineHeights6, radii6, sizings6, spacings6, textColors6, zIndices6;
var init_tokens_es66 = __esm({
  "node_modules/@twilio-paste/design-tokens/dist/themes/twilio-dark/tokens.es6.js"() {
    colorBackground6 = "rgb(18, 28, 45)";
    colorBackgroundOverlay4 = "rgba(18, 28, 45, 0.9)";
    colorBorder6 = "rgb(96, 107, 133)";
    colorBorderError6 = "rgb(214, 31, 31)";
    colorBorderInverse6 = "rgb(136, 145, 170)";
    colorBorderStrong6 = "rgb(136, 145, 170)";
    colorBorderUser6 = "rgb(88, 23, 189)";
    colorBorderWarning6 = "rgb(244, 124, 34)";
    colorBorderWeak6 = "rgb(57, 71, 98)";
    colorBrand6 = "rgb(0, 20, 137)";
    colorGray06 = "rgb(255, 255, 255)";
    colorGray106 = "rgb(244, 244, 246)";
    colorGray1006 = "rgb(18, 28, 45)";
    colorGray206 = "rgb(225, 227, 234)";
    colorGray306 = "rgb(202, 205, 216)";
    colorGray406 = "rgb(174, 178, 193)";
    colorGray506 = "rgb(136, 145, 170)";
    colorGray606 = "rgb(96, 107, 133)";
    colorGray706 = "rgb(75, 86, 113)";
    colorGray806 = "rgb(57, 71, 98)";
    colorGray906 = "rgb(31, 48, 76)";
    colorText6 = "rgb(244, 244, 246)";
    colorTextError6 = "rgb(235, 86, 86)";
    colorTextIcon6 = "rgb(136, 145, 170)";
    colorTextIconBusy6 = "rgb(255, 179, 122)";
    colorTextIconNew6 = "rgb(200, 175, 240)";
    colorTextInverse6 = "rgb(255, 255, 255)";
    colorTextInverseNew6 = "rgb(200, 175, 240)";
    colorTextLink6 = "rgb(0, 140, 255)";
    colorTextLinkStrong2 = "rgb(153, 205, 255)";
    colorTextNeutral5 = "rgb(102, 179, 255)";
    colorTextNew6 = "rgb(231, 220, 250)";
    colorTextPrimary6 = "rgb(0, 140, 255)";
    colorTextSubaccount2 = "rgb(255, 233, 128)";
    colorTextSuccess6 = "rgb(162, 246, 195)";
    colorTextUser6 = "rgb(200, 175, 240)";
    colorTextWarning6 = "rgb(255, 179, 122)";
    colorTextWeak6 = "rgb(136, 145, 170)";
    colorTextWeaker6 = "rgb(57, 71, 98)";
    colorTextWeakest6 = "rgb(13, 19, 28)";
    fontFamilyCode6 = "'TwilioSansMono', Courier, monospace";
    fontFamilyDisplay6 = "'TwilioSansDisplay', 'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
    fontFamilyText6 = "'TwilioSansText', 'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
    fontFamilyTextChineseSimplified6 = "'Inter var experimental', 'Inter var', 'Microsoft YaHei New', 微软雅黑, 'Microsoft Yahei', 'Microsoft JhengHei', 宋体, SimSun, sans-serif";
    fontFamilyTextChineseTraditional6 = "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif";
    fontFamilyTextJapanese6 = "'Inter var experimental', 'Inter var', Hiragino Sans, 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, Osaka, 'MS PGothic', sans-serif";
    fontFamilyTextKorean6 = "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif";
    shadow7 = "0 4px 16px 0 rgba(0, 0, 0, 0.5)";
    shadowBorder6 = "0 0 0 1px #606b85";
    shadowBorderError6 = "0 0 0 1px #d61f1f";
    shadowBorderStrong6 = "0 0 0 1px #8891aa";
    shadowBorderUser6 = "0 0 0 1px #5817bd";
    shadowBorderWeak6 = "0 0 0 1px #394762";
    shadowBorderWeaker6 = "0 0 0 1px #1f304c";
    shadowCard6 = "0 2px 4px 0 rgba(0, 0, 0, 0.4)";
    shadowFocus6 = "0 0 0 2px #121c2d, 0 0 0 3px #ffffff, 0 0 0 5px rgba(255, 255, 255, 0.2)";
    shadowFocusInset6 = "inset 0 0 0 1px #ffffff, inset 0 0 0 3px rgba(255, 255, 255, 0.2)";
    shadowFocusInverse6 = "0 0 0 1px #394762, 0 0 0 3px #121c2d, 0 0 0 4px #ffffff, 0 0 0 6px rgba(255, 255, 255, 0.2)";
    shadowFocusInverseInset6 = "0 0 0 1px #ffffff, inset 0 0 0 3px rgba(255, 255, 255, 0.2)";
    shadowFocusShadowBorder6 = "0 0 0 1px #394762, 0 0 0 3px #121c2d, 0 0 0 4px #ffffff, 0 0 0 6px rgba(255, 255, 255, 0.2)";
    shadowHigh6 = "0 16px 24px 4px rgba(0, 0, 0, 0.5)";
    shadowLow6 = "0 2px 4px 0 rgba(0, 0, 0, 0.4)";
    size106 = "5.5rem";
    size1106 = "70.5rem";
    size206 = "12rem";
    size306 = "18.5rem";
    size406 = "25rem";
    size506 = "31.5rem";
    size606 = "38rem";
    size706 = "44.5rem";
    size806 = "51rem";
    size906 = "57.5rem";
    space106 = "0.125rem";
    space1006 = "2.25rem";
    space1206 = "2.75rem";
    space1406 = "3.25rem";
    space1606 = "3.75rem";
    space1806 = "4.25rem";
    space206 = "0.25rem";
    space2006 = "4.75rem";
    space306 = "0.5rem";
    space406 = "0.75rem";
    space606 = "1.25rem";
    space706 = "1.5rem";
    space806 = "1.75rem";
    backgroundColors6 = { colorBackground: colorBackground6, colorBackgroundAvailable: "rgb(20, 176, 83)", colorBackgroundBody: "rgb(13, 19, 28)", colorBackgroundBodyInverse: "rgb(18, 28, 45)", colorBackgroundBrand: "rgb(18, 28, 45)", colorBackgroundBrandHighlight: "rgb(242, 47, 70)", colorBackgroundBrandHighlightWeakest: "rgba(242, 47, 70, 0.1)", colorBackgroundBrandStrong: "rgb(31, 48, 76)", colorBackgroundBrandStronger: "rgb(18, 28, 45)", colorBackgroundBusy: "rgb(244, 124, 34)", colorBackgroundDecorative10Weakest: "rgb(18, 28, 45)", colorBackgroundDecorative20Weakest: "rgb(3, 11, 93)", colorBackgroundDecorative30Weakest: "rgb(5, 41, 18)", colorBackgroundDecorative40Weakest: "rgb(34, 9, 74)", colorBackgroundDestructive: "rgb(214, 31, 31)", colorBackgroundDestructiveStrong: "rgb(246, 177, 177)", colorBackgroundDestructiveStronger: "rgb(252, 207, 207)", colorBackgroundDestructiveStrongest: "rgb(254, 236, 236)", colorBackgroundDestructiveWeak: "rgb(57, 71, 98)", colorBackgroundDestructiveWeaker: "rgb(31, 48, 76)", colorBackgroundDestructiveWeakest: "rgb(18, 28, 45)", colorBackgroundError: "rgb(214, 31, 31)", colorBackgroundErrorStrong: "rgb(245, 138, 138)", colorBackgroundErrorStronger: "rgb(252, 207, 207)", colorBackgroundErrorStrongest: "rgb(254, 236, 236)", colorBackgroundErrorWeakest: "rgb(18, 28, 45)", colorBackgroundInverse: "rgb(18, 28, 45)", colorBackgroundInverseStrong: "rgb(31, 48, 76)", colorBackgroundInverseStronger: "rgb(57, 71, 98)", colorBackgroundNeutralWeakest: "rgb(18, 28, 45)", colorBackgroundNew: "rgb(56, 14, 120)", colorBackgroundNewWeakest: "rgb(18, 28, 45)", colorBackgroundOffline: "rgb(174, 178, 193)", colorBackgroundOverlay: colorBackgroundOverlay4, colorBackgroundPrimary: "rgb(0, 109, 250)", colorBackgroundPrimaryStrong: "rgb(153, 205, 255)", colorBackgroundPrimaryStronger: "rgb(204, 228, 255)", colorBackgroundPrimaryStrongest: "rgb(235, 244, 255)", colorBackgroundPrimaryWeak: "rgb(57, 71, 98)", colorBackgroundPrimaryWeaker: "rgb(31, 48, 76)", colorBackgroundPrimaryWeakest: "rgb(18, 28, 45)", colorBackgroundRequired: "rgb(235, 86, 86)", colorBackgroundRowStriped: "rgb(18, 28, 45)", colorBackgroundStrong: "rgb(31, 48, 76)", colorBackgroundStronger: "rgb(96, 107, 133)", colorBackgroundStrongest: "rgb(225, 227, 234)", colorBackgroundSubaccount: "rgb(18, 28, 45)", colorBackgroundSuccess: "rgb(20, 176, 83)", colorBackgroundSuccessWeakest: "rgb(18, 28, 45)", colorBackgroundTrial: "rgb(5, 41, 18)", colorBackgroundUnavailable: "rgb(214, 31, 31)", colorBackgroundUser: "rgb(34, 9, 74)", colorBackgroundWarning: "rgb(244, 124, 34)", colorBackgroundWarningWeakest: "rgb(18, 28, 45)", colorBackgroundWeak: "rgb(18, 28, 45)" };
    borderColors6 = { colorBorder: colorBorder6, colorBorderDecorative10Weaker: "rgb(31, 48, 76)", colorBorderDecorative20Weaker: "rgb(4, 60, 181)", colorBorderDecorative30Weaker: "rgb(14, 124, 58)", colorBorderDecorative40Weaker: "rgb(88, 23, 189)", colorBorderDestructive: "rgb(214, 31, 31)", colorBorderDestructiveStrong: "rgb(246, 177, 177)", colorBorderDestructiveStronger: "rgb(252, 207, 207)", colorBorderDestructiveStrongest: "rgb(254, 236, 236)", colorBorderDestructiveWeak: "rgb(117, 12, 12)", colorBorderDestructiveWeaker: "rgb(74, 11, 11)", colorBorderDestructiveWeakest: "rgb(49, 12, 12)", colorBorderError: colorBorderError6, colorBorderErrorStrong: "rgb(245, 138, 138)", colorBorderErrorStronger: "rgb(252, 207, 207)", colorBorderErrorStrongest: "rgb(254, 236, 236)", colorBorderErrorWeak: "rgb(173, 17, 17)", colorBorderErrorWeaker: "rgb(173, 17, 17)", colorBorderErrorWeakest: "rgb(49, 12, 12)", colorBorderInverse: colorBorderInverse6, colorBorderInverseStrong: "rgb(225, 227, 234)", colorBorderInverseStronger: "rgb(244, 244, 246)", colorBorderInverseStrongest: "rgb(255, 255, 255)", colorBorderInverseWeaker: "rgb(57, 71, 98)", colorBorderInverseWeakest: "rgb(18, 28, 45)", colorBorderNeutral: "rgb(0, 109, 250)", colorBorderNeutralWeak: "rgb(4, 60, 181)", colorBorderNeutralWeaker: "rgb(4, 60, 181)", colorBorderNewWeaker: "rgb(88, 23, 189)", colorBorderPrimary: "rgb(0, 109, 250)", colorBorderPrimaryStrong: "rgb(153, 205, 255)", colorBorderPrimaryStronger: "rgb(204, 228, 255)", colorBorderPrimaryStrongest: "rgb(235, 244, 255)", colorBorderPrimaryWeak: "rgb(4, 60, 181)", colorBorderPrimaryWeaker: "rgb(4, 60, 181)", colorBorderPrimaryWeakest: "rgb(3, 11, 93)", colorBorderStrong: colorBorderStrong6, colorBorderSuccess: "rgb(20, 176, 83)", colorBorderSuccessWeak: "rgb(14, 124, 58)", colorBorderSuccessWeaker: "rgb(14, 124, 58)", colorBorderSuccessWeakest: "rgb(5, 41, 18)", colorBorderUser: colorBorderUser6, colorBorderWarning: colorBorderWarning6, colorBorderWarningWeak: "rgb(195, 83, 35)", colorBorderWarningWeaker: "rgb(195, 83, 35)", colorBorderWarningWeakest: "rgb(64, 19, 15)", colorBorderWeak: colorBorderWeak6, colorBorderWeaker: "rgb(31, 48, 76)", colorBorderWeakest: "rgb(13, 19, 28)" };
    borderWidths6 = { borderWidth0: "0", borderWidth10: "1px", borderWidth20: "2px", borderWidth30: "4px", borderWidth40: "8px" };
    boxShadows6 = { shadow: shadow7, shadowBorder: shadowBorder6, shadowBorderBottomDecorative10Weaker: "0 1px 0 #8891aa", shadowBorderBottomDecorative20Weaker: "0 1px 0 #043cb5", shadowBorderBottomDecorative30Weaker: "0 1px 0 #0e7c3a", shadowBorderBottomDecorative40Weaker: "0 1px 0 #5817bd", shadowBorderBottomErrorWeaker: "0 1px 0 #ad1111", shadowBorderBottomInverseNewWeaker: "0 1px 0 #5817bd", shadowBorderBottomNeutralWeaker: "0 1px 0 #043cb5", shadowBorderBottomNewWeaker: "0 1px 0 #5817bd", shadowBorderBottomPrimary: "0 1px 0 #006dfa", shadowBorderBottomSubaccount: "0 1px 0 #c28e00", shadowBorderBottomSuccessWeaker: "0 1px 0 #0e7c3a", shadowBorderBottomWarningWeaker: "0 1px 0 #c35323", shadowBorderDecorative10Weaker: "0 0 0 1px #1f304c", shadowBorderDecorative20Weaker: "0 0 0 1px #043cb5", shadowBorderDecorative30Weaker: "0 0 0 1px #0e7c3a", shadowBorderDecorative40Weaker: "0 0 0 1px #5817bd", shadowBorderDestructive: "0 0 0 1px #d61f1f", shadowBorderDestructiveStrong: "0 0 0 1px #f6b1b1", shadowBorderDestructiveStronger: "0 0 0 1px #fccfcf", shadowBorderDestructiveStrongest: "0 0 0 1px #feecec", shadowBorderDestructiveWeak: "0 0 0 1px #394762", shadowBorderDestructiveWeaker: "0 0 0 1px #1f304c", shadowBorderError: shadowBorderError6, shadowBorderErrorStrong: "0 0 0 1px #f58a8a", shadowBorderErrorStronger: "0 0 0 1px #fccfcf", shadowBorderErrorStrongest: "0 0 0 1px #feecec", shadowBorderErrorWeak: "0 0 0 1px #ad1111", shadowBorderErrorWeaker: "0 0 0 1px #ad1111", shadowBorderInverse: "0 0 0 1px #8891aa", shadowBorderInverseNewWeaker: "0 0 0 1px #5817bd", shadowBorderInverseStrong: "0 0 0 1px #e1e3ea", shadowBorderInverseStronger: "0 0 0 1px #f4f4f6", shadowBorderInverseStrongest: "0 0 0 1px #ffffff", shadowBorderInverseWeaker: "0 0 0 1px #394762", shadowBorderInverseWeakest: "0 0 0 1px #121c2d", shadowBorderNeutralWeaker: "0 0 0 1px #043cb5", shadowBorderNewWeaker: "0 0 0 1px #5817bd", shadowBorderPrimary: "0 0 0 1px #006dfa", shadowBorderPrimaryStrong: "0 0 0 1px #99cdff", shadowBorderPrimaryStronger: "0 0 0 1px #cce4ff", shadowBorderPrimaryStrongest: "0 0 0 1px #ebf4ff", shadowBorderPrimaryWeak: "0 0 0 1px #043cb5", shadowBorderPrimaryWeaker: "0 0 0 1px #043cb5", shadowBorderStrong: shadowBorderStrong6, shadowBorderSubaccount: "0 0 0 1px #c28e00", shadowBorderSuccessWeaker: "0 0 0 1px #0e7c3a", shadowBorderUser: shadowBorderUser6, shadowBorderWarningWeaker: "0 0 0 1px #c35323", shadowBorderWeak: shadowBorderWeak6, shadowBorderWeaker: shadowBorderWeaker6, shadowCard: shadowCard6, shadowFocus: shadowFocus6, shadowFocusInset: shadowFocusInset6, shadowFocusInverse: shadowFocusInverse6, shadowFocusInverseInset: shadowFocusInverseInset6, shadowFocusShadowBorder: shadowFocusShadowBorder6, shadowHigh: shadowHigh6, shadowLow: shadowLow6 };
    colors7 = { colorBrand: colorBrand6, colorBrandHighlight: "rgb(242, 47, 70)", colorGray0: colorGray06, colorGray10: colorGray106, colorGray20: colorGray206, colorGray30: colorGray306, colorGray40: colorGray406, colorGray50: colorGray506, colorGray60: colorGray606, colorGray70: colorGray706, colorGray80: colorGray806, colorGray90: colorGray906, colorGray100: colorGray1006 };
    colorSchemes6 = { colorScheme: "dark" };
    dataVisualization6 = { colorDataVisualization1: "rgb(2, 99, 224)", colorDataVisualization2: "rgb(200, 175, 240)", colorDataVisualization3: "rgb(96, 107, 133)", colorDataVisualization4: "rgb(102, 179, 255)", colorDataVisualization5: "rgb(14, 124, 58)", colorDataVisualization6: "rgb(250, 153, 80)", colorDataVisualization7: "rgb(195, 83, 35)", colorDataVisualization8: "rgb(246, 177, 177)", colorDataVisualization9: "rgb(140, 91, 216)", colorDataVisualization10: "rgb(232, 180, 7)" };
    fonts6 = { fontFamilyCode: fontFamilyCode6, fontFamilyDisplay: fontFamilyDisplay6, fontFamilyText: fontFamilyText6, fontFamilyTextChineseSimplified: fontFamilyTextChineseSimplified6, fontFamilyTextChineseTraditional: fontFamilyTextChineseTraditional6, fontFamilyTextJapanese: fontFamilyTextJapanese6, fontFamilyTextKorean: fontFamilyTextKorean6 };
    fontSizes6 = { fontSize10: "0.625rem", fontSize20: "0.75rem", fontSize30: "0.875rem", fontSize40: "1rem", fontSize50: "1.125rem", fontSize60: "1.25rem", fontSize70: "1.5rem", fontSize80: "1.75rem", fontSize90: "2rem", fontSize100: "2.5rem", fontSize110: "3rem", fontSizeBase: "100%", fontSizeDisplay10: "2rem", fontSizeDisplay20: "3rem", fontSizeDisplay30: "4rem" };
    fontWeights6 = { fontWeightLight: "400", fontWeightNormal: "400", fontWeightMedium: "500", fontWeightSemibold: "600", fontWeightBold: "600", fontWeightExtrabold: "800" };
    lineHeights6 = { lineHeight0: "0", lineHeight05: "0.75rem", lineHeight10: "1rem", lineHeight20: "1.25rem", lineHeight30: "1.25rem", lineHeight40: "1.5rem", lineHeight50: "1.75rem", lineHeight60: "1.75rem", lineHeight70: "2rem", lineHeight80: "2.5rem", lineHeight90: "2.75rem", lineHeight100: "3.25rem", lineHeight110: "4rem", lineHeightDisplay10: "2.5rem", lineHeightDisplay20: "3.75rem", lineHeightDisplay30: "5rem" };
    radii6 = { borderRadius0: "0", borderRadius10: "2px", borderRadius20: "4px", borderRadius30: "8px", borderRadiusCircle: "50%", borderRadiusPill: "100px" };
    sizings6 = { size0: "0", size10: size106, size20: size206, size30: size306, size40: size406, size50: size506, size60: size606, size70: size706, size80: size806, size90: size906, size100: "64rem", size110: size1106, size120: "77rem", sizeIcon05: "0.75rem", sizeIcon10: "1rem", sizeIcon20: "1.25rem", sizeIcon30: "1.25rem", sizeIcon40: "1.5rem", sizeIcon50: "1.75rem", sizeIcon60: "1.75rem", sizeIcon70: "2rem", sizeIcon80: "2.5rem", sizeIcon90: "2.75rem", sizeIcon100: "3.25rem", sizeIcon110: "4rem", sizeSidebar: "15rem", sizeSidebarCompact: "4.75rem", sizeSquare0: "0", sizeSquare10: "0.125rem", sizeSquare20: "0.25rem", sizeSquare25: "0.375rem", sizeSquare30: "0.5rem", sizeSquare40: "0.75rem", sizeSquare50: "1rem", sizeSquare60: "1.25rem", sizeSquare70: "1.5rem", sizeSquare80: "1.75rem", sizeSquare90: "2rem", sizeSquare100: "2.25rem", sizeSquare110: "2.5rem", sizeSquare120: "2.75rem", sizeSquare130: "3rem", sizeSquare140: "3.25rem", sizeSquare150: "3.5rem", sizeSquare160: "3.75rem", sizeSquare170: "4rem", sizeSquare180: "4.25rem", sizeSquare190: "4.5rem", sizeSquare200: "4.75rem", sizeTopbar: "4.75rem" };
    spacings6 = { space0: "0", space10: space106, space20: space206, space30: space306, space40: space406, space50: "1rem", space60: space606, space70: space706, space80: space806, space90: "2rem", space100: space1006, space110: "2.5rem", space120: space1206, space130: "3rem", space140: space1406, space150: "3.5rem", space160: space1606, space170: "4rem", space180: space1806, space190: "4.5rem", space200: space2006, spaceNegative10: "-0.125rem", spaceNegative20: "-0.25rem", spaceNegative30: "-0.5rem", spaceNegative40: "-0.75rem", spaceNegative50: "-1rem", spaceNegative60: "-1.25rem", spaceNegative70: "-1.5rem", spaceNegative80: "-1.75rem", spaceNegative90: "-2rem", spaceNegative100: "-2.25rem", spaceNegative110: "-2.5rem", spaceNegative120: "-2.75rem", spaceNegative130: "-3rem", spaceNegative140: "-3.25rem", spaceNegative150: "-3.5rem", spaceNegative160: "-3.75rem", spaceNegative170: "-4rem", spaceNegative180: "-4.25rem", spaceNegative190: "-4.5rem", spaceNegative200: "-4.75rem" };
    textColors6 = { colorText: colorText6, colorTextBrandHighlight: "rgb(242, 47, 70)", colorTextBrandInverse: "rgb(255, 255, 255)", colorTextDecorative10: "rgb(225, 227, 234)", colorTextDecorative20: "rgb(204, 228, 255)", colorTextDecorative30: "rgb(162, 246, 195)", colorTextDecorative40: "rgb(200, 175, 240)", colorTextDestructive: "rgb(235, 86, 86)", colorTextDestructiveStrong: "rgb(246, 177, 177)", colorTextDestructiveStronger: "rgb(246, 177, 177)", colorTextDestructiveStrongest: "rgb(255, 255, 255)", colorTextDestructiveWeak: "rgb(57, 71, 98)", colorTextError: colorTextError6, colorTextErrorStrong: "rgb(246, 177, 177)", colorTextErrorStronger: "rgb(254, 236, 236)", colorTextErrorStrongest: "rgb(254, 236, 236)", colorTextErrorWeak: "rgb(235, 86, 86)", colorTextIcon: colorTextIcon6, colorTextIconAvailable: "rgb(54, 213, 118)", colorTextIconBrandHighlight: "rgb(242, 47, 70)", colorTextIconBrandInverse: "rgb(255, 255, 255)", colorTextIconBusy: colorTextIconBusy6, colorTextIconError: "rgb(235, 86, 86)", colorTextIconInverse: "rgb(136, 145, 170)", colorTextIconNeutral: "rgb(102, 179, 255)", colorTextIconNew: colorTextIconNew6, colorTextIconOffline: "rgb(244, 244, 246)", colorTextIconSuccess: "rgb(54, 213, 118)", colorTextIconUnavailable: "rgb(235, 86, 86)", colorTextIconWarning: "rgb(255, 179, 122)", colorTextInverse: colorTextInverse6, colorTextInverseNew: colorTextInverseNew6, colorTextInverseWeak: "rgb(202, 205, 216)", colorTextInverseWeaker: "rgb(136, 145, 170)", colorTextInverseWeakest: "rgb(75, 86, 113)", colorTextLink: colorTextLink6, colorTextLinkDestructive: "rgb(235, 86, 86)", colorTextLinkDestructiveStrong: "rgb(246, 177, 177)", colorTextLinkDestructiveStronger: "rgb(246, 177, 177)", colorTextLinkDestructiveStrongest: "rgb(255, 255, 255)", colorTextLinkDestructiveWeak: "rgb(57, 71, 98)", colorTextLinkStrong: colorTextLinkStrong2, colorTextLinkStronger: "rgb(235, 244, 255)", colorTextLinkStrongest: "rgb(255, 255, 255)", colorTextLinkWeak: "rgb(57, 71, 98)", colorTextNeutral: colorTextNeutral5, colorTextNew: colorTextNew6, colorTextPrimary: colorTextPrimary6, colorTextPrimaryStrong: "rgb(153, 205, 255)", colorTextPrimaryStronger: "rgb(153, 205, 255)", colorTextPrimaryStrongest: "rgb(255, 255, 255)", colorTextPrimaryWeak: "rgb(57, 71, 98)", colorTextSubaccount: colorTextSubaccount2, colorTextSuccess: colorTextSuccess6, colorTextUser: colorTextUser6, colorTextWarning: colorTextWarning6, colorTextWarningStrong: "rgb(250, 194, 160)", colorTextWeak: colorTextWeak6, colorTextWeaker: colorTextWeaker6, colorTextWeakest: colorTextWeakest6 };
    zIndices6 = { zIndex0: "0", zIndex10: "10", zIndex20: "20", zIndex30: "30", zIndex40: "40", zIndex50: "50", zIndex60: "60", zIndex70: "70", zIndex80: "80", zIndex90: "90" };
  }
});

// node_modules/@twilio-paste/design-tokens/dist/tokens.raw.json
var tokens_raw_default;
var init_tokens_raw = __esm({
  "node_modules/@twilio-paste/design-tokens/dist/tokens.raw.json"() {
    tokens_raw_default = {
      aliases: {
        sky: {
          value: "#51A9E3"
        },
        mint: {
          value: "#6ADDB2"
        },
        saffron: {
          value: "#F2BE5A"
        },
        white: {
          value: "#FFFFFF"
        },
        "amaranth-transparent-10": {
          value: "rgba(242, 47, 70, 0.1)"
        },
        "paper-accent": {
          value: "#FEF0E6"
        },
        sun: {
          value: "#FF7A00"
        },
        "white-accent": {
          value: "#F6FBFE"
        },
        "ink-accent": {
          value: "#17243B"
        },
        "amaranth-accent": {
          value: "#F3465A"
        },
        amaranth: {
          value: "#F22F46"
        },
        black: {
          value: "#000000"
        },
        "palette-yellow-70": {
          value: "#c28e00"
        },
        "palette-blue-10": {
          value: "#ebf4ff"
        },
        "palette-green-05": {
          value: "#f5fdf8"
        },
        "palette-yellow-60": {
          value: "#e8b407"
        },
        "palette-gray-0-transparent-100": {
          value: "rgba(255, 255, 255, 1)"
        },
        "palette-blue-55": {
          value: "#006dfa"
        },
        "palette-yellow-50": {
          value: "#fad100"
        },
        "palette-gray-100-transparent-100": {
          value: "rgba(18, 28, 45, 1)"
        },
        "palette-red-100": {
          value: "#310c0c"
        },
        "palette-yellow-40": {
          value: "#ffdd35"
        },
        "palette-orange-100": {
          value: "#40130f"
        },
        "palette-purple-05": {
          value: "#faf7fd"
        },
        "palette-blue-60-transparent-100": {
          value: "rgba(2, 99, 224, 1)"
        },
        "palette-yellow-30": {
          value: "#ffe980"
        },
        "palette-blue-60-transparent-90": {
          value: "rgba(2, 99, 224, 0.9)"
        },
        "palette-orange-90": {
          value: "#541914"
        },
        "palette-red-90": {
          value: "#4a0b0b"
        },
        "palette-yellow-20": {
          value: "#fff1b3"
        },
        "palette-blue-60-transparent-80": {
          value: "rgba(2, 99, 224, 0.8)"
        },
        "palette-orange-80": {
          value: "#8d3118"
        },
        "palette-red-80": {
          value: "#750c0c"
        },
        "palette-yellow-10": {
          value: "#fffbea"
        },
        "palette-blue-60-transparent-70": {
          value: "rgba(2, 99, 224, 0.7)"
        },
        "palette-orange-70": {
          value: "#c35323"
        },
        "palette-blue-05": {
          value: "#f4f9ff"
        },
        "palette-gray-100-transparent-90": {
          value: "rgba(18, 28, 45, 0.9)"
        },
        "palette-gray-0-transparent-90": {
          value: "rgba(255, 255, 255, 0.9)"
        },
        "palette-red-70": {
          value: "#ad1111"
        },
        "palette-blue-60-transparent-60": {
          value: "rgba(2, 99, 224, 0.6)"
        },
        "palette-orange-60": {
          value: "#f47c22"
        },
        "palette-gray-100-transparent-80": {
          value: "rgba(18, 28, 45, 0.8)"
        },
        "palette-gray-0-transparent-80": {
          value: "rgba(255, 255, 255, 0.8)"
        },
        "palette-red-60": {
          value: "#d61f1f"
        },
        "palette-blue-60-transparent-50": {
          value: "rgba(2, 99, 224, 0.5)"
        },
        "palette-orange-50": {
          value: "#fa9950"
        },
        "palette-gray-100-transparent-70": {
          value: "rgba(18, 28, 45, 0.7)"
        },
        "palette-gray-0-transparent-70": {
          value: "rgba(255, 255, 255, 0.7)"
        },
        "palette-red-50": {
          value: "#eb5656"
        },
        "palette-blue-60-transparent-40": {
          value: "rgba(2, 99, 224, 0.4)"
        },
        "palette-orange-40": {
          value: "#ffb37a"
        },
        "palette-gray-100-transparent-60": {
          value: "rgba(18, 28, 45, 0.6)"
        },
        "palette-gray-0-transparent-60": {
          value: "rgba(255, 255, 255, 0.6)"
        },
        "palette-red-40": {
          value: "#f58a8a"
        },
        "palette-blue-60-transparent-30": {
          value: "rgba(2, 99, 224, 0.3)"
        },
        "palette-orange-30": {
          value: "#fac2a0"
        },
        "palette-gray-100-transparent-50": {
          value: "rgba(18, 28, 45, 0.5)"
        },
        "palette-yellow-100": {
          value: "#3d2106"
        },
        "palette-gray-0-transparent-50": {
          value: "rgba(255, 255, 255, 0.5)"
        },
        "palette-red-30": {
          value: "#f6b1b1"
        },
        "palette-blue-60-transparent-20": {
          value: "rgba(2, 99, 224, 0.2)"
        },
        "palette-orange-20": {
          value: "#fddcc4"
        },
        "palette-gray-100-transparent-40": {
          value: "rgba(18, 28, 45, 0.4)"
        },
        "palette-gray-0-transparent-40": {
          value: "rgba(255, 255, 255, 0.4)"
        },
        "palette-red-20": {
          value: "#fccfcf"
        },
        "palette-blue-60-transparent-10": {
          value: "rgba(2, 99, 224, 0.1)"
        },
        "palette-yellow-05": {
          value: "#fffdf4"
        },
        "palette-orange-10": {
          value: "#fef5ee"
        },
        "palette-orange-65": {
          value: "#e36a19"
        },
        "palette-gray-100-transparent-30": {
          value: "rgba(18, 28, 45, 0.3)"
        },
        "palette-gray-0-transparent-30": {
          value: "rgba(255, 255, 255, 0.3)"
        },
        "palette-red-10": {
          value: "#feecec"
        },
        "palette-red-65": {
          value: "#c72323"
        },
        "palette-gray-100-transparent-20": {
          value: "rgba(18, 28, 45, 0.2)"
        },
        "palette-gray-0-transparent-20": {
          value: "rgba(255, 255, 255, 0.2)"
        },
        "palette-gray-100-transparent-10": {
          value: "rgba(18, 28, 45, 0.1)"
        },
        "palette-gray-0-transparent-10": {
          value: "rgba(255, 255, 255, 0.1)"
        },
        "palette-gray-90": {
          value: "#1f304c"
        },
        "palette-blue-100-transparent-90": {
          value: "rgba(6, 3, 58, 0.9)"
        },
        "palette-blue-100": {
          value: "#06033a"
        },
        "palette-gray-80": {
          value: "#394762"
        },
        "palette-blue-100-transparent-80": {
          value: "rgba(6, 3, 58, 0.8)"
        },
        "palette-gray-70": {
          value: "#4b5671"
        },
        "palette-blue-100-transparent-70": {
          value: "rgba(6, 3, 58, 0.7)"
        },
        "palette-gray-60": {
          value: "#606b85"
        },
        "palette-orange-05": {
          value: "#fdf7f4"
        },
        "palette-purple-100": {
          value: "#160433"
        },
        "palette-blue-100-transparent-60": {
          value: "rgba(6, 3, 58, 0.6)"
        },
        "palette-red-05": {
          value: "#fef5f5"
        },
        "palette-gray-50": {
          value: "#8891aa"
        },
        "palette-green-90": {
          value: "#0d3a1f"
        },
        "palette-blue-100-transparent-50": {
          value: "rgba(6, 3, 58, 0.5)"
        },
        "palette-gray-40": {
          value: "#aeb2c1"
        },
        "palette-green-80": {
          value: "#0b602d"
        },
        "palette-blue-100-transparent-40": {
          value: "rgba(6, 3, 58, 0.4)"
        },
        "palette-gray-30": {
          value: "#cacdd8"
        },
        "palette-green-70": {
          value: "#0e7c3a"
        },
        "palette-blue-100-transparent-30": {
          value: "rgba(6, 3, 58, 0.3)"
        },
        "palette-green-100": {
          value: "#052912"
        },
        "palette-gray-20": {
          value: "#e1e3ea"
        },
        "palette-green-60": {
          value: "#14b053"
        },
        "palette-purple-90": {
          value: "#22094a"
        },
        "palette-blue-100-transparent-20": {
          value: "rgba(6, 3, 58, 0.2)"
        },
        "palette-gray-10": {
          value: "#f4f4f6"
        },
        "palette-green-50": {
          value: "#36d576"
        },
        "palette-purple-80": {
          value: "#380e78"
        },
        "palette-blue-100-transparent-10": {
          value: "rgba(6, 3, 58, 0.1)"
        },
        "palette-blue-90": {
          value: "#030b5d"
        },
        "palette-green-40": {
          value: "#7beaa5"
        },
        "palette-purple-70": {
          value: "#5817bd"
        },
        "palette-gray-110": {
          value: "#0F1621"
        },
        "palette-gray-0": {
          value: "#ffffff"
        },
        "palette-blue-100-transparent-100": {
          value: "rgba(6, 3, 58, 1)"
        },
        "palette-green-30": {
          value: "#a2f6c3"
        },
        "palette-purple-60": {
          value: "#6d2ed1"
        },
        "palette-gray-100": {
          value: "#121c2d"
        },
        "palette-blue-80": {
          value: "#001489"
        },
        "palette-green-20": {
          value: "#d1fae0"
        },
        "palette-purple-50": {
          value: "#8c5bd8"
        },
        "palette-blue-70": {
          value: "#043cb5"
        },
        "palette-green-10": {
          value: "#edfdf3"
        },
        "palette-purple-40": {
          value: "#a67fe3"
        },
        "palette-blue-60": {
          value: "#0263e0"
        },
        "palette-purple-30": {
          value: "#c8aff0"
        },
        "palette-blue-50": {
          value: "#008cff"
        },
        "palette-gray-05": {
          value: "#f9f9fa"
        },
        "palette-purple-20": {
          value: "#e7dcfa"
        },
        "palette-blue-40": {
          value: "#66b3ff"
        },
        "palette-purple-10": {
          value: "#f5f0fc"
        },
        "palette-yellow-90": {
          value: "#543308"
        },
        "palette-blue-30": {
          value: "#99cdff"
        },
        "palette-yellow-80": {
          value: "#855c15"
        },
        "palette-blue-20": {
          value: "#cce4ff"
        },
        "border-radius-0": {
          value: "0"
        },
        "border-radius-10": {
          value: "2px"
        },
        "border-radius-20": {
          value: "4px"
        },
        "border-radius-30": {
          value: "8px"
        },
        "border-radius-circle": {
          value: "50%"
        },
        "border-radius-pill": {
          value: "100px"
        },
        "border-width-0": {
          value: "0"
        },
        "border-width-10": {
          value: "1px"
        },
        "border-width-20": {
          value: "2px"
        },
        "border-width-30": {
          value: "4px"
        },
        "border-width-40": {
          value: "8px"
        },
        "offset-90": {
          value: "32px"
        },
        "offset-80": {
          value: "24px"
        },
        "offset-70": {
          value: "20px"
        },
        "offset-60": {
          value: "16px"
        },
        "offset-50": {
          value: "12px"
        },
        "offset-0": {
          value: "0"
        },
        "offset-40": {
          value: "8px"
        },
        "offset-30": {
          value: "6px"
        },
        "offset-20": {
          value: "4px"
        },
        "offset-10": {
          value: "2px"
        },
        "space-70": {
          value: "1.5rem"
        },
        "space-60": {
          value: "1.25rem"
        },
        "space-190": {
          value: "4.5rem"
        },
        "space-50": {
          value: "1rem"
        },
        "space-180": {
          value: "4.25rem"
        },
        "space-40": {
          value: "0.75rem"
        },
        "space-170": {
          value: "4rem"
        },
        "space-30": {
          value: "0.5rem"
        },
        "space-160": {
          value: "3.75rem"
        },
        "space-20": {
          value: "0.25rem"
        },
        "space-150": {
          value: "3.5rem"
        },
        "space-10": {
          value: "0.125rem"
        },
        "space-140": {
          value: "3.25rem"
        },
        "space-130": {
          value: "3rem"
        },
        "space-120": {
          value: "2.75rem"
        },
        "space-110": {
          value: "2.5rem"
        },
        "space-0": {
          value: "0"
        },
        "space-100": {
          value: "2.25rem"
        },
        "space-200": {
          value: "4.75rem"
        },
        "space-90": {
          value: "2rem"
        },
        "space-80": {
          value: "1.75rem"
        },
        "shadow-elevation-0": {
          value: "none"
        },
        "shadow-elevation-10": {
          value: "0 2px 8px 0 rgba(18, 28, 45, 0.1)"
        },
        "shadow-elevation-20": {
          value: "0 4px 16px 0 rgba(18, 28, 45, 0.2)"
        },
        "shadow-elevation-30": {
          value: "0 16px 24px 0 rgba(18, 28, 45, 0.2)"
        },
        "font-family-10": {
          value: "'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
        },
        "font-family-20": {
          value: "'TwilioSansMono', Courier, monospace"
        },
        "font-family-30": {
          value: "'Inter var experimental', 'Inter var', Hiragino Sans, 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, Osaka, 'MS PGothic', sans-serif"
        },
        "font-family-40": {
          value: "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif"
        },
        "font-family-50": {
          value: "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif"
        },
        "font-family-60": {
          value: "'Inter var experimental', 'Inter var', 'Microsoft YaHei New', 微软雅黑, 'Microsoft Yahei', 'Microsoft JhengHei', 宋体, SimSun, sans-serif"
        },
        "font-size-110": {
          value: "3rem"
        },
        "font-size-100": {
          value: "2.5rem"
        },
        "font-size-90": {
          value: "2rem"
        },
        "font-size-80": {
          value: "1.75rem"
        },
        "font-size-70": {
          value: "1.5rem"
        },
        "font-size-60": {
          value: "1.25rem"
        },
        "font-size-50": {
          value: "1.125rem"
        },
        "font-size-40": {
          value: "1rem"
        },
        "font-size-30": {
          value: "0.875rem"
        },
        "font-size-20": {
          value: "0.75rem"
        },
        "font-size-10": {
          value: "0.625rem"
        },
        "font-size-display-30": {
          value: "4rem"
        },
        "font-size-display-20": {
          value: "3rem"
        },
        "font-size-display-10": {
          value: "2rem"
        },
        "font-weight-light": {
          value: 300
        },
        "font-weight-normal": {
          value: 400
        },
        "font-weight-medium": {
          value: 500
        },
        "font-weight-semibold": {
          value: 600
        },
        "font-weight-bold": {
          value: 700
        },
        "font-weight-extrabold": {
          value: 800
        },
        "line-height-0": {
          value: "0"
        },
        "line-height-110": {
          value: "4rem"
        },
        "line-height-90": {
          value: "2.75rem"
        },
        "line-height-100": {
          value: "3.25rem"
        },
        "line-height-80": {
          value: "2.5rem"
        },
        "line-height-70": {
          value: "2rem"
        },
        "line-height-60": {
          value: "1.75rem"
        },
        "line-height-50": {
          value: "1.75rem"
        },
        "line-height-40": {
          value: "1.5rem"
        },
        "line-height-30": {
          value: "1.25rem"
        },
        "line-height-20": {
          value: "1.25rem"
        },
        "line-height-10": {
          value: "1rem"
        },
        "line-height-05": {
          value: "0.75rem"
        },
        "line-height-display-30": {
          value: "5rem"
        },
        "line-height-display-20": {
          value: "3.75rem"
        },
        "line-height-display-10": {
          value: "2.5rem"
        },
        "size-square-40": {
          value: "0.75rem"
        },
        "size-square-30": {
          value: "0.5rem"
        },
        "size-square-20": {
          value: "0.25rem"
        },
        "size-90": {
          value: "57.5rem"
        },
        "size-square-10": {
          value: "0.125rem"
        },
        "size-120": {
          value: "77rem"
        },
        "size-80": {
          value: "51rem"
        },
        "size-0": {
          value: "0"
        },
        "size-110": {
          value: "70.5rem"
        },
        "size-square-190": {
          value: "4.5rem"
        },
        "size-70": {
          value: "44.5rem"
        },
        "size-100": {
          value: "64rem"
        },
        "size-square-180": {
          value: "4.25rem"
        },
        "size-60": {
          value: "38rem"
        },
        "size-square-170": {
          value: "4rem"
        },
        "size-sidebar-compact": {
          value: "4.75rem"
        },
        "size-square-25": {
          value: "0.375rem"
        },
        "size-square-160": {
          value: "3.75rem"
        },
        "size-50": {
          value: "31.5rem"
        },
        "size-square-150": {
          value: "3.5rem"
        },
        "size-40": {
          value: "25rem"
        },
        "size-square-140": {
          value: "3.25rem"
        },
        "size-30": {
          value: "18.5rem"
        },
        "size-topbar": {
          value: "4.75rem"
        },
        "size-square-130": {
          value: "3rem"
        },
        "size-20": {
          value: "12rem"
        },
        "size-square-120": {
          value: "2.75rem"
        },
        "size-10": {
          value: "5.5rem"
        },
        "size-square-110": {
          value: "2.5rem"
        },
        "size-square-0": {
          value: "0"
        },
        "size-square-100": {
          value: "2.25rem"
        },
        "size-square-200": {
          value: "4.75rem"
        },
        "size-sidebar": {
          value: "15rem"
        },
        "size-square-90": {
          value: "2rem"
        },
        "size-square-80": {
          value: "1.75rem"
        },
        "size-square-70": {
          value: "1.5rem"
        },
        "size-square-60": {
          value: "1.25rem"
        },
        "size-square-50": {
          value: "1rem"
        },
        "z-index-0": {
          value: "0"
        },
        "z-index-90": {
          value: 90
        },
        "z-index-80": {
          value: 80
        },
        "z-index-70": {
          value: 70
        },
        "z-index-60": {
          value: 60
        },
        "z-index-50": {
          value: 50
        },
        "z-index-40": {
          value: 40
        },
        "z-index-30": {
          value: 30
        },
        "z-index-20": {
          value: 20
        },
        "z-index-10": {
          value: 10
        }
      },
      props: {
        "color-background-user": {
          type: "color",
          category: "background-color",
          value: "#c8aff0",
          comment: "Background color used for user avatars.",
          originalValue: "{!palette-purple-30}",
          name: "color-background-user"
        },
        "color-background-trial": {
          type: "color",
          category: "background-color",
          value: "#d1fae0",
          comment: "Background color used for trial accounts.",
          originalValue: "{!palette-green-20}",
          name: "color-background-trial"
        },
        "color-background-subaccount": {
          type: "color",
          category: "background-color",
          value: "#fffbea",
          comment: "Background color used for subaccounts.",
          originalValue: "{!palette-yellow-10}",
          name: "color-background-subaccount"
        },
        "color-background-primary-stronger": {
          type: "color",
          category: "background-color",
          value: "#030b5d",
          comment: "Stronger background color used for primary actions or highlights.",
          originalValue: "{!palette-blue-90}",
          name: "color-background-primary-stronger"
        },
        "color-background-destructive-stronger": {
          type: "color",
          category: "background-color",
          value: "#4a0b0b",
          comment: "Stronger background color used for destructive actions or highlights.",
          originalValue: "{!palette-red-90}",
          name: "color-background-destructive-stronger"
        },
        "color-background-primary-weaker": {
          type: "color",
          category: "background-color",
          value: "#cce4ff",
          comment: "Weaker background color used for primary actions or highlights.",
          originalValue: "{!palette-blue-20}",
          name: "color-background-primary-weaker"
        },
        "color-background-destructive-weaker": {
          type: "color",
          category: "background-color",
          value: "#fccfcf",
          comment: "Weaker background color used for destructive actions or highlights.",
          originalValue: "{!palette-red-20}",
          name: "color-background-destructive-weaker"
        },
        "color-background-warning": {
          type: "color",
          category: "background-color",
          value: "#f47c22",
          comment: "Background color used for warning alerts and toasts.",
          originalValue: "{!palette-orange-60}",
          name: "color-background-warning"
        },
        "color-background-warning-weakest": {
          type: "color",
          category: "background-color",
          value: "#fef5ee",
          comment: "Weakest background color used for warning alerts and toasts.",
          originalValue: "{!palette-orange-10}",
          name: "color-background-warning-weakest"
        },
        "color-background-inverse-strong": {
          type: "color",
          category: "background-color",
          value: "#394762",
          comment: "Strong inverse background color used for containers.",
          originalValue: "{!palette-gray-80}",
          name: "color-background-inverse-strong"
        },
        "color-background-new": {
          type: "color",
          category: "background-color",
          value: "#f5f0fc",
          comment: "Background color used to represent a new status.",
          originalValue: "{!palette-purple-10}",
          name: "color-background-new"
        },
        "color-background-strong": {
          type: "color",
          category: "background-color",
          value: "#e1e3ea",
          comment: "Strong background color used for containers.",
          originalValue: "{!palette-gray-20}",
          name: "color-background-strong"
        },
        "color-background-new-weakest": {
          type: "color",
          category: "background-color",
          value: "#faf7fd",
          comment: "Weakest background color for indicating a new status.",
          originalValue: "{!palette-purple-05}",
          name: "color-background-new-weakest"
        },
        "color-background-destructive": {
          type: "color",
          category: "background-color",
          value: "#d61f1f",
          comment: "Background color used for destructive actions or highlights.",
          originalValue: "{!palette-red-60}",
          name: "color-background-destructive"
        },
        "color-background-weak": {
          type: "color",
          category: "background-color",
          value: "#f9f9fa",
          comment: "Weak background color used for containers.",
          originalValue: "{!palette-gray-05}",
          name: "color-background-weak"
        },
        "color-background-primary": {
          type: "color",
          category: "background-color",
          value: "#0263e0",
          comment: "Background color used for primary actions or highlights.",
          originalValue: "{!palette-blue-60}",
          name: "color-background-primary"
        },
        "color-background-primary-weakest": {
          type: "color",
          category: "background-color",
          value: "#ebf4ff",
          comment: "Weakest background color used for primary actions or highlights.",
          originalValue: "{!palette-blue-10}",
          name: "color-background-primary-weakest"
        },
        "color-background-busy": {
          type: "color",
          category: "background-color",
          value: "#f47c22",
          comment: 'Background color used to represent an entity or person as "busy".',
          originalValue: "{!palette-orange-60}",
          name: "color-background-busy"
        },
        "color-background-success": {
          type: "color",
          category: "background-color",
          value: "#14b053",
          comment: "Background color used for success alerts and toasts.",
          originalValue: "{!palette-green-60}",
          name: "color-background-success"
        },
        "color-background-destructive-weakest": {
          type: "color",
          category: "background-color",
          value: "#feecec",
          comment: "Weakest background color used for destructive actions or highlights.",
          originalValue: "{!palette-red-10}",
          name: "color-background-destructive-weakest"
        },
        "color-background-offline": {
          type: "color",
          category: "background-color",
          value: "#aeb2c1",
          comment: 'Background color used to represent an entity or person as "offline".',
          originalValue: "{!palette-gray-40}",
          name: "color-background-offline"
        },
        "color-background-row-striped": {
          type: "color",
          category: "background-color",
          value: "#f4f4f6",
          comment: "Background color used for alternative striped rows.",
          originalValue: "{!palette-gray-10}",
          name: "color-background-row-striped"
        },
        "color-background-primary-strongest": {
          type: "color",
          category: "background-color",
          value: "#06033a",
          comment: "Strongest background color used for primary actions or highlights.",
          originalValue: "{!palette-blue-100}",
          name: "color-background-primary-strongest"
        },
        "color-background-success-weakest": {
          type: "color",
          category: "background-color",
          value: "#edfdf3",
          comment: "Weakest background color used for success alerts and toasts.",
          originalValue: "{!palette-green-10}",
          name: "color-background-success-weakest"
        },
        "color-background-destructive-strongest": {
          type: "color",
          category: "background-color",
          value: "#310c0c",
          comment: "Strongest background color used for destructive actions or highlights.",
          originalValue: "{!palette-red-100}",
          name: "color-background-destructive-strongest"
        },
        "color-background-error-strong": {
          type: "color",
          category: "background-color",
          value: "#750c0c",
          comment: "Strongest background color used for error alerts and toasts.",
          originalValue: "{!palette-red-80}",
          name: "color-background-error-strong"
        },
        "color-background-brand-strong": {
          type: "color",
          category: "background-color",
          value: "#030b5d",
          comment: "Strong primary brand background, accessible with inverse text.",
          originalValue: "{!palette-blue-90}",
          name: "color-background-brand-strong"
        },
        "color-background-brand": {
          type: "color",
          category: "background-color",
          value: "#001489",
          comment: "Primary brand background, accessible with inverse text.",
          originalValue: "{!palette-blue-80}",
          name: "color-background-brand"
        },
        "color-background-error": {
          type: "color",
          category: "background-color",
          value: "#d61f1f",
          comment: "Background color used for error alerts and toasts.",
          originalValue: "{!palette-red-60}",
          name: "color-background-error"
        },
        "color-background-neutral-weakest": {
          type: "color",
          category: "background-color",
          value: "#ebf4ff",
          comment: "Weakest background color used for neutral or default variants.",
          originalValue: "{!palette-blue-10}",
          name: "color-background-neutral-weakest"
        },
        "color-background-available": {
          type: "color",
          category: "background-color",
          value: "#14b053",
          comment: 'Background color used to represent an entity or person as "available".',
          originalValue: "{!palette-green-60}",
          name: "color-background-available"
        },
        "color-background-error-weakest": {
          type: "color",
          category: "background-color",
          value: "#feecec",
          comment: "Weakest background color used for error alerts and toasts.",
          originalValue: "{!palette-red-10}",
          name: "color-background-error-weakest"
        },
        "color-background-required": {
          type: "color",
          category: "background-color",
          value: "#eb5656",
          comment: "Background color used to represent required form fields.",
          originalValue: "{!palette-red-50}",
          name: "color-background-required"
        },
        "color-background-error-strongest": {
          type: "color",
          category: "background-color",
          value: "#310c0c",
          comment: "Strongest error background color",
          originalValue: "{!palette-red-100}",
          name: "color-background-error-strongest"
        },
        "color-background-decorative-40-weakest": {
          type: "color",
          category: "background-color",
          value: "#f5f0fc",
          comment: "Weakest background color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative border and/or text tokens.",
          originalValue: "{!palette-purple-10}",
          name: "color-background-decorative-40-weakest"
        },
        "color-background-inverse-stronger": {
          type: "color",
          category: "background-color",
          value: "#394762",
          comment: "Stronger inverse background color for any container. Must be used on color-background-body-inverse.",
          originalValue: "{!palette-gray-80}",
          name: "color-background-inverse-stronger"
        },
        "color-background-decorative-30-weakest": {
          type: "color",
          category: "background-color",
          value: "#edfdf3",
          comment: "Weakest background color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative border and/or text tokens.",
          originalValue: "{!palette-green-10}",
          name: "color-background-decorative-30-weakest"
        },
        "color-background-body": {
          type: "color",
          category: "background-color",
          value: "#ffffff",
          comment: "Background color used for the main page body.",
          originalValue: "{!palette-gray-0}",
          name: "color-background-body"
        },
        "color-background-primary-strong": {
          type: "color",
          category: "background-color",
          value: "#001489",
          comment: "Strong background color used for primary actions or highlights.",
          originalValue: "{!palette-blue-80}",
          name: "color-background-primary-strong"
        },
        "color-background-decorative-20-weakest": {
          type: "color",
          category: "background-color",
          value: "#ebf4ff",
          comment: "Weakest background color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative border and/or text tokens.",
          originalValue: "{!palette-blue-10}",
          name: "color-background-decorative-20-weakest"
        },
        "color-background-destructive-strong": {
          type: "color",
          category: "background-color",
          value: "#750c0c",
          comment: "Strong background color used for destructive actions or highlights.",
          originalValue: "{!palette-red-80}",
          name: "color-background-destructive-strong"
        },
        "color-background-destructive-weak": {
          type: "color",
          category: "background-color",
          value: "#f6b1b1",
          comment: "Weak background color used for destructive actions or highlights.",
          originalValue: "{!palette-red-30}",
          name: "color-background-destructive-weak"
        },
        "color-background-decorative-10-weakest": {
          type: "color",
          category: "background-color",
          value: "#f4f4f6",
          comment: "Weakest background color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative border and/or text tokens.",
          originalValue: "{!palette-gray-10}",
          name: "color-background-decorative-10-weakest"
        },
        "color-background": {
          type: "color",
          category: "background-color",
          value: "#f4f4f6",
          comment: "Default background color for any container.",
          originalValue: "{!palette-gray-10}",
          name: "color-background"
        },
        "color-background-primary-weak": {
          type: "color",
          category: "background-color",
          value: "#99cdff",
          comment: "Weak background color used for primary actions or highlights.",
          originalValue: "{!palette-blue-30}",
          name: "color-background-primary-weak"
        },
        "color-background-stronger": {
          type: "color",
          category: "background-color",
          value: "#8891aa",
          comment: "Stronger background color used for containers.",
          originalValue: "{!palette-gray-50}",
          name: "color-background-stronger"
        },
        "color-background-brand-highlight": {
          type: "color",
          category: "background-color",
          value: "#F22F46",
          comment: "Highlight brand background, accessible with black text.",
          originalValue: "{!amaranth}",
          name: "color-background-brand-highlight"
        },
        "color-background-brand-highlight-weakest": {
          type: "color",
          category: "background-color",
          value: "rgba(242, 47, 70, 0.1)",
          comment: "Weakest background color used for brand highlights.",
          originalValue: "{!amaranth-transparent-10}",
          name: "color-background-brand-highlight-weakest"
        },
        "color-background-strongest": {
          type: "color",
          category: "background-color",
          value: "#4b5671",
          comment: "Strongest background color used for containers.",
          originalValue: "{!palette-gray-70}",
          name: "color-background-strongest"
        },
        "color-background-body-inverse": {
          type: "color",
          category: "background-color",
          value: "#121c2d",
          comment: "Inverse background color used for the main page body.",
          originalValue: "{!palette-gray-100}",
          name: "color-background-body-inverse"
        },
        "color-background-inverse": {
          type: "color",
          category: "background-color",
          value: "#1f304c",
          comment: "Inverse background color used for containers.",
          originalValue: "{!palette-gray-90}",
          name: "color-background-inverse"
        },
        "color-background-overlay": {
          type: "color",
          category: "background-color",
          value: "rgba(6, 3, 58, 0.4)",
          comment: "Background color used for overlays.",
          originalValue: "{!palette-blue-100-transparent-40}",
          name: "color-background-overlay"
        },
        "color-background-unavailable": {
          type: "color",
          category: "background-color",
          value: "#d61f1f",
          comment: 'Background color used to represent an entity or person as "unavailable".',
          originalValue: "{!palette-red-60}",
          name: "color-background-unavailable"
        },
        "color-background-error-stronger": {
          type: "color",
          category: "background-color",
          value: "#4a0b0b",
          comment: "Stronger error background color",
          originalValue: "{!palette-red-90}",
          name: "color-background-error-stronger"
        },
        "color-background-brand-stronger": {
          type: "color",
          category: "background-color",
          value: "#06033a",
          comment: "Stronger primary brand background, accessible with inverse text.",
          originalValue: "{!palette-blue-100}",
          name: "color-background-brand-stronger"
        },
        "color-border-error-stronger": {
          type: "color",
          category: "border-color",
          value: "#4a0b0b",
          comment: "Stronger error border color",
          originalValue: "{!palette-red-90}",
          name: "color-border-error-stronger"
        },
        "color-border-warning-weak": {
          type: "color",
          category: "border-color",
          value: "#ffb37a",
          comment: "Weak warning border color",
          originalValue: "{!palette-orange-40}",
          name: "color-border-warning-weak"
        },
        "color-border-decorative-40-weaker": {
          type: "color",
          category: "border-color",
          value: "#e7dcfa",
          comment: "Weaker border color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or text tokens.",
          originalValue: "{!palette-purple-20}",
          name: "color-border-decorative-40-weaker"
        },
        "color-border-error-weaker": {
          type: "color",
          category: "border-color",
          value: "#fccfcf",
          comment: "Weaker error border color",
          originalValue: "{!palette-red-20}",
          name: "color-border-error-weaker"
        },
        "color-border-user": {
          type: "color",
          category: "border-color",
          value: "#e7dcfa",
          comment: "User avatar border color.",
          originalValue: "{!palette-purple-20}",
          name: "color-border-user"
        },
        "color-border-neutral-weaker": {
          type: "color",
          category: "border-color",
          value: "#cce4ff",
          comment: "Weaker neutral border color",
          originalValue: "{!palette-blue-20}",
          name: "color-border-neutral-weaker"
        },
        "color-border-warning": {
          type: "color",
          category: "border-color",
          value: "#f47c22",
          comment: "Warning border color",
          originalValue: "{!palette-orange-60}",
          name: "color-border-warning"
        },
        "color-border-success-weaker": {
          type: "color",
          category: "border-color",
          value: "#d1fae0",
          comment: "Weaker success border color",
          originalValue: "{!palette-green-20}",
          name: "color-border-success-weaker"
        },
        "color-border-primary-stronger": {
          type: "color",
          category: "border-color",
          value: "#030b5d",
          comment: "Stronger primary border color",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-new",
            "color-background-row-striped",
            "color-background-primary-weak",
            "color-background-primary-weaker",
            "color-background-primary-weakest",
            "color-background-destructive-weak",
            "color-background-destructive-weaker",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-blue-90}",
          name: "color-border-primary-stronger"
        },
        "color-border-destructive-stronger": {
          type: "color",
          category: "border-color",
          value: "#4a0b0b",
          comment: "Stronger destructive hover border color",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-new",
            "color-background-row-striped",
            "color-background-primary-weak",
            "color-background-primary-weaker",
            "color-background-primary-weakest",
            "color-background-destructive-weak",
            "color-background-destructive-weaker",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-90}",
          name: "color-border-destructive-stronger"
        },
        "color-border-warning-weakest": {
          type: "color",
          category: "border-color",
          value: "#fef5ee",
          comment: "Weakest warning border color",
          originalValue: "{!palette-orange-10}",
          name: "color-border-warning-weakest"
        },
        "color-border-primary-weaker": {
          type: "color",
          category: "border-color",
          value: "#cce4ff",
          comment: "Weaker primary border color",
          originalValue: "{!palette-blue-20}",
          name: "color-border-primary-weaker"
        },
        "color-border-destructive-weaker": {
          type: "color",
          category: "border-color",
          value: "#fccfcf",
          comment: "Destructive focus border color",
          originalValue: "{!palette-red-20}",
          name: "color-border-destructive-weaker"
        },
        "color-border-new-weaker": {
          type: "color",
          category: "border-color",
          value: "#e7dcfa",
          comment: "Weaker border color for something designated as new",
          originalValue: "{!palette-purple-20}",
          name: "color-border-new-weaker"
        },
        "color-border-destructive": {
          type: "color",
          category: "border-color",
          value: "#d61f1f",
          comment: "Destructive border color",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-neutral-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-60}",
          name: "color-border-destructive"
        },
        "color-border-inverse-strong": {
          type: "color",
          category: "border-color",
          value: "#e1e3ea",
          comment: "Strong border on inverse backgrounds. Must be used on color-background-body-inverse.",
          uicontrol_contrast_pairing: [
            "color-background-body-inverse"
          ],
          originalValue: "{!palette-gray-20}",
          name: "color-border-inverse-strong"
        },
        "color-border-primary": {
          type: "color",
          category: "border-color",
          value: "#0263e0",
          comment: "Primary border color",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-neutral-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-blue-60}",
          name: "color-border-primary"
        },
        "color-border-primary-weakest": {
          type: "color",
          category: "border-color",
          value: "#ebf4ff",
          comment: "Weakest primary border color",
          originalValue: "{!palette-blue-10}",
          name: "color-border-primary-weakest"
        },
        "color-border-success": {
          type: "color",
          category: "border-color",
          value: "#14b053",
          comment: "Success border color",
          originalValue: "{!palette-green-60}",
          name: "color-border-success"
        },
        "color-border-destructive-weakest": {
          type: "color",
          category: "border-color",
          value: "#feecec",
          comment: "Destructive focus border color",
          originalValue: "{!palette-red-10}",
          name: "color-border-destructive-weakest"
        },
        "color-border-destructive-strongest": {
          type: "color",
          category: "border-color",
          value: "#310c0c",
          comment: "Strongest destructive hover border color",
          originalValue: "{!palette-red-100}",
          name: "color-border-destructive-strongest"
        },
        "color-border-primary-strongest": {
          type: "color",
          category: "border-color",
          value: "#06033a",
          comment: "Strongest primary border color",
          originalValue: "{!palette-blue-100}",
          name: "color-border-primary-strongest"
        },
        "color-border-success-weakest": {
          type: "color",
          category: "border-color",
          value: "#edfdf3",
          comment: "Weakest success border color",
          originalValue: "{!palette-green-10}",
          name: "color-border-success-weakest"
        },
        "color-border-warning-weaker": {
          type: "color",
          category: "border-color",
          value: "#fddcc4",
          comment: "Weaker warning border color",
          originalValue: "{!palette-orange-20}",
          name: "color-border-warning-weaker"
        },
        "color-border-strong": {
          type: "color",
          category: "border-color",
          value: "#606b85",
          comment: "Strong border color",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-strong",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-new",
            "color-background-row-striped",
            "color-background-primary-weaker",
            "color-background-primary-weakest",
            "color-background-destructive-weaker",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-gray-60}",
          name: "color-border-strong"
        },
        "color-border-weak": {
          type: "color",
          category: "border-color",
          value: "#cacdd8",
          comment: "Weak border color",
          originalValue: "{!palette-gray-30}",
          name: "color-border-weak"
        },
        "color-border-neutral": {
          type: "color",
          category: "border-color",
          value: "#0263e0",
          comment: "Neutral border color",
          originalValue: "{!palette-blue-60}",
          name: "color-border-neutral"
        },
        "color-border-error": {
          type: "color",
          category: "border-color",
          value: "#d61f1f",
          comment: "Error border color",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-neutral-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-60}",
          name: "color-border-error"
        },
        "color-border-error-weakest": {
          type: "color",
          category: "border-color",
          value: "#feecec",
          comment: "Weakest error border color",
          originalValue: "{!palette-red-10}",
          name: "color-border-error-weakest"
        },
        "color-border-error-strongest": {
          type: "color",
          category: "border-color",
          value: "#310c0c",
          comment: "Strongest error border color",
          originalValue: "{!palette-red-100}",
          name: "color-border-error-strongest"
        },
        "color-border-error-strong": {
          type: "color",
          category: "border-color",
          value: "#750c0c",
          comment: "Strong error border color",
          originalValue: "{!palette-red-80}",
          name: "color-border-error-strong"
        },
        "color-border-error-weak": {
          type: "color",
          category: "border-color",
          value: "#f58a8a",
          comment: "Weak error border color",
          originalValue: "{!palette-red-40}",
          name: "color-border-error-weak"
        },
        "color-border-neutral-weak": {
          type: "color",
          category: "border-color",
          value: "#66b3ff",
          comment: "Weak neutral border color",
          originalValue: "{!palette-blue-40}",
          name: "color-border-neutral-weak"
        },
        "color-border": {
          type: "color",
          category: "border-color",
          value: "#8891aa",
          comment: "Default border color",
          uicontrol_contrast_pairing: [
            "color-background-body"
          ],
          originalValue: "{!palette-gray-50}",
          name: "color-border"
        },
        "color-border-weakest": {
          type: "color",
          category: "border-color",
          value: "#ffffff",
          comment: "Weakest border color",
          originalValue: "{!palette-gray-0}",
          name: "color-border-weakest"
        },
        "color-border-inverse-stronger": {
          type: "color",
          category: "border-color",
          value: "#f4f4f6",
          comment: "Stronger border on inverse backgrounds. Must be used on color-background-body-inverse.",
          uicontrol_contrast_pairing: [
            "color-background-body-inverse"
          ],
          originalValue: "{!palette-gray-10}",
          name: "color-border-inverse-stronger"
        },
        "color-border-inverse-weaker": {
          type: "color",
          category: "border-color",
          value: "#394762",
          comment: "Weaker border on inverse backgrounds. Must be used on color-background-body-inverse.",
          originalValue: "{!palette-gray-80}",
          name: "color-border-inverse-weaker"
        },
        "color-border-success-weak": {
          type: "color",
          category: "border-color",
          value: "#36d576",
          comment: "Weak success border color",
          originalValue: "{!palette-green-50}",
          name: "color-border-success-weak"
        },
        "color-border-primary-strong": {
          type: "color",
          category: "border-color",
          value: "#001489",
          comment: "Strong primary border color",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-new",
            "color-background-row-striped",
            "color-background-primary-weak",
            "color-background-primary-weaker",
            "color-background-primary-weakest",
            "color-background-destructive-weak",
            "color-background-destructive-weaker",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-blue-80}",
          name: "color-border-primary-strong"
        },
        "color-border-inverse": {
          type: "color",
          category: "border-color",
          value: "#8891aa",
          comment: "Border on inverse backgrounds. Must be used on color-background-body-inverse.",
          uicontrol_contrast_pairing: [
            "color-background-body-inverse"
          ],
          originalValue: "{!palette-gray-50}",
          name: "color-border-inverse"
        },
        "color-border-destructive-strong": {
          type: "color",
          category: "border-color",
          value: "#750c0c",
          comment: "Destructive focus border color",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-new",
            "color-background-row-striped",
            "color-background-primary-weak",
            "color-background-primary-weaker",
            "color-background-primary-weakest",
            "color-background-destructive-weak",
            "color-background-destructive-weaker",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-80}",
          name: "color-border-destructive-strong"
        },
        "color-border-primary-weak": {
          type: "color",
          category: "border-color",
          value: "#99cdff",
          comment: "Weak primary border color",
          originalValue: "{!palette-blue-30}",
          name: "color-border-primary-weak"
        },
        "color-border-inverse-weakest": {
          type: "color",
          category: "border-color",
          value: "#1f304c",
          comment: "Weakest border on inverse backgrounds. Must be used on color-background-body-inverse.",
          originalValue: "{!palette-gray-90}",
          name: "color-border-inverse-weakest"
        },
        "color-border-destructive-weak": {
          type: "color",
          category: "border-color",
          value: "#f6b1b1",
          comment: "Destructive focus border color",
          originalValue: "{!palette-red-30}",
          name: "color-border-destructive-weak"
        },
        "color-border-inverse-strongest": {
          type: "color",
          category: "border-color",
          value: "#ffffff",
          comment: "Strongest border on inverse backgrounds. Must be used on color-background-body-inverse.",
          uicontrol_contrast_pairing: [
            "color-background-body-inverse"
          ],
          originalValue: "{!palette-gray-0}",
          name: "color-border-inverse-strongest"
        },
        "color-border-weaker": {
          type: "color",
          category: "border-color",
          value: "#e1e3ea",
          comment: "Weaker border color",
          originalValue: "{!palette-gray-20}",
          name: "color-border-weaker"
        },
        "color-border-decorative-10-weaker": {
          type: "color",
          category: "border-color",
          value: "#e1e3ea",
          comment: "Weaker border color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or text tokens.",
          originalValue: "{!palette-gray-20}",
          name: "color-border-decorative-10-weaker"
        },
        "color-border-decorative-20-weaker": {
          type: "color",
          category: "border-color",
          value: "#cce4ff",
          comment: "Weaker border color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or text tokens.",
          originalValue: "{!palette-blue-20}",
          name: "color-border-decorative-20-weaker"
        },
        "color-border-decorative-30-weaker": {
          type: "color",
          category: "border-color",
          value: "#d1fae0",
          comment: "Weaker border color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or text tokens.",
          originalValue: "{!palette-green-20}",
          name: "color-border-decorative-30-weaker"
        },
        "border-radius-0": {
          type: "size",
          category: "radius",
          value: "0",
          comment: "Border radius reset",
          originalValue: "{!border-radius-0}",
          name: "border-radius-0"
        },
        "border-radius-10": {
          type: "size",
          category: "radius",
          value: "2px",
          comment: "Small border radius",
          originalValue: "{!border-radius-10}",
          name: "border-radius-10"
        },
        "border-radius-20": {
          type: "size",
          category: "radius",
          value: "4px",
          comment: "Large border radius",
          originalValue: "{!border-radius-20}",
          name: "border-radius-20"
        },
        "border-radius-30": {
          type: "size",
          category: "radius",
          value: "8px",
          comment: "Larger border radius",
          originalValue: "{!border-radius-30}",
          name: "border-radius-30"
        },
        "border-radius-circle": {
          type: "size",
          category: "radius",
          value: "50%",
          comment: "Circular border radius",
          originalValue: "{!border-radius-circle}",
          name: "border-radius-circle"
        },
        "border-radius-pill": {
          type: "size",
          category: "radius",
          value: "100px",
          comment: "Pill border radius",
          originalValue: "{!border-radius-pill}",
          name: "border-radius-pill"
        },
        "border-width-0": {
          type: "size",
          category: "border-width",
          value: "0",
          comment: "Border width reset",
          originalValue: "{!border-width-0}",
          name: "border-width-0"
        },
        "border-width-10": {
          type: "size",
          category: "border-width",
          value: "1px",
          comment: "Constant border width token for border width 10",
          originalValue: "{!border-width-10}",
          name: "border-width-10"
        },
        "border-width-20": {
          type: "size",
          category: "border-width",
          value: "2px",
          comment: "Constant border width token for border width 20",
          originalValue: "{!border-width-20}",
          name: "border-width-20"
        },
        "border-width-30": {
          type: "size",
          category: "border-width",
          value: "4px",
          comment: "Constant border width token for border width 30",
          originalValue: "{!border-width-30}",
          name: "border-width-30"
        },
        "border-width-40": {
          type: "size",
          category: "border-width",
          value: "8px",
          comment: "Constant border width token for border width 40",
          originalValue: "{!border-width-40}",
          name: "border-width-40"
        },
        "shadow-border-bottom-new-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 1px 0 #e7dcfa",
          comment: "Weaker bottom shadow border for new status",
          originalValue: "{!offset-0} 1px {!offset-0} {!palette-purple-20}",
          name: "shadow-border-bottom-new-weaker"
        },
        shadow: {
          type: "shadow",
          category: "box-shadow",
          value: "0 4px 16px 0 rgba(18, 28, 45, 0.2)",
          comment: "Default shadow.",
          originalValue: "{!shadow-elevation-20}",
          name: "shadow"
        },
        "shadow-border-subaccount": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #fff1b3",
          comment: "Shadow border for subaccount badge.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-yellow-20}",
          name: "shadow-border-subaccount"
        },
        "shadow-border-destructive-stronger": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #4a0b0b",
          comment: "Strong shadow border for destructive interactions",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-red-90}",
          name: "shadow-border-destructive-stronger"
        },
        "shadow-border-success-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #d1fae0",
          comment: "Weaker shadow border for success inputs.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-green-20}",
          name: "shadow-border-success-weaker"
        },
        "shadow-border-inverse-new-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #5817bd",
          comment: "Shadow border for the sidebar beta badge.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-purple-70}",
          name: "shadow-border-inverse-new-weaker"
        },
        "shadow-border-primary-stronger": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #030b5d",
          comment: "Stronger shadow border for inputs active.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-blue-90}",
          name: "shadow-border-primary-stronger"
        },
        "shadow-border-bottom-warning-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 1px 0 #fddcc4",
          comment: "Weaker bottom shadow border for warning status",
          originalValue: "{!offset-0} 1px {!offset-0} {!palette-orange-20}",
          name: "shadow-border-bottom-warning-weaker"
        },
        "shadow-border-destructive-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #fccfcf",
          comment: "Weaker shadow border for destructive interactions.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-red-20}",
          name: "shadow-border-destructive-weaker"
        },
        "shadow-border-primary-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #cce4ff",
          comment: "Weaker shadow border for primary interactions.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-blue-20}",
          name: "shadow-border-primary-weaker"
        },
        "shadow-border-new-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #e7dcfa",
          comment: "Weaker shadow border for new status inputs.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-purple-20}",
          name: "shadow-border-new-weaker"
        },
        "shadow-low": {
          type: "shadow",
          category: "box-shadow",
          value: "0 2px 8px 0 rgba(18, 28, 45, 0.1)",
          comment: "Low elevation default shadow.",
          originalValue: "{!shadow-elevation-10}",
          name: "shadow-low"
        },
        "shadow-border-inverse-strong": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #e1e3ea",
          comment: "Strong shadow border on interactive elements on inverse backgrounds.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-gray-20}",
          name: "shadow-border-inverse-strong"
        },
        "shadow-border-warning-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #fddcc4",
          comment: "Weaker shadow border for warning inputs.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-orange-20}",
          name: "shadow-border-warning-weaker"
        },
        "shadow-border-strong": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #606b85",
          comment: "Strong shadow border for inputs.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-gray-60}",
          name: "shadow-border-strong"
        },
        "shadow-focus": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 4px rgba(2, 99, 224, 0.7)",
          comment: "Shadow for focus ring on interactive elements.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} {!offset-20} {!palette-blue-60-transparent-70}",
          name: "shadow-focus"
        },
        "shadow-border-weak": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #cacdd8",
          comment: "Weak shadow border for disabled inputs.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-gray-30}",
          name: "shadow-border-weak"
        },
        "shadow-focus-inverse": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 4px rgba(255, 255, 255, 0.4)",
          comment: "Shadow for focus ring on interactive elements on inverse backgrounds.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} {!offset-20} {!palette-gray-0-transparent-40}",
          name: "shadow-focus-inverse"
        },
        "shadow-border-primary": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #0263e0",
          comment: "Default shadow border for primary interactions.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-blue-60}",
          name: "shadow-border-primary"
        },
        "shadow-border-destructive": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #d61f1f",
          comment: "Shadow border for destructive interactions.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-red-60}",
          name: "shadow-border-destructive"
        },
        "shadow-high": {
          type: "shadow",
          category: "box-shadow",
          value: "0 16px 24px 0 rgba(18, 28, 45, 0.2)",
          comment: "High elevation default shadow.",
          originalValue: "{!shadow-elevation-30}",
          name: "shadow-high"
        },
        "shadow-border-error-strong": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #750c0c",
          comment: "Shadow border for error inputs hover.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-red-80}",
          name: "shadow-border-error-strong"
        },
        "shadow-border-primary-strongest": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #06033a",
          comment: "Strongest shadow border for inputs active.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-blue-100}",
          name: "shadow-border-primary-strongest"
        },
        "shadow-border-destructive-strongest": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #310c0c",
          comment: "Strongest shadow border for destructive interactions",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-red-100}",
          name: "shadow-border-destructive-strongest"
        },
        "shadow-border-error-weak": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #eb5656",
          comment: "Shadow border for inverse error inputs.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-red-50}",
          name: "shadow-border-error-weak"
        },
        "shadow-border-error": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #d61f1f",
          comment: "Shadow border for error inputs.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-red-60}",
          name: "shadow-border-error"
        },
        "shadow-border-bottom-decorative-10-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 1px 0 #e1e3ea",
          comment: "Weaker bottom shadow border for decorative 10",
          originalValue: "{!offset-0} 1px {!offset-0} {!palette-gray-20}",
          name: "shadow-border-bottom-decorative-10-weaker"
        },
        "shadow-border-bottom-primary": {
          type: "shadow",
          category: "box-shadow",
          value: "0 1px 0 #006dfa",
          comment: "Bottom shadow border for primary status",
          originalValue: "{!offset-0} 1px {!offset-0} {!palette-blue-55}",
          name: "shadow-border-bottom-primary"
        },
        "shadow-border-bottom-decorative-20-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 1px 0 #cce4ff",
          comment: "Weaker bottom shadow border for decorative 20",
          originalValue: "{!offset-0} 1px {!offset-0} {!palette-blue-20}",
          name: "shadow-border-bottom-decorative-20-weaker"
        },
        "shadow-border-inverse-stronger": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #f4f4f6",
          comment: "Stronger shadow border on interactive elements on inverse backgrounds.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-gray-10}",
          name: "shadow-border-inverse-stronger"
        },
        "shadow-border-error-strongest": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #310c0c",
          comment: "Strongest shadow border for error inputs hover.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-red-100}",
          name: "shadow-border-error-strongest"
        },
        "shadow-border-destructive-strong": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #750c0c",
          comment: "Strong shadow border for destructive interactions",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-red-80}",
          name: "shadow-border-destructive-strong"
        },
        "shadow-border-inverse-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #394762",
          comment: "Weaker shadow border on interactive elements on inverse backgrounds.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-gray-80}",
          name: "shadow-border-inverse-weaker"
        },
        "shadow-border-bottom-decorative-30-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 1px 0 #d1fae0",
          comment: "Weaker bottom shadow border for decorative 30",
          originalValue: "{!offset-0} 1px {!offset-0} {!palette-green-20}",
          name: "shadow-border-bottom-decorative-30-weaker"
        },
        "shadow-border-primary-strong": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #001489",
          comment: "Strong shadow border for inputs hover.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-blue-80}",
          name: "shadow-border-primary-strong"
        },
        "shadow-border-primary-weak": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #99cdff",
          comment: "Weaker shadow border for primary interactions.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-blue-30}",
          name: "shadow-border-primary-weak"
        },
        "shadow-focus-shadow-border": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 4px rgba(2, 99, 224, 0.7), 0 0 0 1px #8891aa",
          comment: "Shadow for simultaneous focus and border.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} {!offset-20} {!palette-blue-60-transparent-70}, {!offset-0} {!offset-0} {!offset-0} 1px {!palette-gray-50}",
          name: "shadow-focus-shadow-border"
        },
        "shadow-border-bottom-decorative-40-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 1px 0 #e7dcfa",
          comment: "Weaker bottom shadow border for decorative 40",
          originalValue: "{!offset-0} 1px {!offset-0} {!palette-purple-20}",
          name: "shadow-border-bottom-decorative-40-weaker"
        },
        "shadow-border-destructive-weak": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #f6b1b1",
          comment: "Weak shadow border for destructive interactions.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-red-30}",
          name: "shadow-border-destructive-weak"
        },
        "shadow-border-bottom-error-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 1px 0 #fccfcf",
          comment: "Weaker bottom shadow border for error status",
          originalValue: "{!offset-0} 1px {!offset-0} {!palette-red-20}",
          name: "shadow-border-bottom-error-weaker"
        },
        "shadow-border-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #e1e3ea",
          comment: "Weaker shadow border for disabled inputs.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-gray-20}",
          name: "shadow-border-weaker"
        },
        "shadow-border": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #8891aa",
          comment: "Shadow border for inputs.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-gray-50}",
          name: "shadow-border"
        },
        "shadow-border-bottom-neutral-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 1px 0 #cce4ff",
          comment: "Weaker bottom shadow border for neutral status",
          originalValue: "{!offset-0} 1px {!offset-0} {!palette-blue-20}",
          name: "shadow-border-bottom-neutral-weaker"
        },
        "shadow-border-decorative-10-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #e1e3ea",
          comment: "Weaker shadow border for decorative 10",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-gray-20}",
          name: "shadow-border-decorative-10-weaker"
        },
        "shadow-border-decorative-20-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #cce4ff",
          comment: "Weaker shadow border for decorative 20",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-blue-20}",
          name: "shadow-border-decorative-20-weaker"
        },
        "shadow-border-bottom-subaccount": {
          type: "shadow",
          category: "box-shadow",
          value: "0 1px 0 #ffdd35",
          comment: "Bottom shadow border for subaccount badge",
          originalValue: "{!offset-0} 1px {!offset-0} {!palette-yellow-40}",
          name: "shadow-border-bottom-subaccount"
        },
        "shadow-focus-inset": {
          type: "shadow",
          category: "box-shadow",
          value: "inset 0 0 0 2px rgba(2, 99, 224, 0.7)",
          comment: "Shadow for inset focus on elements, such as DataGrid cells.",
          originalValue: "inset {!offset-0} {!offset-0} {!offset-0} {!offset-10} {!palette-blue-60-transparent-70}",
          name: "shadow-focus-inset"
        },
        "shadow-border-inverse": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #8891aa",
          comment: "Shadow border on interactive elements on inverse backgrounds.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-gray-50}",
          name: "shadow-border-inverse"
        },
        "shadow-border-decorative-30-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #d1fae0",
          comment: "Weaker shadow border for decorative 30",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-green-20}",
          name: "shadow-border-decorative-30-weaker"
        },
        "shadow-border-inverse-weakest": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #1f304c",
          comment: "Weakest shadow border on interactive elements on inverse backgrounds.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-gray-90}",
          name: "shadow-border-inverse-weakest"
        },
        "shadow-border-bottom-inverse-new-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 1px 0 #5817bd",
          comment: "Bottom shadow border for the sidebar beta badge",
          originalValue: "{!offset-0} 1px {!offset-0} {!palette-purple-70}",
          name: "shadow-border-bottom-inverse-new-weaker"
        },
        "shadow-border-bottom-success-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 1px 0 #d1fae0",
          comment: "Weaker bottom shadow border for success status",
          originalValue: "{!offset-0} 1px {!offset-0} {!palette-green-20}",
          name: "shadow-border-bottom-success-weaker"
        },
        "shadow-border-decorative-40-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #e7dcfa",
          comment: "Weaker shadow border for decorative 40",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-purple-20}",
          name: "shadow-border-decorative-40-weaker"
        },
        "shadow-border-error-stronger": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #4a0b0b",
          comment: "Shadow border for error inputs hover.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-red-90}",
          name: "shadow-border-error-stronger"
        },
        "shadow-card": {
          type: "shadow",
          category: "box-shadow",
          value: "0 2px 8px 0 rgba(18, 28, 45, 0.1)",
          comment: "Shadow for cards.",
          originalValue: "{!shadow-elevation-10}",
          name: "shadow-card"
        },
        "shadow-border-error-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #fccfcf",
          comment: "Weaker shadow border for error inputs.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-red-20}",
          name: "shadow-border-error-weaker"
        },
        "shadow-border-inverse-strongest": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #ffffff",
          comment: "Strongest shadow border on interactive elements on inverse backgrounds.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-gray-0}",
          name: "shadow-border-inverse-strongest"
        },
        "shadow-focus-inverse-inset": {
          type: "shadow",
          category: "box-shadow",
          value: "inset 0 0 0 2px rgba(255, 255, 255, 0.4)",
          comment: "Shadow for inset focus ring on interactive elements on inverse backgrounds.",
          originalValue: "inset {!offset-0} {!offset-0} {!offset-0} {!offset-10} {!palette-gray-0-transparent-40}",
          name: "shadow-focus-inverse-inset"
        },
        "shadow-border-user": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #8c5bd8",
          comment: "Shadow border for user.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-purple-50}",
          name: "shadow-border-user"
        },
        "shadow-border-neutral-weaker": {
          type: "shadow",
          category: "box-shadow",
          value: "0 0 0 1px #cce4ff",
          comment: "Weaker shadow border for neutral inputs.",
          originalValue: "{!offset-0} {!offset-0} {!offset-0} 1px {!palette-blue-20}",
          name: "shadow-border-neutral-weaker"
        },
        "color-data-visualization-10": {
          type: "color",
          category: "data-visualization",
          value: "#eb5656",
          comment: "Color used for data visualizations. Must be used in a sequence.",
          uicontrol_contrast_pairing: [
            "color-background-body"
          ],
          data_visualization_contrast_pairing: [
            "color-data-visualization-9",
            "color-data-visualization-1"
          ],
          originalValue: "{!palette-red-50}",
          name: "color-data-visualization-10"
        },
        "color-data-visualization-1": {
          type: "color",
          category: "data-visualization",
          value: "#001489",
          comment: "Color used for data visualizations. Must be used in a sequence.",
          uicontrol_contrast_pairing: [
            "color-background-body"
          ],
          data_visualization_contrast_pairing: [
            "color-data-visualization-10",
            "color-data-visualization-2"
          ],
          originalValue: "{!palette-blue-80}",
          name: "color-data-visualization-1"
        },
        "color-data-visualization-2": {
          type: "color",
          category: "data-visualization",
          value: "#0e7c3a",
          comment: "Color used for data visualizations. Must be used in a sequence.",
          uicontrol_contrast_pairing: [
            "color-background-body"
          ],
          data_visualization_contrast_pairing: [
            "color-data-visualization-1",
            "color-data-visualization-3"
          ],
          originalValue: "{!palette-green-70}",
          name: "color-data-visualization-2"
        },
        "color-data-visualization-3": {
          type: "color",
          category: "data-visualization",
          value: "#0d3a1f",
          comment: "Color used for data visualizations. Must be used in a sequence.",
          uicontrol_contrast_pairing: [
            "color-background-body"
          ],
          data_visualization_contrast_pairing: [
            "color-data-visualization-2",
            "color-data-visualization-4"
          ],
          originalValue: "{!palette-green-90}",
          name: "color-data-visualization-3"
        },
        "color-data-visualization-4": {
          type: "color",
          category: "data-visualization",
          value: "#008cff",
          comment: "Color used for data visualizations. Must be used in a sequence.",
          uicontrol_contrast_pairing: [
            "color-background-body"
          ],
          data_visualization_contrast_pairing: [
            "color-data-visualization-3",
            "color-data-visualization-5"
          ],
          originalValue: "{!palette-blue-50}",
          name: "color-data-visualization-4"
        },
        "color-data-visualization-5": {
          type: "color",
          category: "data-visualization",
          value: "#394762",
          comment: "Color used for data visualizations. Must be used in a sequence.",
          uicontrol_contrast_pairing: [
            "color-background-body"
          ],
          data_visualization_contrast_pairing: [
            "color-data-visualization-4",
            "color-data-visualization-6"
          ],
          originalValue: "{!palette-gray-80}",
          name: "color-data-visualization-5"
        },
        "color-data-visualization-6": {
          type: "color",
          category: "data-visualization",
          value: "#a67fe3",
          comment: "Color used for data visualizations. Must be used in a sequence.",
          uicontrol_contrast_pairing: [
            "color-background-body"
          ],
          data_visualization_contrast_pairing: [
            "color-data-visualization-5",
            "color-data-visualization-7"
          ],
          originalValue: "{!palette-purple-40}",
          name: "color-data-visualization-6"
        },
        "color-data-visualization-7": {
          type: "color",
          category: "data-visualization",
          value: "#6d2ed1",
          comment: "Color used for data visualizations. Must be used in a sequence.",
          uicontrol_contrast_pairing: [
            "color-background-body"
          ],
          data_visualization_contrast_pairing: [
            "color-data-visualization-6",
            "color-data-visualization-8"
          ],
          originalValue: "{!palette-purple-60}",
          name: "color-data-visualization-7"
        },
        "color-data-visualization-8": {
          type: "color",
          category: "data-visualization",
          value: "#8891aa",
          comment: "Color used for data visualizations. Must be used in a sequence.",
          uicontrol_contrast_pairing: [
            "color-background-body"
          ],
          data_visualization_contrast_pairing: [
            "color-data-visualization-7",
            "color-data-visualization-9"
          ],
          originalValue: "{!palette-gray-50}",
          name: "color-data-visualization-8"
        },
        "color-data-visualization-9": {
          type: "color",
          category: "data-visualization",
          value: "#750c0c",
          comment: "Color used for data visualizations. Must be used in a sequence.",
          uicontrol_contrast_pairing: [
            "color-background-body"
          ],
          data_visualization_contrast_pairing: [
            "color-data-visualization-8",
            "color-data-visualization-10"
          ],
          originalValue: "{!palette-red-80}",
          name: "color-data-visualization-9"
        },
        "font-family-text": {
          category: "font",
          type: "font",
          value: "'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
          originalValue: "{!font-family-10}",
          name: "font-family-text"
        },
        "font-family-code": {
          category: "font",
          type: "font",
          value: "'TwilioSansMono', Courier, monospace",
          originalValue: "{!font-family-20}",
          name: "font-family-code"
        },
        "font-family-text-japanese": {
          category: "font",
          type: "font",
          value: "'Inter var experimental', 'Inter var', Hiragino Sans, 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, Osaka, 'MS PGothic', sans-serif",
          originalValue: "{!font-family-30}",
          name: "font-family-text-japanese"
        },
        "font-family-text-korean": {
          category: "font",
          type: "font",
          value: "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif",
          originalValue: "{!font-family-40}",
          name: "font-family-text-korean"
        },
        "font-family-text-chinese-traditional": {
          category: "font",
          type: "font",
          value: "'Inter var experimental', 'Inter var', 'Microsoft JhengHei', 微軟正黑體, 'Microsoft JhengHei UI', 'Microsoft YaHei', 微軟雅黑, 宋体, SimSun, sans-serif",
          originalValue: "{!font-family-50}",
          name: "font-family-text-chinese-traditional"
        },
        "font-family-text-chinese-simplified": {
          category: "font",
          type: "font",
          value: "'Inter var experimental', 'Inter var', 'Microsoft YaHei New', 微软雅黑, 'Microsoft Yahei', 'Microsoft JhengHei', 宋体, SimSun, sans-serif",
          originalValue: "{!font-family-60}",
          name: "font-family-text-chinese-simplified"
        },
        "font-family-display": {
          category: "font",
          type: "font",
          value: "'Inter var experimental', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
          originalValue: "{!font-family-10}",
          name: "font-family-display"
        },
        "font-size-110": {
          category: "font-size",
          type: "font-size",
          value: "3rem",
          comment: "Constant typography token for font size 110",
          originalValue: "{!font-size-110}",
          name: "font-size-110"
        },
        "font-size-100": {
          category: "font-size",
          type: "font-size",
          value: "2.5rem",
          comment: "Constant typography token for font size 100",
          originalValue: "{!font-size-100}",
          name: "font-size-100"
        },
        "font-size-90": {
          category: "font-size",
          type: "font-size",
          value: "2rem",
          comment: "Constant typography token for font size 90",
          originalValue: "{!font-size-90}",
          name: "font-size-90"
        },
        "font-size-80": {
          category: "font-size",
          type: "font-size",
          value: "1.75rem",
          comment: "Constant typography token for font size 80",
          originalValue: "{!font-size-80}",
          name: "font-size-80"
        },
        "font-size-70": {
          category: "font-size",
          type: "font-size",
          value: "1.5rem",
          comment: "Constant typography token for font size 70",
          originalValue: "{!font-size-70}",
          name: "font-size-70"
        },
        "font-size-60": {
          category: "font-size",
          type: "font-size",
          value: "1.25rem",
          comment: "Constant typography token for font size 60",
          originalValue: "{!font-size-60}",
          name: "font-size-60"
        },
        "font-size-50": {
          category: "font-size",
          type: "font-size",
          value: "1.125rem",
          comment: "Constant typography token for font size 50",
          originalValue: "{!font-size-50}",
          name: "font-size-50"
        },
        "font-size-40": {
          category: "font-size",
          type: "font-size",
          value: "1rem",
          comment: "Constant typography token for font size 40",
          originalValue: "{!font-size-40}",
          name: "font-size-40"
        },
        "font-size-30": {
          category: "font-size",
          type: "font-size",
          value: "0.875rem",
          comment: "Constant typography token for font size 30",
          originalValue: "{!font-size-30}",
          name: "font-size-30"
        },
        "font-size-20": {
          category: "font-size",
          type: "font-size",
          value: "0.75rem",
          comment: "Constant typography token for font size 20",
          originalValue: "{!font-size-20}",
          name: "font-size-20"
        },
        "font-size-10": {
          category: "font-size",
          type: "font-size",
          value: "0.625rem",
          comment: "Constant typography token for font size 10",
          originalValue: "{!font-size-10}",
          name: "font-size-10"
        },
        "font-size-display-30": {
          category: "font-size",
          type: "font-size",
          value: "4rem",
          comment: "Constant typography token for font size display 30",
          originalValue: "{!font-size-display-30}",
          name: "font-size-display-30"
        },
        "font-size-display-20": {
          category: "font-size",
          type: "font-size",
          value: "3rem",
          comment: "Constant typography token for font size display 20",
          originalValue: "{!font-size-display-20}",
          name: "font-size-display-20"
        },
        "font-size-display-10": {
          category: "font-size",
          type: "font-size",
          value: "2rem",
          comment: "Constant typography token for font size display 10",
          originalValue: "{!font-size-display-10}",
          name: "font-size-display-10"
        },
        "font-size-base": {
          category: "font-size",
          type: "font-size",
          value: "100%",
          comment: "Base font size applied to the html element, used for rem calculations",
          originalValue: "100%",
          name: "font-size-base"
        },
        "font-weight-light": {
          category: "font-weight",
          type: "font-weight",
          value: "400",
          comment: "Font weight for light weight",
          originalValue: "{!font-weight-normal}",
          name: "font-weight-light"
        },
        "font-weight-normal": {
          category: "font-weight",
          type: "font-weight",
          value: "400",
          comment: "Font weight for normal weight",
          originalValue: "{!font-weight-normal}",
          name: "font-weight-normal"
        },
        "font-weight-medium": {
          category: "font-weight",
          type: "font-weight",
          value: "500",
          comment: "Font weight for medium weight",
          originalValue: "{!font-weight-medium}",
          name: "font-weight-medium"
        },
        "font-weight-semibold": {
          category: "font-weight",
          type: "font-weight",
          value: "600",
          comment: "Font weight for semibold weight",
          originalValue: "{!font-weight-semibold}",
          name: "font-weight-semibold"
        },
        "font-weight-bold": {
          category: "font-weight",
          type: "font-weight",
          value: "700",
          comment: "Font weight for bold weight",
          originalValue: "{!font-weight-bold}",
          name: "font-weight-bold"
        },
        "font-weight-extrabold": {
          category: "font-weight",
          type: "font-weight",
          value: "800",
          comment: "Font weight for extrabold weight",
          originalValue: "{!font-weight-extrabold}",
          name: "font-weight-extrabold"
        },
        "line-height-0": {
          category: "line-height",
          type: "number",
          value: "0",
          comment: "Constant line-height token for line-height 0",
          originalValue: "{!line-height-0}",
          name: "line-height-0"
        },
        "line-height-110": {
          category: "line-height",
          type: "number",
          value: "4rem",
          comment: "Constant line-height token for line-height 110",
          originalValue: "{!line-height-110}",
          name: "line-height-110"
        },
        "line-height-90": {
          category: "line-height",
          type: "number",
          value: "2.75rem",
          comment: "Constant line-height token for line-height 90",
          originalValue: "{!line-height-90}",
          name: "line-height-90"
        },
        "line-height-100": {
          category: "line-height",
          type: "number",
          value: "3.25rem",
          comment: "Constant line-height token for line-height 100",
          originalValue: "{!line-height-100}",
          name: "line-height-100"
        },
        "line-height-80": {
          category: "line-height",
          type: "number",
          value: "2.5rem",
          comment: "Constant line-height token for line-height 80",
          originalValue: "{!line-height-80}",
          name: "line-height-80"
        },
        "line-height-70": {
          category: "line-height",
          type: "number",
          value: "2rem",
          comment: "Constant line-height token for line-height 70",
          originalValue: "{!line-height-70}",
          name: "line-height-70"
        },
        "line-height-60": {
          category: "line-height",
          type: "number",
          value: "1.75rem",
          comment: "Constant line-height token for line-height 60",
          originalValue: "{!line-height-60}",
          name: "line-height-60"
        },
        "line-height-50": {
          category: "line-height",
          type: "number",
          value: "1.75rem",
          comment: "Constant line-height token for line-height 50",
          originalValue: "{!line-height-50}",
          name: "line-height-50"
        },
        "line-height-40": {
          category: "line-height",
          type: "number",
          value: "1.5rem",
          comment: "Constant line-height token for line-height 40",
          originalValue: "{!line-height-40}",
          name: "line-height-40"
        },
        "line-height-30": {
          category: "line-height",
          type: "number",
          value: "1.25rem",
          comment: "Constant line-height token for line-height 30",
          originalValue: "{!line-height-30}",
          name: "line-height-30"
        },
        "line-height-20": {
          category: "line-height",
          type: "number",
          value: "1.25rem",
          comment: "Constant line-height token for line-height 20",
          originalValue: "{!line-height-20}",
          name: "line-height-20"
        },
        "line-height-10": {
          category: "line-height",
          type: "number",
          value: "1rem",
          comment: "Constant line-height token for line-height 10",
          originalValue: "{!line-height-10}",
          name: "line-height-10"
        },
        "line-height-05": {
          category: "line-height",
          type: "number",
          value: "0.75rem",
          comment: "Constant line-height token for line-height 05",
          originalValue: "{!line-height-05}",
          name: "line-height-05"
        },
        "line-height-display-30": {
          category: "line-height",
          type: "number",
          value: "5rem",
          comment: "Constant line-height token for line-height-display 30",
          originalValue: "{!line-height-display-30}",
          name: "line-height-display-30"
        },
        "line-height-display-20": {
          category: "line-height",
          type: "number",
          value: "3.75rem",
          comment: "Constant line-height token for line-height-display 20",
          originalValue: "{!line-height-display-20}",
          name: "line-height-display-20"
        },
        "line-height-display-10": {
          category: "line-height",
          type: "number",
          value: "2.5rem",
          comment: "Constant line-height token for line-height-display 10",
          originalValue: "{!line-height-display-10}",
          name: "line-height-display-10"
        },
        "color-brand-highlight": {
          type: "color",
          category: "color",
          value: "#F22F46",
          comment: "Twilio brand red",
          originalValue: "{!amaranth}",
          name: "color-brand-highlight"
        },
        "color-gray-0": {
          type: "color",
          category: "color",
          value: "#ffffff",
          comment: "Gray Color 0",
          originalValue: "{!palette-gray-0}",
          name: "color-gray-0"
        },
        "color-gray-100": {
          type: "color",
          category: "color",
          value: "#121c2d",
          comment: "Gray Color 10",
          originalValue: "{!palette-gray-100}",
          name: "color-gray-100"
        },
        "color-gray-90": {
          type: "color",
          category: "color",
          value: "#1f304c",
          comment: "Gray Color 9",
          originalValue: "{!palette-gray-90}",
          name: "color-gray-90"
        },
        "color-gray-80": {
          type: "color",
          category: "color",
          value: "#394762",
          comment: "Gray Color 8",
          originalValue: "{!palette-gray-80}",
          name: "color-gray-80"
        },
        "color-gray-70": {
          type: "color",
          category: "color",
          value: "#4b5671",
          comment: "Gray Color 7",
          originalValue: "{!palette-gray-70}",
          name: "color-gray-70"
        },
        "color-gray-60": {
          type: "color",
          category: "color",
          value: "#606b85",
          comment: "Gray Color 6",
          originalValue: "{!palette-gray-60}",
          name: "color-gray-60"
        },
        "color-gray-50": {
          type: "color",
          category: "color",
          value: "#8891aa",
          comment: "Gray Color 5",
          originalValue: "{!palette-gray-50}",
          name: "color-gray-50"
        },
        "color-gray-40": {
          type: "color",
          category: "color",
          value: "#aeb2c1",
          comment: "Gray Color 4",
          originalValue: "{!palette-gray-40}",
          name: "color-gray-40"
        },
        "color-brand": {
          type: "color",
          category: "color",
          value: "#001489",
          comment: "Default branding color",
          originalValue: "{!palette-blue-80}",
          name: "color-brand"
        },
        "color-gray-30": {
          type: "color",
          category: "color",
          value: "#cacdd8",
          comment: "Gray Color 3",
          originalValue: "{!palette-gray-30}",
          name: "color-gray-30"
        },
        "color-gray-20": {
          type: "color",
          category: "color",
          value: "#e1e3ea",
          comment: "Gray Color 2",
          originalValue: "{!palette-gray-20}",
          name: "color-gray-20"
        },
        "color-gray-10": {
          type: "color",
          category: "color",
          value: "#f4f4f6",
          comment: "Gray Color 1",
          originalValue: "{!palette-gray-10}",
          name: "color-gray-10"
        },
        "size-square-40": {
          type: "size",
          category: "sizing",
          value: "0.75rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-40}",
          name: "size-square-40"
        },
        "size-icon-80": {
          type: "size",
          category: "sizing",
          value: "2.5rem",
          comment: "Maps to line-height tokens 1:1",
          originalValue: "{!line-height-80}",
          name: "size-icon-80"
        },
        "size-square-30": {
          type: "size",
          category: "sizing",
          value: "0.5rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-30}",
          name: "size-square-30"
        },
        "size-icon-70": {
          type: "size",
          category: "sizing",
          value: "2rem",
          comment: "Maps to line-height tokens 1:1",
          originalValue: "{!line-height-70}",
          name: "size-icon-70"
        },
        "size-square-20": {
          type: "size",
          category: "sizing",
          value: "0.25rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-20}",
          name: "size-square-20"
        },
        "size-icon-60": {
          type: "size",
          category: "sizing",
          value: "1.75rem",
          comment: "Maps to line-height tokens 1:1",
          originalValue: "{!line-height-60}",
          name: "size-icon-60"
        },
        "size-90": {
          type: "size",
          category: "sizing",
          value: "57.5rem",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-90}",
          name: "size-90"
        },
        "size-square-10": {
          type: "size",
          category: "sizing",
          value: "0.125rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-10}",
          name: "size-square-10"
        },
        "size-120": {
          type: "size",
          category: "sizing",
          value: "77rem",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-120}",
          name: "size-120"
        },
        "size-icon-50": {
          type: "size",
          category: "sizing",
          value: "1.75rem",
          comment: "Maps to line-height tokens 1:1",
          originalValue: "{!line-height-50}",
          name: "size-icon-50"
        },
        "size-80": {
          type: "size",
          category: "sizing",
          value: "51rem",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-80}",
          name: "size-80"
        },
        "size-0": {
          type: "size",
          category: "sizing",
          value: "0",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-0}",
          name: "size-0"
        },
        "size-110": {
          type: "size",
          category: "sizing",
          value: "70.5rem",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-110}",
          name: "size-110"
        },
        "size-icon-40": {
          type: "size",
          category: "sizing",
          value: "1.5rem",
          comment: "Maps to line-height tokens 1:1",
          originalValue: "{!line-height-40}",
          name: "size-icon-40"
        },
        "size-square-190": {
          type: "size",
          category: "sizing",
          value: "4.5rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-190}",
          name: "size-square-190"
        },
        "size-70": {
          type: "size",
          category: "sizing",
          value: "44.5rem",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-70}",
          name: "size-70"
        },
        "size-100": {
          type: "size",
          category: "sizing",
          value: "64rem",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-100}",
          name: "size-100"
        },
        "size-icon-30": {
          type: "size",
          category: "sizing",
          value: "1.25rem",
          comment: "Maps to line-height tokens 1:1",
          originalValue: "{!line-height-30}",
          name: "size-icon-30"
        },
        "size-square-180": {
          type: "size",
          category: "sizing",
          value: "4.25rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-180}",
          name: "size-square-180"
        },
        "size-60": {
          type: "size",
          category: "sizing",
          value: "38rem",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-60}",
          name: "size-60"
        },
        "size-icon-20": {
          type: "size",
          category: "sizing",
          value: "1.25rem",
          comment: "Maps to line-height tokens 1:1",
          originalValue: "{!line-height-20}",
          name: "size-icon-20"
        },
        "size-square-170": {
          type: "size",
          category: "sizing",
          value: "4rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-170}",
          name: "size-square-170"
        },
        "size-sidebar-compact": {
          type: "size",
          category: "sizing",
          value: "4.75rem",
          comment: "Sizing token for the compact sidebar width.",
          originalValue: "{!size-sidebar-compact}",
          name: "size-sidebar-compact"
        },
        "size-icon-10": {
          type: "size",
          category: "sizing",
          value: "1rem",
          comment: "Maps to line-height tokens 1:1",
          originalValue: "{!line-height-10}",
          name: "size-icon-10"
        },
        "size-square-25": {
          type: "size",
          category: "sizing",
          value: "0.375rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-25}",
          name: "size-square-25"
        },
        "size-square-160": {
          type: "size",
          category: "sizing",
          value: "3.75rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-160}",
          name: "size-square-160"
        },
        "size-50": {
          type: "size",
          category: "sizing",
          value: "31.5rem",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-50}",
          name: "size-50"
        },
        "size-icon-110": {
          type: "size",
          category: "sizing",
          value: "4rem",
          comment: "Maps to line-height tokens 1:1",
          originalValue: "{!line-height-110}",
          name: "size-icon-110"
        },
        "size-square-150": {
          type: "size",
          category: "sizing",
          value: "3.5rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-150}",
          name: "size-square-150"
        },
        "size-40": {
          type: "size",
          category: "sizing",
          value: "25rem",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-40}",
          name: "size-40"
        },
        "size-icon-100": {
          type: "size",
          category: "sizing",
          value: "3.25rem",
          comment: "Maps to line-height tokens 1:1",
          originalValue: "{!line-height-100}",
          name: "size-icon-100"
        },
        "size-square-140": {
          type: "size",
          category: "sizing",
          value: "3.25rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-140}",
          name: "size-square-140"
        },
        "size-30": {
          type: "size",
          category: "sizing",
          value: "18.5rem",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-30}",
          name: "size-30"
        },
        "size-topbar": {
          type: "size",
          category: "sizing",
          value: "4.75rem",
          comment: "Sizing token for the minimum topbar height.",
          originalValue: "{!size-topbar}",
          name: "size-topbar"
        },
        "size-square-130": {
          type: "size",
          category: "sizing",
          value: "3rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-130}",
          name: "size-square-130"
        },
        "size-20": {
          type: "size",
          category: "sizing",
          value: "12rem",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-20}",
          name: "size-20"
        },
        "size-square-120": {
          type: "size",
          category: "sizing",
          value: "2.75rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-120}",
          name: "size-square-120"
        },
        "size-10": {
          type: "size",
          category: "sizing",
          value: "5.5rem",
          comment: "Generic sizing token scale for UI components.",
          originalValue: "{!size-10}",
          name: "size-10"
        },
        "size-square-110": {
          type: "size",
          category: "sizing",
          value: "2.5rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-110}",
          name: "size-square-110"
        },
        "size-square-0": {
          type: "size",
          category: "sizing",
          value: "0",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-0}",
          name: "size-square-0"
        },
        "size-icon-05": {
          type: "size",
          category: "sizing",
          value: "0.75rem",
          comment: "Maps to line-height tokens 1:1",
          originalValue: "{!line-height-05}",
          name: "size-icon-05"
        },
        "size-square-100": {
          type: "size",
          category: "sizing",
          value: "2.25rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-100}",
          name: "size-square-100"
        },
        "size-square-200": {
          type: "size",
          category: "sizing",
          value: "4.75rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-200}",
          name: "size-square-200"
        },
        "size-sidebar": {
          type: "size",
          category: "sizing",
          value: "15rem",
          comment: "Sizing token for sidebar width.",
          originalValue: "{!size-sidebar}",
          name: "size-sidebar"
        },
        "size-square-90": {
          type: "size",
          category: "sizing",
          value: "2rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-90}",
          name: "size-square-90"
        },
        "size-square-80": {
          type: "size",
          category: "sizing",
          value: "1.75rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-80}",
          name: "size-square-80"
        },
        "size-square-70": {
          type: "size",
          category: "sizing",
          value: "1.5rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-70}",
          name: "size-square-70"
        },
        "size-square-60": {
          type: "size",
          category: "sizing",
          value: "1.25rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-60}",
          name: "size-square-60"
        },
        "size-square-50": {
          type: "size",
          category: "sizing",
          value: "1rem",
          comment: "Generic square sizing token scale for UI components.",
          originalValue: "{!size-square-50}",
          name: "size-square-50"
        },
        "size-icon-90": {
          type: "size",
          category: "sizing",
          value: "2.75rem",
          comment: "Maps to line-height tokens 1:1",
          originalValue: "{!line-height-90}",
          name: "size-icon-90"
        },
        "space-70": {
          category: "spacing",
          type: "size",
          value: "1.5rem",
          originalValue: "{!space-70}",
          name: "space-70"
        },
        "space-negative-100": {
          category: "spacing",
          type: "size",
          value: "-2.25rem",
          originalValue: "-{!space-100}",
          name: "space-negative-100"
        },
        "space-60": {
          category: "spacing",
          type: "size",
          value: "1.25rem",
          originalValue: "{!space-60}",
          name: "space-60"
        },
        "space-negative-200": {
          category: "spacing",
          type: "size",
          value: "-4.75rem",
          originalValue: "-{!space-200}",
          name: "space-negative-200"
        },
        "space-190": {
          category: "spacing",
          type: "size",
          value: "4.5rem",
          originalValue: "{!space-190}",
          name: "space-190"
        },
        "space-50": {
          category: "spacing",
          type: "size",
          value: "1rem",
          originalValue: "{!space-50}",
          name: "space-50"
        },
        "space-180": {
          category: "spacing",
          type: "size",
          value: "4.25rem",
          originalValue: "{!space-180}",
          name: "space-180"
        },
        "space-40": {
          category: "spacing",
          type: "size",
          value: "0.75rem",
          originalValue: "{!space-40}",
          name: "space-40"
        },
        "space-170": {
          category: "spacing",
          type: "size",
          value: "4rem",
          originalValue: "{!space-170}",
          name: "space-170"
        },
        "space-30": {
          category: "spacing",
          type: "size",
          value: "0.5rem",
          originalValue: "{!space-30}",
          name: "space-30"
        },
        "space-160": {
          category: "spacing",
          type: "size",
          value: "3.75rem",
          originalValue: "{!space-160}",
          name: "space-160"
        },
        "space-20": {
          category: "spacing",
          type: "size",
          value: "0.25rem",
          originalValue: "{!space-20}",
          name: "space-20"
        },
        "space-150": {
          category: "spacing",
          type: "size",
          value: "3.5rem",
          originalValue: "{!space-150}",
          name: "space-150"
        },
        "space-10": {
          category: "spacing",
          type: "size",
          value: "0.125rem",
          originalValue: "{!space-10}",
          name: "space-10"
        },
        "space-140": {
          category: "spacing",
          type: "size",
          value: "3.25rem",
          originalValue: "{!space-140}",
          name: "space-140"
        },
        "space-130": {
          category: "spacing",
          type: "size",
          value: "3rem",
          originalValue: "{!space-130}",
          name: "space-130"
        },
        "space-120": {
          category: "spacing",
          type: "size",
          value: "2.75rem",
          originalValue: "{!space-120}",
          name: "space-120"
        },
        "space-negative-90": {
          category: "spacing",
          type: "size",
          value: "-2rem",
          originalValue: "-{!space-90}",
          name: "space-negative-90"
        },
        "space-110": {
          category: "spacing",
          type: "size",
          value: "2.5rem",
          originalValue: "{!space-110}",
          name: "space-110"
        },
        "space-0": {
          category: "spacing",
          type: "size",
          value: "0",
          originalValue: "{!space-0}",
          name: "space-0"
        },
        "space-negative-80": {
          category: "spacing",
          type: "size",
          value: "-1.75rem",
          originalValue: "-{!space-80}",
          name: "space-negative-80"
        },
        "space-100": {
          category: "spacing",
          type: "size",
          value: "2.25rem",
          originalValue: "{!space-100}",
          name: "space-100"
        },
        "space-negative-70": {
          category: "spacing",
          type: "size",
          value: "-1.5rem",
          originalValue: "-{!space-70}",
          name: "space-negative-70"
        },
        "space-200": {
          category: "spacing",
          type: "size",
          value: "4.75rem",
          originalValue: "{!space-200}",
          name: "space-200"
        },
        "space-negative-60": {
          category: "spacing",
          type: "size",
          value: "-1.25rem",
          originalValue: "-{!space-60}",
          name: "space-negative-60"
        },
        "space-negative-50": {
          category: "spacing",
          type: "size",
          value: "-1rem",
          originalValue: "-{!space-50}",
          name: "space-negative-50"
        },
        "space-negative-40": {
          category: "spacing",
          type: "size",
          value: "-0.75rem",
          originalValue: "-{!space-40}",
          name: "space-negative-40"
        },
        "space-negative-30": {
          category: "spacing",
          type: "size",
          value: "-0.5rem",
          originalValue: "-{!space-30}",
          name: "space-negative-30"
        },
        "space-negative-20": {
          category: "spacing",
          type: "size",
          value: "-0.25rem",
          originalValue: "-{!space-20}",
          name: "space-negative-20"
        },
        "space-negative-10": {
          category: "spacing",
          type: "size",
          value: "-0.125rem",
          originalValue: "-{!space-10}",
          name: "space-negative-10"
        },
        "space-negative-190": {
          category: "spacing",
          type: "size",
          value: "-4.5rem",
          originalValue: "-{!space-190}",
          name: "space-negative-190"
        },
        "space-negative-180": {
          category: "spacing",
          type: "size",
          value: "-4.25rem",
          originalValue: "-{!space-180}",
          name: "space-negative-180"
        },
        "space-negative-170": {
          category: "spacing",
          type: "size",
          value: "-4rem",
          originalValue: "-{!space-170}",
          name: "space-negative-170"
        },
        "space-negative-160": {
          category: "spacing",
          type: "size",
          value: "-3.75rem",
          originalValue: "-{!space-160}",
          name: "space-negative-160"
        },
        "space-negative-150": {
          category: "spacing",
          type: "size",
          value: "-3.5rem",
          originalValue: "-{!space-150}",
          name: "space-negative-150"
        },
        "space-negative-140": {
          category: "spacing",
          type: "size",
          value: "-3.25rem",
          originalValue: "-{!space-140}",
          name: "space-negative-140"
        },
        "space-negative-130": {
          category: "spacing",
          type: "size",
          value: "-3rem",
          originalValue: "-{!space-130}",
          name: "space-negative-130"
        },
        "space-90": {
          category: "spacing",
          type: "size",
          value: "2rem",
          originalValue: "{!space-90}",
          name: "space-90"
        },
        "space-negative-120": {
          category: "spacing",
          type: "size",
          value: "-2.75rem",
          originalValue: "-{!space-120}",
          name: "space-negative-120"
        },
        "space-80": {
          category: "spacing",
          type: "size",
          value: "1.75rem",
          originalValue: "{!space-80}",
          name: "space-80"
        },
        "space-negative-110": {
          category: "spacing",
          type: "size",
          value: "-2.5rem",
          originalValue: "-{!space-110}",
          name: "space-negative-110"
        },
        "color-text-link-destructive-weak": {
          type: "color",
          category: "text-color",
          value: "#f6b1b1",
          comment: "Weak shade of destructive link text to be used in interactions",
          originalValue: "{!palette-red-30}",
          name: "color-text-link-destructive-weak"
        },
        "color-text-link-stronger": {
          type: "color",
          category: "text-color",
          value: "#030b5d",
          comment: "Stronger shade of link text to be used in interactions",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-blue-90}",
          name: "color-text-link-stronger"
        },
        "color-text-user": {
          type: "color",
          category: "text-color",
          value: "#121c2d",
          comment: "Text color for user avatar.",
          originalValue: "{!palette-gray-100}",
          name: "color-text-user"
        },
        "color-text-icon-new": {
          type: "color",
          category: "text-color",
          value: "#6d2ed1",
          comment: "Icon color for indicating a new status.",
          originalValue: "{!palette-purple-60}",
          name: "color-text-icon-new"
        },
        "color-text-subaccount": {
          type: "color",
          category: "text-color",
          value: "#543308",
          comment: "Text color for the subaccount badge",
          originalValue: "{!palette-yellow-90}",
          name: "color-text-subaccount"
        },
        "color-text-destructive-stronger": {
          type: "color",
          category: "text-color",
          value: "#4a0b0b",
          comment: "Stronger shade of destructive text.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-90}",
          name: "color-text-destructive-stronger"
        },
        "color-text-icon-offline": {
          type: "color",
          category: "text-color",
          value: "#606b85",
          comment: "Icon color for indicating a offline status",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-warning-weakest",
            "color-background-row-striped"
          ],
          originalValue: "{!palette-gray-60}",
          name: "color-text-icon-offline"
        },
        "color-text-link-destructive": {
          type: "color",
          category: "text-color",
          value: "#d61f1f",
          comment: "Destructive link text",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-neutral-weakest",
            "color-background-warning-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-60}",
          name: "color-text-link-destructive"
        },
        "color-text-primary-stronger": {
          type: "color",
          category: "text-color",
          value: "#030b5d",
          comment: "Stronger primary text.",
          originalValue: "{!palette-blue-90}",
          name: "color-text-primary-stronger"
        },
        "color-text-icon-success": {
          type: "color",
          category: "text-color",
          value: "#0e7c3a",
          comment: "Icon color for indicating success.",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-success-weakest",
            "color-background-row-striped"
          ],
          originalValue: "{!palette-green-70}",
          name: "color-text-icon-success"
        },
        "color-text-warning": {
          type: "color",
          category: "text-color",
          value: "#8d3118",
          comment: "Color for warning text.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-warning-weakest",
            "color-background-row-striped"
          ],
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-warning-weakest",
            "color-background-row-striped"
          ],
          originalValue: "{!palette-orange-80}",
          name: "color-text-warning"
        },
        "color-text-link-destructive-strongest": {
          type: "color",
          category: "text-color",
          value: "#310c0c",
          comment: "Strongest shade of destructive link text to be used in interactions",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-100}",
          name: "color-text-link-destructive-strongest"
        },
        "color-text-icon-neutral": {
          type: "color",
          category: "text-color",
          value: "#001489",
          comment: "Icon color for being neutral.",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-neutral-weakest",
            "color-background-row-striped"
          ],
          originalValue: "{!palette-blue-80}",
          name: "color-text-icon-neutral"
        },
        "color-text-new": {
          type: "color",
          category: "text-color",
          value: "#6d2ed1",
          comment: "Color for text indicating a new status.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-purple-60}",
          name: "color-text-new"
        },
        "color-text-icon-error": {
          type: "color",
          category: "text-color",
          value: "#d61f1f",
          comment: "Icon color for indicating an error.",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-error-weakest",
            "color-background-row-striped"
          ],
          originalValue: "{!palette-red-60}",
          name: "color-text-icon-error"
        },
        "color-text-inverse-weak": {
          type: "color",
          category: "text-color",
          value: "#cacdd8",
          comment: "Weak inverse text color for dark backgrounds. Must pass AA color contrast with color-background-body-inverse.",
          text_contrast_pairing: [
            "color-background-body-inverse",
            "color-background-brand"
          ],
          originalValue: "{!palette-gray-30}",
          name: "color-text-inverse-weak"
        },
        "color-text-icon-available": {
          type: "color",
          category: "text-color",
          value: "#0e7c3a",
          comment: "Icon color for indicating a available status",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-warning-weakest",
            "color-background-row-striped"
          ],
          originalValue: "{!palette-green-70}",
          name: "color-text-icon-available"
        },
        "color-text-link-destructive-stronger": {
          type: "color",
          category: "text-color",
          value: "#4a0b0b",
          comment: "Stronger shade of destructive link text to be used in interactions",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-90}",
          name: "color-text-link-destructive-stronger"
        },
        "color-text-icon-brand-inverse": {
          type: "color",
          category: "text-color",
          value: "#ffffff",
          comment: "Twilio brand icon color used for the Twilio logo on inverse backgrounds.",
          text_contrast_pairing: [
            "color-background-body-inverse"
          ],
          originalValue: "{!palette-gray-0}",
          name: "color-text-icon-brand-inverse"
        },
        "color-text-destructive": {
          type: "color",
          category: "text-color",
          value: "#d61f1f",
          comment: "Destructive text.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-neutral-weakest",
            "color-background-warning-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-60}",
          name: "color-text-destructive"
        },
        "color-text-primary": {
          type: "color",
          category: "text-color",
          value: "#0263e0",
          comment: "Primary text.",
          originalValue: "{!palette-blue-60}",
          name: "color-text-primary"
        },
        "color-text-success": {
          type: "color",
          category: "text-color",
          value: "#0e7c3a",
          comment: "Text color for success text.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-success-weakest",
            "color-background-row-striped"
          ],
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-success-weakest",
            "color-background-row-striped"
          ],
          originalValue: "{!palette-green-70}",
          name: "color-text-success"
        },
        "color-text-inverse-new": {
          type: "color",
          category: "text-color",
          value: "#c8aff0",
          comment: "Inverse color for indicating a new status.",
          text_contrast_pairing: [
            "color-background-inverse-strong"
          ],
          originalValue: "{!palette-purple-30}",
          name: "color-text-inverse-new"
        },
        "color-text-destructive-strongest": {
          type: "color",
          category: "text-color",
          value: "#310c0c",
          comment: "Strongest shade of destructive text.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-100}",
          name: "color-text-destructive-strongest"
        },
        "color-text-weak": {
          type: "color",
          category: "text-color",
          value: "#606b85",
          comment: "Weak body text for visual hierarchy.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-neutral-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-gray-60}",
          name: "color-text-weak"
        },
        "color-text-primary-strongest": {
          type: "color",
          category: "text-color",
          value: "#06033a",
          comment: "Strongest primary text.",
          originalValue: "{!palette-blue-100}",
          name: "color-text-primary-strongest"
        },
        "color-text-icon": {
          type: "color",
          category: "text-color",
          value: "#606b85",
          comment: "Default icon color.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-strong",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-new",
            "color-background-row-striped",
            "color-background-primary-weaker",
            "color-background-primary-weakest",
            "color-background-destructive-weaker",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-gray-60}",
          name: "color-text-icon"
        },
        "color-text-link": {
          type: "color",
          category: "text-color",
          value: "#0263e0",
          comment: "Link text",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-strong",
            "color-background-body",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-new",
            "color-background-row-striped",
            "color-background-primary-weaker",
            "color-background-primary-weakest",
            "color-background-destructive-weaker",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-blue-60}",
          name: "color-text-link"
        },
        "color-text-icon-brand-highlight": {
          type: "color",
          category: "text-color",
          value: "#F22F46",
          comment: "Twilio brand red icon color used for the Twilio logo.",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body"
          ],
          originalValue: "{!amaranth}",
          name: "color-text-icon-brand-highlight"
        },
        "color-text-neutral": {
          type: "color",
          category: "text-color",
          value: "#001489",
          comment: "Color for text indicating a neutral status.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-blue-80}",
          name: "color-text-neutral"
        },
        "color-text-link-strongest": {
          type: "color",
          category: "text-color",
          value: "#06033a",
          comment: "Strongest shade of link text to be used in interactions",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-blue-100}",
          name: "color-text-link-strongest"
        },
        "color-text-error": {
          type: "color",
          category: "text-color",
          value: "#d61f1f",
          comment: "Error text for inputs and error misc",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-neutral-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-60}",
          name: "color-text-error"
        },
        "color-text-icon-inverse": {
          type: "color",
          category: "text-color",
          value: "#8891aa",
          comment: "Default icon color for inverse backgrounds.",
          text_contrast_pairing: [
            "color-background-body-inverse"
          ],
          originalValue: "{!palette-gray-50}",
          name: "color-text-icon-inverse"
        },
        "color-text-error-strong": {
          type: "color",
          category: "text-color",
          value: "#ad1111",
          comment: "Strong error text for inputs and error misc",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-70}",
          name: "color-text-error-strong"
        },
        "color-text-icon-unavailable": {
          type: "color",
          category: "text-color",
          value: "#d61f1f",
          comment: "Icon color for indicating a unavailable status",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-warning-weakest",
            "color-background-row-striped"
          ],
          originalValue: "{!palette-red-60}",
          name: "color-text-icon-unavailable"
        },
        "color-text-error-weak": {
          type: "color",
          category: "text-color",
          value: "#eb5656",
          comment: "Weak error text for inputs and error misc",
          originalValue: "{!palette-red-50}",
          name: "color-text-error-weak"
        },
        "color-text-decorative-40": {
          type: "color",
          category: "text-color",
          value: "#6d2ed1",
          comment: "Text color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or border tokens.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-decorative-40-weakest"
          ],
          originalValue: "{!palette-purple-60}",
          name: "color-text-decorative-40"
        },
        "color-text-link-strong": {
          type: "color",
          category: "text-color",
          value: "#001489",
          comment: "Strong shade of link text to be used in interactions",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-blue-80}",
          name: "color-text-link-strong"
        },
        "color-text-brand-inverse": {
          type: "color",
          category: "text-color",
          value: "#FFFFFF",
          comment: "Text color used on any brand color",
          text_contrast_pairing: [
            "color-background-body-inverse",
            "color-background-brand"
          ],
          originalValue: "{!white}",
          name: "color-text-brand-inverse"
        },
        "color-text-error-strongest": {
          type: "color",
          category: "text-color",
          value: "#310c0c",
          comment: "Strongest error text for inputs and error misc.",
          originalValue: "{!palette-red-100}",
          name: "color-text-error-strongest"
        },
        "color-text-decorative-30": {
          type: "color",
          category: "text-color",
          value: "#0e7c3a",
          comment: "Text color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or border tokens.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-decorative-30-weakest"
          ],
          originalValue: "{!palette-green-70}",
          name: "color-text-decorative-30"
        },
        "color-text-link-weak": {
          type: "color",
          category: "text-color",
          value: "#99cdff",
          comment: "Weak shade of link text to be used in interactions",
          originalValue: "{!palette-blue-30}",
          name: "color-text-link-weak"
        },
        "color-text-decorative-20": {
          type: "color",
          category: "text-color",
          value: "#001489",
          comment: "Text color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or border tokens.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-decorative-20-weakest"
          ],
          originalValue: "{!palette-blue-80}",
          name: "color-text-decorative-20"
        },
        "color-text-decorative-10": {
          type: "color",
          category: "text-color",
          value: "#606b85",
          comment: "Text color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or border tokens.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-decorative-10-weakest"
          ],
          originalValue: "{!palette-gray-60}",
          name: "color-text-decorative-10"
        },
        "color-text": {
          type: "color",
          category: "text-color",
          value: "#121c2d",
          comment: "Body text color",
          text_contrast_pairing: [
            "color-background",
            "color-background-strong",
            "color-background-stronger",
            "color-background-body",
            "color-background-user",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-new",
            "color-background-row-striped",
            "color-background-primary-weak",
            "color-background-primary-weaker",
            "color-background-primary-weakest",
            "color-background-destructive-weak",
            "color-background-destructive-weaker",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-gray-100}",
          name: "color-text"
        },
        "color-text-icon-busy": {
          type: "color",
          category: "text-color",
          value: "#e36a19",
          comment: "Icon color for indicating a busy status",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-warning-weakest",
            "color-background-row-striped"
          ],
          originalValue: "{!palette-orange-65}",
          name: "color-text-icon-busy"
        },
        "color-text-weakest": {
          type: "color",
          category: "text-color",
          value: "#ffffff",
          comment: "Weakest body text for visual hierarchy. Inaccessible unless used on disabled controls.",
          text_contrast_pairing: [
            "color-background-primary-strong",
            "color-background-primary-stronger",
            "color-background-primary-strongest",
            "color-background-destructive-strong",
            "color-background-destructive-stronger",
            "color-background-destructive-strongest"
          ],
          originalValue: "{!palette-gray-0}",
          name: "color-text-weakest"
        },
        "color-text-brand-highlight": {
          type: "color",
          category: "text-color",
          value: "#F22F46",
          comment: "Twilio brand red, accessible on large text only.",
          uicontrol_contrast_pairing: [
            "color-background-body"
          ],
          originalValue: "{!amaranth}",
          name: "color-text-brand-highlight"
        },
        "color-text-destructive-strong": {
          type: "color",
          category: "text-color",
          value: "#ad1111",
          comment: "Strong shade of destructive text.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-70}",
          name: "color-text-destructive-strong"
        },
        "color-text-inverse-weaker": {
          type: "color",
          category: "text-color",
          value: "#8891aa",
          comment: "Weaker inverse text color for dark backgrounds. Must pass AA color contrast with color-background-body-inverse.",
          originalValue: "{!palette-gray-50}",
          name: "color-text-inverse-weaker"
        },
        "color-text-primary-strong": {
          type: "color",
          category: "text-color",
          value: "#001489",
          comment: "Strong primary text.",
          originalValue: "{!palette-blue-80}",
          name: "color-text-primary-strong"
        },
        "color-text-primary-weak": {
          type: "color",
          category: "text-color",
          value: "#99cdff",
          comment: "Weak primary text.",
          originalValue: "{!palette-blue-30}",
          name: "color-text-primary-weak"
        },
        "color-text-destructive-weak": {
          type: "color",
          category: "text-color",
          value: "#f6b1b1",
          comment: "Weak shade of destructive text.",
          originalValue: "{!palette-red-30}",
          name: "color-text-destructive-weak"
        },
        "color-text-inverse": {
          type: "color",
          category: "text-color",
          value: "#ffffff",
          comment: "Inverse text color for dark backgrounds. Must pass AA color contrast with color-background-body-inverse.",
          text_contrast_pairing: [
            "color-background-body-inverse",
            "color-background-brand",
            "color-background-error",
            "color-background-primary",
            "color-background-destructive"
          ],
          originalValue: "{!palette-gray-0}",
          name: "color-text-inverse"
        },
        "color-text-inverse-weakest": {
          type: "color",
          category: "text-color",
          value: "#4b5671",
          comment: "Weakest inverse text color for dark backgrounds. Must pass AA color contrast with color-background-body-inverse.",
          originalValue: "{!palette-gray-70}",
          name: "color-text-inverse-weakest"
        },
        "color-text-weaker": {
          type: "color",
          category: "text-color",
          value: "#aeb2c1",
          comment: "Weaker body text for visual hierarchy. Inaccessible unless used on disabled controls.",
          originalValue: "{!palette-gray-40}",
          name: "color-text-weaker"
        },
        "color-text-warning-strong": {
          type: "color",
          category: "text-color",
          value: "#8d3118",
          comment: "Color for dark warning text.",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-row-striped",
            "color-background-warning-weakest"
          ],
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-row-striped",
            "color-background-warning-weakest"
          ],
          originalValue: "{!palette-orange-80}",
          name: "color-text-warning-strong"
        },
        "color-text-icon-warning": {
          type: "color",
          category: "text-color",
          value: "#e36a19",
          comment: "Icon color for indicating a warning.",
          uicontrol_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-warning-weakest",
            "color-background-row-striped"
          ],
          originalValue: "{!palette-orange-65}",
          name: "color-text-icon-warning"
        },
        "color-text-error-stronger": {
          type: "color",
          category: "text-color",
          value: "#4a0b0b",
          comment: "Stronger error text for inputs and error misc",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-90}",
          name: "color-text-error-stronger"
        },
        "color-text-link-destructive-strong": {
          type: "color",
          category: "text-color",
          value: "#ad1111",
          comment: "Strong shade of destructive link text to be used in interactions",
          text_contrast_pairing: [
            "color-background",
            "color-background-body",
            "color-background-subaccount",
            "color-background-trial",
            "color-background-neutral-weakest",
            "color-background-success-weakest",
            "color-background-warning-weakest",
            "color-background-error-weakest",
            "color-background-row-striped",
            "color-background-primary-weakest",
            "color-background-destructive-weakest"
          ],
          originalValue: "{!palette-red-70}",
          name: "color-text-link-destructive-strong"
        },
        "z-index-0": {
          type: "z-index",
          category: "z-index",
          value: "0",
          originalValue: "{!z-index-0}",
          name: "z-index-0"
        },
        "z-index-90": {
          type: "z-index",
          category: "z-index",
          value: "90",
          originalValue: "{!z-index-90}",
          name: "z-index-90"
        },
        "z-index-80": {
          type: "z-index",
          category: "z-index",
          value: "80",
          originalValue: "{!z-index-80}",
          name: "z-index-80"
        },
        "z-index-70": {
          type: "z-index",
          category: "z-index",
          value: "70",
          originalValue: "{!z-index-70}",
          name: "z-index-70"
        },
        "z-index-60": {
          type: "z-index",
          category: "z-index",
          value: "60",
          originalValue: "{!z-index-60}",
          name: "z-index-60"
        },
        "z-index-50": {
          type: "z-index",
          category: "z-index",
          value: "50",
          originalValue: "{!z-index-50}",
          name: "z-index-50"
        },
        "z-index-40": {
          type: "z-index",
          category: "z-index",
          value: "40",
          originalValue: "{!z-index-40}",
          name: "z-index-40"
        },
        "z-index-30": {
          type: "z-index",
          category: "z-index",
          value: "30",
          originalValue: "{!z-index-30}",
          name: "z-index-30"
        },
        "z-index-20": {
          type: "z-index",
          category: "z-index",
          value: "20",
          originalValue: "{!z-index-20}",
          name: "z-index-20"
        },
        "z-index-10": {
          type: "z-index",
          category: "z-index",
          value: "10",
          originalValue: "{!z-index-10}",
          name: "z-index-10"
        },
        "color-scheme": {
          type: "string",
          category: "color-scheme",
          value: "light",
          originalValue: "light",
          name: "color-scheme"
        }
      }
    };
  }
});

// node_modules/@twilio-paste/color-contrast-utils/dist/index.es.js
function e(r2, e2) {
  return r2(e2 = { exports: {} }, e2.exports), e2.exports;
}
function l(r2, e2) {
  return !!(r2 && r2.length) && function(r3, e3, t2) {
    if (e3 != e3)
      return function(r4, e4, t3, n3) {
        for (var a3 = r4.length, o2 = t3 + (n3 ? 1 : -1); n3 ? o2-- : ++o2 < a3; )
          if (e4(r4[o2], o2, r4))
            return o2;
        return -1;
      }(r3, h, t2);
    for (var n2 = t2 - 1, a2 = r3.length; ++n2 < a2; )
      if (r3[n2] === e3)
        return n2;
    return -1;
  }(r2, e2, 0) > -1;
}
function s(r2, e2, t2) {
  for (var n2 = -1, a2 = r2 ? r2.length : 0; ++n2 < a2; )
    if (t2(e2, r2[n2]))
      return true;
  return false;
}
function h(r2) {
  return r2 != r2;
}
function u(r2, e2) {
  return r2.has(e2);
}
function c(r2) {
  var e2 = -1, t2 = Array(r2.size);
  return r2.forEach(function(r3) {
    t2[++e2] = r3;
  }), t2;
}
function O(r2) {
  var e2 = -1, t2 = r2 ? r2.length : 0;
  for (this.clear(); ++e2 < t2; ) {
    var n2 = r2[e2];
    this.set(n2[0], n2[1]);
  }
}
function q(r2) {
  var e2 = -1, t2 = r2 ? r2.length : 0;
  for (this.clear(); ++e2 < t2; ) {
    var n2 = r2[e2];
    this.set(n2[0], n2[1]);
  }
}
function A(r2) {
  var e2 = -1, t2 = r2 ? r2.length : 0;
  for (this.clear(); ++e2 < t2; ) {
    var n2 = r2[e2];
    this.set(n2[0], n2[1]);
  }
}
function z(r2) {
  var e2 = -1, t2 = r2 ? r2.length : 0;
  for (this.__data__ = new A(); ++e2 < t2; )
    this.add(r2[e2]);
}
function F(r2, e2) {
  for (var t2, n2, a2 = r2.length; a2--; )
    if ((t2 = r2[a2][0]) === (n2 = e2) || t2 != t2 && n2 != n2)
      return a2;
  return -1;
}
function E(r2) {
  return !(!I(r2) || (e2 = r2, v && v in e2)) && (function(r3) {
    var e3 = I(r3) ? w.call(r3) : "";
    return e3 == "[object Function]" || e3 == t;
  }(r2) || function(r3) {
    var e3 = false;
    if (r3 != null && typeof r3.toString != "function")
      try {
        e3 = !!(r3 + "");
      } catch {
      }
    return e3;
  }(r2) ? k : n).test(function(r3) {
    if (r3 != null) {
      try {
        return y.call(r3);
      } catch {
      }
      try {
        return r3 + "";
      } catch {
      }
    }
    return "";
  }(r2));
  var e2;
}
function S(r2, e2) {
  var t2, n2, a2 = r2.__data__;
  return ((n2 = typeof (t2 = e2)) == "string" || n2 == "number" || n2 == "symbol" || n2 == "boolean" ? t2 !== "__proto__" : t2 === null) ? a2[typeof e2 == "string" ? "string" : "hash"] : a2.map;
}
function $(r2, e2) {
  var t2 = function(r3, e3) {
    return r3 == null ? void 0 : r3[e3];
  }(r2, e2);
  return E(t2) ? t2 : void 0;
}
function I(r2) {
  var e2 = typeof r2;
  return !!r2 && (e2 == "object" || e2 == "function");
}
function J(r2) {
  var e2 = function() {
    for (var r3 = {}, e3 = Object.keys(T), t3 = e3.length, n3 = 0; n3 < t3; n3++)
      r3[e3[n3]] = { distance: -1, parent: null };
    return r3;
  }(), t2 = [r2];
  for (e2[r2].distance = 0; t2.length; )
    for (var n2 = t2.pop(), a2 = Object.keys(T[n2]), o2 = a2.length, i2 = 0; i2 < o2; i2++) {
      var l2 = a2[i2], s2 = e2[l2];
      s2.distance === -1 && (s2.distance = e2[n2].distance + 1, s2.parent = n2, t2.unshift(l2));
    }
  return e2;
}
function R(r2, e2) {
  return function(t2) {
    return e2(r2(t2));
  };
}
function G(r2, e2) {
  for (var t2 = [e2[r2].parent, r2], n2 = T[e2[r2].parent][r2], a2 = e2[r2].parent; e2[a2].parent; )
    t2.unshift(e2[a2].parent), n2 = R(T[e2[a2].parent][a2], n2), a2 = e2[a2].parent;
  return n2.conversion = t2, n2;
}
function X(r2, e2) {
  if (!(this instanceof X))
    return new X(r2, e2);
  if (e2 && e2 in Q && (e2 = null), e2 && !(e2 in H))
    throw new Error("Unknown model: " + e2);
  var t2, n2;
  if (r2 == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (r2 instanceof X)
    this.model = r2.model, this.color = r2.color.slice(), this.valpha = r2.valpha;
  else if (typeof r2 == "string") {
    var a2 = U.get(r2);
    if (a2 === null)
      throw new Error("Unable to parse color from string: " + r2);
    this.model = a2.model, n2 = H[this.model].channels, this.color = a2.value.slice(0, n2), this.valpha = typeof a2.value[n2] == "number" ? a2.value[n2] : 1;
  } else if (r2.length) {
    this.model = e2 || "rgb", n2 = H[this.model].channels;
    var o2 = K.call(r2, 0, n2);
    this.color = er(o2, n2), this.valpha = typeof r2[n2] == "number" ? r2[n2] : 1;
  } else if (typeof r2 == "number")
    r2 &= 16777215, this.model = "rgb", this.color = [r2 >> 16 & 255, r2 >> 8 & 255, 255 & r2], this.valpha = 1;
  else {
    this.valpha = 1;
    var i2 = Object.keys(r2);
    "alpha" in r2 && (i2.splice(i2.indexOf("alpha"), 1), this.valpha = typeof r2.alpha == "number" ? r2.alpha : 0);
    var l2 = i2.sort().join("");
    if (!(l2 in V))
      throw new Error("Unable to parse color from object: " + JSON.stringify(r2));
    this.model = V[l2];
    var s2 = H[this.model].labels, h2 = [];
    for (t2 = 0; t2 < s2.length; t2++)
      h2.push(r2[s2[t2]]);
    this.color = er(h2);
  }
  if (W[this.model])
    for (n2 = H[this.model].channels, t2 = 0; t2 < n2; t2++) {
      var u2 = W[this.model][t2];
      u2 && (this.color[t2] = u2(this.color[t2]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
function Y(r2, e2, t2) {
  return (r2 = Array.isArray(r2) ? r2 : [r2]).forEach(function(r3) {
    (W[r3] || (W[r3] = []))[e2] = t2;
  }), r2 = r2[0], function(n2) {
    var a2;
    return arguments.length ? (t2 && (n2 = t2(n2)), (a2 = this[r2]()).color[e2] = n2, a2) : (a2 = this[r2]().color[e2], t2 && (a2 = t2(a2)), a2);
  };
}
function Z(r2) {
  return function(e2) {
    return Math.max(0, Math.min(r2, e2));
  };
}
function rr(r2) {
  return Array.isArray(r2) ? r2 : [r2];
}
function er(r2, e2) {
  for (var t2 = 0; t2 < e2; t2++)
    typeof r2[t2] != "number" && (r2[t2] = 0);
  return r2;
}
function index_es_default(r2, e2) {
  e2 === void 0 && (e2 = {});
  var t2 = [], n2 = 4.5, a2 = 3, o2 = 7, i2 = 4.5, l2 = Object.assign({ threshold: 0, compact: false, uniq: true }, e2);
  if (Array.isArray(r2)) {
    var s2 = r2;
    l2.uniq && (s2 = L(r2)), s2 !== void 0 && (t2 = s2.map(function(r3) {
      return tr(r3);
    }));
  } else {
    if (typeof r2 != "object")
      return console.error("Must provide an array or object"), false;
    t2 = Object.keys(r2).map(function(e3) {
      return tr(r2[e3]);
    }), l2.uniq && (t2 = L(t2));
  }
  return t2.map(function(r3) {
    var e3 = l2.compact ? { hex: "", combinations: [] } : { color: r3.color, model: r3.model, valpha: r3.valpha, hex: "", combinations: [] };
    return e3.hex = r3.hex(), e3.combinations = t2.filter(function(e4) {
      return r3 !== e4;
    }).filter(function(e4) {
      return l2.threshold === void 0 || r3.contrast(e4) > l2.threshold;
    }).map(function(e4) {
      var t3 = l2.compact ? { accessibility: { aa: false, aaLarge: false, aaa: false, aaaLarge: false }, hex: "", contrast: 0 } : { accessibility: { aa: false, aaLarge: false, aaa: false, aaaLarge: false }, hex: "", contrast: 0, color: e4.color, model: e4.model, valpha: e4.valpha };
      return (t3 = Object.assign(t3, { hex: e4.hex(), contrast: r3.contrast(e4) })).accessibility = { aa: t3.contrast >= n2, aaLarge: t3.contrast >= a2, aaa: t3.contrast >= o2, aaaLarge: t3.contrast >= i2 }, t3;
    }), e3;
  });
}
var __create2, __defProp2, __getOwnPropDesc2, __getOwnPropNames2, __getProtoOf2, __hasOwnProp2, __commonJS2, __copyProps2, __toESM3, require_freeGlobal, require_root, require_Symbol, require_arrayMap, require_isArray, require_getRawTag, require_objectToString, require_baseGetTag, require_isObjectLike, require_isSymbol, require_baseToString, require_toString, require_baseSlice, require_castSlice, require_hasUnicode, require_asciiToArray, require_unicodeToArray, require_stringToArray, require_createCaseFirst, require_upperFirst, require_capitalize, require_arrayReduce, require_basePropertyOf, require_deburrLetter, require_deburr, require_asciiWords, require_hasUnicodeWord, require_unicodeWords, require_words, require_createCompounder, require_camelCase, r, t, n, a, o, i, f, g, d, p, b, v, y, m, w, k, M, _, x, j, P, L, N, C, U, D, T, B, H, K, Q, V, W, tr, import_camelCase, getNumberOfTextFailures, getNumberOfUIControlFailures, flattenCategorizedTokens, convertRawTokenJSONToArray, getTokensWithTextContrastRequirements, getTokensWithUIControlContrastRequirements, getContrastRatingForTokenPairing, getContrastRatingsOfTokensWithTextContrastRequirements, getContrastRatingsOfTokensWithUIControlContrastRequirements;
var init_index_es3 = __esm({
  "node_modules/@twilio-paste/color-contrast-utils/dist/index.es.js"() {
    init_tokens_raw();
    __create2 = Object.create;
    __defProp2 = Object.defineProperty;
    __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    __getOwnPropNames2 = Object.getOwnPropertyNames;
    __getProtoOf2 = Object.getPrototypeOf;
    __hasOwnProp2 = Object.prototype.hasOwnProperty;
    __commonJS2 = (cb, mod) => function() {
      return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    __copyProps2 = (to2, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to2, key) && key !== except && __defProp2(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to2;
    };
    __toESM3 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target, mod));
    require_freeGlobal = __commonJS2({ "../../node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    } });
    require_root = __commonJS2({ "../../node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal(), freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    } });
    require_Symbol = __commonJS2({ "../../node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root(), Symbol2 = root.Symbol;
      module.exports = Symbol2;
    } });
    require_arrayMap = __commonJS2({ "../../node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        for (var index2 = -1, length = array == null ? 0 : array.length, result = Array(length); ++index2 < length; )
          result[index2] = iteratee(array[index2], index2, array);
        return result;
      }
      module.exports = arrayMap;
    } });
    require_isArray = __commonJS2({ "../../node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    } });
    require_getRawTag = __commonJS2({ "../../node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol(), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, nativeObjectToString = objectProto.toString, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch {
        }
        var result = nativeObjectToString.call(value);
        return unmasked && (isOwn ? value[symToStringTag] = tag : delete value[symToStringTag]), result;
      }
      module.exports = getRawTag;
    } });
    require_objectToString = __commonJS2({ "../../node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype, nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    } });
    require_baseGetTag = __commonJS2({ "../../node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol(), getRawTag = require_getRawTag(), objectToString = require_objectToString(), nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        return value == null ? value === void 0 ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    } });
    require_isObjectLike = __commonJS2({ "../../node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    } });
    require_isSymbol = __commonJS2({ "../../node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag(), isObjectLike = require_isObjectLike(), symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    } });
    require_baseToString = __commonJS2({ "../../node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol(), arrayMap = require_arrayMap(), isArray = require_isArray(), isSymbol = require_isSymbol(), INFINITY = 1 / 0, symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string")
          return value;
        if (isArray(value))
          return arrayMap(value, baseToString) + "";
        if (isSymbol(value))
          return symbolToString ? symbolToString.call(value) : "";
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    } });
    require_toString = __commonJS2({ "../../node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    } });
    require_baseSlice = __commonJS2({ "../../node_modules/lodash/_baseSlice.js"(exports, module) {
      function baseSlice(array, start2, end) {
        var index2 = -1, length = array.length;
        start2 < 0 && (start2 = -start2 > length ? 0 : length + start2), end = end > length ? length : end, end < 0 && (end += length), length = start2 > end ? 0 : end - start2 >>> 0, start2 >>>= 0;
        for (var result = Array(length); ++index2 < length; )
          result[index2] = array[index2 + start2];
        return result;
      }
      module.exports = baseSlice;
    } });
    require_castSlice = __commonJS2({ "../../node_modules/lodash/_castSlice.js"(exports, module) {
      var baseSlice = require_baseSlice();
      function castSlice(array, start2, end) {
        var length = array.length;
        return end = end === void 0 ? length : end, !start2 && end >= length ? array : baseSlice(array, start2, end);
      }
      module.exports = castSlice;
    } });
    require_hasUnicode = __commonJS2({ "../../node_modules/lodash/_hasUnicode.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f", rsZWJ = "\\u200d", reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      module.exports = hasUnicode;
    } });
    require_asciiToArray = __commonJS2({ "../../node_modules/lodash/_asciiToArray.js"(exports, module) {
      function asciiToArray(string) {
        return string.split("");
      }
      module.exports = asciiToArray;
    } });
    require_unicodeToArray = __commonJS2({ "../../node_modules/lodash/_unicodeToArray.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f", rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")", reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      module.exports = unicodeToArray;
    } });
    require_stringToArray = __commonJS2({ "../../node_modules/lodash/_stringToArray.js"(exports, module) {
      var asciiToArray = require_asciiToArray(), hasUnicode = require_hasUnicode(), unicodeToArray = require_unicodeToArray();
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      module.exports = stringToArray;
    } });
    require_createCaseFirst = __commonJS2({ "../../node_modules/lodash/_createCaseFirst.js"(exports, module) {
      var castSlice = require_castSlice(), hasUnicode = require_hasUnicode(), stringToArray = require_stringToArray(), toString = require_toString();
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0, chr = strSymbols ? strSymbols[0] : string.charAt(0), trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      module.exports = createCaseFirst;
    } });
    require_upperFirst = __commonJS2({ "../../node_modules/lodash/upperFirst.js"(exports, module) {
      var createCaseFirst = require_createCaseFirst(), upperFirst = createCaseFirst("toUpperCase");
      module.exports = upperFirst;
    } });
    require_capitalize = __commonJS2({ "../../node_modules/lodash/capitalize.js"(exports, module) {
      var toString = require_toString(), upperFirst = require_upperFirst();
      function capitalize(string) {
        return upperFirst(toString(string).toLowerCase());
      }
      module.exports = capitalize;
    } });
    require_arrayReduce = __commonJS2({ "../../node_modules/lodash/_arrayReduce.js"(exports, module) {
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index2 = -1, length = array == null ? 0 : array.length;
        for (initAccum && length && (accumulator = array[++index2]); ++index2 < length; )
          accumulator = iteratee(accumulator, array[index2], index2, array);
        return accumulator;
      }
      module.exports = arrayReduce;
    } });
    require_basePropertyOf = __commonJS2({ "../../node_modules/lodash/_basePropertyOf.js"(exports, module) {
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? void 0 : object[key];
        };
      }
      module.exports = basePropertyOf;
    } });
    require_deburrLetter = __commonJS2({ "../../node_modules/lodash/_deburrLetter.js"(exports, module) {
      var basePropertyOf = require_basePropertyOf(), deburredLetters = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, deburrLetter = basePropertyOf(deburredLetters);
      module.exports = deburrLetter;
    } });
    require_deburr = __commonJS2({ "../../node_modules/lodash/deburr.js"(exports, module) {
      var deburrLetter = require_deburrLetter(), toString = require_toString(), reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsCombo = "[" + rsComboRange + "]", reComboMark = RegExp(rsCombo, "g");
      function deburr(string) {
        return string = toString(string), string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      module.exports = deburr;
    } });
    require_asciiWords = __commonJS2({ "../../node_modules/lodash/_asciiWords.js"(exports, module) {
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      module.exports = asciiWords;
    } });
    require_hasUnicodeWord = __commonJS2({ "../../node_modules/lodash/_hasUnicodeWord.js"(exports, module) {
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      module.exports = hasUnicodeWord;
    } });
    require_unicodeWords = __commonJS2({ "../../node_modules/lodash/_unicodeWords.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange, rsApos = "['’]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d", rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, reUnicodeWord = RegExp([rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join("|"), "g");
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      module.exports = unicodeWords;
    } });
    require_words = __commonJS2({ "../../node_modules/lodash/words.js"(exports, module) {
      var asciiWords = require_asciiWords(), hasUnicodeWord = require_hasUnicodeWord(), toString = require_toString(), unicodeWords = require_unicodeWords();
      function words(string, pattern, guard) {
        return string = toString(string), pattern = guard ? void 0 : pattern, pattern === void 0 ? hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string) : string.match(pattern) || [];
      }
      module.exports = words;
    } });
    require_createCompounder = __commonJS2({ "../../node_modules/lodash/_createCompounder.js"(exports, module) {
      var arrayReduce = require_arrayReduce(), deburr = require_deburr(), words = require_words(), rsApos = "['’]", reApos = RegExp(rsApos, "g");
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      module.exports = createCompounder;
    } });
    require_camelCase = __commonJS2({ "../../node_modules/lodash/camelCase.js"(exports, module) {
      var capitalize = require_capitalize(), createCompounder = require_createCompounder(), camelCase2 = createCompounder(function(result, word, index2) {
        return word = word.toLowerCase(), result + (index2 ? capitalize(word) : word);
      });
      module.exports = camelCase2;
    } });
    r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    t = "[object GeneratorFunction]";
    n = /^\[object .+?Constructor\]$/;
    a = typeof r == "object" && r && r.Object === Object && r;
    o = typeof self == "object" && self && self.Object === Object && self;
    i = a || o || Function("return this")();
    g = Array.prototype;
    d = Function.prototype;
    p = Object.prototype;
    b = i["__core-js_shared__"];
    v = (f = /[^.]+$/.exec(b && b.keys && b.keys.IE_PROTO || "")) ? "Symbol(src)_1." + f : "";
    y = d.toString;
    m = p.hasOwnProperty;
    w = p.toString;
    k = RegExp("^" + y.call(m).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    M = g.splice;
    _ = $(i, "Map");
    x = $(i, "Set");
    j = $(Object, "create");
    O.prototype.clear = function() {
      this.__data__ = j ? j(null) : {};
    }, O.prototype.delete = function(r2) {
      return this.has(r2) && delete this.__data__[r2];
    }, O.prototype.get = function(r2) {
      var e2 = this.__data__;
      if (j) {
        var t2 = e2[r2];
        return t2 === "__lodash_hash_undefined__" ? void 0 : t2;
      }
      return m.call(e2, r2) ? e2[r2] : void 0;
    }, O.prototype.has = function(r2) {
      var e2 = this.__data__;
      return j ? e2[r2] !== void 0 : m.call(e2, r2);
    }, O.prototype.set = function(r2, e2) {
      return this.__data__[r2] = j && e2 === void 0 ? "__lodash_hash_undefined__" : e2, this;
    }, q.prototype.clear = function() {
      this.__data__ = [];
    }, q.prototype.delete = function(r2) {
      var e2 = this.__data__, t2 = F(e2, r2);
      return !(t2 < 0) && (t2 == e2.length - 1 ? e2.pop() : M.call(e2, t2, 1), true);
    }, q.prototype.get = function(r2) {
      var e2 = this.__data__, t2 = F(e2, r2);
      return t2 < 0 ? void 0 : e2[t2][1];
    }, q.prototype.has = function(r2) {
      return F(this.__data__, r2) > -1;
    }, q.prototype.set = function(r2, e2) {
      var t2 = this.__data__, n2 = F(t2, r2);
      return n2 < 0 ? t2.push([r2, e2]) : t2[n2][1] = e2, this;
    }, A.prototype.clear = function() {
      this.__data__ = { hash: new O(), map: new (_ || q)(), string: new O() };
    }, A.prototype.delete = function(r2) {
      return S(this, r2).delete(r2);
    }, A.prototype.get = function(r2) {
      return S(this, r2).get(r2);
    }, A.prototype.has = function(r2) {
      return S(this, r2).has(r2);
    }, A.prototype.set = function(r2, e2) {
      return S(this, r2).set(r2, e2), this;
    }, z.prototype.add = z.prototype.push = function(r2) {
      return this.__data__.set(r2, "__lodash_hash_undefined__"), this;
    }, z.prototype.has = function(r2) {
      return this.__data__.has(r2);
    };
    P = x && 1 / c(new x([, -0]))[1] == 1 / 0 ? function(r2) {
      return new x(r2);
    } : function() {
    };
    L = function(r2) {
      return r2 && r2.length ? function(r3, e2, t2) {
        var n2 = -1, a2 = l, o2 = r3.length, i2 = true, h2 = [], f2 = h2;
        if (t2)
          i2 = false, a2 = s;
        else if (o2 >= 200) {
          var g2 = e2 ? null : P(r3);
          if (g2)
            return c(g2);
          i2 = false, a2 = u, f2 = new z();
        } else
          f2 = e2 ? [] : h2;
        r:
          for (; ++n2 < o2; ) {
            var d2 = r3[n2], p2 = e2 ? e2(d2) : d2;
            if (d2 = t2 || d2 !== 0 ? d2 : 0, i2 && p2 == p2) {
              for (var b2 = f2.length; b2--; )
                if (f2[b2] === p2)
                  continue r;
              e2 && f2.push(p2), h2.push(d2);
            } else
              a2(f2, p2, t2) || (f2 !== h2 && f2.push(p2), h2.push(d2));
          }
        return h2;
      }(r2) : [];
    };
    N = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
    C = e(function(r2) {
      var e2 = Array.prototype.concat, t2 = Array.prototype.slice, n2 = r2.exports = function(r3) {
        for (var n3, a2 = [], o2 = 0, i2 = r3.length; o2 < i2; o2++) {
          var l2 = r3[o2];
          (n3 = l2) && typeof n3 != "string" && (n3 instanceof Array || Array.isArray(n3) || n3.length >= 0 && (n3.splice instanceof Function || Object.getOwnPropertyDescriptor(n3, n3.length - 1) && n3.constructor.name !== "String")) ? a2 = e2.call(a2, t2.call(l2)) : a2.push(l2);
        }
        return a2;
      };
      n2.wrap = function(r3) {
        return function() {
          return r3(n2(arguments));
        };
      };
    });
    U = e(function(r2) {
      var e2 = {};
      for (var t2 in N)
        N.hasOwnProperty(t2) && (e2[N[t2]] = t2);
      var n2 = r2.exports = { to: {}, get: {} };
      function a2(r3, e3, t3) {
        return Math.min(Math.max(e3, r3), t3);
      }
      function o2(r3) {
        var e3 = r3.toString(16).toUpperCase();
        return e3.length < 2 ? "0" + e3 : e3;
      }
      n2.get = function(r3) {
        var e3, t3;
        switch (r3.substring(0, 3).toLowerCase()) {
          case "hsl":
            e3 = n2.get.hsl(r3), t3 = "hsl";
            break;
          case "hwb":
            e3 = n2.get.hwb(r3), t3 = "hwb";
            break;
          default:
            e3 = n2.get.rgb(r3), t3 = "rgb";
        }
        return e3 ? { model: t3, value: e3 } : null;
      }, n2.get.rgb = function(r3) {
        if (!r3)
          return null;
        var e3, t3, n3, o3 = [0, 0, 0, 1];
        if (e3 = r3.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
          for (n3 = e3[2], e3 = e3[1], t3 = 0; t3 < 3; t3++) {
            var i2 = 2 * t3;
            o3[t3] = parseInt(e3.slice(i2, i2 + 2), 16);
          }
          n3 && (o3[3] = parseInt(n3, 16) / 255);
        } else if (e3 = r3.match(/^#([a-f0-9]{3,4})$/i)) {
          for (n3 = (e3 = e3[1])[3], t3 = 0; t3 < 3; t3++)
            o3[t3] = parseInt(e3[t3] + e3[t3], 16);
          n3 && (o3[3] = parseInt(n3 + n3, 16) / 255);
        } else if (e3 = r3.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
          for (t3 = 0; t3 < 3; t3++)
            o3[t3] = parseInt(e3[t3 + 1], 0);
          e3[4] && (o3[3] = parseFloat(e3[4]));
        } else {
          if (!(e3 = r3.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))
            return (e3 = r3.match(/(\D+)/)) ? e3[1] === "transparent" ? [0, 0, 0, 0] : (o3 = N[e3[1]]) ? (o3[3] = 1, o3) : null : null;
          for (t3 = 0; t3 < 3; t3++)
            o3[t3] = Math.round(2.55 * parseFloat(e3[t3 + 1]));
          e3[4] && (o3[3] = parseFloat(e3[4]));
        }
        for (t3 = 0; t3 < 3; t3++)
          o3[t3] = a2(o3[t3], 0, 255);
        return o3[3] = a2(o3[3], 0, 1), o3;
      }, n2.get.hsl = function(r3) {
        if (!r3)
          return null;
        var e3 = r3.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
        if (e3) {
          var t3 = parseFloat(e3[4]);
          return [(parseFloat(e3[1]) + 360) % 360, a2(parseFloat(e3[2]), 0, 100), a2(parseFloat(e3[3]), 0, 100), a2(isNaN(t3) ? 1 : t3, 0, 1)];
        }
        return null;
      }, n2.get.hwb = function(r3) {
        if (!r3)
          return null;
        var e3 = r3.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
        if (e3) {
          var t3 = parseFloat(e3[4]);
          return [(parseFloat(e3[1]) % 360 + 360) % 360, a2(parseFloat(e3[2]), 0, 100), a2(parseFloat(e3[3]), 0, 100), a2(isNaN(t3) ? 1 : t3, 0, 1)];
        }
        return null;
      }, n2.to.hex = function() {
        var r3 = C(arguments);
        return "#" + o2(r3[0]) + o2(r3[1]) + o2(r3[2]) + (r3[3] < 1 ? o2(Math.round(255 * r3[3])) : "");
      }, n2.to.rgb = function() {
        var r3 = C(arguments);
        return r3.length < 4 || r3[3] === 1 ? "rgb(" + Math.round(r3[0]) + ", " + Math.round(r3[1]) + ", " + Math.round(r3[2]) + ")" : "rgba(" + Math.round(r3[0]) + ", " + Math.round(r3[1]) + ", " + Math.round(r3[2]) + ", " + r3[3] + ")";
      }, n2.to.rgb.percent = function() {
        var r3 = C(arguments), e3 = Math.round(r3[0] / 255 * 100), t3 = Math.round(r3[1] / 255 * 100), n3 = Math.round(r3[2] / 255 * 100);
        return r3.length < 4 || r3[3] === 1 ? "rgb(" + e3 + "%, " + t3 + "%, " + n3 + "%)" : "rgba(" + e3 + "%, " + t3 + "%, " + n3 + "%, " + r3[3] + ")";
      }, n2.to.hsl = function() {
        var r3 = C(arguments);
        return r3.length < 4 || r3[3] === 1 ? "hsl(" + r3[0] + ", " + r3[1] + "%, " + r3[2] + "%)" : "hsla(" + r3[0] + ", " + r3[1] + "%, " + r3[2] + "%, " + r3[3] + ")";
      }, n2.to.hwb = function() {
        var r3 = C(arguments), e3 = "";
        return r3.length >= 4 && r3[3] !== 1 && (e3 = ", " + r3[3]), "hwb(" + r3[0] + ", " + r3[1] + "%, " + r3[2] + "%" + e3 + ")";
      }, n2.to.keyword = function(r3) {
        return e2[r3.slice(0, 3)];
      };
    });
    U.to, U.get;
    D = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
    T = e(function(r2) {
      var e2 = {};
      for (var t2 in D)
        D.hasOwnProperty(t2) && (e2[D[t2]] = t2);
      var n2 = r2.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
      for (var a2 in n2)
        if (n2.hasOwnProperty(a2)) {
          if (!("channels" in n2[a2]))
            throw new Error("missing channels property: " + a2);
          if (!("labels" in n2[a2]))
            throw new Error("missing channel labels property: " + a2);
          if (n2[a2].labels.length !== n2[a2].channels)
            throw new Error("channel and label counts mismatch: " + a2);
          var o2 = n2[a2].channels, i2 = n2[a2].labels;
          delete n2[a2].channels, delete n2[a2].labels, Object.defineProperty(n2[a2], "channels", { value: o2 }), Object.defineProperty(n2[a2], "labels", { value: i2 });
        }
      n2.rgb.hsl = function(r3) {
        var e3, t3, n3 = r3[0] / 255, a3 = r3[1] / 255, o3 = r3[2] / 255, i3 = Math.min(n3, a3, o3), l2 = Math.max(n3, a3, o3), s2 = l2 - i3;
        return l2 === i3 ? e3 = 0 : n3 === l2 ? e3 = (a3 - o3) / s2 : a3 === l2 ? e3 = 2 + (o3 - n3) / s2 : o3 === l2 && (e3 = 4 + (n3 - a3) / s2), (e3 = Math.min(60 * e3, 360)) < 0 && (e3 += 360), t3 = (i3 + l2) / 2, [e3, 100 * (l2 === i3 ? 0 : t3 <= 0.5 ? s2 / (l2 + i3) : s2 / (2 - l2 - i3)), 100 * t3];
      }, n2.rgb.hsv = function(r3) {
        var e3, t3, n3, a3, o3, i3 = r3[0] / 255, l2 = r3[1] / 255, s2 = r3[2] / 255, h2 = Math.max(i3, l2, s2), u2 = h2 - Math.min(i3, l2, s2), c22 = function(r4) {
          return (h2 - r4) / 6 / u2 + 0.5;
        };
        return u2 === 0 ? a3 = o3 = 0 : (o3 = u2 / h2, e3 = c22(i3), t3 = c22(l2), n3 = c22(s2), i3 === h2 ? a3 = n3 - t3 : l2 === h2 ? a3 = 1 / 3 + e3 - n3 : s2 === h2 && (a3 = 2 / 3 + t3 - e3), a3 < 0 ? a3 += 1 : a3 > 1 && (a3 -= 1)), [360 * a3, 100 * o3, 100 * h2];
      }, n2.rgb.hwb = function(r3) {
        var e3 = r3[0], t3 = r3[1], a3 = r3[2];
        return [n2.rgb.hsl(r3)[0], 100 * (1 / 255 * Math.min(e3, Math.min(t3, a3))), 100 * (a3 = 1 - 1 / 255 * Math.max(e3, Math.max(t3, a3)))];
      }, n2.rgb.cmyk = function(r3) {
        var e3, t3 = r3[0] / 255, n3 = r3[1] / 255, a3 = r3[2] / 255;
        return [100 * ((1 - t3 - (e3 = Math.min(1 - t3, 1 - n3, 1 - a3))) / (1 - e3) || 0), 100 * ((1 - n3 - e3) / (1 - e3) || 0), 100 * ((1 - a3 - e3) / (1 - e3) || 0), 100 * e3];
      }, n2.rgb.keyword = function(r3) {
        var t3 = e2[r3];
        if (t3)
          return t3;
        var n3, a3, o3, i3 = 1 / 0;
        for (var l2 in D)
          if (D.hasOwnProperty(l2)) {
            var s2 = D[l2], h2 = (a3 = r3, o3 = s2, Math.pow(a3[0] - o3[0], 2) + Math.pow(a3[1] - o3[1], 2) + Math.pow(a3[2] - o3[2], 2));
            h2 < i3 && (i3 = h2, n3 = l2);
          }
        return n3;
      }, n2.keyword.rgb = function(r3) {
        return D[r3];
      }, n2.rgb.xyz = function(r3) {
        var e3 = r3[0] / 255, t3 = r3[1] / 255, n3 = r3[2] / 255;
        return [100 * (0.4124 * (e3 = e3 > 0.04045 ? Math.pow((e3 + 0.055) / 1.055, 2.4) : e3 / 12.92) + 0.3576 * (t3 = t3 > 0.04045 ? Math.pow((t3 + 0.055) / 1.055, 2.4) : t3 / 12.92) + 0.1805 * (n3 = n3 > 0.04045 ? Math.pow((n3 + 0.055) / 1.055, 2.4) : n3 / 12.92)), 100 * (0.2126 * e3 + 0.7152 * t3 + 0.0722 * n3), 100 * (0.0193 * e3 + 0.1192 * t3 + 0.9505 * n3)];
      }, n2.rgb.lab = function(r3) {
        var e3 = n2.rgb.xyz(r3), t3 = e3[0], a3 = e3[1], o3 = e3[2];
        return a3 /= 100, o3 /= 108.883, t3 = (t3 /= 95.047) > 8856e-6 ? Math.pow(t3, 1 / 3) : 7.787 * t3 + 16 / 116, [116 * (a3 = a3 > 8856e-6 ? Math.pow(a3, 1 / 3) : 7.787 * a3 + 16 / 116) - 16, 500 * (t3 - a3), 200 * (a3 - (o3 = o3 > 8856e-6 ? Math.pow(o3, 1 / 3) : 7.787 * o3 + 16 / 116))];
      }, n2.hsl.rgb = function(r3) {
        var e3, t3, n3, a3, o3, i3 = r3[0] / 360, l2 = r3[1] / 100, s2 = r3[2] / 100;
        if (l2 === 0)
          return [o3 = 255 * s2, o3, o3];
        e3 = 2 * s2 - (t3 = s2 < 0.5 ? s2 * (1 + l2) : s2 + l2 - s2 * l2), a3 = [0, 0, 0];
        for (var h2 = 0; h2 < 3; h2++)
          (n3 = i3 + 1 / 3 * -(h2 - 1)) < 0 && n3++, n3 > 1 && n3--, o3 = 6 * n3 < 1 ? e3 + 6 * (t3 - e3) * n3 : 2 * n3 < 1 ? t3 : 3 * n3 < 2 ? e3 + (t3 - e3) * (2 / 3 - n3) * 6 : e3, a3[h2] = 255 * o3;
        return a3;
      }, n2.hsl.hsv = function(r3) {
        var e3 = r3[0], t3 = r3[1] / 100, n3 = r3[2] / 100, a3 = t3, o3 = Math.max(n3, 0.01);
        return t3 *= (n3 *= 2) <= 1 ? n3 : 2 - n3, a3 *= o3 <= 1 ? o3 : 2 - o3, [e3, 100 * (n3 === 0 ? 2 * a3 / (o3 + a3) : 2 * t3 / (n3 + t3)), 100 * ((n3 + t3) / 2)];
      }, n2.hsv.rgb = function(r3) {
        var e3 = r3[0] / 60, t3 = r3[1] / 100, n3 = r3[2] / 100, a3 = Math.floor(e3) % 6, o3 = e3 - Math.floor(e3), i3 = 255 * n3 * (1 - t3), l2 = 255 * n3 * (1 - t3 * o3), s2 = 255 * n3 * (1 - t3 * (1 - o3));
        switch (n3 *= 255, a3) {
          case 0:
            return [n3, s2, i3];
          case 1:
            return [l2, n3, i3];
          case 2:
            return [i3, n3, s2];
          case 3:
            return [i3, l2, n3];
          case 4:
            return [s2, i3, n3];
          case 5:
            return [n3, i3, l2];
        }
      }, n2.hsv.hsl = function(r3) {
        var e3, t3, n3, a3 = r3[0], o3 = r3[1] / 100, i3 = r3[2] / 100, l2 = Math.max(i3, 0.01);
        return n3 = (2 - o3) * i3, t3 = o3 * l2, [a3, 100 * (t3 = (t3 /= (e3 = (2 - o3) * l2) <= 1 ? e3 : 2 - e3) || 0), 100 * (n3 /= 2)];
      }, n2.hwb.rgb = function(r3) {
        var e3, t3, n3, a3, o3, i3, l2, s2 = r3[0] / 360, h2 = r3[1] / 100, u2 = r3[2] / 100, c22 = h2 + u2;
        switch (c22 > 1 && (h2 /= c22, u2 /= c22), n3 = 6 * s2 - (e3 = Math.floor(6 * s2)), (1 & e3) != 0 && (n3 = 1 - n3), a3 = h2 + n3 * ((t3 = 1 - u2) - h2), e3) {
          default:
          case 6:
          case 0:
            o3 = t3, i3 = a3, l2 = h2;
            break;
          case 1:
            o3 = a3, i3 = t3, l2 = h2;
            break;
          case 2:
            o3 = h2, i3 = t3, l2 = a3;
            break;
          case 3:
            o3 = h2, i3 = a3, l2 = t3;
            break;
          case 4:
            o3 = a3, i3 = h2, l2 = t3;
            break;
          case 5:
            o3 = t3, i3 = h2, l2 = a3;
        }
        return [255 * o3, 255 * i3, 255 * l2];
      }, n2.cmyk.rgb = function(r3) {
        var e3 = r3[0] / 100, t3 = r3[1] / 100, n3 = r3[2] / 100, a3 = r3[3] / 100;
        return [255 * (1 - Math.min(1, e3 * (1 - a3) + a3)), 255 * (1 - Math.min(1, t3 * (1 - a3) + a3)), 255 * (1 - Math.min(1, n3 * (1 - a3) + a3))];
      }, n2.xyz.rgb = function(r3) {
        var e3, t3, n3, a3 = r3[0] / 100, o3 = r3[1] / 100, i3 = r3[2] / 100;
        return t3 = -0.9689 * a3 + 1.8758 * o3 + 0.0415 * i3, n3 = 0.0557 * a3 + -0.204 * o3 + 1.057 * i3, e3 = (e3 = 3.2406 * a3 + -1.5372 * o3 + -0.4986 * i3) > 31308e-7 ? 1.055 * Math.pow(e3, 1 / 2.4) - 0.055 : 12.92 * e3, t3 = t3 > 31308e-7 ? 1.055 * Math.pow(t3, 1 / 2.4) - 0.055 : 12.92 * t3, n3 = n3 > 31308e-7 ? 1.055 * Math.pow(n3, 1 / 2.4) - 0.055 : 12.92 * n3, [255 * (e3 = Math.min(Math.max(0, e3), 1)), 255 * (t3 = Math.min(Math.max(0, t3), 1)), 255 * (n3 = Math.min(Math.max(0, n3), 1))];
      }, n2.xyz.lab = function(r3) {
        var e3 = r3[0], t3 = r3[1], n3 = r3[2];
        return t3 /= 100, n3 /= 108.883, e3 = (e3 /= 95.047) > 8856e-6 ? Math.pow(e3, 1 / 3) : 7.787 * e3 + 16 / 116, [116 * (t3 = t3 > 8856e-6 ? Math.pow(t3, 1 / 3) : 7.787 * t3 + 16 / 116) - 16, 500 * (e3 - t3), 200 * (t3 - (n3 = n3 > 8856e-6 ? Math.pow(n3, 1 / 3) : 7.787 * n3 + 16 / 116))];
      }, n2.lab.xyz = function(r3) {
        var e3, t3, n3, a3 = r3[0];
        e3 = r3[1] / 500 + (t3 = (a3 + 16) / 116), n3 = t3 - r3[2] / 200;
        var o3 = Math.pow(t3, 3), i3 = Math.pow(e3, 3), l2 = Math.pow(n3, 3);
        return t3 = o3 > 8856e-6 ? o3 : (t3 - 16 / 116) / 7.787, e3 = i3 > 8856e-6 ? i3 : (e3 - 16 / 116) / 7.787, n3 = l2 > 8856e-6 ? l2 : (n3 - 16 / 116) / 7.787, [e3 *= 95.047, t3 *= 100, n3 *= 108.883];
      }, n2.lab.lch = function(r3) {
        var e3, t3 = r3[0], n3 = r3[1], a3 = r3[2];
        return (e3 = 360 * Math.atan2(a3, n3) / 2 / Math.PI) < 0 && (e3 += 360), [t3, Math.sqrt(n3 * n3 + a3 * a3), e3];
      }, n2.lch.lab = function(r3) {
        var e3, t3 = r3[0], n3 = r3[1];
        return e3 = r3[2] / 360 * 2 * Math.PI, [t3, n3 * Math.cos(e3), n3 * Math.sin(e3)];
      }, n2.rgb.ansi16 = function(r3) {
        var e3 = r3[0], t3 = r3[1], a3 = r3[2], o3 = 1 in arguments ? arguments[1] : n2.rgb.hsv(r3)[2];
        if ((o3 = Math.round(o3 / 50)) === 0)
          return 30;
        var i3 = 30 + (Math.round(a3 / 255) << 2 | Math.round(t3 / 255) << 1 | Math.round(e3 / 255));
        return o3 === 2 && (i3 += 60), i3;
      }, n2.hsv.ansi16 = function(r3) {
        return n2.rgb.ansi16(n2.hsv.rgb(r3), r3[2]);
      }, n2.rgb.ansi256 = function(r3) {
        var e3 = r3[0], t3 = r3[1], n3 = r3[2];
        return e3 === t3 && t3 === n3 ? e3 < 8 ? 16 : e3 > 248 ? 231 : Math.round((e3 - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e3 / 255 * 5) + 6 * Math.round(t3 / 255 * 5) + Math.round(n3 / 255 * 5);
      }, n2.ansi16.rgb = function(r3) {
        var e3 = r3 % 10;
        if (e3 === 0 || e3 === 7)
          return r3 > 50 && (e3 += 3.5), [e3 = e3 / 10.5 * 255, e3, e3];
        var t3 = 0.5 * (1 + ~~(r3 > 50));
        return [(1 & e3) * t3 * 255, (e3 >> 1 & 1) * t3 * 255, (e3 >> 2 & 1) * t3 * 255];
      }, n2.ansi256.rgb = function(r3) {
        if (r3 >= 232) {
          var e3 = 10 * (r3 - 232) + 8;
          return [e3, e3, e3];
        }
        var t3;
        return r3 -= 16, [Math.floor(r3 / 36) / 5 * 255, Math.floor((t3 = r3 % 36) / 6) / 5 * 255, t3 % 6 / 5 * 255];
      }, n2.rgb.hex = function(r3) {
        var e3 = (((255 & Math.round(r3[0])) << 16) + ((255 & Math.round(r3[1])) << 8) + (255 & Math.round(r3[2]))).toString(16).toUpperCase();
        return "000000".substring(e3.length) + e3;
      }, n2.hex.rgb = function(r3) {
        var e3 = r3.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!e3)
          return [0, 0, 0];
        var t3 = e3[0];
        e3[0].length === 3 && (t3 = t3.split("").map(function(r4) {
          return r4 + r4;
        }).join(""));
        var n3 = parseInt(t3, 16);
        return [n3 >> 16 & 255, n3 >> 8 & 255, 255 & n3];
      }, n2.rgb.hcg = function(r3) {
        var e3, t3 = r3[0] / 255, n3 = r3[1] / 255, a3 = r3[2] / 255, o3 = Math.max(Math.max(t3, n3), a3), i3 = Math.min(Math.min(t3, n3), a3), l2 = o3 - i3;
        return e3 = l2 <= 0 ? 0 : o3 === t3 ? (n3 - a3) / l2 % 6 : o3 === n3 ? 2 + (a3 - t3) / l2 : 4 + (t3 - n3) / l2 + 4, e3 /= 6, [360 * (e3 %= 1), 100 * l2, 100 * (l2 < 1 ? i3 / (1 - l2) : 0)];
      }, n2.hsl.hcg = function(r3) {
        var e3 = r3[1] / 100, t3 = r3[2] / 100, n3 = 1, a3 = 0;
        return (n3 = t3 < 0.5 ? 2 * e3 * t3 : 2 * e3 * (1 - t3)) < 1 && (a3 = (t3 - 0.5 * n3) / (1 - n3)), [r3[0], 100 * n3, 100 * a3];
      }, n2.hsv.hcg = function(r3) {
        var e3 = r3[1] / 100, t3 = r3[2] / 100, n3 = e3 * t3, a3 = 0;
        return n3 < 1 && (a3 = (t3 - n3) / (1 - n3)), [r3[0], 100 * n3, 100 * a3];
      }, n2.hcg.rgb = function(r3) {
        var e3 = r3[0] / 360, t3 = r3[1] / 100, n3 = r3[2] / 100;
        if (t3 === 0)
          return [255 * n3, 255 * n3, 255 * n3];
        var a3, o3 = [0, 0, 0], i3 = e3 % 1 * 6, l2 = i3 % 1, s2 = 1 - l2;
        switch (Math.floor(i3)) {
          case 0:
            o3[0] = 1, o3[1] = l2, o3[2] = 0;
            break;
          case 1:
            o3[0] = s2, o3[1] = 1, o3[2] = 0;
            break;
          case 2:
            o3[0] = 0, o3[1] = 1, o3[2] = l2;
            break;
          case 3:
            o3[0] = 0, o3[1] = s2, o3[2] = 1;
            break;
          case 4:
            o3[0] = l2, o3[1] = 0, o3[2] = 1;
            break;
          default:
            o3[0] = 1, o3[1] = 0, o3[2] = s2;
        }
        return a3 = (1 - t3) * n3, [255 * (t3 * o3[0] + a3), 255 * (t3 * o3[1] + a3), 255 * (t3 * o3[2] + a3)];
      }, n2.hcg.hsv = function(r3) {
        var e3 = r3[1] / 100, t3 = e3 + r3[2] / 100 * (1 - e3), n3 = 0;
        return t3 > 0 && (n3 = e3 / t3), [r3[0], 100 * n3, 100 * t3];
      }, n2.hcg.hsl = function(r3) {
        var e3 = r3[1] / 100, t3 = r3[2] / 100 * (1 - e3) + 0.5 * e3, n3 = 0;
        return t3 > 0 && t3 < 0.5 ? n3 = e3 / (2 * t3) : t3 >= 0.5 && t3 < 1 && (n3 = e3 / (2 * (1 - t3))), [r3[0], 100 * n3, 100 * t3];
      }, n2.hcg.hwb = function(r3) {
        var e3 = r3[1] / 100, t3 = e3 + r3[2] / 100 * (1 - e3);
        return [r3[0], 100 * (t3 - e3), 100 * (1 - t3)];
      }, n2.hwb.hcg = function(r3) {
        var e3 = r3[1] / 100, t3 = 1 - r3[2] / 100, n3 = t3 - e3, a3 = 0;
        return n3 < 1 && (a3 = (t3 - n3) / (1 - n3)), [r3[0], 100 * n3, 100 * a3];
      }, n2.apple.rgb = function(r3) {
        return [r3[0] / 65535 * 255, r3[1] / 65535 * 255, r3[2] / 65535 * 255];
      }, n2.rgb.apple = function(r3) {
        return [r3[0] / 255 * 65535, r3[1] / 255 * 65535, r3[2] / 255 * 65535];
      }, n2.gray.rgb = function(r3) {
        return [r3[0] / 100 * 255, r3[0] / 100 * 255, r3[0] / 100 * 255];
      }, n2.gray.hsl = n2.gray.hsv = function(r3) {
        return [0, 0, r3[0]];
      }, n2.gray.hwb = function(r3) {
        return [0, 100, r3[0]];
      }, n2.gray.cmyk = function(r3) {
        return [0, 0, 0, r3[0]];
      }, n2.gray.lab = function(r3) {
        return [r3[0], 0, 0];
      }, n2.gray.hex = function(r3) {
        var e3 = 255 & Math.round(r3[0] / 100 * 255), t3 = ((e3 << 16) + (e3 << 8) + e3).toString(16).toUpperCase();
        return "000000".substring(t3.length) + t3;
      }, n2.rgb.gray = function(r3) {
        return [(r3[0] + r3[1] + r3[2]) / 3 / 255 * 100];
      };
    });
    T.rgb, T.hsl, T.hsv, T.hwb, T.cmyk, T.xyz, T.lab, T.lch, T.hex, T.keyword, T.ansi16, T.ansi256, T.hcg, T.apple, T.gray;
    B = {};
    Object.keys(T).forEach(function(r2) {
      B[r2] = {}, Object.defineProperty(B[r2], "channels", { value: T[r2].channels }), Object.defineProperty(B[r2], "labels", { value: T[r2].labels });
      var e2 = function(r3) {
        for (var e3 = J(r3), t2 = {}, n2 = Object.keys(e3), a2 = n2.length, o2 = 0; o2 < a2; o2++) {
          var i2 = n2[o2];
          e3[i2].parent !== null && (t2[i2] = G(i2, e3));
        }
        return t2;
      }(r2);
      Object.keys(e2).forEach(function(t2) {
        var n2 = e2[t2];
        B[r2][t2] = function(r3) {
          var e3 = function(e4) {
            if (e4 == null)
              return e4;
            arguments.length > 1 && (e4 = Array.prototype.slice.call(arguments));
            var t3 = r3(e4);
            if (typeof t3 == "object")
              for (var n3 = t3.length, a2 = 0; a2 < n3; a2++)
                t3[a2] = Math.round(t3[a2]);
            return t3;
          };
          return "conversion" in r3 && (e3.conversion = r3.conversion), e3;
        }(n2), B[r2][t2].raw = function(r3) {
          var e3 = function(e4) {
            return e4 == null ? e4 : (arguments.length > 1 && (e4 = Array.prototype.slice.call(arguments)), r3(e4));
          };
          return "conversion" in r3 && (e3.conversion = r3.conversion), e3;
        }(n2);
      });
    });
    H = B;
    K = [].slice;
    Q = ["keyword", "gray", "hex"];
    V = {};
    Object.keys(H).forEach(function(r2) {
      V[K.call(H[r2].labels).sort().join("")] = r2;
    });
    W = {};
    X.prototype = { toString: function() {
      return this.string();
    }, toJSON: function() {
      return this[this.model]();
    }, string: function(r2) {
      var e2 = this.model in U.to ? this : this.rgb(), t2 = (e2 = e2.round(typeof r2 == "number" ? r2 : 1)).valpha === 1 ? e2.color : e2.color.concat(this.valpha);
      return U.to[e2.model](t2);
    }, percentString: function(r2) {
      var e2 = this.rgb().round(typeof r2 == "number" ? r2 : 1), t2 = e2.valpha === 1 ? e2.color : e2.color.concat(this.valpha);
      return U.to.rgb.percent(t2);
    }, array: function() {
      return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
    }, object: function() {
      for (var r2 = {}, e2 = H[this.model].channels, t2 = H[this.model].labels, n2 = 0; n2 < e2; n2++)
        r2[t2[n2]] = this.color[n2];
      return this.valpha !== 1 && (r2.alpha = this.valpha), r2;
    }, unitArray: function() {
      var r2 = this.rgb().color;
      return r2[0] /= 255, r2[1] /= 255, r2[2] /= 255, this.valpha !== 1 && r2.push(this.valpha), r2;
    }, unitObject: function() {
      var r2 = this.rgb().object();
      return r2.r /= 255, r2.g /= 255, r2.b /= 255, this.valpha !== 1 && (r2.alpha = this.valpha), r2;
    }, round: function(r2) {
      return r2 = Math.max(r2 || 0, 0), new X(this.color.map(function(r3) {
        return function(e2) {
          return function(r4, e3) {
            return Number(r4.toFixed(e3));
          }(e2, r3);
        };
      }(r2)).concat(this.valpha), this.model);
    }, alpha: function(r2) {
      return arguments.length ? new X(this.color.concat(Math.max(0, Math.min(1, r2))), this.model) : this.valpha;
    }, red: Y("rgb", 0, Z(255)), green: Y("rgb", 1, Z(255)), blue: Y("rgb", 2, Z(255)), hue: Y(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(r2) {
      return (r2 % 360 + 360) % 360;
    }), saturationl: Y("hsl", 1, Z(100)), lightness: Y("hsl", 2, Z(100)), saturationv: Y("hsv", 1, Z(100)), value: Y("hsv", 2, Z(100)), chroma: Y("hcg", 1, Z(100)), gray: Y("hcg", 2, Z(100)), white: Y("hwb", 1, Z(100)), wblack: Y("hwb", 2, Z(100)), cyan: Y("cmyk", 0, Z(100)), magenta: Y("cmyk", 1, Z(100)), yellow: Y("cmyk", 2, Z(100)), black: Y("cmyk", 3, Z(100)), x: Y("xyz", 0, Z(100)), y: Y("xyz", 1, Z(100)), z: Y("xyz", 2, Z(100)), l: Y("lab", 0, Z(100)), a: Y("lab", 1), b: Y("lab", 2), keyword: function(r2) {
      return arguments.length ? new X(r2) : H[this.model].keyword(this.color);
    }, hex: function(r2) {
      return arguments.length ? new X(r2) : U.to.hex(this.rgb().round().color);
    }, rgbNumber: function() {
      var r2 = this.rgb().color;
      return (255 & r2[0]) << 16 | (255 & r2[1]) << 8 | 255 & r2[2];
    }, luminosity: function() {
      for (var r2 = this.rgb().color, e2 = [], t2 = 0; t2 < r2.length; t2++) {
        var n2 = r2[t2] / 255;
        e2[t2] = n2 <= 0.03928 ? n2 / 12.92 : Math.pow((n2 + 0.055) / 1.055, 2.4);
      }
      return 0.2126 * e2[0] + 0.7152 * e2[1] + 0.0722 * e2[2];
    }, contrast: function(r2) {
      var e2 = this.luminosity(), t2 = r2.luminosity();
      return e2 > t2 ? (e2 + 0.05) / (t2 + 0.05) : (t2 + 0.05) / (e2 + 0.05);
    }, level: function(r2) {
      var e2 = this.contrast(r2);
      return e2 >= 7.1 ? "AAA" : e2 >= 4.5 ? "AA" : "";
    }, isDark: function() {
      var r2 = this.rgb().color;
      return (299 * r2[0] + 587 * r2[1] + 114 * r2[2]) / 1e3 < 128;
    }, isLight: function() {
      return !this.isDark();
    }, negate: function() {
      for (var r2 = this.rgb(), e2 = 0; e2 < 3; e2++)
        r2.color[e2] = 255 - r2.color[e2];
      return r2;
    }, lighten: function(r2) {
      var e2 = this.hsl();
      return e2.color[2] += e2.color[2] * r2, e2;
    }, darken: function(r2) {
      var e2 = this.hsl();
      return e2.color[2] -= e2.color[2] * r2, e2;
    }, saturate: function(r2) {
      var e2 = this.hsl();
      return e2.color[1] += e2.color[1] * r2, e2;
    }, desaturate: function(r2) {
      var e2 = this.hsl();
      return e2.color[1] -= e2.color[1] * r2, e2;
    }, whiten: function(r2) {
      var e2 = this.hwb();
      return e2.color[1] += e2.color[1] * r2, e2;
    }, blacken: function(r2) {
      var e2 = this.hwb();
      return e2.color[2] += e2.color[2] * r2, e2;
    }, grayscale: function() {
      var r2 = this.rgb().color, e2 = 0.3 * r2[0] + 0.59 * r2[1] + 0.11 * r2[2];
      return X.rgb(e2, e2, e2);
    }, fade: function(r2) {
      return this.alpha(this.valpha - this.valpha * r2);
    }, opaquer: function(r2) {
      return this.alpha(this.valpha + this.valpha * r2);
    }, rotate: function(r2) {
      var e2 = this.hsl(), t2 = e2.color[0];
      return t2 = (t2 = (t2 + r2) % 360) < 0 ? 360 + t2 : t2, e2.color[0] = t2, e2;
    }, mix: function(r2, e2) {
      if (!r2 || !r2.rgb)
        throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof r2);
      var t2 = r2.rgb(), n2 = this.rgb(), a2 = e2 === void 0 ? 0.5 : e2, o2 = 2 * a2 - 1, i2 = t2.alpha() - n2.alpha(), l2 = ((o2 * i2 == -1 ? o2 : (o2 + i2) / (1 + o2 * i2)) + 1) / 2, s2 = 1 - l2;
      return X.rgb(l2 * t2.red() + s2 * n2.red(), l2 * t2.green() + s2 * n2.green(), l2 * t2.blue() + s2 * n2.blue(), t2.alpha() * a2 + n2.alpha() * (1 - a2));
    } }, Object.keys(H).forEach(function(r2) {
      if (Q.indexOf(r2) === -1) {
        var e2 = H[r2].channels;
        X.prototype[r2] = function() {
          if (this.model === r2)
            return new X(this);
          if (arguments.length)
            return new X(arguments, r2);
          var t2 = typeof arguments[e2] == "number" ? e2 : this.valpha;
          return new X(rr(H[this.model][r2].raw(this.color)).concat(t2), r2);
        }, X[r2] = function(t2) {
          return typeof t2 == "number" && (t2 = er(K.call(arguments), e2)), new X(t2, r2);
        };
      }
    });
    tr = X;
    import_camelCase = __toESM3(require_camelCase());
    getNumberOfTextFailures = (ratings) => ratings.filter((rating) => !rating.aa).length;
    getNumberOfUIControlFailures = (ratings) => ratings.filter((rating) => !rating.aaLarge).length;
    flattenCategorizedTokens = (tokens) => {
      let flatTheme = {};
      return Object.values(tokens).forEach((value) => {
        flatTheme = { ...flatTheme, ...value };
      }), flatTheme;
    };
    convertRawTokenJSONToArray = (rawTokens) => Object.keys(rawTokens).reduce((tokens, token) => [rawTokens[token], ...tokens], []);
    getTokensWithTextContrastRequirements = (rawTokens) => convertRawTokenJSONToArray(rawTokens).filter((token) => token.type === "color" && token.text_contrast_pairing != null);
    getTokensWithUIControlContrastRequirements = (rawTokens) => convertRawTokenJSONToArray(rawTokens).filter((token) => token.type === "color" && token.uicontrol_contrast_pairing != null);
    getContrastRatingForTokenPairing = (filteredTokens, tokens, pairingKey) => filteredTokens.reduce((tokenRatings, token) => {
      let tokensToCompare = token[pairingKey];
      if (tokensToCompare !== void 0) {
        let ratings = tokensToCompare.map((tokenToCompare) => {
          let baseTokenName = (0, import_camelCase.default)(token.name), baseTokenValue = tokens[baseTokenName], tokenToCompareName = (0, import_camelCase.default)(tokenToCompare), tokenToCompareValue = tokens[tokenToCompareName], comboRating = { aa: false, aaLarge: false, aaa: false, aaaLarge: false }, comboContrast = 0, combos = false;
          return baseTokenValue != null && tokenToCompareValue != null && (combos = index_es_default([baseTokenValue, tokenToCompareValue])), combos !== false && combos[0].combinations[0] !== void 0 && (comboRating = combos[0].combinations[0].accessibility, comboContrast = combos[0].combinations[0].contrast), { foreground: token.name, foregroundValue: baseTokenValue, background: tokenToCompare, backgroundValue: tokenToCompareValue, contrast: comboContrast, ...comboRating };
        }).filter((rating) => !(rating.foregroundValue === void 0 || rating.backgroundValue === void 0));
        return [...tokenRatings, ...ratings];
      }
      return tokenRatings;
    }, []);
    getContrastRatingsOfTokensWithTextContrastRequirements = (tokens) => {
      let defaultThemeRawJSON = tokens_raw_default.props, tokenWithTextContrastRequirements = getTokensWithTextContrastRequirements(defaultThemeRawJSON), flattenedTokens = flattenCategorizedTokens(tokens);
      return getContrastRatingForTokenPairing(tokenWithTextContrastRequirements, flattenedTokens, "text_contrast_pairing");
    };
    getContrastRatingsOfTokensWithUIControlContrastRequirements = (tokens) => {
      let defaultThemeRawJSON = tokens_raw_default.props, tokenWithUIControlContrastRequirements = getTokensWithUIControlContrastRequirements(defaultThemeRawJSON), flattenedTokens = flattenCategorizedTokens(tokens);
      return getContrastRatingForTokenPairing(tokenWithUIControlContrastRequirements, flattenedTokens, "uicontrol_contrast_pairing");
    };
  }
});

// node_modules/@twilio-paste/theme/dist/index.es.js
var index_es_exports = {};
__export(index_es_exports, {
  ConsoleTheme: () => ConsoleTheme,
  DarkTheme: () => DarkTheme,
  DefaultTheme: () => DefaultTheme,
  EvergreenTheme: () => EvergreenTheme,
  SendGridTheme: () => SendGridTheme,
  StyledBase: () => StyledBase,
  Theme: () => Theme,
  ThemeVariants: () => ThemeVariants,
  TwilioDarkTheme: () => TwilioDarkTheme,
  TwilioTheme: () => TwilioTheme,
  generateThemeFromTokens: () => generateThemeFromTokens,
  generateTokensFromTheme: () => generateTokensFromTheme,
  pasteBaseStyles: () => pasteBaseStyles,
  pasteFonts: () => pasteFonts,
  pasteGlobalStyles: () => pasteGlobalStyles,
  remToPx: () => remToPx,
  useTheme: () => useTheme,
  useThemeContrastCheck: () => useThemeContrastCheck,
  withTheme: () => export_withTheme
});
function getProviderThemeProps(theme, customBreakpoints) {
  switch (theme) {
    case ThemeVariants.TWILIO:
      return { ...TwilioTheme, breakpoints: customBreakpoints || TwilioTheme.breakpoints };
    case ThemeVariants.TWILIO_DARK:
      return { ...TwilioDarkTheme, breakpoints: customBreakpoints || TwilioDarkTheme.breakpoints };
    case ThemeVariants.DARK:
      return { ...DarkTheme, breakpoints: customBreakpoints || DarkTheme.breakpoints };
    case ThemeVariants.SENDGRID:
      return { ...SendGridTheme, breakpoints: customBreakpoints || SendGridTheme.breakpoints };
    case ThemeVariants.EVERGREEN:
      return { ...EvergreenTheme, breakpoints: customBreakpoints || EvergreenTheme.breakpoints };
    case ThemeVariants.DEFAULT:
    default:
      return { ...DefaultTheme, breakpoints: customBreakpoints || DefaultTheme.breakpoints };
  }
}
var React5, React22, React32, getThemeFromHash, remToPx, generateThemeFromTokens, DefaultTheme, SendGridTheme, EvergreenTheme, DarkTheme, TwilioTheme, TwilioDarkTheme, ConsoleTheme, pasteGlobalStyles, pasteBaseStyles, pasteFonts, ThemeVariants, StyledBase, useThemeOverwriteHook, ThemeProvider, ThemeConsumer, useTheme, generateTokensFromTheme, useThemeContrastCheck, Theme;
var init_index_es4 = __esm({
  "node_modules/@twilio-paste/theme/dist/index.es.js"() {
    React5 = __toESM(require_react());
    init_index_es();
    init_index_es2();
    init_tokens_es6();
    init_tokens_es62();
    init_tokens_es63();
    init_tokens_es64();
    init_tokens_es65();
    init_tokens_es66();
    init_index_es2();
    init_index_es2();
    init_index_es2();
    React22 = __toESM(require_react());
    init_index_es2();
    init_index_es2();
    React32 = __toESM(require_react());
    init_index_es2();
    init_index_es3();
    getThemeFromHash = () => {
      try {
        if (window.location.hash.includes("paste-theme-override"))
          return window.location.hash.split("=")[1];
      } catch {
      }
    };
    remToPx = (rem, type = "number") => {
      let remValue = typeof rem == "string" ? Number.parseFloat(rem.replace("rem", "")) : rem, pxValue = Math.round(remValue * 16);
      return type === "number" ? pxValue : `${pxValue}px`;
    };
    generateThemeFromTokens = ({ backgroundColors: backgroundColors7, borderColors: borderColors7, borderWidths: borderWidths7, dataVisualization: dataVisualization7, colorSchemes: colorSchemes7, radii: radii7, fonts: fonts7, fontSizes: fontSizes7, fontWeights: fontWeights7, lineHeights: lineHeights7, boxShadows: boxShadows7, sizings: sizings7, spacings: spacings7, textColors: textColors7, zIndices: zIndices7 }) => {
      let breakpoints = [remToPx(sizings7.size40, "string"), remToPx(sizings7.size100, "string"), remToPx(sizings7.size120, "string")];
      return { shadows: boxShadows7, borderWidths: borderWidths7, radii: radii7, breakpoints, textColors: textColors7, colorSchemes: colorSchemes7, borderColors: borderColors7, backgroundColors: backgroundColors7, fonts: fonts7, fontSizes: fontSizes7, fontWeights: fontWeights7, lineHeights: lineHeights7, widths: sizings7, maxWidths: sizings7, minWidths: sizings7, heights: sizings7, maxHeights: sizings7, minHeights: sizings7, sizes: sizings7, iconSizes: { sizeIcon05: sizings7.sizeIcon05, sizeIcon10: sizings7.sizeIcon10, sizeIcon20: sizings7.sizeIcon20, sizeIcon30: sizings7.sizeIcon30, sizeIcon40: sizings7.sizeIcon40, sizeIcon50: sizings7.sizeIcon50, sizeIcon60: sizings7.sizeIcon60, sizeIcon70: sizings7.sizeIcon70, sizeIcon80: sizings7.sizeIcon80, sizeIcon90: sizings7.sizeIcon90, sizeIcon100: sizings7.sizeIcon100, sizeIcon110: sizings7.sizeIcon110 }, space: spacings7, zIndices: zIndices7, dataVisualization: dataVisualization7 };
    };
    DefaultTheme = generateThemeFromTokens({ backgroundColors, borderColors, borderWidths, radii, fonts, fontSizes, fontWeights, lineHeights, boxShadows, sizings, spacings, textColors, zIndices, dataVisualization, colors: colors2, colorSchemes });
    SendGridTheme = generateThemeFromTokens({ backgroundColors: backgroundColors2, borderColors: borderColors2, borderWidths: borderWidths2, radii: radii2, fonts: fonts2, fontSizes: fontSizes2, fontWeights: fontWeights2, lineHeights: lineHeights2, boxShadows: boxShadows2, sizings: sizings2, spacings: spacings2, textColors: textColors2, zIndices: zIndices2, dataVisualization: dataVisualization2, colors: colors3, colorSchemes: colorSchemes2 });
    EvergreenTheme = generateThemeFromTokens({ backgroundColors: backgroundColors3, borderColors: borderColors3, borderWidths: borderWidths3, radii: radii3, fonts: fonts3, fontSizes: fontSizes3, fontWeights: fontWeights3, lineHeights: lineHeights3, boxShadows: boxShadows3, sizings: sizings3, spacings: spacings3, textColors: textColors3, zIndices: zIndices3, dataVisualization: dataVisualization3, colors: colors4, colorSchemes: colorSchemes3 });
    DarkTheme = generateThemeFromTokens({ backgroundColors: backgroundColors4, borderColors: borderColors4, borderWidths: borderWidths4, radii: radii4, fonts: fonts4, fontSizes: fontSizes4, fontWeights: fontWeights4, lineHeights: lineHeights4, boxShadows: boxShadows4, sizings: sizings4, spacings: spacings4, textColors: textColors4, zIndices: zIndices4, dataVisualization: dataVisualization4, colors: colors5, colorSchemes: colorSchemes4 });
    TwilioTheme = generateThemeFromTokens({ backgroundColors: backgroundColors5, borderColors: borderColors5, borderWidths: borderWidths5, radii: radii5, fonts: fonts5, fontSizes: fontSizes5, fontWeights: fontWeights5, lineHeights: lineHeights5, boxShadows: boxShadows5, sizings: sizings5, spacings: spacings5, textColors: textColors5, zIndices: zIndices5, dataVisualization: dataVisualization5, colors: colors6, colorSchemes: colorSchemes5 });
    TwilioDarkTheme = generateThemeFromTokens({ backgroundColors: backgroundColors6, borderColors: borderColors6, borderWidths: borderWidths6, radii: radii6, fonts: fonts6, fontSizes: fontSizes6, fontWeights: fontWeights6, lineHeights: lineHeights6, boxShadows: boxShadows6, sizings: sizings6, spacings: spacings6, textColors: textColors6, zIndices: zIndices6, dataVisualization: dataVisualization6, colors: colors7, colorSchemes: colorSchemes6 });
    ConsoleTheme = DefaultTheme;
    pasteGlobalStyles = css({ html: { fontSize: "fontSizeBase", fontFamily: "fontFamilyText" }, "html:lang(ja), html:lang(ja-JP)": { ".paste-theme-provider": { fontFamily: "fontFamilyTextJapanese" } }, "html:lang(zh-CN)": { ".paste-theme-provider": { fontFamily: "fontFamilyTextChineseSimplified" } }, "html:lang(zh-TW), html:lang(zh-HK)": { ".paste-theme-provider": { fontFamily: "fontFamilyTextChineseTraditional" } }, "html:lang(ko)": { ".paste-theme-provider": { fontFamily: "fontFamilyTextKorean" } }, body: { backgroundColor: "colorBackgroundBody", margin: 0 }, "*, *::after, *::before": { boxSizing: "border-box" }, "@media (prefers-reduced-motion: reduce)": { "*": { animationDuration: "0 !important", animationIterationCount: "1 !important", transitionDuration: "0 !important", scrollBehavior: "auto !important" } }, ":root": { ["--reach-dialog"]: "1" } });
    pasteBaseStyles = css({ color: "colorText", colorScheme: "colorScheme", fontSize: "fontSize30", fontFamily: "fontFamilyText", lineHeight: "lineHeight30", fontWeight: "fontWeightNormal", fontVariantNumeric: "tabular-nums" });
    pasteFonts = export_EmotionCSS`
/* -------------------------------------------------------
Variable font.
*/
@font-face {
  font-family: 'Inter var';
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: 'Regular';
  src: url("https://assets.twilio.com/public_assets/paste-fonts/1.5.1/Inter-roman.var.woff2?v=3.19") format("woff2");
}
@font-face {
  font-family: 'Inter var';
  font-weight: 100 900;
  font-display: swap;
  font-style: italic;
  font-named-instance: 'Italic';
  src: url("https://assets.twilio.com/public_assets/paste-fonts/1.5.1/Inter-italic.var.woff2?v=3.19") format("woff2");
}
/* --------------------------------------------------------------------------
[EXPERIMENTAL] Multi-axis, single variable font.

Slant axis is not yet widely supported (as of February 2019) and thus this
multi-axis single variable font is opt-in rather than the default.

When using this, you will probably need to set font-variation-settings
explicitly, e.g.

  * { font-variation-settings: "slnt" 0deg }
  .italic { font-variation-settings: "slnt" 10deg }

*/
@font-face {
  font-family: 'Inter var experimental';
  font-weight: 100 900;
  font-display: swap;
  font-style: oblique 0deg 8deg;
  src: url("https://assets.twilio.com/public_assets/paste-fonts/1.5.1/Inter.var.woff2?v=3.19") format("woff2");
}

/*
Twilio Sans Mono
*/
@font-face {
  font-family: 'TwilioSansMono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansMono-Regular.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansMono-Regular.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: italic;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansMono-RegularItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansMono-RegularItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansMono-Bold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansMono-Bold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: italic;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansMono-BoldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansMono-BoldItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansMono-Medium.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansMono-Medium.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: italic;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansMono-MediumItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansMono-MediumItl.woff') format('woff');
}

/*
Twilio Sans Text
*/
@font-face {
  font-family: 'TwilioSansText';
  font-style: normal;
  font-display: swap;
  font-weight: 300;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Light.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Light.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: italic;
  font-display: swap;
  font-weight: 300;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-LightItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-LightItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Regular.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Regular.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: italic;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-RegularItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-RegularItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Medium.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Medium.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: italic;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-MediumItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-MediumItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Semibold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Semibold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: italic;
  font-display: swap;
  font-weight: 600;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-SemiboldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-SemiboldItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Bold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Bold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: italic;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-BoldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-BoldItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Extrabold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Extrabold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: italic;
  font-display: swap;
  font-weight: 800;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-ExtraboldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-ExtraboldItl.woff') format('woff');
}

/*
Twilio Sans Display
*/
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: normal;
  font-display: swap;
  font-weight: 300;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-Light.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-Light.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: italic;
  font-display: swap;
  font-weight: 300;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-LightItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-LightItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-Regular.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-Regular.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: italic;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-RegularItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-RegularItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-Medium.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-Medium.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: italic;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-MediumItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-MediumItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-Semibold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-Semibold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: italic;
  font-display: swap;
  font-weight: 600;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-SemiboldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-SemiboldItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-Bold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-Bold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: italic;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-BoldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-BoldItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-Extrabold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-Extrabold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: italic;
  font-display: swap;
  font-weight: 800;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-ExtraboldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansDisplay-ExtraboldItl.woff') format('woff');
}
`;
    ThemeVariants = { DEFAULT: "default", SENDGRID: "sendgrid", DARK: "dark", TWILIO: "twilio", TWILIO_DARK: "twilio-dark", EVERGREEN: "evergreen" };
    StyledBase = export_styled.div(pasteBaseStyles);
    useThemeOverwriteHook = () => {
      let [overwriteTheme, setOverwriteTheme] = React5.useState(getThemeFromHash()), handleLocationChange = () => {
        setOverwriteTheme(getThemeFromHash());
      };
      return React5.useEffect(() => (window.addEventListener("popstate", handleLocationChange), () => {
        window.removeEventListener("popstate", handleLocationChange);
      })), overwriteTheme;
    };
    ThemeProvider = ({ customBreakpoints, theme = ThemeVariants.DEFAULT, disableAnimations = false, cacheProviderProps, ...props2 }) => {
      let [cache] = React5.useState(cacheProviderProps ? export_createCache(cacheProviderProps) : null), prefersReducedMotion = useReducedMotion();
      React5.useMemo(() => {
        globals.assign({ skipAnimation: disableAnimations || prefersReducedMotion });
      }, [disableAnimations, prefersReducedMotion]);
      let overwriteTheme = useThemeOverwriteHook(), providerThemeProps = getProviderThemeProps(overwriteTheme || theme, customBreakpoints);
      return cache ? React5.createElement(export_CacheProvider, { value: cache }, React5.createElement(export_ThemeProvider, { theme: providerThemeProps }, React5.createElement(export_StylingGlobals, { styles: pasteGlobalStyles({ theme: providerThemeProps }) }), React5.createElement(export_StylingGlobals, { styles: pasteFonts }), React5.createElement(StyledBase, { className: "paste-theme-provider", ...props2 }))) : React5.createElement(export_ThemeProvider, { theme: providerThemeProps }, React5.createElement(export_StylingGlobals, { styles: pasteGlobalStyles({ theme: providerThemeProps }) }), React5.createElement(export_StylingGlobals, { styles: pasteFonts }), React5.createElement(StyledBase, { className: "paste-theme-provider", ...props2 }));
    };
    ThemeProvider.displayName = "PasteThemeProvider";
    ThemeConsumer = ({ children, ...props2 }) => {
      if (children == null || typeof children != "function")
        throw new Error("[ThemeConsumer]: You must pass a function as children");
      return React22.createElement(export_ThemeContext.Consumer, null, (theme) => children({ ...props2, theme }));
    };
    ThemeConsumer.displayName = "PasteThemeConsumer";
    useTheme = () => {
      let context = React32.useContext(export_ThemeContext);
      if (!context)
        throw new Error("[useHook]: must be used within the @twilio-paste/theme provider");
      return context;
    };
    generateTokensFromTheme = ({ backgroundColors: backgroundColors7, borderColors: borderColors7, borderWidths: borderWidths7, colorSchemes: colorSchemes7, radii: radii7, fonts: fonts7, fontSizes: fontSizes7, fontWeights: fontWeights7, lineHeights: lineHeights7, shadows, sizes, space: space2, textColors: textColors7, zIndices: zIndices7, dataVisualization: dataVisualization7 }) => ({ boxShadows: shadows, borderWidths: borderWidths7, radii: radii7, textColors: textColors7, borderColors: borderColors7, backgroundColors: backgroundColors7, fonts: fonts7, fontSizes: fontSizes7, fontWeights: fontWeights7, lineHeights: lineHeights7, sizings: sizes, spacings: space2, zIndices: zIndices7, colorSchemes: colorSchemes7, colors: {}, dataVisualization: dataVisualization7 });
    useThemeContrastCheck = () => {
      let theme = useTheme(), designTokens = generateTokensFromTheme(theme), textContrastRating = getContrastRatingsOfTokensWithTextContrastRequirements(designTokens), uiControlContrastRating = getContrastRatingsOfTokensWithUIControlContrastRequirements(designTokens), numberOfTextFailures = getNumberOfTextFailures(textContrastRating), numberOfUIControlFailures = getNumberOfUIControlFailures(uiControlContrastRating), totalFailures = numberOfTextFailures + numberOfUIControlFailures;
      return { textContrastRating, uiControlContrastRating, numberOfTextFailures, numberOfUIControlFailures, totalFailures };
    };
    Theme = { Provider: ThemeProvider, Consumer: ThemeConsumer };
  }
});

export {
  useSpring,
  useTransition,
  animated,
  useReducedMotion,
  init_index_es,
  css,
  system,
  compose,
  themeGet,
  layout,
  typography,
  flexbox,
  grid,
  border,
  background,
  position,
  space,
  index_esm_default9,
  verticalAlign,
  display,
  overflow,
  props,
  createShouldForwardProp,
  export_EmotionCSS,
  export_StylingGlobals,
  export_keyframes,
  export_styled,
  init_index_es2,
  DefaultTheme,
  pasteBaseStyles,
  StyledBase,
  useTheme,
  index_es_exports,
  init_index_es4 as init_index_es3
};
/*! Bundled license information:

@twilio-paste/styling-library/dist/index.es.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-PFLXYQ37.js.map
