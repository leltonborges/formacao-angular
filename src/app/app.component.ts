import { Component, OnInit } from '@angular/core';
import { PhotosService } from './core/service/photo/photos.service';
import { Observable } from 'rxjs';
import { Photos } from './core/interface/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
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
