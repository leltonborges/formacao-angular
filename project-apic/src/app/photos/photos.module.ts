import { NgModule } from '@angular/core';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoComponent } from './photo/photo.component';
import { PhotoService } from '../core/service/photo/photo.service';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { ServiceDefaultModule } from '../core/module/default/service-default.module';
import { CommonModule as CommonCustomModule } from '../common/common.module';
import { ResolverModule } from '../core/resolver/resolver.module';
import { PhotoListResolver } from '../core/resolver/photo/photo-list.resolver';
import { PhotosCardComponent } from './photos-card/photos-card.component';

@NgModule({
  declarations: [PhotoComponent, PhotosListComponent, PhotosCardComponent],
  providers: [
    PhotoService,
    PhotoListResolver
  ],
  imports: [
    ServiceDefaultModule,
    PhotosRoutingModule,
    CommonCustomModule,
    ResolverModule
  ]
})
export class PhotosModule {
}
