import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import MovieDetails from "./pages/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetails />,
  },
]);

export default router;