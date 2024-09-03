import {Directive, ElementRef, OnInit, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[customButton]'
})
export class CustomButtonDirective{


  constructor(private el: ElementRef,
              private rend: Renderer2) {
  }

  @HostListener('mouseenter')
  onHover() {
    this.changeElementShadow('0 5px 9px 1px rgba(130, 19, 40, 0.5)');
  }
  @HostListener('mouseleave')
  outHover() {
    this.changeElementShadow('none');
  }

  changeElementShadow(value: string){
    this.rend.setStyle(this.el.nativeElement, 'box-shadow', value);

  }
}
