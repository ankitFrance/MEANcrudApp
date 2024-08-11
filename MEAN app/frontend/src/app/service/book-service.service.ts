import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private apiUrlForRead = 'http://localhost:8082/read'; 
  private apiUrlForCreate = 'http://localhost:8082/create'; 
  private apiUrlForUpdate = 'http://localhost:8082/update'; 
  private bookDetById : any



  constructor(private http: HttpClient) { }




  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlForRead);
  }


  
  createBook(formValues :any[]): Observable<any> {
    const bookData = formValues;
    return this.http.post<any>(this.apiUrlForCreate, bookData);
  }



  bookDetailsPerId(book: any){
  this.bookDetById = book;
  }


  getbookDetailsPerId(): any{
    return this.bookDetById ;
  }



  updateBook(formValues :any[], BookIdStorer:string): Observable<any> {
    const bookData = formValues;
    const bookId = BookIdStorer
    const apiUrlForUpdateWithId = `${this.apiUrlForUpdate}/${bookId}`;
    return this.http.put<any>(apiUrlForUpdateWithId, bookData);
  }
 
  
}
