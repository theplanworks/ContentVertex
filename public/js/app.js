webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = slugify;
/* unused harmony export destroyCk */
function slugify(text) {
    return text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

function destroyCk() {
    for (name in CKEDITOR.instances) {
        CKEDITOR.instances[name].destroy(true);
    }
}

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(126),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/components/Menu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Menu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7edea3a4", Component.options)
  } else {
    hotAPI.reload("data-v-7edea3a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(142),
  /* template */
  __webpack_require__(143),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/components/Editor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Editor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d7ae172", Component.options)
  } else {
    hotAPI.reload("data-v-3d7ae172", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
module.exports = __webpack_require__(160);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buefy__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buefy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_buefy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vee_validate__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vee_validate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_App_vue__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_App_vue__);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_buefy___default.a, {
    defaultIconPack: 'fa'
});
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vee_validate___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$http = __WEBPACK_IMPORTED_MODULE_1_axios___default.a.create();

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#root',
    router: __WEBPACK_IMPORTED_MODULE_4__config_router__["a" /* default */],

    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_5__components_App_vue___default.a);
    }
});

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(14);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
    base: '/content-vertex/',
    routes: [{
        path: '/',
        component: __webpack_require__(41),
        name: 'dashboard'
    }, {
        path: '/sites',
        component: __webpack_require__(44),
        name: 'site:index'
    }, {
        path: '/sites/:siteId',
        component: __webpack_require__(47),
        name: 'site:edit'
    }, {
        path: '/sites/:siteId/menus/:menuId',
        component: __webpack_require__(128),
        name: 'site:menu:edit'
    }, {
        path: '/pages',
        component: __webpack_require__(134),
        name: 'page:index'
    }, {
        path: '/pages/:pageId',
        component: __webpack_require__(140),
        name: 'page:edit'
    }, {
        path: '/blocks',
        component: __webpack_require__(145),
        name: 'block:index'
    }, {
        path: '/blocks/:blockId',
        component: __webpack_require__(151),
        name: 'block:edit'
    }, {
        path: '/media',
        component: __webpack_require__(154),
        name: 'media:index'
    }]
}));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(43),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/Dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-83f88f96", Component.options)
  } else {
    hotAPI.reload("data-v-83f88f96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            stats: {
                sites: 0,
                pages: 0,
                blocks: 0
            }
        };
    },
    mounted: function mounted() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/content-vertex/api/stats').then(function (response) {
            _this.stats = response.data;
        });
    },

    methods: {}
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-vertical is-parent"
  }, [_c('div', {
    staticClass: "tile is-child notification is-info"
  }, [_c('p', {
    staticClass: "title has-text-centered"
  }, [_c('b-icon', {
    attrs: {
      "icon": "server",
      "size": "is-large"
    }
  }), _c('br'), _vm._v("\n                        Sites " + _vm._s(_vm.stats.sites) + "\n                    ")], 1), _vm._v(" "), _c('router-link', {
    staticClass: "button is-pulled-right",
    attrs: {
      "to": "/sites"
    }
  }, [_vm._v("Manage")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "tile is-vertical is-parent"
  }, [_c('div', {
    staticClass: "tile is-child notification is-info"
  }, [_c('p', {
    staticClass: "title has-text-centered"
  }, [_vm._v("Pages " + _vm._s(_vm.stats.pages))]), _vm._v(" "), _c('router-link', {
    staticClass: "button is-pulled-right",
    attrs: {
      "to": {
        name: 'page:index'
      }
    }
  }, [_vm._v("Manage")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "tile is-vertical is-parent"
  }, [_c('div', {
    staticClass: "tile is-child notification is-info"
  }, [_c('p', {
    staticClass: "title has-text-centered"
  }, [_vm._v("Blocks " + _vm._s(_vm.stats.blocks))]), _vm._v(" "), _c('router-link', {
    staticClass: "button is-pulled-right",
    attrs: {
      "to": {
        name: 'block:index'
      }
    }
  }, [_vm._v("Manage")])], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "hero"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n                    Dashboard\n                ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  })])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-83f88f96", module.exports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(46),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/sites/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a56a0f0", Component.options)
  } else {
    hotAPI.reload("data-v-5a56a0f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            sites: {
                data: []
            }

        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$http.get('/content-vertex/api/sites').then(function (response) {
            console.log(response.data.data);
            _this.sites = response.data;
        });
    },

    methods: {}
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('b-table', {
    attrs: {
      "data": _vm.sites.data
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('b-table-column', {
          attrs: {
            "field": "name",
            "label": "Name",
            "sortable": ""
          }
        }, [_vm._v("\n                    " + _vm._s(props.row.name) + "\n                ")]), _vm._v(" "), _c('b-table-column', {
          attrs: {
            "field": "slug",
            "label": "Slug",
            "sortable": ""
          }
        }, [_vm._v("\n                    " + _vm._s(props.row.slug) + "\n                ")]), _vm._v(" "), _c('b-table-column', {
          attrs: {
            "field": "id",
            "label": "Actions"
          }
        }, [_c('router-link', {
          staticClass: "button",
          attrs: {
            "to": {
              name: 'site:edit',
              params: {
                siteId: props.row.id
              }
            }
          }
        }, [_vm._v("Edit")]), _vm._v(" "), _c('button', {
          staticClass: "button is-danger"
        }, [_vm._v("Delete")])], 1)]
      }
    }])
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "hero"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n                    Sites\n                ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  })])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5a56a0f0", module.exports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(127),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/sites/Edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a15a45c", Component.options)
  } else {
    hotAPI.reload("data-v-2a15a45c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_helper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_collect_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_collect_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_collect_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Menu_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Menu_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        MenuForm: __WEBPACK_IMPORTED_MODULE_2__components_Menu_vue___default.a
    },
    data: function data() {
        return {
            createMenu: false,
            site: {
                domains: [],
                menus: []
            }
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$http.get('/content-vertex/api/sites/' + this.$route.params.siteId).then(function (response) {
            _this.site = response.data;
        });
    },

    methods: {
        slugName: function slugName(text) {
            this.site.slug = Object(__WEBPACK_IMPORTED_MODULE_0__config_helper__["a" /* slugify */])(text);
        },
        addDomain: function addDomain() {
            this.site.domains.push({ id: null, domain: '', is_prod: false });
        },
        menuCreated: function menuCreated(menu) {
            this.$router.push({ name: 'site:menu:edit', params: { siteId: this.site.id, menuId: menu.id } });
        },
        confrimDomain: function confrimDomain(domain, index) {
            var _this2 = this;

            this.$dialog.confirm({
                title: 'Deleting domain',
                message: 'Are you sure you want to <strong>delete</strong> this domain?',
                confirmText: 'Delete domain',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: function onConfirm() {
                    return _this2.removeDomain(domain, index);
                }
            });
        },
        removeDomain: function removeDomain(domain, index) {
            var _this3 = this;

            if (domain.id === null) {
                this.site.domains.splice(index, 1);
            } else {
                this.$http.delete('/content-vertex/api/domains/' + domain.id).then(function (response) {

                    var collection = __WEBPACK_IMPORTED_MODULE_1_collect_js___default()(_this3.site.domains);

                    var filtered = collection.where('id', '!==', domain.id);

                    _this3.site.domains = filtered.all();

                    _this3.$toast.open({
                        message: 'Domain deleted',
                        type: 'is-success'
                    });
                });
            }
        },
        saveChanges: function saveChanges() {
            var _this4 = this;

            this.$validator.validateAll('site-basic').then(function (result) {
                if (result) {
                    _this4.$http.put('/content-vertex/api/sites/' + _this4.site.id, _this4.site).then(function (reponse) {
                        _this4.site = reponse.data;
                        _this4.$toast.open({
                            message: 'Site saved',
                            type: 'is-success'
                        });
                    });
                }
            });
        }
    }
});

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_helper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_collect_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_collect_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_collect_js__);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },

    props: {
        menu: {
            type: Object,
            default: function _default() {
                return { id: null, name: "", slug: "" };
            }
        }
    },
    mounted: function mounted() {},

    methods: {
        slugName: function slugName(name) {
            this.menu.slug = Object(__WEBPACK_IMPORTED_MODULE_0__config_helper__["a" /* slugify */])(name);
        },
        saveMenu: function saveMenu() {
            var _this = this;

            this.$validator.validateAll('menu').then(function (result) {
                if (result) {

                    var verb = 'post';

                    var menu = '';

                    var collection = __WEBPACK_IMPORTED_MODULE_1_collect_js___default()(_this.menu);

                    var filtered = collection.except(['links']);

                    if (_this.menu.id !== null) {
                        verb = 'put';
                        menu = _this.menu.id;
                    }

                    _this.$http({
                        method: verb,
                        url: '/content-vertex/api/sites/' + _this.$route.params.siteId + '/menus/' + menu,
                        data: filtered.all()
                    }).then(function (response) {
                        _this.$emit('updated', response.data);
                    });
                }
            });
        }
    }
});

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "menu-form"
  }, [_c('b-field', {
    attrs: {
      "label": "Menu Name",
      "type": _vm.errors.has('menu.name') ? 'is-danger' : '',
      "message": _vm.errors.first('menu.name')
    }
  }, [_c('b-input', {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: ('required'),
      expression: "'required'"
    }],
    attrs: {
      "data-vv-scope": "menu",
      "name": "name"
    },
    on: {
      "input": _vm.slugName
    },
    model: {
      value: (_vm.menu.name),
      callback: function($$v) {
        _vm.menu.name = $$v
      },
      expression: "menu.name"
    }
  })], 1), _vm._v(" "), _c('b-field', {
    attrs: {
      "label": "Menu Slug"
    }
  }, [_c('b-input', {
    attrs: {
      "readonly": true
    },
    model: {
      value: (_vm.menu.slug),
      callback: function($$v) {
        _vm.menu.slug = $$v
      },
      expression: "menu.slug"
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.saveMenu
    }
  }, [_vm._v("Save")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7edea3a4", module.exports)
  }
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "hero"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n                    Site: [ " + _vm._s(_vm.site.name) + " ]\n                ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column is-half"
  }, [_c('h2', [_vm._v("Basic Info")]), _vm._v(" "), _c('b-field', {
    attrs: {
      "label": "Name",
      "type": _vm.errors.has('site-basic.name') ? 'is-danger' : '',
      "message": _vm.errors.first('site-basic.name')
    }
  }, [_c('b-input', {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: ('required'),
      expression: "'required'"
    }],
    attrs: {
      "name": "name",
      "data-vv-scope": "site-basic"
    },
    on: {
      "input": _vm.slugName
    },
    model: {
      value: (_vm.site.name),
      callback: function($$v) {
        _vm.site.name = $$v
      },
      expression: "site.name"
    }
  })], 1), _vm._v(" "), _c('b-field', {
    attrs: {
      "label": "Slug"
    }
  }, [_c('b-input', {
    attrs: {
      "readonly": true
    },
    on: {
      "input": _vm.slugName
    },
    model: {
      value: (_vm.site.slug),
      callback: function($$v) {
        _vm.site.slug = $$v
      },
      expression: "site.slug"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column is-offset-1"
  }, _vm._l((_vm.site.domains), function(domain, index) {
    return _c('b-field', {
      key: index,
      attrs: {
        "grouped": ""
      }
    }, [_c('b-field', {
      attrs: {
        "label": "Domain",
        "type": _vm.errors.has('site-basic.domain' + index) ? 'is-danger' : '',
        "message": _vm.errors.first('site-basic.domain' + index)
      }
    }, [_c('b-input', {
      directives: [{
        name: "validate",
        rawName: "v-validate",
        value: ('required'),
        expression: "'required'"
      }],
      attrs: {
        "name": 'domain' + index,
        "data-vv-scope": "site-basic"
      },
      model: {
        value: (domain.domain),
        callback: function($$v) {
          domain.domain = $$v
        },
        expression: "domain.domain"
      }
    })], 1), _vm._v(" "), _c('b-field', {
      attrs: {
        "label": "Production"
      }
    }, [_c('b-switch', {
      model: {
        value: (domain.is_prod),
        callback: function($$v) {
          domain.is_prod = $$v
        },
        expression: "domain.is_prod"
      }
    })], 1), _vm._v(" "), _c('b-field', {
      attrs: {
        "label": "Remove"
      }
    }, [_c('button', {
      staticClass: "button is-danger",
      on: {
        "click": function($event) {
          _vm.confrimDomain(domain, index)
        }
      }
    }, [_c('span', {
      staticClass: "icon is-small"
    }, [_c('i', {
      staticClass: "fa fa-trash"
    })])])])], 1)
  }))]), _vm._v(" "), _c('div', {
    staticClass: "field is-grouped"
  }, [_c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-primary",
    on: {
      "click": _vm.saveChanges
    }
  }, [_vm._v("\n                            Save changes\n                        ")])]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button",
    on: {
      "click": _vm.addDomain
    }
  }, [_vm._v("\n                            Add Domain\n                        ")])]), _vm._v(" "), _vm._m(0)])], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('h2', [_vm._v("Menus")]), _vm._v(" "), _c('b-table', {
    attrs: {
      "data": _vm.site.menus
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('b-table-column', {
          attrs: {
            "field": "name",
            "label": "Name"
          }
        }, [_vm._v("\n                            " + _vm._s(props.row.name) + "\n                        ")]), _vm._v(" "), _c('b-table-column', {
          attrs: {
            "label": "Actions"
          }
        }, [_c('router-link', {
          staticClass: "button",
          attrs: {
            "to": {
              name: 'site:menu:edit',
              params: {
                siteId: _vm.site.id,
                menuId: props.row.id
              }
            }
          }
        }, [_vm._v("Edit")]), _vm._v(" "), _c('router-link', {
          staticClass: "button is-danger",
          attrs: {
            "to": {}
          }
        }, [_vm._v("Delete")])], 1)]
      }
    }])
  }), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.createMenu = true
      }
    }
  }, [_vm._v("Create Menu")])], 1)])]), _vm._v(" "), _c('b-modal', {
    attrs: {
      "active": _vm.createMenu
    },
    on: {
      "update:active": function($event) {
        _vm.createMenu = $event
      }
    }
  }, [_c('div', {
    staticClass: "modal-card"
  }, [_c('section', {
    staticClass: "modal-card-body"
  }, [_c('header', {
    staticClass: "modal-card-head"
  }, [_c('p', {
    staticClass: "modal-card-title"
  }, [_vm._v("Create Menu")])]), _vm._v(" "), _c('menu-form', {
    on: {
      "updated": _vm.menuCreated
    }
  })], 1)])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-danger"
  }, [_vm._v("\n                            Delete Site\n                        ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a15a45c", module.exports)
  }
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(133),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/sites/menus/Edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8230b4d2", Component.options)
  } else {
    hotAPI.reload("data-v-8230b4d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_helper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_collect_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_collect_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_collect_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MenuItem_vue__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MenuItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_MenuItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Menu_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Menu_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var newLink = { external: false, in_navigation: true, in_site_map: true, parent_id: null, page_id: null };
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        MenuItem: __WEBPACK_IMPORTED_MODULE_2__components_MenuItem_vue___default.a,
        MenuForm: __WEBPACK_IMPORTED_MODULE_3__components_Menu_vue___default.a
    },
    data: function data() {
        return {
            createMode: true,
            menu: {
                name: '',
                slug: '',
                links: [],
                site_id: 0
            },
            newLink: Object.assign({}, newLink),
            pages: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$http.get('/content-vertex/api/sites/' + this.$route.params.siteId + '/menus/' + this.$route.params.menuId).then(function (response) {
            _this.menu = response.data;
        });
        this.$http.get('/content-vertex/api/pages').then(function (response) {
            _this.pages = response.data;
        });

        this.getMenu();
    },

    methods: {
        slugName: function slugName(name) {
            this.menu.slug = Object(__WEBPACK_IMPORTED_MODULE_0__config_helper__["a" /* slugify */])(name);
        },
        menuUpdate: function menuUpdate(menu) {
            this.menu = menu;
        },
        removeLink: function removeLink(link) {
            var collection = __WEBPACK_IMPORTED_MODULE_1_collect_js___default()(this.menu.links);
            var filtered = collection.where('id', '!==', link.id);
            this.menu.links = filtered.all();
        },
        addLink: function addLink() {
            this.newLink = Object.assign({}, newLink);
            this.getMenu();
        },
        filterLinksByParent: function filterLinksByParent(parentId) {
            return this.menu.links.filter(function (link) {
                return link.parent_id === parentId;
            });
        },
        sortByOrderFilterByParent: function sortByOrderFilterByParent(parentId) {
            var collection = __WEBPACK_IMPORTED_MODULE_1_collect_js___default()(this.filterLinksByParent(parentId));

            var sorted = collection.sortBy('order');

            return sorted.all();
        },
        getMenu: function getMenu() {
            var _this2 = this;

            this.$http.get('/content-vertex/api/sites/' + this.$route.params.siteId + '/menus/' + this.$route.params.menuId).then(function (response) {
                _this2.menu = response.data;
            });
        }
    },
    computed: {}
});

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(131),
  /* template */
  __webpack_require__(132),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/components/MenuItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MenuItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52095b57", Component.options)
  } else {
    hotAPI.reload("data-v-52095b57", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_collect_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_collect_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_collect_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "MenuLink",
    components: {},
    data: function data() {
        return {
            orderList: []
        };
    },

    props: {
        menuId: {
            type: Number,
            required: true
        },
        siteId: {
            type: Number,
            required: true
        },
        link: {
            type: Object,
            required: true
        },
        links: {
            type: Array,
            required: true
        },
        pages: {
            type: Array,
            required: true
        },
        mode: {
            type: String,
            default: function _default() {
                return 'Update';
            }
        }

    },
    mounted: function mounted() {
        if (this.link.parent) {
            this.orderList = this.link.parent.children;
        } else {
            this.orderList = this.links;
        }
    },

    methods: {
        createOrUpdate: function createOrUpdate() {
            var _this = this;

            var collection = __WEBPACK_IMPORTED_MODULE_0_collect_js___default()(this.link);

            var verb = 'post';
            var link = '';
            var successText = 'Menu item created!';

            if (collection.has('menu_id')) {
                verb = 'put';
                link = this.link.id;
                successText = 'Menu item updated!';
            }

            var filtered = collection.except(['children', 'parent']);

            this.$validator.validateAll('link-item').then(function (result) {
                if (result) {
                    _this.$http({
                        method: verb,
                        url: "/content-vertex/api/sites/" + _this.siteId + "/menus/" + _this.menuId + "/links/" + link,
                        data: filtered.all()
                    }).then(function (response) {

                        _this.$toast.open({
                            message: successText,
                            type: 'is-success'
                        });

                        _this.$emit('change');
                    });
                }
            });
        },
        confirmDelete: function confirmDelete() {
            var _this2 = this;

            this.$dialog.confirm({
                title: 'Delete link',
                message: 'Are you sure you want to <strong>delete</strong> this link?',
                confirmText: 'Delete Link',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: function onConfirm() {
                    return _this2.delete();
                }
            });
        },
        delete: function _delete() {
            var _this3 = this;

            this.$http.delete("/content-vertex/api/sites/" + this.siteId + "/menus/" + this.menuId + "/links/" + this.link.id).then(function (response) {
                _this3.$toast.open({
                    message: 'Link has been deleted!',
                    type: 'is-success'
                });

                _this3.$emit('remove', _this3.link);
            });
        }
    },
    computed: {}
});

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "link-form"
  }, [_c('b-field', {
    attrs: {
      "label": "Title",
      "type": _vm.errors.has('link-item.title') ? 'is-danger' : '',
      "message": _vm.errors.first('link-item.title')
    }
  }, [_c('b-input', {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: ('required'),
      expression: "'required'"
    }],
    attrs: {
      "name": "title",
      "data-vv-scope": "link-item"
    },
    model: {
      value: (_vm.link.title),
      callback: function($$v) {
        _vm.link.title = $$v
      },
      expression: "link.title"
    }
  })], 1), _vm._v(" "), _c('b-field', {
    attrs: {
      "label": "Url",
      "type": _vm.errors.has('link-item.url') ? 'is-danger' : '',
      "message": _vm.errors.first('link-item.url')
    }
  }, [_c('b-input', {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: ('required'),
      expression: "'required'"
    }],
    attrs: {
      "name": "url",
      "data-vv-scope": "link-item"
    },
    model: {
      value: (_vm.link.url),
      callback: function($$v) {
        _vm.link.url = $$v
      },
      expression: "link.url"
    }
  })], 1), _vm._v(" "), _c('b-field', {
    attrs: {
      "grouped": ""
    }
  }, [_c('b-field', {
    attrs: {
      "label": "Page"
    }
  }, [_c('b-select', {
    attrs: {
      "placeholder": "Select a page"
    },
    model: {
      value: (_vm.link.page_id),
      callback: function($$v) {
        _vm.link.page_id = $$v
      },
      expression: "link.page_id"
    }
  }, _vm._l((_vm.pages), function(page) {
    return _c('option', {
      key: page.id,
      domProps: {
        "value": page.id
      }
    }, [_vm._v("\n                    " + _vm._s(page.title) + "\n                ")])
  }))], 1), _vm._v(" "), _c('b-field', {
    attrs: {
      "label": "Parent"
    }
  }, [_c('b-select', {
    attrs: {
      "placeholder": "Select a parent"
    },
    model: {
      value: (_vm.link.parent_id),
      callback: function($$v) {
        _vm.link.parent_id = $$v
      },
      expression: "link.parent_id"
    }
  }, _vm._l((_vm.links), function(link) {
    return _c('option', {
      key: link.id,
      domProps: {
        "value": link.id
      }
    }, [_vm._v("\n                    " + _vm._s(link.title) + "\n                ")])
  }))], 1), _vm._v(" "), (_vm.link.id) ? _c('b-field', {
    attrs: {
      "label": "Order"
    }
  }, [_c('b-select', {
    attrs: {
      "placeholder": "Change Order"
    },
    on: {
      "change": _vm.createOrUpdate
    },
    model: {
      value: (_vm.link.order),
      callback: function($$v) {
        _vm.link.order = $$v
      },
      expression: "link.order"
    }
  }, _vm._l((_vm.orderList), function(link, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": index + 1
      }
    }, [_vm._v("\n                    " + _vm._s(index + 1) + "\n                ")])
  }))], 1) : _vm._e()], 1), _vm._v(" "), _c('b-field', [_c('b-checkbox', {
    model: {
      value: (_vm.link.external),
      callback: function($$v) {
        _vm.link.external = $$v
      },
      expression: "link.external"
    }
  }, [_vm._v("External Link")])], 1), _vm._v(" "), _c('b-field', [_c('b-checkbox', {
    model: {
      value: (_vm.link.in_navigation),
      callback: function($$v) {
        _vm.link.in_navigation = $$v
      },
      expression: "link.in_navigation"
    }
  }, [_vm._v("Show in Navigation")])], 1), _vm._v(" "), _c('b-field', [_c('b-checkbox', {
    model: {
      value: (_vm.link.in_site_map),
      callback: function($$v) {
        _vm.link.in_site_map = $$v
      },
      expression: "link.in_site_map"
    }
  }, [_vm._v("Show in Site Map")])], 1), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.createOrUpdate
    }
  }, [_vm._v(_vm._s(_vm.mode))]), _vm._v(" "), (_vm.link.id) ? _c('button', {
    staticClass: "button is-danger",
    on: {
      "click": _vm.confirmDelete
    }
  }, [_vm._v("Delete")]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52095b57", module.exports)
  }
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'site:edit',
        params: {
          siteId: this.$route.params.siteId
        }
      }
    }
  }, [_vm._v("Back")]), _vm._v(" "), _c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column is-4"
  }, [_c('menu-form', {
    attrs: {
      "menu": _vm.menu
    },
    on: {
      "updated": _vm.menuUpdate
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('b-panel', [_c('strong', {
    slot: "header"
  }, [_vm._v("New Menu")]), _vm._v(" "), (_vm.menu.id) ? _c('menu-item', {
    attrs: {
      "menu-id": _vm.menu.id,
      "links": this.menu.links,
      "link": _vm.newLink,
      "site-id": parseInt(_vm.$route.params.siteId),
      "pages": _vm.pages,
      "mode": "Create Link"
    },
    on: {
      "change": _vm.addLink
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._l((_vm.sortByOrderFilterByParent(null)), function(link) {
    return _c('b-panel', {
      key: link.id,
      staticClass: "link-panel",
      attrs: {
        "collapsible": true,
        "open": false
      }
    }, [_c('strong', {
      slot: "header"
    }, [_vm._v(_vm._s(link.title))]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('menu-item', {
      attrs: {
        "link": link,
        "menuId": _vm.menu.id,
        "siteId": parseInt(_vm.$route.params.siteId),
        "links": _vm.filterLinksByParent(null),
        "pages": _vm.pages,
        "mode": "Update Link"
      },
      on: {
        "remove": _vm.removeLink,
        "change": _vm.getMenu
      }
    }), _vm._v(" "), _c('h2', [_vm._v("Children")]), _vm._v(" "), _vm._l((link.children), function(child) {
      return _c('b-panel', {
        key: child.id,
        attrs: {
          "collapsible": true,
          "open": false
        }
      }, [_c('strong', {
        slot: "header"
      }, [_vm._v(_vm._s(child.title))]), _vm._v(" "), _c('menu-item', {
        attrs: {
          "link": child,
          "menuId": _vm.menu.id,
          "siteId": parseInt(_vm.$route.params.siteId),
          "links": _vm.filterLinksByParent(null),
          "pages": _vm.pages,
          "mode": "Update Link"
        },
        on: {
          "remove": _vm.removeLink,
          "change": _vm.getMenu
        }
      })], 1)
    })], 2)])
  })], 2)])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "hero"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n                    Menu\n                ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("\n                    Create menus for site\n                ")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8230b4d2", module.exports)
  }
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(135),
  /* template */
  __webpack_require__(139),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/pages/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-212ec0a8", Component.options)
  } else {
    hotAPI.reload("data-v-212ec0a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_CreatePage_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_CreatePage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_CreatePage_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        CreatePage: __WEBPACK_IMPORTED_MODULE_0__components_CreatePage_vue___default.a
    },
    data: function data() {
        return {
            showCreate: false,
            pages: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$http.get('/content-vertex/api/pages').then(function (response) {
            _this.pages = response.data;
        });
    },

    methods: {
        newPage: function newPage(page) {

            this.$toast.open({
                message: page.title + ' was created!',
                type: 'is-success'
            });

            this.$router.push({ name: 'page:edit', params: { pageId: page.id } });
        }
    }
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(138),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/components/CreatePage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CreatePage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10454c30", Component.options)
  } else {
    hotAPI.reload("data-v-10454c30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            page: {
                title: "",
                description: "",
                content: "page content"
            }
        };
    },
    mounted: function mounted() {},

    methods: {
        createPage: function createPage() {
            var _this = this;

            this.$validator.validateAll('page').then(function (result) {
                if (result) {
                    _this.$http.post('/content-vertex/api/pages', _this.page).then(function (response) {
                        //route to newly created page
                        _this.$emit('created', response.data);
                    });
                }
            });
        }
    }
});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "data-vv-scope": "page"
    }
  }, [_c('b-field', {
    attrs: {
      "label": "Title",
      "type": _vm.errors.has('page.title') ? 'is-danger' : '',
      "message": _vm.errors.first('page.title')
    }
  }, [_c('b-input', {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: ('required'),
      expression: "'required'"
    }],
    attrs: {
      "name": "title",
      "data-vv-scope": "page"
    },
    model: {
      value: (_vm.page.title),
      callback: function($$v) {
        _vm.page.title = $$v
      },
      expression: "page.title"
    }
  })], 1), _vm._v(" "), _c('b-field', {
    attrs: {
      "label": "Description",
      "type": _vm.errors.has('page.description') ? 'is-danger' : '',
      "message": _vm.errors.first('page.description')
    }
  }, [_c('b-input', {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: ('required'),
      expression: "'required'"
    }],
    attrs: {
      "name": "description",
      "data-vv-scope": "page"
    },
    model: {
      value: (_vm.page.description),
      callback: function($$v) {
        _vm.page.description = $$v
      },
      expression: "page.description"
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.createPage
    }
  }, [_vm._v("\n        Save\n    ")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-10454c30", module.exports)
  }
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('button', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.showCreate = true
      }
    }
  }, [_vm._v("Create Page")]), _vm._v(" "), _c('b-table', {
    attrs: {
      "data": _vm.pages
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('b-table-column', {
          attrs: {
            "label": "Title"
          }
        }, [_vm._v("\n                " + _vm._s(props.row.title) + "\n            ")]), _vm._v(" "), _c('b-table-column', {
          attrs: {
            "label": "Actions"
          }
        }, [_c('router-link', {
          staticClass: "button",
          attrs: {
            "to": {
              name: 'page:edit',
              params: {
                pageId: props.row.id
              }
            }
          }
        }, [_vm._v("Edit")])], 1)]
      }
    }])
  }), _vm._v(" "), _c('b-modal', {
    attrs: {
      "active": _vm.showCreate
    },
    on: {
      "update:active": function($event) {
        _vm.showCreate = $event
      }
    }
  }, [_c('div', {
    staticClass: "modal-card"
  }, [_c('section', {
    staticClass: "modal-card-body"
  }, [_c('header', {
    staticClass: "modal-card-head"
  }, [_c('p', {
    staticClass: "modal-card-title"
  }, [_vm._v("Create Page")])]), _vm._v(" "), _c('create-page', {
    on: {
      "created": _vm.newPage
    }
  })], 1)])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-212ec0a8", module.exports)
  }
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(141),
  /* template */
  __webpack_require__(144),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/pages/Edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a742a4b8", Component.options)
  } else {
    hotAPI.reload("data-v-a742a4b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Editor_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Editor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Editor_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Editor: __WEBPACK_IMPORTED_MODULE_0__components_Editor_vue___default.a
    },
    data: function data() {
        return {
            page: {}
        };
    },
    mounted: function mounted() {},
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/content-vertex/api/pages/' + to.params.pageId).then(function (response) {
            next(function (vm) {
                return vm.setPage(response.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        this.page = null;
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/content-vertex/api/pages/' + to.params.pageId).then(function (response) {
            _this.setPage(response.data);
            next();
        });
    },

    methods: {
        setPage: function setPage(page) {
            this.page = page;
        },
        savePage: function savePage() {
            var _this2 = this;

            this.$http.put('/content-vertex/api/pages/' + this.$route.params.pageId, this.page).then(function (response) {

                _this2.$toast.open({
                    message: response.data.title + ' was saved!',
                    type: 'is-success'
                });

                _this2.$router.push({ name: 'page:index' });
            });
        }
    }
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            msg: 'Hello world!'
        };
    },

    props: {
        value: {
            required: true
        }
    },
    mounted: function mounted() {
        CKEDITOR.replace('editor1');
        CKEDITOR.config.protectedSource.push(/<block[\s\S]*?<\/block>/gi);
        CKEDITOR.config.autoParagraph = false;
        CKEDITOR.config.extraPlugins = 'sharedcontent,ajax,sourcearea';
        CKEDITOR.instances['editor1'].setData(this.value);
        var editor = this;
        CKEDITOR.instances["editor1"].on('change', function () {
            editor.update(this.getData());
        });
    },

    methods: {
        update: function update(value) {
            this.$emit('input', value);
        }
    }
});

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('textarea', {
    attrs: {
      "name": "editor1",
      "id": "editor1"
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        _vm.update($event.target.value)
      }
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d7ae172", module.exports)
  }
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('b-field', {
    attrs: {
      "label": "Title"
    }
  }, [_c('b-input', {
    model: {
      value: (_vm.page.title),
      callback: function($$v) {
        _vm.page.title = $$v
      },
      expression: "page.title"
    }
  })], 1), _vm._v(" "), _c('b-field', {
    attrs: {
      "label": "Description"
    }
  }, [_c('b-input', {
    model: {
      value: (_vm.page.description),
      callback: function($$v) {
        _vm.page.description = $$v
      },
      expression: "page.description"
    }
  })], 1), _vm._v(" "), _c('b-field', {
    attrs: {
      "label": "Content"
    }
  }, [_c('editor', {
    model: {
      value: (_vm.page.content),
      callback: function($$v) {
        _vm.page.content = $$v
      },
      expression: "page.content"
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.savePage
    }
  }, [_vm._v("Save")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a742a4b8", module.exports)
  }
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(146),
  /* template */
  __webpack_require__(150),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/blocks/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e76d5990", Component.options)
  } else {
    hotAPI.reload("data-v-e76d5990", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_CreateBlock_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_CreateBlock_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_CreateBlock_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Block: __WEBPACK_IMPORTED_MODULE_0__components_CreateBlock_vue___default.a
    },
    data: function data() {
        return {
            showCreate: false,
            blocks: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$http.get('/content-vertex/api/blocks').then(function (response) {
            _this.blocks = response.data;
        });
    },

    methods: {
        createBlock: function createBlock(block) {

            this.$toast.open({
                message: block.title + ' was created!',
                type: 'is-success'
            });

            this.$router.push({ name: 'block:edit', params: { blockId: block.id } });
        }
    }
});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(148),
  /* template */
  __webpack_require__(149),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/components/CreateBlock.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CreateBlock.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b53b988", Component.options)
  } else {
    hotAPI.reload("data-v-0b53b988", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Block',
    data: function data() {
        return {
            block: {
                title: '',
                content: 'Content goes here'
            }
        };
    },
    mounted: function mounted() {},

    methods: {
        saveBlock: function saveBlock() {
            var _this = this;

            this.$http.post('/content-vertex/api/blocks', this.block).then(function (response) {
                _this.$emit('created', response.data);
            });
        }
    }
});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('b-field', {
    attrs: {
      "label": "Name"
    }
  }, [_c('b-input', {
    model: {
      value: (_vm.block.title),
      callback: function($$v) {
        _vm.block.title = $$v
      },
      expression: "block.title"
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.saveBlock
    }
  }, [_vm._v("Save")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0b53b988", module.exports)
  }
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('button', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.showCreate = true
      }
    }
  }, [_vm._v("Create Block")]), _vm._v(" "), _c('b-table', {
    attrs: {
      "data": _vm.blocks
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('b-table-column', {
          attrs: {
            "field": "name",
            "label": "Name"
          }
        }, [_vm._v("\n                " + _vm._s(props.row.title) + "\n            ")]), _vm._v(" "), _c('b-table-column', {
          attrs: {
            "field": "id",
            "label": "Actions"
          }
        }, [_c('router-link', {
          staticClass: "button",
          attrs: {
            "to": {
              name: 'block:edit',
              params: {
                blockId: props.row.id
              }
            }
          }
        }, [_vm._v("Edit")])], 1)]
      }
    }])
  }, [_c('div', {
    staticClass: "has-text-centered",
    slot: "empty"
  }, [_vm._v("\n            This table is empty!\n        ")])]), _vm._v(" "), _c('b-modal', {
    attrs: {
      "active": _vm.showCreate
    },
    on: {
      "update:active": function($event) {
        _vm.showCreate = $event
      }
    }
  }, [_c('div', {
    staticClass: "modal-card"
  }, [_c('section', {
    staticClass: "modal-card-body"
  }, [_c('header', {
    staticClass: "modal-card-head"
  }, [_c('p', {
    staticClass: "modal-card-title"
  }, [_vm._v("Create Block")])]), _vm._v(" "), _c('block', {
    on: {
      "created": _vm.createBlock
    }
  })], 1)])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e76d5990", module.exports)
  }
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(152),
  /* template */
  __webpack_require__(153),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/blocks/Edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d40edd8", Component.options)
  } else {
    hotAPI.reload("data-v-3d40edd8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Editor_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Editor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Editor_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Editor: __WEBPACK_IMPORTED_MODULE_0__components_Editor_vue___default.a
    },
    data: function data() {
        return {
            block: {}
        };
    },
    mounted: function mounted() {},
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/content-vertex/api/blocks/' + to.params.blockId).then(function (response) {
            next(function (vm) {
                return vm.setBlock(response.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        this.block = null;
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/content-vertex/api/blocks/' + to.params.blockId).then(function (response) {
            _this.setBlock(response.data);
            next();
        });
    },

    methods: {
        setBlock: function setBlock(block) {
            this.block = block;
        },
        save: function save() {
            var _this2 = this;

            this.$http.put('/content-vertex/api/blocks/' + this.$route.params.blockId, this.block).then(function (response) {

                _this2.$toast.open({
                    message: response.data.title + ' was saved!',
                    type: 'is-success'
                });

                _this2.$router.push({ name: 'block:index' });
            });
        }
    }
});

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('b-field', {
    attrs: {
      "label": "Block Title"
    }
  }, [_c('b-input', {
    model: {
      value: (_vm.block.title),
      callback: function($$v) {
        _vm.block.title = $$v
      },
      expression: "block.title"
    }
  })], 1), _vm._v(" "), _c('b-field', {
    attrs: {
      "label": "Content"
    }
  }, [_c('editor', {
    model: {
      value: (_vm.block.content),
      callback: function($$v) {
        _vm.block.content = $$v
      },
      expression: "block.content"
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.save
    }
  }, [_vm._v("Save")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d40edd8", module.exports)
  }
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(155),
  /* template */
  __webpack_require__(156),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/media/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-763c98c8", Component.options)
  } else {
    hotAPI.reload("data-v-763c98c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            msg: 'Hello world!'
        };
    },
    mounted: function mounted() {},

    methods: {}
});

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._v("\n    " + _vm._s(_vm.msg) + "\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-763c98c8", module.exports)
  }
}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(158),
  /* template */
  __webpack_require__(159),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/ContentVertex/packages/thePLAN/ContentVertex/resources/assets/admin/js/components/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01b01128", Component.options)
  } else {
    hotAPI.reload("data-v-01b01128", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'App'
});

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav', {
    staticClass: "navbar"
  }, [_c('router-link', {
    staticClass: "navbar-item",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Content Vertex")]), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-item",
    attrs: {
      "to": {
        name: 'site:index'
      }
    }
  }, [_vm._v("Sites")]), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-item",
    attrs: {
      "to": {
        name: 'page:index'
      }
    }
  }, [_vm._v("Pages")]), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-item",
    attrs: {
      "to": {
        name: 'block:index'
      }
    }
  }, [_vm._v("Blocks")]), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-item",
    attrs: {
      "to": {
        name: 'media:index'
      }
    }
  }, [_vm._v("Media")])], 1), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('nav', {
    staticClass: "breadcrumb has-arrow-separator",
    attrs: {
      "aria-label": "breadcrumbs"
    }
  }, [_c('ul', _vm._l((_vm.$route.matched), function(route) {
    return _c('li', {
      staticClass: "is-active"
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: route.name
        }
      }
    }, [_vm._v("\n                        " + _vm._s(route.name) + "\n                    ")])], 1)
  }))])]), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-01b01128", module.exports)
  }
}

/***/ }),
/* 160 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[18]);