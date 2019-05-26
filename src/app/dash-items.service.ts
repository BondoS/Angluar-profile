import { Injectable } from '@angular/core';
import { DashItem } from './dash-item';
import { DashItems } from './mock-items';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashItemsService {

  constructor() { }

  getItems(): Observable<DashItem[]> {
    return of(DashItems);
  }
}
