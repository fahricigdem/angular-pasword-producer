import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor(private element:ElementRef) { 
    console.log("first directive: red");
    this.element.nativeElement.style.backgroundColor='red';
  }
  @Input() set myVariable(parametrem:string){
    console.log("parametrem: " + parametrem);
    this.element.nativeElement.style.backgroundColor=parametrem;

  }

}
