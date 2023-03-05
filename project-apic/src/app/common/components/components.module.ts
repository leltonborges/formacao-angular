import { NgModule } from '@angular/core';
import { DefaultModule } from '../../core/module/default/default.module';
import { MenuModule } from './menu/menu.module';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { DirectiveModule } from '../directive/directive.module';

@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent
  ],
  imports: [
    DefaultModule,
    MenuModule,
    DirectiveModule
  ],
    exports: [MenuModule, ButtonComponent, IconComponent]
})
export class ComponentsModule {
}
