import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Library from '../pages/Library.jsx';

const router = createBrowserRouter([

    { path: "/", element: <Home /> },
    { path: "/library", element: <Library /> },

])

export default router;