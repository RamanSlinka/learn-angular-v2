import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {


  @Input('appStyle') color: string = 'green'
  @Input() dStyles: { border?: string, fontWeight?: string, borderRadius?: string }

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'red')
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.element.nativeElement, 'border', this.dStyles.border);
    this.renderer.setStyle(this.element.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    this.renderer.setStyle(this.element.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'color', null);
    this.renderer.setStyle(this.element.nativeElement, 'border', null);
    this.renderer.setStyle(this.element.nativeElement, 'fontWeight', null);
    this.renderer.setStyle(this.element.nativeElement, 'borderRadius', null);
  }
}
