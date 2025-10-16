import { createBrowserRouter } from "react-router-dom";
// import Main from "../Layout/Main";
import Home from "../Layout/pages/Home/Home";
import EducationAndSkills from "../Layout/pages/EducationAndSkills/EducationAndSkills";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "educationSkills",
          element: <EducationAndSkills></EducationAndSkills>
        }
      ]
    },

  ]);

  export default router;