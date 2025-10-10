import express from "express";
import router from "./controllers/bebidaController.js";

const app = express();

app.use(express.json());
app.use("/bebidas", router);

export default app;