import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;

  items = [
    { title: 'Why is sky blue?', content: 'Because.' },
    { title: 'What does an orange taste like?', content: 'Like an orange.' },
    { title: 'What color is that cat?', content: 'Black.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
