# Planne Live Code

This application is a live code to be applied to participants of Planne's recruitment process.

## Getting Started

Follow the instructions below to run the project using Docker or npm.

### Prerequisites

- Docker (if running with Docker)
- Node.js and npm (if running with npm)

### Running with Docker

2. Run the Docker container:

```sh
docker compose up
```

3. Open your browser and navigate to `http://localhost:5173`.

### Running with npm

1. Install the dependencies:

```sh
npm install
```

2. Start the application:

```sh
npm start
```

3. Open your browser and navigate to `http://localhost:5173`.

### Using tmdb-ts

1. The `tmdb-ts` package is already installed.

2. Import and configure `tmdb-ts` in your project:

```typescript
import { TMDB } from "tmdb-ts";

const tmdb = new TMDB("your_api_key_here");
```

3. Use the `tmdb` instance to interact with the TMDB API:

```javascript
try {
  const movies = await tmdb.search.movies({ query: "Star wars" });
  console.log(movies);
} catch (err) {
  // handle error
}
```

For more information about the TMDB API, refer to the [official documentation](https://developer.themoviedb.org/reference/intro/getting-started).

Make sure to replace `'your_api_key_here'` with your actual TMDB API key.
