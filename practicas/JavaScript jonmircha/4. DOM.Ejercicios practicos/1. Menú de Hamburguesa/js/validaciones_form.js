
const $form = document.querySelector('.contact-form');
const $inputs = document.querySelectorAll('.contact-form [required]');

document.addEventListener('DOMContentLoaded', e => {
    console.log($form, $inputs);
    $inputs.forEach((input) => {
        const $span = document.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    })

    document.addEventListener("keyup", e => {
        if(e.target.matches(".contact-form [required]")){
            let pattern = e.target.pattern || e.target.dataset.pattern;
            // console.log(e.target, pattern);
            if(pattern && e.target.value !== ""){
                console.log("El imput tiene patron");
                let regex = new RegExp(pattern);
                return !regex.exec(e.target.value) ? document.getElementById(e.target.name).classList.add("is-active") : document.getElementById(e.target.name).classList.remove("is-active");
            }
            if(!pattern){
                console.log("El imput no tiene patron");
                
                return e.target.value === "" ? document.getElementById(e.target.name).classList.add("is-active") : document.getElementById(e.target.name).classList.remove("is-active");
            }
        }
    });

    document.addEventListener("submit", e => {
        
        if(e.target.matches(".contact-form")){
            // e.preventDefault();
            alert("Enviando formulario");
            let loader = document.querySelector(".contact-form-loader");
            let responsive = document.querySelector(".contact-form-response");

            loader.classList.remove("none");

            setTimeout(()=>{
                loader.classList.add("none"); 
                responsive.classList.remove("none");
                $form.reset();
                setTimeout(()=>responsive.classList.add("none"),3000)
            },3000);
            
        }
    });
});