//Peticiones asincronas desde el navegador
//funciones anonimas autoejecutables

//Objeto XMLHttpRequest
(()=> {
    const xhr = new XMLHttpRequest(),//1 intanciar una variable a XMLHttpRequest
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    
    xhr.addEventListener("readystatechange", e=>{//2 asignar el evento que queremos
        if(xhr.readyState !==4) return//Sirve que cuando el estado de la peticion este completo ahi solo lo ejecuta
        // console.log(xhr);
        if(xhr.status >=200 && xhr.status < 300){//si el estado de respuesta es sastifactoria realiza el codigo
            console.log("exito");

            let json = JSON.parse(xhr.responseText);//xhr.responseText ahi esta toda la informacion en json

            json.forEach(e => {
                // console.log(e);
                const $li = document.createElement("li");
                $li.innerHTML =  `${e.name} -- ${e.email} -- ${e.phone}`
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        }else{//en caso contrario de que no es satisfactio realiza este codigo
            console.log("error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }      
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");//3 Abrir la peticion, estableciendo el metodo que queremos en este caso es get
    xhr.send();//4 enviar la peticion
})();

//API Fetch
(()=>{
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => {
        // console.log(resp)
        return resp.ok ? resp.json() : Promise.reject(resp);
    })
    .then(json => {
        // console.log(json);
        json.forEach(e => {
            const $li = document.createElement("li");
            $li.innerHTML =  `${e.name} -- ${e.email} -- ${e.phone}`
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    })
    .catch(err => {
        // console.log("Estamos en el catch", err);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
        // console.log("Esro se ejecutara si o si")
    });
})();

//API Fetch + Async-Await
(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();
    async function getData(){
        try{
            let resp = await fetch("https://jsonplaceholder.typicode.com/users");
            let json = await resp.json();

            // console.log(resp, json);

            if(!resp.ok) throw {status: resp.status, statusText: resp.statusText}

            json.forEach(e => {
                const $li = document.createElement("li");
                $li.innerHTML =  `${e.name} -- ${e.email} -- ${e.phone}`
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
        } catch(err){
            // console.log(err);
            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally{
            // console.log("Esro se ejecutara si o si")
        }
    }
    getData();
})();

//Axios
(()=>{
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(resp => {
        // console.log(resp);
        let json = resp.data;
        json.forEach(e => {
            const $li = document.createElement("li");
            $li.innerHTML =  `${e.name} -- ${e.email} -- ${e.phone}`
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment);
    })
    .catch(err => {
        // console.log("Estamos en el catch", err.response);
        let message = err.response.statusText || "Ocurrio un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    // .finally(() => console.log("Esro se ejecutara si o si"));
})();

//Axios + Async-Await
(()=>{
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){
        
        try {
            let resp = await axios.get("https://jsonplaceholder.typicode.com/users");
            let json = await resp.data;

            console.log(resp, json);

            json.forEach(e => {
                const $li = document.createElement("li");
                $li.innerHTML =  `${e.name} -- ${e.email} -- ${e.phone}`
                $fragment.appendChild($li);
            });
            $axiosAsync.appendChild($fragment);
        } catch(err){
            console.log("Estamos en el catch", err.response);
            let message = err.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally{
            console.log("Esro se ejecutara si o si");
        }
    }

    getData();
})();