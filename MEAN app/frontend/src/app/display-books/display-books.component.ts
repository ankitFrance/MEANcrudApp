import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { BookServiceService } from '../service/book-service.service';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';



@Component({
  selector: 'app-display-books',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './display-books.component.html',
  styleUrl: './display-books.component.css'
})
export class DisplayBooksComponent implements OnInit {

  books: any[] = [];
  private apiUrlForDelete = 'http://localhost:8082/delete';
  private apiUrlForUpdate = 'http://localhost:8082/update';
  deleteMessage : string  | null = null;
  
 
  constructor(private bookService: BookServiceService, private http : HttpClient,  private router: Router ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

   loadBooks(): void {
    this.bookService.getBooks().subscribe(
      (data: any[]) => {
        this.books = data;
        console.log(this.books);
      },
      error => {
        console.error('Error fetching books:', error);
      }
    );
  }

  // Deleting a book
  
    async deleteBook(bookId: string): Promise<void> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = JSON.stringify({ id: bookId });
  
      try {
        await this.http.post(this.apiUrlForDelete, body, { headers }).toPromise();
        console.log('Book deleted successfully yessssss');
        this.deleteMessage = 'Book deleted successfully!';
        setTimeout(() => this.deleteMessage = null, 2000);  // Hide after 5 seconds
        this.loadBooks()
      } catch (error) {
        console.error('Error deleting book', error);
       
      }
    }

     

    updateBook(book: any) {

      this.bookService.bookDetailsPerId(book);
      this.router.navigate(['/updateForm']);
      
    }


   
  }

  

    

  
  

    
  


