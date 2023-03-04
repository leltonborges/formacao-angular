import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photos } from '../../core/interface/photo/photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  photoList!: Photos;

  constructor(
    private route: ActivatedRoute
  ) {}

  private _searchPhotos: string = '';

  get searchPhotos(): string {
    return this._searchPhotos;
  }

  setSearchPhotos(value: string) {
    this._searchPhotos = value;
  }

  ngOnInit(): void {
    this.photoList = this.route.snapshot.data['photosResolve'];
  }

}
