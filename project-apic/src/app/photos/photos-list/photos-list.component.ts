import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../../core/interface/photo/photo';
import { PhotosService } from '../../core/service/photo/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
             selector: 'app-photos-list',
             templateUrl: './photos-list.component.html',
             styleUrls: ['./photos-list.component.scss']
           })
export class PhotosListComponent implements OnInit {
  constructor(
    private photoService: PhotosService,
    private route: ActivatedRoute
  ) {}

  private _photos$!: Observable<Photos>;

  get photos$(): Observable<Photos> {
    return this._photos$;
  }

  ngOnInit(): void {
    const userName = this.route.snapshot.params?.['userName'];
    this._photos$ = this.photoService.findByPhotoTouser(userName);
  }

}
