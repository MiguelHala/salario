const nome = document.querySelector('#nome');
const salario = document.querySelector('#salario');
const botao = document.querySelector('#botao');
const all = document.querySelector('.all');

const nomeText = document.querySelector('#nameStatus');
const salarioText = document.querySelector('#salarioStatus');
const inssStatus = document.querySelector('#inssStatus');
const irStatus = document.querySelector('#irStatus');

botao.addEventListener('click', ()=>{
    var inss = 0.05 * salario.value;
    var ir;
    
    if(salario.value > 3500){
        ir = salario.value * 0.18;
    }else{
        ir = salario.value * 0.08;
    }

    var desconto = inss + ir;

    var salarioLiquido = salario.value - desconto;
    if(salario.value && nome.value){
        nomeText.innerHTML = `<h1> ${nome.value} </h1>`;
        salarioText.innerHTML = `<h1>${salarioLiquido.toFixed(2)}</h1>`;
        inssStatus.innerHTML = `<h1>${inss}</h1>`;
        irStatus.innerHTML = `<h1>${ir}</h1>`;
    }

    setInterval(() =>{

    const agora = new Date();

    let segundo = agora.getSeconds();

    if(segundo > 10){
        all.classList.add('active');
    }else{
        all.classList.remove('active');
    }

    }, 1000)

})


