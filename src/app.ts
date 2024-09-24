// src/app.ts
import express, { Request, Response } from 'express';
import axios from 'axios';
import { Country } from './country.interface';
import { sortCountriesByPopulation } from './utils/sortCountries';
import { filterCountriesByRegion } from './utils/filterCountriesByRegion';
import { searchCountries } from './utils/searchCountries';

const app = express();
const PORT = process.env.PORT || 3000;

// Simulate a simple loading state log for demonstration
let isLoading = false;

// API route to fetch, filter, sort, and search countries
app.get('/api/countries', async (req: Request, res: Response) => {
  try {
    console.log('Loading countries data...');

    // Fetch data from the REST API
    const response = await axios.get<Country[]>('https://restcountries.com/v3.1/all');
    let countries: Country[] = response.data;

    // Get the sort query parameter (default to 'asc')
    const sortOrder = (req.query.sort as string) || 'asc';

    // Get the region query parameter (optional)
    const region = req.query.region as string;

    // Get the search query parameter (optional)
    const searchTerm = req.query.search as string;

    // Filter countries by region if requested
    if (region) {
      countries = filterCountriesByRegion(countries, region);
    }

    // Search countries by name or capital if requested
    if (searchTerm) {
      countries = searchCountries(countries, searchTerm);
    }

    // Sort countries by population if requested
    if (sortOrder === 'asc' || sortOrder === 'desc') {
      countries = sortCountriesByPopulation(countries, sortOrder);
    }

    console.log('Countries data loaded, filtered, searched, and sorted successfully.');

    // Send the filtered, searched, and sorted data to the client
    res.status(200).json(countries);
  } catch (error: any) {
    console.error('Error fetching countries data:', error.message);

    // Error handling
    res.status(500).json({
      message: 'Error fetching countries data',
      error: error.message,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
