(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <!-- Navbar -->\n  <div id=\"navbar\" class=\"d-inline-block \">\n    <nav class=\"text-center\">\n      <a [routerLink]=\"['']\">\n        <img src=\"https://image.flaticon.com/icons/svg/2111/2111624.svg\" alt=\"logo\" />\n      </a>\n      <ul class=\"navbar-nav text-center\">\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['']\" class=\"nav-link\">\n            <i class=\"fas fa-user\"></i>\n            <p>Profile</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/artists']\" class=\"nav-link\">\n            <i class=\"fas fa-microphone-stand\"></i>\n            <p>Top Artists</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/tracks']\" class=\"nav-link\">\n            <i class=\"fas fa-music\"></i>\n            <p>Top Tracks</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/recent']\" class=\"nav-link\">\n            <i class=\"fas fa-history\"></i>\n            <p>Recent</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/playlists']\" class=\"nav-link\">\n            <i class=\"fas fa-list-music\"></i>\n            <p>Playlist</p>\n          </a>\n        </li>\n      </ul>\n      <div class=\"bottom text-center\">\n        <a href=\"https://github.com/nathannewyen/spotify_project\" class=\"nav-link\">\n          <i class=\"fab fa-github\"></i>\n        </a>\n      </div>\n    </nav>\n  </div>\n  <!-- End Navbar -->\n\n  <!-- Content -->\n  <div id=\"content\" class=\"d-inline-block\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!userService.getLoginStatus()\" class=\"login text-center\">\n\n  <a href=\"#!\">\n    <img src=\"https://www.logo.wine/a/logo/Spotify/Spotify-Black-Logo.wine.svg\" alt=\"logo\" />\n  </a>\n  <hr>\n  <div>\n    <a [href]=\"loginUrl\">\n      <button type=\"submit\" class=\"btn btn-login text-light\">\n        Login\n      </button>\n    </a>\n  </div>\n  <div class=\"or-line\">\n    <hr class=\"line\">\n    <p class=\"or\">OR</p>\n    <hr class=\"line\">\n  </div>\n  <div>\n    <a href=\"https://www.spotify.com/us/signup/\">\n      <button type=\"submit\" class=\"btn btn-register btn-outline-secondary\">\n        Register\n      </button>\n    </a>\n  </div>\n</div>\n\n<!-- After log in -->\n<div class=\"index\" *ngIf=\"userService.getLoginStatus()\">\n  <app-user></app-user>\n\n\n  <div class=\"container-fluid\">\n    <div class=\"info row\">\n      <div class=\"col artists\">\n        <div class=\"row left-panel\">\n          <div class=\"col top-artists\">\n            <h5 class=\"text-left\">Top Artists of All Time</h5>\n            <ul *ngFor=\"let artist of topArtistsLongTerm; let index = index\">\n              <li class=\"text-left\" *ngIf=\"index < 10\">\n                <a class=\"image-link\" href=\"{{ artist.external_urls.spotify }}\">\n                  <img src=\"{{artist.images[1].url}}\" alt=\"{{artist.name}}\">\n                </a>\n                <a class=\"name-link text-light\" href=\"{{ artist.external_urls.spotify }}\">\n                  <span>{{ artist.name }}</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col see-more\">\n            <button type=\"submit\" class=\"btn btn-outline-light float-right\">\n              <a [routerLink]=\"['/artists']\"> SEE MORE </a>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col tracks\">\n        <div class=\"row right-panel\">\n          <div class=\"col top-tracks\">\n            <h5 class=\"text-left\">Top Tracks of All Time</h5>\n            <ul *ngFor=\"let track of topTracksShortTerm; let index = index\">\n              <li class=\" text-left\" *ngIf=\"index < 10\">\n                <a class=\"image-link\" href=\"{{ track.external_urls.spotify }}\">\n                  <img src=\"{{track.album.images[1].url}}\" alt=\"test\">\n                </a>\n                <div class=\"artist-info\">\n                  <a class=\"track-link text-light\" href=\"{{ track.external_urls.spotify }}\">\n                    <span class=\"song\">{{ track.name }}</span>\n                  </a>\n                  <br>\n                  <span class=\"artist-name\">{{ track.artists[0].name }}</span>\n                </div>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col see-more\">\n            <button type=\"submit\" class=\"btn btn-outline-light float-right\">\n              <a [routerLink]=\"['/tracks']\"> SEE MORE </a>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlists/playlists.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playlists/playlists.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"playlists\">\n  <h3>Your Playlists</h3>\n  <div class=\"playlist-info text-center d-inline-block\" *ngFor=\"let playlist of playlists\">\n    <a href=\"{{playlist.external_urls.spotify}}\">\n      <img src=\"{{playlist.images[0].url}}\" alt=\"{{playlist.name}}\">\n    </a>\n    <div class=\"track\">\n      <span>\n        <a href=\"{{playlist.external_urls.spotify}}\" class=\"text-light\">{{playlist.name}}</a>\n      </span>\n      <br>\n      <span class=\"total text-secondary\">{{playlist.tracks.total}} TRACKS</span>\n    </div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recents/recents.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recents/recents.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"recent\">\n  <h4>Recently Played Tracks</h4>\n\n  <div class=\"recent-song\" *ngFor=\"let recent of user_current_tracks\">\n    <ul>\n      <li>\n        <img src=\"{{recent.track.album.images[2].url}}\" alt=\"{{recent.track.name}}\" class=\"d-inline-block\">\n        <div class=\"info d-inline-block\">\n          <span class=\"song\">{{ recent.track.name }}</span>\n          <br>\n          <span class=\"artist-name text-secondary\">\n            {{ recent.track.artists[0].name }}・{{ recent.track.name }}\n          </span>\n        </div>\n        <p class=\"d-inline-block time text-secondary float-right\">{{recent.track.duration_ms | date:'m:ss'}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-artists/top-artists.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-artists/top-artists.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"artists\">\n  <h3 class=\"d-inline-block\">Top artists</h3>\n  <div class=\"button d-inline-block float-right\">\n\n    <button class=\"btn border-0\" (click)=\"selectTerm(0)\" [class.button--active]=\"selectedTerm === 0\">All\n      Time</button>\n\n    <button class=\"btn border-0\" (click)=\"selectTerm(1)\" [class.button--active]=\"selectedTerm === 1\">Last 4\n      weeks</button>\n\n    <button class=\"btn border-0\" (click)=\"selectTerm(2)\" [class.button--active]=\"selectedTerm === 2\">Last 6\n      months</button>\n\n  </div>\n\n\n\n  <div class=\"row text-center\">\n    <div class=\"col\">\n      <div *ngIf=\"selectedTerm === 0\" class=\"all-time\">\n        <ul>\n          <li *ngFor=\"let artists of topArtistsLongTerm; let index = index\" class=\"item\">\n            <a href=\"{{ artists.external_urls.spotify }}\" target=\"_blank\"><img src=\"{{artists.images[1].url}}\"\n                alt=\"test\"></a>\n            <p> <a href=\"{{ artists.external_urls.spotify }}\" target=\"_blank\">{{artists.name }}</a>\n            </p>\n          </li>\n        </ul>\n      </div>\n\n\n      <div *ngIf=\"selectedTerm === 1\" class=\"four-weeks\">\n        <ul>\n          <li *ngFor=\"let artists of topArtistsShortTerm\">\n            <a href=\"{{ artists.external_urls.spotify }}\" target=\"_blank\"><img src=\"{{artists.images[1].url}}\"\n                alt=\"test\"></a>\n            <p> <a href=\"{{ artists.external_urls.spotify }}\" target=\"_blank\">{{artists.name }}</a>\n            </p>\n          </li>\n        </ul>\n      </div>\n\n      <div *ngIf=\"selectedTerm === 2\" class=\"six-months\">\n        <ul class=\"list list--orange\">\n          <li *ngFor=\"let artists of topArtistsMediumTerm\">\n            <a href=\"{{ artists.external_urls.spotify }}\" target=\"_blank\" class=\"list__link\"><img\n                src=\"{{artists.images[1].url}}\" alt=\"test\"></a>\n            <p> <a href=\"{{ artists.external_urls.spotify }}\" target=\"_blank\" class=\"list__link\">{{artists.name }}</a>\n            </p>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-tracks/top-tracks.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-tracks/top-tracks.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tracks\">\n\n  <h3 class=\"d-inline-block\">Top tracks</h3>\n\n  <div class=\"button d-inline-block float-right\">\n    <button class=\"btn border-0\" (click)=\"selectTerm(0)\" [class.button--active]=\"selectedTerm === 0\">All Time</button>\n\n    <button class=\"btn border-0\" (click)=\"selectTerm(1)\" [class.button--active]=\"selectedTerm === 1\">Last 4\n      Weeks</button>\n\n    <button class=\"btn border-0\" (click)=\"selectTerm(2)\" [class.button--active]=\"selectedTerm === 2\">Last 6\n      Months</button>\n\n  </div>\n\n\n  <div class=\"row text-center\">\n\n    <div class=\"col\">\n\n      <div *ngIf=\"selectedTerm === 0\" class=\"clearfix\">\n        <ul class=\"list list--yellow\">\n          <li class=\"text-left\" *ngFor=\"let track of topTracksLongTerm; let index = index\">\n            <div class=\"song d-inline-block\">\n              <a class=\"image-link\" href=\"{{ track.external_urls.spotify }}\">\n                <img src=\"{{track.album.images[1].url}}\" alt=\"test\">\n              </a>\n              <div class=\"artist-info\">\n                <a class=\"track-link text-light\" href=\"{{ track.external_urls.spotify }}\">\n                  <span class=\"song\">{{ track.name }}</span>\n                </a>\n                <br>\n                <span class=\"artist-name\">{{ track.artists[0].name }}</span>\n              </div>\n            </div>\n            <p class=\"d-inline-block time text-secondary float-right\">{{track.duration_ms | date:'m:ss'}}</p>\n          </li>\n        </ul>\n      </div>\n\n\n      <div *ngIf=\"selectedTerm === 1\" class=\"clearfix\">\n        <ul class=\"list list--yellow\">\n          <li class=\"text-left\" *ngFor=\"let track of topTracksShortTerm; let index = index\">\n            <div class=\"song d-inline-block\">\n              <a class=\"image-link\" href=\"{{ track.external_urls.spotify }}\">\n                <img src=\"{{track.album.images[1].url}}\" alt=\"test\">\n              </a>\n              <div class=\"artist-info\">\n                <a class=\"track-link text-light\" href=\"{{ track.external_urls.spotify }}\">\n                  <span class=\"song\">{{ track.name }}</span>\n                </a>\n                <br>\n                <span class=\"artist-name\">{{ track.artists[0].name }}</span>\n              </div>\n            </div>\n            <p class=\"d-inline-block time text-secondary float-right\">{{track.duration_ms | date:'m:ss'}}</p>\n          </li>\n        </ul>\n      </div>\n\n      <div *ngIf=\"selectedTerm === 2\" class=\"clearfix\">\n        <ul class=\"list list--yellow\">\n          <li class=\"text-left\" *ngFor=\"let track of topTracksMediumTerm; let index = index\">\n            <div class=\"song d-inline-block\">\n              <a class=\"image-link\" href=\"{{ track.external_urls.spotify }}\">\n                <img src=\"{{track.album.images[1].url}}\" alt=\"test\">\n              </a>\n              <div class=\"artist-info\">\n                <a class=\"track-link text-light\" href=\"{{ track.external_urls.spotify }}\">\n                  <span class=\"song\">{{ track.name }}</span>\n                </a>\n                <br>\n                <span class=\"artist-name\">{{ track.artists[0].name }}</span>\n              </div>\n            </div>\n            <p class=\"d-inline-block time text-secondary float-right\">{{track.duration_ms | date:'m:ss'}}</p>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"profile\" class=\"text-center\">\n  <img src=\"{{user_image[0].url}}\" alt=\"profile-photo\">\n  <h1>{{user_name}}</h1>\n  <ul class=\"list-inline\">\n    <li class=\"list-inline-item\">\n      <h5>{{user_follower.total}}</h5>\n      <p>Followers</p>\n    </li>\n    <li class=\"list-inline-item\">\n      <h5>{{user_following}}</h5>\n      <p>Following</p>\n    </li>\n    <li class=\"list-inline-item\">\n      <h5>{{user_playlists}}</h5>\n      <p>Playlists</p>\n    </li>\n  </ul>\n\n  <button type=\"submit\" class=\"btn btn-outline-light\" (click)=\"logout()\">LOGOUT</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _playlists_playlists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playlists/playlists.component */ "./src/app/playlists/playlists.component.ts");
/* harmony import */ var _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-artists/top-artists.component */ "./src/app/top-artists/top-artists.component.ts");
/* harmony import */ var _top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-tracks/top-tracks.component */ "./src/app/top-tracks/top-tracks.component.ts");
/* harmony import */ var _recents_recents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recents/recents.component */ "./src/app/recents/recents.component.ts");








const routes = [
    { path: "", component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: "artists", component: _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_5__["TopArtistsComponent"] },
    { path: "tracks", component: _top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_6__["TopTracksComponent"] },
    { path: "playlists", component: _playlists_playlists_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"] },
    { path: "recent", component: _recents_recents_component__WEBPACK_IMPORTED_MODULE_7__["RecentsComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  font-family: \"Circular Std\", sans-serif;\n}\n\n@media (min-width: 1025px) {\n  #content {\n    vertical-align: top;\n    background-color: #191919;\n    color: white;\n    width: 100%;\n  }\n\n  #navbar {\n    background-color: black;\n    width: 6vw;\n    min-height: 100vh;\n    position: fixed;\n  }\n  #navbar nav {\n    margin-top: 30px;\n  }\n  #navbar ul {\n    margin-top: 140px;\n  }\n  #navbar ul li {\n    padding-top: 10px;\n    margin-top: 0px;\n  }\n  #navbar a {\n    color: #9b9b9b;\n  }\n  #navbar a i {\n    font-size: 20px;\n  }\n  #navbar a p {\n    font-size: 11px;\n  }\n  #navbar li:hover {\n    background-color: #191919;\n    border-left: 3px solid #1bd760;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n  }\n  #navbar li:hover a {\n    color: white;\n  }\n  #navbar img {\n    width: 50px;\n  }\n  #navbar .bottom i {\n    font-size: 30px;\n  }\n  #navbar .bottom:hover a {\n    color: #519bf5;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FDQ0Y7O0FERUE7RUFFRTtJQUNFLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ0FGOztFREdBO0lBQ0UsdUJBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VDQUY7RURFRTtJQUNFLGdCQUFBO0VDQUo7RURHRTtJQUNFLGlCQUFBO0VDREo7RURHSTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQ0ROO0VES0U7SUFTRSxjQUFBO0VDWEo7RURHSTtJQUNFLGVBQUE7RUNETjtFRElJO0lBQ0UsZUFBQTtFQ0ZOO0VEUUU7SUFDRSx5QkFBQTtJQUNBLDhCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQkFBQTtFQ05KO0VEUUk7SUFDRSxZQUFBO0VDTk47RURVRTtJQUNFLFdBQUE7RUNSSjtFRGFJO0lBQ0UsZUFBQTtFQ1hOO0VEZ0JJO0lBQ0UsY0FBQTtJQUNBLG1DQUFBO0lBQ0EsZ0JBQUE7RUNkTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBmb250LWZhbWlseTogJ0NpcmN1bGFyIFN0ZCcsIHNhbnMtc2VyaWY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcblxuICAjY29udGVudCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICNuYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA2dnc7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgbmF2IHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgbWFyZ2luLXRvcDogMTQwcHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIH1cblxuICAgIGxpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxYmQ3NjA7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cblxuICAgIC5ib3R0b20ge1xuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b206aG92ZXIge1xuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjNTE5YmY1O1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiLndyYXBwZXIge1xuICBmb250LWZhbWlseTogXCJDaXJjdWxhciBTdGRcIiwgc2Fucy1zZXJpZjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAjY29udGVudCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICNuYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA2dnc7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gICNuYXZiYXIgbmF2IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gICNuYXZiYXIgdWwge1xuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xuICB9XG4gICNuYXZiYXIgdWwgbGkge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuICAjbmF2YmFyIGEge1xuICAgIGNvbG9yOiAjOWI5YjliO1xuICB9XG4gICNuYXZiYXIgYSBpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgI25hdmJhciBhIHAge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICAjbmF2YmFyIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzFiZDc2MDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gICNuYXZiYXIgbGk6aG92ZXIgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICNuYXZiYXIgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAjbmF2YmFyIC5ib3R0b20gaSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gICNuYXZiYXIgLmJvdHRvbTpob3ZlciBhIHtcbiAgICBjb2xvcjogIzUxOWJmNTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_tracks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/tracks.service */ "./src/app/services/tracks.service.ts");
/* harmony import */ var _services_artists_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/artists.service */ "./src/app/services/artists.service.ts");







let AppComponent = class AppComponent {
    constructor(route, router, location, userService, tracksService, artistsService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.userService = userService;
        this.tracksService = tracksService;
        this.artistsService = artistsService;
        this.title = "spotify";
    }
    ngOnInit() {
        const itemId = "ng-spotify-access-token";
        const accessToken = localStorage.getItem(itemId);
        if (accessToken) {
            this.userService
                .setLoggedInUser(accessToken)
                .then(() => {
                this.tracksService.getTopTracksForAllTerms();
                this.artistsService.getTopArtistsForAllTerms();
            })
                .catch((err) => {
                console.error("ERROR:", err);
            });
        }
        else {
            this.route.queryParams.subscribe((params) => {
                if (params["access_token"]) {
                    localStorage.setItem(itemId, params["access_token"]);
                    this.userService
                        .setLoggedInUser(params["access_token"])
                        .then(() => {
                        this.tracksService.getTopTracksForAllTerms();
                        this.artistsService.getTopArtistsForAllTerms();
                        this.location.go("/");
                    })
                        .catch((err) => {
                        console.error("ERROR:", err);
                    });
                }
            });
        }
    }
    isLoggedIn() {
        if (this.userService.getLoginStatus() &&
            this.userService.getUserProfile()) {
            return true;
        }
        return false;
    }
    isTracksPage() {
        if (this.router.url === "/tracks") {
            return true;
        }
        return false;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_tracks_service__WEBPACK_IMPORTED_MODULE_5__["TracksService"] },
    { type: _services_artists_service__WEBPACK_IMPORTED_MODULE_6__["ArtistsService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-artists/top-artists.component */ "./src/app/top-artists/top-artists.component.ts");
/* harmony import */ var _top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./top-tracks/top-tracks.component */ "./src/app/top-tracks/top-tracks.component.ts");
/* harmony import */ var _recents_recents_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recents/recents.component */ "./src/app/recents/recents.component.ts");
/* harmony import */ var _playlists_playlists_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./playlists/playlists.component */ "./src/app/playlists/playlists.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"],
            _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_8__["TopArtistsComponent"],
            _top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_9__["TopTracksComponent"],
            _recents_recents_component__WEBPACK_IMPORTED_MODULE_10__["RecentsComponent"],
            _playlists_playlists_component__WEBPACK_IMPORTED_MODULE_11__["PlaylistsComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n}\n\n@media (min-width: 1025px) {\n  .login {\n    height: 100vh;\n    background-color: white;\n    padding: 10px;\n    color: black;\n  }\n  .login img {\n    width: 250px;\n    height: 100px;\n  }\n  .login .btn-login {\n    padding: 10px 180px;\n    border-radius: 50px;\n    background-color: #1AB954;\n    font-weight: 700;\n    font-size: 14px;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n  }\n  .login .btn-login:hover {\n    background-color: #1BD760;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n  }\n  .login .btn-register {\n    padding: 10px 160px;\n    border-radius: 50px;\n    font-weight: 700;\n    font-size: 14px;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n  }\n  .login .btn-register a {\n    color: #616467;\n    font-size: 14px;\n  }\n  .login .btn-register:hover {\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n  }\n  .login .btn-register:hover a {\n    color: white;\n  }\n  .login .or-line {\n    margin-top: 10px;\n  }\n  .login .or {\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    display: inline-block;\n  }\n  .login .line {\n    display: inline-block;\n    width: 180px;\n    height: 1px;\n    vertical-align: middle;\n    margin: 0 20px;\n  }\n\n  .container-fluid {\n    margin-top: 100px;\n    padding: 10px 200px;\n  }\n  .container-fluid .artists .left-panel {\n    padding: 20px 40px;\n  }\n  .container-fluid .artists .left-panel .top-artists h5 {\n    font-size: 19px;\n    font-weight: 900;\n    margin-left: 40px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul {\n    margin-top: 30px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li {\n    list-style: none;\n    margin-top: 30px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li img {\n    width: 50px;\n    height: 50px;\n    border-radius: 50px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li span {\n    margin-left: 20px;\n  }\n  .container-fluid .see-more button {\n    font-size: 12px;\n    font-weight: 700;\n    display: inline-block;\n    padding: 10px 30px;\n    border-radius: 30px;\n    vertical-align: middle;\n  }\n  .container-fluid .see-more button a {\n    color: white;\n  }\n  .container-fluid .see-more button:hover a {\n    color: black;\n  }\n  .container-fluid .tracks .right-panel {\n    padding: 20px 40px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks h5 {\n    font-size: 19px;\n    font-weight: 900;\n    margin-left: 40px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul {\n    margin-top: 30px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li {\n    list-style: none;\n    min-width: 300px;\n    margin-top: 30px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li img {\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .artist-info {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .artist-info span {\n    margin-left: 10px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .artist-info .song {\n    font-size: 14px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .artist-info .artist-name {\n    font-size: 14px;\n    color: #9b9b9b;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBR0U7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQ0RGO0VER0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ0RKO0VESUU7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0VDRko7RURLRTtJQUNFLHlCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQkFBQTtFQ0hKO0VETUU7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxxQkFBQTtFQ0pKO0VETUk7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQ0pOO0VEUUU7SUFDRSxtQ0FBQTtJQUNBLGdCQUFBO0VDTko7RURRSTtJQUNFLFlBQUE7RUNOTjtFRFVFO0lBQ0UsZ0JBQUE7RUNSSjtFRFdFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtFQ1RKO0VEWUU7SUFDRSxxQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0VDVko7O0VEaUJBO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQ2RGO0VEb0JJO0lBRUUsa0JBQUE7RUNuQk47RURzQlE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQ3BCVjtFRHVCUTtJQUNFLGdCQUFBO0VDckJWO0VEdUJVO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQ3JCWjtFRHdCWTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUN0QmQ7RUR5Qlk7SUFDRSxpQkFBQTtFQ3ZCZDtFRGdDSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0VDOUJOO0VEZ0NNO0lBQ0UsWUFBQTtFQzlCUjtFRG1DTTtJQUNFLFlBQUE7RUNqQ1I7RUR5Q0k7SUFDRSxrQkFBQTtFQ3ZDTjtFRDJDUTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDekNWO0VENENRO0lBQ0UsZ0JBQUE7RUMxQ1Y7RUQ0Q1U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUMxQ1o7RUQ0Q1k7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VDMUNkO0VENkNZO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtFQzNDZDtFRDZDYztJQUNFLGlCQUFBO0VDM0NoQjtFRDhDYztJQUNFLGVBQUE7RUM1Q2hCO0VEK0NjO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUM3Q2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcblxuICAvLyBQcm9maWxlXG4gIC5sb2dpbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxuICAgIC5idG4tbG9naW4ge1xuICAgICAgcGFkZGluZzogMTBweCAxODBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUFCOTU0O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgfVxuXG4gICAgLmJ0bi1sb2dpbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUJENzYwO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIH1cblxuICAgIC5idG4tcmVnaXN0ZXIge1xuICAgICAgcGFkZGluZzogMTBweCAxNjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjNjE2NDY3O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1yZWdpc3Rlcjpob3ZlciB7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm9yLWxpbmUge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAub3Ige1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAubGluZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTgwcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW46IDAgMjBweDtcbiAgICB9XG4gIH1cblxuXG5cbiAgLy8gQ29udGVudFxuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwMHB4O1xuXG4gICAgLy8gTGVmdCBQYW5lbFxuXG4gICAgLmFydGlzdHMge1xuXG4gICAgICAubGVmdC1wYW5lbCB7XG5cbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xuXG4gICAgICAgIC50b3AtYXJ0aXN0cyB7XG4gICAgICAgICAgaDUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuXG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWUtbW9yZSB7XG4gICAgICBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBidXR0b246aG92ZXIge1xuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSaWdodCBQYW5lbFxuICAgIC50cmFja3Mge1xuXG4gICAgICAucmlnaHQtcGFuZWwge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG5cbiAgICAgICAgLnRvcC10cmFja3Mge1xuXG4gICAgICAgICAgaDUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuYXJ0aXN0LWluZm8ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc29uZyB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmFydGlzdC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG5cbiAgfVxuXG59XG4iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5sb2dpbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAubG9naW4gaW1nIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAubG9naW4gLmJ0bi1sb2dpbiB7XG4gICAgcGFkZGluZzogMTBweCAxODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQUI5NTQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIH1cbiAgLmxvZ2luIC5idG4tbG9naW46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQkQ3NjA7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxuICAubG9naW4gLmJ0bi1yZWdpc3RlciB7XG4gICAgcGFkZGluZzogMTBweCAxNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICB9XG4gIC5sb2dpbiAuYnRuLXJlZ2lzdGVyIGEge1xuICAgIGNvbG9yOiAjNjE2NDY3O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAubG9naW4gLmJ0bi1yZWdpc3Rlcjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxuICAubG9naW4gLmJ0bi1yZWdpc3Rlcjpob3ZlciBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmxvZ2luIC5vci1saW5lIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5sb2dpbiAub3Ige1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmxvZ2luIC5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gIH1cblxuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwge1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC5hcnRpc3RzIC5sZWZ0LXBhbmVsIC50b3AtYXJ0aXN0cyBoNSB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAuYXJ0aXN0cyAubGVmdC1wYW5lbCAudG9wLWFydGlzdHMgdWwge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAuYXJ0aXN0cyAubGVmdC1wYW5lbCAudG9wLWFydGlzdHMgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC5hcnRpc3RzIC5sZWZ0LXBhbmVsIC50b3AtYXJ0aXN0cyB1bCBsaSBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwgLnRvcC1hcnRpc3RzIHVsIGxpIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLnNlZS1tb3JlIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAuc2VlLW1vcmUgYnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC5zZWUtbW9yZSBidXR0b246aG92ZXIgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLnRyYWNrcyAucmlnaHQtcGFuZWwge1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIGg1IHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLnRyYWNrcyAucmlnaHQtcGFuZWwgLnRvcC10cmFja3MgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLnRyYWNrcyAucmlnaHQtcGFuZWwgLnRvcC10cmFja3MgdWwgbGkgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLnRyYWNrcyAucmlnaHQtcGFuZWwgLnRvcC10cmFja3MgdWwgbGkgLmFydGlzdC1pbmZvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIC5hcnRpc3QtaW5mbyBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIC5hcnRpc3QtaW5mbyAuc29uZyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLnRyYWNrcyAucmlnaHQtcGFuZWwgLnRvcC10cmFja3MgdWwgbGkgLmFydGlzdC1pbmZvIC5hcnRpc3QtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjOWI5YjliO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_artists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/artists.service */ "./src/app/services/artists.service.ts");
/* harmony import */ var _services_tracks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/tracks.service */ "./src/app/services/tracks.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let IndexComponent = class IndexComponent {
    constructor(userService, artistsService, tracksService, router) {
        this.userService = userService;
        this.artistsService = artistsService;
        this.tracksService = tracksService;
        this.router = router;
        this.loginUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].loginUrl;
    }
    ngOnInit() {
        this.artistsService.topArtists$.subscribe((res) => {
            this.topArtistsShortTerm = res.shortTerm;
            this.topArtistsMediumTerm = res.mediumTerm;
            this.topArtistsLongTerm = res.longTerm;
        });
        this.tracksService.topTracks$.subscribe((res) => {
            this.topTracksShortTerm = res.shortTerm;
            this.topTracksMediumTerm = res.mediumTerm;
            this.topTracksLongTerm = res.longTerm;
        });
    }
};
IndexComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_artists_service__WEBPACK_IMPORTED_MODULE_4__["ArtistsService"] },
    { type: _services_tracks_service__WEBPACK_IMPORTED_MODULE_5__["TracksService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-index",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/playlists/playlists.component.scss":
/*!****************************************************!*\
  !*** ./src/app/playlists/playlists.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1025px) {\n  .playlists {\n    margin-left: 6vw;\n    min-height: 100vh;\n    padding: 100px 0px 100px 150px;\n  }\n  .playlists h3 {\n    margin-bottom: 50px;\n  }\n  .playlists .playlist-info {\n    padding: 10px;\n    width: 250px;\n    vertical-align: top;\n    font-size: 16px;\n    letter-spacing: 1.5px;\n    font-weight: 400;\n  }\n  .playlists .playlist-info img {\n    width: 230px;\n  }\n  .playlists .playlist-info .track {\n    margin-top: 20px;\n  }\n  .playlists .playlist-info .track .total {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFFRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsOEJBQUE7RUNBRjtFREVFO0lBQ0UsbUJBQUE7RUNBSjtFREdFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0VDREo7RURHSTtJQUNFLFlBQUE7RUNETjtFRElJO0lBQ0UsZ0JBQUE7RUNGTjtFRElNO0lBQ0UsZUFBQTtFQ0ZSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAucGxheWxpc3RzIHtcblxuICAgIG1hcmdpbi1sZWZ0OiA2dnc7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTAwcHggMHB4IDEwMHB4IDE1MHB4O1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG5cbiAgICAucGxheWxpc3QtaW5mbyB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgIH1cblxuICAgICAgLnRyYWNrIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgICAudG90YWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCJAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5wbGF5bGlzdHMge1xuICAgIG1hcmdpbi1sZWZ0OiA2dnc7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTAwcHggMHB4IDEwMHB4IDE1MHB4O1xuICB9XG4gIC5wbGF5bGlzdHMgaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgLnBsYXlsaXN0cyAucGxheWxpc3QtaW5mbyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLnBsYXlsaXN0cyAucGxheWxpc3QtaW5mbyBpbWcge1xuICAgIHdpZHRoOiAyMzBweDtcbiAgfVxuICAucGxheWxpc3RzIC5wbGF5bGlzdC1pbmZvIC50cmFjayB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAucGxheWxpc3RzIC5wbGF5bGlzdC1pbmZvIC50cmFjayAudG90YWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/playlists/playlists.component.ts":
/*!**************************************************!*\
  !*** ./src/app/playlists/playlists.component.ts ***!
  \**************************************************/
/*! exports provided: PlaylistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsComponent", function() { return PlaylistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PlaylistsComponent = class PlaylistsComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.getPlaylists();
    }
    getPlaylists() {
        let observable = this.userService.getUserPlaylists();
        observable.subscribe((data) => {
            this.playlists = data.items;
        });
    }
};
PlaylistsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
PlaylistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-playlists",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlists/playlists.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlists.component.scss */ "./src/app/playlists/playlists.component.scss")).default]
    })
], PlaylistsComponent);



/***/ }),

/***/ "./src/app/recents/recents.component.scss":
/*!************************************************!*\
  !*** ./src/app/recents/recents.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1025px) {\n  .recent {\n    min-height: 100vh;\n    margin-left: 6vw;\n    padding: 80px 100px;\n  }\n  .recent h4 {\n    margin-left: 50px;\n    margin-bottom: 40px;\n  }\n  .recent img {\n    width: 50px;\n  }\n  .recent .recent-song ul li {\n    list-style: none;\n    padding: 8px 10px;\n  }\n  .recent .recent-song ul li .info {\n    vertical-align: middle;\n    margin-left: 20px;\n    font-size: 16px;\n  }\n  .recent .recent-song ul li .info .artist-name {\n    font-size: 14px;\n  }\n  .recent .time {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC9yZWNlbnRzL3JlY2VudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlY2VudHMvcmVjZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDQ0Y7RURDRTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7RUNDSjtFREVFO0lBQ0UsV0FBQTtFQ0FKO0VES007SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VDSFI7RURLUTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VDSFY7RURLVTtJQUNFLGVBQUE7RUNIWjtFRFVFO0lBQ0UsZUFBQTtFQ1JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWNlbnRzL3JlY2VudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5yZWNlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbi1sZWZ0OiA2dnc7XG4gICAgcGFkZGluZzogODBweCAxMDBweDtcblxuICAgIGg0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxuXG4gICAgLnJlY2VudC1zb25nIHtcbiAgICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG5cbiAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgICAgICAgIC5hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGltZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG4iLCJAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5yZWNlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbi1sZWZ0OiA2dnc7XG4gICAgcGFkZGluZzogODBweCAxMDBweDtcbiAgfVxuICAucmVjZW50IGg0IHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG4gIC5yZWNlbnQgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAucmVjZW50IC5yZWNlbnQtc29uZyB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgfVxuICAucmVjZW50IC5yZWNlbnQtc29uZyB1bCBsaSAuaW5mbyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnJlY2VudCAucmVjZW50LXNvbmcgdWwgbGkgLmluZm8gLmFydGlzdC1uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnJlY2VudCAudGltZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/recents/recents.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recents/recents.component.ts ***!
  \**********************************************/
/*! exports provided: RecentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentsComponent", function() { return RecentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



let RecentsComponent = class RecentsComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.getCurrentTrack();
    }
    getCurrentTrack() {
        let observable = this.userService.getUserCurrentTrack();
        observable.subscribe((data) => {
            this.user_current_tracks = data.items;
        });
    }
};
RecentsComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
RecentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-recents",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recents/recents.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recents.component.scss */ "./src/app/recents/recents.component.scss")).default]
    })
], RecentsComponent);



/***/ }),

/***/ "./src/app/services/artists.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/artists.service.ts ***!
  \*********************************************/
/*! exports provided: ArtistsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsService", function() { return ArtistsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let ArtistsService = class ArtistsService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.topArtists = {
            shortTerm: [],
            mediumTerm: [],
            longTerm: []
        };
        this.topArtists$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.topArtists);
    }
    getTopArtists(timeRange = 'medium_term') {
        const endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].spotifyApi.host + 'me/top/artists';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Bearer ${this.userService.getAccessToken()}`
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('limit', '50').set('time_range', timeRange)
        };
        return this.http.get(endpoint, httpOptions);
    }
    getTopArtistsShortTerm() {
        this.getTopArtists('short_term').subscribe((res) => {
            this.topArtists.shortTerm = res.items;
            this.topArtists$.next(this.topArtists);
        }, (err) => {
            console.error('ERROR', err);
        });
    }
    getTopArtistsMediumTerm() {
        this.getTopArtists('medium_term').subscribe((res) => {
            this.topArtists.mediumTerm = res.items;
            this.topArtists$.next(this.topArtists);
        }, (err) => {
            console.error('ERROR', err);
        });
    }
    getTopArtistsLongTerm() {
        this.getTopArtists('long_term').subscribe((res) => {
            this.topArtists.longTerm = res.items;
            this.topArtists$.next(this.topArtists);
        }, (err) => {
            console.error('ERROR', err);
        });
    }
    getTopArtistsForAllTerms() {
        this.getTopArtistsShortTerm();
        this.getTopArtistsMediumTerm();
        this.getTopArtistsLongTerm();
    }
};
ArtistsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
ArtistsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArtistsService);



/***/ }),

/***/ "./src/app/services/tracks.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/tracks.service.ts ***!
  \********************************************/
/*! exports provided: TracksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracksService", function() { return TracksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let TracksService = class TracksService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.topTracks = {
            shortTerm: [],
            mediumTerm: [],
            longTerm: []
        };
        this.topTracks$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.topTracks);
    }
    getTopTracks(timeRange = 'medium_term') {
        const endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].spotifyApi.host + 'me/top/tracks';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Bearer ${this.userService.getAccessToken()}`
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('limit', '50').set('time_range', timeRange)
        };
        return this.http.get(endpoint, httpOptions);
    }
    getTopTracksShortTerm() {
        this.getTopTracks('short_term').subscribe((res) => {
            this.topTracks.shortTerm = res.items;
            this.topTracks$.next(this.topTracks);
        }, (err) => {
            console.error('ERROR', err);
        });
    }
    getTopTracksMediumTerm() {
        this.getTopTracks('medium_term').subscribe((res) => {
            this.topTracks.mediumTerm = res.items;
            this.topTracks$.next(this.topTracks);
        }, (err) => {
            console.error('ERROR', err);
        });
    }
    getTopTracksLongTerm() {
        this.getTopTracks('long_term').subscribe((res) => {
            this.topTracks.longTerm = res.items;
            this.topTracks$.next(this.topTracks);
        }, (err) => {
            console.error('ERROR', err);
        });
    }
    getTopTracksForAllTerms() {
        this.getTopTracksShortTerm();
        this.getTopTracksMediumTerm();
        this.getTopTracksLongTerm();
    }
    setSelectedTerm(term) {
        this.selectedTerm = term;
    }
    getSelectedTerm() {
        return this.selectedTerm;
    }
    getUsersTopTracksBySelectedTerm() {
        switch (this.selectedTerm) {
            case 0:
                return this.topTracks.shortTerm;
            case 1:
                return this.topTracks.mediumTerm;
            case 2:
                return this.topTracks.longTerm;
            default:
                return this.topTracks.shortTerm;
        }
    }
};
TracksService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
TracksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TracksService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    setLoggedInUser(accessToken) {
        return new Promise((resolve, reject) => {
            this.accessToken = accessToken;
            this.getSpotifyUserProfile().subscribe((res) => {
                this.loggedIn = true;
                this.userProfile = res;
                resolve(this.userProfile);
            }, (err) => {
                this.logout();
                reject(err);
            });
        });
    }
    getSpotifyUserProfile() {
        const endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].spotifyApi.host + "me";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Bearer ${this.accessToken}`,
            }),
        };
        return this.http.get(endpoint, httpOptions);
    }
    // Get User Playlists
    getUserPlaylists() {
        const endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].spotifyApi.host + "me/playlists";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Bearer ${this.accessToken}`,
            }),
        };
        return this.http.get(endpoint, httpOptions);
    }
    // Get User Following
    getUserFollowing() {
        const endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].spotifyApi.host + "me/following?type=artist";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Bearer ${this.accessToken}`,
            }),
        };
        return this.http.get(endpoint, httpOptions);
    }
    // Get Current User Playing Track
    getUserCurrentTrack() {
        const endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].spotifyApi.host + "me/player/recently-played";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Bearer ${this.accessToken}`,
            }),
        };
        return this.http.get(endpoint, httpOptions);
    }
    getAccessToken() {
        return this.accessToken;
    }
    getLoginStatus() {
        return this.loggedIn;
    }
    getUserProfile() {
        return this.userProfile;
    }
    logout() {
        this.loggedIn = false;
        localStorage.removeItem("ng-spotify-access-token");
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], UserService);



/***/ }),

/***/ "./src/app/top-artists/top-artists.component.scss":
/*!********************************************************!*\
  !*** ./src/app/top-artists/top-artists.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1025px) {\n  .artists {\n    min-height: 100vh;\n    padding: 100px;\n  }\n  .artists h3 {\n    margin-left: 100px;\n    margin-bottom: 50px;\n  }\n  .artists .btn {\n    margin: 0px 5px;\n    background-color: Transparent;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    overflow: hidden;\n    color: gray;\n  }\n  .artists .btn:hover {\n    color: white;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n    text-decoration: underline;\n  }\n  .artists .four-weeks {\n    height: 100%;\n  }\n  .artists ul li {\n    list-style: none;\n    display: inline-block;\n    padding: 15px 25px;\n  }\n  .artists ul li img {\n    width: 200px;\n    height: 200px;\n    border-radius: 200px;\n  }\n  .artists ul li a {\n    color: white;\n  }\n  .artists ul li p {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC90b3AtYXJ0aXN0cy90b3AtYXJ0aXN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9wLWFydGlzdHMvdG9wLWFydGlzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFQ0NGO0VEQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VDQ0o7RURFRTtJQUNFLGVBQUE7SUFDQSw2QkFBQTtJQUNBLDRCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0FKO0VER0U7SUFDRSxZQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQkFBQTtJQUNBLDBCQUFBO0VDREo7RURJRTtJQUNFLFlBQUE7RUNGSjtFRE9JO0lBQ0UsZ0JBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0VDTE47RURPTTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esb0JBQUE7RUNMUjtFRFFNO0lBQ0UsWUFBQTtFQ05SO0VEV007SUFDRSxhQUFBO0VDVFI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RvcC1hcnRpc3RzL3RvcC1hcnRpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAuYXJ0aXN0cyB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTAwcHg7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cblxuICAgIC5idG46aG92ZXIge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgLmZvdXItd2Vla3Mge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIHVsIHtcblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIHAge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG59XG4iLCJAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5hcnRpc3RzIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMDBweDtcbiAgfVxuICAuYXJ0aXN0cyBoMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgLmFydGlzdHMgLmJ0biB7XG4gICAgbWFyZ2luOiAwcHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cbiAgLmFydGlzdHMgLmJ0bjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgLmFydGlzdHMgLmZvdXItd2Vla3Mge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuYXJ0aXN0cyB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICB9XG4gIC5hcnRpc3RzIHVsIGxpIGltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5hcnRpc3RzIHVsIGxpIHAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/top-artists/top-artists.component.ts":
/*!******************************************************!*\
  !*** ./src/app/top-artists/top-artists.component.ts ***!
  \******************************************************/
/*! exports provided: TopArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopArtistsComponent", function() { return TopArtistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_artists_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/artists.service */ "./src/app/services/artists.service.ts");



let TopArtistsComponent = class TopArtistsComponent {
    constructor(artistsService) {
        this.artistsService = artistsService;
        this.selectedTerm = 0;
    }
    ngOnInit() {
        this.artistsService.topArtists$.subscribe((res) => {
            this.topArtistsShortTerm = res.shortTerm;
            this.topArtistsMediumTerm = res.mediumTerm;
            this.topArtistsLongTerm = res.longTerm;
        });
    }
    selectTerm(term) {
        this.selectedTerm = term;
    }
};
TopArtistsComponent.ctorParameters = () => [
    { type: _services_artists_service__WEBPACK_IMPORTED_MODULE_2__["ArtistsService"] }
];
TopArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-artists',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-artists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-artists/top-artists.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-artists.component.scss */ "./src/app/top-artists/top-artists.component.scss")).default]
    })
], TopArtistsComponent);



/***/ }),

/***/ "./src/app/top-tracks/top-tracks.component.scss":
/*!******************************************************!*\
  !*** ./src/app/top-tracks/top-tracks.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1025px) {\n  .tracks {\n    min-height: 100vh;\n    padding: 80px 120px;\n  }\n  .tracks .time {\n    font-size: 14px;\n  }\n  .tracks h3 {\n    margin-bottom: 50px;\n    margin-left: 40px;\n  }\n  .tracks .btn {\n    margin: 0px 5px;\n    background-color: Transparent;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    overflow: hidden;\n    color: gray;\n  }\n  .tracks .btn:hover {\n    color: white;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n    text-decoration: underline;\n  }\n  .tracks ul {\n    margin-top: 30px;\n  }\n  .tracks ul li {\n    list-style: none;\n    margin-top: 30px;\n  }\n  .tracks ul li img {\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n  }\n  .tracks ul li .artist-info {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .tracks ul li .artist-info span {\n    margin-left: 10px;\n  }\n  .tracks ul li .artist-info .song {\n    font-size: 16px;\n  }\n  .tracks ul li .artist-info .artist-name {\n    font-size: 14px;\n    color: #9b9b9b;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC90b3AtdHJhY2tzL3RvcC10cmFja3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvcC10cmFja3MvdG9wLXRyYWNrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQ0NGO0VEQ0U7SUFDRSxlQUFBO0VDQ0o7RURFRTtJQUNFLG1CQUFBO0lBQ0EsaUJBQUE7RUNBSjtFREdFO0lBQ0UsZUFBQTtJQUNBLDZCQUFBO0lBQ0EsNEJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDREo7RURJRTtJQUNFLFlBQUE7SUFDQSxtQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsMEJBQUE7RUNGSjtFRE1FO0lBQ0UsZ0JBQUE7RUNKSjtFRE1JO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQ0pOO0VETU07SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VDSlI7RURPTTtJQUNFLHFCQUFBO0lBQ0Esc0JBQUE7RUNMUjtFRE9RO0lBQ0UsaUJBQUE7RUNMVjtFRFFRO0lBQ0UsZUFBQTtFQ05WO0VEU1E7SUFDRSxlQUFBO0lBQ0EsY0FBQTtFQ1BWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90b3AtdHJhY2tzL3RvcC10cmFja3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC50cmFja3Mge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDgwcHggMTIwcHg7XG5cbiAgICAudGltZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cblxuICAgIC5idG46aG92ZXIge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG5cbiAgICB1bCB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFydGlzdC1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNvbmcge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAudHJhY2tzIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiA4MHB4IDEyMHB4O1xuICB9XG4gIC50cmFja3MgLnRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAudHJhY2tzIGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB9XG4gIC50cmFja3MgLmJ0biB7XG4gICAgbWFyZ2luOiAwcHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cbiAgLnRyYWNrcyAuYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAudHJhY2tzIHVsIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC50cmFja3MgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICAudHJhY2tzIHVsIGxpIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAudHJhY2tzIHVsIGxpIC5hcnRpc3QtaW5mbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSAuYXJ0aXN0LWluZm8gc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSAuYXJ0aXN0LWluZm8gLnNvbmcge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAudHJhY2tzIHVsIGxpIC5hcnRpc3QtaW5mbyAuYXJ0aXN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/top-tracks/top-tracks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/top-tracks/top-tracks.component.ts ***!
  \****************************************************/
/*! exports provided: TopTracksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTracksComponent", function() { return TopTracksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tracks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tracks.service */ "./src/app/services/tracks.service.ts");



let TopTracksComponent = class TopTracksComponent {
    constructor(tracksService) {
        this.tracksService = tracksService;
        this.selectedTerm = 0;
        this.tracksService.setSelectedTerm(this.selectedTerm);
    }
    ngOnInit() {
        this.tracksService.topTracks$.subscribe((res) => {
            this.topTracksShortTerm = res.shortTerm;
            this.topTracksMediumTerm = res.mediumTerm;
            this.topTracksLongTerm = res.longTerm;
        });
    }
    selectTerm(term) {
        this.selectedTerm = term;
        this.tracksService.setSelectedTerm(this.selectedTerm);
    }
    transform(value) {
        const minutes = Math.floor(value / 60);
        return minutes + ':' + (value - minutes * 60);
    }
};
TopTracksComponent.ctorParameters = () => [
    { type: _services_tracks_service__WEBPACK_IMPORTED_MODULE_2__["TracksService"] }
];
TopTracksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'minuteSeconds'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-tracks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-tracks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-tracks/top-tracks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-tracks.component.scss */ "./src/app/top-tracks/top-tracks.component.scss")).default]
    })
], TopTracksComponent);



/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1025px) {\n  #profile img {\n    width: 150px;\n    border-radius: 75px;\n    margin-top: 80px;\n  }\n  #profile h1 {\n    font-size: 50px;\n    font-weight: 700;\n    margin-top: 20px;\n  }\n  #profile ul {\n    margin-top: 20px;\n  }\n  #profile ul li {\n    margin: 0px 15px;\n  }\n  #profile ul li h5 {\n    color: #1db954;\n    font-size: 20px;\n    font-weight: 700;\n  }\n  #profile ul li p {\n    text-transform: uppercase;\n    font-size: 12px;\n    color: #9b9b9b;\n    letter-spacing: 1.5px;\n    font-weight: 300;\n  }\n  #profile button {\n    font-size: 12px;\n    margin-top: 5px;\n    font-weight: 700;\n    padding: 10px 30px;\n    border-radius: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJO0lBQ0UsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNESjtFRElFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUNGSjtFREtFO0lBQ0UsZ0JBQUE7RUNISjtFREtJO0lBQ0UsZ0JBQUE7RUNITjtFREtNO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ0hSO0VETU07SUFDRSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtFQ0pSO0VEU0U7SUFDRSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ1BKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICNwcm9maWxlIHtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA3NXB4O1xuICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMHB4IDE1cHg7XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgIGNvbG9yOiAjMWRiOTU0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgfVxuICB9XG5cbn1cbiIsIkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgI3Byb2ZpbGUgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNzVweDtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICB9XG4gICNwcm9maWxlIGgxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gICNwcm9maWxlIHVsIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gICNwcm9maWxlIHVsIGxpIHtcbiAgICBtYXJnaW46IDBweCAxNXB4O1xuICB9XG4gICNwcm9maWxlIHVsIGxpIGg1IHtcbiAgICBjb2xvcjogIzFkYjk1NDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAjcHJvZmlsZSB1bCBsaSBwIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICAjcHJvZmlsZSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserComponent = class UserComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user_name = this.userService.getUserProfile().display_name;
        this.user_follower = this.userService.getUserProfile().followers;
        this.user_image = this.userService.getUserProfile().images;
    }
    ngOnInit() {
        this.getFollowing();
        this.getPlaylists();
    }
    getFollowing() {
        let observable = this.userService.getUserFollowing();
        observable.subscribe((data) => {
            this.user_following = data.artists.total;
        });
    }
    getPlaylists() {
        let observable = this.userService.getUserPlaylists();
        observable.subscribe((data) => {
            this.user_playlists = data.items.length;
        });
    }
    logout() {
        this.userService.logout();
        this.router.navigate(["/"]);
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")).default]
    })
], UserComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    loginUrl: 'http://heroku-spotify-project.herokuapp.com/login',
    spotifyApi: {
        host: 'https://api.spotify.com/v1/'
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nhannguyen/Desktop/spotify_project/spotify/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map