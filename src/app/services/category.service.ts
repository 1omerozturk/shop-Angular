import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError,tap, Observable, throwError } from 'rxjs';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {
  path:string="http://localhost:3000/categories";
  constructor(private httpClient: HttpClient) {
  }
  getCategories():Observable<Category[]>{
   return this.httpClient
    .get<Category[]>(this.path).pipe(
      tap(data=>console.log("Get Category API to successful.")),
      catchError(this.handleError)
    );
    
    // İkinci bir yöntem olarak bu şekilde kullanılabilir.
    /*
    this.httpClient.get('http://localhost:3000/categories').subscribe((data) => {
      this.categories = data as Category[];
    });
    */
  }
  handleError(err:HttpErrorResponse){
    let errorMessage=``;
    if (err.error instanceof ErrorEvent)
      {
        errorMessage= `An error occured. `+err.error.message;
      }
      else{
        errorMessage="A system error occured.";
      }
      return throwError(errorMessage);
  }

}
