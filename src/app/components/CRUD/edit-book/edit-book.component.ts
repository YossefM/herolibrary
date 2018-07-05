import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { libraryService } from "../../../service/library.service";
import { BookDetails } from "../../../service/BookInterface";

@Component({
  selector: 'edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input() book: BookDetails = <BookDetails>{};
  @Output() onClickEdit = new EventEmitter<BookDetails>();
  constructor(private booksService: libraryService) { }
  editBook() {
    this.onClickEdit.emit(this.book);
  }
  ngOnInit() {
  }
}
