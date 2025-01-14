import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, Observable, throwError } from 'rxjs';

@Injectable()
export class ProductService {
  path: string = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) {}

  // add a Product
  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.httpClient.post<Product>(this.path, product,httpOptions).pipe(
      tap(() => console.log('Get Product to successfull')),
      catchError(this.handleError)
    );;
  }

  // Get All Prducts
  getProducts(categoryId: number): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath += `?categoryId=${categoryId}`;
      return this.httpClient.get<Product[]>(newPath).pipe(
        tap((data) => console.log('Get Product to successfull')),
        catchError(this.handleError)
      );
    } else {
      return this.httpClient.get<Product[]>(newPath).pipe(
        tap(() => console.log('Get Product to successfull')),
        catchError(this.handleError)
      );

      // İkinci bir yöntem olarak bu şekilde kullanılabilir.
      /*
        this.httpClient.get('http://localhost:3000/products').subscribe((data) => {
          this.products = data as Product[];
        });
        */
    }
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ``;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured. ` + err.error.message;
    } else {
      errorMessage = 'A system error occured.';
    }
    return throwError(errorMessage);
  }
}
