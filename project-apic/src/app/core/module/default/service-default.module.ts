import { NgModule } from '@angular/core';
import { DefaultModule } from './default.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    DefaultModule,
    HttpClientModule
  ],
  exports: [
    DefaultModule,
    HttpClientModule
  ]
})
export class ServiceDefaultModule {
}
