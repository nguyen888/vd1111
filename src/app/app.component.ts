import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})
export class AppComponent {
  today = Date.now();
  title = 'aloha';
  a = 3.5222;

  messages: string[] = [];
  message: string = '';
  onClick() {
    this.messages.push(this.message);
    this.message = '';
  }

  onSubmit(value:any){
    console.log(value);
  }
}
