(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.rootindex = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var ToxicComponent = /** @class */ (function () {
    function ToxicComponent() {
    }
    return ToxicComponent;
}());
ToxicComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'toxic-component',
                template: 'I am a lib'
            },] },
];
/**
 * @nocollapse
 */
ToxicComponent.ctorParameters = function () { return []; };
var MyModule = /** @class */ (function () {
    function MyModule() {
    }
    return MyModule;
}());
MyModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [ToxicComponent],
                exports: [ToxicComponent]
            },] },
];
/**
 * @nocollapse
 */
MyModule.ctorParameters = function () { return []; };

exports.ToxicComponent = ToxicComponent;
exports.MyModule = MyModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rootindex.umd.js.map
