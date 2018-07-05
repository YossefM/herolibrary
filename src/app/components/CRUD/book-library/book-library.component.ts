import { Component, OnInit } from '@angular/core';
import { libraryService } from "../../../service/library.service";
import { BookDetails } from "../../../service/BookInterface";
import { BookOption } from '../../../service/book-option.enum';

@Component({
  selector: 'book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.css']
})
export class BookLibraryComponent implements OnInit {
  arrBooks: BookDetails[];
  bookToDelete: BookDetails;
  bookToEdit: BookDetails;
  bookStatus: BookOption = BookOption.ShowBooks;
  notification: string;
  showMessage: boolean = false;

  constructor(private booksService: libraryService) { }
  ngOnInit() {
    this.booksService.getBooks().subscribe(books => {
      this.arrBooks = books;
    });
  }
  IsShowBooksStatus() {
    return (this.bookStatus == BookOption.ShowBooks);
  }
  IsAddBooksStatus() {
    return (this.bookStatus == BookOption.AddBooks);
  }
  IsEditBooksStatus() {
    return (this.bookStatus == BookOption.EditBooks);
  }
  showBooks() {
    this.bookStatus = BookOption.ShowBooks
  }
  deleteBook(bookToDelete: BookDetails) {
    this.bookToDelete = bookToDelete;
  }
  editBook(bookToEdit: BookDetails) {
    this.bookToEdit = bookToEdit;
    this.bookStatus = BookOption.EditBooks;
  }
  userClickHandler() {
    this.bookStatus = BookOption.AddBooks;
  }
  startTimeOut(): void {
    this.showMessage = true;
    setTimeout(function () {
      this.showMessage = false;
    }.bind(this), 2000);
  }
  ConfirmDelete($event: string) {
    if ($event == "Yes") {
      this.deleteBookHandler();
    }
  }
  addBookHandler(event: BookDetails) {
    if (!this.checkIfBookExist(event)) {
      const bookToAdd = {
        "Autuor": event.Autuor,
        "Release Date": event.Date,
        "Title": event.Title,
        "Image": event.Image,
      }
      this.arrBooks.push(event);
      const req = this.booksService.Post(bookToAdd);
      req.subscribe(posts => { }, (err) => { });
      this.bookStatus = BookOption.ShowBooks;
      this.notification = "Book has been added succsessfully";
      this.startTimeOut();
    } else {
      this.notification = "We already have a book with the same title. Please pick a different title ツ";
      this.bookStatus = BookOption.ShowBooks;
      this.startTimeOut();
    }
  }
  deleteBookHandler() {
    let index = this.arrBooks.indexOf(this.bookToDelete);
    this.arrBooks.splice(index, 1);
    this.notification = "Book has been deleted succsessfully";
    this.startTimeOut();
    const req = this.booksService.Delete(index + 1);
    req.subscribe(response => { }, (error) => { });
  }
  editBookHandler(event: BookDetails) {
    if (!this.checkIfBookExist(event)) {
      const bookToEdit = {
        "Id": event.Id,
        "Autuor": event.Autuor,
        "Release Date": event.Date,
        "Title": event.Title,
        "Image": event.Image
      }
      let bookToEditIndex = this.arrBooks.indexOf(event);
      this.arrBooks[bookToEditIndex] = event;
      const req = this.booksService.Put(bookToEdit);
      req.subscribe(book => { }, (err) => { });
      this.bookStatus = BookOption.ShowBooks;
      this.notification = "Book has been edited successfully";
      this.startTimeOut();
    }
    else {
      this.notification = "We already have a book with the same title. Please pick a different title ツ";
      this.startTimeOut();
    }
  }
  checkIfBookExist(bookExist: BookDetails): boolean {
    let isExist = false;
    let titleIndex = this.arrBooks.indexOf(bookExist);
    for (var index = 0; index < this.arrBooks.length; index++) {
      if (index == titleIndex) continue;
      if (this.arrBooks[index].Title.toLocaleLowerCase() === bookExist.Title.toLocaleLowerCase()) {
        isExist = true;
        break;
      }
    }
    return isExist;
  }
}
