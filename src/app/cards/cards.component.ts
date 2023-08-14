import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  posts = [
    {
      title: 'Dağ Bisikleti',
      imageUrl: '/assets/card-images/biking.jpeg',
      username: 'cbdag',
      content: 'Çok hizli sürdüm',
    },
    {
      title: 'Tirmaniş',
      imageUrl: 'assets/card-images/mountain.jpeg',
      username: 'cbuludag',
      content: 'Bugünde iyi tirmandim',
    },
    {
      title: 'Doğa Yürüyüşü',
      imageUrl: 'assets/card-images/tree.jpeg',
      username: 'cbdoga',
      content: 'Hadi biraz Maçka Parkinda turlayalim',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
