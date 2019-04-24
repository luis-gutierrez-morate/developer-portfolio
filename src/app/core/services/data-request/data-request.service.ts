import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Developer } from 'src/models/developer';
import { _DEVELOPER_DATA } from 'src/data/developer';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  constructor() { }

  // Here you can get your developer data from anywhere you would like
  public getDeveloper(): Observable<Developer> {
    return of(_DEVELOPER_DATA);
  }
}
