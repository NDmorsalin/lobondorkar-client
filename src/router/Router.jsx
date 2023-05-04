import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Private from "../layout/Private";
import Recipe from "../pages/Recipe/Recipe";
import Chefs from "../pages/Chefs/Chefs";
import Blog from "../pages/Blog/Blog";
import fetchChefRecipes from "../utility/fetchData/fetchChefRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/recipe/:id",
        element: (
          <Private>
            <Recipe />
          </Private>
        ),
        loader: fetchChefRecipes,
      },
      {
        path: "/chefs",
        element: (
          <Private>
            <Chefs />
          </Private>
        ),
        loader: () => {
          return null;
        },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
