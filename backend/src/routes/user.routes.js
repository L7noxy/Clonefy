import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import Usuario from "../Modules/User/user.schema.js"; // Import do model
import { cadastrarUsuario } from "../Modules/User/user.controller.js";
import { getUsuario, updateUsuario, deleteUsuario } from "../Modules/User/user.controller.js";
import { auth } from "../middlewares/auth.js";
import { me } from "../Modules/User/user.controller.js";


// Rotas básicas
router.post("/cadastro", cadastrarUsuario);
router.get("/buscar", getUsuario);
router.get("/me", auth, me);
router.put("/atualizar", auth, updateUsuario);
router.delete("/deletar", auth, deleteUsuario);

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;
    console.log("LOGIN ATTEMPT DEBUG:", { body: req.body, emailType: typeof email, senhaType: typeof senha });


    if (!email || !senha) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    // Busca a senha explicitamente
    const user = await Usuario.findOne({ email }).select("+senha");

    if (!user) {
      return res.status(400).json({ error: "Email ou senha inválidos" });
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      return res.status(400).json({ error: "Email ou senha inválidos" });
    }

    // Cria sessão
    req.session.userId = user._id;
    req.session.role = user.role;

    // Retorna nome e role
    res.json({
      message: "Login realizado com sucesso",
      role: user.role,
      nome: user.nome,
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
});

// Logout
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao fazer logout" });
    }
    res.clearCookie("connect.sid"); // Limpa cookie da sessão
    res.json({ message: "Logout realizado com sucesso" });
  });
});

export default router;