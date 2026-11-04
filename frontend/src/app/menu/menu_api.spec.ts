import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { expect, it } from 'vitest';

import { MenuApi } from './menu_api';
import { MenuItem } from './items';

it('loads the coffee menu from the API', () => {
  // Set up Angular with a test HTTP backend.
  TestBed.configureTestingModule({
    providers: [provideHttpClient(), provideHttpClientTesting()],
  });

  //get the service being tested and the tool controlling HTTP backend.
  const api = TestBed.inject(MenuApi);
  const http = TestBed.inject(HttpTestingController);

  //example product data that the pretend API will return.
  const products: MenuItem[] = [
    { id: 1, name: 'Latte', base_price_cents: 350, available: true },
  ];

  //store the data returned by the service here.
  let received: MenuItem[] = [];

  // Ask the service for products and store what it returns.
  api.getProducts().subscribe((data) => {
    received = data;
  });

  // Check the request, then supply a pretend API response.
  const request = http.expectOne('/api/products');
  expect(request.request.method).toBe('GET');
  // Respond with the example product data.
  request.flush(products);

  expect(received).toEqual(products);
  // Verify that there are no outstanding requests.
  http.verify();
});