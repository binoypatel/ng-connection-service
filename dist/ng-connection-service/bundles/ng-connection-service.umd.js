(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-connection-service', ['exports', '@angular/common/http', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global['ng-connection-service'] = {}, global.ng.common.http, global.ng.core, global.rxjs, global.rxjs.operators));
}(this, (function (exports, http, core, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Instance of this interface is used to report current connection status.
     * @record
     */
    function ConnectionState() { }
    if (false) {
        /**
         * "True" if browser has network connection. Determined by Window objects "online" / "offline" events.
         * @type {?}
         */
        ConnectionState.prototype.hasNetworkConnection;
        /**
         * "True" if browser has Internet access. Determined by heartbeat system which periodically makes request to heartbeat Url.
         * @type {?}
         */
        ConnectionState.prototype.hasInternetAccess;
    }
    /**
     * Instance of this interface could be used to configure "ConnectionService".
     * @record
     */
    function ConnectionServiceOptions() { }
    if (false) {
        /**
         * Controls the Internet connectivity heartbeat system. Default value is 'true'.
         * @type {?|undefined}
         */
        ConnectionServiceOptions.prototype.enableHeartbeat;
        /**
         * Url used for checking Internet connectivity, heartbeat system periodically makes "HEAD" requests to this URL to determine Internet
         * connection status. Default value is "//internethealthtest.org".
         * @type {?|undefined}
         */
        ConnectionServiceOptions.prototype.heartbeatUrl;
        /**
         * Interval used to check Internet connectivity specified in milliseconds. Default value is "30000".
         * @type {?|undefined}
         */
        ConnectionServiceOptions.prototype.heartbeatInterval;
        /**
         * Interval used to retry Internet connectivity checks when an error is detected (when no Internet connection). Default value is "1000".
         * @type {?|undefined}
         */
        ConnectionServiceOptions.prototype.heartbeatRetryInterval;
        /**
         * HTTP method used for requesting heartbeat Url. Default is 'head'.
         * @type {?|undefined}
         */
        ConnectionServiceOptions.prototype.requestMethod;
    }
    /**
     * InjectionToken for specifing ConnectionService options.
     * @type {?}
     */
    var ConnectionServiceOptionsToken = new core.InjectionToken('ConnectionServiceOptionsToken');
    var ConnectionService = /** @class */ (function () {
        function ConnectionService(http, options) {
            this.http = http;
            this.stateChangeEventEmitter = new core.EventEmitter();
            this.currentState = {
                hasInternetAccess: false,
                hasNetworkConnection: window.navigator.onLine
            };
            this.serviceOptions = __assign({}, ConnectionService.DEFAULT_OPTIONS, options);
            this.checkNetworkState();
            this.checkInternetState();
        }
        Object.defineProperty(ConnectionService.prototype, "options", {
            /**
             * Current ConnectionService options. Notice that changing values of the returned object has not effect on service execution.
             * You should use "updateOptions" function.
             */
            get: /**
             * Current ConnectionService options. Notice that changing values of the returned object has not effect on service execution.
             * You should use "updateOptions" function.
             * @return {?}
             */
            function () {
                return __assign({}, this.serviceOptions);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        ConnectionService.prototype.checkInternetState = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.httpSubscription !== undefined) {
                this.httpSubscription.unsubscribe();
            }
            if (this.serviceOptions.enableHeartbeat) {
                this.httpSubscription = rxjs.timer(0, this.serviceOptions.heartbeatInterval)
                    .pipe(operators.switchMap((/**
                 * @return {?}
                 */
                function () {
                    return _this.http[_this.serviceOptions.requestMethod](_this.serviceOptions.heartbeatUrl, {
                        responseType: 'text'
                    });
                })), operators.retryWhen((/**
                 * @param {?} errors
                 * @return {?}
                 */
                function (errors) {
                    return errors.pipe(
                    // log error message
                    operators.tap((/**
                     * @param {?} val
                     * @return {?}
                     */
                    function (val) {
                        console.error('Http error:', val);
                        _this.currentState.hasInternetAccess = false;
                        _this.emitEvent();
                    })), 
                    // restart after 5 seconds
                    operators.delay(_this.serviceOptions.heartbeatRetryInterval));
                })))
                    .subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    _this.currentState.hasInternetAccess = true;
                    _this.emitEvent();
                }));
            }
            else {
                this.currentState.hasInternetAccess = false;
                this.emitEvent();
            }
        };
        /**
         * @private
         * @return {?}
         */
        ConnectionService.prototype.checkNetworkState = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.onlineSubscription = rxjs.fromEvent(window, 'online').subscribe((/**
             * @return {?}
             */
            function () {
                _this.currentState.hasNetworkConnection = true;
                _this.checkInternetState();
                _this.emitEvent();
            }));
            this.offlineSubscription = rxjs.fromEvent(window, 'offline').subscribe((/**
             * @return {?}
             */
            function () {
                _this.currentState.hasNetworkConnection = false;
                _this.checkInternetState();
                _this.emitEvent();
            }));
        };
        /**
         * @private
         * @return {?}
         */
        ConnectionService.prototype.emitEvent = /**
         * @private
         * @return {?}
         */
        function () {
            this.stateChangeEventEmitter.emit(this.currentState);
        };
        /**
         * @return {?}
         */
        ConnectionService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            try {
                this.offlineSubscription.unsubscribe();
                this.onlineSubscription.unsubscribe();
                this.httpSubscription.unsubscribe();
            }
            catch (e) { }
        };
        /**
         * Monitor Network & Internet connection status by subscribing to this observer. If you set "reportCurrentState" to "false" then
         * function will not report current status of the connections when initially subscribed.
         * @param reportCurrentState Report current state when initial subscription. Default is "true"
         */
        /**
         * Monitor Network & Internet connection status by subscribing to this observer. If you set "reportCurrentState" to "false" then
         * function will not report current status of the connections when initially subscribed.
         * @param {?=} reportCurrentState Report current state when initial subscription. Default is "true"
         * @return {?}
         */
        ConnectionService.prototype.monitor = /**
         * Monitor Network & Internet connection status by subscribing to this observer. If you set "reportCurrentState" to "false" then
         * function will not report current status of the connections when initially subscribed.
         * @param {?=} reportCurrentState Report current state when initial subscription. Default is "true"
         * @return {?}
         */
        function (reportCurrentState) {
            if (reportCurrentState === void 0) { reportCurrentState = true; }
            return reportCurrentState
                ? this.stateChangeEventEmitter.pipe(operators.debounceTime(300), operators.startWith(this.currentState))
                : this.stateChangeEventEmitter.pipe(operators.debounceTime(300));
        };
        /**
         * Update options of the service. You could specify partial options object. Values that are not specified will use default / previous
         * option values.
         * @param options Partial option values.
         */
        /**
         * Update options of the service. You could specify partial options object. Values that are not specified will use default / previous
         * option values.
         * @param {?} options Partial option values.
         * @return {?}
         */
        ConnectionService.prototype.updateOptions = /**
         * Update options of the service. You could specify partial options object. Values that are not specified will use default / previous
         * option values.
         * @param {?} options Partial option values.
         * @return {?}
         */
        function (options) {
            this.serviceOptions = __assign({}, this.serviceOptions, options);
            this.checkInternetState();
        };
        ConnectionService.DEFAULT_OPTIONS = {
            enableHeartbeat: true,
            heartbeatUrl: '//internethealthtest.org',
            heartbeatInterval: 30000,
            heartbeatRetryInterval: 1000,
            requestMethod: 'head'
        };
        ConnectionService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ConnectionService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: undefined, decorators: [{ type: core.Inject, args: [ConnectionServiceOptionsToken,] }, { type: core.Optional }] }
        ]; };
        /** @nocollapse */ ConnectionService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ConnectionService_Factory() { return new ConnectionService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(ConnectionServiceOptionsToken, 8)); }, token: ConnectionService, providedIn: "root" });
        return ConnectionService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ConnectionService.DEFAULT_OPTIONS;
        /**
         * @type {?}
         * @private
         */
        ConnectionService.prototype.stateChangeEventEmitter;
        /**
         * @type {?}
         * @private
         */
        ConnectionService.prototype.currentState;
        /**
         * @type {?}
         * @private
         */
        ConnectionService.prototype.offlineSubscription;
        /**
         * @type {?}
         * @private
         */
        ConnectionService.prototype.onlineSubscription;
        /**
         * @type {?}
         * @private
         */
        ConnectionService.prototype.httpSubscription;
        /**
         * @type {?}
         * @private
         */
        ConnectionService.prototype.serviceOptions;
        /**
         * @type {?}
         * @private
         */
        ConnectionService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConnectionServiceModule = /** @class */ (function () {
        function ConnectionServiceModule() {
        }
        ConnectionServiceModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [http.HttpClientModule],
                        providers: [ConnectionService]
                    },] }
        ];
        return ConnectionServiceModule;
    }());

    exports.ConnectionService = ConnectionService;
    exports.ConnectionServiceModule = ConnectionServiceModule;
    exports.ConnectionServiceOptionsToken = ConnectionServiceOptionsToken;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-connection-service.umd.js.map
