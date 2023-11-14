    let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      const header = document.getElementById("header");

      if (prevScrollPos > currentScrollPos) {
        // Scorri verso l'alto: mostra il header
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.display = "flex";
      } else {
        // Scorri verso il basso: nascondi il header
        header.style.display = "none";
      }

      prevScrollPos = currentScrollPos;
    };
