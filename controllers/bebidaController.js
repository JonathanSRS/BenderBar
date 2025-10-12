import express from "express";
import bebidaService from "../services/bebidaService.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const data = await bebidaService.cadastrarBebida(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/:nome", async (req, res)=>{
    try {
        const bebida = await bebidaService.buscarBebida(req.params.nome);
        res.json(bebida);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

router.get("/sobre/:nome", async (req, res)=>{
    try {
        const bebida = await bebidaService.buscarBebida(req.params.nome);
        res.json(`${bebida.nome} tem ${bebida.teor_alcoolico} de teor alcoólico`);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await bebidaService.deletarPorId(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
export default router