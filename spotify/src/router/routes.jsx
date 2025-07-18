import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Inicio/Home.jsx";
import Library from '../pages/Livraria/Library.jsx';
import Estudos from '../pages/Estudo/Estudos.jsx';
import Playlist from '../components/Playlist.jsx'
import Perfil from '../pages/Perfil/Perfil.jsx'


const router = createBrowserRouter([

    { path: "/", element: <Home /> },
    { path: "/library", element: <Library /> },
    { path: "/estudos", element: <Estudos /> },
    { path: "/playlist", element: <Playlist /> },
    { path: "/perfil", element: <Perfil /> },


])

export default router;