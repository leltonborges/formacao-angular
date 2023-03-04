import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoListResolver } from '../core/resolver/photo/photo-list.resolver';

const routes: Routes = [
  {
    path: ':userName',
    component: PhotosListComponent,
    resolve: {
      photosResolve: PhotoListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule {
}
