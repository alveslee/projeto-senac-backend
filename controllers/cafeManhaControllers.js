import { db } from '../database/db.js';

export const getCafeManha = (_, res) => {
    const sql = "select * from cafeManha";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das cafeManha obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getCafeManhaImgs = (_, res) => {
    const sql = "select img from cafeManha";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das cafeManha obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getCafeManhasById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from cafeManha where id = ?";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das cafeManha obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getCafeManhaImgById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select img from cafeManha where id = ?";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das cafeManha obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}