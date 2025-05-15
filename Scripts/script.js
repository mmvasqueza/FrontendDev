  // HTML Graphics - Dibujo en Canvas
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(50, 50, 99, 100);
  //function innerHTML
//   let d = new Date();
//   document.getElementById("hora").innerHTML = "Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() 






  // HTML APIs - Geolocalización
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
              document.getElementById("location").innerHTML = 
                  "Latitud: " + position.coords.latitude + "<br>Longitud: " + position.coords.longitude;
          });
      } else {
          document.getElementById("location").innerHTML = "La geolocalización no es soportada por este navegador.";
      }
  }


  //butonId Evento: Onclick
  function myFunction(){            
      let contador = 1;
      let email = document.getElementById("email");
      let contenido = email.value;
      alert("Email capturado con exito " + contenido + contador++ );
      console.log("Email capturado con exito" +contenido + contador++);
  }

  //butonId Evento: Onclick
  function hipervinculo(){
      window.location.href = "https://www.youtube.com/embed/I5dheZ2yCac"; 
      console.log("exito");
  }
