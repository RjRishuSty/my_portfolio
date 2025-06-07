import React, { Children } from "react";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
