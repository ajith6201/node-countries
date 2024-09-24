// src/utils/sortCountries.ts

import { Country } from '../country.interface';

/**
 * Sorts the countries by population.
 * @param countries - Array of Country objects
 * @param order - 'asc' for ascending, 'desc' for descending
 * @returns Sorted array of Country objects
 */
export function sortCountriesByPopulation(countries: Country[], order: 'asc' | 'desc'): Country[] {
  return countries.sort((a, b) => {
    if (order === 'asc') {
      return a.population - b.population;
    } else {
      return b.population - a.population;
    }
  });
}
