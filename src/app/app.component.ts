import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'structural-directives';
  status = false
  accepted = "Congratulations, your request has been accepted!"
  denied = "Sorry, your request has been denied!"
  notification = ""
  numbers = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
  ]
  fruit = "apple"
  luckyNumber = 0
  acceptance = (value : any) => {
    this.status = value
    this.notification = ""
  }
  notifyMe = () => this.notification = "🤡 Hello there! Please Click Us"
  backToNormal =() => this.notification = ""
}
