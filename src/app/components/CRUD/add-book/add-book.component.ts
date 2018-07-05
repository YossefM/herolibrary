import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookDetails } from "../../../service/BookInterface";

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookToAdd: BookDetails = <BookDetails>{};
  @Output() onClickForm = new EventEmitter<BookDetails>();
  constructor() { }
  ngOnInit() {
  }
  submitHandler(myNgForm: any) {
    this.onClickForm.emit(this.bookToAdd);
  }
}
