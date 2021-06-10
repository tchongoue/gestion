

//RECUPERATION DE L'ID UTILISATEUR
var id_administrateur=localStorage.id_adminitrateur;

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
    var value = source.value; //ici, sa valeur
   source.value = ""; // la valeur devient nulle

   var source_nom = document.getElementById("nom"); //On récupère la balise
    var value_nom = source.value; //ici, sa valeur
   source_nom.value = ""; // la valeur devient nulle

   var source_Localisation = document.getElementById("Localisation"); //On récupère la balise
   var value_Localisation = source.value; //ici, sa valeur
   source_Localisation.value = ""; // la valeur devient nulle

   var source_CNI = document.getElementById("CNI"); //On récupère la balise
   var value_CNI = source.value; //ici, sa valeur
   source_CNI.value = ""; // la valeur devient nulle

      
    }
        //fin fonction qui vide les zones de texte

            
            function charge_client(){
                $.get("php/client/tableau_client.php",'id_administrateur=' + id_administrateur,function(rep){$("#table").html(rep);
            });
            
            }
           
           
              // fin charger table client
              var i;

    $(function() { 
        $("#valider").click(function() {
                  



  

            /* VALUES */
            var nom = $("#nom").val();
            var Localisation = $("#Localisation").val();
            var Contact = $("#Contact").val();
            var CNI = $("#CNI").val();
            /* DATASTRING */
           
            var dataString = 'nom='+ nom+'&Localisation='+ Localisation+'&Contact='+ Contact+'&CNI='+CNI+'&id_administrateur='+ id_administrateur;
     
     
     
        
            if(nom=='' || Localisation==''|| Contact==''|| CNI=='') { 
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
            
            url: "php/client/insert_client.php",
            data: dataString,
                success: function(){
                    charge_client();
                    vider();
                    swal({
                        title: "success!",
                        text: "enregistrement effectué!",
                        icon:"img/clean.png",
                        button: "ok!",
                      });
                    
                   }
                
            });    
                }//EOC
            
           return false;
       
            }); //EOF
        
    
 
        });





    
    

            
    // charger les texbox au click sur une ligne du tableau
    var id_tb_client;
    function afficher(nom,localisation,contact,cni,id){
      
  
      var source = document.getElementById("Contact"); //On récupère la balise
    
     source.value = contact; // la valeur devient nulle
      var source_nom = document.getElementById("nom"); //On récupère la balise
      source_nom.value = nom; // la valeur devient nulle
     
      
      var source_Localisation = document.getElementById("Localisation"); //On récupère la balise
   
      source_Localisation.value = localisation; // la valeur devient nulle

      
      var source_CNI = document.getElementById("CNI"); //On récupère la balise
   
      source_CNI.value = cni; // la valeur devient nulle
      id_tb_client=id;
    
  
    }
    
      // fin charger les texbox au click sur une ligne du tableau
  
  
      
//suppression au click du boutton supprimer







$(function() { 
    $("#Supprimer").click(function() {
        swal({
                        
            title: "Attention!",
            text: "cet operation est irreversible",
            icon: "img/attention.png",
            buttons:true,
            dangerMode:true
          })
          .then((ok)=>{
           if(ok){
            var nom = $("#nom").val();
            var Localisation = $("#Localisation").val();
            var Contact = $("#Contact").val();
            var CNI = $("#CNI").val();
            var id=id_tb_client;
         
            /* DATASTRING */
            var dataString ='id='+id;
     
        
            if(nom=='' || Localisation==''|| Contact==''|| id==null || CNI=='') { 
                swal({
                        
                    title: "Erreur!",
                    text: "selectionnez un element sur le tableau",
                    icon: "img/cancel.png",
                    button: {
                        text: "ok!",
                       
                      },
                    
                  });
                  vider();
            /* UNCOMMNENT TO SEND TO CONSOLE */
            /* console.log ("SOMETHING HAPPENS"); */
            } else {
            $.ajax({
                 
            type: "POST",
            
            url: "php/client/supprimer_client.php",
            data: dataString,
                success: function(){
                    swal({
                        title: "success!",
                        text: "suppression effectué!",
                        icon:"img/clean.png",
                        button: "ok!",
                      });
                      charge_client();
                    vider();
                   
                    /* UNCOMMNENT TO SEND TO CONSOLE */
                    /* console.log (dataString); console.log ("AJAX DONE"); */
                    
                   }
    
            });   
                }//EOC
           return false;
           }else{

            charge_client();
            vider();
           }
            }); //EOF
            
    
        });

          });
        /* VALUES */
      



//fin suppression au click du boutton supprimer



//modification au click du boutton modifier

$(function() { 
    $("#modifier").click(function() { 
       
        swal({
                        
            title: "Attention!",
            text: "vous vous appretez a faire une modification",
            icon: "img/attention.png",
            buttons:true,
            dangerMode:true
          })
          
          .then((ok)=>{
           if(ok){
            var nom = $("#nom").val();
            var Localisation = $("#Localisation").val();
            var Contact = $("#Contact").val();
            var CNI = $("#CNI").val();
            var id=id_tb_client;
         alert(id);
            /* DATASTRING */
            var dataString = 'nom='+ nom+'&Localisation='+ Localisation+'&Contact='+ Contact+'&CNI='+CNI+'&id='+id;
     
        
            if(nom=='' || Localisation==''|| Contact==''|| id==null || CNI=='') { 
                swal({
                        
                    title: "Erreur!",
                    text: "selectionnez un element sur le tableau",
                    icon: "img/cancel.png",
                    button: {
                        text: "ok!",
                       
                      },
                    
                  });
               
            charge_client();
            vider();
            /* UNCOMMNENT TO SEND TO CONSOLE */
            /* console.log ("SOMETHING HAPPENS"); */
            } else {
            $.ajax({
                 
            type: "POST",
            
            url: "php/client/modifier_client.php",
            data: dataString,
                success: function(){
                    swal({
                        title: "success!",
                        text: "modification effectué!",
                        icon:"img/clean.png",
                        button: "ok!",
                      });
                  
            charge_client();
            vider();
                    /* UNCOMMNENT TO SEND TO CONSOLE */
                    /* console.log (dataString); console.log ("AJAX DONE"); */
                   
                   }
    
            });   
                }//EOC
           return false;
           }else{

            charge_client();
            vider();
           }
            }); //EOF
            
    
        });

          });
        /* VALUES */
      



//fin suppression au click du boutton supprimer
