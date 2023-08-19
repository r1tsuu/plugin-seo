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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMetaImageField = exports.MetaImage = void 0;
var react_1 = __importStar(require("react"));
var forms_1 = require("payload/components/forms");
var utilities_1 = require("payload/components/utilities");
var Input_1 = __importDefault(require("payload/dist/admin/components/forms/field-types/Upload/Input"));
var Pill_1 = require("../ui/Pill");
var MetaImage = function (props) {
    var _a = props || {}, label = _a.label, relationTo = _a.relationTo, fieldTypes = _a.fieldTypes, name = _a.name, pluginConfig = _a.pluginConfig, admin = _a.admin; // TODO: this typing is temporary until payload types are updated for custom field props
    var field = (0, forms_1.useField)(props);
    var locale = (0, utilities_1.useLocale)();
    var fields = (0, forms_1.useAllFormFields)()[0];
    var docInfo = (0, utilities_1.useDocumentInfo)();
    var value = field.value, setValue = field.setValue, showError = field.showError;
    var regenerateImage = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var generateImage, generatedImage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    generateImage = pluginConfig.generateImage;
                    if (!(typeof generateImage === 'function')) return [3 /*break*/, 2];
                    return [4 /*yield*/, generateImage(__assign(__assign({}, docInfo), { doc: __assign({}, fields), locale: locale }))];
                case 1:
                    generatedImage = _a.sent();
                    _a.label = 2;
                case 2:
                    setValue(generatedImage);
                    return [2 /*return*/];
            }
        });
    }); }, [fields, setValue, pluginConfig, locale, docInfo]);
    var hasImage = Boolean(value);
    var config = (0, utilities_1.useConfig)();
    var collections = config.collections, serverURL = config.serverURL, _b = config.routes, _c = _b === void 0 ? {} : _b, api = _c.api;
    var collection = (collections === null || collections === void 0 ? void 0 : collections.find(function (coll) { return coll.slug === relationTo; })) || undefined;
    return (react_1.default.createElement("div", { style: {
            marginBottom: '20px',
        } },
        react_1.default.createElement("div", { style: {
                marginBottom: '5px',
                position: 'relative',
            } },
            react_1.default.createElement("div", null,
                label && typeof label === 'string' && label,
                typeof pluginConfig.generateImage === 'function' && (react_1.default.createElement(react_1.default.Fragment, null,
                    "\u00A0 \u2014 \u00A0",
                    react_1.default.createElement("button", { onClick: regenerateImage, type: "button", style: {
                            padding: 0,
                            background: 'none',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            color: 'currentcolor',
                        } }, "Auto-generate")))),
            typeof pluginConfig.generateImage === 'function' && (react_1.default.createElement("div", { style: {
                    color: '#9A9A9A',
                } }, "Auto-generation will retrieve the selected hero image."))),
        react_1.default.createElement("div", { style: {
                marginBottom: '10px',
                position: 'relative',
            } },
            react_1.default.createElement(Input_1.default, { path: name, fieldTypes: fieldTypes, name: name, relationTo: relationTo, description: admin === null || admin === void 0 ? void 0 : admin.description, value: value, onChange: function (incomingImage) {
                    if (incomingImage !== null) {
                        var incomingID = incomingImage.id;
                        setValue(incomingID);
                    }
                    else {
                        setValue(null);
                    }
                }, label: undefined, showError: showError, api: api, collection: collection, serverURL: serverURL, filterOptions: {}, style: {
                    marginBottom: 0,
                } })),
        react_1.default.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                width: '100%',
            } },
            react_1.default.createElement(Pill_1.Pill, { backgroundColor: hasImage ? 'green' : 'red', color: "white", label: hasImage ? 'Добре' : 'Зображення відсутнє' }))));
};
exports.MetaImage = MetaImage;
var getMetaImageField = function (props) { return react_1.default.createElement(exports.MetaImage, __assign({}, props)); };
exports.getMetaImageField = getMetaImageField;
//# sourceMappingURL=MetaImage.js.map