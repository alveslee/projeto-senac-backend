import express from 'express';
import { getReceitas, getReceitasById } from '../controllers/receitaController.js';

const router = express.Router();

router.get("/", (req, res) => {
    const params = req.query;

    if (Object.keys(params).length === 0)
        return getReceitas(req, res);

    if (params.id)
        return getReceitasById(req, res);
    // else if (params.nome)
    //     return getUsersByNome(req, res);
    // else if (params.titulo)
    //     return getReceitaByTitulo(req, res);
});

export default router;