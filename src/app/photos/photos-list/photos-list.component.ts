import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../../core/interface/photo/photo';
import { PhotosService } from '../../core/service/photo/photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit{
  private _photos$!: Observable<Photos>;

  constructor(
    private photoService: PhotosService
  ) {}

  get photos$(): Observable<Photos> {
    return this._photos$;
  }

  ngOnInit(): void {
    this._photos$ = this.photoService.findByPhotoTouser('flavio');
  }

}
