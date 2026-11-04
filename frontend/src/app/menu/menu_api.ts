import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MenuItem } from './items';

@Injectable({ providedIn: 'root' })
export class MenuApi {
  getProducts(): Observable<MenuItem[]> {
    return of([]);
  }
}