import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photos } from '../../interface/photo/photo';
import { PhotosService } from '../../service/photo/photos.service';

@Injectable({
  providedIn: 'platform'
})
export class PhotoListResolver implements Resolve<Observable<Photos>> {
  constructor(private photoService: PhotosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photos> {
    const userName = route.params?.['userName'];
    return this.photoService.findByPhotoTouser(userName);
  }
}
