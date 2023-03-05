import { NgModule } from '@angular/core';

import { ErrorsRoutingModule } from './errors-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DefaultModule } from '../../core/module/default/default.module';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    DefaultModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule {}
