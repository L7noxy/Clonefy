import asyncHandler from "express-async-handler";
import { getProfile, updateProfile } from "./adm.service.js";
import bcrypt from "bcrypt";
import Usuario from "../User/user.schema.js";

const getAdminProfile = asyncHandler(async (req, res) => {
  try {
    const profileData = await getProfile(req.user._id);
    res.json(profileData);
  } catch (error) {
    res.status(error.status || 500);
    throw new error(error.message || "Falha ao buscar perfil");
  }
});

const updateAdminProfile = asyncHandler(async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const result = await updateProfile(req.user._id, { nome, email, senha });

    res.json(result);
  } catch (error) {
    res.status(error.status || 500);
    throw new error(error.message || "Falha ao atualizar perfil");
  }
});

export const loginAdmin = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await Usuario.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ message: "Sem permissão para acessar" });
    }

    const match = await bcrypt.compare(senha, user.senha);
    if (!match) {
      return res.status(400).json({ message: "Senha inválida" });
    }

    // Criar sessão
    req.session.userId = user._id;
    req.session.role = "admin";

    return res.status(200).json({
      message: "Admin logado com sucesso",
      nome: user.nome,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error("Erro no login admin:", error);
    return res.status(500).json({ message: "Erro interno no login admin" });
  }
};

export { getAdminProfile, updateAdminProfile };