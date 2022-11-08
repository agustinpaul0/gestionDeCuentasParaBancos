//Definición de clases y exportación de las mismas

import { Cliente } from "./cliente.js";

export class CuentaCorriente
{
    #cliente; //Usamos el # para indicar que el dato es privado y no se debe mostrar a la hora de llamar a un console.log
    numero;
    agencia;
    #saldo; //Usamos el # para indicar que el dato es privado y no se debe mostrar a la hora de llamar a un console.log

    set setCliente (valor) {
        if (valor instanceof Cliente) {
            this.#cliente = valor;
        }
    }

    get getCliente () {
        return this.#cliente;
    }

    constructor () {
        this.#cliente = null;
        this.numero = "";
        this.agencia = "";
        this.#saldo = 0;
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