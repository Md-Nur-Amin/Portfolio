import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/pages/Home/Home";
import EducationAndSkills from "../Layout/pages/EducationAndSkills/EducationAndSkills";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>, 
    children: [
      {
        index: true, // default route for "/"
        element: <Home />,
      },
      {
        path: "educationSkills",
        element: <EducationAndSkills />,
      },
    ],
  },
]);

export default router;
