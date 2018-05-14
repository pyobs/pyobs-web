(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./camera/camera.module": [
		"./src/app/camera/camera.module.ts",
		"camera-camera-module~cooling-cooling-module~filter-filter-module~focus-focus-module~telescope-telesc~83b5d0f9",
		"camera-camera-module"
	],
	"./cooling/cooling.module": [
		"./src/app/cooling/cooling.module.ts",
		"camera-camera-module~cooling-cooling-module~filter-filter-module~focus-focus-module~telescope-telesc~83b5d0f9",
		"cooling-cooling-module"
	],
	"./filter/filter.module": [
		"./src/app/filter/filter.module.ts",
		"camera-camera-module~cooling-cooling-module~filter-filter-module~focus-focus-module~telescope-telesc~83b5d0f9",
		"filter-filter-module"
	],
	"./focus/focus.module": [
		"./src/app/focus/focus.module.ts",
		"camera-camera-module~cooling-cooling-module~filter-filter-module~focus-focus-module~telescope-telesc~83b5d0f9",
		"focus-focus-module"
	],
	"./telescope/telescope.module": [
		"./src/app/telescope/telescope.module.ts",
		"camera-camera-module~cooling-cooling-module~filter-filter-module~focus-focus-module~telescope-telesc~83b5d0f9",
		"telescope-telescope-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: 'telescope', loadChildren: './telescope/telescope.module#TelescopeModule' },
    { path: 'camera', loadChildren: './camera/camera.module#CameraModule' },
    { path: 'focus', loadChildren: './focus/focus.module#FocusModule' },
    { path: 'filter', loadChildren: './filter/filter.module#FilterModule' },
    { path: 'cooling', loadChildren: './cooling/cooling.module#CoolingModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <pytel-navigation></pytel-navigation>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pytel';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pytel-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/json-rpc.service */ "./src/app/shared/json-rpc.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_6__["JsonRpcService"], _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_6__["ICoolingService"], _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_6__["ITelescopeService"], _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_6__["ICameraService"], _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_6__["ITelescopeService"], _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_6__["IFilterService"], _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_6__["IFocuserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">pytel</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n            data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <ng-container *ngFor=\"let module of modules\">\n                <li *ngFor=\"let link of module.links\" routerLinkActive=\"active\" class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"link.link\">{{link.label}}</a>\n                </li>\n            </ng-container>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/json-rpc.service */ "./src/app/shared/json-rpc.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(jsonrpc) {
        this.jsonrpc = jsonrpc;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of modules from server
        this.subscription = this.jsonrpc.modules$.subscribe(function (data) {
            // build list of modules
            _this.modules = [];
            for (var mod in data) {
                if (data.hasOwnProperty(mod)) {
                    // get links
                    var links = [];
                    if (data[mod]['interfaces'].indexOf('ITelescope') !== -1) {
                        links.push({ label: 'Telescope', link: ['/telescope', data[mod]['module']] });
                    }
                    if (data[mod]['interfaces'].indexOf('IFocuser') !== -1) {
                        links.push({ label: 'Focus', link: ['/focus', data[mod]['module']] });
                    }
                    if (data[mod]['interfaces'].indexOf('IFilters') !== -1) {
                        links.push({ label: 'Filter', link: ['/filter', data[mod]['module']] });
                    }
                    if (data[mod]['interfaces'].indexOf('ICamera') !== -1) {
                        links.push({ label: 'Camera', link: ['/camera', data[mod]['module']] });
                    }
                    if (data[mod]['interfaces'].indexOf('IAutoFocus') !== -1) {
                        links.push({ label: 'AutoFocus', link: ['/autofocus', data[mod]['module']] });
                    }
                    if (data[mod]['interfaces'].indexOf('ICooling') !== -1) {
                        links.push({ label: 'Cooling', link: ['/cooling', data[mod]['module']] });
                    }
                    if (data[mod]['interfaces'].indexOf('IRoof') !== -1) {
                        links.push({ label: 'Roof', link: ['/roof', data[mod]['module']] });
                    }
                    if (data[mod]['interfaces'].indexOf('IWeather') !== -1) {
                        links.push({ label: 'Weather', link: ['/weather', data[mod]['module']] });
                    }
                    // only add module, if we got links
                    if (links.length > 0) {
                        // get name
                        var name_1 = mod;
                        if (data[mod]['name'] != null) {
                            name_1 = data[mod]['name'];
                        }
                        // add it
                        _this.modules.push({ 'module': mod, 'name': name_1, 'links': links });
                    }
                }
            }
        });
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pytel-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__["JsonRpcService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared/json-rpc.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/json-rpc.service.ts ***!
  \********************************************/
/*! exports provided: JsonRpcService, ITelescopeService, ICameraService, IImageArchiveService, IFocuserService, IFocusModelService, IFilterService, IAutoFocusService, ICoolingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonRpcService", function() { return JsonRpcService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITelescopeService", function() { return ITelescopeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICameraService", function() { return ICameraService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IImageArchiveService", function() { return IImageArchiveService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFocuserService", function() { return IFocuserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFocusModelService", function() { return IFocusModelService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFilterService", function() { return IFilterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IAutoFocusService", function() { return IAutoFocusService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICoolingService", function() { return ICoolingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _status_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status-factory */ "./src/app/shared/status-factory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JsonRpcResponse = /** @class */ (function () {
    function JsonRpcResponse(json) {
        if (json) {
            Object.assign(this, json);
        }
    }
    return JsonRpcResponse;
}());
var PytelModule = /** @class */ (function () {
    function PytelModule(json) {
        if (json) {
            Object.assign(this, json);
        }
    }
    return PytelModule;
}());
var JsonRpcService = /** @class */ (function () {
    function JsonRpcService(http) {
        var _this = this;
        this.http = http;
        this.next_caller_id = 1;
        this.url = '/jsonrpc';
        this.modules = [];
        this.status = new Map();
        this.modules$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        // create observable that watches the modules of the server
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 50000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () { return _this.execute(null, '_get_modules', null); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (rawModules) { return rawModules.map(function (m) { return new PytelModule(m); }); }))
            .subscribe(function (modules) { return _this.setModules(modules); });
        // create timer for status updates
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1000)
            .subscribe(function () { return _this.getModulesStatus(); });
    }
    JsonRpcService.prototype.setModules = function (modules) {
        this.modules = modules;
        this.modules$.next(modules);
    };
    JsonRpcService.prototype.getStatus = function (module, iface) {
        if (!this.status.has(module)) {
            this.status.set(module, new Map());
        }
        if (!this.status.get(module).has(iface)) {
            this.status.get(module).set(iface, new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null));
        }
        return this.status.get(module).get(iface);
    };
    JsonRpcService.prototype.getModulesStatus = function () {
        var _this = this;
        var _loop_1 = function (mod) {
            if (mod.interfaces.indexOf('IStatus') !== -1) {
                this_1.execute(mod.module, 'status', null)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (status) { return _status_factory__WEBPACK_IMPORTED_MODULE_4__["StatusFactory"].fromObject(status); }))
                    .subscribe(function (status) {
                    for (var iface in status) {
                        if (status.hasOwnProperty(iface)) {
                            _this.getStatus(mod.module, iface).next(status[iface]);
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.modules; _i < _a.length; _i++) {
            var mod = _a[_i];
            _loop_1(mod);
        }
    };
    JsonRpcService.prototype.execute = function (module, command, params) {
        // build body
        var caller_id = this.next_caller_id++;
        var body = {
            jsonrpc: '2.0',
            id: caller_id,
            method: command,
            params: params
        };
        if (module) {
            body.method = module + '.' + command;
        }
        // do request
        return this.http.post(this.url, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (json) { return new JsonRpcResponse(json); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            // did we get an error?
            if (response.error != null) {
                throw rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('An error occurred: ' + response.error.message);
            }
            // do we have a result?
            if (response.result == null) {
                throw rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('No result found in response from server.');
            }
            // return result
            return response.result;
        }));
    };
    JsonRpcService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], JsonRpcService);
    return JsonRpcService;
}());

var ITelescopeService = /** @class */ (function () {
    function ITelescopeService(jsonrpc) {
        this.jsonrpc = jsonrpc;
    }
    ITelescopeService.prototype.init = function (module) {
        return this.jsonrpc.execute(module, 'init', null);
    };
    ITelescopeService.prototype.park = function (module) {
        return this.jsonrpc.execute(module, 'park', null);
    };
    ITelescopeService.prototype.track = function (module, ra, dec) {
        return this.jsonrpc.execute(module, 'track', { ra: ra, dec: dec });
    };
    ITelescopeService.prototype.query_simbad = function (module, name) {
        return this.jsonrpc.execute('simbad', 'query_coordinates_by_name', { name: name });
    };
    ITelescopeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [JsonRpcService])
    ], ITelescopeService);
    return ITelescopeService;
}());

var ICameraService = /** @class */ (function () {
    function ICameraService(jsonrpc) {
        this.jsonrpc = jsonrpc;
    }
    ICameraService.prototype.get_full_frame = function (module) {
        return this.jsonrpc.execute(module, 'get_full_frame', null);
    };
    ICameraService.prototype.set_binning = function (module, x, y) {
        return this.jsonrpc.execute(module, 'set_binning', { 'x': x, 'y': y });
    };
    ICameraService.prototype.set_window = function (module, left, top, width, height) {
        return this.jsonrpc.execute(module, 'set_window', { 'left': left, 'top': top, 'width': width, 'height': height });
    };
    ICameraService.prototype.expose = function (module, exposure_time, image_type, count) {
        return this.jsonrpc.execute(module, 'expose', { 'exposure_time': exposure_time, 'image_type': image_type, 'count': count });
    };
    ICameraService.prototype.abort = function (module) {
        return this.jsonrpc.execute(module, 'abort', null);
    };
    ICameraService.prototype.abort_sequence = function (module) {
        return this.jsonrpc.execute(module, 'abort_sequence', null);
    };
    ICameraService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [JsonRpcService])
    ], ICameraService);
    return ICameraService;
}());

var IImageArchiveService = /** @class */ (function () {
    function IImageArchiveService(jsonrpc) {
        this.jsonrpc = jsonrpc;
    }
    IImageArchiveService.prototype.list_images = function (module) {
        return this.jsonrpc.execute(module, 'list_images', null);
    };
    IImageArchiveService.prototype.get_image_headers = function (module, image_id) {
        return this.jsonrpc.execute(module, 'get_image_headers', { 'image_id': image_id });
    };
    IImageArchiveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [JsonRpcService])
    ], IImageArchiveService);
    return IImageArchiveService;
}());

var IFocuserService = /** @class */ (function () {
    function IFocuserService(jsonrpc) {
        this.jsonrpc = jsonrpc;
    }
    IFocuserService.prototype.get_focus = function (module) {
        return this.jsonrpc.execute(module, 'get_focus', null);
    };
    IFocuserService.prototype.set_focus = function (module, focus) {
        return this.jsonrpc.execute(module, 'set_focus', { 'focus': focus });
    };
    IFocuserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [JsonRpcService])
    ], IFocuserService);
    return IFocuserService;
}());

var IFocusModelService = /** @class */ (function () {
    function IFocusModelService(jsonrpc) {
        this.jsonrpc = jsonrpc;
    }
    IFocusModelService.prototype.set_optimal_focus = function (module) {
        return this.jsonrpc.execute(module, 'set_optimal_focus', null);
    };
    IFocusModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [JsonRpcService])
    ], IFocusModelService);
    return IFocusModelService;
}());

var IFilterService = /** @class */ (function () {
    function IFilterService(jsonrpc) {
        this.jsonrpc = jsonrpc;
    }
    IFilterService.prototype.list_filters = function (module) {
        return this.jsonrpc.execute(module, 'list_filters', null);
    };
    IFilterService.prototype.get_filter = function (module) {
        return this.jsonrpc.execute(module, 'get_filter', null);
    };
    IFilterService.prototype.set_filter = function (module, filter_name) {
        return this.jsonrpc.execute(module, 'set_filter', { 'filter_name': filter_name });
    };
    IFilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [JsonRpcService])
    ], IFilterService);
    return IFilterService;
}());

var IAutoFocusService = /** @class */ (function () {
    function IAutoFocusService(jsonrpc) {
        this.jsonrpc = jsonrpc;
    }
    IAutoFocusService.prototype.auto_focus = function (module, count, step, guess, exposure_time) {
        return this.jsonrpc.execute(module, 'auto_focus', {
            'count': count, 'step': step, 'guess': guess,
            'exposure_time': exposure_time
        });
    };
    IAutoFocusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [JsonRpcService])
    ], IAutoFocusService);
    return IAutoFocusService;
}());

var ICoolingService = /** @class */ (function () {
    function ICoolingService(jsonrpc) {
        this.jsonrpc = jsonrpc;
    }
    ICoolingService.prototype.set_cooling = function (module, enabled, setpoint) {
        return this.jsonrpc.execute(module, 'set_cooling', { 'enabled': enabled, 'setpoint': setpoint });
    };
    ICoolingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [JsonRpcService])
    ], ICoolingService);
    return ICoolingService;
}());



/***/ }),

/***/ "./src/app/shared/status-factory.ts":
/*!******************************************!*\
  !*** ./src/app/shared/status-factory.ts ***!
  \******************************************/
/*! exports provided: Status, CameraStatus, CoolingStatus, FilterStatus, FocuserStatus, TelescopeStatus, StatusFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraStatus", function() { return CameraStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoolingStatus", function() { return CoolingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterStatus", function() { return FilterStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocuserStatus", function() { return FocuserStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelescopeStatus", function() { return TelescopeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusFactory", function() { return StatusFactory; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Status = /** @class */ (function () {
    function Status() {
    }
    return Status;
}());

var CameraStatus = /** @class */ (function (_super) {
    __extends(CameraStatus, _super);
    function CameraStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CameraStatus;
}(Status));

var CoolingStatus = /** @class */ (function (_super) {
    __extends(CoolingStatus, _super);
    function CoolingStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoolingStatus;
}(Status));

var FilterStatus = /** @class */ (function (_super) {
    __extends(FilterStatus, _super);
    function FilterStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FilterStatus;
}(Status));

var FocuserStatus = /** @class */ (function (_super) {
    __extends(FocuserStatus, _super);
    function FocuserStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FocuserStatus;
}(Status));

var TelescopeStatus = /** @class */ (function (_super) {
    __extends(TelescopeStatus, _super);
    function TelescopeStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TelescopeStatus;
}(Status));

var StatusFactory = /** @class */ (function () {
    function StatusFactory() {
    }
    StatusFactory.fromObject = function (rawStatus) {
        // init response
        var response = new Map();
        // loop all interfaces
        for (var iface in rawStatus) {
            if (rawStatus.hasOwnProperty(iface)) {
                if (iface === 'ICamera') {
                    response[iface] = new CameraStatus();
                }
                else if (iface === 'ICooling') {
                    response[iface] = new CoolingStatus();
                }
                else if (iface === 'IFocuser') {
                    response[iface] = new FocuserStatus();
                }
                else if (iface === 'IFilter') {
                    response[iface] = new FilterStatus();
                }
                else if (iface === 'ITelescope') {
                    response[iface] = new TelescopeStatus();
                }
                else {
                    // unknown status type
                    continue;
                }
                // assign object
                Object.assign(response[iface], rawStatus[iface]);
            }
        }
        // finished
        return response;
    };
    return StatusFactory;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /astro/code/pytel/pytel-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map