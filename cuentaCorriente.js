//Definición de clases y exportación de las mismas

import { Cliente } from "./cliente.js";

export class CuentaCorriente
{
    #cliente; //Usamos el # para indicar que el dato es privado y no se debe mostrar a la hora de llamar a un console.log
    numero;
    agencia;
    #saldo; //Usamos el # para indicar que el dato es privado y no se debe mostrar a la hora de llamar a un console.log
    static cantidadDeCuentas = 0;

    set cliente (valor) {
        if (valor instanceof Cliente) {
            this.#cliente = valor;
        }
    }

    get cliente () {
        return this.#cliente;
    }

    constructor (cliente, numero, agencia) {
        this.cliente = cliente;
        this.numero = numero
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadDeCuentas++;
    }

    depositoEnCuenta (valor) {
        if (valor > 0) {
            this.#saldo += valor;
            return this.#saldo;
        }
    }

    retirarDeCuenta (valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return this.#saldo;
        }
    }

    verSaldo () {
        return this.#saldo;
    }

    transferirParaCuenta (valor, cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}