(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jpallares/workspace/ngx-dcl/src/main.ts */"zUnb");


/***/ }),

/***/ "7+xq":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this._campo = 0;
        // Outputs (Events)
        this.cOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(DemoComponent.prototype, "campo", {
        get: function () { return this._campo; },
        set: function (campo) {
            this._campo = campo;
            this.cOutput.emit(this._campo);
        },
        enumerable: false,
        configurable: true
    });
    DemoComponent.prototype.click = function () {
        this.campo++;
    };
    DemoComponent.propDecorators = {
        cOutput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    DemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo-component',
            template: '<div (click)="click()">Child {{campo}}</div>'
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
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

/***/ "EjDI":
/*!******************************************************!*\
  !*** ./src/app/dcl-section/dcl-section.component.ts ***!
  \******************************************************/
/*! exports provided: DCLSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DCLSectionComponent", function() { return DCLSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../demo/demo.component */ "7+xq");



var DCLSectionComponent = /** @class */ (function () {
    function DCLSectionComponent() {
        this.component = _demo_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"];
        this.data = 1;
        this.data2 = 0;
        this.dataOut = 1;
        this._value = 0;
        this.func = this.pruebaInit.bind(this);
    }
    DCLSectionComponent.prototype.pruebaClick = function () {
        this.func = this.pruebaInit2.bind(this);
    };
    DCLSectionComponent.prototype.pruebaInit = function (component, data) {
        var _this = this;
        console.log('Private variable value: %d and data: %d', this._value, this.data);
        component.instance._campo = this.data;
        console.log(component.instance.cOutput);
        component.instance.cOutput.subscribe(function (val) {
            console.log('emitted: %d', val);
            _this.dataOut = val;
        });
    };
    DCLSectionComponent.prototype.pruebaInit2 = function (component, data) {
        var _this = this;
        console.log('Private variable value: %d and data: %d', this._value, this.data);
        component.instance._campo = this.data;
        console.log(component.instance.cOutput);
        component.instance.cOutput.subscribe(function (val) {
            console.log('emitted: %d', val);
            _this.data = val;
        });
    };
    DCLSectionComponent.ctorParameters = function () { return []; };
    DCLSectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dcl-section',
            template: "\n  <br>\n  <section>\n    <hr>\n    <button (click)=\"pruebaClick()\">Prueba</button>\n    <div>\n      {{dataOut}}\n      <app-dcl [type]=\"component\" [init]=\"func\" [data]=\"data\"></app-dcl>\n      <app-dcl [data]=\"data2\"></app-dcl>\n    </div>\n    <br>\n  </section>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DCLSectionComponent);
    return DCLSectionComponent;
}());



/***/ }),

/***/ "JH/9":
/*!**********************************************!*\
  !*** ./src/app/modules/dcl/dcl.component.ts ***!
  \**********************************************/
/*! exports provided: DclComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DclComponent", function() { return DclComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


function createComponent(cfr, type, vcr, bindings, projectableNodes) {
    return vcr.createComponent(cfr.resolveComponentFactory(type), vcr.length, getInjector(vcr, bindings), projectableNodes);
}
function getInjector(viewContainer, bindings) {
    var ctxInjector = viewContainer.parentInjector;
    return (Array.isArray(bindings) && bindings.length > 0) ?
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ReflectiveInjector"].fromResolvedProviders(bindings, ctxInjector) :
        ctxInjector;
}
var DclComponent = /** @class */ (function () {
    function DclComponent(_cr, _renderer, _elem, _view) {
        this._cr = _cr;
        this._renderer = _renderer;
        this._elem = _elem;
        this._view = _view;
    }
    DclComponent.prototype.ngOnInit = function () {
        if (this.type) {
            this._cmpRef = createComponent(this._cr, this.type, this._view);
            this._view.element.nativeElement.appendChild(this._cmpRef.location.nativeElement);
            if (this.init) {
                this.init(this._cmpRef, this.identifier, this.data);
            }
        }
        else {
            var text = this._renderer.createText(this.data !== null && this.data !== undefined ? this.data : '');
            this._renderer.appendChild(this._elem.nativeElement, text);
        }
    };
    DclComponent.prototype.ngOnChanges = function (changes) {
        if (this._cmpRef) {
            this._view.element.nativeElement.removeChild(this._cmpRef.location.nativeElement);
            this.ngOnInit();
        }
    };
    DclComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    DclComponent.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        identifier: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    DclComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dcl',
            template: '',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], DclComponent);
    return DclComponent;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VFoB":
/*!*******************************************!*\
  !*** ./src/app/modules/dcl/dcl.module.ts ***!
  \*******************************************/
/*! exports provided: DclModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DclModule", function() { return DclModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dcl_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dcl.component */ "JH/9");




var DclModule = /** @class */ (function () {
    function DclModule() {
    }
    DclModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _dcl_component__WEBPACK_IMPORTED_MODULE_3__["DclComponent"]
            ],
            exports: [
                _dcl_component__WEBPACK_IMPORTED_MODULE_3__["DclComponent"]
            ]
        })
    ], DclModule);
    return DclModule;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div>\n    <h1>ngx-dcl</h1>\n    <p>\n      Native Angular directives for Component injection\n      <a href=\"https://github.com/jdelgadoalfonso/dcl-component\">\n        View on GitHub\n      </a>\n    </p>\n  </div>\n</main>\n\n<div>\n  <app-dcl-section></app-dcl-section>\n</div>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <p class=\"text-muted text-center\">\n      <a href=\"https://github.com/jdelgadoalfonso/dcl-component\">ngx-dcl</a>\n      is maintained by\n      <a href=\"https://github.com/jdelgadoalfonso\">jose.delgado@galgus.net</a>.\n    </p>\n  </div>\n</footer>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_dcl_dcl_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dcl/dcl.module */ "VFoB");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _dcl_section_dcl_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dcl-section/dcl-section.component */ "EjDI");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/demo.component */ "7+xq");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _dcl_section_dcl_section_component__WEBPACK_IMPORTED_MODULE_5__["DCLSectionComponent"], _demo_demo_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _modules_dcl_dcl_module__WEBPACK_IMPORTED_MODULE_3__["DclModule"]
            ],
            entryComponents: [_demo_demo_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map