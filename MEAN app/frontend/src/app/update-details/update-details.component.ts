import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookServiceService } from '../service/book-service.service';
import { HeaderComponent } from "../header/header.component";
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-update-details',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './update-details.component.html',
  styleUrl: './update-details.component.css'
})
export class UpdateDetailsComponent implements OnInit  {

  
  bookDetails: any; // to hold the book detail
  updateMessage : string | null = null

  constructor(private bookService: BookServiceService ) {}

  ngOnInit(): void {
    this.fetchBookDetails();
  }

  fetchBookDetails(): void {
    this.bookDetails = this.bookService.getbookDetailsPerId();
  }

  
  onSubmitUpdateForm(form: NgForm, bookId: string){

    if (form.valid) {
      const formValues = form.value;
      console.log('formvalues are',formValues)
      const BookIdStorer = bookId
      console.log('The id is ', BookIdStorer)

      this.bookService.updateBook(formValues, BookIdStorer).subscribe(() => {
        console.log('Book updated successfully');
        this.updateMessage = 'Book updated successfully!';
          setTimeout(() => this.updateMessage = null, 2000);  //
      },
      (err: any) => {
        console.error('Error updating book:', err);
      }
    );
    }

  }}
