
# Country Data API

This project is a Node.js + TypeScript backend API that fetches country data from the [REST Countries API](https://restcountries.com/v3.1/all). It allows clients to:
- Fetch the full list of countries.
- Sort countries by population (ascending or descending).
- Filter countries by region.
- Search countries by name or capital.

## Features

- **Fetch country data**: Retrieves the full list of countries from the REST Countries API.
- **Sort by population**: Allows sorting of countries by population in both ascending and descending order.
- **Filter by region**: Filters the list of countries based on a specific region (e.g., Europe, Asia).
- **Search by name or capital**: Search countries by common name or capital city.
- **Error handling**: Implements proper error handling to catch issues with fetching data.
- **Loading state (simulated)**: Logs loading state in the backend for demonstration purposes.

## Project Structure

```
my-node-ts-project/
├── dist/               # Compiled JavaScript files
├── node_modules/       # Installed dependencies
├── src/                # TypeScript source code
│   ├── utils/          # Utility functions
│   │   ├── filterCountriesByRegion.ts
│   │   ├── searchCountries.ts
│   │   └── sortCountries.ts
│   ├── country.interface.ts   # Country data interface
│   └── app.ts                 # Main application file
├── package.json        # Project manifest
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/country-data-api.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd country-data-api
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Compile the TypeScript code**:

   ```bash
   npx tsc
   ```

5. **Start the server**:

   ```bash
   node dist/app.js
   ```

The server will be running on `http://localhost:3000`.

## API Endpoints

### 1. **Get All Countries**
Fetches all countries from the REST Countries API.

- **URL**: `/api/countries`
- **Method**: `GET`

#### Query Parameters:

- **`region`** (optional): Filter countries by region (e.g., `Asia`, `Europe`).
- **`sort`** (optional): Sort countries by population. Values: `asc` (ascending) or `desc` (descending).
- **`search`** (optional): Search for countries by common name or capital.

#### Example Requests:

1. **Get all countries**:

   ```bash
   GET http://localhost:3000/api/countries
   ```

2. **Get countries in Europe**:

   ```bash
   GET http://localhost:3000/api/countries?region=Europe
   ```

3. **Sort countries by population (descending)**:

   ```bash
   GET http://localhost:3000/api/countries?sort=desc
   ```

4. **Search countries by name (e.g., "Germany")**:

   ```bash
   GET http://localhost:3000/api/countries?search=Germany
   ```

5. **Search by capital (e.g., "Berlin")**:

   ```bash
   GET http://localhost:3000/api/countries?search=Berlin
   ```

6. **Combined example**: Search for countries in Europe with name "Germany" and sort by population (ascending):

   ```bash
   GET http://localhost:3000/api/countries?region=Europe&search=Germany&sort=asc
   ```

## Error Handling

The API implements error handling to manage:
- **API errors**: If the REST Countries API returns an error (e.g., 500 or 404), the client will receive an error message.
- **Network issues**: If there's a network issue or no response is received, the client will be informed.
- **Unknown errors**: Any other errors encountered during the request process will be handled gracefully.

Example error response:

```json
{
  "message": "Error fetching countries data",
  "error": "Detailed error message"
}
```

## Development

1. **Run the TypeScript compiler in watch mode**:

   ```bash
   npx tsc --watch
   ```

2. **Run the server with Nodemon (automatic restart on file changes)**:

   ```bash
   npm run dev
   ```

   This uses `nodemon` and `ts-node` for seamless development.

## Dependencies

- **Node.js**
- **TypeScript**
- **Express**: Backend framework for building REST APIs.
- **Axios**: For making HTTP requests to the REST Countries API.
- **Nodemon**: For development, automatically restarting the server when changes are made.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
