webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'todo-app',
        template: __webpack_require__(177),
        styles: [__webpack_require__(169)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_todo_list_todo_list_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_todo_item_todo_item_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_todo_header_todo_header_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_todo_footer_todo_footer_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_share_popup_share_popup_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_todo_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_todo_list_todo_list_component__["a" /* TodoListComponent */] },
    { path: ':status', component: __WEBPACK_IMPORTED_MODULE_8__components_todo_list_todo_list_component__["a" /* TodoListComponent */] },
    { path: 'share/:status', component: __WEBPACK_IMPORTED_MODULE_8__components_todo_list_todo_list_component__["a" /* TodoListComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_todo_list_todo_list_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_todo_item_todo_item_component__["a" /* TodoItemComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_todo_header_todo_header_component__["a" /* TodoHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_todo_footer_todo_footer_component__["a" /* TodoFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_share_popup_share_popup_component__["a" /* SharePopupComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__components_share_popup_share_popup_component__["a" /* SharePopupComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__services_todo_service__["a" /* TodoService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_share_popup_share_popup_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoFooterComponent = (function () {
    function TodoFooterComponent(todoService, route, dialog, router) {
        this.todoService = todoService;
        this.route = route;
        this.dialog = dialog;
        this.router = router;
        this.currentState = '';
    }
    TodoFooterComponent.prototype.openDialog = function (event) {
        var _this = this;
        event.preventDefault();
        var shareUrl;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__components_share_popup_share_popup_component__["a" /* SharePopupComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                shareUrl = result.slice(6);
                _this.todoService.stateToLocal(shareUrl, _this.currentState);
            }
        });
    };
    TodoFooterComponent.prototype.clearCompleted = function () {
        this.todoService.deleteCompletedTodos();
    };
    TodoFooterComponent.prototype.getTodosCount = function () {
        return this.todoService.todos.length;
    };
    TodoFooterComponent.prototype.getCompletedTodosCount = function () {
        return this.todoService.getCompletedTodos().length;
    };
    TodoFooterComponent.prototype.getRemainingTodosCount = function () {
        return this.todoService.getRemainingTodos().length;
    };
    TodoFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.params['status'] != undefined && this.route.snapshot.url[0].path == 'share') {
            var url = this.route.snapshot.params['status'];
            var urlShare = this.todoService.stateFromLocal(url) || '';
            this.router.navigate(['', urlShare]);
        }
        else {
            this.route.params.subscribe(function (param) { return _this.currentState = param['status'] || ''; });
        }
    };
    return TodoFooterComponent;
}());
TodoFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-todo-footer',
        template: __webpack_require__(179),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], TodoFooterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=todo-footer.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoHeaderComponent = (function () {
    function TodoHeaderComponent(todoService) {
        this.todoService = todoService;
        this.title = '';
    }
    TodoHeaderComponent.prototype.onCreate = function () {
        if (this.title != '') {
            this.todoService.createTodo(this.title);
            this.title = '';
        }
    };
    TodoHeaderComponent.prototype.ngOnInit = function () {
    };
    return TodoHeaderComponent;
}());
TodoHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-todo-header',
        template: __webpack_require__(180),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */]) === "function" && _a || Object])
], TodoHeaderComponent);

var _a;
//# sourceMappingURL=todo-header.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_todo_model__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoItemComponent = (function () {
    function TodoItemComponent() {
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.toggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.editing = false;
        this.escaped = false;
    }
    TodoItemComponent.prototype.onToggle = function () {
        this.toggle.emit(this.todo);
    };
    TodoItemComponent.prototype.onDelete = function () {
        this.delete.emit(this.todo);
    };
    TodoItemComponent.prototype.onEdit = function (title) {
        this.editing = true;
    };
    TodoItemComponent.prototype.getFocus = function (event) {
        event.target.focus();
    };
    TodoItemComponent.prototype.stopEditing = function (newTitle) {
        if (this.escaped != true) {
            if (newTitle == '') {
                this.delete.emit(this.todo);
            }
            else {
                this.todo.title = newTitle;
                this.edit.emit(this.todo);
            }
        }
        this.escaped = false;
        this.editing = false;
    };
    TodoItemComponent.prototype.cancelEditing = function () {
        this.escaped = true;
        this.editing = false;
    };
    TodoItemComponent.prototype.ngOnInit = function () {
    };
    return TodoItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_todo_model__["a" /* TodoModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_todo_model__["a" /* TodoModel */]) === "function" && _a || Object)
], TodoItemComponent.prototype, "todo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
    __metadata("design:type", Object)
], TodoItemComponent.prototype, "delete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
    __metadata("design:type", Object)
], TodoItemComponent.prototype, "toggle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
    __metadata("design:type", Object)
], TodoItemComponent.prototype, "edit", void 0);
TodoItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-todo-item',
        template: __webpack_require__(181),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], TodoItemComponent);

var _a;
//# sourceMappingURL=todo-item.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_todo_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoListComponent = (function () {
    function TodoListComponent(todoService, route, router) {
        this.todoService = todoService;
        this.route = route;
        this.router = router;
    }
    TodoListComponent.prototype.toggle = function (todo) {
        this.todoService.toggleTodo(todo);
    };
    TodoListComponent.prototype.delete = function (todo) {
        this.todoService.deleteTodo(todo);
    };
    TodoListComponent.prototype.getTodos = function () {
        if (this.currentState == 'active') {
            return this.todoService.getRemainingTodos();
        }
        else if (this.currentState == 'completed') {
            return this.todoService.getCompletedTodos();
        }
        else {
            return this.todoService.todos;
        }
    };
    TodoListComponent.prototype.toggleAll = function () {
        this.todoService.toggleAllTodos();
    };
    TodoListComponent.prototype.isAllCompleted = function () {
        return this.todoService.isAllCompleted();
    };
    TodoListComponent.prototype.getCompletedCount = function () {
        return this.todoService.getCompletedTodos().length;
    };
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.params['status'] != undefined && this.route.snapshot.url[0].path == 'share') {
            var url = this.route.snapshot.params['status'];
            var urlShare = this.todoService.stateFromLocal(url) || '';
            this.router.navigate(['', urlShare]);
        }
        else {
            this.route.params.subscribe(function (param) { return _this.currentState = param['status'] || ''; });
            this.getTodos();
        }
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-todo-list',
        template: __webpack_require__(182),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_todo_service__["a" /* TodoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], TodoListComponent);

var _a, _b, _c;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ 112:
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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<router-outlet name=\"popup\"></router-outlet>\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title class=\"primary-color\">Share State</h2>\n<md-dialog-content class=\"accent-color\">\n\t<textarea rows=\"3\" cols=\"20\" style=\"resize: none\" #shareText>{{ shareUrl }}</textarea>\t\n</md-dialog-content>\n<md-dialog-actions>\n  <button md-button (click)=\"dialogRef.close(shareText.value)\">Share</button>\n  <button md-button (click)=\"dialogRef.close()\">Close</button>\n</md-dialog-actions>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" *ngIf=\"getTodosCount()\">\n\t<span class=\"todo-count\"><strong>{{ getRemainingTodosCount() }}</strong> item{{ getRemainingTodosCount() == 1 ? '' : 's' }} left</span>\n\t<ul class=\"filters\">\n\t\t<li>\n\t\t\t<a (click)=\"openDialog($event)\" href=\"\">Share</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a [routerLink]=\"['']\" [class.selected]=\"currentState == ''\">All</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a [routerLink]=\"['', 'active']\" [class.selected]=\"currentState == 'active'\">Active</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a [routerLink]=\"['', 'completed']\" [class.selected]=\"currentState == 'completed'\">Completed</a>\n\t\t</li>\n\t</ul>\n\t<button class=\"clear-completed\" *ngIf=\"getCompletedTodosCount()\" (click)=\"clearCompleted()\">Clear completed</button>\n</footer>"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n\t<h1>todos</h1>\n\t<input class=\"new-todo\" name=\"title\" [(ngModel)]=\"title\" (keyup.enter)=\"onCreate(title)\" placeholder=\"What needs to be done?\" autofocus>\n</header>"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<li [class.completed]=\"todo.completed\" [class.editing]=\"editing\" >\n\t<div class=\"view\">\n\t\t<input class=\"toggle\" type=\"checkbox\" [checked]=\"todo.completed\" (click)=\"onToggle()\">\n\t\t<label (dblclick)=\"onEdit()\">{{ todo.title }}</label>\n\t\t<button class=\"destroy\" (click)=\"onDelete()\"></button>\n\t</div>\n\t<input class=\"edit\" name=\"newTitle\" *ngIf=\"editing\" [value]=\"todo.title\" #newTitle (keyup.enter)=\"stopEditing(newTitle.value)\" (keyup.escape)=\"cancelEditing()\" (blur)=\"stopEditing(newTitle.value)\" (mouseover)=\"getFocus($event)\">\n</li>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n\t<app-todo-header></app-todo-header>\n\t<section class=\"main\" *ngIf=\"getTodos().length\">\n\t\t<input class=\"toggle-all\" type=\"checkbox\" [checked]=\"isAllCompleted()\" *ngIf=\"getTodos().length\">\n\t\t<label for=\"toggle-all\" (click)=\"toggleAll()\">Mark all as complete</label>\n\t\t<ul class=\"todo-list\">\n\t\t\t<app-todo-item *ngFor=\"let todo of getTodos()\" [todo]=\"todo\" (delete)=\"delete($event)\" (toggle)=\"toggle($event)\"></app-todo-item>\n\t\t</ul>\n\t</section>\n\t<app-todo-footer></app-todo-footer>\n</section>\n"

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_todo_model__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = (function () {
    function TodoService() {
        if (localStorage.length) {
            var todosPers = localStorage.getItem('todos-roman');
            this.todos = JSON.parse(todosPers).map(function (item) {
                var todo = new __WEBPACK_IMPORTED_MODULE_1__models_todo_model__["a" /* TodoModel */](item.title);
                todo.completed = item.completed;
                todo.id = item.id;
                return todo;
            });
        }
        else {
            this.todos = [];
        }
    }
    TodoService.prototype.getTodos = function () {
        return this.todos;
    };
    TodoService.prototype.createTodo = function (title) {
        var todo = new __WEBPACK_IMPORTED_MODULE_1__models_todo_model__["a" /* TodoModel */](title);
        this.todos.push(todo);
        this.toLocalStorage();
    };
    TodoService.prototype.deleteTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
            this.toLocalStorage();
        }
    };
    TodoService.prototype.toggleTodo = function (todoItem) {
        var todo = this.findTodoById(todoItem.id);
        if (todo) {
            todo.completed = !todo.completed;
        }
        this.toLocalStorage();
    };
    TodoService.prototype.editTodo = function (todoItem) {
        var todo = this.findTodoById(todoItem.id);
        if (todo) {
            todo.title = todoItem.title;
        }
    };
    TodoService.prototype.isAllCompleted = function () {
        return this.todos.length == this.getCompletedTodos().length;
    };
    TodoService.prototype.toggleAllTodos = function () {
        var completed = this.getCompletedTodos().length, total = this.todos.length;
        if (completed == total) {
            this.todos.forEach(function (item) { item.completed = false; });
        }
        else {
            this.todos.forEach(function (item) { item.completed = true; });
        }
        this.toLocalStorage();
    };
    TodoService.prototype.getRemainingTodos = function () {
        return this.todos.filter(function (item) { return item.completed == false; });
    };
    TodoService.prototype.getCompletedTodos = function () {
        return this.todos.filter(function (item) { return item.completed == true; });
    };
    TodoService.prototype.deleteCompletedTodos = function () {
        this.todos = this.todos.filter(function (item) { return item.completed == false; });
        this.toLocalStorage();
    };
    TodoService.prototype.toLocalStorage = function () {
        localStorage.setItem('todos-roman', JSON.stringify(this.todos));
    };
    TodoService.prototype.stateToLocal = function (key, state) {
        localStorage.setItem(key, state);
        return key;
    };
    TodoService.prototype.stateFromLocal = function (key) {
        var state = localStorage.getItem(key);
        return state || '';
    };
    TodoService.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    TodoService.prototype.findTodoById = function (id) {
        return this.todos.find(function (todo) { return todo.id == id; });
    };
    return TodoService;
}());
TodoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TodoService);

//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharePopupComponent = (function () {
    function SharePopupComponent(dialogRef, todoService) {
        this.dialogRef = dialogRef;
        this.todoService = todoService;
    }
    SharePopupComponent.prototype.ngOnInit = function () {
        this.shareUrl = 'share/' + this.todoService.s4();
    };
    return SharePopupComponent;
}());
SharePopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-share-popup',
        template: __webpack_require__(178),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]) === "function" && _b || Object])
], SharePopupComponent);

var _a, _b;
//# sourceMappingURL=share-popup.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoModel; });
var TodoModel = (function () {
    function TodoModel(title) {
        this.title = title;
        this.id = Date.now();
        this.completed = false;
    }
    return TodoModel;
}());

//# sourceMappingURL=todo.model.js.map

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 98;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(112);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[234]);
//# sourceMappingURL=main.bundle.js.map