import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // parent component (mods-home) is listening to this property
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
    // console.log(this.el.nativeElement);
   }

  ngOnInit() {
    // append the modal to the body
    document.body.appendChild(this.el.nativeElement);
  } 

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  // on click emit the property 'close' to the parent component
  onCloseClick() {
    this.close.emit();
  }

}
