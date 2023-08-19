"use strict";
'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreviewField = exports.Preview = void 0;
var react_1 = __importStar(require("react"));
var forms_1 = require("payload/components/forms");
var utilities_1 = require("payload/components/utilities");
var Preview = function (props) {
    var _a = (props || {}).pluginConfig, generateURL = _a.generateURL, uploadsCollection = _a.uploadsCollection; // TODO: this typing is temporary until payload types are updated for custom field props;
    var locale = (0, utilities_1.useLocale)();
    var fields = (0, forms_1.useAllFormFields)()[0];
    var docInfo = (0, utilities_1.useDocumentInfo)();
    var _b = (0, react_1.useState)(null), metaImage = _b[0], setMetaImage = _b[1];
    var _c = fields["meta.title"], _d = _c === void 0 ? {} : _c, metaTitle = _d.value, _e = fields["meta.description"], _f = _e === void 0 ? {} : _e, metaDescription = _f.value, _g = fields["meta.image"], _h = _g === void 0 ? {} : _g, metaImageId = _h.value;
    var _j = (0, react_1.useState)(), href = _j[0], setHref = _j[1];
    (0, react_1.useEffect)(function () {
        var getHref = function () { return __awaiter(void 0, void 0, void 0, function () {
            var newHref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof generateURL === 'function' && !href)) return [3 /*break*/, 2];
                        return [4 /*yield*/, generateURL(__assign(__assign({}, docInfo), { doc: { fields: fields }, locale: locale }))];
                    case 1:
                        newHref = _a.sent();
                        setHref(newHref);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        getHref();
    }, [generateURL, fields, href, locale, docInfo]);
    (0, react_1.useEffect)(function () {
        var getMetaImage = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, metaImage_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(uploadsCollection && metaImageId)) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch("/api/".concat(uploadsCollection, "/").concat(metaImageId))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        metaImage_1 = _a.sent();
                        if (metaImage_1 === null || metaImage_1 === void 0 ? void 0 : metaImage_1.url)
                            return [2 /*return*/, setMetaImage(metaImage_1.url)];
                        _a.label = 3;
                    case 3:
                        if (metaImage)
                            setMetaImage(null);
                        return [2 /*return*/];
                }
            });
        }); };
        getMetaImage();
    }, [metaImageId, uploadsCollection]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null, "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434"),
        react_1.default.createElement("div", { style: {
                marginBottom: '5px',
                color: '#9A9A9A',
            } }, "\u0422\u043E\u0447\u043D\u0456 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438 \u043C\u043E\u0436\u0443\u0442\u044C \u0432\u0456\u0434\u0440\u0456\u0437\u043D\u044F\u0442\u0438\u0441\u044F \u0432 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0456\u0434 \u0432\u043C\u0456\u0441\u0442\u0443 \u0442\u0430 \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u043E\u0441\u0442\u0456 \u043F\u043E\u0448\u0443\u043A\u0443."),
        react_1.default.createElement("div", { style: {
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                pointerEvents: 'none',
                maxWidth: '600px',
                width: '100%',
                background: 'var(--theme-elevation-50)',
            } },
            react_1.default.createElement("div", null,
                react_1.default.createElement("a", { href: href, style: {
                        textDecoration: 'none',
                    } }, href || 'https://...')),
            react_1.default.createElement("h4", { style: {
                    margin: 0,
                } },
                react_1.default.createElement("a", { href: "/", style: {
                        textDecoration: 'none',
                    } }, metaTitle)),
            react_1.default.createElement("p", { style: {
                    margin: 0,
                } }, metaDescription),
            metaImage && (react_1.default.createElement("div", { className: "thumbnail thumbnail--size-medium" },
                react_1.default.createElement("img", { src: metaImage, alt: "meta-image" }))))));
};
exports.Preview = Preview;
var getPreviewField = function (props) { return react_1.default.createElement(exports.Preview, __assign({}, props)); };
exports.getPreviewField = getPreviewField;
//# sourceMappingURL=Preview.js.map