import { StatusPedido, Pedido } from './statusPedido';

export function podeProcessarPedido(pedido: Pedido): boolean {
    return pedido.status === StatusPedido.PAGO;
}

export function validarPedido(pedido: Pedido): string|void {
    if (pedido.status === StatusPedido.PENDENTE || pedido.status === StatusPedido.PAGO) {
        return "Pedido válido";
    } else if (pedido.status === StatusPedido.CANCELADO) {
        return "Não é possível processar pedidos cancelados";
    }
}

const pedido: Pedido = {
    id: 1,
    valor: 100.0,
    status: StatusPedido.PAGO
};

console.log(podeProcessarPedido(pedido));
console.log(validarPedido(pedido));
