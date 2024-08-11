import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AddBookComponent } from './add-book/add-book.component';
import { HeaderComponent } from './header/header.component';
import { BookServiceService } from './service/book-service.service';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { FrontPageComponent } from './front-page/front-page.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,  AddBookComponent, DisplayBooksComponent, FrontPageComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
  providers: [BookServiceService]
})
export class AppComponent {
  title = 'frontend';
}
