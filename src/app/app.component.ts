import { Component, OnInit } from '@angular/core';
import { PhotosService } from './core/service/photo/photos.service';
import { Observable } from 'rxjs';
import { Photos } from './core/interface/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{}
