(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camera-camera-module"],{

/***/ "./node_modules/ngx-bootstrap/progressbar/bar.component.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/bar.component.js ***!
  \*****************************************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _progressbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar.component */ "./node_modules/ngx-bootstrap/progressbar/progressbar.component.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");



// todo: number pipe
// todo: use query from progress?
var BarComponent = (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "setBarWidth", {
        get: function () {
            this.recalculatePercentage();
            return this.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "isBs3", {
        get: function () {
            return Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    BarComponent.prototype.ngOnInit = function () {
        this.progress.addBar(this);
    };
    BarComponent.prototype.ngOnDestroy = function () {
        this.progress.removeBar(this);
    };
    BarComponent.prototype.recalculatePercentage = function () {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        var totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    BarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bar',
                    template: "<ng-content></ng-content> ",
                    host: {
                        role: 'progressbar',
                        'aria-valuemin': '0',
                        '[class]': '"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',
                        '[class.progress-bar-animated]': '!isBs3 && animate',
                        '[class.progress-bar-striped]': 'striped',
                        '[class.active]': 'isBs3 && animate',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                        '[attr.aria-valuemax]': 'max',
                        '[style.height.%]': '"100"'
                    }
                },] },
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: _progressbar_component__WEBPACK_IMPORTED_MODULE_1__["ProgressbarComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] },] },
    ]; };
    BarComponent.propDecorators = {
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'value': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'setBarWidth': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.%',] },],
    };
    return BarComponent;
}());

//# sourceMappingURL=bar.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/index.js ***!
  \*********************************************************/
/*! exports provided: BarComponent, ProgressbarComponent, ProgressbarModule, ProgressbarConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar.component */ "./node_modules/ngx-bootstrap/progressbar/bar.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return _bar_component__WEBPACK_IMPORTED_MODULE_0__["BarComponent"]; });

/* harmony import */ var _progressbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar.component */ "./node_modules/ngx-bootstrap/progressbar/progressbar.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return _progressbar_component__WEBPACK_IMPORTED_MODULE_1__["ProgressbarComponent"]; });

/* harmony import */ var _progressbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressbar.module */ "./node_modules/ngx-bootstrap/progressbar/progressbar.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return _progressbar_module__WEBPACK_IMPORTED_MODULE_2__["ProgressbarModule"]; });

/* harmony import */ var _progressbar_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progressbar.config */ "./node_modules/ngx-bootstrap/progressbar/progressbar.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return _progressbar_config__WEBPACK_IMPORTED_MODULE_3__["ProgressbarConfig"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/progressbar.component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/progressbar.component.js ***!
  \*************************************************************************/
/*! exports provided: ProgressbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _progressbar_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar.config */ "./node_modules/ngx-bootstrap/progressbar/progressbar.config.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index */ "./node_modules/ngx-bootstrap/utils/index.js");



var ProgressbarComponent = (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        this.addClass = true;
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        /** current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         */
        set: function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: function () {
            return Object(_utils_index__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "max", {
        /** maximum total value of progress element */
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    ProgressbarComponent.prototype.addBar = function (bar) {
        bar.animate = this.animate;
        bar.striped = this.striped;
        this.bars.push(bar);
    };
    ProgressbarComponent.prototype.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressbarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'progressbar',
                    template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\"> <ng-content></ng-content> </bar> <ng-template [ngIf]=\"isStacked\"> <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar> </ng-template> ",
                    styles: [
                        "\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: _progressbar_config__WEBPACK_IMPORTED_MODULE_1__["ProgressbarConfig"], },
    ]; };
    ProgressbarComponent.propDecorators = {
        'animate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'striped': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'value': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'max': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.max',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'addClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.progress',] },],
    };
    return ProgressbarComponent;
}());

//# sourceMappingURL=progressbar.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/progressbar.config.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/progressbar.config.js ***!
  \**********************************************************************/
/*! exports provided: ProgressbarConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return ProgressbarConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ProgressbarConfig = (function () {
    function ProgressbarConfig() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
    ProgressbarConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ProgressbarConfig.ctorParameters = function () { return []; };
    return ProgressbarConfig;
}());

//# sourceMappingURL=progressbar.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/progressbar.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/progressbar.module.js ***!
  \**********************************************************************/
/*! exports provided: ProgressbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return ProgressbarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar.component */ "./node_modules/ngx-bootstrap/progressbar/bar.component.js");
/* harmony import */ var _progressbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progressbar.component */ "./node_modules/ngx-bootstrap/progressbar/progressbar.component.js");
/* harmony import */ var _progressbar_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progressbar.config */ "./node_modules/ngx-bootstrap/progressbar/progressbar.config.js");





var ProgressbarModule = (function () {
    function ProgressbarModule() {
    }
    ProgressbarModule.forRoot = function () {
        return { ngModule: ProgressbarModule, providers: [_progressbar_config__WEBPACK_IMPORTED_MODULE_4__["ProgressbarConfig"]] };
    };
    ProgressbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [_bar_component__WEBPACK_IMPORTED_MODULE_2__["BarComponent"], _progressbar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressbarComponent"]],
                    exports: [_bar_component__WEBPACK_IMPORTED_MODULE_2__["BarComponent"], _progressbar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressbarComponent"]]
                },] },
    ];
    /** @nocollapse */
    ProgressbarModule.ctorParameters = function () { return []; };
    return ProgressbarModule;
}());

//# sourceMappingURL=progressbar.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/decorators.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/decorators.js ***!
  \********************************************************/
/*! exports provided: OnChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return OnChange; });
/*tslint:disable:no-invalid-this */
function OnChange(defaultValue) {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this[_key];
            },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/facade/browser.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/facade/browser.js ***!
  \************************************************************/
/*! exports provided: window, document, location, gc, performance, Event, MouseEvent, KeyboardEvent, EventTarget, History, Location, EventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location", function() { return location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gc", function() { return gc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performance", function() { return performance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseEvent", function() { return MouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvent", function() { return KeyboardEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTarget", function() { return EventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = (typeof window !== 'undefined' && window) || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/index.js ***!
  \***************************************************/
/*! exports provided: OnChange, LinkedList, isBs3, Trigger, Utils, setTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators */ "./node_modules/ngx-bootstrap/utils/decorators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["OnChange"]; });

/* harmony import */ var _linked_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linked-list.class */ "./node_modules/ngx-bootstrap/utils/linked-list.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return _linked_list_class__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]; });

/* harmony import */ var _theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return _theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"]; });

/* harmony import */ var _trigger_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger.class */ "./node_modules/ngx-bootstrap/utils/trigger.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return _trigger_class__WEBPACK_IMPORTED_MODULE_3__["Trigger"]; });

/* harmony import */ var _utils_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.class */ "./node_modules/ngx-bootstrap/utils/utils.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils_class__WEBPACK_IMPORTED_MODULE_4__["Utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return _theme_provider__WEBPACK_IMPORTED_MODULE_2__["setTheme"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/linked-list.class.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/linked-list.class.js ***!
  \***************************************************************/
/*! exports provided: LinkedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
var LinkedList = (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var currentPreviousNode = this.getNode(position - 1);
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    LinkedList.prototype.findAll = function (fn) {
        var current = this.head;
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    LinkedList.prototype.forEach = function (fn) {
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    LinkedList.prototype.indexOf = function (value) {
        var current = this.head;
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    LinkedList.prototype.some = function (fn) {
        var current = this.head;
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.every = function (fn) {
        var current = this.head;
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    LinkedList.prototype.find = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.findIndex = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var outArray = [];
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    return LinkedList;
}());

//# sourceMappingURL=linked-list.class.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/theme-provider.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/theme-provider.js ***!
  \************************************************************/
/*! exports provided: setTheme, isBs3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return setTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return isBs3; });
/* harmony import */ var _facade_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade/browser */ "./node_modules/ngx-bootstrap/utils/facade/browser.js");

var guessedVersion;
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    var spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    var rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
function isBs3() {
    if (typeof _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"] === 'undefined') {
        return true;
    }
    if (typeof _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"].__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"].__theme !== 'bs4';
}
//# sourceMappingURL=theme-provider.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/trigger.class.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/trigger.class.js ***!
  \***********************************************************/
/*! exports provided: Trigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () {
        return this.open === 'manual' || this.close === 'manual';
    };
    return Trigger;
}());

//# sourceMappingURL=trigger.class.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/utils.class.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/utils.class.js ***!
  \*********************************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _facade_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade/browser */ "./node_modules/ngx-bootstrap/utils/facade/browser.js");

var Utils = (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());

//# sourceMappingURL=utils.class.js.map

/***/ }),

/***/ "./src/app/camera/camera-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/camera/camera-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CameraRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraRoutingModule", function() { return CameraRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _camera_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera.component */ "./src/app/camera/camera.component.ts");
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
                component: _camera_component__WEBPACK_IMPORTED_MODULE_2__["CameraComponent"]
            }
        ]
    }];
var CameraRoutingModule = /** @class */ (function () {
    function CameraRoutingModule() {
    }
    CameraRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CameraRoutingModule);
    return CameraRoutingModule;
}());



/***/ }),

/***/ "./src/app/camera/camera.component.css":
/*!*********************************************!*\
  !*** ./src/app/camera/camera.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/camera/camera.component.html":
/*!**********************************************!*\
  !*** ./src/app/camera/camera.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-2 col-md-4 col-sm-12 col-xs-12\">\n    <pytel-take-image [module]=\"module\"></pytel-take-image>\n  </div>\n\n  <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-12\">\n    <pytel-image-preview [module]=\"module\"></pytel-image-preview>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/camera/camera.component.ts":
/*!********************************************!*\
  !*** ./src/app/camera/camera.component.ts ***!
  \********************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CameraComponent = /** @class */ (function () {
    function CameraComponent(route) {
        this.route = route;
    }
    CameraComponent.prototype.ngOnInit = function () {
        this.module = this.route.snapshot.params['module'];
    };
    CameraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pytel-camera',
            template: __webpack_require__(/*! ./camera.component.html */ "./src/app/camera/camera.component.html"),
            styles: [__webpack_require__(/*! ./camera.component.css */ "./src/app/camera/camera.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CameraComponent);
    return CameraComponent;
}());



/***/ }),

/***/ "./src/app/camera/camera.module.ts":
/*!*****************************************!*\
  !*** ./src/app/camera/camera.module.ts ***!
  \*****************************************/
/*! exports provided: CameraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraModule", function() { return CameraModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _camera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camera.component */ "./src/app/camera/camera.component.ts");
/* harmony import */ var _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camera-routing.module */ "./src/app/camera/camera-routing.module.ts");
/* harmony import */ var _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-preview/image-preview.component */ "./src/app/camera/image-preview/image-preview.component.ts");
/* harmony import */ var _take_image_take_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./take-image/take-image.component */ "./src/app/camera/take-image/take-image.component.ts");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CameraModule = /** @class */ (function () {
    function CameraModule() {
    }
    CameraModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__["CameraRoutingModule"],
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__["ProgressbarModule"].forRoot()
            ],
            declarations: [_camera_component__WEBPACK_IMPORTED_MODULE_4__["CameraComponent"], _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_6__["ImagePreviewComponent"], _take_image_take_image_component__WEBPACK_IMPORTED_MODULE_7__["TakeImageComponent"]],
            providers: [],
            exports: [_camera_component__WEBPACK_IMPORTED_MODULE_4__["CameraComponent"]]
        })
    ], CameraModule);
    return CameraModule;
}());



/***/ }),

/***/ "./src/app/camera/image-preview/image-preview.component.css":
/*!******************************************************************!*\
  !*** ./src/app/camera/image-preview/image-preview.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/camera/image-preview/image-preview.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/camera/image-preview/image-preview.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    <a [hidden]=\"image?.length==0\" href=\"download/{{image}}\">\n        Download image\n    </a>\n    <strong [hidden]=\"image?.length>0\">No image taken</strong>\n</p>\n\n<div class=\"row\">\n    <div class=\"col-md-8\">\n        <img *ngIf=\"image?.length>0\" src=\"/preview/{{image}}\" width=\"100%\">\n    </div>\n    <div class=\"col-md-4\" style=\"font-size: smaller;\">\n        <table class=\"table table-striped table-bordered table-hover table-sm\" *ngIf=\"fits_headers$ | async as hdr\">\n            <tr>\n                <th>Key</th>\n                <th>Value</th>\n            </tr>\n            <tr *ngFor=\"let item of hdr\">\n                <td>{{item.key}}</td>\n                <td>{{item.value}}</td>\n            </tr>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/camera/image-preview/image-preview.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/camera/image-preview/image-preview.component.ts ***!
  \*****************************************************************/
/*! exports provided: ImagePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewComponent", function() { return ImagePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/json-rpc.service */ "./src/app/shared/json-rpc.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_status_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/status-factory */ "./src/app/shared/status-factory.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImagePreviewComponent = /** @class */ (function () {
    function ImagePreviewComponent(jsonrpc, http) {
        this.jsonrpc = jsonrpc;
        this.http = http;
    }
    ImagePreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.camera_status$ = this.jsonrpc.getStatus(this.module, 'ICamera');
        this.subscription = this.camera_status$.subscribe(function (status) { return _this.updateFitsHeaders(status); });
    };
    ImagePreviewComponent.prototype.updateFitsHeaders = function (status) {
        if (status instanceof _shared_status_factory__WEBPACK_IMPORTED_MODULE_3__["CameraStatus"]) {
            if (status.LastImage != null && status.LastImage.length > 0 && status.LastImage !== this.image) {
                this.image = status.LastImage;
                this.fits_headers$ = this.http.get('/headers/' + this.image)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (json) {
                    // convert dictionary to list of key/value/comment pairs
                    var tmp = [];
                    for (var key in json) {
                        if (json.hasOwnProperty(key)) {
                            tmp = tmp.concat([{
                                    'key': key,
                                    'value': json[key][0],
                                    'comment': json[key][1]
                                }]);
                        }
                    }
                    // return sorted
                    return tmp.sort(function (a, b) { return a.key.localeCompare(b.key); });
                }));
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagePreviewComponent.prototype, "module", void 0);
    ImagePreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pytel-image-preview',
            template: __webpack_require__(/*! ./image-preview.component.html */ "./src/app/camera/image-preview/image-preview.component.html"),
            styles: [__webpack_require__(/*! ./image-preview.component.css */ "./src/app/camera/image-preview/image-preview.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__["JsonRpcService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImagePreviewComponent);
    return ImagePreviewComponent;
}());



/***/ }),

/***/ "./src/app/camera/take-image/take-image.component.css":
/*!************************************************************!*\
  !*** ./src/app/camera/take-image/take-image.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/camera/take-image/take-image.component.html":
/*!*************************************************************!*\
  !*** ./src/app/camera/take-image/take-image.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-compact\" role=\"form\" #exposeForm=\"ngForm\" *ngIf=\"camera_status$ | async; let status\">\n    <div class=\"form-group\">\n        <label for=\"inputType\">Image Type:</label>\n        <select class=\"form-control\" id=\"inputType\" name=\"image_type\" [(ngModel)]=\"settings.image_type\">\n            required>\n            <option value=\"bias\">BIAS</option>\n            <option value=\"dark\">DARK</option>\n            <option value=\"object\">OBJECT</option>\n            <option value=\"flat\">FLAT</option>\n        </select>\n    </div>\n    <hr/>\n    <div class=\"form-group\">\n        <label for=\"inputExpTime\">ExpTime [ms]:</label>\n        <input type=\"number\" class=\"form-control\" id=\"inputExpTime\" placeholder=\"ExpTime [ms]\"\n               name=\"exposure_time\" step=\"1000\"\n               [ngModel]=\"settings.exposure_time\" [disabled]=\"settings.imgtype=='bias'\"\n               required>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputExpCount\">Count:</label>\n        <input type=\"number\" class=\"form-control\" id=\"inputExpCount\" placeholder=\"Exposure count\"\n               name=\"count\" [ngModel]=\"settings.count\" required>\n    </div>\n    <hr/>\n    <div class=\"form-group\">\n        <label for=\"inputBinning\">Binning:</label>\n        <select class=\"form-control\" id=\"inputBinning\" name=\"binning\" [(ngModel)]=\"settings.binning\" required>\n            <option value=\"1\">1x1</option>\n            <option value=\"2\">2x2</option>\n            <option value=\"3\">3x3</option>\n        </select>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputLeft\">Left:</label>\n        <input type=\"number\" class=\"form-control\" id=\"inputLeft\" placeholder=\"Left\"\n               name=\"left\" [(ngModel)]=\"settings.window.left\" required>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputTop\">Top:</label>\n        <input type=\"number\" class=\"form-control\" id=\"inputTop\" placeholder=\"Top\"\n               name=\"top\" [(ngModel)]=\"settings.window.top\" required>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputWidth\">Width:</label>\n        <input type=\"number\" class=\"form-control\" id=\"inputWidth\" placeholder=\"Width\"\n               name=\"width\" [(ngModel)]=\"settings.window.width\" required>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputHeight\">Height:</label>\n        <input type=\"number\" class=\"form-control\" id=\"inputHeight\" placeholder=\"Height\"\n               name=\"height\" [(ngModel)]=\"settings.window.height\" required>\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn btn-primary form-control\" (click)=\"set_full_frame()\">Full frame</button>\n    </div>\n    <hr/>\n    <div class=\"form-group\">\n        <button type=\"button\" class=\"btn btn-success btn-block form-control\"\n                [disabled]=\"status.ExposuresLeft!=0 || status.Status!='idle'\"\n                (click)=\"expose(exposeForm)\">\n            Expose\n        </button>\n        <button type=\"button\" class=\"btn btn-warning btn-block form-control\"\n                [disabled]=\"(status.ExposuresLeft==0 && status.Status=='idle') || sequence_aborted\"\n                (click)=\"abort_after_exposure()\">\n            Abort after exposure\n        </button>\n        <button type=\"button\" class=\"btn btn-danger btn-block form-control\"\n                [disabled]=\"(status.ExposuresLeft==0 && status.Status=='idle') || image_aborted\"\n                (click)=\"abort_exposure()\">\n            Abort exposure<span> &amp; sequence</span>\n        </button>\n    </div>\n    <div class=\"form-group\">\n        <small [hidden]=\"status.ExposuresLeft<=1\">\n            <em>{{status.ExposuresLeft}} exposure(s) left</em><br/>\n        </small>\n        <small>\n            <em>Exposure time left: {{status.ExposureTimeLeft/1000. | number:'1.2-2'}} sec</em>\n        </small>\n        <progressbar class=\"progress-striped\" max=\"100\" [value]=\"status.Progress\" type=\"success\">\n            {{status.Progress | number:'1.1-1'}}%\n        </progressbar>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/camera/take-image/take-image.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/camera/take-image/take-image.component.ts ***!
  \***********************************************************/
/*! exports provided: TakeImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeImageComponent", function() { return TakeImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/json-rpc.service */ "./src/app/shared/json-rpc.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TakeImageComponent = /** @class */ (function () {
    function TakeImageComponent(jsonrpc, ICamera) {
        this.jsonrpc = jsonrpc;
        this.ICamera = ICamera;
        this.settings = {
            image_type: 'object',
            binning: 1,
            window: {},
            exposure_time: 1000,
            count: 1
        };
        this.sequence_aborted = false;
        this.image_aborted = false;
    }
    TakeImageComponent.prototype.ngOnInit = function () {
        this.camera_status$ = this.jsonrpc.getStatus(this.module, 'ICamera');
        // get full frame
        this.set_full_frame();
    };
    TakeImageComponent.prototype.set_full_frame = function () {
        var _this = this;
        // set full frame
        this.ICamera.get_full_frame(this.module).subscribe(function (data) {
            // calculate window for binning
            _this.settings.window = {
                left: data.left,
                top: data.top,
                width: Math.floor(data.width / _this.settings.binning),
                height: Math.floor(data.height / _this.settings.binning)
            };
        });
        // don't submit form
        return false;
    };
    TakeImageComponent.prototype.expose = function (form) {
        var _this = this;
        // set binning
        var f = form.value;
        var binning = Number.parseInt(f.binning);
        this.ICamera.set_binning(this.module, binning, binning).subscribe(function () {
            // set window
            _this.ICamera.set_window(_this.module, f.left, f.top, f.width * binning, f.height * binning)
                .subscribe(function () {
                // start exposures
                _this.ICamera.expose(_this.module, f.exposure_time, f.image_type, f.count).subscribe();
            });
        });
    };
    TakeImageComponent.prototype.abort_exposure = function () {
        // abort current exposure
        this.ICamera.abort(this.module).subscribe();
        this.image_aborted = true;
        this.sequence_aborted = true;
    };
    TakeImageComponent.prototype.abort_after_exposure = function () {
        // abort current exposure
        this.ICamera.abort_sequence(this.module).subscribe();
        this.sequence_aborted = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TakeImageComponent.prototype, "module", void 0);
    TakeImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pytel-take-image',
            template: __webpack_require__(/*! ./take-image.component.html */ "./src/app/camera/take-image/take-image.component.html"),
            styles: [__webpack_require__(/*! ./take-image.component.css */ "./src/app/camera/take-image/take-image.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__["JsonRpcService"], _shared_json_rpc_service__WEBPACK_IMPORTED_MODULE_1__["ICameraService"]])
    ], TakeImageComponent);
    return TakeImageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=camera-camera-module.js.map