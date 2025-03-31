import { Request, Response } from "express";
import { User } from "../models/User";
import { add, get, getById, remove } from "../services/UserService";

/**
 * Lista todos os usuários.
 * @param req - Objeto de requisição do Express.
 * @param res - Objeto de resposta do Express.
 */
export function listUser(req: Request, res: Response): void {
    res.json(get());
}

/**
 * Busca um usuário pelo ID.
 * @param req - Objeto de requisição do Express contendo o ID nos parâmetros.
 * @param res - Objeto de resposta do Express.
 */
export function getUser(req: Request, res: Response): void {
    const id = parseInt(req.params.id); // Obtém o ID da URL.
    const user = getById(id); // Busca o usuário pelo ID.

    if (!user) {
        // Retorna 404 se o usuário não for encontrado.
        res.status(404).json({ message: 'user-not-found' });
        return;
    } else {
        // Retorna o usuário encontrado.
        res.status(200).json(user);
    }
}

/**
 * Cria um novo usuário.
 * @param req - Objeto de requisição do Express contendo os dados do usuário no corpo.
 * @param res - Objeto de resposta do Express.
 */
export function createUser(req: Request, res: Response): void {
    const user: User = req.body; // Obtém os dados do usuário do corpo da requisição.

    // Verifica se todos os campos obrigatórios estão presentes.
    if (!user.id || !user.name || !user.age) {
        res.status(400).json({ message: 'missing-inputs' });
    } else {
        // Cria um novo objeto de usuário e o adiciona à lista.
        const newUser: User = {
            id: user.id,
            name: user.name,
            age: user.age,
        };
        add(newUser); // Adiciona o usuário ao serviço.
        res.status(201).json(newUser); // Retorna o usuário criado com status 201.
    }
}

/**
 * Remove um usuário pelo ID.
 * @param req - Objeto de requisição do Express contendo o ID nos parâmetros.
 * @param res - Objeto de resposta do Express.
 */
export function removeUser(req: Request, res: Response): void {
    const id = parseInt(req.params.id); // Obtém o ID da URL.
    const response = remove(id); // Remove o usuário pelo ID.

    if (!response) {
        // Retorna 404 se o usuário não for encontrado.
        res.status(404).json({ message: 'user-not-found' });
        return;
    } else {
        // Retorna uma mensagem de sucesso se o usuário for removido.
        res.status(200).json({ message: "user deleted" });
    }
}