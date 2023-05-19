const day = document.querySelector('span.dias');
const hour = document.querySelector('span.horas');
const minut = document.querySelector('span.minutos');
const segund = document.querySelector('span.segundos');

const novaData = new Date('2023 06 22 12:00:00').getTime();

const interval = setInterval(function(){
    const dataAtual = new Date().getTime();

    var distancia = novaData - dataAtual;

    var days = Math.floor(distancia / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minuts = Math.floor(distancia % (1000 * 60 * 60 ) /(1000 * 60))
    var segunds = Math.floor(distancia % (1000 * 60)/ (1000))

    day.innerHTML = `${days} :`
    hour.innerHTML = `${hours} :`
    minut.innerHTML = `${minuts} :`
    segund.innerHTML = `${segunds}`
})

const abirModal = {
    open(){
        const abrirModal = document.querySelector('.container-modal')
        abrirModal.classList.add('open')
    },

    close(){
        const fecharModal = document.querySelector('.container-modal')
        fecharModal.classList.remove('open')
    }
}

