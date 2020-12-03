// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/prod/projects.json":[function(require,module,exports) {
module.exports = {
  "projects": [{
    "image": "https://i.imgur.com/ZIi65is.png",
    "title": "Dreamer",
    "description": "A cool medium style blog to Write and share amazing stories and ideas you have been dreaming about!",
    "live": "https://dream-vote.herokuapp.com/dreams",
    "details": "https://github.com/abayoss/express-mongoose/blob/resume-reddit-voting/readme.md",
    "source": "https://github.com/abayoss/express-mongoose/tree/resume-reddit-voting"
  }, {
    "image": "https://i.imgur.com/Tm4MI47.jpg",
    "title": "ISIC School Schedular",
    "description": "ASP Web app that allows multiple parties to organize a better School Schedule and help them keep track of every class group",
    "details": "https://github.com/abayoss/ISIC_School_Scheduler/blob/master/readme.md",
    "source": "https://github.com/abayoss/ISIC_School_Scheduler"
  }, {
    "image": "https://i.imgur.com/4YiTYda.png",
    "title": "KTM showcase",
    "description": "MEAN Stack app that shows you how to do client server interaction, and authentication, using the Http Client.",
    "live": "https://meanfun-e1013.firebaseapp.com/",
    "details": "https://github.com/abayoss/meanFun/blob/master/README.md",
    "source": "https://github.com/abayoss/meanfun"
  }, {
    "image": "https://i.imgur.com/g8HtDv2.png",
    "title": "SymFun Store",
    "description": "symfony e-commerce web site with some cool functionalities, like: image upload, shopping cart 🛒 and Rating System ⭐",
    "details": "https://github.com/abayoss/symFun/blob/master/README.md",
    "source": "https://github.com/abayoss/symFun"
  }, {
    "image": "https://i.imgur.com/PpMcTcG.png",
    "title": "Black Mambas",
    "description": "Founded in 2015, Black Mambas is an american football team from Rabat Morocco, with a male & female section.",
    "details": "https://github.com/abayoss/black-mambas-american-football/blob/master/README.md",
    "live": "https://abayoss.github.io/black-mambas-american-football/",
    "source": "https://github.com/abayoss/black-mambas-american-football"
  }, {
    "image": "https://i.imgur.com/t6P2l8T.png",
    "title": "Angular Fire",
    "description": "Angular and fire Store APP with some cool functionalities, like: real time update, image upload and User authentication",
    "details": "https://github.com/abayoss/ngFire/blob/master/README.md",
    "source": "https://github.com/abayoss/ngFire"
  }, {
    "image": "https://i.imgur.com/awasmha.png",
    "title": "Angular fundamentals",
    "description": "the fundamentals of using the Angular 2++ framework: syntax, form validation, http client and more interesting concepts",
    "details": "https://github.com/abayoss/angularFun/blob/master/README.md",
    "source": "https://github.com/abayoss/angularFun"
  }]
};
},{}],"js/pages/home/AnimationOnScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateOnscroll = void 0;

var animateOnscroll = function animateOnscroll() {
  var slideRight1 = {
    origin: 'left',
    delay: 100,
    interval: 100
  };
  var slideRight2 = {
    origin: 'left',
    delay: 1000,
    interval: 1000
  };
  var slideLeft1 = {
    origin: 'right',
    delay: 100,
    interval: 100
  };
  var slideLeft2 = {
    origin: 'right',
    delay: 1000,
    interval: 1000
  };
  var slideUp = {
    distance: '100%',
    origin: 'bottom',
    delay: 1000
  };
  ScrollReveal().reveal('.reveal', {
    interval: 400,
    delay: 400
  });
  ScrollReveal({
    mobile: false,
    opacity: 0,
    distance: '40%',
    duration: 1600
  });
  ScrollReveal().reveal('.slideRight1', slideRight1);
  ScrollReveal().reveal('.slideRight2', slideRight2);
  ScrollReveal().reveal('.slideLeft1', slideLeft1);
  ScrollReveal().reveal('.slideLeft2', slideLeft2);
  ScrollReveal().reveal('.slideUp', slideUp);
};

exports.animateOnscroll = animateOnscroll;
},{}],"js/pages/home/tweens.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGsapIntroScrollTween = loadGsapIntroScrollTween;

function loadGsapIntroScrollTween() {
  var isMobile = window.innerWidth < 737;
  var tl_intro_bg = gsap.timeline({
    scrollTrigger: {
      trigger: '.bg-black-img',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      // markers: true,
      id: 'intro_img'
    }
  });
  tl_intro_bg.to('.bg-black-img', {
    scale: 1.1,
    y: 160,
    transformOrigin: '50% 50%'
  });
  var tl_skill_bg = gsap.timeline({
    scrollTrigger: {
      trigger: '#skill',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      // markers: true,
      id: 'skills_img'
    }
  });
  tl_skill_bg.from('.bg-skills-img', {
    scale: 1.2,
    transformOrigin: '50% 50%'
  });
  var tl_contact = gsap.timeline({
    scrollTrigger: {
      trigger: '#contact',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
      // markers: true,
      id: 'contact'
    }
  });
  tl_contact.from('.bg-contact-img', {
    scale: 1.2,
    y: -160,
    transformOrigin: '50% 50%'
  }, 0).from('.row-contact-gsap', {
    y: 500
  }, 0); // const tl2 = gsap.timeline({
  //     scrollTrigger: {
  //         trigger: '.img-paralax-col',
  //         start: 'top bottom',
  //         end: 'bottom top',
  //         scrub: true,
  //         markers: true,
  //         id: 'project_img',
  //     },
  // });
  // tl2.to('.img-paralax', { y: 60 });
}
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _projects = _interopRequireDefault(require("./data/prod/projects.json"));

var _AnimationOnScroll = require("./js/pages/home/AnimationOnScroll");

var _tweens = require("./js/pages/home/tweens");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './sass/index.scss';
// import './js/ScrollButton';
console.log(_projects.default);

var ready = function ready(callback) {
  if (document.readyState != 'loading') callback();else document.addEventListener('DOMContentLoaded', callback);
};

ready(function () {
  SmoothScroll({
    stepSize: 60,
    animationTime: 1500
  });
  new Vue({
    el: '#work',
    data: {
      ProjectsList: []
    },
    mounted: function mounted() {
      this.getProjects();
    },
    methods: {
      getProjects: function getProjects() {
        // fetch('assets/data/' + env + '/projects.json?' + Math.random())
        //     .then((res) => res.json())
        //     .then((responseData) => {
        // this.ProjectsList = responseData.projects.slice(0, 6);
        this.ProjectsList = _projects.default.projects.slice(0, 6);
        (0, _AnimationOnScroll.animateOnscroll)();
        (0, _tweens.loadGsapIntroScrollTween)(); // });
      }
    }
  });
});
},{"./data/prod/projects.json":"data/prod/projects.json","./js/pages/home/AnimationOnScroll":"js/pages/home/AnimationOnScroll.js","./js/pages/home/tweens":"js/pages/home/tweens.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50000" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map