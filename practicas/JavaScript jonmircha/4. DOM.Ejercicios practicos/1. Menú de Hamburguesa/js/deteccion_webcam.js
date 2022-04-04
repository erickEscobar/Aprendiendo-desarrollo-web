const videoCam = document.querySelector('#webcam');

document.addEventListener('DOMContentLoaded', e =>{
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video:true, audio:false})
        .then((strem)=>{
            console.log(strem);
            videoCam.srcObject = strem;
            videoCam.play();
        })
        .catch((err)=> console.log('Sucedio el siguiente error ', err));
    }
})