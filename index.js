//Importación de clases

import {Cliente} from "./cliente.js";
import {CuentaCorriente} from "./cuentaCorriente.js";

const cliente1 = new Cliente("Agustin", "65455463363663", "53342313131");
const cuentaDeAgustin = new CuentaCorriente (cliente1, "1", "001");

let saldoAgustin = cuentaDeAgustin.verSaldo();
saldoAgustin = cuentaDeAgustin.depositoEnCuenta(150);

console.log(`El saldo actual (cuentaDeAgustin) es de ${saldoAgustin}`);

const cliente2 = new Cliente("Maria", "5859933318484", "4844844444484844");
const cuentaDeMaria = new CuentaCorriente (cliente2, "2", "002");

cuentaDeAgustin.transferirParaCuenta(100, cuentaDeMaria);

let saldoMaria = cuentaDeMaria.verSaldo();
console.log(`El saldo actual (cuentaDeMaria) es de ${saldoMaria}`);

saldoAgustin = cuentaDeAgustin.verSaldo();
console.log(`El saldo actual (cuentaDeAgustin) es de ${saldoAgustin}`);

console.log(CuentaCorriente.cantidadDeCuentas);