import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class SetbackgroundDirective implements OnInit{ 
  
    constructor(private element: ElementRef){
        // element.nativeElement.style.backgroundColor = '#CBE6C9';
        this.element = element;
    }

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = '#CBE6C9';
    }

}