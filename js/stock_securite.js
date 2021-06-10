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
  








 // charger combobox produit

 function charge_combobox_produit(){
    $.get("php/stock/select_stock.php",'id_administrateur=' + id_administrateur,function(reponse){$("#select").html(reponse);
});

}
// fin charger combobox produit


 //insertion au click sur le boutton valider



 $(function() { 
    $("#valider").click(function() {

        /* VALUES */
        var id_tb_stock_produits = $("#select").val();
      
        
        var Quantite = $("#Quantite").val();
     
        /* DATASTRING */
       
        var dataString = 'id_tb_stock_produits='+id_tb_stock_produits+'&Quantite='+Quantite+'&id_administrateur='+ id_administrateur;
        
 alert(id_tb_stock_produits)
  
        if(   isNaN(parseFloat(id_tb_stock_produits))|| id_tb_stock_produits=='' || Quantite=='') { 
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
        
        url: "php/stock/insert_stock_securite.php",
        data: dataString,
            success: function(){

                vider();
                charge_table_stock_securite();
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

//  fin  insertion au click sur le boutton valider










function vider(event)
    {
        $('#select option').prop('selected', function() {
            return this.defaultSelected;
        });
   
   

   var source_Quantite = document.getElementById("Quantite"); //On récupère la balise
    
   source_Quantite.value = ""; // la valeur devient nulle

    }















//  charger le tableau credit_Fournisseur

function charge_table_stock_securite(){
    $.get("php/stock/tableau_stock_securite.php",'id_administrateur=' + id_administrateur,function(rep){$("#table_stock_securite").html(rep);
});
}
// fin charger le tableau credit_Fournisseur



var id_tb_stock_securite;
    function afficher_stock_securite(id,libelle,qte_stock_securite){
      
  
        var combobox;
        combobox = document.getElementById("select");
        combobox.options[combobox.selectedIndex].text= libelle;
         // la valeur devient nulle
      var source_nom = document.getElementById("Quantite"); //On récupère la balise
      source_nom.value = qte_stock_securite; // la valeur devient nulle
     
      
   
      
      id_tb_stock_securite=id;
  
  
    }
    
      // fin charger les texbox au click sur une ligne du tableau
  




      
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
            var id_tb_stock_produits = $("#select").val();
      
        
            var Quantite = $("#Quantite").val();
         
            var id=id_tb_stock_securite;
         
            /* DATASTRING */
            var dataString ='id='+id;
     
        
            if(id_tb_stock_produits='' || Quantite==''|| id==null ) { 
                swal({
                        
                    title: "Erreur!",
                    text: "selectionnez un element sur le tableau",
                    icon: "img/cancel.png",
                    button: {
                        text: "ok!",
                       
                      },
                    
                  });
                  vider();
                  id_tb_stock_securite=null;
            /* UNCOMMNENT TO SEND TO CONSOLE */
            /* console.log ("SOMETHING HAPPENS"); */
            } else {
            $.ajax({
                 
            type: "POST",
            
            url: "php/stock/delete_stock_securite.php",
            data: dataString,
                success: function(){
                    charge_table_stock_securite();
                    vider();
                    id_tb_stock_securite=null;
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

            charge_table_stock_securite();
            vider();
            id_tb_stock_securite=null;
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
            var id_tb_stock_produits = $("#select").val();
      
        
            var Quantite = $("#Quantite").val();
         
            var id=id_tb_stock_securite;
         alert(id_tb_stock_produits);
         alert(Quantite);
         alert(id);

            /* DATASTRING */
            var dataString ='&Quantite='+ Quantite+'&id='+id;
     
        
            if(   id_tb_stock_produits=='' || Quantite==''|| id==null) { 
                swal({
                        
                    title: "Erreur!",
                    text: "selectionnez un element sur le tableau",
                    icon: "img/cancel.png",
                    button: {
                        text: "ok!",
                       
                      },
                    
                  });
               
                  charge_table_stock_securite();
            vider();
            id_tb_stock_securite=null;
            /* UNCOMMNENT TO SEND TO CONSOLE */
            /* console.log ("SOMETHING HAPPENS"); */
            } else {
            $.ajax({
                 
            type: "POST",
            
            url: "php/stock/modifier_stock_securiter.php",
            data: dataString,
                success: function(){
                    swal({
                        title: "success!",
                        text: "modification effectué!",
                        icon:"img/clean.png",
                        button: "ok!",
                      });
                  
                      charge_table_stock_securite();
            vider();
            id_tb_stock_securite=null;
                    /* UNCOMMNENT TO SEND TO CONSOLE */
                    /* console.log (dataString); console.log ("AJAX DONE"); */
                   
                   }
    
            });   
                }//EOC
           return false;
           }else{

            charge_table_stock_securite();
            vider();
            id_tb_stock_securite=null;
           }
            }); //EOF
            
    
        });

          });
        /* VALUES */
 
        
 function charge_stock_atteint(){
  
    $.get("php/stock/tableau_stock_securite_atteint.php",'id_administrateur=' + id_administrateur,function(reponse){$("#stock_atteint").html(reponse);
    
});


}
       
function charge_table_produit_plus_vendu(){
  
    $.get("php/stock/table_produit_plus_vendu.php",'id_administrateur=' + id_administrateur,function(reponse){$("#table_produit_plus_vendu").html(reponse);
    
});


}

