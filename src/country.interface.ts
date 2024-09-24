// src/country.interface.ts
export interface Country {
    name: {
      common: string;
      official: string;
    };
    capital: string[];
    region: string;
    subregion: string;
    population: number;
    area: number;
    flag: string;
  }
  