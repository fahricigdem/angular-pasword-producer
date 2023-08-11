import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  title = 'password';
  password: string = 'Can';

  constructor() {}

  ngOnInit(): void {}

  buttonClick() {
    this.password = 'Can Boz';
    console.log('Event Binding i öğreniyoruz');
    console.log(this.isAlphabet);
    console.log(this.isNumbers);
    console.log(this.isSymbols);
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
}
