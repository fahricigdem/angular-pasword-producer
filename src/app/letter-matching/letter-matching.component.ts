import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-letter-matching',
  templateUrl: './letter-matching.component.html',
  styleUrls: ['./letter-matching.component.css'],
})
export class LetterMatchingComponent implements OnInit {
  randomText = faker.lorem.sentence();
  inputText: string = '';
  cssClass: string;

  @ViewChild('nameInputRef') nameInputRef: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  changeText() {
    this.randomText = faker.lorem.sentence();
    this.nameInputRef.nativeElement.value = '';
    this.inputText = '';
  }

  handleInput(value: string) {
    this.inputText = value;
  }
  getClass(randomLetter: string, inputLetter: string) {
    if (inputLetter == undefined) {
      return 'blue';
    }
    return randomLetter == inputLetter ? 'green' : 'red';
  }
}
