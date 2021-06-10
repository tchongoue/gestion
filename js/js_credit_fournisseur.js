var id_administrateur=localStorage.id_adminitrateur;//RECUPERATION DE L'ID UTILISATEUR
    function txt_montant_credit_fournisseur(event)//fonction qui oblige l'utilisateur a entrer un nomble dans la zone de texte
    {
    var source = document.getElementById("montant_credit_fournisseur"); //On récupère la balise
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


    
    


function vider_credit_fournisseur(){

    var source = document.getElementById("montant_credit_fournisseur"); //On récupère la balise
   
    source.value = ""; 
    
    $('#select option').prop('selected', function() {
        return this.defaultSelected;
    });
    var source_date = document.getElementById("date"); //On récupère la balise
   
    source_date.value = "";
    id_tb_credit_fournisseur=null;
   

}




    
 // charger combobox Fournisseur

 function charge_combobox_fournisseur(){
    $.get("php/fournisseur/select_fournisseur.php",'id_administrateur=' + id_administrateur,function(reponse){$("#select").html(reponse);
});

}
// fin charger combobox Fournisseur






//  charger le tableau credit_Fournisseur

function charge_credit_fournisseur(){
    $.get("php/fournisseur/tableau_credit_fournisseur.php",'id_administrateur=' + id_administrateur,function(rep){$("#table_credit").html(rep);
});
}
// fin charger le tableau credit_Fournisseur

//  totaliser les montant credit_Fournisseur
function charge_montant_credit_fournisseur(){
    alert('ok')
    $.get("php/fournisseur/recuperer_montant_credit_fournisseur.php",'id_administrateur=' + id_administrateur,function(rep){$("#montant_des_credit").html(rep);
});
}
// fin totaliser les montant credit_Fournisseur










    //insertion au click du boutton valider
    $(function() { 
        $("#valider_credit").click(function() {
          
            /* VALUES */
            var id_tb_fournisseur = $("#select").val();
            var montant = $("#montant_credit_fournisseur").val();
            var date_credit = $("#date").val();
          alert(id_tb_fournisseur);
            /* DATASTRING */
            var dataString = 'id_tb_fournisseur='+ id_tb_fournisseur+'&montant='+ montant+'&date_credit='+ date_credit+'&id_administrateur='+ id_administrateur;
     
        
            if( isNaN(parseFloat(id_tb_fournisseur))|| id_tb_fournisseur=='' || montant==''|| date_credit=='') { 
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
            
            url: "php/fournisseur/insert_credit_fournisseur.php",
            data: dataString,
                success: function(){
                    charge_credit_fournisseur();
                    vider_credit_fournisseur();
                    charge_montant_credit_fournisseur();
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

// fin insertion au click du boutton valider


var id_tb_credit_fournisseur;
function afficher_credit(nom,montant_credit_fournisseur,date,id_credit){
  

    var source = document.getElementById("montant_credit_fournisseur"); //On récupère la balise
   
    source.value =montant_credit_fournisseur; 
    
    var source_date = document.getElementById("date"); //On récupère la balise
   
    source_date.value = date;
    id_tb_credit_fournisseur=id_credit;
}



//suppression au click du boutton supprimer


var id;
$(function() { 
    $("#Supprimer_credit_fournisseur").click(function() {
        swal({
                        
            title: "Attention!",
            text: "cet operation est irreversible",
            icon: "img/attention.png",
            buttons:true,
            dangerMode:true
          })
          .then((ok)=>{
           if(ok){
            var id_tb_fournisseur = $("#select").val();
            var montant = $("#montant_credit_fournisseur").val();
           
          
             id=id_tb_credit_fournisseur;
          alert(id_tb_fournisseur);
          alert(id);
            /* DATASTRING */
            var dataString ='id='+id;
     
        
            if( montant==''|| id==null) { 
                swal({
                        
                    title: "Erreur!",
                    text: "selectionnez un element sur le tableau",
                    icon: "img/cancel.png",
                    button: {
                        text: "ok!",
                       
                      },
                    
                  });
                  vider_credit_fournisseur();
                  id_tb_credit_fournisseur=null;
            /* UNCOMMNENT TO SEND TO CONSOLE */
            /* console.log ("SOMETHING HAPPENS"); */
            } else {
            $.ajax({
                 
            type: "POST",
            
            url: "php/fournisseur/delete_credit_fournisseur.php",
            data: dataString,
                success: function(){ id_tb_credit_fournisseur=null;
                    swal({
                        title: "success!",
                        text: "suppression effectué!",
                        icon:"img/clean.png",
                        button: "ok!",
                      });
                      charge_credit_fournisseur();
                      charge_montant_credit_fournisseur();
                      vider_credit_fournisseur();
                     
                    /* UNCOMMNENT TO SEND TO CONSOLE */
                    /* console.log (dataString); console.log ("AJAX DONE"); */
                    
                   }
    
            });   
                }//EOC
           return false;
           }else{

            charge_credit_fournisseur();
            charge_montant_credit_fournisseur();
            vider_credit_fournisseur();
            id_tb_credit_fournisseur=null;
           }
            }); //EOF
            
    
        });

          });
        /* VALUES */
      



//fin suppression au click du boutton supprimer



//suppression au click du boutton supprimer



$(function() { 
    $("#payer").click(function() {
        swal({
                        
            title: "Attention!",
            text: "cet operation est irreversible",
            icon: "img/attention.png",
            buttons:true,
            dangerMode:true
          })
          .then((ok)=>{
           if(ok){
            var id_tb_fournisseur = $("#select").val();
            var montant = $("#montant_credit_fournisseur").val();
           
          
            var id=id_tb_credit_fournisseur;
          
            /* DATASTRING */
            var dataString ='id='+id;
     
        alert ('ok');
            if( id==null) { 
                swal({
                        
                    title: "Erreur!",
                    text: "selectionnez un element sur le tableau",
                    icon: "img/cancel.png",
                    button: {
                        text: "ok!",
                       
                      },
                    
                  });
                  vider_credit_fournisseur();
            /* UNCOMMNENT TO SEND TO CONSOLE */
            /* console.log ("SOMETHING HAPPENS"); */
            } else {
            $.ajax({
                 
            type: "POST",
            
            url: "php/fournisseur/payer_credit_fournisseur.php",
            data: dataString,
                success: function(){
                    swal({
                        title: "success!",
                        text: "payement effectué!",
                        icon:"img/clean.png",
                        button: "ok!",
                      });
                      charge_credit_fournisseur();
                      charge_montant_credit_fournisseur();
                      vider_credit_fournisseur();
                      
                    /* UNCOMMNENT TO SEND TO CONSOLE */
                    /* console.log (dataString); console.log ("AJAX DONE"); */
                    
                   }
    
            });   
                }//EOC
           return false;
           }else{

            charge_credit_fournisseur();
            charge_montant_credit_fournisseur();
            vider_credit_fournisseur();
           }
            }); //EOF
            
    
        });

          });
        /* VALUES */
      



//fin suppression au click du boutton supprimer

