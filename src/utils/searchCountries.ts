import { Country } from '../country.interface';

/**
 * Searches countries by name or capital.
 * @param countries - Array of Country objects
 * @param searchTerm - Search term to find countries by name or capital
 * @returns Array of Country objects that match the search criteria
 */
export function searchCountries(countries: Country[], searchTerm: string): Country[] {
  return countries.filter(country => {
    const nameMatch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const capitalMatch = country.capital && country.capital.some(cap => cap.toLowerCase().includes(searchTerm.toLowerCase()));
    return nameMatch || capitalMatch;
  });
}
