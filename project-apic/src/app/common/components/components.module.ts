import { NgModule } from '@angular/core';
import { DefaultModule } from '../../core/module/default/default.module';
import { MenuModule } from './menu/menu.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    DefaultModule,
    MenuModule
  ],
    exports: [MenuModule, ButtonComponent]
})
export class ComponentsModule {
}
