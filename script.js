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
