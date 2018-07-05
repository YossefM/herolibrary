/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* Components & Services */
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddBookComponent } from './components/CRUD/add-book/add-book.component';
import { BookLibraryComponent } from './components/CRUD/book-library/book-library.component';
import { RemoveBookComponent } from './components/CRUD/remove-book/remove-book.component';
import { EditBookComponent } from './components/CRUD/edit-book/edit-book.component';
import { HomeComponent } from './components/home/home.component';
import { libraryService } from './service/library.service';
import { TitlePipe } from './app.title.pipe';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddBookComponent,
    BookLibraryComponent,
    RemoveBookComponent,
    EditBookComponent,
    HomeComponent,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   RouterModule.forRoot(routes)
  ],
  providers: [libraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
