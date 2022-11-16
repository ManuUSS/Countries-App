import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {

  term: string = '';

  public search = () => {
    console.log( this.term );
  }

}
