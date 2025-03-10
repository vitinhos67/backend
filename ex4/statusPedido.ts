export enum StatusPedido {
    PENDENTE = 'PENDENTE',
    PAGO = 'PAGO',
    CANCELADO = 'CANCELADO'
}

export type Pedido = {
    id: number,
    valor: number,
    status: StatusPedido
}
