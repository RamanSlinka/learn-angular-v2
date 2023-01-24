import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  img = 'https://cdn.freebiesupply.com/logos/thumbs/2x/react-1-logo.png'
  inputValue = 'initial value'
  inputValue2 = 'initial value'
  twoWay = 'twoWay'

  constructor() {
    setTimeout(() => {
      this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png'
    }, 5000)

  }

  onClick() {
    console.log('Click')
  }

  inputHandler(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  inputHandler2(event: Event) {
    this.inputValue2 = (<HTMLInputElement>event.target).value
  }

  onBlur(str: string) {
    this.inputValue2 = str
  }


}
