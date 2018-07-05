import { Routes } from '@angular/router';
import { BookLibraryComponent } from './components/CRUD/book-library/book-library.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component'

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'books', component: BookLibraryComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '/404' }
];