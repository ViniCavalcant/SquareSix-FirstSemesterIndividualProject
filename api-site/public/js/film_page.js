var contador = 0;
    function favorited() {
        if(contador == 0) {
            contador++;
          document.getElementById("icon-heart").style.color = "#F32020";
        } else {
            contador --;
          document.getElementById("icon-heart").style.color = "#fff";
        }
    }

/* Start Video */

function toggleVideo(){
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video');
  trailer.classList.toggle('active');

  video.currentTime = 0;
  video.pause();
}
