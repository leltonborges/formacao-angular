import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleColor]'
})
export class StyleColorDirective implements OnInit{
  private _styleColor = '';

  constructor(private el: ElementRef,
              private _render: Renderer2) {
  }

  @Input('colorStyle')
  set styleColor(value: string) {
    this._styleColor = value;
  }

  ngOnInit(): void {
    this._render.setStyle(this.el.nativeElement, 'color', this._styleColor)
  }
}
