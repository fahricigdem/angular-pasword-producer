import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'password';
  password: string = 'Can';

  buttonClick() {
    this.password = 'Can Boz';
    console.log('Event Binding i öğreniyoruz');
  }

  getPassword() {
    return this.password;
  }

  getName() {
    return 'Tekin';
  }
}
