webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-welcome></app-welcome>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_resume_resume_component__ = __webpack_require__("../../../../../src/app/components/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_projects_service__ = __webpack_require__("../../../../../src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_portfolio_project_project_component__ = __webpack_require__("../../../../../src/app/components/portfolio/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_resume_resume_component__["a" /* ResumeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_portfolio_project_project_component__["a" /* ProjectComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_12__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_projects_service__["a" /* ProjectsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"portfolio\">\n  <div class=\"row justify-content-center title\">\n    Portfolio\n  </div>\n  <div class=\"row \">\n    <div class=\"col-sm-6 col-md-6 col-lg-4\" *ngFor=\"let project of projects\">\n      <div class=\"card\">\n        <img [routerLink]=\"['/portfolio', project.id]\" class=\"card-img-top preview\" src=\"/assets/projects/{{project.subProjects[0].image}}\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{project.name}}</h4>\n          <p class=\"card-text\">{{project.description}}</p>\n          <a [routerLink]=\"['/portfolio', project.id]\" class=\"btn btn-secondary btn-sm btn-block\">View details</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <nav aria-label=\"Page navigation\">\n      <ul class=\"pagination\">\n        <li class=\"page-item\" [class.active]=\"page==i\" *ngFor=\"let item of pages; let i = index\">\n          <button class=\"page-link\" (click)=\"page=i\">{{i+1}}</button>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../bootstrap/dist/css/bootstrap.min.css"), "");

// module
exports.push([module.i, "/*\r\n#2B2B2B\r\n#DE1B1B\r\n#F6F6F6\r\n#E9E581\r\n*/\n.container {\n  font-family: 'Play', sans-serif;\n  color: #cfcfcf; }\n\n.clickable {\n  cursor: pointer; }\n\n.preview {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top;\n  max-height: 250px;\n  height: 250px;\n  width: 100%;\n  cursor: pointer; }\n\n.title {\n  font-weight: 500;\n  font-size: 32px;\n  margin: 10px; }\n\n.card {\n  color: #2a2a2a;\n  margin-bottom: 16px;\n  text-align: center; }\n  .card .card-text {\n    font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("../../../../../src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PortfolioComponent = (function () {
    function PortfolioComponent(_projectsService, _router, _scrollToService) {
        this._projectsService = _projectsService;
        this._router = _router;
        this._scrollToService = _scrollToService;
        this.page = 0;
        this.pageLoaded = -1;
        this.projectItems = null;
        if (this._router.url === '/portfolio') {
            var config = {
                target: 'portfolio',
                duration: 1000
            };
            this._scrollToService.scrollTo(config);
        }
    }
    PortfolioComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(PortfolioComponent.prototype, "pages", {
        get: function () {
            return Array(Math.ceil(this._projectsService.projects.length / 6)).fill(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortfolioComponent.prototype, "projects", {
        get: function () {
            if (this._projectsService.projects && this.page !== this.pageLoaded) {
                this.projectItems = __WEBPACK_IMPORTED_MODULE_4_lodash__["slice"](this._projectsService.projects, 6 * this.page, 6 * this.page + 6);
                this.pageLoaded = this.page;
            }
            return this.projectItems;
        },
        enumerable: true,
        configurable: true
    });
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */]) === "function" && _c || Object])
], PortfolioComponent);

var _a, _b, _c;
//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/portfolio/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"portfolio\" (window:keydown.ArrowLeft)=\"previous()\" (window:keydown.ArrowRight)=\"next()\" (touchstart)=\"swipe($event, 'start')\"\n  (touchend)=\"swipe($event, 'end')\">\n\n\n  <div class=\"back\" routerLink=\"/\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </div>\n\n  <div class=\"row justify-content-center title\">\n    <div class=\"col-xs-12\">\n      {{project.name}}\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center description\">\n    <div class=\"col-xs-12\">\n      {{project.subProjects[viewSubProject].description}}\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-xs-12 img-box\">\n      <div class=\"nav-button left\" *ngIf=\"this.viewSubProject !== 0\">\n        <i class=\"fa fa-arrow-circle-left\" aria-hidden=\"true\" (click)=\"previous()\"></i>\n      </div>\n\n      <div class=\"progress\" *ngIf=\"isLoadingImg\" style=\"height: 5px;\">\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\"\n          aria-valuemax=\"100\" style=\"width: 100%\"></div>\n      </div>\n\n      <img class=\"img-fluid\" src=\"/assets/projects/{{project.subProjects[viewSubProject].image}}\" (load)=\"onLoad()\" />\n\n      <div class=\"nav-button right\" *ngIf=\"this.viewSubProject !== this.project.subProjects.length - 1\">\n        <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\" (click)=\"next()\"></i>\n      </div>\n      <div class=\"overlay\"></div>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center sites\">\n    <div class=\"btn-group\" role=\"group\">\n      <a [href]=\"project.subProjects[viewSubProject].url\" target=\"_blank\" class=\"btn btn-light btn-sm\" *ngIf=\"project.subProjects[viewSubProject].url\">View Project</a>\n\n      <a [href]=\"project.subProjects[viewSubProject].sourceCode\" target=\"_blank\" class=\"btn btn-light btn-sm\" *ngIf=\"project.subProjects[viewSubProject].sourceCode\">View Source Code</a>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col-xs-12\">\n      <span class=\"badge badge-dark\" *ngFor=\"let skill of project.skills\">{{skill}}</span>\n      <span class=\"badge badge-dark\" *ngFor=\"let skill of project.subProjects[viewSubProject].skills\">{{skill}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/project/project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../bootstrap/dist/css/bootstrap.min.css"), "");

// module
exports.push([module.i, "/*\r\n#2B2B2B\r\n#DE1B1B\r\n#F6F6F6\r\n#E9E581\r\n*/\n.container {\n  font-family: 'Play', sans-serif;\n  color: #cfcfcf;\n  height: 100%; }\n\n.clickable {\n  cursor: pointer; }\n\n.back {\n  float: right;\n  font-size: 40px;\n  cursor: pointer; }\n  .back:hover {\n    color: #9c9c9c; }\n\n.badge {\n  margin: 5px;\n  font-size: 14px;\n  padding: 6px; }\n\n.sites {\n  margin: 10px; }\n\n.title {\n  font-weight: 500;\n  font-size: 32px;\n  width: 102%; }\n\n.description {\n  margin: 10px;\n  font-size: 16px; }\n\n.button {\n  font-size: 30px; }\n\n.img-box {\n  position: relative; }\n  .img-box img {\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n  .img-box .overlay {\n    position: absolute;\n    top: 0;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    background: transparent;\n    transition: background 0.5s ease; }\n  .img-box:hover .overlay {\n    display: block;\n    background: rgba(0, 0, 0, 0.2); }\n  .img-box:hover .nav-button {\n    opacity: 0.8; }\n  .img-box .nav-button {\n    position: absolute;\n    opacity: 0;\n    top: calc(50% - 35px);\n    color: #fff;\n    font-size: 40px;\n    z-index: 1;\n    cursor: pointer; }\n    .img-box .nav-button.left {\n      left: 2%; }\n    .img-box .nav-button.right {\n      left: calc(100% - 40px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/portfolio/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_projects_service__ = __webpack_require__("../../../../../src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectComponent = (function () {
    function ProjectComponent(_projectsService, _router, _scrollToService, _route) {
        this._projectsService = _projectsService;
        this._router = _router;
        this._scrollToService = _scrollToService;
        this._route = _route;
        this.index = null;
        this.projectId = null;
        this.viewSubProject = 0;
        this.isLoadingImg = true;
        var config = {
            target: 'portfolio',
            duration: 0
        };
        this._scrollToService.scrollTo(config);
        this.projectId = this._route.snapshot.params['project'];
    }
    ProjectComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ProjectComponent.prototype, "project", {
        get: function () {
            var _this = this;
            if (!this.projectId) {
                return null;
            }
            if (!this.index) {
                this.index = __WEBPACK_IMPORTED_MODULE_4_lodash__["findIndex"](this._projectsService.projects, function (project) {
                    return project.id === _this.projectId;
                });
            }
            if (this.index === -1) {
                return null;
            }
            return this._projectsService.projects[this.index];
        },
        enumerable: true,
        configurable: true
    });
    ProjectComponent.prototype.next = function () {
        if (this.viewSubProject === this.project.subProjects.length - 1) {
            return;
        }
        this.isLoadingImg = true;
        this.viewSubProject++;
    };
    ProjectComponent.prototype.previous = function () {
        if (this.viewSubProject === 0) {
            return;
        }
        this.isLoadingImg = true;
        this.viewSubProject--;
    };
    ProjectComponent.prototype.swipe = function (e, when) {
        var coord = [
            e.changedTouches[0].pageX,
            e.changedTouches[0].pageY
        ];
        var time = new Date().getTime();
        if (when === 'start') {
            this.swipeCoord = coord;
            this.swipeTime = time;
        }
        else if (when === 'end') {
            var direction = [
                coord[0] - this.swipeCoord[0],
                coord[1] - this.swipeCoord[1]
            ];
            var duration = time - this.swipeTime;
            if (duration < 1000 &&
                Math.abs(direction[1]) < Math.abs(direction[0]) &&
                Math.abs(direction[0]) > 30) {
                var swipe = direction[0] < 0 ? 'next' : 'previous';
                if (swipe === 'next') {
                    this.next();
                }
                else {
                    this.previous();
                }
            }
        }
    };
    ProjectComponent.prototype.onLoad = function () {
        this.isLoadingImg = false;
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project',
        template: __webpack_require__("../../../../../src/app/components/portfolio/project/project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/portfolio/project/project.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_projects_service__["a" /* ProjectsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], ProjectComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  resume works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/resume/resume.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-resume',
        template: __webpack_require__("../../../../../src/app/components/resume/resume.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/resume/resume.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ResumeComponent);

//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\" id=\"welcome\">\n  <div class=\"row\">\n    <div class=\"flex-item name\">\n      Uillian\n      <span fxShow.xs=\"false\">Luiz</span>\n      Ludwig\n    </div>\n\n    <div class=\"flex-item dots\">\n      <i *ngFor=\"let number of [0,1,2,3,4,5,6]\" class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>\n    </div>\n\n    <div class=\"flex-item description\">\n      Software Developer\n    </div>\n\n    <div class=\"flex-item dots\">\n      <i *ngFor=\"let number of [0,1,2,3,4,5,6]\" class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>\n    </div>\n\n    <div class=\"flex-item social\">\n      <a href=\"https://www.linkedin.com/in/uillian/\">\n        <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n      </a>\n      <a href=\"https://www.facebook.com/Uillian\">\n        <i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>\n      </a>\n      <a href=\"https://github.com/uillianluiz\">\n        <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n      </a>\n      <a href=\"http://codepen.io/uillianluiz/\">\n        <i class=\"fa fa-codepen\" aria-hidden=\"true\"></i>\n      </a>\n      <a href=\"https://www.freecodecamp.com/uillianluiz\">\n        <i class=\"fa fa-free-code-camp\" aria-hidden=\"true\"></i>\n      </a>\n\n    </div>\n    <div class=\"flex-item navigation\">\n\n      <button mat-raised-button>Resume</button>\n      <button mat-raised-button [ngx-scroll-to]=\"'portfolio'\" ngx-scroll-to-duration=\"1000\">Portfolio</button>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n<div class=\"flex-container footer\">\n  <div class=\"row\">\n    <div class=\"flex-item\">\n      <a href=\"javascript://\" [ngx-scroll-to]=\"'welcome'\" ngx-scroll-to-duration=\"1500\">Go to the top</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n#2B2B2B\r\n#DE1B1B\r\n#F6F6F6\r\n#E9E581\r\n*/\n.flex-container {\n  height: calc(100%);\n  padding: 0;\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .flex-container.footer {\n    margin-top: 20px;\n    height: 16px;\n    font-size: 10px; }\n    .flex-container.footer a,\n    .flex-container.footer a:visited {\n      text-decoration: inherit;\n      color: inherit;\n      cursor: auto; }\n      .flex-container.footer a:hover,\n      .flex-container.footer a:visited:hover {\n        color: #9c9c9c; }\n  .flex-container .name {\n    margin: 20px;\n    font-family: 'Merriweather Sans', sans-serif;\n    font-size: 40px; }\n  .flex-container .dots {\n    font-size: 12px; }\n    .flex-container .dots i {\n      margin: 0px 12px; }\n  .flex-container .description {\n    font-family: 'Merriweather Sans', sans-serif;\n    font-size: 30px; }\n  .flex-container .social a,\n  .flex-container .social a:visited {\n    text-decoration: inherit;\n    color: inherit;\n    cursor: auto; }\n    .flex-container .social a:hover,\n    .flex-container .social a:visited:hover {\n      color: #9c9c9c; }\n  .flex-container .social i {\n    margin: 8px; }\n  .flex-container .navigation {\n    margin-top: 64px; }\n    .flex-container .navigation button {\n      margin: 10px;\n      color: #2a2a2a; }\n\n.header {\n  top: 0;\n  width: 100%;\n  margin: 0px; }\n  .header .icon {\n    padding: 0 14px; }\n  .header .example-spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n\n.row {\n  width: 100%; }\n\n.flex-item {\n  margin: 10px;\n  color: #cfcfcf;\n  font-weight: bold;\n  font-size: 2em;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/components/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/welcome/welcome.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_resume_resume_component__ = __webpack_require__("../../../../../src/app/components/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_portfolio_project_project_component__ = __webpack_require__("../../../../../src/app/components/portfolio/project/project.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_2__components_resume_resume_component__["a" /* ResumeComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_3__components_portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'portfolio/:project', component: __WEBPACK_IMPORTED_MODULE_4__components_portfolio_project_project_component__["a" /* ProjectComponent */] },
    { path: '**', redirectTo: '/' }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsService = (function () {
    function ProjectsService() {
        this.projects = [];
        this.buildProjects();
    }
    ProjectsService.prototype.buildProjects = function () {
        var fccFullStack = {
            id: 'fccFullStack',
            name: 'FreeCodeCamp Full Stack',
            description: 'Full stack applications developed with Angular for the FreeCodeCamp Back-end certification.',
            subProjects: [
                {
                    image: 'fcc_back_voting_app.png',
                    description: 'Voting App, which allows the creation of polls with multiple options.',
                    url: 'https://ul-voting-app.herokuapp.com/',
                    sourceCode: 'https://github.com/uillianluiz/fcc-voting-app',
                    skills: ['MongoDB', 'PassportJS', 'Chart.js']
                },
                {
                    image: 'fcc_back_nightlife.png',
                    description: 'NightLife coordinator app, which allows the search for nearby bars and restaurants, listing how many people are going there.',
                    url: 'https://ul-nightlife.herokuapp.com/',
                    sourceCode: 'https://github.com/uillianluiz/fcc-nightlife-app',
                    skills: ['MongoDB', 'PassportJS', 'Yelp API']
                },
                {
                    image: 'fcc_back_stocks.png',
                    description: 'Stock tracker app, which allows multiple users to track the current stock prices.',
                    url: 'https://ul-stock.herokuapp.com/',
                    sourceCode: 'https://github.com/uillianluiz/fcc-stock-market',
                    skills: ['Socket.io', 'Quandl Stock API', 'Chart.js']
                }
            ],
            skills: [
                'Angular',
                'ExpressJS',
                'TypeScript',
                'Clarity UI',
                'Heroku',
                'GitHub'
            ]
        };
        var fccReact = {
            id: 'fccAPIs',
            name: 'FreeCodeCamp APIs',
            description: 'Applications developed with ReactJS for the FreeCodeCamp Data Visualization certification.',
            subProjects: [
                {
                    image: 'fcc_data_gameoflife.png',
                    description: 'ReactJS Game of Life. It allows to start, stop, change sizes, speed and more.',
                    url: 'http://codepen.io/uillianluiz/full/ZLLvWL/',
                    sourceCode: 'http://codepen.io/uillianluiz/pen/ZLLvWL/',
                    skills: ['ReactJS', 'Javascript', 'Bootstrap', 'SCSS', 'CodePen']
                },
                {
                    image: 'fcc_data_roguelike.png',
                    description: 'ReactJS Roguelike Dungeon Crawler Game. Random generated game, which allows you to play infinitely.',
                    url: 'https://uillianluiz.github.io/roguelike/',
                    sourceCode: 'https://github.com/uillianluiz/roguelike',
                    skills: ['ReactJS', 'TypeScript', 'Webpack', 'GitHub']
                },
                {
                    image: 'fcc_data_recipes.png',
                    description: 'ReactJS application that allows to view, edit and search recipes.',
                    url: 'http://codepen.io/uillianluiz/full/EZNoxo/',
                    sourceCode: 'http://codepen.io/uillianluiz/pen/EZNoxo/',
                    skills: ['ReactJS', 'Javascript', 'Bootstrap', 'SCSS', 'CodePen']
                },
                {
                    image: 'fcc_data_leaderboard.png',
                    description: 'ReactJS application that retrieves a leader board info and display in the screen.',
                    url: 'http://codepen.io/uillianluiz/full/egdRVv/',
                    sourceCode: 'https://codepen.io/uillianluiz/pen/egdRVv',
                    skills: [
                        'ReactJS',
                        'Javascript',
                        'Ajax',
                        'Bootstrap',
                        'SCSS',
                        'CodePen'
                    ]
                },
                {
                    image: 'fcc_data_markdown.png',
                    description: 'ReactJS application for editing and visualizing markdown text.',
                    url: 'http://codepen.io/uillianluiz/full/pREoMw/',
                    sourceCode: 'http://codepen.io/uillianluiz/pen/pREoMw/',
                    skills: ['ReactJS', 'Javascript', 'Bootstrap', 'SCSS', 'CodePen']
                }
            ]
        };
        var fccAPIs = {
            id: 'fccReact',
            name: 'FreeCodeCamp APIs',
            description: 'APIs applications developed with ExpressJS for the FreeCodeCamp Back End certification.',
            subProjects: [
                {
                    image: 'fcc_api_urlshortener.png',
                    description: 'URL shortener microservice, allowing to add, view and view details of shorten urls.',
                    url: 'https://ul-url-shortener.herokuapp.com/',
                    sourceCode: 'https://github.com/uillianluiz/fcc-url-shortener',
                    skills: ['MongoDB']
                },
                {
                    image: 'fcc_api_imgsearch.png',
                    description: 'Image search abstraction layer, which uses a Google API and returns a JSON of images.',
                    url: 'https://ul-img-search.herokuapp.com/',
                    sourceCode: 'https://github.com/uillianluiz/fcc-img-search',
                    skills: ['MongoDB']
                },
                {
                    image: 'fcc_api_filemetadata.png',
                    description: 'API that receives a POST of a file, and returns its size in a JSON response.',
                    url: 'https://ul-file-metadata.herokuapp.com/',
                    sourceCode: 'https://github.com/uillianluiz/fcc-file-metadata'
                },
                {
                    image: 'fcc_api_timestamp.png',
                    description: 'API that receives a UNIX timestamp or a natural date, and respond with both. ',
                    url: 'https://ul-timestamp.herokuapp.com/',
                    sourceCode: 'https://github.com/uillianluiz/fcc-timestamp'
                },
                {
                    image: 'fcc_api_headerrequest.png',
                    description: 'API that returns a JSON with information from the request header. ',
                    url: 'https://ul-whoami.herokuapp.com/',
                    sourceCode: 'https://github.com/uillianluiz/fcc-whoami'
                }
            ],
            skills: ['ExpressJS', 'Javascript', 'GitHub', 'Heroku']
        };
        var fccFrontEnd = {
            id: 'fccFrontEnd',
            name: 'FreeCodeCamp Front-End',
            description: 'Applications developed for the FreeCodeCamp Front End Development Certification.',
            subProjects: [
                {
                    image: 'ffc_front_twitch.png',
                    description: 'Application that allows to view streamers status on Twitch.',
                    url: 'http://codepen.io/uillianluiz/full/rjVGYd/',
                    sourceCode: 'http://codepen.io/uillianluiz/pen/rjVGYd/',
                    skills: ['Ajax', 'Twitch API', 'CodePen']
                },
                {
                    image: 'fcc_front_simon.png',
                    description: 'Web application that simulates the game simon.',
                    url: 'http://codepen.io/uillianluiz/full/NdNbrJ/',
                    sourceCode: 'http://codepen.io/uillianluiz/pen/NdNbrJ/',
                    skills: ['SCSS', 'Animate.css', 'CodePen']
                },
                {
                    image: 'fcc_front_calculator.png',
                    description: 'Application that simulates a real electronic calculator.',
                    url: 'http://codepen.io/uillianluiz/full/rjVQYb/',
                    sourceCode: 'http://codepen.io/uillianluiz/pen/rjVQYb/',
                    skills: ['CodePen']
                },
                {
                    image: 'fcc_front_tictactoe.png',
                    description: 'TicTacToe game that implements different artificial intelligences, including Minimax.',
                    url: 'https://uillianluiz.github.io/fcc-tictactoe/',
                    sourceCode: 'https://github.com/uillianluiz/fcc-tictactoe',
                    skills: ['Artificial Intelligence', 'GitHub']
                },
                {
                    image: 'fcc_front_pomodoro.png',
                    description: 'Pomodoro clock, which allows user to personalize the work and break time.',
                    url: 'http://codepen.io/uillianluiz/full/wgMyaO/',
                    sourceCode: 'http://codepen.io/uillianluiz/pen/wgMyaO/',
                    skills: ['CodePen']
                },
                {
                    image: 'fcc_front_wikipedia.png',
                    description: 'Application that uses the Wikipedia API to search Wikipedia entries.',
                    url: 'http://codepen.io/uillianluiz/full/QdbgKm/',
                    sourceCode: 'http://codepen.io/uillianluiz/pen/QdbgKm/',
                    skills: ['Wikipedia API', 'CodePen']
                },
                {
                    image: 'fcc_front_weather.png',
                    description: 'Application that shows the local weather, using weather API and geolocation.',
                    url: 'http://codepen.io/uillianluiz/full/xgbEdP/',
                    sourceCode: 'http://codepen.io/uillianluiz/pen/xgbEdP/',
                    skills: ['Weather API', 'CodePen']
                },
                {
                    image: 'fcc_front_quotes.png',
                    description: 'Application that generates a random quote each time it is reloaded.',
                    url: 'https://codepen.io/uillianluiz/full/NdKqmE/',
                    sourceCode: 'https://codepen.io/uillianluiz/pen/NdKqmE/',
                    skills: ['CodePen']
                },
                {
                    image: 'fcc_front_tribute.png',
                    description: 'Tribute page made with bootstrap.',
                    url: 'http://codepen.io/uillianluiz/full/YpmJZp/',
                    sourceCode: 'http://codepen.io/uillianluiz/pen/YpmJZp/',
                    skills: ['CodePen']
                }
            ],
            skills: ['Bootstrap', 'JavaScript', 'HTML', 'CSS', 'jQuery']
        };
        var mundobf = {
            id: 'mundobf',
            name: 'Mundo Brasfoot',
            description: 'Fan based web-site for a game called Brasfoot, which had more than 100 thousand views per month.',
            subProjects: [
                {
                    image: 'web_mundobf_2014.png',
                    description: 'Front page of the Wordpress blog, which had more than 100k unique views during several months in the period 2009-2014.',
                    skills: ['Wordpress', 'PHP', 'Javascript', 'CSS', 'SEO', 'MySQL']
                },
                {
                    image: 'vb_hack.png',
                    description: 'VB.NET application to help players to modify their game saves.',
                    skills: ['VB.NET']
                },
                {
                    image: 'vb_points-skins.png',
                    description: 'VB.NET application that modified the skin of the game.',
                    skills: ['VB.NET']
                },
                {
                    image: 'vb_verificador-patches.png',
                    description: 'VB.NET application that searched for duplicated teams in the game.',
                    skills: ['VB.NET']
                },
                {
                    image: 'elifoot_escalacoes.png',
                    description: 'VB.NET application that allows the creation of teams squad for the game Elifoot.',
                    skills: ['VB.NET']
                },
                {
                    image: 'brasfoot_crest_conversor.png',
                    description: 'VB.NET application for converting team crests to the approprieta size.',
                    skills: ['VB.NET']
                },
                {
                    image: 'brasfoot_teams_conversor.png',
                    description: 'VB.NET application for converting teams from older game to the current version.',
                    skills: ['VB.NET']
                },
                {
                    image: 'pack_patches.png',
                    description: 'VB.NET application for downloading and installing multiple team patches.',
                    skills: ['VB.NET']
                }
            ]
        };
        var onibusrs = {
            id: 'onibusrs',
            name: 'ÔnibusRS',
            description: 'Application for intercity bus search made as part of the final undergraduate project at UNIPAMPA.',
            subProjects: [
                {
                    image: 'onibusrs_web.png',
                    description: 'Main page of the web application of ÔnibusRS.',
                    url: 'http://onibusrs.com/',
                    skills: ['PHP', 'Bootstrap', 'Javascript', 'jQuery', 'Ajax']
                },
                {
                    image: 'onibusrs_android.png',
                    description: 'Android application for ÔnibusRS.',
                    skills: ['Android', 'SQLite', 'Java']
                },
                {
                    image: 'onibusrs_ios.png',
                    description: 'iOS application for ÔnibusRS.',
                    skills: ['iOS', 'SQLite', 'Objective C']
                }
            ],
            skills: ['Python', 'Web Scapping', 'Artificial Intelligence']
        };
        var unkapps = {
            id: 'unkapps',
            name: 'UnkApps',
            description: 'Web and mobile applications developed to improve knowledge on trending technologies.',
            subProjects: [
                {
                    image: 'unkapps_tapball.png',
                    description: "Tap Ball game made with Unity, where you can't let the ball touch the floor.",
                    url: 'https://play.google.com/store/apps/details?id=com.unkapps.tapball',
                    skills: ['Android', 'Unity', 'Achievements']
                },
                {
                    image: 'unkapps_supercup.png',
                    description: 'Android game where you play against the computer and have to choose the player best stats.',
                    skills: ['Android', 'SQLite', 'Java', 'Achievements']
                },
                {
                    image: 'unkapps_worldcupquiz.png',
                    description: 'Android game where you have to guess the right name of the player.',
                    skills: ['Android', 'SQLite', 'Java', 'Achievements']
                }
            ],
            skills: []
        };
        var webCsb = {
            id: 'webCsb',
            name: 'Web System CSB',
            description: 'Web application for a clinic: manage patients history, control appointments, upload exams, and more.',
            subProjects: [
                {
                    image: 'web_csb.png',
                    description: 'Login page of the system.'
                },
                {
                    image: 'web_csb2.png',
                    description: 'Internal menu page of the system.'
                },
                {
                    image: 'web_csb3.png',
                    description: 'Internal company registration page of the system.'
                }
            ],
            skills: ['PHP', 'CSS', 'JavaScript', 'MySQL']
        };
        var ufpel = {
            id: 'ufpel',
            name: 'Websites for UFPel',
            description: 'Websites using Wordpress for the graduation program and for a research group at UFPel.',
            subProjects: [
                {
                    image: 'web_ppgg.png',
                    description: 'Front page of the graduation program in Geography at UFPel.'
                },
                {
                    image: 'web_leagef.png',
                    description: 'Front page of the Geography research group at UFPel.'
                }
            ],
            skills: ['Wordpress', 'CMS', 'PHP', 'CSS', 'JavaScript', 'MySQL']
        };
        var nettoJunior = {
            id: 'nettoJunior',
            name: 'Netto & Junior',
            description: 'Website for a local band, providing agenda, media gallery and web music player.',
            subProjects: [
                {
                    image: 'web_netto&junior.png',
                    description: 'Front page of website of the band Netto & Junior.'
                }
            ],
            skills: ['PHP', 'JavaScript', 'MySQL', 'CMS', 'CSS']
        };
        this.projects.push(fccFullStack);
        this.projects.push(fccReact);
        this.projects.push(fccAPIs);
        this.projects.push(fccFrontEnd);
        this.projects.push(mundobf);
        this.projects.push(onibusrs);
        this.projects.push(unkapps);
        this.projects.push(webCsb);
        this.projects.push(ufpel);
        this.projects.push(nettoJunior);
    };
    return ProjectsService;
}());
ProjectsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProjectsService);

//# sourceMappingURL=projects.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map