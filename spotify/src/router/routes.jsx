import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Inicio/Home.jsx";
import Library from '../pages/Livraria/Library.jsx';
import Estudos from '../pages/Estudo/Estudos.jsx';
import Playlist from '../pages/Playlist/Playlist.jsx'
import Perfil from '../pages/Perfil/Perfil.jsx'
import ProtectedAdmin from "../router/ProtectedAdmin.jsx";


const router = createBrowserRouter([

    { path: "*", element: <h1>404 - Página não encontrada</h1> },

    { path: "/", element: <Home /> },
    { path: "/library", element: <Library /> },
    { path: "/estudos", element: <Estudos /> },
    { path: "/playlist", element: <Playlist /> },
    { path: "/perfil", element: <Perfil /> },
    {
        path: "/perfil/:id",
        element: (
            <ProtectedAdmin>
                <Perfil />
            </ProtectedAdmin>
        )

    },





])

export default router;