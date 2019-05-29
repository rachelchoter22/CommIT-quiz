import { Component, Output, EventEmitter } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Date } from 'src/app/calander/date.model';

@Injectable()
export class CalanderService {
    constructor(private httpClient: HttpClient) {
        
    }
    getDates(): Observable<Date[]> {
        return this.httpClient.get<Date[]>("../../assets/datesList.json")
            .pipe(
                map((res: any) => res),
                catchError(this.handleError)
            );
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}