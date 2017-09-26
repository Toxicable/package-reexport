import { NgModule , Component} from '@angular/core';

@Component({
    selector: 'toxic-component',
    template: 'I am a lib'
})
export class ToxicComponent{}


@NgModule({
    declarations: [ToxicComponent],
    exports: [ ToxicComponent]
})
export class MyModule{}