import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MenuItem } from './items';

@Injectable({ providedIn: 'root' })
export class MenuApi {
    // The HttpClient is injected into the service. This allows it to make HTTP requests to the backend API.
    private readonly http = inject(HttpClient);
  getProducts(): Observable<MenuItem[]> {
    //request menu from the backend API.
    return this.http.get<MenuItem[]>('/api/products');
  }
}