import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../modules/User/user.schema.js";
import { verificarAdmin } from "../middlewares/auth.js";
const router = Router();

// LOGIN ADMIN
router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Credenciais inválidas" });
  }

  const senhaValida = await bcrypt.compare(senha, user.senha);
  if (!senhaValida) {
    return res.status(400).json({ error: "Credenciais inválidas" });
  }

  if (user.role !== "admin") {
    return res.status(403).json({ error: "Acesso negado: não é admin" });
  }

  req.session.userId = user._id;
  req.session.role = user.role;

  res.json({
    message: "Login de administrador autorizado",
    role: user.role
  });
});

// EXEMPLO DE ROTA ADMIN PROTEGIDA
router.get("/perfil", verificarAdmin, async (req, res) => {
  const user = await User.findById(req.session.userId).select("-senha");
  res.json(user);
});

export default router;