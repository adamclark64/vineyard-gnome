"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require('assert');
const onlyFirst = [];
const onlySecond = [];
const differences = [];
const same = [];
function checkValues(obj1, obj2, originalObj1, originalObj2) {
    for (var key in obj1) {
        if (typeof obj1[key] === 'object')
            checkValues(obj1[key], obj2[key], obj1, obj2);
        if ('object' && obj2 == undefined || obj1.hasOwnProperty(key) !== obj2.hasOwnProperty(key)) {
            // console.log(paths([], {}, obj1, obj1[key]));
            onlyFirst.push({ path: paths([], {}, originalObj1, key), value: obj1[key] });
            break;
        }
        if (obj1[key] != obj2[key]) {
            differences.push({ first: { path: key, value: obj1[key] }, second: { path: key, value: obj2[key] } });
        }
        if (obj1[key] == obj2[key]) {
            same.push({ first: { path: key, value: obj1[key] }, second: { path: key, value: obj2[key] } });
        }
    }
    for (var key in obj2) {
        if (typeof (obj1[key]) == 'undefined' || obj2.hasOwnProperty(key) !== obj1.hasOwnProperty(key)) {
            console.log(getObjectPath(key, obj1));
            onlySecond.push({ path: key, value: obj2[key] });
        }
    }
    return {
        differences: differences,
        same: same,
        onlyFirst: onlyFirst,
        onlySecond: onlySecond,
    };
}
exports.checkValues = checkValues;
;
function paths(root = [], result = {}, obj, key) {
    var ok = Object.keys(this);
    return ok.reduce((res, key) => {
        var path = root.concat(key);
        typeof this[key] === "object" &&
            this[key] !== null ? this[key].paths(path, res)
            : res[this[key]] == 0 || res[this[key]] ? res[this[key]].push(path)
                : res[this[key]] = [path];
        return res;
    }, result);
}
exports.paths = paths;
;
function getOnlyFirstValues(obj1, obj2, key, path) {
    if ('object' && obj2 == undefined || obj1.hasOwnProperty(key) !== obj2.hasOwnProperty(key)) {
        onlyFirst.push({ path: path, value: obj1[key] });
        return false;
    }
    else {
        return true;
    }
}
exports.getOnlyFirstValues = getOnlyFirstValues;
function getOnlySecondValues(obj1, obj2, key, rootName, path) {
    if ('object' && obj2 == undefined || obj1.hasOwnProperty(key) !== obj2.hasOwnProperty(key)) {
        onlySecond.push({ path: path, value: obj2[key] });
    }
}
exports.getOnlySecondValues = getOnlySecondValues;
function getDifferentValues(obj1, obj2, key, path1, path2) {
    if (!obj1 || !obj2 || !obj1[key] || !obj2[key])
        return false;
    if (obj1[key] != obj2[key]) {
        differences.push({ first: { path: path1, value: obj1[key] }, second: { path: path2, value: obj2[key] } });
    }
}
exports.getDifferentValues = getDifferentValues;
function getSameValues(obj1, obj2, key, path1, path2) {
    if (!obj1 || !obj2)
        return;
    if (obj1[key] == obj2[key]) {
        same.push({ first: { path: path1, value: obj1[key] }, second: { path: path2, value: obj2[key] } });
    }
}
exports.getSameValues = getSameValues;
//# sourceMappingURL=diffy.js.map