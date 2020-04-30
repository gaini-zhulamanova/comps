import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items = [];

  openedItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {
    // if the current index equals to the opened item index, then collapse the item => make not active
    if(index === this.openedItemIndex){
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }

}
