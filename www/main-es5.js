(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n    <router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo-detail/todo-detail.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo-detail/todo-detail.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTodosTodoDetailTodoDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-list-header lines=\"inset\">\n  <ion-label ><h1>Tout doux detail</h1></ion-label>\n  <ion-button id=\"liste\" [routerLink]=\"['/todoList']\"><ion-icon name=\"library-outline\"></ion-icon></ion-button>\n</ion-list-header>\n\n<section>\n  <article *ngIf=\"!todoDetail\">\n    <img src=\"../../../../../assets/icon/Loading.gif\">\n  </article>\n\n  <article>\n    <h2>{{ todoDetail.name }}</h2>\n    <div class=\"description\">\n      <p>{{ todoDetail.description }}</p>\n    </div>\n    \n  </article>\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo-list/todo-list.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo-list/todo-list.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTodosTodoListTodoListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-list-header lines=\"inset\">\n  <ion-label ><h1>Tout doux list</h1></ion-label>\n  <ion-button id=\"pencil\" class=\"button\" [routerLink]=\"['/todo']\"><ion-icon  name=\"pencil-outline\"></ion-icon></ion-button>\n</ion-list-header>\n\n<section>\n  <article *ngIf=\"!todoList && !error\">\n    <img src=\"./../../../assets/icon/Loading.gif\">\n\n  </article>\n\n  <article *ngIf=\"todoList == empty\">\n    <ion-button id=\"pencil\" class=\"button\" [routerLink]=\"['/todo']\"><ion-icon  name=\"pencil-outline\"></ion-icon></ion-button>\n  </article>\n\n  <article *ngIf=\"error\">\n    <ion-button (click)=\"reload()\"><ion-icon name=\"refresh-outline\"></ion-icon></ion-button>\n  </article>\n\n  <article>\n    <div *ngFor=\"let todo of todoList\" class=\"row\">\n      <h2><a [routerLink]=\"['/detail', todo.name]\">{{ todo.name }}</a></h2>\n      <ion-button (click)=\"delete(todo)\"><ion-icon name=\"trash-outline\"></ion-icon></ion-button>\n    </div>\n  </article>\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo/todo.component.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo/todo.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTodosTodoTodoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list-header lines=\"inset\">\n  <ion-label>\n    <h1>Création de tout doux</h1>\n  </ion-label>\n  <ion-button id=\"liste\" [routerLink]=\"['/todoList']\">\n    <ion-icon name=\"library-outline\"></ion-icon>\n  </ion-button>\n</ion-list-header>\n\n<section>\n  <form [formGroup]=\"formTodo\" (ngSubmit)=\"save()\">\n  <ion-item>\n    <ion-label position=\"floating\">Nom</ion-label>\n    <ion-input formControlName=\"name\"></ion-input>\n    <span *ngIf=\"!formTodo.get('name').valid && formTodo.get('name').dirty\">\n      Name is require\n    </span>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-textarea formControlName=\"description\"></ion-textarea>\n  </ion-item>\n    <ion-button [disabled]=\"!this.formTodo.valid\" type=\"submit\">Save</ion-button>\n  </form>\n\n\n\n\n\n  <article>\n    \n  </article>\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.component.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTodosTodosComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n    <router-outlet></router-outlet>\n\n\n\n\n\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: "todos",
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./todos/todos.module */
          "./src/app/todos/todos.module.ts")).then(function (m) {
            return m.TodosModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _todos_todos_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./todos/todos.module */
      "./src/app/todos/todos.module.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _todos_todos_module__WEBPACK_IMPORTED_MODULE_8__["TodosModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/todos/shared/todo.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/todos/shared/todo.service.ts ***!
      \**********************************************/

    /*! exports provided: TodoService */

    /***/
    function srcAppTodosSharedTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoService", function () {
        return TodoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../environments/environment */
      "./src/environments/environment.ts");

      var TodoService = /*#__PURE__*/function () {
        function TodoService(http) {
          _classCallCheck(this, TodoService);

          this.http = http;
          this.todoList = [];
        }

        _createClass(TodoService, [{
          key: "get",
          value: function get() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].jsonbin.url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "secret-key": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].jsonbin.key
              })
            });
          }
        }, {
          key: "post",
          value: function post(todo) {
            var _this2 = this;

            var newTabTodo = [];
            this.todoList.forEach(function (item) {
              newTabTodo.push(item);
            });
            newTabTodo.push(todo);
            this.put(newTabTodo).subscribe(function () {
              _this2.error = false;

              _this2.todoList.push(todo);
            }, function () {
              _this2.error = true;
            });
            return todo;
          }
        }, {
          key: "delete",
          value: function _delete(todo) {
            var _this3 = this;

            var newTabTodo = [];
            this.todoList.forEach(function (item) {
              if (item !== todo) {
                newTabTodo.push(item);
              }
            });
            this.put(newTabTodo).subscribe(function () {
              _this3.error = false;

              var index = _this3.todoList.indexOf(todo);

              _this3.todoList.splice(index, 1);
            }, function () {
              _this3.error = true;
            });
            return todo;
          }
        }, {
          key: "put",
          value: function put(todoList) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].jsonbin.url, todoList, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "secret-key": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].jsonbin.key,
                "versioning": "false"
              })
            });
          }
        }]);

        return TodoService;
      }();

      TodoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      TodoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], TodoService);
      /***/
    },

    /***/
    "./src/app/todos/todo-detail/todo-detail.component.scss":
    /*!**************************************************************!*\
      !*** ./src/app/todos/todo-detail/todo-detail.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTodosTodoDetailTodoDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  font-size: 3em;\n}\n\n.description {\n  background-color: white;\n  width: 80vw;\n  height: 60vh;\n  margin: auto;\n}\n\np {\n  text-align: left;\n  padding: 15px;\n}\n\n#liste {\n  font-size: 1.2em;\n  background-color: white;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1kZXRhaWwvdG9kby1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8tZGV0YWlsL3RvZG8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxucHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4jbGlzdGV7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/todos/todo-detail/todo-detail.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/todos/todo-detail/todo-detail.component.ts ***!
      \************************************************************/

    /*! exports provided: TodoDetailComponent */

    /***/
    function srcAppTodosTodoDetailTodoDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function () {
        return TodoDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/todo.service */
      "./src/app/todos/shared/todo.service.ts");

      var TodoDetailComponent = /*#__PURE__*/function () {
        function TodoDetailComponent(todoService, route) {
          _classCallCheck(this, TodoDetailComponent);

          this.todoService = todoService;
          this.route = route;
        }

        _createClass(TodoDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var name = this.route.snapshot.paramMap.get("name");
            this.todoDetail = this.todoService.todoList.find(function (element) {
              return element.name === name;
            });
          }
        }]);

        return TodoDetailComponent;
      }();

      TodoDetailComponent.ctorParameters = function () {
        return [{
          type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      TodoDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./todo-detail.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo-detail/todo-detail.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./todo-detail.component.scss */
        "./src/app/todos/todo-detail/todo-detail.component.scss"))["default"]]
      })], TodoDetailComponent);
      /***/
    },

    /***/
    "./src/app/todos/todo-list/todo-list.component.scss":
    /*!**********************************************************!*\
      !*** ./src/app/todos/todo-list/todo-list.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTodosTodoListTodoListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: white;\n  border-bottom: 1px solid black;\n  padding: 10px;\n}\n\n.row > .button {\n  margin-top: 2%;\n}\n\n.row:nth-child(even) {\n  background-color: #e77cb2;\n}\n\n#pencil {\n  font-size: 1.2em;\n  background-color: white;\n  border-radius: 5px;\n}\n\narticle {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ucm93Pi5idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4ucm93Om50aC1jaGlsZChldmVuKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIzMSwgMTI0LCAxNzgpO1xyXG59XHJcbiNwZW5jaWx7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuYXJ0aWNsZXtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/todos/todo-list/todo-list.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/todos/todo-list/todo-list.component.ts ***!
      \********************************************************/

    /*! exports provided: TodoListComponent */

    /***/
    function srcAppTodosTodoListTodoListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () {
        return TodoListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/todo.service */
      "./src/app/todos/shared/todo.service.ts");

      var TodoListComponent = /*#__PURE__*/function () {
        function TodoListComponent(todoService) {
          _classCallCheck(this, TodoListComponent);

          this.todoService = todoService;
          this.reload();
        }

        _createClass(TodoListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "delete",
          value: function _delete(todo) {
            this.todoService["delete"](todo);
          }
        }, {
          key: "reload",
          value: function reload() {
            var _this4 = this;

            this.todoService.get().subscribe(function (todoList) {
              _this4.error = false;
              _this4.todoList = _this4.todoService.todoList = todoList;
            }, function () {
              _this4.error = true;
            });
          }
        }]);

        return TodoListComponent;
      }();

      TodoListComponent.ctorParameters = function () {
        return [{
          type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
        }];
      };

      TodoListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./todo-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo-list/todo-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./todo-list.component.scss */
        "./src/app/todos/todo-list/todo-list.component.scss"))["default"]]
      })], TodoListComponent);
      /***/
    },

    /***/
    "./src/app/todos/todo/todo.component.scss":
    /*!************************************************!*\
      !*** ./src/app/todos/todo/todo.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTodosTodoTodoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#liste {\n  font-size: 1.2em;\n  background-color: white;\n  border-radius: 5px;\n}\n\nsection {\n  width: 90vw;\n  margin: 100px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8vdG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaXN0ZXtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuc2VjdGlvbntcclxuXHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/todos/todo/todo.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/todos/todo/todo.component.ts ***!
      \**********************************************/

    /*! exports provided: TodoComponent */

    /***/
    function srcAppTodosTodoTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoComponent", function () {
        return TodoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/todo.service */
      "./src/app/todos/shared/todo.service.ts");

      var TodoComponent = /*#__PURE__*/function () {
        function TodoComponent(todoService, fb, router) {
          _classCallCheck(this, TodoComponent);

          this.todoService = todoService;
          this.fb = fb;
          this.router = router;
        }

        _createClass(TodoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formTodo = this.fb.group({
              name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          }
          /**
           * @param name
           * @param description
           */

        }, {
          key: "save",
          value: function save() {
            if (this.formTodo.valid) {
              this.router.navigate(['list']);
              return this.todoService.post({
                name: this.formTodo.get("name").value,
                description: this.formTodo.get("description").value
              });
            }
          }
        }]);

        return TodoComponent;
      }();

      TodoComponent.ctorParameters = function () {
        return [{
          type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      TodoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./todo.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo/todo.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./todo.component.scss */
        "./src/app/todos/todo/todo.component.scss"))["default"]]
      })], TodoComponent);
      /***/
    },

    /***/
    "./src/app/todos/todos-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/todos/todos-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: TodosRoutingModule */

    /***/
    function srcAppTodosTodosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodosRoutingModule", function () {
        return TodosRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./todo-detail/todo-detail.component */
      "./src/app/todos/todo-detail/todo-detail.component.ts");
      /* harmony import */


      var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./todo-list/todo-list.component */
      "./src/app/todos/todo-list/todo-list.component.ts");
      /* harmony import */


      var _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./todo/todo.component */
      "./src/app/todos/todo/todo.component.ts");
      /* harmony import */


      var _todos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./todos.component */
      "./src/app/todos/todos.component.ts");

      var routes = [{
        path: "",
        component: _todos_component__WEBPACK_IMPORTED_MODULE_6__["TodosComponent"],
        children: [{
          path: "list",
          component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"]
        }, {
          path: "todo",
          component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__["TodoComponent"]
        }, {
          path: "detail/:name",
          component: _todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_3__["TodoDetailComponent"]
        }, {
          path: "**",
          redirectTo: "list"
        }]
      }];

      var TodosRoutingModule = function TodosRoutingModule() {
        _classCallCheck(this, TodosRoutingModule);
      };

      TodosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TodosRoutingModule);
      /***/
    },

    /***/
    "./src/app/todos/todos.component.scss":
    /*!********************************************!*\
      !*** ./src/app/todos/todos.component.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppTodosTodosComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG9zLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/todos/todos.component.ts":
    /*!******************************************!*\
      !*** ./src/app/todos/todos.component.ts ***!
      \******************************************/

    /*! exports provided: TodosComponent */

    /***/
    function srcAppTodosTodosComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodosComponent", function () {
        return TodosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TodosComponent = /*#__PURE__*/function () {
        function TodosComponent() {
          _classCallCheck(this, TodosComponent);
        }

        _createClass(TodosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TodosComponent;
      }();

      TodosComponent.ctorParameters = function () {
        return [];
      };

      TodosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./todos.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./todos.component.scss */
        "./src/app/todos/todos.component.scss"))["default"]]
      })], TodosComponent);
      /***/
    },

    /***/
    "./src/app/todos/todos.module.ts":
    /*!***************************************!*\
      !*** ./src/app/todos/todos.module.ts ***!
      \***************************************/

    /*! exports provided: TodosModule */

    /***/
    function srcAppTodosTodosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodosModule", function () {
        return TodosModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./todo-list/todo-list.component */
      "./src/app/todos/todo-list/todo-list.component.ts");
      /* harmony import */


      var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./todo/todo.component */
      "./src/app/todos/todo/todo.component.ts");
      /* harmony import */


      var _todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./todos.component */
      "./src/app/todos/todos.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _todos_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./todos-routing.module */
      "./src/app/todos/todos-routing.module.ts");
      /* harmony import */


      var _todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./todo-detail/todo-detail.component */
      "./src/app/todos/todo-detail/todo-detail.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var TodosModule = function TodosModule() {
        _classCallCheck(this, TodosModule);
      };

      TodosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"], _todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_8__["TodoDetailComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"]],
        exports: [_todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _todos_routing_module__WEBPACK_IMPORTED_MODULE_7__["TodosRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"]]
      })], TodosModule);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        jsonbin: {
          key: "$2b$10$zmOSnz.aY5M7AY1Jc.BFwOdgwTYl8520t56SGcxLgGQh.5eOJfCMe",
          url: "https://api.jsonbin.io/b/5fc1039c045eb86f1f87e057"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Jodin\Documents\App-Task\todo-list\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map