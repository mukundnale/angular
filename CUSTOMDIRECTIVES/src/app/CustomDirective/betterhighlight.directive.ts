import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  @Input() defautColor: string = 'transparent';
  @Input('appBetterhighlight') highlightColor: string = 'pink';
  @Input() title: string = 'Title';

  @HostBinding('style.backgroundColor') background: string = this.defautColor;
  @HostBinding('style.border') border: string = 'none';

  ngOnInit(){
    this.background = this.defautColor;
  }

  @HostListener('mouseenter') mouseenter(){
    this.background = this.highlightColor;
    this.border = 'red 2px solid';
  }

  @HostListener('mouseleave') mouseleave(){
    this.background = this.defautColor;
    this.border = 'none';
  }

}
