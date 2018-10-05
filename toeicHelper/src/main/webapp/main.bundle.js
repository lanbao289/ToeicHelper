webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_header_header_component__ = __webpack_require__("./src/app/admin/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_auth_admin_guard__ = __webpack_require__("./src/app/guards/auth-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_room_component__ = __webpack_require__("./src/app/admin/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_editroom_editroom_component__ = __webpack_require__("./src/app/admin/room/editroom/editroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_showroom_showroom_component__ = __webpack_require__("./src/app/admin/room/showroom/showroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_component__ = __webpack_require__("./src/app/admin/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__exam_exam_component__ = __webpack_require__("./src/app/admin/exam/exam.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__exam_show_show_component__ = __webpack_require__("./src/app/admin/exam/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__exam_create_create_component__ = __webpack_require__("./src/app/admin/exam/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__exam_edit_edit_component__ = __webpack_require__("./src/app/admin/exam/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("./src/app/admin/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__room_createroom_createroom_component__ = __webpack_require__("./src/app/admin/room/createroom/createroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_sidebar_sidebar_component__ = __webpack_require__("./src/app/admin/core/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__exam_test_test_component__ = __webpack_require__("./src/app/admin/exam/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__node_modules_ng2_pdf_viewer__ = __webpack_require__("./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__forum_forum_component__ = __webpack_require__("./src/app/admin/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__forum_showforum_showforum_component__ = __webpack_require__("./src/app/admin/forum/showforum/showforum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__forum_editforum_editforum_component__ = __webpack_require__("./src/app/admin/forum/editforum/editforum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__forum_createforum_createforum_component__ = __webpack_require__("./src/app/admin/forum/createforum/createforum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular_froala_wysiwyg__ = __webpack_require__("./node_modules/angular-froala-wysiwyg/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var admins = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_7__admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_admin_guard__["a" /* AuthAdminGuard */]],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */]
            },
            {
                path: 'user',
                component: __WEBPACK_IMPORTED_MODULE_10__user_user_component__["a" /* UserComponent */]
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */]
            },
            {
                path: 'exam',
                component: __WEBPACK_IMPORTED_MODULE_11__exam_exam_component__["a" /* ExamComponent */],
                children: [
                    { path: '', redirectTo: 'show', pathMatch: 'full' },
                    {
                        path: 'show',
                        component: __WEBPACK_IMPORTED_MODULE_12__exam_show_show_component__["a" /* ShowComponent */]
                    },
                    {
                        path: 'create',
                        component: __WEBPACK_IMPORTED_MODULE_13__exam_create_create_component__["a" /* CreateComponent */]
                    },
                    {
                        path: 'edit/:id',
                        component: __WEBPACK_IMPORTED_MODULE_14__exam_edit_edit_component__["a" /* EditComponent */]
                    },
                    {
                        path: 'test/:id',
                        component: __WEBPACK_IMPORTED_MODULE_19__exam_test_test_component__["a" /* TestComponent */]
                    }
                ]
            },
            {
                path: 'room',
                component: __WEBPACK_IMPORTED_MODULE_2__room_room_component__["a" /* RoomComponent */],
                children: [
                    { path: '', redirectTo: 'show', pathMatch: 'full' },
                    {
                        path: 'show',
                        component: __WEBPACK_IMPORTED_MODULE_4__room_showroom_showroom_component__["a" /* ShowroomComponent */]
                    },
                    {
                        path: 'create',
                        component: __WEBPACK_IMPORTED_MODULE_17__room_createroom_createroom_component__["a" /* CreateroomComponent */]
                    },
                    {
                        path: 'edit/:id',
                        component: __WEBPACK_IMPORTED_MODULE_3__room_editroom_editroom_component__["a" /* EditroomComponent */]
                    }
                ]
            },
            {
                path: 'forum',
                component: __WEBPACK_IMPORTED_MODULE_21__forum_forum_component__["a" /* ForumComponent */],
                children: [
                    { path: '', redirectTo: 'show', pathMatch: 'full' },
                    {
                        path: 'show',
                        component: __WEBPACK_IMPORTED_MODULE_22__forum_showforum_showforum_component__["a" /* ShowforumComponent */]
                    },
                    {
                        path: 'create',
                        component: __WEBPACK_IMPORTED_MODULE_24__forum_createforum_createforum_component__["a" /* CreateforumComponent */]
                    },
                    {
                        path: 'edit/:id',
                        component: __WEBPACK_IMPORTED_MODULE_23__forum_editforum_editforum_component__["a" /* EditforumComponent */]
                    }
                ]
            }
        ],
    }
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_router__["c" /* RouterModule */].forChild(admins),
                __WEBPACK_IMPORTED_MODULE_16__node_modules_angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20__node_modules_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_25_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            // tslint:disable-next-line:max-line-length
            declarations: [__WEBPACK_IMPORTED_MODULE_7__admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_10__user_user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_0__core_header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_18__core_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__exam_exam_component__["a" /* ExamComponent */], __WEBPACK_IMPORTED_MODULE_12__exam_show_show_component__["a" /* ShowComponent */], __WEBPACK_IMPORTED_MODULE_13__exam_create_create_component__["a" /* CreateComponent */], __WEBPACK_IMPORTED_MODULE_14__exam_edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_2__room_room_component__["a" /* RoomComponent */], __WEBPACK_IMPORTED_MODULE_4__room_showroom_showroom_component__["a" /* ShowroomComponent */], __WEBPACK_IMPORTED_MODULE_3__room_editroom_editroom_component__["a" /* EditroomComponent */], __WEBPACK_IMPORTED_MODULE_17__room_createroom_createroom_component__["a" /* CreateroomComponent */], __WEBPACK_IMPORTED_MODULE_19__exam_test_test_component__["a" /* TestComponent */], __WEBPACK_IMPORTED_MODULE_21__forum_forum_component__["a" /* ForumComponent */], __WEBPACK_IMPORTED_MODULE_22__forum_showforum_showforum_component__["a" /* ShowforumComponent */],
                __WEBPACK_IMPORTED_MODULE_24__forum_createforum_createforum_component__["a" /* CreateforumComponent */], __WEBPACK_IMPORTED_MODULE_23__forum_editforum_editforum_component__["a" /* EditforumComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/core/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n  <!-- Logo -->\r\n  <a href=\"index2.html\" class=\"logo\">\r\n    <!-- mini logo for sidebar mini 50x50 pixels -->\r\n    <span class=\"logo-mini\">\r\n      <b>A</b>LT</span>\r\n    <!-- logo for regular state and mobile devices -->\r\n    <span class=\"logo-lg\">\r\n      <b>Admin</b>LTE</span>\r\n  </a>\r\n  <!-- Header Navbar: style can be found in header.less -->\r\n  <nav class=\"navbar navbar-static-top\">\r\n\r\n    <div class=\"navbar-custom-menu\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <!-- User Account: style can be found in dropdown.less -->\r\n        <li class=\"dropdown user user-menu\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            <span class=\"hidden-xs\">{{currentUser.username}}</span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\" style=\"margin-top: 10px;\">\r\n            <!-- User image -->\r\n            <li class=\"user-header\">\r\n              <p>\r\n                {{currentUser.username}} - Web Developer\r\n              </p>\r\n            </li>\r\n            <!-- Menu Footer-->\r\n            <li class=\"user-footer\">\r\n              <div class=\"pull-left\">\r\n                <a routerLink=\"/home\" class=\"btn btn-default btn-flat\">Profile</a>\r\n              </div>\r\n              <div class=\"pull-right\">\r\n                <a routerLink=\"/login\" class=\"btn btn-default btn-flat\" (click)=\"logoutClicked()\">Sign out</a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/admin/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.authenticationService.isTokenExpired();
    };
    HeaderComponent.prototype.logoutClicked = function () {
        this.authenticationService.logout();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/admin/core/header/header.component.html"),
            styles: [__webpack_require__("./src/app/admin/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/admin/core/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/core/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\" style=\"position: fixed;\">\r\n  <!-- sidebar: style can be found in sidebar.less -->\r\n  <section class=\"sidebar\">\r\n    <!-- search form -->\r\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\r\n        <span class=\"input-group-btn\">\r\n          <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\r\n            <i class=\"fa fa-search\"></i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </form>\r\n    <!-- /.search form -->\r\n    <!-- sidebar menu: : style can be found in sidebar.less -->\r\n    <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n      <li class=\"header\">MAIN NAVIGATION</li>\r\n      <li class=\"active treeview\">\r\n        <a routerLink=\"/admin\">\r\n          <i class=\"fa fa-dashboard\"></i>\r\n          <span>Dashboard</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a routerLink=\"/admin/user\">\r\n          <i class=\"fa fa-user-circle\"></i>\r\n          <span>User</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a routerLink=\"/admin/exam\">\r\n          <i class=\"fa fa-book\"></i>\r\n          <span>Exam</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a routerLink=\"/admin/room\">\r\n          <i class=\"fa fa-group\"></i>\r\n          <span>Room</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a routerLink=\"/admin/forum\">\r\n          <i class=\"fa fa-group\"></i>\r\n          <span>Forum</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </section>\r\n  <!-- /.sidebar -->\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/admin/core/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/admin/core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/admin/core/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper hold-transition skin-blue sidebar-mini\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <app-sidebar></app-sidebar>\r\n\r\n  <!-- Content Wrapper. Contains page content -->\r\n  <div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n      <h1>\r\n        Dashboard\r\n        <small>Control panel</small>\r\n      </h1>\r\n      <ol class=\"breadcrumb\">\r\n        <li>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-dashboard\"></i> Home</a>\r\n        </li>\r\n        <li class=\"active\">Dashboard</li>\r\n      </ol>\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n      <!-- Small boxes (Stat box) -->\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-xs-6\">\r\n          <!-- small box -->\r\n          <div class=\"small-box bg-green\">\r\n            <div class=\"inner\">\r\n              <h3>{{numberOfExam}}</h3>\r\n\r\n              <p>Exams</p>\r\n            </div>\r\n            <div class=\"icon\">\r\n              <i class=\"ion ion-document-text\"></i>\r\n            </div>\r\n            <a routerLink=\"/admin/exam\" class=\"small-box-footer\">More info\r\n              <i class=\"fa fa-arrow-circle-right\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <!-- ./col -->\r\n        <div class=\"col-lg-3 col-xs-6\">\r\n          <!-- small box -->\r\n          <div class=\"small-box bg-yellow\">\r\n            <div class=\"inner\">\r\n              <h3>{{numberOfUser}}</h3>\r\n\r\n              <p>User Registrations</p>\r\n            </div>\r\n            <div class=\"icon\">\r\n              <i class=\"ion ion-person-add\"></i>\r\n            </div>\r\n            <a routerLink=\"/admin/user\" class=\"small-box-footer\">More info\r\n              <i class=\"fa fa-arrow-circle-right\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <!-- ./col -->\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n    </section>\r\n    <!-- /.content -->\r\n  </div>\r\n  <!-- /.content-wrapper -->\r\n  <footer class=\"main-footer\">\r\n    <div class=\"pull-right hidden-xs\">\r\n      <b>Version</b> 2.4.0\r\n    </div>\r\n    <strong>Copyright &copy; 2014-2016\r\n      <a href=\"https://adminlte.io\">Almsaeed Studio</a>.</strong> All rights reserved.\r\n  </footer>\r\n</div>\r\n<!-- ./wrapper -->\r\n"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService, examService) {
        this.userService = userService;
        this.examService = examService;
        this.numberOfUser = 0;
        this.numberOfExam = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getNumOfUsers();
        this.getNumOfExams();
    };
    DashboardComponent.prototype.getNumOfUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            _this.numberOfUser = users.length;
        });
    };
    DashboardComponent.prototype.getNumOfExams = function () {
        var _this = this;
        this.examService.getExams().subscribe(function (exams) {
            _this.numberOfExam = exams.length;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/admin/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__services_exam_service__["a" /* ExamService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/exam/create/create.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/admin/exam/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper hold-transition skin-blue sidebar-mini\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <app-sidebar></app-sidebar>\r\n\r\n  <div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n      <h1>\r\n        Exam\r\n        <small>Create new exam</small>\r\n      </h1>\r\n      <ol class=\"breadcrumb\">\r\n        <li>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-dashboard\"></i> Home</a>\r\n        </li>\r\n        <li class=\"active\">Exam</li>\r\n      </ol>\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n      <!-- Small boxes (Stat box) -->\r\n      <div class=\"row\" *ngIf=\"isExamID\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Exam</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form role=\"form\" (ngSubmit)=\"addExam()\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.examID }\">\r\n                  <label>Exam ID</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"examID\" placeholder=\"Enter exam ID\" [(ngModel)]=\"exam.examID\" #examID=\"ngModel\">\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.examID\">\r\n                    {{message.examID}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input id=\"checkbox1\" type=\"checkbox\" name=\"isTest\" #isTest (change)=\"onisTestChanged(isTest.checked)\">\r\n                  <span>use for Test</span>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n\r\n      <div class=\"row\">\r\n        <!-- PART 1-->\r\n        <div class=\"col-md-6\" *ngIf=\"isPart1\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 1</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form (submit)=\"upload(1)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart1 }\">\r\n                  <label>PDF FILE</label>\r\n                  <input id=\"pdfpart1\" type=\"file\" (change)=\"selectFilePart1($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart1\">\r\n                    {{message.pdfPart1}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.mp3Part1 }\">\r\n                  <label>MP3 FILE</label>\r\n                  <input type=\"file\" (change)=\"selectMp3FilePart1($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.mp3Part1\">\r\n                    {{message.mp3Part1}}\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart1 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(1)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart1\" rows=\"3\" maxlength=\"10\" placeholder=\"Please insert answer for question from 1 to 10.\"\r\n                    [(ngModel)]=\"answerPart1\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart1\">\r\n                    {{message.answerPart1}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n\r\n        <!-- PART 2-->\r\n        <div class=\"col-md-6\" *ngIf=\"isPart2\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 2</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form (submit)=\"upload(2)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart2 }\">\r\n                  <label>PDF FILE</label>\r\n                  <input type=\"file\" (change)=\"selectFilePart2($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart2\">\r\n                    {{message.pdfPart2}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.mp3Part2 }\">\r\n                  <label>MP3 FILE</label>\r\n                  <input type=\"file\" (change)=\"selectMp3FilePart2($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.mp3Part2\">\r\n                    {{message.mp3Part2}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart2 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(2)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart2\" rows=\"3\" maxlength=\"30\" placeholder=\"Please insert answer for question from 11 to 40.\"\r\n                    [(ngModel)]=\"answerPart2\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart2\">\r\n                    {{message.answerPart2}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n\r\n      <div class=\"row\">\r\n        <!-- PART 3-->\r\n        <div class=\"col-md-6\" *ngIf=\"isPart3\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 3</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form role=\"form\" (submit)=\"upload(3)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart3 }\">\r\n                  <label>PDF FILE</label>\r\n                  <input type=\"file\" (change)=\"selectFilePart3($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart3\">\r\n                    {{message.pdfPart3}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.mp3Part3 }\">\r\n                  <label>MP3 FILE</label>\r\n                  <input type=\"file\" (change)=\"selectMp3FilePart3($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.mp3Part3\">\r\n                    {{message.mp3Part3}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart3 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(3)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart3\" [(ngModel)]=\"answerPart3\" maxlength=\"30\" rows=\"3\" placeholder=\"Please insert answer for question from 41 to 70.\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart3\">\r\n                    {{message.answerPart3}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n\r\n        <!-- PART 4-->\r\n        <div class=\"col-md-6\" *ngIf=\"isPart4\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 4</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form role=\"form\" (submit)=\"upload(4)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart4 }\">\r\n                  <label>PDF FILE</label>\r\n                  <input type=\"file\" (change)=\"selectFilePart4($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart4\">\r\n                    {{message.pdfPart4}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.mp3Part4 }\">\r\n                  <label>MP3 FILE</label>\r\n                  <input type=\"file\" (change)=\"selectMp3FilePart4($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.mp3Part4\">\r\n                    {{message.mp3Part4}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart4 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(4)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart4\" [(ngModel)]=\"answerPart4\" maxlength=\"30\" rows=\"3\" placeholder=\"Please insert answer for question from 71 to 100.\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart4\">\r\n                    {{message.answerPart4}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n      <div class=\"row\">\r\n        <!-- PART 5-->\r\n        <div class=\"col-md-6\" *ngIf=\"isPart5\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 5</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form role=\"form\" (submit)=\"upload(5)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart5 }\">\r\n                  <label>PDF FILE</label>\r\n                  <input type=\"file\" (change)=\"selectFilePart5($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart5\">\r\n                    {{message.pdfPart5}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart5 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(5)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart5\" [(ngModel)]=\"answerPart5\" maxlength=\"40\" rows=\"3\" placeholder=\"Please insert answer for question from 101 to 140.\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart5\">\r\n                    {{message.answerPart5}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n\r\n        <!-- PART 6-->\r\n        <div class=\"col-md-6\" *ngIf=\"isPart6\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 6</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form role=\"form\" (submit)=\"upload(6)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart6 }\">\r\n                  <label>PDF FILE</label>\r\n                  <input type=\"file\" (change)=\"selectFilePart6($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart6\">\r\n                    {{message.pdfPart6}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart6 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(6)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart6\" [(ngModel)]=\"answerPart6\" maxlength=\"12\" rows=\"3\" placeholder=\"Please insert answer for question from 141 to 152.\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart6\">\r\n                    {{message.answerPart6}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n      <div class=\"row\">\r\n        <!-- PART 7-->\r\n        <div class=\"col-md-6\" *ngIf=\"isPart7\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 7</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form role=\"form\" (submit)=\"upload(7)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart7 }\">\r\n                  <label>PDF FILE</label>\r\n                  <input type=\"file\" (change)=\"selectFilePart7($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart7\">\r\n                    {{message.pdfPart7}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart7 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(7)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart7\" [(ngModel)]=\"answerPart7\" maxlength=\"48\" rows=\"3\" placeholder=\"Please insert answer for question from 153 to 200.\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart7\">\r\n                    {{message.answerPart7}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n    </section>\r\n    <!-- /.content -->\r\n  </div>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Answer Sheet</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>No</th>\r\n                <th>Answer</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let ans of answerParts; let i = index\" [attr.data-index]=\"i\">\r\n                <td>{{ans.questionOrder}}</td>\r\n                <td>\r\n                  <input type=\"text\" name=\"{{ans.questionOrder}}\" [(ngModel)]=\"ans.answer\" (change)=\"answerChange(ans.partID)\" maxlength=\"1\">\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/exam/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_answer_part__ = __webpack_require__("./src/app/model/answer-part.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_add_exam_service__ = __webpack_require__("./src/app/services/add-exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uploadfile_service__ = __webpack_require__("./src/app/services/uploadfile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateComponent = /** @class */ (function () {
    function CreateComponent(uploadfileService, addExamService, examService, router) {
        this.uploadfileService = uploadfileService;
        this.addExamService = addExamService;
        this.examService = examService;
        this.router = router;
        this.exam = {};
        this.valid = {};
        this.message = {};
        this.isExamID = true;
        this.isPart1 = false;
        this.isPart2 = false;
        this.isPart3 = false;
        this.isPart4 = false;
        this.isPart5 = false;
        this.isPart6 = false;
        this.isPart7 = false;
        this.answerParts = [];
    }
    CreateComponent.prototype.ngOnInit = function () {
        $('#pdfpart1').attr({ 'value': '/src/assets/images/bg_clock_toeic.png' });
        this.valid.examID = true;
        this.exam.isTest = 'false';
        // part 1
        this.valid.pdfPart1 = true;
        this.valid.mp3Part1 = true;
        this.valid.answerPart1 = true;
        // part 2
        this.valid.pdfPart2 = true;
        this.valid.mp3Part2 = true;
        this.valid.answerPart2 = true;
        // part 3
        this.valid.pdfPart3 = true;
        this.valid.mp3Part3 = true;
        this.valid.answerPart3 = true;
        // part 4
        this.valid.pdfPart4 = true;
        this.valid.mp3Part4 = true;
        this.valid.answerPart4 = true;
        // part 5
        this.valid.pdfPart5 = true;
        this.valid.answerPart5 = true;
        // part 6
        this.valid.pdfPart6 = true;
        this.valid.answerPart6 = true;
        // part 7
        this.valid.pdfPart7 = true;
        this.valid.answerPart7 = true;
    };
    // select change file input
    CreateComponent.prototype.selectFilePart1 = function (event) {
        this.selectedFilesPart1 = event.target.files;
    };
    CreateComponent.prototype.selectMp3FilePart1 = function (event) {
        this.selectedMp3FilesPart1 = event.target.files;
    };
    CreateComponent.prototype.selectFilePart2 = function (event) {
        this.selectedFilesPart2 = event.target.files;
    };
    CreateComponent.prototype.selectMp3FilePart2 = function (event) {
        this.selectedMp3FilesPart2 = event.target.files;
    };
    CreateComponent.prototype.selectFilePart3 = function (event) {
        this.selectedFilesPart3 = event.target.files;
    };
    CreateComponent.prototype.selectMp3FilePart3 = function (event) {
        this.selectedMp3FilesPart3 = event.target.files;
    };
    CreateComponent.prototype.selectFilePart4 = function (event) {
        this.selectedFilesPart4 = event.target.files;
    };
    CreateComponent.prototype.selectMp3FilePart4 = function (event) {
        this.selectedMp3FilesPart4 = event.target.files;
    };
    CreateComponent.prototype.selectFilePart5 = function (event) {
        this.selectedFilesPart5 = event.target.files;
    };
    CreateComponent.prototype.selectFilePart6 = function (event) {
        this.selectedFilesPart6 = event.target.files;
    };
    CreateComponent.prototype.selectFilePart7 = function (event) {
        this.selectedFilesPart7 = event.target.files;
    };
    // end select.
    CreateComponent.prototype.onisTestChanged = function (value) {
        if (value) {
            this.exam.isTest = 'true';
        }
        else {
            this.exam.isTest = 'false';
        }
    };
    CreateComponent.prototype.addExam = function () {
        var _this = this;
        this.valid.examID = true;
        this.message.examID = '';
        var examIDRegex = new RegExp('^[a-zA-Z0-9]{5,15}$');
        if (this.exam.examID === undefined || this.exam.examID.trim().length === 0) {
            this.message.examID = 'ExamID can not be blank !!!';
            this.valid.examID = false;
        }
        else if (this.exam.examID.trim().length < 5) {
            this.message.examID = 'ExamID must be more than 4 characters !!!';
            this.valid.examID = false;
        }
        else if (this.exam.examID.trim().length > 15) {
            this.message.examID = 'ExamID must be less than 15 characters !!!';
            this.valid.examID = false;
        }
        else if (!examIDRegex.test(this.exam.examID.trim())) {
            this.message.examID = 'ExamID only contains letters and numbers !!!';
            this.valid.examID = false;
        }
        if (!this.valid.examID) {
            return false;
        }
        Promise.all([
            this.examService.getExamByExamID(this.exam.examID)
        ]).then(function (result) {
            result[0].forEach(function (element) {
                // check ID already exists
                if (element.examID !== null) {
                    _this.message.examID = 'ExamID already exists !!!';
                    _this.valid.examID = false;
                }
                else {
                    // add exam on database
                    _this.addExamService.addExam(_this.exam).subscribe(function (exam) {
                        _this.exam1 = exam;
                    });
                    _this.isExamID = false;
                    _this.isPart1 = true;
                    _this.isPart2 = true;
                    _this.isPart3 = true;
                    _this.isPart4 = true;
                    _this.isPart5 = true;
                    _this.isPart6 = true;
                    _this.isPart7 = true;
                }
            });
        });
    };
    CreateComponent.prototype.showAnswer = function (partNo) {
        this.answerParts = [];
        switch (partNo) {
            case 1:
                if (this.answerPart1 === undefined) {
                    this.answerPart1 = '';
                }
                for (var i = 0; i < 10; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '1';
                    answer.answer = this.answerPart1.charAt(i) === ' ' ? '' : this.answerPart1.charAt(i).toUpperCase();
                    answer.questionOrder = i + 1;
                    this.answerParts.push(answer);
                }
                break;
            case 2:
                if (this.answerPart2 === undefined) {
                    this.answerPart2 = '';
                }
                for (var i = 0; i < 30; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '2';
                    answer.answer = this.answerPart2.charAt(i) === ' ' ? '' : this.answerPart2.charAt(i).toUpperCase();
                    answer.questionOrder = i + 11;
                    this.answerParts.push(answer);
                }
                break;
            case 3:
                if (this.answerPart3 === undefined) {
                    this.answerPart3 = '';
                }
                for (var i = 0; i < 30; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '3';
                    answer.answer = this.answerPart3.charAt(i) === ' ' ? '' : this.answerPart3.charAt(i).toUpperCase();
                    answer.questionOrder = i + 41;
                    this.answerParts.push(answer);
                }
                break;
            case 4:
                if (this.answerPart4 === undefined) {
                    this.answerPart4 = '';
                }
                for (var i = 0; i < 30; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '4';
                    answer.answer = this.answerPart4.charAt(i) === ' ' ? '' : this.answerPart4.charAt(i).toUpperCase();
                    answer.questionOrder = i + 71;
                    this.answerParts.push(answer);
                }
                break;
            case 5:
                if (this.answerPart5 === undefined) {
                    this.answerPart5 = '';
                }
                for (var i = 0; i < 40; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '5';
                    answer.answer = this.answerPart5.charAt(i) === ' ' ? '' : this.answerPart5.charAt(i).toUpperCase();
                    answer.questionOrder = i + 101;
                    this.answerParts.push(answer);
                }
                break;
            case 6:
                if (this.answerPart6 === undefined) {
                    this.answerPart6 = '';
                }
                for (var i = 0; i < 12; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '6';
                    answer.answer = this.answerPart6.charAt(i) === ' ' ? '' : this.answerPart6.charAt(i).toUpperCase();
                    answer.questionOrder = i + 141;
                    this.answerParts.push(answer);
                }
                break;
            case 7:
                if (this.answerPart7 === undefined) {
                    this.answerPart7 = '';
                }
                for (var i = 0; i < 48; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '7';
                    answer.answer = this.answerPart7.charAt(i) === ' ' ? '' : this.answerPart7.charAt(i).toUpperCase();
                    answer.questionOrder = i + 153;
                    this.answerParts.push(answer);
                }
                break;
            default:
                break;
        }
    };
    CreateComponent.prototype.answerChange = function (partNo) {
        var _this = this;
        switch (partNo) {
            case '1':
                this.answerPart1 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart1 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            case '2':
                this.answerPart2 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart2 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            case '3':
                this.answerPart3 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart3 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            case '4':
                this.answerPart4 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart4 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            case '5':
                this.answerPart5 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart5 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            case '6':
                this.answerPart6 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart6 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            case '7':
                this.answerPart7 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart7 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            default:
                break;
        }
    };
    CreateComponent.prototype.upload = function (part) {
        var _this = this;
        switch (part) {
            case 1:
                // check file type
                this.valid.pdfPart1 = true;
                this.message.pdfPart1 = '';
                if (this.selectedFilesPart1 === undefined || this.selectedFilesPart1.length === 0) {
                    this.message.pdfPart1 = 'Please choose pdf file for part 1 !!!';
                    this.valid.pdfPart1 = false;
                }
                else if (this.selectedFilesPart1[0].type !== 'application/pdf') {
                    this.message.pdfPart1 = 'Only accept pdf file !!!';
                    this.valid.pdfPart1 = false;
                }
                this.valid.mp3Part1 = true;
                this.message.mp3Part1 = '';
                if (this.selectedMp3FilesPart1 === undefined || this.selectedMp3FilesPart1.length === 0) {
                    this.message.mp3Part1 = 'Please choose mp3 file for part 1 !!!';
                    this.valid.mp3Part1 = false;
                }
                else if (this.selectedMp3FilesPart1[0].type !== 'audio/mp3') {
                    this.message.mp3Part1 = 'Only accept mp3 file !!!';
                    this.valid.mp3Part1 = false;
                }
                // check answer
                this.valid.answerPart1 = true;
                this.message.answerPart1 = '';
                var answerPart1Regex = new RegExp('^[abcdABCD]{10}$');
                if (this.answerPart1 === undefined || this.answerPart1.trim().length === 0) {
                    this.message.answerPart1 = 'Please insert 10 answer for this part !!!';
                    this.valid.answerPart1 = false;
                }
                else if (!answerPart1Regex.test(this.answerPart1.trim())) {
                    this.message.answerPart1 = 'Only accept a,b,c,d answer!!!';
                    this.valid.answerPart1 = false;
                }
                if (!this.valid.pdfPart1 || !this.valid.mp3Part1 || !this.valid.answerPart1) {
                    break;
                }
                // upload file and create part 1
                Promise.all([
                    // upload pdf and mp3 file
                    this.uploadfileService.pushFileToStorage(this.selectedFilesPart1[0]),
                    this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart1[0])
                ]).then(function (result) {
                    // create part object and set value
                    var part1 = {};
                    part1.examID = _this.exam1.examID;
                    part1.partNo = 1;
                    part1.pdfsrc = result[0];
                    part1.mp3src = result[1];
                    // add part in database
                    _this.addExamService.addListeningPart(part1).subscribe(function (listeningPart) {
                        // create answert sheet for part
                        var answers = [];
                        for (var i = 0; i < 10; i++) {
                            var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                            answer.partID = listeningPart.partID;
                            answer.questionOrder = i + 1;
                            answer.answer = _this.answerPart1.charAt(i).toUpperCase();
                            answers.push(answer);
                        }
                        _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                            alert('Part 1 successfully created !!!');
                            _this.selectedFilesPart1 = undefined;
                            _this.selectedMp3FilesPart1 = undefined;
                            _this.isPart1 = false;
                            _this.checkFullExam();
                        });
                    });
                });
                break;
            case 2:
                // check file type
                this.valid.pdfPart2 = true;
                this.message.pdfPart2 = '';
                if (this.selectedFilesPart2 === undefined || this.selectedFilesPart2.length === 0) {
                    this.message.pdfPart2 = 'Please choose pdf file for part 2 !!!';
                    this.valid.pdfPart2 = false;
                }
                else if (this.selectedFilesPart2[0].type !== 'application/pdf') {
                    this.message.pdfPart2 = 'Only accept pdf file !!!';
                    this.valid.pdfPart2 = false;
                }
                this.valid.mp3Part2 = true;
                this.message.mp3Part2 = '';
                if (this.selectedMp3FilesPart2 === undefined || this.selectedMp3FilesPart2.length === 0) {
                    this.message.mp3Part2 = 'Please choose mp3 file for part 2 !!!';
                    this.valid.mp3Part2 = false;
                }
                else if (this.selectedMp3FilesPart2[0].type !== 'audio/mp3') {
                    this.message.mp3Part2 = 'Only accept mp3 file !!!';
                    this.valid.mp3Part2 = false;
                }
                // check answer
                this.valid.answerPart2 = true;
                this.message.answerPart2 = '';
                var answerPart2Regex = new RegExp('^[abcdABCD]{30}$');
                if (this.answerPart2 === undefined || this.answerPart2.trim().length === 0) {
                    this.message.answerPart2 = 'Please insert 30 answer for this part !!!';
                    this.valid.answerPart2 = false;
                }
                else if (!answerPart2Regex.test(this.answerPart2.trim())) {
                    this.message.answerPart2 = 'Only accept a,b,c,d answer!!!';
                    this.valid.answerPart2 = false;
                }
                if (!this.valid.pdfPart2 || !this.valid.mp3Part2 || !this.valid.answerPart2) {
                    break;
                }
                // upload file and create part 2
                Promise.all([
                    this.uploadfileService.pushFileToStorage(this.selectedFilesPart2[0]),
                    this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart2[0])
                ]).then(function (result) {
                    var part1 = {};
                    part1.examID = _this.exam1.examID;
                    part1.partNo = 2;
                    part1.pdfsrc = result[0];
                    part1.mp3src = result[1];
                    _this.addExamService.addListeningPart(part1).subscribe(function (listeningPart) {
                        var answers = [];
                        for (var i = 0; i < 30; i++) {
                            var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                            answer.partID = listeningPart.partID;
                            answer.questionOrder = i + 11;
                            answer.answer = _this.answerPart2.charAt(i).toUpperCase();
                            answers.push(answer);
                        }
                        _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                            alert('Part 2 successfully created !!!');
                            _this.selectedFilesPart2 = undefined;
                            _this.selectedMp3FilesPart2 = undefined;
                            _this.isPart2 = false;
                            _this.checkFullExam();
                        });
                    });
                });
                break;
            case 3:
                // check file type
                this.valid.pdfPart3 = true;
                this.message.pdfPart3 = '';
                if (this.selectedFilesPart3 === undefined || this.selectedFilesPart3.length === 0) {
                    this.message.pdfPart3 = 'Please choose pdf file for part 3 !!!';
                    this.valid.pdfPart3 = false;
                }
                else if (this.selectedFilesPart3[0].type !== 'application/pdf') {
                    this.message.pdfPart3 = 'Only accept pdf file !!!';
                    this.valid.pdfPart3 = false;
                }
                this.valid.mp3Part3 = true;
                this.message.mp3Part3 = '';
                if (this.selectedMp3FilesPart3 === undefined || this.selectedMp3FilesPart3.length === 0) {
                    this.message.mp3Part3 = 'Please choose mp3 file for part 3 !!!';
                    this.valid.mp3Part3 = false;
                }
                else if (this.selectedMp3FilesPart3[0].type !== 'audio/mp3') {
                    this.message.mp3Part3 = 'Only accept mp3 file !!!';
                    this.valid.mp3Part3 = false;
                }
                // check answer
                this.valid.answerPart3 = true;
                this.message.answerPart3 = '';
                var answerPart3Regex = new RegExp('^[abcdABCD]{30}$');
                if (this.answerPart3 === undefined || this.answerPart3.trim().length === 0) {
                    this.message.answerPart3 = 'Please insert 30 answer for this part !!!';
                    this.valid.answerPart3 = false;
                }
                else if (!answerPart3Regex.test(this.answerPart3.trim())) {
                    this.message.answerPart3 = 'Only accept a,b,c,d answer!!!';
                    this.valid.answerPart3 = false;
                }
                if (!this.valid.pdfPart3 || !this.valid.mp3Part3 || !this.valid.answerPart3) {
                    break;
                }
                // upload file and create part 3
                Promise.all([
                    this.uploadfileService.pushFileToStorage(this.selectedFilesPart3[0]),
                    this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart3[0])
                ]).then(function (result) {
                    var part1 = {};
                    part1.examID = _this.exam1.examID;
                    part1.partNo = 3;
                    part1.pdfsrc = result[0];
                    part1.mp3src = result[1];
                    _this.addExamService.addListeningPart(part1).subscribe(function (listeningPart) {
                        var answers = [];
                        for (var i = 0; i < 30; i++) {
                            var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                            answer.partID = listeningPart.partID;
                            answer.questionOrder = i + 41;
                            answer.answer = _this.answerPart3.charAt(i).toUpperCase();
                            answers.push(answer);
                        }
                        _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                            alert('Part 3 successfully created !!!');
                            _this.selectedFilesPart3 = undefined;
                            _this.selectedMp3FilesPart3 = undefined;
                            _this.isPart3 = false;
                            _this.checkFullExam();
                        });
                    });
                });
                break;
            case 4:
                // check file type
                this.valid.pdfPart4 = true;
                this.message.pdfPart4 = '';
                if (this.selectedFilesPart4 === undefined || this.selectedFilesPart4.length === 0) {
                    this.message.pdfPart4 = 'Please choose pdf file for part 4 !!!';
                    this.valid.pdfPart4 = false;
                }
                else if (this.selectedFilesPart4[0].type !== 'application/pdf') {
                    this.message.pdfPart4 = 'Only accept pdf file !!!';
                    this.valid.pdfPart4 = false;
                }
                this.valid.mp3Part4 = true;
                this.message.mp3Part4 = '';
                if (this.selectedMp3FilesPart4 === undefined || this.selectedMp3FilesPart4.length === 0) {
                    this.message.mp3Part4 = 'Please choose mp3 file for part 4 !!!';
                    this.valid.mp3Part4 = false;
                }
                else if (this.selectedMp3FilesPart4[0].type !== 'audio/mp3') {
                    this.message.mp3Part4 = 'Only accept mp3 file !!!';
                    this.valid.mp3Part4 = false;
                }
                // check answer
                this.valid.answerPart4 = true;
                this.message.answerPart4 = '';
                var answerPart4Regex = new RegExp('^[abcdABCD]{30}$');
                if (this.answerPart4 === undefined || this.answerPart4.trim().length === 0) {
                    this.message.answerPart4 = 'Please insert 30 answer for this part !!!';
                    this.valid.answerPart4 = false;
                }
                else if (!answerPart4Regex.test(this.answerPart4.trim())) {
                    this.message.answerPart4 = 'Only accept a,b,c,d answer!!!';
                    this.valid.answerPart4 = false;
                }
                if (!this.valid.pdfPart4 || !this.valid.mp3Part4 || !this.valid.answerPart4) {
                    break;
                }
                // upload file and create part 4
                Promise.all([
                    this.uploadfileService.pushFileToStorage(this.selectedFilesPart4[0]),
                    this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart4[0])
                ]).then(function (result) {
                    var part1 = {};
                    part1.examID = _this.exam1.examID;
                    part1.partNo = 4;
                    part1.pdfsrc = result[0];
                    part1.mp3src = result[1];
                    _this.addExamService.addListeningPart(part1).subscribe(function (listeningPart) {
                        var answers = [];
                        for (var i = 0; i < 30; i++) {
                            var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                            answer.partID = listeningPart.partID;
                            answer.questionOrder = i + 71;
                            answer.answer = _this.answerPart4.charAt(i).toUpperCase();
                            answers.push(answer);
                        }
                        _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                            alert('Part 4 successfully created !!!');
                            _this.selectedFilesPart4 = undefined;
                            _this.selectedMp3FilesPart4 = undefined;
                            _this.isPart4 = false;
                            _this.checkFullExam();
                        });
                    });
                });
                break;
            case 5:
                // check file type
                this.valid.pdfPart5 = true;
                this.message.pdfPart5 = '';
                if (this.selectedFilesPart5 === undefined || this.selectedFilesPart5.length === 0) {
                    this.message.pdfPart5 = 'Please choose pdf file for part 5 !!!';
                    this.valid.pdfPart5 = false;
                }
                else if (this.selectedFilesPart5[0].type !== 'application/pdf') {
                    this.message.pdfPart5 = 'Only accept pdf file !!!';
                    this.valid.pdfPart5 = false;
                }
                // check answer
                this.valid.answerPart5 = true;
                this.message.answerPart5 = '';
                var answerPart5Regex = new RegExp('^[abcdABCD]{40}$');
                if (this.answerPart5 === undefined || this.answerPart5.trim().length === 0) {
                    this.message.answerPart5 = 'Please insert 40 answer for this part !!!';
                    this.valid.answerPart5 = false;
                }
                else if (!answerPart5Regex.test(this.answerPart5.trim())) {
                    this.message.answerPart5 = 'Only accept a,b,c,d answer!!!';
                    this.valid.answerPart5 = false;
                }
                if (!this.valid.pdfPart5 || !this.valid.answerPart5) {
                    break;
                }
                // upload file and create part 5
                Promise.all([
                    this.uploadfileService.pushFileToStorage(this.selectedFilesPart5[0])
                ]).then(function (result) {
                    var part1 = {};
                    part1.examID = _this.exam1.examID;
                    part1.partNo = 5;
                    part1.pdfsrc = result[0];
                    _this.addExamService.addReadingPart(part1).subscribe(function (readingPart) {
                        var answers = [];
                        for (var i = 0; i < 40; i++) {
                            var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                            answer.partID = readingPart.partID;
                            answer.questionOrder = i + 101;
                            answer.answer = _this.answerPart5.charAt(i).toUpperCase();
                            answers.push(answer);
                        }
                        _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                            alert('Part 5 successfully created !!!');
                            _this.selectedFilesPart5 = undefined;
                            _this.isPart5 = false;
                            _this.checkFullExam();
                        });
                    });
                });
                break;
            case 6:
                // check file type
                this.valid.pdfPart6 = true;
                this.message.pdfPart6 = '';
                if (this.selectedFilesPart6 === undefined || this.selectedFilesPart6.length === 0) {
                    this.message.pdfPart6 = 'Please choose pdf file for part 6 !!!';
                    this.valid.pdfPart6 = false;
                }
                else if (this.selectedFilesPart6[0].type !== 'application/pdf') {
                    this.message.pdfPart6 = 'Only accept pdf file !!!';
                    this.valid.pdfPart6 = false;
                }
                // check answer
                this.valid.answerPart6 = true;
                this.message.answerPart6 = '';
                var answerPart6Regex = new RegExp('^[abcdABCD]{12}$');
                if (this.answerPart6 === undefined || this.answerPart6.trim().length === 0) {
                    this.message.answerPart6 = 'Please insert 12 answer for this part !!!';
                    this.valid.answerPart6 = false;
                }
                else if (!answerPart6Regex.test(this.answerPart6.trim())) {
                    this.message.answerPart6 = 'Only accept a,b,c,d answer!!!';
                    this.valid.answerPart6 = false;
                }
                if (!this.valid.pdfPart6 || !this.valid.answerPart6) {
                    break;
                }
                // upload file and create part 6
                Promise.all([
                    this.uploadfileService.pushFileToStorage(this.selectedFilesPart6[0])
                ]).then(function (result) {
                    var part1 = {};
                    part1.examID = _this.exam1.examID;
                    part1.partNo = 6;
                    part1.pdfsrc = result[0];
                    _this.addExamService.addReadingPart(part1).subscribe(function (readingPart) {
                        var answers = [];
                        for (var i = 0; i < 12; i++) {
                            var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                            answer.partID = readingPart.partID;
                            answer.questionOrder = i + 141;
                            answer.answer = _this.answerPart6.charAt(i).toUpperCase();
                            answers.push(answer);
                        }
                        _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                            alert('Part 6 successfully created !!!');
                            _this.selectedFilesPart6 = undefined;
                            _this.isPart6 = false;
                            _this.checkFullExam();
                        });
                    });
                });
                break;
            case 7:
                // check file type
                this.valid.pdfPart7 = true;
                this.message.pdfPart7 = '';
                if (this.selectedFilesPart7 === undefined || this.selectedFilesPart7.length === 0) {
                    this.message.pdfPart7 = 'Please choose pdf file for part 7 !!!';
                    this.valid.pdfPart7 = false;
                }
                else if (this.selectedFilesPart7[0].type !== 'application/pdf') {
                    this.message.pdfPart7 = 'Only accept pdf file !!!';
                    this.valid.pdfPart7 = false;
                }
                // check answer
                this.valid.answerPart7 = true;
                this.message.answerPart7 = '';
                var answerPart7Regex = new RegExp('^[abcdABCD]{48}$');
                if (this.answerPart7 === undefined || this.answerPart7.trim().length === 0) {
                    this.message.answerPart7 = 'Please insert 48 answer for this part !!!';
                    this.valid.answerPart7 = false;
                }
                else if (!answerPart7Regex.test(this.answerPart7.trim())) {
                    this.message.answerPart7 = 'Only accept a,b,c,d answer!!!';
                    this.valid.answerPart7 = false;
                }
                if (!this.valid.pdfPart7 || !this.valid.answerPart7) {
                    break;
                }
                // upload file and create part 7
                Promise.all([
                    this.uploadfileService.pushFileToStorage(this.selectedFilesPart7[0])
                ]).then(function (result) {
                    var part1 = {};
                    part1.examID = _this.exam1.examID;
                    part1.partNo = 7;
                    part1.pdfsrc = result[0];
                    _this.addExamService.addReadingPart(part1).subscribe(function (readingPart) {
                        var answers = [];
                        for (var i = 0; i < 48; i++) {
                            var answer = new __WEBPACK_IMPORTED_MODULE_1__model_answer_part__["a" /* AnswerPart */];
                            answer.partID = readingPart.partID;
                            answer.questionOrder = i + 153;
                            answer.answer = _this.answerPart7.charAt(i).toUpperCase();
                            answers.push(answer);
                        }
                        _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                            alert('Part 7 successfully created !!!');
                            _this.selectedFilesPart7 = undefined;
                            _this.isPart7 = false;
                            _this.checkFullExam();
                        });
                    });
                });
                break;
            default: return;
        }
    };
    CreateComponent.prototype.checkFullExam = function () {
        if (!this.isPart1 &&
            !this.isPart2 &&
            !this.isPart3 &&
            !this.isPart4 &&
            !this.isPart5 &&
            !this.isPart6 &&
            !this.isPart7) {
            this.router.navigate(['/admin/exam']);
        }
    };
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-create',
            template: __webpack_require__("./src/app/admin/exam/create/create.component.html"),
            styles: [__webpack_require__("./src/app/admin/exam/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_uploadfile_service__["a" /* UploadfileService */],
            __WEBPACK_IMPORTED_MODULE_2__services_add_exam_service__["a" /* AddExamService */],
            __WEBPACK_IMPORTED_MODULE_0__services_exam_service__["a" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/exam/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ".box-error{\r\n  border-top-color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/exam/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper hold-transition skin-blue sidebar-mini\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <app-sidebar></app-sidebar>\r\n\r\n  <div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n      <h1>\r\n        Exam\r\n        <small>Edit exam</small>\r\n      </h1>\r\n      <ol class=\"breadcrumb\">\r\n        <li>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-dashboard\"></i> Home</a>\r\n        </li>\r\n        <li class=\"active\">Exam</li>\r\n      </ol>\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n      <!-- Small boxes (Stat box) -->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"box box-primary\">\r\n            <!-- form start -->\r\n            <form role=\"form\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\">\r\n                  <label>Exam ID</label>\r\n                  <input style=\"background: white;\" type=\"text\" class=\"form-control\" name=\"examID\" placeholder=\"Enter exam ID\" [(ngModel)]=\"exam.examID\"\r\n                    #examID=\"ngModel\" readonly=\"readonly\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n\r\n      <div class=\"row\">\r\n        <!-- PART 1-->\r\n        <div class=\"col-md-6\">\r\n          <div class=\"box box-primary\" [ngClass]=\"{ 'box-error': !isPart1 }\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 1\r\n                <span *ngIf=\"!isPart1\">\r\n                  <i class=\"fa fa-exclamation-triangle\" style=\"color: #caca2b;\"></i>\r\n                </span>\r\n              </h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form (submit)=\"upload(1)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart1 }\">\r\n                  <label>PDF FILE</label>\r\n                  <span *ngIf=\"isPart1\">\r\n                    <a [href]=\"part1pdfsrc\" target=\"_blank\">\r\n                      <i class=\"fa fa-file-pdf-o\"></i>\r\n                    </a>\r\n                  </span>\r\n                  <input id=\"pdfpart1\" type=\"file\" (change)=\"selectFilePart1($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart1\">\r\n                    {{message.pdfPart1}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.mp3Part1 }\">\r\n                  <label>MP3 FILE</label>\r\n                  <span *ngIf=\"isPart1\">\r\n                    <a [href]=\"part1mp3src\" target=\"_blank\">\r\n                      <i class=\"fa fa-file-audio-o\"></i>\r\n                    </a>\r\n                  </span>\r\n                  <input type=\"file\" (change)=\"selectMp3FilePart1($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.mp3Part1\">\r\n                    {{message.mp3Part1}}\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart1 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(1)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart1\" rows=\"3\" maxlength=\"10\" placeholder=\"Please insert answer for question from 1 to 10.\"\r\n                    [(ngModel)]=\"answerPart1\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart1\">\r\n                    {{message.answerPart1}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n\r\n        <!-- PART 2-->\r\n        <div class=\"col-md-6\">\r\n          <div class=\"box box-primary\" [ngClass]=\"{ 'box-error': !isPart2 }\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 2\r\n                <span *ngIf=\"!isPart2\">\r\n                  <i class=\"fa fa-exclamation-triangle\" style=\"color: #caca2b;\"></i>\r\n                </span>\r\n              </h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form (submit)=\"upload(2)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart2 }\">\r\n                  <label>PDF FILE</label>\r\n                  <span *ngIf=\"isPart2\">\r\n                    <a [href]=\"part2pdfsrc\" target=\"_blank\">\r\n                      <i class=\"fa fa-file-pdf-o\"></i>\r\n                    </a>\r\n                  </span>\r\n                  <input type=\"file\" (change)=\"selectFilePart2($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart2\">\r\n                    {{message.pdfPart2}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.mp3Part2 }\">\r\n                  <label>MP3 FILE</label>\r\n                  <span *ngIf=\"isPart2\">\r\n                    <a [href]=\"part2mp3src\" target=\"_blank\">\r\n                      <i class=\"fa fa-file-audio-o\"></i>\r\n                    </a>\r\n                  </span>\r\n                  <input type=\"file\" (change)=\"selectMp3FilePart2($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.mp3Part2\">\r\n                    {{message.mp3Part2}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart2 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(2)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart2\" rows=\"3\" maxlength=\"30\" placeholder=\"Please insert answer for question from 11 to 40.\"\r\n                    [(ngModel)]=\"answerPart2\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart2\">\r\n                    {{message.answerPart2}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n\r\n      <div class=\"row\">\r\n        <!-- PART 3-->\r\n        <div class=\"col-md-6\">\r\n          <div class=\"box box-primary\" [ngClass]=\"{ 'box-error': !isPart3 }\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 3\r\n                <span *ngIf=\"!isPart3\">\r\n                  <i class=\"fa fa-exclamation-triangle\" style=\"color: #caca2b;\"></i>\r\n                </span>\r\n              </h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form role=\"form\" (submit)=\"upload(3)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart3 }\">\r\n                  <label>PDF FILE</label>\r\n                  <span *ngIf=\"isPart3\">\r\n                    <a [href]=\"part3pdfsrc\" target=\"_blank\">\r\n                      <i class=\"fa fa-file-pdf-o\"></i>\r\n                    </a>\r\n                  </span>\r\n                  <input type=\"file\" (change)=\"selectFilePart3($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart3\">\r\n                    {{message.pdfPart3}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.mp3Part3 }\">\r\n                  <label>MP3 FILE</label>\r\n                  <span *ngIf=\"isPart3\">\r\n                    <a [href]=\"part3mp3src\" target=\"_blank\">\r\n                      <i class=\"fa fa-file-audio-o\"></i>\r\n                    </a>\r\n                  </span>\r\n                  <input type=\"file\" (change)=\"selectMp3FilePart3($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.mp3Part3\">\r\n                    {{message.mp3Part3}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart3 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(3)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart3\" [(ngModel)]=\"answerPart3\" maxlength=\"30\" rows=\"3\" placeholder=\"Please insert answer for question from 41 to 70.\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart3\">\r\n                    {{message.answerPart3}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n\r\n        <!-- PART 4-->\r\n        <div class=\"col-md-6\">\r\n          <div class=\"box box-primary\" [ngClass]=\"{ 'box-error': !isPart4 }\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 4\r\n                <span *ngIf=\"!isPart4\">\r\n                  <i class=\"fa fa-exclamation-triangle\" style=\"color: #caca2b;\"></i>\r\n                </span>\r\n              </h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form role=\"form\" (submit)=\"upload(4)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart4 }\">\r\n                  <label>PDF FILE</label>\r\n                  <span *ngIf=\"isPart4\">\r\n                    <a [href]=\"part4pdfsrc\" target=\"_blank\">\r\n                      <i class=\"fa fa-file-pdf-o\"></i>\r\n                    </a>\r\n                  </span>\r\n                  <input type=\"file\" (change)=\"selectFilePart4($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart4\">\r\n                    {{message.pdfPart4}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.mp3Part4 }\">\r\n                  <label>MP3 FILE</label>\r\n                  <span *ngIf=\"isPart4\">\r\n                    <a [href]=\"part4mp3src\" target=\"_blank\">\r\n                      <i class=\"fa fa-file-audio-o\"></i>\r\n                    </a>\r\n                  </span>\r\n                  <input type=\"file\" (change)=\"selectMp3FilePart4($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.mp3Part4\">\r\n                    {{message.mp3Part4}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart4 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(4)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart4\" [(ngModel)]=\"answerPart4\" maxlength=\"30\" rows=\"3\" placeholder=\"Please insert answer for question from 71 to 100.\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart4\">\r\n                    {{message.answerPart4}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n      <div class=\"row\">\r\n        <!-- PART 5-->\r\n        <div class=\"col-md-6\">\r\n          <div class=\"box box-primary\" [ngClass]=\"{ 'box-error': !isPart5 }\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 5\r\n                <span *ngIf=\"!isPart5\">\r\n                  <i class=\"fa fa-exclamation-triangle\" style=\"color: #caca2b;\"></i>\r\n                </span>\r\n              </h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form role=\"form\" (submit)=\"upload(5)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart5 }\">\r\n                  <label>PDF FILE</label>\r\n                  <span *ngIf=\"isPart5\">\r\n                    <a [href]=\"part5pdfsrc\" target=\"_blank\">\r\n                      <i class=\"fa fa-file-pdf-o\"></i>\r\n                    </a>\r\n                  </span>\r\n                  <input type=\"file\" (change)=\"selectFilePart5($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart5\">\r\n                    {{message.pdfPart5}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart5 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(5)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart5\" [(ngModel)]=\"answerPart5\" maxlength=\"40\" rows=\"3\" placeholder=\"Please insert answer for question from 101 to 140.\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart5\">\r\n                    {{message.answerPart5}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n\r\n        <!-- PART 6-->\r\n        <div class=\"col-md-6\">\r\n          <div class=\"box box-primary\" [ngClass]=\"{ 'box-error': !isPart6 }\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 6\r\n                <span *ngIf=\"!isPart6\">\r\n                  <i class=\"fa fa-exclamation-triangle\" style=\"color: #caca2b;\"></i>\r\n                </span>\r\n              </h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form role=\"form\" (submit)=\"upload(6)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart6 }\">\r\n                  <label>PDF FILE</label>\r\n                  <span *ngIf=\"isPart6\">\r\n                    <a [href]=\"part6pdfsrc\" target=\"_blank\">\r\n                      <i class=\"fa fa-file-pdf-o\"></i>\r\n                    </a>\r\n                  </span>\r\n                  <input type=\"file\" (change)=\"selectFilePart6($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart6\">\r\n                    {{message.pdfPart6}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart6 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(6)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart6\" [(ngModel)]=\"answerPart6\" maxlength=\"12\" rows=\"3\" placeholder=\"Please insert answer for question from 141 to 152.\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart6\">\r\n                    {{message.answerPart6}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n      <div class=\"row\">\r\n        <!-- PART 7-->\r\n        <div class=\"col-md-6\">\r\n          <div class=\"box box-primary\" [ngClass]=\"{ 'box-error': !isPart7 }\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Part 7\r\n                <span *ngIf=\"!isPart7\">\r\n                  <i class=\"fa fa-exclamation-triangle\" style=\"color: #caca2b;\"></i>\r\n                </span>\r\n              </h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form role=\"form\" (submit)=\"upload(7)\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.pdfPart7 }\">\r\n                  <label>PDF FILE</label>\r\n                  <span *ngIf=\"isPart7\">\r\n                    <a [href]=\"part7pdfsrc\" target=\"_blank\">\r\n                      <i class=\"fa fa-file-pdf-o\"></i>\r\n                    </a>\r\n                  </span>\r\n                  <input type=\"file\" (change)=\"selectFilePart7($event)\">\r\n\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.pdfPart7\">\r\n                    {{message.pdfPart7}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.answerPart7 }\">\r\n                  <label>Answer</label>\r\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showAnswer(7)\">\r\n                    <i class=\"fa fa-list-alt\"></i>\r\n                  </button>\r\n                  <textarea class=\"form-control\" name=\"answerPart7\" [(ngModel)]=\"answerPart7\" maxlength=\"48\" rows=\"3\" placeholder=\"Please insert answer for question from 153 to 200.\"></textarea>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.answerPart7\">\r\n                    {{message.answerPart7}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n    </section>\r\n    <!-- /.content -->\r\n  </div>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Users Register</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>No</th>\r\n                <th>Answer</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let ans of answerParts; let i = index\" [attr.data-index]=\"i\">\r\n                <td>{{ans.questionOrder}}</td>\r\n                <td>\r\n                  <input type=\"text\" name=\"{{ans.questionOrder}}\" [(ngModel)]=\"ans.answer\" (change)=\"answerChange(ans.partID)\" maxlength=\"1\">\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/exam/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_testroom_service__ = __webpack_require__("./src/app/services/testroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_exam_service__ = __webpack_require__("./src/app/services/add-exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uploadfile_service__ = __webpack_require__("./src/app/services/uploadfile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_answer_part__ = __webpack_require__("./src/app/model/answer-part.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, examService, uploadfileService, addExamService, sanitizer, testroomService) {
        this.route = route;
        this.router = router;
        this.examService = examService;
        this.uploadfileService = uploadfileService;
        this.addExamService = addExamService;
        this.sanitizer = sanitizer;
        this.testroomService = testroomService;
        this.exam = {};
        this.valid = {};
        this.message = {};
        this.part1 = {};
        this.part2 = {};
        this.part3 = {};
        this.part4 = {};
        this.part5 = {};
        this.part6 = {};
        this.part7 = {};
        this.isPart1 = false;
        this.isPart2 = false;
        this.isPart3 = false;
        this.isPart4 = false;
        this.isPart5 = false;
        this.isPart6 = false;
        this.isPart7 = false;
        this.answerParts = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.examService.getExamByExamID(id).subscribe(function (exam) {
            _this.exam = exam;
            if (_this.exam.examID === null) {
                _this.router.navigate(['/admin/exam']);
            }
            _this.checkTime(_this.exam);
            Promise.all([
                // upload pdf and mp3 file
                _this.examService.getListeningParts(_this.exam.examID),
                _this.examService.getReadingParts(_this.exam.examID)
            ]).then(function (result) {
                result[0].forEach(function (ListenPart) {
                    _this.part1 = null;
                    _this.part2 = null;
                    _this.part3 = null;
                    _this.part4 = null;
                    ListenPart.forEach(function (element) {
                        if (element.partNo === 1) {
                            _this.part1 = element;
                        }
                        else if (element.partNo === 2) {
                            _this.part2 = element;
                        }
                        else if (element.partNo === 3) {
                            _this.part3 = element;
                        }
                        else if (element.partNo === 4) {
                            _this.part4 = element;
                        }
                    });
                }).then(function (r) {
                    if (_this.part1 !== null) {
                        _this.isPart1 = true;
                        _this.examService.getPdfFiles(_this.part1.pdfsrc).subscribe(function (res) {
                            var src = URL.createObjectURL(res);
                            _this.part1pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                        });
                        _this.examService.getMp3Files(_this.part1.mp3src).subscribe(function (res) {
                            var src = URL.createObjectURL(res);
                            _this.part1mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                        });
                        _this.examService.getAnswerParts(_this.part1.partID).subscribe(function (ans) {
                            var answers = ans;
                            _this.answerPart1 = '';
                            answers.forEach(function (element) {
                                _this.answerPart1 += element.answer;
                            });
                        });
                    }
                    if (_this.part2 !== null) {
                        _this.isPart2 = true;
                        _this.examService.getPdfFiles(_this.part2.pdfsrc).subscribe(function (res) {
                            var src = URL.createObjectURL(res);
                            _this.part2pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                        });
                        _this.examService.getMp3Files(_this.part2.mp3src).subscribe(function (res) {
                            var src = URL.createObjectURL(res);
                            _this.part2mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                        });
                        _this.examService.getAnswerParts(_this.part2.partID).subscribe(function (ans) {
                            var answers = ans;
                            _this.answerPart2 = '';
                            answers.forEach(function (element) {
                                _this.answerPart2 += element.answer;
                            });
                        });
                    }
                    if (_this.part3 !== null) {
                        _this.isPart3 = true;
                        _this.examService.getPdfFiles(_this.part3.pdfsrc).subscribe(function (res) {
                            var src = URL.createObjectURL(res);
                            _this.part3pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                        });
                        _this.examService.getMp3Files(_this.part3.mp3src).subscribe(function (res) {
                            var src = URL.createObjectURL(res);
                            _this.part3mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                        });
                        _this.examService.getAnswerParts(_this.part3.partID).subscribe(function (ans) {
                            var answers = ans;
                            _this.answerPart3 = '';
                            answers.forEach(function (element) {
                                _this.answerPart3 += element.answer;
                            });
                        });
                    }
                    if (_this.part4 !== null) {
                        _this.isPart4 = true;
                        _this.examService.getPdfFiles(_this.part4.pdfsrc).subscribe(function (res) {
                            var src = URL.createObjectURL(res);
                            _this.part4pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                        });
                        _this.examService.getMp3Files(_this.part4.mp3src).subscribe(function (res) {
                            var src = URL.createObjectURL(res);
                            _this.part4mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                        });
                        _this.examService.getAnswerParts(_this.part4.partID).subscribe(function (ans) {
                            var answers = ans;
                            _this.answerPart4 = '';
                            answers.forEach(function (element) {
                                _this.answerPart4 += element.answer;
                            });
                        });
                    }
                });
                result[1].forEach(function (ReadPart) {
                    _this.part5 = null;
                    _this.part6 = null;
                    _this.part7 = null;
                    ReadPart.forEach(function (element) {
                        if (element.partNo === 5) {
                            _this.part5 = element;
                        }
                        else if (element.partNo === 6) {
                            _this.part6 = element;
                        }
                        else if (element.partNo === 7) {
                            _this.part7 = element;
                        }
                    });
                }).then(function (r) {
                    if (_this.part5 !== null) {
                        _this.isPart5 = true;
                        _this.examService.getPdfFiles(_this.part5.pdfsrc).subscribe(function (res) {
                            var src = URL.createObjectURL(res);
                            _this.part5pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                        });
                        _this.examService.getAnswerParts(_this.part5.partID).subscribe(function (ans) {
                            var answers = ans;
                            _this.answerPart5 = '';
                            answers.forEach(function (element) {
                                _this.answerPart5 += element.answer;
                            });
                        });
                    }
                    if (_this.part6 !== null) {
                        _this.examService.getPdfFiles(_this.part6.pdfsrc).subscribe(function (res) {
                            _this.isPart6 = true;
                            var src = URL.createObjectURL(res);
                            _this.part6pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                        });
                        _this.examService.getAnswerParts(_this.part6.partID).subscribe(function (ans) {
                            var answers = ans;
                            _this.answerPart6 = '';
                            answers.forEach(function (element) {
                                _this.answerPart6 += element.answer;
                            });
                        });
                    }
                    if (_this.part7 !== null) {
                        _this.examService.getPdfFiles(_this.part7.pdfsrc).subscribe(function (res) {
                            _this.isPart7 = true;
                            var src = URL.createObjectURL(res);
                            _this.part7pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                        });
                        _this.examService.getAnswerParts(_this.part7.partID).subscribe(function (ans) {
                            var answers = ans;
                            _this.answerPart7 = '';
                            answers.forEach(function (element) {
                                _this.answerPart7 += element.answer;
                            });
                        });
                    }
                });
            });
        });
        // part 1
        this.valid.pdfPart1 = true;
        this.valid.mp3Part1 = true;
        this.valid.answerPart1 = true;
        // part 2
        this.valid.pdfPart2 = true;
        this.valid.mp3Part2 = true;
        this.valid.answerPart2 = true;
        // part 3
        this.valid.pdfPart3 = true;
        this.valid.mp3Part3 = true;
        this.valid.answerPart3 = true;
        // part 4
        this.valid.pdfPart4 = true;
        this.valid.mp3Part4 = true;
        this.valid.answerPart4 = true;
        // part 5
        this.valid.pdfPart5 = true;
        this.valid.answerPart5 = true;
        // part 6
        this.valid.pdfPart6 = true;
        this.valid.answerPart6 = true;
        // part 7
        this.valid.pdfPart7 = true;
        this.valid.answerPart7 = true;
    };
    // select change file input
    EditComponent.prototype.selectFilePart1 = function (event) {
        this.selectedFilesPart1 = event.target.files;
    };
    EditComponent.prototype.selectMp3FilePart1 = function (event) {
        this.selectedMp3FilesPart1 = event.target.files;
    };
    EditComponent.prototype.selectFilePart2 = function (event) {
        this.selectedFilesPart2 = event.target.files;
    };
    EditComponent.prototype.selectMp3FilePart2 = function (event) {
        this.selectedMp3FilesPart2 = event.target.files;
    };
    EditComponent.prototype.selectFilePart3 = function (event) {
        this.selectedFilesPart3 = event.target.files;
    };
    EditComponent.prototype.selectMp3FilePart3 = function (event) {
        this.selectedMp3FilesPart3 = event.target.files;
    };
    EditComponent.prototype.selectFilePart4 = function (event) {
        this.selectedFilesPart4 = event.target.files;
    };
    EditComponent.prototype.selectMp3FilePart4 = function (event) {
        this.selectedMp3FilesPart4 = event.target.files;
    };
    EditComponent.prototype.selectFilePart5 = function (event) {
        this.selectedFilesPart5 = event.target.files;
    };
    EditComponent.prototype.selectFilePart6 = function (event) {
        this.selectedFilesPart6 = event.target.files;
    };
    EditComponent.prototype.selectFilePart7 = function (event) {
        this.selectedFilesPart7 = event.target.files;
    };
    // end select.
    EditComponent.prototype.showAnswer = function (partNo) {
        this.answerParts = [];
        switch (partNo) {
            case 1:
                if (this.answerPart1 === undefined) {
                    this.answerPart1 = '';
                }
                for (var i = 0; i < 10; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '1';
                    answer.answer = this.answerPart1.charAt(i) === ' ' ? '' : this.answerPart1.charAt(i).toUpperCase();
                    answer.questionOrder = i + 1;
                    this.answerParts.push(answer);
                }
                break;
            case 2:
                if (this.answerPart2 === undefined) {
                    this.answerPart2 = '';
                }
                for (var i = 0; i < 30; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '2';
                    answer.answer = this.answerPart2.charAt(i) === ' ' ? '' : this.answerPart2.charAt(i).toUpperCase();
                    answer.questionOrder = i + 11;
                    this.answerParts.push(answer);
                }
                break;
            case 3:
                if (this.answerPart3 === undefined) {
                    this.answerPart3 = '';
                }
                for (var i = 0; i < 30; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '3';
                    answer.answer = this.answerPart3.charAt(i) === ' ' ? '' : this.answerPart3.charAt(i).toUpperCase();
                    answer.questionOrder = i + 41;
                    this.answerParts.push(answer);
                }
                break;
            case 4:
                if (this.answerPart4 === undefined) {
                    this.answerPart4 = '';
                }
                for (var i = 0; i < 30; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '4';
                    answer.answer = this.answerPart4.charAt(i) === ' ' ? '' : this.answerPart4.charAt(i).toUpperCase();
                    answer.questionOrder = i + 71;
                    this.answerParts.push(answer);
                }
                break;
            case 5:
                if (this.answerPart5 === undefined) {
                    this.answerPart5 = '';
                }
                for (var i = 0; i < 40; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '5';
                    answer.answer = this.answerPart5.charAt(i) === ' ' ? '' : this.answerPart5.charAt(i).toUpperCase();
                    answer.questionOrder = i + 101;
                    this.answerParts.push(answer);
                }
                break;
            case 6:
                if (this.answerPart6 === undefined) {
                    this.answerPart6 = '';
                }
                for (var i = 0; i < 12; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '6';
                    answer.answer = this.answerPart6.charAt(i) === ' ' ? '' : this.answerPart6.charAt(i).toUpperCase();
                    answer.questionOrder = i + 141;
                    this.answerParts.push(answer);
                }
                break;
            case 7:
                if (this.answerPart7 === undefined) {
                    this.answerPart7 = '';
                }
                for (var i = 0; i < 48; i++) {
                    var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                    answer.partID = '7';
                    answer.answer = this.answerPart7.charAt(i) === ' ' ? '' : this.answerPart7.charAt(i).toUpperCase();
                    answer.questionOrder = i + 153;
                    this.answerParts.push(answer);
                }
                break;
            default:
                break;
        }
    };
    EditComponent.prototype.answerChange = function (partNo) {
        var _this = this;
        switch (partNo) {
            case '1':
                this.answerPart1 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart1 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            case '2':
                this.answerPart2 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart2 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            case '3':
                this.answerPart3 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart3 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            case '4':
                this.answerPart4 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart4 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            case '5':
                this.answerPart5 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart5 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            case '6':
                this.answerPart6 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart6 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            case '7':
                this.answerPart7 = '';
                this.answerParts.forEach(function (element) {
                    _this.answerPart7 += element.answer === '' ? ' ' : element.answer.toUpperCase();
                });
                break;
            default:
                break;
        }
    };
    EditComponent.prototype.upload = function (part) {
        var _this = this;
        switch (part) {
            case 1:
                if (this.part1 === null) {
                    // this part has not been initialized
                    // check file type
                    this.valid.pdfPart1 = true;
                    this.message.pdfPart1 = '';
                    if (this.selectedFilesPart1 === undefined || this.selectedFilesPart1.length === 0) {
                        this.message.pdfPart1 = 'Please choose pdf file for part 1 !!!';
                        this.valid.pdfPart1 = false;
                    }
                    else if (this.selectedFilesPart1[0].type !== 'application/pdf') {
                        this.message.pdfPart1 = 'Only accept pdf file !!!';
                        this.valid.pdfPart1 = false;
                    }
                    this.valid.mp3Part1 = true;
                    this.message.mp3Part1 = '';
                    if (this.selectedMp3FilesPart1 === undefined || this.selectedMp3FilesPart1.length === 0) {
                        this.message.mp3Part1 = 'Please choose mp3 file for part 1 !!!';
                        this.valid.mp3Part1 = false;
                    }
                    else if (this.selectedMp3FilesPart1[0].type !== 'audio/mp3') {
                        this.message.mp3Part1 = 'Only accept mp3 file !!!';
                        this.valid.mp3Part1 = false;
                    }
                    // check answer
                    this.valid.answerPart1 = true;
                    this.message.answerPart1 = '';
                    var answerPart1Regex = new RegExp('^[abcdABCD]{10}$');
                    if (this.answerPart1 === undefined || this.answerPart1.trim().length === 0) {
                        this.message.answerPart1 = 'Please insert 10 answer for this part !!!';
                        this.valid.answerPart1 = false;
                    }
                    else if (!answerPart1Regex.test(this.answerPart1.trim())) {
                        this.message.answerPart1 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart1 = false;
                    }
                    if (!this.valid.pdfPart1 || !this.valid.mp3Part1 || !this.valid.answerPart1) {
                        return;
                    }
                    // upload file and create part 1
                    Promise.all([
                        // upload pdf and mp3 file
                        this.uploadfileService.pushFileToStorage(this.selectedFilesPart1[0]),
                        this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart1[0])
                    ]).then(function (result) {
                        // create part object and set value
                        var part1 = {};
                        part1.examID = _this.exam.examID;
                        part1.partNo = 1;
                        part1.pdfsrc = result[0];
                        part1.mp3src = result[1];
                        // add part in database
                        _this.addExamService.addListeningPart(part1).subscribe(function (listeningPart) {
                            // create answert sheet for part
                            var answers = [];
                            for (var i = 0; i < 10; i++) {
                                var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                                answer.partID = listeningPart.partID;
                                answer.questionOrder = i + 1;
                                answer.answer = _this.answerPart1.charAt(i).toUpperCase();
                                answers.push(answer);
                            }
                            _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                                _this.part1 = part1;
                                _this.examService.getPdfFiles(part1.pdfsrc).subscribe(function (res) {
                                    var src = URL.createObjectURL(res);
                                    _this.part1pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                });
                                _this.examService.getMp3Files(part1.pdfsrc).subscribe(function (res) {
                                    var src = URL.createObjectURL(res);
                                    _this.part1mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                                });
                                _this.isPart1 = true;
                                _this.selectedFilesPart1 = undefined;
                                _this.selectedMp3FilesPart1 = undefined;
                                alert('Part 1 successfully created !!!');
                            });
                        });
                    });
                }
                else {
                    // check file type
                    this.valid.pdfPart1 = true;
                    this.message.pdfPart1 = '';
                    if (this.selectedFilesPart1 !== undefined) {
                        if (this.selectedFilesPart1.length > 0 && this.selectedFilesPart1[0].type !== 'application/pdf') {
                            this.message.pdfPart1 = 'Only accept pdf file !!!';
                            this.valid.pdfPart1 = false;
                        }
                    }
                    this.valid.mp3Part1 = true;
                    this.message.mp3Part1 = '';
                    if (this.selectedMp3FilesPart1 !== undefined) {
                        if (this.selectedMp3FilesPart1.length > 0 && this.selectedMp3FilesPart1[0].type !== 'audio/mp3') {
                            this.message.mp3Part1 = 'Only accept mp3 file !!!';
                            this.valid.mp3Part1 = false;
                        }
                    }
                    // check answer
                    this.valid.answerPart1 = true;
                    this.message.answerPart1 = '';
                    var answerPart1Regex = new RegExp('^[abcdABCD]{10}$');
                    if (this.answerPart1 === undefined || this.answerPart1.trim().length === 0) {
                        this.message.answerPart1 = 'Please insert 10 answer for this part !!!';
                        this.valid.answerPart1 = false;
                    }
                    else if (!answerPart1Regex.test(this.answerPart1.trim())) {
                        this.message.answerPart1 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart1 = false;
                    }
                    if (!this.valid.pdfPart1 || !this.valid.mp3Part1 || !this.valid.answerPart1) {
                        return;
                    }
                    var check_1 = false;
                    if (this.selectedFilesPart1 !== undefined) {
                        if (this.selectedFilesPart1.length > 0) {
                            check_1 = true;
                            this.uploadfileService.pushFileToStorage(this.selectedFilesPart1[0]).then(function (pdffile) {
                                _this.part1.pdfsrc = pdffile;
                                _this.examService.editListeningPart(_this.part1).subscribe(function (res) {
                                    _this.part1 = res;
                                    _this.examService.getPdfFiles(_this.part1.pdfsrc).subscribe(function (res1) {
                                        var src = URL.createObjectURL(res1);
                                        _this.part1pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                        _this.selectedFilesPart1 = undefined;
                                    });
                                });
                            });
                        }
                    }
                    if (this.selectedMp3FilesPart1 !== undefined) {
                        if (this.selectedMp3FilesPart1.length > 0) {
                            check_1 = true;
                            this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart1[0]).then(function (mp3file) {
                                _this.part1.mp3src = mp3file;
                                _this.examService.editListeningPart(_this.part1).subscribe(function (res) {
                                    _this.part1 = res;
                                    _this.examService.getPdfFiles(_this.part1.mp3src).subscribe(function (res1) {
                                        var src = URL.createObjectURL(res1);
                                        _this.part1mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                                        _this.selectedMp3FilesPart1 = undefined;
                                    });
                                });
                            });
                        }
                    }
                    this.examService.getAnswerParts(this.part1.partID).subscribe(function (ans) {
                        var checkAnswer = true;
                        var answers = ans;
                        answers.forEach(function (element) {
                            for (var i = 0; i < _this.answerPart1.length; i++) {
                                if (element.questionOrder === i + 1) {
                                    if (element.answer !== _this.answerPart1.charAt(i).toUpperCase()) {
                                        element.answer = _this.answerPart1.charAt(i).toUpperCase();
                                        checkAnswer = false;
                                    }
                                }
                            }
                        });
                        if (!checkAnswer) {
                            _this.examService.editAnswerPart(answers).subscribe(function (result) {
                            });
                        }
                        if (!checkAnswer || check_1) {
                            _this.selectedFilesPart1 = undefined;
                            _this.selectedMp3FilesPart1 = undefined;
                            alert('Part 1 successfully updated !!!');
                        }
                        else {
                            alert('Please change info to update for Part 1 !!!');
                        }
                    });
                }
                break;
            case 2:
                if (this.part2 === null) {
                    // this part has not been initialized
                    // check file type
                    this.valid.pdfPart2 = true;
                    this.message.pdfPart2 = '';
                    if (this.selectedFilesPart2 === undefined || this.selectedFilesPart2.length === 0) {
                        this.message.pdfPart2 = 'Please choose pdf file for part 2 !!!';
                        this.valid.pdfPart2 = false;
                    }
                    else if (this.selectedFilesPart2[0].type !== 'application/pdf') {
                        this.message.pdfPart2 = 'Only accept pdf file !!!';
                        this.valid.pdfPart2 = false;
                    }
                    this.valid.mp3Part2 = true;
                    this.message.mp3Part2 = '';
                    if (this.selectedMp3FilesPart2 === undefined || this.selectedMp3FilesPart2.length === 0) {
                        this.message.mp3Part2 = 'Please choose mp3 file for part 2 !!!';
                        this.valid.mp3Part2 = false;
                    }
                    else if (this.selectedMp3FilesPart2[0].type !== 'audio/mp3') {
                        this.message.mp3Part2 = 'Only accept mp3 file !!!';
                        this.valid.mp3Part2 = false;
                    }
                    // check answer
                    this.valid.answerPart2 = true;
                    this.message.answerPart2 = '';
                    var answerPart2Regex = new RegExp('^[abcdABCD]{30}$');
                    if (this.answerPart2 === undefined || this.answerPart2.trim().length === 0) {
                        this.message.answerPart2 = 'Please insert 30 answer for this part !!!';
                        this.valid.answerPart2 = false;
                    }
                    else if (!answerPart2Regex.test(this.answerPart2.trim())) {
                        this.message.answerPart2 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart2 = false;
                    }
                    if (!this.valid.pdfPart2 || !this.valid.mp3Part2 || !this.valid.answerPart2) {
                        return;
                    }
                    // upload file and create part 1
                    Promise.all([
                        // upload pdf and mp3 file
                        this.uploadfileService.pushFileToStorage(this.selectedFilesPart2[0]),
                        this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart2[0])
                    ]).then(function (result) {
                        // create part object and set value
                        var part1 = {};
                        part1.examID = _this.exam.examID;
                        part1.partNo = 2;
                        part1.pdfsrc = result[0];
                        part1.mp3src = result[1];
                        // add part in database
                        _this.addExamService.addListeningPart(part1).subscribe(function (listeningPart) {
                            // create answert sheet for part
                            var answers = [];
                            for (var i = 0; i < 30; i++) {
                                var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                                answer.partID = listeningPart.partID;
                                answer.questionOrder = i + 11;
                                answer.answer = _this.answerPart2.charAt(i).toUpperCase();
                                answers.push(answer);
                            }
                            _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                                _this.part2 = part1;
                                _this.examService.getPdfFiles(part1.pdfsrc).subscribe(function (res) {
                                    var src = URL.createObjectURL(res);
                                    _this.part2pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                });
                                _this.examService.getMp3Files(part1.pdfsrc).subscribe(function (res) {
                                    var src = URL.createObjectURL(res);
                                    _this.part2mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                                });
                                _this.isPart2 = true;
                                _this.selectedFilesPart2 = undefined;
                                _this.selectedMp3FilesPart2 = undefined;
                                alert('Part 2 successfully created !!!');
                            });
                        });
                    });
                }
                else {
                    // check file type
                    this.valid.pdfPart2 = true;
                    this.message.pdfPart2 = '';
                    if (this.selectedFilesPart2 !== undefined) {
                        if (this.selectedFilesPart2.length > 0 && this.selectedFilesPart2[0].type !== 'application/pdf') {
                            this.message.pdfPart2 = 'Only accept pdf file !!!';
                            this.valid.pdfPart2 = false;
                        }
                    }
                    this.valid.mp3Part2 = true;
                    this.message.mp3Part2 = '';
                    if (this.selectedMp3FilesPart2 !== undefined) {
                        if (this.selectedMp3FilesPart2.length > 0 && this.selectedMp3FilesPart2[0].type !== 'audio/mp3') {
                            this.message.mp3Part2 = 'Only accept mp3 file !!!';
                            this.valid.mp3Part2 = false;
                        }
                    }
                    // check answer
                    this.valid.answerPart2 = true;
                    this.message.answerPart2 = '';
                    var answerPart2Regex = new RegExp('^[abcdABCD]{30}$');
                    if (this.answerPart2 === undefined || this.answerPart2.trim().length === 0) {
                        this.message.answerPart2 = 'Please insert 30 answer for this part !!!';
                        this.valid.answerPart2 = false;
                    }
                    else if (!answerPart2Regex.test(this.answerPart2.trim())) {
                        this.message.answerPart2 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart2 = false;
                    }
                    if (!this.valid.pdfPart2 || !this.valid.mp3Part2 || !this.valid.answerPart2) {
                        return;
                    }
                    var check_2 = false;
                    if (this.selectedFilesPart2 !== undefined) {
                        if (this.selectedFilesPart2.length > 0) {
                            check_2 = true;
                            this.uploadfileService.pushFileToStorage(this.selectedFilesPart2[0]).then(function (pdffile) {
                                _this.part2.pdfsrc = pdffile;
                                _this.examService.editListeningPart(_this.part2).subscribe(function (res) {
                                    _this.part2 = res;
                                    _this.examService.getPdfFiles(_this.part2.pdfsrc).subscribe(function (res1) {
                                        var src = URL.createObjectURL(res1);
                                        _this.part2pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                        _this.selectedFilesPart2 = undefined;
                                    });
                                });
                            });
                        }
                    }
                    if (this.selectedMp3FilesPart2 !== undefined) {
                        if (this.selectedMp3FilesPart2.length > 0) {
                            check_2 = true;
                            this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart2[0]).then(function (mp3file) {
                                _this.part2.mp3src = mp3file;
                                _this.examService.editListeningPart(_this.part2).subscribe(function (res) {
                                    _this.part2 = res;
                                    _this.examService.getPdfFiles(_this.part2.mp3src).subscribe(function (res1) {
                                        var src = URL.createObjectURL(res1);
                                        _this.part2mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                                        _this.selectedMp3FilesPart2 = undefined;
                                    });
                                });
                            });
                        }
                    }
                    this.examService.getAnswerParts(this.part2.partID).subscribe(function (ans) {
                        var checkAnswer = true;
                        var answers = ans;
                        answers.forEach(function (element) {
                            for (var i = 0; i < _this.answerPart2.length; i++) {
                                if (element.questionOrder === i + 11) {
                                    if (element.answer !== _this.answerPart2.charAt(i).toUpperCase()) {
                                        element.answer = _this.answerPart2.charAt(i).toUpperCase();
                                        checkAnswer = false;
                                    }
                                }
                            }
                        });
                        if (!checkAnswer) {
                            _this.examService.editAnswerPart(answers).subscribe(function (result) {
                            });
                        }
                        if (!checkAnswer || check_2) {
                            _this.selectedFilesPart2 = undefined;
                            _this.selectedMp3FilesPart2 = undefined;
                            alert('Part 2 successfully updated !!!');
                        }
                        else {
                            alert('Please change info to update for Part 2 !!!');
                        }
                    });
                }
                break;
            case 3:
                if (this.part3 === null) {
                    // this part has not been initialized
                    // check file type
                    this.valid.pdfPart3 = true;
                    this.message.pdfPart3 = '';
                    if (this.selectedFilesPart3 === undefined || this.selectedFilesPart3.length === 0) {
                        this.message.pdfPart3 = 'Please choose pdf file for part 3 !!!';
                        this.valid.pdfPart3 = false;
                    }
                    else if (this.selectedFilesPart3[0].type !== 'application/pdf') {
                        this.message.pdfPart3 = 'Only accept pdf file !!!';
                        this.valid.pdfPart3 = false;
                    }
                    this.valid.mp3Part3 = true;
                    this.message.mp3Part3 = '';
                    if (this.selectedMp3FilesPart3 === undefined || this.selectedMp3FilesPart3.length === 0) {
                        this.message.mp3Part3 = 'Please choose mp3 file for part 3 !!!';
                        this.valid.mp3Part3 = false;
                    }
                    else if (this.selectedMp3FilesPart3[0].type !== 'audio/mp3') {
                        this.message.mp3Part3 = 'Only accept mp3 file !!!';
                        this.valid.mp3Part3 = false;
                    }
                    // check answer
                    this.valid.answerPart3 = true;
                    this.message.answerPart3 = '';
                    var answerPart3Regex = new RegExp('^[abcdABCD]{30}$');
                    if (this.answerPart3 === undefined || this.answerPart3.trim().length === 0) {
                        this.message.answerPart3 = 'Please insert 30 answer for this part !!!';
                        this.valid.answerPart3 = false;
                    }
                    else if (!answerPart3Regex.test(this.answerPart3.trim())) {
                        this.message.answerPart3 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart3 = false;
                    }
                    if (!this.valid.pdfPart3 || !this.valid.mp3Part3 || !this.valid.answerPart3) {
                        return;
                    }
                    // upload file and create part 1
                    Promise.all([
                        // upload pdf and mp3 file
                        this.uploadfileService.pushFileToStorage(this.selectedFilesPart3[0]),
                        this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart3[0])
                    ]).then(function (result) {
                        // create part object and set value
                        var part1 = {};
                        part1.examID = _this.exam.examID;
                        part1.partNo = 3;
                        part1.pdfsrc = result[0];
                        part1.mp3src = result[1];
                        // add part in database
                        _this.addExamService.addListeningPart(part1).subscribe(function (listeningPart) {
                            // create answert sheet for part
                            var answers = [];
                            for (var i = 0; i < 30; i++) {
                                var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                                answer.partID = listeningPart.partID;
                                answer.questionOrder = i + 41;
                                answer.answer = _this.answerPart3.charAt(i).toUpperCase();
                                answers.push(answer);
                            }
                            _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                                _this.part3 = part1;
                                _this.examService.getPdfFiles(part1.pdfsrc).subscribe(function (res) {
                                    var src = URL.createObjectURL(res);
                                    _this.part3pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                });
                                _this.examService.getMp3Files(part1.pdfsrc).subscribe(function (res) {
                                    var src = URL.createObjectURL(res);
                                    _this.part3mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                                });
                                _this.isPart3 = true;
                                _this.selectedFilesPart3 = undefined;
                                _this.selectedMp3FilesPart3 = undefined;
                                alert('Part 3 successfully created !!!');
                            });
                        });
                    });
                }
                else {
                    // check file type
                    this.valid.pdfPart3 = true;
                    this.message.pdfPart3 = '';
                    if (this.selectedFilesPart3 !== undefined) {
                        if (this.selectedFilesPart3.length > 0 && this.selectedFilesPart3[0].type !== 'application/pdf') {
                            this.message.pdfPart3 = 'Only accept pdf file !!!';
                            this.valid.pdfPart3 = false;
                        }
                    }
                    this.valid.mp3Part3 = true;
                    this.message.mp3Part3 = '';
                    if (this.selectedMp3FilesPart3 !== undefined) {
                        if (this.selectedMp3FilesPart3.length > 0 && this.selectedMp3FilesPart3[0].type !== 'audio/mp3') {
                            this.message.mp3Part3 = 'Only accept mp3 file !!!';
                            this.valid.mp3Part3 = false;
                        }
                    }
                    // check answer
                    this.valid.answerPart3 = true;
                    this.message.answerPart3 = '';
                    var answerPart3Regex = new RegExp('^[abcdABCD]{30}$');
                    if (this.answerPart3 === undefined || this.answerPart3.trim().length === 0) {
                        this.message.answerPart3 = 'Please insert 30 answer for this part !!!';
                        this.valid.answerPart3 = false;
                    }
                    else if (!answerPart3Regex.test(this.answerPart3.trim())) {
                        this.message.answerPart3 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart3 = false;
                    }
                    if (!this.valid.pdfPart3 || !this.valid.mp3Part3 || !this.valid.answerPart3) {
                        return;
                    }
                    var check_3 = false;
                    if (this.selectedFilesPart3 !== undefined) {
                        if (this.selectedFilesPart3.length > 0) {
                            check_3 = true;
                            this.uploadfileService.pushFileToStorage(this.selectedFilesPart3[0]).then(function (pdffile) {
                                _this.part3.pdfsrc = pdffile;
                                _this.examService.editListeningPart(_this.part3).subscribe(function (res) {
                                    _this.part3 = res;
                                    _this.examService.getPdfFiles(_this.part3.pdfsrc).subscribe(function (res1) {
                                        var src = URL.createObjectURL(res1);
                                        _this.part3pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                        _this.selectedFilesPart3 = undefined;
                                    });
                                });
                            });
                        }
                    }
                    if (this.selectedMp3FilesPart3 !== undefined) {
                        if (this.selectedMp3FilesPart3.length > 0) {
                            check_3 = true;
                            this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart3[0]).then(function (mp3file) {
                                _this.part3.mp3src = mp3file;
                                _this.examService.editListeningPart(_this.part3).subscribe(function (res) {
                                    _this.part3 = res;
                                    _this.examService.getPdfFiles(_this.part3.mp3src).subscribe(function (res1) {
                                        var src = URL.createObjectURL(res1);
                                        _this.part3mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                                        _this.selectedMp3FilesPart3 = undefined;
                                    });
                                });
                            });
                        }
                    }
                    this.examService.getAnswerParts(this.part3.partID).subscribe(function (ans) {
                        var checkAnswer = true;
                        var answers = ans;
                        answers.forEach(function (element) {
                            for (var i = 0; i < _this.answerPart3.length; i++) {
                                if (element.questionOrder === i + 41) {
                                    if (element.answer !== _this.answerPart3.charAt(i).toUpperCase()) {
                                        element.answer = _this.answerPart3.charAt(i).toUpperCase();
                                        checkAnswer = false;
                                    }
                                }
                            }
                        });
                        if (!checkAnswer) {
                            _this.examService.editAnswerPart(answers).subscribe(function (result) {
                            });
                        }
                        if (!checkAnswer || check_3) {
                            _this.selectedFilesPart3 = undefined;
                            _this.selectedMp3FilesPart3 = undefined;
                            alert('Part 3 successfully updated !!!');
                        }
                        else {
                            alert('Please change info to update for Part 3 !!!');
                        }
                    });
                }
                break;
            case 4:
                if (this.part4 === null) {
                    // this part has not been initialized
                    // check file type
                    this.valid.pdfPart4 = true;
                    this.message.pdfPart4 = '';
                    if (this.selectedFilesPart4 === undefined || this.selectedFilesPart4.length === 0) {
                        this.message.pdfPart4 = 'Please choose pdf file for part 4 !!!';
                        this.valid.pdfPart4 = false;
                    }
                    else if (this.selectedFilesPart4[0].type !== 'application/pdf') {
                        this.message.pdfPart4 = 'Only accept pdf file !!!';
                        this.valid.pdfPart4 = false;
                    }
                    this.valid.mp3Part4 = true;
                    this.message.mp3Part4 = '';
                    if (this.selectedMp3FilesPart4 === undefined || this.selectedMp3FilesPart4.length === 0) {
                        this.message.mp3Part4 = 'Please choose mp3 file for part 4 !!!';
                        this.valid.mp3Part4 = false;
                    }
                    else if (this.selectedMp3FilesPart4[0].type !== 'audio/mp3') {
                        this.message.mp3Part4 = 'Only accept mp3 file !!!';
                        this.valid.mp3Part4 = false;
                    }
                    // check answer
                    this.valid.answerPart4 = true;
                    this.message.answerPart4 = '';
                    var answerPart4Regex = new RegExp('^[abcdABCD]{30}$');
                    if (this.answerPart4 === undefined || this.answerPart4.trim().length === 0) {
                        this.message.answerPart4 = 'Please insert 30 answer for this part !!!';
                        this.valid.answerPart4 = false;
                    }
                    else if (!answerPart4Regex.test(this.answerPart4.trim())) {
                        this.message.answerPart4 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart4 = false;
                    }
                    if (!this.valid.pdfPart4 || !this.valid.mp3Part4 || !this.valid.answerPart4) {
                        return;
                    }
                    // upload file and create part 1
                    Promise.all([
                        // upload pdf and mp3 file
                        this.uploadfileService.pushFileToStorage(this.selectedFilesPart4[0]),
                        this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart4[0])
                    ]).then(function (result) {
                        // create part object and set value
                        var part1 = {};
                        part1.examID = _this.exam.examID;
                        part1.partNo = 4;
                        part1.pdfsrc = result[0];
                        part1.mp3src = result[1];
                        // add part in database
                        _this.addExamService.addListeningPart(part1).subscribe(function (listeningPart) {
                            // create answert sheet for part
                            var answers = [];
                            for (var i = 0; i < 30; i++) {
                                var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                                answer.partID = listeningPart.partID;
                                answer.questionOrder = i + 71;
                                answer.answer = _this.answerPart4.charAt(i).toUpperCase();
                                answers.push(answer);
                            }
                            _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                                _this.part4 = part1;
                                _this.examService.getPdfFiles(part1.pdfsrc).subscribe(function (res) {
                                    var src = URL.createObjectURL(res);
                                    _this.part4pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                });
                                _this.examService.getMp3Files(part1.pdfsrc).subscribe(function (res) {
                                    var src = URL.createObjectURL(res);
                                    _this.part4mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                                });
                                _this.isPart4 = true;
                                _this.selectedFilesPart4 = undefined;
                                _this.selectedMp3FilesPart4 = undefined;
                                alert('Part 4 successfully created !!!');
                            });
                        });
                    });
                }
                else {
                    // check file type
                    this.valid.pdfPart4 = true;
                    this.message.pdfPart4 = '';
                    if (this.selectedFilesPart4 !== undefined) {
                        if (this.selectedFilesPart4.length > 0 && this.selectedFilesPart4[0].type !== 'application/pdf') {
                            this.message.pdfPart4 = 'Only accept pdf file !!!';
                            this.valid.pdfPart4 = false;
                        }
                    }
                    this.valid.mp3Part4 = true;
                    this.message.mp3Part4 = '';
                    if (this.selectedMp3FilesPart4 !== undefined) {
                        if (this.selectedMp3FilesPart4.length > 0 && this.selectedMp3FilesPart4[0].type !== 'audio/mp3') {
                            this.message.mp3Part4 = 'Only accept mp3 file !!!';
                            this.valid.mp3Part4 = false;
                        }
                    }
                    // check answer
                    this.valid.answerPart4 = true;
                    this.message.answerPart4 = '';
                    var answerPart4Regex = new RegExp('^[abcdABCD]{30}$');
                    if (this.answerPart4 === undefined || this.answerPart4.trim().length === 0) {
                        this.message.answerPart4 = 'Please insert 30 answer for this part !!!';
                        this.valid.answerPart4 = false;
                    }
                    else if (!answerPart4Regex.test(this.answerPart4.trim())) {
                        this.message.answerPart4 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart4 = false;
                    }
                    if (!this.valid.pdfPart4 || !this.valid.mp3Part4 || !this.valid.answerPart4) {
                        return;
                    }
                    var check_4 = false;
                    if (this.selectedFilesPart4 !== undefined) {
                        if (this.selectedFilesPart4.length > 0) {
                            check_4 = true;
                            this.uploadfileService.pushFileToStorage(this.selectedFilesPart4[0]).then(function (pdffile) {
                                _this.part4.pdfsrc = pdffile;
                                _this.examService.editListeningPart(_this.part4).subscribe(function (res) {
                                    _this.part4 = res;
                                    _this.examService.getPdfFiles(_this.part4.pdfsrc).subscribe(function (res1) {
                                        var src = URL.createObjectURL(res1);
                                        _this.part4pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                        _this.selectedFilesPart4 = undefined;
                                    });
                                });
                            });
                        }
                    }
                    if (this.selectedMp3FilesPart4 !== undefined) {
                        if (this.selectedMp3FilesPart4.length > 0) {
                            check_4 = true;
                            this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart4[0]).then(function (mp3file) {
                                _this.part4.mp3src = mp3file;
                                _this.examService.editListeningPart(_this.part4).subscribe(function (res) {
                                    _this.part4 = res;
                                    _this.examService.getPdfFiles(_this.part4.mp3src).subscribe(function (res1) {
                                        var src = URL.createObjectURL(res1);
                                        _this.part4mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                                        _this.selectedMp3FilesPart4 = undefined;
                                    });
                                });
                            });
                        }
                    }
                    this.examService.getAnswerParts(this.part4.partID).subscribe(function (ans) {
                        var checkAnswer = true;
                        var answers = ans;
                        answers.forEach(function (element) {
                            for (var i = 0; i < _this.answerPart4.length; i++) {
                                if (element.questionOrder === i + 71) {
                                    if (element.answer !== _this.answerPart4.charAt(i).toUpperCase()) {
                                        element.answer = _this.answerPart4.charAt(i).toUpperCase();
                                        checkAnswer = false;
                                    }
                                }
                            }
                        });
                        if (!checkAnswer) {
                            _this.examService.editAnswerPart(answers).subscribe(function (result) {
                            });
                        }
                        if (!checkAnswer || check_4) {
                            _this.selectedFilesPart4 = undefined;
                            _this.selectedMp3FilesPart4 = undefined;
                            alert('Part 4 successfully updated !!!');
                        }
                        else {
                            alert('Please change info to update for Part 4 !!!');
                        }
                    });
                }
                break;
            case 5:
                if (this.part5 === null) {
                    // this part has not been initialized
                    // check file type
                    this.valid.pdfPart5 = true;
                    this.message.pdfPart5 = '';
                    if (this.selectedFilesPart5 === undefined || this.selectedFilesPart5.length === 0) {
                        this.message.pdfPart5 = 'Please choose pdf file for part 5 !!!';
                        this.valid.pdfPart5 = false;
                    }
                    else if (this.selectedFilesPart5[0].type !== 'application/pdf') {
                        this.message.pdfPart5 = 'Only accept pdf file !!!';
                        this.valid.pdfPart5 = false;
                    }
                    // check answer
                    this.valid.answerPart5 = true;
                    this.message.answerPart5 = '';
                    var answerPart5Regex = new RegExp('^[abcdABCD]{40}$');
                    if (this.answerPart5 === undefined || this.answerPart5.trim().length === 0) {
                        this.message.answerPart5 = 'Please insert 40 answer for this part !!!';
                        this.valid.answerPart5 = false;
                    }
                    else if (!answerPart5Regex.test(this.answerPart5.trim())) {
                        this.message.answerPart5 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart5 = false;
                    }
                    if (!this.valid.pdfPart5 || !this.valid.answerPart5) {
                        return;
                    }
                    // upload file and create part 1
                    Promise.all([
                        // upload pdf and mp3 file
                        this.uploadfileService.pushFileToStorage(this.selectedFilesPart5[0])
                    ]).then(function (result) {
                        // create part object and set value
                        var part1 = {};
                        part1.examID = _this.exam.examID;
                        part1.partNo = 5;
                        part1.pdfsrc = result[0];
                        // add part in database
                        _this.addExamService.addReadingPart(part1).subscribe(function (readingPart) {
                            // create answert sheet for part
                            var answers = [];
                            for (var i = 0; i < 40; i++) {
                                var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                                answer.partID = readingPart.partID;
                                answer.questionOrder = i + 101;
                                answer.answer = _this.answerPart5.charAt(i).toUpperCase();
                                answers.push(answer);
                            }
                            _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                                _this.part5 = part1;
                                _this.examService.getPdfFiles(part1.pdfsrc).subscribe(function (res) {
                                    var src = URL.createObjectURL(res);
                                    _this.part5pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                });
                                _this.isPart5 = true;
                                _this.selectedFilesPart5 = undefined;
                                alert('Part 5 successfully created !!!');
                            });
                        });
                    });
                }
                else {
                    // check file type
                    this.valid.pdfPart5 = true;
                    this.message.pdfPart5 = '';
                    if (this.selectedFilesPart5 !== undefined) {
                        if (this.selectedFilesPart5.length > 0 && this.selectedFilesPart5[0].type !== 'application/pdf') {
                            this.message.pdfPart5 = 'Only accept pdf file !!!';
                            this.valid.pdfPart5 = false;
                        }
                    }
                    // check answer
                    this.valid.answerPart5 = true;
                    this.message.answerPart5 = '';
                    var answerPart5Regex = new RegExp('^[abcdABCD]{40}$');
                    if (this.answerPart5 === undefined || this.answerPart5.trim().length === 0) {
                        this.message.answerPart5 = 'Please insert 40 answer for this part !!!';
                        this.valid.answerPart5 = false;
                    }
                    else if (!answerPart5Regex.test(this.answerPart5.trim())) {
                        this.message.answerPart5 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart5 = false;
                    }
                    if (!this.valid.pdfPart5 || !this.valid.answerPart5) {
                        return;
                    }
                    var check_5 = false;
                    if (this.selectedFilesPart5 !== undefined) {
                        if (this.selectedFilesPart5.length > 0) {
                            check_5 = true;
                            this.uploadfileService.pushFileToStorage(this.selectedFilesPart5[0]).then(function (pdffile) {
                                _this.part5.pdfsrc = pdffile;
                                _this.examService.editReadingPart(_this.part5).subscribe(function (res) {
                                    _this.part5 = res;
                                    _this.examService.getPdfFiles(_this.part5.pdfsrc).subscribe(function (res1) {
                                        var src = URL.createObjectURL(res1);
                                        _this.part5pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                        _this.selectedFilesPart5 = undefined;
                                    });
                                });
                            });
                        }
                    }
                    this.examService.getAnswerParts(this.part5.partID).subscribe(function (ans) {
                        var checkAnswer = true;
                        var answers = ans;
                        answers.forEach(function (element) {
                            for (var i = 0; i < _this.answerPart5.length; i++) {
                                if (element.questionOrder === i + 101) {
                                    if (element.answer !== _this.answerPart5.charAt(i).toUpperCase()) {
                                        element.answer = _this.answerPart5.charAt(i).toUpperCase();
                                        checkAnswer = false;
                                    }
                                }
                            }
                        });
                        if (!checkAnswer) {
                            _this.examService.editAnswerPart(answers).subscribe(function (result) {
                            });
                        }
                        if (!checkAnswer || check_5) {
                            _this.selectedFilesPart5 = undefined;
                            alert('Part 5 successfully updated !!!');
                        }
                        else {
                            alert('Please change info to update for Part 5 !!!');
                        }
                    });
                }
                break;
            case 6:
                if (this.part6 === null) {
                    // this part has not been initialized
                    // check file type
                    this.valid.pdfPart6 = true;
                    this.message.pdfPart6 = '';
                    if (this.selectedFilesPart6 === undefined || this.selectedFilesPart6.length === 0) {
                        this.message.pdfPart6 = 'Please choose pdf file for part 6 !!!';
                        this.valid.pdfPart6 = false;
                    }
                    else if (this.selectedFilesPart6[0].type !== 'application/pdf') {
                        this.message.pdfPart6 = 'Only accept pdf file !!!';
                        this.valid.pdfPart6 = false;
                    }
                    // check answer
                    this.valid.answerPart6 = true;
                    this.message.answerPart6 = '';
                    var answerPart6Regex = new RegExp('^[abcdABCD]{12}$');
                    if (this.answerPart6 === undefined || this.answerPart6.trim().length === 0) {
                        this.message.answerPart6 = 'Please insert 12 answer for this part !!!';
                        this.valid.answerPart6 = false;
                    }
                    else if (!answerPart6Regex.test(this.answerPart6.trim())) {
                        this.message.answerPart6 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart6 = false;
                    }
                    if (!this.valid.pdfPart6 || !this.valid.answerPart6) {
                        return;
                    }
                    // upload file and create part 1
                    Promise.all([
                        // upload pdf and mp3 file
                        this.uploadfileService.pushFileToStorage(this.selectedFilesPart6[0])
                    ]).then(function (result) {
                        // create part object and set value
                        var part1 = {};
                        part1.examID = _this.exam.examID;
                        part1.partNo = 6;
                        part1.pdfsrc = result[0];
                        // add part in database
                        _this.addExamService.addReadingPart(part1).subscribe(function (readingPart) {
                            // create answert sheet for part
                            var answers = [];
                            for (var i = 0; i < 12; i++) {
                                var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                                answer.partID = readingPart.partID;
                                answer.questionOrder = i + 141;
                                answer.answer = _this.answerPart6.charAt(i).toUpperCase();
                                answers.push(answer);
                            }
                            _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                                _this.part6 = part1;
                                _this.examService.getPdfFiles(part1.pdfsrc).subscribe(function (res) {
                                    var src = URL.createObjectURL(res);
                                    _this.part6pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                });
                                _this.isPart6 = true;
                                _this.selectedFilesPart6 = undefined;
                                alert('Part 6 successfully created !!!');
                            });
                        });
                    });
                }
                else {
                    // check file type
                    this.valid.pdfPart6 = true;
                    this.message.pdfPart6 = '';
                    if (this.selectedFilesPart6 !== undefined) {
                        if (this.selectedFilesPart6.length > 0 && this.selectedFilesPart6[0].type !== 'application/pdf') {
                            this.message.pdfPart6 = 'Only accept pdf file !!!';
                            this.valid.pdfPart6 = false;
                        }
                    }
                    // check answer
                    this.valid.answerPart6 = true;
                    this.message.answerPart6 = '';
                    var answerPart6Regex = new RegExp('^[abcdABCD]{12}$');
                    if (this.answerPart6 === undefined || this.answerPart6.trim().length === 0) {
                        this.message.answerPart6 = 'Please insert 12 answer for this part !!!';
                        this.valid.answerPart6 = false;
                    }
                    else if (!answerPart6Regex.test(this.answerPart6.trim())) {
                        this.message.answerPart6 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart6 = false;
                    }
                    if (!this.valid.pdfPart6 || !this.valid.answerPart6) {
                        return;
                    }
                    var check_6 = false;
                    if (this.selectedFilesPart6 !== undefined) {
                        if (this.selectedFilesPart6.length > 0) {
                            check_6 = true;
                            this.uploadfileService.pushFileToStorage(this.selectedFilesPart6[0]).then(function (pdffile) {
                                _this.part6.pdfsrc = pdffile;
                                _this.examService.editReadingPart(_this.part6).subscribe(function (res) {
                                    _this.part6 = res;
                                    _this.examService.getPdfFiles(_this.part6.pdfsrc).subscribe(function (res1) {
                                        var src = URL.createObjectURL(res1);
                                        _this.part6pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                        _this.selectedFilesPart6 = undefined;
                                    });
                                });
                            });
                        }
                    }
                    this.examService.getAnswerParts(this.part6.partID).subscribe(function (ans) {
                        var checkAnswer = true;
                        var answers = ans;
                        answers.forEach(function (element) {
                            for (var i = 0; i < _this.answerPart6.length; i++) {
                                if (element.questionOrder === i + 101) {
                                    if (element.answer !== _this.answerPart6.charAt(i).toUpperCase()) {
                                        element.answer = _this.answerPart6.charAt(i).toUpperCase();
                                        checkAnswer = false;
                                    }
                                }
                            }
                        });
                        if (!checkAnswer) {
                            _this.examService.editAnswerPart(answers).subscribe(function (result) {
                            });
                        }
                        if (!checkAnswer || check_6) {
                            _this.selectedFilesPart6 = undefined;
                            alert('Part 6 successfully updated !!!');
                        }
                        else {
                            alert('Please change info to update for Part 6 !!!');
                        }
                    });
                }
                break;
            case 7:
                if (this.part7 === null) {
                    // this part has not been initialized
                    // check file type
                    this.valid.pdfPart7 = true;
                    this.message.pdfPart7 = '';
                    if (this.selectedFilesPart7 === undefined || this.selectedFilesPart7.length === 0) {
                        this.message.pdfPart7 = 'Please choose pdf file for part 7 !!!';
                        this.valid.pdfPart7 = false;
                    }
                    else if (this.selectedFilesPart7[0].type !== 'application/pdf') {
                        this.message.pdfPart7 = 'Only accept pdf file !!!';
                        this.valid.pdfPart7 = false;
                    }
                    // check answer
                    this.valid.answerPart7 = true;
                    this.message.answerPart7 = '';
                    var answerPart7Regex = new RegExp('^[abcdABCD]{48}$');
                    if (this.answerPart7 === undefined || this.answerPart7.trim().length === 0) {
                        this.message.answerPart7 = 'Please insert 48 answer for this part !!!';
                        this.valid.answerPart7 = false;
                    }
                    else if (!answerPart7Regex.test(this.answerPart7.trim())) {
                        this.message.answerPart7 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart7 = false;
                    }
                    if (!this.valid.pdfPart7 || !this.valid.answerPart7) {
                        return;
                    }
                    // upload file and create part 1
                    Promise.all([
                        // upload pdf and mp3 file
                        this.uploadfileService.pushFileToStorage(this.selectedFilesPart7[0])
                    ]).then(function (result) {
                        // create part object and set value
                        var part1 = {};
                        part1.examID = _this.exam.examID;
                        part1.partNo = 7;
                        part1.pdfsrc = result[0];
                        // add part in database
                        _this.addExamService.addReadingPart(part1).subscribe(function (readingPart) {
                            // create answert sheet for part
                            var answers = [];
                            for (var i = 0; i < 48; i++) {
                                var answer = new __WEBPACK_IMPORTED_MODULE_6__model_answer_part__["a" /* AnswerPart */];
                                answer.partID = readingPart.partID;
                                answer.questionOrder = i + 153;
                                answer.answer = _this.answerPart7.charAt(i).toUpperCase();
                                answers.push(answer);
                            }
                            _this.addExamService.addAnswer(answers).subscribe(function (answerPart) {
                                _this.part7 = part1;
                                _this.examService.getPdfFiles(part1.pdfsrc).subscribe(function (res) {
                                    var src = URL.createObjectURL(res);
                                    _this.part7pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                });
                                _this.isPart7 = true;
                                _this.selectedFilesPart7 = undefined;
                                alert('Part 7 successfully created !!!');
                            });
                        });
                    });
                }
                else {
                    // check file type
                    this.valid.pdfPart7 = true;
                    this.message.pdfPart7 = '';
                    if (this.selectedFilesPart7 !== undefined) {
                        if (this.selectedFilesPart7.length > 0 && this.selectedFilesPart7[0].type !== 'application/pdf') {
                            this.message.pdfPart7 = 'Only accept pdf file !!!';
                            this.valid.pdfPart7 = false;
                        }
                    }
                    // check answer
                    this.valid.answerPart7 = true;
                    this.message.answerPart7 = '';
                    var answerPart7Regex = new RegExp('^[abcdABCD]{48}$');
                    if (this.answerPart7 === undefined || this.answerPart7.trim().length === 0) {
                        this.message.answerPart7 = 'Please insert 48 answer for this part !!!';
                        this.valid.answerPart7 = false;
                    }
                    else if (!answerPart7Regex.test(this.answerPart7.trim())) {
                        this.message.answerPart7 = 'Only accept a,b,c,d answer!!!';
                        this.valid.answerPart7 = false;
                    }
                    if (!this.valid.pdfPart7 || !this.valid.answerPart7) {
                        return;
                    }
                    var check_7 = false;
                    if (this.selectedFilesPart7 !== undefined) {
                        if (this.selectedFilesPart7.length > 0) {
                            check_7 = true;
                            this.uploadfileService.pushFileToStorage(this.selectedFilesPart7[0]).then(function (pdffile) {
                                _this.part7.pdfsrc = pdffile;
                                _this.examService.editReadingPart(_this.part7).subscribe(function (res) {
                                    _this.part7 = res;
                                    _this.examService.getPdfFiles(_this.part7.pdfsrc).subscribe(function (res1) {
                                        var src = URL.createObjectURL(res1);
                                        _this.part7pdfsrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                                        _this.selectedFilesPart7 = undefined;
                                    });
                                });
                            });
                        }
                    }
                    this.examService.getAnswerParts(this.part7.partID).subscribe(function (ans) {
                        var checkAnswer = true;
                        var answers = ans;
                        answers.forEach(function (element) {
                            for (var i = 0; i < _this.answerPart7.length; i++) {
                                if (element.questionOrder === i + 153) {
                                    if (element.answer !== _this.answerPart7.charAt(i).toUpperCase()) {
                                        element.answer = _this.answerPart7.charAt(i).toUpperCase();
                                        checkAnswer = false;
                                    }
                                }
                            }
                        });
                        if (!checkAnswer) {
                            _this.examService.editAnswerPart(answers).subscribe(function (result) {
                            });
                        }
                        if (!checkAnswer || check_7) {
                            _this.selectedFilesPart7 = undefined;
                            alert('Part 7 successfully updated !!!');
                        }
                        else {
                            alert('Please change info to update for Part 7 !!!');
                        }
                    });
                }
                break;
            default: return;
        }
    };
    EditComponent.prototype.checkTime = function (exam) {
        var _this = this;
        this.testroomService.getTestRoomByexamID(exam.examID).subscribe(function (res) {
            var testRoom = res;
            if (testRoom.roomID !== null) {
                _this.testroomService.getCurrentTime().subscribe(function (time) {
                    var currentTime = new Date(time);
                    var startTime = new Date(testRoom.startTime);
                    if ((startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() === currentTime.getDate() &&
                        startTime.getHours() === currentTime.getHours() &&
                        startTime.getMinutes() <= currentTime.getMinutes())
                        ||
                            (startTime.getFullYear() === currentTime.getFullYear() &&
                                startTime.getMonth() === currentTime.getMonth() &&
                                startTime.getDate() === currentTime.getDate() &&
                                startTime.getHours() + 1 === currentTime.getHours())
                        ||
                            (startTime.getFullYear() === currentTime.getFullYear() &&
                                startTime.getMonth() === currentTime.getMonth() &&
                                startTime.getDate() === currentTime.getDate() &&
                                startTime.getHours() + 2 === currentTime.getHours() &&
                                startTime.getMinutes() >= currentTime.getMinutes())) {
                        alert('The exam that is being used for the session has started and you can not edit it !!!');
                        _this.router.navigate(['/admin/exam']);
                    }
                });
            }
        });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/admin/exam/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/admin/exam/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__node_modules_angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_exam_service__["a" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_2__services_uploadfile_service__["a" /* UploadfileService */],
            __WEBPACK_IMPORTED_MODULE_1__services_add_exam_service__["a" /* AddExamService */],
            __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__services_testroom_service__["a" /* TestroomService */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/admin/exam/exam.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/exam/exam.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/admin/exam/exam.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamComponent = /** @class */ (function () {
    function ExamComponent() {
    }
    ExamComponent.prototype.ngOnInit = function () {
    };
    ExamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-exam',
            template: __webpack_require__("./src/app/admin/exam/exam.component.html"),
            styles: [__webpack_require__("./src/app/admin/exam/exam.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamComponent);
    return ExamComponent;
}());



/***/ }),

/***/ "./src/app/admin/exam/show/show.component.css":
/***/ (function(module, exports) {

module.exports = ".errors {\r\n  background-color: yellow !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/exam/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper hold-transition skin-blue sidebar-mini\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <app-sidebar></app-sidebar>\r\n\r\n  <div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n      <h1>\r\n        Exam List\r\n        <small>Control panel</small>\r\n      </h1>\r\n      <ol class=\"breadcrumb\">\r\n        <li>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-dashboard\"></i> Home</a>\r\n        </li>\r\n        <li class=\"active\">Exam</li>\r\n      </ol>\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n      <!-- Small boxes (Stat box) -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <a routerLink=\"../create\" class=\"btn\">Create New Exam</a>\r\n          <div class=\"box\">\r\n            <div class=\"box-header\">\r\n              <h3 class=\"box-title\">Exam List</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <div class=\"box-body\">\r\n              <table class=\"table table-bordered table-striped\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>No</th>\r\n                    <th>ExamID</th>\r\n                    <th>Status</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let exam of pagedItems; let i = index\" [attr.data-index]=\"i\" [ngClass]=\"{'errors': exam.error && exam.status}\">\r\n                    <td>{{pager.currentPage==1?i+1:(pager.currentPage-1)+\"\"+(i+1)}}</td>\r\n                    <td>{{exam.examID}}</td>\r\n                    <td>{{exam.isTest==='true'?\"use for test\":\"use for training\"}}</td>\r\n                    <td>\r\n                      <a routerLink=\"../edit/{{exam.examID}}\" *ngIf=\"exam.error && exam.status\" style=\"color: #f12d15; margin-right: 10px;\">\r\n                        <span class=\"fa fa-exclamation-triangle\"></span>\r\n                      </a>\r\n                      <a style=\"margin-right: 10px;\" routerLink=\"../test/{{exam.examID}}\" *ngIf=\"!exam.error && exam.status\">\r\n                        <span class=\"fa fa-eye\"></span>\r\n                      </a>\r\n                      <a style=\"margin-right: 10px;\" routerLink=\"../edit/{{exam.examID}}\" *ngIf=\"!exam.error && exam.status\">\r\n                        <span class=\"fa fa-pencil\"></span>\r\n                      </a>\r\n                      <a style=\"margin-right: 10px;\" (click)=\"deleteExam(exam)\" *ngIf=\"exam.status\">\r\n                        <span class=\"fa fa-trash-o\"></span>\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"pager.totalItems <= 0\">\r\n                    <td colspan=\"4\" style=\"text-align: center;\">No data available in table.</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-5\">\r\n                  <div class=\"tableInfo\">Showing {{pager.startIndex\r\n                    <0?0:(pager.startIndex + 1)}} to {{pager.endIndex + 1}} of {{pager.totalItems}} entries</div>\r\n                  </div>\r\n                  <div class=\"col-sm-7\">\r\n                    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a (click)=\"setPage(1)\">First</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                      </li>\r\n                      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                        <a (click)=\"setPage(page)\">{{page}}</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- /.box-body -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- /.row -->\r\n\r\n    </section>\r\n    <!-- /.content -->\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/admin/exam/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_testroom_service__ = __webpack_require__("./src/app/services/testroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowComponent = /** @class */ (function () {
    function ShowComponent(examService, pagerService, testroomService) {
        this.examService = examService;
        this.pagerService = pagerService;
        this.testroomService = testroomService;
        // pager object
        this.pager = {};
    }
    ShowComponent.prototype.ngOnInit = function () {
        this.getExams();
    };
    ShowComponent.prototype.getExams = function () {
        var _this = this;
        this.examService.getExams().subscribe(function (exams) {
            _this.listExams = exams;
            if (_this.listExams.length > 0) {
                _this.listExams.forEach(function (element) {
                    _this.checkTime(element);
                    Promise.all([
                        // upload pdf and mp3 file
                        _this.examService.getListeningParts(element.examID),
                        _this.examService.getReadingParts(element.examID)
                    ]).then(function (res) {
                        res[0].forEach(function (e) {
                            if (e.length < 4) {
                                element.error = true;
                            }
                        });
                        res[1].forEach(function (e) {
                            if (e.length < 3) {
                                element.error = true;
                            }
                        });
                    });
                });
            }
            _this.setPage(1);
        });
    };
    ShowComponent.prototype.checkTime = function (exam) {
        var _this = this;
        exam.status = true;
        this.testroomService.getTestRoomByexamID(exam.examID).subscribe(function (res) {
            var testRoom = res;
            if (testRoom.roomID !== null) {
                _this.testroomService.getCurrentTime().subscribe(function (time) {
                    var currentTime = new Date(time);
                    var startTime = new Date(testRoom.startTime);
                    if ((startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() === currentTime.getDate() &&
                        startTime.getHours() === currentTime.getHours() &&
                        startTime.getMinutes() <= currentTime.getMinutes())
                        ||
                            (startTime.getFullYear() === currentTime.getFullYear() &&
                                startTime.getMonth() === currentTime.getMonth() &&
                                startTime.getDate() === currentTime.getDate() &&
                                startTime.getHours() + 1 === currentTime.getHours())
                        ||
                            (startTime.getFullYear() === currentTime.getFullYear() &&
                                startTime.getMonth() === currentTime.getMonth() &&
                                startTime.getDate() === currentTime.getDate() &&
                                startTime.getHours() + 2 === currentTime.getHours() &&
                                startTime.getMinutes() >= currentTime.getMinutes())) {
                        exam.status = false;
                    }
                });
            }
        });
    };
    ShowComponent.prototype.deleteExam = function (exam) {
        var _this = this;
        if (confirm('Do you want to delete it ?')) {
            this.checkTime(exam);
            if (exam.status) {
                this.examService.deleteExam(exam.examID).subscribe(function (result) {
                    _this.getExams();
                });
            }
            else {
                alert('The exam that is being used for the session has started and you can not delete it !!!');
            }
        }
    };
    ShowComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.listExams.length, page);
        // get current page of items
        this.pagedItems = this.listExams.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-show',
            template: __webpack_require__("./src/app/admin/exam/show/show.component.html"),
            styles: [__webpack_require__("./src/app/admin/exam/show/show.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_exam_service__["a" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_1__services_pager_service__["a" /* PagerService */],
            __WEBPACK_IMPORTED_MODULE_0__services_testroom_service__["a" /* TestroomService */]])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ }),

/***/ "./src/app/admin/exam/test/test.component.css":
/***/ (function(module, exports) {

module.exports = ".show {\r\n  display: inline-block !important;\r\n}\r\n\r\n.point {\r\n  width: 40px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n}\r\n\r\n.totalPoint {\r\n  width: 70px;\r\n  font-size: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.form-sheet {\r\n  margin-top: 135px !important;\r\n}\r\n\r\n.fixtop {\r\n  margin-top: 58px !important;\r\n}\r\n\r\n.gdlr-page-title-wrapper {\r\n  padding-top: 20px;\r\n}\r\n\r\naudio {\r\n  width: 900px;\r\n}\r\n\r\n#test-mp3 {\r\n  margin-left: 65px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/exam/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper hold-transition skin-blue sidebar-mini\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <app-sidebar></app-sidebar>\r\n\r\n  <div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n      <h1>\r\n        Exam\r\n        <small>TEST</small>\r\n      </h1>\r\n      <ol class=\"breadcrumb\">\r\n        <li>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-dashboard\"></i> Home</a>\r\n        </li>\r\n        <li class=\"active\">Exam</li>\r\n      </ol>\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n      <!-- Small boxes (Stat box) -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-10 col-xs-offset-1\">\r\n\r\n          <!-- START TOEIC FULL TEST CONTENT-->\r\n          <div *ngIf=\"!isSubmit\">\r\n            <div class=\"gdlr-page-title-wrapper\">\r\n              <div class=\"gdlr-page-title-container\">\r\n                <h1 class=\"gdlr-page-title\">TEST EXAM – {{exam.examID}}</h1>\r\n              </div>\r\n            </div>\r\n            <div class=\"container-fluid\">\r\n              <div id=\"test-time\">{{timeCountdown}}</div>\r\n\r\n              <form #answerForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(answerForm)\">\r\n                <!-- SHOW PART 1 -->\r\n                <div class=\"row hidden\" [ngClass]=\"{ 'show': count === 1 }\">\r\n                  <div class=\"col-md-9\">\r\n                    <br>\r\n                    <div id=\"test-mp3\">\r\n                      <audio controls preload=\"auto\" [src]=\"part1.mp3src\"></audio>\r\n                    </div>\r\n                    <div class=\"test-pdf\">\r\n                      <div class=\"part-title\">\r\n                        <h3>PART {{part1.partNo}}</h3>\r\n                      </div>\r\n                      <pdf-viewer *ngIf=\"count == 1\" [src]=\"part1.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-sheet\">\r\n                      <div class=\"form-title\">\r\n                        <h4>ANSWER SHEET</h4>\r\n                      </div>\r\n                      <div class=\"form-answer\">\r\n                        <ul>\r\n                          <li *ngFor=\"let ans of answers1\">\r\n                            <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                              <span class=\"label-text\">A</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                              <span class=\"label-text\">B</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                              <span class=\"label-text\">C</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                              <span class=\"label-text\">D</span>\r\n                            </label>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- SHOW PART 2-->\r\n                <div class=\"row hidden\" [ngClass]=\"{ 'show': count === 2 }\">\r\n                  <div class=\"col-md-9\">\r\n                    <br>\r\n                    <div id=\"test-mp3\">\r\n                      <audio controls preload=\"auto\" [src]=\"part2.mp3src\"></audio>\r\n                    </div>\r\n                    <div class=\"test-pdf\">\r\n                      <div class=\"part-title\">\r\n                        <h3>PART {{part2.partNo}}</h3>\r\n                      </div>\r\n                      <pdf-viewer *ngIf=\"count == 2\" [src]=\"part2.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-sheet\">\r\n                      <div class=\"form-title\">\r\n                        <h4>ANSWER SHEET</h4>\r\n                      </div>\r\n                      <div class=\"form-answer\">\r\n                        <ul>\r\n                          <li *ngFor=\"let ans of answers2\">\r\n                            <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                              <span class=\"label-text\">A</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                              <span class=\"label-text\">B</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                              <span class=\"label-text\">C</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                              <span class=\"label-text\">D</span>\r\n                            </label>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- SHOW PART 3-->\r\n                <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 3 }\">\r\n                  <div class=\"col-md-9\">\r\n                    <br>\r\n                    <div id=\"test-mp3\">\r\n                      <audio controls preload=\"auto\" [src]=\"part3.mp3src\"></audio>\r\n                    </div>\r\n                    <div class=\"test-pdf\">\r\n                      <div class=\"part-title\">\r\n                        <h3>PART {{part3.partNo}}</h3>\r\n                      </div>\r\n                      <pdf-viewer *ngIf=\"count == 3\" [src]=\"part3.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-sheet\">\r\n                      <div class=\"form-title\">\r\n                        <h4>ANSWER SHEET</h4>\r\n                      </div>\r\n                      <div class=\"form-answer\">\r\n                        <ul>\r\n                          <li *ngFor=\"let ans of answers3\">\r\n                            <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                              <span class=\"label-text\">A</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                              <span class=\"label-text\">B</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                              <span class=\"label-text\">C</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                              <span class=\"label-text\">D</span>\r\n                            </label>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- SHOW PART 4-->\r\n                <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 4 }\">\r\n                  <div class=\"col-md-9\">\r\n                    <br>\r\n                    <div id=\"test-mp3\">\r\n                      <audio controls preload=\"auto\" [src]=\"part4.mp3src\"></audio>\r\n                    </div>\r\n                    <div class=\"test-pdf\">\r\n                      <div class=\"part-title\">\r\n                        <h3>PART {{part4.partNo}}</h3>\r\n                      </div>\r\n                      <pdf-viewer *ngIf=\"count == 4\" [src]=\"part4.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-sheet\">\r\n                      <div class=\"form-title\">\r\n                        <h4>ANSWER SHEET</h4>\r\n                      </div>\r\n                      <div class=\"form-answer\">\r\n                        <ul>\r\n                          <li *ngFor=\"let ans of answers4\">\r\n                            <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                              <span class=\"label-text\">A</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                              <span class=\"label-text\">B</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                              <span class=\"label-text\">C</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                              <span class=\"label-text\">D</span>\r\n                            </label>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- SHOW PART 5-->\r\n                <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 5 }\">\r\n                  <div class=\"col-md-9\">\r\n                    <div class=\"test-pdf\">\r\n                      <div class=\"part-title\">\r\n                        <h3>PART {{part5.partNo}}</h3>\r\n                      </div>\r\n                      <pdf-viewer *ngIf=\"count == 5\" [src]=\"part5.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-sheet fixtop\">\r\n                      <div class=\"form-title\">\r\n                        <h4>ANSWER SHEET</h4>\r\n                      </div>\r\n                      <div class=\"form-answer\">\r\n                        <ul>\r\n                          <li *ngFor=\"let ans of answers5\">\r\n                            <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                              <span class=\"label-text\">A</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                              <span class=\"label-text\">B</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                              <span class=\"label-text\">C</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                              <span class=\"label-text\">D</span>\r\n                            </label>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- SHOW PART 6-->\r\n                <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 6 }\">\r\n                  <div class=\"col-md-9\">\r\n                    <div class=\"test-pdf\">\r\n                      <div class=\"part-title\">\r\n                        <h3>PART {{part6.partNo}}</h3>\r\n                      </div>\r\n                      <pdf-viewer *ngIf=\"count == 6\" [src]=\"part6.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-sheet fixtop\">\r\n                      <div class=\"form-title\">\r\n                        <h4>ANSWER SHEET</h4>\r\n                      </div>\r\n                      <div class=\"form-answer\">\r\n                        <ul>\r\n                          <li *ngFor=\"let ans of answers6\">\r\n                            <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                              <span class=\"label-text\">A</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                              <span class=\"label-text\">B</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                              <span class=\"label-text\">C</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                              <span class=\"label-text\">D</span>\r\n                            </label>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- SHOW PART 7-->\r\n                <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 7 }\">\r\n                  <div class=\"col-md-9\">\r\n                    <div class=\"test-pdf\">\r\n                      <div class=\"part-title\">\r\n                        <h3>PART {{part7.partNo}}</h3>\r\n                      </div>\r\n                      <pdf-viewer *ngIf=\"count == 7\" [src]=\"part7.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-sheet fixtop\">\r\n                      <div class=\"form-title\">\r\n                        <h4>ANSWER SHEET</h4>\r\n                      </div>\r\n                      <div class=\"form-answer\">\r\n                        <ul>\r\n                          <li *ngFor=\"let ans of answers7\">\r\n                            <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                              <span class=\"label-text\">A</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                              <span class=\"label-text\">B</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                              <span class=\"label-text\">C</span>\r\n                            </label>\r\n                            <label>\r\n                              <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                              <span class=\"label-text\">D</span>\r\n                            </label>\r\n                          </li>\r\n                        </ul>\r\n                        <input type=\"submit\" class=\"gdlr-button small\" value=\"submit\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n\r\n            <div class=\"test-page\">\r\n              <ul class=\"pager\">\r\n                <li>\r\n                  <button *ngIf=\"prebtn\" (click)=\"prePart()\">Previous</button>\r\n                </li>\r\n                <li>\r\n                  <select class=\"custom-select\" style=\"color: black\" name=\"selectPart\" [(ngModel)]=\"selectCnt\" (change)=\"changePart()\">\r\n                    <option value=\"1\">Part 1</option>\r\n                    <option value=\"2\">Part 2</option>\r\n                    <option value=\"3\">Part 3</option>\r\n                    <option value=\"4\">Part 4</option>\r\n                    <option value=\"5\">Part 5</option>\r\n                    <option value=\"6\">Part 6</option>\r\n                    <option value=\"7\">Part 7</option>\r\n                  </select>\r\n                </li>\r\n                <li>\r\n                  <button *ngIf=\"nextbtn\" (click)=\"nextPart()\">Next</button>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <!-- /.END TOEIC FULL TEST CONTENT -->\r\n\r\n          <!-- SHOW RESULT TOEIC FULL TEST CONTENT -->\r\n          <div *ngIf=\"isSubmit\">\r\n            <div class=\"gdlr-page-title-wrapper\">\r\n              <div class=\"gdlr-page-title-container\">\r\n                <h1 class=\"gdlr-page-title\">TEST EXAM – FULL TEST</h1>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"content-wrapperWeb\">\r\n              <div class=\"gdlr-item gdlr-content-item\">\r\n                <table class=\"tb\">\r\n                  <tr>\r\n                    <td>\r\n                      <div class=\"tb-title\">\r\n                        <h4>FULL NAME</h4>\r\n                      </div>\r\n                      <div class=\"tb-content\">{{testResult.username}}</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"tb-label\">\r\n                        <span>LISTENING</span>\r\n                      </div>\r\n                      <div class=\"tb-p\">YOUR SCORE</div>\r\n                      <div class=\"tb-score\">\r\n                        <span class=\"tb-score-icon\">\r\n                          <label class=\"point\">{{testResult.listenPoint}}</label>\r\n                        </span>\r\n                      </div>\r\n                    </td>\r\n                    <td rowspan=\"2\">\r\n                      <div class=\"tb-total\">\r\n                        <span>TOTAL SCORE</span>\r\n                      </div>\r\n                      <div class=\"tb-total-score\">\r\n                        <span class=\"tb-total-score-icon\">\r\n                          <label class=\"totalPoint\">{{testResult.testScore}}</label>\r\n                        </span>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <div class=\"tb-title\">\r\n                        <h4>TEST DATE</h4>\r\n                      </div>\r\n                      <div class=\"tb-content\">{{testResult.dateTest | date:'medium' }}</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"tb-label\">\r\n                        <span>READING</span>\r\n                      </div>\r\n                      <div class=\"tb-p\">YOUR SCORE</div>\r\n                      <div class=\"tb-score\">\r\n                        <span class=\"tb-score-icon\">\r\n                          <label class=\"point\">{{testResult.readPoint}}</label>\r\n                        </span>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /.SHOW RESULT TOEIC FULL TEST CONTENT -->\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- /.row -->\r\n\r\n    </section>\r\n    <!-- /.content -->\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/exam/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestComponent = /** @class */ (function () {
    function TestComponent(examService, route, router, sanitizer) {
        this.examService = examService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.isSubmit = false;
        this.nextbtn = true;
        this.prebtn = false;
        this.count = 1;
        this.selectCnt = '1';
        this.audio1 = new Audio();
        this.audio2 = new Audio();
        this.audio3 = new Audio();
        this.audio4 = new Audio();
        this.exam = {};
        this.part1 = {};
        this.part2 = {};
        this.part3 = {};
        this.part4 = {};
        this.part5 = {};
        this.part6 = {};
        this.part7 = {};
        this.answers1 = [];
        this.answers2 = [];
        this.answers3 = [];
        this.answers4 = [];
        this.answers5 = [];
        this.answers6 = [];
        this.answers7 = [];
        this.testResult = {};
    }
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.numbers = Array(200).fill(1).map(function (x, i) { return i + 1; });
        // Set answer for part 1
        this.numbers1 = this.numbers.slice(0, 10);
        for (var i = 0; i < this.numbers1.length; i++) {
            var ans = {};
            ans.name = this.numbers1[i];
            ans.value = '';
            this.answers1.push(ans);
        }
        // Set answer for part 2
        this.numbers2 = this.numbers.slice(10, 40);
        for (var i = 0; i < this.numbers2.length; i++) {
            var ans = {};
            ans.name = this.numbers2[i];
            ans.value = '';
            this.answers2.push(ans);
        }
        // Set answer for part 3
        this.numbers3 = this.numbers.slice(40, 70);
        for (var i = 0; i < this.numbers3.length; i++) {
            var ans = {};
            ans.name = this.numbers3[i];
            ans.value = '';
            this.answers3.push(ans);
        }
        // Set answer for part 4
        this.numbers4 = this.numbers.slice(70, 100);
        for (var i = 0; i < this.numbers4.length; i++) {
            var ans = {};
            ans.name = this.numbers4[i];
            ans.value = '';
            this.answers4.push(ans);
        }
        // Set answer for part 5
        this.numbers5 = this.numbers.slice(100, 140);
        for (var i = 0; i < this.numbers5.length; i++) {
            var ans = {};
            ans.name = this.numbers5[i];
            ans.value = '';
            this.answers5.push(ans);
        }
        // Set answer for part 6
        this.numbers6 = this.numbers.slice(140, 152);
        for (var i = 0; i < this.numbers6.length; i++) {
            var ans = {};
            ans.name = this.numbers6[i];
            ans.value = '';
            this.answers6.push(ans);
        }
        // Set answer for part 7
        this.numbers7 = this.numbers.slice(152, 200);
        for (var i = 0; i < this.numbers7.length; i++) {
            var ans = {};
            ans.name = this.numbers7[i];
            ans.value = '';
            this.answers7.push(ans);
        }
        var id = this.route.snapshot.paramMap.get('id');
        this.examService.getExamByExamID(id).subscribe(function (exam) {
            _this.exam = exam;
            if (_this.exam.examID === null) {
                _this.router.navigate(['/admin/exam']);
            }
            else {
                _this.starttest();
            }
        });
    };
    TestComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
        this.audio1.pause();
        this.audio2.pause();
        this.audio3.pause();
        this.audio4.pause();
    };
    TestComponent.prototype.changePart = function () {
        this.nextbtn = true;
        this.prebtn = true;
        switch (this.selectCnt) {
            case '1':
                this.count = 1;
                this.prebtn = false;
                break;
            case '2':
                this.count = 2;
                break;
            case '3':
                this.count = 3;
                break;
            case '4':
                this.count = 4;
                break;
            case '5':
                this.count = 5;
                break;
            case '6':
                this.count = 6;
                break;
            case '7':
                this.count = 7;
                this.nextbtn = false;
                break;
            default:
                this.count = 1;
                break;
        }
    };
    TestComponent.prototype.startTime = function () {
        var _this = this;
        var timer2 = '120:00';
        this.interval = setInterval(function () {
            var timer = timer2.split(':');
            // by parsing integer, I avoid all extra string processing
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? 0 + seconds : seconds;
            if (minutes <= 0 && seconds <= 0) {
                clearInterval(_this.interval);
                _this.onFormSubmit();
            }
            // minutes = (minutes < 10) ?  minutes : minutes;
            var secondString = '';
            secondString = (seconds < 0) ? '59' : seconds.toString();
            secondString = (seconds < 10) ? '0' + seconds : seconds.toString();
            _this.timeCountdown = minutes + ':' + secondString;
            timer2 = minutes + ':' + seconds;
        }, 1000);
    };
    TestComponent.prototype.starttest = function () {
        var _this = this;
        Promise.all([
            this.examService.getListeningParts(this.exam.examID),
            this.examService.getReadingParts(this.exam.examID)
        ])
            .then(function (listPart) {
            // tslint:disable-next-line:no-shadowed-variable
            listPart[0].forEach(function (element) {
                if (element.length < 4) {
                    _this.starttest();
                }
                else {
                    element.forEach(function (listeningPart) {
                        if (listeningPart.partNo === 1) {
                            _this.part1 = listeningPart;
                            _this.examService.getPdfFiles(_this.part1.pdfsrc).subscribe(function (res) {
                                _this.part1.pdfsrc = URL.createObjectURL(res);
                            });
                            _this.examService.getMp3Files(_this.part1.mp3src).subscribe(function (res) {
                                var src = URL.createObjectURL(res);
                                _this.part1.mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                            });
                        }
                        if (listeningPart.partNo === 2) {
                            _this.part2 = listeningPart;
                            _this.examService.getPdfFiles(_this.part2.pdfsrc).subscribe(function (res) {
                                _this.part2.pdfsrc = URL.createObjectURL(res);
                            });
                            _this.examService.getMp3Files(_this.part2.mp3src).subscribe(function (res) {
                                var src = URL.createObjectURL(res);
                                _this.part2.mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                            });
                        }
                        if (listeningPart.partNo === 3) {
                            _this.part3 = listeningPart;
                            _this.examService.getPdfFiles(_this.part3.pdfsrc).subscribe(function (res) {
                                _this.part3.pdfsrc = URL.createObjectURL(res);
                            });
                            _this.examService.getMp3Files(_this.part3.mp3src).subscribe(function (res) {
                                var src = URL.createObjectURL(res);
                                _this.part3.mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                            });
                        }
                        if (listeningPart.partNo === 4) {
                            _this.part4 = listeningPart;
                            _this.examService.getPdfFiles(_this.part4.pdfsrc).subscribe(function (res) {
                                _this.part4.pdfsrc = URL.createObjectURL(res);
                            });
                            _this.examService.getMp3Files(_this.part4.mp3src).subscribe(function (res) {
                                var src = URL.createObjectURL(res);
                                _this.part4.mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                            });
                        }
                    });
                }
            }).then(function (result) {
                listPart[1].forEach(function (element) {
                    if (element.length < 3) {
                        _this.starttest();
                    }
                    else {
                        element.forEach(function (readingPart) {
                            if (readingPart.partNo === 5) {
                                _this.part5 = readingPart;
                                _this.examService.getPdfFiles(_this.part5.pdfsrc).subscribe(function (res) {
                                    _this.part5.pdfsrc = URL.createObjectURL(res);
                                });
                            }
                            if (readingPart.partNo === 6) {
                                _this.part6 = readingPart;
                                _this.examService.getPdfFiles(_this.part6.pdfsrc).subscribe(function (res) {
                                    _this.part6.pdfsrc = URL.createObjectURL(res);
                                });
                            }
                            if (readingPart.partNo === 7) {
                                _this.part7 = readingPart;
                                _this.examService.getPdfFiles(_this.part7.pdfsrc).subscribe(function (res) {
                                    _this.part7.pdfsrc = URL.createObjectURL(res);
                                });
                            }
                        });
                    }
                    clearInterval(_this.interval);
                    _this.startTime();
                });
            });
        });
        // end get exam
    };
    TestComponent.prototype.nextPart = function () {
        this.nextbtn = true;
        this.prebtn = true;
        this.count += 1;
        this.selectCnt = this.count.toString();
        if (this.count === 7) {
            this.nextbtn = false;
        }
    };
    TestComponent.prototype.prePart = function () {
        this.nextbtn = true;
        this.prebtn = true;
        this.count -= 1;
        this.selectCnt = this.count.toString();
        if (this.count === 1) {
            this.prebtn = false;
        }
    };
    TestComponent.prototype.onFormSubmit = function () {
        var _this = this;
        this.audio1.pause();
        this.audio2.pause();
        this.audio3.pause();
        this.audio4.pause();
        clearInterval(this.interval);
        Promise.all([
            this.examService.getAnswerParts(this.part1.partID),
            this.examService.getAnswerParts(this.part2.partID),
            this.examService.getAnswerParts(this.part3.partID),
            this.examService.getAnswerParts(this.part4.partID),
            this.examService.getAnswerParts(this.part5.partID),
            this.examService.getAnswerParts(this.part6.partID),
            this.examService.getAnswerParts(this.part7.partID)
        ]).then(function (result) {
            var total = 0;
            var readTotal = 0;
            // tslint:disable-next-line:no-shadowed-variable
            result[0].forEach(function (element) {
                element.forEach(function (ans) {
                    _this.answers1.forEach(function (ans1) {
                        if (ans.questionOrder === ans1.name) {
                            if (ans.answer === ans1.value) {
                                total += 1;
                            }
                        }
                    });
                });
                return total;
            }).then(function (res) {
                result[1].forEach(function (e) {
                    e.forEach(function (ans) {
                        _this.answers2.forEach(function (ans1) {
                            if (ans.questionOrder === ans1.name) {
                                if (ans.answer === ans1.value) {
                                    total += 1;
                                }
                            }
                        });
                    });
                    return total;
                }).then(function (res1) {
                    result[2].forEach(function (e) {
                        e.forEach(function (ans) {
                            _this.answers3.forEach(function (ans1) {
                                if (ans.questionOrder === ans1.name) {
                                    if (ans.answer === ans1.value) {
                                        total += 1;
                                    }
                                }
                            });
                        });
                        return total;
                    }).then(function (res2) {
                        result[3].forEach(function (e) {
                            e.forEach(function (ans) {
                                _this.answers4.forEach(function (ans1) {
                                    if (ans.questionOrder === ans1.name) {
                                        if (ans.answer === ans1.value) {
                                            total += 1;
                                        }
                                    }
                                });
                            });
                            return total;
                        }).then(function (res3) {
                            result[4].forEach(function (e) {
                                e.forEach(function (ans) {
                                    _this.answers5.forEach(function (ans1) {
                                        if (ans.questionOrder === ans1.name) {
                                            if (ans.answer === ans1.value) {
                                                readTotal += 1;
                                            }
                                        }
                                    });
                                });
                                return readTotal;
                            }).then(function (res4) {
                                result[5].forEach(function (e) {
                                    e.forEach(function (ans) {
                                        _this.answers6.forEach(function (ans1) {
                                            if (ans.questionOrder === ans1.name) {
                                                if (ans.answer === ans1.value) {
                                                    readTotal += 1;
                                                }
                                            }
                                        });
                                    });
                                    return readTotal;
                                }).then(function (res5) {
                                    result[6].forEach(function (e) {
                                        e.forEach(function (ans) {
                                            _this.answers7.forEach(function (ans1) {
                                                if (ans.questionOrder === ans1.name) {
                                                    if (ans.answer === ans1.value) {
                                                        readTotal += 1;
                                                    }
                                                }
                                            });
                                        });
                                        _this.testResult.username = _this.currentUser.username;
                                        _this.testResult.examID = _this.exam.examID;
                                        _this.testResult.dateTest = new Date();
                                        _this.testResult.readCorrect = readTotal;
                                        _this.testResult.listenCorrect = total;
                                        Promise.all([
                                            _this.examService.getReadingPoint(readTotal),
                                            _this.examService.getListeningPoint(total)
                                        ]).then(function (point) {
                                            var readingPoint = 0;
                                            point[0].forEach(function (readPoint) {
                                                _this.testResult.readPoint = readPoint;
                                                readingPoint = readPoint;
                                                return readingPoint;
                                            }).then(function (r) {
                                                point[1].forEach(function (listenPoint) {
                                                    _this.testResult.listenPoint = listenPoint;
                                                    _this.testResult.testScore = readingPoint + listenPoint;
                                                    _this.isSubmit = true;
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("./src/app/admin/exam/test/test.component.html"),
            styles: [__webpack_require__("./src/app/admin/exam/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_exam_service__["a" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_platform_browser__["b" /* DomSanitizer */]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/admin/forum/createforum/createforum.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/forum/createforum/createforum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper hold-transition skin-blue sidebar-mini\">\r\n\r\n    <app-header></app-header>\r\n  \r\n    <app-sidebar></app-sidebar>\r\n  \r\n    <div class=\"content-wrapper\">\r\n      <!-- Content Header (Page header) -->\r\n      <section class=\"content-header\">\r\n        <h1>\r\n          Forum\r\n          <small>Create New Forum</small>\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-dashboard\"></i> Home</a>\r\n          </li>\r\n          <li class=\"active\">Forum</li>\r\n        </ol>\r\n      </section>\r\n  \r\n      <!-- Main content -->\r\n      <section class=\"content\">\r\n        <!-- Small boxes (Stat box) -->\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8\">\r\n            <div class=\"box box-primary\">\r\n              <div class=\"box-header with-border\">\r\n                <h3 class=\"box-title\">Create Forum</h3>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <!-- form start -->\r\n              <form role=\"form\" (submit)=\"addRoom(currentUser)\">\r\n                <div class=\"box-body\">\r\n                  <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.roomID }\">\r\n                    <label>Forum ID</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Forum ID\" [(ngModel)]=\"room.roomID\" name=\"roomID\">\r\n                    <div class=\"help-block with-errors\" *ngIf=\"!valid.roomID\">\r\n                      {{message.roomID}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.name }\">\r\n                    <label for=\"name\">Subject:</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter subject\" [(ngModel)]=\"room.name\"\r\n                        #name=\"ngModel\">\r\n                    <div class=\"help-block with-errors\" *ngIf=\"!valid.name\">\r\n                        {{message.name}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.post }\">\r\n                      <label for=\"post\">Post:</label>\r\n                      \r\n                      <div id='editor' name=\"post\" [froalaEditor] [(froalaModel)]=\"room.post\"></div>\r\n                      <div class=\"help-block with-errors\" *ngIf=\"!valid.post\">\r\n                          {{message.post}}\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"box-footer\">\r\n                    <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\">\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <!-- /.box -->\r\n          </div>\r\n        </div>\r\n        <!-- /.row -->\r\n  \r\n      </section>\r\n      <!-- /.content -->\r\n    </div>\r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/admin/forum/createforum/createforum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateforumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_discussionroom_service__ = __webpack_require__("./src/app/services/discussionroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateforumComponent = /** @class */ (function () {
    function CreateforumComponent(discussionroomService, router) {
        this.discussionroomService = discussionroomService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.room = {};
        this.valid = {};
        this.message = {};
    }
    CreateforumComponent.prototype.ngOnInit = function () {
        this.valid.roomID = true;
        this.valid.name = true;
        this.valid.post = true;
    };
    CreateforumComponent.prototype.addRoom = function (user) {
        var _this = this;
        this.valid.roomID = true;
        this.valid.name = true;
        this.valid.post = true;
        this.message.roomID = '';
        var roomIDRegex = new RegExp('^[a-zA-Z0-9]{5,15}$');
        if (this.room.roomID === undefined || this.room.roomID.trim().length === 0) {
            this.message.roomID = 'RoomID can not be blank !!!';
            this.valid.roomID = false;
        }
        else if (this.room.roomID.trim().length < 4) {
            this.message.roomID = 'RoomID must be more than 3 characters !!!';
            this.valid.roomID = false;
        }
        else if (this.room.roomID.trim().length > 15) {
            this.message.roomID = 'RoomID must be less than 15 characters !!!';
            this.valid.roomID = false;
        }
        else if (!roomIDRegex.test(this.room.roomID.trim())) {
            this.message.roomID = 'RoomID only contains letters and numbers !!!';
            this.valid.roomID = false;
        }
        if (this.room.name === undefined || this.room.name.trim().length === 0) {
            this.message.name = 'Name can not be blank !!!';
            this.valid.name = false;
        }
        else if (this.room.name.trim().length < 10) {
            this.message.name = 'Name must be more than 10 characters !!!';
            this.valid.name = false;
        }
        else if (this.room.name.trim().length > 50) {
            this.message.name = 'RoomID must be less than 50 characters !!!';
            this.valid.name = false;
        }
        if (this.room.post === undefined || this.room.post.trim().length === 0) {
            this.message.post = 'Post can not be blank !!!';
            this.valid.post = false;
        }
        else if (this.room.post.trim().length < 15) {
            this.message.post = 'Post must be more than 15 characters !!!';
            this.valid.post = false;
        }
        if (!this.valid.roomID) {
            return false;
        }
        if (!this.valid.name) {
            return false;
        }
        if (!this.valid.post) {
            return false;
        }
        Promise.all([
            this.discussionroomService.getRoomByRoomID(this.room.roomID)
        ]).then(function (result) {
            result[0].forEach(function (element) {
                // check ID already exists
                if (element.roomID !== null) {
                    _this.message.roomID = 'RoomID already exists !!!';
                    _this.valid.roomID = false;
                }
                else {
                    // add room on database
                    _this.room.roomID = _this.room.roomID.trim();
                    _this.room.name = _this.room.name.trim();
                    _this.room.post = _this.room.post.replace(/<[^>]*>/g, '');
                    _this.room.status = 'Opening';
                    _this.room.username = user.username.trim();
                    _this.room.datePost = new Date();
                    _this.discussionroomService.addRoom(_this.room).subscribe(function (result) {
                        alert('Post successfully created !!!');
                        _this.router.navigate(['/forum']);
                    });
                    _this.room.roomID = '';
                    _this.room.name = '';
                    _this.room.post = '';
                }
            });
        });
    };
    CreateforumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-createforum',
            template: __webpack_require__("./src/app/admin/forum/createforum/createforum.component.html"),
            styles: [__webpack_require__("./src/app/admin/forum/createforum/createforum.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_discussionroom_service__["a" /* DiscussionroomService */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["b" /* Router */]])
    ], CreateforumComponent);
    return CreateforumComponent;
}());



/***/ }),

/***/ "./src/app/admin/forum/editforum/editforum.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/forum/editforum/editforum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper hold-transition skin-blue sidebar-mini\">\r\n\r\n    <app-header></app-header>\r\n  \r\n    <app-sidebar></app-sidebar>\r\n  \r\n    <div class=\"content-wrapper\">\r\n      <!-- Content Header (Page header) -->\r\n      <section class=\"content-header\">\r\n        <h1>\r\n          Forum\r\n          <small>Edit Forum</small>\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-dashboard\"></i> Home</a>\r\n          </li>\r\n          <li class=\"active\">Forum</li>\r\n        </ol>\r\n      </section>\r\n  \r\n      <!-- Main content -->\r\n      <section class=\"content\">\r\n        <!-- Small boxes (Stat box) -->\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8\">\r\n            <div class=\"box box-primary\">\r\n              <div class=\"box-header with-border\">\r\n                <h3 class=\"box-title\">Edit Forum</h3>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <!-- form start -->\r\n              <form role=\"form\" (ngSubmit)=\"update()\">\r\n                <div class=\"box-body\">\r\n                  <div class=\"form-group\">\r\n                    <label>Forum ID</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Forum ID\" [(ngModel)]=\"room.roomID\" name=\"roomID\" readonly=\"true\">\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.name }\">\r\n                    <label for=\"name\">Subject:</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter subject\" [(ngModel)]=\"room.name\"\r\n                        #name=\"ngModel\">\r\n                    <div class=\"help-block with-errors\" *ngIf=\"!valid.name\">\r\n                        {{message.name}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.post }\">\r\n                      <label for=\"post\">Post:</label>\r\n                      \r\n                      <div id='editor' name=\"post\" [froalaEditor] [(froalaModel)]=\"room.post\"></div>\r\n                      <div class=\"help-block with-errors\" *ngIf=\"!valid.post\">\r\n                          {{message.post}}\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"box-footer\">\r\n                    <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\">\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <!-- /.box -->\r\n          </div>\r\n        </div>\r\n        <!-- /.row -->\r\n  \r\n      </section>\r\n      <!-- /.content -->\r\n    </div>\r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/admin/forum/editforum/editforum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditforumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_discussionroom_service__ = __webpack_require__("./src/app/services/discussionroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditforumComponent = /** @class */ (function () {
    function EditforumComponent(discussionroomService, router, route) {
        this.discussionroomService = discussionroomService;
        this.router = router;
        this.route = route;
        this.room = {};
        this.valid = {};
        this.message = {};
    }
    EditforumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valid.name = true;
        this.valid.post = true;
        var id = this.route.snapshot.paramMap.get('id');
        this.discussionroomService.getRoomByRoomID(id).subscribe(function (room) {
            _this.room = room;
        });
    };
    EditforumComponent.prototype.update = function () {
        var _this = this;
        this.valid.name = true;
        this.valid.post = true;
        if (this.room.name === undefined || this.room.name.trim().length === 0) {
            this.message.name = 'Name can not be blank !!!';
            this.valid.name = false;
        }
        else if (this.room.name.trim().length < 10) {
            this.message.name = 'Name must be more than 10 characters !!!';
            this.valid.name = false;
        }
        else if (this.room.name.trim().length > 100) {
            this.message.name = 'RoomID must be less than 100 characters !!!';
            this.valid.name = false;
        }
        if (this.room.post === undefined || this.room.post.trim().length === 0) {
            this.message.post = 'Post can not be blank !!!';
            this.valid.post = false;
        }
        else if (this.room.post.trim().length < 15) {
            this.message.post = 'Post must be more than 15 characters !!!';
            this.valid.post = false;
        }
        if (!this.valid.name) {
            return false;
        }
        if (!this.valid.post) {
            return false;
        }
        this.room.name = this.room.name.trim();
        this.room.post = this.room.post.replace(/<[^>]*>/g, '');
        this.discussionroomService.updatePost(this.room).subscribe(function (room) {
            _this.room = room;
            alert("Update successful");
            _this.router.navigate(['/admin/forum']);
        });
    };
    EditforumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editforum',
            template: __webpack_require__("./src/app/admin/forum/editforum/editforum.component.html"),
            styles: [__webpack_require__("./src/app/admin/forum/editforum/editforum.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_discussionroom_service__["a" /* DiscussionroomService */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["a" /* ActivatedRoute */]])
    ], EditforumComponent);
    return EditforumComponent;
}());



/***/ }),

/***/ "./src/app/admin/forum/forum.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/forum/forum.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin/forum/forum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForumComponent = /** @class */ (function () {
    function ForumComponent() {
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    ForumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forum',
            template: __webpack_require__("./src/app/admin/forum/forum.component.html"),
            styles: [__webpack_require__("./src/app/admin/forum/forum.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/admin/forum/showforum/showforum.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/forum/showforum/showforum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper hold-transition skin-blue sidebar-mini\">\r\n  <app-header></app-header>\r\n\r\n  <app-sidebar></app-sidebar>\r\n\r\n  <div class=\"content-wrapper\">\r\n      <!-- Content Header (Page header) -->\r\n      <section class=\"content-header\">\r\n        <h1>\r\n          Forum List\r\n          <small>Control panel</small>\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-dashboard\"></i> Home</a>\r\n          </li>\r\n          <li class=\"active\">Forum</li>\r\n        </ol>\r\n      </section>\r\n\r\n    <section class=\"content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <a routerLink=\"../create\" class=\"btn\">Create New Forum</a>\r\n          <div class=\"box\">\r\n\r\n            <div class=\"box-header\">\r\n              <h3 class=\"box-title\">Forum List</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n\r\n            <div class=\"box-body\">\r\n              <table class=\"table table-bordered table-striped\">\r\n                <thead style=\"background: lightblue\">\r\n                  <tr>\r\n                    <th class=\"col-md-7\">Room</th>\r\n                    <th class=\"col-md-1\">Comment</th>\r\n                    <th class=\"col-md-1 tb-title\">Status</th>\r\n                    <th class=\"col-md-2 tb-title\">Date Post</th>\r\n                    <th class=\"col-md-1 tb-title\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of pagedItems; let i = index\" [attr.data-index]=\"i\">\r\n\r\n                    <td><a style=\"cursor: pointer;\">{{item.name}}</a></td>\r\n                    <td class=\"tb-title\">{{item.comment.length}}</td>\r\n                    <td class=\"tb-title\">\r\n                      <span *ngIf=\"checkOpening(item) == true\" style=\"color: dodgerblue\">{{item.status}}</span>\r\n                      <span *ngIf=\"checkActive(item) == true\" style=\"color: lime\">{{item.status}}</span>\r\n                      <span *ngIf=\"checkStatus(item) == true\" style=\"color: goldenrod\">{{item.status}}</span>\r\n                    </td>\r\n                    <td class=\"tb-title\">\r\n                      {{item.datePost | date:'medium'}}\r\n                    </td>\r\n                    <td class=\"tb-title\">\r\n                        <a style=\"margin-right: 10px;\" routerLink=\"../edit/{{item.roomID}}\">\r\n                          <span class=\"fa fa-pencil\"></span>\r\n                        </a>\r\n                        <a (click)=\"deleteRoom(item)\">\r\n                          <span class=\"fa fa-trash-o\"></span>\r\n                        </a>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"pager.totalItems <= 0\">\r\n                    <td colspan=\"5\" style=\"text-align: center;\">No data available in table.</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-5\">\r\n                    <div class=\"tableInfo\">Showing {{pager.startIndex<0?0:(pager.startIndex + 1)}} to {{pager.endIndex + 1}} of {{pager.totalItems}} entries</div>\r\n                  </div>\r\n                  <div class=\"col-sm-7\">\r\n                    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a (click)=\"setPage(1)\">First</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                      </li>\r\n                      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                        <a (click)=\"setPage(page)\">{{page}}</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  \r\n                </div>\r\n            </div>\r\n\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box-box -->\r\n        </div>\r\n\r\n      </div>\r\n    </section>\r\n    <!-- /.content -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/forum/showforum/showforum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowforumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_discussionroom_service__ = __webpack_require__("./src/app/services/discussionroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowforumComponent = /** @class */ (function () {
    function ShowforumComponent(discussionroomService, router, pagerService) {
        this.discussionroomService = discussionroomService;
        this.router = router;
        this.pagerService = pagerService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.room = {};
        this.pager = {};
        this.valid = {};
        this.message = {};
        this.Active = false;
        this.count = 0;
    }
    ShowforumComponent.prototype.ngOnInit = function () {
        this.getRooms();
    };
    ShowforumComponent.prototype.getRooms = function () {
        var _this = this;
        this.discussionroomService.getRooms().subscribe(function (rooms) {
            _this.rooms = rooms;
            _this.setPage(1);
        });
    };
    ShowforumComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.rooms.length, page);
        // get current page of items
        this.pagedItems = this.rooms.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ShowforumComponent.prototype.checkOpening = function (room) {
        if (room.viewusers.length == 0 && room.status == "Opening") {
            return true;
        }
        return false;
    };
    ShowforumComponent.prototype.checkActive = function (room) {
        if (room.viewusers.length > 0 && room.status == "Active") {
            return true;
        }
        return false;
    };
    ShowforumComponent.prototype.checkStatus = function (room) {
        if (room.status == "Resolved") {
            return true;
        }
        return false;
    };
    ShowforumComponent.prototype.deleteRoom = function (dRoom) {
        var _this = this;
        if (confirm('Do you want to delete it ?')) {
            this.discussionroomService.deleteRoom(dRoom.roomID).subscribe(function (result) {
                _this.getRooms();
            });
        }
    };
    ShowforumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-showforum',
            template: __webpack_require__("./src/app/admin/forum/showforum/showforum.component.html"),
            styles: [__webpack_require__("./src/app/admin/forum/showforum/showforum.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_discussionroom_service__["a" /* DiscussionroomService */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_pager_service__["a" /* PagerService */]])
    ], ShowforumComponent);
    return ShowforumComponent;
}());



/***/ }),

/***/ "./src/app/admin/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".login-box-msg {\r\n  color: #1e1e1e;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hold-transition register-page\" style=\"height: 100vh; padding-top: 1px;\">\r\n  <div class=\"register-box\">\r\n    <div class=\"register-logo\">\r\n      <a href=\"../../index2.html\">\r\n        <b>Admin</b>LTE</a>\r\n    </div>\r\n\r\n    <div class=\"register-box-body\">\r\n      <h4><p class=\"login-box-msg\">Register a new membership</p></h4>\r\n\r\n      <form (ngSubmit)=\"register()\">\r\n        <div class=\"form-group has-feedback\" [ngClass]=\"{ 'has-error': !valid.username }\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"newUser.username\" #username=\"ngModel\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n          <div class=\"help-block with-errors\" *ngIf=\"!valid.username\">\r\n            {{message.username}}\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group has-feedback\" [ngClass]=\"{ 'has-error': !valid.email }\">\r\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"newUser.email\" #email=\"ngModel\">\r\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n          <div class=\"help-block with-errors\" *ngIf=\"!valid.email\">\r\n            {{message.email}}\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group has-feedback\" [ngClass]=\"{ 'has-error': !valid.password }\">\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"newUser.password\" #password=\"ngModel\">\r\n          <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n          <div class=\"help-block with-errors\" *ngIf=\"!valid.password\">\r\n            {{message.password}}\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group has-feedback\" [ngClass]=\"{ 'has-error': !valid.cfpassword }\">\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Retype password\" name=\"cfpassword\" [(ngModel)]=\"newUser.cfpassword\" #cfpassword=\"ngModel\">\r\n          <span class=\"glyphicon glyphicon-log-in form-control-feedback\"></span>\r\n          <div class=\"help-block with-errors\" *ngIf=\"!valid.cfpassword\">\r\n            {{message.cfpassword}}\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Role</label>\r\n          <select class=\"form-control\" name=\"role\" [(ngModel)]=\"newUser.role\" #role=\"ngModel\">\r\n            <option value=\"ROLE_ADMIN\" [selected]>Admin</option>\r\n            <option value=\"ROLE_USER\">User</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"row\">\r\n          <!-- /.col -->\r\n          <div class=\"col-xs-4\">\r\n            <input type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" value=\"Register\">\r\n          </div>\r\n\r\n          <div class=\"col-xs-offset-4 col-xs-4 \">\r\n            <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-primary btn-block btn-flat\">Cancel</button>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- /.form-box -->\r\n  </div>\r\n</div>\r\n\r\n<!-- /.register-box -->\r\n"

/***/ }),

/***/ "./src/app/admin/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService, authenticationService) {
        this.router = router;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.newUser = {};
        this.valid = {};
        this.message = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.authenticationService.isTokenExpired();
        this.newUser.role = 'ROLE_ADMIN';
        this.valid.username = true;
        this.valid.email = true;
        this.valid.password = true;
        this.valid.cfpassword = true;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.validationRegister()) {
            Promise.all([
                this.userService.checkUser(this.newUser.username),
                this.userService.checkEmail(this.newUser.email)
            ]).then(function (res) {
                var isUserExists = true;
                res[0].forEach(function (isExists) {
                    if (!isExists) {
                        _this.message.username = 'Username already exists !!!';
                        _this.valid.username = false;
                    }
                    isUserExists = isExists;
                }).then(function (res1) {
                    res[1].forEach(function (isEmailExists) {
                        if (!isEmailExists) {
                            _this.message.email = 'Email already exists !!!';
                            _this.valid.email = false;
                        }
                        if (isUserExists && isEmailExists) {
                            _this.newUser.username = _this.newUser.username.trim();
                            _this.newUser.username = _this.newUser.username.toLowerCase();
                            _this.newUser.email = _this.newUser.email.trim();
                            _this.userService.addUserForAdmin(_this.newUser).subscribe(function (result) {
                                alert('Account successfully created !!!');
                                _this.router.navigate(['/admin/user']);
                            });
                        }
                    });
                });
            });
        }
    };
    RegisterComponent.prototype.validationRegister = function () {
        // check username
        this.valid.username = true;
        this.message.username = '';
        var usernameRegex = new RegExp('^[a-z0-9]{7,15}$');
        if (this.newUser.username === undefined || this.newUser.username.trim().length === 0) {
            this.message.username = 'Username can not be blank !!!';
            this.valid.username = false;
        }
        else if (this.newUser.username.trim().length < 7) {
            this.message.username = 'Username must be more than 6 characters !!!';
            this.valid.username = false;
        }
        else if (this.newUser.username.trim().length > 15) {
            this.message.username = 'Username must be less than 15 characters !!!';
            this.valid.username = false;
        }
        else if (!usernameRegex.test(this.newUser.username.trim())) {
            this.message.username = 'Username only contains letters and numbers !!!';
            this.valid.username = false;
        }
        // check email
        this.valid.email = true;
        this.message.email = '';
        var emailRegex = new RegExp('^[a-zA-Z0-9]+@tma.com.vn$');
        if (this.newUser.email === undefined || this.newUser.email.trim().length === 0) {
            this.message.email = 'Email can not be blank !!!';
            this.valid.email = false;
        }
        else if (!emailRegex.test(this.newUser.email.trim())) {
            this.message.email = 'Only use TMA email for register !!!';
            this.valid.email = false;
        }
        // check password
        this.valid.password = true;
        this.message.password = '';
        var passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$');
        if (this.newUser.password === undefined || this.newUser.password.length === 0) {
            this.message.password = 'Password can not be blank !!!';
            this.valid.password = false;
        }
        else if (this.newUser.password.length < 9) {
            this.message.password = 'Password must be more than 8 characters !!!';
            this.valid.password = false;
        }
        else if (this.newUser.password.length > 15) {
            this.message.password = 'Password must be less than 15 characters !!!';
            this.valid.password = false;
        }
        else if (!passwordRegex.test(this.newUser.password)) {
            this.message.password = 'Password must contains least one upper case,lower case,digit,special character!!!';
            this.valid.password = false;
        }
        // check confirm password
        this.valid.cfpassword = true;
        this.message.cfpassword = '';
        if (this.newUser.cfpassword !== this.newUser.password) {
            this.message.cfpassword = 'Confirm password is not correct!!!';
            this.valid.cfpassword = false;
        }
        if (!this.valid.username || !this.valid.email || !this.valid.password || !this.valid.cfpassword) {
            return false;
        }
        return true;
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(['/admin/user']);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/admin/register/register.component.html"),
            styles: [__webpack_require__("./src/app/admin/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/admin/room/createroom/createroom.component.css":
/***/ (function(module, exports) {

module.exports = ".date input {\r\n  background-color: white !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/room/createroom/createroom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper hold-transition skin-blue sidebar-mini\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <app-sidebar></app-sidebar>\r\n\r\n  <div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n      <h1>\r\n        Room\r\n        <small>Create New Room</small>\r\n      </h1>\r\n      <ol class=\"breadcrumb\">\r\n        <li>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-dashboard\"></i> Home</a>\r\n        </li>\r\n        <li class=\"active\">Room</li>\r\n      </ol>\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n      <!-- Small boxes (Stat box) -->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Create Room</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form role=\"form\" (submit)=\"submitform()\">\r\n              <div class=\"box-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.roomID }\">\r\n                  <label>Room ID</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter room ID\" [(ngModel)]=\"testRoom.roomID\" name=\"roomID\">\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.roomID\">\r\n                    {{message.roomID}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.examID }\">\r\n                  <label>Exam</label>\r\n                  <select class=\"form-control select2\" style=\"width: 100%;\" [(ngModel)]=\"testRoom.examID\" name=\"examID\" #examID=\"ngModel\">\r\n                    <option *ngFor=\"let item of listExams;\" value=\"{{item.examID}}\" disabled=\"{{item.error}}\">{{item.examID}} <p *ngIf=\"item.error\"> (disabled)</p></option>\r\n                  </select>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.examID\">\r\n                    {{message.examID}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.startTime }\">\r\n                  <label class=\"control-label\">Start Time</label>\r\n                  <div id=\"form_datetime\" class=\"input-group date form_datetime\" data-date-format=\"mm-dd-yyyy - HH:ii p\" data-link-field=\"dtp_input1\">\r\n                    <input class=\"form-control\" size=\"16\" id=\"date\" type=\"text\" readonly name=\"date\">\r\n                    <span class=\"input-group-addon\">\r\n                      <span class=\"glyphicon glyphicon-remove\"></span>\r\n                    </span>\r\n                    <span class=\"input-group-addon\">\r\n                      <span class=\"glyphicon glyphicon-calendar\"></span>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.startTime\">\r\n                    {{message.startTime}}\r\n                  </div>\r\n                  <input type=\"hidden\" id=\"dtp_input1\" />\r\n                  <br/>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n    </section>\r\n    <!-- /.content -->\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/room/createroom/createroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_testroom_service__ = __webpack_require__("./src/app/services/testroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateroomComponent = /** @class */ (function () {
    function CreateroomComponent(examService, testroomService, router) {
        this.examService = examService;
        this.testroomService = testroomService;
        this.router = router;
        this.testRoom = {};
        this.valid = {};
        this.message = {};
    }
    CreateroomComponent.prototype.ngOnInit = function () {
        this.valid.roomID = true;
        this.valid.startTime = true;
        this.valid.examID = true;
        this.getExams();
        $('#form_datetime').datetimepicker({
            format: 'mm/dd/yyyy hh:ii:00',
            autoclose: true,
            todayBtn: true,
            minuteStep: 5,
            weekStart: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1
        });
    };
    CreateroomComponent.prototype.getExams = function () {
        var _this = this;
        this.examService.getExamsForTest().subscribe(function (exams) {
            _this.listExams = exams;
            if (_this.listExams.length > 0) {
                var cnt_1 = 0;
                _this.listExams.forEach(function (element) {
                    Promise.all([
                        // upload pdf and mp3 file
                        _this.examService.getListeningParts(element.examID),
                        _this.examService.getReadingParts(element.examID)
                    ]).then(function (res) {
                        res[0].forEach(function (e) {
                            if (e.length < 4) {
                                element.error = true;
                            }
                        }).then(function (result) {
                            res[1].forEach(function (e) {
                                if (e.length < 3) {
                                    if (_this.listExams.indexOf(element) >= 0) {
                                        element.error = true;
                                    }
                                }
                            });
                            if (cnt_1 === 0 && !element.error) {
                                _this.testRoom.examID = element.examID;
                                cnt_1++;
                            }
                        });
                    });
                });
                if (cnt_1 === 0) {
                    _this.testRoom.examID = '';
                }
            }
        });
    };
    CreateroomComponent.prototype.submitform = function () {
        var _this = this;
        // validate roomID field
        this.valid.roomID = true;
        this.message.roomID = '';
        var roomIDRegex = new RegExp('^[a-zA-Z0-9]{5,15}$');
        if (this.testRoom.roomID === undefined || this.testRoom.roomID.trim().length === 0) {
            this.message.roomID = 'RoomID can not be blank !!!';
            this.valid.roomID = false;
        }
        else if (this.testRoom.roomID.trim().length < 5) {
            this.message.roomID = 'RoomID must be more than 4 characters !!!';
            this.valid.roomID = false;
        }
        else if (this.testRoom.roomID.trim().length > 15) {
            this.message.roomID = 'RoomID must be less than 15 characters !!!';
            this.valid.roomID = false;
        }
        else if (!roomIDRegex.test(this.testRoom.roomID.trim())) {
            this.message.roomID = 'RoomID only contains letters and numbers !!!';
            this.valid.roomID = false;
        }
        this.valid.examID = true;
        this.message.examID = '';
        if (this.testRoom.examID === undefined || this.testRoom.examID.trim().length === 0) {
            this.message.examID = 'Please select a examID !!!';
            this.valid.examID = false;
        }
        if (this.testRoom.roomID !== undefined && this.testRoom.roomID.trim().length > 0) {
            // check start time
            Promise.all([
                this.testroomService.getCurrentTime(),
                this.testroomService.getTestRoomByRoomID(this.testRoom.roomID),
                this.testroomService.getTestRoomByexamID(this.testRoom.examID)
            ]).then(function (result) {
                result[1].forEach(function (element) {
                    if (element.roomID === _this.testRoom.roomID) {
                        _this.message.roomID = 'RoomID already exists !!!';
                        _this.valid.roomID = false;
                    }
                }).then(function (r) {
                    result[2].forEach(function (element) {
                        if (element.examID === _this.testRoom.examID) {
                            _this.message.examID = 'Exam created for another room session !!!';
                            _this.valid.examID = false;
                        }
                    }).then(function (r1) {
                        result[0].forEach(function (element) {
                            var serverTime = new Date(element);
                            _this.valid.startTime = true;
                            _this.message.startTime = '';
                            var date = $('#date').val();
                            if (date === undefined || date === '') {
                                _this.message.startTime = 'StartTime can not be blank !!!';
                                _this.valid.startTime = false;
                            }
                            else {
                                _this.testRoom.startTime = new Date(date);
                                if ((serverTime.getFullYear() > _this.testRoom.startTime.getFullYear())
                                    ||
                                        (serverTime.getFullYear() === _this.testRoom.startTime.getFullYear() &&
                                            serverTime.getMonth() > _this.testRoom.startTime.getMonth())
                                    ||
                                        (serverTime.getFullYear() === _this.testRoom.startTime.getFullYear() &&
                                            serverTime.getMonth() === _this.testRoom.startTime.getMonth() &&
                                            serverTime.getDate() > _this.testRoom.startTime.getDate())
                                    ||
                                        (serverTime.getFullYear() === _this.testRoom.startTime.getFullYear() &&
                                            serverTime.getMonth() === _this.testRoom.startTime.getMonth() &&
                                            serverTime.getDate() === _this.testRoom.startTime.getDate() &&
                                            serverTime.getHours() > _this.testRoom.startTime.getHours())
                                    ||
                                        (serverTime.getFullYear() === _this.testRoom.startTime.getFullYear() &&
                                            serverTime.getMonth() === _this.testRoom.startTime.getMonth() &&
                                            serverTime.getDate() === _this.testRoom.startTime.getDate() &&
                                            serverTime.getHours() === _this.testRoom.startTime.getHours() &&
                                            (serverTime.getMinutes() + 5) > _this.testRoom.startTime.getMinutes())
                                    ||
                                        (serverTime.getFullYear() === _this.testRoom.startTime.getFullYear() &&
                                            serverTime.getMonth() === _this.testRoom.startTime.getMonth() &&
                                            serverTime.getDate() === _this.testRoom.startTime.getDate() &&
                                            serverTime.getHours() + 1 === _this.testRoom.startTime.getHours() &&
                                            (60 - serverTime.getMinutes() + _this.testRoom.startTime.getMinutes()) < 5)) {
                                    _this.message.startTime = 'Please select a start time greater than the current time 5 mins !!!';
                                    _this.valid.startTime = false;
                                }
                            }
                            if (!_this.valid.roomID || !_this.valid.startTime || !_this.valid.examID) {
                                return false;
                            }
                            _this.testRoom.userRegisteredList = [];
                            _this.testRoom.userJoinedList = [];
                            _this.testRoom.userOnlineList = [];
                            _this.testroomService.addTestRoom(_this.testRoom).subscribe(function (r2) {
                                alert('The test room session successfully created !!!');
                                _this.router.navigate(['/admin/room/show']);
                            });
                        });
                    });
                });
            });
        }
        else {
            return false;
        }
    };
    CreateroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-createroom',
            template: __webpack_require__("./src/app/admin/room/createroom/createroom.component.html"),
            styles: [__webpack_require__("./src/app/admin/room/createroom/createroom.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_exam_service__["a" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_0__services_testroom_service__["a" /* TestroomService */],
            __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["b" /* Router */]])
    ], CreateroomComponent);
    return CreateroomComponent;
}());



/***/ }),

/***/ "./src/app/admin/room/editroom/editroom.component.css":
/***/ (function(module, exports) {

module.exports = ".date input{\r\n  background-color: white !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/room/editroom/editroom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper hold-transition skin-blue sidebar-mini\">\r\n\r\n    <app-header></app-header>\r\n\r\n    <app-sidebar></app-sidebar>\r\n\r\n    <div class=\"content-wrapper\">\r\n      <!-- Content Header (Page header) -->\r\n      <section class=\"content-header\">\r\n        <h1>\r\n          Room\r\n          <small>Update room</small>\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-dashboard\"></i> Home</a>\r\n          </li>\r\n          <li class=\"active\">Room</li>\r\n        </ol>\r\n      </section>\r\n\r\n      <!-- Main content -->\r\n      <section class=\"content\">\r\n        <!-- Small boxes (Stat box) -->\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"box box-primary\">\r\n              <div class=\"box-header with-border\">\r\n                <h3 class=\"box-title\">Update Room</h3>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <!-- form start -->\r\n              <form role=\"form\" (submit)=\"submitform()\">\r\n                <div class=\"box-body\">\r\n                  <div class=\"form-group\">\r\n                    <label>Room ID</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter room ID\" [(ngModel)]=\"testRoom.roomID\" name=\"roomID\" readonly=\"true\" style=\"background: white;\">\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.examID }\">\r\n                    <label>Exam</label>\r\n                    <select class=\"form-control select2\" style=\"width: 100%;\" [(ngModel)]=\"testRoom.examID\" name=\"examID\" #examID=\"ngModel\">\r\n                      <option *ngFor=\"let item of listExams;\" value=\"{{item.examID}}\">{{item.examID}}</option>\r\n                    </select>\r\n                    <div class=\"help-block with-errors\" *ngIf=\"!valid.examID\">\r\n                        {{message.examID}}\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.startTime }\">\r\n                    <label class=\"control-label\">Start Time</label>\r\n                    <div id=\"form_datetime\" class=\"input-group date form_datetime\" data-date-format=\"mm-dd-yyyy - HH:ii p\" data-link-field=\"dtp_input1\">\r\n                      <input class=\"form-control\" size=\"16\" id=\"date\" type=\"text\" readonly name=\"date\" value=\"{{testRoom.startTime | date:'medium'}}\">\r\n                      <span class=\"input-group-addon\">\r\n                        <span class=\"glyphicon glyphicon-remove\"></span>\r\n                      </span>\r\n                      <span class=\"input-group-addon\">\r\n                        <span class=\"glyphicon glyphicon-calendar\"></span>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"help-block with-errors\" *ngIf=\"!valid.startTime\">\r\n                      {{message.startTime}}\r\n                    </div>\r\n                    <input type=\"hidden\" id=\"dtp_input1\" />\r\n                    <br/>\r\n                  </div>\r\n                  <div class=\"box-footer\">\r\n                    <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\">\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <!-- /.box -->\r\n          </div>\r\n        </div>\r\n        <!-- /.row -->\r\n\r\n      </section>\r\n      <!-- /.content -->\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/admin/room/editroom/editroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_testroom_service__ = __webpack_require__("./src/app/services/testroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditroomComponent = /** @class */ (function () {
    function EditroomComponent(route, examService, testroomService, routers) {
        this.route = route;
        this.examService = examService;
        this.testroomService = testroomService;
        this.routers = routers;
        this.testRoom = {};
        this.valid = {};
        this.message = {};
    }
    EditroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valid.startTime = true;
        this.valid.examID = true;
        var id = this.route.snapshot.paramMap.get('id');
        this.testroomService.getTestRoomByRoomID(id).subscribe(function (result) {
            _this.testRoom = result;
            if (_this.testRoom.roomID === null) {
                _this.routers.navigate(['/admin/room']);
            }
            _this.testroomService.getCurrentTime().subscribe(function (current) {
                var serverTime = new Date(current);
                var startTime = new Date(_this.testRoom.startTime);
                // check test session has not started yet
                if ((serverTime.getFullYear() < startTime.getFullYear())
                    ||
                        (serverTime.getFullYear() === startTime.getFullYear() &&
                            serverTime.getMonth() < startTime.getMonth())
                    ||
                        (serverTime.getFullYear() === startTime.getFullYear() &&
                            serverTime.getMonth() === startTime.getMonth() &&
                            serverTime.getDate() < startTime.getDate())
                    ||
                        (serverTime.getFullYear() === startTime.getFullYear() &&
                            serverTime.getMonth() === startTime.getMonth() &&
                            serverTime.getDate() === startTime.getDate() &&
                            serverTime.getHours() < startTime.getHours())
                    ||
                        (serverTime.getFullYear() === startTime.getFullYear() &&
                            serverTime.getMonth() === startTime.getMonth() &&
                            serverTime.getDate() === startTime.getDate() &&
                            serverTime.getHours() === startTime.getHours() &&
                            serverTime.getMinutes() < startTime.getMinutes())) {
                    _this.getExams();
                    $('#form_datetime').datetimepicker({
                        format: 'mm/dd/yyyy hh:ii:00',
                        autoclose: true,
                        todayBtn: true,
                        minuteStep: 5,
                        weekStart: 1,
                        todayHighlight: 1,
                        startView: 2,
                        forceParse: 0,
                        showMeridian: 1
                    });
                }
                else {
                    alert('The test room session has started and you cannot edit it !!!');
                    _this.routers.navigate(['/admin/room']);
                }
            });
        });
    };
    EditroomComponent.prototype.getExams = function () {
        var _this = this;
        this.examService.getExams().subscribe(function (exams) {
            _this.listExams = exams;
        });
    };
    EditroomComponent.prototype.submitform = function () {
        var _this = this;
        this.valid.examID = true;
        this.message.examID = '';
        if (this.testRoom.examID === undefined || this.testRoom.examID.trim().length === 0) {
            this.message.examID = 'Please select a examID !!!';
            this.valid.examID = false;
        }
        // check start time
        Promise.all([
            this.testroomService.getCurrentTime()
        ]).then(function (result) {
            result[0].forEach(function (element) {
                var serverTime = new Date(element);
                _this.valid.startTime = true;
                _this.message.startTime = '';
                var date = $('#date').val();
                if (date === undefined || date === '') {
                    _this.message.startTime = 'StartTime can not be blank !!!';
                    _this.valid.startTime = false;
                }
                else {
                    _this.testRoom.startTime = new Date(date);
                    if ((serverTime.getFullYear() > _this.testRoom.startTime.getFullYear())
                        ||
                            (serverTime.getFullYear() === _this.testRoom.startTime.getFullYear() &&
                                serverTime.getMonth() > _this.testRoom.startTime.getMonth())
                        ||
                            (serverTime.getFullYear() === _this.testRoom.startTime.getFullYear() &&
                                serverTime.getMonth() === _this.testRoom.startTime.getMonth() &&
                                serverTime.getDate() > _this.testRoom.startTime.getDate())
                        ||
                            (serverTime.getFullYear() === _this.testRoom.startTime.getFullYear() &&
                                serverTime.getMonth() === _this.testRoom.startTime.getMonth() &&
                                serverTime.getDate() === _this.testRoom.startTime.getDate() &&
                                serverTime.getHours() > _this.testRoom.startTime.getHours() + 1)
                        ||
                            (serverTime.getFullYear() === _this.testRoom.startTime.getFullYear() &&
                                serverTime.getMonth() === _this.testRoom.startTime.getMonth() &&
                                serverTime.getDate() === _this.testRoom.startTime.getDate() &&
                                serverTime.getHours() === _this.testRoom.startTime.getHours() &&
                                (serverTime.getMinutes() + 5) > _this.testRoom.startTime.getMinutes())
                        ||
                            (serverTime.getFullYear() === _this.testRoom.startTime.getFullYear() &&
                                serverTime.getMonth() === _this.testRoom.startTime.getMonth() &&
                                serverTime.getDate() === _this.testRoom.startTime.getDate() &&
                                serverTime.getHours() === (_this.testRoom.startTime.getHours() + 1) &&
                                (60 - serverTime.getMinutes() + _this.testRoom.startTime.getMinutes()) > 5)) {
                        _this.message.startTime = 'Please select a start time greater than the current time 5 mins !!!';
                        _this.valid.startTime = false;
                    }
                }
                if (!_this.valid.startTime || !_this.testRoom.examID) {
                    return false;
                }
                _this.testRoom.userRegisteredList = [];
                _this.testRoom.userJoinedList = [];
                _this.testroomService.editTestRoom(_this.testRoom).subscribe(function (r) {
                    alert('Update successful !!!');
                    _this.routers.navigate(['/admin/room/show']);
                });
            });
        });
    };
    EditroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editroom',
            template: __webpack_require__("./src/app/admin/room/editroom/editroom.component.html"),
            styles: [__webpack_require__("./src/app/admin/room/editroom/editroom.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_exam_service__["a" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_2__services_testroom_service__["a" /* TestroomService */],
            __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["b" /* Router */]])
    ], EditroomComponent);
    return EditroomComponent;
}());



/***/ }),

/***/ "./src/app/admin/room/room.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/room/room.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/admin/room/room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomComponent = /** @class */ (function () {
    function RoomComponent() {
    }
    RoomComponent.prototype.ngOnInit = function () {
    };
    RoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-room',
            template: __webpack_require__("./src/app/admin/room/room.component.html"),
            styles: [__webpack_require__("./src/app/admin/room/room.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/admin/room/showroom/showroom.component.css":
/***/ (function(module, exports) {

module.exports = ".expired{\r\n  color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/room/showroom/showroom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper hold-transition skin-blue sidebar-mini\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <app-sidebar></app-sidebar>\r\n\r\n  <div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n      <h1>\r\n        Room List\r\n        <small>Control panel</small>\r\n      </h1>\r\n      <ol class=\"breadcrumb\">\r\n        <li>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-dashboard\"></i> Home</a>\r\n        </li>\r\n        <li class=\"active\">Room</li>\r\n      </ol>\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n      <!-- Small boxes (Stat box) -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <a routerLink=\"../create\" class=\"btn\">Create New Room</a>\r\n          <div class=\"box\">\r\n            <div class=\"box-header\">\r\n              <h3 class=\"box-title\">Room List</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <div class=\"box-body\">\r\n              <table class=\"table table-bordered table-striped\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>No</th>\r\n                    <th>roomID</th>\r\n                    <th>examID</th>\r\n                    <th>Start Date</th>\r\n                    <th>Status</th>\r\n                    <th>Registered users</th>\r\n                    <th>Joined users</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of pagedItems; let i = index\" [attr.data-index]=\"i\">\r\n                    <td>{{pager.currentPage==1?i+1:(pager.currentPage-1)+\"\"+(i+1)}}</td>\r\n                    <td>{{item.roomID}}</td>\r\n                    <td>{{item.examID}}</td>\r\n                    <td>{{item.startTime | date:'medium'}}</td>\r\n                    <td [ngClass]=\"{expired: item.status === 'Test session is expired'}\">{{item.status}}</td>\r\n                    <td>\r\n                      <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showUserList(item.userRegisteredList)\">\r\n                        <i class=\"fa fa-list-alt\"></i>\r\n                      </button>\r\n                    </td>\r\n                    <td>\r\n                      <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal1\" (click)=\"showUserList(item.userJoinedList)\">\r\n                        <i class=\"fa fa-list-alt\"></i>\r\n                      </button>\r\n                    </td>\r\n                    <td>\r\n                      <i style=\"margin-right: 10px;\" data-toggle=\"modal\" data-target=\"#myModal2\" (click)=\"showResultList(item.roomID)\" class=\"fa fa-list-alt\" *ngIf=\"item.status === 'Test session is expired'\">\r\n                      </i>\r\n                      <a style=\"margin-right: 10px;\" *ngIf=\"item.status === 'Test session has not started yet'\" routerLink=\"../edit/{{item.roomID}}\">\r\n                        <span class=\"fa fa-pencil\"></span>\r\n                      </a>\r\n                      <a style=\"margin-right: 10px;\" *ngIf=\"item.status !== 'Test session has started'\" (click)=\"deleteTestRoom(item)\">\r\n                        <span class=\"fa fa-trash-o\"></span>\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"pager.totalItems <= 0\">\r\n                    <td colspan=\"8\" style=\"text-align: center;\">No data available in table.</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-5\">\r\n                  <div class=\"tableInfo\">Showing {{pager.startIndex\r\n                    <0?0:(pager.startIndex + 1)}} to {{pager.endIndex + 1}} of {{pager.totalItems}} entries</div>\r\n                  </div>\r\n                  <div class=\"col-sm-7\">\r\n                    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a (click)=\"setPage(1)\">First</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                      </li>\r\n                      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                        <a (click)=\"setPage(page)\">{{page}}</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- /.box-body -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- /.row -->\r\n\r\n    </section>\r\n    <!-- /.content -->\r\n    </div>\r\n    <!-- Modal -->\r\n    <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">Users Register</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <table class=\"table table-bordered table-striped\" *ngIf=\"userList.length > 0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No</th>\r\n                  <th>username</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let user of userList; let i = index\" [attr.data-index]=\"i\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{user.username}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <p *ngIf=\"userList.length <= 0\" style=\"color: black; text-align: center;\">There are no users to join this session</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Modal 1 -->\r\n    <div class=\"modal fade\" id=\"myModal1\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">Users Joined</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <table class=\"table table-bordered table-striped\" *ngIf=\"userList.length > 0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No</th>\r\n                  <th>username</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let user of userList; let i = index\" [attr.data-index]=\"i\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{user.username}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <p *ngIf=\"userList.length <= 0\" style=\"color: black; text-align: center;\">There are no users to join this session</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Modal 2 -->\r\n    <div class=\"modal fade\" id=\"myModal2\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">Test Result</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <table class=\"table table-bordered table-striped\" *ngIf=\"testResultList.length > 0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No</th>\r\n                  <th>Username</th>\r\n                  <th>RoomID</th>\r\n                  <th>ExamID</th>\r\n                  <th>Reading Correct</th>\r\n                  <th>Listening Correct</th>\r\n                  <th>Score</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let result of testResultList; let i = index\" [attr.data-index]=\"i\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{result.username}}</td>\r\n                  <td>{{result.roomID}}</td>\r\n                  <td>{{result.examID}}</td>\r\n                  <td>{{result.readCorrect}}</td>\r\n                  <td>{{result.listenCorrect}}</td>\r\n                  <td>{{result.testScore}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <p *ngIf=\"testResultList.length <= 0\" style=\"color: black; text-align: center;\">There are no results in this session</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"submit\" name=\"action\" class=\"btn btn-primary pull-left\" (click)=\"exportPDF()\">\r\n              <i class=\"fa fa-download\"> Export results to PDF</i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/admin/room/showroom/showroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_testroom_service__ = __webpack_require__("./src/app/services/testroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf_autotable__ = __webpack_require__("./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf_autotable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jspdf_autotable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShowroomComponent = /** @class */ (function () {
    function ShowroomComponent(testRoomService, pagerService, testroomService, examService) {
        this.testRoomService = testRoomService;
        this.pagerService = pagerService;
        this.testroomService = testroomService;
        this.examService = examService;
        this.userList = [];
        this.testResultList = [];
        // pager object
        this.pager = {};
    }
    ShowroomComponent.prototype.ngOnInit = function () {
        this.getAllTestRoom();
    };
    ShowroomComponent.prototype.getAllTestRoom = function () {
        var _this = this;
        this.testRoomService.getTestRooms().subscribe(function (result) {
            _this.listTestRoom = result;
            if (_this.listTestRoom.length > 0) {
                _this.listTestRoom.forEach(function (element) {
                    _this.checkTime(element);
                });
            }
            _this.setPage(1);
        });
    };
    ShowroomComponent.prototype.deleteTestRoom = function (testRoom) {
        var _this = this;
        if (confirm('Do you want to delete it ?')) {
            this.testroomService.getCurrentTime().subscribe(function (time) {
                var currentTime = new Date(time);
                var startTime = new Date(testRoom.startTime);
                if ((startTime.getFullYear() === currentTime.getFullYear() &&
                    startTime.getMonth() === currentTime.getMonth() &&
                    startTime.getDate() === currentTime.getDate() &&
                    startTime.getHours() === currentTime.getHours() &&
                    startTime.getMinutes() <= currentTime.getMinutes())
                    ||
                        (startTime.getFullYear() === currentTime.getFullYear() &&
                            startTime.getMonth() === currentTime.getMonth() &&
                            startTime.getDate() === currentTime.getDate() &&
                            startTime.getHours() + 1 === currentTime.getHours())
                    ||
                        (startTime.getFullYear() === currentTime.getFullYear() &&
                            startTime.getMonth() === currentTime.getMonth() &&
                            startTime.getDate() === currentTime.getDate() &&
                            startTime.getHours() + 2 === currentTime.getHours() &&
                            startTime.getMinutes() >= currentTime.getMinutes())) {
                    alert('Test session has started and you can not delete it !!!');
                }
                else {
                    _this.testRoomService.deleteTestRoom(testRoom.roomID).subscribe(function (result) {
                        _this.getAllTestRoom();
                    });
                }
            });
        }
    };
    ShowroomComponent.prototype.showUserList = function (userList) {
        var _this = this;
        this.userList = [];
        userList.forEach(function (element) {
            var user = {};
            user.username = element;
            _this.userList.push(user);
        });
    };
    ShowroomComponent.prototype.showResultList = function (roomID) {
        var _this = this;
        this.examService.getTestSessionResultHistoryByroomID(roomID).subscribe(function (r) {
            _this.testResultList = r;
        });
    };
    ShowroomComponent.prototype.exportPDF = function () {
        var columns = [
            { title: 'No', dataKey: 'no' },
            { title: 'Username', dataKey: 'username' },
            { title: 'ExamID', dataKey: 'examID' },
            { title: 'Reading Correct', dataKey: 'readCorrect' },
            { title: 'Listening Correct', dataKey: 'listenCorrect' },
            { title: 'Score', dataKey: 'testScore' }
        ];
        var no = 1;
        this.testResultList.forEach(function (element) {
            element.no = no;
            no++;
        });
        var roomID = this.testResultList[0].roomID;
        // Only pt supported (not mm or in)
        var doc = new jsPDF('p', 'pt');
        doc.autoTable(columns, this.testResultList, {
            margin: { top: 60 },
            addPageContent: function (data) {
                doc.text('Test Result For Room ' + roomID, 180, 30);
            }
        });
        doc.save('result.pdf');
    };
    ShowroomComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.listTestRoom.length, page);
        // get current page of items
        this.pagedItems = this.listTestRoom.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ShowroomComponent.prototype.checkTime = function (testRoom) {
        this.testroomService.getCurrentTime().subscribe(function (time) {
            var currentTime = new Date(time);
            var startTime = new Date(testRoom.startTime);
            if ((startTime.getFullYear() === currentTime.getFullYear() &&
                startTime.getMonth() === currentTime.getMonth() &&
                startTime.getDate() === currentTime.getDate() &&
                startTime.getHours() === currentTime.getHours() &&
                startTime.getMinutes() <= currentTime.getMinutes())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() === currentTime.getDate() &&
                        startTime.getHours() + 1 === currentTime.getHours())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() === currentTime.getDate() &&
                        startTime.getHours() + 2 === currentTime.getHours() &&
                        startTime.getMinutes() >= currentTime.getMinutes())) {
                testRoom.status = 'Test session has started';
            }
            else if ((startTime.getFullYear() < currentTime.getFullYear())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() < currentTime.getMonth())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() < currentTime.getDate())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() === currentTime.getDate() &&
                        startTime.getHours() + 3 <= currentTime.getHours())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() === currentTime.getDate() &&
                        startTime.getHours() + 2 === currentTime.getHours() &&
                        currentTime.getMinutes() > startTime.getMinutes())) {
                testRoom.status = 'Test session is expired';
            }
            else {
                testRoom.status = 'Test session has not started yet';
            }
        });
    };
    ShowroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-showroom',
            template: __webpack_require__("./src/app/admin/room/showroom/showroom.component.html"),
            styles: [__webpack_require__("./src/app/admin/room/showroom/showroom.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_testroom_service__["a" /* TestroomService */],
            __WEBPACK_IMPORTED_MODULE_1__services_pager_service__["a" /* PagerService */],
            __WEBPACK_IMPORTED_MODULE_3__services_testroom_service__["a" /* TestroomService */],
            __WEBPACK_IMPORTED_MODULE_0__services_exam_service__["a" /* ExamService */]])
    ], ShowroomComponent);
    return ShowroomComponent;
}());



/***/ }),

/***/ "./src/app/admin/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper hold-transition skin-blue sidebar-mini\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <app-sidebar></app-sidebar>\r\n\r\n  <div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n      <h1>\r\n        User List\r\n        <small>Control panel</small>\r\n      </h1>\r\n      <ol class=\"breadcrumb\">\r\n        <li>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-dashboard\"></i> Home</a>\r\n        </li>\r\n        <li class=\"active\">User</li>\r\n      </ol>\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n      <!-- Small boxes (Stat box) -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <a routerLink=\"/admin/register\" class=\"btn\">Create New Account</a>\r\n          <div class=\"box\">\r\n            <div class=\"box-header\">\r\n              <h3 class=\"box-title\">Account List</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <div class=\"box-body\">\r\n              <table class=\"table table-bordered table-striped\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>No</th>\r\n                    <th>Username</th>\r\n                    <th>email</th>\r\n                    <th>role</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of pagedItems; let i = index\" [attr.data-index]=\"i\">\r\n                    <td>{{pager.currentPage==1?i+1:(pager.currentPage-1)+\"\"+(i+1)}}</td>\r\n                    <td>{{item.username}}</td>\r\n                    <td>{{item.email}}</td>\r\n                    <td>{{item.role === 'ROLE_ADMIN'?'ADMIN':'USER'}}</td>\r\n                    <td>\r\n                      <i style=\"margin-right: 10px;\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showInfo(item)\"\r\n                        class=\"fa fa-pencil\">\r\n                      </i>\r\n                      <a (click)=\"deleteUser(item)\">\r\n                        <span class=\"fa fa-trash-o\"></span>\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"pager.totalItems <= 0\">\r\n                    <td colspan=\"5\" style=\"text-align: center;\">No data available in table.</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-5\">\r\n                  <div class=\"tableInfo\">Showing {{pager.startIndex\r\n                    <0?0:(pager.startIndex + 1)}} to {{pager.endIndex + 1}} of {{pager.totalItems}} entries</div> </div>\r\n                      <div class=\"col-sm-7\">\r\n                      <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                        <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                          <a (click)=\"setPage(1)\">First</a>\r\n                        </li>\r\n                        <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                          <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                        </li>\r\n                        <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                          <a (click)=\"setPage(page)\">{{page}}</a>\r\n                        </li>\r\n                        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                          <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                        </li>\r\n                        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                          <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                        </li>\r\n                      </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- /.box-body -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- /.row -->\r\n\r\n    </section>\r\n    <!-- /.content -->\r\n  </div>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Edit Role</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group has-feedback\">\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"newUser.username\"\r\n              readonly=\"readonly\">\r\n            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Role</label>\r\n            <select class=\"form-control\" name=\"role\" [(ngModel)]=\"newUser.role\">\r\n              <option value=\"ROLE_ADMIN\">Admin</option>\r\n              <option value=\"ROLE_USER\">User</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\" name=\"action\" class=\"btn btn-primary pull-left\" (click)=\"updateRole()\">Save</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(userService, pagerService) {
        this.userService = userService;
        this.pagerService = pagerService;
        this.newUser = {};
        // pager object
        this.pager = {};
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            _this.userList = users;
            _this.setPage(1);
        });
    };
    UserComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (confirm('Do you want to delete it ?')) {
            this.userService.deleteUser(user.username).subscribe(function (r) {
                alert('Delete successful !!!');
                _this.getUsers();
            });
        }
    };
    UserComponent.prototype.showInfo = function (user) {
        this.newUser = null;
        this.newUser = user;
    };
    UserComponent.prototype.updateRole = function () {
        var _this = this;
        this.userService.updateUser(this.newUser).subscribe(function (res) {
            alert('Update successful !!!');
            _this.getUsers();
        });
    };
    UserComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.userList.length, page);
        // get current page of items
        this.pagedItems = this.userList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/admin/user/user.component.html"),
            styles: [__webpack_require__("./src/app/admin/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__services_pager_service__["a" /* PagerService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_auth_admin_guard__ = __webpack_require__("./src/app/guards/auth-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_testroom_service__ = __webpack_require__("./src/app/services/testroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_add_exam_service__ = __webpack_require__("./src/app/services/add-exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uploadfile_service__ = __webpack_require__("./src/app/services/uploadfile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_discussionroom_service__ = __webpack_require__("./src/app/services/discussionroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__web_web_module__ = __webpack_require__("./src/app/web/web.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__admin_admin_module__ = __webpack_require__("./src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_pdf_viewer__ = __webpack_require__("./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__web_web_module__["a" /* WebModule */],
                __WEBPACK_IMPORTED_MODULE_16__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_13__angular_router__["c" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_1__guards_auth_admin_guard__["a" /* AuthAdminGuard */],
                __WEBPACK_IMPORTED_MODULE_4__services_uploadfile_service__["a" /* UploadfileService */],
                __WEBPACK_IMPORTED_MODULE_3__services_add_exam_service__["a" /* AddExamService */],
                __WEBPACK_IMPORTED_MODULE_17__services_exam_service__["a" /* ExamService */],
                __WEBPACK_IMPORTED_MODULE_2__services_testroom_service__["a" /* TestroomService */],
                __WEBPACK_IMPORTED_MODULE_0__services_pager_service__["a" /* PagerService */],
                __WEBPACK_IMPORTED_MODULE_7__services_discussionroom_service__["a" /* DiscussionroomService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth-admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthAdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthAdminGuard = /** @class */ (function () {
    function AuthAdminGuard(router) {
        this.router = router;
    }
    AuthAdminGuard.prototype.canActivate = function (route) {
        if (localStorage.getItem('currentUser') != null) {
            var user = JSON.parse(localStorage.getItem('user'));
            if (user.role !== 'ROLE_ADMIN') {
                this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthAdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthAdminGuard);
    return AuthAdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser') != null) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/model/answer-part.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerPart; });
var AnswerPart = /** @class */ (function () {
    function AnswerPart() {
    }
    return AnswerPart;
}());



/***/ }),

/***/ "./src/app/services/add-exam.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddExamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddExamService = /** @class */ (function () {
    function AddExamService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.Url = 'http://192.168.95.143:8181/api/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["a" /* Headers */];
        headers.append('Authorization', this.authenticationService.token);
        headers.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    AddExamService.prototype.addExam = function (exam) {
        return this.http.post(this.Url + 'exam', exam, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    AddExamService.prototype.addListeningPart = function (listeningPart) {
        return this.http.post(this.Url + 'listeningpart', listeningPart, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    AddExamService.prototype.addReadingPart = function (part) {
        return this.http.post(this.Url + 'part', part, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    AddExamService.prototype.addAnswer = function (answerParts) {
        return this.http.post(this.Url + 'answerparts', answerParts, this.options)
            .map(function (reponse) { return reponse.text(); });
    };
    AddExamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], AddExamService);
    return AddExamService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.Url = 'http://192.168.95.143:8181/api/';
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var body = new FormData();
        body.append('username', username);
        body.append('password', password);
        return this.http.post(this.Url + 'login', body)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.text();
            if (token !== 'false') {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                _this.getUser(username).toPromise().then(function (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                });
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.isTokenExpired = function () {
        if (localStorage.getItem('currentUser') === null) {
            this.logout();
        }
        else {
            var helper = new __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__["a" /* JwtHelperService */]();
            var isExpired = helper.isTokenExpired(this.token);
            if (isExpired) {
                this.logout();
            }
        }
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    };
    AuthenticationService.prototype.getUser = function (username) {
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': this.token }) });
        return this.http.get(this.Url + 'user/' + username, this.options)
            .map(function (response) { return response.json(); });
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_router__["b" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/discussionroom.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscussionroomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscussionroomService = /** @class */ (function () {
    function DiscussionroomService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.Url = 'http://192.168.95.143:8181/api/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["a" /* Headers */];
        headers.append('Authorization', this.authenticationService.token);
        headers.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    DiscussionroomService.prototype.getRooms = function () {
        return this.http.get(this.Url + 'discussionrooms', this.options)
            .map(function (response) { return response.json(); });
    };
    DiscussionroomService.prototype.addRoom = function (room) {
        return this.http.post(this.Url + 'discussionroom', room, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    DiscussionroomService.prototype.deleteRoom = function (roomID) {
        return this.http.delete(this.Url + 'discussionroom/' + roomID, this.options)
            .map(function (response) { return response.json(); });
    };
    DiscussionroomService.prototype.searchRooms = function (roomName) {
        return this.http.get(this.Url + 'roomsbyname' + '/' + roomName, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    DiscussionroomService.prototype.getRoomByRoomID = function (roomID) {
        return this.http.get(this.Url + 'discussionroom/' + roomID, this.options)
            .map(function (response) { return response.json(); });
    };
    DiscussionroomService.prototype.getPostsByUsername = function (username) {
        return this.http.get(this.Url + 'postsbyusername/' + username, this.options)
            .map(function (response) { return response.json(); });
    };
    DiscussionroomService.prototype.addComment = function (roomID, comment) {
        return this.http.put(this.Url + 'addcomment/' + roomID, comment, this.options)
            .map(function (response) { return response.json(); });
    };
    DiscussionroomService.prototype.addVote = function (roomID, comment, username) {
        return this.http.put(this.Url + 'addvote/' + roomID + '/' + username, comment, this.options)
            .map(function (response) { return response.json(); });
    };
    DiscussionroomService.prototype.removeVote = function (roomID, comment, username) {
        return this.http.put(this.Url + 'removevote/' + roomID + '/' + username, comment, this.options)
            .map(function (response) { return response.json(); });
    };
    DiscussionroomService.prototype.addUserView = function (roomID, username) {
        return this.http.put(this.Url + 'viewusers/' + roomID + '/' + username, this.options)
            .map(function (response) { return response.json(); });
    };
    DiscussionroomService.prototype.removeUserView = function (roomID, username) {
        return this.http.put(this.Url + 'removeviewuser/' + roomID + '/' + username, this.options)
            .map(function (response) { return response.json(); });
    };
    DiscussionroomService.prototype.updateStatus = function (roomID) {
        return this.http.put(this.Url + 'updatestatus/' + roomID, this.options)
            .map(function (response) { return response.json(); });
    };
    DiscussionroomService.prototype.updatePost = function (room) {
        return this.http.put(this.Url + 'updatepost', room, this.options)
            .map(function (response) { return response.text(); });
    };
    DiscussionroomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], DiscussionroomService);
    return DiscussionroomService;
}());



/***/ }),

/***/ "./src/app/services/exam.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamService = /** @class */ (function () {
    function ExamService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.Url = 'http://192.168.95.143:8181/api/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["a" /* Headers */];
        headers.append('Authorization', this.authenticationService.token);
        headers.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    // get all exam
    ExamService.prototype.getExams = function () {
        return this.http.get(this.Url + 'exams', this.options)
            .map(function (response) { return response.json(); });
    };
    // get exam by examID
    ExamService.prototype.getExamByExamID = function (examID) {
        return this.http.get(this.Url + 'exam/' + examID, this.options)
            .map(function (response) { return response.json(); });
    };
    // delete exam by examID
    ExamService.prototype.deleteExam = function (examID) {
        return this.http.delete(this.Url + 'exam/' + examID, this.options)
            .map(function (response) { return response.json(); });
    };
    // get listening Part by examID
    ExamService.prototype.getListeningParts = function (examID) {
        return this.http.get(this.Url + 'listeningparts/' + examID, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // get listening Part by examID
    ExamService.prototype.getReadingParts = function (examID) {
        return this.http.get(this.Url + 'parts/' + examID, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // get answer part by partID
    ExamService.prototype.getAnswerParts = function (partID) {
        return this.http.get(this.Url + 'answerparts/' + partID, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // add result for full test
    ExamService.prototype.addTestResult = function (testResult) {
        return this.http.post(this.Url + 'testresult', testResult, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // get full test result history
    ExamService.prototype.getTestResultHistory = function (username) {
        return this.http.get(this.Url + 'testresults/' + username, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // get file save on server
    ExamService.prototype.getMp3Files = function (filename) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["a" /* Headers */];
        headers.append('Authorization', this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["d" /* RequestOptions */]({ headers: headers, responseType: __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["e" /* ResponseContentType */].Blob });
        return this.http.get(this.Url + 'files/' + filename, options)
            .map(function (reponse) {
            return new Blob([reponse.blob()], { type: 'audio/mpeg' });
        });
    };
    ExamService.prototype.getPdfFiles = function (filename) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["a" /* Headers */];
        headers.append('Authorization', this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["d" /* RequestOptions */]({ headers: headers, responseType: __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["e" /* ResponseContentType */].Blob });
        return this.http.get(this.Url + 'files/' + filename, options)
            .map(function (reponse) {
            return new Blob([reponse.blob()], { type: 'application/pdf' });
        });
    };
    // get listening part by examID and partNo
    ExamService.prototype.getListeningPart = function (examID, partNo) {
        return this.http.get(this.Url + 'minitestlistenpart/' + examID + '/' + partNo, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // get read part by examID and partNo
    ExamService.prototype.getReadPart = function (examID, partNo) {
        return this.http.get(this.Url + 'minitestpart/' + examID + '/' + partNo, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // add result for mini test
    ExamService.prototype.addMiniTestResult = function (trainingResult) {
        return this.http.post(this.Url + 'trainingresult', trainingResult, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // get minitest result history
    ExamService.prototype.getMiniTestResultHistory = function (username) {
        return this.http.get(this.Url + 'trainingresults/' + username, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // Get reading points based on number of correct sentences from server
    ExamService.prototype.getReadingPoint = function (readCorrect) {
        return this.http.get(this.Url + 'readingpoint/' + readCorrect, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // Get listening points based on number of correct sentences from server
    ExamService.prototype.getListeningPoint = function (listenCorrect) {
        return this.http.get(this.Url + 'listeningpoint/' + listenCorrect, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // get test result history of test session by username
    ExamService.prototype.getTestSessionResultHistory = function (username) {
        return this.http.get(this.Url + 'testsessionresults/' + username, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // add result for test sesion
    ExamService.prototype.addTestSesionResult = function (testSessionResult) {
        return this.http.post(this.Url + 'testsessionresult', testSessionResult, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // update listening part
    ExamService.prototype.editListeningPart = function (listeningPart) {
        return this.http.put(this.Url + 'listeningpart', listeningPart, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // update listening part
    ExamService.prototype.editReadingPart = function (readingPart) {
        return this.http.put(this.Url + 'part', readingPart, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // update answer part
    ExamService.prototype.editAnswerPart = function (answerPart) {
        return this.http.put(this.Url + 'answerparts', answerPart, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    // get all exam
    ExamService.prototype.getExamsForTraining = function () {
        return this.http.get(this.Url + 'examsfortrain', this.options)
            .map(function (response) { return response.json(); });
    };
    // get all exam
    ExamService.prototype.getExamsForTest = function () {
        return this.http.get(this.Url + 'examsfortest', this.options)
            .map(function (response) { return response.json(); });
    };
    // get test result history of test session by username
    ExamService.prototype.getTestSessionResultHistoryByroomID = function (roomID) {
        return this.http.get(this.Url + 'testsessionresultsbyroomid/' + roomID, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    ExamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], ExamService);
    return ExamService;
}());



/***/ }),

/***/ "./src/app/services/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/services/testroom.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestroomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestroomService = /** @class */ (function () {
    function TestroomService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.Url = 'http://192.168.95.143:8181/api/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["a" /* Headers */];
        headers.append('Authorization', this.authenticationService.token);
        headers.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    TestroomService.prototype.addTestRoom = function (testRoom) {
        return this.http.post(this.Url + 'testroom', testRoom, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    TestroomService.prototype.editTestRoom = function (testRoom) {
        return this.http.put(this.Url + 'testroom', testRoom, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    TestroomService.prototype.getTestRooms = function () {
        return this.http.get(this.Url + 'testrooms', this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    TestroomService.prototype.getTestRoomByRoomID = function (roomID) {
        return this.http.get(this.Url + 'testroom/' + roomID, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    TestroomService.prototype.updateTestRoom = function (testRoom) {
        return this.http.put(this.Url + 'testroom', testRoom, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    TestroomService.prototype.deleteTestRoom = function (roomID) {
        return this.http.delete(this.Url + 'testroom/' + roomID, this.options)
            .map(function (response) { return response.json(); });
    };
    TestroomService.prototype.getCurrentTime = function () {
        return this.http.get(this.Url + 'currenttime', this.options)
            .map(function (response) { return response.text(); });
    };
    TestroomService.prototype.getTestRoomByexamID = function (examID) {
        return this.http.get(this.Url + 'gettestroombyexamid/' + examID, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    TestroomService.prototype.checkUserOnline = function (username, roomID) {
        var body = new FormData();
        body.append('username', username);
        body.append('roomID', roomID);
        return this.http.post(this.Url + 'checkuseronline', body)
            .map(function (response) {
            if (response.text() === 'true') {
                return true;
            }
            else {
                return false;
            }
        });
    };
    TestroomService.prototype.checkoutUser = function (username, roomID) {
        var body = new FormData();
        body.append('username', username);
        body.append('roomID', roomID);
        return this.http.post(this.Url + 'checkoutuser', body)
            .map(function (response) {
            if (response.text() === 'true') {
                return true;
            }
            else {
                return false;
            }
        });
    };
    TestroomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], TestroomService);
    return TestroomService;
}());



/***/ }),

/***/ "./src/app/services/uploadfile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadfileService = /** @class */ (function () {
    function UploadfileService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.Url = 'http://192.168.95.143:8181/api/upload';
    }
    UploadfileService.prototype.pushFileToStorage = function (file) {
        var formdata = new FormData();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["a" /* Headers */];
        headers.append('Authorization', this.authenticationService.token);
        formdata.append('file', file);
        this.options = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.Url, formdata, this.options)
            .toPromise().then(this.extractData).catch(function (err) {
        });
    };
    UploadfileService.prototype.deleteFile = function (filename) {
        return this.http.delete(this.Url + 'files/' + filename, this.options)
            .map(function (response) {
            if (response.text() === 'true') {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UploadfileService.prototype.extractData = function (res) {
        var body = res.text();
        return body;
    };
    UploadfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], UploadfileService);
    return UploadfileService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.Url = 'http://192.168.95.143:8181/api/';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' })
        };
    }
    // add user for user role
    UserService.prototype.addUser = function (user) {
        return this.http.post(this.Url + 'userrole', user, this.httpOptions)
            .map(function (reponse) { return reponse.json(); });
    };
    // add user for admin role
    UserService.prototype.addUserForAdmin = function (user) {
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': this.authenticationService.token }) });
        return this.http.post(this.Url + 'user', user, this.options)
            .map(function (reponse) { return reponse.json(); });
    };
    UserService.prototype.getUsers = function () {
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': this.authenticationService.token }) });
        return this.http.get(this.Url + "users", this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getUser = function (username) {
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': this.authenticationService.token }) });
        return this.http.get(this.Url + 'user/' + username, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.checkUser = function (username) {
        var body = new FormData();
        body.append('username', username);
        return this.http.post(this.Url + 'checkuser', body)
            .map(function (response) {
            if (response.text() === 'true') {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.checkEmail = function (email) {
        var body = new FormData();
        body.append('email', email);
        return this.http.post(this.Url + 'checkemail', body)
            .map(function (response) {
            if (response.text() === 'true') {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.checkOldPassword = function (username, password) {
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': this.authenticationService.token }) });
        var body = new FormData();
        body.append('username', username);
        body.append('password', password);
        return this.http.post(this.Url + 'checkoldpassword', body, this.options)
            .map(function (response) {
            if (response.text() === 'true') {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.updateUser = function (user) {
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': this.authenticationService.token }) });
        return this.http.put(this.Url + 'user', user, this.options)
            .map(function (response) { return response.json(); });
    };
    // delete user by username
    UserService.prototype.deleteUser = function (username) {
        return this.http.delete(this.Url + 'user/' + username, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/web/adding-post/adding-post.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.block {\r\n    margin-bottom: 1rem;\r\n    background-color: white;\r\n}\r\n\r\n.html {\r\n    display: block;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    padding: 0.5rem;\r\n    background-color: #f1f1f1;\r\n    max-height: 10rem;\r\n    overflow: auto;\r\n}\r\n\r\n:host app-ngx-editor .ngx-editor-button {\r\n    width: 5em;\r\n    height: 5em;\r\n}\r\n\r\n:host app-ngx-editor i {\r\n    font-size: 1.8em;\r\n}\r\n\r\n:host app-ngx-editor .show-placeholder {\r\n    font-size: 1.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/web/adding-post/adding-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contentforum\">\r\n    <app-nvarbar></app-nvarbar><br>\r\n\r\n    <div class=\"container\">\r\n        <form role=\"form\" (ngSubmit)=\"addRoom(currentUser)\" style=\"width: 1100px;\">\r\n\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.roomID }\">\r\n                <label for=\"roomID\">RoomID:</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"roomID\" placeholder=\"Enter ID\" [(ngModel)]=\"room.roomID\"\r\n                    #roomID=\"ngModel\">\r\n                <div class=\"help-block with-errors\" *ngIf=\"!valid.roomID\">\r\n                    {{message.roomID}}\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.name }\">\r\n                <label for=\"name\">Subject:</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter subject\" [(ngModel)]=\"room.name\"\r\n                    #name=\"ngModel\">\r\n                <div class=\"help-block with-errors\" *ngIf=\"!valid.name\">\r\n                    {{message.name}}\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.post }\">\r\n                <label for=\"post\">Post:</label>\r\n                \r\n                <div id='editor' name=\"post\" [froalaEditor] [(froalaModel)]=\"room.post\"></div>\r\n                <div class=\"help-block with-errors\" *ngIf=\"!valid.post\">\r\n                    {{message.post}}\r\n                </div>\r\n            </div>\r\n            <div style=\"text-align: left\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n            </div>\r\n\r\n\r\n        </form>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/web/adding-post/adding-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddingPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_discussionroom_service__ = __webpack_require__("./src/app/services/discussionroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddingPostComponent = /** @class */ (function () {
    function AddingPostComponent(discussionroomService, router) {
        this.discussionroomService = discussionroomService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.room = {};
        this.valid = {};
        this.message = {};
    }
    AddingPostComponent.prototype.ngOnInit = function () {
        this.valid.roomID = true;
        this.valid.name = true;
        this.valid.post = true;
    };
    AddingPostComponent.prototype.addRoom = function (user) {
        var _this = this;
        this.valid.roomID = true;
        this.valid.name = true;
        this.valid.post = true;
        this.message.roomID = '';
        var roomIDRegex = new RegExp('^[a-zA-Z0-9]{5,15}$');
        if (this.room.roomID === undefined || this.room.roomID.trim().length === 0) {
            this.message.roomID = 'RoomID can not be blank !!!';
            this.valid.roomID = false;
        }
        else if (this.room.roomID.trim().length < 4) {
            this.message.roomID = 'RoomID must be more than 3 characters !!!';
            this.valid.roomID = false;
        }
        else if (this.room.roomID.trim().length > 15) {
            this.message.roomID = 'RoomID must be less than 15 characters !!!';
            this.valid.roomID = false;
        }
        else if (!roomIDRegex.test(this.room.roomID.trim())) {
            this.message.roomID = 'RoomID only contains letters and numbers !!!';
            this.valid.roomID = false;
        }
        if (this.room.name === undefined || this.room.name.trim().length === 0) {
            this.message.name = 'Name can not be blank !!!';
            this.valid.name = false;
        }
        else if (this.room.name.trim().length < 10) {
            this.message.name = 'Name must be more than 10 characters !!!';
            this.valid.name = false;
        }
        else if (this.room.name.trim().length > 50) {
            this.message.name = 'RoomID must be less than 50 characters !!!';
            this.valid.name = false;
        }
        if (this.room.post === undefined || this.room.post.trim().length === 0) {
            this.message.post = 'Post can not be blank !!!';
            this.valid.post = false;
        }
        else if (this.room.post.trim().length < 15) {
            this.message.post = 'Post must be more than 15 characters !!!';
            this.valid.post = false;
        }
        if (!this.valid.roomID) {
            return false;
        }
        if (!this.valid.name) {
            return false;
        }
        if (!this.valid.post) {
            return false;
        }
        Promise.all([
            this.discussionroomService.getRoomByRoomID(this.room.roomID)
        ]).then(function (result) {
            result[0].forEach(function (element) {
                // check ID already exists
                if (element.roomID !== null) {
                    _this.message.roomID = 'RoomID already exists !!!';
                    _this.valid.roomID = false;
                }
                else {
                    // add room on database
                    _this.room.roomID = _this.room.roomID.trim();
                    _this.room.name = _this.room.name.trim();
                    _this.room.post = _this.room.post.replace(/<[^>]*>/g, '');
                    _this.room.status = 'Opening';
                    _this.room.username = user.username.trim();
                    _this.room.datePost = new Date();
                    _this.discussionroomService.addRoom(_this.room).subscribe(function (result) {
                        alert('Post successfully created !!!');
                        _this.router.navigate(['/forum']);
                    });
                    _this.room.roomID = '';
                    _this.room.name = '';
                    _this.room.post = '';
                }
            });
        });
    };
    AddingPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-adding-post',
            template: __webpack_require__("./src/app/web/adding-post/adding-post.component.html"),
            styles: [__webpack_require__("./src/app/web/adding-post/adding-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_discussionroom_service__["a" /* DiscussionroomService */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["b" /* Router */]])
    ], AddingPostComponent);
    return AddingPostComponent;
}());



/***/ }),

/***/ "./src/app/web/core/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/web/core/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <div class=\"ft-logo\">\r\n          <img src=\"../../../assets/logo/logo-toeic.png\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"ft-title\">\r\n          <h3>ABOUT US</h3>\r\n        </div>\r\n        <hr class=\"line-param\" />\r\n        <div class=\"ft-param\">\r\n          <p>TMA Solutions was established in 1997 to provide quality software outsourcing services to leading companies worldwide.\r\n            We are one of the largest software outsourcing companies in Vietnam with 2,200 engineers. Our engineering team\r\n            was selected from a large pool of Vietnam IT resources; they are well-trained and have successfully completed\r\n            many large and complex projects.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <div class=\"ft-title\">\r\n          <h3>PAGE</h3>\r\n        </div>\r\n        <hr class=\"line-param\">\r\n        <div class=\"ft-param\">\r\n          <ul>\r\n            <li>\r\n              <a href=\"home\">Home</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"test\">Test</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"training\">Training</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">Schedule</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <ul>\r\n          <li>\r\n            <div class=\"ft-icon\">\r\n              <i class=\"glyphicon glyphicon-home\"></i>\r\n            </div>\r\n            <div class=\"ft-info\">\r\n              <div class=\"ft-info-title\">\r\n                <h4>ADDRESS</h4>\r\n              </div>\r\n              <div class=\"ft-info-content ft-param\">\r\n                <p>Quang Trung Software City, HCM city, Viet Nam</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"ft-icon\">\r\n              <i class=\"glyphicon glyphicon-phone\"></i>\r\n            </div>\r\n            <div class=\"ft-info\">\r\n              <div class=\"ft-info-title\">\r\n                <h4>PHONE</h4>\r\n              </div>\r\n              <div class=\"ft-info-content ft-param\">\r\n                <p>123-1234-12345</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"ft-icon\">\r\n              <i class=\"glyphicon glyphicon-envelope\"></i>\r\n            </div>\r\n            <div class=\"ft-info\">\r\n              <div class=\"ft-info-title\">\r\n                <h4>EMAIL</h4>\r\n              </div>\r\n              <div class=\"ft-info-content ft-param\">\r\n                <p>gtntan@tma.com.vn</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/web/core/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/web/core/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/web/core/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/web/core/nvarbar/nvarbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/web/core/nvarbar/nvarbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  <div class=\"top-navigation-wrapper\">\r\n    <div class=\"top-navigation-right\">\r\n      <div class=\"dropdown\">\r\n        <button type=\"button\" class=\"btn dropdown-toggle btn-user\" data-toggle=\"dropdown\">\r\n          <i class=\"fa fa-user-circle\"></i>\r\n          <span class=\"hidden-xs\">{{currentUser.username}}</span>\r\n        </button>\r\n        <ul class=\"dropdown-menu\">\r\n          <li>\r\n            <a routerLink=\"/admin\" routerLinkActive=\"active\"> Admin Page </a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/\" routerLinkActive=\"active\"> Profile </a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/mypost\" routerLinkActive=\"active\"> My Post </a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/test-history\">Full Test result history</a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/minitest-history\">MiniTest result history</a>\r\n          </li>\r\n          <li class=\"divider\"></li>\r\n          <li>\r\n            <a routerLink=\"/login\" (click)=\"logoutClicked()\">Logout</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"gdlr-header-inner\">\r\n    <div class=\"gdlr-header-container container\">\r\n      <div class=\"gdlr-logo\">\r\n        <a href=\"#\">\r\n          <img src=\"../../../assets/logo/logo-tma.png\" alt=\"\"> </a>\r\n      </div>\r\n      <div class=\"gdlr-navigation-wrapper\">\r\n        <ul class=\"nav\">\r\n          <li>\r\n            <a style=\"cursor: pointer;\" (click)=\"logoutRoomToHome(currentUser.username)\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a style=\"cursor: pointer;\" (click)=\"logoutRoomToTest(currentUser.username)\">Toeic FullTest</a>\r\n          </li>\r\n          <li>\r\n            <a style=\"cursor: pointer;\" (click)=\"logoutRoomToTraining(currentUser.username)\">Toeic MiniTest</a>\r\n          </li>\r\n          <li>\r\n            <a style=\"cursor: pointer;\" (click)=\"logoutRoomToSchedule(currentUser.username)\">Schedule</a>\r\n          </li>\r\n          <li>\r\n            <a style=\"cursor: pointer;\" (click)=\"logoutRoomToForum(currentUser.username)\">Forum</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/web/core/nvarbar/nvarbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NvarbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_discussionroom_service__ = __webpack_require__("./src/app/services/discussionroom.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NvarbarComponent = /** @class */ (function () {
    function NvarbarComponent(authenticationService, discussionRoomService, router) {
        this.authenticationService = authenticationService;
        this.discussionRoomService = discussionRoomService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    NvarbarComponent.prototype.ngOnInit = function () {
        this.authenticationService.isTokenExpired();
    };
    NvarbarComponent.prototype.logoutClicked = function () {
        this.authenticationService.logout();
    };
    NvarbarComponent.prototype.logoutRoomToForum = function (username) {
        var _this = this;
        var userJoinRoom = JSON.parse(localStorage.getItem('isActiveOf' + username));
        if (userJoinRoom != null) {
            if (confirm("Do you want to exit room")) {
                this.discussionRoomService.removeUserView(userJoinRoom, username).subscribe(function (result) { return _this.router.navigate(['/forum']); });
                localStorage.removeItem('isActiveOf' + username);
            }
        }
        else {
            this.router.navigate(['/forum']);
        }
    };
    NvarbarComponent.prototype.logoutRoomToSchedule = function (username) {
        var userJoinRoom = JSON.parse(localStorage.getItem('isActiveOf' + username));
        if (userJoinRoom != null) {
            if (confirm("Do you want to exit room")) {
                localStorage.removeItem('isActiveOf' + username);
                localStorage.removeItem('isActive');
                this.router.navigate(['/schedule']);
            }
        }
        else {
            this.router.navigate(['/schedule']);
        }
    };
    NvarbarComponent.prototype.logoutRoomToTraining = function (username) {
        var userJoinRoom = JSON.parse(localStorage.getItem('isActiveOf' + username));
        if (userJoinRoom != null) {
            if (confirm("Do you want to exit room")) {
                localStorage.removeItem('isActiveOf' + username);
                localStorage.removeItem('isActive');
                this.router.navigate(['/training']);
            }
        }
        else {
            this.router.navigate(['/training']);
        }
    };
    NvarbarComponent.prototype.logoutRoomToTest = function (username) {
        var userJoinRoom = JSON.parse(localStorage.getItem('isActiveOf' + username));
        if (userJoinRoom != null) {
            if (confirm("Do you want to exit room")) {
                localStorage.removeItem('isActiveOf' + username);
                localStorage.removeItem('isActive');
                this.router.navigate(['/test']);
            }
        }
        else {
            this.router.navigate(['/test']);
        }
    };
    NvarbarComponent.prototype.logoutRoomToHome = function (username) {
        var userJoinRoom = JSON.parse(localStorage.getItem('isActiveOf' + username));
        if (userJoinRoom != null) {
            if (confirm("Do you want to exit room")) {
                localStorage.removeItem('isActiveOf' + username);
                localStorage.removeItem('isActive');
                this.router.navigate(['/home']);
            }
        }
        else {
            this.router.navigate(['/home']);
        }
    };
    NvarbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-nvarbar',
            template: __webpack_require__("./src/app/web/core/nvarbar/nvarbar.component.html"),
            styles: [__webpack_require__("./src/app/web/core/nvarbar/nvarbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_discussionroom_service__["a" /* DiscussionroomService */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["b" /* Router */]])
    ], NvarbarComponent);
    return NvarbarComponent;
}());



/***/ }),

/***/ "./src/app/web/detailroom/detailroom.component.css":
/***/ (function(module, exports) {

module.exports = ".content-comment {\r\n    margin: -15px 30px;\r\n    color: black;\r\n    max-height: auto;\r\n}\r\n\r\n.comment-title {\r\n    margin: 0;\r\n    padding: 20px 20px;\r\n    word-wrap: break-word;\r\n    color: #1e1e1e;\r\n    height: auto;\r\n    font-size: 17px;\r\n    font-weight: bold;\r\n}\r\n\r\n.post-title {\r\n    margin-left: 1px;\r\n    margin-bottom: -5px;\r\n    word-wrap: break-word;\r\n    color: #1e1e1e;\r\n    height: auto;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.user-post {\r\n    background-color: #E3E3E3;\r\n    width: 300px;\r\n    float: left;\r\n    min-height: 280px;\r\n    max-height:1000px;\r\n    text-align: center;\r\n}\r\n\r\n.user-comment {\r\n    background: #E3E3E3;\r\n    width: 300px;\r\n    float: left;\r\n    height: 230px;\r\n    text-align: center;\r\n}\r\n\r\n.block-post {\r\n    margin-bottom: 20px;\r\n    width: 950;\r\n    min-height: 280px;\r\n    max-height:1000px;\r\n    position: relative;\r\n}\r\n\r\n.comment-user {\r\n    width: 1100px;\r\n    height: 230px;\r\n    margin-bottom: 20px;\r\n    max-height: 500px;\r\n}\r\n\r\n.contentforum {\r\n    width: 1100px;\r\n    margin: 0 auto;\r\n    min-height: 600px;\r\n}\r\n\r\n.content-post{\r\n    background: #EBF4F9;\r\n    width: 800px;\r\n    float: left;\r\n    min-height: 280px;\r\n    max-height:1000px;\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.content-ps{\r\n    margin: 0;\r\n    padding: 10px 20px;\r\n    word-wrap: break-word;\r\n    color: #1e1e1e;\r\n    height: auto;\r\n    font-size: 17px;\r\n}\r\n\r\n.vote-comment {\r\n    float: right;\r\n    margin: 0;\r\n    padding: 10px;\r\n}\r\n\r\ntable tr td{\r\n    border-style:none;\r\n    text-align: center;\r\n}\r\n\r\n.style-hr {\r\n    -ms-flex-line-pack: center;\r\n        align-content: center; width: 760px;margin-top: 0;border-top: 1px solid #77a4d1;display: block;height: 1px;\r\n}\r\n\r\n.block-comment {\r\n    background-color: white;\r\n}\r\n\r\n.comment {\r\n    height: 400px;\r\n}\r\n\r\nh6 {\r\n    margin-left: 2px;\r\n    margin-bottom: 18px;\r\n    margin-top: -2px;\r\n}\r\n\r\n#one-true { overflow: hidden; }\r\n\r\n#one-true .col {\r\n  width: 27%;\r\n  padding: 30px 3.15% 0;\r\n  float: left;\r\n  margin-bottom: -99999px;\r\n  padding-bottom: 99999px;\r\n}\r\n\r\n#one-true .col:nth-child(1) { margin-left: 33.3%; background: #ccc; }\r\n\r\n#one-true .col:nth-child(2) { margin-left: -66.3%; background: #eee; }\r\n\r\n#one-true .col:nth-child(3) { left: 0; background: #eee; }\r\n\r\n#one-true p { margin-bottom: 30px; }\r\n\r\n#page-wrap { width: 80%; margin: 60px auto; }\r\n\r\n#page-wrap > div { margin: 0 0 50px 0; min-width: 500px; width: 100%; }\r\n"

/***/ }),

/***/ "./src/app/web/detailroom/detailroom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contentforum\">\r\n    <app-nvarbar></app-nvarbar>\r\n\r\n    <div style=\"text-align: center;margin: 40px 0\">\r\n        <h1>{{room.name}}</h1>\r\n    </div>\r\n    \r\n    <!-- block each post of user and comment -->\r\n\r\n    <div class=\"block-post\">\r\n        <div class=\"user-post\">\r\n          <h3>{{room.username}}</h3>\r\n          <h4>Post owner</h4>\r\n          <i class=\"fa fa-user-circle\" style=\"font-size:85px;\"></i>\r\n        </div>\r\n        <div class=\"content-post\">\r\n          <div class=\"content-ps\">\r\n            <p class=\"post-title\">{{room.name}}</p>\r\n            <h6>{{room.datePost | date:'short'}}</h6>\r\n            <div style=\"margin-left: 7px\">{{room.post}}</div>\r\n           <!-- <img src=\"../../../assets/slider/mac.jpg\"> -->\r\n          </div>\r\n          <hr class=\"style-hr\">\r\n        </div>\r\n        <button style=\"float: right;\" *ngIf=\"room.username == currentUser.username\" type=\"button\" class=\"btn btn-primary\" (click)=\"updateStatus(room.roomID)\">\r\n            Resolved\r\n        </button><br>\r\n    </div><br>\r\n   \r\n    <div *ngFor=\"let comment of comments\">\r\n        <div class=\"comment-user\">\r\n            <div class=\"user-comment\">\r\n                <h3>{{comment.username}}</h3>\r\n                <h4>Posts: {{getCountPosts(comment.username)}}</h4>\r\n                <i class=\"fa fa-user-circle\" style=\"font-size:80px;\"></i>\r\n            </div>\r\n            <div style=\"background-color: white;width: 800px;float: left;height: 230px;\">\r\n                <div class=\"vote-comment\">\r\n                    <table>\r\n                        <tr>\r\n                            <td>\r\n                                <button type=\"submit\" (click)=\"removeVoteAgree(currentUser,room.roomID,comment)\" *ngIf=\"checkUserVoteAgree(comment.vote,currentUser) == true\" style=\"color: green\">\r\n                                    <span class=\"fa fa-thumbs-o-up\"></span>\r\n                                </button>\r\n                                <button type=\"submit\" (click)=\"addVoteAgree(currentUser,room.roomID,comment)\" *ngIf=\"checkUserVoteAgree(comment.vote,currentUser) == false\">\r\n                                    <span class=\"fa fa-thumbs-o-up\"></span>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{countVoteWithAgree(comment.vote)}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <p class=\"comment-title\">Reply: {{room.name}}</p> \r\n                <p class=\"content-comment\">{{comment.content}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form role=\"form\" (ngSubmit)=\"addComment(currentUser,room.roomID)\" *ngIf=\"currentUser.username != room.username\">\r\n        <div class=\"comment\" [ngClass]=\"{ 'has-error': !valid.content }\">\r\n            <div class=\"block-comment\">   \r\n                <div id='editor' name=\"content\" [froalaEditor] [(froalaModel)]=\"com.content\"></div>\r\n            </div>\r\n            <div class=\"help-block with-errors\" *ngIf=\"!valid.content\">\r\n                {{message.content}}\r\n            </div>\r\n            <br>\r\n            <button style=\"float: right\" type=\"submit\" class=\"btn btn-primary\">Comment</button>\r\n        </div>\r\n    </form>\r\n    \r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/web/detailroom/detailroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_discussionroom_service__ = __webpack_require__("./src/app/services/discussionroom.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailroomComponent = /** @class */ (function () {
    function DetailroomComponent(route, discussionRoomService, router) {
        this.route = route;
        this.discussionRoomService = discussionRoomService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.map = new Map();
        this.post = {};
        this.room = {};
        this.com = {};
        this.vote = {};
        this.isAgree = false;
        this.valid = {};
        this.message = {};
    }
    DetailroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valid.content = true;
        var id = this.route.snapshot.paramMap.get('id');
        this.discussionRoomService.getRoomByRoomID(id).subscribe(function (room) {
            _this.room = room;
            _this.comments = _this.room.comment;
            for (var _i = 0, _a = _this.room.comment; _i < _a.length; _i++) {
                var co = _a[_i];
                _this.getPostsByUserName(co.username);
            }
        });
    };
    DetailroomComponent.prototype.countVoteWithAgree = function (votes) {
        var count = 0;
        for (var _i = 0, votes_1 = votes; _i < votes_1.length; _i++) {
            var vot = votes_1[_i];
            if (vot.vot == 'AGREE') {
                count++;
            }
        }
        return count;
    };
    DetailroomComponent.prototype.checkUserVoteAgree = function (votes, user) {
        this.isAgree = false;
        for (var _i = 0, votes_2 = votes; _i < votes_2.length; _i++) {
            var vot = votes_2[_i];
            if (vot.username == user.username && vot.vot == 'AGREE') {
                this.isAgree = true;
                return this.isAgree;
            }
        }
        return this.isAgree;
    };
    DetailroomComponent.prototype.addComment = function (user, roomID) {
        var _this = this;
        this.valid.content = true;
        this.message.content = '';
        if (this.com.content === undefined || this.com.content.trim().length === 0) {
            this.message.content = 'Content can not be blank !!!';
            this.valid.content = false;
        }
        else if (this.com.content.trim().length < 10) {
            this.message.content = 'Content must be more than 10 characters !!!';
            this.valid.content = false;
        }
        if (!this.valid.content) {
            return false;
        }
        this.com.content = this.com.content.trim().replace(/<[^>]*>/g, '');
        this.com.username = user.username.trim();
        this.discussionRoomService.addComment(roomID, this.com).subscribe(function (room) {
            _this.room = room;
            _this.com.content = '';
            _this.comments = _this.room.comment;
        });
    };
    DetailroomComponent.prototype.addVoteAgree = function (user, roomID, comment) {
        var _this = this;
        this.discussionRoomService.addVote(roomID, comment, user.username.trim()).subscribe(function (room) {
            _this.room = room;
            _this.comments = _this.room.comment;
        });
    };
    DetailroomComponent.prototype.removeVoteAgree = function (user, roomID, comment) {
        var _this = this;
        this.discussionRoomService.removeVote(roomID, comment, user.username.trim()).subscribe(function (room) {
            _this.room = room;
            _this.comments = _this.room.comment;
        });
    };
    DetailroomComponent.prototype.getPostsByUserName = function (username) {
        var _this = this;
        this.discussionRoomService.getPostsByUsername(username).subscribe(function (post) {
            _this.post = post;
            _this.map.set(username, _this.post);
        });
    };
    DetailroomComponent.prototype.getCountPosts = function (username) {
        var count = 0;
        this.map.forEach(function (value, key) {
            if (key == username)
                count = value.length;
        });
        return count;
    };
    DetailroomComponent.prototype.updateStatus = function (roomID) {
        var _this = this;
        if (confirm("Do you want to resolved")) {
            this.discussionRoomService.updateStatus(roomID).subscribe(function (room) { return _this.room = room; });
        }
    };
    DetailroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detailroom',
            template: __webpack_require__("./src/app/web/detailroom/detailroom.component.html"),
            styles: [__webpack_require__("./src/app/web/detailroom/detailroom.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_discussionroom_service__["a" /* DiscussionroomService */],
            __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["b" /* Router */]])
    ], DetailroomComponent);
    return DetailroomComponent;
}());



/***/ }),

/***/ "./src/app/web/forum/forum.component.css":
/***/ (function(module, exports) {

module.exports = ".box-body{\r\n    background-color: white;\r\n    margin-bottom: 187px;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/web/forum/forum.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contenttest\">\r\n  <app-nvarbar></app-nvarbar>\r\n\r\n  <div class=\"gdlr-page-title-wrapper-forum\">\r\n\r\n    <a style=\"font-size:20px\" routerLink=\"/adding-post\">Create room</a>\r\n\r\n    <div class=\"gdlr-page-title-container\" style=\"margin-top: 30px\">\r\n      <h1 class=\"gdlr-page-title\" style=\"color: red\">FORUM DISCUSSION</h1>\r\n    </div>\r\n    <div class=\"input-group\" style=\"width: 500px; margin-right: auto; margin-left: auto;\">\r\n      <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"room.name\" #name=\"ngModel\">\r\n      <span class=\"input-group-btn\">\r\n        <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\" (click)=\"searchRoom()\">\r\n          <i class=\"fa fa-search\"></i>\r\n        </button>\r\n      </span>\r\n    </div>\r\n    <br>\r\n  </div>\r\n\r\n  \r\n  <div class=\"content-wrapperWeb\">\r\n    <div class=\"gdlr-item gdlr-content-item\">\r\n      <div class=\"box-body\">\r\n        <table class=\"table table-bordered\">\r\n          <thead style=\"background: lightblue\">\r\n            <tr>\r\n              <th class=\"col-md-7\">Room</th>\r\n              <th class=\"col-md-1\">Comment</th>\r\n              <th class=\"col-md-2 tb-title\">Status</th>\r\n              <th class=\"col-md-2 tb-title\">Date Post</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of pagedItems; let i = index\" [attr.data-index]=\"i\">\r\n\r\n              <td><a style=\"cursor: pointer;\" (click)=\"joinRoom(currentUser.username,item.username,item.roomID)\">{{item.name}}</a></td>\r\n              <td class=\"tb-title\">{{item.comment.length}}</td>\r\n              <td class=\"tb-title\">\r\n                <span *ngIf=\"checkOpening(item) == true\" style=\"color: dodgerblue\">{{item.status}}</span>\r\n                <span *ngIf=\"checkActive(item) == true\" style=\"color: lime\">{{item.status}}</span>\r\n                <span *ngIf=\"checkStatus(item) == true\" style=\"color: goldenrod\">{{item.status}}</span>\r\n              </td>\r\n              <td class=\"tb-title\">\r\n                {{item.datePost | date:'medium'}}\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"pager.totalItems <= 0\">\r\n              <td colspan=\"5\" style=\"text-align: center;\">No data available in table.</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"tableInfo\">Showing {{pager.startIndex<0?0:(pager.startIndex + 1)}} to {{pager.endIndex + 1}} of {{pager.totalItems}} entries</div>\r\n            </div>\r\n            <div class=\"col-sm-7\">\r\n              <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                  <a (click)=\"setPage(1)\">First</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                  <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                </li>\r\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                  <a (click)=\"setPage(page)\">{{page}}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                  <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                  <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            \r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/web/forum/forum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_discussionroom_service__ = __webpack_require__("./src/app/services/discussionroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForumComponent = /** @class */ (function () {
    function ForumComponent(discussionroomService, router, pagerService) {
        this.discussionroomService = discussionroomService;
        this.router = router;
        this.pagerService = pagerService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.room = {};
        this.pager = {};
        this.Active = false;
        this.count = 0;
    }
    ForumComponent.prototype.ngOnInit = function () {
        this.getRooms();
    };
    ForumComponent.prototype.getRooms = function () {
        var _this = this;
        this.discussionroomService.getRooms().subscribe(function (rooms) {
            _this.rooms = rooms;
            _this.setPage(1);
        });
    };
    ForumComponent.prototype.searchRoom = function () {
        var _this = this;
        this.discussionroomService.searchRooms(this.room.name).subscribe(function (rooms) {
            _this.rooms = rooms;
            _this.setPage(1);
        });
    };
    ForumComponent.prototype.joinRoom = function (username, usernameOfRoom, roomID) {
        var _this = this;
        if (!username.match(usernameOfRoom)) {
            this.discussionroomService.addUserView(roomID, username).subscribe(function (room) {
                _this.room = room;
                for (var _i = 0, _a = _this.rooms; _i < _a.length; _i++) {
                    var ro = _a[_i];
                    if (ro.roomID.match(_this.room.roomID)) {
                        ro = _this.room;
                    }
                }
            });
            localStorage.setItem('isActiveOf' + username, JSON.stringify(roomID));
            this.router.navigate(['/detailroom/' + roomID]);
        }
        else {
            this.router.navigate(['/detailroom/' + roomID]);
        }
    };
    ForumComponent.prototype.checkOpening = function (room) {
        if (room.viewusers.length == 0 && room.status == "Opening") {
            return true;
        }
        return false;
    };
    ForumComponent.prototype.checkActive = function (room) {
        if (room.viewusers.length > 0 && room.status == "Active") {
            return true;
        }
        return false;
    };
    ForumComponent.prototype.checkStatus = function (room) {
        if (room.status == "Resolved") {
            return true;
        }
        return false;
    };
    ForumComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.rooms.length, page);
        // get current page of items
        this.pagedItems = this.rooms.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ForumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forum',
            template: __webpack_require__("./src/app/web/forum/forum.component.html"),
            styles: [__webpack_require__("./src/app/web/forum/forum.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_discussionroom_service__["a" /* DiscussionroomService */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_pager_service__["a" /* PagerService */]])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/web/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/web/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nvarbar></app-nvarbar>\r\n<div id=\"body-content\">\r\n  <div class=\"panel-login\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <form id=\"register-form\" (ngSubmit)=\"updateUser()\" role=\"form\">\r\n            <h2 style=\"text-align: center;\">MY PROFILE</h2>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" name=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"user.username\" #username=\"ngModel\"\r\n                readonly>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.email }\">\r\n              <input type=\"email\" name=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" [(ngModel)]=\"newEmail\" #email=\"ngModel\">\r\n              <div class=\"help-block with-errors\" *ngIf=\"!valid.email\">\r\n                {{message.email}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.oldPassword }\">\r\n              <input type=\"password\" name=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"oldPass\">\r\n              <div class=\"help-block with-errors\" *ngIf=\"!valid.oldPassword\">\r\n                {{message.oldPassword}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.newPassword }\">\r\n              <input type=\"password\" name=\"new-password\" tabindex=\"2\" class=\"form-control\" placeholder=\"New Password\" [(ngModel)]=\"newPass\">\r\n              <div class=\"help-block with-errors\" *ngIf=\"!valid.newPassword\">\r\n                {{message.newPassword}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.cfnewPassword }\">\r\n              <input type=\"password\" name=\"confirm-password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\" [(ngModel)]=\"cfnewPass\">\r\n              <div class=\"help-block with-errors\" *ngIf=\"!valid.cfnewPassword\">\r\n                {{message.cfnewPassword}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4 col-sm-offset-4\">\r\n                  <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Edit Profile\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"slideshow\">\r\n  <img class=\"active\" src=\"../../../assets/slider/lifestyle-learning-english-online-white-wooden-table-background-top-view-flags-tablet-90070766.jpg\"\r\n    alt=\"Slideshow Image 1\" />\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/web/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.user = {};
        this.valid = {};
        this.message = {};
        this.oldPass = '';
        this.newPass = '';
        this.cfnewPass = '';
        this.newEmail = '';
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser(this.currentUser.username).subscribe(function (user) {
            _this.user = user;
            _this.newEmail = _this.user.email;
        });
        this.valid.email = true;
        this.valid.oldPassword = true;
        this.valid.newPassword = true;
        this.valid.cfnewPassword = true;
    };
    HomeComponent.prototype.updateUser = function () {
        var _this = this;
        if (this.validationProfile()) {
            if (this.newEmail !== this.user.email || this.oldPass.length > 0 || this.newPass.length > 0) {
                Promise.all([
                    this.userService.checkEmail(this.newEmail),
                    this.userService.checkOldPassword(this.user.username, this.oldPass)
                ]).then(function (result) {
                    result[0].forEach(function (isEmailExists) {
                        if (_this.newEmail !== _this.user.email) {
                            if (!isEmailExists) {
                                _this.message.email = 'Email already exists !!!';
                                _this.valid.email = false;
                            }
                        }
                    }).then(function (res) {
                        result[1].forEach(function (isCorrectPass) {
                            if (_this.oldPass.length > 0 && !isCorrectPass) {
                                _this.message.oldPassword = 'The current password is incorrect !!!';
                                _this.valid.oldPassword = false;
                            }
                            if (_this.valid.email && _this.valid.oldPassword) {
                                _this.user.email = _this.newEmail;
                                if (_this.newPass !== '') {
                                    _this.user.password = _this.newPass;
                                }
                                _this.userService.updateUser(_this.user).subscribe(function (user) {
                                    _this.user = user;
                                    alert('Update completed !!!');
                                });
                                _this.newPass = '';
                                _this.oldPass = '';
                                _this.cfnewPass = '';
                            }
                        });
                    });
                });
            }
            else if (this.newPass === '') {
                alert('Please change info to update profile !!!');
            }
        }
    };
    HomeComponent.prototype.validationProfile = function () {
        // check email
        this.valid.email = true;
        this.message.email = '';
        var emailRegex = new RegExp('^[a-zA-Z0-9]+@tma.com.vn$');
        if (this.newEmail === undefined || this.newEmail.trim().length === 0) {
            this.message.email = 'Email can not be blank !!!';
            this.valid.email = false;
        }
        else if (!emailRegex.test(this.newEmail.trim())) {
            this.message.email = 'Only use TMA email !!!';
            this.valid.email = false;
        }
        // check old password
        this.valid.oldPassword = true;
        this.message.oldPassword = '';
        // check new password
        this.valid.newPassword = true;
        this.message.newPassword = '';
        var passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$');
        if (this.oldPass.length > 0 && this.newPass.length === 0) {
            this.message.newPassword = 'New Password can not be blank !!!';
            this.valid.newPassword = false;
        }
        else if (this.oldPass.length === 0 && this.newPass.length > 0) {
            this.message.oldPassword = 'Please confirm your current password !!!';
            this.valid.oldPassword = false;
        }
        else if (this.newPass.length < 9 && this.newPass.length > 0) {
            this.message.newPassword = 'New Password must be more than 8 characters !!!';
            this.valid.newPassword = false;
        }
        else if (this.newPass.length > 15) {
            this.message.newPassword = 'New Password must be less than 15 characters !!!';
            this.valid.newPassword = false;
        }
        else if (!passwordRegex.test(this.newPass) && this.newPass.length > 0) {
            this.message.newPassword = 'New Password must contains least one upper case,lower case,digit,special character!!!';
            this.valid.newPassword = false;
        }
        else if (this.oldPass === this.newPass && this.newPass.length > 0) {
            this.message.newPassword = 'The new password must be different from the old password!!!';
            this.valid.newPassword = false;
        }
        // check confirm new password
        this.valid.cfnewPassword = true;
        this.message.cfnewPassword = '';
        if (this.cfnewPass !== this.newPass) {
            this.message.cfnewPassword = 'Confirm password is not correct!!!';
            this.valid.cfnewPassword = false;
        }
        if (!this.valid.email || !this.valid.oldPassword || !this.valid.newPassword || !this.valid.cfnewPassword) {
            return false;
        }
        return true;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/web/home/home.component.html"),
            styles: [__webpack_require__("./src/app/web/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/web/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n  padding-top: 90px;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n\r\na:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.panel {\r\n  border-radius: 5px;\r\n}\r\n\r\nlabel {\r\n  font-weight: 300;\r\n  color: #1e1e1e !important;\r\n}\r\n\r\n.panel-login {\r\n  border: none;\r\n  -webkit-box-shadow: 0px 0px 49px 14px rgba(188, 190, 194, 0.39);\r\n  box-shadow: 0px 0px 49px 14px rgba(188, 190, 194, 0.39);\r\n}\r\n\r\n.panel-body {\r\n  padding: 15px !important;\r\n}\r\n\r\n.panel-login .checkbox input[type=checkbox] {\r\n  margin-left: 0px;\r\n}\r\n\r\n.panel-login .checkbox label {\r\n  padding-left: 25px;\r\n  font-weight: 300;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.panel-login .checkbox {\r\n  padding-left: 20px;\r\n}\r\n\r\n.panel-login .checkbox label::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  width: 17px;\r\n  height: 17px;\r\n  left: 0;\r\n  margin-left: 0px;\r\n  border: 1px solid #cccccc;\r\n  border-radius: 3px;\r\n  background-color: #fff;\r\n  -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\r\n  transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\r\n}\r\n\r\n.panel-login .checkbox label::after {\r\n  display: inline-block;\r\n  position: absolute;\r\n  width: 16px;\r\n  height: 16px;\r\n  left: 0;\r\n  top: 0;\r\n  margin-left: 0px;\r\n  padding-left: 3px;\r\n  padding-top: 1px;\r\n  font-size: 11px;\r\n  color: #555555;\r\n}\r\n\r\n.panel-login .checkbox input[type=\"checkbox\"] {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.panel-login .checkbox input[type=\"checkbox\"]:focus+label::before {\r\n  outline: thin dotted;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n\r\n.panel-login .checkbox input[type=\"checkbox\"]:checked+label::after {\r\n  font-family: 'FontAwesome';\r\n  content: \"\\f00c\";\r\n}\r\n\r\n.panel-login>.panel-heading .tabs {\r\n  padding: 0;\r\n}\r\n\r\n.panel-login h2 {\r\n  margin: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.panel-login>.panel-heading {\r\n  color: #fff;\r\n  background-color: #e8e9ec;\r\n  border-color: #fff;\r\n  text-align: center;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  border-top-left-radius: 0px;\r\n  border-top-right-radius: 0px;\r\n  border-bottom: 0px;\r\n  padding: 0px 15px;\r\n}\r\n\r\n.panel-login .form-group {\r\n  padding: 0 30px;\r\n}\r\n\r\n.panel-login>.panel-heading .login {\r\n  padding: 20px 30px;\r\n  color: #666;\r\n  border-bottom-right-radius: 5px;\r\n}\r\n\r\n.panel-login>.panel-heading .register {\r\n  padding: 20px 30px;\r\n  color: #666;\r\n  border-bottom-right-radius: 5px;\r\n}\r\n\r\n.panel-login>.panel-heading a {\r\n  text-decoration: none;\r\n  color: #666;\r\n  font-weight: 300;\r\n  font-size: 16px;\r\n  -webkit-transition: all 0.1s linear;\r\n  transition: all 0.1s linear;\r\n}\r\n\r\n.panel-heading .active .login {\r\n  background: #2d3b55;\r\n  color: #fff;\r\n}\r\n\r\n.panel-heading .active .register {\r\n  background: #2d3b55;\r\n  color: #fff;\r\n}\r\n\r\n.panel-login>.panel-heading a#register-form-link {\r\n  color: #fff;\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n\r\n.panel-login>.panel-heading a#login-form-link {\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n.panel-login input[type=\"text\"],\r\n.panel-login input[type=\"email\"],\r\n.panel-login input[type=\"password\"] {\r\n  height: 45px;\r\n  border: 0;\r\n  font-size: 16px;\r\n  -webkit-transition: all 0.1s linear;\r\n  transition: all 0.1s linear;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n  border-bottom: 1px solid #e7e7e7;\r\n  border-radius: 0px;\r\n  padding: 6px 0px;\r\n}\r\n\r\n.panel-login input:hover,\r\n.panel-login input:focus {\r\n  outline: none;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n  border-color: #ccc;\r\n}\r\n\r\n.btn-login {\r\n  background-color: lightslategray;\r\n  outline: none;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  height: auto;\r\n  font-weight: normal;\r\n  padding: 14px 0;\r\n  text-transform: uppercase;\r\n  border: none;\r\n  border-radius: 0px;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n\r\n.btn-login:hover,\r\n.btn-login:focus {\r\n  color: #fff;\r\n  background-color: #2D3B55;\r\n}\r\n\r\n.forgot-password {\r\n  text-decoration: underline;\r\n  color: #888;\r\n}\r\n\r\n.forgot-password:hover,\r\n.forgot-password:focus {\r\n  text-decoration: underline;\r\n  color: #666;\r\n}\r\n\r\n.btn-register {\r\n  background-color: lightslategray;\r\n  outline: none;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  height: auto;\r\n  font-weight: normal;\r\n  padding: 14px 0;\r\n  text-transform: uppercase;\r\n  border: none;\r\n  border-radius: 0px;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n\r\n.btn-register:hover,\r\n.btn-register:focus {\r\n  color: #fff;\r\n  background-color: #2D3B55;\r\n}\r\n\r\n.forgot-pass {\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/web/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-md-offset-3\">\r\n      <div class=\"panel panel-login\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <form id=\"login-form\" (ngSubmit)=\"login()\" role=\"form\" style=\"display: block;\">\r\n                <h2>LOGIN</h2>\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" name=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"model.username\"\r\n                    #username=\"ngModel\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input type=\"password\" name=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"model.password\"\r\n                    #password=\"ngModel\">\r\n                </div>\r\n                <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n                <div class=\"forgot-pass form-group\">\r\n                  <a href=\"#\">Forgot Password?</a>\r\n                </div>\r\n                <div class=\"col-xs-6 form-group pull-left checkbox\">\r\n                  <input id=\"checkbox1\" type=\"checkbox\" name=\"remember\" #remember [checked]=\"rememberMe\" (change)=\"onRememberMeChanged(remember.checked)\">\r\n                  <label>Remember Me</label>\r\n                </div>\r\n                <div class=\"col-xs-6 form-group pull-right\">\r\n                  <input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\">\r\n                </div>\r\n              </form>\r\n              <form id=\"register-form\" (ngSubmit)=\"register()\" role=\"form\" style=\"display: none;\">\r\n                <h2>REGISTER</h2>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.username }\">\r\n                  <input type=\"text\" name=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"newUser.username\"\r\n                    #username=\"ngModel\">\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.username\">\r\n                    {{message.username}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.email }\">\r\n                  <input type=\"email\" name=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" [(ngModel)]=\"newUser.email\"\r\n                   #email=\"ngModel\">\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.email\">\r\n                    {{message.email}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.password }\">\r\n                  <input type=\"password\" name=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"newUser.password\"\r\n                    #password=\"ngModel\">\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.passw\">\r\n                    {{message.passw}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': !valid.cfpassword }\">\r\n                  <input type=\"password\" name=\"cfpassword\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\"\r\n                    [(ngModel)]=\"this.newUser.cfpassword\" #cfpassword=\"ngModel\">\r\n                  <div class=\"help-block with-errors\" *ngIf=\"!valid.cfpassword\">\r\n                    {{message.cfpassword}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-sm-offset-3\">\r\n                      <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-heading\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-6 tabs\">\r\n              <a href=\"#\" class=\"active\" id=\"login-form-link\">\r\n                <div class=\"login\">LOGIN</div>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-xs-6 tabs\">\r\n              <a href=\"#\" id=\"register-form-link\">\r\n                <div class=\"register\">REGISTER</div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"slideshow\">\r\n  <img class=\"active\" src=\"../../../assets/slider/lifestyle-learning-english-online-white-wooden-table-background-top-view-flags-tablet-90070766.jpg\"\r\n    alt=\"Slideshow Image 1\" />\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/web/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService, userService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.model = {};
        this.loading = false;
        this.error = '';
        this.newUser = {};
        this.valid = {};
        this.message = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.token != null) {
            this.router.navigate(['/']);
        }
        if (localStorage.getItem('rememberMe') != null) {
            var remember = JSON.parse(localStorage.getItem('rememberMe'));
            this.model.username = remember.username;
            this.model.password = remember.password;
            this.rememberMe = remember.remember;
        }
    };
    LoginComponent.prototype.onRememberMeChanged = function (value) {
        this.rememberMe = value;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                if (_this.rememberMe) {
                    // tslint:disable-next-line:max-line-length
                    localStorage.setItem('rememberMe', JSON.stringify({ username: _this.model.username, password: _this.model.password, remember: _this.rememberMe }));
                }
                else {
                    localStorage.removeItem('rememberMe');
                }
                alert('Welcome to Toeic Hepler web application !!!');
                _this.router.navigate(['']);
            }
            else {
                // login failed
                _this.error = 'Username or password is incorrect !!!';
                _this.loading = false;
            }
        });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        if (this.validationRegister()) {
            Promise.all([
                this.userService.checkUser(this.newUser.username),
                this.userService.checkEmail(this.newUser.email)
            ]).then(function (res) {
                var isUserExists = true;
                res[0].forEach(function (isExists) {
                    if (!isExists) {
                        _this.message.username = 'Username already exists !!!';
                        _this.valid.username = false;
                    }
                    isUserExists = isExists;
                }).then(function (res1) {
                    res[1].forEach(function (isEmailExists) {
                        if (!isEmailExists) {
                            _this.message.email = 'Email already exists !!!';
                            _this.valid.email = false;
                        }
                        if (isUserExists && isEmailExists) {
                            _this.newUser.username = _this.newUser.username.trim();
                            _this.newUser.username = _this.newUser.username.toLowerCase();
                            _this.newUser.email = _this.newUser.email.trim();
                            _this.userService.addUser(_this.newUser).subscribe(function (result) {
                                _this.model.username = result.username;
                                _this.model.password = _this.newUser.password;
                                _this.login();
                            });
                        }
                    });
                });
            });
        }
    };
    LoginComponent.prototype.validationRegister = function () {
        // check username
        this.valid.username = true;
        this.message.username = '';
        var usernameRegex = new RegExp('^[a-z0-9]{7,15}$');
        if (this.newUser.username === undefined || this.newUser.username.trim().length === 0) {
            this.message.username = 'Username can not be blank !!!';
            this.valid.username = false;
        }
        else if (this.newUser.username.trim().length < 7) {
            this.message.username = 'Username must be more than 6 characters !!!';
            this.valid.username = false;
        }
        else if (this.newUser.username.trim().length > 15) {
            this.message.username = 'Username must be less than 15 characters !!!';
            this.valid.username = false;
        }
        else if (!usernameRegex.test(this.newUser.username.trim())) {
            this.message.username = 'Username only contains letters and numbers !!!';
            this.valid.username = false;
        }
        // check email
        this.valid.email = true;
        this.message.email = '';
        var emailRegex = new RegExp('^[a-zA-Z0-9]+@tma.com.vn$');
        if (this.newUser.email === undefined || this.newUser.email.trim().length === 0) {
            this.message.email = 'Email can not be blank !!!';
            this.valid.email = false;
        }
        else if (!emailRegex.test(this.newUser.email.trim())) {
            this.message.email = 'Only use TMA email for register !!!';
            this.valid.email = false;
        }
        // check password
        this.valid.passw = true;
        this.message.passw = '';
        var passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$');
        if (this.newUser.password === undefined || this.newUser.password.length === 0) {
            this.message.passw = 'Password can not be blank !!!';
            this.valid.passw = false;
        }
        else if (this.newUser.password.length < 9) {
            this.message.passw = 'Password must be more than 8 characters !!!';
            this.valid.passw = false;
        }
        else if (this.newUser.password.length > 15) {
            this.message.passw = 'Password must be less than 15 characters !!!';
            this.valid.passw = false;
        }
        else if (!passwordRegex.test(this.newUser.password)) {
            this.message.passw = 'Password must contains least one upper case,lower case,digit,special character!!!';
            this.valid.passw = false;
        }
        // check confirm password
        this.valid.cfpassword = true;
        this.message.cfpassword = '';
        if (this.newUser.cfpassword !== this.newUser.password) {
            this.message.cfpassword = 'Confirm password is not correct!!!';
            this.valid.cfpassword = false;
        }
        if (!this.valid.username || !this.valid.email || !this.valid.passw || !this.valid.cfpassword) {
            return false;
        }
        return true;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/web/login/login.component.html"),
            styles: [__webpack_require__("./src/app/web/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/web/minitest-history/minitest-history.component.css":
/***/ (function(module, exports) {

module.exports = ".box-body{\r\n  background-color: white;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/web/minitest-history/minitest-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contenttest\">\r\n  <app-nvarbar></app-nvarbar>\r\n\r\n  <div class=\"gdlr-page-title-wrapper\">\r\n    <div class=\"gdlr-page-title-container\">\r\n      <h1 class=\"gdlr-page-title\">TOEIC MINITEST – RESULT HISTORY</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content-wrapperWeb\">\r\n    <div class=\"gdlr-item gdlr-content-item\">\r\n      <div class=\"box-body\">\r\n        <table class=\"table table-bordered table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th>No</th>\r\n              <th>Date</th>\r\n              <th>ExamID</th>\r\n              <th>Part No</th>\r\n              <th>Answer Correct / Total</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of pagedItems; let i = index\" [attr.data-index]=\"i\">\r\n              <td>{{pager.currentPage==1?i+1:(pager.currentPage-1)+\"\"+(i+1)}}</td>\r\n              <td>{{item.dateTraining | date:'medium'}}</td>\r\n              <td>{{item.examID}}</td>\r\n              <td>{{item.partNo}}</td>\r\n              <td>{{item.answerCorrect}}/{{item.questionTotal}}</td>\r\n            </tr>\r\n            <tr *ngIf=\"pager.totalItems <= 0\">\r\n              <td colspan=\"5\" style=\"text-align: center;\">No data available in table.</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-5\">\r\n            <div class=\"tableInfo\">Showing {{pager.startIndex\r\n              <0?0:(pager.startIndex + 1)}} to {{pager.endIndex + 1}} of {{pager.totalItems}} entries</div>\r\n            </div>\r\n            <div class=\"col-sm-7\">\r\n              <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                  <a (click)=\"setPage(1)\">First</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                  <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                </li>\r\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                  <a (click)=\"setPage(page)\">{{page}}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                  <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                  <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/web/minitest-history/minitest-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinitestHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MinitestHistoryComponent = /** @class */ (function () {
    function MinitestHistoryComponent(examService, pagerService) {
        this.examService = examService;
        this.pagerService = pagerService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // pager object
        this.pager = {};
    }
    MinitestHistoryComponent.prototype.ngOnInit = function () {
        this.getTrainingResultHistory();
    };
    MinitestHistoryComponent.prototype.getTrainingResultHistory = function () {
        var _this = this;
        this.examService.getMiniTestResultHistory(this.currentUser.username).subscribe(function (results) {
            _this.listMiniTestHistory = results;
            _this.setPage(1);
        });
    };
    MinitestHistoryComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.listMiniTestHistory.length, page);
        // get current page of items
        this.pagedItems = this.listMiniTestHistory.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    MinitestHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-minitest-history',
            template: __webpack_require__("./src/app/web/minitest-history/minitest-history.component.html"),
            styles: [__webpack_require__("./src/app/web/minitest-history/minitest-history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_exam_service__["a" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_0__services_pager_service__["a" /* PagerService */]])
    ], MinitestHistoryComponent);
    return MinitestHistoryComponent;
}());



/***/ }),

/***/ "./src/app/web/mypost/mypost.component.css":
/***/ (function(module, exports) {

module.exports = ".box-body{\r\n    background-color: white;\r\n    margin-bottom: 187px;\r\n}\r\nh1 {\r\n    color: cornflowerblue;\r\n}"

/***/ }),

/***/ "./src/app/web/mypost/mypost.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contenttest\">\r\n  <app-nvarbar></app-nvarbar>\r\n\r\n  <div class=\"gdlr-page-title-wrapper-forum\">\r\n      <h1>MY POST</h1>\r\n  </div>\r\n\r\n  <div class=\"content-wrapperWeb\">\r\n      <div class=\"gdlr-item gdlr-content-item\">\r\n        <div class=\"box-body\">\r\n              <table class=\"table table-bordered\">\r\n                  <thead style=\"background: lightblue\">\r\n                      <tr>\r\n                        <th class=\"col-md-7\">Room</th>\r\n                        <th class=\"col-md-1\">Comment</th>\r\n                        <th class=\"col-md-2 tb-title\">Status</th>\r\n                        <th class=\"col-md-2 tb-title\">Date Post</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of pagedItems; let i = index\" [attr.data-index]=\"i\">\r\n                      \r\n                        <td><a style=\"cursor: pointer;\" (click)=\"joinRoom(currentUser.username,item.username,item.roomID)\" >{{item.name}}</a></td>\r\n                        <td class=\"tb-title\">{{item.comment.length}}</td>\r\n                        <td class=\"tb-title\">\r\n                          {{item.datePost | date:'medium'}}\r\n                        </td>\r\n                        <td class=\"tb-title\">\r\n                            <a (click)=\"deleteRoom(item,currentUser.username)\">\r\n                              <span class=\"fa fa-trash-o\"></span>\r\n                            </a>\r\n                        </td>\r\n                      </tr>\r\n                      <tr *ngIf=\"pager.totalItems <= 0\">\r\n                          <td colspan=\"5\" style=\"text-align: center;\">No data available in table.</td>\r\n                      </tr>\r\n                    </tbody>\r\n              </table>\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-5\">\r\n                    <div class=\"tableInfo\">Showing {{pager.startIndex<0?0:(pager.startIndex + 1)}} to {{pager.endIndex + 1}} of {{pager.totalItems}} entries</div>\r\n                  </div>\r\n                  <div class=\"col-sm-7\">\r\n                    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a (click)=\"setPage(1)\">First</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                      </li>\r\n                      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                        <a (click)=\"setPage(page)\">{{page}}</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  \r\n                </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/web/mypost/mypost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_discussionroom_service__ = __webpack_require__("./src/app/services/discussionroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MypostComponent = /** @class */ (function () {
    function MypostComponent(discussionroomService, pagerService) {
        this.discussionroomService = discussionroomService;
        this.pagerService = pagerService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.pager = {};
    }
    MypostComponent.prototype.ngOnInit = function () {
        this.getPostsByUsername(this.currentUser.username);
    };
    MypostComponent.prototype.getPostsByUsername = function (username) {
        var _this = this;
        this.discussionroomService.getPostsByUsername(username).subscribe(function (rooms) {
            _this.rooms = rooms;
            _this.setPage(1);
        });
    };
    MypostComponent.prototype.deleteRoom = function (dRoom, username) {
        var _this = this;
        if (username.match(dRoom.username)) {
            if (confirm('Do you want to delete it ?')) {
                this.discussionroomService.deleteRoom(dRoom.roomID).subscribe(function (result) {
                    _this.getPostsByUsername(username);
                });
            }
        }
        else {
            alert("You can't delete this post of another user");
        }
    };
    MypostComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.rooms.length, page);
        // get current page of items
        this.pagedItems = this.rooms.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    MypostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mypost',
            template: __webpack_require__("./src/app/web/mypost/mypost.component.html"),
            styles: [__webpack_require__("./src/app/web/mypost/mypost.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_discussionroom_service__["a" /* DiscussionroomService */],
            __WEBPACK_IMPORTED_MODULE_2__services_pager_service__["a" /* PagerService */]])
    ], MypostComponent);
    return MypostComponent;
}());



/***/ }),

/***/ "./src/app/web/room/room.component.css":
/***/ (function(module, exports) {

module.exports = ".show {\r\n  display: inline !important;\r\n}\r\n\r\n.content-wrapper {\r\n  margin-left: 0px !important;\r\n}\r\n\r\n.point {\r\n  width: 40px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n}\r\n\r\n.totalPoint{\r\n  width: 70px;\r\n  font-size: 30px;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/web/room/room.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contenttest\">\r\n  <app-nvarbar></app-nvarbar>\r\n  <div *ngIf=\"!loading\">\r\n    <div class=\"gdlr-page-title-wrapper\">\r\n      <div class=\"gdlr-page-title-container\">\r\n        <h1 class=\"gdlr-page-title\">TOEIC TESTS – FULL TEST - ROOM {{roomID}}</h1>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content-wrapperWeb\">\r\n      <div class=\"gdlr-item gdlr-content-item\">\r\n        <blockquote>\r\n          <p style=\"font-weight: bold;\" *ngIf=\"!isCountdown && !isExpired && !isStart\">The test session will start at\r\n            <span style=\"color: red\">{{testRoom.startTime | date:'medium'}}.</span>\r\n          </p>\r\n          <p style=\"font-weight: bold;\" *ngIf=\"isCountdown && !isExpired  && !isStart\">The test session will start in\r\n            <span style=\"color: red\">{{timeCountdownStart}}</span>\r\n          </p>\r\n          <p style=\"font-weight: bold;\" *ngIf=\"isStart && !isExpired\">You can start the test session right now.</p>\r\n          <p style=\"font-weight: bold;\" *ngIf=\"isExpired\">The test has expired, please join the another test session.</p>\r\n        </blockquote>\r\n        <p style=\"text-align: center\" *ngIf=\"isStart && !isExpired\">\r\n          <button (click)=\"start()\" class=\"gdlr-button small\">START TEST</button>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- START TOEIC FULL TEST CONTENT-->\r\n  <div *ngIf=\"loading && !isSubmit\">\r\n    <div class=\"gdlr-page-title-wrapper\">\r\n      <div class=\"gdlr-page-title-container\">\r\n        <h1 class=\"gdlr-page-title\">TOEIC TESTS – FULL TEST - ROOM {{roomID}}</h1>\r\n      </div>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <div id=\"test-time\">{{timeCountdown}}</div>\r\n\r\n      <form #answerForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(answerForm)\">\r\n        <!-- SHOW PART 1 -->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 1 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part1.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 1\" [src]=\"part1.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers1\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SHOW PART 2-->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 2 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part2.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 2\" [src]=\"part2.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers2\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SHOW PART 3-->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 3 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part3.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 3\" [src]=\"part3.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers3\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SHOW PART 4-->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 4 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part4.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 4\" [src]=\"part4.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers4\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SHOW PART 5-->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 5 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part5.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 5\" [src]=\"part5.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers5\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <!-- SHOW PART 6-->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 6 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part6.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 6\" [src]=\"part6.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers6\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SHOW PART 7-->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 7 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part7.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 7\" [src]=\"part7.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers7\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\" (click)=\"onSelectionChange()\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n                <input type=\"submit\" class=\"gdlr-button small\" value=\"submit\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"test-page\">\r\n      <ul class=\"pager\">\r\n        <li>\r\n          <button *ngIf=\"prebtn\" (click)=\"prePart()\">Previous</button>\r\n        </li>\r\n        <li *ngIf=\"isChoosePart\">\r\n          <select class=\"custom-select\" style=\"color: black\" name=\"selectPart\" [(ngModel)]=\"selectCnt\" (change)=\"changePart()\">\r\n            <option value=\"1\">Part 1</option>\r\n            <option value=\"2\">Part 2</option>\r\n            <option value=\"3\">Part 3</option>\r\n            <option value=\"4\">Part 4</option>\r\n            <option value=\"5\">Part 5</option>\r\n            <option value=\"6\">Part 6</option>\r\n            <option value=\"7\">Part 7</option>\r\n          </select>\r\n        </li>\r\n        <li>\r\n          <button *ngIf=\"nextbtn\" (click)=\"nextPart()\">Next</button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"isSubmit\">\r\n    <div class=\"gdlr-page-title-wrapper\">\r\n      <div class=\"gdlr-page-title-container\">\r\n        <h1 class=\"gdlr-page-title\">TOEIC TESTS – RESULT</h1>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content-wrapperWeb\">\r\n      <div class=\"gdlr-item gdlr-content-item\">\r\n        <table class=\"tb\">\r\n          <tr>\r\n            <td>\r\n              <div class=\"tb-title\">\r\n                <h4>FULL NAME</h4>\r\n              </div>\r\n              <div class=\"tb-content\">{{testResult.username}}</div>\r\n            </td>\r\n            <td>\r\n              <div class=\"tb-label\">\r\n                <span>LISTENING</span>\r\n              </div>\r\n              <div class=\"tb-p\">YOUR SCORE</div>\r\n              <div class=\"tb-score\">\r\n                <span class=\"tb-score-icon\">\r\n                  <label class=\"point\">{{testResult.listenPoint}}</label>\r\n                </span>\r\n              </div>\r\n            </td>\r\n            <td rowspan=\"2\">\r\n              <div class=\"tb-total\">\r\n                <span>TOTAL SCORE</span>\r\n              </div>\r\n              <div class=\"tb-total-score\">\r\n                <span class=\"tb-total-score-icon\">\r\n                  <label class=\"totalPoint\">{{testResult.testScore}}</label>\r\n                </span>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <div class=\"tb-title\">\r\n                <h4>TEST DATE</h4>\r\n              </div>\r\n              <div class=\"tb-content\">{{testResult.dateTest | date:'medium' }}</div>\r\n            </td>\r\n            <td>\r\n              <div class=\"tb-label\">\r\n                <span>READING</span>\r\n              </div>\r\n              <div class=\"tb-p\">YOUR SCORE</div>\r\n              <div class=\"tb-score\">\r\n                <span class=\"tb-score-icon\">\r\n                  <label class=\"point\">{{testResult.readPoint}}</label>\r\n                </span>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/web/room/room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_testroom_service__ = __webpack_require__("./src/app/services/testroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomComponent = /** @class */ (function () {
    function RoomComponent(route, examService, testroomService, routers, authenticationService) {
        this.route = route;
        this.examService = examService;
        this.testroomService = testroomService;
        this.routers = routers;
        this.authenticationService = authenticationService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.isChoosePart = false;
        this.isCountdown = false;
        this.isStart = false;
        this.isExpired = false;
        this.loading = false;
        this.isSubmit = false;
        this.nextbtn = true;
        this.prebtn = false;
        this.count = 1;
        this.selectCnt = '7';
        this.audio1 = new Audio();
        this.audio2 = new Audio();
        this.audio3 = new Audio();
        this.audio4 = new Audio();
        this.part1 = {};
        this.part2 = {};
        this.part3 = {};
        this.part4 = {};
        this.part5 = {};
        this.part6 = {};
        this.part7 = {};
        this.answers1 = [];
        this.answers2 = [];
        this.answers3 = [];
        this.answers4 = [];
        this.answers5 = [];
        this.answers6 = [];
        this.answers7 = [];
        this.testResult = {};
        this.testRoom = {};
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        var context = this;
        this.getout = function (e) {
            context.testroomService.checkoutUser(context.currentUser.username, context.testRoom.roomID).subscribe(function (r) {
            });
            e.preventDefault();
        };
        window.addEventListener('beforeunload', this.getout);
        var id = this.route.snapshot.paramMap.get('id');
        this.roomID = id;
        this.testroomService.getTestRoomByRoomID(this.roomID).subscribe(function (result) {
            _this.testRoom = result;
            if (_this.testRoom.roomID === null) {
                _this.routers.navigate(['/home']);
            }
            var check = false;
            if (_this.testRoom.userJoinedList !== null) {
                _this.testRoom.userRegisteredList.forEach(function (element) {
                    if (element === _this.currentUser.username) {
                        check = true;
                    }
                });
            }
            else {
                check = false;
            }
            if (!check) {
                _this.routers.navigate(['/home']);
            }
            var check1 = false;
            if (_this.testRoom.userJoinedList !== null) {
                _this.testRoom.userJoinedList.forEach(function (element) {
                    if (element === _this.currentUser.username) {
                        check1 = true;
                    }
                });
            }
            else {
                check1 = false;
            }
            if (check1) {
                alert('You completed the test at this test session, Please join the another test session.');
                _this.routers.navigate(['/home']);
            }
            else {
                _this.checkTime();
                var userTestSession = JSON.parse(localStorage.getItem('userTestSession'));
                if (userTestSession !== null) {
                    if (userTestSession.username === _this.currentUser.username && userTestSession.roomID === _this.roomID) {
                        _this.answers1 = userTestSession.answers1;
                        _this.answers2 = userTestSession.answers2;
                        _this.answers3 = userTestSession.answers3;
                        _this.answers4 = userTestSession.answers4;
                        _this.answers5 = userTestSession.answers5;
                        _this.answers6 = userTestSession.answers6;
                        _this.answers7 = userTestSession.answers7;
                        _this.starttest();
                    }
                }
                else {
                    _this.testroomService.checkUserOnline(_this.currentUser.username, _this.testRoom.roomID).subscribe(function (isOnline) {
                        if (!isOnline) {
                            _this.starttest();
                        }
                    });
                }
            }
        });
        this.numbers = Array(200).fill(1).map(function (x, i) { return i + 1; });
        // Set answer for part 1
        this.numbers1 = this.numbers.slice(0, 10);
        for (var i = 0; i < this.numbers1.length; i++) {
            var ans = {};
            ans.name = this.numbers1[i];
            ans.value = '';
            this.answers1.push(ans);
        }
        // Set answer for part 2
        this.numbers2 = this.numbers.slice(10, 40);
        for (var i = 0; i < this.numbers2.length; i++) {
            var ans = {};
            ans.name = this.numbers2[i];
            ans.value = '';
            this.answers2.push(ans);
        }
        // Set answer for part 3
        this.numbers3 = this.numbers.slice(40, 70);
        for (var i = 0; i < this.numbers3.length; i++) {
            var ans = {};
            ans.name = this.numbers3[i];
            ans.value = '';
            this.answers3.push(ans);
        }
        // Set answer for part 4
        this.numbers4 = this.numbers.slice(70, 100);
        for (var i = 0; i < this.numbers4.length; i++) {
            var ans = {};
            ans.name = this.numbers4[i];
            ans.value = '';
            this.answers4.push(ans);
        }
        // Set answer for part 5
        this.numbers5 = this.numbers.slice(100, 140);
        for (var i = 0; i < this.numbers5.length; i++) {
            var ans = {};
            ans.name = this.numbers5[i];
            ans.value = '';
            this.answers5.push(ans);
        }
        // Set answer for part 6
        this.numbers6 = this.numbers.slice(140, 152);
        for (var i = 0; i < this.numbers6.length; i++) {
            var ans = {};
            ans.name = this.numbers6[i];
            ans.value = '';
            this.answers6.push(ans);
        }
        // Set answer for part 7
        this.numbers7 = this.numbers.slice(152, 200);
        for (var i = 0; i < this.numbers7.length; i++) {
            var ans = {};
            ans.name = this.numbers7[i];
            ans.value = '';
            this.answers7.push(ans);
        }
    };
    RoomComponent.prototype.ngOnDestroy = function () {
        this.audio1.pause();
        this.audio2.pause();
        this.audio3.pause();
        this.audio4.pause();
        clearInterval(this.interval1);
        clearInterval(this.interval);
        this.testroomService.checkoutUser(this.currentUser.username, this.testRoom.roomID).subscribe(function (r) {
        });
        window.removeEventListener('beforeunload', this.getout);
    };
    RoomComponent.prototype.checkTime = function () {
        var _this = this;
        this.testroomService.getCurrentTime().subscribe(function (time) {
            var currentTime = new Date(time);
            var startTime = new Date(_this.testRoom.startTime);
            if (startTime.getFullYear() === currentTime.getFullYear() &&
                startTime.getMonth() === currentTime.getMonth() &&
                startTime.getDate() === currentTime.getDate()) {
                _this.interval1 = setInterval(function () {
                    _this.authenticationService.isTokenExpired();
                    _this.testroomService.getCurrentTime().subscribe(function (time1) {
                        currentTime = new Date(time1);
                        if ((startTime.getHours() === currentTime.getHours() && startTime.getMinutes() > currentTime.getMinutes()) ||
                            (startTime.getHours() === currentTime.getHours() + 1 && startTime.getMinutes() <= currentTime.getMinutes())) {
                            var timer2 = '';
                            if (startTime.getHours() === currentTime.getHours()) {
                                if (startTime.getMinutes() === currentTime.getMinutes()) {
                                    timer2 = (startTime.getMinutes() - currentTime.getMinutes()) + ':' + (60 - currentTime.getSeconds());
                                }
                                else {
                                    timer2 = (startTime.getMinutes() - currentTime.getMinutes() - 1) + ':' + (60 - currentTime.getSeconds());
                                }
                            }
                            else {
                                timer2 = (59 - currentTime.getMinutes() + startTime.getMinutes()) + ':' + (60 - currentTime.getSeconds());
                            }
                            _this.isCountdown = true;
                            var timer = timer2.split(':');
                            // by parsing integer, I avoid all extra string processing
                            var minutes = parseInt(timer[0], 10);
                            var seconds = parseInt(timer[1], 10);
                            --seconds;
                            minutes = (seconds < 0) ? --minutes : minutes;
                            seconds = (seconds < 0) ? 59 : seconds;
                            seconds = (seconds < 10) ? 0 + seconds : seconds;
                            if (minutes <= 0 && seconds <= 0) {
                                _this.isStart = true;
                            }
                            // minutes = (minutes < 10) ?  minutes : minutes;
                            var secondString = '';
                            secondString = (seconds < 0) ? '59' : seconds.toString();
                            secondString = (seconds < 10) ? '0' + seconds : seconds.toString();
                            _this.timeCountdownStart = minutes + ':' + secondString;
                        }
                        else if ((startTime.getHours() + 2 < currentTime.getHours())
                            ||
                                (startTime.getHours() + 2 === currentTime.getHours() &&
                                    startTime.getMinutes() <= currentTime.getMinutes())) {
                            _this.isExpired = true;
                        }
                        else if (startTime.getHours() === currentTime.getHours() && startTime.getMinutes() === currentTime.getMinutes()) {
                            _this.isStart = true;
                        }
                    });
                }, 1000);
            }
            else if ((startTime.getFullYear() < currentTime.getFullYear())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() < currentTime.getMonth())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() < currentTime.getDate())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() === currentTime.getDate() &&
                        startTime.getHours() + 2 < currentTime.getHours())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() === currentTime.getDate() &&
                        startTime.getHours() + 2 === currentTime.getHours() &&
                        startTime.getMinutes() <= currentTime.getMinutes())) {
                _this.isExpired = true;
            }
        });
    };
    RoomComponent.prototype.startTime = function () {
        var _this = this;
        var currentTime;
        var cnt = 0;
        this.interval = setInterval(function () {
            _this.authenticationService.isTokenExpired();
            _this.testroomService.checkUserOnline(_this.currentUser.username, _this.testRoom.roomID).subscribe(function (isOnline) {
                if (isOnline) {
                    alert('The account is being logged in somewhere else !!!');
                    clearInterval(_this.interval);
                    _this.routers.navigate(['/home']);
                }
            });
            _this.testroomService.getCurrentTime().subscribe(function (time) {
                currentTime = new Date(time);
                var startTime = new Date(_this.testRoom.startTime);
                var timer2 = '';
                if (startTime.getHours() === currentTime.getHours()) {
                    timer2 = (119 - (currentTime.getMinutes() - startTime.getMinutes())) + ':' + (60 - currentTime.getSeconds());
                }
                else if (startTime.getHours() + 1 === currentTime.getHours()) {
                    timer2 = (119 - (currentTime.getMinutes() + 59 - startTime.getMinutes())) + ':' + (60 - currentTime.getSeconds());
                }
                else if (startTime.getHours() + 2 === currentTime.getHours() && startTime.getMinutes() > currentTime.getMinutes()) {
                    if (startTime.getMinutes() <= currentTime.getMinutes()) {
                        timer2 = '0:1';
                    }
                    else {
                        timer2 = (119 - (currentTime.getMinutes() + 119 - startTime.getMinutes() - 1)) + ':' + (60 - currentTime.getSeconds());
                    }
                }
                else {
                    timer2 = '0:1';
                }
                var timer = timer2.split(':');
                // by parsing integer, I avoid all extra string processing
                var minutes = parseInt(timer[0], 10);
                var seconds = parseInt(timer[1], 10);
                --seconds;
                minutes = (seconds < 0) ? --minutes : minutes;
                seconds = (seconds < 0) ? 59 : seconds;
                seconds = (seconds < 10) ? 0 + seconds : seconds;
                if (minutes <= 0 && seconds <= 0) {
                    clearInterval(_this.interval);
                    _this.onFormSubmit();
                }
                // minutes = (minutes < 10) ?  minutes : minutes;
                var secondString = '';
                secondString = (seconds < 0) ? '59' : seconds.toString();
                secondString = (seconds < 10) ? '0' + seconds : seconds.toString();
                _this.timeCountdown = minutes + ':' + secondString;
                timer2 = minutes + ':' + seconds;
                // Synchronize play time of mp3
                if (cnt < 3) {
                    var min = 0;
                    var sec = 0;
                    if (startTime.getHours() === currentTime.getHours()) {
                        min = currentTime.getMinutes() - startTime.getMinutes();
                        sec = currentTime.getSeconds();
                    }
                    else if (startTime.getHours() + 1 === currentTime.getHours()) {
                        min = 60 - startTime.getMinutes() + currentTime.getMinutes();
                        sec = currentTime.getSeconds();
                    }
                    else if (startTime.getHours() + 2 === currentTime.getHours()) {
                        min = 60 - startTime.getMinutes() + 60 + currentTime.getMinutes();
                        sec = currentTime.getSeconds();
                    }
                    var timeMp3 = (min * 60) + sec;
                    if (timeMp3 > _this.audio1.duration) {
                        _this.audio1.currentTime = _this.audio1.duration;
                        if (timeMp3 > (_this.audio1.duration + _this.audio2.duration)) {
                            _this.audio2.currentTime = _this.audio2.duration;
                            if (timeMp3 > (_this.audio1.duration + _this.audio2.duration + _this.audio3.duration)) {
                                _this.audio3.currentTime = _this.audio3.duration;
                                if (timeMp3 > (_this.audio1.duration + _this.audio2.duration + _this.audio3.duration + _this.audio4.duration)) {
                                    _this.audio4.currentTime = _this.audio4.duration;
                                    _this.count = 5;
                                    _this.prebtn = true;
                                }
                                else {
                                    _this.audio4.currentTime = timeMp3 - (_this.audio1.duration + _this.audio2.duration + _this.audio3.duration);
                                    _this.audio4.play();
                                    _this.count = 4;
                                    _this.prebtn = true;
                                }
                            }
                            else {
                                _this.audio3.currentTime = timeMp3 - (_this.audio1.duration + _this.audio2.duration);
                                _this.audio3.play();
                                _this.count = 3;
                                _this.prebtn = true;
                            }
                        }
                        else {
                            _this.audio2.currentTime = timeMp3 - _this.audio1.duration;
                            _this.audio2.play();
                            _this.count = 2;
                            _this.prebtn = true;
                        }
                    }
                    else {
                        _this.audio1.currentTime = timeMp3;
                        _this.audio1.play();
                    }
                }
                else if (cnt > 3) {
                    if (_this.audio1.ended || _this.audio1.currentTime >= _this.audio1.duration - 1) {
                        if (!_this.audio2.ended && _this.audio2.currentTime < _this.audio2.duration - 1) {
                            _this.audio2.play();
                        }
                        else {
                            if (!_this.audio3.ended && _this.audio3.currentTime < _this.audio3.duration - 1) {
                                _this.audio3.play();
                            }
                            else {
                                if (!_this.audio4.ended) {
                                    _this.audio4.play();
                                }
                            }
                        }
                    }
                }
                cnt++;
                // End synchronize play time of mp3
            });
        }, 1000);
    };
    RoomComponent.prototype.onSelectionChange = function () {
        localStorage.setItem('userTestSession', JSON.stringify({
            username: this.currentUser.username, roomID: this.roomID,
            answers1: this.answers1, answers2: this.answers2, answers3: this.answers3, answers4: this.answers4,
            answers5: this.answers5, answers6: this.answers6, answers7: this.answers7
        }));
    };
    RoomComponent.prototype.start = function () {
        if (confirm('Do you want start TOEIC test session?')) {
            this.starttest();
        }
    };
    RoomComponent.prototype.starttest = function () {
        var _this = this;
        clearInterval(this.interval1);
        localStorage.setItem('userTestSession', JSON.stringify({
            username: this.currentUser.username, roomID: this.roomID,
            answers1: this.answers1, answers2: this.answers2, answers3: this.answers3, answers4: this.answers4,
            answers5: this.answers5, answers6: this.answers6, answers7: this.answers7
        }));
        // check user online
        this.testroomService.checkUserOnline(this.currentUser.username, this.testRoom.roomID).subscribe(function (isOnline) {
            if (!isOnline) {
                alert('The account is being logged in somewhere else !!!');
                _this.routers.navigate(['/home']);
            }
            else {
                _this.testRoom.userOnlineList.push(_this.currentUser.username);
                _this.testroomService.updateTestRoom(_this.testRoom).subscribe(function (re) {
                });
                _this.audio1 = new Audio();
                _this.audio2 = new Audio();
                _this.audio3 = new Audio();
                _this.audio4 = new Audio();
                // get exam random
                _this.examService.getExamByExamID(_this.testRoom.examID).subscribe(function (result) {
                    _this.exam = result;
                    Promise.all([
                        _this.examService.getListeningParts(_this.exam.examID),
                        _this.examService.getReadingParts(_this.exam.examID)
                    ])
                        .then(function (listPart) {
                        listPart[0].forEach(function (element) {
                            if (element.length < 4) {
                                _this.starttest();
                            }
                            else {
                                element.forEach(function (listeningPart) {
                                    if (listeningPart.partNo === 1) {
                                        _this.part1 = listeningPart;
                                        _this.examService.getPdfFiles(_this.part1.pdfsrc).subscribe(function (res) {
                                            _this.part1.pdfsrc = URL.createObjectURL(res);
                                        });
                                        _this.examService.getMp3Files(_this.part1.mp3src).subscribe(function (res) {
                                            _this.audio1.src = URL.createObjectURL(res);
                                        });
                                    }
                                    if (listeningPart.partNo === 2) {
                                        _this.part2 = listeningPart;
                                        _this.examService.getPdfFiles(_this.part2.pdfsrc).subscribe(function (res) {
                                            _this.part2.pdfsrc = URL.createObjectURL(res);
                                        });
                                        _this.examService.getMp3Files(_this.part2.mp3src).subscribe(function (res) {
                                            _this.audio2.src = URL.createObjectURL(res);
                                        });
                                    }
                                    if (listeningPart.partNo === 3) {
                                        _this.part3 = listeningPart;
                                        _this.examService.getPdfFiles(_this.part3.pdfsrc).subscribe(function (res) {
                                            _this.part3.pdfsrc = URL.createObjectURL(res);
                                        });
                                        _this.examService.getMp3Files(_this.part3.mp3src).subscribe(function (res) {
                                            _this.audio3.src = URL.createObjectURL(res);
                                        });
                                    }
                                    if (listeningPart.partNo === 4) {
                                        _this.part4 = listeningPart;
                                        _this.examService.getPdfFiles(_this.part4.pdfsrc).subscribe(function (res) {
                                            _this.part4.pdfsrc = URL.createObjectURL(res);
                                        });
                                        _this.examService.getMp3Files(_this.part4.mp3src).subscribe(function (res) {
                                            _this.audio4.src = URL.createObjectURL(res);
                                        });
                                    }
                                });
                            }
                        });
                        listPart[1].forEach(function (element) {
                            if (element.length < 3) {
                                _this.starttest();
                            }
                            else {
                                element.forEach(function (readingPart) {
                                    if (readingPart.partNo === 5) {
                                        _this.part5 = readingPart;
                                        _this.examService.getPdfFiles(_this.part5.pdfsrc).subscribe(function (res) {
                                            _this.part5.pdfsrc = URL.createObjectURL(res);
                                        });
                                    }
                                    if (readingPart.partNo === 6) {
                                        _this.part6 = readingPart;
                                        _this.examService.getPdfFiles(_this.part6.pdfsrc).subscribe(function (res) {
                                            _this.part6.pdfsrc = URL.createObjectURL(res);
                                        });
                                    }
                                    if (readingPart.partNo === 7) {
                                        _this.part7 = readingPart;
                                        _this.examService.getPdfFiles(_this.part7.pdfsrc).subscribe(function (res) {
                                            _this.part7.pdfsrc = URL.createObjectURL(res);
                                        });
                                    }
                                });
                            }
                        });
                        _this.loading = true;
                        _this.startTime();
                    });
                });
                // end get exam
            }
        });
    };
    RoomComponent.prototype.changePart = function () {
        this.nextbtn = true;
        this.prebtn = true;
        switch (this.selectCnt) {
            case '1':
                this.count = 1;
                this.prebtn = false;
                break;
            case '2':
                this.count = 2;
                break;
            case '3':
                this.count = 3;
                break;
            case '4':
                this.count = 4;
                break;
            case '5':
                this.count = 5;
                break;
            case '6':
                this.count = 6;
                break;
            case '7':
                this.count = 7;
                this.nextbtn = false;
                break;
            default:
                this.count = 1;
                break;
        }
    };
    RoomComponent.prototype.nextPart = function () {
        this.nextbtn = true;
        this.prebtn = true;
        this.count += 1;
        this.selectCnt = this.count.toString();
        if (this.count === 7) {
            this.nextbtn = false;
            this.isChoosePart = true;
        }
    };
    RoomComponent.prototype.prePart = function () {
        this.nextbtn = true;
        this.prebtn = true;
        this.count -= 1;
        this.selectCnt = this.count.toString();
        if (this.count === 1) {
            this.prebtn = false;
        }
    };
    RoomComponent.prototype.onFormSubmit = function () {
        var _this = this;
        this.audio1.pause();
        this.audio2.pause();
        this.audio3.pause();
        this.audio4.pause();
        clearInterval(this.interval);
        Promise.all([
            this.examService.getAnswerParts(this.part1.partID),
            this.examService.getAnswerParts(this.part2.partID),
            this.examService.getAnswerParts(this.part3.partID),
            this.examService.getAnswerParts(this.part4.partID),
            this.examService.getAnswerParts(this.part5.partID),
            this.examService.getAnswerParts(this.part6.partID),
            this.examService.getAnswerParts(this.part7.partID)
        ]).then(function (result) {
            var total = 0;
            var readTotal = 0;
            result[0].forEach(function (element) {
                element.forEach(function (ans) {
                    _this.answers1.forEach(function (ans1) {
                        if (ans.questionOrder === ans1.name) {
                            if (ans.answer === ans1.value) {
                                total += 1;
                            }
                        }
                    });
                });
                return total;
            }).then(function (res) {
                result[1].forEach(function (e) {
                    e.forEach(function (ans) {
                        _this.answers2.forEach(function (ans1) {
                            if (ans.questionOrder === ans1.name) {
                                if (ans.answer === ans1.value) {
                                    total += 1;
                                }
                            }
                        });
                    });
                    return total;
                }).then(function (res1) {
                    result[2].forEach(function (e) {
                        e.forEach(function (ans) {
                            _this.answers3.forEach(function (ans1) {
                                if (ans.questionOrder === ans1.name) {
                                    if (ans.answer === ans1.value) {
                                        total += 1;
                                    }
                                }
                            });
                        });
                        return total;
                    }).then(function (res2) {
                        result[3].forEach(function (e) {
                            e.forEach(function (ans) {
                                _this.answers4.forEach(function (ans1) {
                                    if (ans.questionOrder === ans1.name) {
                                        if (ans.answer === ans1.value) {
                                            total += 1;
                                        }
                                    }
                                });
                            });
                            return total;
                        }).then(function (res3) {
                            result[4].forEach(function (e) {
                                e.forEach(function (ans) {
                                    _this.answers5.forEach(function (ans1) {
                                        if (ans.questionOrder === ans1.name) {
                                            if (ans.answer === ans1.value) {
                                                readTotal += 1;
                                            }
                                        }
                                    });
                                });
                                return readTotal;
                            }).then(function (res4) {
                                result[5].forEach(function (e) {
                                    e.forEach(function (ans) {
                                        _this.answers6.forEach(function (ans1) {
                                            if (ans.questionOrder === ans1.name) {
                                                if (ans.answer === ans1.value) {
                                                    readTotal += 1;
                                                }
                                            }
                                        });
                                    });
                                    return readTotal;
                                }).then(function (res5) {
                                    result[6].forEach(function (e) {
                                        e.forEach(function (ans) {
                                            _this.answers7.forEach(function (ans1) {
                                                if (ans.questionOrder === ans1.name) {
                                                    if (ans.answer === ans1.value) {
                                                        readTotal += 1;
                                                    }
                                                }
                                            });
                                        });
                                        _this.testResult.roomID = _this.testRoom.roomID;
                                        _this.testResult.username = _this.currentUser.username;
                                        _this.testResult.examID = _this.exam.examID;
                                        _this.testResult.dateTest = new Date();
                                        _this.testResult.readCorrect = readTotal;
                                        _this.testResult.listenCorrect = total;
                                        Promise.all([
                                            _this.examService.getReadingPoint(readTotal),
                                            _this.examService.getListeningPoint(total)
                                        ]).then(function (point) {
                                            var readingPoint = 0;
                                            point[0].forEach(function (readPoint) {
                                                _this.testResult.readPoint = readPoint;
                                                readingPoint = readPoint;
                                                return readingPoint;
                                            }).then(function (r) {
                                                point[1].forEach(function (listenPoint) {
                                                    _this.testResult.listenPoint = listenPoint;
                                                    _this.testResult.testScore = readingPoint + listenPoint;
                                                    // Add test result
                                                    _this.examService.addTestSesionResult(_this.testResult).subscribe(function (rest) {
                                                        _this.testRoom.userJoinedList.push(_this.currentUser.username);
                                                        _this.testroomService.updateTestRoom(_this.testRoom).subscribe(function (re) {
                                                        });
                                                    });
                                                    _this.isSubmit = true;
                                                    clearInterval(_this.interval);
                                                    localStorage.removeItem('userTestSession');
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    RoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-room',
            template: __webpack_require__("./src/app/web/room/room.component.html"),
            styles: [__webpack_require__("./src/app/web/room/room.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_exam_service__["a" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_0__services_testroom_service__["a" /* TestroomService */],
            __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/web/schedule/schedule.component.css":
/***/ (function(module, exports) {

module.exports = ".box-body{\r\n  background-color: white;\r\n  margin-bottom: 187px;\r\n}\r\n.expired{\r\n  color: red;\r\n}"

/***/ }),

/***/ "./src/app/web/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contenttest\">\r\n  <app-nvarbar></app-nvarbar>\r\n\r\n  <div class=\"gdlr-page-title-wrapper\">\r\n    <div class=\"gdlr-page-title-container\">\r\n      <h1 class=\"gdlr-page-title\">TOEIC TESTS – SCHEDULE</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content-wrapperWeb\">\r\n    <div class=\"gdlr-item gdlr-content-item\">\r\n      <div class=\"box-body\">\r\n        <table class=\"table table-bordered table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th>No</th>\r\n              <th>roomID</th>\r\n              <th>Start Date</th>\r\n              <th>Registered users</th>\r\n              <th>Status</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of pagedItems; let i = index\" [attr.data-index]=\"i\">\r\n              <td>{{pager.currentPage==1?i+1:(pager.currentPage-1)+\"\"+(i+1)}}</td>\r\n              <td>{{item.roomID}}</td>\r\n              <td>{{item.startTime | date:'medium'}}</td>\r\n              <td>\r\n                <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showUserList(item.userRegisteredList)\">\r\n                  <i class=\"fa fa-list-alt\"></i>\r\n                </button>\r\n              </td>\r\n              <td [ngClass]=\"{expired: item.status === 'Test session is expired'}\">{{item.status}}</td>\r\n              <td>\r\n                <a *ngIf=\"!item.isRegister\" (click)=\"register(item)\" class=\"btn\" style=\"background-color: #2d3b55; color: white;\">Register</a>\r\n                <a *ngIf=\"item.isJoin\" (click)=\"startRoom(item)\" class=\"btn\" style=\"background-color: #2d3b55; color: white;\">Join</a>\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"pager.totalItems <= 0\">\r\n              <td colspan=\"6\" style=\"text-align: center;\">No data available in table.</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-5\">\r\n            <div class=\"tableInfo\">Showing {{pager.startIndex<0?0:(pager.startIndex + 1)}} to {{pager.endIndex + 1}} of {{pager.totalItems}} entries</div>\r\n          </div>\r\n          <div class=\"col-sm-7\">\r\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n              <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a (click)=\"setPage(1)\">First</a>\r\n              </li>\r\n              <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n              </li>\r\n              <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n              <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n              </li>\r\n              <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Users Register</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table class=\"table table-bordered table-striped\" *ngIf=\"userList.length > 0\">\r\n            <thead>\r\n              <tr>\r\n                <th>No</th>\r\n                <th>username</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let user of userList; let i = index\" [attr.data-index]=\"i\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{user.username}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <p *ngIf=\"userList.length <= 0\" style=\"color: black; text-align: center;\">There are no users to join this session</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/web/schedule/schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_testroom_service__ = __webpack_require__("./src/app/services/testroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(testRoomService, router, pagerService) {
        this.testRoomService = testRoomService;
        this.router = router;
        this.pagerService = pagerService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userList = [];
        // pager object
        this.pager = {};
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.getAllTestRoom();
    };
    ScheduleComponent.prototype.getAllTestRoom = function () {
        var _this = this;
        this.testRoomService.getTestRooms().toPromise().then(function (result) {
            _this.listTestRoom = result;
            _this.listTestRoom.forEach(function (element) {
                var check = true;
                if (element.userRegisteredList != null) {
                    element.userRegisteredList.forEach(function (e) {
                        if (_this.currentUser.username === e) {
                            check = false;
                        }
                    });
                    if (!check) {
                        element.isRegister = true;
                        element.isJoin = true;
                    }
                    else {
                        element.isRegister = false;
                        element.isJoin = false;
                    }
                }
                else {
                    element.isRegister = false;
                    element.isJoin = false;
                }
                _this.checkTime(element);
            });
            _this.setPage(1);
        });
    };
    ScheduleComponent.prototype.checkTime = function (testRoom) {
        this.testRoomService.getCurrentTime().subscribe(function (time) {
            var currentTime = new Date(time);
            var startTime = new Date(testRoom.startTime);
            if ((startTime.getFullYear() === currentTime.getFullYear() &&
                startTime.getMonth() === currentTime.getMonth() &&
                startTime.getDate() === currentTime.getDate() &&
                startTime.getHours() === currentTime.getHours() &&
                startTime.getMinutes() <= currentTime.getMinutes())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() === currentTime.getDate() &&
                        startTime.getHours() + 1 === currentTime.getHours())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() === currentTime.getDate() &&
                        startTime.getHours() + 2 === currentTime.getHours() &&
                        startTime.getMinutes() >= currentTime.getMinutes())) {
                testRoom.status = 'Test session has started';
                testRoom.isRegister = true;
            }
            else if ((startTime.getFullYear() < currentTime.getFullYear())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() < currentTime.getMonth())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() < currentTime.getDate())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() === currentTime.getDate() &&
                        startTime.getHours() + 3 <= currentTime.getHours())
                ||
                    (startTime.getFullYear() === currentTime.getFullYear() &&
                        startTime.getMonth() === currentTime.getMonth() &&
                        startTime.getDate() === currentTime.getDate() &&
                        startTime.getHours() + 2 === currentTime.getHours() &&
                        currentTime.getMinutes() > startTime.getMinutes())) {
                testRoom.status = 'Test session is expired';
                testRoom.isRegister = true;
                testRoom.isJoin = false;
            }
            else {
                testRoom.status = 'Test session has not started yet';
            }
        });
    };
    ScheduleComponent.prototype.register = function (testRoom) {
        var _this = this;
        var startTime = new Date(testRoom.startTime);
        var currentDate = new Date();
        if ((startTime.getFullYear() > currentDate.getFullYear())
            ||
                (startTime.getFullYear() === currentDate.getFullYear() &&
                    startTime.getMonth() > currentDate.getMonth())
            ||
                (startTime.getFullYear() === currentDate.getFullYear() &&
                    startTime.getMonth() === currentDate.getMonth() &&
                    startTime.getDate() > currentDate.getDate())
            ||
                (startTime.getFullYear() === currentDate.getFullYear() &&
                    startTime.getMonth() === currentDate.getMonth() &&
                    startTime.getDate() === currentDate.getDate() &&
                    startTime.getHours() > currentDate.getHours())
            ||
                (startTime.getFullYear() === currentDate.getFullYear() &&
                    startTime.getMonth() === currentDate.getMonth() &&
                    startTime.getDate() === currentDate.getDate() &&
                    startTime.getHours() === currentDate.getHours() &&
                    currentDate.getMinutes() < startTime.getMinutes())) {
            var check_1 = true;
            if (testRoom.userRegisteredList != null) {
                testRoom.userRegisteredList.forEach(function (e) {
                    if (_this.currentUser.username === e) {
                        check_1 = false;
                    }
                });
                if (check_1) {
                    testRoom.userRegisteredList.push(this.currentUser.username);
                    this.testRoomService.updateTestRoom(testRoom).subscribe(function (result) {
                        alert('Congratulations on your successful registration , Please click join button to join this room');
                        _this.getAllTestRoom();
                    });
                }
            }
            else {
                testRoom.userRegisteredList.push(this.currentUser.username);
                this.testRoomService.updateTestRoom(testRoom).subscribe(function (result) {
                    alert('Congratulations on your successful registration , Please click join button to join this room');
                    _this.getAllTestRoom();
                });
            }
        }
        else {
            alert('The test session has been started and you can not register !!!');
        }
    };
    ScheduleComponent.prototype.startRoom = function (testRoom) {
        var startTime = new Date(testRoom.startTime);
        var currentDate = new Date();
        if ((startTime.getFullYear() < currentDate.getFullYear())
            ||
                (startTime.getFullYear() === currentDate.getFullYear() &&
                    startTime.getMonth() < currentDate.getMonth())
            ||
                (startTime.getFullYear() === currentDate.getFullYear() &&
                    startTime.getMonth() === currentDate.getMonth() &&
                    startTime.getDate() < currentDate.getDate())
            ||
                (startTime.getFullYear() === currentDate.getFullYear() &&
                    startTime.getMonth() === currentDate.getMonth() &&
                    startTime.getDate() === currentDate.getDate() &&
                    startTime.getHours() + 3 <= currentDate.getHours())
            ||
                (startTime.getFullYear() === currentDate.getFullYear() &&
                    startTime.getMonth() === currentDate.getMonth() &&
                    startTime.getDate() === currentDate.getDate() &&
                    startTime.getHours() + 2 === currentDate.getHours() &&
                    currentDate.getMinutes() > startTime.getMinutes())) {
            alert('The test session is expired !!!');
        }
        else {
            this.router.navigate(['/room', testRoom.roomID]);
        }
    };
    ScheduleComponent.prototype.showUserList = function (userList) {
        var _this = this;
        this.userList = [];
        userList.forEach(function (element) {
            var user = {};
            user.username = element;
            _this.userList.push(user);
        });
    };
    ScheduleComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.listTestRoom.length, page);
        // get current page of items
        this.pagedItems = this.listTestRoom.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ScheduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-schedule',
            template: __webpack_require__("./src/app/web/schedule/schedule.component.html"),
            styles: [__webpack_require__("./src/app/web/schedule/schedule.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_testroom_service__["a" /* TestroomService */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_pager_service__["a" /* PagerService */]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/web/test-history/test-history.component.css":
/***/ (function(module, exports) {

module.exports = ".box-body{\r\n  background-color: white;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/web/test-history/test-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contenttest\">\r\n  <app-nvarbar></app-nvarbar>\r\n\r\n  <div class=\"gdlr-page-title-wrapper\">\r\n    <div class=\"gdlr-page-title-container\">\r\n      <h1 class=\"gdlr-page-title\">TOEIC TESTS – RESULT HISTORY</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content-wrapperWeb\">\r\n    <div class=\"gdlr-item gdlr-content-item\">\r\n      <div class=\"box-body\">\r\n        <select class=\"custom-select\" style=\"color: black\" name=\"selectPart\" [(ngModel)]=\"selectOption\" (change)=\"changeResult()\">\r\n          <option value=\"1\">Show result test training</option>\r\n          <option value=\"2\">Show result test session</option>\r\n        </select>\r\n        <table class=\"table table-bordered table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th>No</th>\r\n              <th>Date</th>\r\n              <th *ngIf=\"selectOption === '2'\">RoomID</th>\r\n              <th>ExamID</th>\r\n              <th>Reading Correct</th>\r\n              <th>Listening Correct</th>\r\n              <th>Score</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of pagedItems; let i = index\" [attr.data-index]=\"i\">\r\n              <td>{{pager.currentPage==1?i+1:(pager.currentPage-1)+\"\"+(i+1)}}</td>\r\n              <td>{{item.dateTest | date:'medium'}}</td>\r\n              <td *ngIf=\"selectOption === '2'\">{{item.roomID}}</td>\r\n              <td>{{item.examID}}</td>\r\n              <td>{{item.readCorrect}}</td>\r\n              <td>{{item.listenCorrect}}</td>\r\n              <td>{{item.testScore}}</td>\r\n            </tr>\r\n            <tr *ngIf=\"pager.totalItems <= 0 && selectOption === '1'\">\r\n                <td colspan=\"6\" style=\"text-align: center;\">No data available in table.</td>\r\n              </tr>\r\n            <tr *ngIf=\"pager.totalItems <= 0 && selectOption === '2'\">\r\n              <td colspan=\"7\" style=\"text-align: center;\">No data available in table.</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-5\">\r\n            <div class=\"tableInfo\">Showing {{pager.startIndex\r\n              <0?0:(pager.startIndex + 1)}} to {{pager.endIndex + 1}} of {{pager.totalItems}} entries</div>\r\n            </div>\r\n            <div class=\"col-sm-7\">\r\n              <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                  <a (click)=\"setPage(1)\">First</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                  <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                </li>\r\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                  <a (click)=\"setPage(page)\">{{page}}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                  <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                  <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/web/test-history/test-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestHistoryComponent = /** @class */ (function () {
    function TestHistoryComponent(examService, pagerService) {
        this.examService = examService;
        this.pagerService = pagerService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userList = [];
        this.selectOption = '1';
        // pager object
        this.pager = {};
    }
    TestHistoryComponent.prototype.ngOnInit = function () {
        this.getTestResultHistory();
        this.getTestSessionResultHistory();
    };
    TestHistoryComponent.prototype.getTestResultHistory = function () {
        var _this = this;
        this.examService.getTestResultHistory(this.currentUser.username).subscribe(function (results) {
            _this.listTestHistory = results;
            _this.listAll = _this.listTestHistory;
            _this.setPage(1);
        });
    };
    TestHistoryComponent.prototype.getTestSessionResultHistory = function () {
        var _this = this;
        this.examService.getTestSessionResultHistory(this.currentUser.username).subscribe(function (results) {
            _this.listTestSessionHistory = results;
        });
    };
    TestHistoryComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.listAll.length, page);
        // get current page of items
        this.pagedItems = this.listAll.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    TestHistoryComponent.prototype.changeResult = function () {
        if (this.selectOption === '1') {
            this.listAll = this.listTestHistory;
            this.setPage(1);
        }
        else {
            this.listAll = this.listTestSessionHistory;
            this.setPage(1);
        }
    };
    TestHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-test-history',
            template: __webpack_require__("./src/app/web/test-history/test-history.component.html"),
            styles: [__webpack_require__("./src/app/web/test-history/test-history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_exam_service__["a" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_2__services_pager_service__["a" /* PagerService */]])
    ], TestHistoryComponent);
    return TestHistoryComponent;
}());



/***/ }),

/***/ "./src/app/web/test/test.component.css":
/***/ (function(module, exports) {

module.exports = ".show {\r\n  display: inline !important;\r\n}\r\n\r\n.content-wrapper {\r\n  margin-left: 0px !important;\r\n}\r\n\r\n.point {\r\n  width: 40px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n}\r\n\r\n.totalPoint{\r\n  width: 70px;\r\n  font-size: 30px;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/web/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contenttest\">\r\n  <app-nvarbar></app-nvarbar>\r\n  <div *ngIf=\"!loading\">\r\n    <div class=\"gdlr-page-title-wrapper\">\r\n      <div class=\"gdlr-page-title-container\">\r\n        <h1 class=\"gdlr-page-title\">TOEIC TRAINING – FULL TEST</h1>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content-wrapperWeb\">\r\n      <div class=\"gdlr-item gdlr-content-item\">\r\n        <blockquote>\r\n          <p>The Full Test is apply for the TOEIC Test of APC members (applicable to APC members).</p>\r\n        </blockquote>\r\n        <p style=\"text-align: center\">\r\n          <button (click)=\"start()\" class=\"gdlr-button small\">START TEST</button>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- START TOEIC FULL TEST CONTENT-->\r\n  <div *ngIf=\"loading && !isSubmit\">\r\n    <div class=\"gdlr-page-title-wrapper\">\r\n      <div class=\"gdlr-page-title-container\">\r\n        <h1 class=\"gdlr-page-title\">TOEIC TRAINING – FULL TEST</h1>\r\n      </div>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <div id=\"test-time\">{{timeCountdown}}</div>\r\n\r\n      <form #answerForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(answerForm)\">\r\n        <!-- SHOW PART 1 -->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 1 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part1.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 1\" [src]=\"part1.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers1\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SHOW PART 2-->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 2 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part2.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 2\" [src]=\"part2.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers2\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SHOW PART 3-->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 3 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part3.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 3\" [src]=\"part3.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers3\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SHOW PART 4-->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 4 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part4.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 4\" [src]=\"part4.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers4\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SHOW PART 5-->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 5 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part5.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 5\" [src]=\"part5.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers5\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SHOW PART 6-->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 6 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part6.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 6\" [src]=\"part6.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers6\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SHOW PART 7-->\r\n        <div class=\"row hidden\" [ngClass]=\"{ 'show': count == 7 }\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"test-pdf\">\r\n              <div class=\"part-title\">\r\n                <h3>PART {{part7.partNo}}</h3>\r\n              </div>\r\n              <pdf-viewer *ngIf=\"count == 7\" [src]=\"part7.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-sheet\">\r\n              <div class=\"form-title\">\r\n                <h4>ANSWER SHEET</h4>\r\n              </div>\r\n              <div class=\"form-answer\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers7\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.</span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n                <input type=\"submit\" class=\"gdlr-button small\" value=\"submit\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"test-page\">\r\n      <ul class=\"pager\">\r\n        <li>\r\n          <button *ngIf=\"prebtn\" (click)=\"prePart()\">Previous</button>\r\n        </li>\r\n        <li>\r\n          <button *ngIf=\"nextbtn\" (click)=\"nextPart()\">Next</button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"isSubmit\">\r\n    <div class=\"gdlr-page-title-wrapper\">\r\n      <div class=\"gdlr-page-title-container\">\r\n        <h1 class=\"gdlr-page-title\">TOEIC TRAINING – RESULT</h1>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content-wrapperWeb\">\r\n      <div class=\"gdlr-item gdlr-content-item\">\r\n        <table class=\"tb\">\r\n          <tr>\r\n            <td>\r\n              <div class=\"tb-title\">\r\n                <h4>FULL NAME</h4>\r\n              </div>\r\n              <div class=\"tb-content\">{{testResult.username}}</div>\r\n            </td>\r\n            <td>\r\n              <div class=\"tb-label\">\r\n                <span>LISTENING</span>\r\n              </div>\r\n              <div class=\"tb-p\">YOUR SCORE</div>\r\n              <div class=\"tb-score\">\r\n                <span class=\"tb-score-icon\">\r\n                  <label class=\"point\">{{testResult.listenPoint}}</label>\r\n                </span>\r\n              </div>\r\n            </td>\r\n            <td rowspan=\"2\">\r\n              <div class=\"tb-total\">\r\n                <span>TOTAL SCORE</span>\r\n              </div>\r\n              <div class=\"tb-total-score\">\r\n                <span class=\"tb-total-score-icon\">\r\n                  <label class=\"totalPoint\">{{testResult.testScore}}</label>\r\n                </span>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <div class=\"tb-title\">\r\n                <h4>TEST DATE</h4>\r\n              </div>\r\n              <div class=\"tb-content\">{{testResult.dateTest | date:'medium' }}</div>\r\n            </td>\r\n            <td>\r\n              <div class=\"tb-label\">\r\n                <span>READING</span>\r\n              </div>\r\n              <div class=\"tb-p\">YOUR SCORE</div>\r\n              <div class=\"tb-score\">\r\n                <span class=\"tb-score-icon\">\r\n                  <label class=\"point\">{{testResult.readPoint}}</label>\r\n                </span>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/web/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = /** @class */ (function () {
    function TestComponent(examService) {
        this.examService = examService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loading = false;
        this.isSubmit = false;
        this.nextbtn = true;
        this.prebtn = false;
        this.count = 1;
        this.audio1 = new Audio();
        this.audio2 = new Audio();
        this.audio3 = new Audio();
        this.audio4 = new Audio();
        this.part1 = {};
        this.part2 = {};
        this.part3 = {};
        this.part4 = {};
        this.part5 = {};
        this.part6 = {};
        this.part7 = {};
        this.answers1 = [];
        this.answers2 = [];
        this.answers3 = [];
        this.answers4 = [];
        this.answers5 = [];
        this.answers6 = [];
        this.answers7 = [];
        this.testResult = {};
    }
    TestComponent.prototype.ngOnInit = function () {
        this.numbers = Array(200).fill(1).map(function (x, i) { return i + 1; });
        // Set answer for part 1
        this.numbers1 = this.numbers.slice(0, 10);
        for (var i = 0; i < this.numbers1.length; i++) {
            var ans = {};
            ans.name = this.numbers1[i];
            ans.value = '';
            this.answers1.push(ans);
        }
        // Set answer for part 2
        this.numbers2 = this.numbers.slice(10, 40);
        for (var i = 0; i < this.numbers2.length; i++) {
            var ans = {};
            ans.name = this.numbers2[i];
            ans.value = '';
            this.answers2.push(ans);
        }
        // Set answer for part 3
        this.numbers3 = this.numbers.slice(40, 70);
        for (var i = 0; i < this.numbers3.length; i++) {
            var ans = {};
            ans.name = this.numbers3[i];
            ans.value = '';
            this.answers3.push(ans);
        }
        // Set answer for part 4
        this.numbers4 = this.numbers.slice(70, 100);
        for (var i = 0; i < this.numbers4.length; i++) {
            var ans = {};
            ans.name = this.numbers4[i];
            ans.value = '';
            this.answers4.push(ans);
        }
        // Set answer for part 5
        this.numbers5 = this.numbers.slice(100, 140);
        for (var i = 0; i < this.numbers5.length; i++) {
            var ans = {};
            ans.name = this.numbers5[i];
            ans.value = '';
            this.answers5.push(ans);
        }
        // Set answer for part 6
        this.numbers6 = this.numbers.slice(140, 152);
        for (var i = 0; i < this.numbers6.length; i++) {
            var ans = {};
            ans.name = this.numbers6[i];
            ans.value = '';
            this.answers6.push(ans);
        }
        // Set answer for part 7
        this.numbers7 = this.numbers.slice(152, 200);
        for (var i = 0; i < this.numbers7.length; i++) {
            var ans = {};
            ans.name = this.numbers7[i];
            ans.value = '';
            this.answers7.push(ans);
        }
    };
    TestComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
        this.audio1.pause();
        this.audio2.pause();
        this.audio3.pause();
        this.audio4.pause();
    };
    TestComponent.prototype.startTime = function () {
        var _this = this;
        var timer2 = '120:00';
        this.interval = setInterval(function () {
            var timer = timer2.split(':');
            // by parsing integer, I avoid all extra string processing
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? 0 + seconds : seconds;
            if (minutes <= 0 && seconds <= 0) {
                clearInterval(_this.interval);
                _this.onFormSubmit();
            }
            // minutes = (minutes < 10) ?  minutes : minutes;
            var secondString = '';
            secondString = (seconds < 0) ? '59' : seconds.toString();
            secondString = (seconds < 10) ? '0' + seconds : seconds.toString();
            _this.timeCountdown = minutes + ':' + secondString;
            timer2 = minutes + ':' + seconds;
        }, 1000);
    };
    TestComponent.prototype.start = function () {
        if (confirm('Do you want start full test TOEIC training?')) {
            this.starttest();
        }
    };
    TestComponent.prototype.starttest = function () {
        var _this = this;
        // get exam random
        this.examService.getExamsForTraining().subscribe(function (exams) {
            if (exams === null || exams.length <= 0) {
                alert('There are no new exams for this test !!!');
                return false;
            }
            _this.exam = exams[Math.floor(Math.random() * exams.length)];
            Promise.all([
                _this.examService.getListeningParts(_this.exam.examID),
                _this.examService.getReadingParts(_this.exam.examID)
            ])
                .then(function (listPart) {
                // tslint:disable-next-line:no-shadowed-variable
                listPart[0].forEach(function (element) {
                    if (element.length < 4) {
                        _this.starttest();
                    }
                    else {
                        element.forEach(function (listeningPart) {
                            if (listeningPart.partNo === 1) {
                                _this.part1 = listeningPart;
                                _this.examService.getPdfFiles(_this.part1.pdfsrc).subscribe(function (res) {
                                    _this.part1.pdfsrc = URL.createObjectURL(res);
                                });
                                _this.examService.getMp3Files(_this.part1.mp3src).subscribe(function (res) {
                                    _this.audio1.src = URL.createObjectURL(res);
                                    _this.audio1.load();
                                    _this.audio1.play();
                                });
                            }
                            if (listeningPart.partNo === 2) {
                                _this.part2 = listeningPart;
                                _this.examService.getPdfFiles(_this.part2.pdfsrc).subscribe(function (res) {
                                    _this.part2.pdfsrc = URL.createObjectURL(res);
                                });
                                _this.examService.getMp3Files(_this.part2.mp3src).subscribe(function (res) {
                                    _this.audio2.src = URL.createObjectURL(res);
                                });
                            }
                            if (listeningPart.partNo === 3) {
                                _this.part3 = listeningPart;
                                _this.examService.getPdfFiles(_this.part3.pdfsrc).subscribe(function (res) {
                                    _this.part3.pdfsrc = URL.createObjectURL(res);
                                });
                                _this.examService.getMp3Files(_this.part3.mp3src).subscribe(function (res) {
                                    _this.audio3.src = URL.createObjectURL(res);
                                });
                            }
                            if (listeningPart.partNo === 4) {
                                _this.part4 = listeningPart;
                                _this.examService.getPdfFiles(_this.part4.pdfsrc).subscribe(function (res) {
                                    _this.part4.pdfsrc = URL.createObjectURL(res);
                                });
                                _this.examService.getMp3Files(_this.part4.mp3src).subscribe(function (res) {
                                    _this.audio4.src = URL.createObjectURL(res);
                                });
                            }
                        });
                    }
                }).then(function (result) {
                    listPart[1].forEach(function (element) {
                        if (element.length < 3) {
                            _this.starttest();
                        }
                        else {
                            element.forEach(function (readingPart) {
                                if (readingPart.partNo === 5) {
                                    _this.part5 = readingPart;
                                    _this.examService.getPdfFiles(_this.part5.pdfsrc).subscribe(function (res) {
                                        _this.part5.pdfsrc = URL.createObjectURL(res);
                                    });
                                }
                                if (readingPart.partNo === 6) {
                                    _this.part6 = readingPart;
                                    _this.examService.getPdfFiles(_this.part6.pdfsrc).subscribe(function (res) {
                                        _this.part6.pdfsrc = URL.createObjectURL(res);
                                    });
                                }
                                if (readingPart.partNo === 7) {
                                    _this.part7 = readingPart;
                                    _this.examService.getPdfFiles(_this.part7.pdfsrc).subscribe(function (res) {
                                        _this.part7.pdfsrc = URL.createObjectURL(res);
                                    });
                                }
                            });
                        }
                        clearInterval(_this.interval);
                        _this.loading = true;
                        _this.startTime();
                    });
                });
            });
        });
        // end get exam
    };
    TestComponent.prototype.nextPart = function () {
        this.nextbtn = true;
        this.prebtn = true;
        this.count += 1;
        if (this.count === 7) {
            this.nextbtn = false;
        }
        if (this.count < 5) {
            switch (this.count) {
                case 2:
                    if (!this.audio2.ended) {
                        this.audio2.play();
                    }
                    this.audio1.pause();
                    break;
                case 3:
                    if (!this.audio3.ended) {
                        this.audio3.play();
                    }
                    this.audio2.pause();
                    break;
                case 4:
                    if (!this.audio4.ended) {
                        this.audio4.play();
                    }
                    this.audio3.pause();
                    break;
                default:
                    break;
            }
        }
        else {
            this.audio4.pause();
        }
    };
    TestComponent.prototype.prePart = function () {
        this.nextbtn = true;
        this.prebtn = true;
        this.count -= 1;
        if (this.count === 1) {
            this.prebtn = false;
        }
        switch (this.count) {
            case 1:
                if (!this.audio1.ended) {
                    this.audio1.play();
                }
                this.audio2.pause();
                break;
            case 2:
                if (!this.audio2.ended) {
                    this.audio2.play();
                }
                this.audio3.pause();
                break;
            case 3:
                if (!this.audio3.ended) {
                    this.audio3.play();
                }
                this.audio4.pause();
                break;
            case 4:
                if (!this.audio4.ended) {
                    this.audio4.play();
                }
                break;
            default:
                break;
        }
    };
    TestComponent.prototype.onFormSubmit = function () {
        var _this = this;
        this.audio1.pause();
        this.audio2.pause();
        this.audio3.pause();
        this.audio4.pause();
        clearInterval(this.interval);
        Promise.all([
            this.examService.getAnswerParts(this.part1.partID),
            this.examService.getAnswerParts(this.part2.partID),
            this.examService.getAnswerParts(this.part3.partID),
            this.examService.getAnswerParts(this.part4.partID),
            this.examService.getAnswerParts(this.part5.partID),
            this.examService.getAnswerParts(this.part6.partID),
            this.examService.getAnswerParts(this.part7.partID)
        ]).then(function (result) {
            var total = 0;
            var readTotal = 0;
            // tslint:disable-next-line:no-shadowed-variable
            result[0].forEach(function (element) {
                element.forEach(function (ans) {
                    _this.answers1.forEach(function (ans1) {
                        if (ans.questionOrder === ans1.name) {
                            if (ans.answer === ans1.value) {
                                total += 1;
                            }
                        }
                    });
                });
                return total;
            }).then(function (res) {
                result[1].forEach(function (e) {
                    e.forEach(function (ans) {
                        _this.answers2.forEach(function (ans1) {
                            if (ans.questionOrder === ans1.name) {
                                if (ans.answer === ans1.value) {
                                    total += 1;
                                }
                            }
                        });
                    });
                    return total;
                }).then(function (res1) {
                    result[2].forEach(function (e) {
                        e.forEach(function (ans) {
                            _this.answers3.forEach(function (ans1) {
                                if (ans.questionOrder === ans1.name) {
                                    if (ans.answer === ans1.value) {
                                        total += 1;
                                    }
                                }
                            });
                        });
                        return total;
                    }).then(function (res2) {
                        result[3].forEach(function (e) {
                            e.forEach(function (ans) {
                                _this.answers4.forEach(function (ans1) {
                                    if (ans.questionOrder === ans1.name) {
                                        if (ans.answer === ans1.value) {
                                            total += 1;
                                        }
                                    }
                                });
                            });
                            return total;
                        }).then(function (res3) {
                            result[4].forEach(function (e) {
                                e.forEach(function (ans) {
                                    _this.answers5.forEach(function (ans1) {
                                        if (ans.questionOrder === ans1.name) {
                                            if (ans.answer === ans1.value) {
                                                readTotal += 1;
                                            }
                                        }
                                    });
                                });
                                return readTotal;
                            }).then(function (res4) {
                                result[5].forEach(function (e) {
                                    e.forEach(function (ans) {
                                        _this.answers6.forEach(function (ans1) {
                                            if (ans.questionOrder === ans1.name) {
                                                if (ans.answer === ans1.value) {
                                                    readTotal += 1;
                                                }
                                            }
                                        });
                                    });
                                    return readTotal;
                                }).then(function (res5) {
                                    result[6].forEach(function (e) {
                                        e.forEach(function (ans) {
                                            _this.answers7.forEach(function (ans1) {
                                                if (ans.questionOrder === ans1.name) {
                                                    if (ans.answer === ans1.value) {
                                                        readTotal += 1;
                                                    }
                                                }
                                            });
                                        });
                                        _this.testResult.username = _this.currentUser.username;
                                        _this.testResult.examID = _this.exam.examID;
                                        _this.testResult.dateTest = new Date();
                                        _this.testResult.readCorrect = readTotal;
                                        _this.testResult.listenCorrect = total;
                                        Promise.all([
                                            _this.examService.getReadingPoint(readTotal),
                                            _this.examService.getListeningPoint(total)
                                        ]).then(function (point) {
                                            var readingPoint = 0;
                                            point[0].forEach(function (readPoint) {
                                                _this.testResult.readPoint = readPoint;
                                                readingPoint = readPoint;
                                                return readingPoint;
                                            }).then(function (r) {
                                                point[1].forEach(function (listenPoint) {
                                                    _this.testResult.listenPoint = listenPoint;
                                                    _this.testResult.testScore = readingPoint + listenPoint;
                                                    // Add test result
                                                    _this.examService.addTestResult(_this.testResult).subscribe(function (rest) {
                                                    });
                                                    _this.isSubmit = true;
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("./src/app/web/test/test.component.html"),
            styles: [__webpack_require__("./src/app/web/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_exam_service__["a" /* ExamService */]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/web/training/training.component.css":
/***/ (function(module, exports) {

module.exports = ".form-sheet {\r\n  margin-top: 135px !important;\r\n}\r\n\r\n#contenttest {\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.fixtop {\r\n  margin-top: 78px !important;\r\n}\r\n\r\n.wrong {\r\n  color: red !important;\r\n}\r\n\r\naudio {\r\n  width: 900px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/web/training/training.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contenttest\">\r\n  <app-nvarbar></app-nvarbar>\r\n\r\n  <div *ngIf=\"!isStart\">\r\n    <div class=\"gdlr-page-title-wrapper\">\r\n      <div class=\"gdlr-page-title-container\">\r\n        <h1 class=\"gdlr-page-title\">TOEIC TRAINING – MINI TEST</h1>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content-wrapperWeb\">\r\n      <div class=\"gdlr-item gdlr-content-item\">\r\n        <blockquote>\r\n          <p>The Mini Test is apply for the TOEIC training of APC members (applicable to APC members).</p>\r\n        </blockquote>\r\n        <form (ngSubmit)=\"start()\">\r\n          <p style=\"text-align: center\">\r\n            <span style=\"color: black\">Please select the part you want to training : </span>\r\n            <select class=\"custom-select\" style=\"color: black\" name=\"selectPart\" [(ngModel)]=\"selectPart\">\r\n              <option value=\"1\">Part 1</option>\r\n              <option value=\"2\">Part 2</option>\r\n              <option value=\"3\">Part 3</option>\r\n              <option value=\"4\">Part 4</option>\r\n              <option value=\"5\">Part 5</option>\r\n              <option value=\"6\">Part 6</option>\r\n              <option value=\"7\">Part 7</option>\r\n            </select>\r\n            <br>\r\n            <br>\r\n            <input type=\"submit\" value=\"START MINI TEST\" class=\"gdlr-button small\">\r\n          </p>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"isStart\">\r\n    <div class=\"gdlr-page-title-wrapper\">\r\n      <div class=\"gdlr-page-title-container\">\r\n        <h1 class=\"gdlr-page-title\">TOEIC TRAINING – MINI TEST</h1>\r\n      </div>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-9\">\r\n          <br>\r\n          <div id=\"test-mp3\" *ngIf=\"isListenPart\">\r\n            <audio controls preload=\"auto\" [src]=\"part.mp3src\"></audio>\r\n          </div>\r\n          <div class=\"test-pdf\">\r\n            <div class=\"part-title\">\r\n              <h3>PART {{selectPart}}</h3>\r\n            </div>\r\n            <pdf-viewer *ngIf=\"isShowPdf\" [src]=\"part.pdfsrc\" [show-all]=\"true\" [render-text]=\"true\" style=\"display: block; max-height: 1056px; overflow-y: scroll;\"></pdf-viewer>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-sheet\" [ngClass]=\"{ 'fixtop': selectPart > 4 }\">\r\n            <div class=\"form-title\">\r\n              <h4>ANSWER SHEET</h4>\r\n            </div>\r\n            <div class=\"form-answer\">\r\n              <form id=\"form-answer-submit\" #answerForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(answerForm)\">\r\n                <ul>\r\n                  <li *ngFor=\"let ans of answers\">\r\n                    <span class=\"numAnswer\">{{ans.name}}.<span style=\"color: blue\" [ngClass]=\"{ 'wrong': !ans.isCorrect }\"> {{ans.correct}}</span></span>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"A\" [attr.disabled]=\"isSubmit? true : null\">\r\n                      <span class=\"label-text\">A</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"B\" [attr.disabled]=\"isSubmit? true : null\">\r\n                      <span class=\"label-text\">B</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"C\" [attr.disabled]=\"isSubmit? true : null\">\r\n                      <span class=\"label-text\">C</span>\r\n                    </label>\r\n                    <label>\r\n                      <input type=\"radio\" [name]=\"ans.name\" [(ngModel)]=\"ans.value\" value=\"D\" [attr.disabled]=\"isSubmit? true : null\">\r\n                      <span class=\"label-text\">D</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n                <input type=\"submit\" class=\"gdlr-button small\" value=\"submit\" *ngIf=\"!isSubmit\">\r\n                <button type=\"button\" class=\"gdlr-button small\" (click)=\"finish()\" *ngIf=\"isSubmit\">Finish</button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/web/training/training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(examService, router, sanitizer) {
        this.examService = examService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.isStart = false;
        this.isListenPart = false;
        this.isShowPdf = false;
        this.isSubmit = false;
        this.answers = [];
        this.part = {};
        this.miniTestResult = {};
    }
    TrainingComponent.prototype.ngOnInit = function () {
        this.numbers = Array(200).fill(1).map(function (x, i) { return i + 1; });
        this.selectPart = '1';
    };
    TrainingComponent.prototype.start = function () {
        var _this = this;
        if (confirm('Do you want start mini test TOEIC training?')) {
            this.examService.getExamsForTraining().subscribe(function (exams) {
                if (exams === null || exams.length <= 0) {
                    alert('There are no new exams for this test !!!');
                    return false;
                }
                _this.starttraining();
            });
        }
    };
    TrainingComponent.prototype.starttraining = function () {
        switch (this.selectPart) {
            case '1':
                this.getListenPart('1');
                this.isStart = true;
                break;
            case '2':
                this.getListenPart('2');
                this.isStart = true;
                break;
            case '3':
                this.getListenPart('3');
                this.isStart = true;
                break;
            case '4':
                this.getListenPart('4');
                this.isStart = true;
                break;
            case '5':
                this.getReadPart('5');
                this.isStart = true;
                break;
            case '6':
                this.getReadPart('6');
                this.isStart = true;
                break;
            case '7':
                this.getReadPart('7');
                this.isStart = true;
                break;
            default:
                break;
        }
    };
    TrainingComponent.prototype.onFormSubmit = function () {
        var _this = this;
        Promise.all([
            this.examService.getAnswerParts(this.part.partID),
        ]).then(function (result) {
            var correctTotal = 0;
            result[0].forEach(function (answers) {
                answers.forEach(function (answer) {
                    _this.answers.forEach(function (ans1) {
                        if (answer.questionOrder === ans1.name) {
                            if (answer.answer === ans1.value) {
                                correctTotal += 1;
                            }
                            else {
                                ans1.isCorrect = false;
                            }
                            ans1.correct = answer.answer;
                        }
                    });
                });
                _this.miniTestResult.username = _this.currentUser.username;
                _this.miniTestResult.examID = _this.exam.examID;
                _this.miniTestResult.partNo = _this.selectPart;
                _this.miniTestResult.dateTraining = new Date();
                _this.miniTestResult.answerCorrect = correctTotal;
                _this.miniTestResult.questionTotal = answers.length;
                _this.examService.addMiniTestResult(_this.miniTestResult).subscribe();
                _this.isSubmit = true;
                alert('Congratulations on completing the exam !!!\n You have answered exactly '
                    + _this.miniTestResult.answerCorrect + '/' + _this.miniTestResult.questionTotal + ' sentences !!!');
            });
        });
    };
    TrainingComponent.prototype.finish = function () {
        this.router.navigate(['/home']);
    };
    TrainingComponent.prototype.getListenPart = function (partNo) {
        var _this = this;
        var num1 = 0;
        var num2 = 0;
        switch (partNo) {
            case '1':
                num1 = 0;
                num2 = 10;
                break;
            case '2':
                num1 = 10;
                num2 = 40;
                break;
            case '3':
                num1 = 40;
                num2 = 70;
                break;
            case '4':
                num1 = 70;
                num2 = 100;
                break;
            default:
                break;
        }
        this.examService.getExamsForTraining().subscribe(function (exams) {
            _this.exam = exams[Math.floor(Math.random() * exams.length)];
            Promise.all([
                _this.examService.getListeningPart(_this.exam.examID, _this.selectPart)
            ]).then(function (result) {
                result[0].forEach(function (element) {
                    _this.part = element;
                    _this.examService.getPdfFiles(_this.part.pdfsrc).subscribe(function (res) {
                        _this.part.pdfsrc = URL.createObjectURL(res);
                        _this.isShowPdf = true;
                    });
                    _this.examService.getMp3Files(_this.part.mp3src).subscribe(function (res) {
                        var src = URL.createObjectURL(res);
                        _this.part.mp3src = _this.sanitizer.bypassSecurityTrustUrl(src);
                        _this.isListenPart = true;
                    });
                    // Set answer for part
                    _this.numbers1 = _this.numbers.slice(num1, num2);
                    for (var i = 0; i < _this.numbers1.length; i++) {
                        var ans = {};
                        ans.name = _this.numbers1[i];
                        ans.value = '';
                        ans.isCorrect = true;
                        _this.answers.push(ans);
                    }
                });
            });
        });
    };
    TrainingComponent.prototype.getReadPart = function (partNo) {
        var _this = this;
        var num1 = 0;
        var num2 = 0;
        switch (partNo) {
            case '5':
                num1 = 100;
                num2 = 140;
                break;
            case '6':
                num1 = 140;
                num2 = 152;
                break;
            case '7':
                num1 = 152;
                num2 = 200;
                break;
            default:
                break;
        }
        this.examService.getExamsForTraining().subscribe(function (exams) {
            _this.exam = exams[Math.floor(Math.random() * exams.length)];
            Promise.all([
                _this.examService.getReadPart(_this.exam.examID, _this.selectPart)
            ]).then(function (result) {
                result[0].forEach(function (element) {
                    _this.part = element;
                    _this.examService.getPdfFiles(_this.part.pdfsrc).subscribe(function (res) {
                        _this.part.pdfsrc = URL.createObjectURL(res);
                        _this.isShowPdf = true;
                    });
                    // Set answer for part
                    _this.numbers1 = _this.numbers.slice(num1, num2);
                    for (var i = 0; i < _this.numbers1.length; i++) {
                        var ans = {};
                        ans.name = _this.numbers1[i];
                        ans.value = '';
                        ans.isCorrect = true;
                        _this.answers.push(ans);
                    }
                });
            });
        });
    };
    TrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-training',
            template: __webpack_require__("./src/app/web/training/training.component.html"),
            styles: [__webpack_require__("./src/app/web/training/training.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_exam_service__["a" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_platform_browser__["b" /* DomSanitizer */]])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/web/web.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/web/web.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/web/web.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebComponent = /** @class */ (function () {
    function WebComponent() {
    }
    WebComponent.prototype.ngOnInit = function () {
    };
    WebComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-web',
            template: __webpack_require__("./src/app/web/web.component.html"),
            styles: [__webpack_require__("./src/app/web/web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebComponent);
    return WebComponent;
}());



/***/ }),

/***/ "./src/app/web/web.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_nvarbar_nvarbar_component__ = __webpack_require__("./src/app/web/core/nvarbar/nvarbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web_component__ = __webpack_require__("./src/app/web/web.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/web/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/web/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__test_test_component__ = __webpack_require__("./src/app/web/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__training_training_component__ = __webpack_require__("./src/app/web/training/training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__test_history_test_history_component__ = __webpack_require__("./src/app/web/test-history/test-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_ng2_pdf_viewer__ = __webpack_require__("./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__schedule_schedule_component__ = __webpack_require__("./src/app/web/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__room_room_component__ = __webpack_require__("./src/app/web/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__minitest_history_minitest_history_component__ = __webpack_require__("./src/app/web/minitest-history/minitest-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_footer_footer_component__ = __webpack_require__("./src/app/web/core/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__forum_forum_component__ = __webpack_require__("./src/app/web/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__detailroom_detailroom_component__ = __webpack_require__("./src/app/web/detailroom/detailroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_editor__ = __webpack_require__("./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap_tooltip__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__adding_post_adding_post_component__ = __webpack_require__("./src/app/web/adding-post/adding-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__mypost_mypost_component__ = __webpack_require__("./src/app/web/mypost/mypost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular_froala_wysiwyg__ = __webpack_require__("./node_modules/angular-froala-wysiwyg/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var webs = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__web_component__["a" /* WebComponent */],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'room', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'room/:id',
                component: __WEBPACK_IMPORTED_MODULE_14__room_room_component__["a" /* RoomComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'test',
                component: __WEBPACK_IMPORTED_MODULE_9__test_test_component__["a" /* TestComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'training',
                component: __WEBPACK_IMPORTED_MODULE_10__training_training_component__["a" /* TrainingComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'test-history',
                component: __WEBPACK_IMPORTED_MODULE_11__test_history_test_history_component__["a" /* TestHistoryComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'minitest-history',
                component: __WEBPACK_IMPORTED_MODULE_15__minitest_history_minitest_history_component__["a" /* MinitestHistoryComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'schedule',
                component: __WEBPACK_IMPORTED_MODULE_13__schedule_schedule_component__["a" /* ScheduleComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'forum',
                component: __WEBPACK_IMPORTED_MODULE_17__forum_forum_component__["a" /* ForumComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'adding-post',
                component: __WEBPACK_IMPORTED_MODULE_23__adding_post_adding_post_component__["a" /* AddingPostComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'detailroom/:id',
                component: __WEBPACK_IMPORTED_MODULE_18__detailroom_detailroom_component__["a" /* DetailroomComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'mypost',
                component: __WEBPACK_IMPORTED_MODULE_24__mypost_mypost_component__["a" /* MypostComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
            }
        ],
    }
];
var WebModule = /** @class */ (function () {
    function WebModule() {
    }
    WebModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__node_modules_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_19_ngx_editor__["a" /* NgxEditorModule */],
                __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_25_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_router__["c" /* RouterModule */].forChild(webs)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__node_modules_angular_router__["c" /* RouterModule */]],
            // tslint:disable-next-line:max-line-length
            declarations: [__WEBPACK_IMPORTED_MODULE_4__web_component__["a" /* WebComponent */], __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_9__test_test_component__["a" /* TestComponent */], __WEBPACK_IMPORTED_MODULE_10__training_training_component__["a" /* TrainingComponent */], __WEBPACK_IMPORTED_MODULE_11__test_history_test_history_component__["a" /* TestHistoryComponent */], __WEBPACK_IMPORTED_MODULE_13__schedule_schedule_component__["a" /* ScheduleComponent */], __WEBPACK_IMPORTED_MODULE_14__room_room_component__["a" /* RoomComponent */],
                __WEBPACK_IMPORTED_MODULE_15__minitest_history_minitest_history_component__["a" /* MinitestHistoryComponent */], __WEBPACK_IMPORTED_MODULE_0__core_nvarbar_nvarbar_component__["a" /* NvarbarComponent */], __WEBPACK_IMPORTED_MODULE_16__core_footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_17__forum_forum_component__["a" /* ForumComponent */], __WEBPACK_IMPORTED_MODULE_18__detailroom_detailroom_component__["a" /* DetailroomComponent */], __WEBPACK_IMPORTED_MODULE_23__adding_post_adding_post_component__["a" /* AddingPostComponent */], __WEBPACK_IMPORTED_MODULE_24__mypost_mypost_component__["a" /* MypostComponent */]]
        })
    ], WebModule);
    return WebModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map