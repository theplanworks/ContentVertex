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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/components/Menu.vue"
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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/components/Editor.vue"
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
module.exports = __webpack_require__(162);


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_App_vue__ = __webpack_require__(159);
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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/Dashboard.vue"
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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/sites/Index.vue"
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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/sites/Edit.vue"
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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/sites/menus/Edit.vue"
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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/components/MenuItem.vue"
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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/pages/Index.vue"
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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/components/CreatePage.vue"
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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/pages/Edit.vue"
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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/blocks/Index.vue"
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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/components/CreateBlock.vue"
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
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/blocks/Edit.vue"
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
  __webpack_require__(158),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/pages/media/Index.vue"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dropzone__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dropzone__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            files: {},
            folders: [],
            directories: [],
            selectedMedia: null
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.loadFiles('/');
        this.loadDirectories();

        var uploader = new __WEBPACK_IMPORTED_MODULE_0_dropzone___default.a("span#upload", {
            url: '/content-vertex/api/media/upload',
            previewsContainer: '#uploadPreview',
            sending: function sending(file, xhr, formData) {
                return _this.dzSending(file, xhr, formData);
            },
            success: function success(e, res) {
                return _this.dzSuccess(e, res);
            },
            queuecomplete: function queuecomplete() {
                return _this.dzComplete();
            }
        });
    },

    methods: {
        loadFiles: function loadFiles(path) {
            var _this2 = this;

            if (path !== '/') {
                path = '/' + path.join('/');
            } else {
                path = '/';
                this.folders = [];
            }

            this.$http.post('/content-vertex/api/media/files', { folder: path }).then(function (response) {
                _this2.files = response.data;
            });
        },
        loadDirectories: function loadDirectories() {
            var _this3 = this;

            this.$http.get('/content-vertex/api/media/directories').then(function (response) {
                _this3.directories = response.data;
            });
        },
        newDialogFolder: function newDialogFolder() {
            var _this4 = this;

            this.$dialog.prompt({
                message: 'Folder Name',
                inputMaxlength: 20,
                inputPlaceholder: 'folder_name',
                onConfirm: function onConfirm(value) {
                    return _this4.createNewFolder(value);
                }
            });
        },
        createNewFolder: function createNewFolder(value) {
            var _this5 = this;

            var path = this.files.path + '/' + value;

            this.$http.post('/content-vertex/api/media/new-folder/', { new_folder: path }).then(function (response) {
                _this5.loadFiles(_this5.folders);
            });
        },
        selectMedia: function selectMedia(item) {
            if (item.type === 'folder') {
                this.folders.push(item.name);
                this.loadFiles(this.folders);
            } else {
                this.selectedMedia = item;
            }
        },
        changeFolder: function changeFolder(folder) {
            //remove everything forward in the array
            var index = this.folders.indexOf(folder);
            this.folders.length = index + 1;
            this.loadFiles(this.folders);
        },
        dzSending: function dzSending(file, xhr, formData) {
            var token = document.head.querySelector('meta[name="csrf-token"]');
            formData.append("_token", token.content);
            formData.append('upload_path', this.files.path);
        },
        dzSuccess: function dzSuccess(e, res) {},
        dzComplete: function dzComplete() {
            this.loadFiles(this.folders);
        }
    }
});

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {
/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

(function() {
  var Dropzone, Emitter, ExifRestore, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
    slice = [].slice,
    extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  noop = function() {};

  Emitter = (function() {
    function Emitter() {}

    Emitter.prototype.addEventListener = Emitter.prototype.on;

    Emitter.prototype.on = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }
      this._callbacks[event].push(fn);
      return this;
    };

    Emitter.prototype.emit = function() {
      var args, callback, callbacks, event, j, len;
      event = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      this._callbacks = this._callbacks || {};
      callbacks = this._callbacks[event];
      if (callbacks) {
        for (j = 0, len = callbacks.length; j < len; j++) {
          callback = callbacks[j];
          callback.apply(this, args);
        }
      }
      return this;
    };

    Emitter.prototype.removeListener = Emitter.prototype.off;

    Emitter.prototype.removeAllListeners = Emitter.prototype.off;

    Emitter.prototype.removeEventListener = Emitter.prototype.off;

    Emitter.prototype.off = function(event, fn) {
      var callback, callbacks, i, j, len;
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      }
      callbacks = this._callbacks[event];
      if (!callbacks) {
        return this;
      }
      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      }
      for (i = j = 0, len = callbacks.length; j < len; i = ++j) {
        callback = callbacks[i];
        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      return this;
    };

    return Emitter;

  })();

  Dropzone = (function(superClass) {
    var extend, resolveOption;

    extend1(Dropzone, superClass);

    Dropzone.prototype.Emitter = Emitter;


    /*
    This is a list of all available events you can register on a dropzone object.
    
    You can register an event handler like this:
    
        dropzone.on("dragEnter", function() { });
     */

    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

    Dropzone.prototype.defaultOptions = {
      url: null,
      method: "post",
      withCredentials: false,
      timeout: 30000,
      parallelUploads: 2,
      uploadMultiple: false,
      maxFilesize: 256,
      paramName: "file",
      createImageThumbnails: true,
      maxThumbnailFilesize: 10,
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      thumbnailMethod: 'crop',
      resizeWidth: null,
      resizeHeight: null,
      resizeMimeType: null,
      resizeQuality: 0.8,
      resizeMethod: 'contain',
      filesizeBase: 1000,
      maxFiles: null,
      params: {},
      headers: null,
      clickable: true,
      ignoreHiddenFiles: true,
      acceptedFiles: null,
      acceptedMimeTypes: null,
      autoProcessQueue: true,
      autoQueue: true,
      addRemoveLinks: false,
      previewsContainer: null,
      hiddenInputContainer: "body",
      capture: null,
      renameFilename: null,
      renameFile: null,
      forceFallback: false,
      dictDefaultMessage: "Drop files here to upload",
      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
      dictInvalidFileType: "You can't upload files of this type.",
      dictResponseError: "Server responded with {{statusCode}} code.",
      dictCancelUpload: "Cancel upload",
      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
      dictRemoveFile: "Remove file",
      dictRemoveFileConfirmation: null,
      dictMaxFilesExceeded: "You can not upload any more files.",
      dictFileSizeUnits: {
        tb: "TB",
        gb: "GB",
        mb: "MB",
        kb: "KB",
        b: "b"
      },
      init: function() {
        return noop;
      },
      accept: function(file, done) {
        return done();
      },
      fallback: function() {
        var child, j, len, messageElement, ref, span;
        this.element.className = this.element.className + " dz-browser-not-supported";
        ref = this.element.getElementsByTagName("div");
        for (j = 0, len = ref.length; j < len; j++) {
          child = ref[j];
          if (/(^| )dz-message($| )/.test(child.className)) {
            messageElement = child;
            child.className = "dz-message";
            continue;
          }
        }
        if (!messageElement) {
          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
          this.element.appendChild(messageElement);
        }
        span = messageElement.getElementsByTagName("span")[0];
        if (span) {
          if (span.textContent != null) {
            span.textContent = this.options.dictFallbackMessage;
          } else if (span.innerText != null) {
            span.innerText = this.options.dictFallbackMessage;
          }
        }
        return this.element.appendChild(this.getFallbackForm());
      },
      resize: function(file, width, height, resizeMethod) {
        var info, srcRatio, trgRatio;
        info = {
          srcX: 0,
          srcY: 0,
          srcWidth: file.width,
          srcHeight: file.height
        };
        srcRatio = file.width / file.height;
        if ((width == null) && (height == null)) {
          width = info.srcWidth;
          height = info.srcHeight;
        } else if (width == null) {
          width = height * srcRatio;
        } else if (height == null) {
          height = width / srcRatio;
        }
        width = Math.min(width, info.srcWidth);
        height = Math.min(height, info.srcHeight);
        trgRatio = width / height;
        if (info.srcWidth > width || info.srcHeight > height) {
          if (resizeMethod === 'crop') {
            if (srcRatio > trgRatio) {
              info.srcHeight = file.height;
              info.srcWidth = info.srcHeight * trgRatio;
            } else {
              info.srcWidth = file.width;
              info.srcHeight = info.srcWidth / trgRatio;
            }
          } else if (resizeMethod === 'contain') {
            if (srcRatio > trgRatio) {
              height = width / srcRatio;
            } else {
              width = height * srcRatio;
            }
          } else {
            throw new Error("Unknown resizeMethod '" + resizeMethod + "'");
          }
        }
        info.srcX = (file.width - info.srcWidth) / 2;
        info.srcY = (file.height - info.srcHeight) / 2;
        info.trgWidth = width;
        info.trgHeight = height;
        return info;
      },
      transformFile: function(file, done) {
        if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
          return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
        } else {
          return done(file);
        }
      },
      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",

      /*
      Those functions register themselves to the events on init and handle all
      the user interface specific stuff. Overwriting them won't break the upload
      but can break the way it's displayed.
      You can overwrite them if you don't like the default behavior. If you just
      want to add an additional event handler, register it on the dropzone object
      and don't overwrite those options.
       */
      drop: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragstart: noop,
      dragend: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragenter: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragover: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragleave: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      paste: noop,
      reset: function() {
        return this.element.classList.remove("dz-started");
      },
      addedfile: function(file) {
        var j, k, l, len, len1, len2, node, ref, ref1, ref2, removeFileEvent, removeLink, results;
        if (this.element === this.previewsContainer) {
          this.element.classList.add("dz-started");
        }
        if (this.previewsContainer) {
          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
          file.previewTemplate = file.previewElement;
          this.previewsContainer.appendChild(file.previewElement);
          ref = file.previewElement.querySelectorAll("[data-dz-name]");
          for (j = 0, len = ref.length; j < len; j++) {
            node = ref[j];
            node.textContent = file.name;
          }
          ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
          for (k = 0, len1 = ref1.length; k < len1; k++) {
            node = ref1[k];
            node.innerHTML = this.filesize(file.size);
          }
          if (this.options.addRemoveLinks) {
            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
            file.previewElement.appendChild(file._removeLink);
          }
          removeFileEvent = (function(_this) {
            return function(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                  return _this.removeFile(file);
                });
              } else {
                if (_this.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                    return _this.removeFile(file);
                  });
                } else {
                  return _this.removeFile(file);
                }
              }
            };
          })(this);
          ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
          results = [];
          for (l = 0, len2 = ref2.length; l < len2; l++) {
            removeLink = ref2[l];
            results.push(removeLink.addEventListener("click", removeFileEvent));
          }
          return results;
        }
      },
      removedfile: function(file) {
        var ref;
        if (file.previewElement) {
          if ((ref = file.previewElement) != null) {
            ref.parentNode.removeChild(file.previewElement);
          }
        }
        return this._updateMaxFilesReachedClass();
      },
      thumbnail: function(file, dataUrl) {
        var j, len, ref, thumbnailElement;
        if (file.previewElement) {
          file.previewElement.classList.remove("dz-file-preview");
          ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
          for (j = 0, len = ref.length; j < len; j++) {
            thumbnailElement = ref[j];
            thumbnailElement.alt = file.name;
            thumbnailElement.src = dataUrl;
          }
          return setTimeout(((function(_this) {
            return function() {
              return file.previewElement.classList.add("dz-image-preview");
            };
          })(this)), 1);
        }
      },
      error: function(file, message) {
        var j, len, node, ref, results;
        if (file.previewElement) {
          file.previewElement.classList.add("dz-error");
          if (typeof message !== "String" && message.error) {
            message = message.error;
          }
          ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            node = ref[j];
            results.push(node.textContent = message);
          }
          return results;
        }
      },
      errormultiple: noop,
      processing: function(file) {
        if (file.previewElement) {
          file.previewElement.classList.add("dz-processing");
          if (file._removeLink) {
            return file._removeLink.textContent = this.options.dictCancelUpload;
          }
        }
      },
      processingmultiple: noop,
      uploadprogress: function(file, progress, bytesSent) {
        var j, len, node, ref, results;
        if (file.previewElement) {
          ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            node = ref[j];
            if (node.nodeName === 'PROGRESS') {
              results.push(node.value = progress);
            } else {
              results.push(node.style.width = progress + "%");
            }
          }
          return results;
        }
      },
      totaluploadprogress: noop,
      sending: noop,
      sendingmultiple: noop,
      success: function(file) {
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-success");
        }
      },
      successmultiple: noop,
      canceled: function(file) {
        return this.emit("error", file, "Upload canceled.");
      },
      canceledmultiple: noop,
      complete: function(file) {
        if (file._removeLink) {
          file._removeLink.textContent = this.options.dictRemoveFile;
        }
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-complete");
        }
      },
      completemultiple: noop,
      maxfilesexceeded: noop,
      maxfilesreached: noop,
      queuecomplete: noop,
      addedfiles: noop
    };

    extend = function() {
      var j, key, len, object, objects, target, val;
      target = arguments[0], objects = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      for (j = 0, len = objects.length; j < len; j++) {
        object = objects[j];
        for (key in object) {
          val = object[key];
          target[key] = val;
        }
      }
      return target;
    };

    function Dropzone(element1, options) {
      var elementOptions, fallback, ref;
      this.element = element1;
      this.version = Dropzone.version;
      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
      this.clickableElements = [];
      this.listeners = [];
      this.files = [];
      if (typeof this.element === "string") {
        this.element = document.querySelector(this.element);
      }
      if (!(this.element && (this.element.nodeType != null))) {
        throw new Error("Invalid dropzone element.");
      }
      if (this.element.dropzone) {
        throw new Error("Dropzone already attached.");
      }
      Dropzone.instances.push(this);
      this.element.dropzone = this;
      elementOptions = (ref = Dropzone.optionsForElement(this.element)) != null ? ref : {};
      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
        return this.options.fallback.call(this);
      }
      if (this.options.url == null) {
        this.options.url = this.element.getAttribute("action");
      }
      if (!this.options.url) {
        throw new Error("No URL provided.");
      }
      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
      }
      if (this.options.acceptedMimeTypes) {
        this.options.acceptedFiles = this.options.acceptedMimeTypes;
        delete this.options.acceptedMimeTypes;
      }
      if (this.options.renameFilename != null) {
        this.options.renameFile = (function(_this) {
          return function(file) {
            return _this.options.renameFilename.call(_this, file.name, file);
          };
        })(this);
      }
      this.options.method = this.options.method.toUpperCase();
      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
        fallback.parentNode.removeChild(fallback);
      }
      if (this.options.previewsContainer !== false) {
        if (this.options.previewsContainer) {
          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
        } else {
          this.previewsContainer = this.element;
        }
      }
      if (this.options.clickable) {
        if (this.options.clickable === true) {
          this.clickableElements = [this.element];
        } else {
          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
        }
      }
      this.init();
    }

    Dropzone.prototype.getAcceptedFiles = function() {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.accepted) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.getRejectedFiles = function() {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (!file.accepted) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.getFilesWithStatus = function(status) {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.status === status) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.getQueuedFiles = function() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    };

    Dropzone.prototype.getUploadingFiles = function() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    };

    Dropzone.prototype.getAddedFiles = function() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    };

    Dropzone.prototype.getActiveFiles = function() {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.init = function() {
      var eventName, j, len, noPropagation, ref, ref1, setupHiddenFileInput;
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }
      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }
      if (this.clickableElements.length) {
        setupHiddenFileInput = (function(_this) {
          return function() {
            if (_this.hiddenFileInput) {
              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
            }
            _this.hiddenFileInput = document.createElement("input");
            _this.hiddenFileInput.setAttribute("type", "file");
            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
              _this.hiddenFileInput.setAttribute("multiple", "multiple");
            }
            _this.hiddenFileInput.className = "dz-hidden-input";
            if (_this.options.acceptedFiles != null) {
              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
            }
            if (_this.options.capture != null) {
              _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
            }
            _this.hiddenFileInput.style.visibility = "hidden";
            _this.hiddenFileInput.style.position = "absolute";
            _this.hiddenFileInput.style.top = "0";
            _this.hiddenFileInput.style.left = "0";
            _this.hiddenFileInput.style.height = "0";
            _this.hiddenFileInput.style.width = "0";
            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
            return _this.hiddenFileInput.addEventListener("change", function() {
              var file, files, j, len;
              files = _this.hiddenFileInput.files;
              if (files.length) {
                for (j = 0, len = files.length; j < len; j++) {
                  file = files[j];
                  _this.addFile(file);
                }
              }
              _this.emit("addedfiles", files);
              return setupHiddenFileInput();
            });
          };
        })(this);
        setupHiddenFileInput();
      }
      this.URL = (ref = window.URL) != null ? ref : window.webkitURL;
      ref1 = this.events;
      for (j = 0, len = ref1.length; j < len; j++) {
        eventName = ref1[j];
        this.on(eventName, this.options[eventName]);
      }
      this.on("uploadprogress", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("removedfile", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("canceled", (function(_this) {
        return function(file) {
          return _this.emit("complete", file);
        };
      })(this));
      this.on("complete", (function(_this) {
        return function(file) {
          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
            return setTimeout((function() {
              return _this.emit("queuecomplete");
            }), 0);
          }
        };
      })(this));
      noPropagation = function(e) {
        e.stopPropagation();
        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      };
      this.listeners = [
        {
          element: this.element,
          events: {
            "dragstart": (function(_this) {
              return function(e) {
                return _this.emit("dragstart", e);
              };
            })(this),
            "dragenter": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.emit("dragenter", e);
              };
            })(this),
            "dragover": (function(_this) {
              return function(e) {
                var efct;
                try {
                  efct = e.dataTransfer.effectAllowed;
                } catch (undefined) {}
                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                noPropagation(e);
                return _this.emit("dragover", e);
              };
            })(this),
            "dragleave": (function(_this) {
              return function(e) {
                return _this.emit("dragleave", e);
              };
            })(this),
            "drop": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.drop(e);
              };
            })(this),
            "dragend": (function(_this) {
              return function(e) {
                return _this.emit("dragend", e);
              };
            })(this)
          }
        }
      ];
      this.clickableElements.forEach((function(_this) {
        return function(clickableElement) {
          return _this.listeners.push({
            element: clickableElement,
            events: {
              "click": function(evt) {
                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                  _this.hiddenFileInput.click();
                }
                return true;
              }
            }
          });
        };
      })(this));
      this.enable();
      return this.options.init.call(this);
    };

    Dropzone.prototype.destroy = function() {
      var ref;
      this.disable();
      this.removeAllFiles(true);
      if ((ref = this.hiddenFileInput) != null ? ref.parentNode : void 0) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }
      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    };

    Dropzone.prototype.updateTotalUploadProgress = function() {
      var activeFiles, file, j, len, ref, totalBytes, totalBytesSent, totalUploadProgress;
      totalBytesSent = 0;
      totalBytes = 0;
      activeFiles = this.getActiveFiles();
      if (activeFiles.length) {
        ref = this.getActiveFiles();
        for (j = 0, len = ref.length; j < len; j++) {
          file = ref[j];
          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }
        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }
      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    };

    Dropzone.prototype._getParamName = function(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    };

    Dropzone.prototype._renameFile = function(file) {
      if (typeof this.options.renameFile !== "function") {
        return file.name;
      }
      return this.options.renameFile(file);
    };

    Dropzone.prototype.getFallbackForm = function() {
      var existingFallback, fields, fieldsString, form;
      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }
      fieldsString = "<div class=\"dz-fallback\">";
      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }
      fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
      fields = Dropzone.createElement(fieldsString);
      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }
      return form != null ? form : fields;
    };

    Dropzone.prototype.getExistingFallback = function() {
      var fallback, getFallback, j, len, ref, tagName;
      getFallback = function(elements) {
        var el, j, len;
        for (j = 0, len = elements.length; j < len; j++) {
          el = elements[j];
          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };
      ref = ["div", "form"];
      for (j = 0, len = ref.length; j < len; j++) {
        tagName = ref[j];
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    };

    Dropzone.prototype.setupEventListeners = function() {
      var elementListeners, event, j, len, listener, ref, results;
      ref = this.listeners;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        elementListeners = ref[j];
        results.push((function() {
          var ref1, results1;
          ref1 = elementListeners.events;
          results1 = [];
          for (event in ref1) {
            listener = ref1[event];
            results1.push(elementListeners.element.addEventListener(event, listener, false));
          }
          return results1;
        })());
      }
      return results;
    };

    Dropzone.prototype.removeEventListeners = function() {
      var elementListeners, event, j, len, listener, ref, results;
      ref = this.listeners;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        elementListeners = ref[j];
        results.push((function() {
          var ref1, results1;
          ref1 = elementListeners.events;
          results1 = [];
          for (event in ref1) {
            listener = ref1[event];
            results1.push(elementListeners.element.removeEventListener(event, listener, false));
          }
          return results1;
        })());
      }
      return results;
    };

    Dropzone.prototype.disable = function() {
      var file, j, len, ref, results;
      this.clickableElements.forEach(function(element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        results.push(this.cancelUpload(file));
      }
      return results;
    };

    Dropzone.prototype.enable = function() {
      this.clickableElements.forEach(function(element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    };

    Dropzone.prototype.filesize = function(size) {
      var cutoff, i, j, len, selectedSize, selectedUnit, unit, units;
      selectedSize = 0;
      selectedUnit = "b";
      if (size > 0) {
        units = ['tb', 'gb', 'mb', 'kb', 'b'];
        for (i = j = 0, len = units.length; j < len; i = ++j) {
          unit = units[i];
          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }
        selectedSize = Math.round(10 * selectedSize) / 10;
      }
      return "<strong>" + selectedSize + "</strong> " + this.options.dictFileSizeUnits[selectedUnit];
    };

    Dropzone.prototype._updateMaxFilesReachedClass = function() {
      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }
        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    };

    Dropzone.prototype.drop = function(e) {
      var files, items;
      if (!e.dataTransfer) {
        return;
      }
      this.emit("drop", e);
      files = e.dataTransfer.files;
      this.emit("addedfiles", files);
      if (files.length) {
        items = e.dataTransfer.items;
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    };

    Dropzone.prototype.paste = function(e) {
      var items, ref;
      if ((e != null ? (ref = e.clipboardData) != null ? ref.items : void 0 : void 0) == null) {
        return;
      }
      this.emit("paste", e);
      items = e.clipboardData.items;
      if (items.length) {
        return this._addFilesFromItems(items);
      }
    };

    Dropzone.prototype.handleFiles = function(files) {
      var file, j, len, results;
      results = [];
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        results.push(this.addFile(file));
      }
      return results;
    };

    Dropzone.prototype._addFilesFromItems = function(items) {
      var entry, item, j, len, results;
      results = [];
      for (j = 0, len = items.length; j < len; j++) {
        item = items[j];
        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
          if (entry.isFile) {
            results.push(this.addFile(item.getAsFile()));
          } else if (entry.isDirectory) {
            results.push(this._addFilesFromDirectory(entry, entry.name));
          } else {
            results.push(void 0);
          }
        } else if (item.getAsFile != null) {
          if ((item.kind == null) || item.kind === "file") {
            results.push(this.addFile(item.getAsFile()));
          } else {
            results.push(void 0);
          }
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
      var dirReader, errorHandler, readEntries;
      dirReader = directory.createReader();
      errorHandler = function(error) {
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
      };
      readEntries = (function(_this) {
        return function() {
          return dirReader.readEntries(function(entries) {
            var entry, j, len;
            if (entries.length > 0) {
              for (j = 0, len = entries.length; j < len; j++) {
                entry = entries[j];
                if (entry.isFile) {
                  entry.file(function(file) {
                    if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                      return;
                    }
                    file.fullPath = path + "/" + file.name;
                    return _this.addFile(file);
                  });
                } else if (entry.isDirectory) {
                  _this._addFilesFromDirectory(entry, path + "/" + entry.name);
                }
              }
              readEntries();
            }
            return null;
          }, errorHandler);
        };
      })(this);
      return readEntries();
    };

    Dropzone.prototype.accept = function(file, done) {
      if (file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    };

    Dropzone.prototype.addFile = function(file) {
      file.upload = {
        progress: 0,
        total: file.size,
        bytesSent: 0,
        filename: this._renameFile(file)
      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);
      this._enqueueThumbnail(file);
      return this.accept(file, (function(_this) {
        return function(error) {
          if (error) {
            file.accepted = false;
            _this._errorProcessing([file], error);
          } else {
            file.accepted = true;
            if (_this.options.autoQueue) {
              _this.enqueueFile(file);
            }
          }
          return _this._updateMaxFilesReachedClass();
        };
      })(this));
    };

    Dropzone.prototype.enqueueFiles = function(files) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        this.enqueueFile(file);
      }
      return null;
    };

    Dropzone.prototype.enqueueFile = function(file) {
      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;
        if (this.options.autoProcessQueue) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.processQueue();
            };
          })(this)), 0);
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    };

    Dropzone.prototype._thumbnailQueue = [];

    Dropzone.prototype._processingThumbnail = false;

    Dropzone.prototype._enqueueThumbnail = function(file) {
      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);
        return setTimeout(((function(_this) {
          return function() {
            return _this._processThumbnailQueue();
          };
        })(this)), 0);
      }
    };

    Dropzone.prototype._processThumbnailQueue = function() {
      var file;
      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }
      this._processingThumbnail = true;
      file = this._thumbnailQueue.shift();
      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, (function(_this) {
        return function(dataUrl) {
          _this.emit("thumbnail", file, dataUrl);
          _this._processingThumbnail = false;
          return _this._processThumbnailQueue();
        };
      })(this));
    };

    Dropzone.prototype.removeFile = function(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }
      this.files = without(this.files, file);
      this.emit("removedfile", file);
      if (this.files.length === 0) {
        return this.emit("reset");
      }
    };

    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
      var file, j, len, ref;
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }
      ref = this.files.slice();
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }
      return null;
    };

    Dropzone.prototype.resizeImage = function(file, width, height, resizeMethod, callback) {
      return this.createThumbnail(file, width, height, resizeMethod, false, (function(_this) {
        return function(dataUrl, canvas) {
          var resizeMimeType, resizedDataURL;
          if (canvas === null) {
            return callback(file);
          } else {
            resizeMimeType = _this.options.resizeMimeType;
            if (resizeMimeType == null) {
              resizeMimeType = file.type;
            }
            resizedDataURL = canvas.toDataURL(resizeMimeType, _this.options.resizeQuality);
            if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
              resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
            }
            return callback(Dropzone.dataURItoBlob(resizedDataURL));
          }
        };
      })(this));
    };

    Dropzone.prototype.createThumbnail = function(file, width, height, resizeMethod, fixOrientation, callback) {
      var fileReader;
      fileReader = new FileReader;
      fileReader.onload = (function(_this) {
        return function() {
          file.dataURL = fileReader.result;
          if (file.type === "image/svg+xml") {
            if (callback != null) {
              callback(fileReader.result);
            }
            return;
          }
          return _this.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
        };
      })(this);
      return fileReader.readAsDataURL(file);
    };

    Dropzone.prototype.createThumbnailFromUrl = function(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
      var img;
      img = document.createElement("img");
      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }
      img.onload = (function(_this) {
        return function() {
          var loadExif;
          loadExif = function(callback) {
            return callback(1);
          };
          if ((typeof EXIF !== "undefined" && EXIF !== null) && fixOrientation) {
            loadExif = function(callback) {
              return EXIF.getData(img, function() {
                return callback(EXIF.getTag(this, 'Orientation'));
              });
            };
          }
          return loadExif(function(orientation) {
            var canvas, ctx, ref, ref1, ref2, ref3, resizeInfo, thumbnail;
            file.width = img.width;
            file.height = img.height;
            resizeInfo = _this.options.resize.call(_this, file, width, height, resizeMethod);
            canvas = document.createElement("canvas");
            ctx = canvas.getContext("2d");
            canvas.width = resizeInfo.trgWidth;
            canvas.height = resizeInfo.trgHeight;
            if (orientation > 4) {
              canvas.width = resizeInfo.trgHeight;
              canvas.height = resizeInfo.trgWidth;
            }
            switch (orientation) {
              case 2:
                ctx.translate(canvas.width, 0);
                ctx.scale(-1, 1);
                break;
              case 3:
                ctx.translate(canvas.width, canvas.height);
                ctx.rotate(Math.PI);
                break;
              case 4:
                ctx.translate(0, canvas.height);
                ctx.scale(1, -1);
                break;
              case 5:
                ctx.rotate(0.5 * Math.PI);
                ctx.scale(1, -1);
                break;
              case 6:
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(0, -canvas.height);
                break;
              case 7:
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(canvas.width, -canvas.height);
                ctx.scale(-1, 1);
                break;
              case 8:
                ctx.rotate(-0.5 * Math.PI);
                ctx.translate(-canvas.width, 0);
            }
            drawImageIOSFix(ctx, img, (ref = resizeInfo.srcX) != null ? ref : 0, (ref1 = resizeInfo.srcY) != null ? ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (ref2 = resizeInfo.trgX) != null ? ref2 : 0, (ref3 = resizeInfo.trgY) != null ? ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
            thumbnail = canvas.toDataURL("image/png");
            if (callback != null) {
              return callback(thumbnail, canvas);
            }
          });
        };
      })(this);
      if (callback != null) {
        img.onerror = callback;
      }
      return img.src = file.dataURL;
    };

    Dropzone.prototype.processQueue = function() {
      var i, parallelUploads, processingLength, queuedFiles;
      parallelUploads = this.options.parallelUploads;
      processingLength = this.getUploadingFiles().length;
      i = processingLength;
      if (processingLength >= parallelUploads) {
        return;
      }
      queuedFiles = this.getQueuedFiles();
      if (!(queuedFiles.length > 0)) {
        return;
      }
      if (this.options.uploadMultiple) {
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          }
          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    };

    Dropzone.prototype.processFile = function(file) {
      return this.processFiles([file]);
    };

    Dropzone.prototype.processFiles = function(files) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.processing = true;
        file.status = Dropzone.UPLOADING;
        this.emit("processing", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }
      return this.uploadFiles(files);
    };

    Dropzone.prototype._getFilesWithXhr = function(xhr) {
      var file, files;
      return files = (function() {
        var j, len, ref, results;
        ref = this.files;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          file = ref[j];
          if (file.xhr === xhr) {
            results.push(file);
          }
        }
        return results;
      }).call(this);
    };

    Dropzone.prototype.cancelUpload = function(file) {
      var groupedFile, groupedFiles, j, k, len, len1, ref;
      if (file.status === Dropzone.UPLOADING) {
        groupedFiles = this._getFilesWithXhr(file.xhr);
        for (j = 0, len = groupedFiles.length; j < len; j++) {
          groupedFile = groupedFiles[j];
          groupedFile.status = Dropzone.CANCELED;
        }
        file.xhr.abort();
        for (k = 0, len1 = groupedFiles.length; k < len1; k++) {
          groupedFile = groupedFiles[k];
          this.emit("canceled", groupedFile);
        }
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if ((ref = file.status) === Dropzone.ADDED || ref === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    resolveOption = function() {
      var args, option;
      option = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (typeof option === 'function') {
        return option.apply(this, args);
      }
      return option;
    };

    Dropzone.prototype.uploadFile = function(file) {
      return this.uploadFiles([file]);
    };

    Dropzone.prototype.uploadFiles = function(files) {
      var doneCounter, doneFunction, file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, j, k, key, l, len, len1, len2, len3, m, method, o, option, progressObj, ref, ref1, ref2, ref3, ref4, ref5, response, results, updateProgress, url, value, xhr;
      xhr = new XMLHttpRequest();
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.xhr = xhr;
      }
      method = resolveOption(this.options.method, files);
      url = resolveOption(this.options.url, files);
      xhr.open(method, url, true);
      xhr.timeout = resolveOption(this.options.timeout, files);
      xhr.withCredentials = !!this.options.withCredentials;
      response = null;
      handleError = (function(_this) {
        return function() {
          var k, len1, results;
          results = [];
          for (k = 0, len1 = files.length; k < len1; k++) {
            file = files[k];
            results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
          }
          return results;
        };
      })(this);
      updateProgress = (function(_this) {
        return function(e) {
          var allFilesFinished, k, l, len1, len2, len3, m, progress, results;
          if (e != null) {
            progress = 100 * e.loaded / e.total;
            for (k = 0, len1 = files.length; k < len1; k++) {
              file = files[k];
              file.upload.progress = progress;
              file.upload.total = e.total;
              file.upload.bytesSent = e.loaded;
            }
          } else {
            allFilesFinished = true;
            progress = 100;
            for (l = 0, len2 = files.length; l < len2; l++) {
              file = files[l];
              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                allFilesFinished = false;
              }
              file.upload.progress = progress;
              file.upload.bytesSent = file.upload.total;
            }
            if (allFilesFinished) {
              return;
            }
          }
          results = [];
          for (m = 0, len3 = files.length; m < len3; m++) {
            file = files[m];
            results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
          }
          return results;
        };
      })(this);
      xhr.onload = (function(_this) {
        return function(e) {
          var error1, ref;
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          if (xhr.readyState !== 4) {
            return;
          }
          if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
            response = xhr.responseText;
            if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
              try {
                response = JSON.parse(response);
              } catch (error1) {
                e = error1;
                response = "Invalid JSON response from server.";
              }
            }
          }
          updateProgress();
          if (!((200 <= (ref = xhr.status) && ref < 300))) {
            return handleError();
          } else {
            return _this._finished(files, response, e);
          }
        };
      })(this);
      xhr.onerror = (function(_this) {
        return function() {
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          return handleError();
        };
      })(this);
      progressObj = (ref = xhr.upload) != null ? ref : xhr;
      progressObj.onprogress = updateProgress;
      headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };
      if (this.options.headers) {
        extend(headers, this.options.headers);
      }
      for (headerName in headers) {
        headerValue = headers[headerName];
        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }
      formData = new FormData();
      if (this.options.params) {
        ref1 = this.options.params;
        for (key in ref1) {
          value = ref1[key];
          formData.append(key, value);
        }
      }
      for (k = 0, len1 = files.length; k < len1; k++) {
        file = files[k];
        this.emit("sending", file, xhr, formData);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }
      if (this.element.tagName === "FORM") {
        ref2 = this.element.querySelectorAll("input, textarea, select, button");
        for (l = 0, len2 = ref2.length; l < len2; l++) {
          input = ref2[l];
          inputName = input.getAttribute("name");
          inputType = input.getAttribute("type");
          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            ref3 = input.options;
            for (m = 0, len3 = ref3.length; m < len3; m++) {
              option = ref3[m];
              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || ((ref4 = inputType.toLowerCase()) !== "checkbox" && ref4 !== "radio") || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
      doneCounter = 0;
      results = [];
      for (i = o = 0, ref5 = files.length - 1; 0 <= ref5 ? o <= ref5 : o >= ref5; i = 0 <= ref5 ? ++o : --o) {
        doneFunction = (function(_this) {
          return function(file, paramName, fileName) {
            return function(transformedFile) {
              formData.append(paramName, transformedFile, fileName);
              if (++doneCounter === files.length) {
                return _this.submitRequest(xhr, formData, files);
              }
            };
          };
        })(this);
        results.push(this.options.transformFile.call(this, files[i], doneFunction(files[i], this._getParamName(i), files[i].upload.filename)));
      }
      return results;
    };

    Dropzone.prototype.submitRequest = function(xhr, formData, files) {
      return xhr.send(formData);
    };

    Dropzone.prototype._finished = function(files, responseText, e) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    Dropzone.prototype._errorProcessing = function(files, message, xhr) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    return Dropzone;

  })(Emitter);

  Dropzone.version = "5.1.1";

  Dropzone.options = {};

  Dropzone.optionsForElement = function(element) {
    if (element.getAttribute("id")) {
      return Dropzone.options[camelize(element.getAttribute("id"))];
    } else {
      return void 0;
    }
  };

  Dropzone.instances = [];

  Dropzone.forElement = function(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if ((element != null ? element.dropzone : void 0) == null) {
      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    }
    return element.dropzone;
  };

  Dropzone.autoDiscover = true;

  Dropzone.discover = function() {
    var checkElements, dropzone, dropzones, j, len, results;
    if (document.querySelectorAll) {
      dropzones = document.querySelectorAll(".dropzone");
    } else {
      dropzones = [];
      checkElements = function(elements) {
        var el, j, len, results;
        results = [];
        for (j = 0, len = elements.length; j < len; j++) {
          el = elements[j];
          if (/(^| )dropzone($| )/.test(el.className)) {
            results.push(dropzones.push(el));
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
      checkElements(document.getElementsByTagName("div"));
      checkElements(document.getElementsByTagName("form"));
    }
    results = [];
    for (j = 0, len = dropzones.length; j < len; j++) {
      dropzone = dropzones[j];
      if (Dropzone.optionsForElement(dropzone) !== false) {
        results.push(new Dropzone(dropzone));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

  Dropzone.isBrowserSupported = function() {
    var capableBrowser, j, len, ref, regex;
    capableBrowser = true;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
      if (!("classList" in document.createElement("a"))) {
        capableBrowser = false;
      } else {
        ref = Dropzone.blacklistedBrowsers;
        for (j = 0, len = ref.length; j < len; j++) {
          regex = ref[j];
          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      }
    } else {
      capableBrowser = false;
    }
    return capableBrowser;
  };

  Dropzone.dataURItoBlob = function(dataURI) {
    var ab, byteString, i, ia, j, mimeString, ref;
    byteString = atob(dataURI.split(',')[1]);
    mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    ab = new ArrayBuffer(byteString.length);
    ia = new Uint8Array(ab);
    for (i = j = 0, ref = byteString.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {
      type: mimeString
    });
  };

  without = function(list, rejectedItem) {
    var item, j, len, results;
    results = [];
    for (j = 0, len = list.length; j < len; j++) {
      item = list[j];
      if (item !== rejectedItem) {
        results.push(item);
      }
    }
    return results;
  };

  camelize = function(str) {
    return str.replace(/[\-_](\w)/g, function(match) {
      return match.charAt(1).toUpperCase();
    });
  };

  Dropzone.createElement = function(string) {
    var div;
    div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0];
  };

  Dropzone.elementInside = function(element, container) {
    if (element === container) {
      return true;
    }
    while (element = element.parentNode) {
      if (element === container) {
        return true;
      }
    }
    return false;
  };

  Dropzone.getElement = function(el, name) {
    var element;
    if (typeof el === "string") {
      element = document.querySelector(el);
    } else if (el.nodeType != null) {
      element = el;
    }
    if (element == null) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
    }
    return element;
  };

  Dropzone.getElements = function(els, name) {
    var e, el, elements, error1, j, k, len, len1, ref;
    if (els instanceof Array) {
      elements = [];
      try {
        for (j = 0, len = els.length; j < len; j++) {
          el = els[j];
          elements.push(this.getElement(el, name));
        }
      } catch (error1) {
        e = error1;
        elements = null;
      }
    } else if (typeof els === "string") {
      elements = [];
      ref = document.querySelectorAll(els);
      for (k = 0, len1 = ref.length; k < len1; k++) {
        el = ref[k];
        elements.push(el);
      }
    } else if (els.nodeType != null) {
      elements = [els];
    }
    if (!((elements != null) && elements.length)) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    }
    return elements;
  };

  Dropzone.confirm = function(question, accepted, rejected) {
    if (window.confirm(question)) {
      return accepted();
    } else if (rejected != null) {
      return rejected();
    }
  };

  Dropzone.isValidFile = function(file, acceptedFiles) {
    var baseMimeType, j, len, mimeType, validType;
    if (!acceptedFiles) {
      return true;
    }
    acceptedFiles = acceptedFiles.split(",");
    mimeType = file.type;
    baseMimeType = mimeType.replace(/\/.*$/, "");
    for (j = 0, len = acceptedFiles.length; j < len; j++) {
      validType = acceptedFiles[j];
      validType = validType.trim();
      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
    return false;
  };

  if (typeof jQuery !== "undefined" && jQuery !== null) {
    jQuery.fn.dropzone = function(options) {
      return this.each(function() {
        return new Dropzone(this, options);
      });
    };
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Dropzone;
  } else {
    window.Dropzone = Dropzone;
  }

  Dropzone.ADDED = "added";

  Dropzone.QUEUED = "queued";

  Dropzone.ACCEPTED = Dropzone.QUEUED;

  Dropzone.UPLOADING = "uploading";

  Dropzone.PROCESSING = Dropzone.UPLOADING;

  Dropzone.CANCELED = "canceled";

  Dropzone.ERROR = "error";

  Dropzone.SUCCESS = "success";


  /*
  
  Bugfix for iOS 6 and 7
  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
  based on the work of https://github.com/stomita/ios-imagefile-megapixel
   */

  detectVerticalSquash = function(img) {
    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
    iw = img.naturalWidth;
    ih = img.naturalHeight;
    canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    data = ctx.getImageData(1, 0, 1, ih).data;
    sy = 0;
    ey = ih;
    py = ih;
    while (py > sy) {
      alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    ratio = py / ih;
    if (ratio === 0) {
      return 1;
    } else {
      return ratio;
    }
  };

  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    var vertSquashRatio;
    vertSquashRatio = detectVerticalSquash(img);
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
  };

  ExifRestore = (function() {
    function ExifRestore() {}

    ExifRestore.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    ExifRestore.encode64 = function(input) {
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, output;
      output = '';
      chr1 = void 0;
      chr2 = void 0;
      chr3 = '';
      enc1 = void 0;
      enc2 = void 0;
      enc3 = void 0;
      enc4 = '';
      i = 0;
      while (true) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return output;
    };

    ExifRestore.restore = function(origFileBase64, resizedFileBase64) {
      var image, rawImage, segments;
      if (!origFileBase64.match('data:image/jpeg;base64,')) {
        return resizedFileBase64;
      }
      rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
      segments = this.slice2Segments(rawImage);
      image = this.exifManipulation(resizedFileBase64, segments);
      return 'data:image/jpeg;base64,' + this.encode64(image);
    };

    ExifRestore.exifManipulation = function(resizedFileBase64, segments) {
      var aBuffer, exifArray, newImageArray;
      exifArray = this.getExifArray(segments);
      newImageArray = this.insertExif(resizedFileBase64, exifArray);
      aBuffer = new Uint8Array(newImageArray);
      return aBuffer;
    };

    ExifRestore.getExifArray = function(segments) {
      var seg, x;
      seg = void 0;
      x = 0;
      while (x < segments.length) {
        seg = segments[x];
        if (seg[0] === 255 & seg[1] === 225) {
          return seg;
        }
        x++;
      }
      return [];
    };

    ExifRestore.insertExif = function(resizedFileBase64, exifArray) {
      var array, ato, buf, imageData, mae, separatePoint;
      imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
      buf = this.decode64(imageData);
      separatePoint = buf.indexOf(255, 3);
      mae = buf.slice(0, separatePoint);
      ato = buf.slice(separatePoint);
      array = mae;
      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    };

    ExifRestore.slice2Segments = function(rawImageArray) {
      var endPoint, head, length, seg, segments;
      head = 0;
      segments = [];
      while (true) {
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
          break;
        }
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
          head += 2;
        } else {
          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
          endPoint = head + length + 2;
          seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }
        if (head > rawImageArray.length) {
          break;
        }
      }
      return segments;
    };

    ExifRestore.decode64 = function(input) {
      var base64test, buf, chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, output;
      output = '';
      chr1 = void 0;
      chr2 = void 0;
      chr3 = '';
      enc1 = void 0;
      enc2 = void 0;
      enc3 = void 0;
      enc4 = '';
      i = 0;
      buf = [];
      base64test = /[^A-Za-z0-9\+\/\=]/g;
      if (base64test.exec(input)) {
        console.warning('There were invalid base64 characters in the input text.\n' + 'Valid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\n' + 'Expect errors in decoding.');
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
      while (true) {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        buf.push(chr1);
        if (enc3 !== 64) {
          buf.push(chr2);
        }
        if (enc4 !== 64) {
          buf.push(chr3);
        }
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return buf;
    };

    return ExifRestore;

  })();


  /*
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   */

  contentLoaded = function(win, fn) {
    var add, doc, done, init, poll, pre, rem, root, top;
    done = false;
    top = true;
    doc = win.document;
    root = doc.documentElement;
    add = (doc.addEventListener ? "addEventListener" : "attachEvent");
    rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
    pre = (doc.addEventListener ? "" : "on");
    init = function(e) {
      if (e.type === "readystatechange" && doc.readyState !== "complete") {
        return;
      }
      (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
      if (!done && (done = true)) {
        return fn.call(win, e.type || e);
      }
    };
    poll = function() {
      var e, error1;
      try {
        root.doScroll("left");
      } catch (error1) {
        e = error1;
        setTimeout(poll, 50);
        return;
      }
      return init("poll");
    };
    if (doc.readyState !== "complete") {
      if (doc.createEventObject && root.doScroll) {
        try {
          top = !win.frameElement;
        } catch (undefined) {}
        if (top) {
          poll();
        }
      }
      doc[add](pre + "DOMContentLoaded", init, false);
      doc[add](pre + "readystatechange", init, false);
      return win[add](pre + "load", init, false);
    }
  };

  Dropzone._autoDiscoverFunction = function() {
    if (Dropzone.autoDiscover) {
      return Dropzone.discover();
    }
  };

  contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(157)(module)))

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column is-3"
  }, [_c('div', {
    staticClass: "field has-addons"
  }, [_vm._m(0), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-primary",
    on: {
      "click": _vm.newDialogFolder
    }
  }, [_vm._m(1), _vm._v(" "), _c('span', [_vm._v("New Folder")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "field has-addons"
  }, [_vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button",
    on: {
      "click": _vm.confirmDelete
    }
  }, [_vm._m(4), _vm._v(" "), _c('span', [_vm._v("Delete")])])])])])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "id": "uploadPreview"
    }
  }), _vm._v(" "), _c('nav', {
    staticClass: "breadcrumb has-arrow-separator",
    attrs: {
      "aria-label": "breadcrumbs"
    }
  }, [_c('ul', [_c('li', [_c('button', {
    staticClass: "button is-link",
    on: {
      "click": function($event) {
        _vm.loadFiles('/')
      }
    }
  }, [_vm._v("Media Library")])]), _vm._v(" "), _vm._l((_vm.folders), function(folder) {
    return _c('li', [_c('button', {
      staticClass: "button is-link",
      on: {
        "click": function($event) {
          _vm.changeFolder(folder)
        }
      }
    }, [_vm._v(_vm._s(folder))])])
  })], 2)]), _vm._v(" "), _c('div', {
    attrs: {
      "columns": ""
    }
  }, [_c('div', {
    staticClass: "column is-8"
  }, [_c('div', {
    staticClass: "columns is-multilin"
  }, _vm._l((_vm.files.items), function(item, index) {
    return _c('div', {
      staticClass: "column is-2",
      on: {
        "click": function($event) {
          _vm.selectMedia(item)
        }
      }
    }, [_c('div', {
      staticClass: "card"
    }, [_c('div', {
      staticClass: "card-content"
    }, [_c('div', {
      staticClass: "media"
    }, [(item.type.includes('image')) ? [_c('div', {
      staticClass: "media-left"
    }, [_c('figure', {
      staticClass: "image is-128x128"
    }, [_c('img', {
      attrs: {
        "src": item.path,
        "alt": "Image"
      }
    })])])] : (item.type.includes('video')) ? [_c('i', {
      staticClass: "icon voyager-video"
    })] : (item.type.includes('audio')) ? [_c('i', {
      staticClass: "icon voyager-music"
    })] : (item.type == 'folder') ? [_c('div', {
      staticClass: "media-left"
    }, [_c('div', {
      staticClass: "block has-text-centered"
    }, [_c('b-icon', {
      attrs: {
        "size": "is-large",
        "icon": "folder"
      }
    })], 1)]), _vm._v(" "), _c('div', {
      staticClass: "media-content"
    }, [_c('p', {
      staticClass: "title is-4"
    }, [_vm._v(_vm._s(item.name))])])] : [_c('i', {
      staticClass: "icon voyager-file-text"
    })]], 2)])])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [(_vm.selectedMedia) ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-image"
  }, [_c('figure', {
    staticClass: "image is-4by3"
  }, [_c('img', {
    attrs: {
      "src": _vm.selectedMedia.path,
      "alt": "Image"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('strong', [_vm._v("Path: ")]), _vm._v(" " + _vm._s(_vm.selectedMedia.path) + "\n                        Phasellus nec iaculis mauris. "), _c('a', [_vm._v("@bulmaio")]), _vm._v(".\n                        "), _c('a', [_vm._v("#css")]), _vm._v(" "), _c('a', [_vm._v("#responsive")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', [_vm._v("11:09 PM - 1 Jan 2016")])])])]) : _vm._e()])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-primary"
  }, [_c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-upload"
  })]), _vm._v(" "), _c('span', {
    attrs: {
      "id": "upload"
    }
  }, [_vm._v("Upload")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-folder-o"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "control"
  }, [_c('a', {
    staticClass: "button"
  }, [_c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-share"
  })]), _vm._v(" "), _c('span', [_vm._v("Move")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "control"
  }, [_c('a', {
    staticClass: "button"
  }, [_c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-i-cursor"
  })]), _vm._v(" "), _c('span', [_vm._v("Rename")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa fa-trash-o"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-763c98c8", module.exports)
  }
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(161),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wbridgett/code/vertex-cms/packages/thePLAN/ContentVertex/resources/assets/admin/js/components/App.vue"
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
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'App'
});

/***/ }),
/* 161 */
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
/* 162 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[18]);