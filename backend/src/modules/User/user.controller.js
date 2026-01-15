import bcrypt from "bcrypt";
import Usuario from "./user.schema.js";
import { Router } from "express";

const router = Router();
const SALT_ROUNDS = 10;

export const cadastrarUsuario = async (req, res) => {
  const { nome, cpf, email, senha } = req.body;

  try {
    const novoUsuario = new Usuario({
      nome,
      cpf,
      email,
      senha,
      role: "user",
    });

    await novoUsuario.save();

    return res.status(201).json({
      id: novoUsuario._id,
      nome: novoUsuario.nome,
      email: novoUsuario.email,
    });
  } catch (error) {
    console.error("Erro no cadastro (salvamento/hash):", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({
      message: "Erro interno do servidor ao tentar finalizar o cadastro.",
    });
  }
};

export const getUsuario = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    return res.status(200).json(usuarios);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return res.status(500).json({
      message: "Erro interno do servidor ao buscar usuários.",
    });
  }
};

export const login = async (req, res) => {
  const { email, senha } = req.body;
  
  console.log("=== LOGIN DEBUG ===");
  console.log("Email recebido:", email);
  console.log("Senha recebida:", senha ? "[PRESENTE]" : "[AUSENTE]");

  const user = await Usuario.findOne({ email }).select("+senha");
  console.log("Usuário encontrado:", user ? "SIM" : "NÃO");
  
  if (!user) {
    console.log("Erro: usuário não existe no banco");
    return res.status(400).json({ error: "Email ou senha inválidos" });
  }

  console.log("Hash armazenado:", user.senha ? user.senha.substring(0, 20) + "..." : "[VAZIO]");
  
  const match = await bcrypt.compare(senha, user.senha);
  console.log("Resultado bcrypt.compare:", match);
  
  if (!match) {
    console.log("Erro: senha não confere");
    return res.status(400).json({ error: "Email ou senha inválidos" });
  }

  req.session.userId = user._id;
  console.log("Login bem-sucedido! Session userId:", req.session.userId);
  console.log("=== FIM LOGIN DEBUG ===");

  res.status(200).json({ message: "Logado com sucesso", nome: user.nome, role: user.role });
};

export const me = async (req, res) => {
  const user = await Usuario.findById(req.session.userId).select("-senha");
  res.json(user);
};

export const updateUsuario = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const userId = req.session.userId;

    if (!userId) {
      return res.status(401).json({ error: "Não autorizado" });
    }

    const updateData = {};
    if (nome) updateData.nome = nome;
    if (email) updateData.email = email;

    const user = await Usuario.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    }).select("-senha");

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json(user);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const userId = req.session.userId;

    if (!userId) {
      return res.status(401).json({ error: "Não autorizado" });
    }

    const user = await Usuario.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao destruir sessão" });
      }
      res.clearCookie("connect.sid");
      res.json({ message: "Usuário deletado com sucesso" });
    });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
};

// export const logout = (req, res) => {
//   req.session.destroy(() => {
//     res.clearCookie("connect.sid");
//     res.json({ message: "Deslogado" });
//   });
// };

export default router;