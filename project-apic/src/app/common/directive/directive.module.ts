import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleColorDirective } from './style-color/style-color.directive';

@NgModule({
  declarations: [
    StyleColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ StyleColorDirective]
})
export class DirectiveModule {
}
