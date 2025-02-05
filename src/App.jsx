import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import HomePage from "./routes/homePage/homePage";
import PropertiesPage from "./routes/propertiesPage/propertiesPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import NewProperty from "./routes/newProperty/newProperty";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import Contact from "./routes/contact/contact";
import Saved from "./routes/saved/saved";
import About from "./routes/about/about";
import Error from "./routes/error/error";
import ScrollToTop from "./ScrollToTop";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loader";

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/properties",
          element: <PropertiesPage />,
          loader: listPageLoader,
        },
        {
          path: "/properties/:id",
          element: <SinglePage />,
          // loader: singlePageLoader,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/add-property",
          element: <NewProperty />,
        },
        {
          path: "/update-profile",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/saved",
          element: <Saved />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
