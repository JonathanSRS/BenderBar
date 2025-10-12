import express from "express";
import router from "./controllers/bebidaController.js";
import { apiKeyMiddleware } from "./config/auth.js"

const app = express();

app.use(express.json());
app.use(apiKeyMiddleware)
app.use("/bebidas", router);

export default app;