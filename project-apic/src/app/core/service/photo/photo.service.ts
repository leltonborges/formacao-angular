import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Photos } from '../../interface/photo/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private urlBaseAPI: string = environment.urlBaseAPI;

  constructor(
    private httpClient: HttpClient
  ) { }

  findByPhotoTouser(userName: string): Observable<Photos> {
    return this.httpClient.get<Photos>(`${ this.urlBaseAPI }/${ userName }/photos`);
  }

  findByPhotoPageToUser(userName: string, page: number): Observable<Photos> {
    const params = new HttpParams().append('page', page);
    return this.httpClient
        .get<Photos>(`${ this.urlBaseAPI }/${ userName }/photos`, { params: params });
  }
}
