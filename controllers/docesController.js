import { db } from '../database/db.js';

export const getDoces = (_, res) => {
    const sql = "select * from receitas where idCategoria = 6";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das receitas obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getDocesImgs = (_, res) => {
    const sql = "select * from receitas where idCategoria = 6";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das receitas obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getDocesById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from receitas where id = ? and idCategoria = 6";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das receitas obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getDoceImgById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from receitas where id = ? where idCategoria = 6";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das receitas obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}