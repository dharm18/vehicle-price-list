(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h2>{{title}}</h2>\n  <hr>\n\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n      <!-- Links -->\n      <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n              <a routerLink=\"vehicles\" class=\"btn btn-primary active\" role=\"button\" routerLinkActive=\"active\">Vehicles</a>\n          </li>\n          <li class=\"nav-item\" style=\"margin-left: 10px;\">\n              <a routerLink=\"add\" class=\"btn btn-primary active\" role=\"button\" routerLinkActive=\"active\">Add</a>\n          </li>\n      </ul>\n\n  </nav>\n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-vehicle/create-vehicle.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-vehicle/create-vehicle.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"col-xs-12\">\n        <div class=\"margin-20\">\n           <h4>Create Vehicle</h4>\n        </div>\n\n        <div  [hidden]=\"!submitted\" class=\"alert alert-success\" role=\"alert\">\n            The details have been successfully saved.\n        </div>\n\n        <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"save(myForm)\">\n            \n            <div class=\"form-group\">\n                <label for=\"name\">Make Name</label>\n                <input type=\"text\" formControlName=\"makeName\" class=\"form-control\" id=\"makeName\" required name=\"makeName\">\n\n                <small *ngIf=\"!myForm.controls.makeName.valid\" class=\"text-danger\">\n                    Name is required (minimum 5 characters).\n                </small>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"name\">Model Name</label>\n                <input type=\"text\" formControlName=\"modelName\" class=\"form-control\" id=\"modelName\" required name=\"modelName\">\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"name\">Model Edition</label>\n                <input type=\"text\" formControlName=\"modelEdition\" class=\"form-control\" id=\"modelEdition\" required name=\"modelEdition\">\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"name\">List Price</label>\n                <input type=\"number\" formControlName=\"listPrice\" class=\"form-control\" id=\"listPrice\" required name=\"listPrice\">\n            </div>\n\n            <div formArrayName=\"vehicleOptions\">\n                <div  *ngFor=\"let address of myForm.controls.vehicleOptions.controls; let i=index\" class=\"card panel-default\">\n                    <!-- address header, show remove button when more than one address available -->\n                    <div class=\"card-header\">\n                        <span class=\"card-title\">Vehicle Option {{i + 1}}</span>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"removeVehicleOptions(i)\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n\n                    <!-- Angular assigns array index as group name by default 0, 1, 2, ... -->\n                    <div class=\"card-body\" [formGroupName]=\"i\">\n                        <!--name-->\n                        <div>\n                            <div class=\"form-group col-xs-6\">\n                                <label>Name</label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n                                <!--display error message if name is not valid-->\n                                <small [hidden]=\"myForm.controls.vehicleOptions.controls[i].controls.name.valid\" class=\"text-danger\">\n                                    Name is required\n                                </small>\n                            </div>\n                            <!--price-->\n                            <div class=\"form-group col-xs-6\">\n                                <label>Price</label>\n                                <input type=\"number\" formControlName=\"price\" class=\"form-control\" >\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"margin-20\">\n                <a (click)=\"addVehicleOptions()\" class=\"btn btn-default\" style=\"cursor: default\">\n                Add another Vehicle options +\n                </a>\n            </div>\n\n            <div class=\"margin-20\">\n                <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!myForm.valid\">Submit</button>\n            </div>\n            <div class=\"clearfix\"></div>\n\n            <div class=\"margin-20\">\n                    <div>myForm details:-</div>\n                    <pre>Is myForm valid?: <br>{{myForm.valid | json}}</pre>\n                    <pre>form value: <br>{{myForm.value | json}}</pre>\n            </div>\n\n        </form>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-vehicle/update-vehicle.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-vehicle/update-vehicle.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-xs-12\">\n        <div class=\"margin-20\">\n           <h4>Update Vehicle</h4>\n        </div>\n\n        <div  [hidden]=\"!submitted\" class=\"alert alert-success\" role=\"alert\">\n            The details have been successfully saved.\n        </div>\n\n        <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            \n            <div class=\"hidden\">\n                    <input type=\"hidden\" formControlName=\"id\" placeholder=\"id\" name=\"id\" class=\"form-control\" id=\"id\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"name\">Make Name</label>\n                <input type=\"text\" formControlName=\"makeName\" class=\"form-control\" id=\"makeName\" required name=\"makeName\">\n\n                <small *ngIf=\"!myForm.controls.makeName.valid\" class=\"text-danger\">\n                    Name is required (minimum 5 characters).\n                </small>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"name\">Model Name</label>\n                <input type=\"text\" formControlName=\"modelName\" class=\"form-control\" id=\"modelName\" required name=\"modelName\">\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"name\">Model Edition</label>\n                <input type=\"text\" formControlName=\"modelEdition\" class=\"form-control\" id=\"modelEdition\" required name=\"modelEdition\">\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"name\">List Price</label>\n                <input type=\"number\" formControlName=\"listPrice\" class=\"form-control\" id=\"listPrice\" required name=\"listPrice\">\n            </div>    \n\n            <div formArrayName=\"vehicleOptions\">\n                <div  *ngFor=\"let address of myForm.controls.vehicleOptions.controls; let i=index\" class=\"panel panel-default\">\n                    <!-- address header, show remove button when more than one address available -->\n                    <div class=\"panel-heading\">\n                        <span>Vehicle Option {{i + 1}}</span>\n                        <span class=\"glyphicon glyphicon-remove pull-right\" *ngIf=\"myForm.controls.vehicleOptions.controls.length > 1\" \n                            (click)=\"removeVehicleOptions(i)\">\n                        </span>\n                    </div>\n\n                    <!-- Angular assigns array index as group name by default 0, 1, 2, ... -->\n                    <div class=\"panel-body\" [formGroupName]=\"i\">\n                        <!--name-->\n                        <div class=\"hidden\">\n                            <input type=\"hidden\" formControlName=\"id\" placeholder=\"id\" name=\"id\" class=\"form-control\" id=\"id\">\n                        </div>\n                        <div class=\"form-group col-xs-6\">\n                            <label>Name</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n                            <!--display error message if name is not valid-->\n                            <small [hidden]=\"myForm.controls.vehicleOptions.controls[i].controls.name.valid\" class=\"text-danger\">\n                                Name is required\n                            </small>\n                        </div>\n                        <!--price-->\n                        <div class=\"form-group col-xs-6\">\n                            <label>Price</label>\n                            <input type=\"text\" formControlName=\"price\" class=\"form-control\" >\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"margin-20\">\n                <a (click)=\"addVehicleOptions()\" class=\"btn btn-default\" style=\"cursor: default\">\n                Add another Vehicle options +\n                </a>\n            </div>\n\n            <div class=\"margin-20\">\n                <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!myForm.valid\">Submit</button>\n            </div>\n            <div class=\"clearfix\"></div>\n\n            <div class=\"margin-20\">\n                    <div>myForm details:-</div>\n                    <pre>Is myForm valid?: <br>{{myForm.valid | json}}</pre>\n                    <pre>form value: <br>{{myForm.value | json}}</pre>\n            </div>\n\n        </form>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-details/vehicle-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-details/vehicle-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"vehicle\" class=\"col-xs-12\">\n        <div class=\"margin-20\">\n           <h4>View Vehicle</h4>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Make Name</label>:\n            {{vehicle.makeName}}\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Model Name</label>:\n            {{vehicle.modelName}}\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Model Edition</label>:\n            {{vehicle.modelEdition}}\n        </div>\n\n            \n            <div  *ngFor=\"let options of vehicle.vehicleOptions; let i=index\" class=\"panel panel-default\">\n                <!-- address header, show remove button when more than one address available -->\n                <div class=\"panel-heading\">\n                    <span>Vehicle Option {{i + 1}}</span>\n                </div>\n\n                <!-- Angular assigns array index as group name by default 0, 1, 2, ... -->\n                <div class=\"panel-body\">\n                    <!--name-->\n                    <div class=\"form-group col-xs-6\">\n                        <label>Name</label>:{{options.name}}\n                    </div>\n                    <!--price-->\n                    <div class=\"form-group col-xs-6\">\n                        <label>Price</label>: {{options.price}}\n                    </div>\n                </div>\n\n            </div>\n            \n\n            <div class=\"margin-20\">\n                    <button (click)=\"list()\" class=\"btn btn-primary\">Back to Vehicle List</button><br>\n            </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-list/vehicle-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-list/vehicle-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h1>Vehicles</h1>\n    </div>\n    <div class=\"panel-body\">\n        <table class=\"table table-striped table-bordered\">\n            <thead>\n                <tr>\n                    <th>Make Name</th>\n                    <th>Model Name</th>\n                    <th>Model Edition</th>\n                    <th>Actions</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let vehicle of vehicles | async\">\n                    <td>{{vehicle.makeName}}</td>\n                    <td>{{vehicle.modelName}}</td>\n                    <td>{{vehicle.modelEdition}}</td>\n                    <td>\n                        <button (click)=\"vehicleDetails(vehicle.id)\" class=\"btn btn-info\" style=\"margin-left: 10px\">Details</button>\n                        <button (click)=\"updateVehicle(vehicle.id)\" class=\"btn btn-info\" style=\"margin-left: 10px\">Update</button>\n                        <button (click)=\"deleteVehicle(vehicle.id)\" class=\"btn btn-danger\" style=\"margin-left: 10px\">Delete</button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    }
    return __assign.apply(this, arguments);
}

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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-list/vehicle-list.component */ "./src/app/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var _create_vehicle_create_vehicle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-vehicle/create-vehicle.component */ "./src/app/create-vehicle/create-vehicle.component.ts");
/* harmony import */ var _vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle-details/vehicle-details.component */ "./src/app/vehicle-details/vehicle-details.component.ts");
/* harmony import */ var _update_vehicle_update_vehicle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-vehicle/update-vehicle.component */ "./src/app/update-vehicle/update-vehicle.component.ts");







const routes = [
    { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
    { path: 'vehicles', component: _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_3__["VehicleListComponent"] },
    { path: 'add', component: _create_vehicle_create_vehicle_component__WEBPACK_IMPORTED_MODULE_4__["CreateVehicleComponent"] },
    { path: 'update/:id', component: _update_vehicle_update_vehicle_component__WEBPACK_IMPORTED_MODULE_6__["UpdateVehicleComponent"] },
    { path: 'details/:id', component: _vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_5__["VehicleDetailsComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Vehicle Price List Application';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _create_vehicle_create_vehicle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-vehicle/create-vehicle.component */ "./src/app/create-vehicle/create-vehicle.component.ts");
/* harmony import */ var _vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehicle-details/vehicle-details.component */ "./src/app/vehicle-details/vehicle-details.component.ts");
/* harmony import */ var _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vehicle-list/vehicle-list.component */ "./src/app/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _update_vehicle_update_vehicle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update-vehicle/update-vehicle.component */ "./src/app/update-vehicle/update-vehicle.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _create_vehicle_create_vehicle_component__WEBPACK_IMPORTED_MODULE_6__["CreateVehicleComponent"],
            _vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_7__["VehicleDetailsComponent"],
            _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_8__["VehicleListComponent"],
            _update_vehicle_update_vehicle_component__WEBPACK_IMPORTED_MODULE_10__["UpdateVehicleComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/create-vehicle/create-vehicle.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create-vehicle/create-vehicle.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS12ZWhpY2xlL2NyZWF0ZS12ZWhpY2xlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/create-vehicle/create-vehicle.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-vehicle/create-vehicle.component.ts ***!
  \************************************************************/
/*! exports provided: CreateVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVehicleComponent", function() { return CreateVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicle.service.ts");




let CreateVehicleComponent = class CreateVehicleComponent {
    constructor(vehicleService, _fb) {
        this.vehicleService = vehicleService;
        this._fb = _fb;
        this.submitted = false;
    }
    ngOnInit() {
        this.newVehicle();
    }
    newVehicle() {
        this.submitted = false;
        this.myForm = this._fb.group({
            makeName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            modelName: [''],
            modelEdition: [''],
            listPrice: [''],
            vehicleOptions: this._fb.array([
                this.initVehicleOptions(),
            ])
        });
    }
    initVehicleOptions() {
        return this._fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['']
        });
    }
    addVehicleOptions() {
        const control = this.myForm.controls['vehicleOptions'];
        control.push(this.initVehicleOptions());
    }
    removeVehicleOptions(i) {
        const control = this.myForm.controls['vehicleOptions'];
        control.removeAt(i);
    }
    save(model) {
        console.log(this.myForm.value);
        this.submitted = true;
        this.vehicleService.createVehicle(this.myForm.value)
            .subscribe(data => console.log(data), error => console.log(error));
        console.log(model);
        this.newVehicle();
    }
};
CreateVehicleComponent.ctorParameters = () => [
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CreateVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-vehicle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-vehicle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-vehicle/create-vehicle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-vehicle.component.css */ "./src/app/create-vehicle/create-vehicle.component.css")).default]
    })
], CreateVehicleComponent);



/***/ }),

/***/ "./src/app/update-vehicle/update-vehicle.component.css":
/*!*************************************************************!*\
  !*** ./src/app/update-vehicle/update-vehicle.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS12ZWhpY2xlL3VwZGF0ZS12ZWhpY2xlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/update-vehicle/update-vehicle.component.ts":
/*!************************************************************!*\
  !*** ./src/app/update-vehicle/update-vehicle.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVehicleComponent", function() { return UpdateVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vehicle */ "./src/app/vehicle.ts");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicle.service.ts");






let UpdateVehicleComponent = class UpdateVehicleComponent {
    constructor(route, router, vehicleService, _fb) {
        this.route = route;
        this.router = router;
        this.vehicleService = vehicleService;
        this._fb = _fb;
        this.submitted = false;
    }
    ngOnInit() {
        this.vehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_4__["Vehicle"]();
        this.id = this.route.snapshot.params['id'];
        this.submitted = false;
        this.myForm = this._fb.group({
            id: [''],
            makeName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            modelName: [''],
            modelEdition: [''],
            listPrice: [''],
            vehicleOptions: this._fb.array([
                this.initVehicleOptions(),
            ])
        });
        this.vehicleService.getVehicle(this.id)
            .subscribe(data => {
            console.log(data);
            //this.vehicle = data;
            this.myForm.patchValue(data);
        }, error => console.log(error));
        //this.myForm.controls["makeName"].setValue(this.vehicle.makeName);
        // this.myForm.patchValue({
        //   makeName: this.vehicle.makeName,
        //   modelName: this.vehicle.modelName,
        //   modelEdition: this.vehicle.modelEdition,
        //   listPrice: this.vehicle.listPrice,
        //   //vehicleOptions: this.vehicle.vehicleOptions
        // });
        // this.vehicle.vehicleOptions.forEach(x => {
        //   (this.myForm.get('vehicleOptions') as FormArray)
        //     .push(new FormControl(x.name))
        //     //.push(new FormControl(x.price));
        // })
    }
    initVehicleOptions() {
        return this._fb.group({
            id: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['']
        });
    }
    updateVehicle() {
        this.vehicleService.updateVehicle(this.id, this.myForm.value)
            .subscribe(data => console.log(data), error => console.log(error));
        this.vehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_4__["Vehicle"]();
        this.gotoList();
    }
    onSubmit() {
        this.updateVehicle();
    }
    gotoList() {
        this.router.navigate(['/vehicles']);
    }
};
UpdateVehicleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
UpdateVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-vehicle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-vehicle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-vehicle/update-vehicle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-vehicle.component.css */ "./src/app/update-vehicle/update-vehicle.component.css")).default]
    })
], UpdateVehicleComponent);



/***/ }),

/***/ "./src/app/vehicle-details/vehicle-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/vehicle-details/vehicle-details.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtZGV0YWlscy92ZWhpY2xlLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/vehicle-details/vehicle-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vehicle-details/vehicle-details.component.ts ***!
  \**************************************************************/
/*! exports provided: VehicleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailsComponent", function() { return VehicleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle */ "./src/app/vehicle.ts");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let VehicleDetailsComponent = class VehicleDetailsComponent {
    constructor(route, vehicleService, router) {
        this.route = route;
        this.vehicleService = vehicleService;
        this.router = router;
    }
    ngOnInit() {
        this.vehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_2__["Vehicle"]();
        this.id = this.route.snapshot.params['id'];
        this.vehicleService.getVehicle(this.id)
            .subscribe(data => {
            console.log(data);
            this.vehicle = data;
        }, error => console.log(error));
    }
    list() {
        this.router.navigate(['vehicles']);
    }
};
VehicleDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
VehicleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-details/vehicle-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-details.component.css */ "./src/app/vehicle-details/vehicle-details.component.css")).default]
    })
], VehicleDetailsComponent);



/***/ }),

/***/ "./src/app/vehicle-list/vehicle-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vehicle-list/vehicle-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtbGlzdC92ZWhpY2xlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/vehicle-list/vehicle-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vehicle-list/vehicle-list.component.ts ***!
  \********************************************************/
/*! exports provided: VehicleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleListComponent", function() { return VehicleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let VehicleListComponent = class VehicleListComponent {
    constructor(vehicleService, router) {
        this.vehicleService = vehicleService;
        this.router = router;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.vehicles = this.vehicleService.getVehicleList();
    }
    deleteVehicle(id) {
        this.vehicleService.deleteVehicle(id)
            .subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.error());
    }
    vehicleDetails(id) {
        this.router.navigate(['details', id]);
    }
    updateVehicle(id) {
        this.router.navigate(['update', id]);
    }
};
VehicleListComponent.ctorParameters = () => [
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
VehicleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-list/vehicle-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-list.component.css */ "./src/app/vehicle-list/vehicle-list.component.css")).default]
    })
], VehicleListComponent);



/***/ }),

/***/ "./src/app/vehicle.service.ts":
/*!************************************!*\
  !*** ./src/app/vehicle.service.ts ***!
  \************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let VehicleService = class VehicleService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/v1/vehicles';
    }
    getVehicle(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    createVehicle(vehicle) {
        return this.http.post(`${this.baseUrl}`, vehicle);
    }
    updateVehicle(id, value) {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }
    deleteVehicle(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
    getVehicleList() {
        return this.http.get(`${this.baseUrl}`);
    }
};
VehicleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VehicleService);



/***/ }),

/***/ "./src/app/vehicle.ts":
/*!****************************!*\
  !*** ./src/app/vehicle.ts ***!
  \****************************/
/*! exports provided: Vehicle, VehicleOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicle", function() { return Vehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleOption", function() { return VehicleOption; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Vehicle {
}
class VehicleOption {
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Github Repo\vehicle-price-list\src\main\resources\frontend\web-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map