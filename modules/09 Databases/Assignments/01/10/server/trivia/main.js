(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_trivia_trivia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/trivia/trivia.component */ "./src/app/components/trivia/trivia.component.ts");




var routes = [
    { path: "", component: _components_trivia_trivia_component__WEBPACK_IMPORTED_MODULE_3__["TriviaComponent"], pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular13';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_trivia_trivia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/trivia/trivia.component */ "./src/app/components/trivia/trivia.component.ts");
/* harmony import */ var _components_question_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/question/question.component */ "./src/app/components/question/question.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_trivia_trivia_component__WEBPACK_IMPORTED_MODULE_5__["TriviaComponent"],
                _components_question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    background-color: #2A363B;\r\n    box-shadow: 0 10px 6px -2px gray;\r\n    color: white;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEzNjNCO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtMnB4IGdyYXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Trivia</h1>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/question/question.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/question/question.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/question/question.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/question/question.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/components/question/question.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/question/question.component.ts ***!
  \***********************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionComponent = /** @class */ (function () {
    function QuestionComponent() {
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/components/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/components/question/question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/components/trivia/trivia.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/trivia/trivia.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    display: flex;\r\n    width: 70%;\r\n    margin: 0 auto;\r\n    flex-direction: column;\r\n    background-color: blanchedalmond;\r\n    padding: 15px;\r\n    border: 2px solid #e5e5e5;\r\n    border-radius: 5px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.wrapper form {\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    width: 100%;\r\n    padding: 15px;\r\n}\r\n\r\nli {\r\n    display: block;\r\n    background-color: #fff;\r\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n    margin: 8px 0;\r\n    border-radius: 4px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.options {\r\n    display: inline-block;\r\n    width: 40%;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.options input[type='radio'] {\r\n    margin-right: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.options label {\r\n    vertical-align: top;\r\n}\r\n\r\ninput[type=submit] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    font-weight: bold;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n.wrong {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n.true {\r\n    background-color: rgb(1, 255, 1);\r\n}\r\n\r\n.answerDiv {\r\n    width: 50%;\r\n    font-weight: bold;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\np {\r\n    border-radius: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cml2aWEvdHJpdmlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cml2aWEvdHJpdmlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVyIGZvcm0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm9wdGlvbnMgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpb25zIGxhYmVsIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud3Jvbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udHJ1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgMjU1LCAxKTtcclxufVxyXG5cclxuLmFuc3dlckRpdiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/trivia/trivia.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/trivia/trivia.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <form #form=\"ngForm\" (submit)=onSubmit(form) *ngIf=\"!submitScore\">\r\n    <h2 *ngIf=\"submit\">{{questionsService.correctAnswers}} of {{questionsService.questions.length}}</h2>\r\n    <ul>\r\n      <li *ngFor=\"let question of questionsService.questions; index as i\">\r\n        <app-question>\r\n          <div>\r\n            <h3>{{question.question}}</h3>\r\n            <div *ngIf=\"submit && questionsService.isCorrectAnswer(optElem ,question.question);else checkWrong\">\r\n              <p class=\"answerDiv true\">\r\n                Correct Answer!\r\n              </p>\r\n            </div>\r\n            <ng-template #checkWrong>\r\n              <div *ngIf=\"submit && !(questionsService.isCorrectAnswer(optElem,question.question))\">\r\n                <p class=\"answerDiv wrong\">\r\n                  The Answer Is {{question.answer}}!\r\n                </p>\r\n              </div>\r\n            </ng-template>\r\n            <div class=\"options\">\r\n              <input type='radio' id=\"q-{{i+1}}-a-A\" ngModel #optElem=\"ngModel\" name='q{{i+1}}'\r\n                value='{{question.option1}}' required />\r\n              <label for=\"q-{{i+1}}-a-A\">{{question.option1}} </label>\r\n            </div>\r\n            <div class=\"options\">\r\n              <input type='radio' id=\"q-{{i+1}}-a-B\" ngModel name='q{{i+1}}' value='{{question.option2}}' />\r\n              <label for=\"q-{{i+1}}-a-B\">{{question.option2}} </label>\r\n            </div>\r\n            <div class=\"options\">\r\n              <input type='radio' id=\"q-{{i+1}}-a-C\" ngModel name='q{{i+1}}' value='{{question.option3}}' />\r\n              <label for=\"q-{{i+1}}-a-C\">{{question.option3}}</label>\r\n            </div>\r\n            <div class=\"options\">\r\n              <input type='radio' id=\"q-{{i+1}}-a-D\" ngModel name='q{{i+1}}' value='{{question.option4}}' />\r\n              <label for=\"q-{{i+1}}-a-D\">{{question.option4}}</label>\r\n            </div>\r\n          </div>\r\n        </app-question>\r\n      </li>\r\n    </ul>\r\n    <input type='submit' name='submit' [disabled]=\"!form.form.valid || submitScore\" value='Submit' />\r\n  </form>\r\n  <form #form2=\"ngForm\" (submit)=sendScore(form2) *ngIf=\"topTen && !submitScore\">\r\n    <h3>enter your name:</h3>\r\n    <input type=\"text\" name=\"name\" ngModel required>\r\n    <input type='submit' name='submit' [disabled]=\"submitScore\" value='Submit' />\r\n  </form>\r\n  <div *ngIf=\"submitScore\">\r\n    <div *ngFor=\"let s of scores\">\r\n        {{s.name}} : {{s.score}}\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/trivia/trivia.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/trivia/trivia.component.ts ***!
  \*******************************************************/
/*! exports provided: TriviaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriviaComponent", function() { return TriviaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/questions.service */ "./src/app/service/questions.service.ts");



var TriviaComponent = /** @class */ (function () {
    function TriviaComponent(questionsService) {
        this.questionsService = questionsService;
        this.submit = false;
        this.submitScore = false;
        this.scores = [];
    }
    TriviaComponent.prototype.ngOnInit = function () {
    };
    TriviaComponent.prototype.onSubmit = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.questionsService.checkAnswers(form);
                        _a = this;
                        return [4 /*yield*/, this.questionsService.isTopTen()];
                    case 1:
                        _a.topTen = _b.sent();
                        this.submit = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    TriviaComponent.prototype.sendScore = function (form) {
        var _this = this;
        this.submitScore = true;
        var obj = { name: form.value.name, score: this.questionsService.correctAnswers };
        fetch("http://localhost:8000/highscore/score", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(function () {
            fetch("http://localhost:8000/highscore").then(function (res) { return res.json(); }).then(function (data) { return _this.scores = data; });
        });
    };
    TriviaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trivia',
            template: __webpack_require__(/*! ./trivia.component.html */ "./src/app/components/trivia/trivia.component.html"),
            styles: [__webpack_require__(/*! ./trivia.component.css */ "./src/app/components/trivia/trivia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"]])
    ], TriviaComponent);
    return TriviaComponent;
}());



/***/ }),

/***/ "./src/app/service/questions.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/questions.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
        this.data = null;
        this.maxScores = 10;
        this.questions = [
            { question: "1 + 1 ?", option1: "02", option2: "03", option3: "04", option4: "05", answer: "02" },
            { question: "2 + 2 ?", option1: "04", option2: "06", option3: "08", option4: "10", answer: "04" },
            { question: "3 + 3 ?", option1: "06", option2: "09", option3: "12", option4: "15", answer: "06" },
            { question: "4 + 4 ?", option1: "08", option2: "12", option3: "16", option4: "20", answer: "08" },
            { question: "5 + 5 ?", option1: "10", option2: "15", option3: "20", option4: "25", answer: "10" },
            { question: "6 + 6 ?", option1: "12", option2: "18", option3: "24", option4: "30", answer: "12" },
            { question: "7 + 7 ?", option1: "14", option2: "21", option3: "28", option4: "35", answer: "14" },
            { question: "8 + 8 ?", option1: "16", option2: "24", option3: "32", option4: "40", answer: "16" },
            { question: "9 + 9 ?", option1: "18", option2: "27", option3: "36", option4: "45", answer: "18" },
            { question: "10 + 10 ?", option1: "20", option2: "30", option3: "40", option4: "50", answer: "20" }
        ];
        this.correctAnswers = 0;
        this.topTen = false;
    }
    QuestionsService.prototype.checkAnswers = function (form) {
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].answer === form.value["q" + (i + 1)])
                this.correctAnswers++;
        }
    };
    QuestionsService.prototype.isCorrectAnswer = function (answerElem, quesName) {
        for (var i = 0; i < this.questions.length; i++) {
            if (quesName === this.questions[i].question) {
                if (answerElem.value === this.questions[i].answer) {
                    return true;
                }
                else {
                    break;
                }
            }
        }
        return false;
    };
    QuestionsService.prototype.isTopTen = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, fetch('http://localhost:8000/highscore').then(function (res) { return res.json(); })];
                    case 1:
                        _a.data = _b.sent();
                        if (this.data.length < this.maxScores) {
                            return [2 /*return*/, this.topTen = true];
                        }
                        else {
                            this.data.some(function (element) {
                                if (_this.correctAnswers > element.score) {
                                    return _this.topTen = true;
                                }
                            });
                        }
                        return [2 /*return*/, this.topTen];
                }
            });
        });
    };
    QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionsService);
    return QuestionsService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gabybu\Downloads\test\group4\modules\09 Databases\Assignments\01\10\client\angular13\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map