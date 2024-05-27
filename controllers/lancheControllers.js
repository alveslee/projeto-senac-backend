import { db } from '../database/db.js';

export const getLanche = (_, res) => {
    const sql = "select * from lanche";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das Lanche obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getLancheImgs = (_, res) => {
    const sql = "select img from lanche";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das lanche obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getLanchesById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from lanche where id = ?";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das lanche obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getLancheImgById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select img from lanche where id = ?";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das Lanche obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}