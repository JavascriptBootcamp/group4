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

/***/ "./src/app/Video.ts":
/*!**************************!*\
  !*** ./src/app/Video.ts ***!
  \**************************/
/*! exports provided: Video, videos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videos", function() { return videos; });
var Video = /** @class */ (function () {
    function Video(id, title, artistName, videoSrc, imgSrc) {
        this.id = id;
        this.title = title;
        this.artistName = artistName;
        this.videoSrc = videoSrc;
        this.imgSrc = imgSrc;
    }
    return Video;
}());

var videos = [];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#wrapper {\r\n    display: grid;\r\n    grid-template-columns: 75% 25%;\r\n    grid-column-gap: 10px;\r\n    background: rgb(160, 153, 153);\r\n    box-shadow: rgb(77, 77, 77) 10px 5px 5px 5px ;\r\n\r\n}\r\n\r\n#container {\r\n    display: grid;\r\n    grid-template-rows: 10% 90%;\r\n    width: 70%;\r\n    height: 95%;\r\n}\r\n\r\nh1 {\r\n    margin: 0 auto;\r\n    color: royalblue;\r\n    text-shadow: gray 2px 2px 2px;\r\n}\r\n\r\n#menu {\r\n    background: royalblue;\r\n    overflow: auto;\r\n}\r\n\r\n#sort{\r\n    position: fixed;\r\n    background-color: rgba(160, 153, 153, 0.479);\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsNkNBQTZDOztBQUVqRDs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN3cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1JSAyNSU7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTYwLCAxNTMsIDE1Myk7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoNzcsIDc3LCA3NykgMTBweCA1cHggNXB4IDVweCA7XHJcblxyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA5MCU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgY29sb3I6IHJveWFsYmx1ZTtcclxuICAgIHRleHQtc2hhZG93OiBncmF5IDJweCAycHggMnB4O1xyXG59XHJcblxyXG4jbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI3NvcnR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMTUzLCAxNTMsIDAuNDc5KTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" class=\"middle\">\r\n  <div id=\"container\">\r\n    <h1>ITube</h1>\r\n    <div id=\"wrapper\">\r\n      <div id=\"player\">\r\n        <app-player *ngIf=\"playVideo\" [video]=\"playVideo\">\r\n        </app-player>\r\n      </div>\r\n      <div id=\"menu\" *ngIf=\"videoService.videos.length\">\r\n        <div id=\"sort\">\r\n          Sort:\r\n          <select (change)=\"changeSort($event)\">\r\n            <option value=\"title\">Title</option>\r\n            <option value=\"artistName\">Artist</option>\r\n            <option value=\"id\">Id</option>\r\n          </select>\r\n        </div>\r\n        <br>\r\n        <app-menu *ngFor=\"let video of videoService.videos\" [video]=\"video\" (videoClicked)=\"videoToPlayer($event)\">\r\n        </app-menu>\r\n      </div>\r\n    </div>\r\n  </div>"

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
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/video.service */ "./src/app/services/video.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(videoService) {
        this.videoService = videoService;
        this.title = 'ITube';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.videoService.loadVideo();
    };
    AppComponent.prototype.videoToPlayer = function (video) {
        this.playVideo = video;
    };
    AppComponent.prototype.changeSort = function (valueSort) {
        this.videoService.sortVideos(valueSort.target.value);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _src_youtube_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src-youtube.pipe */ "./src/app/src-youtube.pipe.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _src_youtube_pipe__WEBPACK_IMPORTED_MODULE_6__["SrcYoutubePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.video {\r\n    clear: both;\r\n    margin-bottom: 50px;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.video img {\r\n    float: left;\r\n    width: 75px;\r\n    height: 75px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi52aWRlbyB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udmlkZW8gaW1nIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video\" (click)=\"clickVideo()\">\r\n  <img [src]=\"video.imgSrc\">\r\n  <div class=\"video-title\">{{video.title}}</div>\r\n  <div class=\"video-artist\">{{video.artistName}}</div>\r\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Video */ "./src/app/Video.ts");



var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.videoClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // console.log(video.title);
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.clickVideo = function () {
        this.videoClicked.emit(this.video);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _Video__WEBPACK_IMPORTED_MODULE_2__["Video"])
    ], MenuComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuComponent.prototype, "videoClicked", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/player/player.component.css":
/*!*********************************************!*\
  !*** ./src/app/player/player.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#player{\r\n    display: grid;\r\n    grid-template-rows: 80% 20%;\r\n    width: 100%;\r\n    height: 100%;\r\n   margin: 5px 5px;\r\n}\r\n\r\n\r\niframe{\r\n    width:100%;\r\n    height: 100%;\r\n} \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7R0FDYixlQUFlO0FBQ2xCOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNwbGF5ZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MCUgMjAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgIG1hcmdpbjogNXB4IDVweDtcclxufVxyXG5cclxuXHJcbmlmcmFtZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0gXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"player\">\r\n  <iframe [src]=\"video.videoSrc | srcYoutube\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n  <div id=\"player-details\">\r\n    <h2 class=\"video-title\">{{video.title}}</h2>\r\n    <h3 class=\"video-artistName\">{{video.artistName}}</h3>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Video */ "./src/app/Video.ts");



var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _Video__WEBPACK_IMPORTED_MODULE_2__["Video"])
    ], PlayerComponent.prototype, "video", void 0);
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/services/video.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/video.service.ts ***!
  \*******************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Video */ "./src/app/Video.ts");



var VideoService = /** @class */ (function () {
    function VideoService() {
        this.videos = _Video__WEBPACK_IMPORTED_MODULE_2__["videos"];
    }
    VideoService.prototype.loadVideo = function () {
        var _this = this;
        fetch("http://localhost:5000/songs").then(function (response) { return response.json(); })
            .then(function (data) {
            _this.videos = data;
            console.log(data);
        });
    };
    VideoService.prototype.sortVideos = function (valueSort) {
        var _this = this;
        console.log(valueSort);
        fetch("http://localhost:5000/songs?sort=" + valueSort)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.videos = data;
            console.log(data);
        });
    };
    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/app/src-youtube.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/src-youtube.pipe.ts ***!
  \*************************************/
/*! exports provided: SrcYoutubePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrcYoutubePipe", function() { return SrcYoutubePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SrcYoutubePipe = /** @class */ (function () {
    function SrcYoutubePipe(dom) {
        this.dom = dom;
    }
    SrcYoutubePipe.prototype.transform = function (value, args) {
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    SrcYoutubePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'srcYoutube'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SrcYoutubePipe);
    return SrcYoutubePipe;
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

module.exports = __webpack_require__(/*! C:\Users\evyad\node\group4\modules\07 NodeJS\Assignments\11\ITube\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map