import { NgModule } from '@angular/core';
import { DefaultModule } from '../../core/module/default/default.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [],
  imports: [
    DefaultModule,
    MenuModule
  ],
  exports: [MenuModule]
})
export class ComponentsModule {
}
