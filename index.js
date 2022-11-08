//Definición de clases

class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente
{
    numero;
    #saldo; //Usamos el # para indicar que el dato es privado y no se debe mostrar a la hora de llamar a un console.log
    agencia;

    constructor () {
        this.#saldo = 0;
        this.numero = "";
        this.agencia = "";
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
}

const cuentaDeAgus = new CuentaCorriente ();

let saldo = cuentaDeAgus.verSaldo();

console.log(`El saldo actual es de ${saldo}`);






/*const cliente1 = new Cliente();

cliente1.nombreCliente = "José";
cliente1.dniCliente = "126446373";
cliente1.rutCliente = "JHG77373737";

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero = "3535464443333";
cuentaCorriente1.saldo = 2000;
cuentaCorriente1.agencia = 1001;

const cliente2 = new Cliente();

cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "1625354633";
cliente2.rutCliente = "VB1223U3H3H";

const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.numero = "12344654674";
cuentaCorriente2.saldo = 1000;
cuentaCorriente2.agencia = 2001;

console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);

const cliente3 = new Cliente();

cliente3.nombreCliente = "Juan";
cliente3.dniCliente = "000912222029";
cliente3.rutCliente = "PSI882929291";

const cuentaCorriente3 = new CuentaCorriente();

cuentaCorriente3.numero = "5546422222647";
cuentaCorriente3.saldo = 500;
cuentaCorriente3.agencia = 3001;*/