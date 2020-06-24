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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <!-- Navbar -->\n  <div id=\"navbar\" class=\"d-inline-block\">\n    <nav class=\"text-center\">\n      <a [routerLink]=\"['']\">\n        <img src=\"https://image.flaticon.com/icons/svg/2111/2111624.svg\" alt=\"logo\" />\n      </a>\n      <ul class=\"navbar-nav text-center\">\n        <li class=\"nav-item active\">\n          <a [routerLink]=\"['']\" class=\"nav-link\">\n            <i class=\"fas fa-user\"></i>\n            <p>Profile</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/artists']\" class=\"nav-link\">\n            <i class=\"fas fa-microphone-stand\"></i>\n            <p>Top Artists</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/tracks']\" class=\"nav-link\">\n            <i class=\"fas fa-music\"></i>\n            <p>Top Tracks</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/recent']\" class=\"nav-link\">\n            <i class=\"fas fa-history\"></i>\n            <p>Recent</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/playlists']\" class=\"nav-link\">\n            <i class=\"fas fa-list-music\"></i>\n            <p>Playlist</p>\n          </a>\n        </li>\n      </ul>\n      <div class=\"bottom text-center\">\n        <a href=\"https://github.com/nathannewyen/spotify_project\" class=\"nav-link\">\n          <i class=\"fab fa-github\"></i>\n        </a>\n      </div>\n    </nav>\n  </div>\n  <!-- End Navbar -->\n\n  <!-- Content -->\n  <div id=\"content\" class=\"d-inline-block\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/artist-profile/artist-profile.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/artist-profile/artist-profile.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>artist-profile works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!userService.getLoginStatus()\" class=\"login text-center\">\n  <a href=\"#!\">\n    <img src=\"https://www.logo.wine/a/logo/Spotify/Spotify-Black-Logo.wine.svg\" alt=\"logo\" />\n  </a>\n  <hr />\n  <div>\n    <a [href]=\"loginUrl\">\n      <button type=\"submit\" class=\"btn btn-login text-light\">\n        Login\n      </button>\n    </a>\n  </div>\n  <div class=\"or-line\">\n    <hr class=\"line\" />\n    <p class=\"or\">OR</p>\n    <hr class=\"line\" />\n  </div>\n  <div>\n    <a href=\"https://www.spotify.com/us/signup/\">\n      <button type=\"submit\" class=\"btn btn-register btn-outline-secondary\">\n        Register\n      </button>\n    </a>\n  </div>\n</div>\n\n<!-- After log in -->\n<div class=\"index\" *ngIf=\"userService.getLoginStatus()\">\n  <app-user></app-user>\n\n  <div class=\"container-fluid\">\n    <div class=\"info row\">\n      <div class=\"col artists\">\n        <div class=\"row left-panel\">\n          <div class=\"col top-artists\">\n            <h5 class=\"text-left\">Top Artists of All Time</h5>\n            <ul *ngFor=\"let artist of topArtistsLongTerm; let index = index\">\n              <li class=\"text-left\" *ngIf=\"index < 10\">\n                <div class=\"image d-inline-block\">\n                  <img src=\"{{ artist.images[1].url }}\" alt=\"{{ artist.name }}\" />\n                  <a class=\"image-link\" [routerLink]=\"['/artists', artist.id]\">\n                    <span class=\"fas fa-info-circle\"></span>\n                  </a>\n                </div>\n                <a class=\"name-link text-light\" [routerLink]=\"['/artists', artist.id]\">\n                  <span>{{ artist.name }}</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\" col see-more\">\n            <button type=\"submit\" class=\"btn btn-outline-light float-right\" [routerLink]=\"['/artists']\">\n              SEE MORE\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col tracks\">\n        <div class=\"row right-panel\">\n          <div class=\"col top-tracks\">\n            <h5 class=\"text-left \">Top Tracks of All Time</h5>\n            <ul *ngFor=\"let track of topTracksShortTerm; let index = index\">\n              <li class=\"text-left\" *ngIf=\"index < 10\">\n                <div class=\"left d-inline-block\">\n                  <div class=\"image d-inline-block\">\n                    <img src=\"{{ track.album.images[1].url }}\" alt=\"test\" />\n                    <a class=\"image-link text-light\" href=\"{{ track.external_urls.spotify }}\">\n                      <span class=\"fas fa-info-circle\"></span>\n                    </a>\n                  </div>\n                  <div class=\"artist-info\">\n                    <a class=\"track-link text-light\" href=\"{{ track.external_urls.spotify }}\">\n                      <span class=\"song\">{{ track.name }}</span>\n                    </a>\n                    <br />\n                    <span class=\"artist-name\">{{ track.artists[0].name }}・{{ track.name }}</span>\n                  </div>\n                </div>\n                <p class=\"d-inline-block time text-secondary float-right\">\n                  {{ track.duration_ms | date: \"m:ss\" }}\n                </p>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col see-more\">\n            <button type=\"submit\" class=\"btn btn-outline-light float-right\" [routerLink]=\"['/tracks']\">\n              SEE MORE\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"recent\">\n  <h4>Recently Played Tracks</h4>\n\n  <div class=\"recent-song\" *ngFor=\"let recent of user_current_tracks\">\n    <ul>\n      <li>\n        <div class=\"image d-inline-block\">\n          <img src=\"{{recent.track.album.images[2].url}}\" alt=\"{{recent.track.name}}\" class=\"d-inline-block\">\n          <a class=\"track-link text-light\" href=\"{{ recent.track.external_urls.spotify }}\">\n            <span class=\"fas fa-info-circle\"></span>\n          </a>\n        </div>\n        <div class=\"info d-inline-block\">\n          <span class=\"song\">{{ recent.track.name }}</span>\n          <br>\n          <span class=\"artist-name text-secondary\">\n            {{ recent.track.artists[0].name }}・{{ recent.track.name }}\n          </span>\n        </div>\n        <p class=\"d-inline-block time text-secondary float-right\">{{recent.track.duration_ms | date:'m:ss'}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-artists/top-artists.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-artists/top-artists.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"artists\">\n  <h3 class=\"d-inline-block\">Top artists</h3>\n  <div class=\"button d-inline-block float-right\">\n\n    <button class=\"btn border-0\" (click)=\"selectTerm(0)\" [class.button--active]=\"selectedTerm === 0\">All\n      Time</button>\n\n    <button class=\"btn border-0\" (click)=\"selectTerm(1)\" [class.button--active]=\"selectedTerm === 1\">Last 4\n      weeks</button>\n\n    <button class=\"btn border-0\" (click)=\"selectTerm(2)\" [class.button--active]=\"selectedTerm === 2\">Last 6\n      months</button>\n\n  </div>\n\n\n\n  <div class=\"row text-center\">\n    <div class=\"col\">\n      <div *ngIf=\"selectedTerm === 0\" class=\"all-time\">\n        <ul>\n          <li *ngFor=\"let artists of topArtistsLongTerm; let index = index\" class=\"item\">\n            <div class=\"image\">\n              <img src=\"{{artists.images[1].url}}\" alt=\"test\">\n              <a href=\"{{ artists.external_urls.spotify }}\" target=\"_blank\">\n                <span class=\"fas fa-info-circle\"></span>\n              </a>\n            </div>\n            <p> <a href=\"{{ artists.external_urls.spotify }}\" target=\"_blank\">{{artists.name }}</a>\n            </p>\n          </li>\n        </ul>\n      </div>\n\n\n      <div *ngIf=\"selectedTerm === 1\" class=\"four-weeks\">\n        <ul>\n          <li *ngFor=\"let artists of topArtistsShortTerm\">\n            <a href=\"{{ artists.external_urls.spotify }}\" target=\"_blank\"><img src=\"{{artists.images[1].url}}\"\n                alt=\"test\"></a>\n            <p> <a href=\"{{ artists.external_urls.spotify }}\" target=\"_blank\">{{artists.name }}</a>\n            </p>\n          </li>\n        </ul>\n      </div>\n\n      <div *ngIf=\"selectedTerm === 2\" class=\"six-months\">\n        <ul class=\"list list--orange\">\n          <li *ngFor=\"let artists of topArtistsMediumTerm\">\n            <a href=\"{{ artists.external_urls.spotify }}\" target=\"_blank\" class=\"list__link\"><img\n                src=\"{{artists.images[1].url}}\" alt=\"test\"></a>\n            <p> <a href=\"{{ artists.external_urls.spotify }}\" target=\"_blank\" class=\"list__link\">{{artists.name }}</a>\n            </p>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-tracks/top-tracks.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-tracks/top-tracks.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tracks\">\n\n  <h3 class=\"d-inline-block\">Top tracks</h3>\n\n  <div class=\"button d-inline-block float-right\">\n    <button class=\"btn border-0\" (click)=\"selectTerm(0)\" [class.button--active]=\"selectedTerm === 0\">All Time</button>\n\n    <button class=\"btn border-0\" (click)=\"selectTerm(1)\" [class.button--active]=\"selectedTerm === 1\">Last 4\n      Weeks</button>\n\n    <button class=\"btn border-0\" (click)=\"selectTerm(2)\" [class.button--active]=\"selectedTerm === 2\">Last 6\n      Months</button>\n\n  </div>\n\n\n  <div class=\"row text-center\">\n\n    <div class=\"col\">\n\n      <div *ngIf=\"selectedTerm === 0\" class=\"clearfix\">\n        <ul class=\"list list--yellow\">\n          <li class=\"text-left\" *ngFor=\"let track of topTracksLongTerm; let index = index\">\n            <div class=\"song d-inline-block\">\n              <div class=\"image d-inline-block\">\n                <img src=\"{{track.album.images[1].url}}\" alt=\"test\">\n                <a class=\"image-link\" href=\"{{ track.external_urls.spotify }}\">\n                  <span class=\"fas fa-info-circle\"></span>\n                </a>\n              </div>\n              <div class=\"artist-info\">\n                <a class=\"track-link text-light\" href=\"{{ track.external_urls.spotify }}\">\n                  <span class=\"song\">{{ track.name }}</span>\n                </a>\n                <br>\n                <span class=\"artist-name\">{{ track.artists[0].name }}</span>\n              </div>\n            </div>\n            <p class=\"d-inline-block time text-secondary float-right\">{{track.duration_ms | date:'m:ss'}}</p>\n          </li>\n        </ul>\n      </div>\n\n\n      <div *ngIf=\"selectedTerm === 1\" class=\"clearfix\">\n        <ul class=\"list list--yellow\">\n          <li class=\"text-left\" *ngFor=\"let track of topTracksShortTerm; let index = index\">\n            <div class=\"song d-inline-block\">\n              <a class=\"image-link\" href=\"{{ track.external_urls.spotify }}\">\n                <img src=\"{{track.album.images[1].url}}\" alt=\"test\">\n              </a>\n              <div class=\"artist-info\">\n                <a class=\"track-link text-light\" href=\"{{ track.external_urls.spotify }}\">\n                  <span class=\"song\">{{ track.name }}</span>\n                </a>\n                <br>\n                <span class=\"artist-name\">{{ track.artists[0].name }}</span>\n              </div>\n            </div>\n            <p class=\"d-inline-block time text-secondary float-right\">{{track.duration_ms | date:'m:ss'}}</p>\n          </li>\n        </ul>\n      </div>\n\n      <div *ngIf=\"selectedTerm === 2\" class=\"clearfix\">\n        <ul class=\"list list--yellow\">\n          <li class=\"text-left\" *ngFor=\"let track of topTracksMediumTerm; let index = index\">\n            <div class=\"song d-inline-block\">\n              <a class=\"image-link\" href=\"{{ track.external_urls.spotify }}\">\n                <img src=\"{{track.album.images[1].url}}\" alt=\"test\">\n              </a>\n              <div class=\"artist-info\">\n                <a class=\"track-link text-light\" href=\"{{ track.external_urls.spotify }}\">\n                  <span class=\"song\">{{ track.name }}</span>\n                </a>\n                <br>\n                <span class=\"artist-name\">{{ track.artists[0].name }}</span>\n              </div>\n            </div>\n            <p class=\"d-inline-block time text-secondary float-right\">{{track.duration_ms | date:'m:ss'}}</p>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"profile\" class=\"text-center\">\n  <div *ngIf=\"user_image.length > 0\">\n    <img src=\"{{user_image[0].url}}\" alt=\"profile-photo\">\n  </div>\n  <div *ngIf=\"user_image.length == 0\">\n    <i class=\"fas fa-user-alt\"></i>\n  </div>\n  <h1>{{user_name}}</h1>\n  <ul class=\"list-inline\">\n    <li class=\"list-inline-item\">\n      <h5>{{user_follower.total}}</h5>\n      <p>Followers</p>\n    </li>\n    <li class=\"list-inline-item\">\n      <h5>{{user_following}}</h5>\n      <p>Following</p>\n    </li>\n    <li class=\"list-inline-item\">\n      <h5>{{user_playlists}}</h5>\n      <p>Playlists</p>\n    </li>\n  </ul>\n\n  <button type=\"submit\" class=\"btn btn-outline-light\" (click)=\"logout()\">LOGOUT</button>\n</div>\n");

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
/* harmony import */ var _artist_profile_artist_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./artist-profile/artist-profile.component */ "./src/app/artist-profile/artist-profile.component.ts");









const routes = [
    { path: "", component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: "artists", component: _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_5__["TopArtistsComponent"] },
    { path: "tracks", component: _top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_6__["TopTracksComponent"] },
    { path: "playlists", component: _playlists_playlists_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"] },
    { path: "recent", component: _recents_recents_component__WEBPACK_IMPORTED_MODULE_7__["RecentsComponent"] },
    { path: "artists/:id", component: _artist_profile_artist_profile_component__WEBPACK_IMPORTED_MODULE_8__["ArtistProfileComponent"] },
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
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  font-family: \"Circular Std\", sans-serif;\n}\n\n@media (min-width: 1600px) {\n  #content {\n    vertical-align: top;\n    background-color: #191919;\n    color: white;\n    width: 100%;\n    min-height: 100vh;\n  }\n\n  #navbar {\n    background-color: black;\n    width: 4vw !important;\n    min-height: 100vh;\n    position: fixed;\n  }\n  #navbar nav {\n    margin-top: 30px;\n  }\n  #navbar ul {\n    margin-top: 300px !important;\n  }\n  #navbar ul li {\n    padding-top: 10px;\n    margin-top: 0px;\n  }\n  #navbar a {\n    color: #9b9b9b;\n  }\n  #navbar a i {\n    font-size: 20px;\n  }\n  #navbar a p {\n    font-size: 11px;\n  }\n  #navbar li:hover {\n    background-color: #191919;\n    border-left: 4px solid #1bd760;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n  }\n  #navbar li:hover a {\n    color: white;\n  }\n  #navbar .next {\n    transition-timing-function: ease-out;\n    transition: 0.9s;\n  }\n  #navbar .active {\n    background-color: #191919;\n    border-left: 3px solid #1bd760;\n    transition-timing-function: ease-in;\n    transition: 0.9s;\n  }\n  #navbar .active a {\n    color: white;\n  }\n  #navbar img {\n    width: 50px;\n  }\n  #navbar .bottom {\n    bottom: 100px;\n    left: 20px;\n    position: absolute;\n  }\n  #navbar .bottom i {\n    font-size: 35px;\n  }\n  #navbar .bottom:hover a {\n    color: #519bf5;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n  }\n}\n\n@media (min-width: 1025px) {\n  #content {\n    vertical-align: top;\n    background-color: #191919;\n    color: white;\n    width: 100%;\n  }\n\n  #navbar {\n    background-color: black;\n    width: 8vw;\n    min-height: 100vh;\n    position: fixed;\n  }\n  #navbar nav {\n    margin-top: 30px;\n  }\n  #navbar ul {\n    margin-top: 140px;\n  }\n  #navbar ul li {\n    padding-top: 10px;\n    margin-top: 0px;\n  }\n  #navbar a {\n    color: #9b9b9b;\n  }\n  #navbar a i {\n    font-size: 20px;\n  }\n  #navbar a p {\n    font-size: 11px;\n  }\n  #navbar li:hover {\n    background-color: #191919;\n    border-left: 3px solid #1bd760;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n  }\n  #navbar li:hover a {\n    color: white;\n  }\n  #navbar .active {\n    background-color: #191919;\n    border-left: 3px solid #1bd760;\n    transition-timing-function: ease-in;\n    transition: 0.5s;\n  }\n  #navbar .active a {\n    color: white;\n  }\n  #navbar img {\n    width: 50px;\n  }\n  #navbar .bottom {\n    margin-top: 500px;\n  }\n  #navbar .bottom i {\n    font-size: 30px;\n  }\n  #navbar .bottom:hover a {\n    color: #519bf5;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FDQ0Y7O0FER0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0VDQUY7O0VER0E7SUFDRSx1QkFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VDQUY7RURFRTtJQUNFLGdCQUFBO0VDQUo7RURHRTtJQUNFLDRCQUFBO0VDREo7RURHSTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQ0ROO0VES0U7SUFTRSxjQUFBO0VDWEo7RURHSTtJQUNFLGVBQUE7RUNETjtFRElJO0lBQ0UsZUFBQTtFQ0ZOO0VEUUU7SUFDRSx5QkFBQTtJQUNBLDhCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQkFBQTtFQ05KO0VEUUk7SUFDRSxZQUFBO0VDTk47RURVRTtJQUNFLG9DQUFBO0lBQ0EsZ0JBQUE7RUNSSjtFRFlFO0lBQ0UseUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0JBQUE7RUNWSjtFRFlJO0lBQ0UsWUFBQTtFQ1ZOO0VEZ0JFO0lBQ0UsV0FBQTtFQ2RKO0VEaUJFO0lBQ0UsYUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQ2ZKO0VEaUJJO0lBQ0UsZUFBQTtFQ2ZOO0VEcUJJO0lBQ0UsY0FBQTtJQUNBLG1DQUFBO0lBQ0EsZ0JBQUE7RUNuQk47QUFDRjs7QUR5QkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ3ZCRjs7RUQwQkE7SUFDRSx1QkFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUN2QkY7RUR5QkU7SUFDRSxnQkFBQTtFQ3ZCSjtFRDBCRTtJQUNFLGlCQUFBO0VDeEJKO0VEMEJJO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VDeEJOO0VENEJFO0lBU0UsY0FBQTtFQ2xDSjtFRDBCSTtJQUNFLGVBQUE7RUN4Qk47RUQyQkk7SUFDRSxlQUFBO0VDekJOO0VEK0JFO0lBQ0UseUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0JBQUE7RUM3Qko7RUQrQkk7SUFDRSxZQUFBO0VDN0JOO0VEa0NFO0lBQ0UseUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0JBQUE7RUNoQ0o7RURrQ0k7SUFDRSxZQUFBO0VDaENOO0VEc0NFO0lBQ0UsV0FBQTtFQ3BDSjtFRHVDRTtJQUNFLGlCQUFBO0VDckNKO0VEdUNJO0lBQ0UsZUFBQTtFQ3JDTjtFRDBDSTtJQUNFLGNBQUE7SUFDQSxtQ0FBQTtJQUNBLGdCQUFBO0VDeENOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyIFN0ZFwiLCBzYW5zLXNlcmlmO1xufVxuXG4vLyBpTWFjIDI3XG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gICNjb250ZW50IHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgI25hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDR2dyAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIG5hdiB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIH1cblxuICAgIGxpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMxYmQ3NjA7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5leHQge1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgdHJhbnNpdGlvbjogMC45cztcbiAgICB9XG5cbiAgICAvLyBBY3RpdmUgbGlcbiAgICAuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxYmQ3NjA7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgIHRyYW5zaXRpb246IDAuOXM7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRW5kIGFjdGl2ZVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cblxuICAgIC5ib3R0b20ge1xuICAgICAgYm90dG9tOiAxMDBweDtcbiAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJvdHRvbTpob3ZlciB7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzUxOWJmNTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE1hY2Jvb2sgMTMgLSAxNVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAjY29udGVudCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICNuYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA4dnc7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgbmF2IHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgbWFyZ2luLXRvcDogMTQwcHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIH1cblxuICAgIGxpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxYmQ3NjA7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWN0aXZlIGxpXG4gICAgLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMWJkNzYwO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVuZCBhY3RpdmVcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICB9XG5cbiAgICAuYm90dG9tIHtcbiAgICAgIG1hcmdpbi10b3A6IDUwMHB4O1xuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b206aG92ZXIge1xuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjNTE5YmY1O1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi53cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2lyY3VsYXIgU3RkXCIsIHNhbnMtc2VyaWY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgI2NvbnRlbnQge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuICAjbmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogNHZ3ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gICNuYXZiYXIgbmF2IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gICNuYXZiYXIgdWwge1xuICAgIG1hcmdpbi10b3A6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgI25hdmJhciB1bCBsaSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gICNuYXZiYXIgYSB7XG4gICAgY29sb3I6ICM5YjliOWI7XG4gIH1cbiAgI25hdmJhciBhIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAjbmF2YmFyIGEgcCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gICNuYXZiYXIgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMWJkNzYwO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbiAgI25hdmJhciBsaTpob3ZlciBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgI25hdmJhciAubmV4dCB7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IDAuOXM7XG4gIH1cbiAgI25hdmJhciAuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzFiZDc2MDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjlzO1xuICB9XG4gICNuYXZiYXIgLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgI25hdmJhciBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gICNuYXZiYXIgLmJvdHRvbSB7XG4gICAgYm90dG9tOiAxMDBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAjbmF2YmFyIC5ib3R0b20gaSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG4gICNuYXZiYXIgLmJvdHRvbTpob3ZlciBhIHtcbiAgICBjb2xvcjogIzUxOWJmNTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICNjb250ZW50IHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI25hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDh2dztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbiAgI25hdmJhciBuYXYge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgI25hdmJhciB1bCB7XG4gICAgbWFyZ2luLXRvcDogMTQwcHg7XG4gIH1cbiAgI25hdmJhciB1bCBsaSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gICNuYXZiYXIgYSB7XG4gICAgY29sb3I6ICM5YjliOWI7XG4gIH1cbiAgI25hdmJhciBhIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAjbmF2YmFyIGEgcCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gICNuYXZiYXIgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMWJkNzYwO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbiAgI25hdmJhciBsaTpob3ZlciBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgI25hdmJhciAuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzFiZDc2MDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gICNuYXZiYXIgLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgI25hdmJhciBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gICNuYXZiYXIgLmJvdHRvbSB7XG4gICAgbWFyZ2luLXRvcDogNTAwcHg7XG4gIH1cbiAgI25hdmJhciAuYm90dG9tIGkge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAjbmF2YmFyIC5ib3R0b206aG92ZXIgYSB7XG4gICAgY29sb3I6ICM1MTliZjU7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxufSJdfQ== */");

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
        // jQuery
        $(".nav-item").click(function () {
            $(".nav-item").removeClass("active");
            $(".nav-item").addClass("next");
            $(this).addClass("active");
        });
        // End jQuery
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
/* harmony import */ var _artist_profile_artist_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./artist-profile/artist-profile.component */ "./src/app/artist-profile/artist-profile.component.ts");















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
            _artist_profile_artist_profile_component__WEBPACK_IMPORTED_MODULE_14__["ArtistProfileComponent"],
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

/***/ "./src/app/artist-profile/artist-profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/artist-profile/artist-profile.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGlzdC1wcm9maWxlL2FydGlzdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/artist-profile/artist-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/artist-profile/artist-profile.component.ts ***!
  \************************************************************/
/*! exports provided: ArtistProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistProfileComponent", function() { return ArtistProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ArtistProfileComponent = class ArtistProfileComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.getArtist();
    }
    getArtist() {
        let observable = this.userService.getArtistProfile();
        observable.subscribe((data) => {
            this.artist_name = data.artists;
            console.log(this.artist_name);
        });
    }
};
ArtistProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
ArtistProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-artist-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./artist-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/artist-profile/artist-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./artist-profile.component.scss */ "./src/app/artist-profile/artist-profile.component.scss")).default]
    })
], ArtistProfileComponent);



/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n}\n\n@media (min-width: 1800px) {\n  .login {\n    height: 100vh;\n    background-color: white;\n    padding: 10px;\n    color: black;\n  }\n  .login img {\n    width: 250px;\n    height: 100px;\n  }\n  .login .btn-login {\n    padding: 10px 180px;\n    border-radius: 50px;\n    background-color: #1ab954;\n    font-weight: 700;\n    font-size: 14px;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n  }\n  .login .btn-login:hover {\n    background-color: #1bd760;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n  }\n  .login .btn-register {\n    padding: 10px 160px;\n    border-radius: 50px;\n    font-weight: 700;\n    font-size: 14px;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n  }\n  .login .btn-register a {\n    color: #616467;\n    font-size: 14px;\n  }\n  .login .btn-register:hover {\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n  }\n  .login .btn-register:hover a {\n    color: white;\n  }\n  .login .or-line {\n    margin-top: 10px;\n  }\n  .login .or {\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    display: inline-block;\n  }\n  .login .line {\n    display: inline-block;\n    width: 180px;\n    height: 1px;\n    vertical-align: middle;\n    margin: 0 20px;\n  }\n\n  .container-fluid {\n    margin-top: 80px !important;\n    min-height: 76vh;\n  }\n  .container-fluid .artists .left-panel {\n    width: 70%;\n    padding: 20px 60px !important;\n    margin-left: 15vw !important;\n  }\n  .container-fluid .artists .left-panel .top-artists h5 {\n    font-size: 19px;\n    font-weight: 900;\n    margin-left: 40px;\n    margin-bottom: 60px !important;\n  }\n  .container-fluid .artists .left-panel .top-artists ul {\n    margin-top: 30px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li {\n    list-style: none;\n    margin-top: 30px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li .image {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li .image span {\n    font-size: 24px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li .image:hover img {\n    opacity: 0.5;\n    transition-timing-function: ease-in;\n    transition: 0.4s;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li .image:hover a {\n    opacity: 1;\n    top: 0;\n    z-index: 500;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li .image:hover a span {\n    top: 50%;\n    position: absolute;\n    left: -20px;\n    right: 0;\n    transform: translateY(-50%);\n  }\n  .container-fluid .artists .left-panel .top-artists ul li .image a {\n    display: block;\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    text-align: center;\n    color: inherit;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li img {\n    width: 50px;\n    height: 50px;\n    border-radius: 50px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li span {\n    margin-left: 20px;\n  }\n  .container-fluid .see-more button {\n    font-size: 12px;\n    font-weight: 700;\n    display: inline-block;\n    padding: 10px 30px;\n    border-radius: 30px;\n    vertical-align: middle;\n  }\n  .container-fluid .tracks .right-panel {\n    width: 70%;\n    padding: 20px 60px !important;\n  }\n  .container-fluid .tracks .right-panel .top-tracks h5 {\n    font-size: 19px;\n    font-weight: 900;\n    margin-left: 40px;\n    margin-bottom: 60px !important;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul {\n    margin-top: 30px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li {\n    list-style: none;\n    min-width: 550px !important;\n    margin-top: 30px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .image {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .image span {\n    font-size: 24px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .image:hover img {\n    opacity: 0.5;\n    transition-timing-function: ease-in;\n    transition: 0.4s;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .image:hover a {\n    opacity: 1;\n    top: 0;\n    z-index: 500;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .image:hover a span {\n    top: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    transform: translateY(-50%);\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .image a {\n    display: block;\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    text-align: center;\n    color: inherit;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li img {\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .artist-info {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .artist-info span {\n    margin-left: 10px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .artist-info .song {\n    font-size: 14px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .artist-info .artist-name {\n    font-size: 14px;\n    color: #9b9b9b;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .time {\n    font-size: 14px;\n  }\n}\n\n@media (min-width: 1025px) {\n  .login {\n    height: 100vh;\n    background-color: white;\n    padding: 10px;\n    color: black;\n  }\n  .login img {\n    width: 250px;\n    height: 100px;\n  }\n  .login .btn-login {\n    padding: 10px 180px;\n    border-radius: 50px;\n    background-color: #1ab954;\n    font-weight: 700;\n    font-size: 14px;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n  }\n  .login .btn-login:hover {\n    background-color: #1bd760;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n  }\n  .login .btn-register {\n    padding: 10px 160px;\n    border-radius: 50px;\n    font-weight: 700;\n    font-size: 14px;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n  }\n  .login .btn-register a {\n    color: #616467;\n    font-size: 14px;\n  }\n  .login .btn-register:hover {\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n  }\n  .login .btn-register:hover a {\n    color: white;\n  }\n  .login .or-line {\n    margin-top: 10px;\n  }\n  .login .or {\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    display: inline-block;\n  }\n  .login .line {\n    display: inline-block;\n    width: 180px;\n    height: 1px;\n    vertical-align: middle;\n    margin: 0 20px;\n  }\n\n  .container-fluid {\n    margin-top: 100px;\n    padding: 0px 20px;\n  }\n  .container-fluid .artists .left-panel {\n    padding: 20px 40px;\n  }\n  .container-fluid .artists .left-panel .top-artists h5 {\n    font-size: 19px;\n    width: 200px;\n    font-weight: 900;\n    margin-left: 40px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul {\n    margin-top: 30px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li {\n    list-style: none;\n    margin-top: 30px;\n    width: 200px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li .image {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li .image span {\n    font-size: 24px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li .image:hover img {\n    opacity: 0.5;\n    transition-timing-function: ease-in;\n    transition: 0.4s;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li .image:hover a {\n    opacity: 1;\n    top: 0;\n    z-index: 500;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li .image:hover a span {\n    top: 50%;\n    position: absolute;\n    left: -20px;\n    right: 0;\n    transform: translateY(-50%);\n  }\n  .container-fluid .artists .left-panel .top-artists ul li .image a {\n    display: block;\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    text-align: center;\n    color: inherit;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li img {\n    width: 50px;\n    height: 50px;\n    border-radius: 50px;\n  }\n  .container-fluid .artists .left-panel .top-artists ul li span {\n    margin-left: 20px;\n  }\n  .container-fluid .see-more button {\n    font-size: 12px;\n    font-weight: 700;\n    display: inline-block;\n    padding: 10px 30px;\n    border-radius: 30px;\n    vertical-align: middle;\n  }\n  .container-fluid .tracks .right-panel {\n    padding: 20px 0px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks h5 {\n    font-size: 19px;\n    font-weight: 900;\n    width: 300px;\n    margin-left: 40px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul {\n    margin-top: 30px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li {\n    list-style: none;\n    min-width: 430px;\n    margin-top: 30px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .image {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .image span {\n    font-size: 24px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .image:hover img {\n    opacity: 0.5;\n    transition-timing-function: ease-in;\n    transition: 0.4s;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .image:hover a {\n    opacity: 1;\n    top: 0;\n    z-index: 500;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .image:hover a span {\n    top: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    transform: translateY(-50%);\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .image a {\n    display: block;\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    text-align: center;\n    color: inherit;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li img {\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .artist-info {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .artist-info span {\n    margin-left: 10px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .artist-info .song {\n    font-size: 14px;\n  }\n  .container-fluid .tracks .right-panel .top-tracks ul li .artist-info .artist-name {\n    font-size: 14px;\n    color: #9b9b9b;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREdBO0VBR0U7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQ0ZGO0VESUU7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ0ZKO0VES0U7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0VDSEo7RURNRTtJQUNFLHlCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQkFBQTtFQ0pKO0VET0U7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxxQkFBQTtFQ0xKO0VET0k7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQ0xOO0VEU0U7SUFDRSxtQ0FBQTtJQUNBLGdCQUFBO0VDUEo7RURTSTtJQUNFLFlBQUE7RUNQTjtFRFdFO0lBQ0UsZ0JBQUE7RUNUSjtFRFlFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtFQ1ZKO0VEYUU7SUFDRSxxQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0VDWEo7O0VEZ0JBO0lBQ0UsMkJBQUE7SUFDQSxnQkFBQTtFQ2JGO0VEaUJJO0lBQ0UsVUFBQTtJQUNBLDZCQUFBO0lBQ0EsNEJBQUE7RUNmTjtFRGtCUTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsOEJBQUE7RUNoQlY7RURtQlE7SUFDRSxnQkFBQTtFQ2pCVjtFRG1CVTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUNqQlo7RURxQlk7SUFDRSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtFQ25CZDtFRHFCYztJQUNFLGVBQUE7RUNuQmhCO0VEd0JjO0lBQ0UsWUFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0JBQUE7RUN0QmhCO0VEMEJZO0lBQ0UsVUFBQTtJQUNBLE1BQUE7SUFDQSxZQUFBO0VDeEJkO0VEMkJZO0lBQ0UsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtFQ3pCZDtFRDRCWTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDMUJkO0VEK0JZO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQzdCZDtFRGdDWTtJQUNFLGlCQUFBO0VDOUJkO0VEdUNJO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7RUNyQ047RUQyQ0k7SUFDRSxVQUFBO0lBQ0EsNkJBQUE7RUN6Q047RUQ0Q1E7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLDhCQUFBO0VDMUNWO0VENkNRO0lBQ0UsZ0JBQUE7RUMzQ1Y7RUQ2Q1U7SUFDRSxnQkFBQTtJQUNBLDJCQUFBO0lBQ0EsZ0JBQUE7RUMzQ1o7RUQrQ1k7SUFDRSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtFQzdDZDtFRCtDYztJQUNFLGVBQUE7RUM3Q2hCO0VEa0RjO0lBQ0UsWUFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0JBQUE7RUNoRGhCO0VEb0RZO0lBQ0UsVUFBQTtJQUNBLE1BQUE7SUFDQSxZQUFBO0VDbERkO0VEcURZO0lBQ0UsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtFQ25EZDtFRHNEWTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDcERkO0VEeURZO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxxQkFBQTtFQ3ZEZDtFRDBEWTtJQUNFLHFCQUFBO0lBQ0Esc0JBQUE7RUN4RGQ7RUQwRGM7SUFDRSxpQkFBQTtFQ3hEaEI7RUQyRGM7SUFDRSxlQUFBO0VDekRoQjtFRDREYztJQUNFLGVBQUE7SUFDQSxjQUFBO0VDMURoQjtFRDhEWTtJQUNFLGVBQUE7RUM1RGQ7QUFDRjs7QURzRUE7RUFHRTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VDdEVGO0VEd0VFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUN0RUo7RUR5RUU7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0VDdkVKO0VEMEVFO0lBQ0UseUJBQUE7SUFDQSxtQ0FBQTtJQUNBLGdCQUFBO0VDeEVKO0VEMkVFO0lBQ0UsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7RUN6RUo7RUQyRUk7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQ3pFTjtFRDZFRTtJQUNFLG1DQUFBO0lBQ0EsZ0JBQUE7RUMzRUo7RUQ2RUk7SUFDRSxZQUFBO0VDM0VOO0VEK0VFO0lBQ0UsZ0JBQUE7RUM3RUo7RURnRkU7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0VDOUVKO0VEaUZFO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLHNCQUFBO0lBQ0EsY0FBQTtFQy9FSjs7RURvRkE7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VDakZGO0VEc0ZJO0lBQ0Usa0JBQUE7RUNwRk47RUR1RlE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUNyRlY7RUR3RlE7SUFDRSxnQkFBQTtFQ3RGVjtFRHdGVTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VDdEZaO0VEMEZZO0lBQ0Usa0JBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7RUN4RmQ7RUQwRmM7SUFDRSxlQUFBO0VDeEZoQjtFRDZGYztJQUNFLFlBQUE7SUFDQSxtQ0FBQTtJQUNBLGdCQUFBO0VDM0ZoQjtFRCtGWTtJQUNFLFVBQUE7SUFDQSxNQUFBO0lBQ0EsWUFBQTtFQzdGZDtFRGdHWTtJQUNFLFFBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7RUM5RmQ7RURpR1k7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQy9GZDtFRHFHWTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUNuR2Q7RURzR1k7SUFDRSxpQkFBQTtFQ3BHZDtFRDZHSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0VDM0dOO0VEaUhJO0lBQ0UsaUJBQUE7RUMvR047RURrSFE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUNoSFY7RURtSFE7SUFDRSxnQkFBQTtFQ2pIVjtFRG1IVTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ2pIWjtFRHFIWTtJQUNFLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0VDbkhkO0VEcUhjO0lBQ0UsZUFBQTtFQ25IaEI7RUR3SGM7SUFDRSxZQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQkFBQTtFQ3RIaEI7RUQwSFk7SUFDRSxVQUFBO0lBQ0EsTUFBQTtJQUNBLFlBQUE7RUN4SGQ7RUQySFk7SUFDRSxRQUFBO0lBQ0Esa0JBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0VDekhkO0VENEhZO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUMxSGQ7RUQrSFk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VDN0hkO0VEZ0lZO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtFQzlIZDtFRGdJYztJQUNFLGlCQUFBO0VDOUhoQjtFRGlJYztJQUNFLGVBQUE7RUMvSGhCO0VEa0ljO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUNoSWhCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8vIGlNYWMgMjcgLT5cbkBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcblxuICAvLyBQcm9maWxlXG4gIC5sb2dpbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxuICAgIC5idG4tbG9naW4ge1xuICAgICAgcGFkZGluZzogMTBweCAxODBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiOTU0O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgfVxuXG4gICAgLmJ0bi1sb2dpbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWJkNzYwO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIH1cblxuICAgIC5idG4tcmVnaXN0ZXIge1xuICAgICAgcGFkZGluZzogMTBweCAxNjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjNjE2NDY3O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1yZWdpc3Rlcjpob3ZlciB7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm9yLWxpbmUge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAub3Ige1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAubGluZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTgwcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW46IDAgMjBweDtcbiAgICB9XG4gIH1cblxuICAvLyBDb250ZW50XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIG1hcmdpbi10b3A6IDgwcHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiA3NnZoO1xuICAgIC8vIExlZnQgUGFuZWxcblxuICAgIC5hcnRpc3RzIHtcbiAgICAgIC5sZWZ0LXBhbmVsIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgcGFkZGluZzogMjBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXZ3ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLnRvcC1hcnRpc3RzIHtcbiAgICAgICAgICBoNSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgICAgICAgIC8vIEhvdmVyIGltYWdlXG5cbiAgICAgICAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbWFnZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaW1hZ2U6aG92ZXIgYSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogNTAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmltYWdlOmhvdmVyIGEgc3BhbiB7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbWFnZSBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gRW5kIGhvdmVyXG5cbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlZS1tb3JlIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmlnaHQgUGFuZWxcbiAgICAudHJhY2tzIHtcbiAgICAgIC5yaWdodC1wYW5lbCB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggNjBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgIC50b3AtdHJhY2tzIHtcbiAgICAgICAgICBoNSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDU1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAgICAgICAgLy8gSG92ZXIgaW1hZ2VcblxuICAgICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmltYWdlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbWFnZTpob3ZlciBhIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaW1hZ2U6aG92ZXIgYSBzcGFuIHtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaW1hZ2UgYSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIEVuZCBob3ZlclxuXG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5hcnRpc3QtaW5mbyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zb25nIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYXJ0aXN0LW5hbWUge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnRpbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBNYWNib29rIDEzIC0gMTVcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcblxuICAvLyBQcm9maWxlXG4gIC5sb2dpbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxuICAgIC5idG4tbG9naW4ge1xuICAgICAgcGFkZGluZzogMTBweCAxODBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiOTU0O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgfVxuXG4gICAgLmJ0bi1sb2dpbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWJkNzYwO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIH1cblxuICAgIC5idG4tcmVnaXN0ZXIge1xuICAgICAgcGFkZGluZzogMTBweCAxNjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjNjE2NDY3O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1yZWdpc3Rlcjpob3ZlciB7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm9yLWxpbmUge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAub3Ige1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAubGluZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTgwcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW46IDAgMjBweDtcbiAgICB9XG4gIH1cblxuICAvLyBDb250ZW50XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuXG4gICAgLy8gTGVmdCBQYW5lbFxuXG4gICAgLmFydGlzdHMge1xuICAgICAgLmxlZnQtcGFuZWwge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG5cbiAgICAgICAgLnRvcC1hcnRpc3RzIHtcbiAgICAgICAgICBoNSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG5cbiAgICAgICAgICAgICAgLy8gSG92ZXIgaW1hZ2VcblxuICAgICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmltYWdlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbWFnZTpob3ZlciBhIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaW1hZ2U6aG92ZXIgYSBzcGFuIHtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmltYWdlIGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBFbmQgaG92ZXJcblxuXG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWUtbW9yZSB7XG4gICAgICBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJpZ2h0IFBhbmVsXG4gICAgLnRyYWNrcyB7XG4gICAgICAucmlnaHQtcGFuZWwge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweDtcblxuICAgICAgICAudG9wLXRyYWNrcyB7XG4gICAgICAgICAgaDUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA0MzBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgICAgICAgICAvLyBIb3ZlciBpbWFnZVxuXG4gICAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaW1hZ2U6aG92ZXIge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmltYWdlOmhvdmVyIGEge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbWFnZTpob3ZlciBhIHNwYW4ge1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbWFnZSBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gRW5kIGhvdmVyXG5cbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmFydGlzdC1pbmZvIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNvbmcge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcbiAgLmxvZ2luIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5sb2dpbiBpbWcge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5sb2dpbiAuYnRuLWxvZ2luIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYjk1NDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgfVxuICAubG9naW4gLmJ0bi1sb2dpbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiZDc2MDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIC5sb2dpbiAuYnRuLXJlZ2lzdGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIH1cbiAgLmxvZ2luIC5idG4tcmVnaXN0ZXIgYSB7XG4gICAgY29sb3I6ICM2MTY0Njc7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5sb2dpbiAuYnRuLXJlZ2lzdGVyOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIC5sb2dpbiAuYnRuLXJlZ2lzdGVyOmhvdmVyIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAubG9naW4gLm9yLWxpbmUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxvZ2luIC5vciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAubG9naW4gLmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgfVxuXG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIG1hcmdpbi10b3A6IDgwcHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiA3NnZoO1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMjBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1dncgIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC5hcnRpc3RzIC5sZWZ0LXBhbmVsIC50b3AtYXJ0aXN0cyBoNSB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwgLnRvcC1hcnRpc3RzIHVsIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwgLnRvcC1hcnRpc3RzIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAuYXJ0aXN0cyAubGVmdC1wYW5lbCAudG9wLWFydGlzdHMgdWwgbGkgLmltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC5hcnRpc3RzIC5sZWZ0LXBhbmVsIC50b3AtYXJ0aXN0cyB1bCBsaSAuaW1hZ2Ugc3BhbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwgLnRvcC1hcnRpc3RzIHVsIGxpIC5pbWFnZTpob3ZlciBpbWcge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwgLnRvcC1hcnRpc3RzIHVsIGxpIC5pbWFnZTpob3ZlciBhIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA1MDA7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAuYXJ0aXN0cyAubGVmdC1wYW5lbCAudG9wLWFydGlzdHMgdWwgbGkgLmltYWdlOmhvdmVyIGEgc3BhbiB7XG4gICAgdG9wOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC5hcnRpc3RzIC5sZWZ0LXBhbmVsIC50b3AtYXJ0aXN0cyB1bCBsaSAuaW1hZ2UgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC5hcnRpc3RzIC5sZWZ0LXBhbmVsIC50b3AtYXJ0aXN0cyB1bCBsaSBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwgLnRvcC1hcnRpc3RzIHVsIGxpIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLnNlZS1tb3JlIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAudHJhY2tzIC5yaWdodC1wYW5lbCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nOiAyMHB4IDYwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIGg1IHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAudHJhY2tzIC5yaWdodC1wYW5lbCAudG9wLXRyYWNrcyB1bCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1pbi13aWR0aDogNTUwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLnRyYWNrcyAucmlnaHQtcGFuZWwgLnRvcC10cmFja3MgdWwgbGkgLmltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIC5pbWFnZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAudHJhY2tzIC5yaWdodC1wYW5lbCAudG9wLXRyYWNrcyB1bCBsaSAuaW1hZ2U6aG92ZXIgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIC5pbWFnZTpob3ZlciBhIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA1MDA7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAudHJhY2tzIC5yaWdodC1wYW5lbCAudG9wLXRyYWNrcyB1bCBsaSAuaW1hZ2U6aG92ZXIgYSBzcGFuIHtcbiAgICB0b3A6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAudHJhY2tzIC5yaWdodC1wYW5lbCAudG9wLXRyYWNrcyB1bCBsaSAuaW1hZ2UgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIC5hcnRpc3QtaW5mbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAudHJhY2tzIC5yaWdodC1wYW5lbCAudG9wLXRyYWNrcyB1bCBsaSAuYXJ0aXN0LWluZm8gc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAudHJhY2tzIC5yaWdodC1wYW5lbCAudG9wLXRyYWNrcyB1bCBsaSAuYXJ0aXN0LWluZm8gLnNvbmcge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIC5hcnRpc3QtaW5mbyAuYXJ0aXN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIC50aW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgLmxvZ2luIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5sb2dpbiBpbWcge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5sb2dpbiAuYnRuLWxvZ2luIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYjk1NDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgfVxuICAubG9naW4gLmJ0bi1sb2dpbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiZDc2MDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIC5sb2dpbiAuYnRuLXJlZ2lzdGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIH1cbiAgLmxvZ2luIC5idG4tcmVnaXN0ZXIgYSB7XG4gICAgY29sb3I6ICM2MTY0Njc7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5sb2dpbiAuYnRuLXJlZ2lzdGVyOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIC5sb2dpbiAuYnRuLXJlZ2lzdGVyOmhvdmVyIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAubG9naW4gLm9yLWxpbmUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxvZ2luIC5vciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAubG9naW4gLmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgfVxuXG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwge1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC5hcnRpc3RzIC5sZWZ0LXBhbmVsIC50b3AtYXJ0aXN0cyBoNSB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwgLnRvcC1hcnRpc3RzIHVsIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwgLnRvcC1hcnRpc3RzIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwgLnRvcC1hcnRpc3RzIHVsIGxpIC5pbWFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAuYXJ0aXN0cyAubGVmdC1wYW5lbCAudG9wLWFydGlzdHMgdWwgbGkgLmltYWdlIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC5hcnRpc3RzIC5sZWZ0LXBhbmVsIC50b3AtYXJ0aXN0cyB1bCBsaSAuaW1hZ2U6aG92ZXIgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC5hcnRpc3RzIC5sZWZ0LXBhbmVsIC50b3AtYXJ0aXN0cyB1bCBsaSAuaW1hZ2U6aG92ZXIgYSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogNTAwO1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLmFydGlzdHMgLmxlZnQtcGFuZWwgLnRvcC1hcnRpc3RzIHVsIGxpIC5pbWFnZTpob3ZlciBhIHNwYW4ge1xuICAgIHRvcDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAuYXJ0aXN0cyAubGVmdC1wYW5lbCAudG9wLWFydGlzdHMgdWwgbGkgLmltYWdlIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAuYXJ0aXN0cyAubGVmdC1wYW5lbCAudG9wLWFydGlzdHMgdWwgbGkgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC5hcnRpc3RzIC5sZWZ0LXBhbmVsIC50b3AtYXJ0aXN0cyB1bCBsaSBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC5zZWUtbW9yZSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLnRyYWNrcyAucmlnaHQtcGFuZWwge1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLnRyYWNrcyAucmlnaHQtcGFuZWwgLnRvcC10cmFja3MgaDUge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLnRyYWNrcyAucmlnaHQtcGFuZWwgLnRvcC10cmFja3MgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWluLXdpZHRoOiA0MzBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQgLnRyYWNrcyAucmlnaHQtcGFuZWwgLnRvcC10cmFja3MgdWwgbGkgLmltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIC5pbWFnZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAudHJhY2tzIC5yaWdodC1wYW5lbCAudG9wLXRyYWNrcyB1bCBsaSAuaW1hZ2U6aG92ZXIgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIC5pbWFnZTpob3ZlciBhIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA1MDA7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAudHJhY2tzIC5yaWdodC1wYW5lbCAudG9wLXRyYWNrcyB1bCBsaSAuaW1hZ2U6aG92ZXIgYSBzcGFuIHtcbiAgICB0b3A6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAudHJhY2tzIC5yaWdodC1wYW5lbCAudG9wLXRyYWNrcyB1bCBsaSAuaW1hZ2UgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIC5hcnRpc3QtaW5mbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAudHJhY2tzIC5yaWdodC1wYW5lbCAudG9wLXRyYWNrcyB1bCBsaSAuYXJ0aXN0LWluZm8gc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCAudHJhY2tzIC5yaWdodC1wYW5lbCAudG9wLXRyYWNrcyB1bCBsaSAuYXJ0aXN0LWluZm8gLnNvbmcge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIC50cmFja3MgLnJpZ2h0LXBhbmVsIC50b3AtdHJhY2tzIHVsIGxpIC5hcnRpc3QtaW5mbyAuYXJ0aXN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgfVxufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1800px) {\n  .playlists {\n    min-height: 100vh;\n    padding: 100px !important;\n    width: 80% !important;\n    margin: 0 auto !important;\n  }\n  .playlists h3 {\n    margin-bottom: 50px;\n  }\n  .playlists .playlist-info {\n    padding: 10px;\n    width: 250px;\n    vertical-align: top;\n    font-size: 16px;\n    letter-spacing: 1.5px;\n    font-weight: 400;\n  }\n  .playlists .playlist-info img {\n    width: 230px;\n  }\n  .playlists .playlist-info img:hover {\n    opacity: 0.5;\n    transition-timing-function: ease;\n    transition: 0.4s;\n  }\n  .playlists .playlist-info .track {\n    margin-top: 20px;\n  }\n  .playlists .playlist-info .track .total {\n    font-size: 12px;\n  }\n}\n@media (min-width: 1025px) {\n  .playlists {\n    margin-left: 6vw;\n    min-height: 100vh;\n    padding: 100px 0px 100px 150px;\n  }\n  .playlists h3 {\n    margin-bottom: 50px;\n  }\n  .playlists .playlist-info {\n    padding: 10px;\n    width: 250px;\n    vertical-align: top;\n    font-size: 16px;\n    letter-spacing: 1.5px;\n    font-weight: 400;\n  }\n  .playlists .playlist-info img {\n    width: 230px;\n  }\n  .playlists .playlist-info img:hover {\n    opacity: 0.5;\n    transition-timing-function: ease-in-out;\n    transition: 0.4s;\n  }\n  .playlists .playlist-info .track {\n    margin-top: 20px;\n  }\n  .playlists .playlist-info .track .total {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSx5QkFBQTtFQ0FGO0VERUU7SUFDRSxtQkFBQTtFQ0FKO0VER0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7RUNESjtFREdJO0lBQ0UsWUFBQTtFQ0ROO0VESUk7SUFDRSxZQUFBO0lBQ0EsZ0NBQUE7SUFDQSxnQkFBQTtFQ0ZOO0VES0k7SUFDRSxnQkFBQTtFQ0hOO0VES007SUFDRSxlQUFBO0VDSFI7QUFDRjtBRFlBO0VBQ0U7SUFFRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsOEJBQUE7RUNYRjtFRGFFO0lBQ0UsbUJBQUE7RUNYSjtFRGNFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0VDWko7RURjSTtJQUNFLFlBQUE7RUNaTjtFRGVJO0lBQ0UsWUFBQTtJQUNBLHVDQUFBO0lBQ0EsZ0JBQUE7RUNiTjtFRGdCSTtJQUNFLGdCQUFBO0VDZE47RURnQk07SUFDRSxlQUFBO0VDZFI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0cy9wbGF5bGlzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpTWFjIDI3XG5AbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XG4gIC5wbGF5bGlzdHMge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cblxuICAgIC5wbGF5bGlzdC1pbmZvIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgfVxuXG4gICAgICBpbWc6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgfVxuXG4gICAgICAudHJhY2sge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgICAgIC50b3RhbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG4vLyBNYWNib29rIDEzIC0gMTVcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgLnBsYXlsaXN0cyB7XG5cbiAgICBtYXJnaW4tbGVmdDogNnZ3O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDEwMHB4IDBweCAxMDBweCAxNTBweDtcblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuXG4gICAgLnBsYXlsaXN0LWluZm8ge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICB9XG5cbiAgICAgIGltZzpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgfVxuXG4gICAgICAudHJhY2sge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgICAgIC50b3RhbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsIkBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcbiAgLnBsYXlsaXN0cyB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAucGxheWxpc3RzIGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG4gIC5wbGF5bGlzdHMgLnBsYXlsaXN0LWluZm8ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5wbGF5bGlzdHMgLnBsYXlsaXN0LWluZm8gaW1nIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gIH1cbiAgLnBsYXlsaXN0cyAucGxheWxpc3QtaW5mbyBpbWc6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICB9XG4gIC5wbGF5bGlzdHMgLnBsYXlsaXN0LWluZm8gLnRyYWNrIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC5wbGF5bGlzdHMgLnBsYXlsaXN0LWluZm8gLnRyYWNrIC50b3RhbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5wbGF5bGlzdHMge1xuICAgIG1hcmdpbi1sZWZ0OiA2dnc7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTAwcHggMHB4IDEwMHB4IDE1MHB4O1xuICB9XG4gIC5wbGF5bGlzdHMgaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgLnBsYXlsaXN0cyAucGxheWxpc3QtaW5mbyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLnBsYXlsaXN0cyAucGxheWxpc3QtaW5mbyBpbWcge1xuICAgIHdpZHRoOiAyMzBweDtcbiAgfVxuICAucGxheWxpc3RzIC5wbGF5bGlzdC1pbmZvIGltZzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICB9XG4gIC5wbGF5bGlzdHMgLnBsYXlsaXN0LWluZm8gLnRyYWNrIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC5wbGF5bGlzdHMgLnBsYXlsaXN0LWluZm8gLnRyYWNrIC50b3RhbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1800px) {\n  .recent {\n    min-height: 100vh;\n    padding: 100px;\n    width: 60%;\n    margin: 0 auto;\n  }\n  .recent h4 {\n    margin-left: 50px;\n    margin-bottom: 40px;\n  }\n  .recent img {\n    width: 50px;\n  }\n  .recent .recent-song ul li {\n    list-style: none;\n    padding: 8px 10px;\n  }\n  .recent .recent-song ul li .image {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .recent .recent-song ul li .image span {\n    font-size: 24px;\n  }\n  .recent .recent-song ul li .image:hover img {\n    opacity: 0.5;\n    transition-timing-function: ease-in;\n    transition: 0.4s;\n  }\n  .recent .recent-song ul li .image:hover a {\n    opacity: 1;\n    top: 0;\n    z-index: 500;\n  }\n  .recent .recent-song ul li .image:hover a span {\n    top: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    transform: translateY(-50%);\n  }\n  .recent .recent-song ul li .image a {\n    display: block;\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    text-align: center;\n    color: inherit;\n  }\n  .recent .recent-song ul li .info {\n    vertical-align: middle;\n    margin-left: 20px;\n    font-size: 16px;\n  }\n  .recent .recent-song ul li .info .artist-name {\n    font-size: 14px;\n  }\n  .recent .time {\n    font-size: 14px;\n  }\n}\n@media (min-width: 1025px) {\n  .recent {\n    min-height: 100vh;\n    padding: 100px;\n    width: 80%;\n    margin: 0 auto;\n  }\n  .recent h4 {\n    margin-left: 50px;\n    margin-bottom: 40px;\n  }\n  .recent img {\n    width: 50px;\n  }\n  .recent .recent-song ul li {\n    list-style: none;\n    padding: 8px 10px;\n  }\n  .recent .recent-song ul li .image {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .recent .recent-song ul li .image span {\n    font-size: 24px;\n  }\n  .recent .recent-song ul li .image:hover img {\n    opacity: 0.5;\n    transition-timing-function: ease-in;\n    transition: 0.4s;\n  }\n  .recent .recent-song ul li .image:hover a {\n    opacity: 1;\n    top: 0;\n    z-index: 500;\n  }\n  .recent .recent-song ul li .image:hover a span {\n    top: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    transform: translateY(-50%);\n  }\n  .recent .recent-song ul li .image a {\n    display: block;\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    text-align: center;\n    color: inherit;\n  }\n  .recent .recent-song ul li .info {\n    vertical-align: middle;\n    margin-left: 20px;\n    font-size: 16px;\n  }\n  .recent .recent-song ul li .info .artist-name {\n    font-size: 14px;\n  }\n  .recent .time {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC9yZWNlbnRzL3JlY2VudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlY2VudHMvcmVjZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUNBRjtFREVFO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQ0FKO0VER0U7SUFDRSxXQUFBO0VDREo7RURNTTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUNKUjtFRFFRO0lBQ0Usa0JBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7RUNOVjtFRFFVO0lBQ0UsZUFBQTtFQ05aO0VEV1U7SUFDRSxZQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQkFBQTtFQ1RaO0VEYVE7SUFDRSxVQUFBO0lBQ0EsTUFBQTtJQUNBLFlBQUE7RUNYVjtFRGNRO0lBQ0UsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtFQ1pWO0VEZVE7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQ2JWO0VEa0JRO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUNoQlY7RURrQlU7SUFDRSxlQUFBO0VDaEJaO0VEdUJFO0lBQ0UsZUFBQTtFQ3JCSjtBQUNGO0FENEJBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQzFCRjtFRDRCRTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7RUMxQko7RUQ2QkU7SUFDRSxXQUFBO0VDM0JKO0VEZ0NNO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQzlCUjtFRGtDUTtJQUNFLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0VDaENWO0VEa0NVO0lBQ0UsZUFBQTtFQ2hDWjtFRHFDVTtJQUNFLFlBQUE7SUFDQSxtQ0FBQTtJQUNBLGdCQUFBO0VDbkNaO0VEdUNRO0lBQ0UsVUFBQTtJQUNBLE1BQUE7SUFDQSxZQUFBO0VDckNWO0VEd0NRO0lBQ0UsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtFQ3RDVjtFRHlDUTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDdkNWO0VENENRO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUMxQ1Y7RUQ0Q1U7SUFDRSxlQUFBO0VDMUNaO0VEaURFO0lBQ0UsZUFBQTtFQy9DSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVjZW50cy9yZWNlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaU1hYyAyN1xuQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkge1xuICAucmVjZW50IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMDBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgaDQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICB9XG5cbiAgICAucmVjZW50LXNvbmcge1xuICAgICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcblxuICAgICAgICAgIC8vIEhvdmVyIGltYWdlXG5cbiAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltYWdlOmhvdmVyIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltYWdlOmhvdmVyIGEge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW1hZ2U6aG92ZXIgYSBzcGFuIHtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbWFnZSBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEVuZCBob3ZlclxuXG4gICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAgICAgICAuYXJ0aXN0LW5hbWUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpbWUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG59XG5cbi8vIE1hY2Jvb2sgMTMgLSAxNVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5yZWNlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDEwMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICBoNCB7XG4gICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cblxuICAgIC5yZWNlbnQtc29uZyB7XG4gICAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuXG4gICAgICAgICAgLy8gSG92ZXIgaW1hZ2VcblxuICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW1hZ2U6aG92ZXIge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW1hZ2U6aG92ZXIgYSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgei1pbmRleDogNTAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbWFnZTpob3ZlciBhIHNwYW4ge1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltYWdlIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRW5kIGhvdmVyXG5cbiAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgICAgICAgIC5hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGltZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG4iLCJAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XG4gIC5yZWNlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDEwMHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLnJlY2VudCBoNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuICAucmVjZW50IGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLnJlY2VudCAucmVjZW50LXNvbmcgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gIH1cbiAgLnJlY2VudCAucmVjZW50LXNvbmcgdWwgbGkgLmltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAucmVjZW50IC5yZWNlbnQtc29uZyB1bCBsaSAuaW1hZ2Ugc3BhbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5yZWNlbnQgLnJlY2VudC1zb25nIHVsIGxpIC5pbWFnZTpob3ZlciBpbWcge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICB9XG4gIC5yZWNlbnQgLnJlY2VudC1zb25nIHVsIGxpIC5pbWFnZTpob3ZlciBhIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA1MDA7XG4gIH1cbiAgLnJlY2VudCAucmVjZW50LXNvbmcgdWwgbGkgLmltYWdlOmhvdmVyIGEgc3BhbiB7XG4gICAgdG9wOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIC5yZWNlbnQgLnJlY2VudC1zb25nIHVsIGxpIC5pbWFnZSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG4gIC5yZWNlbnQgLnJlY2VudC1zb25nIHVsIGxpIC5pbmZvIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAucmVjZW50IC5yZWNlbnQtc29uZyB1bCBsaSAuaW5mbyAuYXJ0aXN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAucmVjZW50IC50aW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgLnJlY2VudCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAucmVjZW50IGg0IHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG4gIC5yZWNlbnQgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAucmVjZW50IC5yZWNlbnQtc29uZyB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgfVxuICAucmVjZW50IC5yZWNlbnQtc29uZyB1bCBsaSAuaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5yZWNlbnQgLnJlY2VudC1zb25nIHVsIGxpIC5pbWFnZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLnJlY2VudCAucmVjZW50LXNvbmcgdWwgbGkgLmltYWdlOmhvdmVyIGltZyB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gIH1cbiAgLnJlY2VudCAucmVjZW50LXNvbmcgdWwgbGkgLmltYWdlOmhvdmVyIGEge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDUwMDtcbiAgfVxuICAucmVjZW50IC5yZWNlbnQtc29uZyB1bCBsaSAuaW1hZ2U6aG92ZXIgYSBzcGFuIHtcbiAgICB0b3A6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgLnJlY2VudCAucmVjZW50LXNvbmcgdWwgbGkgLmltYWdlIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbiAgLnJlY2VudCAucmVjZW50LXNvbmcgdWwgbGkgLmluZm8ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5yZWNlbnQgLnJlY2VudC1zb25nIHVsIGxpIC5pbmZvIC5hcnRpc3QtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5yZWNlbnQgLnRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufSJdfQ== */");

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
    // Get Artist Profile
    getArtistProfile() {
        const id = this.artistId;
        const endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].spotifyApi.host + `artists/${id}`;
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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1800px) {\n  .artists {\n    min-height: 100vh;\n    width: 80% !important;\n    padding: 100px;\n    margin: 0 auto;\n  }\n  .artists h3 {\n    margin-left: 100px;\n    margin-bottom: 50px;\n  }\n  .artists .btn {\n    margin: 0px 5px;\n    background-color: Transparent;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    overflow: hidden;\n    color: gray;\n  }\n  .artists .btn:hover {\n    color: white;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n    text-decoration: underline;\n  }\n  .artists .four-weeks {\n    height: 100%;\n  }\n  .artists ul li {\n    list-style: none;\n    display: inline-block;\n    padding: 15px 25px;\n  }\n  .artists ul li .image {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .artists ul li .image span {\n    font-size: 30px;\n  }\n  .artists ul li .image:hover img {\n    opacity: 0.5;\n    transition-timing-function: ease-in;\n    transition: 0.4s;\n  }\n  .artists ul li .image:hover a {\n    opacity: 1;\n    top: 0;\n    z-index: 500;\n  }\n  .artists ul li .image:hover a span {\n    top: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    transform: translateY(-50%);\n  }\n  .artists ul li .image a {\n    display: block;\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    text-align: center;\n    color: inherit;\n  }\n  .artists ul li img {\n    width: 200px;\n    height: 200px;\n    border-radius: 200px;\n  }\n  .artists ul li a {\n    color: white;\n  }\n  .artists ul li p {\n    padding: 10px;\n  }\n}\n@media (min-width: 1025px) {\n  .artists {\n    min-height: 100vh;\n    padding: 100px;\n    margin: 0 auto;\n  }\n  .artists h3 {\n    margin-left: 100px;\n    margin-bottom: 50px;\n  }\n  .artists .btn {\n    margin: 0px 5px;\n    background-color: Transparent;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    overflow: hidden;\n    color: gray;\n  }\n  .artists .btn:hover {\n    color: white;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n    text-decoration: underline;\n  }\n  .artists .four-weeks {\n    height: 100%;\n  }\n  .artists ul li {\n    list-style: none;\n    display: inline-block;\n    padding: 15px 25px;\n  }\n  .artists ul li .image {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .artists ul li .image span {\n    font-size: 30px;\n  }\n  .artists ul li .image:hover img {\n    opacity: 0.5;\n    transition-timing-function: ease-in;\n    transition: 0.4s;\n  }\n  .artists ul li .image:hover a {\n    opacity: 1;\n    top: 0;\n    z-index: 500;\n  }\n  .artists ul li .image:hover a span {\n    top: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    transform: translateY(-50%);\n  }\n  .artists ul li .image a {\n    display: block;\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    text-align: center;\n    color: inherit;\n  }\n  .artists ul li img {\n    width: 200px;\n    height: 200px;\n    border-radius: 200px;\n  }\n  .artists ul li a {\n    color: white;\n  }\n  .artists ul li p {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC90b3AtYXJ0aXN0cy90b3AtYXJ0aXN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9wLWFydGlzdHMvdG9wLWFydGlzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0EscUJBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0FGO0VERUU7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VDQUo7RURHRTtJQUNFLGVBQUE7SUFDQSw2QkFBQTtJQUNBLDRCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0RKO0VESUU7SUFDRSxZQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQkFBQTtJQUNBLDBCQUFBO0VDRko7RURLRTtJQUNFLFlBQUE7RUNISjtFRFFJO0lBQ0UsZ0JBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0VDTk47RURVTTtJQUNFLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0VDUlI7RURVUTtJQUNFLGVBQUE7RUNSVjtFRGFRO0lBQ0UsWUFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0JBQUE7RUNYVjtFRGVNO0lBQ0UsVUFBQTtJQUNBLE1BQUE7SUFDQSxZQUFBO0VDYlI7RURnQk07SUFDRSxRQUFBO0lBQ0Esa0JBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0VDZFI7RURpQk07SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQ2ZSO0VEcUJNO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxvQkFBQTtFQ25CUjtFRHNCTTtJQUNFLFlBQUE7RUNwQlI7RUR5Qk07SUFDRSxhQUFBO0VDdkJSO0FBQ0Y7QURpQ0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7RUMvQkY7RURpQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VDL0JKO0VEa0NFO0lBQ0UsZUFBQTtJQUNBLDZCQUFBO0lBQ0EsNEJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDaENKO0VEbUNFO0lBQ0UsWUFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0JBQUE7SUFDQSwwQkFBQTtFQ2pDSjtFRG9DRTtJQUNFLFlBQUE7RUNsQ0o7RUR1Q0k7SUFDRSxnQkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7RUNyQ047RUR5Q007SUFDRSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtFQ3ZDUjtFRHlDUTtJQUNFLGVBQUE7RUN2Q1Y7RUQ0Q1E7SUFDRSxZQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQkFBQTtFQzFDVjtFRDhDTTtJQUNFLFVBQUE7SUFDQSxNQUFBO0lBQ0EsWUFBQTtFQzVDUjtFRCtDTTtJQUNFLFFBQUE7SUFDQSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7RUM3Q1I7RURnRE07SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQzlDUjtFRG1ETTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esb0JBQUE7RUNqRFI7RURvRE07SUFDRSxZQUFBO0VDbERSO0VEdURNO0lBQ0UsYUFBQTtFQ3JEUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdG9wLWFydGlzdHMvdG9wLWFydGlzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpTWFjIDI3XG5AbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XG4gIC5hcnRpc3RzIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cblxuICAgIC5idG46aG92ZXIge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgLmZvdXItd2Vla3Mge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIHVsIHtcblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcblxuICAgICAgICAvLyBIb3ZlciBpbWFnZVxuXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2U6aG92ZXIge1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlOmhvdmVyIGEge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZTpob3ZlciBhIHNwYW4ge1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZSBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW5kIGhvdmVyXG5cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIHAge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG5cblxuLy8gTWFjYm9vayAxMyAtIDE1XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5hcnRpc3RzIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuXG4gICAgLmJ0bjpob3ZlciB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAuZm91ci13ZWVrcyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgdWwge1xuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xuXG4gICAgICAgIC8vIEhvdmVyIGltYWdlXG5cbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZTpob3ZlciB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2U6aG92ZXIgYSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgei1pbmRleDogNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlOmhvdmVyIGEgc3BhbiB7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbmQgaG92ZXJcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIHAge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG59XG4iLCJAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XG4gIC5hcnRpc3RzIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmFydGlzdHMgaDMge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG4gIC5hcnRpc3RzIC5idG4ge1xuICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG4gIC5hcnRpc3RzIC5idG46aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIC5hcnRpc3RzIC5mb3VyLXdlZWtzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgfVxuICAuYXJ0aXN0cyB1bCBsaSAuaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5hcnRpc3RzIHVsIGxpIC5pbWFnZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkgLmltYWdlOmhvdmVyIGltZyB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkgLmltYWdlOmhvdmVyIGEge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDUwMDtcbiAgfVxuICAuYXJ0aXN0cyB1bCBsaSAuaW1hZ2U6aG92ZXIgYSBzcGFuIHtcbiAgICB0b3A6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkgLmltYWdlIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkgaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgfVxuICAuYXJ0aXN0cyB1bCBsaSBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkgcCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAuYXJ0aXN0cyB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmFydGlzdHMgaDMge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG4gIC5hcnRpc3RzIC5idG4ge1xuICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG4gIC5hcnRpc3RzIC5idG46aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIC5hcnRpc3RzIC5mb3VyLXdlZWtzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgfVxuICAuYXJ0aXN0cyB1bCBsaSAuaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5hcnRpc3RzIHVsIGxpIC5pbWFnZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkgLmltYWdlOmhvdmVyIGltZyB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkgLmltYWdlOmhvdmVyIGEge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDUwMDtcbiAgfVxuICAuYXJ0aXN0cyB1bCBsaSAuaW1hZ2U6aG92ZXIgYSBzcGFuIHtcbiAgICB0b3A6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkgLmltYWdlIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkgaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgfVxuICAuYXJ0aXN0cyB1bCBsaSBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmFydGlzdHMgdWwgbGkgcCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1800px) {\n  .tracks {\n    min-height: 100vh;\n    padding: 100px;\n    width: 60%;\n    margin: 0 auto;\n  }\n  .tracks .time {\n    font-size: 14px;\n  }\n  .tracks h3 {\n    margin-bottom: 50px;\n    margin-left: 40px;\n  }\n  .tracks .btn {\n    margin: 0px 5px;\n    background-color: Transparent;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    overflow: hidden;\n    color: gray;\n  }\n  .tracks .btn:hover {\n    color: white;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n    text-decoration: underline;\n  }\n  .tracks ul {\n    margin-top: 30px;\n  }\n  .tracks ul li {\n    list-style: none;\n    margin-top: 30px;\n  }\n  .tracks ul li .image {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .tracks ul li .image span {\n    font-size: 24px;\n  }\n  .tracks ul li .image:hover img {\n    opacity: 0.5;\n    transition-timing-function: ease-in;\n    transition: 0.4s;\n  }\n  .tracks ul li .image:hover a {\n    opacity: 1;\n    top: 0;\n    z-index: 500;\n  }\n  .tracks ul li .image:hover a span {\n    top: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    transform: translateY(-50%);\n  }\n  .tracks ul li .image a {\n    display: block;\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    text-align: center;\n    color: inherit;\n  }\n  .tracks ul li img {\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n  }\n  .tracks ul li .artist-info {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .tracks ul li .artist-info span {\n    margin-left: 10px;\n  }\n  .tracks ul li .artist-info .song {\n    font-size: 16px;\n  }\n  .tracks ul li .artist-info .artist-name {\n    font-size: 14px;\n    color: #9b9b9b;\n  }\n}\n@media (min-width: 1025px) {\n  .tracks {\n    min-height: 100vh;\n    padding: 100px;\n    width: 80%;\n    margin: 0 auto;\n  }\n  .tracks .time {\n    font-size: 14px;\n  }\n  .tracks h3 {\n    margin-bottom: 50px;\n    margin-left: 40px;\n  }\n  .tracks .btn {\n    margin: 0px 5px;\n    background-color: Transparent;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    overflow: hidden;\n    color: gray;\n  }\n  .tracks .btn:hover {\n    color: white;\n    transition-timing-function: ease-in;\n    transition: 0.3s;\n    text-decoration: underline;\n  }\n  .tracks ul {\n    margin-top: 30px;\n  }\n  .tracks ul li {\n    list-style: none;\n    margin-top: 30px;\n  }\n  .tracks ul li .image {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .tracks ul li .image span {\n    font-size: 24px;\n  }\n  .tracks ul li .image:hover img {\n    opacity: 0.5;\n    transition-timing-function: ease-in;\n    transition: 0.4s;\n  }\n  .tracks ul li .image:hover a {\n    opacity: 1;\n    top: 0;\n    z-index: 500;\n  }\n  .tracks ul li .image:hover a span {\n    top: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    transform: translateY(-50%);\n  }\n  .tracks ul li .image a {\n    display: block;\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    text-align: center;\n    color: inherit;\n  }\n  .tracks ul li img {\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n  }\n  .tracks ul li .artist-info {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .tracks ul li .artist-info span {\n    margin-left: 10px;\n  }\n  .tracks ul li .artist-info .song {\n    font-size: 16px;\n  }\n  .tracks ul li .artist-info .artist-name {\n    font-size: 14px;\n    color: #9b9b9b;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC90b3AtdHJhY2tzL3RvcC10cmFja3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvcC10cmFja3MvdG9wLXRyYWNrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUNBRjtFREVFO0lBQ0UsZUFBQTtFQ0FKO0VER0U7SUFDRSxtQkFBQTtJQUNBLGlCQUFBO0VDREo7RURJRTtJQUNFLGVBQUE7SUFDQSw2QkFBQTtJQUNBLDRCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0ZKO0VES0U7SUFDRSxZQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQkFBQTtJQUNBLDBCQUFBO0VDSEo7RURPRTtJQUNFLGdCQUFBO0VDTEo7RURPSTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUNMTjtFRFNNO0lBQ0Usa0JBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7RUNQUjtFRFNRO0lBQ0UsZUFBQTtFQ1BWO0VEWVE7SUFDRSxZQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQkFBQTtFQ1ZWO0VEY007SUFDRSxVQUFBO0lBQ0EsTUFBQTtJQUNBLFlBQUE7RUNaUjtFRGVNO0lBQ0UsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtFQ2JSO0VEZ0JNO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUNkUjtFRG1CTTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EscUJBQUE7RUNqQlI7RURvQk07SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0VDbEJSO0VEb0JRO0lBQ0UsaUJBQUE7RUNsQlY7RURxQlE7SUFDRSxlQUFBO0VDbkJWO0VEc0JRO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUNwQlY7QUFDRjtBRDhCQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUM1QkY7RUQ4QkU7SUFDRSxlQUFBO0VDNUJKO0VEK0JFO0lBQ0UsbUJBQUE7SUFDQSxpQkFBQTtFQzdCSjtFRGdDRTtJQUNFLGVBQUE7SUFDQSw2QkFBQTtJQUNBLDRCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQzlCSjtFRGlDRTtJQUNFLFlBQUE7SUFDQSxtQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsMEJBQUE7RUMvQko7RURtQ0U7SUFDRSxnQkFBQTtFQ2pDSjtFRG1DSTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUNqQ047RURxQ007SUFDRSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtFQ25DUjtFRHFDUTtJQUNFLGVBQUE7RUNuQ1Y7RUR3Q1E7SUFDRSxZQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQkFBQTtFQ3RDVjtFRDBDTTtJQUNFLFVBQUE7SUFDQSxNQUFBO0lBQ0EsWUFBQTtFQ3hDUjtFRDJDTTtJQUNFLFFBQUE7SUFDQSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7RUN6Q1I7RUQ0Q007SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQzFDUjtFRCtDTTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EscUJBQUE7RUM3Q1I7RURnRE07SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0VDOUNSO0VEZ0RRO0lBQ0UsaUJBQUE7RUM5Q1Y7RURpRFE7SUFDRSxlQUFBO0VDL0NWO0VEa0RRO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUNoRFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RvcC10cmFja3MvdG9wLXRyYWNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlNYWMgMjdcbkBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcbiAgLnRyYWNrcyB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIC50aW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuXG4gICAgLmJ0bjpob3ZlciB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cblxuICAgIHVsIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgICAvLyBIb3ZlciBpbWFnZVxuXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2U6aG92ZXIge1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlOmhvdmVyIGEge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZTpob3ZlciBhIHNwYW4ge1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZSBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW5kIGhvdmVyXG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFydGlzdC1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNvbmcge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5cbi8vIE1hY2Jvb2sgMTMgLSAxNVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAudHJhY2tzIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMDBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLnRpbWUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB9XG5cbiAgICAuYnRuIHtcbiAgICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG5cbiAgICAuYnRuOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuXG4gICAgdWwge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgIC8vIEhvdmVyIGltYWdlXG5cbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZTpob3ZlciB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2U6aG92ZXIgYSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgei1pbmRleDogNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlOmhvdmVyIGEgc3BhbiB7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbmQgaG92ZXJcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuYXJ0aXN0LWluZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc29uZyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFydGlzdC1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCJAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XG4gIC50cmFja3Mge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDEwMHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLnRyYWNrcyAudGltZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC50cmFja3MgaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cbiAgLnRyYWNrcyAuYnRuIHtcbiAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuICAudHJhY2tzIC5idG46aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIC50cmFja3MgdWwge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC50cmFja3MgdWwgbGkgLmltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAudHJhY2tzIHVsIGxpIC5pbWFnZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSAuaW1hZ2U6aG92ZXIgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgfVxuICAudHJhY2tzIHVsIGxpIC5pbWFnZTpob3ZlciBhIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA1MDA7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSAuaW1hZ2U6aG92ZXIgYSBzcGFuIHtcbiAgICB0b3A6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSAuaW1hZ2UgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICAudHJhY2tzIHVsIGxpIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAudHJhY2tzIHVsIGxpIC5hcnRpc3QtaW5mbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSAuYXJ0aXN0LWluZm8gc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSAuYXJ0aXN0LWluZm8gLnNvbmcge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAudHJhY2tzIHVsIGxpIC5hcnRpc3QtaW5mbyAuYXJ0aXN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAudHJhY2tzIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMDBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC50cmFja3MgLnRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAudHJhY2tzIGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB9XG4gIC50cmFja3MgLmJ0biB7XG4gICAgbWFyZ2luOiAwcHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cbiAgLnRyYWNrcyAuYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAudHJhY2tzIHVsIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC50cmFja3MgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICAudHJhY2tzIHVsIGxpIC5pbWFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSAuaW1hZ2Ugc3BhbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC50cmFja3MgdWwgbGkgLmltYWdlOmhvdmVyIGltZyB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSAuaW1hZ2U6aG92ZXIgYSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogNTAwO1xuICB9XG4gIC50cmFja3MgdWwgbGkgLmltYWdlOmhvdmVyIGEgc3BhbiB7XG4gICAgdG9wOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIC50cmFja3MgdWwgbGkgLmltYWdlIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSAuYXJ0aXN0LWluZm8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC50cmFja3MgdWwgbGkgLmFydGlzdC1pbmZvIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC50cmFja3MgdWwgbGkgLmFydGlzdC1pbmZvIC5zb25nIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnRyYWNrcyB1bCBsaSAuYXJ0aXN0LWluZm8gLmFydGlzdC1uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM5YjliOWI7XG4gIH1cbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1025px) {\n  #profile img {\n    width: 150px;\n    border-radius: 75px;\n    margin-top: 80px;\n  }\n  #profile i {\n    border: 2px solid white;\n    border-radius: 80px;\n    margin-top: 80px;\n    font-size: 80px;\n    padding: 30px;\n  }\n  #profile h1 {\n    font-size: 50px;\n    font-weight: 700;\n    margin-top: 20px;\n  }\n  #profile ul {\n    margin-top: 20px;\n  }\n  #profile ul li {\n    margin: 0px 15px;\n  }\n  #profile ul li h5 {\n    color: #1db954;\n    font-size: 20px;\n    font-weight: 700;\n  }\n  #profile ul li p {\n    text-transform: uppercase;\n    font-size: 12px;\n    color: #9b9b9b;\n    letter-spacing: 1.5px;\n    font-weight: 300;\n  }\n  #profile button {\n    font-size: 12px;\n    margin-top: 5px;\n    font-weight: 700;\n    padding: 10px 30px;\n    border-radius: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaGFubmd1eWVuL0Rlc2t0b3Avc3BvdGlmeV9wcm9qZWN0L3Nwb3RpZnkvc3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJO0lBQ0UsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNESjtFRElFO0lBQ0UsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7RUNGSjtFREtFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUNISjtFRE1FO0lBQ0UsZ0JBQUE7RUNKSjtFRE1JO0lBQ0UsZ0JBQUE7RUNKTjtFRE1NO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ0pSO0VET007SUFDRSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtFQ0xSO0VEVUU7SUFDRSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ1JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICNwcm9maWxlIHtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA3NXB4O1xuICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICB9XG5cbiAgICBpIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICBwYWRkaW5nOiAzMHB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcblxuICAgICAgICBoNSB7XG4gICAgICAgICAgY29sb3I6ICMxZGI5NTQ7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB9XG4gIH1cblxufVxuIiwiQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAjcHJvZmlsZSBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3NXB4O1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gIH1cbiAgI3Byb2ZpbGUgaSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG4gICNwcm9maWxlIGgxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gICNwcm9maWxlIHVsIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gICNwcm9maWxlIHVsIGxpIHtcbiAgICBtYXJnaW46IDBweCAxNXB4O1xuICB9XG4gICNwcm9maWxlIHVsIGxpIGg1IHtcbiAgICBjb2xvcjogIzFkYjk1NDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAjcHJvZmlsZSB1bCBsaSBwIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICAjcHJvZmlsZSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgfVxufSJdfQ== */");

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
    loginUrl: "http://localhost:8000/login",
    spotifyApi: {
        host: "https://api.spotify.com/v1/",
    },
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