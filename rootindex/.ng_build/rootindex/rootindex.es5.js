import { Component, NgModule } from '@angular/core';
var ToxicComponent = /** @class */ (function () {
    function ToxicComponent() {
    }
    return ToxicComponent;
}());
ToxicComponent.decorators = [
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                declarations: [ToxicComponent],
                exports: [ToxicComponent]
            },] },
];
/**
 * @nocollapse
 */
MyModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ToxicComponent, MyModule };
//# sourceMappingURL=rootindex.es5.js.map
