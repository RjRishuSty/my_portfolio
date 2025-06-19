import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AppLayout from "./AppLayout/AppLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import ShowProjectDetails from "./pages/ShowProjectDetails";
import AdminLayout from "./AppLayout/AdminLayout";
import LoginPage from "./pages/Admin/Pages/LoginPage";
import AdminPage from "./pages/Admin/Pages/AdminPage";
import AddProject from "./pages/Admin/Pages/AddProject";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "project", element: <ProjectPage /> },
        { path: "project/:id", element: <ShowProjectDetails /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "", element: <Navigate to="/admin/dashboard" replace /> },
        { path: "dashboard", element: <AdminPage /> },
        {path:'add-project', element: <AddProject/>}
      ],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
