"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var MetaDescription_1 = require("./fields/MetaDescription");
var MetaImage_1 = require("./fields/MetaImage");
var MetaTitle_1 = require("./fields/MetaTitle");
var Overview_1 = require("./ui/Overview");
var Preview_1 = require("./ui/Preview");
var seo = function (pluginConfig) {
    return function (config) {
        var _a, _b;
        var seoFields = [
            {
                name: 'meta',
                label: 'SEO',
                type: 'group',
                fields: __spreadArray(__spreadArray(__spreadArray([
                    {
                        name: 'overview',
                        label: 'Overview',
                        type: 'ui',
                        admin: {
                            components: {
                                Field: Overview_1.Overview,
                            },
                        },
                    },
                    {
                        name: 'title',
                        type: 'text',
                        localized: true,
                        label: 'Заголовок',
                        admin: {
                            components: {
                                Field: function (props) { return (0, MetaTitle_1.getMetaTitleField)(__assign(__assign({}, props), { pluginConfig: pluginConfig })); },
                            },
                        },
                    },
                    {
                        name: 'description',
                        type: 'textarea',
                        localized: true,
                        label: 'Опис',
                        admin: {
                            components: {
                                Field: function (props) { return (0, MetaDescription_1.getMetaDescriptionField)(__assign(__assign({}, props), { pluginConfig: pluginConfig })); },
                            },
                        },
                    }
                ], ((pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.uploadsCollection)
                    ? [
                        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                        {
                            name: 'image',
                            label: 'Мета-зображення',
                            type: 'upload',
                            localized: true,
                            relationTo: pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.uploadsCollection,
                            admin: {
                                description: 'Максимальний розмір файлу для завантаження: 12 МБ. Рекомендований розмір файлу для зображень - менше 500 КБ',
                                components: {
                                    Field: function (props) { return (0, MetaImage_1.getMetaImageField)(__assign(__assign({}, props), { pluginConfig: pluginConfig })); },
                                },
                            },
                        },
                    ]
                    : []), true), ((pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.fields) || []), true), [
                    {
                        name: 'preview',
                        label: 'Preview',
                        type: 'ui',
                        admin: {
                            components: {
                                Field: function (props) { return (0, Preview_1.getPreviewField)(__assign(__assign({}, props), { pluginConfig: pluginConfig })); },
                            },
                        },
                    },
                ], false),
            },
        ];
        return __assign(__assign({}, config), { collections: ((_a = config.collections) === null || _a === void 0 ? void 0 : _a.map(function (collection) {
                var _a, _b, _c, _d, _e, _f;
                var slug = collection.slug;
                var isEnabled = (_a = pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.collections) === null || _a === void 0 ? void 0 : _a.includes(slug);
                if (isEnabled) {
                    if (pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.tabbedUI) {
                        var seoTabs = [
                            {
                                type: 'tabs',
                                tabs: __spreadArray(__spreadArray([], (((_b = collection === null || collection === void 0 ? void 0 : collection.fields) === null || _b === void 0 ? void 0 : _b[0].type) === 'tabs'
                                    ? (_c = collection.fields[0]) === null || _c === void 0 ? void 0 : _c.tabs
                                    : [
                                        {
                                            label: ((_d = collection === null || collection === void 0 ? void 0 : collection.labels) === null || _d === void 0 ? void 0 : _d.singular) || 'Content',
                                            fields: __spreadArray([], ((collection === null || collection === void 0 ? void 0 : collection.fields) || []), true),
                                        },
                                    ]), true), [
                                    {
                                        label: 'SEO',
                                        fields: seoFields,
                                    },
                                ], false),
                            },
                        ];
                        return __assign(__assign({}, collection), { fields: __spreadArray(__spreadArray([], seoTabs, true), (((_e = collection === null || collection === void 0 ? void 0 : collection.fields) === null || _e === void 0 ? void 0 : _e[0].type) === 'tabs' ? (_f = collection === null || collection === void 0 ? void 0 : collection.fields) === null || _f === void 0 ? void 0 : _f.slice(1) : []), true) });
                    }
                    return __assign(__assign({}, collection), { fields: __spreadArray(__spreadArray([], ((collection === null || collection === void 0 ? void 0 : collection.fields) || []), true), seoFields, true) });
                }
                return collection;
            })) || [], globals: ((_b = config.globals) === null || _b === void 0 ? void 0 : _b.map(function (global) {
                var _a, _b, _c, _d, _e;
                var slug = global.slug;
                var isEnabled = (_a = pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.globals) === null || _a === void 0 ? void 0 : _a.includes(slug);
                if (isEnabled) {
                    if (pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.tabbedUI) {
                        var seoTabs = [
                            {
                                type: 'tabs',
                                tabs: __spreadArray(__spreadArray([], (((_b = global === null || global === void 0 ? void 0 : global.fields) === null || _b === void 0 ? void 0 : _b[0].type) === 'tabs'
                                    ? (_c = global.fields[0]) === null || _c === void 0 ? void 0 : _c.tabs
                                    : [
                                        {
                                            label: (global === null || global === void 0 ? void 0 : global.label) || 'Content',
                                            fields: __spreadArray([], ((global === null || global === void 0 ? void 0 : global.fields) || []), true),
                                        },
                                    ]), true), [
                                    {
                                        label: 'SEO',
                                        fields: seoFields,
                                    },
                                ], false),
                            },
                        ];
                        return __assign(__assign({}, global), { fields: __spreadArray(__spreadArray([], seoTabs, true), (((_d = global === null || global === void 0 ? void 0 : global.fields) === null || _d === void 0 ? void 0 : _d[0].type) === 'tabs' ? (_e = global === null || global === void 0 ? void 0 : global.fields) === null || _e === void 0 ? void 0 : _e.slice(1) : []), true) });
                    }
                    return __assign(__assign({}, global), { fields: __spreadArray(__spreadArray([], ((global === null || global === void 0 ? void 0 : global.fields) || []), true), seoFields, true) });
                }
                return global;
            })) || [] });
    };
};
exports.default = seo;
//# sourceMappingURL=index.js.map