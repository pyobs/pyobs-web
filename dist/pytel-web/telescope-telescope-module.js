(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["telescope-telescope-module"],{

/***/ "./src/app/shared/coordinates.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/coordinates.pipe.ts ***!
  \********************************************/
/*! exports provided: CoordinatesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinatesPipe", function() { return CoordinatesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CoordinatesPipe = /** @class */ (function () {
    function CoordinatesPipe() {
    }
    CoordinatesPipe_1 = CoordinatesPipe;
    CoordinatesPipe.deg2sexagesimal = function (degrees, ra) {
        // nothing?
        if (degrees === undefined || degrees === null) {
            return '';
        }
        // save it
        var deg = Math.abs(degrees);
        // if right ascension, divide by 15
        if (ra) {
            deg /= 15.;
        }
        // get degrees/hours
        var dh = Math.floor(deg);
        // minutes
        var m = Math.floor((deg - dh) * 60.);
        // seconds
        var s = (deg - dh - m / 60.) * 3600.;
        // build string
        var str = '';
        // hours
        if (!ra) {
            str += (degrees < 0) ? '-' : '+';
        }
        if (Math.abs(dh) < 10) {
            str += '0';
        }
        str += dh.toString();
        // minutes
        str += ':';
        if (Math.abs(m) < 10) {
            str += '0';
        }
        str += m.toString();
        // seconds
        str += ':';
        if (Math.abs(s) < 10) {
            str += '0';
        }
        str += s.toFixed(1);
        return str;
    };
    CoordinatesPipe.sexagesimal2deg = function (coords, ra) {
        // analyze
        var re = /([+-]?[0-9][0-9]?)[:\s]([0-9][0-9]?)[:\s]([0-9][0-9]?(\.[0-9]+)?)/;
        var m = re.exec(coords);
        // calc
        var deg = Math.abs(parseFloat(m[1])) + parseFloat(m[2]) / 60. + parseFloat(m[3]) / 3600.;
        // sign
        if (m[1].indexOf('-') !== -1) {
            deg *= -1;
        }
        // ra?
        if (ra) {
            deg *= 15.;
        }
        // return
        return deg;
    };
    CoordinatesPipe.prototype.transform = function (value, ra) {
        return CoordinatesPipe_1.deg2sexagesimal(value, ra);
    };
    CoordinatesPipe = CoordinatesPipe_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'coordinates'
        })
    ], CoordinatesPipe);
    return CoordinatesPipe;
    var CoordinatesPipe_1;
}());



/***/ }),

/***/ "./src/app/telescope/telescope-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/telescope/telescope-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TelescopeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelescopeRoutingModule", function() { return TelescopeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _telescope_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./telescope.component */ "./src/app/telescope/telescope.component.ts");
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
                component: _telescope_component__WEBPACK_IMPORTED_MODULE_2__["TelescopeComponent"]
            }
        ]
    }];
var TelescopeRoutingModule = /** @class */ (function () {
    function TelescopeRoutingModule() {
    }
    TelescopeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TelescopeRoutingModule);
    return TelescopeRoutingModule;
}());



/***/ }),

/***/ "./src/app/telescope/telescope.component.css":
/*!***************************************************!*\
  !*** ./src/app/telescope/telescope.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/telescope/telescope.component.html":
/*!****************************************************!*\
  !*** ./src/app/telescope/telescope.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"telescope_status$ | async; let status\">\n    <div class=\"col-md-4\">\n        <h3>Status</h3>\n        <form>\n            <div class=\"form-group row\">\n                <label for=\"status\" class=\"col-sm-4 col-form-label\">Status:</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" readonly class=\"form-control\" id=\"status\"\n                           value=\"{{status.Status}}\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"curRA\" class=\"col-sm-4 col-form-label\">RA:</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" readonly class=\"form-control\" id=\"curRA\"\n                           value=\"{{status.Position.RA}}\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">Dec:</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" readonly class=\"form-control\" id=\"curDec\"\n                           value=\"{{status.Position.Dec}}\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"curAlt\" class=\"col-sm-4 col-form-label\">Alt:</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" readonly class=\"form-control\" id=\"curAlt\"\n                           value=\"--\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">Az:</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" readonly class=\"form-control\" id=\"curAz\"\n                           value=\"--\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"offset-sm-4 col-sm-8\">\n                    <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"init_telescope()\">Init</button>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"offset-sm-4 col-sm-8\">\n                    <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"park_telescope()\">Park</button>\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class=\"col-md-4\">\n        <h3>Move RA/Dec</h3>\n        <form #trackForm=\"ngForm\" (submit)=\"track(trackForm)\">\n            <div class=\"form-group row\">\n                <label for=\"moveRA\" class=\"col-sm-4 col-form-label\">RA:</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control\" name=\"ra\" id=\"moveRA\" placeholder=\"RA\"\n                           required [(ngModel)]=\"set_ra\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"moveDec\" class=\"col-sm-4 col-form-label\">Dec:</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control\" name=\"ra\" id=\"moveDec\" placeholder=\"Dec\"\n                           required [(ngModel)]=\"set_dec\">\n                </div>\n            </div>\n        </form>\n\n        <h3>Simbad query</h3>\n        <form #simbadForm=\"ngForm\" (submit)=\"query_simbad(simbadForm)\">\n            <div class=\"form-group row\">\n                <label for=\"simbadName\" class=\"col-sm-4 col-form-label\">Name:</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control\" name=\"simbadName\" id=\"simbadName\" placeholder=\"Name\"\n                           required ngModel>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-sm-offset-4 col-sm-8\">\n                    <button type=\"submit\" class=\"btn btn-success btn-block\">Query</button>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/telescope/telescope.component.ts":
/*!**************************************************!*\
  !*** ./src/app/telescope/telescope.component.ts ***!
  \**************************************************/
/*! exports provided: TelescopeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelescopeComponent", function() { return TelescopeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/json-rpc.service */ "./src/app/shared/json-rpc.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_coordinates_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/coordinates.pipe */ "./src/app/shared/coordinates.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TelescopeComponent = /** @class */ (function () {
    function TelescopeComponent(route, jsonrpc, ITelescope) {
        this.route = route;
        this.jsonrpc = jsonrpc;
        this.ITelescope = ITelescope;
    }
    TelescopeComponent.prototype.ngOnInit = function () {
        this.module = this.route.snapshot.params['module'];
        this.telescope_status$ = this.jsonrpc.getStatus(this.module, 'ITelescope');
    };
    TelescopeComponent.prototype.init_telescope = function () {
        this.ITelescope.init(this.module).subscribe();
    };
    TelescopeComponent.prototype.park_telescope = function () {
        this.ITelescope.park(this.module).subscribe();
    };
    TelescopeComponent.prototype.track = function (form) {
        var ra = _shared_coordinates_pipe__WEBPACK_IMPORTED_MODULE_3__["CoordinatesPipe"].sexagesimal2deg(form.value.ra, true);
        var dec = _shared_coordinates_pipe__WEBPACK_IMPORTED_MODULE_3__["CoordinatesPipe"].sexagesimal2deg(form.value.dec, false);
        this.ITelescope.track(this.module, ra, dec).subscribe();
    };
    TelescopeComponent.prototype.query_simbad = function (form) {
        var _this = this;
        this.coordinates_query$ = this.ITelescope.query_simbad(this.module, form.value.object).subscribe(function (data) {
            _this.set_ra = data[0].ra;
            _this.set_dec = data[0].dec;
        });
    };
    TelescopeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pytel-telescope',
            template: __webpack_require__(/*! ./telescope.component.html */ "./src/app/telescope/telescope.component.html"),
            styles: [__webpack_require__(/*! ./telescope.component.css */ "./src/app/telescope/telescope.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__["JsonRpcService"], _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__["ITelescopeService"]])
    ], TelescopeComponent);
    return TelescopeComponent;
}());



/***/ }),

/***/ "./src/app/telescope/telescope.module.ts":
/*!***********************************************!*\
  !*** ./src/app/telescope/telescope.module.ts ***!
  \***********************************************/
/*! exports provided: TelescopeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelescopeModule", function() { return TelescopeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _telescope_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./telescope.component */ "./src/app/telescope/telescope.component.ts");
/* harmony import */ var _telescope_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./telescope-routing.module */ "./src/app/telescope/telescope-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TelescopeModule = /** @class */ (function () {
    function TelescopeModule() {
    }
    TelescopeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _telescope_routing_module__WEBPACK_IMPORTED_MODULE_5__["TelescopeRoutingModule"]
            ],
            declarations: [_telescope_component__WEBPACK_IMPORTED_MODULE_4__["TelescopeComponent"]],
            providers: [],
            exports: [_telescope_component__WEBPACK_IMPORTED_MODULE_4__["TelescopeComponent"]]
        })
    ], TelescopeModule);
    return TelescopeModule;
}());



/***/ })

}]);
//# sourceMappingURL=telescope-telescope-module.js.map