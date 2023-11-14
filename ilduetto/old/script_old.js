window.addEventListener("scroll", function() {
  var posizioneScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  var header = document.getElementById("header");
  if (posizioneScroll > 0) {
    header.style.display = "flex"; // Mostra l'header
    
    var mioDiv = document.getElementById('logo');

    // Seleziona il div di destinazione
    var div2 = document.getElementById('header');

    // Rimuovi il div dal suo padre attuale (div1)
    mioDiv.parentNode.removeChild(mioDiv);

    // Aggiungi il div a un nuovo padre (div2)
    div2.insertBefore(mioDiv, div2.firstChild);
    
  } else {
    header.style.display = "none"; // Nascondi l'header
    var mioDiv = document.getElementById('logo');

    // Seleziona il div di destinazione
    var div2 = document.getElementById('contenitore');

    // Rimuovi il div dal suo padre attuale (div1)
    mioDiv.parentNode.removeChild(mioDiv);
    
    div2.insertBefore(mioDiv, div2.firstChild);

  }

  // if (posizioneScroll > 142) {
  //     var mioDiv = document.getElementById('logo');
  // 
  //     // Seleziona il div di destinazione
  //     var div2 = document.getElementById('header');
  // 
  //     // Rimuovi il div dal suo padre attuale (div1)
  //     mioDiv.parentNode.removeChild(mioDiv);
  // 
  //   div2.insertBefore(mioDiv, div2.firstChild);
  //   }
});
