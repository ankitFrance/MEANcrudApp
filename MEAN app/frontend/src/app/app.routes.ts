import { Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { HeaderComponent } from './header/header.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';




export const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'addBook', component: AddBookComponent },
    { path: 'readBook', component: DisplayBooksComponent },
    { path: 'updateForm', component: UpdateDetailsComponent },

  ];
