import { Request, Response } from "express";
import { User } from "../models/User";
import { add, get, getById, remove } from "../services/UserService";


export function listUser(req: Request, res: Response): void {
    res.json(get());
}

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