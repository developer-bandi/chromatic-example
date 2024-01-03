"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSame = void 0;
var objectSame = function (targetA, targetB) {
    var entriesA = Object.entries(targetA).sort(function (_a, _b) {
        var keyA = _a[0];
        var keyB = _b[0];
        if (keyA > keyB)
            return -1;
        if (keyA < keyB)
            return 1;
        return 0;
    });
    var entriesB = Object.entries(targetB).sort(function (_a, _b) {
        var keyA = _a[0];
        var keyB = _b[0];
        if (keyA > keyB)
            return -1;
        if (keyA < keyB)
            return 1;
        return 0;
    });
    if (entriesA.length !== entriesB.length)
        return false;
    for (var i = 0; i < entriesA.length; i++) {
        var _a = entriesA[i], keyA = _a[0], valueA = _a[1];
        var _b = entriesB[i], keyB = _b[0], valueB = _b[1];
        if (keyA !== keyB)
            return false;
        if (typeof valueA !== typeof valueB)
            return false;
        if (typeof valueA === "object" &&
            valueA !== null &&
            typeof valueB === "object" &&
            valueB !== null) {
            return objectSame(valueA, valueB);
        }
        if (!Object.is(valueA, valueB))
            return false;
    }
    return true;
};
var isSame = function (targetA, targetB) {
    // Object.is로 동등 비교
    if (Object.is(targetA, targetB))
        return true;
    // 객체가 타입이 아닌경우 거짓
    if (typeof targetA !== "object" ||
        targetA === null ||
        typeof targetB !== "object" ||
        targetB === null) {
        return false;
    }
    return objectSame(targetA, targetB);
    // 객체비교
};
exports.isSame = isSame;
var targetA = {
    name: "foo",
    age: "25",
    country: {
        nation: "대한민국",
        staion: "경상남도",
    },
};
var targetB = {
    name: "foo",
    age: "25",
    country: {
        nation: "대한민국",
        staion: "경상남도",
    },
};
console.log((0, exports.isSame)(targetA, targetB));
