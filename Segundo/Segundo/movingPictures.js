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