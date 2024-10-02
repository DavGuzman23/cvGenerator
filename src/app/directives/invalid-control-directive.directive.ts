import { Directive, ElementRef, Renderer2, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInvalidControl]'
})
export class InvalidControlDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2, 
    @Optional() @Self() private control: NgControl)
    { if (!this.control) {
      throw new Error('NgControl not found');
    }}

  ngOnInit() {
    this.control.statusChanges?.subscribe(status => {
      if (status === 'INVALID' && this.control.touched) {
        this.renderer.addClass(this.el.nativeElement, 'is-invalid');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'is-invalid');
      }
    });
  }
}
