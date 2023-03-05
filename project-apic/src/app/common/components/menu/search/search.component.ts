import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy, OnInit {
  @Output('OnSearchPhoto')
  onSearchPhoto = new EventEmitter<string>();
  @Input('value')
  value!: string;
  private _debounce$: Subject<string> = new Subject<string>();

  get debounce$(): Subject<string> {
    return this._debounce$;
  }

  ngOnDestroy(): void {
    this._debounce$.unsubscribe();
  }

  ngOnInit(): void {
    this._debounce$
        .pipe(debounceTime(800))
        .subscribe(value => this.onSearchPhoto.emit(value));
  }
}
