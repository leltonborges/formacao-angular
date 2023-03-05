import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule
  ]
})
export class DefaultModule {
}
