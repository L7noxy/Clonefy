import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Inicio/Home.jsx";
import Library from '../pages/Livraria/Library.jsx';
import Estudos from '../pages/Estudo/Estudos.jsx';


const router = createBrowserRouter([

    { path: "/", element: <Home /> },
    { path: "/library", element: <Library /> },
    { path: "/estudos", element: <Estudos /> }


])

export default router;