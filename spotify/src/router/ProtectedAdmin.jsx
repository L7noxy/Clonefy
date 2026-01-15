import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function ProtectedAdmin({ children }) {
  const [autorizado, setAutorizado] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const verificar = async () => {
      try {
        await axios.get("http://localhost:3000/api/admin/perfil");
        setAutorizado(true);
      } catch {
        setAutorizado(false);
      }
    };
    verificar();
  }, []);

  if (autorizado === null) return <p>Carregando...</p>;

  if (autorizado === false) {
    navigate("/login");
    return null;
  }

  return children;
}