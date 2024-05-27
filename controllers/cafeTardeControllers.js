import { db } from '../database/db.js';

export const getCafeTarde = (_, res) => {
    const sql = "select * from cafeTarde";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das cafeTarde obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getCafeTardeImgs = (_, res) => {
    const sql = "select img from cafeTarde";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das cafeTarde obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getCafeTardesById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from cafeTarde where id = ?";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das cafeTarde obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getCafeTardeImgById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select img from cafeTarde where id = ?";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das cafeTarde obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}