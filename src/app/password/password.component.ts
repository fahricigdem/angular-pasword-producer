import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  title = 'password';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  buttonClick() {
    this.password = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!$%&#^*';
    let characterPool = '';
    if (this.isAlphabet) {
      characterPool = alphabet;
    }
    if (this.isNumbers) {
      characterPool += numbers;
    }
    if (this.isSymbols) {
      characterPool += symbols;
    }
    if (characterPool.length == 0) {
      return;
    }
    for (let index = 0; index < this.length; index++) {
      let randomCharIndex = Math.floor(Math.random() * characterPool.length);
      this.password += characterPool[randomCharIndex];
    }
  }
  isButtonDisabled(): boolean {
    return (
      this.length == 0 || !(this.isAlphabet || this.isNumbers || this.isSymbols)
    );
  }
  getPassword() {
    return this.password;
  }

  getName() {
    return 'Tekin';
  }

  isAlphabet: boolean = false;
  useAlphabet() {
    this.isAlphabet = !this.isAlphabet;
  }
  isNumbers: boolean = false;
  useNumbers() {
    this.isNumbers = !this.isNumbers;
  }
  isSymbols: boolean = false;
  useSymbols() {
    this.isSymbols = !this.isSymbols;
  }
  length: number = 0;
  changeLength(value: string) {
    const parsedValue: number = parseInt(value);
    debugger;
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else {
      this.length = 0;
    }
  }
}
