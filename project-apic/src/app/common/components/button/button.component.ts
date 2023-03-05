import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  private _hasMore: boolean = false;

  get hasMore() : boolean {
    return this._hasMore;
  }

  @Input('hasMore')
  set hasMore(value : boolean) {
    this._hasMore = value;
  }
}
