import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { MenuApi } from './menu_api';
import { MenuItem } from './items';

@Component({
  selector: 'app-menu',
  imports: [CurrencyPipe],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {
    //use this service to fetch the menu items from the backend
  private readonly api = inject(MenuApi);

  //signals to hold the state of the menu items, loading status, and error message
  protected readonly products = signal<MenuItem[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal('');

  //load the menu items when the component is first initialised.
  ngOnInit(): void {
    this.loadMenu();
  }

  protected loadMenu(): void {
    this.loading.set(true);
    this.error.set('');

    this.api.getProducts().subscribe({
      next: (products) => {
        //display the products in the menu and set loading to false when the products are successfully fetched.
        this.products.set(products);
        this.loading.set(false);
      },
      error: () => {
        this.products.set([]);
        //clear the products and set an error message if there is an error fetching the products, and set loading to false.
        this.error.set('We could not load the menu. Please try again.');
        this.loading.set(false);
      },
    });
  }
}