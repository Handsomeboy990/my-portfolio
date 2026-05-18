(function() { const e = document.createElement("link").relList; if (e && e.supports && e.supports("modulepreload")) return; for (const l of document.querySelectorAll('link[rel="modulepreload"]')) a(l);
    new MutationObserver(l => { for (const u of l)
            if (u.type === "childList")
                for (const c of u.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && a(c) }).observe(document, { childList: !0, subtree: !0 });

    function s(l) { const u = {}; return l.integrity && (u.integrity = l.integrity), l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? u.credentials = "include" : l.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u }

    function a(l) { if (l.ep) return;
        l.ep = !0; const u = s(l);
        fetch(l.href, u) } })();

function vb(n) { return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n }
var sd = { exports: {} },
    zr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qy;

function uS() { if (Qy) return zr;
    Qy = 1; var n = Symbol.for("react.transitional.element"),
        e = Symbol.for("react.fragment");

    function s(a, l, u) { var c = null; if (u !== void 0 && (c = "" + u), l.key !== void 0 && (c = "" + l.key), "key" in l) { u = {}; for (var d in l) d !== "key" && (u[d] = l[d]) } else u = l; return l = u.ref, { $$typeof: n, type: a, key: c, ref: l !== void 0 ? l : null, props: u } } return zr.Fragment = e, zr.jsx = s, zr.jsxs = s, zr }
var Wy;

function cS() { return Wy || (Wy = 1, sd.exports = uS()), sd.exports }
var b = cS(),
    ad = { exports: {} },
    pe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ev;

function hS() { if (ev) return pe;
    ev = 1; var n = Symbol.for("react.transitional.element"),
        e = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        l = Symbol.for("react.profiler"),
        u = Symbol.for("react.consumer"),
        c = Symbol.for("react.context"),
        d = Symbol.for("react.forward_ref"),
        m = Symbol.for("react.suspense"),
        p = Symbol.for("react.memo"),
        g = Symbol.for("react.lazy"),
        y = Symbol.for("react.activity"),
        w = Symbol.iterator;

    function _(C) { return C === null || typeof C != "object" ? null : (C = w && C[w] || C["@@iterator"], typeof C == "function" ? C : null) } var S = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
        A = Object.assign,
        k = {};

    function R(C, V, Q) { this.props = C, this.context = V, this.refs = k, this.updater = Q || S }
    R.prototype.isReactComponent = {}, R.prototype.setState = function(C, V) { if (typeof C != "object" && typeof C != "function" && C != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, V, "setState") }, R.prototype.forceUpdate = function(C) { this.updater.enqueueForceUpdate(this, C, "forceUpdate") };

    function L() {}
    L.prototype = R.prototype;

    function E(C, V, Q) { this.props = C, this.context = V, this.refs = k, this.updater = Q || S } var G = E.prototype = new L;
    G.constructor = E, A(G, R.prototype), G.isPureReactComponent = !0; var J = Array.isArray;

    function Z() {} var F = { H: null, A: null, T: null, S: null },
        te = Object.prototype.hasOwnProperty;

    function oe(C, V, Q) { var se = Q.ref; return { $$typeof: n, type: C, key: V, ref: se !== void 0 ? se : null, props: Q } }

    function je(C, V) { return oe(C.type, V, C.props) }

    function Ie(C) { return typeof C == "object" && C !== null && C.$$typeof === n }

    function Qe(C) { var V = { "=": "=0", ":": "=2" }; return "$" + C.replace(/[=:]/g, function(Q) { return V[Q] }) } var an = /\/+/g;

    function Mt(C, V) { return typeof C == "object" && C !== null && C.key != null ? Qe("" + C.key) : V.toString(36) }

    function bt(C) { switch (C.status) {
            case "fulfilled":
                return C.value;
            case "rejected":
                throw C.reason;
            default:
                switch (typeof C.status == "string" ? C.then(Z, Z) : (C.status = "pending", C.then(function(V) { C.status === "pending" && (C.status = "fulfilled", C.value = V) }, function(V) { C.status === "pending" && (C.status = "rejected", C.reason = V) })), C.status) {
                    case "fulfilled":
                        return C.value;
                    case "rejected":
                        throw C.reason } } throw C }

    function H(C, V, Q, se, me) { var be = typeof C;
        (be === "undefined" || be === "boolean") && (C = null); var Re = !1; if (C === null) Re = !0;
        else switch (be) {
            case "bigint":
            case "string":
            case "number":
                Re = !0; break;
            case "object":
                switch (C.$$typeof) {
                    case n:
                    case e:
                        Re = !0; break;
                    case g:
                        return Re = C._init, H(Re(C._payload), V, Q, se, me) } }
        if (Re) return me = me(C), Re = se === "" ? "." + Mt(C, 0) : se, J(me) ? (Q = "", Re != null && (Q = Re.replace(an, "$&/") + "/"), H(me, V, Q, "", function(Xi) { return Xi })) : me != null && (Ie(me) && (me = je(me, Q + (me.key == null || C && C.key === me.key ? "" : ("" + me.key).replace(an, "$&/") + "/") + Re)), V.push(me)), 1;
        Re = 0; var wt = se === "" ? "." : se + ":"; if (J(C))
            for (var Xe = 0; Xe < C.length; Xe++) se = C[Xe], be = wt + Mt(se, Xe), Re += H(se, V, Q, be, me);
        else if (Xe = _(C), typeof Xe == "function")
            for (C = Xe.call(C), Xe = 0; !(se = C.next()).done;) se = se.value, be = wt + Mt(se, Xe++), Re += H(se, V, Q, be, me);
        else if (be === "object") { if (typeof C.then == "function") return H(bt(C), V, Q, se, me); throw V = String(C), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.") } return Re }

    function X(C, V, Q) { if (C == null) return C; var se = [],
            me = 0; return H(C, se, "", "", function(be) { return V.call(Q, be, me++) }), se }

    function ne(C) { if (C._status === -1) { var V = C._result;
            V = V(), V.then(function(Q) {
                (C._status === 0 || C._status === -1) && (C._status = 1, C._result = Q) }, function(Q) {
                (C._status === 0 || C._status === -1) && (C._status = 2, C._result = Q) }), C._status === -1 && (C._status = 0, C._result = V) } if (C._status === 1) return C._result.default; throw C._result } var we = typeof reportError == "function" ? reportError : function(C) { if (typeof window == "object" && typeof window.ErrorEvent == "function") { var V = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C), error: C }); if (!window.dispatchEvent(V)) return } else if (typeof process == "object" && typeof process.emit == "function") { process.emit("uncaughtException", C); return }
            console.error(C) },
        ge = { map: X, forEach: function(C, V, Q) { X(C, function() { V.apply(this, arguments) }, Q) }, count: function(C) { var V = 0; return X(C, function() { V++ }), V }, toArray: function(C) { return X(C, function(V) { return V }) || [] }, only: function(C) { if (!Ie(C)) throw Error("React.Children.only expected to receive a single React element child."); return C } }; return pe.Activity = y, pe.Children = ge, pe.Component = R, pe.Fragment = s, pe.Profiler = l, pe.PureComponent = E, pe.StrictMode = a, pe.Suspense = m, pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, pe.__COMPILER_RUNTIME = { __proto__: null, c: function(C) { return F.H.useMemoCache(C) } }, pe.cache = function(C) { return function() { return C.apply(null, arguments) } }, pe.cacheSignal = function() { return null }, pe.cloneElement = function(C, V, Q) { if (C == null) throw Error("The argument must be a React element, but you passed " + C + "."); var se = A({}, C.props),
            me = C.key; if (V != null)
            for (be in V.key !== void 0 && (me = "" + V.key), V) !te.call(V, be) || be === "key" || be === "__self" || be === "__source" || be === "ref" && V.ref === void 0 || (se[be] = V[be]); var be = arguments.length - 2; if (be === 1) se.children = Q;
        else if (1 < be) { for (var Re = Array(be), wt = 0; wt < be; wt++) Re[wt] = arguments[wt + 2];
            se.children = Re } return oe(C.type, me, se) }, pe.createContext = function(C) { return C = { $$typeof: c, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null }, C.Provider = C, C.Consumer = { $$typeof: u, _context: C }, C }, pe.createElement = function(C, V, Q) { var se, me = {},
            be = null; if (V != null)
            for (se in V.key !== void 0 && (be = "" + V.key), V) te.call(V, se) && se !== "key" && se !== "__self" && se !== "__source" && (me[se] = V[se]); var Re = arguments.length - 2; if (Re === 1) me.children = Q;
        else if (1 < Re) { for (var wt = Array(Re), Xe = 0; Xe < Re; Xe++) wt[Xe] = arguments[Xe + 2];
            me.children = wt } if (C && C.defaultProps)
            for (se in Re = C.defaultProps, Re) me[se] === void 0 && (me[se] = Re[se]); return oe(C, be, me) }, pe.createRef = function() { return { current: null } }, pe.forwardRef = function(C) { return { $$typeof: d, render: C } }, pe.isValidElement = Ie, pe.lazy = function(C) { return { $$typeof: g, _payload: { _status: -1, _result: C }, _init: ne } }, pe.memo = function(C, V) { return { $$typeof: p, type: C, compare: V === void 0 ? null : V } }, pe.startTransition = function(C) { var V = F.T,
            Q = {};
        F.T = Q; try { var se = C(),
                me = F.S;
            me !== null && me(Q, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(Z, we) } catch (be) { we(be) } finally { V !== null && Q.types !== null && (V.types = Q.types), F.T = V } }, pe.unstable_useCacheRefresh = function() { return F.H.useCacheRefresh() }, pe.use = function(C) { return F.H.use(C) }, pe.useActionState = function(C, V, Q) { return F.H.useActionState(C, V, Q) }, pe.useCallback = function(C, V) { return F.H.useCallback(C, V) }, pe.useContext = function(C) { return F.H.useContext(C) }, pe.useDebugValue = function() {}, pe.useDeferredValue = function(C, V) { return F.H.useDeferredValue(C, V) }, pe.useEffect = function(C, V) { return F.H.useEffect(C, V) }, pe.useEffectEvent = function(C) { return F.H.useEffectEvent(C) }, pe.useId = function() { return F.H.useId() }, pe.useImperativeHandle = function(C, V, Q) { return F.H.useImperativeHandle(C, V, Q) }, pe.useInsertionEffect = function(C, V) { return F.H.useInsertionEffect(C, V) }, pe.useLayoutEffect = function(C, V) { return F.H.useLayoutEffect(C, V) }, pe.useMemo = function(C, V) { return F.H.useMemo(C, V) }, pe.useOptimistic = function(C, V) { return F.H.useOptimistic(C, V) }, pe.useReducer = function(C, V, Q) { return F.H.useReducer(C, V, Q) }, pe.useRef = function(C) { return F.H.useRef(C) }, pe.useState = function(C) { return F.H.useState(C) }, pe.useSyncExternalStore = function(C, V, Q) { return F.H.useSyncExternalStore(C, V, Q) }, pe.useTransition = function() { return F.H.useTransition() }, pe.version = "19.2.0", pe }
var tv;

function bf() { return tv || (tv = 1, ad.exports = hS()), ad.exports }
var O = bf();
const Ce = vb(O);
var rd = { exports: {} },
    Br = {},
    od = { exports: {} },
    ld = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nv;

function dS() { return nv || (nv = 1, (function(n) {
        function e(H, X) { var ne = H.length;
            H.push(X);
            e: for (; 0 < ne;) { var we = ne - 1 >>> 1,
                    ge = H[we]; if (0 < l(ge, X)) H[we] = X, H[ne] = ge, ne = we;
                else break e } }

        function s(H) { return H.length === 0 ? null : H[0] }

        function a(H) { if (H.length === 0) return null; var X = H[0],
                ne = H.pop(); if (ne !== X) { H[0] = ne;
                e: for (var we = 0, ge = H.length, C = ge >>> 1; we < C;) { var V = 2 * (we + 1) - 1,
                        Q = H[V],
                        se = V + 1,
                        me = H[se]; if (0 > l(Q, ne)) se < ge && 0 > l(me, Q) ? (H[we] = me, H[se] = ne, we = se) : (H[we] = Q, H[V] = ne, we = V);
                    else if (se < ge && 0 > l(me, ne)) H[we] = me, H[se] = ne, we = se;
                    else break e } } return X }

        function l(H, X) { var ne = H.sortIndex - X.sortIndex; return ne !== 0 ? ne : H.id - X.id } if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") { var u = performance;
            n.unstable_now = function() { return u.now() } } else { var c = Date,
                d = c.now();
            n.unstable_now = function() { return c.now() - d } } var m = [],
            p = [],
            g = 1,
            y = null,
            w = 3,
            _ = !1,
            S = !1,
            A = !1,
            k = !1,
            R = typeof setTimeout == "function" ? setTimeout : null,
            L = typeof clearTimeout == "function" ? clearTimeout : null,
            E = typeof setImmediate < "u" ? setImmediate : null;

        function G(H) { for (var X = s(p); X !== null;) { if (X.callback === null) a(p);
                else if (X.startTime <= H) a(p), X.sortIndex = X.expirationTime, e(m, X);
                else break;
                X = s(p) } }

        function J(H) { if (A = !1, G(H), !S)
                if (s(m) !== null) S = !0, Z || (Z = !0, Qe());
                else { var X = s(p);
                    X !== null && bt(J, X.startTime - H) } } var Z = !1,
            F = -1,
            te = 5,
            oe = -1;

        function je() { return k ? !0 : !(n.unstable_now() - oe < te) }

        function Ie() { if (k = !1, Z) { var H = n.unstable_now();
                oe = H; var X = !0; try { e: { S = !1, A && (A = !1, L(F), F = -1), _ = !0; var ne = w; try { t: { for (G(H), y = s(m); y !== null && !(y.expirationTime > H && je());) { var we = y.callback; if (typeof we == "function") { y.callback = null, w = y.priorityLevel; var ge = we(y.expirationTime <= H); if (H = n.unstable_now(), typeof ge == "function") { y.callback = ge, G(H), X = !0; break t }
                                        y === s(m) && a(m), G(H) } else a(m);
                                    y = s(m) } if (y !== null) X = !0;
                                else { var C = s(p);
                                    C !== null && bt(J, C.startTime - H), X = !1 } } break e }
                        finally { y = null, w = ne, _ = !1 }
                        X = void 0 } }
                finally { X ? Qe() : Z = !1 } } } var Qe; if (typeof E == "function") Qe = function() { E(Ie) };
        else if (typeof MessageChannel < "u") { var an = new MessageChannel,
                Mt = an.port2;
            an.port1.onmessage = Ie, Qe = function() { Mt.postMessage(null) } } else Qe = function() { R(Ie, 0) };

        function bt(H, X) { F = R(function() { H(n.unstable_now()) }, X) }
        n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(H) { H.callback = null }, n.unstable_forceFrameRate = function(H) { 0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : te = 0 < H ? Math.floor(1e3 / H) : 5 }, n.unstable_getCurrentPriorityLevel = function() { return w }, n.unstable_next = function(H) { switch (w) {
                case 1:
                case 2:
                case 3:
                    var X = 3; break;
                default:
                    X = w } var ne = w;
            w = X; try { return H() } finally { w = ne } }, n.unstable_requestPaint = function() { k = !0 }, n.unstable_runWithPriority = function(H, X) { switch (H) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    H = 3 } var ne = w;
            w = H; try { return X() } finally { w = ne } }, n.unstable_scheduleCallback = function(H, X, ne) { var we = n.unstable_now(); switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? we + ne : we) : ne = we, H) {
                case 1:
                    var ge = -1; break;
                case 2:
                    ge = 250; break;
                case 5:
                    ge = 1073741823; break;
                case 4:
                    ge = 1e4; break;
                default:
                    ge = 5e3 } return ge = ne + ge, H = { id: g++, callback: X, priorityLevel: H, startTime: ne, expirationTime: ge, sortIndex: -1 }, ne > we ? (H.sortIndex = ne, e(p, H), s(m) === null && H === s(p) && (A ? (L(F), F = -1) : A = !0, bt(J, ne - we))) : (H.sortIndex = ge, e(m, H), S || _ || (S = !0, Z || (Z = !0, Qe()))), H }, n.unstable_shouldYield = je, n.unstable_wrapCallback = function(H) { var X = w; return function() { var ne = w;
                w = X; try { return H.apply(this, arguments) } finally { w = ne } } } })(ld)), ld }
var iv;

function fS() { return iv || (iv = 1, od.exports = dS()), od.exports }
var ud = { exports: {} },
    Nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv;

function mS() { if (sv) return Nt;
    sv = 1; var n = bf();

    function e(m) { var p = "https://react.dev/errors/" + m; if (1 < arguments.length) { p += "?args[]=" + encodeURIComponent(arguments[1]); for (var g = 2; g < arguments.length; g++) p += "&args[]=" + encodeURIComponent(arguments[g]) } return "Minified React error #" + m + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }

    function s() {} var a = { d: { f: s, r: function() { throw Error(e(522)) }, D: s, C: s, L: s, m: s, X: s, S: s, M: s }, p: 0, findDOMNode: null },
        l = Symbol.for("react.portal");

    function u(m, p, g) { var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: l, key: y == null ? null : "" + y, children: m, containerInfo: p, implementation: g } } var c = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function d(m, p) { if (m === "font") return ""; if (typeof p == "string") return p === "use-credentials" ? p : "" } return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, Nt.createPortal = function(m, p) { var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(e(299)); return u(m, p, null, g) }, Nt.flushSync = function(m) { var p = c.T,
            g = a.p; try { if (c.T = null, a.p = 2, m) return m() } finally { c.T = p, a.p = g, a.d.f() } }, Nt.preconnect = function(m, p) { typeof m == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, a.d.C(m, p)) }, Nt.prefetchDNS = function(m) { typeof m == "string" && a.d.D(m) }, Nt.preinit = function(m, p) { if (typeof m == "string" && p && typeof p.as == "string") { var g = p.as,
                y = d(g, p.crossOrigin),
                w = typeof p.integrity == "string" ? p.integrity : void 0,
                _ = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            g === "style" ? a.d.S(m, typeof p.precedence == "string" ? p.precedence : void 0, { crossOrigin: y, integrity: w, fetchPriority: _ }) : g === "script" && a.d.X(m, { crossOrigin: y, integrity: w, fetchPriority: _, nonce: typeof p.nonce == "string" ? p.nonce : void 0 }) } }, Nt.preinitModule = function(m, p) { if (typeof m == "string")
            if (typeof p == "object" && p !== null) { if (p.as == null || p.as === "script") { var g = d(p.as, p.crossOrigin);
                    a.d.M(m, { crossOrigin: g, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0 }) } } else p == null && a.d.M(m) }, Nt.preload = function(m, p) { if (typeof m == "string" && typeof p == "object" && p !== null && typeof p.as == "string") { var g = p.as,
                y = d(g, p.crossOrigin);
            a.d.L(m, g, { crossOrigin: y, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0, type: typeof p.type == "string" ? p.type : void 0, fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0, referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0, imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0, imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0, media: typeof p.media == "string" ? p.media : void 0 }) } }, Nt.preloadModule = function(m, p) { if (typeof m == "string")
            if (p) { var g = d(p.as, p.crossOrigin);
                a.d.m(m, { as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0, crossOrigin: g, integrity: typeof p.integrity == "string" ? p.integrity : void 0 }) } else a.d.m(m) }, Nt.requestFormReset = function(m) { a.d.r(m) }, Nt.unstable_batchedUpdates = function(m, p) { return m(p) }, Nt.useFormState = function(m, p, g) { return c.H.useFormState(m, p, g) }, Nt.useFormStatus = function() { return c.H.useHostTransitionStatus() }, Nt.version = "19.2.0", Nt }
var av;

function pS() { if (av) return ud.exports;
    av = 1;

    function n() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n) } catch (e) { console.error(e) } } return n(), ud.exports = mS(), ud.exports }
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rv;

function gS() { if (rv) return Br;
    rv = 1; var n = fS(),
        e = bf(),
        s = pS();

    function a(t) { var i = "https://react.dev/errors/" + t; if (1 < arguments.length) { i += "?args[]=" + encodeURIComponent(arguments[1]); for (var r = 2; r < arguments.length; r++) i += "&args[]=" + encodeURIComponent(arguments[r]) } return "Minified React error #" + t + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }

    function l(t) { return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) }

    function u(t) { var i = t,
            r = t; if (t.alternate)
            for (; i.return;) i = i.return;
        else { t = i;
            do i = t, (i.flags & 4098) !== 0 && (r = i.return), t = i.return; while (t) } return i.tag === 3 ? r : null }

    function c(t) { if (t.tag === 13) { var i = t.memoizedState; if (i === null && (t = t.alternate, t !== null && (i = t.memoizedState)), i !== null) return i.dehydrated } return null }

    function d(t) { if (t.tag === 31) { var i = t.memoizedState; if (i === null && (t = t.alternate, t !== null && (i = t.memoizedState)), i !== null) return i.dehydrated } return null }

    function m(t) { if (u(t) !== t) throw Error(a(188)) }

    function p(t) { var i = t.alternate; if (!i) { if (i = u(t), i === null) throw Error(a(188)); return i !== t ? null : t } for (var r = t, o = i;;) { var h = r.return; if (h === null) break; var f = h.alternate; if (f === null) { if (o = h.return, o !== null) { r = o; continue } break } if (h.child === f.child) { for (f = h.child; f;) { if (f === r) return m(h), t; if (f === o) return m(h), i;
                    f = f.sibling } throw Error(a(188)) } if (r.return !== o.return) r = h, o = f;
            else { for (var v = !1, x = h.child; x;) { if (x === r) { v = !0, r = h, o = f; break } if (x === o) { v = !0, o = h, r = f; break }
                    x = x.sibling } if (!v) { for (x = f.child; x;) { if (x === r) { v = !0, r = f, o = h; break } if (x === o) { v = !0, o = f, r = h; break }
                        x = x.sibling } if (!v) throw Error(a(189)) } } if (r.alternate !== o) throw Error(a(190)) } if (r.tag !== 3) throw Error(a(188)); return r.stateNode.current === r ? t : i }

    function g(t) { var i = t.tag; if (i === 5 || i === 26 || i === 27 || i === 6) return t; for (t = t.child; t !== null;) { if (i = g(t), i !== null) return i;
            t = t.sibling } return null } var y = Object.assign,
        w = Symbol.for("react.element"),
        _ = Symbol.for("react.transitional.element"),
        S = Symbol.for("react.portal"),
        A = Symbol.for("react.fragment"),
        k = Symbol.for("react.strict_mode"),
        R = Symbol.for("react.profiler"),
        L = Symbol.for("react.consumer"),
        E = Symbol.for("react.context"),
        G = Symbol.for("react.forward_ref"),
        J = Symbol.for("react.suspense"),
        Z = Symbol.for("react.suspense_list"),
        F = Symbol.for("react.memo"),
        te = Symbol.for("react.lazy"),
        oe = Symbol.for("react.activity"),
        je = Symbol.for("react.memo_cache_sentinel"),
        Ie = Symbol.iterator;

    function Qe(t) { return t === null || typeof t != "object" ? null : (t = Ie && t[Ie] || t["@@iterator"], typeof t == "function" ? t : null) } var an = Symbol.for("react.client.reference");

    function Mt(t) { if (t == null) return null; if (typeof t == "function") return t.$$typeof === an ? null : t.displayName || t.name || null; if (typeof t == "string") return t; switch (t) {
            case A:
                return "Fragment";
            case R:
                return "Profiler";
            case k:
                return "StrictMode";
            case J:
                return "Suspense";
            case Z:
                return "SuspenseList";
            case oe:
                return "Activity" } if (typeof t == "object") switch (t.$$typeof) {
            case S:
                return "Portal";
            case E:
                return t.displayName || "Context";
            case L:
                return (t._context.displayName || "Context") + ".Consumer";
            case G:
                var i = t.render; return t = t.displayName, t || (t = i.displayName || i.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case F:
                return i = t.displayName || null, i !== null ? i : Mt(t.type) || "Memo";
            case te:
                i = t._payload, t = t._init; try { return Mt(t(i)) } catch {} }
        return null } var bt = Array.isArray,
        H = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        X = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        ne = { pending: !1, data: null, method: null, action: null },
        we = [],
        ge = -1;

    function C(t) { return { current: t } }

    function V(t) { 0 > ge || (t.current = we[ge], we[ge] = null, ge--) }

    function Q(t, i) { ge++, we[ge] = t.current, t.current = i } var se = C(null),
        me = C(null),
        be = C(null),
        Re = C(null);

    function wt(t, i) { switch (Q(be, i), Q(me, t), Q(se, null), i.nodeType) {
            case 9:
            case 11:
                t = (t = i.documentElement) && (t = t.namespaceURI) ? xy(t) : 0; break;
            default:
                if (t = i.tagName, i = i.namespaceURI) i = xy(i), t = _y(i, t);
                else switch (t) {
                    case "svg":
                        t = 1; break;
                    case "math":
                        t = 2; break;
                    default:
                        t = 0 } }
        V(se), Q(se, t) }

    function Xe() { V(se), V(me), V(be) }

    function Xi(t) { t.memoizedState !== null && Q(Re, t); var i = se.current,
            r = _y(i, t.type);
        i !== r && (Q(me, t), Q(se, r)) }

    function Rs(t) { me.current === t && (V(se), V(me)), Re.current === t && (V(Re), Mr._currentValue = ne) } var Ha, jo;

    function rn(t) { if (Ha === void 0) try { throw Error() } catch (r) { var i = r.stack.trim().match(/\n( *(at )?)/);
            Ha = i && i[1] || "", jo = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "" }
        return `
` + Ha + t + jo } var $a = !1;

    function Ji(t, i) { if (!t || $a) return "";
        $a = !0; var r = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0; try { var o = { DetermineComponentFrameRoot: function() { try { if (i) { var I = function() { throw Error() }; if (Object.defineProperty(I.prototype, "props", { set: function() { throw Error() } }), typeof Reflect == "object" && Reflect.construct) { try { Reflect.construct(I, []) } catch (z) { var P = z }
                                Reflect.construct(t, [], I) } else { try { I.call() } catch (z) { P = z }
                                t.call(I.prototype) } } else { try { throw Error() } catch (z) { P = z }(I = t()) && typeof I.catch == "function" && I.catch(function() {}) } } catch (z) { if (z && P && typeof z.stack == "string") return [z.stack, P.stack] } return [null, null] } };
            o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot"; var h = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
            h && h.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" }); var f = o.DetermineComponentFrameRoot(),
                v = f[0],
                x = f[1]; if (v && x) { var T = v.split(`
`),
                    U = x.split(`
`); for (h = o = 0; o < T.length && !T[o].includes("DetermineComponentFrameRoot");) o++; for (; h < U.length && !U[h].includes("DetermineComponentFrameRoot");) h++; if (o === T.length || h === U.length)
                    for (o = T.length - 1, h = U.length - 1; 1 <= o && 0 <= h && T[o] !== U[h];) h--; for (; 1 <= o && 0 <= h; o--, h--)
                    if (T[o] !== U[h]) { if (o !== 1 || h !== 1)
                            do
                                if (o--, h--, 0 > h || T[o] !== U[h]) { var $ = `
` + T[o].replace(" at new ", " at "); return t.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", t.displayName)), $ }
                        while (1 <= o && 0 <= h); break } } } finally { $a = !1, Error.prepareStackTrace = r } return (r = t ? t.displayName || t.name : "") ? rn(r) : "" }

    function qa(t, i) { switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return rn(t.type);
            case 16:
                return rn("Lazy");
            case 13:
                return t.child !== i && i !== null ? rn("Suspense Fallback") : rn("Suspense");
            case 19:
                return rn("SuspenseList");
            case 0:
            case 15:
                return Ji(t.type, !1);
            case 11:
                return Ji(t.type.render, !1);
            case 1:
                return Ji(t.type, !0);
            case 31:
                return rn("Activity");
            default:
                return "" } }

    function ks(t) { try { var i = "",
                r = null;
            do i += qa(t, r), r = t, t = t.return; while (t); return i } catch (o) { return `
Error generating stack: ` + o.message + `
` + o.stack } } var Zi = Object.prototype.hasOwnProperty,
        Ia = n.unstable_scheduleCallback,
        Ga = n.unstable_cancelCallback,
        Iu = n.unstable_shouldYield,
        Gu = n.unstable_requestPaint,
        Ut = n.unstable_now,
        Ku = n.unstable_getCurrentPriorityLevel,
        Co = n.unstable_ImmediatePriority,
        Ro = n.unstable_UserBlockingPriority,
        An = n.unstable_NormalPriority,
        ko = n.unstable_LowPriority,
        Oo = n.unstable_IdlePriority,
        No = n.log,
        Yu = n.unstable_setDisableYieldValue,
        D = null,
        B = null;

    function Y(t) { if (typeof No == "function" && Yu(t), B && typeof B.setStrictMode == "function") try { B.setStrictMode(D, t) } catch {} } var K = Math.clz32 ? Math.clz32 : Me,
        it = Math.log,
        kt = Math.LN2;

    function Me(t) { return t >>>= 0, t === 0 ? 32 : 31 - (it(t) / kt | 0) | 0 } var zt = 256,
        Xt = 262144,
        Mn = 4194304;

    function Bt(t) { var i = t & 42; if (i !== 0) return i; switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return t & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t } }

    function on(t, i, r) { var o = t.pendingLanes; if (o === 0) return 0; var h = 0,
            f = t.suspendedLanes,
            v = t.pingedLanes;
        t = t.warmLanes; var x = o & 134217727; return x !== 0 ? (o = x & ~f, o !== 0 ? h = Bt(o) : (v &= x, v !== 0 ? h = Bt(v) : r || (r = x & ~t, r !== 0 && (h = Bt(r))))) : (x = o & ~f, x !== 0 ? h = Bt(x) : v !== 0 ? h = Bt(v) : r || (r = o & ~t, r !== 0 && (h = Bt(r)))), h === 0 ? 0 : i !== 0 && i !== h && (i & f) === 0 && (f = h & -h, r = i & -i, f >= r || f === 32 && (r & 4194048) !== 0) ? i : h }

    function ln(t, i) { return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & i) === 0 }

    function Os(t, i) { switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return i + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return i + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1 } }

    function Qi() { var t = Mn; return Mn <<= 1, (Mn & 62914560) === 0 && (Mn = 4194304), t }

    function Ot(t) { for (var i = [], r = 0; 31 > r; r++) i.push(t); return i }

    function Gn(t, i) { t.pendingLanes |= i, i !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0) }

    function Fu(t, i, r, o, h, f) { var v = t.pendingLanes;
        t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= r, t.entangledLanes &= r, t.errorRecoveryDisabledLanes &= r, t.shellSuspendCounter = 0; var x = t.entanglements,
            T = t.expirationTimes,
            U = t.hiddenUpdates; for (r = v & ~r; 0 < r;) { var $ = 31 - K(r),
                I = 1 << $;
            x[$] = 0, T[$] = -1; var P = U[$]; if (P !== null)
                for (U[$] = null, $ = 0; $ < P.length; $++) { var z = P[$];
                    z !== null && (z.lane &= -536870913) }
            r &= ~I }
        o !== 0 && Ka(t, o, 0), f !== 0 && h === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(v & ~i)) }

    function Ka(t, i, r) { t.pendingLanes |= i, t.suspendedLanes &= ~i; var o = 31 - K(i);
        t.entangledLanes |= i, t.entanglements[o] = t.entanglements[o] | 1073741824 | r & 261930 }

    function ee(t, i) { var r = t.entangledLanes |= i; for (t = t.entanglements; r;) { var o = 31 - K(r),
                h = 1 << o;
            h & i | t[o] & i && (t[o] |= i), r &= ~h } }

    function Se(t, i) { var r = i & -i; return r = (r & 42) !== 0 ? 1 : He(r), (r & (t.suspendedLanes | i)) !== 0 ? 0 : r }

    function He(t) { switch (t) {
            case 2:
                t = 1; break;
            case 8:
                t = 4; break;
            case 32:
                t = 16; break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                t = 128; break;
            case 268435456:
                t = 134217728; break;
            default:
                t = 0 } return t }

    function xt(t) { return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2 }

    function Ya() { var t = X.p; return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Gy(t.type)) }

    function Fa(t, i) { var r = X.p; try { return X.p = t, i() } finally { X.p = r } } var bi = Math.random().toString(36).slice(2),
        _t = "__reactFiber$" + bi,
        Vt = "__reactProps$" + bi,
        Ns = "__reactContainer$" + bi,
        Xu = "__reactEvents$" + bi,
        Q1 = "__reactListeners$" + bi,
        W1 = "__reactHandles$" + bi,
        lm = "__reactResources$" + bi,
        Xa = "__reactMarker$" + bi;

    function Ju(t) { delete t[_t], delete t[Vt], delete t[Xu], delete t[Q1], delete t[W1] }

    function Ds(t) { var i = t[_t]; if (i) return i; for (var r = t.parentNode; r;) { if (i = r[Ns] || r[_t]) { if (r = i.alternate, i.child !== null || r !== null && r.child !== null)
                    for (t = Ry(t); t !== null;) { if (r = t[_t]) return r;
                        t = Ry(t) }
                return i }
            t = r, r = t.parentNode } return null }

    function Ms(t) { if (t = t[_t] || t[Ns]) { var i = t.tag; if (i === 5 || i === 6 || i === 13 || i === 31 || i === 26 || i === 27 || i === 3) return t } return null }

    function Ja(t) { var i = t.tag; if (i === 5 || i === 26 || i === 27 || i === 6) return t.stateNode; throw Error(a(33)) }

    function Us(t) { var i = t[lm]; return i || (i = t[lm] = { hoistableStyles: new Map, hoistableScripts: new Map }), i }

    function gt(t) { t[Xa] = !0 } var um = new Set,
        cm = {};

    function Wi(t, i) { Ls(t, i), Ls(t + "Capture", i) }

    function Ls(t, i) { for (cm[t] = i, t = 0; t < i.length; t++) um.add(i[t]) } var ex = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        hm = {},
        dm = {};

    function tx(t) { return Zi.call(dm, t) ? !0 : Zi.call(hm, t) ? !1 : ex.test(t) ? dm[t] = !0 : (hm[t] = !0, !1) }

    function Do(t, i, r) { if (tx(i))
            if (r === null) t.removeAttribute(i);
            else { switch (typeof r) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(i); return;
                    case "boolean":
                        var o = i.toLowerCase().slice(0, 5); if (o !== "data-" && o !== "aria-") { t.removeAttribute(i); return } }
                t.setAttribute(i, "" + r) } }

    function Mo(t, i, r) { if (r === null) t.removeAttribute(i);
        else { switch (typeof r) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(i); return }
            t.setAttribute(i, "" + r) } }

    function Kn(t, i, r, o) { if (o === null) t.removeAttribute(r);
        else { switch (typeof o) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(r); return }
            t.setAttributeNS(i, r, "" + o) } }

    function un(t) { switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return "" } }

    function fm(t) { var i = t.type; return (t = t.nodeName) && t.toLowerCase() === "input" && (i === "checkbox" || i === "radio") }

    function nx(t, i, r) { var o = Object.getOwnPropertyDescriptor(t.constructor.prototype, i); if (!t.hasOwnProperty(i) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") { var h = o.get,
                f = o.set; return Object.defineProperty(t, i, { configurable: !0, get: function() { return h.call(this) }, set: function(v) { r = "" + v, f.call(this, v) } }), Object.defineProperty(t, i, { enumerable: o.enumerable }), { getValue: function() { return r }, setValue: function(v) { r = "" + v }, stopTracking: function() { t._valueTracker = null, delete t[i] } } } }

    function Zu(t) { if (!t._valueTracker) { var i = fm(t) ? "checked" : "value";
            t._valueTracker = nx(t, i, "" + t[i]) } }

    function mm(t) { if (!t) return !1; var i = t._valueTracker; if (!i) return !0; var r = i.getValue(),
            o = ""; return t && (o = fm(t) ? t.checked ? "true" : "false" : t.value), t = o, t !== r ? (i.setValue(t), !0) : !1 }

    function Uo(t) { if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null; try { return t.activeElement || t.body } catch { return t.body } } var ix = /[\n"\\]/g;

    function cn(t) { return t.replace(ix, function(i) { return "\\" + i.charCodeAt(0).toString(16) + " " }) }

    function Qu(t, i, r, o, h, f, v, x) { t.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.type = v : t.removeAttribute("type"), i != null ? v === "number" ? (i === 0 && t.value === "" || t.value != i) && (t.value = "" + un(i)) : t.value !== "" + un(i) && (t.value = "" + un(i)) : v !== "submit" && v !== "reset" || t.removeAttribute("value"), i != null ? Wu(t, v, un(i)) : r != null ? Wu(t, v, un(r)) : o != null && t.removeAttribute("value"), h == null && f != null && (t.defaultChecked = !!f), h != null && (t.checked = h && typeof h != "function" && typeof h != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? t.name = "" + un(x) : t.removeAttribute("name") }

    function pm(t, i, r, o, h, f, v, x) { if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.type = f), i != null || r != null) { if (!(f !== "submit" && f !== "reset" || i != null)) { Zu(t); return }
            r = r != null ? "" + un(r) : "", i = i != null ? "" + un(i) : r, x || i === t.value || (t.value = i), t.defaultValue = i }
        o = o ? ? h, o = typeof o != "function" && typeof o != "symbol" && !!o, t.checked = x ? t.checked : !!o, t.defaultChecked = !!o, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (t.name = v), Zu(t) }

    function Wu(t, i, r) { i === "number" && Uo(t.ownerDocument) === t || t.defaultValue === "" + r || (t.defaultValue = "" + r) }

    function Ps(t, i, r, o) { if (t = t.options, i) { i = {}; for (var h = 0; h < r.length; h++) i["$" + r[h]] = !0; for (r = 0; r < t.length; r++) h = i.hasOwnProperty("$" + t[r].value), t[r].selected !== h && (t[r].selected = h), h && o && (t[r].defaultSelected = !0) } else { for (r = "" + un(r), i = null, h = 0; h < t.length; h++) { if (t[h].value === r) { t[h].selected = !0, o && (t[h].defaultSelected = !0); return }
                i !== null || t[h].disabled || (i = t[h]) }
            i !== null && (i.selected = !0) } }

    function gm(t, i, r) { if (i != null && (i = "" + un(i), i !== t.value && (t.value = i), r == null)) { t.defaultValue !== i && (t.defaultValue = i); return }
        t.defaultValue = r != null ? "" + un(r) : "" }

    function ym(t, i, r, o) { if (i == null) { if (o != null) { if (r != null) throw Error(a(92)); if (bt(o)) { if (1 < o.length) throw Error(a(93));
                    o = o[0] }
                r = o }
            r == null && (r = ""), i = r }
        r = un(i), t.defaultValue = r, o = t.textContent, o === r && o !== "" && o !== null && (t.value = o), Zu(t) }

    function zs(t, i) { if (i) { var r = t.firstChild; if (r && r === t.lastChild && r.nodeType === 3) { r.nodeValue = i; return } }
        t.textContent = i } var sx = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function vm(t, i, r) { var o = i.indexOf("--") === 0;
        r == null || typeof r == "boolean" || r === "" ? o ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "" : o ? t.setProperty(i, r) : typeof r != "number" || r === 0 || sx.has(i) ? i === "float" ? t.cssFloat = r : t[i] = ("" + r).trim() : t[i] = r + "px" }

    function bm(t, i, r) { if (i != null && typeof i != "object") throw Error(a(62)); if (t = t.style, r != null) { for (var o in r) !r.hasOwnProperty(o) || i != null && i.hasOwnProperty(o) || (o.indexOf("--") === 0 ? t.setProperty(o, "") : o === "float" ? t.cssFloat = "" : t[o] = ""); for (var h in i) o = i[h], i.hasOwnProperty(h) && r[h] !== o && vm(t, h, o) } else
            for (var f in i) i.hasOwnProperty(f) && vm(t, f, i[f]) }

    function ec(t) { if (t.indexOf("-") === -1) return !1; switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0 } } var ax = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        rx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Lo(t) { return rx.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t }

    function Yn() {} var tc = null;

    function nc(t) { return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t } var Bs = null,
        Vs = null;

    function wm(t) { var i = Ms(t); if (i && (t = i.stateNode)) { var r = t[Vt] || null;
            e: switch (t = i.stateNode, i.type) {
                case "input":
                    if (Qu(t, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name), i = r.name, r.type === "radio" && i != null) { for (r = t; r.parentNode;) r = r.parentNode; for (r = r.querySelectorAll('input[name="' + cn("" + i) + '"][type="radio"]'), i = 0; i < r.length; i++) { var o = r[i]; if (o !== t && o.form === t.form) { var h = o[Vt] || null; if (!h) throw Error(a(90));
                                Qu(o, h.value, h.defaultValue, h.defaultValue, h.checked, h.defaultChecked, h.type, h.name) } } for (i = 0; i < r.length; i++) o = r[i], o.form === t.form && mm(o) } break e;
                case "textarea":
                    gm(t, r.value, r.defaultValue); break e;
                case "select":
                    i = r.value, i != null && Ps(t, !!r.multiple, i, !1) } } } var ic = !1;

    function xm(t, i, r) { if (ic) return t(i, r);
        ic = !0; try { var o = t(i); return o } finally { if (ic = !1, (Bs !== null || Vs !== null) && (Sl(), Bs && (i = Bs, t = Vs, Vs = Bs = null, wm(i), t)))
                for (i = 0; i < t.length; i++) wm(t[i]) } }

    function Za(t, i) { var r = t.stateNode; if (r === null) return null; var o = r[Vt] || null; if (o === null) return null;
        r = o[i];
        e: switch (i) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (o = !o.disabled) || (t = t.type, o = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !o; break e;
            default:
                t = !1 }
        if (t) return null; if (r && typeof r != "function") throw Error(a(231, i, typeof r)); return r } var Fn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        sc = !1; if (Fn) try { var Qa = {};
        Object.defineProperty(Qa, "passive", { get: function() { sc = !0 } }), window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa) } catch { sc = !1 }
    var wi = null,
        ac = null,
        Po = null;

    function _m() { if (Po) return Po; var t, i = ac,
            r = i.length,
            o, h = "value" in wi ? wi.value : wi.textContent,
            f = h.length; for (t = 0; t < r && i[t] === h[t]; t++); var v = r - t; for (o = 1; o <= v && i[r - o] === h[f - o]; o++); return Po = h.slice(t, 1 < o ? 1 - o : void 0) }

    function zo(t) { var i = t.keyCode; return "charCode" in t ? (t = t.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0 }

    function Bo() { return !0 }

    function Sm() { return !1 }

    function Ht(t) {
        function i(r, o, h, f, v) { this._reactName = r, this._targetInst = h, this.type = o, this.nativeEvent = f, this.target = v, this.currentTarget = null; for (var x in t) t.hasOwnProperty(x) && (r = t[x], this[x] = r ? r(f) : f[x]); return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Bo : Sm, this.isPropagationStopped = Sm, this } return y(i.prototype, { preventDefault: function() { this.defaultPrevented = !0; var r = this.nativeEvent;
                r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Bo) }, stopPropagation: function() { var r = this.nativeEvent;
                r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Bo) }, persist: function() {}, isPersistent: Bo }), i } var es = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) { return t.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
        Vo = Ht(es),
        Wa = y({}, es, { view: 0, detail: 0 }),
        ox = Ht(Wa),
        rc, oc, er, Ho = y({}, Wa, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: uc, button: 0, buttons: 0, relatedTarget: function(t) { return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget }, movementX: function(t) { return "movementX" in t ? t.movementX : (t !== er && (er && t.type === "mousemove" ? (rc = t.screenX - er.screenX, oc = t.screenY - er.screenY) : oc = rc = 0, er = t), rc) }, movementY: function(t) { return "movementY" in t ? t.movementY : oc } }),
        Tm = Ht(Ho),
        lx = y({}, Ho, { dataTransfer: 0 }),
        ux = Ht(lx),
        cx = y({}, Wa, { relatedTarget: 0 }),
        lc = Ht(cx),
        hx = y({}, es, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        dx = Ht(hx),
        fx = y({}, es, { clipboardData: function(t) { return "clipboardData" in t ? t.clipboardData : window.clipboardData } }),
        mx = Ht(fx),
        px = y({}, es, { data: 0 }),
        Em = Ht(px),
        gx = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
        yx = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
        vx = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

    function bx(t) { var i = this.nativeEvent; return i.getModifierState ? i.getModifierState(t) : (t = vx[t]) ? !!i[t] : !1 }

    function uc() { return bx } var wx = y({}, Wa, { key: function(t) { if (t.key) { var i = gx[t.key] || t.key; if (i !== "Unidentified") return i } return t.type === "keypress" ? (t = zo(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? yx[t.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: uc, charCode: function(t) { return t.type === "keypress" ? zo(t) : 0 }, keyCode: function(t) { return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0 }, which: function(t) { return t.type === "keypress" ? zo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0 } }),
        xx = Ht(wx),
        _x = y({}, Ho, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
        Am = Ht(_x),
        Sx = y({}, Wa, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: uc }),
        Tx = Ht(Sx),
        Ex = y({}, es, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Ax = Ht(Ex),
        jx = y({}, Ho, { deltaX: function(t) { return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0 }, deltaY: function(t) { return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
        Cx = Ht(jx),
        Rx = y({}, es, { newState: 0, oldState: 0 }),
        kx = Ht(Rx),
        Ox = [9, 13, 27, 32],
        cc = Fn && "CompositionEvent" in window,
        tr = null;
    Fn && "documentMode" in document && (tr = document.documentMode); var Nx = Fn && "TextEvent" in window && !tr,
        jm = Fn && (!cc || tr && 8 < tr && 11 >= tr),
        Cm = " ",
        Rm = !1;

    function km(t, i) { switch (t) {
            case "keyup":
                return Ox.indexOf(i.keyCode) !== -1;
            case "keydown":
                return i.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1 } }

    function Om(t) { return t = t.detail, typeof t == "object" && "data" in t ? t.data : null } var Hs = !1;

    function Dx(t, i) { switch (t) {
            case "compositionend":
                return Om(i);
            case "keypress":
                return i.which !== 32 ? null : (Rm = !0, Cm);
            case "textInput":
                return t = i.data, t === Cm && Rm ? null : t;
            default:
                return null } }

    function Mx(t, i) { if (Hs) return t === "compositionend" || !cc && km(t, i) ? (t = _m(), Po = ac = wi = null, Hs = !1, t) : null; switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(i.ctrlKey || i.altKey || i.metaKey) || i.ctrlKey && i.altKey) { if (i.char && 1 < i.char.length) return i.char; if (i.which) return String.fromCharCode(i.which) } return null;
            case "compositionend":
                return jm && i.locale !== "ko" ? null : i.data;
            default:
                return null } } var Ux = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

    function Nm(t) { var i = t && t.nodeName && t.nodeName.toLowerCase(); return i === "input" ? !!Ux[t.type] : i === "textarea" }

    function Dm(t, i, r, o) { Bs ? Vs ? Vs.push(o) : Vs = [o] : Bs = o, i = kl(i, "onChange"), 0 < i.length && (r = new Vo("onChange", "change", null, r, o), t.push({ event: r, listeners: i })) } var nr = null,
        ir = null;

    function Lx(t) { py(t, 0) }

    function $o(t) { var i = Ja(t); if (mm(i)) return t }

    function Mm(t, i) { if (t === "change") return i } var Um = !1; if (Fn) { var hc; if (Fn) { var dc = "oninput" in document; if (!dc) { var Lm = document.createElement("div");
                Lm.setAttribute("oninput", "return;"), dc = typeof Lm.oninput == "function" }
            hc = dc } else hc = !1;
        Um = hc && (!document.documentMode || 9 < document.documentMode) }

    function Pm() { nr && (nr.detachEvent("onpropertychange", zm), ir = nr = null) }

    function zm(t) { if (t.propertyName === "value" && $o(ir)) { var i = [];
            Dm(i, ir, t, nc(t)), xm(Lx, i) } }

    function Px(t, i, r) { t === "focusin" ? (Pm(), nr = i, ir = r, nr.attachEvent("onpropertychange", zm)) : t === "focusout" && Pm() }

    function zx(t) { if (t === "selectionchange" || t === "keyup" || t === "keydown") return $o(ir) }

    function Bx(t, i) { if (t === "click") return $o(i) }

    function Vx(t, i) { if (t === "input" || t === "change") return $o(i) }

    function Hx(t, i) { return t === i && (t !== 0 || 1 / t === 1 / i) || t !== t && i !== i } var Jt = typeof Object.is == "function" ? Object.is : Hx;

    function sr(t, i) { if (Jt(t, i)) return !0; if (typeof t != "object" || t === null || typeof i != "object" || i === null) return !1; var r = Object.keys(t),
            o = Object.keys(i); if (r.length !== o.length) return !1; for (o = 0; o < r.length; o++) { var h = r[o]; if (!Zi.call(i, h) || !Jt(t[h], i[h])) return !1 } return !0 }

    function Bm(t) { for (; t && t.firstChild;) t = t.firstChild; return t }

    function Vm(t, i) { var r = Bm(t);
        t = 0; for (var o; r;) { if (r.nodeType === 3) { if (o = t + r.textContent.length, t <= i && o >= i) return { node: r, offset: i - t };
                t = o }
            e: { for (; r;) { if (r.nextSibling) { r = r.nextSibling; break e }
                    r = r.parentNode }
                r = void 0 }
            r = Bm(r) } }

    function Hm(t, i) { return t && i ? t === i ? !0 : t && t.nodeType === 3 ? !1 : i && i.nodeType === 3 ? Hm(t, i.parentNode) : "contains" in t ? t.contains(i) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(i) & 16) : !1 : !1 }

    function $m(t) { t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window; for (var i = Uo(t.document); i instanceof t.HTMLIFrameElement;) { try { var r = typeof i.contentWindow.location.href == "string" } catch { r = !1 } if (r) t = i.contentWindow;
            else break;
            i = Uo(t.document) } return i }

    function fc(t) { var i = t && t.nodeName && t.nodeName.toLowerCase(); return i && (i === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || i === "textarea" || t.contentEditable === "true") } var $x = Fn && "documentMode" in document && 11 >= document.documentMode,
        $s = null,
        mc = null,
        ar = null,
        pc = !1;

    function qm(t, i, r) { var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
        pc || $s == null || $s !== Uo(o) || (o = $s, "selectionStart" in o && fc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ar && sr(ar, o) || (ar = o, o = kl(mc, "onSelect"), 0 < o.length && (i = new Vo("onSelect", "select", null, i, r), t.push({ event: i, listeners: o }), i.target = $s))) }

    function ts(t, i) { var r = {}; return r[t.toLowerCase()] = i.toLowerCase(), r["Webkit" + t] = "webkit" + i, r["Moz" + t] = "moz" + i, r } var qs = { animationend: ts("Animation", "AnimationEnd"), animationiteration: ts("Animation", "AnimationIteration"), animationstart: ts("Animation", "AnimationStart"), transitionrun: ts("Transition", "TransitionRun"), transitionstart: ts("Transition", "TransitionStart"), transitioncancel: ts("Transition", "TransitionCancel"), transitionend: ts("Transition", "TransitionEnd") },
        gc = {},
        Im = {};
    Fn && (Im = document.createElement("div").style, "AnimationEvent" in window || (delete qs.animationend.animation, delete qs.animationiteration.animation, delete qs.animationstart.animation), "TransitionEvent" in window || delete qs.transitionend.transition);

    function ns(t) { if (gc[t]) return gc[t]; if (!qs[t]) return t; var i = qs[t],
            r; for (r in i)
            if (i.hasOwnProperty(r) && r in Im) return gc[t] = i[r];
        return t } var Gm = ns("animationend"),
        Km = ns("animationiteration"),
        Ym = ns("animationstart"),
        qx = ns("transitionrun"),
        Ix = ns("transitionstart"),
        Gx = ns("transitioncancel"),
        Fm = ns("transitionend"),
        Xm = new Map,
        yc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    yc.push("scrollEnd");

    function jn(t, i) { Xm.set(t, i), Wi(i, [t]) } var qo = typeof reportError == "function" ? reportError : function(t) { if (typeof window == "object" && typeof window.ErrorEvent == "function") { var i = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t }); if (!window.dispatchEvent(i)) return } else if (typeof process == "object" && typeof process.emit == "function") { process.emit("uncaughtException", t); return }
            console.error(t) },
        hn = [],
        Is = 0,
        vc = 0;

    function Io() { for (var t = Is, i = vc = Is = 0; i < t;) { var r = hn[i];
            hn[i++] = null; var o = hn[i];
            hn[i++] = null; var h = hn[i];
            hn[i++] = null; var f = hn[i]; if (hn[i++] = null, o !== null && h !== null) { var v = o.pending;
                v === null ? h.next = h : (h.next = v.next, v.next = h), o.pending = h }
            f !== 0 && Jm(r, h, f) } }

    function Go(t, i, r, o) { hn[Is++] = t, hn[Is++] = i, hn[Is++] = r, hn[Is++] = o, vc |= o, t.lanes |= o, t = t.alternate, t !== null && (t.lanes |= o) }

    function bc(t, i, r, o) { return Go(t, i, r, o), Ko(t) }

    function is(t, i) { return Go(t, null, null, i), Ko(t) }

    function Jm(t, i, r) { t.lanes |= r; var o = t.alternate;
        o !== null && (o.lanes |= r); for (var h = !1, f = t.return; f !== null;) f.childLanes |= r, o = f.alternate, o !== null && (o.childLanes |= r), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & 1 || (h = !0)), t = f, f = f.return; return t.tag === 3 ? (f = t.stateNode, h && i !== null && (h = 31 - K(r), t = f.hiddenUpdates, o = t[h], o === null ? t[h] = [i] : o.push(i), i.lane = r | 536870912), f) : null }

    function Ko(t) { if (50 < jr) throw jr = 0, Ch = null, Error(a(185)); for (var i = t.return; i !== null;) t = i, i = t.return; return t.tag === 3 ? t.stateNode : null } var Gs = {};

    function Kx(t, i, r, o) { this.tag = t, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

    function Zt(t, i, r, o) { return new Kx(t, i, r, o) }

    function wc(t) { return t = t.prototype, !(!t || !t.isReactComponent) }

    function Xn(t, i) { var r = t.alternate; return r === null ? (r = Zt(t.tag, i, t.key, t.mode), r.elementType = t.elementType, r.type = t.type, r.stateNode = t.stateNode, r.alternate = t, t.alternate = r) : (r.pendingProps = i, r.type = t.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = t.flags & 65011712, r.childLanes = t.childLanes, r.lanes = t.lanes, r.child = t.child, r.memoizedProps = t.memoizedProps, r.memoizedState = t.memoizedState, r.updateQueue = t.updateQueue, i = t.dependencies, r.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, r.sibling = t.sibling, r.index = t.index, r.ref = t.ref, r.refCleanup = t.refCleanup, r }

    function Zm(t, i) { t.flags &= 65011714; var r = t.alternate; return r === null ? (t.childLanes = 0, t.lanes = i, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = r.childLanes, t.lanes = r.lanes, t.child = r.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = r.memoizedProps, t.memoizedState = r.memoizedState, t.updateQueue = r.updateQueue, t.type = r.type, i = r.dependencies, t.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }), t }

    function Yo(t, i, r, o, h, f) { var v = 0; if (o = t, typeof t == "function") wc(t) && (v = 1);
        else if (typeof t == "string") v = Z_(t, r, se.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else e: switch (t) {
            case oe:
                return t = Zt(31, r, i, h), t.elementType = oe, t.lanes = f, t;
            case A:
                return ss(r.children, h, f, i);
            case k:
                v = 8, h |= 24; break;
            case R:
                return t = Zt(12, r, i, h | 2), t.elementType = R, t.lanes = f, t;
            case J:
                return t = Zt(13, r, i, h), t.elementType = J, t.lanes = f, t;
            case Z:
                return t = Zt(19, r, i, h), t.elementType = Z, t.lanes = f, t;
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case E:
                        v = 10; break e;
                    case L:
                        v = 9; break e;
                    case G:
                        v = 11; break e;
                    case F:
                        v = 14; break e;
                    case te:
                        v = 16, o = null; break e }
                v = 29, r = Error(a(130, t === null ? "null" : typeof t, "")), o = null }
        return i = Zt(v, r, i, h), i.elementType = t, i.type = o, i.lanes = f, i }

    function ss(t, i, r, o) { return t = Zt(7, t, o, i), t.lanes = r, t }

    function xc(t, i, r) { return t = Zt(6, t, null, i), t.lanes = r, t }

    function Qm(t) { var i = Zt(18, null, null, 0); return i.stateNode = t, i }

    function _c(t, i, r) { return i = Zt(4, t.children !== null ? t.children : [], t.key, i), i.lanes = r, i.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, i } var Wm = new WeakMap;

    function dn(t, i) { if (typeof t == "object" && t !== null) { var r = Wm.get(t); return r !== void 0 ? r : (i = { value: t, source: i, stack: ks(i) }, Wm.set(t, i), i) } return { value: t, source: i, stack: ks(i) } } var Ks = [],
        Ys = 0,
        Fo = null,
        rr = 0,
        fn = [],
        mn = 0,
        xi = null,
        Un = 1,
        Ln = "";

    function Jn(t, i) { Ks[Ys++] = rr, Ks[Ys++] = Fo, Fo = t, rr = i }

    function ep(t, i, r) { fn[mn++] = Un, fn[mn++] = Ln, fn[mn++] = xi, xi = t; var o = Un;
        t = Ln; var h = 32 - K(o) - 1;
        o &= ~(1 << h), r += 1; var f = 32 - K(i) + h; if (30 < f) { var v = h - h % 5;
            f = (o & (1 << v) - 1).toString(32), o >>= v, h -= v, Un = 1 << 32 - K(i) + h | r << h | o, Ln = f + t } else Un = 1 << f | r << h | o, Ln = t }

    function Sc(t) { t.return !== null && (Jn(t, 1), ep(t, 1, 0)) }

    function Tc(t) { for (; t === Fo;) Fo = Ks[--Ys], Ks[Ys] = null, rr = Ks[--Ys], Ks[Ys] = null; for (; t === xi;) xi = fn[--mn], fn[mn] = null, Ln = fn[--mn], fn[mn] = null, Un = fn[--mn], fn[mn] = null }

    function tp(t, i) { fn[mn++] = Un, fn[mn++] = Ln, fn[mn++] = xi, Un = i.id, Ln = i.overflow, xi = t } var St = null,
        Ge = null,
        Ae = !1,
        _i = null,
        pn = !1,
        Ec = Error(a(519));

    function Si(t) { var i = Error(a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")); throw or(dn(i, t)), Ec }

    function np(t) { var i = t.stateNode,
            r = t.type,
            o = t.memoizedProps; switch (i[_t] = t, i[Vt] = o, r) {
            case "dialog":
                _e("cancel", i), _e("close", i); break;
            case "iframe":
            case "object":
            case "embed":
                _e("load", i); break;
            case "video":
            case "audio":
                for (r = 0; r < Rr.length; r++) _e(Rr[r], i); break;
            case "source":
                _e("error", i); break;
            case "img":
            case "image":
            case "link":
                _e("error", i), _e("load", i); break;
            case "details":
                _e("toggle", i); break;
            case "input":
                _e("invalid", i), pm(i, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0); break;
            case "select":
                _e("invalid", i); break;
            case "textarea":
                _e("invalid", i), ym(i, o.value, o.defaultValue, o.children) }
        r = o.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || i.textContent === "" + r || o.suppressHydrationWarning === !0 || by(i.textContent, r) ? (o.popover != null && (_e("beforetoggle", i), _e("toggle", i)), o.onScroll != null && _e("scroll", i), o.onScrollEnd != null && _e("scrollend", i), o.onClick != null && (i.onclick = Yn), i = !0) : i = !1, i || Si(t, !0) }

    function ip(t) { for (St = t.return; St;) switch (St.tag) {
            case 5:
            case 31:
            case 13:
                pn = !1; return;
            case 27:
            case 3:
                pn = !0; return;
            default:
                St = St.return } }

    function Fs(t) { if (t !== St) return !1; if (!Ae) return ip(t), Ae = !0, !1; var i = t.tag,
            r; if ((r = i !== 3 && i !== 27) && ((r = i === 5) && (r = t.type, r = !(r !== "form" && r !== "button") || qh(t.type, t.memoizedProps)), r = !r), r && Ge && Si(t), ip(t), i === 13) { if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(a(317));
            Ge = Cy(t) } else if (i === 31) { if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(a(317));
            Ge = Cy(t) } else i === 27 ? (i = Ge, Pi(t.type) ? (t = Fh, Fh = null, Ge = t) : Ge = i) : Ge = St ? yn(t.stateNode.nextSibling) : null; return !0 }

    function as() { Ge = St = null, Ae = !1 }

    function Ac() { var t = _i; return t !== null && (Gt === null ? Gt = t : Gt.push.apply(Gt, t), _i = null), t }

    function or(t) { _i === null ? _i = [t] : _i.push(t) } var jc = C(null),
        rs = null,
        Zn = null;

    function Ti(t, i, r) { Q(jc, i._currentValue), i._currentValue = r }

    function Qn(t) { t._currentValue = jc.current, V(jc) }

    function Cc(t, i, r) { for (; t !== null;) { var o = t.alternate; if ((t.childLanes & i) !== i ? (t.childLanes |= i, o !== null && (o.childLanes |= i)) : o !== null && (o.childLanes & i) !== i && (o.childLanes |= i), t === r) break;
            t = t.return } }

    function Rc(t, i, r, o) { var h = t.child; for (h !== null && (h.return = t); h !== null;) { var f = h.dependencies; if (f !== null) { var v = h.child;
                f = f.firstContext;
                e: for (; f !== null;) { var x = f;
                    f = h; for (var T = 0; T < i.length; T++)
                        if (x.context === i[T]) { f.lanes |= r, x = f.alternate, x !== null && (x.lanes |= r), Cc(f.return, r, t), o || (v = null); break e }
                    f = x.next } } else if (h.tag === 18) { if (v = h.return, v === null) throw Error(a(341));
                v.lanes |= r, f = v.alternate, f !== null && (f.lanes |= r), Cc(v, r, t), v = null } else v = h.child; if (v !== null) v.return = h;
            else
                for (v = h; v !== null;) { if (v === t) { v = null; break } if (h = v.sibling, h !== null) { h.return = v.return, v = h; break }
                    v = v.return }
            h = v } }

    function Xs(t, i, r, o) { t = null; for (var h = i, f = !1; h !== null;) { if (!f) { if ((h.flags & 524288) !== 0) f = !0;
                else if ((h.flags & 262144) !== 0) break } if (h.tag === 10) { var v = h.alternate; if (v === null) throw Error(a(387)); if (v = v.memoizedProps, v !== null) { var x = h.type;
                    Jt(h.pendingProps.value, v.value) || (t !== null ? t.push(x) : t = [x]) } } else if (h === Re.current) { if (v = h.alternate, v === null) throw Error(a(387));
                v.memoizedState.memoizedState !== h.memoizedState.memoizedState && (t !== null ? t.push(Mr) : t = [Mr]) }
            h = h.return }
        t !== null && Rc(i, t, r, o), i.flags |= 262144 }

    function Xo(t) { for (t = t.firstContext; t !== null;) { if (!Jt(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next } return !1 }

    function os(t) { rs = t, Zn = null, t = t.dependencies, t !== null && (t.firstContext = null) }

    function Tt(t) { return sp(rs, t) }

    function Jo(t, i) { return rs === null && os(t), sp(t, i) }

    function sp(t, i) { var r = i._currentValue; if (i = { context: i, memoizedValue: r, next: null }, Zn === null) { if (t === null) throw Error(a(308));
            Zn = i, t.dependencies = { lanes: 0, firstContext: i }, t.flags |= 524288 } else Zn = Zn.next = i; return r } var Yx = typeof AbortController < "u" ? AbortController : function() { var t = [],
                i = this.signal = { aborted: !1, addEventListener: function(r, o) { t.push(o) } };
            this.abort = function() { i.aborted = !0, t.forEach(function(r) { return r() }) } },
        Fx = n.unstable_scheduleCallback,
        Xx = n.unstable_NormalPriority,
        ot = { $$typeof: E, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };

    function kc() { return { controller: new Yx, data: new Map, refCount: 0 } }

    function lr(t) { t.refCount--, t.refCount === 0 && Fx(Xx, function() { t.controller.abort() }) } var ur = null,
        Oc = 0,
        Js = 0,
        Zs = null;

    function Jx(t, i) { if (ur === null) { var r = ur = [];
            Oc = 0, Js = Mh(), Zs = { status: "pending", value: void 0, then: function(o) { r.push(o) } } } return Oc++, i.then(ap, ap), i }

    function ap() { if (--Oc === 0 && ur !== null) { Zs !== null && (Zs.status = "fulfilled"); var t = ur;
            ur = null, Js = 0, Zs = null; for (var i = 0; i < t.length; i++)(0, t[i])() } }

    function Zx(t, i) { var r = [],
            o = { status: "pending", value: null, reason: null, then: function(h) { r.push(h) } }; return t.then(function() { o.status = "fulfilled", o.value = i; for (var h = 0; h < r.length; h++)(0, r[h])(i) }, function(h) { for (o.status = "rejected", o.reason = h, h = 0; h < r.length; h++)(0, r[h])(void 0) }), o } var rp = H.S;
    H.S = function(t, i) { qg = Ut(), typeof i == "object" && i !== null && typeof i.then == "function" && Jx(t, i), rp !== null && rp(t, i) }; var ls = C(null);

    function Nc() { var t = ls.current; return t !== null ? t : $e.pooledCache }

    function Zo(t, i) { i === null ? Q(ls, ls.current) : Q(ls, i.pool) }

    function op() { var t = Nc(); return t === null ? null : { parent: ot._currentValue, pool: t } } var Qs = Error(a(460)),
        Dc = Error(a(474)),
        Qo = Error(a(542)),
        Wo = { then: function() {} };

    function lp(t) { return t = t.status, t === "fulfilled" || t === "rejected" }

    function up(t, i, r) { switch (r = t[r], r === void 0 ? t.push(i) : r !== i && (i.then(Yn, Yn), i = r), i.status) {
            case "fulfilled":
                return i.value;
            case "rejected":
                throw t = i.reason, hp(t), t;
            default:
                if (typeof i.status == "string") i.then(Yn, Yn);
                else { if (t = $e, t !== null && 100 < t.shellSuspendCounter) throw Error(a(482));
                    t = i, t.status = "pending", t.then(function(o) { if (i.status === "pending") { var h = i;
                            h.status = "fulfilled", h.value = o } }, function(o) { if (i.status === "pending") { var h = i;
                            h.status = "rejected", h.reason = o } }) } switch (i.status) {
                    case "fulfilled":
                        return i.value;
                    case "rejected":
                        throw t = i.reason, hp(t), t } throw cs = i, Qs } }

    function us(t) { try { var i = t._init; return i(t._payload) } catch (r) { throw r !== null && typeof r == "object" && typeof r.then == "function" ? (cs = r, Qs) : r } } var cs = null;

    function cp() { if (cs === null) throw Error(a(459)); var t = cs; return cs = null, t }

    function hp(t) { if (t === Qs || t === Qo) throw Error(a(483)) } var Ws = null,
        cr = 0;

    function el(t) { var i = cr; return cr += 1, Ws === null && (Ws = []), up(Ws, t, i) }

    function hr(t, i) { i = i.props.ref, t.ref = i !== void 0 ? i : null }

    function tl(t, i) { throw i.$$typeof === w ? Error(a(525)) : (t = Object.prototype.toString.call(i), Error(a(31, t === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : t))) }

    function dp(t) {
        function i(N, j) { if (t) { var M = N.deletions;
                M === null ? (N.deletions = [j], N.flags |= 16) : M.push(j) } }

        function r(N, j) { if (!t) return null; for (; j !== null;) i(N, j), j = j.sibling; return null }

        function o(N) { for (var j = new Map; N !== null;) N.key !== null ? j.set(N.key, N) : j.set(N.index, N), N = N.sibling; return j }

        function h(N, j) { return N = Xn(N, j), N.index = 0, N.sibling = null, N }

        function f(N, j, M) { return N.index = M, t ? (M = N.alternate, M !== null ? (M = M.index, M < j ? (N.flags |= 67108866, j) : M) : (N.flags |= 67108866, j)) : (N.flags |= 1048576, j) }

        function v(N) { return t && N.alternate === null && (N.flags |= 67108866), N }

        function x(N, j, M, q) { return j === null || j.tag !== 6 ? (j = xc(M, N.mode, q), j.return = N, j) : (j = h(j, M), j.return = N, j) }

        function T(N, j, M, q) { var le = M.type; return le === A ? $(N, j, M.props.children, q, M.key) : j !== null && (j.elementType === le || typeof le == "object" && le !== null && le.$$typeof === te && us(le) === j.type) ? (j = h(j, M.props), hr(j, M), j.return = N, j) : (j = Yo(M.type, M.key, M.props, null, N.mode, q), hr(j, M), j.return = N, j) }

        function U(N, j, M, q) { return j === null || j.tag !== 4 || j.stateNode.containerInfo !== M.containerInfo || j.stateNode.implementation !== M.implementation ? (j = _c(M, N.mode, q), j.return = N, j) : (j = h(j, M.children || []), j.return = N, j) }

        function $(N, j, M, q, le) { return j === null || j.tag !== 7 ? (j = ss(M, N.mode, q, le), j.return = N, j) : (j = h(j, M), j.return = N, j) }

        function I(N, j, M) { if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return j = xc("" + j, N.mode, M), j.return = N, j; if (typeof j == "object" && j !== null) { switch (j.$$typeof) {
                    case _:
                        return M = Yo(j.type, j.key, j.props, null, N.mode, M), hr(M, j), M.return = N, M;
                    case S:
                        return j = _c(j, N.mode, M), j.return = N, j;
                    case te:
                        return j = us(j), I(N, j, M) } if (bt(j) || Qe(j)) return j = ss(j, N.mode, M, null), j.return = N, j; if (typeof j.then == "function") return I(N, el(j), M); if (j.$$typeof === E) return I(N, Jo(N, j), M);
                tl(N, j) } return null }

        function P(N, j, M, q) { var le = j !== null ? j.key : null; if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return le !== null ? null : x(N, j, "" + M, q); if (typeof M == "object" && M !== null) { switch (M.$$typeof) {
                    case _:
                        return M.key === le ? T(N, j, M, q) : null;
                    case S:
                        return M.key === le ? U(N, j, M, q) : null;
                    case te:
                        return M = us(M), P(N, j, M, q) } if (bt(M) || Qe(M)) return le !== null ? null : $(N, j, M, q, null); if (typeof M.then == "function") return P(N, j, el(M), q); if (M.$$typeof === E) return P(N, j, Jo(N, M), q);
                tl(N, M) } return null }

        function z(N, j, M, q, le) { if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return N = N.get(M) || null, x(j, N, "" + q, le); if (typeof q == "object" && q !== null) { switch (q.$$typeof) {
                    case _:
                        return N = N.get(q.key === null ? M : q.key) || null, T(j, N, q, le);
                    case S:
                        return N = N.get(q.key === null ? M : q.key) || null, U(j, N, q, le);
                    case te:
                        return q = us(q), z(N, j, M, q, le) } if (bt(q) || Qe(q)) return N = N.get(M) || null, $(j, N, q, le, null); if (typeof q.then == "function") return z(N, j, M, el(q), le); if (q.$$typeof === E) return z(N, j, M, Jo(j, q), le);
                tl(j, q) } return null }

        function ie(N, j, M, q) { for (var le = null, ke = null, re = j, ve = j = 0, Ee = null; re !== null && ve < M.length; ve++) { re.index > ve ? (Ee = re, re = null) : Ee = re.sibling; var Oe = P(N, re, M[ve], q); if (Oe === null) { re === null && (re = Ee); break }
                t && re && Oe.alternate === null && i(N, re), j = f(Oe, j, ve), ke === null ? le = Oe : ke.sibling = Oe, ke = Oe, re = Ee } if (ve === M.length) return r(N, re), Ae && Jn(N, ve), le; if (re === null) { for (; ve < M.length; ve++) re = I(N, M[ve], q), re !== null && (j = f(re, j, ve), ke === null ? le = re : ke.sibling = re, ke = re); return Ae && Jn(N, ve), le } for (re = o(re); ve < M.length; ve++) Ee = z(re, N, ve, M[ve], q), Ee !== null && (t && Ee.alternate !== null && re.delete(Ee.key === null ? ve : Ee.key), j = f(Ee, j, ve), ke === null ? le = Ee : ke.sibling = Ee, ke = Ee); return t && re.forEach(function($i) { return i(N, $i) }), Ae && Jn(N, ve), le }

        function ue(N, j, M, q) { if (M == null) throw Error(a(151)); for (var le = null, ke = null, re = j, ve = j = 0, Ee = null, Oe = M.next(); re !== null && !Oe.done; ve++, Oe = M.next()) { re.index > ve ? (Ee = re, re = null) : Ee = re.sibling; var $i = P(N, re, Oe.value, q); if ($i === null) { re === null && (re = Ee); break }
                t && re && $i.alternate === null && i(N, re), j = f($i, j, ve), ke === null ? le = $i : ke.sibling = $i, ke = $i, re = Ee } if (Oe.done) return r(N, re), Ae && Jn(N, ve), le; if (re === null) { for (; !Oe.done; ve++, Oe = M.next()) Oe = I(N, Oe.value, q), Oe !== null && (j = f(Oe, j, ve), ke === null ? le = Oe : ke.sibling = Oe, ke = Oe); return Ae && Jn(N, ve), le } for (re = o(re); !Oe.done; ve++, Oe = M.next()) Oe = z(re, N, ve, Oe.value, q), Oe !== null && (t && Oe.alternate !== null && re.delete(Oe.key === null ? ve : Oe.key), j = f(Oe, j, ve), ke === null ? le = Oe : ke.sibling = Oe, ke = Oe); return t && re.forEach(function(lS) { return i(N, lS) }), Ae && Jn(N, ve), le }

        function Be(N, j, M, q) { if (typeof M == "object" && M !== null && M.type === A && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) { switch (M.$$typeof) {
                    case _:
                        e: { for (var le = M.key; j !== null;) { if (j.key === le) { if (le = M.type, le === A) { if (j.tag === 7) { r(N, j.sibling), q = h(j, M.props.children), q.return = N, N = q; break e } } else if (j.elementType === le || typeof le == "object" && le !== null && le.$$typeof === te && us(le) === j.type) { r(N, j.sibling), q = h(j, M.props), hr(q, M), q.return = N, N = q; break e }
                                    r(N, j); break } else i(N, j);
                                j = j.sibling }
                            M.type === A ? (q = ss(M.props.children, N.mode, q, M.key), q.return = N, N = q) : (q = Yo(M.type, M.key, M.props, null, N.mode, q), hr(q, M), q.return = N, N = q) }
                        return v(N);
                    case S:
                        e: { for (le = M.key; j !== null;) { if (j.key === le)
                                    if (j.tag === 4 && j.stateNode.containerInfo === M.containerInfo && j.stateNode.implementation === M.implementation) { r(N, j.sibling), q = h(j, M.children || []), q.return = N, N = q; break e } else { r(N, j); break }
                                else i(N, j);
                                j = j.sibling }
                            q = _c(M, N.mode, q), q.return = N, N = q }
                        return v(N);
                    case te:
                        return M = us(M), Be(N, j, M, q) } if (bt(M)) return ie(N, j, M, q); if (Qe(M)) { if (le = Qe(M), typeof le != "function") throw Error(a(150)); return M = le.call(M), ue(N, j, M, q) } if (typeof M.then == "function") return Be(N, j, el(M), q); if (M.$$typeof === E) return Be(N, j, Jo(N, M), q);
                tl(N, M) } return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, j !== null && j.tag === 6 ? (r(N, j.sibling), q = h(j, M), q.return = N, N = q) : (r(N, j), q = xc(M, N.mode, q), q.return = N, N = q), v(N)) : r(N, j) } return function(N, j, M, q) { try { cr = 0; var le = Be(N, j, M, q); return Ws = null, le } catch (re) { if (re === Qs || re === Qo) throw re; var ke = Zt(29, re, null, N.mode); return ke.lanes = q, ke.return = N, ke } finally {} } } var hs = dp(!0),
        fp = dp(!1),
        Ei = !1;

    function Mc(t) { t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null } }

    function Uc(t, i) { t = t.updateQueue, i.updateQueue === t && (i.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null }) }

    function Ai(t) { return { lane: t, tag: 0, payload: null, callback: null, next: null } }

    function ji(t, i, r) { var o = t.updateQueue; if (o === null) return null; if (o = o.shared, (De & 2) !== 0) { var h = o.pending; return h === null ? i.next = i : (i.next = h.next, h.next = i), o.pending = i, i = Ko(t), Jm(t, null, r), i } return Go(t, o, i, r), Ko(t) }

    function dr(t, i, r) { if (i = i.updateQueue, i !== null && (i = i.shared, (r & 4194048) !== 0)) { var o = i.lanes;
            o &= t.pendingLanes, r |= o, i.lanes = r, ee(t, r) } }

    function Lc(t, i) { var r = t.updateQueue,
            o = t.alternate; if (o !== null && (o = o.updateQueue, r === o)) { var h = null,
                f = null; if (r = r.firstBaseUpdate, r !== null) { do { var v = { lane: r.lane, tag: r.tag, payload: r.payload, callback: null, next: null };
                    f === null ? h = f = v : f = f.next = v, r = r.next } while (r !== null);
                f === null ? h = f = i : f = f.next = i } else h = f = i;
            r = { baseState: o.baseState, firstBaseUpdate: h, lastBaseUpdate: f, shared: o.shared, callbacks: o.callbacks }, t.updateQueue = r; return }
        t = r.lastBaseUpdate, t === null ? r.firstBaseUpdate = i : t.next = i, r.lastBaseUpdate = i } var Pc = !1;

    function fr() { if (Pc) { var t = Zs; if (t !== null) throw t } }

    function mr(t, i, r, o) { Pc = !1; var h = t.updateQueue;
        Ei = !1; var f = h.firstBaseUpdate,
            v = h.lastBaseUpdate,
            x = h.shared.pending; if (x !== null) { h.shared.pending = null; var T = x,
                U = T.next;
            T.next = null, v === null ? f = U : v.next = U, v = T; var $ = t.alternate;
            $ !== null && ($ = $.updateQueue, x = $.lastBaseUpdate, x !== v && (x === null ? $.firstBaseUpdate = U : x.next = U, $.lastBaseUpdate = T)) } if (f !== null) { var I = h.baseState;
            v = 0, $ = U = T = null, x = f;
            do { var P = x.lane & -536870913,
                    z = P !== x.lane; if (z ? (Te & P) === P : (o & P) === P) { P !== 0 && P === Js && (Pc = !0), $ !== null && ($ = $.next = { lane: 0, tag: x.tag, payload: x.payload, callback: null, next: null });
                    e: { var ie = t,
                            ue = x;P = i; var Be = r; switch (ue.tag) {
                            case 1:
                                if (ie = ue.payload, typeof ie == "function") { I = ie.call(Be, I, P); break e }
                                I = ie; break e;
                            case 3:
                                ie.flags = ie.flags & -65537 | 128;
                            case 0:
                                if (ie = ue.payload, P = typeof ie == "function" ? ie.call(Be, I, P) : ie, P == null) break e;
                                I = y({}, I, P); break e;
                            case 2:
                                Ei = !0 } }
                    P = x.callback, P !== null && (t.flags |= 64, z && (t.flags |= 8192), z = h.callbacks, z === null ? h.callbacks = [P] : z.push(P)) } else z = { lane: P, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, $ === null ? (U = $ = z, T = I) : $ = $.next = z, v |= P; if (x = x.next, x === null) { if (x = h.shared.pending, x === null) break;
                    z = x, x = z.next, z.next = null, h.lastBaseUpdate = z, h.shared.pending = null } } while (!0);
            $ === null && (T = I), h.baseState = T, h.firstBaseUpdate = U, h.lastBaseUpdate = $, f === null && (h.shared.lanes = 0), Ni |= v, t.lanes = v, t.memoizedState = I } }

    function mp(t, i) { if (typeof t != "function") throw Error(a(191, t));
        t.call(i) }

    function pp(t, i) { var r = t.callbacks; if (r !== null)
            for (t.callbacks = null, t = 0; t < r.length; t++) mp(r[t], i) } var ea = C(null),
        nl = C(0);

    function gp(t, i) { t = oi, Q(nl, t), Q(ea, i), oi = t | i.baseLanes }

    function zc() { Q(nl, oi), Q(ea, ea.current) }

    function Bc() { oi = nl.current, V(ea), V(nl) } var Qt = C(null),
        gn = null;

    function Ci(t) { var i = t.alternate;
        Q(st, st.current & 1), Q(Qt, t), gn === null && (i === null || ea.current !== null || i.memoizedState !== null) && (gn = t) }

    function Vc(t) { Q(st, st.current), Q(Qt, t), gn === null && (gn = t) }

    function yp(t) { t.tag === 22 ? (Q(st, st.current), Q(Qt, t), gn === null && (gn = t)) : Ri() }

    function Ri() { Q(st, st.current), Q(Qt, Qt.current) }

    function Wt(t) { V(Qt), gn === t && (gn = null), V(st) } var st = C(0);

    function il(t) { for (var i = t; i !== null;) { if (i.tag === 13) { var r = i.memoizedState; if (r !== null && (r = r.dehydrated, r === null || Kh(r) || Yh(r))) return i } else if (i.tag === 19 && (i.memoizedProps.revealOrder === "forwards" || i.memoizedProps.revealOrder === "backwards" || i.memoizedProps.revealOrder === "unstable_legacy-backwards" || i.memoizedProps.revealOrder === "together")) { if ((i.flags & 128) !== 0) return i } else if (i.child !== null) { i.child.return = i, i = i.child; continue } if (i === t) break; for (; i.sibling === null;) { if (i.return === null || i.return === t) return null;
                i = i.return }
            i.sibling.return = i.return, i = i.sibling } return null } var Wn = 0,
        ye = null,
        Pe = null,
        lt = null,
        sl = !1,
        ta = !1,
        ds = !1,
        al = 0,
        pr = 0,
        na = null,
        Qx = 0;

    function We() { throw Error(a(321)) }

    function Hc(t, i) { if (i === null) return !1; for (var r = 0; r < i.length && r < t.length; r++)
            if (!Jt(t[r], i[r])) return !1;
        return !0 }

    function $c(t, i, r, o, h, f) { return Wn = f, ye = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, H.H = t === null || t.memoizedState === null ? eg : ih, ds = !1, f = r(o, h), ds = !1, ta && (f = bp(i, r, o, h)), vp(t), f }

    function vp(t) { H.H = vr; var i = Pe !== null && Pe.next !== null; if (Wn = 0, lt = Pe = ye = null, sl = !1, pr = 0, na = null, i) throw Error(a(300));
        t === null || ut || (t = t.dependencies, t !== null && Xo(t) && (ut = !0)) }

    function bp(t, i, r, o) { ye = t; var h = 0;
        do { if (ta && (na = null), pr = 0, ta = !1, 25 <= h) throw Error(a(301)); if (h += 1, lt = Pe = null, t.updateQueue != null) { var f = t.updateQueue;
                f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0) }
            H.H = tg, f = i(r, o) } while (ta); return f }

    function Wx() { var t = H.H,
            i = t.useState()[0]; return i = typeof i.then == "function" ? gr(i) : i, t = t.useState()[0], (Pe !== null ? Pe.memoizedState : null) !== t && (ye.flags |= 1024), i }

    function qc() { var t = al !== 0; return al = 0, t }

    function Ic(t, i, r) { i.updateQueue = t.updateQueue, i.flags &= -2053, t.lanes &= ~r }

    function Gc(t) { if (sl) { for (t = t.memoizedState; t !== null;) { var i = t.queue;
                i !== null && (i.pending = null), t = t.next }
            sl = !1 }
        Wn = 0, lt = Pe = ye = null, ta = !1, pr = al = 0, na = null }

    function Lt() { var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return lt === null ? ye.memoizedState = lt = t : lt = lt.next = t, lt }

    function at() { if (Pe === null) { var t = ye.alternate;
            t = t !== null ? t.memoizedState : null } else t = Pe.next; var i = lt === null ? ye.memoizedState : lt.next; if (i !== null) lt = i, Pe = t;
        else { if (t === null) throw ye.alternate === null ? Error(a(467)) : Error(a(310));
            Pe = t, t = { memoizedState: Pe.memoizedState, baseState: Pe.baseState, baseQueue: Pe.baseQueue, queue: Pe.queue, next: null }, lt === null ? ye.memoizedState = lt = t : lt = lt.next = t } return lt }

    function rl() { return { lastEffect: null, events: null, stores: null, memoCache: null } }

    function gr(t) { var i = pr; return pr += 1, na === null && (na = []), t = up(na, t, i), i = ye, (lt === null ? i.memoizedState : lt.next) === null && (i = i.alternate, H.H = i === null || i.memoizedState === null ? eg : ih), t }

    function ol(t) { if (t !== null && typeof t == "object") { if (typeof t.then == "function") return gr(t); if (t.$$typeof === E) return Tt(t) } throw Error(a(438, String(t))) }

    function Kc(t) { var i = null,
            r = ye.updateQueue; if (r !== null && (i = r.memoCache), i == null) { var o = ye.alternate;
            o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (i = { data: o.data.map(function(h) { return h.slice() }), index: 0 }))) } if (i == null && (i = { data: [], index: 0 }), r === null && (r = rl(), ye.updateQueue = r), r.memoCache = i, r = i.data[i.index], r === void 0)
            for (r = i.data[i.index] = Array(t), o = 0; o < t; o++) r[o] = je; return i.index++, r }

    function ei(t, i) { return typeof i == "function" ? i(t) : i }

    function ll(t) { var i = at(); return Yc(i, Pe, t) }

    function Yc(t, i, r) { var o = t.queue; if (o === null) throw Error(a(311));
        o.lastRenderedReducer = r; var h = t.baseQueue,
            f = o.pending; if (f !== null) { if (h !== null) { var v = h.next;
                h.next = f.next, f.next = v }
            i.baseQueue = h = f, o.pending = null } if (f = t.baseState, h === null) t.memoizedState = f;
        else { i = h.next; var x = v = null,
                T = null,
                U = i,
                $ = !1;
            do { var I = U.lane & -536870913; if (I !== U.lane ? (Te & I) === I : (Wn & I) === I) { var P = U.revertLane; if (P === 0) T !== null && (T = T.next = { lane: 0, revertLane: 0, gesture: null, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), I === Js && ($ = !0);
                    else if ((Wn & P) === P) { U = U.next, P === Js && ($ = !0); continue } else I = { lane: 0, revertLane: U.revertLane, gesture: null, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }, T === null ? (x = T = I, v = f) : T = T.next = I, ye.lanes |= P, Ni |= P;
                    I = U.action, ds && r(f, I), f = U.hasEagerState ? U.eagerState : r(f, I) } else P = { lane: I, revertLane: U.revertLane, gesture: U.gesture, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }, T === null ? (x = T = P, v = f) : T = T.next = P, ye.lanes |= I, Ni |= I;
                U = U.next } while (U !== null && U !== i); if (T === null ? v = f : T.next = x, !Jt(f, t.memoizedState) && (ut = !0, $ && (r = Zs, r !== null))) throw r;
            t.memoizedState = f, t.baseState = v, t.baseQueue = T, o.lastRenderedState = f } return h === null && (o.lanes = 0), [t.memoizedState, o.dispatch] }

    function Fc(t) { var i = at(),
            r = i.queue; if (r === null) throw Error(a(311));
        r.lastRenderedReducer = t; var o = r.dispatch,
            h = r.pending,
            f = i.memoizedState; if (h !== null) { r.pending = null; var v = h = h.next;
            do f = t(f, v.action), v = v.next; while (v !== h);
            Jt(f, i.memoizedState) || (ut = !0), i.memoizedState = f, i.baseQueue === null && (i.baseState = f), r.lastRenderedState = f } return [f, o] }

    function wp(t, i, r) { var o = ye,
            h = at(),
            f = Ae; if (f) { if (r === void 0) throw Error(a(407));
            r = r() } else r = i(); var v = !Jt((Pe || h).memoizedState, r); if (v && (h.memoizedState = r, ut = !0), h = h.queue, Zc(Sp.bind(null, o, h, t), [t]), h.getSnapshot !== i || v || lt !== null && lt.memoizedState.tag & 1) { if (o.flags |= 2048, ia(9, { destroy: void 0 }, _p.bind(null, o, h, r, i), null), $e === null) throw Error(a(349));
            f || (Wn & 127) !== 0 || xp(o, i, r) } return r }

    function xp(t, i, r) { t.flags |= 16384, t = { getSnapshot: i, value: r }, i = ye.updateQueue, i === null ? (i = rl(), ye.updateQueue = i, i.stores = [t]) : (r = i.stores, r === null ? i.stores = [t] : r.push(t)) }

    function _p(t, i, r, o) { i.value = r, i.getSnapshot = o, Tp(i) && Ep(t) }

    function Sp(t, i, r) { return r(function() { Tp(i) && Ep(t) }) }

    function Tp(t) { var i = t.getSnapshot;
        t = t.value; try { var r = i(); return !Jt(t, r) } catch { return !0 } }

    function Ep(t) { var i = is(t, 2);
        i !== null && Kt(i, t, 2) }

    function Xc(t) { var i = Lt(); if (typeof t == "function") { var r = t; if (t = r(), ds) { Y(!0); try { r() } finally { Y(!1) } } } return i.memoizedState = i.baseState = t, i.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: t }, i }

    function Ap(t, i, r, o) { return t.baseState = r, Yc(t, Pe, typeof o == "function" ? o : ei) }

    function e_(t, i, r, o, h) { if (hl(t)) throw Error(a(485)); if (t = i.action, t !== null) { var f = { payload: h, action: t, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function(v) { f.listeners.push(v) } };
            H.T !== null ? r(!0) : f.isTransition = !1, o(f), r = i.pending, r === null ? (f.next = i.pending = f, jp(i, f)) : (f.next = r.next, i.pending = r.next = f) } }

    function jp(t, i) { var r = i.action,
            o = i.payload,
            h = t.state; if (i.isTransition) { var f = H.T,
                v = {};
            H.T = v; try { var x = r(h, o),
                    T = H.S;
                T !== null && T(v, x), Cp(t, i, x) } catch (U) { Jc(t, i, U) } finally { f !== null && v.types !== null && (f.types = v.types), H.T = f } } else try { f = r(h, o), Cp(t, i, f) } catch (U) { Jc(t, i, U) } }

    function Cp(t, i, r) { r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(function(o) { Rp(t, i, o) }, function(o) { return Jc(t, i, o) }) : Rp(t, i, r) }

    function Rp(t, i, r) { i.status = "fulfilled", i.value = r, kp(i), t.state = r, i = t.pending, i !== null && (r = i.next, r === i ? t.pending = null : (r = r.next, i.next = r, jp(t, r))) }

    function Jc(t, i, r) { var o = t.pending; if (t.pending = null, o !== null) { o = o.next;
            do i.status = "rejected", i.reason = r, kp(i), i = i.next; while (i !== o) }
        t.action = null }

    function kp(t) { t = t.listeners; for (var i = 0; i < t.length; i++)(0, t[i])() }

    function Op(t, i) { return i }

    function Np(t, i) { if (Ae) { var r = $e.formState; if (r !== null) { e: { var o = ye; if (Ae) { if (Ge) { t: { for (var h = Ge, f = pn; h.nodeType !== 8;) { if (!f) { h = null; break t } if (h = yn(h.nextSibling), h === null) { h = null; break t } }
                                f = h.data, h = f === "F!" || f === "F" ? h : null } if (h) { Ge = yn(h.nextSibling), o = h.data === "F!"; break e } }
                        Si(o) }
                    o = !1 }
                o && (i = r[0]) } } return r = Lt(), r.memoizedState = r.baseState = i, o = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Op, lastRenderedState: i }, r.queue = o, r = Zp.bind(null, ye, o), o.dispatch = r, o = Xc(!1), f = nh.bind(null, ye, !1, o.queue), o = Lt(), h = { state: i, dispatch: null, action: t, pending: null }, o.queue = h, r = e_.bind(null, ye, h, f, r), h.dispatch = r, o.memoizedState = t, [i, r, !1] }

    function Dp(t) { var i = at(); return Mp(i, Pe, t) }

    function Mp(t, i, r) { if (i = Yc(t, i, Op)[0], t = ll(ei)[0], typeof i == "object" && i !== null && typeof i.then == "function") try { var o = gr(i) } catch (v) { throw v === Qs ? Qo : v } else o = i;
        i = at(); var h = i.queue,
            f = h.dispatch; return r !== i.memoizedState && (ye.flags |= 2048, ia(9, { destroy: void 0 }, t_.bind(null, h, r), null)), [o, f, t] }

    function t_(t, i) { t.action = i }

    function Up(t) { var i = at(),
            r = Pe; if (r !== null) return Mp(i, r, t);
        at(), i = i.memoizedState, r = at(); var o = r.queue.dispatch; return r.memoizedState = t, [i, o, !1] }

    function ia(t, i, r, o) { return t = { tag: t, create: r, deps: o, inst: i, next: null }, i = ye.updateQueue, i === null && (i = rl(), ye.updateQueue = i), r = i.lastEffect, r === null ? i.lastEffect = t.next = t : (o = r.next, r.next = t, t.next = o, i.lastEffect = t), t }

    function Lp() { return at().memoizedState }

    function ul(t, i, r, o) { var h = Lt();
        ye.flags |= t, h.memoizedState = ia(1 | i, { destroy: void 0 }, r, o === void 0 ? null : o) }

    function cl(t, i, r, o) { var h = at();
        o = o === void 0 ? null : o; var f = h.memoizedState.inst;
        Pe !== null && o !== null && Hc(o, Pe.memoizedState.deps) ? h.memoizedState = ia(i, f, r, o) : (ye.flags |= t, h.memoizedState = ia(1 | i, f, r, o)) }

    function Pp(t, i) { ul(8390656, 8, t, i) }

    function Zc(t, i) { cl(2048, 8, t, i) }

    function n_(t) { ye.flags |= 4; var i = ye.updateQueue; if (i === null) i = rl(), ye.updateQueue = i, i.events = [t];
        else { var r = i.events;
            r === null ? i.events = [t] : r.push(t) } }

    function zp(t) { var i = at().memoizedState; return n_({ ref: i, nextImpl: t }),
            function() { if ((De & 2) !== 0) throw Error(a(440)); return i.impl.apply(void 0, arguments) } }

    function Bp(t, i) { return cl(4, 2, t, i) }

    function Vp(t, i) { return cl(4, 4, t, i) }

    function Hp(t, i) { if (typeof i == "function") { t = t(); var r = i(t); return function() { typeof r == "function" ? r() : i(null) } } if (i != null) return t = t(), i.current = t,
            function() { i.current = null } }

    function $p(t, i, r) { r = r != null ? r.concat([t]) : null, cl(4, 4, Hp.bind(null, i, t), r) }

    function Qc() {}

    function qp(t, i) { var r = at();
        i = i === void 0 ? null : i; var o = r.memoizedState; return i !== null && Hc(i, o[1]) ? o[0] : (r.memoizedState = [t, i], t) }

    function Ip(t, i) { var r = at();
        i = i === void 0 ? null : i; var o = r.memoizedState; if (i !== null && Hc(i, o[1])) return o[0]; if (o = t(), ds) { Y(!0); try { t() } finally { Y(!1) } } return r.memoizedState = [o, i], o }

    function Wc(t, i, r) { return r === void 0 || (Wn & 1073741824) !== 0 && (Te & 261930) === 0 ? t.memoizedState = i : (t.memoizedState = r, t = Gg(), ye.lanes |= t, Ni |= t, r) }

    function Gp(t, i, r, o) { return Jt(r, i) ? r : ea.current !== null ? (t = Wc(t, r, o), Jt(t, i) || (ut = !0), t) : (Wn & 42) === 0 || (Wn & 1073741824) !== 0 && (Te & 261930) === 0 ? (ut = !0, t.memoizedState = r) : (t = Gg(), ye.lanes |= t, Ni |= t, i) }

    function Kp(t, i, r, o, h) { var f = X.p;
        X.p = f !== 0 && 8 > f ? f : 8; var v = H.T,
            x = {};
        H.T = x, nh(t, !1, i, r); try { var T = h(),
                U = H.S; if (U !== null && U(x, T), T !== null && typeof T == "object" && typeof T.then == "function") { var $ = Zx(T, o);
                yr(t, i, $, nn(t)) } else yr(t, i, o, nn(t)) } catch (I) { yr(t, i, { then: function() {}, status: "rejected", reason: I }, nn()) } finally { X.p = f, v !== null && x.types !== null && (v.types = x.types), H.T = v } }

    function i_() {}

    function eh(t, i, r, o) { if (t.tag !== 5) throw Error(a(476)); var h = Yp(t).queue;
        Kp(t, h, i, ne, r === null ? i_ : function() { return Fp(t), r(o) }) }

    function Yp(t) { var i = t.memoizedState; if (i !== null) return i;
        i = { memoizedState: ne, baseState: ne, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: ne }, next: null }; var r = {}; return i.next = { memoizedState: r, baseState: r, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: r }, next: null }, t.memoizedState = i, t = t.alternate, t !== null && (t.memoizedState = i), i }

    function Fp(t) { var i = Yp(t);
        i.next === null && (i = t.alternate.memoizedState), yr(t, i.next.queue, {}, nn()) }

    function th() { return Tt(Mr) }

    function Xp() { return at().memoizedState }

    function Jp() { return at().memoizedState }

    function s_(t) { for (var i = t.return; i !== null;) { switch (i.tag) {
                case 24:
                case 3:
                    var r = nn();
                    t = Ai(r); var o = ji(i, t, r);
                    o !== null && (Kt(o, i, r), dr(o, i, r)), i = { cache: kc() }, t.payload = i; return }
            i = i.return } }

    function a_(t, i, r) { var o = nn();
        r = { lane: o, revertLane: 0, gesture: null, action: r, hasEagerState: !1, eagerState: null, next: null }, hl(t) ? Qp(i, r) : (r = bc(t, i, r, o), r !== null && (Kt(r, t, o), Wp(r, i, o))) }

    function Zp(t, i, r) { var o = nn();
        yr(t, i, r, o) }

    function yr(t, i, r, o) { var h = { lane: o, revertLane: 0, gesture: null, action: r, hasEagerState: !1, eagerState: null, next: null }; if (hl(t)) Qp(i, h);
        else { var f = t.alternate; if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = i.lastRenderedReducer, f !== null)) try { var v = i.lastRenderedState,
                    x = f(v, r); if (h.hasEagerState = !0, h.eagerState = x, Jt(x, v)) return Go(t, i, h, 0), $e === null && Io(), !1 } catch {} finally {}
            if (r = bc(t, i, h, o), r !== null) return Kt(r, t, o), Wp(r, i, o), !0 } return !1 }

    function nh(t, i, r, o) { if (o = { lane: 2, revertLane: Mh(), gesture: null, action: o, hasEagerState: !1, eagerState: null, next: null }, hl(t)) { if (i) throw Error(a(479)) } else i = bc(t, r, o, 2), i !== null && Kt(i, t, 2) }

    function hl(t) { var i = t.alternate; return t === ye || i !== null && i === ye }

    function Qp(t, i) { ta = sl = !0; var r = t.pending;
        r === null ? i.next = i : (i.next = r.next, r.next = i), t.pending = i }

    function Wp(t, i, r) { if ((r & 4194048) !== 0) { var o = i.lanes;
            o &= t.pendingLanes, r |= o, i.lanes = r, ee(t, r) } } var vr = { readContext: Tt, use: ol, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useLayoutEffect: We, useInsertionEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useSyncExternalStore: We, useId: We, useHostTransitionStatus: We, useFormState: We, useActionState: We, useOptimistic: We, useMemoCache: We, useCacheRefresh: We };
    vr.useEffectEvent = We; var eg = { readContext: Tt, use: ol, useCallback: function(t, i) { return Lt().memoizedState = [t, i === void 0 ? null : i], t }, useContext: Tt, useEffect: Pp, useImperativeHandle: function(t, i, r) { r = r != null ? r.concat([t]) : null, ul(4194308, 4, Hp.bind(null, i, t), r) }, useLayoutEffect: function(t, i) { return ul(4194308, 4, t, i) }, useInsertionEffect: function(t, i) { ul(4, 2, t, i) }, useMemo: function(t, i) { var r = Lt();
                i = i === void 0 ? null : i; var o = t(); if (ds) { Y(!0); try { t() } finally { Y(!1) } } return r.memoizedState = [o, i], o }, useReducer: function(t, i, r) { var o = Lt(); if (r !== void 0) { var h = r(i); if (ds) { Y(!0); try { r(i) } finally { Y(!1) } } } else h = i; return o.memoizedState = o.baseState = h, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: h }, o.queue = t, t = t.dispatch = a_.bind(null, ye, t), [o.memoizedState, t] }, useRef: function(t) { var i = Lt(); return t = { current: t }, i.memoizedState = t }, useState: function(t) { t = Xc(t); var i = t.queue,
                    r = Zp.bind(null, ye, i); return i.dispatch = r, [t.memoizedState, r] }, useDebugValue: Qc, useDeferredValue: function(t, i) { var r = Lt(); return Wc(r, t, i) }, useTransition: function() { var t = Xc(!1); return t = Kp.bind(null, ye, t.queue, !0, !1), Lt().memoizedState = t, [!1, t] }, useSyncExternalStore: function(t, i, r) { var o = ye,
                    h = Lt(); if (Ae) { if (r === void 0) throw Error(a(407));
                    r = r() } else { if (r = i(), $e === null) throw Error(a(349));
                    (Te & 127) !== 0 || xp(o, i, r) }
                h.memoizedState = r; var f = { value: r, getSnapshot: i }; return h.queue = f, Pp(Sp.bind(null, o, f, t), [t]), o.flags |= 2048, ia(9, { destroy: void 0 }, _p.bind(null, o, f, r, i), null), r }, useId: function() { var t = Lt(),
                    i = $e.identifierPrefix; if (Ae) { var r = Ln,
                        o = Un;
                    r = (o & ~(1 << 32 - K(o) - 1)).toString(32) + r, i = "_" + i + "R_" + r, r = al++, 0 < r && (i += "H" + r.toString(32)), i += "_" } else r = Qx++, i = "_" + i + "r_" + r.toString(32) + "_"; return t.memoizedState = i }, useHostTransitionStatus: th, useFormState: Np, useActionState: Np, useOptimistic: function(t) { var i = Lt();
                i.memoizedState = i.baseState = t; var r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return i.queue = r, i = nh.bind(null, ye, !0, r), r.dispatch = i, [t, i] }, useMemoCache: Kc, useCacheRefresh: function() { return Lt().memoizedState = s_.bind(null, ye) }, useEffectEvent: function(t) { var i = Lt(),
                    r = { impl: t }; return i.memoizedState = r,
                    function() { if ((De & 2) !== 0) throw Error(a(440)); return r.impl.apply(void 0, arguments) } } },
        ih = { readContext: Tt, use: ol, useCallback: qp, useContext: Tt, useEffect: Zc, useImperativeHandle: $p, useInsertionEffect: Bp, useLayoutEffect: Vp, useMemo: Ip, useReducer: ll, useRef: Lp, useState: function() { return ll(ei) }, useDebugValue: Qc, useDeferredValue: function(t, i) { var r = at(); return Gp(r, Pe.memoizedState, t, i) }, useTransition: function() { var t = ll(ei)[0],
                    i = at().memoizedState; return [typeof t == "boolean" ? t : gr(t), i] }, useSyncExternalStore: wp, useId: Xp, useHostTransitionStatus: th, useFormState: Dp, useActionState: Dp, useOptimistic: function(t, i) { var r = at(); return Ap(r, Pe, t, i) }, useMemoCache: Kc, useCacheRefresh: Jp };
    ih.useEffectEvent = zp; var tg = { readContext: Tt, use: ol, useCallback: qp, useContext: Tt, useEffect: Zc, useImperativeHandle: $p, useInsertionEffect: Bp, useLayoutEffect: Vp, useMemo: Ip, useReducer: Fc, useRef: Lp, useState: function() { return Fc(ei) }, useDebugValue: Qc, useDeferredValue: function(t, i) { var r = at(); return Pe === null ? Wc(r, t, i) : Gp(r, Pe.memoizedState, t, i) }, useTransition: function() { var t = Fc(ei)[0],
                i = at().memoizedState; return [typeof t == "boolean" ? t : gr(t), i] }, useSyncExternalStore: wp, useId: Xp, useHostTransitionStatus: th, useFormState: Up, useActionState: Up, useOptimistic: function(t, i) { var r = at(); return Pe !== null ? Ap(r, Pe, t, i) : (r.baseState = t, [t, r.queue.dispatch]) }, useMemoCache: Kc, useCacheRefresh: Jp };
    tg.useEffectEvent = zp;

    function sh(t, i, r, o) { i = t.memoizedState, r = r(o, i), r = r == null ? i : y({}, i, r), t.memoizedState = r, t.lanes === 0 && (t.updateQueue.baseState = r) } var ah = { enqueueSetState: function(t, i, r) { t = t._reactInternals; var o = nn(),
                h = Ai(o);
            h.payload = i, r != null && (h.callback = r), i = ji(t, h, o), i !== null && (Kt(i, t, o), dr(i, t, o)) }, enqueueReplaceState: function(t, i, r) { t = t._reactInternals; var o = nn(),
                h = Ai(o);
            h.tag = 1, h.payload = i, r != null && (h.callback = r), i = ji(t, h, o), i !== null && (Kt(i, t, o), dr(i, t, o)) }, enqueueForceUpdate: function(t, i) { t = t._reactInternals; var r = nn(),
                o = Ai(r);
            o.tag = 2, i != null && (o.callback = i), i = ji(t, o, r), i !== null && (Kt(i, t, r), dr(i, t, r)) } };

    function ng(t, i, r, o, h, f, v) { return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(o, f, v) : i.prototype && i.prototype.isPureReactComponent ? !sr(r, o) || !sr(h, f) : !0 }

    function ig(t, i, r, o) { t = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(r, o), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(r, o), i.state !== t && ah.enqueueReplaceState(i, i.state, null) }

    function fs(t, i) { var r = i; if ("ref" in i) { r = {}; for (var o in i) o !== "ref" && (r[o] = i[o]) } if (t = t.defaultProps) { r === i && (r = y({}, r)); for (var h in t) r[h] === void 0 && (r[h] = t[h]) } return r }

    function sg(t) { qo(t) }

    function ag(t) { console.error(t) }

    function rg(t) { qo(t) }

    function dl(t, i) { try { var r = t.onUncaughtError;
            r(i.value, { componentStack: i.stack }) } catch (o) { setTimeout(function() { throw o }) } }

    function og(t, i, r) { try { var o = t.onCaughtError;
            o(r.value, { componentStack: r.stack, errorBoundary: i.tag === 1 ? i.stateNode : null }) } catch (h) { setTimeout(function() { throw h }) } }

    function rh(t, i, r) { return r = Ai(r), r.tag = 3, r.payload = { element: null }, r.callback = function() { dl(t, i) }, r }

    function lg(t) { return t = Ai(t), t.tag = 3, t }

    function ug(t, i, r, o) { var h = r.type.getDerivedStateFromError; if (typeof h == "function") { var f = o.value;
            t.payload = function() { return h(f) }, t.callback = function() { og(i, r, o) } } var v = r.stateNode;
        v !== null && typeof v.componentDidCatch == "function" && (t.callback = function() { og(i, r, o), typeof h != "function" && (Di === null ? Di = new Set([this]) : Di.add(this)); var x = o.stack;
            this.componentDidCatch(o.value, { componentStack: x !== null ? x : "" }) }) }

    function r_(t, i, r, o, h) { if (r.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") { if (i = r.alternate, i !== null && Xs(i, r, h, !0), r = Qt.current, r !== null) { switch (r.tag) {
                    case 31:
                    case 13:
                        return gn === null ? Tl() : r.alternate === null && et === 0 && (et = 3), r.flags &= -257, r.flags |= 65536, r.lanes = h, o === Wo ? r.flags |= 16384 : (i = r.updateQueue, i === null ? r.updateQueue = new Set([o]) : i.add(o), Oh(t, o, h)), !1;
                    case 22:
                        return r.flags |= 65536, o === Wo ? r.flags |= 16384 : (i = r.updateQueue, i === null ? (i = { transitions: null, markerInstances: null, retryQueue: new Set([o]) }, r.updateQueue = i) : (r = i.retryQueue, r === null ? i.retryQueue = new Set([o]) : r.add(o)), Oh(t, o, h)), !1 } throw Error(a(435, r.tag)) } return Oh(t, o, h), Tl(), !1 } if (Ae) return i = Qt.current, i !== null ? ((i.flags & 65536) === 0 && (i.flags |= 256), i.flags |= 65536, i.lanes = h, o !== Ec && (t = Error(a(422), { cause: o }), or(dn(t, r)))) : (o !== Ec && (i = Error(a(423), { cause: o }), or(dn(i, r))), t = t.current.alternate, t.flags |= 65536, h &= -h, t.lanes |= h, o = dn(o, r), h = rh(t.stateNode, o, h), Lc(t, h), et !== 4 && (et = 2)), !1; var f = Error(a(520), { cause: o }); if (f = dn(f, r), Ar === null ? Ar = [f] : Ar.push(f), et !== 4 && (et = 2), i === null) return !0;
        o = dn(o, r), r = i;
        do { switch (r.tag) {
                case 3:
                    return r.flags |= 65536, t = h & -h, r.lanes |= t, t = rh(r.stateNode, o, t), Lc(r, t), !1;
                case 1:
                    if (i = r.type, f = r.stateNode, (r.flags & 128) === 0 && (typeof i.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Di === null || !Di.has(f)))) return r.flags |= 65536, h &= -h, r.lanes |= h, h = lg(h), ug(h, t, r, o), Lc(r, h), !1 }
            r = r.return } while (r !== null); return !1 } var oh = Error(a(461)),
        ut = !1;

    function Et(t, i, r, o) { i.child = t === null ? fp(i, null, r, o) : hs(i, t.child, r, o) }

    function cg(t, i, r, o, h) { r = r.render; var f = i.ref; if ("ref" in o) { var v = {}; for (var x in o) x !== "ref" && (v[x] = o[x]) } else v = o; return os(i), o = $c(t, i, r, v, f, h), x = qc(), t !== null && !ut ? (Ic(t, i, h), ti(t, i, h)) : (Ae && x && Sc(i), i.flags |= 1, Et(t, i, o, h), i.child) }

    function hg(t, i, r, o, h) { if (t === null) { var f = r.type; return typeof f == "function" && !wc(f) && f.defaultProps === void 0 && r.compare === null ? (i.tag = 15, i.type = f, dg(t, i, f, o, h)) : (t = Yo(r.type, null, o, i, i.mode, h), t.ref = i.ref, t.return = i, i.child = t) } if (f = t.child, !ph(t, h)) { var v = f.memoizedProps; if (r = r.compare, r = r !== null ? r : sr, r(v, o) && t.ref === i.ref) return ti(t, i, h) } return i.flags |= 1, t = Xn(f, o), t.ref = i.ref, t.return = i, i.child = t }

    function dg(t, i, r, o, h) { if (t !== null) { var f = t.memoizedProps; if (sr(f, o) && t.ref === i.ref)
                if (ut = !1, i.pendingProps = o = f, ph(t, h))(t.flags & 131072) !== 0 && (ut = !0);
                else return i.lanes = t.lanes, ti(t, i, h) } return lh(t, i, r, o, h) }

    function fg(t, i, r, o) { var h = o.children,
            f = t !== null ? t.memoizedState : null; if (t === null && i.stateNode === null && (i.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), o.mode === "hidden") { if ((i.flags & 128) !== 0) { if (f = f !== null ? f.baseLanes | r : r, t !== null) { for (o = i.child = t.child, h = 0; o !== null;) h = h | o.lanes | o.childLanes, o = o.sibling;
                    o = h & ~f } else o = 0, i.child = null; return mg(t, i, f, r, o) } if ((r & 536870912) !== 0) i.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Zo(i, f !== null ? f.cachePool : null), f !== null ? gp(i, f) : zc(), yp(i);
            else return o = i.lanes = 536870912, mg(t, i, f !== null ? f.baseLanes | r : r, r, o) } else f !== null ? (Zo(i, f.cachePool), gp(i, f), Ri(), i.memoizedState = null) : (t !== null && Zo(i, null), zc(), Ri()); return Et(t, i, h, r), i.child }

    function br(t, i) { return t !== null && t.tag === 22 || i.stateNode !== null || (i.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), i.sibling }

    function mg(t, i, r, o, h) { var f = Nc(); return f = f === null ? null : { parent: ot._currentValue, pool: f }, i.memoizedState = { baseLanes: r, cachePool: f }, t !== null && Zo(i, null), zc(), yp(i), t !== null && Xs(t, i, o, !0), i.childLanes = h, null }

    function fl(t, i) { return i = pl({ mode: i.mode, children: i.children }, t.mode), i.ref = t.ref, t.child = i, i.return = t, i }

    function pg(t, i, r) { return hs(i, t.child, null, r), t = fl(i, i.pendingProps), t.flags |= 2, Wt(i), i.memoizedState = null, t }

    function o_(t, i, r) { var o = i.pendingProps,
            h = (i.flags & 128) !== 0; if (i.flags &= -129, t === null) { if (Ae) { if (o.mode === "hidden") return t = fl(i, o), i.lanes = 536870912, br(null, t); if (Vc(i), (t = Ge) ? (t = jy(t, pn), t = t !== null && t.data === "&" ? t : null, t !== null && (i.memoizedState = { dehydrated: t, treeContext: xi !== null ? { id: Un, overflow: Ln } : null, retryLane: 536870912, hydrationErrors: null }, r = Qm(t), r.return = i, i.child = r, St = i, Ge = null)) : t = null, t === null) throw Si(i); return i.lanes = 536870912, null } return fl(i, o) } var f = t.memoizedState; if (f !== null) { var v = f.dehydrated; if (Vc(i), h)
                if (i.flags & 256) i.flags &= -257, i = pg(t, i, r);
                else if (i.memoizedState !== null) i.child = t.child, i.flags |= 128, i = null;
            else throw Error(a(558));
            else if (ut || Xs(t, i, r, !1), h = (r & t.childLanes) !== 0, ut || h) { if (o = $e, o !== null && (v = Se(o, r), v !== 0 && v !== f.retryLane)) throw f.retryLane = v, is(t, v), Kt(o, t, v), oh;
                Tl(), i = pg(t, i, r) } else t = f.treeContext, Ge = yn(v.nextSibling), St = i, Ae = !0, _i = null, pn = !1, t !== null && tp(i, t), i = fl(i, o), i.flags |= 4096; return i } return t = Xn(t.child, { mode: o.mode, children: o.children }), t.ref = i.ref, i.child = t, t.return = i, t }

    function ml(t, i) { var r = i.ref; if (r === null) t !== null && t.ref !== null && (i.flags |= 4194816);
        else { if (typeof r != "function" && typeof r != "object") throw Error(a(284));
            (t === null || t.ref !== r) && (i.flags |= 4194816) } }

    function lh(t, i, r, o, h) { return os(i), r = $c(t, i, r, o, void 0, h), o = qc(), t !== null && !ut ? (Ic(t, i, h), ti(t, i, h)) : (Ae && o && Sc(i), i.flags |= 1, Et(t, i, r, h), i.child) }

    function gg(t, i, r, o, h, f) { return os(i), i.updateQueue = null, r = bp(i, o, r, h), vp(t), o = qc(), t !== null && !ut ? (Ic(t, i, f), ti(t, i, f)) : (Ae && o && Sc(i), i.flags |= 1, Et(t, i, r, f), i.child) }

    function yg(t, i, r, o, h) { if (os(i), i.stateNode === null) { var f = Gs,
                v = r.contextType;
            typeof v == "object" && v !== null && (f = Tt(v)), f = new r(o, f), i.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = ah, i.stateNode = f, f._reactInternals = i, f = i.stateNode, f.props = o, f.state = i.memoizedState, f.refs = {}, Mc(i), v = r.contextType, f.context = typeof v == "object" && v !== null ? Tt(v) : Gs, f.state = i.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (sh(i, r, v, o), f.state = i.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (v = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), v !== f.state && ah.enqueueReplaceState(f, f.state, null), mr(i, o, f, h), fr(), f.state = i.memoizedState), typeof f.componentDidMount == "function" && (i.flags |= 4194308), o = !0 } else if (t === null) { f = i.stateNode; var x = i.memoizedProps,
                T = fs(r, x);
            f.props = T; var U = f.context,
                $ = r.contextType;
            v = Gs, typeof $ == "object" && $ !== null && (v = Tt($)); var I = r.getDerivedStateFromProps;
            $ = typeof I == "function" || typeof f.getSnapshotBeforeUpdate == "function", x = i.pendingProps !== x, $ || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (x || U !== v) && ig(i, f, o, v), Ei = !1; var P = i.memoizedState;
            f.state = P, mr(i, o, f, h), fr(), U = i.memoizedState, x || P !== U || Ei ? (typeof I == "function" && (sh(i, r, I, o), U = i.memoizedState), (T = Ei || ng(i, r, T, o, P, U, v)) ? ($ || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = o, i.memoizedState = U), f.props = o, f.state = U, f.context = v, o = T) : (typeof f.componentDidMount == "function" && (i.flags |= 4194308), o = !1) } else { f = i.stateNode, Uc(t, i), v = i.memoizedProps, $ = fs(r, v), f.props = $, I = i.pendingProps, P = f.context, U = r.contextType, T = Gs, typeof U == "object" && U !== null && (T = Tt(U)), x = r.getDerivedStateFromProps, (U = typeof x == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== I || P !== T) && ig(i, f, o, T), Ei = !1, P = i.memoizedState, f.state = P, mr(i, o, f, h), fr(); var z = i.memoizedState;
            v !== I || P !== z || Ei || t !== null && t.dependencies !== null && Xo(t.dependencies) ? (typeof x == "function" && (sh(i, r, x, o), z = i.memoizedState), ($ = Ei || ng(i, r, $, o, P, z, T) || t !== null && t.dependencies !== null && Xo(t.dependencies)) ? (U || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, z, T), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(o, z, T)), typeof f.componentDidUpdate == "function" && (i.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === t.memoizedProps && P === t.memoizedState || (i.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && P === t.memoizedState || (i.flags |= 1024), i.memoizedProps = o, i.memoizedState = z), f.props = o, f.state = z, f.context = T, o = $) : (typeof f.componentDidUpdate != "function" || v === t.memoizedProps && P === t.memoizedState || (i.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && P === t.memoizedState || (i.flags |= 1024), o = !1) } return f = o, ml(t, i), o = (i.flags & 128) !== 0, f || o ? (f = i.stateNode, r = o && typeof r.getDerivedStateFromError != "function" ? null : f.render(), i.flags |= 1, t !== null && o ? (i.child = hs(i, t.child, null, h), i.child = hs(i, null, r, h)) : Et(t, i, r, h), i.memoizedState = f.state, t = i.child) : t = ti(t, i, h), t }

    function vg(t, i, r, o) { return as(), i.flags |= 256, Et(t, i, r, o), i.child } var uh = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };

    function ch(t) { return { baseLanes: t, cachePool: op() } }

    function hh(t, i, r) { return t = t !== null ? t.childLanes & ~r : 0, i && (t |= tn), t }

    function bg(t, i, r) { var o = i.pendingProps,
            h = !1,
            f = (i.flags & 128) !== 0,
            v; if ((v = f) || (v = t !== null && t.memoizedState === null ? !1 : (st.current & 2) !== 0), v && (h = !0, i.flags &= -129), v = (i.flags & 32) !== 0, i.flags &= -33, t === null) { if (Ae) { if (h ? Ci(i) : Ri(), (t = Ge) ? (t = jy(t, pn), t = t !== null && t.data !== "&" ? t : null, t !== null && (i.memoizedState = { dehydrated: t, treeContext: xi !== null ? { id: Un, overflow: Ln } : null, retryLane: 536870912, hydrationErrors: null }, r = Qm(t), r.return = i, i.child = r, St = i, Ge = null)) : t = null, t === null) throw Si(i); return Yh(t) ? i.lanes = 32 : i.lanes = 536870912, null } var x = o.children; return o = o.fallback, h ? (Ri(), h = i.mode, x = pl({ mode: "hidden", children: x }, h), o = ss(o, h, r, null), x.return = i, o.return = i, x.sibling = o, i.child = x, o = i.child, o.memoizedState = ch(r), o.childLanes = hh(t, v, r), i.memoizedState = uh, br(null, o)) : (Ci(i), dh(i, x)) } var T = t.memoizedState; if (T !== null && (x = T.dehydrated, x !== null)) { if (f) i.flags & 256 ? (Ci(i), i.flags &= -257, i = fh(t, i, r)) : i.memoizedState !== null ? (Ri(), i.child = t.child, i.flags |= 128, i = null) : (Ri(), x = o.fallback, h = i.mode, o = pl({ mode: "visible", children: o.children }, h), x = ss(x, h, r, null), x.flags |= 2, o.return = i, x.return = i, o.sibling = x, i.child = o, hs(i, t.child, null, r), o = i.child, o.memoizedState = ch(r), o.childLanes = hh(t, v, r), i.memoizedState = uh, i = br(null, o));
            else if (Ci(i), Yh(x)) { if (v = x.nextSibling && x.nextSibling.dataset, v) var U = v.dgst;
                v = U, o = Error(a(419)), o.stack = "", o.digest = v, or({ value: o, source: null, stack: null }), i = fh(t, i, r) } else if (ut || Xs(t, i, r, !1), v = (r & t.childLanes) !== 0, ut || v) { if (v = $e, v !== null && (o = Se(v, r), o !== 0 && o !== T.retryLane)) throw T.retryLane = o, is(t, o), Kt(v, t, o), oh;
                Kh(x) || Tl(), i = fh(t, i, r) } else Kh(x) ? (i.flags |= 192, i.child = t.child, i = null) : (t = T.treeContext, Ge = yn(x.nextSibling), St = i, Ae = !0, _i = null, pn = !1, t !== null && tp(i, t), i = dh(i, o.children), i.flags |= 4096); return i } return h ? (Ri(), x = o.fallback, h = i.mode, T = t.child, U = T.sibling, o = Xn(T, { mode: "hidden", children: o.children }), o.subtreeFlags = T.subtreeFlags & 65011712, U !== null ? x = Xn(U, x) : (x = ss(x, h, r, null), x.flags |= 2), x.return = i, o.return = i, o.sibling = x, i.child = o, br(null, o), o = i.child, x = t.child.memoizedState, x === null ? x = ch(r) : (h = x.cachePool, h !== null ? (T = ot._currentValue, h = h.parent !== T ? { parent: T, pool: T } : h) : h = op(), x = { baseLanes: x.baseLanes | r, cachePool: h }), o.memoizedState = x, o.childLanes = hh(t, v, r), i.memoizedState = uh, br(t.child, o)) : (Ci(i), r = t.child, t = r.sibling, r = Xn(r, { mode: "visible", children: o.children }), r.return = i, r.sibling = null, t !== null && (v = i.deletions, v === null ? (i.deletions = [t], i.flags |= 16) : v.push(t)), i.child = r, i.memoizedState = null, r) }

    function dh(t, i) { return i = pl({ mode: "visible", children: i }, t.mode), i.return = t, t.child = i }

    function pl(t, i) { return t = Zt(22, t, null, i), t.lanes = 0, t }

    function fh(t, i, r) { return hs(i, t.child, null, r), t = dh(i, i.pendingProps.children), t.flags |= 2, i.memoizedState = null, t }

    function wg(t, i, r) { t.lanes |= i; var o = t.alternate;
        o !== null && (o.lanes |= i), Cc(t.return, i, r) }

    function mh(t, i, r, o, h, f) { var v = t.memoizedState;
        v === null ? t.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: o, tail: r, tailMode: h, treeForkCount: f } : (v.isBackwards = i, v.rendering = null, v.renderingStartTime = 0, v.last = o, v.tail = r, v.tailMode = h, v.treeForkCount = f) }

    function xg(t, i, r) { var o = i.pendingProps,
            h = o.revealOrder,
            f = o.tail;
        o = o.children; var v = st.current,
            x = (v & 2) !== 0; if (x ? (v = v & 1 | 2, i.flags |= 128) : v &= 1, Q(st, v), Et(t, i, o, r), o = Ae ? rr : 0, !x && t !== null && (t.flags & 128) !== 0) e: for (t = i.child; t !== null;) { if (t.tag === 13) t.memoizedState !== null && wg(t, r, i);
            else if (t.tag === 19) wg(t, r, i);
            else if (t.child !== null) { t.child.return = t, t = t.child; continue } if (t === i) break e; for (; t.sibling === null;) { if (t.return === null || t.return === i) break e;
                t = t.return }
            t.sibling.return = t.return, t = t.sibling }
        switch (h) {
            case "forwards":
                for (r = i.child, h = null; r !== null;) t = r.alternate, t !== null && il(t) === null && (h = r), r = r.sibling;
                r = h, r === null ? (h = i.child, i.child = null) : (h = r.sibling, r.sibling = null), mh(i, !1, h, r, f, o); break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (r = null, h = i.child, i.child = null; h !== null;) { if (t = h.alternate, t !== null && il(t) === null) { i.child = h; break }
                    t = h.sibling, h.sibling = r, r = h, h = t }
                mh(i, !0, r, null, f, o); break;
            case "together":
                mh(i, !1, null, null, void 0, o); break;
            default:
                i.memoizedState = null } return i.child }

    function ti(t, i, r) { if (t !== null && (i.dependencies = t.dependencies), Ni |= i.lanes, (r & i.childLanes) === 0)
            if (t !== null) { if (Xs(t, i, r, !1), (r & i.childLanes) === 0) return null } else return null;
        if (t !== null && i.child !== t.child) throw Error(a(153)); if (i.child !== null) { for (t = i.child, r = Xn(t, t.pendingProps), i.child = r, r.return = i; t.sibling !== null;) t = t.sibling, r = r.sibling = Xn(t, t.pendingProps), r.return = i;
            r.sibling = null } return i.child }

    function ph(t, i) { return (t.lanes & i) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Xo(t))) }

    function l_(t, i, r) { switch (i.tag) {
            case 3:
                wt(i, i.stateNode.containerInfo), Ti(i, ot, t.memoizedState.cache), as(); break;
            case 27:
            case 5:
                Xi(i); break;
            case 4:
                wt(i, i.stateNode.containerInfo); break;
            case 10:
                Ti(i, i.type, i.memoizedProps.value); break;
            case 31:
                if (i.memoizedState !== null) return i.flags |= 128, Vc(i), null; break;
            case 13:
                var o = i.memoizedState; if (o !== null) return o.dehydrated !== null ? (Ci(i), i.flags |= 128, null) : (r & i.child.childLanes) !== 0 ? bg(t, i, r) : (Ci(i), t = ti(t, i, r), t !== null ? t.sibling : null);
                Ci(i); break;
            case 19:
                var h = (t.flags & 128) !== 0; if (o = (r & i.childLanes) !== 0, o || (Xs(t, i, r, !1), o = (r & i.childLanes) !== 0), h) { if (o) return xg(t, i, r);
                    i.flags |= 128 } if (h = i.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), Q(st, st.current), o) break; return null;
            case 22:
                return i.lanes = 0, fg(t, i, r, i.pendingProps);
            case 24:
                Ti(i, ot, t.memoizedState.cache) } return ti(t, i, r) }

    function _g(t, i, r) { if (t !== null)
            if (t.memoizedProps !== i.pendingProps) ut = !0;
            else { if (!ph(t, r) && (i.flags & 128) === 0) return ut = !1, l_(t, i, r);
                ut = (t.flags & 131072) !== 0 }
        else ut = !1, Ae && (i.flags & 1048576) !== 0 && ep(i, rr, i.index); switch (i.lanes = 0, i.tag) {
            case 16:
                e: { var o = i.pendingProps; if (t = us(i.elementType), i.type = t, typeof t == "function") wc(t) ? (o = fs(t, o), i.tag = 1, i = yg(null, i, t, o, r)) : (i.tag = 0, i = lh(null, i, t, o, r));
                    else { if (t != null) { var h = t.$$typeof; if (h === G) { i.tag = 11, i = cg(null, i, t, o, r); break e } else if (h === F) { i.tag = 14, i = hg(null, i, t, o, r); break e } } throw i = Mt(t) || t, Error(a(306, i, "")) } }
                return i;
            case 0:
                return lh(t, i, i.type, i.pendingProps, r);
            case 1:
                return o = i.type, h = fs(o, i.pendingProps), yg(t, i, o, h, r);
            case 3:
                e: { if (wt(i, i.stateNode.containerInfo), t === null) throw Error(a(387));o = i.pendingProps; var f = i.memoizedState;h = f.element, Uc(t, i), mr(i, o, null, r); var v = i.memoizedState; if (o = v.cache, Ti(i, ot, o), o !== f.cache && Rc(i, [ot], r, !0), fr(), o = v.element, f.isDehydrated)
                        if (f = { element: o, isDehydrated: !1, cache: v.cache }, i.updateQueue.baseState = f, i.memoizedState = f, i.flags & 256) { i = vg(t, i, o, r); break e } else if (o !== h) { h = dn(Error(a(424)), i), or(h), i = vg(t, i, o, r); break e } else { switch (t = i.stateNode.containerInfo, t.nodeType) {
                            case 9:
                                t = t.body; break;
                            default:
                                t = t.nodeName === "HTML" ? t.ownerDocument.body : t } for (Ge = yn(t.firstChild), St = i, Ae = !0, _i = null, pn = !0, r = fp(i, null, o, r), i.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling } else { if (as(), o === h) { i = ti(t, i, r); break e }
                        Et(t, i, o, r) }
                    i = i.child }
                return i;
            case 26:
                return ml(t, i), t === null ? (r = Dy(i.type, null, i.pendingProps, null)) ? i.memoizedState = r : Ae || (r = i.type, t = i.pendingProps, o = Ol(be.current).createElement(r), o[_t] = i, o[Vt] = t, At(o, r, t), gt(o), i.stateNode = o) : i.memoizedState = Dy(i.type, t.memoizedProps, i.pendingProps, t.memoizedState), null;
            case 27:
                return Xi(i), t === null && Ae && (o = i.stateNode = ky(i.type, i.pendingProps, be.current), St = i, pn = !0, h = Ge, Pi(i.type) ? (Fh = h, Ge = yn(o.firstChild)) : Ge = h), Et(t, i, i.pendingProps.children, r), ml(t, i), t === null && (i.flags |= 4194304), i.child;
            case 5:
                return t === null && Ae && ((h = o = Ge) && (o = z_(o, i.type, i.pendingProps, pn), o !== null ? (i.stateNode = o, St = i, Ge = yn(o.firstChild), pn = !1, h = !0) : h = !1), h || Si(i)), Xi(i), h = i.type, f = i.pendingProps, v = t !== null ? t.memoizedProps : null, o = f.children, qh(h, f) ? o = null : v !== null && qh(h, v) && (i.flags |= 32), i.memoizedState !== null && (h = $c(t, i, Wx, null, null, r), Mr._currentValue = h), ml(t, i), Et(t, i, o, r), i.child;
            case 6:
                return t === null && Ae && ((t = r = Ge) && (r = B_(r, i.pendingProps, pn), r !== null ? (i.stateNode = r, St = i, Ge = null, t = !0) : t = !1), t || Si(i)), null;
            case 13:
                return bg(t, i, r);
            case 4:
                return wt(i, i.stateNode.containerInfo), o = i.pendingProps, t === null ? i.child = hs(i, null, o, r) : Et(t, i, o, r), i.child;
            case 11:
                return cg(t, i, i.type, i.pendingProps, r);
            case 7:
                return Et(t, i, i.pendingProps, r), i.child;
            case 8:
                return Et(t, i, i.pendingProps.children, r), i.child;
            case 12:
                return Et(t, i, i.pendingProps.children, r), i.child;
            case 10:
                return o = i.pendingProps, Ti(i, i.type, o.value), Et(t, i, o.children, r), i.child;
            case 9:
                return h = i.type._context, o = i.pendingProps.children, os(i), h = Tt(h), o = o(h), i.flags |= 1, Et(t, i, o, r), i.child;
            case 14:
                return hg(t, i, i.type, i.pendingProps, r);
            case 15:
                return dg(t, i, i.type, i.pendingProps, r);
            case 19:
                return xg(t, i, r);
            case 31:
                return o_(t, i, r);
            case 22:
                return fg(t, i, r, i.pendingProps);
            case 24:
                return os(i), o = Tt(ot), t === null ? (h = Nc(), h === null && (h = $e, f = kc(), h.pooledCache = f, f.refCount++, f !== null && (h.pooledCacheLanes |= r), h = f), i.memoizedState = { parent: o, cache: h }, Mc(i), Ti(i, ot, h)) : ((t.lanes & r) !== 0 && (Uc(t, i), mr(i, null, null, r), fr()), h = t.memoizedState, f = i.memoizedState, h.parent !== o ? (h = { parent: o, cache: o }, i.memoizedState = h, i.lanes === 0 && (i.memoizedState = i.updateQueue.baseState = h), Ti(i, ot, o)) : (o = f.cache, Ti(i, ot, o), o !== h.cache && Rc(i, [ot], r, !0))), Et(t, i, i.pendingProps.children, r), i.child;
            case 29:
                throw i.pendingProps } throw Error(a(156, i.tag)) }

    function ni(t) { t.flags |= 4 }

    function gh(t, i, r, o, h) { if ((i = (t.mode & 32) !== 0) && (i = !1), i) { if (t.flags |= 16777216, (h & 335544128) === h)
                if (t.stateNode.complete) t.flags |= 8192;
                else if (Xg()) t.flags |= 8192;
            else throw cs = Wo, Dc } else t.flags &= -16777217 }

    function Sg(t, i) { if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (t.flags |= 16777216, !zy(i))
            if (Xg()) t.flags |= 8192;
            else throw cs = Wo, Dc }

    function gl(t, i) { i !== null && (t.flags |= 4), t.flags & 16384 && (i = t.tag !== 22 ? Qi() : 536870912, t.lanes |= i, oa |= i) }

    function wr(t, i) { if (!Ae) switch (t.tailMode) {
            case "hidden":
                i = t.tail; for (var r = null; i !== null;) i.alternate !== null && (r = i), i = i.sibling;
                r === null ? t.tail = null : r.sibling = null; break;
            case "collapsed":
                r = t.tail; for (var o = null; r !== null;) r.alternate !== null && (o = r), r = r.sibling;
                o === null ? i || t.tail === null ? t.tail = null : t.tail.sibling = null : o.sibling = null } }

    function Ke(t) { var i = t.alternate !== null && t.alternate.child === t.child,
            r = 0,
            o = 0; if (i)
            for (var h = t.child; h !== null;) r |= h.lanes | h.childLanes, o |= h.subtreeFlags & 65011712, o |= h.flags & 65011712, h.return = t, h = h.sibling;
        else
            for (h = t.child; h !== null;) r |= h.lanes | h.childLanes, o |= h.subtreeFlags, o |= h.flags, h.return = t, h = h.sibling; return t.subtreeFlags |= o, t.childLanes = r, i }

    function u_(t, i, r) { var o = i.pendingProps; switch (Tc(i), i.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ke(i), null;
            case 1:
                return Ke(i), null;
            case 3:
                return r = i.stateNode, o = null, t !== null && (o = t.memoizedState.cache), i.memoizedState.cache !== o && (i.flags |= 2048), Qn(ot), Xe(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (Fs(i) ? ni(i) : t === null || t.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, Ac())), Ke(i), null;
            case 26:
                var h = i.type,
                    f = i.memoizedState; return t === null ? (ni(i), f !== null ? (Ke(i), Sg(i, f)) : (Ke(i), gh(i, h, null, o, r))) : f ? f !== t.memoizedState ? (ni(i), Ke(i), Sg(i, f)) : (Ke(i), i.flags &= -16777217) : (t = t.memoizedProps, t !== o && ni(i), Ke(i), gh(i, h, t, o, r)), null;
            case 27:
                if (Rs(i), r = be.current, h = i.type, t !== null && i.stateNode != null) t.memoizedProps !== o && ni(i);
                else { if (!o) { if (i.stateNode === null) throw Error(a(166)); return Ke(i), null }
                    t = se.current, Fs(i) ? np(i) : (t = ky(h, o, r), i.stateNode = t, ni(i)) } return Ke(i), null;
            case 5:
                if (Rs(i), h = i.type, t !== null && i.stateNode != null) t.memoizedProps !== o && ni(i);
                else { if (!o) { if (i.stateNode === null) throw Error(a(166)); return Ke(i), null } if (f = se.current, Fs(i)) np(i);
                    else { var v = Ol(be.current); switch (f) {
                            case 1:
                                f = v.createElementNS("http://www.w3.org/2000/svg", h); break;
                            case 2:
                                f = v.createElementNS("http://www.w3.org/1998/Math/MathML", h); break;
                            default:
                                switch (h) {
                                    case "svg":
                                        f = v.createElementNS("http://www.w3.org/2000/svg", h); break;
                                    case "math":
                                        f = v.createElementNS("http://www.w3.org/1998/Math/MathML", h); break;
                                    case "script":
                                        f = v.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(f.firstChild); break;
                                    case "select":
                                        f = typeof o.is == "string" ? v.createElement("select", { is: o.is }) : v.createElement("select"), o.multiple ? f.multiple = !0 : o.size && (f.size = o.size); break;
                                    default:
                                        f = typeof o.is == "string" ? v.createElement(h, { is: o.is }) : v.createElement(h) } }
                        f[_t] = i, f[Vt] = o;
                        e: for (v = i.child; v !== null;) { if (v.tag === 5 || v.tag === 6) f.appendChild(v.stateNode);
                            else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) { v.child.return = v, v = v.child; continue } if (v === i) break e; for (; v.sibling === null;) { if (v.return === null || v.return === i) break e;
                                v = v.return }
                            v.sibling.return = v.return, v = v.sibling }
                        i.stateNode = f;
                        e: switch (At(f, h, o), h) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                o = !!o.autoFocus; break e;
                            case "img":
                                o = !0; break e;
                            default:
                                o = !1 }
                        o && ni(i) } } return Ke(i), gh(i, i.type, t === null ? null : t.memoizedProps, i.pendingProps, r), null;
            case 6:
                if (t && i.stateNode != null) t.memoizedProps !== o && ni(i);
                else { if (typeof o != "string" && i.stateNode === null) throw Error(a(166)); if (t = be.current, Fs(i)) { if (t = i.stateNode, r = i.memoizedProps, o = null, h = St, h !== null) switch (h.tag) {
                            case 27:
                            case 5:
                                o = h.memoizedProps }
                        t[_t] = i, t = !!(t.nodeValue === r || o !== null && o.suppressHydrationWarning === !0 || by(t.nodeValue, r)), t || Si(i, !0) } else t = Ol(t).createTextNode(o), t[_t] = i, i.stateNode = t } return Ke(i), null;
            case 31:
                if (r = i.memoizedState, t === null || t.memoizedState !== null) { if (o = Fs(i), r !== null) { if (t === null) { if (!o) throw Error(a(318)); if (t = i.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(a(557));
                            t[_t] = i } else as(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
                        Ke(i), t = !1 } else r = Ac(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), t = !0; if (!t) return i.flags & 256 ? (Wt(i), i) : (Wt(i), null); if ((i.flags & 128) !== 0) throw Error(a(558)) } return Ke(i), null;
            case 13:
                if (o = i.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) { if (h = Fs(i), o !== null && o.dehydrated !== null) { if (t === null) { if (!h) throw Error(a(318)); if (h = i.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(a(317));
                            h[_t] = i } else as(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
                        Ke(i), h = !1 } else h = Ac(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = h), h = !0; if (!h) return i.flags & 256 ? (Wt(i), i) : (Wt(i), null) } return Wt(i), (i.flags & 128) !== 0 ? (i.lanes = r, i) : (r = o !== null, t = t !== null && t.memoizedState !== null, r && (o = i.child, h = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (h = o.alternate.memoizedState.cachePool.pool), f = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (f = o.memoizedState.cachePool.pool), f !== h && (o.flags |= 2048)), r !== t && r && (i.child.flags |= 8192), gl(i, i.updateQueue), Ke(i), null);
            case 4:
                return Xe(), t === null && zh(i.stateNode.containerInfo), Ke(i), null;
            case 10:
                return Qn(i.type), Ke(i), null;
            case 19:
                if (V(st), o = i.memoizedState, o === null) return Ke(i), null; if (h = (i.flags & 128) !== 0, f = o.rendering, f === null)
                    if (h) wr(o, !1);
                    else { if (et !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = i.child; t !== null;) { if (f = il(t), f !== null) { for (i.flags |= 128, wr(o, !1), t = f.updateQueue, i.updateQueue = t, gl(i, t), i.subtreeFlags = 0, t = r, r = i.child; r !== null;) Zm(r, t), r = r.sibling; return Q(st, st.current & 1 | 2), Ae && Jn(i, o.treeForkCount), i.child }
                                t = t.sibling }
                        o.tail !== null && Ut() > xl && (i.flags |= 128, h = !0, wr(o, !1), i.lanes = 4194304) }
                else { if (!h)
                        if (t = il(f), t !== null) { if (i.flags |= 128, h = !0, t = t.updateQueue, i.updateQueue = t, gl(i, t), wr(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Ae) return Ke(i), null } else 2 * Ut() - o.renderingStartTime > xl && r !== 536870912 && (i.flags |= 128, h = !0, wr(o, !1), i.lanes = 4194304);
                    o.isBackwards ? (f.sibling = i.child, i.child = f) : (t = o.last, t !== null ? t.sibling = f : i.child = f, o.last = f) } return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ut(), t.sibling = null, r = st.current, Q(st, h ? r & 1 | 2 : r & 1), Ae && Jn(i, o.treeForkCount), t) : (Ke(i), null);
            case 22:
            case 23:
                return Wt(i), Bc(), o = i.memoizedState !== null, t !== null ? t.memoizedState !== null !== o && (i.flags |= 8192) : o && (i.flags |= 8192), o ? (r & 536870912) !== 0 && (i.flags & 128) === 0 && (Ke(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : Ke(i), r = i.updateQueue, r !== null && gl(i, r.retryQueue), r = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), o = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool), o !== r && (i.flags |= 2048), t !== null && V(ls), null;
            case 24:
                return r = null, t !== null && (r = t.memoizedState.cache), i.memoizedState.cache !== r && (i.flags |= 2048), Qn(ot), Ke(i), null;
            case 25:
                return null;
            case 30:
                return null } throw Error(a(156, i.tag)) }

    function c_(t, i) { switch (Tc(i), i.tag) {
            case 1:
                return t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
            case 3:
                return Qn(ot), Xe(), t = i.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (i.flags = t & -65537 | 128, i) : null;
            case 26:
            case 27:
            case 5:
                return Rs(i), null;
            case 31:
                if (i.memoizedState !== null) { if (Wt(i), i.alternate === null) throw Error(a(340));
                    as() } return t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
            case 13:
                if (Wt(i), t = i.memoizedState, t !== null && t.dehydrated !== null) { if (i.alternate === null) throw Error(a(340));
                    as() } return t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
            case 19:
                return V(st), null;
            case 4:
                return Xe(), null;
            case 10:
                return Qn(i.type), null;
            case 22:
            case 23:
                return Wt(i), Bc(), t !== null && V(ls), t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
            case 24:
                return Qn(ot), null;
            case 25:
                return null;
            default:
                return null } }

    function Tg(t, i) { switch (Tc(i), i.tag) {
            case 3:
                Qn(ot), Xe(); break;
            case 26:
            case 27:
            case 5:
                Rs(i); break;
            case 4:
                Xe(); break;
            case 31:
                i.memoizedState !== null && Wt(i); break;
            case 13:
                Wt(i); break;
            case 19:
                V(st); break;
            case 10:
                Qn(i.type); break;
            case 22:
            case 23:
                Wt(i), Bc(), t !== null && V(ls); break;
            case 24:
                Qn(ot) } }

    function xr(t, i) { try { var r = i.updateQueue,
                o = r !== null ? r.lastEffect : null; if (o !== null) { var h = o.next;
                r = h;
                do { if ((r.tag & t) === t) { o = void 0; var f = r.create,
                            v = r.inst;
                        o = f(), v.destroy = o }
                    r = r.next } while (r !== h) } } catch (x) { Le(i, i.return, x) } }

    function ki(t, i, r) { try { var o = i.updateQueue,
                h = o !== null ? o.lastEffect : null; if (h !== null) { var f = h.next;
                o = f;
                do { if ((o.tag & t) === t) { var v = o.inst,
                            x = v.destroy; if (x !== void 0) { v.destroy = void 0, h = i; var T = r,
                                U = x; try { U() } catch ($) { Le(h, T, $) } } }
                    o = o.next } while (o !== f) } } catch ($) { Le(i, i.return, $) } }

    function Eg(t) { var i = t.updateQueue; if (i !== null) { var r = t.stateNode; try { pp(i, r) } catch (o) { Le(t, t.return, o) } } }

    function Ag(t, i, r) { r.props = fs(t.type, t.memoizedProps), r.state = t.memoizedState; try { r.componentWillUnmount() } catch (o) { Le(t, i, o) } }

    function _r(t, i) { try { var r = t.ref; if (r !== null) { switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var o = t.stateNode; break;
                    case 30:
                        o = t.stateNode; break;
                    default:
                        o = t.stateNode }
                typeof r == "function" ? t.refCleanup = r(o) : r.current = o } } catch (h) { Le(t, i, h) } }

    function Pn(t, i) { var r = t.ref,
            o = t.refCleanup; if (r !== null)
            if (typeof o == "function") try { o() } catch (h) { Le(t, i, h) } finally { t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null) } else if (typeof r == "function") try { r(null) } catch (h) { Le(t, i, h) } else r.current = null }

    function jg(t) { var i = t.type,
            r = t.memoizedProps,
            o = t.stateNode; try { e: switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    r.autoFocus && o.focus(); break e;
                case "img":
                    r.src ? o.src = r.src : r.srcSet && (o.srcset = r.srcSet) } }
        catch (h) { Le(t, t.return, h) } }

    function yh(t, i, r) { try { var o = t.stateNode;
            N_(o, t.type, r, i), o[Vt] = i } catch (h) { Le(t, t.return, h) } }

    function Cg(t) { return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Pi(t.type) || t.tag === 4 }

    function vh(t) { e: for (;;) { for (; t.sibling === null;) { if (t.return === null || Cg(t.return)) return null;
                t = t.return } for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) { if (t.tag === 27 && Pi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
                t.child.return = t, t = t.child } if (!(t.flags & 2)) return t.stateNode } }

    function bh(t, i, r) { var o = t.tag; if (o === 5 || o === 6) t = t.stateNode, i ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(t, i) : (i = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, i.appendChild(t), r = r._reactRootContainer, r != null || i.onclick !== null || (i.onclick = Yn));
        else if (o !== 4 && (o === 27 && Pi(t.type) && (r = t.stateNode, i = null), t = t.child, t !== null))
            for (bh(t, i, r), t = t.sibling; t !== null;) bh(t, i, r), t = t.sibling }

    function yl(t, i, r) { var o = t.tag; if (o === 5 || o === 6) t = t.stateNode, i ? r.insertBefore(t, i) : r.appendChild(t);
        else if (o !== 4 && (o === 27 && Pi(t.type) && (r = t.stateNode), t = t.child, t !== null))
            for (yl(t, i, r), t = t.sibling; t !== null;) yl(t, i, r), t = t.sibling }

    function Rg(t) { var i = t.stateNode,
            r = t.memoizedProps; try { for (var o = t.type, h = i.attributes; h.length;) i.removeAttributeNode(h[0]);
            At(i, o, r), i[_t] = t, i[Vt] = r } catch (f) { Le(t, t.return, f) } } var ii = !1,
        ct = !1,
        wh = !1,
        kg = typeof WeakSet == "function" ? WeakSet : Set,
        yt = null;

    function h_(t, i) { if (t = t.containerInfo, Hh = zl, t = $m(t), fc(t)) { if ("selectionStart" in t) var r = { start: t.selectionStart, end: t.selectionEnd };
            else e: { r = (r = t.ownerDocument) && r.defaultView || window; var o = r.getSelection && r.getSelection(); if (o && o.rangeCount !== 0) { r = o.anchorNode; var h = o.anchorOffset,
                        f = o.focusNode;
                    o = o.focusOffset; try { r.nodeType, f.nodeType } catch { r = null; break e } var v = 0,
                        x = -1,
                        T = -1,
                        U = 0,
                        $ = 0,
                        I = t,
                        P = null;
                    t: for (;;) { for (var z; I !== r || h !== 0 && I.nodeType !== 3 || (x = v + h), I !== f || o !== 0 && I.nodeType !== 3 || (T = v + o), I.nodeType === 3 && (v += I.nodeValue.length), (z = I.firstChild) !== null;) P = I, I = z; for (;;) { if (I === t) break t; if (P === r && ++U === h && (x = v), P === f && ++$ === o && (T = v), (z = I.nextSibling) !== null) break;
                            I = P, P = I.parentNode }
                        I = z }
                    r = x === -1 || T === -1 ? null : { start: x, end: T } } else r = null }
            r = r || { start: 0, end: 0 } } else r = null; for ($h = { focusedElem: t, selectionRange: r }, zl = !1, yt = i; yt !== null;)
            if (i = yt, t = i.child, (i.subtreeFlags & 1028) !== 0 && t !== null) t.return = i, yt = t;
            else
                for (; yt !== null;) { switch (i = yt, f = i.alternate, t = i.flags, i.tag) {
                        case 0:
                            if ((t & 4) !== 0 && (t = i.updateQueue, t = t !== null ? t.events : null, t !== null))
                                for (r = 0; r < t.length; r++) h = t[r], h.ref.impl = h.nextImpl; break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && f !== null) { t = void 0, r = i, h = f.memoizedProps, f = f.memoizedState, o = r.stateNode; try { var ie = fs(r.type, h);
                                    t = o.getSnapshotBeforeUpdate(ie, f), o.__reactInternalSnapshotBeforeUpdate = t } catch (ue) { Le(r, r.return, ue) } } break;
                        case 3:
                            if ((t & 1024) !== 0) { if (t = i.stateNode.containerInfo, r = t.nodeType, r === 9) Gh(t);
                                else if (r === 1) switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Gh(t); break;
                                    default:
                                        t.textContent = "" } } break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(a(163)) } if (t = i.sibling, t !== null) { t.return = i.return, yt = t; break }
                    yt = i.return } }

    function Og(t, i, r) { var o = r.flags; switch (r.tag) {
            case 0:
            case 11:
            case 15:
                ai(t, r), o & 4 && xr(5, r); break;
            case 1:
                if (ai(t, r), o & 4)
                    if (t = r.stateNode, i === null) try { t.componentDidMount() } catch (v) { Le(r, r.return, v) } else { var h = fs(r.type, i.memoizedProps);
                        i = i.memoizedState; try { t.componentDidUpdate(h, i, t.__reactInternalSnapshotBeforeUpdate) } catch (v) { Le(r, r.return, v) } }
                    o & 64 && Eg(r), o & 512 && _r(r, r.return); break;
            case 3:
                if (ai(t, r), o & 64 && (t = r.updateQueue, t !== null)) { if (i = null, r.child !== null) switch (r.child.tag) {
                        case 27:
                        case 5:
                            i = r.child.stateNode; break;
                        case 1:
                            i = r.child.stateNode }
                    try { pp(t, i) } catch (v) { Le(r, r.return, v) } } break;
            case 27:
                i === null && o & 4 && Rg(r);
            case 26:
            case 5:
                ai(t, r), i === null && o & 4 && jg(r), o & 512 && _r(r, r.return); break;
            case 12:
                ai(t, r); break;
            case 31:
                ai(t, r), o & 4 && Mg(t, r); break;
            case 13:
                ai(t, r), o & 4 && Ug(t, r), o & 64 && (t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null && (r = w_.bind(null, r), V_(t, r)))); break;
            case 22:
                if (o = r.memoizedState !== null || ii, !o) { i = i !== null && i.memoizedState !== null || ct, h = ii; var f = ct;
                    ii = o, (ct = i) && !f ? ri(t, r, (r.subtreeFlags & 8772) !== 0) : ai(t, r), ii = h, ct = f } break;
            case 30:
                break;
            default:
                ai(t, r) } }

    function Ng(t) { var i = t.alternate;
        i !== null && (t.alternate = null, Ng(i)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (i = t.stateNode, i !== null && Ju(i)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null } var Ye = null,
        $t = !1;

    function si(t, i, r) { for (r = r.child; r !== null;) Dg(t, i, r), r = r.sibling }

    function Dg(t, i, r) { if (B && typeof B.onCommitFiberUnmount == "function") try { B.onCommitFiberUnmount(D, r) } catch {}
        switch (r.tag) {
            case 26:
                ct || Pn(r, i), si(t, i, r), r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode, r.parentNode.removeChild(r)); break;
            case 27:
                ct || Pn(r, i); var o = Ye,
                    h = $t;
                Pi(r.type) && (Ye = r.stateNode, $t = !1), si(t, i, r), Or(r.stateNode), Ye = o, $t = h; break;
            case 5:
                ct || Pn(r, i);
            case 6:
                if (o = Ye, h = $t, Ye = null, si(t, i, r), Ye = o, $t = h, Ye !== null)
                    if ($t) try {
                        (Ye.nodeType === 9 ? Ye.body : Ye.nodeName === "HTML" ? Ye.ownerDocument.body : Ye).removeChild(r.stateNode) } catch (f) { Le(r, i, f) } else try { Ye.removeChild(r.stateNode) } catch (f) { Le(r, i, f) }
                    break;
            case 18:
                Ye !== null && ($t ? (t = Ye, Ey(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, r.stateNode), pa(t)) : Ey(Ye, r.stateNode)); break;
            case 4:
                o = Ye, h = $t, Ye = r.stateNode.containerInfo, $t = !0, si(t, i, r), Ye = o, $t = h; break;
            case 0:
            case 11:
            case 14:
            case 15:
                ki(2, r, i), ct || ki(4, r, i), si(t, i, r); break;
            case 1:
                ct || (Pn(r, i), o = r.stateNode, typeof o.componentWillUnmount == "function" && Ag(r, i, o)), si(t, i, r); break;
            case 21:
                si(t, i, r); break;
            case 22:
                ct = (o = ct) || r.memoizedState !== null, si(t, i, r), ct = o; break;
            default:
                si(t, i, r) } }

    function Mg(t, i) { if (i.memoizedState === null && (t = i.alternate, t !== null && (t = t.memoizedState, t !== null))) { t = t.dehydrated; try { pa(t) } catch (r) { Le(i, i.return, r) } } }

    function Ug(t, i) { if (i.memoizedState === null && (t = i.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try { pa(t) } catch (r) { Le(i, i.return, r) } }

    function d_(t) { switch (t.tag) {
            case 31:
            case 13:
            case 19:
                var i = t.stateNode; return i === null && (i = t.stateNode = new kg), i;
            case 22:
                return t = t.stateNode, i = t._retryCache, i === null && (i = t._retryCache = new kg), i;
            default:
                throw Error(a(435, t.tag)) } }

    function vl(t, i) { var r = d_(t);
        i.forEach(function(o) { if (!r.has(o)) { r.add(o); var h = x_.bind(null, t, o);
                o.then(h, h) } }) }

    function qt(t, i) { var r = i.deletions; if (r !== null)
            for (var o = 0; o < r.length; o++) { var h = r[o],
                    f = t,
                    v = i,
                    x = v;
                e: for (; x !== null;) { switch (x.tag) {
                        case 27:
                            if (Pi(x.type)) { Ye = x.stateNode, $t = !1; break e } break;
                        case 5:
                            Ye = x.stateNode, $t = !1; break e;
                        case 3:
                        case 4:
                            Ye = x.stateNode.containerInfo, $t = !0; break e }
                    x = x.return }
                if (Ye === null) throw Error(a(160));
                Dg(f, v, h), Ye = null, $t = !1, f = h.alternate, f !== null && (f.return = null), h.return = null }
        if (i.subtreeFlags & 13886)
            for (i = i.child; i !== null;) Lg(i, t), i = i.sibling } var Cn = null;

    function Lg(t, i) { var r = t.alternate,
            o = t.flags; switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                qt(i, t), It(t), o & 4 && (ki(3, t, t.return), xr(3, t), ki(5, t, t.return)); break;
            case 1:
                qt(i, t), It(t), o & 512 && (ct || r === null || Pn(r, r.return)), o & 64 && ii && (t = t.updateQueue, t !== null && (o = t.callbacks, o !== null && (r = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = r === null ? o : r.concat(o)))); break;
            case 26:
                var h = Cn; if (qt(i, t), It(t), o & 512 && (ct || r === null || Pn(r, r.return)), o & 4) { var f = r !== null ? r.memoizedState : null; if (o = t.memoizedState, r === null)
                        if (o === null)
                            if (t.stateNode === null) { e: { o = t.type, r = t.memoizedProps, h = h.ownerDocument || h;t: switch (o) {
                                        case "title":
                                            f = h.getElementsByTagName("title")[0], (!f || f[Xa] || f[_t] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = h.createElement(o), h.head.insertBefore(f, h.querySelector("head > title"))), At(f, o, r), f[_t] = t, gt(f), o = f; break e;
                                        case "link":
                                            var v = Ly("link", "href", h).get(o + (r.href || "")); if (v) { for (var x = 0; x < v.length; x++)
                                                    if (f = v[x], f.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && f.getAttribute("rel") === (r.rel == null ? null : r.rel) && f.getAttribute("title") === (r.title == null ? null : r.title) && f.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) { v.splice(x, 1); break t } }
                                            f = h.createElement(o), At(f, o, r), h.head.appendChild(f); break;
                                        case "meta":
                                            if (v = Ly("meta", "content", h).get(o + (r.content || ""))) { for (x = 0; x < v.length; x++)
                                                    if (f = v[x], f.getAttribute("content") === (r.content == null ? null : "" + r.content) && f.getAttribute("name") === (r.name == null ? null : r.name) && f.getAttribute("property") === (r.property == null ? null : r.property) && f.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && f.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) { v.splice(x, 1); break t } }
                                            f = h.createElement(o), At(f, o, r), h.head.appendChild(f); break;
                                        default:
                                            throw Error(a(468, o)) }
                                    f[_t] = t, gt(f), o = f }
                                t.stateNode = o }
                            else Py(h, t.type, t.stateNode);
                    else t.stateNode = Uy(h, o, t.memoizedProps);
                    else f !== o ? (f === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : f.count--, o === null ? Py(h, t.type, t.stateNode) : Uy(h, o, t.memoizedProps)) : o === null && t.stateNode !== null && yh(t, t.memoizedProps, r.memoizedProps) } break;
            case 27:
                qt(i, t), It(t), o & 512 && (ct || r === null || Pn(r, r.return)), r !== null && o & 4 && yh(t, t.memoizedProps, r.memoizedProps); break;
            case 5:
                if (qt(i, t), It(t), o & 512 && (ct || r === null || Pn(r, r.return)), t.flags & 32) { h = t.stateNode; try { zs(h, "") } catch (ie) { Le(t, t.return, ie) } }
                o & 4 && t.stateNode != null && (h = t.memoizedProps, yh(t, h, r !== null ? r.memoizedProps : h)), o & 1024 && (wh = !0); break;
            case 6:
                if (qt(i, t), It(t), o & 4) { if (t.stateNode === null) throw Error(a(162));
                    o = t.memoizedProps, r = t.stateNode; try { r.nodeValue = o } catch (ie) { Le(t, t.return, ie) } } break;
            case 3:
                if (Ml = null, h = Cn, Cn = Nl(i.containerInfo), qt(i, t), Cn = h, It(t), o & 4 && r !== null && r.memoizedState.isDehydrated) try { pa(i.containerInfo) } catch (ie) { Le(t, t.return, ie) }
                wh && (wh = !1, Pg(t)); break;
            case 4:
                o = Cn, Cn = Nl(t.stateNode.containerInfo), qt(i, t), It(t), Cn = o; break;
            case 12:
                qt(i, t), It(t); break;
            case 31:
                qt(i, t), It(t), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, vl(t, o))); break;
            case 13:
                qt(i, t), It(t), t.child.flags & 8192 && t.memoizedState !== null != (r !== null && r.memoizedState !== null) && (wl = Ut()), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, vl(t, o))); break;
            case 22:
                h = t.memoizedState !== null; var T = r !== null && r.memoizedState !== null,
                    U = ii,
                    $ = ct; if (ii = U || h, ct = $ || T, qt(i, t), ct = $, ii = U, It(t), o & 8192) e: for (i = t.stateNode, i._visibility = h ? i._visibility & -2 : i._visibility | 1, h && (r === null || T || ii || ct || ms(t)), r = null, i = t;;) { if (i.tag === 5 || i.tag === 26) { if (r === null) { T = r = i; try { if (f = T.stateNode, h) v = f.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                                else { x = T.stateNode; var I = T.memoizedProps.style,
                                        P = I != null && I.hasOwnProperty("display") ? I.display : null;
                                    x.style.display = P == null || typeof P == "boolean" ? "" : ("" + P).trim() } } catch (ie) { Le(T, T.return, ie) } } } else if (i.tag === 6) { if (r === null) { T = i; try { T.stateNode.nodeValue = h ? "" : T.memoizedProps } catch (ie) { Le(T, T.return, ie) } } } else if (i.tag === 18) { if (r === null) { T = i; try { var z = T.stateNode;
                                h ? Ay(z, !0) : Ay(T.stateNode, !1) } catch (ie) { Le(T, T.return, ie) } } } else if ((i.tag !== 22 && i.tag !== 23 || i.memoizedState === null || i === t) && i.child !== null) { i.child.return = i, i = i.child; continue } if (i === t) break e; for (; i.sibling === null;) { if (i.return === null || i.return === t) break e;
                        r === i && (r = null), i = i.return }
                    r === i && (r = null), i.sibling.return = i.return, i = i.sibling }
                o & 4 && (o = t.updateQueue, o !== null && (r = o.retryQueue, r !== null && (o.retryQueue = null, vl(t, r)))); break;
            case 19:
                qt(i, t), It(t), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, vl(t, o))); break;
            case 30:
                break;
            case 21:
                break;
            default:
                qt(i, t), It(t) } }

    function It(t) { var i = t.flags; if (i & 2) { try { for (var r, o = t.return; o !== null;) { if (Cg(o)) { r = o; break }
                    o = o.return } if (r == null) throw Error(a(160)); switch (r.tag) {
                    case 27:
                        var h = r.stateNode,
                            f = vh(t);
                        yl(t, f, h); break;
                    case 5:
                        var v = r.stateNode;
                        r.flags & 32 && (zs(v, ""), r.flags &= -33); var x = vh(t);
                        yl(t, x, v); break;
                    case 3:
                    case 4:
                        var T = r.stateNode.containerInfo,
                            U = vh(t);
                        bh(t, U, T); break;
                    default:
                        throw Error(a(161)) } } catch ($) { Le(t, t.return, $) }
            t.flags &= -3 }
        i & 4096 && (t.flags &= -4097) }

    function Pg(t) { if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) { var i = t;
                Pg(i), i.tag === 5 && i.flags & 1024 && i.stateNode.reset(), t = t.sibling } }

    function ai(t, i) { if (i.subtreeFlags & 8772)
            for (i = i.child; i !== null;) Og(t, i.alternate, i), i = i.sibling }

    function ms(t) { for (t = t.child; t !== null;) { var i = t; switch (i.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ki(4, i, i.return), ms(i); break;
                case 1:
                    Pn(i, i.return); var r = i.stateNode;
                    typeof r.componentWillUnmount == "function" && Ag(i, i.return, r), ms(i); break;
                case 27:
                    Or(i.stateNode);
                case 26:
                case 5:
                    Pn(i, i.return), ms(i); break;
                case 22:
                    i.memoizedState === null && ms(i); break;
                case 30:
                    ms(i); break;
                default:
                    ms(i) }
            t = t.sibling } }

    function ri(t, i, r) { for (r = r && (i.subtreeFlags & 8772) !== 0, i = i.child; i !== null;) { var o = i.alternate,
                h = t,
                f = i,
                v = f.flags; switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    ri(h, f, r), xr(4, f); break;
                case 1:
                    if (ri(h, f, r), o = f, h = o.stateNode, typeof h.componentDidMount == "function") try { h.componentDidMount() } catch (U) { Le(o, o.return, U) }
                    if (o = f, h = o.updateQueue, h !== null) { var x = o.stateNode; try { var T = h.shared.hiddenCallbacks; if (T !== null)
                                for (h.shared.hiddenCallbacks = null, h = 0; h < T.length; h++) mp(T[h], x) } catch (U) { Le(o, o.return, U) } }
                    r && v & 64 && Eg(f), _r(f, f.return); break;
                case 27:
                    Rg(f);
                case 26:
                case 5:
                    ri(h, f, r), r && o === null && v & 4 && jg(f), _r(f, f.return); break;
                case 12:
                    ri(h, f, r); break;
                case 31:
                    ri(h, f, r), r && v & 4 && Mg(h, f); break;
                case 13:
                    ri(h, f, r), r && v & 4 && Ug(h, f); break;
                case 22:
                    f.memoizedState === null && ri(h, f, r), _r(f, f.return); break;
                case 30:
                    break;
                default:
                    ri(h, f, r) }
            i = i.sibling } }

    function xh(t, i) { var r = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), t = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (t = i.memoizedState.cachePool.pool), t !== r && (t != null && t.refCount++, r != null && lr(r)) }

    function _h(t, i) { t = null, i.alternate !== null && (t = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== t && (i.refCount++, t != null && lr(t)) }

    function Rn(t, i, r, o) { if (i.subtreeFlags & 10256)
            for (i = i.child; i !== null;) zg(t, i, r, o), i = i.sibling }

    function zg(t, i, r, o) { var h = i.flags; switch (i.tag) {
            case 0:
            case 11:
            case 15:
                Rn(t, i, r, o), h & 2048 && xr(9, i); break;
            case 1:
                Rn(t, i, r, o); break;
            case 3:
                Rn(t, i, r, o), h & 2048 && (t = null, i.alternate !== null && (t = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== t && (i.refCount++, t != null && lr(t))); break;
            case 12:
                if (h & 2048) { Rn(t, i, r, o), t = i.stateNode; try { var f = i.memoizedProps,
                            v = f.id,
                            x = f.onPostCommit;
                        typeof x == "function" && x(v, i.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0) } catch (T) { Le(i, i.return, T) } } else Rn(t, i, r, o); break;
            case 31:
                Rn(t, i, r, o); break;
            case 13:
                Rn(t, i, r, o); break;
            case 23:
                break;
            case 22:
                f = i.stateNode, v = i.alternate, i.memoizedState !== null ? f._visibility & 2 ? Rn(t, i, r, o) : Sr(t, i) : f._visibility & 2 ? Rn(t, i, r, o) : (f._visibility |= 2, sa(t, i, r, o, (i.subtreeFlags & 10256) !== 0 || !1)), h & 2048 && xh(v, i); break;
            case 24:
                Rn(t, i, r, o), h & 2048 && _h(i.alternate, i); break;
            default:
                Rn(t, i, r, o) } }

    function sa(t, i, r, o, h) { for (h = h && ((i.subtreeFlags & 10256) !== 0 || !1), i = i.child; i !== null;) { var f = t,
                v = i,
                x = r,
                T = o,
                U = v.flags; switch (v.tag) {
                case 0:
                case 11:
                case 15:
                    sa(f, v, x, T, h), xr(8, v); break;
                case 23:
                    break;
                case 22:
                    var $ = v.stateNode;
                    v.memoizedState !== null ? $._visibility & 2 ? sa(f, v, x, T, h) : Sr(f, v) : ($._visibility |= 2, sa(f, v, x, T, h)), h && U & 2048 && xh(v.alternate, v); break;
                case 24:
                    sa(f, v, x, T, h), h && U & 2048 && _h(v.alternate, v); break;
                default:
                    sa(f, v, x, T, h) }
            i = i.sibling } }

    function Sr(t, i) { if (i.subtreeFlags & 10256)
            for (i = i.child; i !== null;) { var r = t,
                    o = i,
                    h = o.flags; switch (o.tag) {
                    case 22:
                        Sr(r, o), h & 2048 && xh(o.alternate, o); break;
                    case 24:
                        Sr(r, o), h & 2048 && _h(o.alternate, o); break;
                    default:
                        Sr(r, o) }
                i = i.sibling } } var Tr = 8192;

    function aa(t, i, r) { if (t.subtreeFlags & Tr)
            for (t = t.child; t !== null;) Bg(t, i, r), t = t.sibling }

    function Bg(t, i, r) { switch (t.tag) {
            case 26:
                aa(t, i, r), t.flags & Tr && t.memoizedState !== null && Q_(r, Cn, t.memoizedState, t.memoizedProps); break;
            case 5:
                aa(t, i, r); break;
            case 3:
            case 4:
                var o = Cn;
                Cn = Nl(t.stateNode.containerInfo), aa(t, i, r), Cn = o; break;
            case 22:
                t.memoizedState === null && (o = t.alternate, o !== null && o.memoizedState !== null ? (o = Tr, Tr = 16777216, aa(t, i, r), Tr = o) : aa(t, i, r)); break;
            default:
                aa(t, i, r) } }

    function Vg(t) { var i = t.alternate; if (i !== null && (t = i.child, t !== null)) { i.child = null;
            do i = t.sibling, t.sibling = null, t = i; while (t !== null) } }

    function Er(t) { var i = t.deletions; if ((t.flags & 16) !== 0) { if (i !== null)
                for (var r = 0; r < i.length; r++) { var o = i[r];
                    yt = o, $g(o, t) }
            Vg(t) } if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) Hg(t), t = t.sibling }

    function Hg(t) { switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Er(t), t.flags & 2048 && ki(9, t, t.return); break;
            case 3:
                Er(t); break;
            case 12:
                Er(t); break;
            case 22:
                var i = t.stateNode;
                t.memoizedState !== null && i._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (i._visibility &= -3, bl(t)) : Er(t); break;
            default:
                Er(t) } }

    function bl(t) { var i = t.deletions; if ((t.flags & 16) !== 0) { if (i !== null)
                for (var r = 0; r < i.length; r++) { var o = i[r];
                    yt = o, $g(o, t) }
            Vg(t) } for (t = t.child; t !== null;) { switch (i = t, i.tag) {
                case 0:
                case 11:
                case 15:
                    ki(8, i, i.return), bl(i); break;
                case 22:
                    r = i.stateNode, r._visibility & 2 && (r._visibility &= -3, bl(i)); break;
                default:
                    bl(i) }
            t = t.sibling } }

    function $g(t, i) { for (; yt !== null;) { var r = yt; switch (r.tag) {
                case 0:
                case 11:
                case 15:
                    ki(8, r, i); break;
                case 23:
                case 22:
                    if (r.memoizedState !== null && r.memoizedState.cachePool !== null) { var o = r.memoizedState.cachePool.pool;
                        o != null && o.refCount++ } break;
                case 24:
                    lr(r.memoizedState.cache) } if (o = r.child, o !== null) o.return = r, yt = o;
            else e: for (r = t; yt !== null;) { o = yt; var h = o.sibling,
                    f = o.return; if (Ng(o), o === r) { yt = null; break e } if (h !== null) { h.return = f, yt = h; break e }
                yt = f } } } var f_ = { getCacheForType: function(t) { var i = Tt(ot),
                    r = i.data.get(t); return r === void 0 && (r = t(), i.data.set(t, r)), r }, cacheSignal: function() { return Tt(ot).controller.signal } },
        m_ = typeof WeakMap == "function" ? WeakMap : Map,
        De = 0,
        $e = null,
        xe = null,
        Te = 0,
        Ue = 0,
        en = null,
        Oi = !1,
        ra = !1,
        Sh = !1,
        oi = 0,
        et = 0,
        Ni = 0,
        ps = 0,
        Th = 0,
        tn = 0,
        oa = 0,
        Ar = null,
        Gt = null,
        Eh = !1,
        wl = 0,
        qg = 0,
        xl = 1 / 0,
        _l = null,
        Di = null,
        mt = 0,
        Mi = null,
        la = null,
        li = 0,
        Ah = 0,
        jh = null,
        Ig = null,
        jr = 0,
        Ch = null;

    function nn() { return (De & 2) !== 0 && Te !== 0 ? Te & -Te : H.T !== null ? Mh() : Ya() }

    function Gg() { if (tn === 0)
            if ((Te & 536870912) === 0 || Ae) { var t = Xt;
                Xt <<= 1, (Xt & 3932160) === 0 && (Xt = 262144), tn = t } else tn = 536870912;
        return t = Qt.current, t !== null && (t.flags |= 32), tn }

    function Kt(t, i, r) {
        (t === $e && (Ue === 2 || Ue === 9) || t.cancelPendingCommit !== null) && (ua(t, 0), Ui(t, Te, tn, !1)), Gn(t, r), ((De & 2) === 0 || t !== $e) && (t === $e && ((De & 2) === 0 && (ps |= r), et === 4 && Ui(t, Te, tn, !1)), zn(t)) }

    function Kg(t, i, r) { if ((De & 6) !== 0) throw Error(a(327)); var o = !r && (i & 127) === 0 && (i & t.expiredLanes) === 0 || ln(t, i),
            h = o ? y_(t, i) : kh(t, i, !0),
            f = o;
        do { if (h === 0) { ra && !o && Ui(t, i, 0, !1); break } else { if (r = t.current.alternate, f && !p_(r)) { h = kh(t, i, !1), f = !1; continue } if (h === 2) { if (f = i, t.errorRecoveryDisabledLanes & f) var v = 0;
                    else v = t.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0; if (v !== 0) { i = v;
                        e: { var x = t;h = Ar; var T = x.current.memoizedState.isDehydrated; if (T && (ua(x, v).flags |= 256), v = kh(x, v, !1), v !== 2) { if (Sh && !T) { x.errorRecoveryDisabledLanes |= f, ps |= f, h = 4; break e }
                                f = Gt, Gt = h, f !== null && (Gt === null ? Gt = f : Gt.push.apply(Gt, f)) }
                            h = v }
                        if (f = !1, h !== 2) continue } } if (h === 1) { ua(t, 0), Ui(t, i, 0, !0); break }
                e: { switch (o = t, f = h, f) {
                        case 0:
                        case 1:
                            throw Error(a(345));
                        case 4:
                            if ((i & 4194048) !== i) break;
                        case 6:
                            Ui(o, i, tn, !Oi); break e;
                        case 2:
                            Gt = null; break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(a(329)) } if ((i & 62914560) === i && (h = wl + 300 - Ut(), 10 < h)) { if (Ui(o, i, tn, !Oi), on(o, 0, !0) !== 0) break e;
                        li = i, o.timeoutHandle = Sy(Yg.bind(null, o, r, Gt, _l, Eh, i, tn, ps, oa, Oi, f, "Throttled", -0, 0), h); break e }
                    Yg(o, r, Gt, _l, Eh, i, tn, ps, oa, Oi, f, null, -0, 0) } } break } while (!0);
        zn(t) }

    function Yg(t, i, r, o, h, f, v, x, T, U, $, I, P, z) { if (t.timeoutHandle = -1, I = i.subtreeFlags, I & 8192 || (I & 16785408) === 16785408) { I = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: Yn }, Bg(i, f, I); var ie = (f & 62914560) === f ? wl - Ut() : (f & 4194048) === f ? qg - Ut() : 0; if (ie = W_(I, ie), ie !== null) { li = f, t.cancelPendingCommit = ie(ty.bind(null, t, i, f, r, o, h, v, x, T, $, I, null, P, z)), Ui(t, f, v, !U); return } }
        ty(t, i, f, r, o, h, v, x, T) }

    function p_(t) { for (var i = t;;) { var r = i.tag; if ((r === 0 || r === 11 || r === 15) && i.flags & 16384 && (r = i.updateQueue, r !== null && (r = r.stores, r !== null)))
                for (var o = 0; o < r.length; o++) { var h = r[o],
                        f = h.getSnapshot;
                    h = h.value; try { if (!Jt(f(), h)) return !1 } catch { return !1 } }
            if (r = i.child, i.subtreeFlags & 16384 && r !== null) r.return = i, i = r;
            else { if (i === t) break; for (; i.sibling === null;) { if (i.return === null || i.return === t) return !0;
                    i = i.return }
                i.sibling.return = i.return, i = i.sibling } } return !0 }

    function Ui(t, i, r, o) { i &= ~Th, i &= ~ps, t.suspendedLanes |= i, t.pingedLanes &= ~i, o && (t.warmLanes |= i), o = t.expirationTimes; for (var h = i; 0 < h;) { var f = 31 - K(h),
                v = 1 << f;
            o[f] = -1, h &= ~v }
        r !== 0 && Ka(t, r, i) }

    function Sl() { return (De & 6) === 0 ? (Cr(0), !1) : !0 }

    function Rh() { if (xe !== null) { if (Ue === 0) var t = xe.return;
            else t = xe, Zn = rs = null, Gc(t), Ws = null, cr = 0, t = xe; for (; t !== null;) Tg(t.alternate, t), t = t.return;
            xe = null } }

    function ua(t, i) { var r = t.timeoutHandle;
        r !== -1 && (t.timeoutHandle = -1, U_(r)), r = t.cancelPendingCommit, r !== null && (t.cancelPendingCommit = null, r()), li = 0, Rh(), $e = t, xe = r = Xn(t.current, null), Te = i, Ue = 0, en = null, Oi = !1, ra = ln(t, i), Sh = !1, oa = tn = Th = ps = Ni = et = 0, Gt = Ar = null, Eh = !1, (i & 8) !== 0 && (i |= i & 32); var o = t.entangledLanes; if (o !== 0)
            for (t = t.entanglements, o &= i; 0 < o;) { var h = 31 - K(o),
                    f = 1 << h;
                i |= t[h], o &= ~f }
        return oi = i, Io(), r }

    function Fg(t, i) { ye = null, H.H = vr, i === Qs || i === Qo ? (i = cp(), Ue = 3) : i === Dc ? (i = cp(), Ue = 4) : Ue = i === oh ? 8 : i !== null && typeof i == "object" && typeof i.then == "function" ? 6 : 1, en = i, xe === null && (et = 1, dl(t, dn(i, t.current))) }

    function Xg() { var t = Qt.current; return t === null ? !0 : (Te & 4194048) === Te ? gn === null : (Te & 62914560) === Te || (Te & 536870912) !== 0 ? t === gn : !1 }

    function Jg() { var t = H.H; return H.H = vr, t === null ? vr : t }

    function Zg() { var t = H.A; return H.A = f_, t }

    function Tl() { et = 4, Oi || (Te & 4194048) !== Te && Qt.current !== null || (ra = !0), (Ni & 134217727) === 0 && (ps & 134217727) === 0 || $e === null || Ui($e, Te, tn, !1) }

    function kh(t, i, r) { var o = De;
        De |= 2; var h = Jg(),
            f = Zg();
        ($e !== t || Te !== i) && (_l = null, ua(t, i)), i = !1; var v = et;
        e: do try { if (Ue !== 0 && xe !== null) { var x = xe,
                        T = en; switch (Ue) {
                        case 8:
                            Rh(), v = 6; break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Qt.current === null && (i = !0); var U = Ue; if (Ue = 0, en = null, ca(t, x, T, U), r && ra) { v = 0; break e } break;
                        default:
                            U = Ue, Ue = 0, en = null, ca(t, x, T, U) } }
                g_(), v = et; break } catch ($) { Fg(t, $) }
            while (!0);
            return i && t.shellSuspendCounter++, Zn = rs = null, De = o, H.H = h, H.A = f, xe === null && ($e = null, Te = 0, Io()), v }

    function g_() { for (; xe !== null;) Qg(xe) }

    function y_(t, i) { var r = De;
        De |= 2; var o = Jg(),
            h = Zg();
        $e !== t || Te !== i ? (_l = null, xl = Ut() + 500, ua(t, i)) : ra = ln(t, i);
        e: do try { if (Ue !== 0 && xe !== null) { i = xe; var f = en;
                    t: switch (Ue) {
                        case 1:
                            Ue = 0, en = null, ca(t, i, f, 1); break;
                        case 2:
                        case 9:
                            if (lp(f)) { Ue = 0, en = null, Wg(i); break }
                            i = function() { Ue !== 2 && Ue !== 9 || $e !== t || (Ue = 7), zn(t) }, f.then(i, i); break e;
                        case 3:
                            Ue = 7; break e;
                        case 4:
                            Ue = 5; break e;
                        case 7:
                            lp(f) ? (Ue = 0, en = null, Wg(i)) : (Ue = 0, en = null, ca(t, i, f, 7)); break;
                        case 5:
                            var v = null; switch (xe.tag) {
                                case 26:
                                    v = xe.memoizedState;
                                case 5:
                                case 27:
                                    var x = xe; if (v ? zy(v) : x.stateNode.complete) { Ue = 0, en = null; var T = x.sibling; if (T !== null) xe = T;
                                        else { var U = x.return;
                                            U !== null ? (xe = U, El(U)) : xe = null } break t } }
                            Ue = 0, en = null, ca(t, i, f, 5); break;
                        case 6:
                            Ue = 0, en = null, ca(t, i, f, 6); break;
                        case 8:
                            Rh(), et = 6; break e;
                        default:
                            throw Error(a(462)) } }
                v_(); break } catch ($) { Fg(t, $) }
            while (!0);
            return Zn = rs = null, H.H = o, H.A = h, De = r, xe !== null ? 0 : ($e = null, Te = 0, Io(), et) }

    function v_() { for (; xe !== null && !Iu();) Qg(xe) }

    function Qg(t) { var i = _g(t.alternate, t, oi);
        t.memoizedProps = t.pendingProps, i === null ? El(t) : xe = i }

    function Wg(t) { var i = t,
            r = i.alternate; switch (i.tag) {
            case 15:
            case 0:
                i = gg(r, i, i.pendingProps, i.type, void 0, Te); break;
            case 11:
                i = gg(r, i, i.pendingProps, i.type.render, i.ref, Te); break;
            case 5:
                Gc(i);
            default:
                Tg(r, i), i = xe = Zm(i, oi), i = _g(r, i, oi) }
        t.memoizedProps = t.pendingProps, i === null ? El(t) : xe = i }

    function ca(t, i, r, o) { Zn = rs = null, Gc(i), Ws = null, cr = 0; var h = i.return; try { if (r_(t, h, i, r, Te)) { et = 1, dl(t, dn(r, t.current)), xe = null; return } } catch (f) { if (h !== null) throw xe = h, f;
            et = 1, dl(t, dn(r, t.current)), xe = null; return }
        i.flags & 32768 ? (Ae || o === 1 ? t = !0 : ra || (Te & 536870912) !== 0 ? t = !1 : (Oi = t = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Qt.current, o !== null && o.tag === 13 && (o.flags |= 16384))), ey(i, t)) : El(i) }

    function El(t) { var i = t;
        do { if ((i.flags & 32768) !== 0) { ey(i, Oi); return }
            t = i.return; var r = u_(i.alternate, i, oi); if (r !== null) { xe = r; return } if (i = i.sibling, i !== null) { xe = i; return }
            xe = i = t } while (i !== null);
        et === 0 && (et = 5) }

    function ey(t, i) { do { var r = c_(t.alternate, t); if (r !== null) { r.flags &= 32767, xe = r; return } if (r = t.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !i && (t = t.sibling, t !== null)) { xe = t; return }
            xe = t = r } while (t !== null);
        et = 6, xe = null }

    function ty(t, i, r, o, h, f, v, x, T) { t.cancelPendingCommit = null;
        do Al(); while (mt !== 0); if ((De & 6) !== 0) throw Error(a(327)); if (i !== null) { if (i === t.current) throw Error(a(177)); if (f = i.lanes | i.childLanes, f |= vc, Fu(t, r, f, v, x, T), t === $e && (xe = $e = null, Te = 0), la = i, Mi = t, li = r, Ah = f, jh = h, Ig = o, (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, __(An, function() { return ry(), null })) : (t.callbackNode = null, t.callbackPriority = 0), o = (i.flags & 13878) !== 0, (i.subtreeFlags & 13878) !== 0 || o) { o = H.T, H.T = null, h = X.p, X.p = 2, v = De, De |= 4; try { h_(t, i, r) } finally { De = v, X.p = h, H.T = o } }
            mt = 1, ny(), iy(), sy() } }

    function ny() { if (mt === 1) { mt = 0; var t = Mi,
                i = la,
                r = (i.flags & 13878) !== 0; if ((i.subtreeFlags & 13878) !== 0 || r) { r = H.T, H.T = null; var o = X.p;
                X.p = 2; var h = De;
                De |= 4; try { Lg(i, t); var f = $h,
                        v = $m(t.containerInfo),
                        x = f.focusedElem,
                        T = f.selectionRange; if (v !== x && x && x.ownerDocument && Hm(x.ownerDocument.documentElement, x)) { if (T !== null && fc(x)) { var U = T.start,
                                $ = T.end; if ($ === void 0 && ($ = U), "selectionStart" in x) x.selectionStart = U, x.selectionEnd = Math.min($, x.value.length);
                            else { var I = x.ownerDocument || document,
                                    P = I && I.defaultView || window; if (P.getSelection) { var z = P.getSelection(),
                                        ie = x.textContent.length,
                                        ue = Math.min(T.start, ie),
                                        Be = T.end === void 0 ? ue : Math.min(T.end, ie);!z.extend && ue > Be && (v = Be, Be = ue, ue = v); var N = Vm(x, ue),
                                        j = Vm(x, Be); if (N && j && (z.rangeCount !== 1 || z.anchorNode !== N.node || z.anchorOffset !== N.offset || z.focusNode !== j.node || z.focusOffset !== j.offset)) { var M = I.createRange();
                                        M.setStart(N.node, N.offset), z.removeAllRanges(), ue > Be ? (z.addRange(M), z.extend(j.node, j.offset)) : (M.setEnd(j.node, j.offset), z.addRange(M)) } } } } for (I = [], z = x; z = z.parentNode;) z.nodeType === 1 && I.push({ element: z, left: z.scrollLeft, top: z.scrollTop }); for (typeof x.focus == "function" && x.focus(), x = 0; x < I.length; x++) { var q = I[x];
                            q.element.scrollLeft = q.left, q.element.scrollTop = q.top } }
                    zl = !!Hh, $h = Hh = null } finally { De = h, X.p = o, H.T = r } }
            t.current = i, mt = 2 } }

    function iy() { if (mt === 2) { mt = 0; var t = Mi,
                i = la,
                r = (i.flags & 8772) !== 0; if ((i.subtreeFlags & 8772) !== 0 || r) { r = H.T, H.T = null; var o = X.p;
                X.p = 2; var h = De;
                De |= 4; try { Og(t, i.alternate, i) } finally { De = h, X.p = o, H.T = r } }
            mt = 3 } }

    function sy() { if (mt === 4 || mt === 3) { mt = 0, Gu(); var t = Mi,
                i = la,
                r = li,
                o = Ig;
            (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? mt = 5 : (mt = 0, la = Mi = null, ay(t, t.pendingLanes)); var h = t.pendingLanes; if (h === 0 && (Di = null), xt(r), i = i.stateNode, B && typeof B.onCommitFiberRoot == "function") try { B.onCommitFiberRoot(D, i, void 0, (i.current.flags & 128) === 128) } catch {}
            if (o !== null) { i = H.T, h = X.p, X.p = 2, H.T = null; try { for (var f = t.onRecoverableError, v = 0; v < o.length; v++) { var x = o[v];
                        f(x.value, { componentStack: x.stack }) } } finally { H.T = i, X.p = h } }(li & 3) !== 0 && Al(), zn(t), h = t.pendingLanes, (r & 261930) !== 0 && (h & 42) !== 0 ? t === Ch ? jr++ : (jr = 0, Ch = t) : jr = 0, Cr(0) } }

    function ay(t, i) {
        (t.pooledCacheLanes &= i) === 0 && (i = t.pooledCache, i != null && (t.pooledCache = null, lr(i))) }

    function Al() { return ny(), iy(), sy(), ry() }

    function ry() { if (mt !== 5) return !1; var t = Mi,
            i = Ah;
        Ah = 0; var r = xt(li),
            o = H.T,
            h = X.p; try { X.p = 32 > r ? 32 : r, H.T = null, r = jh, jh = null; var f = Mi,
                v = li; if (mt = 0, la = Mi = null, li = 0, (De & 6) !== 0) throw Error(a(331)); var x = De; if (De |= 4, Hg(f.current), zg(f, f.current, v, r), De = x, Cr(0, !1), B && typeof B.onPostCommitFiberRoot == "function") try { B.onPostCommitFiberRoot(D, f) } catch {}
            return !0 } finally { X.p = h, H.T = o, ay(t, i) } }

    function oy(t, i, r) { i = dn(r, i), i = rh(t.stateNode, i, 2), t = ji(t, i, 2), t !== null && (Gn(t, 2), zn(t)) }

    function Le(t, i, r) { if (t.tag === 3) oy(t, t, r);
        else
            for (; i !== null;) { if (i.tag === 3) { oy(i, t, r); break } else if (i.tag === 1) { var o = i.stateNode; if (typeof i.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Di === null || !Di.has(o))) { t = dn(r, t), r = lg(2), o = ji(i, r, 2), o !== null && (ug(r, o, i, t), Gn(o, 2), zn(o)); break } }
                i = i.return } }

    function Oh(t, i, r) { var o = t.pingCache; if (o === null) { o = t.pingCache = new m_; var h = new Set;
            o.set(i, h) } else h = o.get(i), h === void 0 && (h = new Set, o.set(i, h));
        h.has(r) || (Sh = !0, h.add(r), t = b_.bind(null, t, i, r), i.then(t, t)) }

    function b_(t, i, r) { var o = t.pingCache;
        o !== null && o.delete(i), t.pingedLanes |= t.suspendedLanes & r, t.warmLanes &= ~r, $e === t && (Te & r) === r && (et === 4 || et === 3 && (Te & 62914560) === Te && 300 > Ut() - wl ? (De & 2) === 0 && ua(t, 0) : Th |= r, oa === Te && (oa = 0)), zn(t) }

    function ly(t, i) { i === 0 && (i = Qi()), t = is(t, i), t !== null && (Gn(t, i), zn(t)) }

    function w_(t) { var i = t.memoizedState,
            r = 0;
        i !== null && (r = i.retryLane), ly(t, r) }

    function x_(t, i) { var r = 0; switch (t.tag) {
            case 31:
            case 13:
                var o = t.stateNode,
                    h = t.memoizedState;
                h !== null && (r = h.retryLane); break;
            case 19:
                o = t.stateNode; break;
            case 22:
                o = t.stateNode._retryCache; break;
            default:
                throw Error(a(314)) }
        o !== null && o.delete(i), ly(t, r) }

    function __(t, i) { return Ia(t, i) } var jl = null,
        ha = null,
        Nh = !1,
        Cl = !1,
        Dh = !1,
        Li = 0;

    function zn(t) { t !== ha && t.next === null && (ha === null ? jl = ha = t : ha = ha.next = t), Cl = !0, Nh || (Nh = !0, T_()) }

    function Cr(t, i) { if (!Dh && Cl) { Dh = !0;
            do
                for (var r = !1, o = jl; o !== null;) { if (t !== 0) { var h = o.pendingLanes; if (h === 0) var f = 0;
                        else { var v = o.suspendedLanes,
                                x = o.pingedLanes;
                            f = (1 << 31 - K(42 | t) + 1) - 1, f &= h & ~(v & ~x), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0 }
                        f !== 0 && (r = !0, dy(o, f)) } else f = Te, f = on(o, o === $e ? f : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== -1), (f & 3) === 0 || ln(o, f) || (r = !0, dy(o, f));
                    o = o.next }
            while (r);
            Dh = !1 } }

    function S_() { uy() }

    function uy() { Cl = Nh = !1; var t = 0;
        Li !== 0 && M_() && (t = Li); for (var i = Ut(), r = null, o = jl; o !== null;) { var h = o.next,
                f = cy(o, i);
            f === 0 ? (o.next = null, r === null ? jl = h : r.next = h, h === null && (ha = r)) : (r = o, (t !== 0 || (f & 3) !== 0) && (Cl = !0)), o = h }
        mt !== 0 && mt !== 5 || Cr(t), Li !== 0 && (Li = 0) }

    function cy(t, i) { for (var r = t.suspendedLanes, o = t.pingedLanes, h = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f;) { var v = 31 - K(f),
                x = 1 << v,
                T = h[v];
            T === -1 ? ((x & r) === 0 || (x & o) !== 0) && (h[v] = Os(x, i)) : T <= i && (t.expiredLanes |= x), f &= ~x } if (i = $e, r = Te, r = on(t, t === i ? r : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), o = t.callbackNode, r === 0 || t === i && (Ue === 2 || Ue === 9) || t.cancelPendingCommit !== null) return o !== null && o !== null && Ga(o), t.callbackNode = null, t.callbackPriority = 0; if ((r & 3) === 0 || ln(t, r)) { if (i = r & -r, i === t.callbackPriority) return i; switch (o !== null && Ga(o), xt(r)) {
                case 2:
                case 8:
                    r = Ro; break;
                case 32:
                    r = An; break;
                case 268435456:
                    r = Oo; break;
                default:
                    r = An } return o = hy.bind(null, t), r = Ia(r, o), t.callbackPriority = i, t.callbackNode = r, i } return o !== null && o !== null && Ga(o), t.callbackPriority = 2, t.callbackNode = null, 2 }

    function hy(t, i) { if (mt !== 0 && mt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null; var r = t.callbackNode; if (Al() && t.callbackNode !== r) return null; var o = Te; return o = on(t, t === $e ? o : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), o === 0 ? null : (Kg(t, o, i), cy(t, Ut()), t.callbackNode != null && t.callbackNode === r ? hy.bind(null, t) : null) }

    function dy(t, i) { if (Al()) return null;
        Kg(t, i, !0) }

    function T_() { L_(function() {
            (De & 6) !== 0 ? Ia(Co, S_) : uy() }) }

    function Mh() { if (Li === 0) { var t = Js;
            t === 0 && (t = zt, zt <<= 1, (zt & 261888) === 0 && (zt = 256)), Li = t } return Li }

    function fy(t) { return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Lo("" + t) }

    function my(t, i) { var r = i.ownerDocument.createElement("input"); return r.name = i.name, r.value = i.value, t.id && r.setAttribute("form", t.id), i.parentNode.insertBefore(r, i), t = new FormData(t), r.parentNode.removeChild(r), t }

    function E_(t, i, r, o, h) { if (i === "submit" && r && r.stateNode === h) { var f = fy((h[Vt] || null).action),
                v = o.submitter;
            v && (i = (i = v[Vt] || null) ? fy(i.formAction) : v.getAttribute("formAction"), i !== null && (f = i, v = null)); var x = new Vo("action", "action", null, o, h);
            t.push({ event: x, listeners: [{ instance: null, listener: function() { if (o.defaultPrevented) { if (Li !== 0) { var T = v ? my(h, v) : new FormData(h);
                                eh(r, { pending: !0, data: T, method: h.method, action: f }, null, T) } } else typeof f == "function" && (x.preventDefault(), T = v ? my(h, v) : new FormData(h), eh(r, { pending: !0, data: T, method: h.method, action: f }, f, T)) }, currentTarget: h }] }) } } for (var Uh = 0; Uh < yc.length; Uh++) { var Lh = yc[Uh],
            A_ = Lh.toLowerCase(),
            j_ = Lh[0].toUpperCase() + Lh.slice(1);
        jn(A_, "on" + j_) }
    jn(Gm, "onAnimationEnd"), jn(Km, "onAnimationIteration"), jn(Ym, "onAnimationStart"), jn("dblclick", "onDoubleClick"), jn("focusin", "onFocus"), jn("focusout", "onBlur"), jn(qx, "onTransitionRun"), jn(Ix, "onTransitionStart"), jn(Gx, "onTransitionCancel"), jn(Fm, "onTransitionEnd"), Ls("onMouseEnter", ["mouseout", "mouseover"]), Ls("onMouseLeave", ["mouseout", "mouseover"]), Ls("onPointerEnter", ["pointerout", "pointerover"]), Ls("onPointerLeave", ["pointerout", "pointerover"]), Wi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Wi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Wi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Wi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Wi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Wi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        C_ = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rr));

    function py(t, i) { i = (i & 4) !== 0; for (var r = 0; r < t.length; r++) { var o = t[r],
                h = o.event;
            o = o.listeners;
            e: { var f = void 0; if (i)
                    for (var v = o.length - 1; 0 <= v; v--) { var x = o[v],
                            T = x.instance,
                            U = x.currentTarget; if (x = x.listener, T !== f && h.isPropagationStopped()) break e;
                        f = x, h.currentTarget = U; try { f(h) } catch ($) { qo($) }
                        h.currentTarget = null, f = T } else
                        for (v = 0; v < o.length; v++) { if (x = o[v], T = x.instance, U = x.currentTarget, x = x.listener, T !== f && h.isPropagationStopped()) break e;
                            f = x, h.currentTarget = U; try { f(h) } catch ($) { qo($) }
                            h.currentTarget = null, f = T } } } }

    function _e(t, i) { var r = i[Xu];
        r === void 0 && (r = i[Xu] = new Set); var o = t + "__bubble";
        r.has(o) || (gy(i, t, 2, !1), r.add(o)) }

    function Ph(t, i, r) { var o = 0;
        i && (o |= 4), gy(r, t, o, i) } var Rl = "_reactListening" + Math.random().toString(36).slice(2);

    function zh(t) { if (!t[Rl]) { t[Rl] = !0, um.forEach(function(r) { r !== "selectionchange" && (C_.has(r) || Ph(r, !1, t), Ph(r, !0, t)) }); var i = t.nodeType === 9 ? t : t.ownerDocument;
            i === null || i[Rl] || (i[Rl] = !0, Ph("selectionchange", !1, i)) } }

    function gy(t, i, r, o) { switch (Gy(i)) {
            case 2:
                var h = nS; break;
            case 8:
                h = iS; break;
            default:
                h = Wh }
        r = h.bind(null, i, r, t), h = void 0, !sc || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (h = !0), o ? h !== void 0 ? t.addEventListener(i, r, { capture: !0, passive: h }) : t.addEventListener(i, r, !0) : h !== void 0 ? t.addEventListener(i, r, { passive: h }) : t.addEventListener(i, r, !1) }

    function Bh(t, i, r, o, h) { var f = o; if ((i & 1) === 0 && (i & 2) === 0 && o !== null) e: for (;;) { if (o === null) return; var v = o.tag; if (v === 3 || v === 4) { var x = o.stateNode.containerInfo; if (x === h) break; if (v === 4)
                    for (v = o.return; v !== null;) { var T = v.tag; if ((T === 3 || T === 4) && v.stateNode.containerInfo === h) return;
                        v = v.return }
                for (; x !== null;) { if (v = Ds(x), v === null) return; if (T = v.tag, T === 5 || T === 6 || T === 26 || T === 27) { o = f = v; continue e }
                    x = x.parentNode } }
            o = o.return }
        xm(function() { var U = f,
                $ = nc(r),
                I = [];
            e: { var P = Xm.get(t); if (P !== void 0) { var z = Vo,
                        ie = t; switch (t) {
                        case "keypress":
                            if (zo(r) === 0) break e;
                        case "keydown":
                        case "keyup":
                            z = xx; break;
                        case "focusin":
                            ie = "focus", z = lc; break;
                        case "focusout":
                            ie = "blur", z = lc; break;
                        case "beforeblur":
                        case "afterblur":
                            z = lc; break;
                        case "click":
                            if (r.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            z = Tm; break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            z = ux; break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            z = Tx; break;
                        case Gm:
                        case Km:
                        case Ym:
                            z = dx; break;
                        case Fm:
                            z = Ax; break;
                        case "scroll":
                        case "scrollend":
                            z = ox; break;
                        case "wheel":
                            z = Cx; break;
                        case "copy":
                        case "cut":
                        case "paste":
                            z = mx; break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            z = Am; break;
                        case "toggle":
                        case "beforetoggle":
                            z = kx } var ue = (i & 4) !== 0,
                        Be = !ue && (t === "scroll" || t === "scrollend"),
                        N = ue ? P !== null ? P + "Capture" : null : P;
                    ue = []; for (var j = U, M; j !== null;) { var q = j; if (M = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || M === null || N === null || (q = Za(j, N), q != null && ue.push(kr(j, q, M))), Be) break;
                        j = j.return }
                    0 < ue.length && (P = new z(P, ie, null, r, $), I.push({ event: P, listeners: ue })) } }
            if ((i & 7) === 0) { e: { if (P = t === "mouseover" || t === "pointerover", z = t === "mouseout" || t === "pointerout", P && r !== tc && (ie = r.relatedTarget || r.fromElement) && (Ds(ie) || ie[Ns])) break e; if ((z || P) && (P = $.window === $ ? $ : (P = $.ownerDocument) ? P.defaultView || P.parentWindow : window, z ? (ie = r.relatedTarget || r.toElement, z = U, ie = ie ? Ds(ie) : null, ie !== null && (Be = u(ie), ue = ie.tag, ie !== Be || ue !== 5 && ue !== 27 && ue !== 6) && (ie = null)) : (z = null, ie = U), z !== ie)) { if (ue = Tm, q = "onMouseLeave", N = "onMouseEnter", j = "mouse", (t === "pointerout" || t === "pointerover") && (ue = Am, q = "onPointerLeave", N = "onPointerEnter", j = "pointer"), Be = z == null ? P : Ja(z), M = ie == null ? P : Ja(ie), P = new ue(q, j + "leave", z, r, $), P.target = Be, P.relatedTarget = M, q = null, Ds($) === U && (ue = new ue(N, j + "enter", ie, r, $), ue.target = M, ue.relatedTarget = Be, q = ue), Be = q, z && ie) t: { for (ue = R_, N = z, j = ie, M = 0, q = N; q; q = ue(q)) M++;q = 0; for (var le = j; le; le = ue(le)) q++; for (; 0 < M - q;) N = ue(N), M--; for (; 0 < q - M;) j = ue(j), q--; for (; M--;) { if (N === j || j !== null && N === j.alternate) { ue = N; break t }
                                N = ue(N), j = ue(j) }
                            ue = null }
                        else ue = null;
                        z !== null && yy(I, P, z, ue, !1), ie !== null && Be !== null && yy(I, Be, ie, ue, !0) } }
                e: { if (P = U ? Ja(U) : window, z = P.nodeName && P.nodeName.toLowerCase(), z === "select" || z === "input" && P.type === "file") var ke = Mm;
                    else if (Nm(P))
                        if (Um) ke = Vx;
                        else { ke = zx; var re = Px }
                    else z = P.nodeName, !z || z.toLowerCase() !== "input" || P.type !== "checkbox" && P.type !== "radio" ? U && ec(U.elementType) && (ke = Mm) : ke = Bx; if (ke && (ke = ke(t, U))) { Dm(I, ke, r, $); break e }
                    re && re(t, P, U), t === "focusout" && U && P.type === "number" && U.memoizedProps.value != null && Wu(P, "number", P.value) } switch (re = U ? Ja(U) : window, t) {
                    case "focusin":
                        (Nm(re) || re.contentEditable === "true") && ($s = re, mc = U, ar = null); break;
                    case "focusout":
                        ar = mc = $s = null; break;
                    case "mousedown":
                        pc = !0; break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        pc = !1, qm(I, r, $); break;
                    case "selectionchange":
                        if ($x) break;
                    case "keydown":
                    case "keyup":
                        qm(I, r, $) } var ve; if (cc) e: { switch (t) {
                        case "compositionstart":
                            var Ee = "onCompositionStart"; break e;
                        case "compositionend":
                            Ee = "onCompositionEnd"; break e;
                        case "compositionupdate":
                            Ee = "onCompositionUpdate"; break e }
                    Ee = void 0 }
                else Hs ? km(t, r) && (Ee = "onCompositionEnd") : t === "keydown" && r.keyCode === 229 && (Ee = "onCompositionStart");Ee && (jm && r.locale !== "ko" && (Hs || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Hs && (ve = _m()) : (wi = $, ac = "value" in wi ? wi.value : wi.textContent, Hs = !0)), re = kl(U, Ee), 0 < re.length && (Ee = new Em(Ee, t, null, r, $), I.push({ event: Ee, listeners: re }), ve ? Ee.data = ve : (ve = Om(r), ve !== null && (Ee.data = ve)))), (ve = Nx ? Dx(t, r) : Mx(t, r)) && (Ee = kl(U, "onBeforeInput"), 0 < Ee.length && (re = new Em("onBeforeInput", "beforeinput", null, r, $), I.push({ event: re, listeners: Ee }), re.data = ve)), E_(I, t, U, r, $) }
            py(I, i) }) }

    function kr(t, i, r) { return { instance: t, listener: i, currentTarget: r } }

    function kl(t, i) { for (var r = i + "Capture", o = []; t !== null;) { var h = t,
                f = h.stateNode; if (h = h.tag, h !== 5 && h !== 26 && h !== 27 || f === null || (h = Za(t, r), h != null && o.unshift(kr(t, h, f)), h = Za(t, i), h != null && o.push(kr(t, h, f))), t.tag === 3) return o;
            t = t.return } return [] }

    function R_(t) { if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27); return t || null }

    function yy(t, i, r, o, h) { for (var f = i._reactName, v = []; r !== null && r !== o;) { var x = r,
                T = x.alternate,
                U = x.stateNode; if (x = x.tag, T !== null && T === o) break;
            x !== 5 && x !== 26 && x !== 27 || U === null || (T = U, h ? (U = Za(r, f), U != null && v.unshift(kr(r, U, T))) : h || (U = Za(r, f), U != null && v.push(kr(r, U, T)))), r = r.return }
        v.length !== 0 && t.push({ event: i, listeners: v }) } var k_ = /\r\n?/g,
        O_ = /\u0000|\uFFFD/g;

    function vy(t) { return (typeof t == "string" ? t : "" + t).replace(k_, `
`).replace(O_, "") }

    function by(t, i) { return i = vy(i), vy(t) === i }

    function ze(t, i, r, o, h, f) { switch (r) {
            case "children":
                typeof o == "string" ? i === "body" || i === "textarea" && o === "" || zs(t, o) : (typeof o == "number" || typeof o == "bigint") && i !== "body" && zs(t, "" + o); break;
            case "className":
                Mo(t, "class", o); break;
            case "tabIndex":
                Mo(t, "tabindex", o); break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Mo(t, r, o); break;
            case "style":
                bm(t, o, f); break;
            case "data":
                if (i !== "object") { Mo(t, "data", o); break }
            case "src":
            case "href":
                if (o === "" && (i !== "a" || r !== "href")) { t.removeAttribute(r); break } if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") { t.removeAttribute(r); break }
                o = Lo("" + o), t.setAttribute(r, o); break;
            case "action":
            case "formAction":
                if (typeof o == "function") { t.setAttribute(r, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"); break } else typeof f == "function" && (r === "formAction" ? (i !== "input" && ze(t, i, "name", h.name, h, null), ze(t, i, "formEncType", h.formEncType, h, null), ze(t, i, "formMethod", h.formMethod, h, null), ze(t, i, "formTarget", h.formTarget, h, null)) : (ze(t, i, "encType", h.encType, h, null), ze(t, i, "method", h.method, h, null), ze(t, i, "target", h.target, h, null))); if (o == null || typeof o == "symbol" || typeof o == "boolean") { t.removeAttribute(r); break }
                o = Lo("" + o), t.setAttribute(r, o); break;
            case "onClick":
                o != null && (t.onclick = Yn); break;
            case "onScroll":
                o != null && _e("scroll", t); break;
            case "onScrollEnd":
                o != null && _e("scrollend", t); break;
            case "dangerouslySetInnerHTML":
                if (o != null) { if (typeof o != "object" || !("__html" in o)) throw Error(a(61)); if (r = o.__html, r != null) { if (h.children != null) throw Error(a(60));
                        t.innerHTML = r } } break;
            case "multiple":
                t.multiple = o && typeof o != "function" && typeof o != "symbol"; break;
            case "muted":
                t.muted = o && typeof o != "function" && typeof o != "symbol"; break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") { t.removeAttribute("xlink:href"); break }
                r = Lo("" + o), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r); break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(r, "" + o) : t.removeAttribute(r); break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                o && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(r, "") : t.removeAttribute(r); break;
            case "capture":
            case "download":
                o === !0 ? t.setAttribute(r, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(r, o) : t.removeAttribute(r); break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? t.setAttribute(r, o) : t.removeAttribute(r); break;
            case "rowSpan":
            case "start":
                o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? t.removeAttribute(r) : t.setAttribute(r, o); break;
            case "popover":
                _e("beforetoggle", t), _e("toggle", t), Do(t, "popover", o); break;
            case "xlinkActuate":
                Kn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o); break;
            case "xlinkArcrole":
                Kn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o); break;
            case "xlinkRole":
                Kn(t, "http://www.w3.org/1999/xlink", "xlink:role", o); break;
            case "xlinkShow":
                Kn(t, "http://www.w3.org/1999/xlink", "xlink:show", o); break;
            case "xlinkTitle":
                Kn(t, "http://www.w3.org/1999/xlink", "xlink:title", o); break;
            case "xlinkType":
                Kn(t, "http://www.w3.org/1999/xlink", "xlink:type", o); break;
            case "xmlBase":
                Kn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o); break;
            case "xmlLang":
                Kn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o); break;
            case "xmlSpace":
                Kn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o); break;
            case "is":
                Do(t, "is", o); break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = ax.get(r) || r, Do(t, r, o)) } }

    function Vh(t, i, r, o, h, f) { switch (r) {
            case "style":
                bm(t, o, f); break;
            case "dangerouslySetInnerHTML":
                if (o != null) { if (typeof o != "object" || !("__html" in o)) throw Error(a(61)); if (r = o.__html, r != null) { if (h.children != null) throw Error(a(60));
                        t.innerHTML = r } } break;
            case "children":
                typeof o == "string" ? zs(t, o) : (typeof o == "number" || typeof o == "bigint") && zs(t, "" + o); break;
            case "onScroll":
                o != null && _e("scroll", t); break;
            case "onScrollEnd":
                o != null && _e("scrollend", t); break;
            case "onClick":
                o != null && (t.onclick = Yn); break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!cm.hasOwnProperty(r)) e: { if (r[0] === "o" && r[1] === "n" && (h = r.endsWith("Capture"), i = r.slice(2, h ? r.length - 7 : void 0), f = t[Vt] || null, f = f != null ? f[r] : null, typeof f == "function" && t.removeEventListener(i, f, h), typeof o == "function")) { typeof f != "function" && f !== null && (r in t ? t[r] = null : t.hasAttribute(r) && t.removeAttribute(r)), t.addEventListener(i, o, h); break e }
                    r in t ? t[r] = o : o === !0 ? t.setAttribute(r, "") : Do(t, r, o) } } }

    function At(t, i, r) { switch (i) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                _e("error", t), _e("load", t); var o = !1,
                    h = !1,
                    f; for (f in r)
                    if (r.hasOwnProperty(f)) { var v = r[f]; if (v != null) switch (f) {
                            case "src":
                                o = !0; break;
                            case "srcSet":
                                h = !0; break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(a(137, i));
                            default:
                                ze(t, i, f, v, r, null) } }
                h && ze(t, i, "srcSet", r.srcSet, r, null), o && ze(t, i, "src", r.src, r, null); return;
            case "input":
                _e("invalid", t); var x = f = v = h = null,
                    T = null,
                    U = null; for (o in r)
                    if (r.hasOwnProperty(o)) { var $ = r[o]; if ($ != null) switch (o) {
                            case "name":
                                h = $; break;
                            case "type":
                                v = $; break;
                            case "checked":
                                T = $; break;
                            case "defaultChecked":
                                U = $; break;
                            case "value":
                                f = $; break;
                            case "defaultValue":
                                x = $; break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if ($ != null) throw Error(a(137, i)); break;
                            default:
                                ze(t, i, o, $, r, null) } }
                pm(t, f, x, T, U, v, h, !1); return;
            case "select":
                _e("invalid", t), o = v = f = null; for (h in r)
                    if (r.hasOwnProperty(h) && (x = r[h], x != null)) switch (h) {
                        case "value":
                            f = x; break;
                        case "defaultValue":
                            v = x; break;
                        case "multiple":
                            o = x;
                        default:
                            ze(t, i, h, x, r, null) }
                    i = f, r = v, t.multiple = !!o, i != null ? Ps(t, !!o, i, !1) : r != null && Ps(t, !!o, r, !0); return;
            case "textarea":
                _e("invalid", t), f = h = o = null; for (v in r)
                    if (r.hasOwnProperty(v) && (x = r[v], x != null)) switch (v) {
                        case "value":
                            o = x; break;
                        case "defaultValue":
                            h = x; break;
                        case "children":
                            f = x; break;
                        case "dangerouslySetInnerHTML":
                            if (x != null) throw Error(a(91)); break;
                        default:
                            ze(t, i, v, x, r, null) }
                    ym(t, o, h, f);
                return;
            case "option":
                for (T in r)
                    if (r.hasOwnProperty(T) && (o = r[T], o != null)) switch (T) {
                        case "selected":
                            t.selected = o && typeof o != "function" && typeof o != "symbol"; break;
                        default:
                            ze(t, i, T, o, r, null) }
                    return;
            case "dialog":
                _e("beforetoggle", t), _e("toggle", t), _e("cancel", t), _e("close", t); break;
            case "iframe":
            case "object":
                _e("load", t); break;
            case "video":
            case "audio":
                for (o = 0; o < Rr.length; o++) _e(Rr[o], t); break;
            case "image":
                _e("error", t), _e("load", t); break;
            case "details":
                _e("toggle", t); break;
            case "embed":
            case "source":
            case "link":
                _e("error", t), _e("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (U in r)
                    if (r.hasOwnProperty(U) && (o = r[U], o != null)) switch (U) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(a(137, i));
                        default:
                            ze(t, i, U, o, r, null) }
                    return;
            default:
                if (ec(i)) { for ($ in r) r.hasOwnProperty($) && (o = r[$], o !== void 0 && Vh(t, i, $, o, r, void 0)); return } } for (x in r) r.hasOwnProperty(x) && (o = r[x], o != null && ze(t, i, x, o, r, null)) }

    function N_(t, i, r, o) { switch (i) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var h = null,
                    f = null,
                    v = null,
                    x = null,
                    T = null,
                    U = null,
                    $ = null; for (z in r) { var I = r[z]; if (r.hasOwnProperty(z) && I != null) switch (z) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            T = I;
                        default:
                            o.hasOwnProperty(z) || ze(t, i, z, null, o, I) } } for (var P in o) { var z = o[P]; if (I = r[P], o.hasOwnProperty(P) && (z != null || I != null)) switch (P) {
                        case "type":
                            f = z; break;
                        case "name":
                            h = z; break;
                        case "checked":
                            U = z; break;
                        case "defaultChecked":
                            $ = z; break;
                        case "value":
                            v = z; break;
                        case "defaultValue":
                            x = z; break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (z != null) throw Error(a(137, i)); break;
                        default:
                            z !== I && ze(t, i, P, z, o, I) } }
                Qu(t, v, x, T, U, $, f, h); return;
            case "select":
                z = v = x = P = null; for (f in r)
                    if (T = r[f], r.hasOwnProperty(f) && T != null) switch (f) {
                        case "value":
                            break;
                        case "multiple":
                            z = T;
                        default:
                            o.hasOwnProperty(f) || ze(t, i, f, null, o, T) }
                    for (h in o)
                        if (f = o[h], T = r[h], o.hasOwnProperty(h) && (f != null || T != null)) switch (h) {
                            case "value":
                                P = f; break;
                            case "defaultValue":
                                x = f; break;
                            case "multiple":
                                v = f;
                            default:
                                f !== T && ze(t, i, h, f, o, T) }
                        i = x, r = v, o = z, P != null ? Ps(t, !!r, P, !1) : !!o != !!r && (i != null ? Ps(t, !!r, i, !0) : Ps(t, !!r, r ? [] : "", !1)); return;
            case "textarea":
                z = P = null; for (x in r)
                    if (h = r[x], r.hasOwnProperty(x) && h != null && !o.hasOwnProperty(x)) switch (x) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            ze(t, i, x, null, o, h) }
                    for (v in o)
                        if (h = o[v], f = r[v], o.hasOwnProperty(v) && (h != null || f != null)) switch (v) {
                            case "value":
                                P = h; break;
                            case "defaultValue":
                                z = h; break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (h != null) throw Error(a(91)); break;
                            default:
                                h !== f && ze(t, i, v, h, o, f) }
                        gm(t, P, z);
                return;
            case "option":
                for (var ie in r)
                    if (P = r[ie], r.hasOwnProperty(ie) && P != null && !o.hasOwnProperty(ie)) switch (ie) {
                        case "selected":
                            t.selected = !1; break;
                        default:
                            ze(t, i, ie, null, o, P) }
                    for (T in o)
                        if (P = o[T], z = r[T], o.hasOwnProperty(T) && P !== z && (P != null || z != null)) switch (T) {
                            case "selected":
                                t.selected = P && typeof P != "function" && typeof P != "symbol"; break;
                            default:
                                ze(t, i, T, P, o, z) }
                        return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var ue in r) P = r[ue], r.hasOwnProperty(ue) && P != null && !o.hasOwnProperty(ue) && ze(t, i, ue, null, o, P); for (U in o)
                    if (P = o[U], z = r[U], o.hasOwnProperty(U) && P !== z && (P != null || z != null)) switch (U) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (P != null) throw Error(a(137, i)); break;
                        default:
                            ze(t, i, U, P, o, z) }
                    return;
            default:
                if (ec(i)) { for (var Be in r) P = r[Be], r.hasOwnProperty(Be) && P !== void 0 && !o.hasOwnProperty(Be) && Vh(t, i, Be, void 0, o, P); for ($ in o) P = o[$], z = r[$], !o.hasOwnProperty($) || P === z || P === void 0 && z === void 0 || Vh(t, i, $, P, o, z); return } } for (var N in r) P = r[N], r.hasOwnProperty(N) && P != null && !o.hasOwnProperty(N) && ze(t, i, N, null, o, P); for (I in o) P = o[I], z = r[I], !o.hasOwnProperty(I) || P === z || P == null && z == null || ze(t, i, I, P, o, z) }

    function wy(t) { switch (t) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1 } }

    function D_() { if (typeof performance.getEntriesByType == "function") { for (var t = 0, i = 0, r = performance.getEntriesByType("resource"), o = 0; o < r.length; o++) { var h = r[o],
                    f = h.transferSize,
                    v = h.initiatorType,
                    x = h.duration; if (f && x && wy(v)) { for (v = 0, x = h.responseEnd, o += 1; o < r.length; o++) { var T = r[o],
                            U = T.startTime; if (U > x) break; var $ = T.transferSize,
                            I = T.initiatorType;
                        $ && wy(I) && (T = T.responseEnd, v += $ * (T < x ? 1 : (x - U) / (T - U))) } if (--o, i += 8 * (f + v) / (h.duration / 1e3), t++, 10 < t) break } } if (0 < t) return i / t / 1e6 } return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5 } var Hh = null,
        $h = null;

    function Ol(t) { return t.nodeType === 9 ? t : t.ownerDocument }

    function xy(t) { switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0 } }

    function _y(t, i) { if (t === 0) switch (i) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0 }
        return t === 1 && i === "foreignObject" ? 0 : t }

    function qh(t, i) { return t === "textarea" || t === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.children == "bigint" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null } var Ih = null;

    function M_() { var t = window.event; return t && t.type === "popstate" ? t === Ih ? !1 : (Ih = t, !0) : (Ih = null, !1) } var Sy = typeof setTimeout == "function" ? setTimeout : void 0,
        U_ = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Ty = typeof Promise == "function" ? Promise : void 0,
        L_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ty < "u" ? function(t) { return Ty.resolve(null).then(t).catch(P_) } : Sy;

    function P_(t) { setTimeout(function() { throw t }) }

    function Pi(t) { return t === "head" }

    function Ey(t, i) { var r = i,
            o = 0;
        do { var h = r.nextSibling; if (t.removeChild(r), h && h.nodeType === 8)
                if (r = h.data, r === "/$" || r === "/&") { if (o === 0) { t.removeChild(h), pa(i); return }
                    o-- } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&") o++;
            else if (r === "html") Or(t.ownerDocument.documentElement);
            else if (r === "head") { r = t.ownerDocument.head, Or(r); for (var f = r.firstChild; f;) { var v = f.nextSibling,
                        x = f.nodeName;
                    f[Xa] || x === "SCRIPT" || x === "STYLE" || x === "LINK" && f.rel.toLowerCase() === "stylesheet" || r.removeChild(f), f = v } } else r === "body" && Or(t.ownerDocument.body);
            r = h } while (r);
        pa(i) }

    function Ay(t, i) { var r = t;
        t = 0;
        do { var o = r.nextSibling; if (r.nodeType === 1 ? i ? (r._stashedDisplay = r.style.display, r.style.display = "none") : (r.style.display = r._stashedDisplay || "", r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (i ? (r._stashedText = r.nodeValue, r.nodeValue = "") : r.nodeValue = r._stashedText || ""), o && o.nodeType === 8)
                if (r = o.data, r === "/$") { if (t === 0) break;
                    t-- } else r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || t++;
            r = o } while (r) }

    function Gh(t) { var i = t.firstChild; for (i && i.nodeType === 10 && (i = i.nextSibling); i;) { var r = i; switch (i = i.nextSibling, r.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Gh(r), Ju(r); continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (r.rel.toLowerCase() === "stylesheet") continue }
            t.removeChild(r) } }

    function z_(t, i, r, o) { for (; t.nodeType === 1;) { var h = r; if (t.nodeName.toLowerCase() !== i.toLowerCase()) { if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break } else if (o) { if (!t[Xa]) switch (i) {
                    case "meta":
                        if (!t.hasAttribute("itemprop")) break; return t;
                    case "link":
                        if (f = t.getAttribute("rel"), f === "stylesheet" && t.hasAttribute("data-precedence")) break; if (f !== h.rel || t.getAttribute("href") !== (h.href == null || h.href === "" ? null : h.href) || t.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin) || t.getAttribute("title") !== (h.title == null ? null : h.title)) break; return t;
                    case "style":
                        if (t.hasAttribute("data-precedence")) break; return t;
                    case "script":
                        if (f = t.getAttribute("src"), (f !== (h.src == null ? null : h.src) || t.getAttribute("type") !== (h.type == null ? null : h.type) || t.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break; return t;
                    default:
                        return t } } else if (i === "input" && t.type === "hidden") { var f = h.name == null ? null : "" + h.name; if (h.type === "hidden" && t.getAttribute("name") === f) return t } else return t; if (t = yn(t.nextSibling), t === null) break } return null }

    function B_(t, i, r) { if (i === "") return null; for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !r || (t = yn(t.nextSibling), t === null)) return null;
        return t }

    function jy(t, i) { for (; t.nodeType !== 8;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !i || (t = yn(t.nextSibling), t === null)) return null;
        return t }

    function Kh(t) { return t.data === "$?" || t.data === "$~" }

    function Yh(t) { return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading" }

    function V_(t, i) { var r = t.ownerDocument; if (t.data === "$~") t._reactRetry = i;
        else if (t.data !== "$?" || r.readyState !== "loading") i();
        else { var o = function() { i(), r.removeEventListener("DOMContentLoaded", o) };
            r.addEventListener("DOMContentLoaded", o), t._reactRetry = o } }

    function yn(t) { for (; t != null; t = t.nextSibling) { var i = t.nodeType; if (i === 1 || i === 3) break; if (i === 8) { if (i = t.data, i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&" || i === "F!" || i === "F") break; if (i === "/$" || i === "/&") return null } } return t } var Fh = null;

    function Cy(t) { t = t.nextSibling; for (var i = 0; t;) { if (t.nodeType === 8) { var r = t.data; if (r === "/$" || r === "/&") { if (i === 0) return yn(t.nextSibling);
                    i-- } else r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || i++ }
            t = t.nextSibling } return null }

    function Ry(t) { t = t.previousSibling; for (var i = 0; t;) { if (t.nodeType === 8) { var r = t.data; if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") { if (i === 0) return t;
                    i-- } else r !== "/$" && r !== "/&" || i++ }
            t = t.previousSibling } return null }

    function ky(t, i, r) { switch (i = Ol(r), t) {
            case "html":
                if (t = i.documentElement, !t) throw Error(a(452)); return t;
            case "head":
                if (t = i.head, !t) throw Error(a(453)); return t;
            case "body":
                if (t = i.body, !t) throw Error(a(454)); return t;
            default:
                throw Error(a(451)) } }

    function Or(t) { for (var i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
        Ju(t) } var vn = new Map,
        Oy = new Set;

    function Nl(t) { return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument } var ui = X.d;
    X.d = { f: H_, r: $_, D: q_, C: I_, L: G_, m: K_, X: F_, S: Y_, M: X_ };

    function H_() { var t = ui.f(),
            i = Sl(); return t || i }

    function $_(t) { var i = Ms(t);
        i !== null && i.tag === 5 && i.type === "form" ? Fp(i) : ui.r(t) } var da = typeof document > "u" ? null : document;

    function Ny(t, i, r) { var o = da; if (o && typeof i == "string" && i) { var h = cn(i);
            h = 'link[rel="' + t + '"][href="' + h + '"]', typeof r == "string" && (h += '[crossorigin="' + r + '"]'), Oy.has(h) || (Oy.add(h), t = { rel: t, crossOrigin: r, href: i }, o.querySelector(h) === null && (i = o.createElement("link"), At(i, "link", t), gt(i), o.head.appendChild(i))) } }

    function q_(t) { ui.D(t), Ny("dns-prefetch", t, null) }

    function I_(t, i) { ui.C(t, i), Ny("preconnect", t, i) }

    function G_(t, i, r) { ui.L(t, i, r); var o = da; if (o && t && i) { var h = 'link[rel="preload"][as="' + cn(i) + '"]';
            i === "image" && r && r.imageSrcSet ? (h += '[imagesrcset="' + cn(r.imageSrcSet) + '"]', typeof r.imageSizes == "string" && (h += '[imagesizes="' + cn(r.imageSizes) + '"]')) : h += '[href="' + cn(t) + '"]'; var f = h; switch (i) {
                case "style":
                    f = fa(t); break;
                case "script":
                    f = ma(t) }
            vn.has(f) || (t = y({ rel: "preload", href: i === "image" && r && r.imageSrcSet ? void 0 : t, as: i }, r), vn.set(f, t), o.querySelector(h) !== null || i === "style" && o.querySelector(Nr(f)) || i === "script" && o.querySelector(Dr(f)) || (i = o.createElement("link"), At(i, "link", t), gt(i), o.head.appendChild(i))) } }

    function K_(t, i) { ui.m(t, i); var r = da; if (r && t) { var o = i && typeof i.as == "string" ? i.as : "script",
                h = 'link[rel="modulepreload"][as="' + cn(o) + '"][href="' + cn(t) + '"]',
                f = h; switch (o) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    f = ma(t) } if (!vn.has(f) && (t = y({ rel: "modulepreload", href: t }, i), vn.set(f, t), r.querySelector(h) === null)) { switch (o) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (r.querySelector(Dr(f))) return }
                o = r.createElement("link"), At(o, "link", t), gt(o), r.head.appendChild(o) } } }

    function Y_(t, i, r) { ui.S(t, i, r); var o = da; if (o && t) { var h = Us(o).hoistableStyles,
                f = fa(t);
            i = i || "default"; var v = h.get(f); if (!v) { var x = { loading: 0, preload: null }; if (v = o.querySelector(Nr(f))) x.loading = 5;
                else { t = y({ rel: "stylesheet", href: t, "data-precedence": i }, r), (r = vn.get(f)) && Xh(t, r); var T = v = o.createElement("link");
                    gt(T), At(T, "link", t), T._p = new Promise(function(U, $) { T.onload = U, T.onerror = $ }), T.addEventListener("load", function() { x.loading |= 1 }), T.addEventListener("error", function() { x.loading |= 2 }), x.loading |= 4, Dl(v, i, o) }
                v = { type: "stylesheet", instance: v, count: 1, state: x }, h.set(f, v) } } }

    function F_(t, i) { ui.X(t, i); var r = da; if (r && t) { var o = Us(r).hoistableScripts,
                h = ma(t),
                f = o.get(h);
            f || (f = r.querySelector(Dr(h)), f || (t = y({ src: t, async: !0 }, i), (i = vn.get(h)) && Jh(t, i), f = r.createElement("script"), gt(f), At(f, "link", t), r.head.appendChild(f)), f = { type: "script", instance: f, count: 1, state: null }, o.set(h, f)) } }

    function X_(t, i) { ui.M(t, i); var r = da; if (r && t) { var o = Us(r).hoistableScripts,
                h = ma(t),
                f = o.get(h);
            f || (f = r.querySelector(Dr(h)), f || (t = y({ src: t, async: !0, type: "module" }, i), (i = vn.get(h)) && Jh(t, i), f = r.createElement("script"), gt(f), At(f, "link", t), r.head.appendChild(f)), f = { type: "script", instance: f, count: 1, state: null }, o.set(h, f)) } }

    function Dy(t, i, r, o) { var h = (h = be.current) ? Nl(h) : null; if (!h) throw Error(a(446)); switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof r.precedence == "string" && typeof r.href == "string" ? (i = fa(r.href), r = Us(h).hoistableStyles, o = r.get(i), o || (o = { type: "style", instance: null, count: 0, state: null }, r.set(i, o)), o) : { type: "void", instance: null, count: 0, state: null };
            case "link":
                if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") { t = fa(r.href); var f = Us(h).hoistableStyles,
                        v = f.get(t); if (v || (h = h.ownerDocument || h, v = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, f.set(t, v), (f = h.querySelector(Nr(t))) && !f._p && (v.instance = f, v.state.loading = 5), vn.has(t) || (r = { rel: "preload", as: "style", href: r.href, crossOrigin: r.crossOrigin, integrity: r.integrity, media: r.media, hrefLang: r.hrefLang, referrerPolicy: r.referrerPolicy }, vn.set(t, r), f || J_(h, t, r, v.state))), i && o === null) throw Error(a(528, "")); return v } if (i && o !== null) throw Error(a(529, "")); return null;
            case "script":
                return i = r.async, r = r.src, typeof r == "string" && i && typeof i != "function" && typeof i != "symbol" ? (i = ma(r), r = Us(h).hoistableScripts, o = r.get(i), o || (o = { type: "script", instance: null, count: 0, state: null }, r.set(i, o)), o) : { type: "void", instance: null, count: 0, state: null };
            default:
                throw Error(a(444, t)) } }

    function fa(t) { return 'href="' + cn(t) + '"' }

    function Nr(t) { return 'link[rel="stylesheet"][' + t + "]" }

    function My(t) { return y({}, t, { "data-precedence": t.precedence, precedence: null }) }

    function J_(t, i, r, o) { t.querySelector('link[rel="preload"][as="style"][' + i + "]") ? o.loading = 1 : (i = t.createElement("link"), o.preload = i, i.addEventListener("load", function() { return o.loading |= 1 }), i.addEventListener("error", function() { return o.loading |= 2 }), At(i, "link", r), gt(i), t.head.appendChild(i)) }

    function ma(t) { return '[src="' + cn(t) + '"]' }

    function Dr(t) { return "script[async]" + t }

    function Uy(t, i, r) { if (i.count++, i.instance === null) switch (i.type) {
            case "style":
                var o = t.querySelector('style[data-href~="' + cn(r.href) + '"]'); if (o) return i.instance = o, gt(o), o; var h = y({}, r, { "data-href": r.href, "data-precedence": r.precedence, href: null, precedence: null }); return o = (t.ownerDocument || t).createElement("style"), gt(o), At(o, "style", h), Dl(o, r.precedence, t), i.instance = o;
            case "stylesheet":
                h = fa(r.href); var f = t.querySelector(Nr(h)); if (f) return i.state.loading |= 4, i.instance = f, gt(f), f;
                o = My(r), (h = vn.get(h)) && Xh(o, h), f = (t.ownerDocument || t).createElement("link"), gt(f); var v = f; return v._p = new Promise(function(x, T) { v.onload = x, v.onerror = T }), At(f, "link", o), i.state.loading |= 4, Dl(f, r.precedence, t), i.instance = f;
            case "script":
                return f = ma(r.src), (h = t.querySelector(Dr(f))) ? (i.instance = h, gt(h), h) : (o = r, (h = vn.get(f)) && (o = y({}, r), Jh(o, h)), t = t.ownerDocument || t, h = t.createElement("script"), gt(h), At(h, "link", o), t.head.appendChild(h), i.instance = h);
            case "void":
                return null;
            default:
                throw Error(a(443, i.type)) } else i.type === "stylesheet" && (i.state.loading & 4) === 0 && (o = i.instance, i.state.loading |= 4, Dl(o, r.precedence, t)); return i.instance }

    function Dl(t, i, r) { for (var o = r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), h = o.length ? o[o.length - 1] : null, f = h, v = 0; v < o.length; v++) { var x = o[v]; if (x.dataset.precedence === i) f = x;
            else if (f !== h) break }
        f ? f.parentNode.insertBefore(t, f.nextSibling) : (i = r.nodeType === 9 ? r.head : r, i.insertBefore(t, i.firstChild)) }

    function Xh(t, i) { t.crossOrigin == null && (t.crossOrigin = i.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = i.referrerPolicy), t.title == null && (t.title = i.title) }

    function Jh(t, i) { t.crossOrigin == null && (t.crossOrigin = i.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = i.referrerPolicy), t.integrity == null && (t.integrity = i.integrity) } var Ml = null;

    function Ly(t, i, r) { if (Ml === null) { var o = new Map,
                h = Ml = new Map;
            h.set(r, o) } else h = Ml, o = h.get(r), o || (o = new Map, h.set(r, o)); if (o.has(t)) return o; for (o.set(t, null), r = r.getElementsByTagName(t), h = 0; h < r.length; h++) { var f = r[h]; if (!(f[Xa] || f[_t] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") { var v = f.getAttribute(i) || "";
                v = t + v; var x = o.get(v);
                x ? x.push(f) : o.set(v, [f]) } } return o }

    function Py(t, i, r) { t = t.ownerDocument || t, t.head.insertBefore(r, i === "title" ? t.querySelector("head > title") : null) }

    function Z_(t, i, r) { if (r === 1 || i.itemProp != null) return !1; switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof i.precedence != "string" || typeof i.href != "string" || i.href === "") break; return !0;
            case "link":
                if (typeof i.rel != "string" || typeof i.href != "string" || i.href === "" || i.onLoad || i.onError) break; switch (i.rel) {
                    case "stylesheet":
                        return t = i.disabled, typeof i.precedence == "string" && t == null;
                    default:
                        return !0 }
            case "script":
                if (i.async && typeof i.async != "function" && typeof i.async != "symbol" && !i.onLoad && !i.onError && i.src && typeof i.src == "string") return !0 } return !1 }

    function zy(t) { return !(t.type === "stylesheet" && (t.state.loading & 3) === 0) }

    function Q_(t, i, r, o) { if (r.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== !1) && (r.state.loading & 4) === 0) { if (r.instance === null) { var h = fa(o.href),
                    f = i.querySelector(Nr(h)); if (f) { i = f._p, i !== null && typeof i == "object" && typeof i.then == "function" && (t.count++, t = Ul.bind(t), i.then(t, t)), r.state.loading |= 4, r.instance = f, gt(f); return }
                f = i.ownerDocument || i, o = My(o), (h = vn.get(h)) && Xh(o, h), f = f.createElement("link"), gt(f); var v = f;
                v._p = new Promise(function(x, T) { v.onload = x, v.onerror = T }), At(f, "link", o), r.instance = f }
            t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(r, i), (i = r.state.preload) && (r.state.loading & 3) === 0 && (t.count++, r = Ul.bind(t), i.addEventListener("load", r), i.addEventListener("error", r)) } } var Zh = 0;

    function W_(t, i) { return t.stylesheets && t.count === 0 && Pl(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(r) { var o = setTimeout(function() { if (t.stylesheets && Pl(t, t.stylesheets), t.unsuspend) { var f = t.unsuspend;
                    t.unsuspend = null, f() } }, 6e4 + i);
            0 < t.imgBytes && Zh === 0 && (Zh = 62500 * D_()); var h = setTimeout(function() { if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Pl(t, t.stylesheets), t.unsuspend)) { var f = t.unsuspend;
                    t.unsuspend = null, f() } }, (t.imgBytes > Zh ? 50 : 800) + i); return t.unsuspend = r,
                function() { t.unsuspend = null, clearTimeout(o), clearTimeout(h) } } : null }

    function Ul() { if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) { if (this.stylesheets) Pl(this, this.stylesheets);
            else if (this.unsuspend) { var t = this.unsuspend;
                this.unsuspend = null, t() } } } var Ll = null;

    function Pl(t, i) { t.stylesheets = null, t.unsuspend !== null && (t.count++, Ll = new Map, i.forEach(eS, t), Ll = null, Ul.call(t)) }

    function eS(t, i) { if (!(i.state.loading & 4)) { var r = Ll.get(t); if (r) var o = r.get(null);
            else { r = new Map, Ll.set(t, r); for (var h = t.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < h.length; f++) { var v = h[f];
                    (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (r.set(v.dataset.precedence, v), o = v) }
                o && r.set(null, o) }
            h = i.instance, v = h.getAttribute("data-precedence"), f = r.get(v) || o, f === o && r.set(null, h), r.set(v, h), this.count++, o = Ul.bind(this), h.addEventListener("load", o), h.addEventListener("error", o), f ? f.parentNode.insertBefore(h, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(h, t.firstChild)), i.state.loading |= 4 } } var Mr = { $$typeof: E, Provider: null, Consumer: null, _currentValue: ne, _currentValue2: ne, _threadCount: 0 };

    function tS(t, i, r, o, h, f, v, x, T) { this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ot(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ot(0), this.hiddenUpdates = Ot(null), this.identifierPrefix = o, this.onUncaughtError = h, this.onCaughtError = f, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = new Map }

    function By(t, i, r, o, h, f, v, x, T, U, $, I) { return t = new tS(t, i, r, v, T, U, $, I, x), i = 1, f === !0 && (i |= 24), f = Zt(3, null, null, i), t.current = f, f.stateNode = t, i = kc(), i.refCount++, t.pooledCache = i, i.refCount++, f.memoizedState = { element: o, isDehydrated: r, cache: i }, Mc(f), t }

    function Vy(t) { return t ? (t = Gs, t) : Gs }

    function Hy(t, i, r, o, h, f) { h = Vy(h), o.context === null ? o.context = h : o.pendingContext = h, o = Ai(i), o.payload = { element: r }, f = f === void 0 ? null : f, f !== null && (o.callback = f), r = ji(t, o, i), r !== null && (Kt(r, t, i), dr(r, t, i)) }

    function $y(t, i) { if (t = t.memoizedState, t !== null && t.dehydrated !== null) { var r = t.retryLane;
            t.retryLane = r !== 0 && r < i ? r : i } }

    function Qh(t, i) { $y(t, i), (t = t.alternate) && $y(t, i) }

    function qy(t) { if (t.tag === 13 || t.tag === 31) { var i = is(t, 67108864);
            i !== null && Kt(i, t, 67108864), Qh(t, 67108864) } }

    function Iy(t) { if (t.tag === 13 || t.tag === 31) { var i = nn();
            i = He(i); var r = is(t, i);
            r !== null && Kt(r, t, i), Qh(t, i) } } var zl = !0;

    function nS(t, i, r, o) { var h = H.T;
        H.T = null; var f = X.p; try { X.p = 2, Wh(t, i, r, o) } finally { X.p = f, H.T = h } }

    function iS(t, i, r, o) { var h = H.T;
        H.T = null; var f = X.p; try { X.p = 8, Wh(t, i, r, o) } finally { X.p = f, H.T = h } }

    function Wh(t, i, r, o) { if (zl) { var h = ed(o); if (h === null) Bh(t, i, o, Bl, r), Ky(t, o);
            else if (aS(h, t, i, r, o)) o.stopPropagation();
            else if (Ky(t, o), i & 4 && -1 < sS.indexOf(t)) { for (; h !== null;) { var f = Ms(h); if (f !== null) switch (f.tag) {
                        case 3:
                            if (f = f.stateNode, f.current.memoizedState.isDehydrated) { var v = Bt(f.pendingLanes); if (v !== 0) { var x = f; for (x.pendingLanes |= 2, x.entangledLanes |= 2; v;) { var T = 1 << 31 - K(v);
                                        x.entanglements[1] |= T, v &= ~T }
                                    zn(f), (De & 6) === 0 && (xl = Ut() + 500, Cr(0)) } } break;
                        case 31:
                        case 13:
                            x = is(f, 2), x !== null && Kt(x, f, 2), Sl(), Qh(f, 2) }
                    if (f = ed(o), f === null && Bh(t, i, o, Bl, r), f === h) break;
                    h = f }
                h !== null && o.stopPropagation() } else Bh(t, i, o, null, r) } }

    function ed(t) { return t = nc(t), td(t) } var Bl = null;

    function td(t) { if (Bl = null, t = Ds(t), t !== null) { var i = u(t); if (i === null) t = null;
            else { var r = i.tag; if (r === 13) { if (t = c(i), t !== null) return t;
                    t = null } else if (r === 31) { if (t = d(i), t !== null) return t;
                    t = null } else if (r === 3) { if (i.stateNode.current.memoizedState.isDehydrated) return i.tag === 3 ? i.stateNode.containerInfo : null;
                    t = null } else i !== t && (t = null) } } return Bl = t, null }

    function Gy(t) { switch (t) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Ku()) {
                    case Co:
                        return 2;
                    case Ro:
                        return 8;
                    case An:
                    case ko:
                        return 32;
                    case Oo:
                        return 268435456;
                    default:
                        return 32 }
            default:
                return 32 } } var nd = !1,
        zi = null,
        Bi = null,
        Vi = null,
        Ur = new Map,
        Lr = new Map,
        Hi = [],
        sS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Ky(t, i) { switch (t) {
            case "focusin":
            case "focusout":
                zi = null; break;
            case "dragenter":
            case "dragleave":
                Bi = null; break;
            case "mouseover":
            case "mouseout":
                Vi = null; break;
            case "pointerover":
            case "pointerout":
                Ur.delete(i.pointerId); break;
            case "gotpointercapture":
            case "lostpointercapture":
                Lr.delete(i.pointerId) } }

    function Pr(t, i, r, o, h, f) { return t === null || t.nativeEvent !== f ? (t = { blockedOn: i, domEventName: r, eventSystemFlags: o, nativeEvent: f, targetContainers: [h] }, i !== null && (i = Ms(i), i !== null && qy(i)), t) : (t.eventSystemFlags |= o, i = t.targetContainers, h !== null && i.indexOf(h) === -1 && i.push(h), t) }

    function aS(t, i, r, o, h) { switch (i) {
            case "focusin":
                return zi = Pr(zi, t, i, r, o, h), !0;
            case "dragenter":
                return Bi = Pr(Bi, t, i, r, o, h), !0;
            case "mouseover":
                return Vi = Pr(Vi, t, i, r, o, h), !0;
            case "pointerover":
                var f = h.pointerId; return Ur.set(f, Pr(Ur.get(f) || null, t, i, r, o, h)), !0;
            case "gotpointercapture":
                return f = h.pointerId, Lr.set(f, Pr(Lr.get(f) || null, t, i, r, o, h)), !0 } return !1 }

    function Yy(t) { var i = Ds(t.target); if (i !== null) { var r = u(i); if (r !== null) { if (i = r.tag, i === 13) { if (i = c(r), i !== null) { t.blockedOn = i, Fa(t.priority, function() { Iy(r) }); return } } else if (i === 31) { if (i = d(r), i !== null) { t.blockedOn = i, Fa(t.priority, function() { Iy(r) }); return } } else if (i === 3 && r.stateNode.current.memoizedState.isDehydrated) { t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null; return } } }
        t.blockedOn = null }

    function Vl(t) { if (t.blockedOn !== null) return !1; for (var i = t.targetContainers; 0 < i.length;) { var r = ed(t.nativeEvent); if (r === null) { r = t.nativeEvent; var o = new r.constructor(r.type, r);
                tc = o, r.target.dispatchEvent(o), tc = null } else return i = Ms(r), i !== null && qy(i), t.blockedOn = r, !1;
            i.shift() } return !0 }

    function Fy(t, i, r) { Vl(t) && r.delete(i) }

    function rS() { nd = !1, zi !== null && Vl(zi) && (zi = null), Bi !== null && Vl(Bi) && (Bi = null), Vi !== null && Vl(Vi) && (Vi = null), Ur.forEach(Fy), Lr.forEach(Fy) }

    function Hl(t, i) { t.blockedOn === i && (t.blockedOn = null, nd || (nd = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, rS))) } var $l = null;

    function Xy(t) { $l !== t && ($l = t, n.unstable_scheduleCallback(n.unstable_NormalPriority, function() { $l === t && ($l = null); for (var i = 0; i < t.length; i += 3) { var r = t[i],
                    o = t[i + 1],
                    h = t[i + 2]; if (typeof o != "function") { if (td(o || r) === null) continue; break } var f = Ms(r);
                f !== null && (t.splice(i, 3), i -= 3, eh(f, { pending: !0, data: h, method: r.method, action: o }, o, h)) } })) }

    function pa(t) {
        function i(T) { return Hl(T, t) }
        zi !== null && Hl(zi, t), Bi !== null && Hl(Bi, t), Vi !== null && Hl(Vi, t), Ur.forEach(i), Lr.forEach(i); for (var r = 0; r < Hi.length; r++) { var o = Hi[r];
            o.blockedOn === t && (o.blockedOn = null) } for (; 0 < Hi.length && (r = Hi[0], r.blockedOn === null);) Yy(r), r.blockedOn === null && Hi.shift(); if (r = (t.ownerDocument || t).$$reactFormReplay, r != null)
            for (o = 0; o < r.length; o += 3) { var h = r[o],
                    f = r[o + 1],
                    v = h[Vt] || null; if (typeof f == "function") v || Xy(r);
                else if (v) { var x = null; if (f && f.hasAttribute("formAction")) { if (h = f, v = f[Vt] || null) x = v.formAction;
                        else if (td(h) !== null) continue } else x = v.action;
                    typeof x == "function" ? r[o + 1] = x : (r.splice(o, 3), o -= 3), Xy(r) } } }

    function Jy() {
        function t(f) { f.canIntercept && f.info === "react-transition" && f.intercept({ handler: function() { return new Promise(function(v) { return h = v }) }, focusReset: "manual", scroll: "manual" }) }

        function i() { h !== null && (h(), h = null), o || setTimeout(r, 20) }

        function r() { if (!o && !navigation.transition) { var f = navigation.currentEntry;
                f && f.url != null && navigation.navigate(f.url, { state: f.getState(), info: "react-transition", history: "replace" }) } } if (typeof navigation == "object") { var o = !1,
                h = null; return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", i), navigation.addEventListener("navigateerror", i), setTimeout(r, 100),
                function() { o = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", i), navigation.removeEventListener("navigateerror", i), h !== null && (h(), h = null) } } }

    function id(t) { this._internalRoot = t }
    ql.prototype.render = id.prototype.render = function(t) { var i = this._internalRoot; if (i === null) throw Error(a(409)); var r = i.current,
            o = nn();
        Hy(r, o, t, i, null, null) }, ql.prototype.unmount = id.prototype.unmount = function() { var t = this._internalRoot; if (t !== null) { this._internalRoot = null; var i = t.containerInfo;
            Hy(t.current, 2, null, t, null, null), Sl(), i[Ns] = null } };

    function ql(t) { this._internalRoot = t }
    ql.prototype.unstable_scheduleHydration = function(t) { if (t) { var i = Ya();
            t = { blockedOn: null, target: t, priority: i }; for (var r = 0; r < Hi.length && i !== 0 && i < Hi[r].priority; r++);
            Hi.splice(r, 0, t), r === 0 && Yy(t) } }; var Zy = e.version; if (Zy !== "19.2.0") throw Error(a(527, Zy, "19.2.0"));
    X.findDOMNode = function(t) { var i = t._reactInternals; if (i === void 0) throw typeof t.render == "function" ? Error(a(188)) : (t = Object.keys(t).join(","), Error(a(268, t))); return t = p(i), t = t !== null ? g(t) : null, t = t === null ? null : t.stateNode, t }; var oS = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: H, reconcilerVersion: "19.2.0" }; if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var Il = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!Il.isDisabled && Il.supportsFiber) try { D = Il.inject(oS), B = Il } catch {} } return Br.createRoot = function(t, i) { if (!l(t)) throw Error(a(299)); var r = !1,
            o = "",
            h = sg,
            f = ag,
            v = rg; return i != null && (i.unstable_strictMode === !0 && (r = !0), i.identifierPrefix !== void 0 && (o = i.identifierPrefix), i.onUncaughtError !== void 0 && (h = i.onUncaughtError), i.onCaughtError !== void 0 && (f = i.onCaughtError), i.onRecoverableError !== void 0 && (v = i.onRecoverableError)), i = By(t, 1, !1, null, null, r, o, null, h, f, v, Jy), t[Ns] = i.current, zh(t), new id(i) }, Br.hydrateRoot = function(t, i, r) { if (!l(t)) throw Error(a(299)); var o = !1,
            h = "",
            f = sg,
            v = ag,
            x = rg,
            T = null; return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (h = r.identifierPrefix), r.onUncaughtError !== void 0 && (f = r.onUncaughtError), r.onCaughtError !== void 0 && (v = r.onCaughtError), r.onRecoverableError !== void 0 && (x = r.onRecoverableError), r.formState !== void 0 && (T = r.formState)), i = By(t, 1, !0, i, r ? ? null, o, h, T, f, v, x, Jy), i.context = Vy(null), r = i.current, o = nn(), o = He(o), h = Ai(o), h.callback = null, ji(r, h, o), r = o, i.current.lanes = r, Gn(i, r), zn(i), t[Ns] = i.current, zh(t), new ql(i) }, Br.version = "19.2.0", Br }
var ov;

function yS() { if (ov) return rd.exports;
    ov = 1;

    function n() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n) } catch (e) { console.error(e) } } return n(), rd.exports = gS(), rd.exports }
var vS = yS();
const bS = vb(vS);
/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var lv = "popstate";

function wS(n = {}) {
    function e(l, u) { let { pathname: c = "/", search: d = "", hash: m = "" } = Cs(l.location.hash.substring(1)); return !c.startsWith("/") && !c.startsWith(".") && (c = "/" + c), Ud("", { pathname: c, search: d, hash: m }, u.state && u.state.usr || null, u.state && u.state.key || "default") }

    function s(l, u) { let c = l.document.querySelector("base"),
            d = ""; if (c && c.getAttribute("href")) { let m = l.location.href,
                p = m.indexOf("#");
            d = p === -1 ? m : m.slice(0, p) } return d + "#" + (typeof u == "string" ? u : no(u)) }

    function a(l, u) { Tn(l.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`) } return _S(e, s, a, n) }

function Ze(n, e) { if (n === !1 || n === null || typeof n > "u") throw new Error(e) }

function Tn(n, e) { if (!n) { typeof console < "u" && console.warn(e); try { throw new Error(e) } catch {} } }

function xS() { return Math.random().toString(36).substring(2, 10) }

function uv(n, e) { return { usr: n.state, key: n.key, idx: e } }

function Ud(n, e, s = null, a) { return { pathname: typeof n == "string" ? n : n.pathname, search: "", hash: "", ...typeof e == "string" ? Cs(e) : e, state: s, key: e && e.key || a || xS() } }

function no({ pathname: n = "/", search: e = "", hash: s = "" }) { return e && e !== "?" && (n += e.charAt(0) === "?" ? e : "?" + e), s && s !== "#" && (n += s.charAt(0) === "#" ? s : "#" + s), n }

function Cs(n) { let e = {}; if (n) { let s = n.indexOf("#");
        s >= 0 && (e.hash = n.substring(s), n = n.substring(0, s)); let a = n.indexOf("?");
        a >= 0 && (e.search = n.substring(a), n = n.substring(0, a)), n && (e.pathname = n) } return e }

function _S(n, e, s, a = {}) { let { window: l = document.defaultView, v5Compat: u = !1 } = a, c = l.history, d = "POP", m = null, p = g();
    p == null && (p = 0, c.replaceState({...c.state, idx: p }, ""));

    function g() { return (c.state || { idx: null }).idx }

    function y() { d = "POP"; let k = g(),
            R = k == null ? null : k - p;
        p = k, m && m({ action: d, location: A.location, delta: R }) }

    function w(k, R) { d = "PUSH"; let L = Ud(A.location, k, R);
        s && s(L, k), p = g() + 1; let E = uv(L, p),
            G = A.createHref(L); try { c.pushState(E, "", G) } catch (J) { if (J instanceof DOMException && J.name === "DataCloneError") throw J;
            l.location.assign(G) }
        u && m && m({ action: d, location: A.location, delta: 1 }) }

    function _(k, R) { d = "REPLACE"; let L = Ud(A.location, k, R);
        s && s(L, k), p = g(); let E = uv(L, p),
            G = A.createHref(L);
        c.replaceState(E, "", G), u && m && m({ action: d, location: A.location, delta: 0 }) }

    function S(k) { return SS(k) } let A = {get action() { return d }, get location() { return n(l, c) }, listen(k) { if (m) throw new Error("A history only accepts one active listener"); return l.addEventListener(lv, y), m = k, () => { l.removeEventListener(lv, y), m = null } }, createHref(k) { return e(l, k) }, createURL: S, encodeLocation(k) { let R = S(k); return { pathname: R.pathname, search: R.search, hash: R.hash } }, push: w, replace: _, go(k) { return c.go(k) } }; return A }

function SS(n, e = !1) { let s = "http://localhost";
    typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), Ze(s, "No window.location.(origin|href) available to create URL"); let a = typeof n == "string" ? n : no(n); return a = a.replace(/ $/, "%20"), !e && a.startsWith("//") && (a = s + a), new URL(a, s) }

function bb(n, e, s = "/") { return TS(n, e, s, !1) }

function TS(n, e, s, a) { let l = typeof e == "string" ? Cs(e) : e,
        u = mi(l.pathname || "/", s); if (u == null) return null; let c = wb(n);
    ES(c); let d = null; for (let m = 0; d == null && m < c.length; ++m) { let p = LS(u);
        d = MS(c[m], p, a) } return d }

function wb(n, e = [], s = [], a = "", l = !1) { let u = (c, d, m = l, p) => { let g = { relativePath: p === void 0 ? c.path || "" : p, caseSensitive: c.caseSensitive === !0, childrenIndex: d, route: c }; if (g.relativePath.startsWith("/")) { if (!g.relativePath.startsWith(a) && m) return;
            Ze(g.relativePath.startsWith(a), `Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), g.relativePath = g.relativePath.slice(a.length) } let y = fi([a, g.relativePath]),
            w = s.concat(g);
        c.children && c.children.length > 0 && (Ze(c.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${y}".`), wb(c.children, e, w, y, m)), !(c.path == null && !c.index) && e.push({ path: y, score: NS(y, c.index), routesMeta: w }) }; return n.forEach((c, d) => { var m; if (c.path === "" || !((m = c.path) != null && m.includes("?"))) u(c, d);
        else
            for (let p of xb(c.path)) u(c, d, !0, p) }), e }

function xb(n) { let e = n.split("/"); if (e.length === 0) return []; let [s, ...a] = e, l = s.endsWith("?"), u = s.replace(/\?$/, ""); if (a.length === 0) return l ? [u, ""] : [u]; let c = xb(a.join("/")),
        d = []; return d.push(...c.map(m => m === "" ? u : [u, m].join("/"))), l && d.push(...c), d.map(m => n.startsWith("/") && m === "" ? "/" : m) }

function ES(n) { n.sort((e, s) => e.score !== s.score ? s.score - e.score : DS(e.routesMeta.map(a => a.childrenIndex), s.routesMeta.map(a => a.childrenIndex))) }
var AS = /^:[\w-]+$/,
    jS = 3,
    CS = 2,
    RS = 1,
    kS = 10,
    OS = -2,
    cv = n => n === "*";

function NS(n, e) { let s = n.split("/"),
        a = s.length; return s.some(cv) && (a += OS), e && (a += CS), s.filter(l => !cv(l)).reduce((l, u) => l + (AS.test(u) ? jS : u === "" ? RS : kS), a) }

function DS(n, e) { return n.length === e.length && n.slice(0, -1).every((a, l) => a === e[l]) ? n[n.length - 1] - e[e.length - 1] : 0 }

function MS(n, e, s = !1) { let { routesMeta: a } = n, l = {}, u = "/", c = []; for (let d = 0; d < a.length; ++d) { let m = a[d],
            p = d === a.length - 1,
            g = u === "/" ? e : e.slice(u.length) || "/",
            y = vu({ path: m.relativePath, caseSensitive: m.caseSensitive, end: p }, g),
            w = m.route; if (!y && p && s && !a[a.length - 1].route.index && (y = vu({ path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 }, g)), !y) return null;
        Object.assign(l, y.params), c.push({ params: l, pathname: fi([u, y.pathname]), pathnameBase: HS(fi([u, y.pathnameBase])), route: w }), y.pathnameBase !== "/" && (u = fi([u, y.pathnameBase])) } return c }

function vu(n, e) { typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 }); let [s, a] = US(n.path, n.caseSensitive, n.end), l = e.match(s); if (!l) return null; let u = l[0],
        c = u.replace(/(.)\/+$/, "$1"),
        d = l.slice(1); return { params: a.reduce((p, { paramName: g, isOptional: y }, w) => { if (g === "*") { let S = d[w] || "";
                c = u.slice(0, u.length - S.length).replace(/(.)\/+$/, "$1") } const _ = d[w]; return y && !_ ? p[g] = void 0 : p[g] = (_ || "").replace(/%2F/g, "/"), p }, {}), pathname: u, pathnameBase: c, pattern: n } }

function US(n, e = !1, s = !0) { Tn(n === "*" || !n.endsWith("*") || n.endsWith("/*"), `Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`); let a = [],
        l = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, d, m) => (a.push({ paramName: d, isOptional: m != null }), m ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2"); return n.endsWith("*") ? (a.push({ paramName: "*" }), l += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? l += "\\/*$" : n !== "" && n !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, e ? void 0 : "i"), a] }

function LS(n) { try { return n.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/") } catch (e) { return Tn(!1, `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`), n } }

function mi(n, e) { if (e === "/") return n; if (!n.toLowerCase().startsWith(e.toLowerCase())) return null; let s = e.endsWith("/") ? e.length - 1 : e.length,
        a = n.charAt(s); return a && a !== "/" ? null : n.slice(s) || "/" }
var PS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    zS = n => PS.test(n);

function BS(n, e = "/") { let { pathname: s, search: a = "", hash: l = "" } = typeof n == "string" ? Cs(n) : n, u; if (s)
        if (zS(s)) u = s;
        else { if (s.includes("//")) { let c = s;
                s = s.replace(/\/\/+/g, "/"), Tn(!1, `Pathnames cannot have embedded double slashes - normalizing ${c} -> ${s}`) }
            s.startsWith("/") ? u = hv(s.substring(1), "/") : u = hv(s, e) }
    else u = e; return { pathname: u, search: $S(a), hash: qS(l) } }

function hv(n, e) { let s = e.replace(/\/+$/, "").split("/"); return n.split("/").forEach(l => { l === ".." ? s.length > 1 && s.pop() : l !== "." && s.push(l) }), s.length > 1 ? s.join("/") : "/" }

function cd(n, e, s, a) { return `Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.` }

function VS(n) { return n.filter((e, s) => s === 0 || e.route.path && e.route.path.length > 0) }

function _b(n) { let e = VS(n); return e.map((s, a) => a === e.length - 1 ? s.pathname : s.pathnameBase) }

function Sb(n, e, s, a = !1) { let l;
    typeof n == "string" ? l = Cs(n) : (l = {...n }, Ze(!l.pathname || !l.pathname.includes("?"), cd("?", "pathname", "search", l)), Ze(!l.pathname || !l.pathname.includes("#"), cd("#", "pathname", "hash", l)), Ze(!l.search || !l.search.includes("#"), cd("#", "search", "hash", l))); let u = n === "" || l.pathname === "",
        c = u ? "/" : l.pathname,
        d; if (c == null) d = s;
    else { let y = e.length - 1; if (!a && c.startsWith("..")) { let w = c.split("/"); for (; w[0] === "..";) w.shift(), y -= 1;
            l.pathname = w.join("/") }
        d = y >= 0 ? e[y] : "/" } let m = BS(l, d),
        p = c && c !== "/" && c.endsWith("/"),
        g = (u || c === ".") && s.endsWith("/"); return !m.pathname.endsWith("/") && (p || g) && (m.pathname += "/"), m }
var fi = n => n.join("/").replace(/\/\/+/g, "/"),
    HS = n => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
    $S = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n,
    qS = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;

function IS(n) { return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n }
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Tb = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Tb);
var GS = ["GET", ...Tb];
new Set(GS);
var La = O.createContext(null);
La.displayName = "DataRouter";
var Du = O.createContext(null);
Du.displayName = "DataRouterState";
O.createContext(!1);
var Eb = O.createContext({ isTransitioning: !1 });
Eb.displayName = "ViewTransition";
var KS = O.createContext(new Map);
KS.displayName = "Fetchers";
var YS = O.createContext(null);
YS.displayName = "Await";
var In = O.createContext(null);
In.displayName = "Navigation";
var bo = O.createContext(null);
bo.displayName = "Location";
var yi = O.createContext({ outlet: null, matches: [], isDataRoute: !1 });
yi.displayName = "Route";
var wf = O.createContext(null);
wf.displayName = "RouteError";

function FS(n, { relative: e } = {}) { Ze(wo(), "useHref() may be used only in the context of a <Router> component."); let { basename: s, navigator: a } = O.useContext(In), { hash: l, pathname: u, search: c } = xo(n, { relative: e }), d = u; return s !== "/" && (d = u === "/" ? s : fi([s, u])), a.createHref({ pathname: d, search: c, hash: l }) }

function wo() { return O.useContext(bo) != null }

function En() { return Ze(wo(), "useLocation() may be used only in the context of a <Router> component."), O.useContext(bo).location }
var Ab = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function jb(n) { O.useContext(In).static || O.useLayoutEffect(n) }

function XS() { let { isDataRoute: n } = O.useContext(yi); return n ? lT() : JS() }

function JS() { Ze(wo(), "useNavigate() may be used only in the context of a <Router> component."); let n = O.useContext(La),
        { basename: e, navigator: s } = O.useContext(In),
        { matches: a } = O.useContext(yi),
        { pathname: l } = En(),
        u = JSON.stringify(_b(a)),
        c = O.useRef(!1); return jb(() => { c.current = !0 }), O.useCallback((m, p = {}) => { if (Tn(c.current, Ab), !c.current) return; if (typeof m == "number") { s.go(m); return } let g = Sb(m, JSON.parse(u), l, p.relative === "path");
        n == null && e !== "/" && (g.pathname = g.pathname === "/" ? e : fi([e, g.pathname])), (p.replace ? s.replace : s.push)(g, p.state, p) }, [e, s, u, l, n]) }
O.createContext(null);

function xo(n, { relative: e } = {}) { let { matches: s } = O.useContext(yi), { pathname: a } = En(), l = JSON.stringify(_b(s)); return O.useMemo(() => Sb(n, JSON.parse(l), a, e === "path"), [n, l, a, e]) }

function ZS(n, e) { return Cb(n, e) }

function Cb(n, e, s, a, l) { var L;
    Ze(wo(), "useRoutes() may be used only in the context of a <Router> component."); let { navigator: u } = O.useContext(In), { matches: c } = O.useContext(yi), d = c[c.length - 1], m = d ? d.params : {}, p = d ? d.pathname : "/", g = d ? d.pathnameBase : "/", y = d && d.route; { let E = y && y.path || "";
        Rb(p, !y || E.endsWith("*") || E.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let w=En(),_;if(e){let E=typeof e=="string"?Cs(e):e;Ze(g==="/"||((L=E.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${E.pathname}" was given in the \`location\` prop.`),_=E}else _=w;let S=_.pathname||"/",A=S;if(g!=="/"){let E=g.replace(/^\//,"").split("/");A="/"+S.replace(/^\//,"").split("/").slice(E.length).join("/")}let k=bb(n,{pathname:A});Tn(y||k!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Tn(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=nT(k&&k.map(E=>Object.assign({},E,{params:Object.assign({},m,E.params),pathname:fi([g,u.encodeLocation?u.encodeLocation(E.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?g:fi([g,u.encodeLocation?u.encodeLocation(E.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),c,s,a,l);return e&&R?O.createElement(bo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},R):R}function QS(){let n=oT(),e=IS(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:u},"ErrorBoundary")," or"," ",O.createElement("code",{style:u},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),s?O.createElement("pre",{style:l},s):null,c)}var WS=O.createElement(QS,null),eT=class extends O.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?O.createElement(yi.Provider,{value:this.props.routeContext},O.createElement(wf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function tT({routeContext:n,match:e,children:s}){let a=O.useContext(La);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(yi.Provider,{value:n},s)}function nT(n,e=[],s=null,a=null,l=null){if(n==null){if(!s)return null;if(s.errors)n=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let u=n,c=s==null?void 0:s.errors;if(c!=null){let g=u.findIndex(y=>y.route.id&&(c==null?void 0:c[y.route.id])!==void 0);Ze(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let d=!1,m=-1;if(s)for(let g=0;g<u.length;g++){let y=u[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=g),y.route.id){let{loaderData:w,errors:_}=s,S=y.route.loader&&!w.hasOwnProperty(y.route.id)&&(!_||_[y.route.id]===void 0);if(y.route.lazy||S){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}let p=s&&a?(g,y)=>{var w,_;a(g,{location:s.location,params:((_=(w=s.matches)==null?void 0:w[0])==null?void 0:_.params)??{},errorInfo:y})}:void 0;return u.reduceRight((g,y,w)=>{let _,S=!1,A=null,k=null;s&&(_=c&&y.route.id?c[y.route.id]:void 0,A=y.route.errorElement||WS,d&&(m<0&&w===0?(Rb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,k=null):m===w&&(S=!0,k=y.route.hydrateFallbackElement||null)));let R=e.concat(u.slice(0,w+1)),L=()=>{let E;return _?E=A:S?E=k:y.route.Component?E=O.createElement(y.route.Component,null):y.route.element?E=y.route.element:E=g,O.createElement(tT,{match:y,routeContext:{outlet:g,matches:R,isDataRoute:s!=null},children:E})};return s&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?O.createElement(eT,{location:s.location,revalidation:s.revalidation,component:A,error:_,children:L(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:p}):L()},null)}function xf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iT(n){let e=O.useContext(La);return Ze(e,xf(n)),e}function sT(n){let e=O.useContext(Du);return Ze(e,xf(n)),e}function aT(n){let e=O.useContext(yi);return Ze(e,xf(n)),e}function _f(n){let e=aT(n),s=e.matches[e.matches.length-1];return Ze(s.route.id,`${n} can only be used on routes that contain a unique "id"`),s.route.id}function rT(){return _f("useRouteId")}function oT(){var a;let n=O.useContext(wf),e=sT("useRouteError"),s=_f("useRouteError");return n!==void 0?n:(a=e.errors)==null?void 0:a[s]}function lT(){let{router:n}=iT("useNavigate"),e=_f("useNavigate"),s=O.useRef(!1);return jb(()=>{s.current=!0}),O.useCallback(async(l,u={})=>{Tn(s.current,Ab),s.current&&(typeof l=="number"?n.navigate(l):await n.navigate(l,{fromRouteId:e,...u}))},[n,e])}var dv={};function Rb(n,e,s){!e&&!dv[n]&&(dv[n]=!0,Tn(!1,s))}O.memo(uT);function uT({routes:n,future:e,state:s,unstable_onError:a}){return Cb(n,void 0,s,a,e)}function qr(n){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function cT({basename:n="/",children:e=null,location:s,navigationType:a="POP",navigator:l,static:u=!1}){Ze(!wo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=O.useMemo(()=>({basename:c,navigator:l,static:u,future:{}}),[c,l,u]);typeof s=="string"&&(s=Cs(s));let{pathname:m="/",search:p="",hash:g="",state:y=null,key:w="default"}=s,_=O.useMemo(()=>{let S=mi(m,c);return S==null?null:{location:{pathname:S,search:p,hash:g,state:y,key:w},navigationType:a}},[c,m,p,g,y,w,a]);return Tn(_!=null,`<Router basename="${c}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:O.createElement(In.Provider,{value:d},O.createElement(bo.Provider,{children:e,value:_}))}function hT({children:n,location:e}){return ZS(Ld(n),e)}function Ld(n,e=[]){let s=[];return O.Children.forEach(n,(a,l)=>{if(!O.isValidElement(a))return;let u=[...e,l];if(a.type===O.Fragment){s.push.apply(s,Ld(a.props.children,u));return}Ze(a.type===qr,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=Ld(a.props.children,u)),s.push(c)}),s}var lu="get",uu="application/x-www-form-urlencoded";function Mu(n){return n!=null&&typeof n.tagName=="string"}function dT(n){return Mu(n)&&n.tagName.toLowerCase()==="button"}function fT(n){return Mu(n)&&n.tagName.toLowerCase()==="form"}function mT(n){return Mu(n)&&n.tagName.toLowerCase()==="input"}function pT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function gT(n,e){return n.button===0&&(!e||e==="_self")&&!pT(n)}var Gl=null;function yT(){if(Gl===null)try{new FormData(document.createElement("form"),0),Gl=!1}catch{Gl=!0}return Gl}var vT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hd(n){return n!=null&&!vT.has(n)?(Tn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uu}"`),null):n}function bT(n,e){let s,a,l,u,c;if(fT(n)){let d=n.getAttribute("action");a=d?mi(d,e):null,s=n.getAttribute("method")||lu,l=hd(n.getAttribute("enctype"))||uu,u=new FormData(n)}else if(dT(n)||mT(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||d.getAttribute("action");if(a=m?mi(m,e):null,s=n.getAttribute("formmethod")||d.getAttribute("method")||lu,l=hd(n.getAttribute("formenctype"))||hd(d.getAttribute("enctype"))||uu,u=new FormData(d,n),!yT()){let{name:p,type:g,value:y}=n;if(g==="image"){let w=p?`${p}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else p&&u.append(p,y)}}else{if(Mu(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=lu,a=null,l=uu,c=n}return u&&l==="text/plain"&&(c=u,u=void 0),{action:a,method:s.toLowerCase(),encType:l,formData:u,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sf(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function wT(n,e,s){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${s}`:e&&mi(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${s}`,a}async function xT(n,e){if(n.id in e)return e[n.id];try{let s=await import(n.module);return e[n.id]=s,s}catch(s){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _T(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function ST(n,e,s){let a=await Promise.all(n.map(async l=>{let u=e.routes[l.route.id];if(u){let c=await xT(u,s);return c.links?c.links():[]}return[]}));return jT(a.flat(1).filter(_T).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function fv(n,e,s,a,l,u){let c=(m,p)=>s[p]?m.route.id!==s[p].route.id:!0,d=(m,p)=>{var g;return s[p].pathname!==m.pathname||((g=s[p].route.path)==null?void 0:g.endsWith("*"))&&s[p].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,p)=>c(m,p)||d(m,p)):u==="data"?e.filter((m,p)=>{var y;let g=a.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(c(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((y=s[0])==null?void 0:y.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function TT(n,e,{includeHydrateFallback:s}={}){return ET(n.map(a=>{let l=e.routes[a.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),s&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function ET(n){return[...new Set(n)]}function AT(n){let e={},s=Object.keys(n).sort();for(let a of s)e[a]=n[a];return e}function jT(n,e){let s=new Set;return new Set(e),n.reduce((a,l)=>{let u=JSON.stringify(AT(l));return s.has(u)||(s.add(u),a.push({key:u,link:l})),a},[])}function kb(){let n=O.useContext(La);return Sf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function CT(){let n=O.useContext(Du);return Sf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Tf=O.createContext(void 0);Tf.displayName="FrameworkContext";function Ob(){let n=O.useContext(Tf);return Sf(n,"You must render this element inside a <HydratedRouter> element"),n}function RT(n,e){let s=O.useContext(Tf),[a,l]=O.useState(!1),[u,c]=O.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:y}=e,w=O.useRef(null);O.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let A=R=>{R.forEach(L=>{c(L.isIntersecting)})},k=new IntersectionObserver(A,{threshold:.5});return w.current&&k.observe(w.current),()=>{k.disconnect()}}},[n]),O.useEffect(()=>{if(a){let A=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(A)}}},[a]);let _=()=>{l(!0)},S=()=>{l(!1),c(!1)};return s?n!=="intent"?[u,w,{}]:[u,w,{onFocus:Vr(d,_),onBlur:Vr(m,S),onMouseEnter:Vr(p,_),onMouseLeave:Vr(g,S),onTouchStart:Vr(y,_)}]:[!1,w,{}]}function Vr(n,e){return s=>{n&&n(s),s.defaultPrevented||e(s)}}function kT({page:n,...e}){let{router:s}=kb(),a=O.useMemo(()=>bb(s.routes,n,s.basename),[s.routes,n,s.basename]);return a?O.createElement(NT,{page:n,matches:a,...e}):null}function OT(n){let{manifest:e,routeModules:s}=Ob(),[a,l]=O.useState([]);return O.useEffect(()=>{let u=!1;return ST(n,e,s).then(c=>{u||l(c)}),()=>{u=!0}},[n,e,s]),a}function NT({page:n,matches:e,...s}){let a=En(),{manifest:l,routeModules:u}=Ob(),{basename:c}=kb(),{loaderData:d,matches:m}=CT(),p=O.useMemo(()=>fv(n,e,m,l,a,"data"),[n,e,m,l,a]),g=O.useMemo(()=>fv(n,e,m,l,a,"assets"),[n,e,m,l,a]),y=O.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let S=new Set,A=!1;if(e.forEach(R=>{var E;let L=l.routes[R.route.id];!L||!L.hasLoader||(!p.some(G=>G.route.id===R.route.id)&&R.route.id in d&&((E=u[R.route.id])!=null&&E.shouldRevalidate)||L.hasClientLoader?A=!0:S.add(R.route.id))}),S.size===0)return[];let k=wT(n,c,"data");return A&&S.size>0&&k.searchParams.set("_routes",e.filter(R=>S.has(R.route.id)).map(R=>R.route.id).join(",")),[k.pathname+k.search]},[c,d,a,l,p,e,n,u]),w=O.useMemo(()=>TT(g,l),[g,l]),_=OT(g);return O.createElement(O.Fragment,null,y.map(S=>O.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...s})),w.map(S=>O.createElement("link",{key:S,rel:"modulepreload",href:S,...s})),_.map(({key:S,link:A})=>O.createElement("link",{key:S,nonce:s.nonce,...A})))}function DT(...n){return e=>{n.forEach(s=>{typeof s=="function"?s(e):s!=null&&(s.current=e)})}}var Nb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Nb&&(window.__reactRouterVersion="7.9.6")}catch{}function MT({basename:n,children:e,window:s}){let a=O.useRef();a.current==null&&(a.current=wS({window:s,v5Compat:!0}));let l=a.current,[u,c]=O.useState({action:l.action,location:l.location}),d=O.useCallback(m=>{O.startTransition(()=>c(m))},[c]);return O.useLayoutEffect(()=>l.listen(d),[l,d]),O.createElement(cT,{basename:n,children:e,location:u.location,navigationType:u.action,navigator:l})}var Db=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Es=O.forwardRef(function({onClick:e,discover:s="render",prefetch:a="none",relative:l,reloadDocument:u,replace:c,state:d,target:m,to:p,preventScrollReset:g,viewTransition:y,...w},_){let{basename:S}=O.useContext(In),A=typeof p=="string"&&Db.test(p),k,R=!1;if(typeof p=="string"&&A&&(k=p,Nb))try{let oe=new URL(window.location.href),je=p.startsWith("//")?new URL(oe.protocol+p):new URL(p),Ie=mi(je.pathname,S);je.origin===oe.origin&&Ie!=null?p=Ie+je.search+je.hash:R=!0}catch{Tn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=FS(p,{relative:l}),[E,G,J]=RT(a,w),Z=zT(p,{replace:c,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:y});function F(oe){e&&e(oe),oe.defaultPrevented||Z(oe)}let te=O.createElement("a",{...w,...J,href:k||L,onClick:R||u?e:F,ref:DT(_,G),target:m,"data-discover":!A&&s==="render"?"true":void 0});return E&&!A?O.createElement(O.Fragment,null,te,O.createElement(kT,{page:L})):te});Es.displayName="Link";var UT=O.forwardRef(function({"aria-current":e="page",caseSensitive:s=!1,className:a="",end:l=!1,style:u,to:c,viewTransition:d,children:m,...p},g){let y=xo(c,{relative:p.relative}),w=En(),_=O.useContext(Du),{navigator:S,basename:A}=O.useContext(In),k=_!=null&&qT(y)&&d===!0,R=S.encodeLocation?S.encodeLocation(y).pathname:y.pathname,L=w.pathname,E=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;s||(L=L.toLowerCase(),E=E?E.toLowerCase():null,R=R.toLowerCase()),E&&A&&(E=mi(E,A)||E);const G=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let J=L===R||!l&&L.startsWith(R)&&L.charAt(G)==="/",Z=E!=null&&(E===R||!l&&E.startsWith(R)&&E.charAt(R.length)==="/"),F={isActive:J,isPending:Z,isTransitioning:k},te=J?e:void 0,oe;typeof a=="function"?oe=a(F):oe=[a,J?"active":null,Z?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let je=typeof u=="function"?u(F):u;return O.createElement(Es,{...p,"aria-current":te,className:oe,ref:g,style:je,to:c,viewTransition:d},typeof m=="function"?m(F):m)});UT.displayName="NavLink";var LT=O.forwardRef(({discover:n="render",fetcherKey:e,navigate:s,reloadDocument:a,replace:l,state:u,method:c=lu,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:y,...w},_)=>{let S=HT(),A=$T(d,{relative:p}),k=c.toLowerCase()==="get"?"get":"post",R=typeof d=="string"&&Db.test(d),L=E=>{if(m&&m(E),E.defaultPrevented)return;E.preventDefault();let G=E.nativeEvent.submitter,J=(G==null?void 0:G.getAttribute("formmethod"))||c;S(G||E.currentTarget,{fetcherKey:e,method:J,navigate:s,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:y})};return O.createElement("form",{ref:_,method:k,action:A,onSubmit:a?m:L,...w,"data-discover":!R&&n==="render"?"true":void 0})});LT.displayName="Form";function PT(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mb(n){let e=O.useContext(La);return Ze(e,PT(n)),e}function zT(n,{target:e,replace:s,state:a,preventScrollReset:l,relative:u,viewTransition:c}={}){let d=XS(),m=En(),p=xo(n,{relative:u});return O.useCallback(g=>{if(gT(g,e)){g.preventDefault();let y=s!==void 0?s:no(m)===no(p);d(n,{replace:y,state:a,preventScrollReset:l,relative:u,viewTransition:c})}},[m,d,p,s,a,e,n,l,u,c])}var BT=0,VT=()=>`__${String(++BT)}__`;function HT(){let{router:n}=Mb("useSubmit"),{basename:e}=O.useContext(In),s=rT();return O.useCallback(async(a,l={})=>{let{action:u,method:c,encType:d,formData:m,body:p}=bT(a,e);if(l.navigate===!1){let g=l.fetcherKey||VT();await n.fetch(g,s,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||c,formEncType:l.encType||d,flushSync:l.flushSync})}else await n.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||c,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:s,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,e,s])}function $T(n,{relative:e}={}){let{basename:s}=O.useContext(In),a=O.useContext(yi);Ze(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),u={...xo(n||".",{relative:e})},c=En();if(n==null){u.search=c.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(y=>y).forEach(y=>d.append("index",y));let g=d.toString();u.search=g?`?${g}`:""}}return(!n||n===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(u.pathname=u.pathname==="/"?s:fi([s,u.pathname])),no(u)}function qT(n,{relative:e}={}){let s=O.useContext(Eb);Ze(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Mb("useViewTransitionState"),l=xo(n,{relative:e});if(!s.isTransitioning)return!1;let u=mi(s.currentLocation.pathname,a)||s.currentLocation.pathname,c=mi(s.nextLocation.pathname,a)||s.nextLocation.pathname;return vu(l.pathname,c)!=null||vu(l.pathname,u)!=null}const Ub=O.createContext(void 0),IT=({children:n})=>{const[e,s]=O.useState(()=>{if(typeof window<"u"){const l=localStorage.getItem("theme");return l||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}return"dark"});O.useEffect(()=>{const l=window.document.documentElement;l.classList.remove("light","dark"),l.classList.add(e),localStorage.setItem("theme",e)},[e]);const a=()=>{s(l=>l==="dark"?"light":"dark")};return b.jsx(Ub.Provider,{value:{theme:e,toggleTheme:a},children:n})},GT=()=>{const n=O.useContext(Ub);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n},KT="/assets/dashboard-BJdVhRle.png",YT="/assets/taskit-DT5NepwS.png",FT="/assets/rotten-UW6Ubjkm.png",XT="/assets/zemi-D0P3Yz44.png",JT="/assets/flowticket-BA8EcOtN.png",ZT="/assets/yowl-oaUHwBy6.png",QT="/assets/domoo-B-ZOJwR0.png",WT="/assets/certification_postman-Cp1nvON8.pdf",cu={fr:{nav:{about:"Qui suis-je",projects:"Réalisations",contact:"Contact"},hero:{title:"Lauret Kryst-Sasler CHACHA",subtitle:"Développeur Web Full Stack | Entre biomédical et développement logiciel",cta_cv:"Télécharger mon CV",cta_projects:"Voir mes réalisations"},about:{title:"À Propos",subtitle:"Mon Parcours",bio_p1:"Issu d'un parcours scientifique rigoureux en analyses biomédicales, j'ai développé une méthodologie de travail précise et une forte capacité d'analyse.",bio_p2:"Ma curiosité pour la technologie et la logique m'a conduit à opérer une transition passionnée vers le développement web. Diplômé de la Coding Academy, j'allie aujourd'hui ma rigueur scientifique à la créativité du code.",bio_p3:"J'apprécie les environnements où je peux progresser tout en apportant une vraie valeur à l'équipe et au produit.",values_title:"Mes Valeurs",values:["Rigueur","Honnêteté","Discipline","Curiosité"]},experience:{title:"Expériences Professionnelles"},education:{title:"Formations & Certifications"},skills:{title:"Compétences Techniques",frontend:"Frontend",backend:"Backend",db:"Base de données",tools:"Outils",soft:"Soft Skills"},projects:{title:"Mes Réalisations",subtitle:"Une sélection de mes projets récents",completed:"Projets Terminés",in_progress:"Projet en Cours",zemi_desc:"Une plateforme innovante de transport partagé visant à simplifier la mobilité urbaine.",zemi_features:"Authentification sécurisée, Géolocalisation temps réel, Matching chauffeur/passager, Paiement intégré.",zemi_roadmap:"Développement MVP mobile, Intégration IA pour l'optimisation des trajets.",view_project:"Voir le projet",source_code:"Code source"},perspectives:{title:"Perspectives",content:"Mon ambition est de devenir un architecte logiciel capable de concevoir des solutions complexes et scalables. Je souhaite approfondir mes connaissances en Cloud Computing et en DevOps dans les années à venir."},contact:{title:"Me Contacter",subtitle:"Discutons de votre prochain projet",form_name:"Nom",form_email:"Email",form_message:"Message",form_send:"Envoyer le message",success_msg:"Message envoyé avec succès !",sending:"Envoi..."},seo:{home:{title:"Accueil",description:"Portfolio de Lauret CHACHA, Développeur Full Stack spécialisé en React, Node.js et Next.js. Découvrez mon parcours du biomédical à la tech."},projects:{title:"Mes Réalisations",description:"Découvrez les projets web de Lauret CHACHA : Yowl, My Shop, Dashboard, et Zémi, la plateforme de transport partagé."},contact:{title:"Contact",description:"Contactez Lauret CHACHA pour vos projets de développement web. Disponible pour freelance et opportunités CDI."}}},en:{nav:{about:"About Me",projects:"Projects",contact:"Contact"},hero:{title:"Lauret CHACHA",subtitle:"Full Stack Web Developer | Bridging Biomedical Science & Software Engineering",cta_cv:"Download Resume",cta_projects:"View Projects"},about:{title:"About Me",subtitle:"My Journey",bio_p1:"With a rigorous background in biomedical analysis, I have developed precise working methodologies and strong analytical skills.",bio_p2:"My curiosity for technology and logic led me to a passionate transition into web development. A graduate of the Coding Academy, I now combine scientific rigor with creative coding.",bio_p3:"I appreciate environments where I can grow while adding real value to the team and the product.",values_title:"My Values",values:["Rigor","Honesty","Discipline","Curiosity"]},experience:{title:"Professional Experience"},education:{title:"Education & Certifications"},skills:{title:"Technical Skills",frontend:"Frontend",backend:"Backend",db:"Database",tools:"Tools",soft:"Soft Skills"},projects:{title:"My Portfolio",subtitle:"A selection of my recent work",completed:"Completed Projects",in_progress:"Work in Progress",zemi_desc:"An innovative shared transport platform aiming to simplify urban mobility.",zemi_features:"Secure Auth, Real-time Geolocation, Driver/Passenger Matching, Integrated Payments.",zemi_roadmap:"Mobile MVP Development, AI Integration for route optimization.",view_project:"View Project",source_code:"Source Code"},perspectives:{title:"Perspectives",content:"My ambition is to become a software architect capable of designing complex and scalable solutions. I aim to deepen my knowledge in Cloud Computing and DevOps in the coming years."},contact:{title:"Get in Touch",subtitle:"Let's talk about your next project",form_name:"Name",form_email:"Email",form_message:"Message",form_send:"Send Message",success_msg:"Message sent successfully!",sending:"Sending..."},seo:{home:{title:"Home",description:"Portfolio of Lauret CHACHA, Full Stack Developer specializing in React, Node.js, and Next.js. Discover my journey from biomedical science to tech."},projects:{title:"My Projects",description:"Explore Lauret CHACHA's web projects: Yowl, My Shop, Dashboard, and Zémi, the shared transport platform."},contact:{title:"Contact",description:"Get in touch with Lauret CHACHA for your web development projects. Available for freelance and full-time opportunities."}}}},io=[{year:"2025 - Present",role:"Full Stack Developer",company:"Epitech",description:"Development of web applications using React, Node.js and Next.js."},{year:"2024 - Present",role:"Junior web Developer",company:"Cicasys",description:"Responsible for the deployment and maintenance of Medica, which is a medical management software program."}],bu=[{year:"2026",degree:"Full Stack Developer Certification",school:"Epitech (Coding Academy)",url:""},{year:"2025",degree:"Postman API Fundamentals Student Expert",school:"Postman",url:`${WT},`},{year:"2023",degree:"Bachelor's Degree in Biochemical and Biomedical Technologies",school:"FOPASE Higher Institute",url:""}],wu=[{title:"YOWL",description:"A content aggregation platform allowing users to comment and rate content, similar to Reddit.",tags:["VueJs","Laravel","MySQL"],imageUrl:`${ZT}`,repoUrl:"https://github.com/Handsomeboy990/YOWL_COMMUNITY",status:"completed"},{title:"FlowTIckets",description:"Complete e-commerce solution with cart management, stripe payment, and admin dashboard.",tags:["TypeScript","EJS","Node.js","MongoDB"],imageUrl:`${JT}`,repoUrl:"https://github.com/Handsomeboy990/FlowTickets",status:"completed"},{title:"Dashboard",description:"Administrative panel for data visualization and user management.",tags:["Nest.js","Tailwind","JavaScript"],imageUrl:`${KT}`,repoUrl:"https://royal-dash.netlify.app",status:"completed"},{title:"My Rotten Tomatoes",description:"Movie rating application utilizing external movie database APIs.",tags:["NextJs","API"],imageUrl:`${FT}`,repoUrl:"https://rotten2.vercel.app/",status:"completed"},{title:"TaskIT",description:"Interactive task management tool inspired by sticky notes.",tags:["JavaScript","VueJs","TypeScript"],imageUrl:`${YT}`,repoUrl:"https://github.com/Handsomeboy990/TaskIt",status:"completed"},{title:"Domoo",description:"Complete Next.js application for real estate property management with payment tracking, user management, and automated notifications.",tags:["JavaScript","NestJS","MongoDB"],imageUrl:`${QT}`,repoUrl:"https://domoo.vercel.app/",status:"completed"}],xu={title:"Zémi",description:"Platform aimed at revolutionizing shared transport in urban environments.",tags:["NextJs","MongoDB","TypeScript"],imageUrl:`${XT}`,repoUrl:"#",status:"in-progress"},Lb=O.createContext(void 0),eE=({children:n})=>{const[e,s]=O.useState("fr"),a=cu[e];return b.jsx(Lb.Provider,{value:{language:e,setLanguage:s,t:a},children:n})},Uu=()=>{const n=O.useContext(Lb);if(n===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return n};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nE=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,a)=>a?a.toUpperCase():s.toLowerCase()),mv=n=>{const e=nE(n);return e.charAt(0).toUpperCase()+e.slice(1)},Pb=(...n)=>n.filter((e,s,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===s).join(" ").trim(),iE=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=O.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:u,iconNode:c,...d},m)=>O.createElement("svg",{ref:m,...sE,width:e,height:e,stroke:n,strokeWidth:a?Number(s)*24/Number(e):s,className:Pb("lucide",l),...!u&&!iE(d)&&{"aria-hidden":"true"},...d},[...c.map(([p,g])=>O.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(n,e)=>{const s=O.forwardRef(({className:a,...l},u)=>O.createElement(aE,{ref:u,iconNode:e,className:Pb(`lucide-${tE(mv(n))}`,`lucide-${n}`,a),...l}));return s.displayName=mv(n),s};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],oE=ce("arrow-left",rE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],uE=ce("arrow-right",lE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],hE=ce("atom",cE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],fE=ce("award",dE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],pE=ce("braces",mE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],yE=ce("brain",gE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],zb=ce("briefcase-business",vE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],wE=ce("briefcase",bE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_E=ce("chevron-right",xE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],dd=ce("circle-check",SE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],pv=ce("code-xml",TE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]],AE=ce("command",EE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]],CE=ce("container",jE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Bb=ce("database",RE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],OE=ce("download",kE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],gv=ce("external-link",NE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]],yv=ce("file-braces",DE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],UE=ce("file-code-corner",ME);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],PE=ce("file-down",LE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Vb=ce("folder-open",zE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],VE=ce("git-branch",BE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Hb=ce("github",HE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],hu=ce("globe",$E);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],$b=ce("graduation-cap",qE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],fd=ce("grip-vertical",IE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]],KE=ce("hexagon",GE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],qb=ce("image",YE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],du=ce("layers",FE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Ib=ce("layout-dashboard",XE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],ZE=ce("link-2",JE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Gb=ce("linkedin",QE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Kb=ce("mail",WE);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],tA=ce("menu",eA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],vv=ce("moon",nA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],sA=ce("palette",iA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],bv=ce("plus",aA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],wv=ce("rocket",rA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],lA=ce("send",oA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],cA=ce("server",uA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Yr=ce("shield",hA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],fA=ce("sparkles",dA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],xv=ce("sun",mA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],gA=ce("table",pA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],vA=ce("terminal",yA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Kl=ce("trash-2",bA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],_v=ce("triangle",wA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Yb=ce("user-round",xA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],SA=ce("wind",_A);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],EA=ce("workflow",TA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],jA=ce("x",AA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],RA=ce("zap",CA),dt=({className:n="",variant:e="primary",size:s="md",children:a,...l})=>{const u="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",c={primary:"bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98]",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",ghost:"hover:bg-accent hover:text-accent-foreground"},d={sm:"h-9 px-3 text-sm",md:"h-10 px-4 py-2",lg:"h-11 px-7 text-base"};return b.jsx("button",{className:`${u} ${c[e]} ${d[s]} ${n}`,...l,children:a})},Ef=O.createContext({});function Af(n){const e=O.useRef(null);return e.current===null&&(e.current=n()),e.current}const jf=typeof window<"u",Fb=jf?O.useLayoutEffect:O.useEffect,Lu=O.createContext(null);function Cf(n,e){n.indexOf(e)===-1&&n.push(e)}function Rf(n,e){const s=n.indexOf(e);s>-1&&n.splice(s,1)}const pi=(n,e,s)=>s>e?e:s<n?n:s;let kf=()=>{};const gi={},Xb=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Jb(n){return typeof n=="object"&&n!==null}const Zb=n=>/^0[^.\s]+$/u.test(n);function Of(n){let e;return()=>(e===void 0&&(e=n()),e)}const Sn=n=>n,kA=(n,e)=>s=>e(n(s)),_o=(...n)=>n.reduce(kA),so=(n,e,s)=>{const a=e-n;return a===0?1:(s-n)/a};class Nf{constructor(){this.subscriptions=[]}add(e){return Cf(this.subscriptions,e),()=>Rf(this.subscriptions,e)}notify(e,s,a){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](e,s,a);else for(let u=0;u<l;u++){const c=this.subscriptions[u];c&&c(e,s,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const $n=n=>n*1e3,_n=n=>n/1e3;function Qb(n,e){return e?n*(1e3/e):0}const Wb=(n,e,s)=>(((1-3*s+3*e)*n+(3*s-6*e))*n+3*e)*n,OA=1e-7,NA=12;function DA(n,e,s,a,l){let u,c,d=0;do c=e+(s-e)/2,u=Wb(c,a,l)-n,u>0?s=c:e=c;while(Math.abs(u)>OA&&++d<NA);return c}function So(n,e,s,a){if(n===e&&s===a)return Sn;const l=u=>DA(u,0,1,n,s);return u=>u===0||u===1?u:Wb(l(u),e,a)}const ew=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,tw=n=>e=>1-n(1-e),nw=So(.33,1.53,.69,.99),Df=tw(nw),iw=ew(Df),sw=n=>(n*=2)<1?.5*Df(n):.5*(2-Math.pow(2,-10*(n-1))),Mf=n=>1-Math.sin(Math.acos(n)),aw=tw(Mf),rw=ew(Mf),MA=So(.42,0,1,1),UA=So(0,0,.58,1),ow=So(.42,0,.58,1),LA=n=>Array.isArray(n)&&typeof n[0]!="number",lw=n=>Array.isArray(n)&&typeof n[0]=="number",PA={linear:Sn,easeIn:MA,easeInOut:ow,easeOut:UA,circIn:Mf,circInOut:rw,circOut:aw,backIn:Df,backInOut:iw,backOut:nw,anticipate:sw},zA=n=>typeof n=="string",Sv=n=>{if(lw(n)){kf(n.length===4);const[e,s,a,l]=n;return So(e,s,a,l)}else if(zA(n))return PA[n];return n},Yl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function BA(n,e){let s=new Set,a=new Set,l=!1,u=!1;const c=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function m(g){c.has(g)&&(p.schedule(g),n()),g(d)}const p={schedule:(g,y=!1,w=!1)=>{const S=w&&l?s:a;return y&&c.add(g),S.has(g)||S.add(g),g},cancel:g=>{a.delete(g),c.delete(g)},process:g=>{if(d=g,l){u=!0;return}l=!0,[s,a]=[a,s],s.forEach(m),s.clear(),l=!1,u&&(u=!1,p.process(g))}};return p}const VA=40;function uw(n,e){let s=!1,a=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>s=!0,c=Yl.reduce((E,G)=>(E[G]=BA(u),E),{}),{setup:d,read:m,resolveKeyframes:p,preUpdate:g,update:y,preRender:w,render:_,postRender:S}=c,A=()=>{const E=gi.useManualTiming?l.timestamp:performance.now();s=!1,gi.useManualTiming||(l.delta=a?1e3/60:Math.max(Math.min(E-l.timestamp,VA),1)),l.timestamp=E,l.isProcessing=!0,d.process(l),m.process(l),p.process(l),g.process(l),y.process(l),w.process(l),_.process(l),S.process(l),l.isProcessing=!1,s&&e&&(a=!1,n(A))},k=()=>{s=!0,a=!0,l.isProcessing||n(A)};return{schedule:Yl.reduce((E,G)=>{const J=c[G];return E[G]=(Z,F=!1,te=!1)=>(s||k(),J.schedule(Z,F,te)),E},{}),cancel:E=>{for(let G=0;G<Yl.length;G++)c[Yl[G]].cancel(E)},state:l,steps:c}}const{schedule:Fe,cancel:Ki,state:Rt,steps:md}=uw(typeof requestAnimationFrame<"u"?requestAnimationFrame:Sn,!0);let fu;function HA(){fu=void 0}const Ft={now:()=>(fu===void 0&&Ft.set(Rt.isProcessing||gi.useManualTiming?Rt.timestamp:performance.now()),fu),set:n=>{fu=n,queueMicrotask(HA)}},cw=n=>e=>typeof e=="string"&&e.startsWith(n),Uf=cw("--"),$A=cw("var(--"),Lf=n=>$A(n)?qA.test(n.split("/*")[0].trim()):!1,qA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Pa={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ao={...Pa,transform:n=>pi(0,1,n)},Fl={...Pa,default:1},Fr=n=>Math.round(n*1e5)/1e5,Pf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function IA(n){return n==null}const GA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,zf=(n,e)=>s=>!!(typeof s=="string"&&GA.test(s)&&s.startsWith(n)||e&&!IA(s)&&Object.prototype.hasOwnProperty.call(s,e)),hw=(n,e,s)=>a=>{if(typeof a!="string")return a;const[l,u,c,d]=a.match(Pf);return{[n]:parseFloat(l),[e]:parseFloat(u),[s]:parseFloat(c),alpha:d!==void 0?parseFloat(d):1}},KA=n=>pi(0,255,n),pd={...Pa,transform:n=>Math.round(KA(n))},_s={test:zf("rgb","red"),parse:hw("red","green","blue"),transform:({red:n,green:e,blue:s,alpha:a=1})=>"rgba("+pd.transform(n)+", "+pd.transform(e)+", "+pd.transform(s)+", "+Fr(ao.transform(a))+")"};function YA(n){let e="",s="",a="",l="";return n.length>5?(e=n.substring(1,3),s=n.substring(3,5),a=n.substring(5,7),l=n.substring(7,9)):(e=n.substring(1,2),s=n.substring(2,3),a=n.substring(3,4),l=n.substring(4,5),e+=e,s+=s,a+=a,l+=l),{red:parseInt(e,16),green:parseInt(s,16),blue:parseInt(a,16),alpha:l?parseInt(l,16)/255:1}}const Pd={test:zf("#"),parse:YA,transform:_s.transform},To=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),qi=To("deg"),qn=To("%"),fe=To("px"),FA=To("vh"),XA=To("vw"),Tv={...qn,parse:n=>qn.parse(n)/100,transform:n=>qn.transform(n*100)},Aa={test:zf("hsl","hue"),parse:hw("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:s,alpha:a=1})=>"hsla("+Math.round(n)+", "+qn.transform(Fr(e))+", "+qn.transform(Fr(s))+", "+Fr(ao.transform(a))+")"},ft={test:n=>_s.test(n)||Pd.test(n)||Aa.test(n),parse:n=>_s.test(n)?_s.parse(n):Aa.test(n)?Aa.parse(n):Pd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?_s.transform(n):Aa.transform(n),getAnimatableNone:n=>{const e=ft.parse(n);return e.alpha=0,ft.transform(e)}},JA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ZA(n){var e,s;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Pf))==null?void 0:e.length)||0)+(((s=n.match(JA))==null?void 0:s.length)||0)>0}const dw="number",fw="color",QA="var",WA="var(",Ev="${}",e2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ro(n){const e=n.toString(),s=[],a={color:[],number:[],var:[]},l=[];let u=0;const d=e.replace(e2,m=>(ft.test(m)?(a.color.push(u),l.push(fw),s.push(ft.parse(m))):m.startsWith(WA)?(a.var.push(u),l.push(QA),s.push(m)):(a.number.push(u),l.push(dw),s.push(parseFloat(m))),++u,Ev)).split(Ev);return{values:s,split:d,indexes:a,types:l}}function mw(n){return ro(n).values}function pw(n){const{split:e,types:s}=ro(n),a=e.length;return l=>{let u="";for(let c=0;c<a;c++)if(u+=e[c],l[c]!==void 0){const d=s[c];d===dw?u+=Fr(l[c]):d===fw?u+=ft.transform(l[c]):u+=l[c]}return u}}const t2=n=>typeof n=="number"?0:ft.test(n)?ft.getAnimatableNone(n):n;function n2(n){const e=mw(n);return pw(n)(e.map(t2))}const Yi={test:ZA,parse:mw,createTransformer:pw,getAnimatableNone:n2};function gd(n,e,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(e-n)*6*s:s<1/2?e:s<2/3?n+(e-n)*(2/3-s)*6:n}function i2({hue:n,saturation:e,lightness:s,alpha:a}){n/=360,e/=100,s/=100;let l=0,u=0,c=0;if(!e)l=u=c=s;else{const d=s<.5?s*(1+e):s+e-s*e,m=2*s-d;l=gd(m,d,n+1/3),u=gd(m,d,n),c=gd(m,d,n-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:a}}function _u(n,e){return s=>s>0?e:n}const Je=(n,e,s)=>n+(e-n)*s,yd=(n,e,s)=>{const a=n*n,l=s*(e*e-a)+a;return l<0?0:Math.sqrt(l)},s2=[Pd,_s,Aa],a2=n=>s2.find(e=>e.test(n));function Av(n){const e=a2(n);if(!e)return!1;let s=e.parse(n);return e===Aa&&(s=i2(s)),s}const jv=(n,e)=>{const s=Av(n),a=Av(e);if(!s||!a)return _u(n,e);const l={...s};return u=>(l.red=yd(s.red,a.red,u),l.green=yd(s.green,a.green,u),l.blue=yd(s.blue,a.blue,u),l.alpha=Je(s.alpha,a.alpha,u),_s.transform(l))},zd=new Set(["none","hidden"]);function r2(n,e){return zd.has(n)?s=>s<=0?n:e:s=>s>=1?e:n}function o2(n,e){return s=>Je(n,e,s)}function Bf(n){return typeof n=="number"?o2:typeof n=="string"?Lf(n)?_u:ft.test(n)?jv:c2:Array.isArray(n)?gw:typeof n=="object"?ft.test(n)?jv:l2:_u}function gw(n,e){const s=[...n],a=s.length,l=n.map((u,c)=>Bf(u)(u,e[c]));return u=>{for(let c=0;c<a;c++)s[c]=l[c](u);return s}}function l2(n,e){const s={...n,...e},a={};for(const l in s)n[l]!==void 0&&e[l]!==void 0&&(a[l]=Bf(n[l])(n[l],e[l]));return l=>{for(const u in a)s[u]=a[u](l);return s}}function u2(n,e){const s=[],a={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],c=n.indexes[u][a[u]],d=n.values[c]??0;s[l]=d,a[u]++}return s}const c2=(n,e)=>{const s=Yi.createTransformer(e),a=ro(n),l=ro(e);return a.indexes.var.length===l.indexes.var.length&&a.indexes.color.length===l.indexes.color.length&&a.indexes.number.length>=l.indexes.number.length?zd.has(n)&&!l.values.length||zd.has(e)&&!a.values.length?r2(n,e):_o(gw(u2(a,l),l.values),s):_u(n,e)};function yw(n,e,s){return typeof n=="number"&&typeof e=="number"&&typeof s=="number"?Je(n,e,s):Bf(n)(n,e)}const h2=n=>{const e=({timestamp:s})=>n(s);return{start:(s=!0)=>Fe.update(e,s),stop:()=>Ki(e),now:()=>Rt.isProcessing?Rt.timestamp:Ft.now()}},vw=(n,e,s=10)=>{let a="";const l=Math.max(Math.round(e/s),2);for(let u=0;u<l;u++)a+=Math.round(n(u/(l-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Su=2e4;function Vf(n){let e=0;const s=50;let a=n.next(e);for(;!a.done&&e<Su;)e+=s,a=n.next(e);return e>=Su?1/0:e}function d2(n,e=100,s){const a=s({...n,keyframes:[0,e]}),l=Math.min(Vf(a),Su);return{type:"keyframes",ease:u=>a.next(l*u).value/e,duration:_n(l)}}const f2=5;function bw(n,e,s){const a=Math.max(e-f2,0);return Qb(s-n(a),e-a)}const nt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},vd=.001;function m2({duration:n=nt.duration,bounce:e=nt.bounce,velocity:s=nt.velocity,mass:a=nt.mass}){let l,u,c=1-e;c=pi(nt.minDamping,nt.maxDamping,c),n=pi(nt.minDuration,nt.maxDuration,_n(n)),c<1?(l=p=>{const g=p*c,y=g*n,w=g-s,_=Bd(p,c),S=Math.exp(-y);return vd-w/_*S},u=p=>{const y=p*c*n,w=y*s+s,_=Math.pow(c,2)*Math.pow(p,2)*n,S=Math.exp(-y),A=Bd(Math.pow(p,2),c);return(-l(p)+vd>0?-1:1)*((w-_)*S)/A}):(l=p=>{const g=Math.exp(-p*n),y=(p-s)*n+1;return-vd+g*y},u=p=>{const g=Math.exp(-p*n),y=(s-p)*(n*n);return g*y});const d=5/n,m=g2(l,u,d);if(n=$n(n),isNaN(m))return{stiffness:nt.stiffness,damping:nt.damping,duration:n};{const p=Math.pow(m,2)*a;return{stiffness:p,damping:c*2*Math.sqrt(a*p),duration:n}}}const p2=12;function g2(n,e,s){let a=s;for(let l=1;l<p2;l++)a=a-n(a)/e(a);return a}function Bd(n,e){return n*Math.sqrt(1-e*e)}const y2=["duration","bounce"],v2=["stiffness","damping","mass"];function Cv(n,e){return e.some(s=>n[s]!==void 0)}function b2(n){let e={velocity:nt.velocity,stiffness:nt.stiffness,damping:nt.damping,mass:nt.mass,isResolvedFromDuration:!1,...n};if(!Cv(n,v2)&&Cv(n,y2))if(n.visualDuration){const s=n.visualDuration,a=2*Math.PI/(s*1.2),l=a*a,u=2*pi(.05,1,1-(n.bounce||0))*Math.sqrt(l);e={...e,mass:nt.mass,stiffness:l,damping:u}}else{const s=m2(n);e={...e,...s,mass:nt.mass},e.isResolvedFromDuration=!0}return e}function Tu(n=nt.visualDuration,e=nt.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:a,restDelta:l}=s;const u=s.keyframes[0],c=s.keyframes[s.keyframes.length-1],d={done:!1,value:u},{stiffness:m,damping:p,mass:g,duration:y,velocity:w,isResolvedFromDuration:_}=b2({...s,velocity:-_n(s.velocity||0)}),S=w||0,A=p/(2*Math.sqrt(m*g)),k=c-u,R=_n(Math.sqrt(m/g)),L=Math.abs(k)<5;a||(a=L?nt.restSpeed.granular:nt.restSpeed.default),l||(l=L?nt.restDelta.granular:nt.restDelta.default);let E;if(A<1){const J=Bd(R,A);E=Z=>{const F=Math.exp(-A*R*Z);return c-F*((S+A*R*k)/J*Math.sin(J*Z)+k*Math.cos(J*Z))}}else if(A===1)E=J=>c-Math.exp(-R*J)*(k+(S+R*k)*J);else{const J=R*Math.sqrt(A*A-1);E=Z=>{const F=Math.exp(-A*R*Z),te=Math.min(J*Z,300);return c-F*((S+A*R*k)*Math.sinh(te)+J*k*Math.cosh(te))/J}}const G={calculatedDuration:_&&y||null,next:J=>{const Z=E(J);if(_)d.done=J>=y;else{let F=J===0?S:0;A<1&&(F=J===0?$n(S):bw(E,J,Z));const te=Math.abs(F)<=a,oe=Math.abs(c-Z)<=l;d.done=te&&oe}return d.value=d.done?c:Z,d},toString:()=>{const J=Math.min(Vf(G),Su),Z=vw(F=>G.next(J*F).value,J,30);return J+"ms "+Z},toTransition:()=>{}};return G}Tu.applyToOptions=n=>{const e=d2(n,100,Tu);return n.ease=e.ease,n.duration=$n(e.duration),n.type="keyframes",n};function Vd({keyframes:n,velocity:e=0,power:s=.8,timeConstant:a=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:c,min:d,max:m,restDelta:p=.5,restSpeed:g}){const y=n[0],w={done:!1,value:y},_=te=>d!==void 0&&te<d||m!==void 0&&te>m,S=te=>d===void 0?m:m===void 0||Math.abs(d-te)<Math.abs(m-te)?d:m;let A=s*e;const k=y+A,R=c===void 0?k:c(k);R!==k&&(A=R-y);const L=te=>-A*Math.exp(-te/a),E=te=>R+L(te),G=te=>{const oe=L(te),je=E(te);w.done=Math.abs(oe)<=p,w.value=w.done?R:je};let J,Z;const F=te=>{_(w.value)&&(J=te,Z=Tu({keyframes:[w.value,S(w.value)],velocity:bw(E,te,w.value),damping:l,stiffness:u,restDelta:p,restSpeed:g}))};return F(0),{calculatedDuration:null,next:te=>{let oe=!1;return!Z&&J===void 0&&(oe=!0,G(te),F(te)),J!==void 0&&te>=J?Z.next(te-J):(!oe&&G(te),w)}}}function w2(n,e,s){const a=[],l=s||gi.mix||yw,u=n.length-1;for(let c=0;c<u;c++){let d=l(n[c],n[c+1]);if(e){const m=Array.isArray(e)?e[c]||Sn:e;d=_o(m,d)}a.push(d)}return a}function x2(n,e,{clamp:s=!0,ease:a,mixer:l}={}){const u=n.length;if(kf(u===e.length),u===1)return()=>e[0];if(u===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[u-1]&&(n=[...n].reverse(),e=[...e].reverse());const d=w2(e,a,l),m=d.length,p=g=>{if(c&&g<n[0])return e[0];let y=0;if(m>1)for(;y<n.length-2&&!(g<n[y+1]);y++);const w=so(n[y],n[y+1],g);return d[y](w)};return s?g=>p(pi(n[0],n[u-1],g)):p}function _2(n,e){const s=n[n.length-1];for(let a=1;a<=e;a++){const l=so(0,e,a);n.push(Je(s,1,l))}}function S2(n){const e=[0];return _2(e,n.length-1),e}function T2(n,e){return n.map(s=>s*e)}function E2(n,e){return n.map(()=>e||ow).splice(0,n.length-1)}function Xr({duration:n=300,keyframes:e,times:s,ease:a="easeInOut"}){const l=LA(a)?a.map(Sv):Sv(a),u={done:!1,value:e[0]},c=T2(s&&s.length===e.length?s:S2(e),n),d=x2(c,e,{ease:Array.isArray(l)?l:E2(e,l)});return{calculatedDuration:n,next:m=>(u.value=d(m),u.done=m>=n,u)}}const A2=n=>n!==null;function Hf(n,{repeat:e,repeatType:s="loop"},a,l=1){const u=n.filter(A2),d=l<0||e&&s!=="loop"&&e%2===1?0:u.length-1;return!d||a===void 0?u[d]:a}const j2={decay:Vd,inertia:Vd,tween:Xr,keyframes:Xr,spring:Tu};function ww(n){typeof n.type=="string"&&(n.type=j2[n.type])}class $f{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,s){return this.finished.then(e,s)}}const C2=n=>n/100;class qf extends $f{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,l;const{motionValue:s}=this.options;s&&s.updatedAt!==Ft.now()&&this.tick(Ft.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(l=(a=this.options).onStop)==null||l.call(a))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;ww(e);const{type:s=Xr,repeat:a=0,repeatDelay:l=0,repeatType:u,velocity:c=0}=e;let{keyframes:d}=e;const m=s||Xr;m!==Xr&&typeof d[0]!="number"&&(this.mixKeyframes=_o(C2,yw(d[0],d[1])),d=[0,100]);const p=m({...e,keyframes:d});u==="mirror"&&(this.mirroredGenerator=m({...e,keyframes:[...d].reverse(),velocity:-c})),p.calculatedDuration===null&&(p.calculatedDuration=Vf(p));const{calculatedDuration:g}=p;this.calculatedDuration=g,this.resolvedDuration=g+l,this.totalDuration=this.resolvedDuration*(a+1)-l,this.generator=p}updateTime(e){const s=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(e,s=!1){const{generator:a,totalDuration:l,mixKeyframes:u,mirroredGenerator:c,resolvedDuration:d,calculatedDuration:m}=this;if(this.startTime===null)return a.next(0);const{delay:p=0,keyframes:g,repeat:y,repeatType:w,repeatDelay:_,type:S,onUpdate:A,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-l/this.speed,this.startTime)),s?this.currentTime=e:this.updateTime(e);const R=this.currentTime-p*(this.playbackSpeed>=0?1:-1),L=this.playbackSpeed>=0?R<0:R>l;this.currentTime=Math.max(R,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let E=this.currentTime,G=a;if(y){const te=Math.min(this.currentTime,l)/d;let oe=Math.floor(te),je=te%1;!je&&te>=1&&(je=1),je===1&&oe--,oe=Math.min(oe,y+1),!!(oe%2)&&(w==="reverse"?(je=1-je,_&&(je-=_/d)):w==="mirror"&&(G=c)),E=pi(0,1,je)*d}const J=L?{done:!1,value:g[0]}:G.next(E);u&&(J.value=u(J.value));let{done:Z}=J;!L&&m!==null&&(Z=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Z);return F&&S!==Vd&&(J.value=Hf(g,this.options,k,this.speed)),A&&A(J.value),F&&this.finish(),J}then(e,s){return this.finished.then(e,s)}get duration(){return _n(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+_n(e)}get time(){return _n(this.currentTime)}set time(e){var s;e=$n(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(s=this.driver)==null||s.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Ft.now());const s=this.playbackSpeed!==e;this.playbackSpeed=e,s&&(this.time=_n(this.currentTime))}play(){var l,u;if(this.isStopped)return;const{driver:e=h2,startTime:s}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(u=(l=this.options).onPlay)==null||u.call(l);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=s??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ft.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,s;this.notifyFinished(),this.teardown(),this.state="finished",(s=(e=this.options).onComplete)==null||s.call(e)}cancel(){var e,s;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(s=(e=this.options).onCancel)==null||s.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var s;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(s=this.driver)==null||s.stop(),e.observe(this)}}function R2(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Ss=n=>n*180/Math.PI,Hd=n=>{const e=Ss(Math.atan2(n[1],n[0]));return $d(e)},k2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Hd,rotateZ:Hd,skewX:n=>Ss(Math.atan(n[1])),skewY:n=>Ss(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},$d=n=>(n=n%360,n<0&&(n+=360),n),Rv=Hd,kv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Ov=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),O2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:kv,scaleY:Ov,scale:n=>(kv(n)+Ov(n))/2,rotateX:n=>$d(Ss(Math.atan2(n[6],n[5]))),rotateY:n=>$d(Ss(Math.atan2(-n[2],n[0]))),rotateZ:Rv,rotate:Rv,skewX:n=>Ss(Math.atan(n[4])),skewY:n=>Ss(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function qd(n){return n.includes("scale")?1:0}function Id(n,e){if(!n||n==="none")return qd(e);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,l;if(s)a=O2,l=s;else{const d=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=k2,l=d}if(!l)return qd(e);const u=a[e],c=l[1].split(",").map(D2);return typeof u=="function"?u(c):c[u]}const N2=(n,e)=>{const{transform:s="none"}=getComputedStyle(n);return Id(s,e)};function D2(n){return parseFloat(n.trim())}const za=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ba=new Set(za),Nv=n=>n===Pa||n===fe,M2=new Set(["x","y","z"]),U2=za.filter(n=>!M2.has(n));function L2(n){const e=[];return U2.forEach(s=>{const a=n.getValue(s);a!==void 0&&(e.push([s,a.get()]),a.set(s.startsWith("scale")?1:0))}),e}const As={width:({x:n},{paddingLeft:e="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(e)-parseFloat(s),height:({y:n},{paddingTop:e="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(e)-parseFloat(s),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Id(e,"x"),y:(n,{transform:e})=>Id(e,"y")};As.translateX=As.x;As.translateY=As.y;const js=new Set;let Gd=!1,Kd=!1,Yd=!1;function xw(){if(Kd){const n=Array.from(js).filter(a=>a.needsMeasurement),e=new Set(n.map(a=>a.element)),s=new Map;e.forEach(a=>{const l=L2(a);l.length&&(s.set(a,l),a.render())}),n.forEach(a=>a.measureInitialState()),e.forEach(a=>{a.render();const l=s.get(a);l&&l.forEach(([u,c])=>{var d;(d=a.getValue(u))==null||d.set(c)})}),n.forEach(a=>a.measureEndState()),n.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Kd=!1,Gd=!1,js.forEach(n=>n.complete(Yd)),js.clear()}function _w(){js.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Kd=!0)})}function P2(){Yd=!0,_w(),xw(),Yd=!1}class If{constructor(e,s,a,l,u,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=s,this.name=a,this.motionValue=l,this.element=u,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(js.add(this),Gd||(Gd=!0,Fe.read(_w),Fe.resolveKeyframes(xw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:s,element:a,motionValue:l}=this;if(e[0]===null){const u=l==null?void 0:l.get(),c=e[e.length-1];if(u!==void 0)e[0]=u;else if(a&&s){const d=a.readValue(s,c);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=c),l&&u===void 0&&l.set(e[0])}R2(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),js.delete(this)}cancel(){this.state==="scheduled"&&(js.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const z2=n=>n.startsWith("--");function B2(n,e,s){z2(e)?n.style.setProperty(e,s):n.style[e]=s}const V2=Of(()=>window.ScrollTimeline!==void 0),H2={};function $2(n,e){const s=Of(n);return()=>H2[e]??s()}const Sw=$2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ir=([n,e,s,a])=>`cubic-bezier(${n}, ${e}, ${s}, ${a})`,Dv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ir([0,.65,.55,1]),circOut:Ir([.55,0,1,.45]),backIn:Ir([.31,.01,.66,-.59]),backOut:Ir([.33,1.53,.69,.99])};function Tw(n,e){if(n)return typeof n=="function"?Sw()?vw(n,e):"ease-out":lw(n)?Ir(n):Array.isArray(n)?n.map(s=>Tw(s,e)||Dv.easeOut):Dv[n]}function q2(n,e,s,{delay:a=0,duration:l=300,repeat:u=0,repeatType:c="loop",ease:d="easeOut",times:m}={},p=void 0){const g={[e]:s};m&&(g.offset=m);const y=Tw(d,l);Array.isArray(y)&&(g.easing=y);const w={delay:a,duration:l,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal"};return p&&(w.pseudoElement=p),n.animate(g,w)}function Ew(n){return typeof n=="function"&&"applyToOptions"in n}function I2({type:n,...e}){return Ew(n)&&Sw()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class G2 extends $f{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:s,name:a,keyframes:l,pseudoElement:u,allowFlatten:c=!1,finalKeyframe:d,onComplete:m}=e;this.isPseudoElement=!!u,this.allowFlatten=c,this.options=e,kf(typeof e.type!="string");const p=I2(e);this.animation=q2(s,a,l,p,u),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Hf(l,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(g):B2(s,a,g),this.animation.cancel()}m==null||m(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,s;(s=(e=this.animation).finish)==null||s.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,s;this.isPseudoElement||(s=(e=this.animation).commitStyles)==null||s.call(e)}get duration(){var s,a;const e=((a=(s=this.animation.effect)==null?void 0:s.getComputedTiming)==null?void 0:a.call(s).duration)||0;return _n(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+_n(e)}get time(){return _n(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=$n(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:s}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&V2()?(this.animation.timeline=e,Sn):s(this)}}const Aw={anticipate:sw,backInOut:iw,circInOut:rw};function K2(n){return n in Aw}function Y2(n){typeof n.ease=="string"&&K2(n.ease)&&(n.ease=Aw[n.ease])}const Mv=10;class F2 extends G2{constructor(e){Y2(e),ww(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:s,onUpdate:a,onComplete:l,element:u,...c}=this.options;if(!s)return;if(e!==void 0){s.set(e);return}const d=new qf({...c,autoplay:!1}),m=$n(this.finishedTime??this.time);s.setWithVelocity(d.sample(m-Mv).value,d.sample(m).value,Mv),d.stop()}}const Uv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Yi.test(n)||n==="0")&&!n.startsWith("url("));function X2(n){const e=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==e)return!0}function J2(n,e,s,a){const l=n[0];if(l===null)return!1;if(e==="display"||e==="visibility")return!0;const u=n[n.length-1],c=Uv(l,e),d=Uv(u,e);return!c||!d?!1:X2(n)||(s==="spring"||Ew(s))&&a}function Fd(n){n.duration=0,n.type="keyframes"}const Z2=new Set(["opacity","clipPath","filter","transform"]),Q2=Of(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function W2(n){var g;const{motionValue:e,name:s,repeatDelay:a,repeatType:l,damping:u,type:c}=n;if(!(((g=e==null?void 0:e.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:p}=e.owner.getProps();return Q2()&&s&&Z2.has(s)&&(s!=="transform"||!p)&&!m&&!a&&l!=="mirror"&&u!==0&&c!=="inertia"}const ej=40;class tj extends $f{constructor({autoplay:e=!0,delay:s=0,type:a="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:c="loop",keyframes:d,name:m,motionValue:p,element:g,...y}){var S;super(),this.stop=()=>{var A,k;this._animation&&(this._animation.stop(),(A=this.stopTimeline)==null||A.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=Ft.now();const w={autoplay:e,delay:s,type:a,repeat:l,repeatDelay:u,repeatType:c,name:m,motionValue:p,element:g,...y},_=(g==null?void 0:g.KeyframeResolver)||If;this.keyframeResolver=new _(d,(A,k,R)=>this.onKeyframesResolved(A,k,w,!R),m,p,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(e,s,a,l){this.keyframeResolver=void 0;const{name:u,type:c,velocity:d,delay:m,isHandoff:p,onUpdate:g}=a;this.resolvedAt=Ft.now(),J2(e,u,c,d)||((gi.instantAnimations||!m)&&(g==null||g(Hf(e,a,s))),e[0]=e[e.length-1],Fd(a),a.repeat=0);const w={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>ej?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...a,keyframes:e},_=!p&&W2(w)?new F2({...w,element:w.motionValue.owner.current}):new qf(w);_.finished.then(()=>this.notifyFinished()).catch(Sn),this.pendingTimeline&&(this.stopTimeline=_.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=_}get finished(){return this._animation?this.animation.finished:this._finished}then(e,s){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),P2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const nj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ij(n){const e=nj.exec(n);if(!e)return[,];const[,s,a,l]=e;return[`--${s??a}`,l]}function jw(n,e,s=1){const[a,l]=ij(n);if(!a)return;const u=window.getComputedStyle(e).getPropertyValue(a);if(u){const c=u.trim();return Xb(c)?parseFloat(c):c}return Lf(l)?jw(l,e,s+1):l}function Gf(n,e){return(n==null?void 0:n[e])??(n==null?void 0:n.default)??n}const Cw=new Set(["width","height","top","left","right","bottom",...za]),sj={test:n=>n==="auto",parse:n=>n},Rw=n=>e=>e.test(n),kw=[Pa,fe,qn,qi,XA,FA,sj],Lv=n=>kw.find(Rw(n));function aj(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Zb(n):!0}const rj=new Set(["brightness","contrast","saturate","opacity"]);function oj(n){const[e,s]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[a]=s.match(Pf)||[];if(!a)return n;const l=s.replace(a,"");let u=rj.has(e)?1:0;return a!==s&&(u*=100),e+"("+u+l+")"}const lj=/\b([a-z-]*)\(.*?\)/gu,Xd={...Yi,getAnimatableNone:n=>{const e=n.match(lj);return e?e.map(oj).join(" "):n}},Pv={...Pa,transform:Math.round},uj={rotate:qi,rotateX:qi,rotateY:qi,rotateZ:qi,scale:Fl,scaleX:Fl,scaleY:Fl,scaleZ:Fl,skew:qi,skewX:qi,skewY:qi,distance:fe,translateX:fe,translateY:fe,translateZ:fe,x:fe,y:fe,z:fe,perspective:fe,transformPerspective:fe,opacity:ao,originX:Tv,originY:Tv,originZ:fe},Kf={borderWidth:fe,borderTopWidth:fe,borderRightWidth:fe,borderBottomWidth:fe,borderLeftWidth:fe,borderRadius:fe,radius:fe,borderTopLeftRadius:fe,borderTopRightRadius:fe,borderBottomRightRadius:fe,borderBottomLeftRadius:fe,width:fe,maxWidth:fe,height:fe,maxHeight:fe,top:fe,right:fe,bottom:fe,left:fe,padding:fe,paddingTop:fe,paddingRight:fe,paddingBottom:fe,paddingLeft:fe,margin:fe,marginTop:fe,marginRight:fe,marginBottom:fe,marginLeft:fe,backgroundPositionX:fe,backgroundPositionY:fe,...uj,zIndex:Pv,fillOpacity:ao,strokeOpacity:ao,numOctaves:Pv},cj={...Kf,color:ft,backgroundColor:ft,outlineColor:ft,fill:ft,stroke:ft,borderColor:ft,borderTopColor:ft,borderRightColor:ft,borderBottomColor:ft,borderLeftColor:ft,filter:Xd,WebkitFilter:Xd},Ow=n=>cj[n];function Nw(n,e){let s=Ow(n);return s!==Xd&&(s=Yi),s.getAnimatableNone?s.getAnimatableNone(e):void 0}const hj=new Set(["auto","none","0"]);function dj(n,e,s){let a=0,l;for(;a<n.length&&!l;){const u=n[a];typeof u=="string"&&!hj.has(u)&&ro(u).values.length&&(l=n[a]),a++}if(l&&s)for(const u of e)n[u]=Nw(s,l)}class fj extends If{constructor(e,s,a,l,u){super(e,s,a,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:s,name:a}=this;if(!s||!s.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let p=e[m];if(typeof p=="string"&&(p=p.trim(),Lf(p))){const g=jw(p,s.current);g!==void 0&&(e[m]=g),m===e.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!Cw.has(a)||e.length!==2)return;const[l,u]=e,c=Lv(l),d=Lv(u);if(c!==d)if(Nv(c)&&Nv(d))for(let m=0;m<e.length;m++){const p=e[m];typeof p=="string"&&(e[m]=parseFloat(p))}else As[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:s}=this,a=[];for(let l=0;l<e.length;l++)(e[l]===null||aj(e[l]))&&a.push(l);a.length&&dj(e,a,s)}measureInitialState(){const{element:e,unresolvedKeyframes:s,name:a}=this;if(!e||!e.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=As[a](e.measureViewportBox(),window.getComputedStyle(e.current)),s[0]=this.measuredOrigin;const l=s[s.length-1];l!==void 0&&e.getValue(a,l).jump(l,!1)}measureEndState(){var d;const{element:e,name:s,unresolvedKeyframes:a}=this;if(!e||!e.current)return;const l=e.getValue(s);l&&l.jump(this.measuredOrigin,!1);const u=a.length-1,c=a[u];a[u]=As[s](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([m,p])=>{e.getValue(m).set(p)}),this.resolveNoneKeyframes()}}function mj(n,e,s){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let a=document;const l=(s==null?void 0:s[n])??a.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}const Dw=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function Mw(n){return Jb(n)&&"offsetHeight"in n}const zv=30,pj=n=>!isNaN(parseFloat(n));class gj{constructor(e,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const l=Ft.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=s.owner}setCurrent(e){this.current=e,this.updatedAt=Ft.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=pj(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,s){this.events[e]||(this.events[e]=new Nf);const a=this.events[e].add(s);return e==="change"?()=>{a(),Fe.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,s){this.passiveEffect=e,this.stopPassiveEffect=s}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,s,a){this.set(s),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-a}jump(e,s=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>zv)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,zv);return Qb(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(e){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=e(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,s;(e=this.dependents)==null||e.clear(),(s=this.events.destroy)==null||s.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ma(n,e){return new gj(n,e)}const{schedule:Yf}=uw(queueMicrotask,!1),kn={x:!1,y:!1};function Uw(){return kn.x||kn.y}function yj(n){return n==="x"||n==="y"?kn[n]?null:(kn[n]=!0,()=>{kn[n]=!1}):kn.x||kn.y?null:(kn.x=kn.y=!0,()=>{kn.x=kn.y=!1})}function Lw(n,e){const s=mj(n),a=new AbortController,l={passive:!0,...e,signal:a.signal};return[s,l,()=>a.abort()]}function Bv(n){return!(n.pointerType==="touch"||Uw())}function vj(n,e,s={}){const[a,l,u]=Lw(n,s),c=d=>{if(!Bv(d))return;const{target:m}=d,p=e(m,d);if(typeof p!="function"||!m)return;const g=y=>{Bv(y)&&(p(y),m.removeEventListener("pointerleave",g))};m.addEventListener("pointerleave",g,l)};return a.forEach(d=>{d.addEventListener("pointerenter",c,l)}),u}const Pw=(n,e)=>e?n===e?!0:Pw(n,e.parentElement):!1,Ff=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,bj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function wj(n){return bj.has(n.tagName)||n.tabIndex!==-1}const mu=new WeakSet;function Vv(n){return e=>{e.key==="Enter"&&n(e)}}function bd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const xj=(n,e)=>{const s=n.currentTarget;if(!s)return;const a=Vv(()=>{if(mu.has(s))return;bd(s,"down");const l=Vv(()=>{bd(s,"up")}),u=()=>bd(s,"cancel");s.addEventListener("keyup",l,e),s.addEventListener("blur",u,e)});s.addEventListener("keydown",a,e),s.addEventListener("blur",()=>s.removeEventListener("keydown",a),e)};function Hv(n){return Ff(n)&&!Uw()}function _j(n,e,s={}){const[a,l,u]=Lw(n,s),c=d=>{const m=d.currentTarget;if(!Hv(d))return;mu.add(m);const p=e(m,d),g=(_,S)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",w),mu.has(m)&&mu.delete(m),Hv(_)&&typeof p=="function"&&p(_,{success:S})},y=_=>{g(_,m===window||m===document||s.useGlobalTarget||Pw(m,_.target))},w=_=>{g(_,!1)};window.addEventListener("pointerup",y,l),window.addEventListener("pointercancel",w,l)};return a.forEach(d=>{(s.useGlobalTarget?window:d).addEventListener("pointerdown",c,l),Mw(d)&&(d.addEventListener("focus",p=>xj(p,l)),!wj(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),u}function zw(n){return Jb(n)&&"ownerSVGElement"in n}function Sj(n){return zw(n)&&n.tagName==="svg"}const Dt=n=>!!(n&&n.getVelocity),Tj=[...kw,ft,Yi],Ej=n=>Tj.find(Rw(n)),Xf=O.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function $v(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function Aj(...n){return e=>{let s=!1;const a=n.map(l=>{const u=$v(l,e);return!s&&typeof u=="function"&&(s=!0),u});if(s)return()=>{for(let l=0;l<a.length;l++){const u=a[l];typeof u=="function"?u():$v(n[l],null)}}}}function jj(...n){return O.useCallback(Aj(...n),n)}class Cj extends O.Component{getSnapshotBeforeUpdate(e){const s=this.props.childRef.current;if(s&&e.isPresent&&!this.props.isPresent){const a=s.offsetParent,l=Mw(a)&&a.offsetWidth||0,u=this.props.sizeRef.current;u.height=s.offsetHeight||0,u.width=s.offsetWidth||0,u.top=s.offsetTop,u.left=s.offsetLeft,u.right=l-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Rj({children:n,isPresent:e,anchorX:s,root:a}){const l=O.useId(),u=O.useRef(null),c=O.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=O.useContext(Xf),m=jj(u,n==null?void 0:n.ref);return O.useInsertionEffect(()=>{const{width:p,height:g,top:y,left:w,right:_}=c.current;if(e||!u.current||!p||!g)return;const S=s==="left"?`left: ${w}`:`right: ${_}`;u.current.dataset.motionPopId=l;const A=document.createElement("style");d&&(A.nonce=d);const k=a??document.head;return k.appendChild(A),A.sheet&&A.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${g}px !important;
            ${S}px !important;
            top: ${y}px !important;
          }
        `),()=>{k.contains(A)&&k.removeChild(A)}},[e]),b.jsx(Cj,{isPresent:e,childRef:u,sizeRef:c,children:O.cloneElement(n,{ref:m})})}const kj=({children:n,initial:e,isPresent:s,onExitComplete:a,custom:l,presenceAffectsLayout:u,mode:c,anchorX:d,root:m})=>{const p=Af(Oj),g=O.useId();let y=!0,w=O.useMemo(()=>(y=!1,{id:g,initial:e,isPresent:s,custom:l,onExitComplete:_=>{p.set(_,!0);for(const S of p.values())if(!S)return;a&&a()},register:_=>(p.set(_,!1),()=>p.delete(_))}),[s,p,a]);return u&&y&&(w={...w}),O.useMemo(()=>{p.forEach((_,S)=>p.set(S,!1))},[s]),O.useEffect(()=>{!s&&!p.size&&a&&a()},[s]),c==="popLayout"&&(n=b.jsx(Rj,{isPresent:s,anchorX:d,root:m,children:n})),b.jsx(Lu.Provider,{value:w,children:n})};function Oj(){return new Map}function Bw(n=!0){const e=O.useContext(Lu);if(e===null)return[!0,null];const{isPresent:s,onExitComplete:a,register:l}=e,u=O.useId();O.useEffect(()=>{if(n)return l(u)},[n]);const c=O.useCallback(()=>n&&a&&a(u),[u,a,n]);return!s&&a?[!1,c]:[!0]}const Xl=n=>n.key||"";function qv(n){const e=[];return O.Children.forEach(n,s=>{O.isValidElement(s)&&e.push(s)}),e}const Vw=({children:n,custom:e,initial:s=!0,onExitComplete:a,presenceAffectsLayout:l=!0,mode:u="sync",propagate:c=!1,anchorX:d="left",root:m})=>{const[p,g]=Bw(c),y=O.useMemo(()=>qv(n),[n]),w=c&&!p?[]:y.map(Xl),_=O.useRef(!0),S=O.useRef(y),A=Af(()=>new Map),[k,R]=O.useState(y),[L,E]=O.useState(y);Fb(()=>{_.current=!1,S.current=y;for(let Z=0;Z<L.length;Z++){const F=Xl(L[Z]);w.includes(F)?A.delete(F):A.get(F)!==!0&&A.set(F,!1)}},[L,w.length,w.join("-")]);const G=[];if(y!==k){let Z=[...y];for(let F=0;F<L.length;F++){const te=L[F],oe=Xl(te);w.includes(oe)||(Z.splice(F,0,te),G.push(te))}return u==="wait"&&G.length&&(Z=G),E(qv(Z)),R(y),null}const{forceRender:J}=O.useContext(Ef);return b.jsx(b.Fragment,{children:L.map(Z=>{const F=Xl(Z),te=c&&!p?!1:y===L||w.includes(F),oe=()=>{if(A.has(F))A.set(F,!0);else return;let je=!0;A.forEach(Ie=>{Ie||(je=!1)}),je&&(J==null||J(),E(S.current),c&&(g==null||g()),a&&a())};return b.jsx(kj,{isPresent:te,initial:!_.current||s?void 0:!1,custom:e,presenceAffectsLayout:l,mode:u,root:m,onExitComplete:te?void 0:oe,anchorX:d,children:Z},F)})})},Hw=O.createContext({strict:!1}),Iv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ua={};for(const n in Iv)Ua[n]={isEnabled:e=>Iv[n].some(s=>!!e[s])};function Nj(n){for(const e in n)Ua[e]={...Ua[e],...n[e]}}const Dj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Eu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Dj.has(n)}let $w=n=>!Eu(n);function Mj(n){typeof n=="function"&&($w=e=>e.startsWith("on")?!Eu(e):n(e))}try{Mj(require("@emotion/is-prop-valid").default)}catch{}function Uj(n,e,s){const a={};for(const l in n)l==="values"&&typeof n.values=="object"||($w(l)||s===!0&&Eu(l)||!e&&!Eu(l)||n.draggable&&l.startsWith("onDrag"))&&(a[l]=n[l]);return a}const Pu=O.createContext({});function zu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function oo(n){return typeof n=="string"||Array.isArray(n)}const Jf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zf=["initial",...Jf];function Bu(n){return zu(n.animate)||Zf.some(e=>oo(n[e]))}function qw(n){return!!(Bu(n)||n.variants)}function Lj(n,e){if(Bu(n)){const{initial:s,animate:a}=n;return{initial:s===!1||oo(s)?s:void 0,animate:oo(a)?a:void 0}}return n.inherit!==!1?e:{}}function Pj(n){const{initial:e,animate:s}=Lj(n,O.useContext(Pu));return O.useMemo(()=>({initial:e,animate:s}),[Gv(e),Gv(s)])}function Gv(n){return Array.isArray(n)?n.join(" "):n}const lo={};function zj(n){for(const e in n)lo[e]=n[e],Uf(e)&&(lo[e].isCSSVariable=!0)}function Iw(n,{layout:e,layoutId:s}){return Ba.has(n)||n.startsWith("origin")||(e||s!==void 0)&&(!!lo[n]||n==="opacity")}const Bj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Vj=za.length;function Hj(n,e,s){let a="",l=!0;for(let u=0;u<Vj;u++){const c=za[u],d=n[c];if(d===void 0)continue;let m=!0;if(typeof d=="number"?m=d===(c.startsWith("scale")?1:0):m=parseFloat(d)===0,!m||s){const p=Dw(d,Kf[c]);if(!m){l=!1;const g=Bj[c]||c;a+=`${g}(${p}) `}s&&(e[c]=p)}}return a=a.trim(),s?a=s(e,l?"":a):l&&(a="none"),a}function Qf(n,e,s){const{style:a,vars:l,transformOrigin:u}=n;let c=!1,d=!1;for(const m in e){const p=e[m];if(Ba.has(m)){c=!0;continue}else if(Uf(m)){l[m]=p;continue}else{const g=Dw(p,Kf[m]);m.startsWith("origin")?(d=!0,u[m]=g):a[m]=g}}if(e.transform||(c||s?a.transform=Hj(e,n.transform,s):a.transform&&(a.transform="none")),d){const{originX:m="50%",originY:p="50%",originZ:g=0}=u;a.transformOrigin=`${m} ${p} ${g}`}}const Wf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Gw(n,e,s){for(const a in e)!Dt(e[a])&&!Iw(a,s)&&(n[a]=e[a])}function $j({transformTemplate:n},e){return O.useMemo(()=>{const s=Wf();return Qf(s,e,n),Object.assign({},s.vars,s.style)},[e])}function qj(n,e){const s=n.style||{},a={};return Gw(a,s,n),Object.assign(a,$j(n,e)),a}function Ij(n,e){const s={},a=qj(n,e);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=a,s}const Gj={offset:"stroke-dashoffset",array:"stroke-dasharray"},Kj={offset:"strokeDashoffset",array:"strokeDasharray"};function Yj(n,e,s=1,a=0,l=!0){n.pathLength=1;const u=l?Gj:Kj;n[u.offset]=fe.transform(-a);const c=fe.transform(e),d=fe.transform(s);n[u.array]=`${c} ${d}`}function Kw(n,{attrX:e,attrY:s,attrScale:a,pathLength:l,pathSpacing:u=1,pathOffset:c=0,...d},m,p,g){if(Qf(n,d,p),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:y,style:w}=n;y.transform&&(w.transform=y.transform,delete y.transform),(w.transform||y.transformOrigin)&&(w.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),w.transform&&(w.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete y.transformBox),e!==void 0&&(y.x=e),s!==void 0&&(y.y=s),a!==void 0&&(y.scale=a),l!==void 0&&Yj(y,l,u,c,!1)}const Yw=()=>({...Wf(),attrs:{}}),Fw=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Fj(n,e,s,a){const l=O.useMemo(()=>{const u=Yw();return Kw(u,e,Fw(a),n.transformTemplate,n.style),{...u.attrs,style:{...u.style}}},[e]);if(n.style){const u={};Gw(u,n.style,n),l.style={...u,...l.style}}return l}const Xj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function em(n){return typeof n!="string"||n.includes("-")?!1:!!(Xj.indexOf(n)>-1||/[A-Z]/u.test(n))}function Jj(n,e,s,{latestValues:a},l,u=!1){const d=(em(n)?Fj:Ij)(e,a,l,n),m=Uj(e,typeof n=="string",u),p=n!==O.Fragment?{...m,...d,ref:s}:{},{children:g}=e,y=O.useMemo(()=>Dt(g)?g.get():g,[g]);return O.createElement(n,{...p,children:y})}function Kv(n){const e=[{},{}];return n==null||n.values.forEach((s,a)=>{e[0][a]=s.get(),e[1][a]=s.getVelocity()}),e}function tm(n,e,s,a){if(typeof e=="function"){const[l,u]=Kv(a);e=e(s!==void 0?s:n.custom,l,u)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[l,u]=Kv(a);e=e(s!==void 0?s:n.custom,l,u)}return e}function pu(n){return Dt(n)?n.get():n}function Zj({scrapeMotionValuesFromProps:n,createRenderState:e},s,a,l){return{latestValues:Qj(s,a,l,n),renderState:e()}}function Qj(n,e,s,a){const l={},u=a(n,{});for(const w in u)l[w]=pu(u[w]);let{initial:c,animate:d}=n;const m=Bu(n),p=qw(n);e&&p&&!m&&n.inherit!==!1&&(c===void 0&&(c=e.initial),d===void 0&&(d=e.animate));let g=s?s.initial===!1:!1;g=g||c===!1;const y=g?d:c;if(y&&typeof y!="boolean"&&!zu(y)){const w=Array.isArray(y)?y:[y];for(let _=0;_<w.length;_++){const S=tm(n,w[_]);if(S){const{transitionEnd:A,transition:k,...R}=S;for(const L in R){let E=R[L];if(Array.isArray(E)){const G=g?E.length-1:0;E=E[G]}E!==null&&(l[L]=E)}for(const L in A)l[L]=A[L]}}}return l}const Xw=n=>(e,s)=>{const a=O.useContext(Pu),l=O.useContext(Lu),u=()=>Zj(n,e,a,l);return s?u():Af(u)};function nm(n,e,s){var u;const{style:a}=n,l={};for(const c in a)(Dt(a[c])||e.style&&Dt(e.style[c])||Iw(c,n)||((u=s==null?void 0:s.getValue(c))==null?void 0:u.liveStyle)!==void 0)&&(l[c]=a[c]);return l}const Wj=Xw({scrapeMotionValuesFromProps:nm,createRenderState:Wf});function Jw(n,e,s){const a=nm(n,e,s);for(const l in n)if(Dt(n[l])||Dt(e[l])){const u=za.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;a[u]=n[l]}return a}const eC=Xw({scrapeMotionValuesFromProps:Jw,createRenderState:Yw}),tC=Symbol.for("motionComponentSymbol");function ja(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function nC(n,e,s){return O.useCallback(a=>{a&&n.onMount&&n.onMount(a),e&&(a?e.mount(a):e.unmount()),s&&(typeof s=="function"?s(a):ja(s)&&(s.current=a))},[e])}const im=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),iC="framerAppearId",Zw="data-"+im(iC),Qw=O.createContext({});function sC(n,e,s,a,l){var A,k;const{visualElement:u}=O.useContext(Pu),c=O.useContext(Hw),d=O.useContext(Lu),m=O.useContext(Xf).reducedMotion,p=O.useRef(null);a=a||c.renderer,!p.current&&a&&(p.current=a(n,{visualState:e,parent:u,props:s,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:m}));const g=p.current,y=O.useContext(Qw);g&&!g.projection&&l&&(g.type==="html"||g.type==="svg")&&aC(p.current,s,l,y);const w=O.useRef(!1);O.useInsertionEffect(()=>{g&&w.current&&g.update(s,d)});const _=s[Zw],S=O.useRef(!!_&&!((A=window.MotionHandoffIsComplete)!=null&&A.call(window,_))&&((k=window.MotionHasOptimisedAnimation)==null?void 0:k.call(window,_)));return Fb(()=>{g&&(w.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),S.current&&g.animationState&&g.animationState.animateChanges())}),O.useEffect(()=>{g&&(!S.current&&g.animationState&&g.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var R;(R=window.MotionHandoffMarkAsComplete)==null||R.call(window,_)}),S.current=!1),g.enteringChildren=void 0)}),g}function aC(n,e,s,a){const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:m,layoutRoot:p,layoutCrossfade:g}=e;n.projection=new s(n.latestValues,e["data-framer-portal-id"]?void 0:Ww(n.parent)),n.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||d&&ja(d),visualElement:n,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:g,layoutScroll:m,layoutRoot:p})}function Ww(n){if(n)return n.options.allowProjection!==!1?n.projection:Ww(n.parent)}function wd(n,{forwardMotionProps:e=!1}={},s,a){s&&Nj(s);const l=em(n)?eC:Wj;function u(d,m){let p;const g={...O.useContext(Xf),...d,layoutId:rC(d)},{isStatic:y}=g,w=Pj(d),_=l(d,y);if(!y&&jf){oC();const S=lC(g);p=S.MeasureLayout,w.visualElement=sC(n,_,g,a,S.ProjectionNode)}return b.jsxs(Pu.Provider,{value:w,children:[p&&w.visualElement?b.jsx(p,{visualElement:w.visualElement,...g}):null,Jj(n,d,nC(_,w.visualElement,m),_,y,e)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const c=O.forwardRef(u);return c[tC]=n,c}function rC({layoutId:n}){const e=O.useContext(Ef).id;return e&&n!==void 0?e+"-"+n:n}function oC(n,e){O.useContext(Hw).strict}function lC(n){const{drag:e,layout:s}=Ua;if(!e&&!s)return{};const a={...e,...s};return{MeasureLayout:e!=null&&e.isEnabled(n)||s!=null&&s.isEnabled(n)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function uC(n,e){if(typeof Proxy>"u")return wd;const s=new Map,a=(u,c)=>wd(u,c,n,e),l=(u,c)=>a(u,c);return new Proxy(l,{get:(u,c)=>c==="create"?a:(s.has(c)||s.set(c,wd(c,void 0,n,e)),s.get(c))})}function e1({top:n,left:e,right:s,bottom:a}){return{x:{min:e,max:s},y:{min:n,max:a}}}function cC({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function hC(n,e){if(!e)return n;const s=e({x:n.left,y:n.top}),a=e({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:a.y,right:a.x}}function xd(n){return n===void 0||n===1}function Jd({scale:n,scaleX:e,scaleY:s}){return!xd(n)||!xd(e)||!xd(s)}function ws(n){return Jd(n)||t1(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function t1(n){return Yv(n.x)||Yv(n.y)}function Yv(n){return n&&n!=="0%"}function Au(n,e,s){const a=n-s,l=e*a;return s+l}function Fv(n,e,s,a,l){return l!==void 0&&(n=Au(n,l,a)),Au(n,s,a)+e}function Zd(n,e=0,s=1,a,l){n.min=Fv(n.min,e,s,a,l),n.max=Fv(n.max,e,s,a,l)}function n1(n,{x:e,y:s}){Zd(n.x,e.translate,e.scale,e.originPoint),Zd(n.y,s.translate,s.scale,s.originPoint)}const Xv=.999999999999,Jv=1.0000000000001;function dC(n,e,s,a=!1){const l=s.length;if(!l)return;e.x=e.y=1;let u,c;for(let d=0;d<l;d++){u=s[d],c=u.projectionDelta;const{visualElement:m}=u.options;m&&m.props.style&&m.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ra(n,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,n1(n,c)),a&&ws(u.latestValues)&&Ra(n,u.latestValues))}e.x<Jv&&e.x>Xv&&(e.x=1),e.y<Jv&&e.y>Xv&&(e.y=1)}function Ca(n,e){n.min=n.min+e,n.max=n.max+e}function Zv(n,e,s,a,l=.5){const u=Je(n.min,n.max,l);Zd(n,e,s,u,a)}function Ra(n,e){Zv(n.x,e.x,e.scaleX,e.scale,e.originX),Zv(n.y,e.y,e.scaleY,e.scale,e.originY)}function i1(n,e){return e1(hC(n.getBoundingClientRect(),e))}function fC(n,e,s){const a=i1(n,s),{scroll:l}=e;return l&&(Ca(a.x,l.offset.x),Ca(a.y,l.offset.y)),a}const Qv=()=>({translate:0,scale:1,origin:0,originPoint:0}),ka=()=>({x:Qv(),y:Qv()}),Wv=()=>({min:0,max:0}),rt=()=>({x:Wv(),y:Wv()}),Qd={current:null},s1={current:!1};function mC(){if(s1.current=!0,!!jf)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Qd.current=n.matches;n.addEventListener("change",e),e()}else Qd.current=!1}const pC=new WeakMap;function gC(n,e,s){for(const a in e){const l=e[a],u=s[a];if(Dt(l))n.addValue(a,l);else if(Dt(u))n.addValue(a,Ma(l,{owner:n}));else if(u!==l)if(n.hasValue(a)){const c=n.getValue(a);c.liveStyle===!0?c.jump(l):c.hasAnimated||c.set(l)}else{const c=n.getStaticValue(a);n.addValue(a,Ma(c!==void 0?c:l,{owner:n}))}}for(const a in s)e[a]===void 0&&n.removeValue(a);return e}const e0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class yC{scrapeMotionValuesFromProps(e,s,a){return{}}constructor({parent:e,props:s,presenceContext:a,reducedMotionConfig:l,blockInitialAnimation:u,visualState:c},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=If,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Ft.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Fe.render(this.render,!1,!0))};const{latestValues:m,renderState:p}=c;this.latestValues=m,this.baseTarget={...m},this.initialValues=s.initial?{...m}:{},this.renderState=p,this.parent=e,this.props=s,this.presenceContext=a,this.depth=e?e.depth+1:0,this.reducedMotionConfig=l,this.options=d,this.blockInitialAnimation=!!u,this.isControllingVariants=Bu(s),this.isVariantNode=qw(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...y}=this.scrapeMotionValuesFromProps(s,{},this);for(const w in y){const _=y[w];m[w]!==void 0&&Dt(_)&&_.set(m[w])}}mount(e){var s;this.current=e,pC.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,l)=>this.bindToMotionValue(l,a)),s1.current||mC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Qd.current,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),Ki(this.notifyUpdate),Ki(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const a=this.features[s];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,s){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const a=Ba.has(e);a&&this.onBindTransform&&this.onBindTransform();const l=s.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Fe.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,s)),this.valueSubscriptions.set(e,()=>{l(),u&&u(),s.owner&&s.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ua){const s=Ua[e];if(!s)continue;const{isEnabled:a,Feature:l}=s;if(!this.features[e]&&l&&a(this.props)&&(this.features[e]=new l(this)),this.features[e]){const u=this.features[e];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):rt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,s){this.latestValues[e]=s}update(e,s){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let a=0;a<e0.length;a++){const l=e0[a];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,c=e[u];c&&(this.propEventSubscriptions[l]=this.on(l,c))}this.prevMotionValues=gC(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(e),()=>s.variantChildren.delete(e)}addValue(e,s){const a=this.values.get(e);s!==a&&(a&&this.removeValue(e),this.bindToMotionValue(e,s),this.values.set(e,s),this.latestValues[e]=s.get())}removeValue(e){this.values.delete(e);const s=this.valueSubscriptions.get(e);s&&(s(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,s){if(this.props.values&&this.props.values[e])return this.props.values[e];let a=this.values.get(e);return a===void 0&&s!==void 0&&(a=Ma(s===null?void 0:s,{owner:this}),this.addValue(e,a)),a}readValue(e,s){let a=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return a!=null&&(typeof a=="string"&&(Xb(a)||Zb(a))?a=parseFloat(a):!Ej(a)&&Yi.test(s)&&(a=Nw(e,s)),this.setBaseTarget(e,Dt(a)?a.get():a)),Dt(a)?a.get():a}setBaseTarget(e,s){this.baseTarget[e]=s}getBaseTarget(e){var u;const{initial:s}=this.props;let a;if(typeof s=="string"||typeof s=="object"){const c=tm(this.props,s,(u=this.presenceContext)==null?void 0:u.custom);c&&(a=c[e])}if(s&&a!==void 0)return a;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!Dt(l)?l:this.initialValues[e]!==void 0&&a===void 0?void 0:this.baseTarget[e]}on(e,s){return this.events[e]||(this.events[e]=new Nf),this.events[e].add(s)}notify(e,...s){this.events[e]&&this.events[e].notify(...s)}scheduleRenderMicrotask(){Yf.render(this.render)}}class a1 extends yC{constructor(){super(...arguments),this.KeyframeResolver=fj}sortInstanceNodePosition(e,s){return e.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(e,s){return e.style?e.style[s]:void 0}removeValueFromRenderState(e,{vars:s,style:a}){delete s[e],delete a[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Dt(e)&&(this.childSubscription=e.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function r1(n,{style:e,vars:s},a,l){const u=n.style;let c;for(c in e)u[c]=e[c];l==null||l.applyProjectionStyles(u,a);for(c in s)u.setProperty(c,s[c])}function vC(n){return window.getComputedStyle(n)}class bC extends a1{constructor(){super(...arguments),this.type="html",this.renderInstance=r1}readValueFromInstance(e,s){var a;if(Ba.has(s))return(a=this.projection)!=null&&a.isProjecting?qd(s):N2(e,s);{const l=vC(e),u=(Uf(s)?l.getPropertyValue(s):l[s])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(e,{transformPagePoint:s}){return i1(e,s)}build(e,s,a){Qf(e,s,a.transformTemplate)}scrapeMotionValuesFromProps(e,s,a){return nm(e,s,a)}}const o1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function wC(n,e,s,a){r1(n,e,void 0,a);for(const l in e.attrs)n.setAttribute(o1.has(l)?l:im(l),e.attrs[l])}class xC extends a1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=rt}getBaseTargetFromProps(e,s){return e[s]}readValueFromInstance(e,s){if(Ba.has(s)){const a=Ow(s);return a&&a.default||0}return s=o1.has(s)?s:im(s),e.getAttribute(s)}scrapeMotionValuesFromProps(e,s,a){return Jw(e,s,a)}build(e,s,a){Kw(e,s,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(e,s,a,l){wC(e,s,a,l)}mount(e){this.isSVGTag=Fw(e.tagName),super.mount(e)}}const _C=(n,e)=>em(n)?new xC(e):new bC(e,{allowProjection:n!==O.Fragment});function Na(n,e,s){const a=n.getProps();return tm(a,e,s!==void 0?s:a.custom,n)}const Wd=n=>Array.isArray(n);function SC(n,e,s){n.hasValue(e)?n.getValue(e).set(s):n.addValue(e,Ma(s))}function TC(n){return Wd(n)?n[n.length-1]||0:n}function EC(n,e){const s=Na(n,e);let{transitionEnd:a={},transition:l={},...u}=s||{};u={...u,...a};for(const c in u){const d=TC(u[c]);SC(n,c,d)}}function AC(n){return!!(Dt(n)&&n.add)}function ef(n,e){const s=n.getValue("willChange");if(AC(s))return s.add(e);if(!s&&gi.WillChange){const a=new gi.WillChange("auto");n.addValue("willChange",a),a.add(e)}}function l1(n){return n.props[Zw]}const jC=n=>n!==null;function CC(n,{repeat:e,repeatType:s="loop"},a){const l=n.filter(jC),u=e&&s!=="loop"&&e%2===1?0:l.length-1;return l[u]}const RC={type:"spring",stiffness:500,damping:25,restSpeed:10},kC=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),OC={type:"keyframes",duration:.8},NC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},DC=(n,{keyframes:e})=>e.length>2?OC:Ba.has(n)?n.startsWith("scale")?kC(e[1]):RC:NC;function MC({when:n,delay:e,delayChildren:s,staggerChildren:a,staggerDirection:l,repeat:u,repeatType:c,repeatDelay:d,from:m,elapsed:p,...g}){return!!Object.keys(g).length}const sm=(n,e,s,a={},l,u)=>c=>{const d=Gf(a,n)||{},m=d.delay||a.delay||0;let{elapsed:p=0}=a;p=p-$n(m);const g={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:e.getVelocity(),...d,delay:-p,onUpdate:w=>{e.set(w),d.onUpdate&&d.onUpdate(w)},onComplete:()=>{c(),d.onComplete&&d.onComplete()},name:n,motionValue:e,element:u?void 0:l};MC(d)||Object.assign(g,DC(n,g)),g.duration&&(g.duration=$n(g.duration)),g.repeatDelay&&(g.repeatDelay=$n(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Fd(g),g.delay===0&&(y=!0)),(gi.instantAnimations||gi.skipAnimations)&&(y=!0,Fd(g),g.delay=0),g.allowFlatten=!d.type&&!d.ease,y&&!u&&e.get()!==void 0){const w=CC(g.keyframes,d);if(w!==void 0){Fe.update(()=>{g.onUpdate(w),g.onComplete()});return}}return d.isSync?new qf(g):new tj(g)};function UC({protectedKeys:n,needsAnimating:e},s){const a=n.hasOwnProperty(s)&&e[s]!==!0;return e[s]=!1,a}function u1(n,e,{delay:s=0,transitionOverride:a,type:l}={}){let{transition:u=n.getDefaultTransition(),transitionEnd:c,...d}=e;a&&(u=a);const m=[],p=l&&n.animationState&&n.animationState.getState()[l];for(const g in d){const y=n.getValue(g,n.latestValues[g]??null),w=d[g];if(w===void 0||p&&UC(p,g))continue;const _={delay:s,...Gf(u||{},g)},S=y.get();if(S!==void 0&&!y.isAnimating&&!Array.isArray(w)&&w===S&&!_.velocity)continue;let A=!1;if(window.MotionHandoffAnimation){const R=l1(n);if(R){const L=window.MotionHandoffAnimation(R,g,Fe);L!==null&&(_.startTime=L,A=!0)}}ef(n,g),y.start(sm(g,y,w,n.shouldReduceMotion&&Cw.has(g)?{type:!1}:_,n,A));const k=y.animation;k&&m.push(k)}return c&&Promise.all(m).then(()=>{Fe.update(()=>{c&&EC(n,c)})}),m}function c1(n,e,s,a=0,l=1){const u=Array.from(n).sort((p,g)=>p.sortNodePosition(g)).indexOf(e),c=n.size,d=(c-1)*a;return typeof s=="function"?s(u,c):l===1?u*a:d-u*a}function tf(n,e,s={}){var m;const a=Na(n,e,s.type==="exit"?(m=n.presenceContext)==null?void 0:m.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=a||{};s.transitionOverride&&(l=s.transitionOverride);const u=a?()=>Promise.all(u1(n,a,s)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:w}=l;return LC(n,e,p,g,y,w,s)}:()=>Promise.resolve(),{when:d}=l;if(d){const[p,g]=d==="beforeChildren"?[u,c]:[c,u];return p().then(()=>g())}else return Promise.all([u(),c(s.delay)])}function LC(n,e,s=0,a=0,l=0,u=1,c){const d=[];for(const m of n.variantChildren)m.notify("AnimationStart",e),d.push(tf(m,e,{...c,delay:s+(typeof a=="function"?0:a)+c1(n.variantChildren,m,a,l,u)}).then(()=>m.notify("AnimationComplete",e)));return Promise.all(d)}function PC(n,e,s={}){n.notify("AnimationStart",e);let a;if(Array.isArray(e)){const l=e.map(u=>tf(n,u,s));a=Promise.all(l)}else if(typeof e=="string")a=tf(n,e,s);else{const l=typeof e=="function"?Na(n,e,s.custom):e;a=Promise.all(u1(n,l,s))}return a.then(()=>{n.notify("AnimationComplete",e)})}function h1(n,e){if(!Array.isArray(e))return!1;const s=e.length;if(s!==n.length)return!1;for(let a=0;a<s;a++)if(e[a]!==n[a])return!1;return!0}const zC=Zf.length;function d1(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?d1(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const e={};for(let s=0;s<zC;s++){const a=Zf[s],l=n.props[a];(oo(l)||l===!1)&&(e[a]=l)}return e}const BC=[...Jf].reverse(),VC=Jf.length;function HC(n){return e=>Promise.all(e.map(({animation:s,options:a})=>PC(n,s,a)))}function $C(n){let e=HC(n),s=t0(),a=!0;const l=m=>(p,g)=>{var w;const y=Na(n,g,m==="exit"?(w=n.presenceContext)==null?void 0:w.custom:void 0);if(y){const{transition:_,transitionEnd:S,...A}=y;p={...p,...A,...S}}return p};function u(m){e=m(n)}function c(m){const{props:p}=n,g=d1(n.parent)||{},y=[],w=new Set;let _={},S=1/0;for(let k=0;k<VC;k++){const R=BC[k],L=s[R],E=p[R]!==void 0?p[R]:g[R],G=oo(E),J=R===m?L.isActive:null;J===!1&&(S=k);let Z=E===g[R]&&E!==p[R]&&G;if(Z&&a&&n.manuallyAnimateOnMount&&(Z=!1),L.protectedKeys={..._},!L.isActive&&J===null||!E&&!L.prevProp||zu(E)||typeof E=="boolean")continue;const F=qC(L.prevProp,E);let te=F||R===m&&L.isActive&&!Z&&G||k>S&&G,oe=!1;const je=Array.isArray(E)?E:[E];let Ie=je.reduce(l(R),{});J===!1&&(Ie={});const{prevResolvedValues:Qe={}}=L,an={...Qe,...Ie},Mt=X=>{te=!0,w.has(X)&&(oe=!0,w.delete(X)),L.needsAnimating[X]=!0;const ne=n.getValue(X);ne&&(ne.liveStyle=!1)};for(const X in an){const ne=Ie[X],we=Qe[X];if(_.hasOwnProperty(X))continue;let ge=!1;Wd(ne)&&Wd(we)?ge=!h1(ne,we):ge=ne!==we,ge?ne!=null?Mt(X):w.add(X):ne!==void 0&&w.has(X)?Mt(X):L.protectedKeys[X]=!0}L.prevProp=E,L.prevResolvedValues=Ie,L.isActive&&(_={..._,...Ie}),a&&n.blockInitialAnimation&&(te=!1);const bt=Z&&F;te&&(!bt||oe)&&y.push(...je.map(X=>{const ne={type:R};if(typeof X=="string"&&a&&!bt&&n.manuallyAnimateOnMount&&n.parent){const{parent:we}=n,ge=Na(we,X);if(we.enteringChildren&&ge){const{delayChildren:C}=ge.transition||{};ne.delay=c1(we.enteringChildren,n,C)}}return{animation:X,options:ne}}))}if(w.size){const k={};if(typeof p.initial!="boolean"){const R=Na(n,Array.isArray(p.initial)?p.initial[0]:p.initial);R&&R.transition&&(k.transition=R.transition)}w.forEach(R=>{const L=n.getBaseTarget(R),E=n.getValue(R);E&&(E.liveStyle=!0),k[R]=L??null}),y.push({animation:k})}let A=!!y.length;return a&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(A=!1),a=!1,A?e(y):Promise.resolve()}function d(m,p){var y;if(s[m].isActive===p)return Promise.resolve();(y=n.variantChildren)==null||y.forEach(w=>{var _;return(_=w.animationState)==null?void 0:_.setActive(m,p)}),s[m].isActive=p;const g=c(m);for(const w in s)s[w].protectedKeys={};return g}return{animateChanges:c,setActive:d,setAnimateFunction:u,getState:()=>s,reset:()=>{s=t0()}}}function qC(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!h1(e,n):!1}function gs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function t0(){return{animate:gs(!0),whileInView:gs(),whileHover:gs(),whileTap:gs(),whileDrag:gs(),whileFocus:gs(),exit:gs()}}class Fi{constructor(e){this.isMounted=!1,this.node=e}update(){}}class IC extends Fi{constructor(e){super(e),e.animationState||(e.animationState=$C(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();zu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:s}=this.node.prevProps||{};e!==s&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let GC=0;class KC extends Fi{constructor(){super(...arguments),this.id=GC++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:s}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===a)return;const l=this.node.animationState.setActive("exit",!e);s&&!e&&l.then(()=>{s(this.id)})}mount(){const{register:e,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const YC={animation:{Feature:IC},exit:{Feature:KC}};function uo(n,e,s,a={passive:!0}){return n.addEventListener(e,s,a),()=>n.removeEventListener(e,s)}function Eo(n){return{point:{x:n.pageX,y:n.pageY}}}const FC=n=>e=>Ff(e)&&n(e,Eo(e));function Jr(n,e,s,a){return uo(n,e,FC(s),a)}const f1=1e-4,XC=1-f1,JC=1+f1,m1=.01,ZC=0-m1,QC=0+m1;function Pt(n){return n.max-n.min}function WC(n,e,s){return Math.abs(n-e)<=s}function n0(n,e,s,a=.5){n.origin=a,n.originPoint=Je(e.min,e.max,n.origin),n.scale=Pt(s)/Pt(e),n.translate=Je(s.min,s.max,n.origin)-n.originPoint,(n.scale>=XC&&n.scale<=JC||isNaN(n.scale))&&(n.scale=1),(n.translate>=ZC&&n.translate<=QC||isNaN(n.translate))&&(n.translate=0)}function Zr(n,e,s,a){n0(n.x,e.x,s.x,a?a.originX:void 0),n0(n.y,e.y,s.y,a?a.originY:void 0)}function i0(n,e,s){n.min=s.min+e.min,n.max=n.min+Pt(e)}function eR(n,e,s){i0(n.x,e.x,s.x),i0(n.y,e.y,s.y)}function s0(n,e,s){n.min=e.min-s.min,n.max=n.min+Pt(e)}function Qr(n,e,s){s0(n.x,e.x,s.x),s0(n.y,e.y,s.y)}function xn(n){return[n("x"),n("y")]}const p1=({current:n})=>n?n.ownerDocument.defaultView:null,a0=(n,e)=>Math.abs(n-e);function tR(n,e){const s=a0(n.x,e.x),a=a0(n.y,e.y);return Math.sqrt(s**2+a**2)}class g1{constructor(e,s,{transformPagePoint:a,contextWindow:l=window,dragSnapToOrigin:u=!1,distanceThreshold:c=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Sd(this.lastMoveEventInfo,this.history),_=this.startEvent!==null,S=tR(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!_&&!S)return;const{point:A}=w,{timestamp:k}=Rt;this.history.push({...A,timestamp:k});const{onStart:R,onMove:L}=this.handlers;_||(R&&R(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,w)},this.handlePointerMove=(w,_)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=_d(_,this.transformPagePoint),Fe.update(this.updatePoint,!0)},this.handlePointerUp=(w,_)=>{this.end();const{onEnd:S,onSessionEnd:A,resumeAnimation:k}=this.handlers;if(this.dragSnapToOrigin&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=Sd(w.type==="pointercancel"?this.lastMoveEventInfo:_d(_,this.transformPagePoint),this.history);this.startEvent&&S&&S(w,R),A&&A(w,R)},!Ff(e))return;this.dragSnapToOrigin=u,this.handlers=s,this.transformPagePoint=a,this.distanceThreshold=c,this.contextWindow=l||window;const d=Eo(e),m=_d(d,this.transformPagePoint),{point:p}=m,{timestamp:g}=Rt;this.history=[{...p,timestamp:g}];const{onSessionStart:y}=s;y&&y(e,Sd(m,this.history)),this.removeListeners=_o(Jr(this.contextWindow,"pointermove",this.handlePointerMove),Jr(this.contextWindow,"pointerup",this.handlePointerUp),Jr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ki(this.updatePoint)}}function _d(n,e){return e?{point:e(n.point)}:n}function r0(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Sd({point:n},e){return{point:n,delta:r0(n,y1(e)),offset:r0(n,nR(e)),velocity:iR(e,.1)}}function nR(n){return n[0]}function y1(n){return n[n.length-1]}function iR(n,e){if(n.length<2)return{x:0,y:0};let s=n.length-1,a=null;const l=y1(n);for(;s>=0&&(a=n[s],!(l.timestamp-a.timestamp>$n(e)));)s--;if(!a)return{x:0,y:0};const u=_n(l.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const c={x:(l.x-a.x)/u,y:(l.y-a.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function sR(n,{min:e,max:s},a){return e!==void 0&&n<e?n=a?Je(e,n,a.min):Math.max(n,e):s!==void 0&&n>s&&(n=a?Je(s,n,a.max):Math.min(n,s)),n}function o0(n,e,s){return{min:e!==void 0?n.min+e:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function aR(n,{top:e,left:s,bottom:a,right:l}){return{x:o0(n.x,s,l),y:o0(n.y,e,a)}}function l0(n,e){let s=e.min-n.min,a=e.max-n.max;return e.max-e.min<n.max-n.min&&([s,a]=[a,s]),{min:s,max:a}}function rR(n,e){return{x:l0(n.x,e.x),y:l0(n.y,e.y)}}function oR(n,e){let s=.5;const a=Pt(n),l=Pt(e);return l>a?s=so(e.min,e.max-a,n.min):a>l&&(s=so(n.min,n.max-l,e.min)),pi(0,1,s)}function lR(n,e){const s={};return e.min!==void 0&&(s.min=e.min-n.min),e.max!==void 0&&(s.max=e.max-n.min),s}const nf=.35;function uR(n=nf){return n===!1?n=0:n===!0&&(n=nf),{x:u0(n,"left","right"),y:u0(n,"top","bottom")}}function u0(n,e,s){return{min:c0(n,e),max:c0(n,s)}}function c0(n,e){return typeof n=="number"?n:n[e]||0}const cR=new WeakMap;class hR{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=rt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:s=!1,distanceThreshold:a}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const u=y=>{const{dragSnapToOrigin:w}=this.getProps();w?this.pauseAnimation():this.stopAnimation(),s&&this.snapToCursor(Eo(y).point)},c=(y,w)=>{const{drag:_,dragPropagation:S,onDragStart:A}=this.getProps();if(_&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=yj(_),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),xn(R=>{let L=this.getAxisMotionValue(R).get()||0;if(qn.test(L)){const{projection:E}=this.visualElement;if(E&&E.layout){const G=E.layout.layoutBox[R];G&&(L=Pt(G)*(parseFloat(L)/100))}}this.originPoint[R]=L}),A&&Fe.postRender(()=>A(y,w)),ef(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},d=(y,w)=>{this.latestPointerEvent=y,this.latestPanInfo=w;const{dragPropagation:_,dragDirectionLock:S,onDirectionLock:A,onDrag:k}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:R}=w;if(S&&this.currentDirection===null){this.currentDirection=dR(R),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",w.point,R),this.updateAxis("y",w.point,R),this.visualElement.render(),k&&k(y,w)},m=(y,w)=>{this.latestPointerEvent=y,this.latestPanInfo=w,this.stop(y,w),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>xn(y=>{var w;return this.getAnimationState(y)==="paused"&&((w=this.getAxisMotionValue(y).animation)==null?void 0:w.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new g1(e,{onSessionStart:u,onStart:c,onMove:d,onSessionEnd:m,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:p1(this.visualElement)})}stop(e,s){const a=e||this.latestPointerEvent,l=s||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!l||!a)return;const{velocity:c}=l;this.startAnimation(c);const{onDragEnd:d}=this.getProps();d&&Fe.postRender(()=>d(a,l))}cancel(){this.isDragging=!1;const{projection:e,animationState:s}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}updateAxis(e,s,a){const{drag:l}=this.getProps();if(!a||!Jl(e,l,this.currentDirection))return;const u=this.getAxisMotionValue(e);let c=this.originPoint[e]+a[e];this.constraints&&this.constraints[e]&&(c=sR(c,this.constraints[e],this.elastic[e])),u.set(c)}resolveConstraints(){var u;const{dragConstraints:e,dragElastic:s}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,l=this.constraints;e&&ja(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&a?this.constraints=aR(a.layoutBox,e):this.constraints=!1,this.elastic=uR(s),l!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&xn(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=lR(a.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:s}=this.getProps();if(!e||!ja(e))return!1;const a=e.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const u=fC(a,l.root,this.visualElement.getTransformPagePoint());let c=rR(l.layout.layoutBox,u);if(s){const d=s(cC(c));this.hasMutatedConstraints=!!d,d&&(c=e1(d))}return c}startAnimation(e){const{drag:s,dragMomentum:a,dragElastic:l,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:d}=this.getProps(),m=this.constraints||{},p=xn(g=>{if(!Jl(g,s,this.currentDirection))return;let y=m&&m[g]||{};c&&(y={min:0,max:0});const w=l?200:1e6,_=l?40:1e7,S={type:"inertia",velocity:a?e[g]:0,bounceStiffness:w,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...u,...y};return this.startAxisValueAnimation(g,S)});return Promise.all(p).then(d)}startAxisValueAnimation(e,s){const a=this.getAxisMotionValue(e);return ef(this.visualElement,e),a.start(sm(e,a,0,s,this.visualElement,!1))}stopAnimation(){xn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){xn(e=>{var s;return(s=this.getAxisMotionValue(e).animation)==null?void 0:s.pause()})}getAnimationState(e){var s;return(s=this.getAxisMotionValue(e).animation)==null?void 0:s.state}getAxisMotionValue(e){const s=`_drag${e.toUpperCase()}`,a=this.visualElement.getProps(),l=a[s];return l||this.visualElement.getValue(e,(a.initial?a.initial[e]:void 0)||0)}snapToCursor(e){xn(s=>{const{drag:a}=this.getProps();if(!Jl(s,a,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(s);if(l&&l.layout){const{min:c,max:d}=l.layout.layoutBox[s];u.set(e[s]-Je(c,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:s}=this.getProps(),{projection:a}=this.visualElement;if(!ja(s)||!a||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};xn(c=>{const d=this.getAxisMotionValue(c);if(d&&this.constraints!==!1){const m=d.get();l[c]=oR({min:m,max:m},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),xn(c=>{if(!Jl(c,e,null))return;const d=this.getAxisMotionValue(c),{min:m,max:p}=this.constraints[c];d.set(Je(m,p,l[c]))})}addListeners(){if(!this.visualElement.current)return;cR.set(this.visualElement,this);const e=this.visualElement.current,s=Jr(e,"pointerdown",m=>{const{drag:p,dragListener:g=!0}=this.getProps();p&&g&&this.start(m)}),a=()=>{const{dragConstraints:m}=this.getProps();ja(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,u=l.addEventListener("measure",a);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Fe.read(a);const c=uo(window,"resize",()=>this.scalePositionWithinConstraints()),d=l.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:p})=>{this.isDragging&&p&&(xn(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=m[g].translate,y.set(y.get()+m[g].translate))}),this.visualElement.render())}));return()=>{c(),s(),u(),d&&d()}}getProps(){const e=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:a=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:c=nf,dragMomentum:d=!0}=e;return{...e,drag:s,dragDirectionLock:a,dragPropagation:l,dragConstraints:u,dragElastic:c,dragMomentum:d}}}function Jl(n,e,s){return(e===!0||e===n)&&(s===null||s===n)}function dR(n,e=10){let s=null;return Math.abs(n.y)>e?s="y":Math.abs(n.x)>e&&(s="x"),s}class fR extends Fi{constructor(e){super(e),this.removeGroupControls=Sn,this.removeListeners=Sn,this.controls=new hR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Sn}unmount(){this.removeGroupControls(),this.removeListeners()}}const h0=n=>(e,s)=>{n&&Fe.postRender(()=>n(e,s))};class mR extends Fi{constructor(){super(...arguments),this.removePointerDownListener=Sn}onPointerDown(e){this.session=new g1(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:p1(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:s,onPan:a,onPanEnd:l}=this.node.getProps();return{onSessionStart:h0(e),onStart:h0(s),onMove:a,onEnd:(u,c)=>{delete this.session,l&&Fe.postRender(()=>l(u,c))}}}mount(){this.removePointerDownListener=Jr(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const gu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function d0(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Hr={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(fe.test(n))n=parseFloat(n);else return n;const s=d0(n,e.target.x),a=d0(n,e.target.y);return`${s}% ${a}%`}},pR={correct:(n,{treeScale:e,projectionDelta:s})=>{const a=n,l=Yi.parse(n);if(l.length>5)return a;const u=Yi.createTransformer(n),c=typeof l[0]!="number"?1:0,d=s.x.scale*e.x,m=s.y.scale*e.y;l[0+c]/=d,l[1+c]/=m;const p=Je(d,m,.5);return typeof l[2+c]=="number"&&(l[2+c]/=p),typeof l[3+c]=="number"&&(l[3+c]/=p),u(l)}};let Td=!1;class gR extends O.Component{componentDidMount(){const{visualElement:e,layoutGroup:s,switchLayoutGroup:a,layoutId:l}=this.props,{projection:u}=e;zj(yR),u&&(s.group&&s.group.add(u),a&&a.register&&l&&a.register(u),Td&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),gu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:s,visualElement:a,drag:l,isPresent:u}=this.props,{projection:c}=a;return c&&(c.isPresent=u,Td=!0,l||e.layoutDependency!==s||s===void 0||e.isPresent!==u?c.willUpdate():this.safeToRemove(),e.isPresent!==u&&(u?c.promote():c.relegate()||Fe.postRender(()=>{const d=c.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Yf.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:s,switchLayoutGroup:a}=this.props,{projection:l}=e;Td=!0,l&&(l.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(l),a&&a.deregister&&a.deregister(l))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function v1(n){const[e,s]=Bw(),a=O.useContext(Ef);return b.jsx(gR,{...n,layoutGroup:a,switchLayoutGroup:O.useContext(Qw),isPresent:e,safeToRemove:s})}const yR={borderRadius:{...Hr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Hr,borderTopRightRadius:Hr,borderBottomLeftRadius:Hr,borderBottomRightRadius:Hr,boxShadow:pR};function vR(n,e,s){const a=Dt(n)?n:Ma(n);return a.start(sm("",a,e,s)),a.animation}const bR=(n,e)=>n.depth-e.depth;class wR{constructor(){this.children=[],this.isDirty=!1}add(e){Cf(this.children,e),this.isDirty=!0}remove(e){Rf(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(bR),this.isDirty=!1,this.children.forEach(e)}}function xR(n,e){const s=Ft.now(),a=({timestamp:l})=>{const u=l-s;u>=e&&(Ki(a),n(u-e))};return Fe.setup(a,!0),()=>Ki(a)}const b1=["TopLeft","TopRight","BottomLeft","BottomRight"],_R=b1.length,f0=n=>typeof n=="string"?parseFloat(n):n,m0=n=>typeof n=="number"||fe.test(n);function SR(n,e,s,a,l,u){l?(n.opacity=Je(0,s.opacity??1,TR(a)),n.opacityExit=Je(e.opacity??1,0,ER(a))):u&&(n.opacity=Je(e.opacity??1,s.opacity??1,a));for(let c=0;c<_R;c++){const d=`border${b1[c]}Radius`;let m=p0(e,d),p=p0(s,d);if(m===void 0&&p===void 0)continue;m||(m=0),p||(p=0),m===0||p===0||m0(m)===m0(p)?(n[d]=Math.max(Je(f0(m),f0(p),a),0),(qn.test(p)||qn.test(m))&&(n[d]+="%")):n[d]=p}(e.rotate||s.rotate)&&(n.rotate=Je(e.rotate||0,s.rotate||0,a))}function p0(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const TR=w1(0,.5,aw),ER=w1(.5,.95,Sn);function w1(n,e,s){return a=>a<n?0:a>e?1:s(so(n,e,a))}function g0(n,e){n.min=e.min,n.max=e.max}function bn(n,e){g0(n.x,e.x),g0(n.y,e.y)}function y0(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function v0(n,e,s,a,l){return n-=e,n=Au(n,1/s,a),l!==void 0&&(n=Au(n,1/l,a)),n}function AR(n,e=0,s=1,a=.5,l,u=n,c=n){if(qn.test(e)&&(e=parseFloat(e),e=Je(c.min,c.max,e/100)-c.min),typeof e!="number")return;let d=Je(u.min,u.max,a);n===u&&(d-=e),n.min=v0(n.min,e,s,d,l),n.max=v0(n.max,e,s,d,l)}function b0(n,e,[s,a,l],u,c){AR(n,e[s],e[a],e[l],e.scale,u,c)}const jR=["x","scaleX","originX"],CR=["y","scaleY","originY"];function w0(n,e,s,a){b0(n.x,e,jR,s?s.x:void 0,a?a.x:void 0),b0(n.y,e,CR,s?s.y:void 0,a?a.y:void 0)}function x0(n){return n.translate===0&&n.scale===1}function x1(n){return x0(n.x)&&x0(n.y)}function _0(n,e){return n.min===e.min&&n.max===e.max}function RR(n,e){return _0(n.x,e.x)&&_0(n.y,e.y)}function S0(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function _1(n,e){return S0(n.x,e.x)&&S0(n.y,e.y)}function T0(n){return Pt(n.x)/Pt(n.y)}function E0(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class kR{constructor(){this.members=[]}add(e){Cf(this.members,e),e.scheduleRender()}remove(e){if(Rf(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(e){const s=this.members.findIndex(l=>e===l);if(s===0)return!1;let a;for(let l=s;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1){a=u;break}}return a?(this.promote(a),!0):!1}promote(e,s){const a=this.lead;if(e!==a&&(this.prevLead=a,this.lead=e,e.show(),a)){a.instance&&a.scheduleRender(),e.scheduleRender(),e.resumeFrom=a,s&&(e.resumeFrom.preserveOpacity=!0),a.snapshot&&(e.snapshot=a.snapshot,e.snapshot.latestValues=a.animationValues||a.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:l}=e.options;l===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:s,resumingFrom:a}=e;s.onExitComplete&&s.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function OR(n,e,s){let a="";const l=n.x.translate/e.x,u=n.y.translate/e.y,c=(s==null?void 0:s.z)||0;if((l||u||c)&&(a=`translate3d(${l}px, ${u}px, ${c}px) `),(e.x!==1||e.y!==1)&&(a+=`scale(${1/e.x}, ${1/e.y}) `),s){const{transformPerspective:p,rotate:g,rotateX:y,rotateY:w,skewX:_,skewY:S}=s;p&&(a=`perspective(${p}px) ${a}`),g&&(a+=`rotate(${g}deg) `),y&&(a+=`rotateX(${y}deg) `),w&&(a+=`rotateY(${w}deg) `),_&&(a+=`skewX(${_}deg) `),S&&(a+=`skewY(${S}deg) `)}const d=n.x.scale*e.x,m=n.y.scale*e.y;return(d!==1||m!==1)&&(a+=`scale(${d}, ${m})`),a||"none"}const Ed=["","X","Y","Z"],NR=1e3;let DR=0;function Ad(n,e,s,a){const{latestValues:l}=e;l[n]&&(s[n]=l[n],e.setStaticValue(n,0),a&&(a[n]=0))}function S1(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const s=l1(e);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:l,layoutId:u}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",Fe,!(l||u))}const{parent:a}=n;a&&!a.hasCheckedOptimisedAppear&&S1(a)}function T1({attachResizeListener:n,defaultParent:e,measureScroll:s,checkIsScrollRoot:a,resetTransform:l}){return class{constructor(c={},d=e==null?void 0:e()){this.id=DR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(LR),this.nodes.forEach(VR),this.nodes.forEach(HR),this.nodes.forEach(PR)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new wR)}addEventListener(c,d){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Nf),this.eventHandlers.get(c).add(d)}notifyListeners(c,...d){const m=this.eventHandlers.get(c);m&&m.notify(...d)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=zw(c)&&!Sj(c),this.instance=c;const{layoutId:d,layout:m,visualElement:p}=this.options;if(p&&!p.current&&p.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||d)&&(this.isLayoutDirty=!0),n){let g,y=0;const w=()=>this.root.updateBlockedByResize=!1;Fe.read(()=>{y=window.innerWidth}),n(c,()=>{const _=window.innerWidth;_!==y&&(y=_,this.root.updateBlockedByResize=!0,g&&g(),g=xR(w,250),gu.hasAnimatedSinceResize&&(gu.hasAnimatedSinceResize=!1,this.nodes.forEach(C0)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||m)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:w,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||p.getDefaultTransition()||KR,{onLayoutAnimationStart:A,onLayoutAnimationComplete:k}=p.getProps(),R=!this.targetLayout||!_1(this.targetLayout,_),L=!y&&w;if(this.options.layoutRoot||this.resumeFrom||L||y&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const E={...Gf(S,"layout"),onPlay:A,onComplete:k};(p.shouldReduceMotion||this.options.layoutRoot)&&(E.delay=0,E.type=!1),this.startAnimation(E),this.setAnimationOrigin(g,L)}else y||C0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ki(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach($R),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&S1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:d,layout:m}=this.options;if(d===void 0&&!m)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(A0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(j0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(BR),this.nodes.forEach(MR),this.nodes.forEach(UR)):this.nodes.forEach(j0),this.clearAllSnapshots();const d=Ft.now();Rt.delta=pi(0,1e3/60,d-Rt.timestamp),Rt.timestamp=d,Rt.isProcessing=!0,md.update.process(Rt),md.preRender.process(Rt),md.render.process(Rt),Rt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Yf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(zR),this.sharedNodes.forEach(qR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Fe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Fe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Pt(this.snapshot.measuredBox.x)&&!Pt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=rt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(d=!1),d&&this.instance){const m=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:m,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!l)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!x1(this.projectionDelta),m=this.getTransformTemplate(),p=m?m(this.latestValues,""):void 0,g=p!==this.prevTransformTemplateValue;c&&this.instance&&(d||ws(this.latestValues)||g)&&(l(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const d=this.measurePageBox();let m=this.removeElementScroll(d);return c&&(m=this.removeTransform(m)),YR(m),{animationId:this.root.animationId,measuredBox:d,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:c}=this.options;if(!c)return rt();const d=c.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(FR))){const{scroll:g}=this.root;g&&(Ca(d.x,g.offset.x),Ca(d.y,g.offset.y))}return d}removeElementScroll(c){var m;const d=rt();if(bn(d,c),(m=this.scroll)!=null&&m.wasRoot)return d;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:y,options:w}=g;g!==this.root&&y&&w.layoutScroll&&(y.wasRoot&&bn(d,c),Ca(d.x,y.offset.x),Ca(d.y,y.offset.y))}return d}applyTransform(c,d=!1){const m=rt();bn(m,c);for(let p=0;p<this.path.length;p++){const g=this.path[p];!d&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Ra(m,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),ws(g.latestValues)&&Ra(m,g.latestValues)}return ws(this.latestValues)&&Ra(m,this.latestValues),m}removeTransform(c){const d=rt();bn(d,c);for(let m=0;m<this.path.length;m++){const p=this.path[m];if(!p.instance||!ws(p.latestValues))continue;Jd(p.latestValues)&&p.updateSnapshot();const g=rt(),y=p.measurePageBox();bn(g,y),w0(d,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,g)}return ws(this.latestValues)&&w0(d,this.latestValues),d}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Rt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var w;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==d;if(!(c||m&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!(!this.layout||!(g||y))){if(this.resolvedRelativeTargetAt=Rt.timestamp,!this.targetDelta&&!this.relativeTarget){const _=this.getClosestProjectingParent();_&&_.layout&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rt(),this.relativeTargetOrigin=rt(),Qr(this.relativeTargetOrigin,this.layout.layoutBox,_.layout.layoutBox),bn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=rt(),this.targetWithTransforms=rt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),eR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):bn(this.target,this.layout.layoutBox),n1(this.target,this.targetDelta)):bn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const _=this.getClosestProjectingParent();_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rt(),this.relativeTargetOrigin=rt(),Qr(this.relativeTargetOrigin,this.target,_.target),bn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Jd(this.parent.latestValues)||t1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let m=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(m=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===Rt.timestamp&&(m=!1),m)return;const{layout:p,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||g))return;bn(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,w=this.treeScale.y;dC(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=rt());const{target:_}=c;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(y0(this.prevProjectionDelta.x,this.projectionDelta.x),y0(this.prevProjectionDelta.y,this.projectionDelta.y)),Zr(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==w||!E0(this.projectionDelta.x,this.prevProjectionDelta.x)||!E0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),c){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ka(),this.projectionDelta=ka(),this.projectionDeltaWithTransform=ka()}setAnimationOrigin(c,d=!1){const m=this.snapshot,p=m?m.latestValues:{},g={...this.latestValues},y=ka();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const w=rt(),_=m?m.source:void 0,S=this.layout?this.layout.source:void 0,A=_!==S,k=this.getStack(),R=!k||k.members.length<=1,L=!!(A&&!R&&this.options.crossfade===!0&&!this.path.some(GR));this.animationProgress=0;let E;this.mixTargetDelta=G=>{const J=G/1e3;R0(y.x,c.x,J),R0(y.y,c.y,J),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qr(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),IR(this.relativeTarget,this.relativeTargetOrigin,w,J),E&&RR(this.relativeTarget,E)&&(this.isProjectionDirty=!1),E||(E=rt()),bn(E,this.relativeTarget)),A&&(this.animationValues=g,SR(g,p,this.latestValues,J,L,R)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=J},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var d,m,p;this.notifyListeners("animationStart"),(d=this.currentAnimation)==null||d.stop(),(p=(m=this.resumingFrom)==null?void 0:m.currentAnimation)==null||p.stop(),this.pendingAnimation&&(Ki(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Fe.update(()=>{gu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ma(0)),this.currentAnimation=vR(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),c.onUpdate&&c.onUpdate(g)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(NR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:d,target:m,layout:p,latestValues:g}=c;if(!(!d||!m||!p)){if(this!==c&&this.layout&&p&&E1(this.options.animationType,this.layout.layoutBox,p.layoutBox)){m=this.target||rt();const y=Pt(this.layout.layoutBox.x);m.x.min=c.target.x.min,m.x.max=m.x.min+y;const w=Pt(this.layout.layoutBox.y);m.y.min=c.target.y.min,m.y.max=m.y.min+w}bn(d,m),Ra(d,g),Zr(this.projectionDeltaWithTransform,this.layoutCorrected,d,g)}}registerSharedNode(c,d){this.sharedNodes.has(c)||this.sharedNodes.set(c,new kR),this.sharedNodes.get(c).add(d);const p=d.options.initialPromotionConfig;d.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(d):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var d;const{layoutId:c}=this.options;return c?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:c}=this.options;return c?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:d,preserveFollowOpacity:m}={}){const p=this.getStack();p&&p.promote(this,m),c&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let d=!1;const{latestValues:m}=c;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(d=!0),!d)return;const p={};m.z&&Ad("z",c,p,this.animationValues);for(let g=0;g<Ed.length;g++)Ad(`rotate${Ed[g]}`,c,p,this.animationValues),Ad(`skew${Ed[g]}`,c,p,this.animationValues);c.render();for(const g in p)c.setStaticValue(g,p[g]),this.animationValues&&(this.animationValues[g]=p[g]);c.scheduleRender()}applyProjectionStyles(c,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=pu(d==null?void 0:d.pointerEvents)||"",c.transform=m?m(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=pu(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!ws(this.latestValues)&&(c.transform=m?m({},""):"none",this.hasProjected=!1);return}c.visibility="";const g=p.animationValues||p.latestValues;this.applyTransformsToTarget();let y=OR(this.projectionDeltaWithTransform,this.treeScale,g);m&&(y=m(g,y)),c.transform=y;const{x:w,y:_}=this.projectionDelta;c.transformOrigin=`${w.origin*100}% ${_.origin*100}% 0`,p.animationValues?c.opacity=p===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:c.opacity=p===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const S in lo){if(g[S]===void 0)continue;const{correct:A,applyTo:k,isCSSVariable:R}=lo[S],L=y==="none"?g[S]:A(g[S],p);if(k){const E=k.length;for(let G=0;G<E;G++)c[k[G]]=L}else R?this.options.visualElement.renderState.vars[S]=L:c[S]=L}this.options.layoutId&&(c.pointerEvents=p===this?pu(d==null?void 0:d.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var d;return(d=c.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach(A0),this.root.sharedNodes.clear()}}}function MR(n){n.updateLayout()}function UR(n){var s;const e=((s=n.resumeFrom)==null?void 0:s.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:l}=n.layout,{animationType:u}=n.options,c=e.source!==n.layout.source;u==="size"?xn(y=>{const w=c?e.measuredBox[y]:e.layoutBox[y],_=Pt(w);w.min=a[y].min,w.max=w.min+_}):E1(u,e.layoutBox,a)&&xn(y=>{const w=c?e.measuredBox[y]:e.layoutBox[y],_=Pt(a[y]);w.max=w.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+_)});const d=ka();Zr(d,a,e.layoutBox);const m=ka();c?Zr(m,n.applyTransform(l,!0),e.measuredBox):Zr(m,a,e.layoutBox);const p=!x1(d);let g=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:w,layout:_}=y;if(w&&_){const S=rt();Qr(S,e.layoutBox,w.layoutBox);const A=rt();Qr(A,a,_.layoutBox),_1(S,A)||(g=!0),y.options.layoutRoot&&(n.relativeTarget=A,n.relativeTargetOrigin=S,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:a,snapshot:e,delta:m,layoutDelta:d,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:a}=n.options;a&&a()}n.options.transition=void 0}function LR(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function PR(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function zR(n){n.clearSnapshot()}function A0(n){n.clearMeasurements()}function j0(n){n.isLayoutDirty=!1}function BR(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function C0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function VR(n){n.resolveTargetDelta()}function HR(n){n.calcProjection()}function $R(n){n.resetSkewAndRotation()}function qR(n){n.removeLeadSnapshot()}function R0(n,e,s){n.translate=Je(e.translate,0,s),n.scale=Je(e.scale,1,s),n.origin=e.origin,n.originPoint=e.originPoint}function k0(n,e,s,a){n.min=Je(e.min,s.min,a),n.max=Je(e.max,s.max,a)}function IR(n,e,s,a){k0(n.x,e.x,s.x,a),k0(n.y,e.y,s.y,a)}function GR(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const KR={duration:.45,ease:[.4,0,.1,1]},O0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),N0=O0("applewebkit/")&&!O0("chrome/")?Math.round:Sn;function D0(n){n.min=N0(n.min),n.max=N0(n.max)}function YR(n){D0(n.x),D0(n.y)}function E1(n,e,s){return n==="position"||n==="preserve-aspect"&&!WC(T0(e),T0(s),.2)}function FR(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const XR=T1({attachResizeListener:(n,e)=>uo(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),jd={current:void 0},A1=T1({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!jd.current){const n=new XR({});n.mount(window),n.setOptions({layoutScroll:!0}),jd.current=n}return jd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),JR={pan:{Feature:mR},drag:{Feature:fR,ProjectionNode:A1,MeasureLayout:v1}};function M0(n,e,s){const{props:a}=n;n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",s==="Start");const l="onHover"+s,u=a[l];u&&Fe.postRender(()=>u(e,Eo(e)))}class ZR extends Fi{mount(){const{current:e}=this.node;e&&(this.unmount=vj(e,(s,a)=>(M0(this.node,a,"Start"),l=>M0(this.node,l,"End"))))}unmount(){}}class QR extends Fi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=_o(uo(this.node.current,"focus",()=>this.onFocus()),uo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function U0(n,e,s){const{props:a}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&a.whileTap&&n.animationState.setActive("whileTap",s==="Start");const l="onTap"+(s==="End"?"":s),u=a[l];u&&Fe.postRender(()=>u(e,Eo(e)))}class WR extends Fi{mount(){const{current:e}=this.node;e&&(this.unmount=_j(e,(s,a)=>(U0(this.node,a,"Start"),(l,{success:u})=>U0(this.node,l,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const sf=new WeakMap,Cd=new WeakMap,ek=n=>{const e=sf.get(n.target);e&&e(n)},tk=n=>{n.forEach(ek)};function nk({root:n,...e}){const s=n||document;Cd.has(s)||Cd.set(s,{});const a=Cd.get(s),l=JSON.stringify(e);return a[l]||(a[l]=new IntersectionObserver(tk,{root:n,...e})),a[l]}function ik(n,e,s){const a=nk(e);return sf.set(n,s),a.observe(n),()=>{sf.delete(n),a.unobserve(n)}}const sk={some:0,all:1};class ak extends Fi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:s,margin:a,amount:l="some",once:u}=e,c={root:s?s.current:void 0,rootMargin:a,threshold:typeof l=="number"?l:sk[l]},d=m=>{const{isIntersecting:p}=m;if(this.isInView===p||(this.isInView=p,u&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),w=p?g:y;w&&w(m)};return ik(this.node.current,c,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:s}=this.node;["amount","margin","root"].some(rk(e,s))&&this.startObserver()}unmount(){}}function rk({viewport:n={}},{viewport:e={}}={}){return s=>n[s]!==e[s]}const ok={inView:{Feature:ak},tap:{Feature:WR},focus:{Feature:QR},hover:{Feature:ZR}},lk={layout:{ProjectionNode:A1,MeasureLayout:v1}},uk={...YC,...ok,...JR,...lk},pt=uC(uk,_C),ck=()=>{const[n,e]=O.useState(!1),{theme:s,toggleTheme:a}=GT(),{language:l,setLanguage:u,t:c}=Uu(),d=En(),m=[{name:c.nav.about,path:"/"},{name:c.nav.projects,path:"/projects"},{name:c.nav.contact,path:"/contact"}],p=()=>u(l==="fr"?"en":"fr");return b.jsxs("header",{className:"sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:[b.jsxs("div",{className:"container mx-auto px-4 md:px-8 h-16 flex items-center justify-between",children:[b.jsxs(Es,{to:"/",className:"text-xl font-bold tracking-tight hover:opacity-75 transition-opacity duration-200",children:["Lauret",b.jsx("span",{className:"text-primary",children:".Dev"})]}),b.jsxs("nav",{className:"hidden md:flex items-center gap-6",children:[m.map(g=>b.jsx(Es,{to:g.path,className:`text-sm font-medium transition-colors duration-200 hover:text-primary ${d.pathname===g.path?"text-primary":"text-muted-foreground"}`,children:g.name},g.path)),b.jsxs("div",{className:"flex items-center gap-2 ml-4 border-l pl-4 border-border",children:[b.jsx(dt,{variant:"ghost",size:"sm",onClick:a,children:s==="dark"?b.jsx(xv,{className:"h-4 w-4"}):b.jsx(vv,{className:"h-4 w-4"})}),b.jsx(dt,{variant:"ghost",size:"sm",onClick:p,className:"w-12",children:b.jsx("span",{className:"text-xs font-bold uppercase mr-1",children:l})})]})]}),b.jsx("button",{className:"md:hidden p-2 hover:bg-secondary/50 rounded-md transition-colors duration-200",onClick:()=>e(!n),children:n?b.jsx(jA,{className:"h-5 w-5"}):b.jsx(tA,{className:"h-5 w-5"})})]}),b.jsx(Vw,{children:n&&b.jsx(pt.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden border-b border-border bg-background",children:b.jsxs("div",{className:"container flex flex-col py-4 gap-4 px-4",children:[m.map(g=>b.jsx(Es,{to:g.path,className:"text-sm font-medium py-2",onClick:()=>e(!1),children:g.name},g.path)),b.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-border",children:[b.jsx("span",{className:"text-sm text-muted-foreground",children:"Settings"}),b.jsxs("div",{className:"flex gap-2",children:[b.jsx(dt,{variant:"ghost",size:"sm",onClick:a,children:s==="dark"?b.jsx(xv,{className:"h-4 w-4"}):b.jsx(vv,{className:"h-4 w-4"})}),b.jsx(dt,{variant:"ghost",size:"sm",onClick:p,children:l==="fr"?"EN":"FR"})]})]})]})})})]})},hk=()=>b.jsx("footer",{className:"border-t border-border bg-muted/30 py-8 mt-auto",children:b.jsxs("div",{className:"container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4",children:[b.jsxs("p",{className:"text-sm text-muted-foreground text-center md:text-left",children:["© ",new Date().getFullYear()," Lauret CHACHA. All rights reserved."]}),b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("a",{href:"https://github.com/Handsomeboy990",target:"_blank",rel:"noreferrer",className:"text-muted-foreground hover:text-primary transition-colors",children:b.jsx(Hb,{className:"h-5 w-5"})}),b.jsx("a",{href:"https://linkedin.com/in/lauret-kryst-sasler-chacha",target:"_blank",rel:"noreferrer",className:"text-muted-foreground hover:text-primary transition-colors",children:b.jsx(Gb,{className:"h-5 w-5"})}),b.jsx("a",{href:"mailto:lauret.chacha@epitech.eu",className:"text-muted-foreground hover:text-primary transition-colors",children:b.jsx(Kb,{className:"h-5 w-5"})})]})]})}),dk="/assets/lauret_chacha-RtSvMGKH.png",fk="/assets/Lauret_Chacha_D%C3%A9veloppeur_Web_Fullstack-CEzNpW5N.pdf",co=({title:n,description:e,image:s})=>{const a=En(),l=window.location.origin+a.pathname,u="Lauret CHACHA",c="Portfolio professionnel de Lauret CHACHA, Développeur Full Stack. Multilingue, Dark Mode, Design Premium.",d="https://picsum.photos/1200/630";return O.useEffect(()=>{const m=n?`${n} | Lauret CHACHA`:u,p=e||c,g=s||d;document.title=m;const y=(w,_,S=!1)=>{const A=S?`meta[property='${w}']`:`meta[name='${w}']`;let k=document.querySelector(A);k||(k=document.createElement("meta"),S?k.setAttribute("property",w):k.setAttribute("name",w),document.head.appendChild(k)),k.setAttribute("content",_)};y("description",p),y("og:title",m,!0),y("og:description",p,!0),y("og:url",l,!0),y("og:site_name",u,!0),y("og:type","website",!0),y("og:image",g,!0),y("twitter:card","summary_large_image"),y("twitter:title",m),y("twitter:description",p),y("twitter:image",g)},[n,e,s,l]),null};function Vu(n,e){var s={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(s[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(n);l<a.length;l++)e.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(n,a[l])&&(s[a[l]]=n[a[l]]);return s}function mk(n,e,s,a){function l(u){return u instanceof s?u:new s(function(c){c(u)})}return new(s||(s=Promise))(function(u,c){function d(g){try{p(a.next(g))}catch(y){c(y)}}function m(g){try{p(a.throw(g))}catch(y){c(y)}}function p(g){g.done?u(g.value):l(g.value).then(d,m)}p((a=a.apply(n,e||[])).next())})}const pk=n=>n?(...e)=>n(...e):(...e)=>fetch(...e);class am extends Error{constructor(e,s="FunctionsError",a){super(e),this.name=s,this.context=a}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class gk extends am{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class L0 extends am{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class P0 extends am{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var af;(function(n){n.Any="any",n.ApNortheast1="ap-northeast-1",n.ApNortheast2="ap-northeast-2",n.ApSouth1="ap-south-1",n.ApSoutheast1="ap-southeast-1",n.ApSoutheast2="ap-southeast-2",n.CaCentral1="ca-central-1",n.EuCentral1="eu-central-1",n.EuWest1="eu-west-1",n.EuWest2="eu-west-2",n.EuWest3="eu-west-3",n.SaEast1="sa-east-1",n.UsEast1="us-east-1",n.UsWest1="us-west-1",n.UsWest2="us-west-2"})(af||(af={}));class yk{constructor(e,{headers:s={},customFetch:a,region:l=af.Any}={}){this.url=e,this.headers=s,this.region=l,this.fetch=pk(a)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return mk(this,arguments,void 0,function*(s,a={}){var l;let u,c;try{const{headers:d,method:m,body:p,signal:g,timeout:y}=a;let w={},{region:_}=a;_||(_=this.region);const S=new URL(`${this.url}/${s}`);_&&_!=="any"&&(w["x-region"]=_,S.searchParams.set("forceFunctionRegion",_));let A;p&&(d&&!Object.prototype.hasOwnProperty.call(d,"Content-Type")||!d)?typeof Blob<"u"&&p instanceof Blob||p instanceof ArrayBuffer?(w["Content-Type"]="application/octet-stream",A=p):typeof p=="string"?(w["Content-Type"]="text/plain",A=p):typeof FormData<"u"&&p instanceof FormData?A=p:(w["Content-Type"]="application/json",A=JSON.stringify(p)):p&&typeof p!="string"&&!(typeof Blob<"u"&&p instanceof Blob)&&!(p instanceof ArrayBuffer)&&!(typeof FormData<"u"&&p instanceof FormData)?A=JSON.stringify(p):A=p;let k=g;y&&(c=new AbortController,u=setTimeout(()=>c.abort(),y),g?(k=c.signal,g.addEventListener("abort",()=>c.abort())):k=c.signal);const R=yield this.fetch(S.toString(),{method:m||"POST",headers:Object.assign(Object.assign(Object.assign({},w),this.headers),d),body:A,signal:k}).catch(J=>{throw new gk(J)}),L=R.headers.get("x-relay-error");if(L&&L==="true")throw new L0(R);if(!R.ok)throw new P0(R);let E=((l=R.headers.get("Content-Type"))!==null&&l!==void 0?l:"text/plain").split(";")[0].trim(),G;return E==="application/json"?G=yield R.json():E==="application/octet-stream"||E==="application/pdf"?G=yield R.blob():E==="text/event-stream"?G=R:E==="multipart/form-data"?G=yield R.formData():G=yield R.text(),{data:G,error:null,response:R}}catch(d){return{data:null,error:d,response:d instanceof P0||d instanceof L0?d.context:void 0}}finally{u&&clearTimeout(u)}})}}const j1=3,z0=n=>Math.min(1e3*2**n,3e4),vk=[520,503],C1=["GET","HEAD","OPTIONS"];var bk=class extends Error{constructor(n){super(n.message),this.name="PostgrestError",this.details=n.details,this.hint=n.hint,this.code=n.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function B0(n,e){return new Promise(s=>{if(e!=null&&e.aborted){s();return}const a=setTimeout(()=>{e==null||e.removeEventListener("abort",l),s()},n);function l(){clearTimeout(a),s()}e==null||e.addEventListener("abort",l)})}function wk(n,e,s,a){return!(!a||s>=j1||!C1.includes(n)||!vk.includes(e))}var xk=class{constructor(n){var e,s,a,l,u;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=n.method,this.url=n.url,this.headers=new Headers(n.headers),this.schema=n.schema,this.body=n.body,this.shouldThrowOnError=(e=n.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=n.signal,this.isMaybeSingle=(s=n.isMaybeSingle)!==null&&s!==void 0?s:!1,this.shouldStripNulls=(a=n.shouldStripNulls)!==null&&a!==void 0?a:!1,this.urlLengthLimit=(l=n.urlLengthLimit)!==null&&l!==void 0?l:8e3,this.retryEnabled=(u=n.retry)!==null&&u!==void 0?u:!0,n.fetch?this.fetch=n.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(n,e){return this.headers=new Headers(this.headers),this.headers.set(n,e),this}retry(n){return this.retryEnabled=n,this}then(n,e){var s=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const c=this.headers.get("Accept");c==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!c||c==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const a=this.fetch;let u=(async()=>{let c=0;for(;;){const p=new Headers(s.headers);c>0&&p.set("X-Retry-Count",String(c));let g;try{g=await a(s.url.toString(),{method:s.method,headers:p,body:JSON.stringify(s.body,(y,w)=>typeof w=="bigint"?w.toString():w),signal:s.signal})}catch(y){if((y==null?void 0:y.name)==="AbortError"||(y==null?void 0:y.code)==="ABORT_ERR"||!C1.includes(s.method))throw y;if(s.retryEnabled&&c<j1){const w=z0(c);c++,await B0(w,s.signal);continue}throw y}if(wk(s.method,g.status,c,s.retryEnabled)){var d,m;const y=(d=(m=g.headers)===null||m===void 0?void 0:m.get("Retry-After"))!==null&&d!==void 0?d:null,w=y!==null?Math.max(0,parseInt(y,10)||0)*1e3:z0(c);await g.text(),c++,await B0(w,s.signal);continue}return await s.processResponse(g)}})();return this.shouldThrowOnError||(u=u.catch(c=>{var d;let m="",p="",g="";const y=c==null?void 0:c.cause;if(y){var w,_,S,A;const L=(w=y==null?void 0:y.message)!==null&&w!==void 0?w:"",E=(_=y==null?void 0:y.code)!==null&&_!==void 0?_:"";m=`${(S=c==null?void 0:c.name)!==null&&S!==void 0?S:"FetchError"}: ${c==null?void 0:c.message}`,m+=`

Caused by: ${(A=y==null?void 0:y.name)!==null&&A!==void 0?A:"Error"}: ${L}`,E&&(m+=` (${E})`),y!=null&&y.stack&&(m+=`
${y.stack}`)}else{var k;m=(k=c==null?void 0:c.stack)!==null&&k!==void 0?k:""}const R=this.url.toString().length;return(c==null?void 0:c.name)==="AbortError"||(c==null?void 0:c.code)==="ABORT_ERR"?(g="",p="Request was aborted (timeout or manual cancellation)",R>this.urlLengthLimit&&(p+=`. Note: Your request URL is ${R} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((y==null?void 0:y.name)==="HeadersOverflowError"||(y==null?void 0:y.code)==="UND_ERR_HEADERS_OVERFLOW")&&(g="",p="HTTP headers exceeded server limits (typically 16KB)",R>this.urlLengthLimit&&(p+=`. Your request URL is ${R} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(d=c==null?void 0:c.name)!==null&&d!==void 0?d:"FetchError"}: ${c==null?void 0:c.message}`,details:m,hint:p,code:g},data:null,count:null,status:0,statusText:""}})),u.then(n,e)}async processResponse(n){var e=this;let s=null,a=null,l=null,u=n.status,c=n.statusText;if(n.ok){var d,m;if(e.method!=="HEAD"){var p;const w=await n.text();w===""||(e.headers.get("Accept")==="text/csv"||e.headers.get("Accept")&&(!((p=e.headers.get("Accept"))===null||p===void 0)&&p.includes("application/vnd.pgrst.plan+text"))?a=w:a=JSON.parse(w))}const g=(d=e.headers.get("Prefer"))===null||d===void 0?void 0:d.match(/count=(exact|planned|estimated)/),y=(m=n.headers.get("content-range"))===null||m===void 0?void 0:m.split("/");g&&y&&y.length>1&&(l=parseInt(y[1])),e.isMaybeSingle&&Array.isArray(a)&&(a.length>1?(s={code:"PGRST116",details:`Results contain ${a.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},a=null,l=null,u=406,c="Not Acceptable"):a.length===1?a=a[0]:a=null)}else{const g=await n.text();try{s=JSON.parse(g),Array.isArray(s)&&n.status===404&&(a=[],s=null,u=200,c="OK")}catch{n.status===404&&g===""?(u=204,c="No Content"):s={message:g}}if(s&&e.shouldThrowOnError)throw new bk(s)}return{success:s===null,error:s,data:a,count:l,status:u,statusText:c}}returns(){return this}overrideTypes(){return this}},_k=class extends xk{select(n){let e=!1;const s=(n??"*").split("").map(a=>/\s/.test(a)&&!e?"":(a==='"'&&(e=!e),a)).join("");return this.url.searchParams.set("select",s),this.headers.append("Prefer","return=representation"),this}order(n,{ascending:e=!0,nullsFirst:s,foreignTable:a,referencedTable:l=a}={}){const u=l?`${l}.order`:"order",c=this.url.searchParams.get(u);return this.url.searchParams.set(u,`${c?`${c},`:""}${n}.${e?"asc":"desc"}${s===void 0?"":s?".nullsfirst":".nullslast"}`),this}limit(n,{foreignTable:e,referencedTable:s=e}={}){const a=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(a,`${n}`),this}range(n,e,{foreignTable:s,referencedTable:a=s}={}){const l=typeof a>"u"?"offset":`${a}.offset`,u=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(l,`${n}`),this.url.searchParams.set(u,`${e-n+1}`),this}abortSignal(n){return this.signal=n,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:n=!1,verbose:e=!1,settings:s=!1,buffers:a=!1,wal:l=!1,format:u="text"}={}){var c;const d=[n?"analyze":null,e?"verbose":null,s?"settings":null,a?"buffers":null,l?"wal":null].filter(Boolean).join("|"),m=(c=this.headers.get("Accept"))!==null&&c!==void 0?c:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${u}; for="${m}"; options=${d};`),u==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(n){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${n}`),this}};const V0=new RegExp("[,()]");var _a=class extends _k{eq(n,e){return this.url.searchParams.append(n,`eq.${e}`),this}neq(n,e){return this.url.searchParams.append(n,`neq.${e}`),this}gt(n,e){return this.url.searchParams.append(n,`gt.${e}`),this}gte(n,e){return this.url.searchParams.append(n,`gte.${e}`),this}lt(n,e){return this.url.searchParams.append(n,`lt.${e}`),this}lte(n,e){return this.url.searchParams.append(n,`lte.${e}`),this}like(n,e){return this.url.searchParams.append(n,`like.${e}`),this}likeAllOf(n,e){return this.url.searchParams.append(n,`like(all).{${e.join(",")}}`),this}likeAnyOf(n,e){return this.url.searchParams.append(n,`like(any).{${e.join(",")}}`),this}ilike(n,e){return this.url.searchParams.append(n,`ilike.${e}`),this}ilikeAllOf(n,e){return this.url.searchParams.append(n,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(n,e){return this.url.searchParams.append(n,`ilike(any).{${e.join(",")}}`),this}regexMatch(n,e){return this.url.searchParams.append(n,`match.${e}`),this}regexIMatch(n,e){return this.url.searchParams.append(n,`imatch.${e}`),this}is(n,e){return this.url.searchParams.append(n,`is.${e}`),this}isDistinct(n,e){return this.url.searchParams.append(n,`isdistinct.${e}`),this}in(n,e){const s=Array.from(new Set(e)).map(a=>typeof a=="string"&&V0.test(a)?`"${a}"`:`${a}`).join(",");return this.url.searchParams.append(n,`in.(${s})`),this}notIn(n,e){const s=Array.from(new Set(e)).map(a=>typeof a=="string"&&V0.test(a)?`"${a}"`:`${a}`).join(",");return this.url.searchParams.append(n,`not.in.(${s})`),this}contains(n,e){return typeof e=="string"?this.url.searchParams.append(n,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(n,`cs.{${e.join(",")}}`):this.url.searchParams.append(n,`cs.${JSON.stringify(e)}`),this}containedBy(n,e){return typeof e=="string"?this.url.searchParams.append(n,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(n,`cd.{${e.join(",")}}`):this.url.searchParams.append(n,`cd.${JSON.stringify(e)}`),this}rangeGt(n,e){return this.url.searchParams.append(n,`sr.${e}`),this}rangeGte(n,e){return this.url.searchParams.append(n,`nxl.${e}`),this}rangeLt(n,e){return this.url.searchParams.append(n,`sl.${e}`),this}rangeLte(n,e){return this.url.searchParams.append(n,`nxr.${e}`),this}rangeAdjacent(n,e){return this.url.searchParams.append(n,`adj.${e}`),this}overlaps(n,e){return typeof e=="string"?this.url.searchParams.append(n,`ov.${e}`):this.url.searchParams.append(n,`ov.{${e.join(",")}}`),this}textSearch(n,e,{config:s,type:a}={}){let l="";a==="plain"?l="pl":a==="phrase"?l="ph":a==="websearch"&&(l="w");const u=s===void 0?"":`(${s})`;return this.url.searchParams.append(n,`${l}fts${u}.${e}`),this}match(n){return Object.entries(n).filter(([e,s])=>s!==void 0).forEach(([e,s])=>{this.url.searchParams.append(e,`eq.${s}`)}),this}not(n,e,s){return this.url.searchParams.append(n,`not.${e}.${s}`),this}or(n,{foreignTable:e,referencedTable:s=e}={}){const a=s?`${s}.or`:"or";return this.url.searchParams.append(a,`(${n})`),this}filter(n,e,s){return this.url.searchParams.append(n,`${e}.${s}`),this}},Sk=class{constructor(n,{headers:e={},schema:s,fetch:a,urlLengthLimit:l=8e3,retry:u}){this.url=n,this.headers=new Headers(e),this.schema=s,this.fetch=a,this.urlLengthLimit=l,this.retry=u}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(n,e){const{head:s=!1,count:a}=e??{},l=s?"HEAD":"GET";let u=!1;const c=(n??"*").split("").map(p=>/\s/.test(p)&&!u?"":(p==='"'&&(u=!u),p)).join(""),{url:d,headers:m}=this.cloneRequestState();return d.searchParams.set("select",c),a&&m.append("Prefer",`count=${a}`),new _a({method:l,url:d,headers:m,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(n,{count:e,defaultToNull:s=!0}={}){var a;const l="POST",{url:u,headers:c}=this.cloneRequestState();if(e&&c.append("Prefer",`count=${e}`),s||c.append("Prefer","missing=default"),Array.isArray(n)){const d=n.reduce((m,p)=>m.concat(Object.keys(p)),[]);if(d.length>0){const m=[...new Set(d)].map(p=>`"${p}"`);u.searchParams.set("columns",m.join(","))}}return new _a({method:l,url:u,headers:c,schema:this.schema,body:n,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(n,{onConflict:e,ignoreDuplicates:s=!1,count:a,defaultToNull:l=!0}={}){var u;const c="POST",{url:d,headers:m}=this.cloneRequestState();if(m.append("Prefer",`resolution=${s?"ignore":"merge"}-duplicates`),e!==void 0&&d.searchParams.set("on_conflict",e),a&&m.append("Prefer",`count=${a}`),l||m.append("Prefer","missing=default"),Array.isArray(n)){const p=n.reduce((g,y)=>g.concat(Object.keys(y)),[]);if(p.length>0){const g=[...new Set(p)].map(y=>`"${y}"`);d.searchParams.set("columns",g.join(","))}}return new _a({method:c,url:d,headers:m,schema:this.schema,body:n,fetch:(u=this.fetch)!==null&&u!==void 0?u:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(n,{count:e}={}){var s;const a="PATCH",{url:l,headers:u}=this.cloneRequestState();return e&&u.append("Prefer",`count=${e}`),new _a({method:a,url:l,headers:u,schema:this.schema,body:n,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:n}={}){var e;const s="DELETE",{url:a,headers:l}=this.cloneRequestState();return n&&l.append("Prefer",`count=${n}`),new _a({method:s,url:a,headers:l,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function ho(n){"@babel/helpers - typeof";return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ho(n)}function Tk(n,e){if(ho(n)!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var a=s.call(n,e);if(ho(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Ek(n){var e=Tk(n,"string");return ho(e)=="symbol"?e:e+""}function Ak(n,e,s){return(e=Ek(e))in n?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s,n}function H0(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),s.push.apply(s,a)}return s}function Zl(n){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?H0(Object(s),!0).forEach(function(a){Ak(n,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):H0(Object(s)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))})}return n}var jk=class R1{constructor(e,{headers:s={},schema:a,fetch:l,timeout:u,urlLengthLimit:c=8e3,retry:d}={}){this.url=e,this.headers=new Headers(s),this.schemaName=a,this.urlLengthLimit=c;const m=l??globalThis.fetch;u!==void 0&&u>0?this.fetch=(p,g)=>{const y=new AbortController,w=setTimeout(()=>y.abort(),u),_=g==null?void 0:g.signal;if(_){if(_.aborted)return clearTimeout(w),m(p,g);const S=()=>{clearTimeout(w),y.abort()};return _.addEventListener("abort",S,{once:!0}),m(p,Zl(Zl({},g),{},{signal:y.signal})).finally(()=>{clearTimeout(w),_.removeEventListener("abort",S)})}return m(p,Zl(Zl({},g),{},{signal:y.signal})).finally(()=>clearTimeout(w))}:this.fetch=m,this.retry=d}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new Sk(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new R1(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,s={},{head:a=!1,get:l=!1,count:u}={}){var c;let d;const m=new URL(`${this.url}/rpc/${e}`);let p;const g=_=>_!==null&&typeof _=="object"&&(!Array.isArray(_)||_.some(g)),y=a&&Object.values(s).some(g);y?(d="POST",p=s):a||l?(d=a?"HEAD":"GET",Object.entries(s).filter(([_,S])=>S!==void 0).map(([_,S])=>[_,Array.isArray(S)?`{${S.join(",")}}`:`${S}`]).forEach(([_,S])=>{m.searchParams.append(_,S)})):(d="POST",p=s);const w=new Headers(this.headers);return y?w.set("Prefer",u?`count=${u},return=minimal`:"return=minimal"):u&&w.set("Prefer",`count=${u}`),new _a({method:d,url:m,headers:w,schema:this.schemaName,body:p,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class Ck{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const s=globalThis;if(typeof globalThis<"u"&&typeof s.WebSocket<"u")return{type:"native",wsConstructor:s.WebSocket};const a=typeof global<"u"?global:void 0;if(a&&typeof a.WebSocket<"u")return{type:"native",wsConstructor:a.WebSocket};if(typeof globalThis<"u"&&typeof s.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&s.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const l=globalThis.process;if(l){const u=l.versions;if(u&&u.node){const c=u.node,d=parseInt(c.replace(/^v/,"").split(".")[0]);return d>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${d} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${d} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let s=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(s+=`

Suggested solution: ${e.workaround}`),new Error(s)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const Rk="2.105.4",kk=`realtime-js/${Rk}`,Ok="1.0.0",k1="2.0.0",Nk=k1,Dk=1e4,Mk=100,Ii={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},O1={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},rf={connecting:"connecting",closing:"closing",closed:"closed"};class Uk{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,s){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return s(this._binaryEncodeUserBroadcastPush(e));let a=[e.join_ref,e.ref,e.topic,e.event,e.payload];return s(JSON.stringify(a))}_binaryEncodeUserBroadcastPush(e){var s;return this._isArrayBuffer((s=e.payload)===null||s===void 0?void 0:s.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var s,a;const l=(a=(s=e.payload)===null||s===void 0?void 0:s.payload)!==null&&a!==void 0?a:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,l)}_encodeJsonUserBroadcastPush(e){var s,a;const l=(a=(s=e.payload)===null||s===void 0?void 0:s.payload)!==null&&a!==void 0?a:{},c=new TextEncoder().encode(JSON.stringify(l)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,c)}_encodeUserBroadcastPush(e,s,a){var l,u;const c=e.topic,d=(l=e.ref)!==null&&l!==void 0?l:"",m=(u=e.join_ref)!==null&&u!==void 0?u:"",p=e.payload.event,g=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},y=Object.keys(g).length===0?"":JSON.stringify(g);if(m.length>255)throw new Error(`joinRef length ${m.length} exceeds maximum of 255`);if(d.length>255)throw new Error(`ref length ${d.length} exceeds maximum of 255`);if(c.length>255)throw new Error(`topic length ${c.length} exceeds maximum of 255`);if(p.length>255)throw new Error(`userEvent length ${p.length} exceeds maximum of 255`);if(y.length>255)throw new Error(`metadata length ${y.length} exceeds maximum of 255`);const w=this.USER_BROADCAST_PUSH_META_LENGTH+m.length+d.length+c.length+p.length+y.length,_=new ArrayBuffer(this.HEADER_LENGTH+w);let S=new DataView(_),A=0;S.setUint8(A++,this.KINDS.userBroadcastPush),S.setUint8(A++,m.length),S.setUint8(A++,d.length),S.setUint8(A++,c.length),S.setUint8(A++,p.length),S.setUint8(A++,y.length),S.setUint8(A++,s),Array.from(m,R=>S.setUint8(A++,R.charCodeAt(0))),Array.from(d,R=>S.setUint8(A++,R.charCodeAt(0))),Array.from(c,R=>S.setUint8(A++,R.charCodeAt(0))),Array.from(p,R=>S.setUint8(A++,R.charCodeAt(0))),Array.from(y,R=>S.setUint8(A++,R.charCodeAt(0)));var k=new Uint8Array(_.byteLength+a.byteLength);return k.set(new Uint8Array(_),0),k.set(new Uint8Array(a),_.byteLength),k.buffer}decode(e,s){if(this._isArrayBuffer(e)){let a=this._binaryDecode(e);return s(a)}if(typeof e=="string"){const a=JSON.parse(e),[l,u,c,d,m]=a;return s({join_ref:l,ref:u,topic:c,event:d,payload:m})}return s({})}_binaryDecode(e){const s=new DataView(e),a=s.getUint8(0),l=new TextDecoder;switch(a){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,s,l)}}_decodeUserBroadcast(e,s,a){const l=s.getUint8(1),u=s.getUint8(2),c=s.getUint8(3),d=s.getUint8(4);let m=this.HEADER_LENGTH+4;const p=a.decode(e.slice(m,m+l));m=m+l;const g=a.decode(e.slice(m,m+u));m=m+u;const y=a.decode(e.slice(m,m+c));m=m+c;const w=e.slice(m,e.byteLength),_=d===this.JSON_ENCODING?JSON.parse(a.decode(w)):w,S={type:this.BROADCAST_EVENT,event:g,payload:_};return c>0&&(S.meta=JSON.parse(y)),{join_ref:null,ref:null,topic:p,event:this.BROADCAST_EVENT,payload:S}}_isArrayBuffer(e){var s;return e instanceof ArrayBuffer||((s=e==null?void 0:e.constructor)===null||s===void 0?void 0:s.name)==="ArrayBuffer"}_pick(e,s){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([a])=>s.includes(a)))}}var qe;(function(n){n.abstime="abstime",n.bool="bool",n.date="date",n.daterange="daterange",n.float4="float4",n.float8="float8",n.int2="int2",n.int4="int4",n.int4range="int4range",n.int8="int8",n.int8range="int8range",n.json="json",n.jsonb="jsonb",n.money="money",n.numeric="numeric",n.oid="oid",n.reltime="reltime",n.text="text",n.time="time",n.timestamp="timestamp",n.timestamptz="timestamptz",n.timetz="timetz",n.tsrange="tsrange",n.tstzrange="tstzrange"})(qe||(qe={}));const $0=(n,e,s={})=>{var a;const l=(a=s.skipTypes)!==null&&a!==void 0?a:[];return e?Object.keys(e).reduce((u,c)=>(u[c]=Lk(c,n,e,l),u),{}):{}},Lk=(n,e,s,a)=>{const l=e.find(d=>d.name===n),u=l==null?void 0:l.type,c=s[n];return u&&!a.includes(u)?N1(u,c):of(c)},N1=(n,e)=>{if(n.charAt(0)==="_"){const s=n.slice(1,n.length);return Vk(e,s)}switch(n){case qe.bool:return Pk(e);case qe.float4:case qe.float8:case qe.int2:case qe.int4:case qe.int8:case qe.numeric:case qe.oid:return zk(e);case qe.json:case qe.jsonb:return Bk(e);case qe.timestamp:return Hk(e);case qe.abstime:case qe.date:case qe.daterange:case qe.int4range:case qe.int8range:case qe.money:case qe.reltime:case qe.text:case qe.time:case qe.timestamptz:case qe.timetz:case qe.tsrange:case qe.tstzrange:return of(e);default:return of(e)}},of=n=>n,Pk=n=>{switch(n){case"t":return!0;case"f":return!1;default:return n}},zk=n=>{if(typeof n=="string"){const e=parseFloat(n);if(!Number.isNaN(e))return e}return n},Bk=n=>{if(typeof n=="string")try{return JSON.parse(n)}catch{return n}return n},Vk=(n,e)=>{if(typeof n!="string")return n;const s=n.length-1,a=n[s];if(n[0]==="{"&&a==="}"){let u;const c=n.slice(1,s);try{u=JSON.parse("["+c+"]")}catch{u=c?c.split(","):[]}return u.map(d=>N1(e,d))}return n},Hk=n=>typeof n=="string"?n.replace(" ","T"):n,D1=n=>{const e=new URL(n);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Wr=n=>typeof n=="function"?n:function(){return n},$k=typeof self<"u"?self:null,Sa=typeof window<"u"?window:null,Vn=$k||Sa||globalThis,qk="2.0.0",Ik=1e4,Gk=1e3,Hn={connecting:0,open:1,closing:2,closed:3},Yt={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},hi={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},lf={longpoll:"longpoll",websocket:"websocket"},Kk={complete:4},uf="base64url.bearer.phx.",Ql=class{constructor(n,e,s,a){this.channel=n,this.event=e,this.payload=s||function(){return{}},this.receivedResp=null,this.timeout=a,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(n){this.timeout=n,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(n,e){return this.hasReceived(n)&&e(this.receivedResp.response),this.recHooks.push({status:n,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:n,response:e,_ref:s}){this.recHooks.filter(a=>a.status===n).forEach(a=>a.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,n=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=n,this.matchReceive(n)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(n){return this.receivedResp&&this.receivedResp.status===n}trigger(n,e){this.channel.trigger(this.refEvent,{status:n,response:e})}},M1=class{constructor(n,e){this.callback=n,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},Yk=class{constructor(n,e,s){this.state=Yt.closed,this.topic=n,this.params=Wr(e||{}),this.socket=s,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Ql(this,hi.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new M1(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=Yt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(a=>a.send()),this.pushBuffer=[]}),this.joinPush.receive("error",a=>{this.state=Yt.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,a),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=Yt.closed,this.socket.remove(this)}),this.onError(a=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,a),this.isJoining()&&this.joinPush.reset(),this.state=Yt.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Ql(this,hi.leave,Wr({}),this.timeout).send(),this.state=Yt.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(hi.reply,(a,l)=>{this.trigger(this.replyEventName(l),a)})}join(n=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=n,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(n=>n.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Yt.closed,this.bindings=[]}onClose(n){this.on(hi.close,n)}onError(n){return this.on(hi.error,e=>n(e))}on(n,e){let s=this.bindingRef++;return this.bindings.push({event:n,ref:s,callback:e}),s}off(n,e){this.bindings=this.bindings.filter(s=>!(s.event===n&&(typeof e>"u"||e===s.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(n,e,s=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${n}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let a=new Ql(this,n,function(){return e},s);return this.canPush()?a.send():(a.startTimeout(),this.pushBuffer.push(a)),a}leave(n=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Yt.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(hi.close,"leave")},s=new Ql(this,hi.leave,Wr({}),n);return s.receive("ok",()=>e()).receive("timeout",()=>e()),s.send(),this.canPush()||s.trigger("ok",{}),s}onMessage(n,e,s){return e}filterBindings(n,e,s){return!0}isMember(n,e,s,a){return this.topic!==n?!1:a&&a!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:n,event:e,payload:s,joinRef:a}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(n=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Yt.joining,this.joinPush.resend(n))}trigger(n,e,s,a){let l=this.onMessage(n,e,s,a);if(e&&!l)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let u=this.bindings.filter(c=>c.event===n&&this.filterBindings(c,e,s));for(let c=0;c<u.length;c++)u[c].callback(l,s,a||this.joinRef())}replyEventName(n){return`chan_reply_${n}`}isClosed(){return this.state===Yt.closed}isErrored(){return this.state===Yt.errored}isJoined(){return this.state===Yt.joined}isJoining(){return this.state===Yt.joining}isLeaving(){return this.state===Yt.leaving}},ju=class{static request(n,e,s,a,l,u,c){if(Vn.XDomainRequest){let d=new Vn.XDomainRequest;return this.xdomainRequest(d,n,e,a,l,u,c)}else if(Vn.XMLHttpRequest){let d=new Vn.XMLHttpRequest;return this.xhrRequest(d,n,e,s,a,l,u,c)}else{if(Vn.fetch&&Vn.AbortController)return this.fetchRequest(n,e,s,a,l,u,c);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(n,e,s,a,l,u,c){let d={method:n,headers:s,body:a},m=null;return l&&(m=new AbortController,setTimeout(()=>m.abort(),l),d.signal=m.signal),Vn.fetch(e,d).then(p=>p.text()).then(p=>this.parseJSON(p)).then(p=>c&&c(p)).catch(p=>{p.name==="AbortError"&&u?u():c&&c(null)}),m}static xdomainRequest(n,e,s,a,l,u,c){return n.timeout=l,n.open(e,s),n.onload=()=>{let d=this.parseJSON(n.responseText);c&&c(d)},u&&(n.ontimeout=u),n.onprogress=()=>{},n.send(a),n}static xhrRequest(n,e,s,a,l,u,c,d){n.open(e,s,!0),n.timeout=u;for(let[m,p]of Object.entries(a))n.setRequestHeader(m,p);return n.onerror=()=>d&&d(null),n.onreadystatechange=()=>{if(n.readyState===Kk.complete&&d){let m=this.parseJSON(n.responseText);d(m)}},c&&(n.ontimeout=c),n.send(l),n}static parseJSON(n){if(!n||n==="")return null;try{return JSON.parse(n)}catch{return console&&console.log("failed to parse JSON response",n),null}}static serialize(n,e){let s=[];for(var a in n){if(!Object.prototype.hasOwnProperty.call(n,a))continue;let l=e?`${e}[${a}]`:a,u=n[a];typeof u=="object"?s.push(this.serialize(u,l)):s.push(encodeURIComponent(l)+"="+encodeURIComponent(u))}return s.join("&")}static appendParams(n,e){if(Object.keys(e).length===0)return n;let s=n.match(/\?/)?"&":"?";return`${n}${s}${this.serialize(e)}`}},Fk=n=>{let e="",s=new Uint8Array(n),a=s.byteLength;for(let l=0;l<a;l++)e+=String.fromCharCode(s[l]);return btoa(e)},ga=class{constructor(n,e){e&&e.length===2&&e[1].startsWith(uf)&&(this.authToken=atob(e[1].slice(uf.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(n),this.readyState=Hn.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(n){return n.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+lf.websocket),"$1/"+lf.longpoll)}endpointURL(){return ju.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(n,e,s){this.close(n,e,s),this.readyState=Hn.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===Hn.open||this.readyState===Hn.connecting}poll(){const n={Accept:"application/json"};this.authToken&&(n["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",n,null,()=>this.ontimeout(),e=>{if(e){var{status:s,token:a,messages:l}=e;if(s===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=a}else s=0;switch(s){case 200:l.forEach(u=>{setTimeout(()=>this.onmessage({data:u}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Hn.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${s}`)}})}send(n){typeof n!="string"&&(n=Fk(n)),this.currentBatch?this.currentBatch.push(n):this.awaitingBatchAck?this.batchBuffer.push(n):(this.currentBatch=[n],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(n){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},n.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(n,e,s){for(let l of this.reqs)l.abort();this.readyState=Hn.closed;let a=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:n,reason:e,wasClean:s});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",a)):this.onclose(a)}ajax(n,e,s,a,l){let u,c=()=>{this.reqs.delete(u),a()};u=ju.request(n,this.endpointURL(),e,s,this.timeout,c,d=>{this.reqs.delete(u),this.isActive()&&l(d)}),this.reqs.add(u)}},Xk=class Gr{constructor(e,s={}){let a=s.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(a.state,l=>{let{onJoin:u,onLeave:c,onSync:d}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Gr.syncState(this.state,l,u,c),this.pendingDiffs.forEach(m=>{this.state=Gr.syncDiff(this.state,m,u,c)}),this.pendingDiffs=[],d()}),this.channel.on(a.diff,l=>{let{onJoin:u,onLeave:c,onSync:d}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(l):(this.state=Gr.syncDiff(this.state,l,u,c),d())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Gr.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,s,a,l){let u=this.clone(e),c={},d={};return this.map(u,(m,p)=>{s[m]||(d[m]=p)}),this.map(s,(m,p)=>{let g=u[m];if(g){let y=p.metas.map(A=>A.phx_ref),w=g.metas.map(A=>A.phx_ref),_=p.metas.filter(A=>w.indexOf(A.phx_ref)<0),S=g.metas.filter(A=>y.indexOf(A.phx_ref)<0);_.length>0&&(c[m]=p,c[m].metas=_),S.length>0&&(d[m]=this.clone(g),d[m].metas=S)}else c[m]=p}),this.syncDiff(u,{joins:c,leaves:d},a,l)}static syncDiff(e,s,a,l){let{joins:u,leaves:c}=this.clone(s);return a||(a=function(){}),l||(l=function(){}),this.map(u,(d,m)=>{let p=e[d];if(e[d]=this.clone(m),p){let g=e[d].metas.map(w=>w.phx_ref),y=p.metas.filter(w=>g.indexOf(w.phx_ref)<0);e[d].metas.unshift(...y)}a(d,p,m)}),this.map(c,(d,m)=>{let p=e[d];if(!p)return;let g=m.metas.map(y=>y.phx_ref);p.metas=p.metas.filter(y=>g.indexOf(y.phx_ref)<0),l(d,p,m),p.metas.length===0&&delete e[d]}),e}static list(e,s){return s||(s=function(a,l){return l}),this.map(e,(a,l)=>s(a,l))}static map(e,s){return Object.getOwnPropertyNames(e).map(a=>s(a,e[a]))}static clone(e){return JSON.parse(JSON.stringify(e))}},Wl={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(n,e){if(n.payload.constructor===ArrayBuffer)return e(this.binaryEncode(n));{let s=[n.join_ref,n.ref,n.topic,n.event,n.payload];return e(JSON.stringify(s))}},decode(n,e){if(n.constructor===ArrayBuffer)return e(this.binaryDecode(n));{let[s,a,l,u,c]=JSON.parse(n);return e({join_ref:s,ref:a,topic:l,event:u,payload:c})}},binaryEncode(n){let{join_ref:e,ref:s,event:a,topic:l,payload:u}=n,c=this.META_LENGTH+e.length+s.length+l.length+a.length,d=new ArrayBuffer(this.HEADER_LENGTH+c),m=new DataView(d),p=0;m.setUint8(p++,this.KINDS.push),m.setUint8(p++,e.length),m.setUint8(p++,s.length),m.setUint8(p++,l.length),m.setUint8(p++,a.length),Array.from(e,y=>m.setUint8(p++,y.charCodeAt(0))),Array.from(s,y=>m.setUint8(p++,y.charCodeAt(0))),Array.from(l,y=>m.setUint8(p++,y.charCodeAt(0))),Array.from(a,y=>m.setUint8(p++,y.charCodeAt(0)));var g=new Uint8Array(d.byteLength+u.byteLength);return g.set(new Uint8Array(d),0),g.set(new Uint8Array(u),d.byteLength),g.buffer},binaryDecode(n){let e=new DataView(n),s=e.getUint8(0),a=new TextDecoder;switch(s){case this.KINDS.push:return this.decodePush(n,e,a);case this.KINDS.reply:return this.decodeReply(n,e,a);case this.KINDS.broadcast:return this.decodeBroadcast(n,e,a)}},decodePush(n,e,s){let a=e.getUint8(1),l=e.getUint8(2),u=e.getUint8(3),c=this.HEADER_LENGTH+this.META_LENGTH-1,d=s.decode(n.slice(c,c+a));c=c+a;let m=s.decode(n.slice(c,c+l));c=c+l;let p=s.decode(n.slice(c,c+u));c=c+u;let g=n.slice(c,n.byteLength);return{join_ref:d,ref:null,topic:m,event:p,payload:g}},decodeReply(n,e,s){let a=e.getUint8(1),l=e.getUint8(2),u=e.getUint8(3),c=e.getUint8(4),d=this.HEADER_LENGTH+this.META_LENGTH,m=s.decode(n.slice(d,d+a));d=d+a;let p=s.decode(n.slice(d,d+l));d=d+l;let g=s.decode(n.slice(d,d+u));d=d+u;let y=s.decode(n.slice(d,d+c));d=d+c;let w=n.slice(d,n.byteLength),_={status:y,response:w};return{join_ref:m,ref:p,topic:g,event:hi.reply,payload:_}},decodeBroadcast(n,e,s){let a=e.getUint8(1),l=e.getUint8(2),u=this.HEADER_LENGTH+2,c=s.decode(n.slice(u,u+a));u=u+a;let d=s.decode(n.slice(u,u+l));u=u+l;let m=n.slice(u,n.byteLength);return{join_ref:null,ref:null,topic:c,event:d,payload:m}}},Jk=class{constructor(n,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||Ik,this.transport=e.transport||Vn.WebSocket||ga,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let s=null;try{s=Vn&&Vn.sessionStorage}catch{}this.sessionStore=e.sessionStorage||s,this.establishedConnections=0,this.defaultEncoder=Wl.encode.bind(Wl),this.defaultDecoder=Wl.decode.bind(Wl),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==ga?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let a=null;Sa&&Sa.addEventListener&&(Sa.addEventListener("pagehide",l=>{this.conn&&(this.disconnect(),a=this.connectClock)}),Sa.addEventListener("pageshow",l=>{a===this.connectClock&&(a=null,this.connect())}),Sa.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=l=>e.rejoinAfterMs?e.rejoinAfterMs(l):[1e3,2e3,5e3][l-1]||1e4,this.reconnectAfterMs=l=>e.reconnectAfterMs?e.reconnectAfterMs(l):[10,50,100,150,200,250,500,1e3,2e3][l-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(l,u,c)=>{console.log(`${l}: ${u}`,c)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Wr(e.params||{}),this.endPoint=`${n}/${lf.websocket}`,this.vsn=e.vsn||qk,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new M1(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return ga}replaceTransport(n){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=n}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let n=ju.appendParams(ju.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return n.charAt(0)!=="/"?n:n.charAt(1)==="/"?`${this.protocol()}:${n}`:`${this.protocol()}://${location.host}${n}`}disconnect(n,e,s){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,n&&n()},e,s)}connect(n){n&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Wr(n)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==ga?this.connectWithFallback(ga,this.longPollFallbackMs):this.transportConnect())}log(n,e,s){this.logger&&this.logger(n,e,s)}hasLogger(){return this.logger!==null}onOpen(n){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,n]),e}onClose(n){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,n]),e}onError(n){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,n]),e}onMessage(n){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,n]),e}onHeartbeat(n){this.heartbeatCallback=n}ping(n){if(!this.isConnected())return!1;let e=this.makeRef(),s=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let a=this.onMessage(l=>{l.ref===e&&(this.off([a]),n(Date.now()-s))});return!0}transportName(n){switch(n){case ga:return"LongPoll";default:return n.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let n;this.authToken&&(n=["phoenix",`${uf}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),n),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(n){return this.sessionStore&&this.sessionStore.getItem(n)}storeSession(n,e){this.sessionStore&&this.sessionStore.setItem(n,e)}connectWithFallback(n,e=2500){clearTimeout(this.fallbackTimer);let s=!1,a=!0,l,u,c=this.transportName(n),d=m=>{this.log("transport",`falling back to ${c}...`,m),this.off([l,u]),a=!1,this.replaceTransport(n),this.transportConnect()};if(this.getSession(`phx:fallback:${c}`))return d("memorized");this.fallbackTimer=setTimeout(d,e),u=this.onError(m=>{this.log("transport","error",m),a&&!s&&(clearTimeout(this.fallbackTimer),d(m))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(s=!0,!a){let m=this.transportName(n);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${m}`,"true"),this.log("transport",`established ${m} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(d,e),this.ping(m=>{this.log("transport","connected to primary after",m),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(n){this.log("error","error in heartbeat callback",n)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Gk,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(n,e,s){if(!this.conn)return n&&n();const a=this.conn;this.waitForBufferDone(a,()=>{e?a.close(e,s||""):a.close(),this.waitForSocketClosed(a,()=>{this.conn===a&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),n&&n()})})}waitForBufferDone(n,e,s=1){if(s===5||!n.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(n,e,s+1)},150*s)}waitForSocketClosed(n,e,s=1){if(s===5||n.readyState===Hn.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(n,e,s+1)},150*s)}onConnClose(n){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",n),this.triggerChanError(n),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",n)}onConnError(n){this.hasLogger()&&this.log("transport","error",n);let e=this.transport,s=this.establishedConnections;this.triggerStateCallbacks("error",n,e,s),(e===this.transport||s>0)&&this.triggerChanError(n)}triggerChanError(n){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(hi.error,n)})}connectionState(){switch(this.conn&&this.conn.readyState){case Hn.connecting:return"connecting";case Hn.open:return"open";case Hn.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(n){this.off(n.stateChangeRefs),this.channels=this.channels.filter(e=>e!==n)}off(n){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([s])=>n.indexOf(s)===-1)}channel(n,e={}){let s=new Yk(n,e,this);return this.channels.push(s),s}push(n){if(this.hasLogger()){let{topic:e,event:s,payload:a,ref:l,join_ref:u}=n;this.log("push",`${e} ${s} (${u}, ${l})`,a)}this.isConnected()?this.encode(n,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(n,e=>this.conn.send(e)))}makeRef(){let n=this.ref+1;return n===this.ref?this.ref=0:this.ref=n,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(n){this.log("error","error in heartbeat callback",n)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(n){this.log("error","error in heartbeat callback",n)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(n=>n()),this.sendBuffer=[])}onConnMessage(n){this.decode(n.data,e=>{let{topic:s,event:a,payload:l,ref:u,join_ref:c}=e;if(u&&u===this.pendingHeartbeatRef){const d=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(l.status==="ok"?"ok":"error",d)}catch(m){this.log("error","error in heartbeat callback",m)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${l.status||""} ${s} ${a} ${u&&"("+u+")"||""}`.trim(),l);for(let d=0;d<this.channels.length;d++){const m=this.channels[d];m.isMember(s,a,l,c)&&m.trigger(a,l,u,c)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(n,...e){try{this.stateChangeCallbacks[n].forEach(([s,a])=>{try{a(...e)}catch(l){this.log("error",`error in ${n} callback`,l)}})}catch(s){this.log("error",`error triggering ${n} callbacks`,s)}}leaveOpenTopic(n){let e=this.channels.find(s=>s.topic===n&&(s.isJoined()||s.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${n}"`),e.leave())}};class eo{constructor(e,s){const a=Qk(s);this.presence=new Xk(e.getChannel(),a),this.presence.onJoin((l,u,c)=>{const d=eo.onJoinPayload(l,u,c);e.getChannel().trigger("presence",d)}),this.presence.onLeave((l,u,c)=>{const d=eo.onLeavePayload(l,u,c);e.getChannel().trigger("presence",d)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return eo.transformState(this.presence.state)}static transformState(e){return e=Zk(e),Object.getOwnPropertyNames(e).reduce((s,a)=>{const l=e[a];return s[a]=yu(l),s},{})}static onJoinPayload(e,s,a){const l=q0(s),u=yu(a);return{event:"join",key:e,currentPresences:l,newPresences:u}}static onLeavePayload(e,s,a){const l=q0(s),u=yu(a);return{event:"leave",key:e,currentPresences:l,leftPresences:u}}}function yu(n){return n.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function Zk(n){return JSON.parse(JSON.stringify(n))}function Qk(n){return(n==null?void 0:n.events)&&{events:n.events}}function q0(n){return n!=null&&n.metas?yu(n):[]}var I0;(function(n){n.SYNC="sync",n.JOIN="join",n.LEAVE="leave"})(I0||(I0={}));class Wk{get state(){return this.presenceAdapter.state}constructor(e,s){this.channel=e,this.presenceAdapter=new eo(this.channel.channelAdapter,s)}}function eO(n){if(n instanceof Error)return n;if(typeof n=="string")return new Error(n);if(n&&typeof n=="object"){const e=n;if(typeof e.code=="number"){const s=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${s}`,{cause:n})}return new Error("channel error: transport failure",{cause:n})}return new Error("channel error: connection lost")}class tO{constructor(e,s,a){const l=nO(a);this.channel=e.getSocket().channel(s,l),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,s){return this.channel.on(e,s)}off(e,s){this.channel.off(e,s)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,s,a){let l;try{l=this.channel.push(e,s,a)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>Mk){const u=this.channel.pushBuffer.shift();u.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${u.event}`,u.payload())}return l}updateJoinPayload(e){const s=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},s),e)}canPush(){return this.socket.isConnected()&&this.state===Ii.joined}isJoined(){return this.state===Ii.joined}isJoining(){return this.state===Ii.joining}isClosed(){return this.state===Ii.closed}isLeaving(){return this.state===Ii.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function nO(n){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},n.config)}}var G0;(function(n){n.ALL="*",n.INSERT="INSERT",n.UPDATE="UPDATE",n.DELETE="DELETE"})(G0||(G0={}));var Oa;(function(n){n.BROADCAST="broadcast",n.PRESENCE="presence",n.POSTGRES_CHANGES="postgres_changes",n.SYSTEM="system"})(Oa||(Oa={}));var di;(function(n){n.SUBSCRIBED="SUBSCRIBED",n.TIMED_OUT="TIMED_OUT",n.CLOSED="CLOSED",n.CHANNEL_ERROR="CHANNEL_ERROR"})(di||(di={}));class to{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,s={config:{}},a){var l,u;if(this.topic=e,this.params=s,this.socket=a,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},s.config),this.channelAdapter=new tO(this.socket.socketAdapter,e,this.params),this.presence=new Wk(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=D1(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((u=(l=this.params.config)===null||l===void 0?void 0:l.broadcast)===null||u===void 0)&&u.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,s=this.timeout){var a,l,u;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:c,presence:d,private:m}}=this.params,p=(l=(a=this.bindings.postgres_changes)===null||a===void 0?void 0:a.map(_=>_.filter))!==null&&l!==void 0?l:[],g=!!this.bindings[Oa.PRESENCE]&&this.bindings[Oa.PRESENCE].length>0||((u=this.params.config.presence)===null||u===void 0?void 0:u.enabled)===!0,y={},w={broadcast:c,presence:Object.assign(Object.assign({},d),{enabled:g}),postgres_changes:p,private:m};this.socket.accessTokenValue&&(y.access_token=this.socket.accessTokenValue),this._onError(_=>{e==null||e(di.CHANNEL_ERROR,eO(_))}),this._onClose(()=>e==null?void 0:e(di.CLOSED)),this.updateJoinPayload(Object.assign({config:w},y)),this._updateFilterMessage(),this.channelAdapter.subscribe(s).receive("ok",async({postgres_changes:_})=>{if(this.socket._isManualToken()||this.socket.setAuth(),_===void 0){e==null||e(di.SUBSCRIBED);return}this._updatePostgresBindings(_,e)}).receive("error",_=>{this.state=Ii.errored;const S=Object.values(_).join(", ")||"error";e==null||e(di.CHANNEL_ERROR,new Error(S,{cause:_}))}).receive("timeout",()=>{e==null||e(di.TIMED_OUT)})}return this}_updatePostgresBindings(e,s){var a;const l=this.bindings.postgres_changes,u=(a=l==null?void 0:l.length)!==null&&a!==void 0?a:0,c=[];for(let d=0;d<u;d++){const m=l[d],{filter:{event:p,schema:g,table:y,filter:w}}=m,_=e&&e[d];if(_&&_.event===p&&to.isFilterValueEqual(_.schema,g)&&to.isFilterValueEqual(_.table,y)&&to.isFilterValueEqual(_.filter,w))c.push(Object.assign(Object.assign({},m),{id:_.id}));else{this.unsubscribe(),this.state=Ii.errored,s==null||s(di.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=c,this.state!=Ii.errored&&s&&s(di.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,s={}){return await this.send({type:"presence",event:"track",payload:e},s.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,s,a){const l=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),u=e===Oa.PRESENCE||e===Oa.POSTGRES_CHANGES;if(l&&u)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,s,a)}async httpSend(e,s,a={}){var l;if(s==null)return Promise.reject(new Error("Payload is required for httpSend()"));const u={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(u.Authorization=`Bearer ${this.socket.accessTokenValue}`);const c={method:"POST",headers:u,body:JSON.stringify({messages:[{topic:this.subTopic,event:e,payload:s,private:this.private}]})},d=await this._fetchWithTimeout(this.broadcastEndpointURL,c,(l=a.timeout)!==null&&l!==void 0?l:this.timeout);if(d.status===202)return{success:!0};let m=d.statusText;try{const p=await d.json();m=p.error||p.message||m}catch{}return Promise.reject(new Error(m))}async send(e,s={}){var a,l;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:u,payload:c}=e,d={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(d.Authorization=`Bearer ${this.socket.accessTokenValue}`);const m={method:"POST",headers:d,body:JSON.stringify({messages:[{topic:this.subTopic,event:u,payload:c,private:this.private}]})};try{const p=await this._fetchWithTimeout(this.broadcastEndpointURL,m,(a=s.timeout)!==null&&a!==void 0?a:this.timeout);return await((l=p.body)===null||l===void 0?void 0:l.cancel()),p.ok?"ok":"error"}catch(p){return p instanceof Error&&p.name==="AbortError"?"timed out":"error"}}else return new Promise(u=>{var c,d,m;const p=this.channelAdapter.push(e.type,e,s.timeout||this.timeout);e.type==="broadcast"&&!(!((m=(d=(c=this.params)===null||c===void 0?void 0:c.config)===null||d===void 0?void 0:d.broadcast)===null||m===void 0)&&m.ack)&&u("ok"),p.receive("ok",()=>u("ok")),p.receive("error",()=>u("error")),p.receive("timeout",()=>u("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(s=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>s("ok")).receive("timeout",()=>s("timed out")).receive("error",()=>s("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,s,a){const l=new AbortController,u=setTimeout(()=>l.abort(),a),c=await this.socket.fetch(e,Object.assign(Object.assign({},s),{signal:l.signal}));return clearTimeout(u),c}_on(e,s,a){const l=e.toLocaleLowerCase(),u=this.channelAdapter.on(e,a),c={type:l,filter:s,callback:a,ref:u};return this.bindings[l]?this.bindings[l].push(c):this.bindings[l]=[c],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,s,a)=>{var l,u,c,d,m,p,g;const y=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(y,a))return!1;const w=(l=this.bindings[y])===null||l===void 0?void 0:l.find(_=>_.ref===e.ref);if(!w)return!0;if(["broadcast","presence","postgres_changes"].includes(y))if("id"in w){const _=w.id,S=(u=w.filter)===null||u===void 0?void 0:u.event;return _&&((c=s.ids)===null||c===void 0?void 0:c.includes(_))&&(S==="*"||(S==null?void 0:S.toLocaleLowerCase())===((d=s.data)===null||d===void 0?void 0:d.type.toLocaleLowerCase()))}else{const _=(p=(m=w==null?void 0:w.filter)===null||m===void 0?void 0:m.event)===null||p===void 0?void 0:p.toLocaleLowerCase();return _==="*"||_===((g=s==null?void 0:s.event)===null||g===void 0?void 0:g.toLocaleLowerCase())}else return w.type.toLocaleLowerCase()===y})}_notThisChannelEvent(e,s){const{close:a,error:l,leave:u,join:c}=O1;return s&&[a,l,u,c].includes(e)&&s!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,s,a)=>{if(typeof s=="object"&&"ids"in s){const l=s.data,{schema:u,table:c,commit_timestamp:d,type:m,errors:p}=l;return Object.assign(Object.assign({},{schema:u,table:c,commit_timestamp:d,eventType:m,new:{},old:{},errors:p}),this._getPayloadRecords(l))}return s})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const s in e.bindings)for(const a of e.bindings[s])this._on(a.type,a.filter,a.callback)}static isFilterValueEqual(e,s){return(e??void 0)===(s??void 0)}_getPayloadRecords(e){const s={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(s.new=$0(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(s.old=$0(e.columns,e.old_record)),s}}class iO{constructor(e,s){this.socket=new Jk(e,s)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,s,a,l=1e4){return new Promise(u=>{setTimeout(()=>u("timeout"),l),this.socket.disconnect(()=>{e(),u("ok")},s,a)})}push(e){this.socket.push(e)}log(e,s,a){this.socket.log(e,s,a)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==rf.connecting}isDisconnecting(){return this.socket.connectionState()==rf.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const K0={HEARTBEAT_INTERVAL:25e3},sO=[1e3,2e3,5e3,1e4],aO=1e4;function rO(){const n=new Map;return{get length(){return n.size},clear(){n.clear()},getItem(e){return n.has(e)?n.get(e):null},key(e){var s;return(s=Array.from(n.keys())[e])!==null&&s!==void 0?s:null},removeItem(e){n.delete(e)},setItem(e,s){n.set(e,String(s))}}}function oO(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return rO()}const lO=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class uO{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,s){var a;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new Uk,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=u=>u?(...c)=>u(...c):(...c)=>fetch(...c),!(!((a=s==null?void 0:s.params)===null||a===void 0)&&a.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=s.params.apikey;const l=this._initializeOptions(s);this.socketAdapter=new iO(e,l),this.httpEndpoint=D1(e),this.fetch=this._resolveFetch(s==null?void 0:s.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const s=e.message;throw s.includes("Node.js")?new Error(`${s}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${s}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,s){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,s)}getChannels(){return this.channels}async removeChannel(e){const s=await e.unsubscribe();return s==="ok"&&e.teardown(),s}async removeAllChannels(){const e=this.channels.map(async a=>{const l=await a.unsubscribe();return a.teardown(),l}),s=await Promise.all(e);return await this.disconnect(),s}log(e,s,a){this.socketAdapter.log(e,s,a)}connectionState(){return this.socketAdapter.connectionState()||rf.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,s={config:{}}){const a=`realtime:${e}`,l=this.getChannels().find(u=>u.topic===a);if(l)return l;{const u=new to(`realtime:${e}`,s,this);return this._cancelPendingDisconnect(),this.channels.push(u),u}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(s=>s.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let s,a=!1;if(e)s=e,a=!0;else if(this.accessToken)try{s=await this.accessToken()}catch(l){this.log("error","Error fetching access token from callback",l),s=this.accessTokenValue}else s=this.accessTokenValue;a?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=s&&(this.accessTokenValue=s,this.channels.forEach(l=>{const u={access_token:s,version:kk};s&&l.updateJoinPayload(u),l.joinedOnce&&l.channelAdapter.isJoined()&&l.channelAdapter.push(O1.access_token,{access_token:s})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(s=>{this.log("error",`Error setting auth in ${e}`,s)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(s=>{this.log("error","error waiting for auth on connect",s)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(s,a)=>{s=="sent"&&this._setAuthSafely(),e&&e(s,a)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=s=>{this.log("worker","worker error",s.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=s=>{s.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let s;if(e)s=e;else{const a=new Blob([lO],{type:"application/javascript"});s=URL.createObjectURL(a)}return s}_initializeOptions(e){var s,a,l,u,c,d,m,p,g,y,w,_;this.worker=(s=e==null?void 0:e.worker)!==null&&s!==void 0?s:!1,this.accessToken=(a=e==null?void 0:e.accessToken)!==null&&a!==void 0?a:null;const S={};S.timeout=(l=e==null?void 0:e.timeout)!==null&&l!==void 0?l:Dk,S.heartbeatIntervalMs=(u=e==null?void 0:e.heartbeatIntervalMs)!==null&&u!==void 0?u:K0.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(c=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&c!==void 0?c:2*((d=e==null?void 0:e.heartbeatIntervalMs)!==null&&d!==void 0?d:K0.HEARTBEAT_INTERVAL),S.transport=(m=e==null?void 0:e.transport)!==null&&m!==void 0?m:Ck.getWebSocketConstructor(),S.params=e==null?void 0:e.params,S.logger=e==null?void 0:e.logger,S.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),S.sessionStorage=(p=e==null?void 0:e.sessionStorage)!==null&&p!==void 0?p:oO(),S.reconnectAfterMs=(g=e==null?void 0:e.reconnectAfterMs)!==null&&g!==void 0?g:(L=>sO[L-1]||aO);let A,k;const R=(y=e==null?void 0:e.vsn)!==null&&y!==void 0?y:Nk;switch(R){case Ok:A=(L,E)=>E(JSON.stringify(L)),k=(L,E)=>E(JSON.parse(L));break;case k1:A=this.serializer.encode.bind(this.serializer),k=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${S.vsn}`)}if(S.vsn=R,S.encode=(w=e==null?void 0:e.encode)!==null&&w!==void 0?w:A,S.decode=(_=e==null?void 0:e.decode)!==null&&_!==void 0?_:k,S.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,S.params=Object.assign(Object.assign({},S.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,S.autoSendHeartbeat=!this.worker}return S}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var fo=class extends Error{constructor(n,e){var s;super(n),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((s=e.icebergType)==null?void 0:s.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function cO(n,e,s){const a=new URL(e,n);if(s)for(const[l,u]of Object.entries(s))u!==void 0&&a.searchParams.set(l,u);return a.toString()}async function hO(n){return!n||n.type==="none"?{}:n.type==="bearer"?{Authorization:`Bearer ${n.token}`}:n.type==="header"?{[n.name]:n.value}:n.type==="custom"?await n.getHeaders():{}}function dO(n){const e=n.fetchImpl??globalThis.fetch;return{async request({method:s,path:a,query:l,body:u,headers:c}){const d=cO(n.baseUrl,a,l),m=await hO(n.auth),p=await e(d,{method:s,headers:{...u?{"Content-Type":"application/json"}:{},...m,...c},body:u?JSON.stringify(u):void 0}),g=await p.text(),y=(p.headers.get("content-type")||"").includes("application/json"),w=y&&g?JSON.parse(g):g;if(!p.ok){const _=y?w:void 0,S=_==null?void 0:_.error;throw new fo((S==null?void 0:S.message)??`Request failed with status ${p.status}`,{status:p.status,icebergType:S==null?void 0:S.type,icebergCode:S==null?void 0:S.code,details:_})}return{status:p.status,headers:p.headers,data:w}}}}function eu(n){return n.join("")}var fO=class{constructor(n,e=""){this.client=n,this.prefix=e}async listNamespaces(n){const e=n?{parent:eu(n.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(a=>({namespace:a}))}async createNamespace(n,e){const s={namespace:n.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:s})).data}async dropNamespace(n){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${eu(n.namespace)}`})}async loadNamespaceMetadata(n){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${eu(n.namespace)}`})).data.properties}}async namespaceExists(n){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${eu(n.namespace)}`}),!0}catch(e){if(e instanceof fo&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(n,e){try{return await this.createNamespace(n,e)}catch(s){if(s instanceof fo&&s.status===409)return;throw s}}};function ya(n){return n.join("")}var mO=class{constructor(n,e="",s){this.client=n,this.prefix=e,this.accessDelegation=s}async listTables(n){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ya(n.namespace)}/tables`})).data.identifiers}async createTable(n,e){const s={};return this.accessDelegation&&(s["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${ya(n.namespace)}/tables`,body:e,headers:s})).data.metadata}async updateTable(n,e){const s=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${ya(n.namespace)}/tables/${n.name}`,body:e});return{"metadata-location":s.data["metadata-location"],metadata:s.data.metadata}}async dropTable(n,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${ya(n.namespace)}/tables/${n.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(n){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ya(n.namespace)}/tables/${n.name}`,headers:e})).data.metadata}async tableExists(n){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${ya(n.namespace)}/tables/${n.name}`,headers:e}),!0}catch(s){if(s instanceof fo&&s.status===404)return!1;throw s}}async createTableIfNotExists(n,e){try{return await this.createTable(n,e)}catch(s){if(s instanceof fo&&s.status===409)return await this.loadTable({namespace:n.namespace,name:e.name});throw s}}},pO=class{constructor(n){var a;let e="v1";n.catalogName&&(e+=`/${n.catalogName}`);const s=n.baseUrl.endsWith("/")?n.baseUrl:`${n.baseUrl}/`;this.client=dO({baseUrl:s,auth:n.auth,fetchImpl:n.fetch}),this.accessDelegation=(a=n.accessDelegation)==null?void 0:a.join(","),this.namespaceOps=new fO(this.client,e),this.tableOps=new mO(this.client,e,this.accessDelegation)}async listNamespaces(n){return this.namespaceOps.listNamespaces(n)}async createNamespace(n,e){return this.namespaceOps.createNamespace(n,e)}async dropNamespace(n){await this.namespaceOps.dropNamespace(n)}async loadNamespaceMetadata(n){return this.namespaceOps.loadNamespaceMetadata(n)}async listTables(n){return this.tableOps.listTables(n)}async createTable(n,e){return this.tableOps.createTable(n,e)}async updateTable(n,e){return this.tableOps.updateTable(n,e)}async dropTable(n,e){await this.tableOps.dropTable(n,e)}async loadTable(n){return this.tableOps.loadTable(n)}async namespaceExists(n){return this.namespaceOps.namespaceExists(n)}async tableExists(n){return this.tableOps.tableExists(n)}async createNamespaceIfNotExists(n,e){return this.namespaceOps.createNamespaceIfNotExists(n,e)}async createTableIfNotExists(n,e){return this.tableOps.createTableIfNotExists(n,e)}};function mo(n){"@babel/helpers - typeof";return mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mo(n)}function gO(n,e){if(mo(n)!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var a=s.call(n,e);if(mo(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function yO(n){var e=gO(n,"string");return mo(e)=="symbol"?e:e+""}function vO(n,e,s){return(e=yO(e))in n?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s,n}function Y0(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),s.push.apply(s,a)}return s}function he(n){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Y0(Object(s),!0).forEach(function(a){vO(n,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):Y0(Object(s)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))})}return n}var Hu=class extends Error{constructor(n,e="storage",s,a){super(n),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=s,this.statusCode=a}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function $u(n){return typeof n=="object"&&n!==null&&"__isStorageError"in n}var cf=class extends Hu{constructor(n,e,s,a="storage"){super(n,a,e,s),this.name=a==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=s}toJSON(){return he({},super.toJSON())}},U1=class extends Hu{constructor(n,e,s="storage"){super(n,s),this.name=s==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function Cu(n,e,s){const a=he({},n),l=e.toLowerCase();for(const u of Object.keys(a))u.toLowerCase()===l&&delete a[u];return a[l]=s,a}function bO(n){const e={};for(const[s,a]of Object.entries(n))e[s.toLowerCase()]=a;return e}const wO=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),xO=n=>{if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},hf=n=>{if(Array.isArray(n))return n.map(s=>hf(s));if(typeof n=="function"||n!==Object(n))return n;const e={};return Object.entries(n).forEach(([s,a])=>{const l=s.replace(/([-_][a-z])/gi,u=>u.toUpperCase().replace(/[-_]/g,""));e[l]=hf(a)}),e},_O=n=>!n||typeof n!="string"||n.length===0||n.length>100||n.trim()!==n||n.includes("/")||n.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(n),F0=n=>{if(typeof n=="object"&&n!==null){const e=n;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const s=e.error;if(typeof s.message=="string")return s.message}}return JSON.stringify(n)},SO=async(n,e,s,a)=>{if(n!==null&&typeof n=="object"&&"json"in n&&typeof n.json=="function"){const l=n;let u=parseInt(String(l.status),10);Number.isFinite(u)||(u=500),l.json().then(c=>{const d=(c==null?void 0:c.statusCode)||(c==null?void 0:c.code)||u+"";e(new cf(F0(c),u,d,a))}).catch(()=>{const c=u+"";e(new cf(l.statusText||`HTTP ${u} error`,u,c,a))})}else e(new U1(F0(n),n,a))},TO=(n,e,s,a)=>{const l={method:n,headers:(e==null?void 0:e.headers)||{}};if(n==="GET"||n==="HEAD"||!a)return he(he({},l),s);if(xO(a)){var u;const c=(e==null?void 0:e.headers)||{};let d;for(const[m,p]of Object.entries(c))m.toLowerCase()==="content-type"&&(d=p);l.headers=Cu(c,"Content-Type",(u=d)!==null&&u!==void 0?u:"application/json"),l.body=JSON.stringify(a)}else l.body=a;return e!=null&&e.duplex&&(l.duplex=e.duplex),he(he({},l),s)};async function $r(n,e,s,a,l,u,c){return new Promise((d,m)=>{n(s,TO(e,a,l,u)).then(p=>{if(!p.ok)throw p;if(a!=null&&a.noResolveJson)return p;if(c==="vectors"){const g=p.headers.get("content-type");if(p.headers.get("content-length")==="0"||p.status===204)return{};if(!g||!g.includes("application/json"))return{}}return p.json()}).then(p=>d(p)).catch(p=>SO(p,m,a,c))})}function L1(n="storage"){return{get:async(e,s,a,l)=>$r(e,"GET",s,a,l,void 0,n),post:async(e,s,a,l,u)=>$r(e,"POST",s,l,u,a,n),put:async(e,s,a,l,u)=>$r(e,"PUT",s,l,u,a,n),head:async(e,s,a,l)=>$r(e,"HEAD",s,he(he({},a),{},{noResolveJson:!0}),l,void 0,n),remove:async(e,s,a,l,u)=>$r(e,"DELETE",s,l,u,a,n)}}const EO=L1("storage"),{get:po,post:Nn,put:df,head:AO,remove:rm}=EO,sn=L1("vectors");var Va=class{constructor(n,e={},s,a="storage"){this.shouldThrowOnError=!1,this.url=n,this.headers=bO(e),this.fetch=wO(s),this.namespace=a}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(n,e){return this.headers=Cu(this.headers,n,e),this}async handleOperation(n){var e=this;try{return{data:await n(),error:null}}catch(s){if(e.shouldThrowOnError)throw s;if($u(s))return{data:null,error:s};throw s}}},jO=class{constructor(n,e){this.downloadFn=n,this.shouldThrowOnError=e}then(n,e){return this.execute().then(n,e)}async execute(){var n=this;try{return{data:(await n.downloadFn()).body,error:null}}catch(e){if(n.shouldThrowOnError)throw e;if($u(e))return{data:null,error:e};throw e}}};let P1;P1=Symbol.toStringTag;var CO=class{constructor(n,e){this.downloadFn=n,this.shouldThrowOnError=e,this[P1]="BlobDownloadBuilder",this.promise=null}asStream(){return new jO(this.downloadFn,this.shouldThrowOnError)}then(n,e){return this.getPromise().then(n,e)}catch(n){return this.getPromise().catch(n)}finally(n){return this.getPromise().finally(n)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var n=this;try{return{data:await(await n.downloadFn()).blob(),error:null}}catch(e){if(n.shouldThrowOnError)throw e;if($u(e))return{data:null,error:e};throw e}}};const RO={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},X0={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var kO=class extends Va{constructor(n,e={},s,a){super(n,e,a,"storage"),this.bucketId=s}async uploadOrUpdate(n,e,s,a){var l=this;return l.handleOperation(async()=>{let u;const c=he(he({},X0),a);let d=he(he({},l.headers),n==="POST"&&{"x-upsert":String(c.upsert)});const m=c.metadata;if(typeof Blob<"u"&&s instanceof Blob?(u=new FormData,u.append("cacheControl",c.cacheControl),m&&u.append("metadata",l.encodeMetadata(m)),u.append("",s)):typeof FormData<"u"&&s instanceof FormData?(u=s,u.has("cacheControl")||u.append("cacheControl",c.cacheControl),m&&!u.has("metadata")&&u.append("metadata",l.encodeMetadata(m))):(u=s,d["cache-control"]=`max-age=${c.cacheControl}`,d["content-type"]=c.contentType,m&&(d["x-metadata"]=l.toBase64(l.encodeMetadata(m))),(typeof ReadableStream<"u"&&u instanceof ReadableStream||u&&typeof u=="object"&&"pipe"in u&&typeof u.pipe=="function")&&!c.duplex&&(c.duplex="half")),a!=null&&a.headers)for(const[w,_]of Object.entries(a.headers))d=Cu(d,w,_);const p=l._removeEmptyFolders(e),g=l._getFinalPath(p),y=await(n=="PUT"?df:Nn)(l.fetch,`${l.url}/object/${g}`,u,he({headers:d},c!=null&&c.duplex?{duplex:c.duplex}:{}));return{path:p,id:y.Id,fullPath:y.Key}})}async upload(n,e,s){return this.uploadOrUpdate("POST",n,e,s)}async uploadToSignedUrl(n,e,s,a){var l=this;const u=l._removeEmptyFolders(n),c=l._getFinalPath(u),d=new URL(l.url+`/object/upload/sign/${c}`);return d.searchParams.set("token",e),l.handleOperation(async()=>{let m;const p=he(he({},X0),a);let g=he(he({},l.headers),{"x-upsert":String(p.upsert)});const y=p.metadata;if(typeof Blob<"u"&&s instanceof Blob?(m=new FormData,m.append("cacheControl",p.cacheControl),y&&m.append("metadata",l.encodeMetadata(y)),m.append("",s)):typeof FormData<"u"&&s instanceof FormData?(m=s,m.has("cacheControl")||m.append("cacheControl",p.cacheControl),y&&!m.has("metadata")&&m.append("metadata",l.encodeMetadata(y))):(m=s,g["cache-control"]=`max-age=${p.cacheControl}`,g["content-type"]=p.contentType,y&&(g["x-metadata"]=l.toBase64(l.encodeMetadata(y))),(typeof ReadableStream<"u"&&m instanceof ReadableStream||m&&typeof m=="object"&&"pipe"in m&&typeof m.pipe=="function")&&!p.duplex&&(p.duplex="half")),a!=null&&a.headers)for(const[w,_]of Object.entries(a.headers))g=Cu(g,w,_);return{path:u,fullPath:(await df(l.fetch,d.toString(),m,he({headers:g},p!=null&&p.duplex?{duplex:p.duplex}:{}))).Key}})}async createSignedUploadUrl(n,e){var s=this;return s.handleOperation(async()=>{let a=s._getFinalPath(n);const l=he({},s.headers);e!=null&&e.upsert&&(l["x-upsert"]="true");const u=await Nn(s.fetch,`${s.url}/object/upload/sign/${a}`,{},{headers:l}),c=new URL(s.url+u.url),d=c.searchParams.get("token");if(!d)throw new Hu("No token returned by API");return{signedUrl:c.toString(),path:n,token:d}})}async update(n,e,s){return this.uploadOrUpdate("PUT",n,e,s)}async move(n,e,s){var a=this;return a.handleOperation(async()=>await Nn(a.fetch,`${a.url}/object/move`,{bucketId:a.bucketId,sourceKey:n,destinationKey:e,destinationBucket:s==null?void 0:s.destinationBucket},{headers:a.headers}))}async copy(n,e,s){var a=this;return a.handleOperation(async()=>({path:(await Nn(a.fetch,`${a.url}/object/copy`,{bucketId:a.bucketId,sourceKey:n,destinationKey:e,destinationBucket:s==null?void 0:s.destinationBucket},{headers:a.headers})).Key}))}async createSignedUrl(n,e,s){var a=this;return a.handleOperation(async()=>{let l=a._getFinalPath(n);const u=typeof(s==null?void 0:s.transform)=="object"&&s.transform!==null&&Object.keys(s.transform).length>0;let c=await Nn(a.fetch,`${a.url}/object/sign/${l}`,he({expiresIn:e},u?{transform:s.transform}:{}),{headers:a.headers});const d=new URLSearchParams;s!=null&&s.download&&d.set("download",s.download===!0?"":s.download),(s==null?void 0:s.cacheNonce)!=null&&d.set("cacheNonce",String(s.cacheNonce));const m=d.toString();return{signedUrl:encodeURI(`${a.url}${c.signedURL}${m?`&${m}`:""}`)}})}async createSignedUrls(n,e,s){var a=this;return a.handleOperation(async()=>{const l=await Nn(a.fetch,`${a.url}/object/sign/${a.bucketId}`,{expiresIn:e,paths:n},{headers:a.headers}),u=new URLSearchParams;s!=null&&s.download&&u.set("download",s.download===!0?"":s.download),(s==null?void 0:s.cacheNonce)!=null&&u.set("cacheNonce",String(s.cacheNonce));const c=u.toString();return l.map(d=>he(he({},d),{},{signedUrl:d.signedURL?encodeURI(`${a.url}${d.signedURL}${c?`&${c}`:""}`):null}))})}download(n,e,s){const a=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",l=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(l,e.transform),(e==null?void 0:e.cacheNonce)!=null&&l.set("cacheNonce",String(e.cacheNonce));const u=l.toString(),c=this._getFinalPath(n),d=()=>po(this.fetch,`${this.url}/${a}/${c}${u?`?${u}`:""}`,{headers:this.headers,noResolveJson:!0},s);return new CO(d,this.shouldThrowOnError)}async info(n){var e=this;const s=e._getFinalPath(n);return e.handleOperation(async()=>hf(await po(e.fetch,`${e.url}/object/info/${s}`,{headers:e.headers})))}async exists(n){var e=this;const s=e._getFinalPath(n);try{return await AO(e.fetch,`${e.url}/object/${s}`,{headers:e.headers}),{data:!0,error:null}}catch(l){if(e.shouldThrowOnError)throw l;if($u(l)){var a;const u=l instanceof cf?l.status:l instanceof U1?(a=l.originalError)===null||a===void 0?void 0:a.status:void 0;if(u!==void 0&&[400,404].includes(u))return{data:!1,error:l}}throw l}}getPublicUrl(n,e){const s=this._getFinalPath(n),a=new URLSearchParams;e!=null&&e.download&&a.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(a,e.transform),(e==null?void 0:e.cacheNonce)!=null&&a.set("cacheNonce",String(e.cacheNonce));const l=a.toString(),u=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${u}/public/${s}`)+(l?`?${l}`:"")}}}async remove(n){var e=this;return e.handleOperation(async()=>await rm(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:n},{headers:e.headers}))}async list(n,e,s){var a=this;return a.handleOperation(async()=>{const l=he(he(he({},RO),e),{},{prefix:n||""});return await Nn(a.fetch,`${a.url}/object/list/${a.bucketId}`,l,{headers:a.headers},s)})}async listV2(n,e){var s=this;return s.handleOperation(async()=>{const a=he({},n);return await Nn(s.fetch,`${s.url}/object/list-v2/${s.bucketId}`,a,{headers:s.headers},e)})}encodeMetadata(n){return JSON.stringify(n)}toBase64(n){return typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n)}_getFinalPath(n){return`${this.bucketId}/${n.replace(/^\/+/,"")}`}_removeEmptyFolders(n){return n.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(n,e){return e.width&&n.set("width",e.width.toString()),e.height&&n.set("height",e.height.toString()),e.resize&&n.set("resize",e.resize),e.format&&n.set("format",e.format),e.quality&&n.set("quality",e.quality.toString()),n}};const OO="2.105.4",Ao={"X-Client-Info":`storage-js/${OO}`};var NO=class extends Va{constructor(n,e={},s,a){const l=new URL(n);a!=null&&a.useNewHostname&&/supabase\.(co|in|red)$/.test(l.hostname)&&!l.hostname.includes("storage.supabase.")&&(l.hostname=l.hostname.replace("supabase.","storage.supabase."));const u=l.href.replace(/\/$/,""),c=he(he({},Ao),e);super(u,c,s,"storage")}async listBuckets(n){var e=this;return e.handleOperation(async()=>{const s=e.listBucketOptionsToQueryString(n);return await po(e.fetch,`${e.url}/bucket${s}`,{headers:e.headers})})}async getBucket(n){var e=this;return e.handleOperation(async()=>await po(e.fetch,`${e.url}/bucket/${n}`,{headers:e.headers}))}async createBucket(n,e={public:!1}){var s=this;return s.handleOperation(async()=>await Nn(s.fetch,`${s.url}/bucket`,{id:n,name:n,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:s.headers}))}async updateBucket(n,e){var s=this;return s.handleOperation(async()=>await df(s.fetch,`${s.url}/bucket/${n}`,{id:n,name:n,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:s.headers}))}async emptyBucket(n){var e=this;return e.handleOperation(async()=>await Nn(e.fetch,`${e.url}/bucket/${n}/empty`,{},{headers:e.headers}))}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await rm(e.fetch,`${e.url}/bucket/${n}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(n){const e={};return n&&("limit"in n&&(e.limit=String(n.limit)),"offset"in n&&(e.offset=String(n.offset)),n.search&&(e.search=n.search),n.sortColumn&&(e.sortColumn=n.sortColumn),n.sortOrder&&(e.sortOrder=n.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},DO=class extends Va{constructor(n,e={},s){const a=n.replace(/\/$/,""),l=he(he({},Ao),e);super(a,l,s,"storage")}async createBucket(n){var e=this;return e.handleOperation(async()=>await Nn(e.fetch,`${e.url}/bucket`,{name:n},{headers:e.headers}))}async listBuckets(n){var e=this;return e.handleOperation(async()=>{const s=new URLSearchParams;(n==null?void 0:n.limit)!==void 0&&s.set("limit",n.limit.toString()),(n==null?void 0:n.offset)!==void 0&&s.set("offset",n.offset.toString()),n!=null&&n.sortColumn&&s.set("sortColumn",n.sortColumn),n!=null&&n.sortOrder&&s.set("sortOrder",n.sortOrder),n!=null&&n.search&&s.set("search",n.search);const a=s.toString(),l=a?`${e.url}/bucket?${a}`:`${e.url}/bucket`;return await po(e.fetch,l,{headers:e.headers})})}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await rm(e.fetch,`${e.url}/bucket/${n}`,{},{headers:e.headers}))}from(n){var e=this;if(!_O(n))throw new Hu("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const s=new pO({baseUrl:this.url,catalogName:n,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),a=this.shouldThrowOnError;return new Proxy(s,{get(l,u){const c=l[u];return typeof c!="function"?c:async(...d)=>{try{return{data:await c.apply(l,d),error:null}}catch(m){if(a)throw m;return{data:null,error:m}}}}})}},MO=class extends Va{constructor(n,e={},s){const a=n.replace(/\/$/,""),l=he(he({},Ao),{},{"Content-Type":"application/json"},e);super(a,l,s,"vectors")}async createIndex(n){var e=this;return e.handleOperation(async()=>await sn.post(e.fetch,`${e.url}/CreateIndex`,n,{headers:e.headers})||{})}async getIndex(n,e){var s=this;return s.handleOperation(async()=>await sn.post(s.fetch,`${s.url}/GetIndex`,{vectorBucketName:n,indexName:e},{headers:s.headers}))}async listIndexes(n){var e=this;return e.handleOperation(async()=>await sn.post(e.fetch,`${e.url}/ListIndexes`,n,{headers:e.headers}))}async deleteIndex(n,e){var s=this;return s.handleOperation(async()=>await sn.post(s.fetch,`${s.url}/DeleteIndex`,{vectorBucketName:n,indexName:e},{headers:s.headers})||{})}},UO=class extends Va{constructor(n,e={},s){const a=n.replace(/\/$/,""),l=he(he({},Ao),{},{"Content-Type":"application/json"},e);super(a,l,s,"vectors")}async putVectors(n){var e=this;if(n.vectors.length<1||n.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await sn.post(e.fetch,`${e.url}/PutVectors`,n,{headers:e.headers})||{})}async getVectors(n){var e=this;return e.handleOperation(async()=>await sn.post(e.fetch,`${e.url}/GetVectors`,n,{headers:e.headers}))}async listVectors(n){var e=this;if(n.segmentCount!==void 0){if(n.segmentCount<1||n.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(n.segmentIndex!==void 0&&(n.segmentIndex<0||n.segmentIndex>=n.segmentCount))throw new Error(`segmentIndex must be between 0 and ${n.segmentCount-1}`)}return e.handleOperation(async()=>await sn.post(e.fetch,`${e.url}/ListVectors`,n,{headers:e.headers}))}async queryVectors(n){var e=this;return e.handleOperation(async()=>await sn.post(e.fetch,`${e.url}/QueryVectors`,n,{headers:e.headers}))}async deleteVectors(n){var e=this;if(n.keys.length<1||n.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await sn.post(e.fetch,`${e.url}/DeleteVectors`,n,{headers:e.headers})||{})}},LO=class extends Va{constructor(n,e={},s){const a=n.replace(/\/$/,""),l=he(he({},Ao),{},{"Content-Type":"application/json"},e);super(a,l,s,"vectors")}async createBucket(n){var e=this;return e.handleOperation(async()=>await sn.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:n},{headers:e.headers})||{})}async getBucket(n){var e=this;return e.handleOperation(async()=>await sn.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:n},{headers:e.headers}))}async listBuckets(n={}){var e=this;return e.handleOperation(async()=>await sn.post(e.fetch,`${e.url}/ListVectorBuckets`,n,{headers:e.headers}))}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await sn.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:n},{headers:e.headers})||{})}},PO=class extends LO{constructor(n,e={}){super(n,e.headers||{},e.fetch)}from(n){return new zO(this.url,this.headers,n,this.fetch)}async createBucket(n){var e=()=>super.createBucket,s=this;return e().call(s,n)}async getBucket(n){var e=()=>super.getBucket,s=this;return e().call(s,n)}async listBuckets(n={}){var e=()=>super.listBuckets,s=this;return e().call(s,n)}async deleteBucket(n){var e=()=>super.deleteBucket,s=this;return e().call(s,n)}},zO=class extends MO{constructor(n,e,s,a){super(n,e,a),this.vectorBucketName=s}async createIndex(n){var e=()=>super.createIndex,s=this;return e().call(s,he(he({},n),{},{vectorBucketName:s.vectorBucketName}))}async listIndexes(n={}){var e=()=>super.listIndexes,s=this;return e().call(s,he(he({},n),{},{vectorBucketName:s.vectorBucketName}))}async getIndex(n){var e=()=>super.getIndex,s=this;return e().call(s,s.vectorBucketName,n)}async deleteIndex(n){var e=()=>super.deleteIndex,s=this;return e().call(s,s.vectorBucketName,n)}index(n){return new BO(this.url,this.headers,this.vectorBucketName,n,this.fetch)}},BO=class extends UO{constructor(n,e,s,a,l){super(n,e,l),this.vectorBucketName=s,this.indexName=a}async putVectors(n){var e=()=>super.putVectors,s=this;return e().call(s,he(he({},n),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async getVectors(n){var e=()=>super.getVectors,s=this;return e().call(s,he(he({},n),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async listVectors(n={}){var e=()=>super.listVectors,s=this;return e().call(s,he(he({},n),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async queryVectors(n){var e=()=>super.queryVectors,s=this;return e().call(s,he(he({},n),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async deleteVectors(n){var e=()=>super.deleteVectors,s=this;return e().call(s,he(he({},n),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}},VO=class extends NO{constructor(n,e={},s,a){super(n,e,s,a)}from(n){return new kO(this.url,this.headers,n,this.fetch)}get vectors(){return new PO(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new DO(this.url+"/iceberg",this.headers,this.fetch)}};const z1="2.105.4",Ta=30*1e3,ff=3,Rd=ff*Ta,HO="http://localhost:9999",$O="supabase.auth.token",qO={"X-Client-Info":`gotrue-js/${z1}`},mf="X-Supabase-Api-Version",B1={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},IO=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,GO=600*1e3;class go extends Error{constructor(e,s,a){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=s,this.code=a}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function W(n){return typeof n=="object"&&n!==null&&"__isAuthError"in n}class KO extends go{constructor(e,s,a){super(e,s,a),this.name="AuthApiError",this.status=s,this.code=a}}function YO(n){return W(n)&&n.name==="AuthApiError"}class Dn extends go{constructor(e,s){super(e),this.name="AuthUnknownError",this.originalError=s}}class vi extends go{constructor(e,s,a,l){super(e,a,l),this.name=s,this.status=a}}class vt extends vi{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function tu(n){return W(n)&&n.name==="AuthSessionMissingError"}class va extends vi{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class nu extends vi{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class iu extends vi{constructor(e,s=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=s}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function FO(n){return W(n)&&n.name==="AuthImplicitGrantRedirectError"}class J0 extends vi{constructor(e,s=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=s}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class XO extends vi{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class pf extends vi{constructor(e,s){super(e,"AuthRetryableFetchError",s,void 0)}}function kd(n){return W(n)&&n.name==="AuthRetryableFetchError"}class Z0 extends vi{constructor(e,s,a){super(e,"AuthWeakPasswordError",s,"weak_password"),this.reasons=a}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class gf extends vi{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const Ru="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Q0=` 	
\r=`.split(""),JO=(()=>{const n=new Array(128);for(let e=0;e<n.length;e+=1)n[e]=-1;for(let e=0;e<Q0.length;e+=1)n[Q0[e].charCodeAt(0)]=-2;for(let e=0;e<Ru.length;e+=1)n[Ru[e].charCodeAt(0)]=e;return n})();function W0(n,e,s){if(n!==null)for(e.queue=e.queue<<8|n,e.queuedBits+=8;e.queuedBits>=6;){const a=e.queue>>e.queuedBits-6&63;s(Ru[a]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const a=e.queue>>e.queuedBits-6&63;s(Ru[a]),e.queuedBits-=6}}function V1(n,e,s){const a=JO[n];if(a>-1)for(e.queue=e.queue<<6|a,e.queuedBits+=6;e.queuedBits>=8;)s(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(a===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`)}}function eb(n){const e=[],s=c=>{e.push(String.fromCodePoint(c))},a={utf8seq:0,codepoint:0},l={queue:0,queuedBits:0},u=c=>{WO(c,a,s)};for(let c=0;c<n.length;c+=1)V1(n.charCodeAt(c),l,u);return e.join("")}function ZO(n,e){if(n<=127){e(n);return}else if(n<=2047){e(192|n>>6),e(128|n&63);return}else if(n<=65535){e(224|n>>12),e(128|n>>6&63),e(128|n&63);return}else if(n<=1114111){e(240|n>>18),e(128|n>>12&63),e(128|n>>6&63),e(128|n&63);return}throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`)}function QO(n,e){for(let s=0;s<n.length;s+=1){let a=n.charCodeAt(s);if(a>55295&&a<=56319){const l=(a-55296)*1024&65535;a=(n.charCodeAt(s+1)-56320&65535|l)+65536,s+=1}ZO(a,e)}}function WO(n,e,s){if(e.utf8seq===0){if(n<=127){s(n);return}for(let a=1;a<6;a+=1)if((n>>7-a&1)===0){e.utf8seq=a;break}if(e.utf8seq===2)e.codepoint=n&31;else if(e.utf8seq===3)e.codepoint=n&15;else if(e.utf8seq===4)e.codepoint=n&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(n<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|n&63,e.utf8seq-=1,e.utf8seq===0&&s(e.codepoint)}}function Da(n){const e=[],s={queue:0,queuedBits:0},a=l=>{e.push(l)};for(let l=0;l<n.length;l+=1)V1(n.charCodeAt(l),s,a);return new Uint8Array(e)}function eN(n){const e=[];return QO(n,s=>e.push(s)),new Uint8Array(e)}function Ts(n){const e=[],s={queue:0,queuedBits:0},a=l=>{e.push(l)};return n.forEach(l=>W0(l,s,a)),W0(null,s,a),e.join("")}function tN(n){return Math.round(Date.now()/1e3)+n}function nN(){return Symbol("auth-callback")}const Ct=()=>typeof window<"u"&&typeof document<"u",ys={tested:!1,writable:!1},H1=()=>{if(!Ct())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ys.tested)return ys.writable;const n=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(n,n),globalThis.localStorage.removeItem(n),ys.tested=!0,ys.writable=!0}catch{ys.tested=!0,ys.writable=!1}return ys.writable};function iN(n){const e={},s=new URL(n);if(s.hash&&s.hash[0]==="#")try{new URLSearchParams(s.hash.substring(1)).forEach((l,u)=>{e[u]=l})}catch{}return s.searchParams.forEach((a,l)=>{e[l]=a}),e}const $1=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),sN=n=>typeof n=="object"&&n!==null&&"status"in n&&"ok"in n&&"json"in n&&typeof n.json=="function",Ea=async(n,e,s)=>{await n.setItem(e,JSON.stringify(s))},vs=async(n,e)=>{const s=await n.getItem(e);if(!s)return null;try{return JSON.parse(s)}catch{return null}},jt=async(n,e)=>{await n.removeItem(e)};class qu{constructor(){this.promise=new qu.promiseConstructor((e,s)=>{this.resolve=e,this.reject=s})}}qu.promiseConstructor=Promise;function su(n){const e=n.split(".");if(e.length!==3)throw new gf("Invalid JWT structure");for(let a=0;a<e.length;a++)if(!IO.test(e[a]))throw new gf("JWT not in base64url format");return{header:JSON.parse(eb(e[0])),payload:JSON.parse(eb(e[1])),signature:Da(e[2]),raw:{header:e[0],payload:e[1]}}}async function aN(n){return await new Promise(e=>{setTimeout(()=>e(null),n)})}function rN(n,e){return new Promise((a,l)=>{(async()=>{for(let u=0;u<1/0;u++)try{const c=await n(u);if(!e(u,null,c)){a(c);return}}catch(c){if(!e(u,c)){l(c);return}}})()})}function oN(n){return("0"+n.toString(16)).substr(-2)}function lN(){const e=new Uint32Array(56);if(typeof crypto>"u"){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",a=s.length;let l="";for(let u=0;u<56;u++)l+=s.charAt(Math.floor(Math.random()*a));return l}return crypto.getRandomValues(e),Array.from(e,oN).join("")}async function uN(n){const s=new TextEncoder().encode(n),a=await crypto.subtle.digest("SHA-256",s),l=new Uint8Array(a);return Array.from(l).map(u=>String.fromCharCode(u)).join("")}async function cN(n){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),n;const s=await uN(n);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ba(n,e,s=!1){const a=lN();let l=a;s&&(l+="/recovery"),await Ea(n,`${e}-code-verifier`,l);const u=await cN(a);return[u,a===u?"plain":"s256"]}const hN=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function dN(n){const e=n.headers.get(mf);if(!e||!e.match(hN))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function fN(n){if(!n)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(n<=e)throw new Error("JWT has expired")}function mN(n){switch(n){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const pN=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function ci(n){if(!pN.test(n))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function On(n){if(!n.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function Od(){const n={};return new Proxy(n,{get:(e,s)=>{if(s==="__isUserNotAvailableProxy")return!0;if(typeof s=="symbol"){const a=s.toString();if(a==="Symbol(Symbol.toPrimitive)"||a==="Symbol(Symbol.toStringTag)"||a==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function gN(n,e){return new Proxy(n,{get:(s,a,l)=>{if(a==="__isInsecureUserWarningProxy")return!0;if(typeof a=="symbol"){const u=a.toString();if(u==="Symbol(Symbol.toPrimitive)"||u==="Symbol(Symbol.toStringTag)"||u==="Symbol(util.inspect.custom)"||u==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(s,a,l)}return!e.value&&typeof a=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(s,a,l)}})}function tb(n){return JSON.parse(JSON.stringify(n))}const xs=n=>{if(typeof n=="object"&&n!==null){const e=n;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(n)},yN=[502,503,504,520,521,522,523,524,530];async function nb(n){var e;if(!sN(n))throw new pf(xs(n),0);if(yN.includes(n.status))throw new pf(xs(n),n.status);let s;try{s=await n.json()}catch(u){throw new Dn(xs(u),u)}let a;const l=dN(n);if(l&&l.getTime()>=B1["2024-01-01"].timestamp&&typeof s=="object"&&s&&typeof s.code=="string"?a=s.code:typeof s=="object"&&s&&typeof s.error_code=="string"&&(a=s.error_code),a){if(a==="weak_password")throw new Z0(xs(s),n.status,((e=s.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(a==="session_not_found")throw new vt}else if(typeof s=="object"&&s&&typeof s.weak_password=="object"&&s.weak_password&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.reasons.reduce((u,c)=>u&&typeof c=="string",!0))throw new Z0(xs(s),n.status,s.weak_password.reasons);throw new KO(xs(s),n.status||500,a)}const vN=(n,e,s,a)=>{const l={method:n,headers:(e==null?void 0:e.headers)||{}};return n==="GET"?l:(l.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),l.body=JSON.stringify(a),Object.assign(Object.assign({},l),s))};async function ae(n,e,s,a){var l;const u=Object.assign({},a==null?void 0:a.headers);u[mf]||(u[mf]=B1["2024-01-01"].name),a!=null&&a.jwt&&(u.Authorization=`Bearer ${a.jwt}`);const c=(l=a==null?void 0:a.query)!==null&&l!==void 0?l:{};a!=null&&a.redirectTo&&(c.redirect_to=a.redirectTo);const d=Object.keys(c).length?"?"+new URLSearchParams(c).toString():"",m=await bN(n,e,s+d,{headers:u,noResolveJson:a==null?void 0:a.noResolveJson},{},a==null?void 0:a.body);return a!=null&&a.xform?a==null?void 0:a.xform(m):{data:Object.assign({},m),error:null}}async function bN(n,e,s,a,l,u){const c=vN(e,a,l,u);let d;try{d=await n(s,Object.assign({},c))}catch(m){throw console.error(m),new pf(xs(m),0)}if(d.ok||await nb(d),a!=null&&a.noResolveJson)return d;try{return await d.json()}catch(m){await nb(m)}}function wn(n){var e;let s=null;_N(n)&&(s=Object.assign({},n),n.expires_at||(s.expires_at=tN(n.expires_in)));const a=(e=n.user)!==null&&e!==void 0?e:n;return{data:{session:s,user:a},error:null}}function ib(n){const e=wn(n);return!e.error&&n.weak_password&&typeof n.weak_password=="object"&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.message&&typeof n.weak_password.message=="string"&&n.weak_password.reasons.reduce((s,a)=>s&&typeof a=="string",!0)&&(e.data.weak_password=n.weak_password),e}function Gi(n){var e;return{data:{user:(e=n.user)!==null&&e!==void 0?e:n},error:null}}function wN(n){return{data:n,error:null}}function xN(n){const{action_link:e,email_otp:s,hashed_token:a,redirect_to:l,verification_type:u}=n,c=Vu(n,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),d={action_link:e,email_otp:s,hashed_token:a,redirect_to:l,verification_type:u},m=Object.assign({},c);return{data:{properties:d,user:m},error:null}}function sb(n){return n}function _N(n){return!!n.access_token&&!!n.refresh_token&&!!n.expires_in}const Nd=["global","local","others"];class SN{constructor({url:e="",headers:s={},fetch:a,experimental:l}){this.url=e,this.headers=s,this.fetch=$1(a),this.experimental=l??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,s=Nd[0]){if(Nd.indexOf(s)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Nd.join(", ")}`);try{return await ae(this.fetch,"POST",`${this.url}/logout?scope=${s}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(a){if(W(a))return{data:null,error:a};throw a}}async inviteUserByEmail(e,s={}){try{return await ae(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:s.data},headers:this.headers,redirectTo:s.redirectTo,xform:Gi})}catch(a){if(W(a))return{data:{user:null},error:a};throw a}}async generateLink(e){try{const{options:s}=e,a=Vu(e,["options"]),l=Object.assign(Object.assign({},a),s);return"newEmail"in a&&(l.new_email=a==null?void 0:a.newEmail,delete l.newEmail),await ae(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:l,headers:this.headers,xform:xN,redirectTo:s==null?void 0:s.redirectTo})}catch(s){if(W(s))return{data:{properties:null,user:null},error:s};throw s}}async createUser(e){try{return await ae(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Gi})}catch(s){if(W(s))return{data:{user:null},error:s};throw s}}async listUsers(e){var s,a,l,u,c,d,m;try{const p={nextPage:null,lastPage:0,total:0},g=await ae(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(a=(s=e==null?void 0:e.page)===null||s===void 0?void 0:s.toString())!==null&&a!==void 0?a:"",per_page:(u=(l=e==null?void 0:e.perPage)===null||l===void 0?void 0:l.toString())!==null&&u!==void 0?u:""},xform:sb});if(g.error)throw g.error;const y=await g.json(),w=(c=g.headers.get("x-total-count"))!==null&&c!==void 0?c:0,_=(m=(d=g.headers.get("link"))===null||d===void 0?void 0:d.split(","))!==null&&m!==void 0?m:[];return _.length>0&&(_.forEach(S=>{const A=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),k=JSON.parse(S.split(";")[1].split("=")[1]);p[`${k}Page`]=A}),p.total=parseInt(w)),{data:Object.assign(Object.assign({},y),p),error:null}}catch(p){if(W(p))return{data:{users:[]},error:p};throw p}}async getUserById(e){ci(e);try{return await ae(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Gi})}catch(s){if(W(s))return{data:{user:null},error:s};throw s}}async updateUserById(e,s){ci(e);try{return await ae(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:s,headers:this.headers,xform:Gi})}catch(a){if(W(a))return{data:{user:null},error:a};throw a}}async deleteUser(e,s=!1){ci(e);try{return await ae(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:s},xform:Gi})}catch(a){if(W(a))return{data:{user:null},error:a};throw a}}async _listFactors(e){ci(e.userId);try{const{data:s,error:a}=await ae(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:l=>({data:{factors:l},error:null})});return{data:s,error:a}}catch(s){if(W(s))return{data:null,error:s};throw s}}async _deleteFactor(e){ci(e.userId),ci(e.id);try{return{data:await ae(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(s){if(W(s))return{data:null,error:s};throw s}}async _listOAuthClients(e){var s,a,l,u,c,d,m;try{const p={nextPage:null,lastPage:0,total:0},g=await ae(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(a=(s=e==null?void 0:e.page)===null||s===void 0?void 0:s.toString())!==null&&a!==void 0?a:"",per_page:(u=(l=e==null?void 0:e.perPage)===null||l===void 0?void 0:l.toString())!==null&&u!==void 0?u:""},xform:sb});if(g.error)throw g.error;const y=await g.json(),w=(c=g.headers.get("x-total-count"))!==null&&c!==void 0?c:0,_=(m=(d=g.headers.get("link"))===null||d===void 0?void 0:d.split(","))!==null&&m!==void 0?m:[];return _.length>0&&(_.forEach(S=>{const A=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),k=JSON.parse(S.split(";")[1].split("=")[1]);p[`${k}Page`]=A}),p.total=parseInt(w)),{data:Object.assign(Object.assign({},y),p),error:null}}catch(p){if(W(p))return{data:{clients:[]},error:p};throw p}}async _createOAuthClient(e){try{return await ae(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(W(s))return{data:null,error:s};throw s}}async _getOAuthClient(e){try{return await ae(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(W(s))return{data:null,error:s};throw s}}async _updateOAuthClient(e,s){try{return await ae(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:s,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(W(a))return{data:null,error:a};throw a}}async _deleteOAuthClient(e){try{return await ae(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(W(s))return{data:null,error:s};throw s}}async _regenerateOAuthClientSecret(e){try{return await ae(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(W(s))return{data:null,error:s};throw s}}async _listCustomProviders(e){try{const s={};return e!=null&&e.type&&(s.type=e.type),await ae(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:s,xform:a=>{var l;return{data:{providers:(l=a==null?void 0:a.providers)!==null&&l!==void 0?l:[]},error:null}}})}catch(s){if(W(s))return{data:{providers:[]},error:s};throw s}}async _createCustomProvider(e){try{return await ae(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(W(s))return{data:null,error:s};throw s}}async _getCustomProvider(e){try{return await ae(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(W(s))return{data:null,error:s};throw s}}async _updateCustomProvider(e,s){try{return await ae(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:s,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(W(a))return{data:null,error:a};throw a}}async _deleteCustomProvider(e){try{return await ae(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(W(s))return{data:null,error:s};throw s}}async _adminListPasskeys(e){On(this.experimental),ci(e.userId);try{return await ae(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(W(s))return{data:null,error:s};throw s}}async _adminDeletePasskey(e){On(this.experimental),ci(e.userId),ci(e.passkeyId);try{return await ae(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(W(s))return{data:null,error:s};throw s}}}function ab(n={}){return{getItem:e=>n[e]||null,setItem:(e,s)=>{n[e]=s},removeItem:e=>{delete n[e]}}}const Bn={debug:!!(globalThis&&H1()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class q1 extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class rb extends q1{}async function TN(n,e,s){Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",n,e);const a=new globalThis.AbortController;let l;e>0&&(l=setTimeout(()=>{a.abort(),Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",n)},e)),await Promise.resolve();try{return await globalThis.navigator.locks.request(n,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:a.signal},async u=>{if(u){clearTimeout(l),Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",n,u.name);try{return await s()}finally{Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",n,u.name)}}else{if(e===0)throw Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",n),new rb(`Acquiring an exclusive Navigator LockManager lock "${n}" immediately failed`);if(Bn.debug)try{const c=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(c,null,"  "))}catch(c){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",c)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),clearTimeout(l),await s()}})}catch(u){if(e>0&&clearTimeout(l),u!==null&&typeof u=="object"&&"name"in u&&u.name==="AbortError"&&e>0){if(a.signal.aborted)return Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock",n),console.warn(`@supabase/gotrue-js: Lock "${n}" was not released within ${e}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`),await Promise.resolve().then(()=>globalThis.navigator.locks.request(n,{mode:"exclusive",steal:!0},async c=>{if(c){Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)",n,c.name);try{return await s()}finally{Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock: released (stolen)",n,c.name)}}else return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"),await s()}));throw Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request",n),new rb(`Lock "${n}" was released because another request stole it`)}throw u}}function EN(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function I1(n){if(!/^0x[a-fA-F0-9]{40}$/.test(n))throw new Error(`@supabase/auth-js: Address "${n}" is invalid.`);return n.toLowerCase()}function AN(n){return parseInt(n,16)}function jN(n){const e=new TextEncoder().encode(n);return"0x"+Array.from(e,a=>a.toString(16).padStart(2,"0")).join("")}function CN(n){var e;const{chainId:s,domain:a,expirationTime:l,issuedAt:u=new Date,nonce:c,notBefore:d,requestId:m,resources:p,scheme:g,uri:y,version:w}=n;{if(!Number.isInteger(s))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${s}`);if(!a)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(c&&c.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${c}`);if(!y)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(w!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${w}`);if(!((e=n.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${n.statement}`)}const _=I1(n.address),S=g?`${g}://${a}`:a,A=n.statement?`${n.statement}
`:"",k=`${S} wants you to sign in with your Ethereum account:
${_}

${A}`;let R=`URI: ${y}
Version: ${w}
Chain ID: ${s}${c?`
Nonce: ${c}`:""}
Issued At: ${u.toISOString()}`;if(l&&(R+=`
Expiration Time: ${l.toISOString()}`),d&&(R+=`
Not Before: ${d.toISOString()}`),m&&(R+=`
Request ID: ${m}`),p){let L=`
Resources:`;for(const E of p){if(!E||typeof E!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${E}`);L+=`
- ${E}`}R+=L}return`${k}
${R}`}class ht extends Error{constructor({message:e,code:s,cause:a,name:l}){var u;super(e,{cause:a}),this.__isWebAuthnError=!0,this.name=(u=l??(a instanceof Error?a.name:void 0))!==null&&u!==void 0?u:"Unknown Error",this.code=s}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class ku extends ht{constructor(e,s){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s,message:e}),this.name="WebAuthnUnknownError",this.originalError=s}}function RN({error:n,options:e}){var s,a,l;const{publicKey:u}=e;if(!u)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(e.signal instanceof AbortSignal)return new ht({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else if(n.name==="ConstraintError"){if(((s=u.authenticatorSelection)===null||s===void 0?void 0:s.requireResidentKey)===!0)return new ht({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:n});if(e.mediation==="conditional"&&((a=u.authenticatorSelection)===null||a===void 0?void 0:a.userVerification)==="required")return new ht({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:n});if(((l=u.authenticatorSelection)===null||l===void 0?void 0:l.userVerification)==="required")return new ht({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:n})}else{if(n.name==="InvalidStateError")return new ht({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:n});if(n.name==="NotAllowedError")return new ht({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="NotSupportedError")return u.pubKeyCredParams.filter(d=>d.type==="public-key").length===0?new ht({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:n}):new ht({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:n});if(n.name==="SecurityError"){const c=window.location.hostname;if(G1(c)){if(u.rp.id!==c)return new ht({message:`The RP ID "${u.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new ht({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="TypeError"){if(u.user.id.byteLength<1||u.user.id.byteLength>64)return new ht({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:n})}else if(n.name==="UnknownError")return new ht({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new ht({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}function kN({error:n,options:e}){const{publicKey:s}=e;if(!s)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(e.signal instanceof AbortSignal)return new ht({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else{if(n.name==="NotAllowedError")return new ht({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="SecurityError"){const a=window.location.hostname;if(G1(a)){if(s.rpId!==a)return new ht({message:`The RP ID "${s.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new ht({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="UnknownError")return new ht({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new ht({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}class ON{createNewAbortSignal(){if(this.controller){const s=new Error("Cancelling existing WebAuthn API call for new one");s.name="AbortError",this.controller.abort(s)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const yf=new ON;function ob(n){if(!n)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(n);const{challenge:e,user:s,excludeCredentials:a}=n,l=Vu(n,["challenge","user","excludeCredentials"]),u=Da(e).buffer,c=Object.assign(Object.assign({},s),{id:Da(s.id).buffer}),d=Object.assign(Object.assign({},l),{challenge:u,user:c});if(a&&a.length>0){d.excludeCredentials=new Array(a.length);for(let m=0;m<a.length;m++){const p=a[m];d.excludeCredentials[m]=Object.assign(Object.assign({},p),{id:Da(p.id).buffer,type:p.type||"public-key",transports:p.transports})}}return d}function lb(n){if(!n)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(n);const{challenge:e,allowCredentials:s}=n,a=Vu(n,["challenge","allowCredentials"]),l=Da(e).buffer,u=Object.assign(Object.assign({},a),{challenge:l});if(s&&s.length>0){u.allowCredentials=new Array(s.length);for(let c=0;c<s.length;c++){const d=s[c];u.allowCredentials[c]=Object.assign(Object.assign({},d),{id:Da(d.id).buffer,type:d.type||"public-key",transports:d.transports})}}return u}function ub(n){var e;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const s=n;return{id:n.id,rawId:n.id,response:{attestationObject:Ts(new Uint8Array(n.response.attestationObject)),clientDataJSON:Ts(new Uint8Array(n.response.clientDataJSON))},type:"public-key",clientExtensionResults:n.getClientExtensionResults(),authenticatorAttachment:(e=s.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function cb(n){var e;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const s=n,a=n.getClientExtensionResults(),l=n.response;return{id:n.id,rawId:n.id,response:{authenticatorData:Ts(new Uint8Array(l.authenticatorData)),clientDataJSON:Ts(new Uint8Array(l.clientDataJSON)),signature:Ts(new Uint8Array(l.signature)),userHandle:l.userHandle?Ts(new Uint8Array(l.userHandle)):void 0},type:"public-key",clientExtensionResults:a,authenticatorAttachment:(e=s.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function G1(n){return n==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(n)}function Ou(){var n,e;return!!(Ct()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((n=navigator==null?void 0:navigator.credentials)===null||n===void 0?void 0:n.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function K1(n){try{const e=await navigator.credentials.create(n);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new ku("Browser returned unexpected credential type",e)}:{data:null,error:new ku("Empty credential response",e)}}catch(e){return{data:null,error:RN({error:e,options:n})}}}async function Y1(n){try{const e=await navigator.credentials.get(n);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new ku("Browser returned unexpected credential type",e)}:{data:null,error:new ku("Empty credential response",e)}}catch(e){return{data:null,error:kN({error:e,options:n})}}}const NN={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},DN={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Nu(...n){const e=l=>l!==null&&typeof l=="object"&&!Array.isArray(l),s=l=>l instanceof ArrayBuffer||ArrayBuffer.isView(l),a={};for(const l of n)if(l)for(const u in l){const c=l[u];if(c!==void 0)if(Array.isArray(c))a[u]=c;else if(s(c))a[u]=c;else if(e(c)){const d=a[u];e(d)?a[u]=Nu(d,c):a[u]=Nu(c)}else a[u]=c}return a}function MN(n,e){return Nu(NN,n,e||{})}function UN(n,e){return Nu(DN,n,e||{})}class LN{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:s,friendlyName:a,signal:l},u){var c;try{const{data:d,error:m}=await this.client.mfa.challenge({factorId:e,webauthn:s});if(!d)return{data:null,error:m};const p=l??yf.createNewAbortSignal();if(d.webauthn.type==="create"){const{user:g}=d.webauthn.credential_options.publicKey;if(!g.name){const y=a;if(y)g.name=`${g.id}:${y}`;else{const _=(await this.client.getUser()).data.user,S=((c=_==null?void 0:_.user_metadata)===null||c===void 0?void 0:c.name)||(_==null?void 0:_.email)||(_==null?void 0:_.id)||"User";g.name=`${g.id}:${S}`}}g.displayName||(g.displayName=g.name)}switch(d.webauthn.type){case"create":{const g=MN(d.webauthn.credential_options.publicKey,u==null?void 0:u.create),{data:y,error:w}=await K1({publicKey:g,signal:p});return y?{data:{factorId:e,challengeId:d.id,webauthn:{type:d.webauthn.type,credential_response:y}},error:null}:{data:null,error:w}}case"request":{const g=UN(d.webauthn.credential_options.publicKey,u==null?void 0:u.request),{data:y,error:w}=await Y1(Object.assign(Object.assign({},d.webauthn.credential_options),{publicKey:g,signal:p}));return y?{data:{factorId:e,challengeId:d.id,webauthn:{type:d.webauthn.type,credential_response:y}},error:null}:{data:null,error:w}}}}catch(d){return W(d)?{data:null,error:d}:{data:null,error:new Dn("Unexpected error in challenge",d)}}}async _verify({challengeId:e,factorId:s,webauthn:a}){return this.client.mfa.verify({factorId:s,challengeId:e,webauthn:a})}async _authenticate({factorId:e,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:a=typeof window<"u"?[window.location.origin]:void 0,signal:l}={}},u){if(!s)return{data:null,error:new go("rpId is required for WebAuthn authentication")};try{if(!Ou())return{data:null,error:new Dn("Browser does not support WebAuthn",null)};const{data:c,error:d}=await this.challenge({factorId:e,webauthn:{rpId:s,rpOrigins:a},signal:l},{request:u});if(!c)return{data:null,error:d};const{webauthn:m}=c;return this._verify({factorId:e,challengeId:c.challengeId,webauthn:{type:m.type,rpId:s,rpOrigins:a,credential_response:m.credential_response}})}catch(c){return W(c)?{data:null,error:c}:{data:null,error:new Dn("Unexpected error in authenticate",c)}}}async _register({friendlyName:e,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:a=typeof window<"u"?[window.location.origin]:void 0,signal:l}={}},u){if(!s)return{data:null,error:new go("rpId is required for WebAuthn registration")};try{if(!Ou())return{data:null,error:new Dn("Browser does not support WebAuthn",null)};const{data:c,error:d}=await this._enroll({friendlyName:e});if(!c)return await this.client.mfa.listFactors().then(g=>{var y;return(y=g.data)===null||y===void 0?void 0:y.all.find(w=>w.factor_type==="webauthn"&&w.friendly_name===e&&w.status!=="unverified")}).then(g=>g?this.client.mfa.unenroll({factorId:g==null?void 0:g.id}):void 0),{data:null,error:d};const{data:m,error:p}=await this._challenge({factorId:c.id,friendlyName:c.friendly_name,webauthn:{rpId:s,rpOrigins:a},signal:l},{create:u});return m?this._verify({factorId:c.id,challengeId:m.challengeId,webauthn:{rpId:s,rpOrigins:a,type:m.webauthn.type,credential_response:m.webauthn.credential_response}}):{data:null,error:p}}catch(c){return W(c)?{data:null,error:c}:{data:null,error:new Dn("Unexpected error in register",c)}}}}EN();const PN={url:HO,storageKey:$O,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:qO,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}};async function hb(n,e,s){return await s()}const wa={};class yo{get jwks(){var e,s;return(s=(e=wa[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&s!==void 0?s:{keys:[]}}set jwks(e){wa[this.storageKey]=Object.assign(Object.assign({},wa[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,s;return(s=(e=wa[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&s!==void 0?s:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){wa[this.storageKey]=Object.assign(Object.assign({},wa[this.storageKey]),{cachedAt:e})}constructor(e){var s,a,l,u;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const c=Object.assign(Object.assign({},PN),e);if(this.storageKey=c.storageKey,this.instanceID=(s=yo.nextInstanceID[this.storageKey])!==null&&s!==void 0?s:0,yo.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!c.debug,typeof c.debug=="function"&&(this.logger=c.debug),this.instanceID>0&&Ct()){const d=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(d),this.logDebugMessages&&console.trace(d)}if(this.persistSession=c.persistSession,this.autoRefreshToken=c.autoRefreshToken,this.experimental=(a=c.experimental)!==null&&a!==void 0?a:{},this.admin=new SN({url:c.url,headers:c.headers,fetch:c.fetch,experimental:this.experimental}),this.url=c.url,this.headers=c.headers,this.fetch=$1(c.fetch),this.lock=c.lock||hb,this.detectSessionInUrl=c.detectSessionInUrl,this.flowType=c.flowType,this.hasCustomAuthorizationHeader=c.hasCustomAuthorizationHeader,this.throwOnError=c.throwOnError,this.lockAcquireTimeout=c.lockAcquireTimeout,c.lock?this.lock=c.lock:this.persistSession&&Ct()&&(!((l=globalThis==null?void 0:globalThis.navigator)===null||l===void 0)&&l.locks)?this.lock=TN:this.lock=hb,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new LN(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(c.storage?this.storage=c.storage:H1()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=ab(this.memoryStorage)),c.userStorage&&(this.userStorage=c.userStorage)):(this.memoryStorage={},this.storage=ab(this.memoryStorage)),Ct()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(d){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",d)}(u=this.broadcastChannel)===null||u===void 0||u.addEventListener("message",async d=>{this._debug("received broadcast notification from other tab or client",d);try{await this._notifyAllSubscribers(d.data.event,d.data.session,!1)}catch(m){this._debug("#broadcastChannel","error",m)}})}c.skipAutoInitialize||this.initialize().catch(d=>{this._debug("#initialize()","error",d)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${z1}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var e;try{let s={},a="none";if(Ct()&&(s=iN(window.location.href),this._isImplicitGrantCallback(s)?a="implicit":await this._isPKCECallback(s)&&(a="pkce")),Ct()&&this.detectSessionInUrl&&a!=="none"){const{data:l,error:u}=await this._getSessionFromURL(s,a);if(u){if(this._debug("#_initialize()","error detecting session from URL",u),FO(u)){const m=(e=u.details)===null||e===void 0?void 0:e.code;if(m==="identity_already_exists"||m==="identity_not_found"||m==="single_identity_not_deletable")return{error:u}}return{error:u}}const{session:c,redirectType:d}=l;return this._debug("#_initialize()","detected session in URL",c,"redirect type",d),await this._saveSession(c),setTimeout(async()=>{d==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",c):await this._notifyAllSubscribers("SIGNED_IN",c)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(s){return W(s)?this._returnResult({error:s}):this._returnResult({error:new Dn("Unexpected error during initialization",s)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var s,a,l;try{const u=await ae(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(a=(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.data)!==null&&a!==void 0?a:{},gotrue_meta_security:{captcha_token:(l=e==null?void 0:e.options)===null||l===void 0?void 0:l.captchaToken}},xform:wn}),{data:c,error:d}=u;if(d||!c)return this._returnResult({data:{user:null,session:null},error:d});const m=c.session,p=c.user;return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",m)),this._returnResult({data:{user:p,session:m},error:null})}catch(u){if(W(u))return this._returnResult({data:{user:null,session:null},error:u});throw u}}async signUp(e){var s,a,l;try{let u;if("email"in e){const{email:g,password:y,options:w}=e;let _=null,S=null;this.flowType==="pkce"&&([_,S]=await ba(this.storage,this.storageKey)),u=await ae(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:w==null?void 0:w.emailRedirectTo,body:{email:g,password:y,data:(s=w==null?void 0:w.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:w==null?void 0:w.captchaToken},code_challenge:_,code_challenge_method:S},xform:wn})}else if("phone"in e){const{phone:g,password:y,options:w}=e;u=await ae(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:g,password:y,data:(a=w==null?void 0:w.data)!==null&&a!==void 0?a:{},channel:(l=w==null?void 0:w.channel)!==null&&l!==void 0?l:"sms",gotrue_meta_security:{captcha_token:w==null?void 0:w.captchaToken}},xform:wn})}else throw new nu("You must provide either an email or phone number and a password");const{data:c,error:d}=u;if(d||!c)return await jt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:d});const m=c.session,p=c.user;return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",m)),this._returnResult({data:{user:p,session:m},error:null})}catch(u){if(await jt(this.storage,`${this.storageKey}-code-verifier`),W(u))return this._returnResult({data:{user:null,session:null},error:u});throw u}}async signInWithPassword(e){try{let s;if("email"in e){const{email:u,password:c,options:d}=e;s=await ae(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:u,password:c,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}},xform:ib})}else if("phone"in e){const{phone:u,password:c,options:d}=e;s=await ae(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:u,password:c,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}},xform:ib})}else throw new nu("You must provide either an email or phone number and a password");const{data:a,error:l}=s;if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!a||!a.session||!a.user){const u=new va;return this._returnResult({data:{user:null,session:null},error:u})}return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),this._returnResult({data:Object.assign({user:a.user,session:a.session},a.weak_password?{weakPassword:a.weak_password}:null),error:l})}catch(s){if(W(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOAuth(e){var s,a,l,u;return await this._handleProviderSignIn(e.provider,{redirectTo:(s=e.options)===null||s===void 0?void 0:s.redirectTo,scopes:(a=e.options)===null||a===void 0?void 0:a.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:(u=e.options)===null||u===void 0?void 0:u.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){const{chain:s}=e;switch(s){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`)}}async signInWithEthereum(e){var s,a,l,u,c,d,m,p,g,y,w;let _,S;if("message"in e)_=e.message,S=e.signature;else{const{chain:A,wallet:k,statement:R,options:L}=e;let E;if(Ct())if(typeof k=="object")E=k;else{const oe=window;if("ethereum"in oe&&typeof oe.ethereum=="object"&&"request"in oe.ethereum&&typeof oe.ethereum.request=="function")E=oe.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof k!="object"||!(L!=null&&L.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");E=k}const G=new URL((s=L==null?void 0:L.url)!==null&&s!==void 0?s:window.location.href),J=await E.request({method:"eth_requestAccounts"}).then(oe=>oe).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!J||J.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const Z=I1(J[0]);let F=(a=L==null?void 0:L.signInWithEthereum)===null||a===void 0?void 0:a.chainId;if(!F){const oe=await E.request({method:"eth_chainId"});F=AN(oe)}const te={domain:G.host,address:Z,statement:R,uri:G.href,version:"1",chainId:F,nonce:(l=L==null?void 0:L.signInWithEthereum)===null||l===void 0?void 0:l.nonce,issuedAt:(c=(u=L==null?void 0:L.signInWithEthereum)===null||u===void 0?void 0:u.issuedAt)!==null&&c!==void 0?c:new Date,expirationTime:(d=L==null?void 0:L.signInWithEthereum)===null||d===void 0?void 0:d.expirationTime,notBefore:(m=L==null?void 0:L.signInWithEthereum)===null||m===void 0?void 0:m.notBefore,requestId:(p=L==null?void 0:L.signInWithEthereum)===null||p===void 0?void 0:p.requestId,resources:(g=L==null?void 0:L.signInWithEthereum)===null||g===void 0?void 0:g.resources};_=CN(te),S=await E.request({method:"personal_sign",params:[jN(_),Z]})}try{const{data:A,error:k}=await ae(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:_,signature:S},!((y=e.options)===null||y===void 0)&&y.captchaToken?{gotrue_meta_security:{captcha_token:(w=e.options)===null||w===void 0?void 0:w.captchaToken}}:null),xform:wn});if(k)throw k;if(!A||!A.session||!A.user){const R=new va;return this._returnResult({data:{user:null,session:null},error:R})}return A.session&&(await this._saveSession(A.session),await this._notifyAllSubscribers("SIGNED_IN",A.session)),this._returnResult({data:Object.assign({},A),error:k})}catch(A){if(W(A))return this._returnResult({data:{user:null,session:null},error:A});throw A}}async signInWithSolana(e){var s,a,l,u,c,d,m,p,g,y,w,_;let S,A;if("message"in e)S=e.message,A=e.signature;else{const{chain:k,wallet:R,statement:L,options:E}=e;let G;if(Ct())if(typeof R=="object")G=R;else{const Z=window;if("solana"in Z&&typeof Z.solana=="object"&&("signIn"in Z.solana&&typeof Z.solana.signIn=="function"||"signMessage"in Z.solana&&typeof Z.solana.signMessage=="function"))G=Z.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof R!="object"||!(E!=null&&E.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");G=R}const J=new URL((s=E==null?void 0:E.url)!==null&&s!==void 0?s:window.location.href);if("signIn"in G&&G.signIn){const Z=await G.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},E==null?void 0:E.signInWithSolana),{version:"1",domain:J.host,uri:J.href}),L?{statement:L}:null));let F;if(Array.isArray(Z)&&Z[0]&&typeof Z[0]=="object")F=Z[0];else if(Z&&typeof Z=="object"&&"signedMessage"in Z&&"signature"in Z)F=Z;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in F&&"signature"in F&&(typeof F.signedMessage=="string"||F.signedMessage instanceof Uint8Array)&&F.signature instanceof Uint8Array)S=typeof F.signedMessage=="string"?F.signedMessage:new TextDecoder().decode(F.signedMessage),A=F.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in G)||typeof G.signMessage!="function"||!("publicKey"in G)||typeof G!="object"||!G.publicKey||!("toBase58"in G.publicKey)||typeof G.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");S=[`${J.host} wants you to sign in with your Solana account:`,G.publicKey.toBase58(),...L?["",L,""]:[""],"Version: 1",`URI: ${J.href}`,`Issued At: ${(l=(a=E==null?void 0:E.signInWithSolana)===null||a===void 0?void 0:a.issuedAt)!==null&&l!==void 0?l:new Date().toISOString()}`,...!((u=E==null?void 0:E.signInWithSolana)===null||u===void 0)&&u.notBefore?[`Not Before: ${E.signInWithSolana.notBefore}`]:[],...!((c=E==null?void 0:E.signInWithSolana)===null||c===void 0)&&c.expirationTime?[`Expiration Time: ${E.signInWithSolana.expirationTime}`]:[],...!((d=E==null?void 0:E.signInWithSolana)===null||d===void 0)&&d.chainId?[`Chain ID: ${E.signInWithSolana.chainId}`]:[],...!((m=E==null?void 0:E.signInWithSolana)===null||m===void 0)&&m.nonce?[`Nonce: ${E.signInWithSolana.nonce}`]:[],...!((p=E==null?void 0:E.signInWithSolana)===null||p===void 0)&&p.requestId?[`Request ID: ${E.signInWithSolana.requestId}`]:[],...!((y=(g=E==null?void 0:E.signInWithSolana)===null||g===void 0?void 0:g.resources)===null||y===void 0)&&y.length?["Resources",...E.signInWithSolana.resources.map(F=>`- ${F}`)]:[]].join(`
`);const Z=await G.signMessage(new TextEncoder().encode(S),"utf8");if(!Z||!(Z instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");A=Z}}try{const{data:k,error:R}=await ae(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:S,signature:Ts(A)},!((w=e.options)===null||w===void 0)&&w.captchaToken?{gotrue_meta_security:{captcha_token:(_=e.options)===null||_===void 0?void 0:_.captchaToken}}:null),xform:wn});if(R)throw R;if(!k||!k.session||!k.user){const L=new va;return this._returnResult({data:{user:null,session:null},error:L})}return k.session&&(await this._saveSession(k.session),await this._notifyAllSubscribers("SIGNED_IN",k.session)),this._returnResult({data:Object.assign({},k),error:R})}catch(k){if(W(k))return this._returnResult({data:{user:null,session:null},error:k});throw k}}async _exchangeCodeForSession(e){const s=await vs(this.storage,`${this.storageKey}-code-verifier`),[a,l]=(s??"").split("/");try{if(!a&&this.flowType==="pkce")throw new XO;const{data:u,error:c}=await ae(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:a},xform:wn});if(await jt(this.storage,`${this.storageKey}-code-verifier`),c)throw c;if(!u||!u.session||!u.user){const d=new va;return this._returnResult({data:{user:null,session:null,redirectType:null},error:d})}return u.session&&(await this._saveSession(u.session),await this._notifyAllSubscribers(l==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",u.session)),this._returnResult({data:Object.assign(Object.assign({},u),{redirectType:l??null}),error:c})}catch(u){if(await jt(this.storage,`${this.storageKey}-code-verifier`),W(u))return this._returnResult({data:{user:null,session:null,redirectType:null},error:u});throw u}}async signInWithIdToken(e){try{const{options:s,provider:a,token:l,access_token:u,nonce:c}=e,d=await ae(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:a,id_token:l,access_token:u,nonce:c,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},xform:wn}),{data:m,error:p}=d;if(p)return this._returnResult({data:{user:null,session:null},error:p});if(!m||!m.session||!m.user){const g=new va;return this._returnResult({data:{user:null,session:null},error:g})}return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),this._returnResult({data:m,error:p})}catch(s){if(W(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOtp(e){var s,a,l,u,c;try{if("email"in e){const{email:d,options:m}=e;let p=null,g=null;this.flowType==="pkce"&&([p,g]=await ba(this.storage,this.storageKey));const{error:y}=await ae(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:d,data:(s=m==null?void 0:m.data)!==null&&s!==void 0?s:{},create_user:(a=m==null?void 0:m.shouldCreateUser)!==null&&a!==void 0?a:!0,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken},code_challenge:p,code_challenge_method:g},redirectTo:m==null?void 0:m.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:y})}if("phone"in e){const{phone:d,options:m}=e,{data:p,error:g}=await ae(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:d,data:(l=m==null?void 0:m.data)!==null&&l!==void 0?l:{},create_user:(u=m==null?void 0:m.shouldCreateUser)!==null&&u!==void 0?u:!0,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken},channel:(c=m==null?void 0:m.channel)!==null&&c!==void 0?c:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:p==null?void 0:p.message_id},error:g})}throw new nu("You must provide either an email or phone number.")}catch(d){if(await jt(this.storage,`${this.storageKey}-code-verifier`),W(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}}async verifyOtp(e){var s,a;try{let l,u;"options"in e&&(l=(s=e.options)===null||s===void 0?void 0:s.redirectTo,u=(a=e.options)===null||a===void 0?void 0:a.captchaToken);const{data:c,error:d}=await ae(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:u}}),redirectTo:l,xform:wn});if(d)throw d;if(!c)throw new Error("An error occurred on token verification.");const m=c.session,p=c.user;return m!=null&&m.access_token&&(await this._saveSession(m),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",m)),this._returnResult({data:{user:p,session:m},error:null})}catch(l){if(W(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async signInWithSSO(e){var s,a,l,u,c;try{let d=null,m=null;this.flowType==="pkce"&&([d,m]=await ba(this.storage,this.storageKey));const p=await ae(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(a=(s=e.options)===null||s===void 0?void 0:s.redirectTo)!==null&&a!==void 0?a:void 0}),!((l=e==null?void 0:e.options)===null||l===void 0)&&l.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:d,code_challenge_method:m}),headers:this.headers,xform:wN});return!((u=p.data)===null||u===void 0)&&u.url&&Ct()&&!(!((c=e.options)===null||c===void 0)&&c.skipBrowserRedirect)&&window.location.assign(p.data.url),this._returnResult(p)}catch(d){if(await jt(this.storage,`${this.storageKey}-code-verifier`),W(d))return this._returnResult({data:null,error:d});throw d}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:s},error:a}=e;if(a)throw a;if(!s)throw new vt;const{error:l}=await ae(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:s.access_token});return this._returnResult({data:{user:null,session:null},error:l})})}catch(e){if(W(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const s=`${this.url}/resend`;if("email"in e){const{email:a,type:l,options:u}=e,{error:c}=await ae(this.fetch,"POST",s,{headers:this.headers,body:{email:a,type:l,gotrue_meta_security:{captcha_token:u==null?void 0:u.captchaToken}},redirectTo:u==null?void 0:u.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:c})}else if("phone"in e){const{phone:a,type:l,options:u}=e,{data:c,error:d}=await ae(this.fetch,"POST",s,{headers:this.headers,body:{phone:a,type:l,gotrue_meta_security:{captcha_token:u==null?void 0:u.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:d})}throw new nu("You must provide either an email or phone number and a type")}catch(s){if(W(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async s=>s))}async _acquireLock(e,s){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const a=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),l=(async()=>(await a,await s()))();return this.pendingInLock.push((async()=>{try{await l}catch{}})()),l}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const a=s();for(this.pendingInLock.push((async()=>{try{await a}catch{}})()),await a;this.pendingInLock.length;){const l=[...this.pendingInLock];await Promise.all(l),this.pendingInLock.splice(0,l.length)}return await a}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const s=await this.__loadSession();return await e(s)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const s=await vs(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",s),s!==null&&(this._isValidSession(s)?e=s:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const a=e.expires_at?e.expires_at*1e3-Date.now()<Rd:!1;if(this._debug("#__loadSession()",`session has${a?"":" not"} expired`,"expires_at",e.expires_at),!a){if(this.userStorage){const c=await vs(this.userStorage,this.storageKey+"-user");c!=null&&c.user?e.user=c.user:e.user=Od()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const c={value:this.suppressGetSessionWarning};e.user=gN(e.user,c),c.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:l,error:u}=await this._callRefreshToken(e.refresh_token);return u?this._returnResult({data:{session:null},error:u}):this._returnResult({data:{session:l},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;const s=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return s.data.user&&(this.suppressGetSessionWarning=!0),s}async _getUser(e){try{return e?await ae(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Gi}):await this._useSession(async s=>{var a,l,u;const{data:c,error:d}=s;if(d)throw d;return!(!((a=c.session)===null||a===void 0)&&a.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new vt}:await ae(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(u=(l=c.session)===null||l===void 0?void 0:l.access_token)!==null&&u!==void 0?u:void 0,xform:Gi})})}catch(s){if(W(s))return tu(s)&&(await this._removeSession(),await jt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:s});throw s}}async updateUser(e,s={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,s))}async _updateUser(e,s={}){try{return await this._useSession(async a=>{const{data:l,error:u}=a;if(u)throw u;if(!l.session)throw new vt;const c=l.session;let d=null,m=null;this.flowType==="pkce"&&e.email!=null&&([d,m]=await ba(this.storage,this.storageKey));const{data:p,error:g}=await ae(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:s==null?void 0:s.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:d,code_challenge_method:m}),jwt:c.access_token,xform:Gi});if(g)throw g;return c.user=p.user,await this._saveSession(c),await this._notifyAllSubscribers("USER_UPDATED",c),this._returnResult({data:{user:c.user},error:null})})}catch(a){if(await jt(this.storage,`${this.storageKey}-code-verifier`),W(a))return this._returnResult({data:{user:null},error:a});throw a}}async setSession(e){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new vt;const s=Date.now()/1e3;let a=s,l=!0,u=null;const{payload:c}=su(e.access_token);if(c.exp&&(a=c.exp,l=a<=s),l){const{data:d,error:m}=await this._callRefreshToken(e.refresh_token);if(m)return this._returnResult({data:{user:null,session:null},error:m});if(!d)return{data:{user:null,session:null},error:null};u=d}else{const{data:d,error:m}=await this._getUser(e.access_token);if(m)return this._returnResult({data:{user:null,session:null},error:m});u={access_token:e.access_token,refresh_token:e.refresh_token,user:d.user,token_type:"bearer",expires_in:a-s,expires_at:a},await this._saveSession(u),await this._notifyAllSubscribers("SIGNED_IN",u)}return this._returnResult({data:{user:u.user,session:u},error:null})}catch(s){if(W(s))return this._returnResult({data:{session:null,user:null},error:s});throw s}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async s=>{var a;if(!e){const{data:c,error:d}=s;if(d)throw d;e=(a=c.session)!==null&&a!==void 0?a:void 0}if(!(e!=null&&e.refresh_token))throw new vt;const{data:l,error:u}=await this._callRefreshToken(e.refresh_token);return u?this._returnResult({data:{user:null,session:null},error:u}):l?this._returnResult({data:{user:l.user,session:l},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(s){if(W(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async _getSessionFromURL(e,s){var a;try{if(!Ct())throw new iu("No browser detected.");if(e.error||e.error_description||e.error_code)throw new iu(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(s){case"implicit":if(this.flowType==="pkce")throw new J0("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new iu("Not a valid implicit grant flow url.");break;default:}if(s==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new J0("No code detected.");const{data:E,error:G}=await this._exchangeCodeForSession(e.code);if(G)throw G;const J=new URL(window.location.href);return J.searchParams.delete("code"),window.history.replaceState(window.history.state,"",J.toString()),{data:{session:E.session,redirectType:(a=E.redirectType)!==null&&a!==void 0?a:null},error:null}}const{provider_token:l,provider_refresh_token:u,access_token:c,refresh_token:d,expires_in:m,expires_at:p,token_type:g}=e;if(!c||!m||!d||!g)throw new iu("No session defined in URL");const y=Math.round(Date.now()/1e3),w=parseInt(m);let _=y+w;p&&(_=parseInt(p));const S=_-y;S*1e3<=Ta&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${S}s, should have been closer to ${w}s`);const A=_-w;y-A>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",A,_,y):y-A<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",A,_,y);const{data:k,error:R}=await this._getUser(c);if(R)throw R;const L={provider_token:l,provider_refresh_token:u,access_token:c,expires_in:w,expires_at:_,refresh_token:d,token_type:g,user:k.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:L,redirectType:e.type},error:null})}catch(l){if(W(l))return this._returnResult({data:{session:null,redirectType:null},error:l});throw l}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error_description)}async _isPKCECallback(e){const s=await vs(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&s)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async s=>{var a;const{data:l,error:u}=s;if(u&&!tu(u))return this._returnResult({error:u});const c=(a=l.session)===null||a===void 0?void 0:a.access_token;if(c){const{error:d}=await this.admin.signOut(c,e);if(d&&!(YO(d)&&(d.status===404||d.status===401||d.status===403)||tu(d)))return this._returnResult({error:d})}return e!=="others"&&(await this._removeSession(),await jt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const s=nN(),a={id:s,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",s),this.stateChangeEmitters.delete(s)}};return this._debug("#onAuthStateChange()","registered callback with id",s),this.stateChangeEmitters.set(s,a),(async()=>(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(s)})))(),{data:{subscription:a}}}async _emitInitialSession(e){return await this._useSession(async s=>{var a,l;try{const{data:{session:u},error:c}=s;if(c)throw c;await((a=this.stateChangeEmitters.get(e))===null||a===void 0?void 0:a.callback("INITIAL_SESSION",u)),this._debug("INITIAL_SESSION","callback id",e,"session",u)}catch(u){await((l=this.stateChangeEmitters.get(e))===null||l===void 0?void 0:l.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",u),tu(u)?console.warn(u):console.error(u)}})}async resetPasswordForEmail(e,s={}){let a=null,l=null;this.flowType==="pkce"&&([a,l]=await ba(this.storage,this.storageKey,!0));try{return await ae(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:a,code_challenge_method:l,gotrue_meta_security:{captcha_token:s.captchaToken}},headers:this.headers,redirectTo:s.redirectTo})}catch(u){if(await jt(this.storage,`${this.storageKey}-code-verifier`),W(u))return this._returnResult({data:null,error:u});throw u}}async getUserIdentities(){var e;try{const{data:s,error:a}=await this.getUser();if(a)throw a;return this._returnResult({data:{identities:(e=s.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var s;try{const{data:a,error:l}=await this._useSession(async u=>{var c,d,m,p,g;const{data:y,error:w}=u;if(w)throw w;const _=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(c=e.options)===null||c===void 0?void 0:c.redirectTo,scopes:(d=e.options)===null||d===void 0?void 0:d.scopes,queryParams:(m=e.options)===null||m===void 0?void 0:m.queryParams,skipBrowserRedirect:!0});return await ae(this.fetch,"GET",_,{headers:this.headers,jwt:(g=(p=y.session)===null||p===void 0?void 0:p.access_token)!==null&&g!==void 0?g:void 0})});if(l)throw l;return Ct()&&!(!((s=e.options)===null||s===void 0)&&s.skipBrowserRedirect)&&window.location.assign(a==null?void 0:a.url),this._returnResult({data:{provider:e.provider,url:a==null?void 0:a.url},error:null})}catch(a){if(W(a))return this._returnResult({data:{provider:e.provider,url:null},error:a});throw a}}async linkIdentityIdToken(e){return await this._useSession(async s=>{var a;try{const{error:l,data:{session:u}}=s;if(l)throw l;const{options:c,provider:d,token:m,access_token:p,nonce:g}=e,y=await ae(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(a=u==null?void 0:u.access_token)!==null&&a!==void 0?a:void 0,body:{provider:d,id_token:m,access_token:p,nonce:g,link_identity:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}},xform:wn}),{data:w,error:_}=y;return _?this._returnResult({data:{user:null,session:null},error:_}):!w||!w.session||!w.user?this._returnResult({data:{user:null,session:null},error:new va}):(w.session&&(await this._saveSession(w.session),await this._notifyAllSubscribers("USER_UPDATED",w.session)),this._returnResult({data:w,error:_}))}catch(l){if(await jt(this.storage,`${this.storageKey}-code-verifier`),W(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}})}async unlinkIdentity(e){try{return await this._useSession(async s=>{var a,l;const{data:u,error:c}=s;if(c)throw c;return await ae(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(l=(a=u.session)===null||a===void 0?void 0:a.access_token)!==null&&l!==void 0?l:void 0})})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async _refreshAccessToken(e){const s=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(s,"begin");try{const a=Date.now();return await rN(async l=>(l>0&&await aN(200*Math.pow(2,l-1)),this._debug(s,"refreshing attempt",l),await ae(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:wn})),(l,u)=>{const c=200*Math.pow(2,l);return u&&kd(u)&&Date.now()+c-a<Ta})}catch(a){if(this._debug(s,"error",a),W(a))return this._returnResult({data:{session:null,user:null},error:a});throw a}finally{this._debug(s,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,s){const a=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:s.redirectTo,scopes:s.scopes,queryParams:s.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",s,"url",a),Ct()&&!s.skipBrowserRedirect&&window.location.assign(a),{data:{provider:e,url:a},error:null}}async _recoverAndRefresh(){var e,s;const a="#_recoverAndRefresh()";this._debug(a,"begin");try{const l=await vs(this.storage,this.storageKey);if(l&&this.userStorage){let c=await vs(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!c&&(c={user:l.user},await Ea(this.userStorage,this.storageKey+"-user",c)),l.user=(e=c==null?void 0:c.user)!==null&&e!==void 0?e:Od()}else if(l&&!l.user&&!l.user){const c=await vs(this.storage,this.storageKey+"-user");c&&(c!=null&&c.user)?(l.user=c.user,await jt(this.storage,this.storageKey+"-user"),await Ea(this.storage,this.storageKey,l)):l.user=Od()}if(this._debug(a,"session from storage",l),!this._isValidSession(l)){this._debug(a,"session is not valid"),l!==null&&await this._removeSession();return}const u=((s=l.expires_at)!==null&&s!==void 0?s:1/0)*1e3-Date.now()<Rd;if(this._debug(a,`session has${u?"":" not"} expired with margin of ${Rd}s`),u){if(this.autoRefreshToken&&l.refresh_token){const{error:c}=await this._callRefreshToken(l.refresh_token);c&&(console.error(c),kd(c)||(this._debug(a,"refresh failed with a non-retryable error, removing the session",c),await this._removeSession()))}}else if(l.user&&l.user.__isUserNotAvailableProxy===!0)try{const{data:c,error:d}=await this._getUser(l.access_token);!d&&(c!=null&&c.user)?(l.user=c.user,await this._saveSession(l),await this._notifyAllSubscribers("SIGNED_IN",l)):this._debug(a,"could not get user data, skipping SIGNED_IN notification")}catch(c){console.error("Error getting user data:",c),this._debug(a,"error getting user data, skipping SIGNED_IN notification",c)}else await this._notifyAllSubscribers("SIGNED_IN",l)}catch(l){this._debug(a,"error",l),console.error(l);return}finally{this._debug(a,"end")}}async _callRefreshToken(e){var s,a;if(!e)throw new vt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const l=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(l,"begin");try{this.refreshingDeferred=new qu;const{data:u,error:c}=await this._refreshAccessToken(e);if(c)throw c;if(!u.session)throw new vt;await this._saveSession(u.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",u.session);const d={data:u.session,error:null};return this.refreshingDeferred.resolve(d),d}catch(u){if(this._debug(l,"error",u),W(u)){const c={data:null,error:u};return kd(u)||await this._removeSession(),(s=this.refreshingDeferred)===null||s===void 0||s.resolve(c),c}throw(a=this.refreshingDeferred)===null||a===void 0||a.reject(u),u}finally{this.refreshingDeferred=null,this._debug(l,"end")}}async _notifyAllSubscribers(e,s,a=!0){const l=`#_notifyAllSubscribers(${e})`;this._debug(l,"begin",s,`broadcast = ${a}`);try{this.broadcastChannel&&a&&this.broadcastChannel.postMessage({event:e,session:s});const u=[],c=Array.from(this.stateChangeEmitters.values()).map(async d=>{try{await d.callback(e,s)}catch(m){u.push(m)}});if(await Promise.all(c),u.length>0){for(let d=0;d<u.length;d+=1)console.error(u[d]);throw u[0]}}finally{this._debug(l,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await jt(this.storage,`${this.storageKey}-code-verifier`);const s=Object.assign({},e),a=s.user&&s.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!a&&s.user&&await Ea(this.userStorage,this.storageKey+"-user",{user:s.user});const l=Object.assign({},s);delete l.user;const u=tb(l);await Ea(this.storage,this.storageKey,u)}else{const l=tb(s);await Ea(this.storage,this.storageKey,l)}}async _removeSession(){this._debug("#_removeSession()"),this.suppressGetSessionWarning=!1,await jt(this.storage,this.storageKey),await jt(this.storage,this.storageKey+"-code-verifier"),await jt(this.storage,this.storageKey+"-user"),this.userStorage&&await jt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Ct()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(s){console.error("removing visibilitychange callback failed",s)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Ta);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const s=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=s,s&&typeof s=="object"&&typeof s.unref=="function"?s.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(s)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const s=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,s&&clearTimeout(s)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async s=>{const{data:{session:a}}=s;if(!a||!a.refresh_token||!a.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const l=Math.floor((a.expires_at*1e3-e)/Ta);this._debug("#_autoRefreshTokenTick()",`access token expires in ${l} ticks, a tick lasts ${Ta}ms, refresh threshold is ${ff} ticks`),l<=ff&&await this._callRefreshToken(a.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof q1)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Ct()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const s=`#_onVisibilityChanged(${e})`;this._debug(s,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(s,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,s,a){const l=[`provider=${encodeURIComponent(s)}`];if(a!=null&&a.redirectTo&&l.push(`redirect_to=${encodeURIComponent(a.redirectTo)}`),a!=null&&a.scopes&&l.push(`scopes=${encodeURIComponent(a.scopes)}`),this.flowType==="pkce"){const[u,c]=await ba(this.storage,this.storageKey),d=new URLSearchParams({code_challenge:`${encodeURIComponent(u)}`,code_challenge_method:`${encodeURIComponent(c)}`});l.push(d.toString())}if(a!=null&&a.queryParams){const u=new URLSearchParams(a.queryParams);l.push(u.toString())}return a!=null&&a.skipBrowserRedirect&&l.push(`skip_http_redirect=${a.skipBrowserRedirect}`),`${e}?${l.join("&")}`}async _unenroll(e){try{return await this._useSession(async s=>{var a;const{data:l,error:u}=s;return u?this._returnResult({data:null,error:u}):await ae(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(a=l==null?void 0:l.session)===null||a===void 0?void 0:a.access_token})})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async _enroll(e){try{return await this._useSession(async s=>{var a,l;const{data:u,error:c}=s;if(c)return this._returnResult({data:null,error:c});const d=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:m,error:p}=await ae(this.fetch,"POST",`${this.url}/factors`,{body:d,headers:this.headers,jwt:(a=u==null?void 0:u.session)===null||a===void 0?void 0:a.access_token});return p?this._returnResult({data:null,error:p}):(e.factorType==="totp"&&m.type==="totp"&&(!((l=m==null?void 0:m.totp)===null||l===void 0)&&l.qr_code)&&(m.totp.qr_code=`data:image/svg+xml;utf-8,${m.totp.qr_code}`),this._returnResult({data:m,error:null}))})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async _verify(e){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async s=>{var a;const{data:l,error:u}=s;if(u)return this._returnResult({data:null,error:u});const c=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?ub(e.webauthn.credential_response):cb(e.webauthn.credential_response)})}:{code:e.code}),{data:d,error:m}=await ae(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:c,headers:this.headers,jwt:(a=l==null?void 0:l.session)===null||a===void 0?void 0:a.access_token});return m?this._returnResult({data:null,error:m}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+d.expires_in},d)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",d),this._returnResult({data:d,error:m}))})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}})}async _challenge(e){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async s=>{var a;const{data:l,error:u}=s;if(u)return this._returnResult({data:null,error:u});const c=await ae(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(a=l==null?void 0:l.session)===null||a===void 0?void 0:a.access_token});if(c.error)return c;const{data:d}=c;if(d.type!=="webauthn")return{data:d,error:null};switch(d.webauthn.type){case"create":return{data:Object.assign(Object.assign({},d),{webauthn:Object.assign(Object.assign({},d.webauthn),{credential_options:Object.assign(Object.assign({},d.webauthn.credential_options),{publicKey:ob(d.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},d),{webauthn:Object.assign(Object.assign({},d.webauthn),{credential_options:Object.assign(Object.assign({},d.webauthn.credential_options),{publicKey:lb(d.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}})}async _challengeAndVerify(e){const{data:s,error:a}=await this._challenge({factorId:e.factorId});return a?this._returnResult({data:null,error:a}):await this._verify({factorId:e.factorId,challengeId:s.id,code:e.code})}async _listFactors(){var e;const{data:{user:s},error:a}=await this.getUser();if(a)return{data:null,error:a};const l={all:[],phone:[],totp:[],webauthn:[]};for(const u of(e=s==null?void 0:s.factors)!==null&&e!==void 0?e:[])l.all.push(u),u.status==="verified"&&l[u.factor_type].push(u);return{data:l,error:null}}async _getAuthenticatorAssuranceLevel(e){var s,a,l,u;if(e)try{const{payload:_}=su(e);let S=null;_.aal&&(S=_.aal);let A=S;const{data:{user:k},error:R}=await this.getUser(e);if(R)return this._returnResult({data:null,error:R});((a=(s=k==null?void 0:k.factors)===null||s===void 0?void 0:s.filter(G=>G.status==="verified"))!==null&&a!==void 0?a:[]).length>0&&(A="aal2");const E=_.amr||[];return{data:{currentLevel:S,nextLevel:A,currentAuthenticationMethods:E},error:null}}catch(_){if(W(_))return this._returnResult({data:null,error:_});throw _}const{data:{session:c},error:d}=await this.getSession();if(d)return this._returnResult({data:null,error:d});if(!c)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:m}=su(c.access_token);let p=null;m.aal&&(p=m.aal);let g=p;((u=(l=c.user.factors)===null||l===void 0?void 0:l.filter(_=>_.status==="verified"))!==null&&u!==void 0?u:[]).length>0&&(g="aal2");const w=m.amr||[];return{data:{currentLevel:p,nextLevel:g,currentAuthenticationMethods:w},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async s=>{const{data:{session:a},error:l}=s;return l?this._returnResult({data:null,error:l}):a?await ae(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:a.access_token,xform:u=>({data:u,error:null})}):this._returnResult({data:null,error:new vt})})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async _approveAuthorization(e,s){try{return await this._useSession(async a=>{const{data:{session:l},error:u}=a;if(u)return this._returnResult({data:null,error:u});if(!l)return this._returnResult({data:null,error:new vt});const c=await ae(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:l.access_token,body:{action:"approve"},xform:d=>({data:d,error:null})});return c.data&&c.data.redirect_url&&Ct()&&!(s!=null&&s.skipBrowserRedirect)&&window.location.assign(c.data.redirect_url),c})}catch(a){if(W(a))return this._returnResult({data:null,error:a});throw a}}async _denyAuthorization(e,s){try{return await this._useSession(async a=>{const{data:{session:l},error:u}=a;if(u)return this._returnResult({data:null,error:u});if(!l)return this._returnResult({data:null,error:new vt});const c=await ae(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:l.access_token,body:{action:"deny"},xform:d=>({data:d,error:null})});return c.data&&c.data.redirect_url&&Ct()&&!(s!=null&&s.skipBrowserRedirect)&&window.location.assign(c.data.redirect_url),c})}catch(a){if(W(a))return this._returnResult({data:null,error:a});throw a}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:s},error:a}=e;return a?this._returnResult({data:null,error:a}):s?await ae(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:s.access_token,xform:l=>({data:l,error:null})}):this._returnResult({data:null,error:new vt})})}catch(e){if(W(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async s=>{const{data:{session:a},error:l}=s;return l?this._returnResult({data:null,error:l}):a?(await ae(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:a.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new vt})})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async fetchJwk(e,s={keys:[]}){let a=s.keys.find(d=>d.kid===e);if(a)return a;const l=Date.now();if(a=this.jwks.keys.find(d=>d.kid===e),a&&this.jwks_cached_at+GO>l)return a;const{data:u,error:c}=await ae(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(c)throw c;return!u.keys||u.keys.length===0||(this.jwks=u,this.jwks_cached_at=l,a=u.keys.find(d=>d.kid===e),!a)?null:a}async getClaims(e,s={}){try{let a=e;if(!a){const{data:_,error:S}=await this.getSession();if(S||!_.session)return this._returnResult({data:null,error:S});a=_.session.access_token}const{header:l,payload:u,signature:c,raw:{header:d,payload:m}}=su(a);s!=null&&s.allowExpired||fN(u.exp);const p=!l.alg||l.alg.startsWith("HS")||!l.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(l.kid,s!=null&&s.keys?{keys:s.keys}:s==null?void 0:s.jwks);if(!p){const{error:_}=await this.getUser(a);if(_)throw _;return{data:{claims:u,header:l,signature:c},error:null}}const g=mN(l.alg),y=await crypto.subtle.importKey("jwk",p,g,!0,["verify"]);if(!await crypto.subtle.verify(g,y,c,eN(`${d}.${m}`)))throw new gf("Invalid JWT signature");return{data:{claims:u,header:l,signature:c},error:null}}catch(a){if(W(a))return this._returnResult({data:null,error:a});throw a}}async signInWithPasskey(e){var s,a,l;On(this.experimental);try{if(!Ou())return this._returnResult({data:null,error:new Dn("Browser does not support WebAuthn",null)});const{data:u,error:c}=await this._startPasskeyAuthentication({options:{captchaToken:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}});if(c||!u)return this._returnResult({data:null,error:c});const d=lb(u.options),m=(l=(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.signal)!==null&&l!==void 0?l:yf.createNewAbortSignal(),{data:p,error:g}=await Y1({publicKey:d,signal:m});if(g||!p)return this._returnResult({data:null,error:g??new Dn("WebAuthn ceremony failed",null)});const y=cb(p);return this._verifyPasskeyAuthentication({challengeId:u.challenge_id,credential:y})}catch(u){if(W(u))return this._returnResult({data:null,error:u});throw u}}async registerPasskey(e){var s,a;On(this.experimental);try{if(!Ou())return this._returnResult({data:null,error:new Dn("Browser does not support WebAuthn",null)});const{data:l,error:u}=await this._startPasskeyRegistration();if(u||!l)return this._returnResult({data:null,error:u});const c=ob(l.options),d=(a=(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.signal)!==null&&a!==void 0?a:yf.createNewAbortSignal(),{data:m,error:p}=await K1({publicKey:c,signal:d});if(p||!m)return this._returnResult({data:null,error:p??new Dn("WebAuthn ceremony failed",null)});const g=ub(m);return this._verifyPasskeyRegistration({challengeId:l.challenge_id,credential:g})}catch(l){if(W(l))return this._returnResult({data:null,error:l});throw l}}async _startPasskeyRegistration(){On(this.experimental);try{return await this._useSession(async e=>{const{data:{session:s},error:a}=e;if(a)return this._returnResult({data:null,error:a});if(!s)return this._returnResult({data:null,error:new vt});const{data:l,error:u}=await ae(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:s.access_token,body:{}});return u?this._returnResult({data:null,error:u}):this._returnResult({data:l,error:null})})}catch(e){if(W(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){On(this.experimental);try{return await this._useSession(async s=>{const{data:{session:a},error:l}=s;if(l)return this._returnResult({data:null,error:l});if(!a)return this._returnResult({data:null,error:new vt});const{data:u,error:c}=await ae(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:a.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return c?this._returnResult({data:null,error:c}):this._returnResult({data:u,error:null})})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async _startPasskeyAuthentication(e){var s;On(this.experimental);try{const{data:a,error:l}=await ae(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}}});return l?this._returnResult({data:null,error:l}):this._returnResult({data:a,error:null})}catch(a){if(W(a))return this._returnResult({data:null,error:a});throw a}}async _verifyPasskeyAuthentication(e){On(this.experimental);try{const{data:s,error:a}=await ae(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:wn});return a?this._returnResult({data:null,error:a}):(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),this._returnResult({data:s,error:null}))}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async _listPasskeys(){On(this.experimental);try{return await this._useSession(async e=>{const{data:{session:s},error:a}=e;if(a)return this._returnResult({data:null,error:a});if(!s)return this._returnResult({data:null,error:new vt});const{data:l,error:u}=await ae(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:s.access_token,xform:c=>({data:c,error:null})});return u?this._returnResult({data:null,error:u}):this._returnResult({data:l,error:null})})}catch(e){if(W(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){On(this.experimental);try{return await this._useSession(async s=>{const{data:{session:a},error:l}=s;if(l)return this._returnResult({data:null,error:l});if(!a)return this._returnResult({data:null,error:new vt});const{data:u,error:c}=await ae(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:a.access_token,body:{friendly_name:e.friendlyName}});return c?this._returnResult({data:null,error:c}):this._returnResult({data:u,error:null})})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async _deletePasskey(e){On(this.experimental);try{return await this._useSession(async s=>{const{data:{session:a},error:l}=s;if(l)return this._returnResult({data:null,error:l});if(!a)return this._returnResult({data:null,error:new vt});const{error:u}=await ae(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:a.access_token,noResolveJson:!0});return u?this._returnResult({data:null,error:u}):this._returnResult({data:null,error:null})})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}}yo.nextInstanceID={};const zN=yo,BN="2.105.4";let Kr="";typeof Deno<"u"?Kr="deno":typeof document<"u"?Kr="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Kr="react-native":Kr="node";const VN={"X-Client-Info":`supabase-js-${Kr}/${BN}`},HN={headers:VN},$N={schema:"public"},qN={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},IN={};function vo(n){"@babel/helpers - typeof";return vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vo(n)}function GN(n,e){if(vo(n)!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var a=s.call(n,e);if(vo(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function KN(n){var e=GN(n,"string");return vo(e)=="symbol"?e:e+""}function YN(n,e,s){return(e=KN(e))in n?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s,n}function db(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),s.push.apply(s,a)}return s}function tt(n){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?db(Object(s),!0).forEach(function(a){YN(n,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):db(Object(s)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))})}return n}const FN=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),XN=()=>Headers,JN=(n,e,s)=>{const a=FN(s),l=XN();return async(u,c)=>{var d;const m=(d=await e())!==null&&d!==void 0?d:n;let p=new l(c==null?void 0:c.headers);return p.has("apikey")||p.set("apikey",n),p.has("Authorization")||p.set("Authorization",`Bearer ${m}`),a(u,tt(tt({},c),{},{headers:p}))}};function ZN(n){return n.endsWith("/")?n:n+"/"}function QN(n,e){var s,a;const{db:l,auth:u,realtime:c,global:d}=n,{db:m,auth:p,realtime:g,global:y}=e,w={db:tt(tt({},m),l),auth:tt(tt({},p),u),realtime:tt(tt({},g),c),storage:{},global:tt(tt(tt({},y),d),{},{headers:tt(tt({},(s=y==null?void 0:y.headers)!==null&&s!==void 0?s:{}),(a=d==null?void 0:d.headers)!==null&&a!==void 0?a:{})}),accessToken:async()=>""};return n.accessToken?w.accessToken=n.accessToken:delete w.accessToken,w}function WN(n){const e=n==null?void 0:n.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(ZN(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var eD=class extends zN{constructor(n){super(n)}},tD=class{constructor(n,e,s){var a,l;this.supabaseUrl=n,this.supabaseKey=e;const u=WN(n);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",u),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",u),this.storageUrl=new URL("storage/v1",u),this.functionsUrl=new URL("functions/v1",u);const c=`sb-${u.hostname.split(".")[0]}-auth-token`,d={db:$N,realtime:IN,auth:tt(tt({},qN),{},{storageKey:c}),global:HN},m=QN(s??{},d);if(this.storageKey=(a=m.auth.storageKey)!==null&&a!==void 0?a:"",this.headers=(l=m.global.headers)!==null&&l!==void 0?l:{},m.accessToken)this.accessToken=m.accessToken,this.auth=new Proxy({},{get:(g,y)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(y)} is not possible`)}});else{var p;this.auth=this._initSupabaseAuthClient((p=m.auth)!==null&&p!==void 0?p:{},this.headers,m.global.fetch)}this.fetch=JN(e,this._getAccessToken.bind(this),m.global.fetch),this.realtime=this._initRealtimeClient(tt({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},m.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(g=>this.realtime.setAuth(g)).catch(g=>console.warn("Failed to set initial Realtime auth token:",g)),this.rest=new jk(new URL("rest/v1",u).href,{headers:this.headers,schema:m.db.schema,fetch:this.fetch,timeout:m.db.timeout,urlLengthLimit:m.db.urlLengthLimit}),this.storage=new VO(this.storageUrl.href,this.headers,this.fetch,s==null?void 0:s.storage),m.accessToken||this._listenForAuthEvents()}get functions(){return new yk(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(n){return this.rest.from(n)}schema(n){return this.rest.schema(n)}rpc(n,e={},s={head:!1,get:!1,count:void 0}){return this.rest.rpc(n,e,s)}channel(n,e={config:{}}){return this.realtime.channel(n,e)}getChannels(){return this.realtime.getChannels()}removeChannel(n){return this.realtime.removeChannel(n)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var n=this,e,s;if(n.accessToken)return await n.accessToken();const{data:a}=await n.auth.getSession();return(e=(s=a.session)===null||s===void 0?void 0:s.access_token)!==null&&e!==void 0?e:n.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:n,persistSession:e,detectSessionInUrl:s,storage:a,userStorage:l,storageKey:u,flowType:c,lock:d,debug:m,throwOnError:p,experimental:g,lockAcquireTimeout:y,skipAutoInitialize:w},_,S){const A={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new eD({url:this.authUrl.href,headers:tt(tt({},A),_),storageKey:u,autoRefreshToken:n,persistSession:e,detectSessionInUrl:s,storage:a,userStorage:l,flowType:c,lock:d,debug:m,throwOnError:p,experimental:g,fetch:S,lockAcquireTimeout:y,skipAutoInitialize:w,hasCustomAuthorizationHeader:Object.keys(this.headers).some(k=>k.toLowerCase()==="authorization")})}_initRealtimeClient(n){return new uO(this.realtimeUrl.href,tt(tt({},n),{},{params:tt(tt({},{apikey:this.supabaseKey}),n==null?void 0:n.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,e)=>{this._handleTokenChanged(n,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(n,e,s){(n==="TOKEN_REFRESHED"||n==="SIGNED_IN")&&this.changedAccessToken!==s?(this.changedAccessToken=s,this.realtime.setAuth(s)):n==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const nD=(n,e,s)=>new tD(n,e,s);function iD(){if(typeof window<"u")return!1;const n=globalThis.process;if(!n)return!1;const e=n.version;if(e==null)return!1;const s=e.match(/^v(\d+)\./);return s?parseInt(s[1],10)<=18:!1}iD()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const sD="https://plypplsatbifokwwqwla.supabase.co",F1="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseXBwbHNhdGJpZm9rd3dxd2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTAxNzQsImV4cCI6MjA5NDY2NjE3NH0.LWz36nit3AISE2SJvQIwhyezLGxUsPs-L2RUsobdJO8",om=!!F1,de=om?nD(sD,F1):null,vf=n=>{if(!n)return"";const e=n.match(/^(\d{4})-01-01$/);if(e)return e[1];const s=n.match(/^(\d{4})-12-31$/);return s?s[1]:n.slice(0,10)},aD=(n,e)=>{const s=vf(n),a=e?vf(e):"Present";return s?`${s} - ${a}`:a},rD=(n,e,s)=>({title:(n==null?void 0:n.title)||e,subtitle:(n==null?void 0:n.subtitle)||s,cvUrl:""}),oD=n=>n.length?n.map(e=>({year:aD(e.start_date,e.end_date),role:e.role,company:e.company,description:e.description||""})):io,lD=n=>n.length?n.map(e=>({year:vf(e.end_date||e.start_date),degree:e.diploma,school:e.school,url:e.kind||""})):bu,uD=n=>{const e=[...wu,xu];if(!n.length)return e;const s=e.map(l=>{const u=n.find(c=>c.title.toLowerCase()===l.title.toLowerCase()||(c.slug||"").toLowerCase()===l.title.toLowerCase());return u?{title:u.title,description:u.summary||u.content||l.description,tags:u.stack?u.stack.split(",").map(c=>c.trim()).filter(Boolean):l.tags,imageUrl:u.cover_path&&u.cover_path.startsWith("http")?u.cover_path:l.imageUrl,repoUrl:u.repository_url||u.project_url||l.repoUrl,demoUrl:u.project_url||l.demoUrl,status:u.is_published===!1?"in-progress":"completed"}:l}),a=n.filter(l=>!e.some(u=>u.title.toLowerCase()===l.title.toLowerCase()||(l.slug||"").toLowerCase()===u.title.toLowerCase())).map(l=>({title:l.title,description:l.summary||l.content||"",tags:l.stack?l.stack.split(",").map(u=>u.trim()).filter(Boolean):[],imageUrl:l.cover_path&&l.cover_path.startsWith("http")?l.cover_path:"",repoUrl:l.repository_url||l.project_url||"#",demoUrl:l.project_url||void 0,status:l.is_published===!1?"in-progress":"completed"}));return[...s,...a]},X1=async n=>{const e=cu[n];if(!om||!de)return{loaded:!0,hero:{title:e.hero.title,subtitle:e.hero.subtitle,cvUrl:""},experiences:io,educations:bu,projects:wu,zemiProject:xu,translations:cu};const[s,a,l,u,c]=await Promise.all([de.from("profile").select("*").limit(1).maybeSingle(),de.from("experiences").select("*").eq("is_published",!0).order("sort_order",{ascending:!0}),de.from("educations").select("*").eq("is_published",!0).order("sort_order",{ascending:!0}),de.from("projects").select("*").eq("is_published",!0).order("sort_order",{ascending:!0}),de.from("site_settings").select("*").limit(1).maybeSingle()]),d=rD(null,e.hero.title,e.hero.subtitle),m=s.data,p=c.data;return{loaded:!0,hero:{title:(p==null?void 0:p.hero_title)||(m==null?void 0:m.title)||d.title,subtitle:(p==null?void 0:p.hero_subtitle)||(m==null?void 0:m.subtitle)||d.subtitle,cvUrl:""},experiences:a.error?io:oD(a.data||[]),educations:l.error?bu:lD(l.data||[]),projects:u.error?wu:uD(u.data||[]),zemiProject:xu,translations:cu}},cD=()=>{const{t:n}=Uu(),[e,s]=Ce.useState(null),a={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.45,ease:[.22,.61,.36,1]}},l={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.46,.45,.94]}}},u={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.33,.68,.41,.98]}}},c={hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:.55,ease:[.25,.46,.45,.94]}}},d={visible:{transition:{staggerChildren:.12}}},m={visible:{transition:{staggerChildren:.08}}};Ce.useEffect(()=>{let _=!0;return X1("fr").then(S=>{_&&s(S)}),()=>{_=!1}},[]);const p=(e==null?void 0:e.hero.title)||n.hero.title,g=(e==null?void 0:e.hero.subtitle)||n.hero.subtitle,y=(e==null?void 0:e.hero.cvUrl)||fk;e!=null&&e.experiences;const w=(e==null?void 0:e.educations)||bu;return b.jsxs(pt.div,{variants:a,initial:"initial",animate:"animate",exit:"exit",className:"flex flex-col gap-20 pb-20",children:[b.jsx(co,{title:n.seo.home.title,description:n.seo.home.description}),b.jsxs("section",{className:"relative pt-20 pb-28 md:pt-28 overflow-hidden",children:[b.jsxs("div",{className:"container mx-auto px-4 flex flex-col items-center text-center gap-5 z-10 relative",children:[b.jsx(pt.div,{initial:{scale:.92,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.65,ease:[.34,1.25,.64,1]},className:"w-32 h-32 md:w-36 md:h-36 rounded-2xl border-2 border-primary/15 overflow-hidden shadow-lg mb-3",children:b.jsx("img",{src:dk,alt:"Lauret CHACHA",className:"w-full h-full object-cover"})}),b.jsx(pt.h1,{initial:"hidden",animate:"visible",variants:l,className:"text-4xl md:text-5xl font-bold tracking-tight text-foreground",children:p}),b.jsx(pt.p,{initial:"hidden",animate:"visible",variants:l,className:"text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed",children:g}),b.jsxs(pt.div,{initial:"hidden",animate:"visible",variants:l,className:"flex flex-wrap justify-center gap-3 mt-6",children:[b.jsx("a",{href:y,download:!0,children:b.jsxs(dt,{size:"lg",className:"gap-2",children:[b.jsx(OE,{className:"h-4 w-4"})," ",n.hero.cta_cv]})}),b.jsx(Es,{to:"/projects",children:b.jsxs(dt,{variant:"outline",size:"lg",className:"gap-2",children:[n.hero.cta_projects," ",b.jsx(uE,{className:"h-4 w-4"})]})})]})]}),b.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] -z-10"})]}),b.jsx("section",{className:"container mx-auto px-4",children:b.jsxs("div",{className:"grid md:grid-cols-2 gap-14 items-start",children:[b.jsxs(pt.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},variants:d,className:"space-y-7",children:[b.jsxs(pt.h2,{variants:u,className:"text-3xl font-bold flex items-center gap-2.5",children:[b.jsx(yE,{className:"text-primary h-7 w-7"}),n.about.title]}),b.jsxs(pt.div,{variants:u,className:"prose dark:prose-invert text-muted-foreground space-y-4 leading-relaxed",children:[b.jsx("p",{children:n.about.bio_p1}),b.jsx("p",{children:n.about.bio_p2}),b.jsx("p",{children:n.about.bio_p3})]}),b.jsxs(pt.div,{variants:u,className:"pt-5",children:[b.jsx("h3",{className:"text-base font-semibold mb-3.5",children:n.about.values_title}),b.jsx("div",{className:"flex flex-wrap gap-2.5",children:n.about.values.map((_,S)=>b.jsx("span",{className:"px-3.5 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border",children:_},S))})]})]}),b.jsxs("div",{className:"space-y-11",children:[b.jsxs(pt.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},variants:m,children:[b.jsxs("h3",{className:"text-2xl font-bold mb-5 flex items-center gap-2.5",children:[b.jsx(wE,{className:"h-5 w-5 text-primary"})," ",n.experience.title]}),b.jsx("div",{className:"border-l-2 border-border ml-2 space-y-7 pl-6 relative",children:io.map((_,S)=>b.jsxs(pt.div,{variants:c,className:"relative",children:[b.jsx("span",{className:"absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background"}),b.jsx("span",{className:"text-sm text-muted-foreground font-mono",children:_.year}),b.jsx("h4",{className:"text-lg font-semibold mt-0.5",children:_.role}),b.jsx("p",{className:"text-primary/80 font-medium",children:_.company}),b.jsx("p",{className:"text-muted-foreground text-sm mt-1.5 leading-relaxed",children:_.description})]},S))})]}),b.jsxs(pt.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},variants:m,children:[b.jsxs("h3",{className:"text-2xl font-bold mb-5 flex items-center gap-2.5",children:[b.jsx(fE,{className:"h-5 w-5 text-primary"})," ",n.education.title]}),b.jsx("div",{className:"space-y-3.5",children:w.map((_,S)=>b.jsxs(pt.div,{variants:c,className:"p-4 rounded-lg bg-muted/40 border border-border",children:[b.jsxs("div",{className:"flex justify-between items-start mb-1",children:[b.jsx("h4",{className:"font-semibold text-[15px]",children:_.degree}),b.jsx("span",{className:"text-xs font-mono bg-background px-2 py-1 rounded border shrink-0 ml-3",children:_.year})]}),b.jsx("p",{className:"text-sm text-muted-foreground",children:_.school})]},S))})]})]})]})}),b.jsxs("section",{className:"container mx-auto px-4 bg-secondary/30 py-14 rounded-3xl",children:[b.jsx("h2",{className:"text-3xl font-bold text-center mb-10",children:n.skills.title}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7",children:[b.jsx(au,{title:n.skills.frontend,icon:b.jsx(pv,{}),skills:[{name:"HTML5",icon:b.jsx(UE,{className:"w-4 h-4"})},{name:"CSS3",icon:b.jsx(sA,{className:"w-4 h-4"})},{name:"React.js",icon:b.jsx(hE,{className:"w-4 h-4"})},{name:"Next.js",icon:b.jsx(RA,{className:"w-4 h-4"})},{name:"Vue.js",icon:b.jsx(du,{className:"w-4 h-4"})},{name:"Tailwind CSS",icon:b.jsx(SA,{className:"w-4 h-4"})},{name:"TypeScript",icon:b.jsx(pE,{className:"w-4 h-4"})}]}),b.jsx(au,{title:n.skills.backend,icon:b.jsx(cA,{}),skills:[{name:"Node.js",icon:b.jsx(KE,{className:"w-4 h-4"})},{name:"NestJS",icon:b.jsx(du,{className:"w-4 h-4"})},{name:"PHP",icon:b.jsx(yv,{className:"w-4 h-4"})},{name:"Laravel",icon:b.jsx(du,{className:"w-4 h-4"})},{name:"Python",icon:b.jsx(pv,{className:"w-4 h-4"})},{name:"Express",icon:b.jsx(EA,{className:"w-4 h-4"})},{name:"API REST",icon:b.jsx(hu,{className:"w-4 h-4"})}]}),b.jsx(au,{title:n.skills.db,icon:b.jsx(Bb,{}),skills:[{name:"MySQL",icon:b.jsx(gA,{className:"w-4 h-4"})},{name:"MongoDB",icon:b.jsx(yv,{className:"w-4 h-4"})},{name:"Prisma",icon:b.jsx(_v,{className:"w-4 h-4"})}]}),b.jsx(au,{title:n.skills.tools,icon:b.jsx(vA,{}),skills:[{name:"Git",icon:b.jsx(VE,{className:"w-4 h-4"})},{name:"Docker",icon:b.jsx(CE,{className:"w-4 h-4"})},{name:"Linux",icon:b.jsx(AE,{className:"w-4 h-4"})},{name:"Postman",icon:b.jsx(lA,{className:"w-4 h-4"})},{name:"Vercel",icon:b.jsx(_v,{className:"w-4 h-4 rotate-180"})},{name:"WordPress",icon:b.jsx(hu,{className:"w-4 h-4"})},{name:"API",icon:b.jsx(hu,{className:"w-4 h-4"})}]})]})]})]})},au=({title:n,icon:e,skills:s})=>b.jsxs("div",{className:"bg-background p-6 rounded-xl shadow-sm border border-border transition-shadow hover:shadow-md",children:[b.jsxs("div",{className:"flex items-center gap-3 mb-5 text-primary",children:[b.jsx("div",{className:"p-2 bg-primary/10 rounded-lg",children:Ce.cloneElement(e,{className:"w-6 h-6"})}),b.jsx("h3",{className:"font-semibold text-lg text-foreground",children:n})]}),b.jsx("ul",{className:"grid grid-cols-1 gap-2.5",children:s.map(a=>b.jsxs("li",{className:"text-sm text-muted-foreground flex items-center gap-3 p-2 rounded-md hover:bg-secondary/50 transition-colors duration-150",children:[b.jsx("div",{className:"text-primary/80",children:a.icon}),b.jsx("span",{className:"font-medium",children:a.name})]},a.name))})]}),hD=()=>{const{language:n,t:e}=Uu(),[s,a]=Ce.useState(null),l={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.45,ease:[.22,.61,.36,1]}};Ce.useEffect(()=>{let d=!0;return X1(n).then(m=>{d&&a(m)}),()=>{d=!1}},[n]);const u=(s==null?void 0:s.projects)||wu,c=(s==null?void 0:s.zemiProject)||xu;return b.jsxs(pt.div,{variants:l,initial:"initial",animate:"animate",exit:"exit",className:"container mx-auto px-4 py-12 md:py-20 space-y-20",children:[b.jsx(co,{title:e.seo.projects.title,description:e.seo.projects.description}),b.jsxs("div",{className:"text-center space-y-4",children:[b.jsx("h1",{className:"text-4xl font-bold",children:e.projects.title}),b.jsx("p",{className:"text-xl text-muted-foreground",children:e.projects.subtitle})]}),b.jsxs("section",{children:[b.jsx("h2",{className:"text-2xl font-bold mb-7 border-b border-border pb-3.5",children:e.projects.completed}),b.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-7",children:u.map((d,m)=>b.jsxs(pt.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-30px"},transition:{delay:m*.08+.05,duration:.5,ease:[.25,.46,.45,.94]},className:"group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-border/70 transition-all duration-300",children:[b.jsxs("div",{className:"relative h-48 overflow-hidden bg-muted",children:[b.jsx("img",{src:d.imageUrl,alt:d.title,className:"w-full h-full object-cover"}),b.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5 gap-2",children:[b.jsx("a",{href:d.repoUrl,target:"_blank",rel:"noreferrer",children:b.jsxs(dt,{size:"sm",variant:"secondary",className:"gap-2 shadow-lg",children:[b.jsx(gv,{className:"h-4 w-4"})," Go to"]})}),d.demoUrl&&b.jsxs(dt,{size:"sm",variant:"secondary",className:"gap-2 shadow-lg",children:[b.jsx(gv,{className:"h-4 w-4"})," Demo"]})]})]}),b.jsxs("div",{className:"p-5 space-y-3.5",children:[b.jsx("h3",{className:"text-lg font-semibold",children:d.title}),b.jsx("p",{className:"text-sm text-muted-foreground line-clamp-3 leading-relaxed",children:d.description}),b.jsx("div",{className:"flex flex-wrap gap-2",children:d.tags.map(p=>b.jsx("span",{className:"text-xs px-2.5 py-1 bg-secondary rounded-md font-medium text-secondary-foreground",children:p},p))})]})]},m))})]}),b.jsx("section",{className:"bg-muted/30 rounded-3xl p-8 md:p-11 border border-primary/10",children:b.jsxs("div",{className:"flex flex-col md:flex-row gap-10 items-center",children:[b.jsxs("div",{className:"flex-1 space-y-5",children:[b.jsxs("div",{className:"flex items-center gap-2 text-primary font-bold uppercase tracking-wide text-xs",children:[b.jsx(wv,{className:"h-4 w-4"})," ",e.projects.in_progress]}),b.jsx("h2",{className:"text-3xl md:text-4xl font-bold",children:c.title}),b.jsx("p",{className:"text-base md:text-lg text-muted-foreground leading-relaxed",children:e.projects.zemi_desc}),b.jsxs("div",{className:"space-y-3.5 pt-2",children:[b.jsxs("div",{className:"flex gap-3 items-start",children:[b.jsx(du,{className:"h-5 w-5 mt-0.5 text-primary shrink-0"}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-semibold text-[15px] mb-1",children:n==="fr"?"Fonctionnalités":"Features"}),b.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:e.projects.zemi_features})]})]}),b.jsxs("div",{className:"flex gap-3 items-start",children:[b.jsx(wv,{className:"h-5 w-5 mt-0.5 text-primary shrink-0"}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-semibold text-[15px] mb-1",children:n==="fr"?"Feuille de route":"Roadmap"}),b.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:e.projects.zemi_roadmap})]})]})]}),b.jsx("div",{className:"flex flex-wrap gap-2 pt-3",children:c.tags.map(d=>b.jsx("span",{className:"text-xs px-2.5 py-1 border border-primary/30 text-primary rounded-md font-medium",children:d},d))})]}),b.jsx("div",{className:"flex-1 w-full",children:b.jsx("div",{className:"aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center border border-border shadow-xl overflow-hidden",children:b.jsx("img",{src:c.imageUrl,alt:c.title,className:"w-full h-full object-cover"})})})]})}),b.jsxs("section",{className:"max-w-2xl mx-auto text-center space-y-5",children:[b.jsx("h2",{className:"text-2xl font-bold",children:e.perspectives.title}),b.jsxs("p",{className:"text-muted-foreground italic text-base md:text-lg leading-relaxed",children:['"',e.perspectives.content,'"']})]})]})},dD=()=>{const{t:n,language:e}=Uu(),s={initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.5,ease:[.25,.46,.45,.94]}};return b.jsxs(pt.div,{variants:s,initial:"initial",animate:"animate",exit:"exit",className:"container mx-auto px-4 py-12 md:py-20 max-w-3xl",children:[b.jsx(co,{title:n.seo.contact.title,description:n.seo.contact.description}),b.jsxs("div",{className:"text-center space-y-3 mb-10",children:[b.jsx("h1",{className:"text-3xl md:text-4xl font-bold",children:n.contact.title}),b.jsx("p",{className:"text-base md:text-lg text-muted-foreground",children:n.contact.subtitle})]}),b.jsx("div",{className:"w-full flex justify-center",children:b.jsxs("div",{className:"max-w-lg w-full bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm text-center space-y-7",children:[b.jsx("div",{className:"p-4 bg-primary/5 rounded-xl text-sm md:text-base text-muted-foreground border border-primary/10 leading-relaxed",children:e==="fr"?"Je suis actuellement ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter !":"I am currently open to new opportunities and collaborations. Feel free to reach out!"}),b.jsxs("div",{className:"space-y-5",children:[b.jsx("h3",{className:"font-semibold text-lg text-foreground",children:e==="fr"?"Me Joindre":"Connect"}),b.jsxs("div",{className:"flex flex-col items-stretch gap-3 text-muted-foreground",children:[b.jsxs("a",{href:"mailto:lauret.chacha@epitech.eu",className:"flex items-center gap-3.5 p-3 rounded-lg hover:bg-secondary/70 transition-colors duration-200 text-left",children:[b.jsx("div",{className:"p-2.5 bg-secondary rounded-lg shrink-0",children:b.jsx(Kb,{className:"h-5 w-5"})}),b.jsx("span",{className:"text-sm md:text-base",children:"lauret.chacha@epitech.eu"})]}),b.jsxs("a",{href:"https://github.com/Handsomeboy990",target:"_blank",rel:"noreferrer",className:"flex items-center gap-3.5 p-3 rounded-lg hover:bg-secondary/70 transition-colors duration-200 text-left",children:[b.jsx("div",{className:"p-2.5 bg-secondary rounded-lg shrink-0",children:b.jsx(Hb,{className:"h-5 w-5"})}),b.jsx("span",{className:"text-sm md:text-base",children:"@Handsomeboy990"})]}),b.jsxs("a",{href:"https://linkedin.com/in/lauret-kryst-sasler-chacha-a877161aa",target:"_blank",rel:"noreferrer",className:"flex items-center gap-3.5 p-3 rounded-lg hover:bg-secondary/70 transition-colors duration-200 text-left",children:[b.jsx("div",{className:"p-2.5 bg-secondary rounded-lg shrink-0",children:b.jsx(Gb,{className:"h-5 w-5"})}),b.jsx("span",{className:"text-sm md:text-base",children:"Lauret CHACHA"})]})]})]})]})})]})},xa="portfolio-admin-draft",fb={profile:{title:"Lauret Kryst-Sasler CHACHA",subtitle:"Développeur Web Full Stack",bio:"Rédige ici le texte principal du profil public.",email:"lauret.chacha@epitech.eu",linkedin:"https://linkedin.com/in/lauret-kryst-sasler-chacha-a877161aa",github:"https://github.com/Handsomeboy990",location:"France"},experience:[{company:"Epitech",role:"Full Stack Developer",period:"2025 - Present",description:"Développement web et intégration front/back.",isPublished:!0}],education:[{school:"Epitech",diploma:"Certification Full Stack Developer",period:"2026",isPublished:!0}],projects:[{title:"Zémi",status:"En cours",stack:"Next.js, MongoDB, TypeScript",summary:"Projet prioritaire à mettre en avant.",coverPath:"",projectUrl:"",repositoryUrl:""}],media:{cvPath:"/storage/cv/lauret-chacha.pdf",avatarPath:"/storage/avatar.jpg",projectMediaPath:"/storage/projects/"},seo:{siteName:"Lauret CHACHA",metaTitle:"Portfolio Lauret CHACHA",metaDescription:"Portfolio administrable avec backoffice privé."}},mb=[{key:"overview",label:"Aperçu",icon:Ib},{key:"profile",label:"Profil",icon:Yb},{key:"experience",label:"Expériences",icon:zb},{key:"education",label:"Formations et certificats",icon:$b},{key:"projects",label:"Projets",icon:Vb},{key:"media",label:"Médias",icon:qb},{key:"seo",label:"SEO",icon:hu}],fD=n=>{if(!n)return null;try{return JSON.parse(n)}catch{return null}},Dd=n=>{if(!n)return null;const e=n.trim();return e?/^\d{4}$/.test(e)?`${e}-01-01`:/^\d{4}-\d{2}$/.test(e)?`${e}-01`:/^\d{4}-\d{2}-\d{2}$/.test(e)?e:null:null},pb=(n,e)=>{if(!n)return"";const s=n.match(/^(\d{4})-01-01$/);if(s)return s[1];const a=n.match(/^(\d{4})-12-31$/);return e&&a?a[1]:n},J1=(n,e)=>{const s=pb(n,!1),a=pb(e,!0);return!s&&!a?"":s&&!a?`${s} - Present`:!s&&a?a:`${s} - ${a}`},mD=n=>{if(!n)return"";try{const e=new Date(n);return Number.isNaN(e.getTime())?String(n):e.toLocaleString("fr-FR",{dateStyle:"medium",timeStyle:"short"})}catch{return String(n)}},gb=n=>{const e=n.trim();if(!e)return{start_date:null,end_date:null};const s=e.split("-").map(a=>a.trim()).filter(Boolean);return s.length>=2?{start_date:Dd(s[0]),end_date:s[1].toLowerCase()==="present"?null:Dd(s.slice(1).join("-"))}:{start_date:Dd(e),end_date:null}},yb=n=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),pD=n=>n===!1?"Brouillon":"Publié",gD=n=>!n.toLowerCase().includes("brouillon"),yD=n=>({title:n.profile.title,subtitle:n.profile.subtitle,bio:n.profile.bio,avatar_path:n.media.avatarPath,cv_path:n.media.cvPath,email:n.profile.email,linkedin_url:n.profile.linkedin,github_url:n.profile.github,location:n.profile.location}),vD=n=>({site_name:n.seo.siteName,seo_title:n.seo.metaTitle,seo_description:n.seo.metaDescription,hero_title:n.profile.title,hero_subtitle:n.profile.subtitle,footer_text:`${n.profile.title} - ${n.profile.location}`}),bD=(n,e)=>n?{...e,profile:{title:n.title||e.profile.title,subtitle:n.subtitle||e.profile.subtitle,bio:n.bio||e.profile.bio,email:n.email||e.profile.email,linkedin:n.linkedin_url||e.profile.linkedin,github:n.github_url||e.profile.github,location:n.location||e.profile.location},media:{cvPath:n.cv_path||e.media.cvPath,avatarPath:n.avatar_path||e.media.avatarPath,projectMediaPath:e.media.projectMediaPath}}:e,wD=(n,e)=>n.length?n.map(s=>({id:s.id,company:s.company,role:s.role,period:J1(s.start_date,s.end_date),description:s.description||"",isPublished:s.is_published!==!1})):e.experience,xD=(n,e)=>n.length?n.map(s=>({id:s.id,school:s.school,diploma:s.diploma,period:J1(s.start_date,s.end_date),isPublished:s.is_published!==!1})):e.education,_D=(n,e)=>n.length?n.map(s=>({id:s.id,title:s.title,status:pD(s.is_published),stack:s.stack||"",summary:s.summary||s.content||"",coverPath:s.cover_path||"",projectUrl:s.project_url||"",repositoryUrl:s.repository_url||""})):e.projects,Ne=({label:n,children:e,hint:s})=>b.jsxs("label",{className:"space-y-2 block",children:[b.jsxs("div",{className:"flex items-center justify-between gap-3",children:[b.jsx("span",{className:"text-sm font-medium text-foreground",children:n}),s?b.jsx("span",{className:"text-xs text-muted-foreground",children:s}):null]}),e]}),Ve=n=>b.jsx("input",{...n,className:`w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${n.className||""}`}),ru=n=>b.jsx("textarea",{...n,className:`min-h-[120px] w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${n.className||""}`}),Md=({label:n,value:e,detail:s,icon:a})=>b.jsx("div",{className:"rounded-2xl border border-border bg-card p-4 shadow-sm",children:b.jsxs("div",{className:"flex items-start justify-between gap-4",children:[b.jsxs("div",{children:[b.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground",children:n}),b.jsx("p",{className:"mt-2 text-2xl font-bold",children:e}),b.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:s})]}),b.jsx("div",{className:"rounded-xl bg-primary/10 p-3 text-primary",children:b.jsx(a,{className:"h-5 w-5"})})]})}),bs=({title:n,description:e,icon:s,children:a})=>b.jsxs("section",{className:"rounded-3xl border border-border bg-card p-6 shadow-sm",children:[b.jsxs("div",{className:"mb-6 flex items-start gap-3",children:[b.jsx("div",{className:"rounded-2xl bg-primary/10 p-3 text-primary",children:b.jsx(s,{className:"h-5 w-5"})}),b.jsxs("div",{children:[b.jsx("h2",{className:"text-xl font-semibold",children:n}),b.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:e})]})]}),a]}),SD=({email:n,password:e,loading:s,error:a,onEmailChange:l,onPasswordChange:u,onSubmit:c})=>b.jsxs("section",{className:"rounded-3xl border border-border bg-card p-6 shadow-sm",children:[b.jsxs("div",{className:"mb-5 flex items-start gap-3",children:[b.jsx("div",{className:"rounded-2xl bg-primary/10 p-3 text-primary",children:b.jsx(Yr,{className:"h-5 w-5"})}),b.jsxs("div",{children:[b.jsx("h2",{className:"text-xl font-semibold",children:"Connexion admin"}),b.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:"Entre les identifiants administrateur pour accéder au backoffice."})]})]}),b.jsxs("form",{className:"grid gap-4 md:grid-cols-[1fr_1fr_auto]",onSubmit:c,children:[b.jsx(Ne,{label:"Email",children:b.jsx(Ve,{type:"email",value:n,onChange:d=>l(d.target.value),placeholder:"admin@domaine.com"})}),b.jsx(Ne,{label:"Mot de passe",children:b.jsx(Ve,{type:"password",value:e,onChange:d=>u(d.target.value),placeholder:"••••••••"})}),b.jsx("div",{className:"flex items-end",children:b.jsxs(dt,{type:"submit",className:"w-full md:w-auto gap-2",disabled:s,children:[b.jsx(Yr,{className:"h-4 w-4"})," ",s?"Connexion...":"Se connecter"]})})]}),a?b.jsx("p",{className:"mt-4 text-sm text-red-500",children:a}):null]}),TD=()=>{const[n,e]=Ce.useState("overview"),[s,a]=Ce.useState(fb),[l,u]=Ce.useState(""),[c,d]=Ce.useState(""),[m,p]=Ce.useState(""),[g,y]=Ce.useState(!1),[w,_]=Ce.useState(""),[S,A]=Ce.useState(null),[k,R]=Ce.useState(!1),[L,E]=Ce.useState(""),[G,J]=Ce.useState(""),[Z,F]=Ce.useState(!1),[te,oe]=Ce.useState({}),[je,Ie]=Ce.useState(null),[Qe,an]=Ce.useState(null),[Mt,bt]=Ce.useState(null),[H,X]=Ce.useState(null),[ne,we]=Ce.useState({}),[ge,C]=Ce.useState(null),[V,Q]=Ce.useState(null),se=()=>({school:"",diploma:"",period:"",isPublished:!1}),me=()=>({title:"",status:"Brouillon",stack:"",summary:"",coverPath:"",projectUrl:"",repositoryUrl:""}),be=async()=>{var Bt,on,ln,Os,Qi;if(!de)return;F(!0),J("");const[D,B,Y,K,it]=await Promise.all([de.from("profile").select("*").order("updated_at",{ascending:!1}).limit(1).maybeSingle(),de.from("experiences").select("*").order("sort_order",{ascending:!0}),de.from("educations").select("*").order("sort_order",{ascending:!0}),de.from("projects").select("*").order("sort_order",{ascending:!0}),de.from("site_settings").select("*").order("updated_at",{ascending:!1}).limit(1).maybeSingle()]);if(D.error||B.error||Y.error||K.error||it.error){J(((Bt=D.error)==null?void 0:Bt.message)||((on=B.error)==null?void 0:on.message)||((ln=Y.error)==null?void 0:ln.message)||((Os=K.error)==null?void 0:Os.message)||((Qi=it.error)==null?void 0:Qi.message)||"Erreur lors du chargement des contenus"),F(!1);return}const kt=D.data,Me=it.data,zt=B.data||[],Xt=Y.data||[],Mn=K.data||[];a(Ot=>({...Ot,...bD(kt,Ot),experience:wD(zt,Ot),education:xD(Xt,Ot),projects:_D(Mn,Ot),seo:{siteName:(Me==null?void 0:Me.site_name)||Ot.seo.siteName,metaTitle:(Me==null?void 0:Me.seo_title)||Ot.seo.metaTitle,metaDescription:(Me==null?void 0:Me.seo_description)||Ot.seo.metaDescription}})),u(mD((Me==null?void 0:Me.updated_at)||(kt==null?void 0:kt.updated_at)||"")),F(!1)},Re=async D=>{if(!de)return;const B=yD(D),Y=je,K=Qe;if(Y){const ee=Y.name.includes(".")&&Y.name.split(".").pop()||"png",Se=`profile/avatar-${Date.now()}.${ee}`,He=await de.storage.from("projects-images").upload(Se,Y,{upsert:!0,contentType:Y.type});if(He.error)throw new Error(He.error.message);B.avatar_path=de.storage.from("projects-images").getPublicUrl(Se).data.publicUrl}if(K){const ee=K.name.includes(".")&&K.name.split(".").pop()||"pdf",Se=`resume/portfolio-cv-${Date.now()}.${ee}`,He=await de.storage.from("cv").upload(Se,K,{upsert:!0,contentType:K.type});if(He.error)throw new Error(He.error.message);B.cv_path=de.storage.from("cv").getPublicUrl(Se).data.publicUrl}const it=vD(D),kt=await de.from("profile").select("id").limit(1).maybeSingle();if(kt.error)throw new Error(kt.error.message);if(kt.data&&kt.data.id){const ee=await de.from("profile").update(B).eq("id",kt.data.id);if(ee.error)throw new Error(ee.error.message)}else{const ee=await de.from("profile").insert(B);if(ee.error)throw new Error(ee.error.message)}const Me=await de.from("site_settings").select("id").limit(1).maybeSingle();if(Me.error)throw new Error(Me.error.message);if(Me.data&&Me.data.id){const ee=await de.from("site_settings").update(it).eq("id",Me.data.id);if(ee.error)throw new Error(ee.error.message)}else{const ee=await de.from("site_settings").insert(it);if(ee.error)throw new Error(ee.error.message)}const zt=await de.from("experiences").select("id").order("sort_order",{ascending:!0});if(zt.error)throw new Error(zt.error.message);const Xt=D.experience.map((ee,Se)=>{const He=gb(ee.period);return{company:ee.company,role:ee.role,start_date:He.start_date,end_date:He.end_date,description:ee.description,sort_order:Se,is_published:ee.isPublished!==!1}}),Mn=zt.data||[];for(let ee=0;ee<Xt.length;ee+=1){const Se=Mn[ee],He=Xt[ee];if(Se&&Se.id){const xt=await de.from("experiences").update(He).eq("id",Se.id);if(xt.error)throw new Error(xt.error.message)}else{const xt=await de.from("experiences").insert(He);if(xt.error)throw new Error(xt.error.message)}}if(Mn.length>Xt.length){const ee=Mn.slice(Xt.length).map(Se=>Se.id).filter(Boolean);if(ee.length){const Se=await de.from("experiences").delete().in("id",ee);if(Se.error)throw new Error(Se.error.message)}}const Bt=await de.from("educations").select("id").order("sort_order",{ascending:!0});if(Bt.error)throw new Error(Bt.error.message);const on=D.education.map((ee,Se)=>{const He=gb(ee.period);return{school:ee.school,diploma:ee.diploma,start_date:He.start_date,end_date:He.end_date,description:"",kind:null,sort_order:Se,is_published:ee.isPublished!==!1}}),ln=Bt.data||[];for(let ee=0;ee<on.length;ee+=1){const Se=ln[ee],He=on[ee];if(Se&&Se.id){const xt=await de.from("educations").update(He).eq("id",Se.id);if(xt.error)throw new Error(xt.error.message)}else{const xt=await de.from("educations").insert(He);if(xt.error)throw new Error(xt.error.message)}}if(ln.length>on.length){const ee=ln.slice(on.length).map(Se=>Se.id).filter(Boolean);if(ee.length){const Se=await de.from("educations").delete().in("id",ee);if(Se.error)throw new Error(Se.error.message)}}const Os=D.projects.map((ee,Se)=>({title:ee.title,slug:yb(ee.title),summary:ee.summary,content:ee.summary,cover_path:ee.coverPath||null,project_url:ee.projectUrl||null,repository_url:ee.repositoryUrl||null,stack:ee.stack,sort_order:Se,is_published:gD(ee.status)})),Qi=await Promise.all(D.projects.map(async(ee,Se)=>{const He=te[Se];if(!He)return ee.coverPath;const xt=He.name.includes(".")&&He.name.split(".").pop()||"png",Ya=`projects/${yb(ee.title)}-${Date.now()}.${xt}`,Fa=await de.storage.from("projects-images").upload(Ya,He,{upsert:!0,contentType:He.type});if(Fa.error)throw new Error(Fa.error.message);return de.storage.from("projects-images").getPublicUrl(Ya).data.publicUrl})),Ot=Os.map((ee,Se)=>({...ee,cover_path:Qi[Se]||ee.cover_path}));if(Ot.length){const ee=await de.from("projects").upsert(Ot,{onConflict:"slug"});if(ee.error)throw new Error(ee.error.message)}const Gn=await de.from("projects").select("slug");if(Gn.error)throw new Error(Gn.error.message);const Fu=Ot.map(ee=>ee.slug),Ka=(Gn.data||[]).map(ee=>ee.slug).filter(ee=>ee&&Fu.indexOf(ee)===-1);if(Ka.length){const ee=await de.from("projects").delete().in("slug",Ka);if(ee.error)throw new Error(ee.error.message)}};Ce.useEffect(()=>{if(!de)return;let D=!0;de.auth.getSession().then(({data:Y})=>{D&&A(Y.session)});const{data:B}=de.auth.onAuthStateChange((Y,K)=>{A(K)});return()=>{D=!1,B.subscription.unsubscribe()}},[]),Ce.useEffect(()=>{!S||!de||be()},[S]),Ce.useEffect(()=>{const D=fD(localStorage.getItem(xa));D&&(a(D),u(localStorage.getItem(`${xa}:savedAt`)||""))},[]),Ce.useEffect(()=>{localStorage.setItem(xa,JSON.stringify(s))},[s]);const wt=async()=>{const D=new Date().toLocaleString("fr-FR");if(localStorage.setItem(`${xa}:savedAt`,D),!de||!S){u(D),E("Brouillon enregistré localement."),J("");return}R(!0),E(""),J("");try{await Re(s),u(D),E("Données synchronisées.")}catch(B){J(B instanceof Error?B.message:"Erreur lors de la synchronisation")}finally{R(!1)}},Xe=async D=>{if(D.preventDefault(),!de)return;y(!0),_("");const{error:B}=await de.auth.signInWithPassword({email:c,password:m});B&&_(B.message),y(!1)},Xi=async()=>{de&&await de.auth.signOut()},Rs=()=>{a(fb),oe({}),Ie(null),an(null),localStorage.removeItem(xa),localStorage.removeItem(`${xa}:savedAt`),u("")},Ha=(D,B)=>{oe(Y=>({...Y,[D]:B}))};Ce.useEffect(()=>{let D=null;if(je){const B=URL.createObjectURL(je);bt(B),D=B}else bt(null);return()=>{D&&URL.revokeObjectURL(D)}},[je]),Ce.useEffect(()=>{let D=null;if(Qe){const B=URL.createObjectURL(Qe);X(B),D=B}else X(null);return()=>{D&&URL.revokeObjectURL(D)}},[Qe]),Ce.useEffect(()=>{const D={};Object.keys(te).forEach(Y=>{const K=Number(Y),it=te[K];it&&(D[K]=URL.createObjectURL(it))});const B=ne;return we(D),()=>{Object.values(D).forEach(Y=>URL.revokeObjectURL(Y)),Object.values(B||{}).forEach(Y=>Y&&URL.revokeObjectURL(Y))}},[te]);const jo=D=>{oe(B=>{const Y={};return Object.keys(B).forEach(K=>{const it=Number(K),kt=B[it];if(it<D){Y[it]=kt;return}it>D&&(Y[it-1]=kt)}),Y})},rn=(D,B,Y)=>{if(B===Y)return D;const K=[...D],[it]=K.splice(B,1);return K.splice(Y,0,it),K},$a=(D,B)=>{oe(Y=>{const it=Object.keys(Y).map(Me=>Number(Me)).sort((Me,zt)=>Me-zt).map(Me=>Y[Me]);return rn(it,D,B).reduce((Me,zt,Xt)=>(Me[Xt]=zt,Me),{})})},Ji=(D,B)=>{Q({type:D,index:B})},qa=()=>{Q(null)},ks=(D,B)=>{if(!V||V.type!==D||V.index===B){Q(null);return}D==="experience"&&a(Y=>({...Y,experience:rn(Y.experience,V.index,B)})),D==="education"&&a(Y=>({...Y,education:rn(Y.education,V.index,B)})),D==="project"&&(a(Y=>({...Y,projects:rn(Y.projects,V.index,B)})),$a(V.index,B)),Q(null)},Zi=D=>{D.preventDefault()},Ia=D=>{a(B=>({...B,experience:B.experience.filter((Y,K)=>K!==D)}))},Ga=()=>{a(D=>({...D,education:[...D.education,se()]}))},Iu=D=>{a(B=>({...B,education:B.education.filter((Y,K)=>K!==D)}))},Gu=()=>{a(D=>({...D,projects:[...D.projects,me()]}))},Ut=D=>{a(B=>({...B,projects:B.projects.filter((Y,K)=>K!==D)})),jo(D)},Ku=D=>{a(B=>{const Y=[...B.experience];return Y[D]={...Y[D],isPublished:!Y[D].isPublished},{...B,experience:Y}})},Co=D=>{a(B=>{const Y=[...B.education];return Y[D]={...Y[D],isPublished:!Y[D].isPublished},{...B,education:Y}})},Ro=D=>{a(B=>{const Y=[...B.projects],K=Y[D];return Y[D]={...K,status:K.status&&K.status.toLowerCase().includes("brouillon")?"Publié":"Brouillon"},{...B,projects:Y}})},An=D=>{C(D)},ko=()=>{C(null)},Oo=async()=>{if(!ge)return;const D=ge;if(ko(),D.action==="save"){await wt();return}if(D.action==="reset"){Rs();return}if(D.action==="sign-out"){await Xi();return}if(D.action==="delete-experience"&&D.index!==void 0){Ia(D.index);return}if(D.action==="delete-education"&&D.index!==void 0){Iu(D.index);return}D.action==="delete-project"&&D.index!==void 0&&Ut(D.index)},No=mb.find(D=>D.key===n),Yu=n==="overview"||!No?Ib:No.icon;return om&&!S?b.jsxs(pt.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},className:"min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5",children:[b.jsx(co,{title:"Backoffice",description:"Administration privée du portfolio."}),b.jsxs("div",{className:"container mx-auto px-4 py-8 md:py-10",children:[b.jsxs("div",{className:"mb-8 rounded-3xl border border-border bg-card p-6 shadow-sm",children:[b.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground",children:[b.jsx(Yr,{className:"h-4 w-4 text-primary"})," Backoffice protégé",b.jsx("span",{className:"rounded-full border border-border px-2 py-1",children:"Accès sécurisé"})]}),b.jsx("h1",{className:"mt-3 text-3xl font-bold md:text-4xl",children:"Connexion requise"}),b.jsx("p",{className:"mt-2 max-w-2xl text-sm text-muted-foreground md:text-base",children:"Le mode protégé est activé. Connecte-toi avec le compte administrateur pour éditer les contenus."})]}),b.jsx(SD,{email:c,password:m,loading:g,error:w,onEmailChange:d,onPasswordChange:p,onSubmit:Xe})]})]}):b.jsxs(pt.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},className:"min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5",children:[b.jsx(co,{title:"Backoffice",description:"Administration privée du portfolio."}),b.jsxs("div",{className:"container mx-auto px-4 py-8 md:py-10",children:[b.jsxs("div",{className:"mb-8 flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between",children:[b.jsxs("div",{className:"space-y-3",children:[b.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground",children:[b.jsx(Yr,{className:"h-4 w-4 text-primary"})," Backoffice privé",b.jsx("span",{className:"rounded-full border border-border px-2 py-1",children:"Mode local"}),b.jsx("span",{className:"rounded-full border border-border px-2 py-1",children:"Synchronisation prête"})]}),b.jsxs("div",{children:[b.jsx("h1",{className:"text-3xl font-bold md:text-4xl",children:"Administration du portfolio"}),b.jsx("p",{className:"mt-2 max-w-2xl text-sm text-muted-foreground md:text-base",children:"Prépare les contenus, les médias et le SEO dans une interface simple. La persistance passe actuellement par le navigateur en attendant la synchronisation distante."})]})]}),b.jsxs("div",{className:"flex flex-wrap gap-3",children:[b.jsx(Es,{to:"/",children:b.jsxs(dt,{variant:"outline",className:"gap-2",children:[b.jsx(oE,{className:"h-4 w-4"})," Voir le site"]})}),b.jsx(dt,{variant:"outline",className:"gap-2",onClick:()=>An({title:"Réinitialiser le brouillon",description:"Cette action supprime les modifications locales non enregistrées et remet le backoffice à l’état initial.",confirmLabel:"Réinitialiser",tone:"danger",action:"reset"}),children:"Réinitialiser"}),de?b.jsx(dt,{variant:"outline",className:"gap-2",onClick:()=>An({title:"Déconnexion",description:"Tu vas quitter la session administrateur.",confirmLabel:"Déconnexion",tone:"danger",action:"sign-out"}),children:"Déconnexion"}):null,b.jsxs(dt,{className:"gap-2",onClick:()=>An({title:"Enregistrer les modifications",description:"Les contenus, médias et réglages seront synchronisés avec la source de données.",confirmLabel:"Enregistrer",tone:"primary",action:"save"}),disabled:k||Z,children:[b.jsx(dd,{className:"h-4 w-4"})," ",k?"Enregistrement...":"Enregistrer"]})]})]}),b.jsxs("div",{className:"grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)]",children:[b.jsxs("aside",{className:"rounded-3xl border border-border bg-card p-4 shadow-sm",children:[b.jsxs("div",{className:"mb-4 flex items-center gap-3 rounded-2xl bg-muted/40 p-4",children:[b.jsx("div",{className:"rounded-2xl bg-primary/10 p-3 text-primary",children:b.jsx(fA,{className:"h-5 w-5"})}),b.jsxs("div",{children:[b.jsx("p",{className:"text-sm font-semibold",children:"Espace admin"}),b.jsx("p",{className:"text-xs text-muted-foreground",children:"Structure prête pour la mise en production"})]})]}),b.jsx("nav",{className:"space-y-2",children:mb.map(D=>{const B=D.icon,Y=n===D.key;return b.jsxs("button",{type:"button",onClick:()=>e(D.key),className:`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition-colors ${Y?"border-primary bg-primary/10 text-primary":"border-border hover:bg-muted/50"}`,children:[b.jsxs("span",{className:"flex items-center gap-3 text-sm font-medium",children:[b.jsx(B,{className:"h-4 w-4"}),D.label]}),b.jsx(_E,{className:"h-4 w-4"})]},D.key)})}),b.jsxs("div",{className:"mt-4 rounded-2xl border border-dashed border-border p-4",children:[b.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"Fichiers"}),b.jsxs("div",{className:"mt-3 space-y-2 text-sm",children:[b.jsxs("p",{children:[b.jsx("span",{className:"font-medium",children:"CV"})," : fichier source"]}),b.jsxs("p",{children:[b.jsx("span",{className:"font-medium",children:"Avatar"})," : image source"]}),b.jsxs("p",{children:[b.jsx("span",{className:"font-medium",children:"Projets"})," : images source"]})]})]})]}),b.jsxs("div",{className:"space-y-6",children:[b.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[b.jsx(Md,{label:"Statut",value:Z?"Chargement":"Prêt",detail:Z?"Lecture distante en cours":"Interface prête",icon:dd}),b.jsx(Md,{label:"Connexion",value:de?"Protégée":"Locale",detail:de?"Accès privé actif":"Synchronisation locale",icon:Bb}),b.jsx(Md,{label:"Mise à jour",value:l||"Jamais",detail:"Dernier brouillon sauvegardé",icon:PE})]}),L?b.jsx("div",{className:"rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary",children:L}):null,G?b.jsx("div",{className:"rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",children:G}):null,n==="overview"&&b.jsxs(bs,{title:"Aperçu",description:"Résumé rapide des contenus administrables.",icon:Yu,children:[b.jsxs("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-4",children:[b.jsx(ou,{title:"Profil",value:s.profile.title}),b.jsx(ou,{title:"Expériences",value:`${s.experience.length} entrées`}),b.jsx(ou,{title:"Formations",value:`${s.education.length} entrées`}),b.jsx(ou,{title:"Projets",value:`${s.projects.length} entrées`})]}),b.jsx("div",{className:"mt-6 rounded-2xl border border-border bg-muted/30 p-5 text-sm text-muted-foreground",children:"Le backoffice est posé. Les listes ci-dessous fonctionnent comme de vrais blocs CRUD avec ajout, édition, suppression et upload de médias."})]}),n==="profile"&&b.jsxs(bs,{title:"Profil",description:"Contenu public principal du site.",icon:Yb,children:[b.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[b.jsx(Ne,{label:"Titre",children:b.jsx(Ve,{value:s.profile.title,onChange:D=>a({...s,profile:{...s.profile,title:D.target.value}})})}),b.jsx(Ne,{label:"Sous-titre",children:b.jsx(Ve,{value:s.profile.subtitle,onChange:D=>a({...s,profile:{...s.profile,subtitle:D.target.value}})})}),b.jsx(Ne,{label:"Email",children:b.jsx(Ve,{value:s.profile.email,onChange:D=>a({...s,profile:{...s.profile,email:D.target.value}})})}),b.jsx(Ne,{label:"Localisation",children:b.jsx(Ve,{value:s.profile.location,onChange:D=>a({...s,profile:{...s.profile,location:D.target.value}})})})]}),b.jsxs("div",{className:"mt-4 grid gap-4",children:[b.jsx(Ne,{label:"Bio",children:b.jsx(ru,{value:s.profile.bio,onChange:D=>a({...s,profile:{...s.profile,bio:D.target.value}})})}),b.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[b.jsx(Ne,{label:"LinkedIn",children:b.jsx(Ve,{value:s.profile.linkedin,onChange:D=>a({...s,profile:{...s.profile,linkedin:D.target.value}})})}),b.jsx(Ne,{label:"GitHub",children:b.jsx(Ve,{value:s.profile.github,onChange:D=>a({...s,profile:{...s.profile,github:D.target.value}})})})]})]}),b.jsxs("div",{className:"mt-4 grid gap-4 md:grid-cols-2",children:[b.jsx("div",{className:"md:col-span-2 rounded-2xl border border-dashed border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground",children:"Les champs d’upload sont ici pour la photo de profil et le CV. Les images des projets se trouvent plus bas, dans la section Projets."}),b.jsx(Ne,{label:"Photo de profil",children:b.jsxs("div",{className:"space-y-3",children:[b.jsx(Ve,{value:s.media.avatarPath,onChange:D=>a({...s,media:{...s.media,avatarPath:D.target.value}}),placeholder:"Chemin ou URL de l'avatar"}),b.jsx("input",{type:"file",accept:"image/*",className:"block w-full text-sm text-muted-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:opacity-90",onChange:D=>Ie(D.target.files&&D.target.files[0]?D.target.files[0]:null)})]})}),b.jsx(Ne,{label:"CV PDF",children:b.jsxs("div",{className:"space-y-3",children:[b.jsx(Ve,{value:s.media.cvPath,onChange:D=>a({...s,media:{...s.media,cvPath:D.target.value}}),placeholder:"Chemin ou URL du CV"}),b.jsx("input",{type:"file",accept:"application/pdf",className:"block w-full text-sm text-muted-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:opacity-90",onChange:D=>an(D.target.files&&D.target.files[0]?D.target.files[0]:null)})]})}),b.jsxs("div",{className:"mt-4 flex items-center gap-4",children:[Mt||s.media.avatarPath?b.jsx("img",{src:Mt||s.media.avatarPath,alt:"Avatar preview",className:"h-20 w-20 rounded-full object-cover"}):null,b.jsx("div",{children:H?b.jsx("a",{href:H,target:"_blank",rel:"noreferrer",className:"rounded-lg bg-primary/10 px-3 py-2 text-sm text-primary",children:"Voir CV (local)"}):s.media.cvPath?b.jsx("a",{href:s.media.cvPath,target:"_blank",rel:"noreferrer",className:"rounded-lg bg-primary/10 px-3 py-2 text-sm text-primary",children:"Voir CV"}):null})]})]})]}),n==="experience"&&b.jsx(bs,{title:"Expériences",description:"Liste des expériences professionnelles affichées sur le site public.",icon:zb,children:b.jsx("div",{className:"space-y-4",children:s.experience.map((D,B)=>b.jsxs("div",{draggable:!0,onDragStart:()=>Ji("experience",B),onDragEnd:qa,onDragOver:Zi,onDrop:()=>ks("experience",B),className:`rounded-2xl border p-4 transition-all ${V&&V.type==="experience"&&V.index===B?"border-primary bg-primary/5 shadow-md":"border-border"}`,children:[b.jsxs("div",{className:"mb-4 flex items-center justify-between gap-3",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("span",{className:"mr-2 p-2 rounded-lg bg-muted/20 cursor-grab",children:b.jsx(fd,{className:"h-4 w-4"})}),b.jsxs("p",{className:"text-sm font-medium text-foreground",children:["Expérience ",B+1]})]}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("button",{type:"button",onClick:()=>Ku(B),className:`rounded-full px-3 py-1 text-sm ${D.isPublished?"bg-green-100 text-green-700":"bg-muted/10 text-muted-foreground"}`,children:D.isPublished?"Publié":"Brouillon"}),b.jsxs(dt,{type:"button",variant:"outline",className:"gap-2",onClick:()=>An({title:"Supprimer cette expérience",description:"L’entrée sera retirée du portfolio et de la source de données lors de l’enregistrement.",confirmLabel:"Supprimer",tone:"danger",action:"delete-experience",index:B}),children:[b.jsx(Kl,{className:"h-4 w-4"})," Supprimer"]})]})]}),b.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[b.jsx(Ne,{label:"Entreprise",children:b.jsx(Ve,{value:D.company,onChange:Y=>{const K=[...s.experience];K[B]={...K[B],company:Y.target.value},a({...s,experience:K})}})}),b.jsx(Ne,{label:"Rôle",children:b.jsx(Ve,{value:D.role,onChange:Y=>{const K=[...s.experience];K[B]={...K[B],role:Y.target.value},a({...s,experience:K})}})}),b.jsx(Ne,{label:"Période",children:b.jsx(Ve,{value:D.period,onChange:Y=>{const K=[...s.experience];K[B]={...K[B],period:Y.target.value},a({...s,experience:K})}})})]}),b.jsx("div",{className:"mt-4",children:b.jsx(Ne,{label:"Description",children:b.jsx(ru,{value:D.description,onChange:Y=>{const K=[...s.experience];K[B]={...K[B],description:Y.target.value},a({...s,experience:K})}})})})]},B))})}),n==="education"&&b.jsxs(bs,{title:"Formations et certificats",description:"Diplômes, parcours et certificats.",icon:$b,children:[b.jsx("div",{className:"mb-4 flex justify-end",children:b.jsxs(dt,{variant:"outline",className:"gap-2",onClick:Ga,children:[b.jsx(bv,{className:"h-4 w-4"})," Ajouter une formation"]})}),b.jsx("div",{className:"space-y-4",children:s.education.map((D,B)=>b.jsxs("div",{draggable:!0,onDragStart:()=>Ji("education",B),onDragEnd:qa,onDragOver:Zi,onDrop:()=>ks("education",B),className:`rounded-2xl border p-4 transition-all ${V&&V.type==="education"&&V.index===B?"border-primary bg-primary/5 shadow-md":"border-border"}`,children:[b.jsxs("div",{className:"mb-4 flex items-center justify-between gap-3",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("span",{className:"mr-2 p-2 rounded-lg bg-muted/20 cursor-grab",children:b.jsx(fd,{className:"h-4 w-4"})}),b.jsxs("p",{className:"text-sm font-medium text-foreground",children:["Formation ",B+1]})]}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("button",{type:"button",onClick:()=>Co(B),className:`rounded-full px-3 py-1 text-sm ${D.isPublished?"bg-green-100 text-green-700":"bg-muted/10 text-muted-foreground"}`,children:D.isPublished?"Publié":"Brouillon"}),b.jsxs(dt,{type:"button",variant:"outline",className:"gap-2",onClick:()=>An({title:"Supprimer cette formation",description:"L’entrée sera retirée du portfolio et de la source de données lors de l’enregistrement.",confirmLabel:"Supprimer",tone:"danger",action:"delete-education",index:B}),children:[b.jsx(Kl,{className:"h-4 w-4"})," Supprimer"]})]})]}),b.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[b.jsx(Ne,{label:"Établissement",children:b.jsx(Ve,{value:D.school,onChange:Y=>{const K=[...s.education];K[B]={...K[B],school:Y.target.value},a({...s,education:K})}})}),b.jsx(Ne,{label:"Diplôme",children:b.jsx(Ve,{value:D.diploma,onChange:Y=>{const K=[...s.education];K[B]={...K[B],diploma:Y.target.value},a({...s,education:K})}})}),b.jsx(Ne,{label:"Période",children:b.jsx(Ve,{value:D.period,onChange:Y=>{const K=[...s.education];K[B]={...K[B],period:Y.target.value},a({...s,education:K})}})})]})]},B))})]}),n==="projects"&&b.jsxs(bs,{title:"Projets",description:"Réalisations publiques et projet en cours.",icon:Vb,children:[b.jsx("div",{className:"mb-4 flex justify-end",children:b.jsxs(dt,{variant:"outline",className:"gap-2",onClick:Gu,children:[b.jsx(bv,{className:"h-4 w-4"})," Ajouter un projet"]})}),b.jsx("div",{className:"space-y-4",children:s.projects.map((D,B)=>b.jsxs("div",{draggable:!0,onDragStart:()=>Ji("project",B),onDragEnd:qa,onDragOver:Zi,onDrop:()=>ks("project",B),className:`rounded-2xl border p-4 transition-all ${V&&V.type==="project"&&V.index===B?"border-primary bg-primary/5 shadow-md":"border-border"}`,children:[b.jsxs("div",{className:"mb-4 flex items-center justify-between gap-3",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("span",{className:"mr-2 p-2 rounded-lg bg-muted/20 cursor-grab",children:b.jsx(fd,{className:"h-4 w-4"})}),b.jsxs("p",{className:"text-sm font-medium text-foreground",children:["Projet ",B+1]})]}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("button",{type:"button",onClick:()=>Ro(B),className:`rounded-full px-3 py-1 text-sm ${D.status&&D.status.toLowerCase().includes("brouillon")?"bg-muted/10 text-muted-foreground":"bg-green-100 text-green-700"}`,children:D.status&&D.status.toLowerCase().includes("brouillon")?"Brouillon":"Publié"}),b.jsxs(dt,{type:"button",variant:"outline",className:"gap-2",onClick:()=>An({title:"Supprimer ce projet",description:"Le projet, son image et ses champs associés seront retirés lors de l’enregistrement.",confirmLabel:"Supprimer",tone:"danger",action:"delete-project",index:B}),children:[b.jsx(Kl,{className:"h-4 w-4"})," Supprimer"]})]})]}),b.jsxs("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:[b.jsx(Ne,{label:"Titre",children:b.jsx(Ve,{value:D.title,onChange:Y=>{const K=[...s.projects];K[B]={...K[B],title:Y.target.value},a({...s,projects:K})}})}),b.jsx(Ne,{label:"Statut",children:b.jsx(Ve,{value:D.status,onChange:Y=>{const K=[...s.projects];K[B]={...K[B],status:Y.target.value},a({...s,projects:K})}})}),b.jsx(Ne,{label:"Stack",children:b.jsx(Ve,{value:D.stack,onChange:Y=>{const K=[...s.projects];K[B]={...K[B],stack:Y.target.value},a({...s,projects:K})}})})]}),b.jsxs("div",{className:"mt-4 grid gap-4 md:grid-cols-2",children:[b.jsx(Ne,{label:"Résumé",children:b.jsx(ru,{value:D.summary,onChange:Y=>{const K=[...s.projects];K[B]={...K[B],summary:Y.target.value},a({...s,projects:K})}})}),b.jsx(Ne,{label:"Image du projet",hint:"Upload vers projects-images",children:b.jsxs("div",{className:"space-y-3",children:[b.jsx(Ve,{value:D.coverPath,onChange:Y=>{const K=[...s.projects];K[B]={...K[B],coverPath:Y.target.value},a({...s,projects:K})},placeholder:"URL publique ou chemin image"}),b.jsx("input",{type:"file",accept:"image/*",className:"block w-full text-sm text-muted-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:opacity-90",onChange:Y=>Ha(B,Y.target.files&&Y.target.files[0]?Y.target.files[0]:null)}),ne[B]||D.coverPath?b.jsx("div",{className:"mt-2",children:b.jsx("img",{src:ne[B]||D.coverPath,alt:"Projet",className:"h-28 w-40 rounded-md object-cover border"})}):null]})}),b.jsx(Ne,{label:"Lien du projet",children:b.jsx(Ve,{value:D.projectUrl,onChange:Y=>{const K=[...s.projects];K[B]={...K[B],projectUrl:Y.target.value},a({...s,projects:K})},placeholder:"https://..."})}),b.jsx(Ne,{label:"Lien du code source",children:b.jsx(Ve,{value:D.repositoryUrl,onChange:Y=>{const K=[...s.projects];K[B]={...K[B],repositoryUrl:Y.target.value},a({...s,projects:K})},placeholder:"https://github.com/..."})})]})]},B))})]}),n==="media"&&b.jsx(bs,{title:"Médias",description:"Chemins de fichiers et uploads principaux.",icon:qb,children:b.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[b.jsx(Ne,{label:"Chemin du CV",children:b.jsx(Ve,{value:s.media.cvPath,onChange:D=>a({...s,media:{...s.media,cvPath:D.target.value}})})}),b.jsx(Ne,{label:"Chemin avatar",children:b.jsx(Ve,{value:s.media.avatarPath,onChange:D=>a({...s,media:{...s.media,avatarPath:D.target.value}})})}),b.jsx(Ne,{label:"Dossier médias projets",children:b.jsx(Ve,{value:s.media.projectMediaPath,onChange:D=>a({...s,media:{...s.media,projectMediaPath:D.target.value}})})}),b.jsx(Ne,{label:"Note",children:b.jsx(Ve,{value:"Les fichiers sélectionnés seront téléversés au prochain enregistrement.",readOnly:!0})})]})}),n==="seo"&&b.jsxs(bs,{title:"SEO",description:"Réglages de base du site public.",icon:ZE,children:[b.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[b.jsx(Ne,{label:"Nom du site",children:b.jsx(Ve,{value:s.seo.siteName,onChange:D=>a({...s,seo:{...s.seo,siteName:D.target.value}})})}),b.jsx(Ne,{label:"Titre meta",children:b.jsx(Ve,{value:s.seo.metaTitle,onChange:D=>a({...s,seo:{...s.seo,metaTitle:D.target.value}})})})]}),b.jsx("div",{className:"mt-4",children:b.jsx(Ne,{label:"Description meta",children:b.jsx(ru,{value:s.seo.metaDescription,onChange:D=>a({...s,seo:{...s.seo,metaDescription:D.target.value}})})})})]})]})]}),ge?b.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm",children:b.jsxs("div",{className:"w-full max-w-lg rounded-3xl border border-border bg-card p-6 shadow-2xl",children:[b.jsxs("div",{className:"flex items-start gap-3",children:[b.jsx("div",{className:`rounded-2xl p-3 ${ge.tone==="danger"?"bg-red-100 text-red-600":"bg-primary/10 text-primary"}`,children:b.jsx(Yr,{className:"h-5 w-5"})}),b.jsxs("div",{className:"flex-1",children:[b.jsx("h2",{className:"text-xl font-semibold",children:ge.title}),b.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:ge.description})]})]}),b.jsxs("div",{className:"mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end",children:[b.jsx(dt,{type:"button",variant:"outline",className:"gap-2",onClick:ko,children:"Annuler"}),b.jsxs(dt,{type:"button",className:"gap-2",onClick:()=>void Oo(),children:[ge.tone==="danger"?b.jsx(Kl,{className:"h-4 w-4"}):b.jsx(dd,{className:"h-4 w-4"}),ge.confirmLabel]})]})]})}):null]})]})},ou=({title:n,value:e})=>b.jsxs("div",{className:"rounded-2xl border border-border bg-muted/30 p-4",children:[b.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground",children:n}),b.jsx("p",{className:"mt-2 text-sm font-medium text-foreground",children:e})]}),ED=()=>{const{pathname:n}=En();return Ce.useEffect(()=>{window.scrollTo(0,0)},[n]),null},AD=()=>{const n=En();return b.jsx(Vw,{mode:"wait",children:b.jsxs(hT,{location:n,children:[b.jsx(qr,{path:"/",element:b.jsx(cD,{})}),b.jsx(qr,{path:"/projects",element:b.jsx(hD,{})}),b.jsx(qr,{path:"/contact",element:b.jsx(dD,{})}),b.jsx(qr,{path:"/admin",element:b.jsx(TD,{})})]})})},jD=()=>{const e=En().pathname==="/admin";return b.jsxs(b.Fragment,{children:[!e&&b.jsx(ck,{}),b.jsx("main",{className:"flex-grow",children:b.jsx(AD,{})}),!e&&b.jsx(hk,{})]})};function CD(){return b.jsx(IT,{children:b.jsx(eE,{children:b.jsx("div",{className:"min-h-screen flex flex-col font-sans antialiased bg-background text-foreground transition-colors duration-300",children:b.jsxs(MT,{children:[b.jsx(ED,{}),b.jsx(jD,{})]})})})})}const Z1=document.getElementById("root");if(!Z1)throw new Error("Could not find root element to mount to");const RD=bS.createRoot(Z1);RD.render(b.jsx(Ce.StrictMode,{children:b.jsx(CD,{})}));