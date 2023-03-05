import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  private _icon!: IconProp;

  private _context!: string | number;
  private _style: string = '';

  constructor(
    private library: FaIconLibrary
  ) {
    library.addIcons(faComment, faHeart);
  }

  get icon(): IconProp {
    return this._icon;
  }

  @Input('classIcon')
  set icon(value: IconProp) {
    this._icon = value;
  }

  get context(): string | number {
    return this._context;
  }

  @Input('context')
  set context(value: string | number) {
    this._context = value;
  }

  get style(): string {
    return this._style;
  }

  @Input('styleIcon')
  set style(value: string) {
    this._style = value;
  }
}
