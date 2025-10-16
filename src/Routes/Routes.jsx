import { createBrowserRouter } from "react-router-dom";
// import Main from "../Layout/Main";
import Home from "../Layout/pages/Home/Home";

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

        }
      ]
    },

  ]);

  export default router;