
function txt_Contact(event)//fonction qui oblige l'utilisateur a entrer un nomble dans la zone de texte
{
var source = document.getElementById("Contact"); //On récupère la balise
var value = source.value; //ici, sa valeur
if (isNaN(parseFloat(value))) //cas où la valeur n'est pas du tout un nombre
// Dans ce cas, parseFloat(value) est égal à NaN
    {
    source.value = ""; // la valeur devient nulle
    }
else if (value != parseInt(value) + ".") // Cas ou ce n'est pas un nombre avec juste un point derrière (pour la virgule)
    {
    source.value = parseFloat(value); // La valeur devient la partie nombre
    }
}

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

  
var source_mot_passe_ouvrier = document.getElementById("mot_passe_ouvrier"); //On récupère la balise

source_mot_passe_ouvrier.value = ""; // la valeur devient nulle

  
var source_cle_modification = document.getElementById("cle_modification"); //On récupère la balise

source_cle_modification.value = ""; // la valeur devient nulle

}
    //fin fonction qui vide les zones de texte



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
            var cle_modification = $("#cle_modification").val();
            /* DATASTRING */
 
            var dataString = 'nom='+nom+'&Localisation='+Localisation+'&Contact='+Contact+'&mot_passe_admin='+mot_passe_admin+'&mot_passe_ouvrier='+mot_passe_ouvrier+'&cle_modification='+cle_modification;
     
     alert(dataString);
     
        
            if(nom=='' || Localisation==''|| Contact==''|| mot_passe_ouvrier==''|| mot_passe_admin=='') { 
                swal({
                    
                    title: "Erreur!",
                    text: "verifier les données",
                    icon: "img/cancel.png",
                    button: {
                        text: "ok!",
                       
                      },
                    
                  });
                  vider();
                  
            } else {
            $.ajax({
                type: "POST",
            
            url: "php/register/insert_register.php",
            data: dataString,
                success: function(){
                  
                    vider();
                    swal({
                        title: "success!",
                        text: "enregistrement effectué!",
                        icon:"img/clean.png",
                        button: "ok!",
                      });
                    
                   }
                
            });    
                
            }
           
     
     
     

                }//EOC
            
           return false;
       
            }); //EOF
        
    
 
        });

   