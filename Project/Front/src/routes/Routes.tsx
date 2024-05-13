import { createBrowserRouter } from "react-router-dom";
import { Success } from "../pages/Success";
import Subscribe from "../pages/Subscribe";
import { NotFoundPage } from "../pages/NotFoundPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Subscribe />,
    errorElement: <NotFoundPage/>,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

export default router;
