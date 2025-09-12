"use strict";
let saldo = 1000;
const elementoDataAcesso = document.querySelector(".block-saldo time");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}
