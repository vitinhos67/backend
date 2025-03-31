import { User } from "../models/User";

const usuarios: User[] = [];

/**
 * Busca um usuário pelo ID.
 * @param id - ID do usuário a ser buscado.
 * @returns O usuário encontrado ou undefined caso não exista.
 */
export function getById(id: number): User | void {
    return usuarios.find((user) => user.id === id);
}

/**
 * Adiciona um novo usuário à lista.
 * @param user - Objeto do tipo User a ser adicionado.
 */
export function add(user: User): void {
    usuarios.push(user);
}

/**
 * Remove um usuário da lista pelo ID.
 * @param id - ID do usuário a ser removido.
 * @returns true se o usuário foi removido, false caso contrário.
 */
export function remove(id: number): boolean {
    const user = getById(id);
    if (!user) {
        return false;
    }
    const index = usuarios.findIndex((user) => user.id === id);
    usuarios.splice(index);
    return true;
}

/**
 * Retorna a lista de todos os usuários.
 * @returns Um array contendo todos os usuários.
 */
export function get(): User[] {
    return usuarios;
}