import { Component, NgModule } from '@angular/core';

class ToxicComponent {
}
ToxicComponent.decorators = [
    { type: Component, args: [{
                selector: 'toxic-component',
                template: 'I am a lib'
            },] },
];
/**
 * @nocollapse
 */
ToxicComponent.ctorParameters = () => [];
class MyModule {
}
MyModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ToxicComponent],
                exports: [ToxicComponent]
            },] },
];
/**
 * @nocollapse
 */
MyModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ToxicComponent, MyModule };
//# sourceMappingURL=rootindex.js.map
