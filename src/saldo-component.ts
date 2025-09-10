let saldo: number = 1000;


const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if(elementoSaldo != null){
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", {currency: "BRL",style: "currency"})
}

if(elementoDataAcesso != null){
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = dataAcesso.toLocaleDateString("pt-br",{
        weekday:"long",
        day:"2-digit",
        month:"2-digit",
        year:"numeric"
    });
}