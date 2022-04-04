let mostrarInfo = document.getElementById('user-device');

document.addEventListener('DOMContentLoaded', e =>{
    console.log(navigator.userAgent);
    console.log(mostrarInfo);
    let isMobile = {
        android: ()=> navigator.userAgent.match(/android/i),
        ios: ()=> navigator.userAgent.match(/iphone|ipad|ipod/i),
        windows: ()=> navigator.userAgent.match(/windows phone/i),
        any: function (){
            return this.android() || this.ios() || this.windows();
        }
    };
    let isDesktop = {
        linux: ()=> navigator.userAgent.match(/linux/i),
        mac: ()=> navigator.userAgent.match(/mac os/i),
        windows: ()=> navigator.userAgent.match(/windows nt/i),
        any: function (){
            return this.linux() || this.mac() || this.windows();
        }
    };
    let isBrowser ={
        chrome: ()=> navigator.userAgent.match(/chrome/i),
        safari: ()=> navigator.userAgent.match(/safari/i),
        firefox: ()=> navigator.userAgent.match(/firefox/i),
        opera: ()=> navigator.userAgent.match(/opera|opera mini/i),
        ie: ()=> navigator.userAgent.match(/msie|iemobile/i),
        edge: ()=> navigator.userAgent.match(/edg/i),
        any: function (){
            return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge();
        }
    }
    // console.log(isMobile.any());
    // console.log(isDesktop.any());
    // console.log(isBrowser.any());
    mostrarInfo.innerHTML = `
        <ul>
            <li>User Agent: <b>${navigator.userAgent}</b></li>
            <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul>
    `
    // Contenido exclusivo
    if(isBrowser.edge()){
        mostrarInfo.innerHTML += `<p><mark>Este contenido solo se ve en edge</mark></p>`
    }
    else if(isBrowser.chrome()){
        mostrarInfo.innerHTML += `<p><mark>Este contenido solo se ve en chrome</mark></p>`
    }
});