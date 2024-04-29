import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.js'
import receitaRoutes from './routes/receitas.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/receitas", receitaRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});