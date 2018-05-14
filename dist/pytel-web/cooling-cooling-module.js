(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cooling-cooling-module"],{

/***/ "./src/app/cooling/cooling-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cooling/cooling-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CoolingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoolingRoutingModule", function() { return CoolingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cooling_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cooling.component */ "./src/app/cooling/cooling.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        children: [
            {
                path: ':module',
                component: _cooling_component__WEBPACK_IMPORTED_MODULE_2__["CoolingComponent"]
            }
        ]
    }];
var CoolingRoutingModule = /** @class */ (function () {
    function CoolingRoutingModule() {
    }
    CoolingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CoolingRoutingModule);
    return CoolingRoutingModule;
}());



/***/ }),

/***/ "./src/app/cooling/cooling.component.css":
/*!***********************************************!*\
  !*** ./src/app/cooling/cooling.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cooling/cooling.component.html":
/*!************************************************!*\
  !*** ./src/app/cooling/cooling.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"cooling_status$ | async; let status\">\n    <div class=\"col-md-4\">\n        <h3>Status</h3>\n        <form>\n            <div class=\"form-group row\" *ngFor=\"let temp of status.Temperatures | mapToIterable\">\n                <label class=\"col-sm-4 col-form-label\">{{temp.key}}:</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" readonly class=\"form-control\" value=\"{{temp.val|number}}°C\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 control-label\">Cooling:</label>\n                <div class=\"col-sm-8\">\n                    <input *ngIf=\"status.Enabled==true\" type=\"text\" class=\"form-control\"\n                           value=\"ON, Setpoint={{status.SetPoint|number}}°C\" readonly>\n                    <input *ngIf=\"status.Enabled==false\" type=\"text\" class=\"form-control\"value=\"OFF\" readonly>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"power\" class=\"col-sm-4 control-label\">Cooling power:</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control\" id=\"power\" value=\"{{status.Power|number}}%\"\n                           readonly>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"col-md-4\">\n        <h3>Config</h3>\n        <form #coolingForm=\"ngForm\" (submit)=\"set_cooling(coolingForm)\">\n            <div class=\"form-group row\">\n                <label for=\"setTemp\" class=\"col-sm-4 control-label\">Setpoint:</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"number\" name=\"setTemp\" class=\"form-control\" id=\"setTemp\"\n                           [(ngModel)]=\"cooling.setpoint\" [disabled]=\"!cooling.enabled\" required>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-sm-offset-4 col-sm-8\">\n                    <div class=\"checkbox\">\n                        <label>\n                            <input name=\"enable\" type=\"checkbox\" [(ngModel)]=\"cooling.enabled\">\n                            Enable cooling\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-sm-offset-4 col-sm-8\">\n                    <button class=\"btn btn-primary btn-block\" [disabled]=\"!coolingForm.form.valid\">\n                        Apply\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cooling/cooling.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cooling/cooling.component.ts ***!
  \**********************************************/
/*! exports provided: CoolingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoolingComponent", function() { return CoolingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/json-rpc.service */ "./src/app/shared/json-rpc.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoolingComponent = /** @class */ (function () {
    function CoolingComponent(route, jsonrpc, ICooling) {
        this.route = route;
        this.jsonrpc = jsonrpc;
        this.ICooling = ICooling;
        this.cooling = { 'setpoint': 0., 'enabled': false };
    }
    CoolingComponent.prototype.ngOnInit = function () {
        this.module = this.route.snapshot.params['module'];
        this.cooling_status$ = this.jsonrpc.getStatus(this.module, 'ICooling');
    };
    CoolingComponent.prototype.set_cooling = function () {
        this.ICooling.set_cooling(this.module, this.cooling.enabled, this.cooling.setpoint).subscribe();
    };
    CoolingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pytel-cooling',
            template: __webpack_require__(/*! ./cooling.component.html */ "./src/app/cooling/cooling.component.html"),
            styles: [__webpack_require__(/*! ./cooling.component.css */ "./src/app/cooling/cooling.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__["JsonRpcService"], _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__["ICoolingService"]])
    ], CoolingComponent);
    return CoolingComponent;
}());



/***/ }),

/***/ "./src/app/cooling/cooling.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cooling/cooling.module.ts ***!
  \*******************************************/
/*! exports provided: CoolingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoolingModule", function() { return CoolingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cooling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cooling.component */ "./src/app/cooling/cooling.component.ts");
/* harmony import */ var _cooling_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cooling-routing.module */ "./src/app/cooling/cooling-routing.module.ts");
/* harmony import */ var _shared_map_to_iterable_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/map-to-iterable.pipe */ "./src/app/shared/map-to-iterable.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoolingModule = /** @class */ (function () {
    function CoolingModule() {
    }
    CoolingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _cooling_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoolingRoutingModule"]
            ],
            declarations: [_cooling_component__WEBPACK_IMPORTED_MODULE_4__["CoolingComponent"], _shared_map_to_iterable_pipe__WEBPACK_IMPORTED_MODULE_6__["MapToIterablePipe"]],
            providers: [],
            exports: [_cooling_component__WEBPACK_IMPORTED_MODULE_4__["CoolingComponent"]]
        })
    ], CoolingModule);
    return CoolingModule;
}());



/***/ }),

/***/ "./src/app/shared/map-to-iterable.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/map-to-iterable.pipe.ts ***!
  \************************************************/
/*! exports provided: MapToIterablePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapToIterablePipe", function() { return MapToIterablePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapToIterablePipe = /** @class */ (function () {
    function MapToIterablePipe() {
    }
    MapToIterablePipe.prototype.transform = function (dict) {
        var a = [];
        for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
                a.push({ key: key, val: dict[key] });
            }
        }
        return a;
    };
    MapToIterablePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'mapToIterable'
        })
    ], MapToIterablePipe);
    return MapToIterablePipe;
}());



/***/ })

}]);
//# sourceMappingURL=cooling-cooling-module.js.map