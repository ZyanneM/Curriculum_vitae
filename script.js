var   btnopen = document.getElementById("btnOpen");
      btnopen2 = document.querySelector(".btnOpen2");
      container = document.getElementById("modal-container");
      container2 = document.getElementById("modal-container2");
      btnCancel= document.getElementById("btnCancel");
      btnCancel2= document.getElementById("btnCancel2");


// --------------- FONCTION OPENFORM : OUVRE LA PREMIERE MODALE A PARTIR DE LA PHOTO DE PROFIL--------------- //

btnopen.addEventListener("click", function openForm(){

  container.setAttribute('class', 'blowUpModal');

});
       
// --------------- FONCTION OPENFORM2 : OUVRE LA DEUXIEME MODALE A PARTIR DE LA PALETTE OU DU LIEN A COTE --------------- //

btnopen2.addEventListener("click", function openForm2(){

    container2.setAttribute('class', 'blowUpModal');
  
  });
       
// --------------- FONCTION BOUGE : ANIME LE BOUTON CLOSE --------------- //

        btnCancel.addEventListener("mouseenter", function bouge() {

          btnCancel.setAttribute('class', 'closebouton');
          setTimeout(() => {
            btnCancel.setAttribute('class', 'removeanim ');
          }, 500);
        });

// --------------- FONCTION CLOSEFORM : FERME LA PREMIERE MODALE AVEC UNE ANIMATION A PARTIR DU BOUTON CLOSE --------------- //

btnCancel.addEventListener("click", function closeForm(){

  container.setAttribute('class', 'blowUpModalTwo');

});     

// --------------- FONCTION CLOSEFORM2 : FERME LA DEUXIEME MODALE AVEC UNE ANIMATION A PARTIR DU BOUTON CLOSE --------------- //

btnCancel2.addEventListener("click", function closeForm(){

    container2.setAttribute('class', 'blowUpModalTwo');
  
  });    