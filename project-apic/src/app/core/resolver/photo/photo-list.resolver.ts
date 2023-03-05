import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photos } from '../../interface/photo/photo';
import { PhotoService } from '../../service/photo/photo.service';

@Injectable({
  providedIn: 'platform'
})
export class PhotoListResolver implements Resolve<Observable<Photos>> {
  constructor(private photoService: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photos> {
    const userName = route.params?.['userName'];
    const page = route.params?.['page'];
    return this.photoService.findByPhotoPageToUser(userName, 1);
  }
}
