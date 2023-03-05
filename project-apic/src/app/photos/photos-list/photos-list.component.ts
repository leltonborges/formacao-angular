import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photos } from '../../core/interface/photo/photo';
import { PhotoService } from '../../core/service/photo/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  private _userName!: string;
  private _currentPage: number = 1;
  private _hasMore: boolean = false;
  private _filter: string = '';
  private _searchPhotos: string = '';
  photoList!: Photos;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  get hasMore(): boolean {
    return this._hasMore;
  }

  get filter(): string {
    return this._filter;
  }

  get searchPhotos(): string {
    return this._searchPhotos;
  }

  setSearchPhotos(value: string) {
    this._searchPhotos = value;
  }

  ngOnInit(): void {
    this.photoList = this.route.snapshot.data['photosResolve'];
    this._userName = this.route.snapshot.params['userName'];
    if (this.photoList.length) this._hasMore = true;
  }

  loadPage() {
    this.photoService.findByPhotoPageToUser(this._userName, ++this._currentPage)
        .subscribe({
          next: pts => {
            this._filter = '';
            this.photoList.push(...pts);
            if (!pts.length) this._hasMore = false;
          }
        });
  }

}
