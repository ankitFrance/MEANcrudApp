import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { BookServiceService } from '../service/book-service.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, RouterOutlet, HeaderComponent],

templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  constructor(private bookService: BookServiceService) {}



  onSubmit(form: NgForm) {
    if (form.valid) {
      
      const formValues = form.value;
      console.log(form.value)
      form.reset();  
     
        this.bookService.createBook(formValues).subscribe(() => {
          console.log('Book created successfully');
        },
        (err: any) => {
          console.error('Error creating book:', err);
        }
      );
    }
  }
  
}