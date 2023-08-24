import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-infos',
  templateUrl: './general-infos.component.html',
  styleUrls: ['./general-infos.component.css']
})
export class GeneralInfosComponent implements OnInit {
  data=[
    {label:"Customer", value:50},
    {label:"Ciro", value:3550},
    {label:"Comments", value:83}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
