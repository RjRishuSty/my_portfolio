import React, { useState, useEffect, Children } from "react";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import ShowProjectDetails from "./pages/ShowProjectDetails";
import AdminPage from "./pages/Admin/AdminPage";
import LoginPage from "./pages/Admin/LoginPage";
import axios from "axios";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "https://my-protfolio-backend-bi5k.onrender.com/api/auth/check-auth",
          { withCredentials: true }
        );
        if (response) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.log(err.message);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);
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
        {
          path: "/project",
          element: <ProjectPage />,
        },
        {
          path: "/project/:id",
          element: <ShowProjectDetails />,
        },
        {
          path: "/admin",
          element: isAuthenticated ? (
            <AdminPage />
          ) : (
            <Navigate to="/login" replace />
          ),
        },
        {
          path: "/login",
          element: <LoginPage />,
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
