import express from 'express';
import { seedUserStore, users } from './database';

const port = 3000;

const app = express();

app.use(express.json());

seedUserStore();

app.post('/sessions', (request, response) => {
    const { email, password } = request.body;

    const user = users.get(email);
    if (!user || password !== user.password){
        return response.status(401).json({
            error: true,
            message: 'E-mail or password incorrect.',
        });
    }

    return response.json({
        token: 'teste',
        refreshToken: 'teste',
    }).send();

    // Buscar usuário e senha
    // Validar se o usuário existe no banco
    // Erro 401: quando não encontrar o usuário
    // Descriptografar a senha
    // Compara a senha informada com a senha do banco
    // Erro 401: quando a senha do usuário não está válida
    // Gerar token e o refresh token
    // Retornar token e refresh token
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});