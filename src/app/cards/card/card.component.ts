import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() post: {
    title: string;
    imageUrl: string;
    username: string;
    content: string;
  } = { title: '', imageUrl: '', username: '', content: '' };
  constructor() {}

  ngOnInit(): void {}
}
