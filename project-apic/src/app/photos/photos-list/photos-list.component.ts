import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Photos } from '../../core/interface/photo/photo';
import { PhotosService } from '../../core/service/photo/photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  photoList!: Photos;
  private _photos$!: Observable<Photos>;
  private _searchPhotos: string = '';

  constructor(
    private photoService: PhotosService,
    private route: ActivatedRoute
  ) {}

  get photos$(): Observable<Photos> {
    return this._photos$;
  }

  get searchPhotos(): string {
    return this._searchPhotos;
  }

  setSearchPhotos(value: string) {
    this._searchPhotos = value;
  }

  ngOnInit(): void {
    const userName = this.route.snapshot.params?.['userName'];
    this._photos$ = this.photoService.findByPhotoTouser(userName);
    this._photos$.subscribe(v => this.photoList = v);
  }
}
