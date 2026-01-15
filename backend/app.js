import express from "express";
import cors from "cors";
import MongoStore from "connect-mongo";
import session from "express-session";

import userRoutes from "./src/routes/user.routes.js";
import adminRoutes from "./src/routes/adm.routes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.use(
  session({
    secret: "meu-segredo-secreto",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      collectionName: "sessions",
    }),
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    }
  })
);

app.use("/api/admin", adminRoutes);
app.use("/api/usuario", userRoutes);

export default app;