import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TransactionPayload } from '../models/transaction-payload';

@Injectable({
  providedIn: 'root'
})
export class TransactionPayloadService {

  url = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
  }


  saveTransaction(dataTransaction: TransactionPayload): Observable<TransactionPayload> {
    return this.httpClient.post<TransactionPayload>(this.url, JSON.stringify(dataTransaction), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}