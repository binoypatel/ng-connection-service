import { __assign } from 'tslib';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InjectionToken, EventEmitter, Injectable, Inject, Optional, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { timer, fromEvent } from 'rxjs';
import { switchMap, retryWhen, tap, delay, debounceTime, startWith } from 'rxjs/operators';

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
var ConnectionServiceOptionsToken = new InjectionToken('ConnectionServiceOptionsToken');
var ConnectionService = /** @class */ (function () {
    function ConnectionService(http, options) {
        this.http = http;
        this.stateChangeEventEmitter = new EventEmitter();
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
            this.httpSubscription = timer(0, this.serviceOptions.heartbeatInterval)
                .pipe(switchMap((/**
             * @return {?}
             */
            function () {
                return _this.http[_this.serviceOptions.requestMethod](_this.serviceOptions.heartbeatUrl, {
                    responseType: 'text'
                });
            })), retryWhen((/**
             * @param {?} errors
             * @return {?}
             */
            function (errors) {
                return errors.pipe(
                // log error message
                tap((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    console.error('Http error:', val);
                    _this.currentState.hasInternetAccess = false;
                    _this.emitEvent();
                })), 
                // restart after 5 seconds
                delay(_this.serviceOptions.heartbeatRetryInterval));
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
        this.onlineSubscription = fromEvent(window, 'online').subscribe((/**
         * @return {?}
         */
        function () {
            _this.currentState.hasNetworkConnection = true;
            _this.checkInternetState();
            _this.emitEvent();
        }));
        this.offlineSubscription = fromEvent(window, 'offline').subscribe((/**
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
            ? this.stateChangeEventEmitter.pipe(debounceTime(300), startWith(this.currentState))
            : this.stateChangeEventEmitter.pipe(debounceTime(300));
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ConnectionService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [ConnectionServiceOptionsToken,] }, { type: Optional }] }
    ]; };
    /** @nocollapse */ ConnectionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConnectionService_Factory() { return new ConnectionService(ɵɵinject(HttpClient), ɵɵinject(ConnectionServiceOptionsToken, 8)); }, token: ConnectionService, providedIn: "root" });
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
        { type: NgModule, args: [{
                    imports: [HttpClientModule],
                    providers: [ConnectionService]
                },] }
    ];
    return ConnectionServiceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ConnectionService, ConnectionServiceModule, ConnectionServiceOptionsToken };
//# sourceMappingURL=ng-connection-service.js.map
