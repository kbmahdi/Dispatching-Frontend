import {Injectable} from '@angular/core';

@Injectable()
export class CacheService {
  saveFilters(filters: string[]) {
    // Save the filters to the cache
    localStorage.setItem('filters', JSON.stringify(filters));
  }

  deleteFilters() {
    // Remove the filters from the cache
    localStorage.removeItem('filters');
  }
  deleteCart() {
    // Remove the filters from the cache
    localStorage.removeItem('cart');
  }

  getFilters(): string[] {
    // Retrieve the filters from the cache
    const filtersJson = localStorage.getItem('filters');
    return filtersJson ? JSON.parse(filtersJson) : [];
  }

}
