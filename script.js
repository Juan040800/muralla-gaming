// ===========================
// MURALLA GAMING
// Animaciones al hacer scroll
// ===========================

const elementos = document.querySelectorAll(".card, .featured, .stats, .cta");

const observador = new IntersectionObserver((entradas)=>{
    entradas.forEach((entrada)=>{
        if(entrada.isIntersecting){
            entrada.target.classList.add("mostrar");
        }
    });
},{
    threshold:0.15
});

elementos.forEach((elemento)=>{
    observador.observe(elemento);
});

// Botón volver arriba

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){
        topBtn.style.display="flex";
    }else{
        topBtn.style.display="none";
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// ===========================
// CONTADOR REGRESIVO
// ===========================

const fechaTorneo = new Date("2026-08-30T18:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();
    const diferencia = fechaTorneo - ahora;

    if (diferencia <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = dias;
    document.getElementById("hours").textContent = horas;
    document.getElementById("minutes").textContent = minutos;
    document.getElementById("seconds").textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);
const counters = document.querySelectorAll('.counter');

const animateCounters = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute('data-target');

        const updateCounter = () => {

            const current = +counter.innerText;

            const increment = target / 100;

            if(current < target){

                counter.innerText = Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;
            }
        };

        updateCounter();
    });
};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animateCounters();
        }
    });

});

observer.observe(document.querySelector('.stats'));
