import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = { first: '', last: '' };

  login(e: MouseEvent) {
    this.user = { first: 'Bob', last: 'Smith' };
  }
}
