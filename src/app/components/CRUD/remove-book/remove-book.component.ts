import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.css']
})
export class RemoveBookComponent {
  Confirm: string = "Yes";
  Deny: string = "No";
  @Output() Decision = new EventEmitter<string>();
  constructor() { }
  popupHandler(Decision: string) {
    this.Decision.emit(Decision);
  }
}
