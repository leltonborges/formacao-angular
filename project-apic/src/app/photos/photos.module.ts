import { NgModule } from '@angular/core';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoComponent } from './photo/photo.component';
import { PhotosService } from '../core/service/photo/photos.service';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { ServiceDefaultModule } from '../core/module/default/service-default.module';

@NgModule({
  declarations: [PhotoComponent, PhotosListComponent],
  providers: [
    PhotosService
  ],
  imports: [
    ServiceDefaultModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule {
}
