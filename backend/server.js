import 'dotenv/config';

import morgan from "morgan";
import logger from "./src/config/logger.js";
import mongoose from "mongoose";
import app from "./app.js";
import connectDB from "./Config/database.js";

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Falha ao iniciar o servidor:", err);
  });

mongoose.connection.on("error", (err) => {
  console.error("Erro ao conectar ao banco de dados:", err);
});

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Logs especiais do morgan para o winston
const stream = {
  write: message => logger.http(message.trim())
};

// Ambiente de desenvolvimento: logs no terminal
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Ambiente de produção: log estruturado no winston
app.use(morgan("combined", { stream }));



export default app;