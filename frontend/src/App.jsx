import React, { useEffect, useState } from "react";
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
import axios from "axios";

const App = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://my-protfolio-backend-bi5k.onrender.com/api/projects`
        );
        setProjectData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout projectData={projectData} />,
      children: [
        { path: "", element: <HomePage projectData={projectData} /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "project", element: <ProjectPage projectData={projectData} /> },
        { path: "project/:id", element: <ShowProjectDetails projectData={projectData}/> },
      ],
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
