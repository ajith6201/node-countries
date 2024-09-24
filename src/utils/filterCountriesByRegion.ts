// src/utils/filterCountriesByRegion.ts

import { Country } from '../country.interface';

/**
 * Filters the countries by region.
 * @param countries - Array of Country objects
 * @param region - Region name to filter by (e.g., 'Asia', 'Europe')
 * @returns Filtered array of Country objects
 */
export function filterCountriesByRegion(countries: Country[], region: string): Country[] {
  return countries.filter(country => country.region === region);
}
