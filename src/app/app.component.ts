import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-angular-v2';
  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNm7TsOwStdKiqs1M2Xp0FOS7TtBp5fbxlKcfi3NKtM0Q-OmT--WStHTvveDVPRlui8A4&usqp=CAU';
  inputValue = ''

  constructor() {
    setTimeout(() => {
      this.img = 'https://angular.io/assets/images/logos/angular/angular.png'
    }, 5000)
  }

  inputHandler(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onClick() {
    console.log('click')
  }

  onBlur(str: string) {
    this.inputValue = str
  }
}
