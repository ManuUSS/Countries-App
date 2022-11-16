import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  term: string = '';

  public search = () => {
    this.onSearch.emit( this.term );
  }

}
