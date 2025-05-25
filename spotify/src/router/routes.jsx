import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Inicio/Home.jsx";
import Library from '../pages/Livraria/Library.jsx';
import Estudos from '../pages/Estudo/Estudos.jsx';
import Playlist from '../pages/Mais/Playlist.jsx'


const router = createBrowserRouter([

    { path: "/", element: <Home /> },
    { path: "/library", element: <Library /> },
    { path: "/estudos", element: <Estudos /> },
    { path: "/playlist", element: <Playlist /> },



])

export default router;