    let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      const header = document.getElementById("header");
      const foto = document.getElementById("foto");
      if (prevScrollPos > currentScrollPos) {
        // Scorri verso l'alto: mostra il header
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.display = "flex";
      } else {
        // Scorri verso il basso: nascondi il header
        if (currentScrollPos < 70){
          console.log("troppo alto")
        }else{
          header.style.display = "none";
          foto.style = "margin-top: 70px;";
      }}

      prevScrollPos = currentScrollPos;
    };
