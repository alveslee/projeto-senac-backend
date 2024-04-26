import { db } from '../database/db.js';

export const getUsers = (_, res) => {
    const sql = "select * from usuario";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados dos usuários obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getUsersById = (req, res) => {
    const sql = "select * from usuario where id = ?";

    const {id} = req.query;

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getUsersByNome = (req, res) => {
    const sql = "select * from usuario where nome = ?";

    const {nome} = req.query;

    db.query(sql, [nome], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getUsersBySenha = (req, res) => {
    const sql = "select * from usuario where senha like ?";

    const {senha} = req.query;

    db.query(sql, [senha], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}
export const getUsersByEmail = (req, res) => {
    const sql = "select * from usuario where email like ?";

    const {email} = req.query;

    db.query(sql, [email], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}
export const getUsersByTelefone = (req, res) => {
    const sql = "select * from usuario where telefone like ?";

    const {telefone} = req.query;

    db.query(sql, [telefone], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}
export const getUsersByCpf = (req, res) => {
    const sql = "select * from usuario where cpf like ?";

    const {cpf} = req.query;

    db.query(sql, [cpf], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso."); 
            return res.status(200).json(data);
        }
    });
}

export const addUser = (req, res) => {
    const sql = "insert into usuario (nome, senha, email, telefone, cpf) values (?, ?, ?, ?, ?)";

    const {nome, senha, email, telefone, cpf} = req.body;

    db.query(sql, [cpf, telefone, email, senha, nome], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Usuário cadastrado com sucesso.");
            return res.status(201).json(data);
        }
    });
}


export const updateUser = (req, res) => {
    const sql = "update usuario set nome = ?, senha = ?, email = ?, telefone = ?, cpf = ? where id = ?";

    const { id, nome, senha, email, telefone, cpf } = req.body;

    db.query(sql, [nome, senha, email, telefone, cpf, id], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Dados do usuário atualizados com sucesso.");
            return res.status(201).json(data);
        }
    });
}

export const deleteUser = (req, res) => {
    const sql = "delete from usuario where id = ?";

    const { id } = req.body;

    db.query(sql, [id], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Usuário removido com sucesso.");
            return res.status(201).json(data);
        }
    });
}

export const addReceita = (req, res) => {
    const sql = "insert into receitas (titulo, ingredientes, instrucoes) values (?, ?, ?)";

    const { titulo, ingredientes, instrucoes } = req.body;

    db.query(sql, [titulo, ingredientes, instrucoes], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Receita cadastrada com sucesso.");
            return res.status(201).json(data);
        }
    });
}

export const updateReceita = (req, res) => {
    const sql = "update receitas set titulo = ?, ingredientes = ?, instrucoes = ? where id = ?";

    const { id, titulo, ingredientes, instrucoes } = req.body;

    db.query(sql, [titulo, ingredientes, instrucoes, id], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Dados da receita atualizados com sucesso.");
            return res.status(201).json(data);
        }
    });
}

export const deleteReceita = (req, res) => {
    const sql = "delete from receitas where id = ?";

    const { id } = req.body;

    db.query(sql, [id], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Receita removida com sucesso.");
            return res.status(201).json(data);
        }
    });
}
export const getReceitaById = (req, res) => {
    const sql = "select * from receitas where id = ?";

    const {id} = req.query;

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}
export const getReceitaByTitulo = (req, res) => {
    const sql = "select * from receitas where titulo = ?";

    const {titulo} = req.query;

    db.query(sql, [titulo], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getReceitaByIngredientes = (req, res) => {
    const sql = "select * from receitas where ingredientes like ?";

    const {ingredientes} = req.query;

    db.query(sql, [ingredientes], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}
export const getReceitaByInstrucoes = (req, res) => {
    const sql = "select * from receitas where instrucoes like ?";

    const {instrucoes} = req.query;

    db.query(sql, [instrucoes], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}