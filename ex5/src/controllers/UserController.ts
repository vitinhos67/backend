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
    const id = parseInt(req.params.id); 
    const user = getById(id);

    if (!user) {
        res.status(404).json({ message: 'user-not-found' });
        return;
    } else {
        res.status(200).json(user);
    }
}

/**
 * Cria um novo usuário.
 * @param req - Objeto de requisição do Express contendo os dados do usuário no corpo.
 * @param res - Objeto de resposta do Express.
 */
export function createUser(req: Request, res: Response): void {
    const user: User = req.body;
    if (!user.id || !user.name || !user.age) {
        res.status(400).json({ message: 'missing-inputs' });
    } else {
        const newUser: User = {
            id: user.id,
            name: user.name,
            age: user.age,
        };
        add(newUser);
        res.status(201).json(newUser);
    }
}

/**
 * Remove um usuário pelo ID.
 * @param req - Objeto de requisição do Express contendo o ID nos parâmetros.
 * @param res - Objeto de resposta do Express.
 */
export function removeUser(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const response = remove(id);

    if (!response) {
        res.status(404).json({ message: 'user-not-found' });
        return;
    } else {
        res.status(200).json({ message: "user deleted" });
    }
}