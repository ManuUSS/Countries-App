import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  
  
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();
  
  public debouncer: Subject<string> = new Subject<string>();
  
  term: string = '';
  
  ngOnInit(): void {
    
    this.debouncer
    .pipe(debounceTime( 400 ))
    .subscribe( value => {
      this.onDebounce.emit( value );
    });

  }

  public search = () => {
    this.onSearch.emit( this.term );
    this.debouncer
  }

  public keyPressed = () => {
    this.debouncer.next( this.term );
  }

}
