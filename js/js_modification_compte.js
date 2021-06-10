alert(0)
var id=localStorage.id_adminitrateur;
  var dataString ='id='+id;
$.ajax({
    type: "POST",

url: "php/modifier_compte/recup_admin.php",
data: dataString,
    success: function(rep){
       
        var source = document.getElementById("nom"); //On récupère la balise

        source.value = rep; // la valeur devient nulle
        
       }
    
});



$.ajax({
    type: "POST",

url: "php/modifier_compte/recup_local.php",
data: dataString,
    success: function(rep){
        var source = document.getElementById("Localisation"); //On récupère la balise

        source.value = rep; // la valeur devient nulle
        
       }
    
});


$.ajax({
    type: "POST",

url: "php/modifier_compte/recup_contact.php",
data: dataString,
    success: function(rep){
        var source = document.getElementById("Contact"); //On récupère la balise

        source.value = rep; // la valeur devient nulle
        
       }
    
});



 


$(function() { 
    $("#valider").click(function() {
              
        if (document.getElementById('mot_passe_admin').value.length < 8 && document.getElementById('mot_passe_ouvrier').value.length < 8){

            swal({
                title: "Erreur!",
                text: "Vos mot de passe doivent avoir au moins 8 caractéres!",
                icon:"img/cancel.png",
                button: "ok!",
              });
        }else{
            

        alert('ok')

        /* VALUES */
        var nom_minuscul= $("#nom").val();
        var nom = nom_minuscul.toUpperCase();
        var Localisation = $("#Localisation").val();
        var Contact = $("#Contact").val();
        var mot_passe_ouvrier= $("#mot_passe_ouvrier").val();
        var mot_passe_admin = $("#mot_passe_admin").val();
        var Nouveau_mot_passe_ouvrier= $("#Nouveau_mot_passe_ouvrier").val();
        var Nouveau_mot_passe_admin = $("#Nouveau_mot_passe_admin").val();
        var cle_modification = $("#cle_modification").val();
        /* DATASTRING */

        var dataString = 'nom='+nom+'&Localisation='+Localisation+'&Contact='+Contact+'&mot_passe_admin='+mot_passe_admin+'&mot_passe_ouvrier='+mot_passe_ouvrier+'&cle_modification='+cle_modification+'&Nouveau_mot_passe_admin='+Nouveau_mot_passe_admin+'&Nouveau_mot_passe_ouvrier='+Nouveau_mot_passe_ouvrier+'&id='+id;
 
 alert(dataString);
 
    
        if(nom=='' || Localisation==''|| Contact==''|| mot_passe_ouvrier==''|| mot_passe_admin=='' || Nouveau_mot_passe_admin=='' || Nouveau_mot_passe_ouvrier=='') { 
            swal({
                
                title: "Erreur!",
                text: "verifier les données",
                icon: "img/cancel.png",
                button: {
                    text: "ok!",
                   
                  },
                
              });
              
              
        } else {
        $.ajax({
            type: "POST",
        
        url: "php/modifier_compte/modif_compte.php",
        data: dataString,
            success: function(rep){
              
               var result=rep;
           alert(result);
               if(result==1)
               {

                swal({
                    
                    title: "Erreur!",
                    text: "verifier les données",
                    icon: "img/cancel.png",
                    button: {
                        text: "ok!",
                       
                      },
                    
                  });

               } else{
                swal({
                    title: "success!",
                    text: "enregistrement effectué!",
                    icon:"img/clean.png",
                    button: "ok!",
                  });
                  vider();
                  
               }
                
                
               }
            
        });    
            
        }
       
 
 
 

            }//EOC
        
       return false;
   
        }); //EOF
    


    });

//fonction qui vide les zones de texte
function vider(event)
{
var source = document.getElementById("Contact"); //On récupère la balise

source.value = ""; // la valeur devient nulle

var source_nom = document.getElementById("nom"); //On récupère la balise

source_nom.value = ""; // la valeur devient nulle

var source_Localisation = document.getElementById("Localisation"); //On récupère la balise

source_Localisation.value = ""; // la valeur devient nulle

var source_mot_passe_admin = document.getElementById("mot_passe_admin"); //On récupère la balise

source_mot_passe_admin.value = ""; // la valeur devient nulle

  
var source_Nouveau_mot_passe_ouvrier = document.getElementById("Nouveau_mot_passe_ouvrier"); //On récupère la balise

source_Nouveau_mot_passe_ouvrier.value = ""; // la valeur devient nulle
var source_mot_passe_ouvrier = document.getElementById("mot_passe_ouvrier"); //On récupère la balise

source_mot_passe_ouvrier.value = ""; // la valeur devient nulle

var source_Nouveau_mot_passe_admin = document.getElementById("Nouveau_mot_passe_admin"); //On récupère la balise

source_Nouveau_mot_passe_admin.value = ""; // la valeur devient nulle

  
var source_cle_modification = document.getElementById("cle_modification"); //On récupère la balise

source_cle_modification.value = ""; // la valeur devient nulle

}
    //fin fonction qui vide les zones de texte
