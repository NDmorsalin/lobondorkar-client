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
import Error from "../pages/Error/Error";
import fetchChefRecipes from "../utility/fetchData/fetchChefRecipes";
import fetchAllChefs from "../utility/fetchData/fetchAllChefs";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
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
        path: "/about",
        element: <AboutUs />,
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
        loader: fetchAllChefs,
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
