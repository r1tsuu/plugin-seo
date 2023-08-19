"use strict";
'use client';
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overview = void 0;
var react_1 = __importStar(require("react"));
var forms_1 = require("payload/components/forms");
var defaults_1 = require("../defaults");
var _a = defaults_1.defaults.title, minTitle = _a.minLength, maxTitle = _a.maxLength, _b = defaults_1.defaults.description, minDesc = _b.minLength, maxDesc = _b.maxLength;
var Overview = function () {
    var _a = (0, forms_1.useForm)(), dispatchFields = _a.dispatchFields, getFields = _a.getFields;
    var _b = (0, forms_1.useAllFormFields)()[0], _c = _b["meta.title"], _d = _c === void 0 ? {} : _c, metaTitle = _d.value, _e = _b["meta.description"], _f = _e === void 0 ? {} : _e, metaDesc = _f.value, _g = _b["meta.image"], _h = _g === void 0 ? {} : _g, metaImage = _h.value;
    var _j = (0, react_1.useState)(), titleIsValid = _j[0], setTitleIsValid = _j[1];
    var _k = (0, react_1.useState)(), descIsValid = _k[0], setDescIsValid = _k[1];
    var _l = (0, react_1.useState)(), imageIsValid = _l[0], setImageIsValid = _l[1];
    var resetAll = (0, react_1.useCallback)(function () {
        var fields = getFields();
        var fieldsWithoutMeta = fields;
        fieldsWithoutMeta['meta.title'].value = '';
        fieldsWithoutMeta['meta.description'].value = '';
        fieldsWithoutMeta['meta.image'].value = '';
        // dispatchFields(fieldsWithoutMeta);
    }, [getFields]);
    (0, react_1.useEffect)(function () {
        if (typeof metaTitle === 'string')
            setTitleIsValid(metaTitle.length >= minTitle && metaTitle.length <= maxTitle);
        if (typeof metaDesc === 'string')
            setDescIsValid(metaDesc.length >= minDesc && metaDesc.length <= maxDesc);
        setImageIsValid(Boolean(metaImage));
    }, [metaTitle, metaDesc, metaImage]);
    var testResults = [titleIsValid, descIsValid, imageIsValid];
    var numberOfPasses = testResults.filter(Boolean).length;
    return (react_1.default.createElement("div", { style: {
            marginBottom: '20px',
        } },
        react_1.default.createElement("div", null, "".concat(numberOfPasses, "/").concat(testResults.length, " \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043E\u043A \u043F\u0440\u043E\u0439\u0448\u043B\u0438 \u0443\u0441\u043F\u0456\u0448\u043D\u043E"))));
};
exports.Overview = Overview;
//# sourceMappingURL=Overview.js.map