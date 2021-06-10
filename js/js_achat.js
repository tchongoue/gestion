
//RECUPERATION DE L'ID UTILISATEUR
var id_administrateur=localStorage.id_adminitrateur;

function txt_Quantite(event)//fonction qui oblige l'utilisateur a entrer un nomble dans la zone de texte
    {
    var source = document.getElementById("Quantite"); //On récupère la balise
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
    function txt_achat_unitaire(event)//fonction qui oblige l'utilisateur a entrer un nomble dans la zone de texte
    {
    var source = document.getElementById("achat_unitaire"); //On récupère la balise
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
 
 var ancien_stock;
function select(){
   
    var id_tb_stock_produits = $("#select").val();
    alert(id_tb_stock_produits);
   $.get("php/achat/quantite_stock.php",'id_tb_stock_produits='+id_tb_stock_produits,function(rep){  ancien_stock  = rep;});
  alert(ancien_stock);
   
}




 // charger combobox produit

 function charge_combobox_produit(){
    $.get("php/stock/select_stock.php",'id_administrateur=' + id_administrateur,function(reponse){$("#select").html(reponse);
});

}
// fin charger combobox produit





    //insertion au click du boutton valider
    $(function() { 
        $("#valider").click(function() {
          
            /* VALUES */
           
            var id_tb_stock_produits = $("#select").val();
            var Quantite = $("#Quantite").val();
            var achat_unitaire = $("#achat_unitaire").val();
           alert(id_tb_stock_produits)
          
           alert(ancien_stock)
          
            /* DATASTRING */
            var dataString = 'id_tb_stock_produits='+id_tb_stock_produits+'&Quantite='+ Quantite+'&achat_unitaire='+ achat_unitaire+'&ancien_stock='+ancien_stock+'&id_administrateur='+ id_administrateur;
            
        
            if( isNaN(parseFloat(id_tb_stock_produits))||   id_tb_stock_produits=='' || Quantite==''|| achat_unitaire=='') { 
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
            
            url: "php/achat/insert_achat.php",
            data: dataString,
                success: function(){
                    vider();
                    charge_achat();
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




function charge_achat(){
    $.get("php/achat/tableau_achat.php",'id_administrateur=' + id_administrateur,function(rep){$("#table").html(rep);
    
});

}



      
    // charger les texbox au click sur une ligne du tableau
    var id_tb_achat_produits;
    function afficher(id,libelle,qte_achete,achat){
      
  
      var source = document.getElementById("Quantite"); //On récupère la balise
    
     source.value = qte_achete; // la valeur devient nulle
     
    
      var source_achat = document.getElementById("achat_unitaire"); //On récupère la balise
   
      source_achat.value = achat; // la valeur devient nulle

     
      id_tb_achat_produits=id;
    
  
    }
    
      // fin charger les texbox au click sur une ligne du tableau
  


      function vider()
    {
    var source = document.getElementById("Quantite"); //On récupère la balise
    var value = source.value; //ici, sa valeur
   source.value = ""; // la valeur devient nulle

  
   $('#select option').prop('selected', function() {
    return this.defaultSelected;
});
  
   var source_Localisation = document.getElementById("achat_unitaire"); //On récupère la balise
   var value_Localisation = source.value; //ici, sa valeur
   source_Localisation.value = ""; // la valeur devient nulle


      
    }

    
$(function() { 
    $("#Supprimer").click(function() {
        swal({
                        
            title: "Attention!",
            text: "Lorsque vous supprimez un achat pensé à modifier le stock pour rester cohérant",
            icon: "img/attention.png",
            buttons:true,
            dangerMode:true
          })
          .then((ok)=>{
           if(ok){
            
      
        
            var Quantite = $("#Quantite").val();
         
            var id=id_tb_achat_produits;
         
            /* DATASTRING */
            var dataString ='id='+id;
     
        
            if(id_tb_achat_produits='' || Quantite==''|| id==null ) { 
                swal({
                        
                    title: "Erreur!",
                    text: "selectionnez un element sur le tableau",
                    icon: "img/cancel.png",
                    button: {
                        text: "ok!",
                       
                      },
                    
                  });
                  vider();
                  id_tb_achat_produits=null;
            /* UNCOMMNENT TO SEND TO CONSOLE */
            /* console.log ("SOMETHING HAPPENS"); */
            } else {
            $.ajax({
                 
            type: "POST",
            
            url: "php/achat/DELETE_achat.php",
            data: dataString,
                success: function(){
                    vider();
                    charge_achat();
                    id_tb_achat_produits=null;
                    swal({
                        title: "success!",
                        text: "suppression effectué!",
                        icon:"img/clean.png",
                        button: "ok!",
                      });
                    
                    /* UNCOMMNENT TO SEND TO CONSOLE */
                    /* console.log (dataString); console.log ("AJAX DONE"); */
                    
                   }
    
            });   
                }//EOC
           return false;
           }else{

            vider();
                    charge_achat();
            id_tb_achat_produits=null;
           }
            }); //EOF
            
    
        });

          });