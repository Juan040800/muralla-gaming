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

const fechaTorneo = new Date("December 20, 2026 18:00:00").getTime();

setInterval(()=>{

    const ahora = new Date().getTime();

    const distancia = fechaTorneo - ahora;

    const dias = Math.floor(distancia/(1000*60*60*24));
    const horas = Math.floor((distancia%(1000*60*60*24))/(1000*60*60));
    const minutos = Math.floor((distancia%(1000*60*60))/(1000*60));
    const segundos = Math.floor((distancia%(1000*60))/1000);

    document.getElementById("days").innerHTML=dias;
    document.getElementById("hours").innerHTML=horas;
    document.getElementById("minutes").innerHTML=minutos;
    document.getElementById("seconds").innerHTML=segundos;

},1000);
