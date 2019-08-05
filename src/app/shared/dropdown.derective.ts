import { Directive, HostListener, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    // @HostListener('click') toggleOpen(eventData: Event){
    //     this.isOpen = !this.isOpen;
// }
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    // console.log("event.target :" + event.target);
    // console.log('this.elRef.nativeElement: ' + this.elRef.nativeElement)
  }

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
  constructor(private elRef: ElementRef) {}
}
