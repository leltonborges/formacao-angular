import { Pipe, PipeTransform } from '@angular/core';
import { Photos } from '../../../core/interface/photo/photo';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photos, photoSearch: string): Photos {
    if (photoSearch)
      return photos.filter(p => p.description.toLowerCase().includes(photoSearch.toLowerCase()));
    return photos;
  }

}
