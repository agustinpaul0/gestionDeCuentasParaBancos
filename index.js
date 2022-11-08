//Importación de clases

import {Cliente} from "./cliente.js";
import {CuentaCorriente} from "./cuentaCorriente.js";

const cliente1 = new Cliente();

cliente1.nombreCliente = "Agustin";
cliente1.dniCliente = "65455463363663";
cliente1.rutCliente = "53342313131";

const cuentaDeAgustin = new CuentaCorriente ();

cuentaDeAgustin.numero = "1";
cuentaDeAgustin.agencia = "001";
cuentaDeAgustin.setCliente = cliente1;

let saldoAgustin = cuentaDeAgustin.verSaldo();

saldoAgustin = cuentaDeAgustin.depositoEnCuenta(150);

console.log(`El saldo actual (cuentaDeAgustin) es de ${saldoAgustin}`);

const cliente2 = new Cliente();

cliente2.nombreCliente = "Maria";
cliente2.dniCliente = "5859933318484";
cliente2.rutCliente = "4844844444484844";

const cuentaDeMaria = new CuentaCorriente ();

cuentaDeMaria.numero = "2";
cuentaDeMaria.agencia = "002";
cuentaDeMaria.setCliente = cliente2;

console.log(cuentaDeMaria.getCliente);

cuentaDeAgustin.transferirParaCuenta(100, cuentaDeMaria);

let saldoMaria = cuentaDeMaria.verSaldo();

console.log(`El saldo actual (cuentaDeMaria) es de ${saldoMaria}`);

saldoAgustin = cuentaDeAgustin.verSaldo();

console.log(`El saldo actual (cuentaDeAgustin) es de ${saldoAgustin}`);












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