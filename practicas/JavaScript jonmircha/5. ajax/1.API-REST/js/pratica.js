
function funtionclickbtn(btn){
    btn.onclick = mostrar;
}

function mostrar(){
    console.log("j");
}
function boton(){
    document.addEventListener('click', e => {
        if(e.target == btn){
            console.log("j");
            // btn.insertAdjacentElement("afterend",pa);
            // document.body.appendChild(pa);
            div.innerHTML+=`<p>Perro</p>`;
        }
    })
}

export {funtionclickbtn,boton}; 