import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  togleModalShow(){
    this.close.emit();
  }
}
