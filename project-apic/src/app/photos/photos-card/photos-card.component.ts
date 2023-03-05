import { Component, Input } from '@angular/core';
import { Photo } from '../../core/interface/photo/photo';

@Component({
  selector: 'app-photos-card',
  templateUrl: './photos-card.component.html',
  styleUrls: ['./photos-card.component.scss']
})
export class PhotosCardComponent {
  private _photo!: Photo;

  get photo() : Photo {
    return this._photo;
  }

  @Input('photo')
  set photo(value : Photo) {
    this._photo = value;
  }
}
