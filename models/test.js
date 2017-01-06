/**
 * Created by Beso on 1/6/2017.
 */
"use strict";
var Test = (function () {
    function Test() {
    }
    Test.prototype.TestMethod = function () {
        return 'aaaaaa';
    };
    Test.Create = function () {
        return new Test();
    };
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=test.js.map