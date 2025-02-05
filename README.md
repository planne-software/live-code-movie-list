# Planne Live Code

This application is a live code to be applied to participants of Planne's recruitment process.

## Test

### Objective
The test consists of developing a movie listing application using the TMDB API.

#### 1. Movie Listing  
- Fetch and display a list of movies using the `/search/movie` API endpoint.  
- Implement pagination or infinite scrolling to load more results.
- Implement a search input to filter movies.
- Display name, cover, and genres (or other relevant information).
- Each item must be “clickable” to go to the details page.

#### 2. Movie Details  
- Display movie details on a separate route (e.g., `/movies/:id`).  
- Show full movie information
  - Title
  - Cover
  - Genres
  - Popularity
  - Release date

#### 3. User Ratings  
- Allow users to rate a movie by submitting a rating and comment.  
- Update the global state to reflect the rating (no need to persist it in the real API; local state is sufficient).  

#### 4. Testing  
- Write at least one test for the movie listing screen.
- Write at least one test for the movie details screen.
- Write at least one test for the movie rating.

#### 5. Error Handling & UX  
- Show appropriate loading indicators (e.g., "Loading...") while fetching data.  
- Handle errors gracefully (e.g., display "An error occurred" if a request fails).  

#### Bonus (Optional, but appreciated)  
- Add basic UI styling for a better user experience.
- Use TypeScript for better type safety.


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
