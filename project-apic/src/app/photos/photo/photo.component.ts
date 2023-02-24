import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  private _url!: string;

  get url(): string {
    return this._url;
  }

  @Input("url")
  set url(url: string) {
    this._url = url;
  }

  private _description!: string;

  get description(): string {
    return this._description;
  }

  @Input("description")
  set description(value: string){
    this._description = value;
  }
}
