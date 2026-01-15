export const auth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Não autorizado" });
  }
  next();
};

export function verificarLogin(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ error: "Não autenticado" });
  }
  next();
}

export function verificarAdmin(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ error: "Não autenticado" });
  }

  if (req.session.role !== "admin") {
    return res.status(403).json({ error: "Acesso negado: não é admin" });
  }

  next();
}