"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormat = exports.spaceSplit = exports.minorUnit = exports.combinationFromArrayToStr = exports.cut = void 0;
const dayjs = require("dayjs");
require("dayjs/locale/ja");
dayjs.locale('ja');
exports.cut = (str, limit = 20, decoration = "・・・") => {
    if (limit >= str.length) {
        return str;
    }
    return str.substr(0, limit) + decoration;
};
exports.combinationFromArrayToStr = (list, key = "", decoration = "/") => {
    if (!Array.isArray(list)) {
        return "";
    }
    return list.reduce((x, y, idx) => {
        if (key) {
            return idx === 0 ? y[key] : x + decoration + y[key];
        }
        return idx === 0 ? y : x + decoration + y;
    }, "");
};
exports.minorUnit = (val, prefix = "￥") => {
    if (!val) {
        return "";
    }
    return prefix + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
exports.spaceSplit = (val) => {
    if (!val) {
        return "";
    }
    return val.split(" ");
};
exports.dateFormat = (val, format = "YYYY/MM/DD") => {
    if (!val) {
        return "";
    }
    if (!isNaN(val)) {
        val = Number(val);
    }
    const date = dayjs(new Date(val));
    if (date.isValid()) {
        return date.format(format);
    }
    return "";
};
//# sourceMappingURL=filter.js.map