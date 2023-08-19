"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pill = void 0;
var react_1 = __importDefault(require("react"));
var Pill = function (props) {
    var backgroundColor = props.backgroundColor, color = props.color, label = props.label;
    return (react_1.default.createElement("div", { style: {
            padding: '4px 6px',
            backgroundColor: backgroundColor,
            color: color,
            borderRadius: '2px',
            marginRight: '10px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            lineHeight: 1,
        } },
        react_1.default.createElement("small", null, label)));
};
exports.Pill = Pill;
//# sourceMappingURL=Pill.js.map