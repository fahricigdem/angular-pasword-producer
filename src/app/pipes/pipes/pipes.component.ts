import { Component, OnInit } from '@angular/core';

type Lesson={
  name:string;
  subject:string;
  lehrer:string;
  money?:number;
};

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  name: string = '';
  date:string='';
  money:number=0;
  height:number=0;
  miles:number=0;

  myLesson:Lesson={
    name:"Math",
    subject:"integral",
    lehrer:"Onur Sezai"
    
  }
  constructor() {}

  ngOnInit(): void {}

  handleNameInput(value: string) {
    this.name = value;
  }

  handleDateInput(value: string) {
    this.date = value;
  }

  handleMoneyInput(value: string) {
    this.money = parseFloat(value);
  }

  handleHeightInput(value: string) {
    this.height = parseFloat(value);
  }

  handleMilesInput(value: string) {
    this.miles = parseFloat(value);
  }


}
