/*function currentTime(){
    let date= new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh<10) ? "0" + hh : hh;
    mm = (mm<10) ? "0" + mm : mm;
    ss = (ss<10) ? "0" + ss : ss;

    let timeString = hh + ":" + mm + ":"+ ss;
    let tiempo = document.querySelector('#tiempo');
    tiempo.innerHTML = timeString;
}

setInterval(() =>{currentTime()},1000); */


const image = ['/images/Reloj3%20.jpg', '/images/Reloj2a.jpg', '/images/Reloj1.jpg'];
const imageElement = document.getElementsByClassName('images');
let currentImageIndex = 0;

function changeImage(){
    currentImageIndex = (currentImageIndex + 1) % image.length;
    const nextImage = image[currentImageIndex];
    imageElement.style.transform = 'scale(0)'; //aplica animación de escala
    setTimeout(() =>{
        imageElement.src = nextImage;//cambia la imagen
        imageElement.style.transform = 'scale(1)';//restaura la escala de la imagen
    }, 1000);//tiempo de animación en milisec= 1seg.)

    window.setInterval(changeImage, 10000);
    //changeImage(); llama una vez para iniciar la rotación de imágenes
    //setInterval(()=>{changeImage()}, 10000); //cambia cada 10 segundos
}//setInterval(() =>{currentTime()},1000);
//setInterval(changeImage, 10000);
//cambiar a flex??
//setInterval(()=>{changeImage()}, 10000);

/*if currentTime(hh >=5){
    console.log("Guten Morgen");
} else {
    if currentTime(hh >=11){
        console.log("Guten Tag");
    }
}else {
    if currentTime(hh>=18){
    console.log("Gute Nacht");
}*/