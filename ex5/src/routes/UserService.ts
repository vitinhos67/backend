import { User } from "../models/User";


const usuarios: User[] = [];

export function getById(id: number): User | void {
    return usuarios.find((user) => user.id === id);
}

export function add(user: User): void {
    usuarios.push(user);
}

export function remove(id: number): boolean {
    const user = getById(id);
    if (!user) {
        return false;
    }
    const index = usuarios.findIndex((user) => user.id === id);
    usuarios.splice(index);
    return true;
}