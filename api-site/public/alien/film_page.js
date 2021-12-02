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

var idUsuario = sessionStorage.ID_USUARIO;

function like(idFilme){

  fetch(`/like/cadastrar/likeFilme/${idUsuario}`, {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idFilme: idFilme,
    })


  }).then(function (resposta){

        resposta.json().then((json)=>{

          console.log(json);

        }).catch((err)=>{

          console.log(err);

        })

  }).catch(function(erro){

    console.log(erro);

  })
  
}




