import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { DefaultModule } from '../../core/module/default/default.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    DefaultModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
