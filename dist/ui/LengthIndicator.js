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
exports.LengthIndicator = void 0;
var react_1 = __importStar(require("react"));
var Pill_1 = require("./Pill");
var LengthIndicator = function (props) {
    var text = props.text, _a = props.minLength, minLength = _a === void 0 ? 0 : _a, _b = props.maxLength, maxLength = _b === void 0 ? 0 : _b;
    var _c = (0, react_1.useState)({
        color: '',
        backgroundColor: '',
    }), labelStyle = _c[0], setLabelStyle = _c[1];
    var _d = (0, react_1.useState)(''), label = _d[0], setLabel = _d[1];
    var _e = (0, react_1.useState)(0), barWidth = _e[0], setBarWidth = _e[1];
    (0, react_1.useEffect)(function () {
        var textLength = (text === null || text === void 0 ? void 0 : text.length) || 0;
        if (textLength === 0) {
            setLabel('Відсутнє');
            setLabelStyle({
                backgroundColor: 'red',
                color: 'white',
            });
            setBarWidth(0);
        }
        else {
            var progress = (textLength - minLength) / (maxLength - minLength);
            if (progress < 0) {
                var ratioUntilMin = textLength / minLength;
                if (ratioUntilMin > 0.9) {
                    setLabel('Майже готово');
                    setLabelStyle({
                        backgroundColor: 'orange',
                        color: 'white',
                    });
                }
                else {
                    setLabel('Занадто коротко');
                    setLabelStyle({
                        backgroundColor: 'orangered',
                        color: 'white',
                    });
                }
                setBarWidth(ratioUntilMin);
            }
            if (progress >= 0 && progress <= 1) {
                setLabel('Добре');
                setLabelStyle({
                    backgroundColor: 'green',
                    color: 'white',
                });
                setBarWidth(progress);
            }
            if (progress > 1) {
                setLabel('Занадто довго');
                setLabelStyle({
                    backgroundColor: 'red',
                    color: 'white',
                });
                setBarWidth(1);
            }
        }
    }, [minLength, maxLength, text]);
    var textLength = (text === null || text === void 0 ? void 0 : text.length) || 0;
    var charsUntilMax = maxLength - textLength;
    var charsUntilMin = minLength - textLength;
    return (react_1.default.createElement("div", { style: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
        } },
        react_1.default.createElement(Pill_1.Pill, { label: label, color: labelStyle.color, backgroundColor: labelStyle.backgroundColor }),
        react_1.default.createElement("div", { style: {
                marginRight: '10px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                lineHeight: 1,
            } },
            react_1.default.createElement("small", null, "".concat((text === null || text === void 0 ? void 0 : text.length) || 0, "/").concat(minLength, "-").concat(maxLength, " \u0441\u0438\u043C\u0432., "),
                (textLength === 0 || charsUntilMin > 0) && (react_1.default.createElement(react_1.Fragment, null, "".concat(charsUntilMin, " \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C"))),
                charsUntilMin <= 0 && charsUntilMax >= 0 && (react_1.default.createElement(react_1.Fragment, null, "".concat(charsUntilMax, " \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u0449\u0454"))),
                charsUntilMax < 0 && react_1.default.createElement(react_1.Fragment, null, "".concat(charsUntilMax * -1, " \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432 \u0437\u0430\u0439\u0432\u0456")))),
        react_1.default.createElement("div", { style: {
                height: '2px',
                width: '100%',
                backgroundColor: '#F3F3F3',
                position: 'relative',
            } },
            react_1.default.createElement("div", { style: {
                    height: '100%',
                    width: "".concat(barWidth * 100, "%"),
                    backgroundColor: labelStyle.backgroundColor,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                } }))));
};
exports.LengthIndicator = LengthIndicator;
//# sourceMappingURL=LengthIndicator.js.map