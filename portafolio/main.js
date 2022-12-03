var video=document.getElementById("video");
var opciones={
    Audio:true,
    video:{
        Width:120,height:480
    }
}; 
if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia(opciones)
    .then(function(stream) {
        video.srcObject = stream;
    })
    .catch(function(err){
        console.log("oops hubo un error",err);
    })
}else{
    console.log("no existe la funcion getusermedia...oops :( ");
}
