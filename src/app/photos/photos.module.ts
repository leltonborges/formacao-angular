import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoComponent } from './photo/photo.component';


@NgModule({
  declarations: [PhotoComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ],
  exports: [PhotoComponent]
})
export class PhotosModule {
}
