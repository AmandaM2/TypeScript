let saldo: number = 1000;


const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if(elementoSaldo != null){
    elementoSaldo.textContent = formatarMoeda(saldo);
}

if(elementoDataAcesso != null){
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}