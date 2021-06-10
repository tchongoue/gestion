


//RECUPERATION DE L'ID UTILISATEUR
var id_administrateur=localStorage.id_adminitrateur;



function txt_Quantité(event)//fonction qui oblige l'utilisateur a entrer un nomble dans la zone de texte
    {
    var source = document.getElementById("qte_stock"); //On récupère la balise
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


    function txt_Coût_d_achat_unitaire(event)//fonction qui oblige l'utilisateur a entrer un nomble dans la zone de texte
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

    function Coût_de_vente_unitaire(event)//fonction qui oblige l'utilisateur a entrer un nomble dans la zone de texte
    {
    var source = document.getElementById("vente_unitaire"); //On récupère la balise
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
    
    
    



     
  
    function charge_stock(){
        $.get("php/stock/tableau_stock.php",'id_administrateur='+id_administrateur,function(rep){$("#table").html(rep);
    });
    
    }
   

    // fin charger table stock
   






     //fonction qui vide les zones de texte
     function vider(event)
     {
     var source = document.getElementById("libelle"); //On récupère la balise
     var value = source.value; //ici, sa valeur
    source.value = ""; // la valeur devient nulle
 
    var source_nom = document.getElementById("qte_stock"); //On récupère la balise
     var value_nom = source.value; //ici, sa valeur
    source_nom.value = ""; // la valeur devient nulle
 
    var source_Localisation = document.getElementById("achat_unitaire"); //On récupère la balise
    var value_Localisation = source.value; //ici, sa valeur
    source_Localisation.value = ""; // la valeur devient nulle
 
    var source_Localisation = document.getElementById("vente_unitaire"); //On récupère la balise
    var value_Localisation = source.value; //ici, sa valeur
    source_Localisation.value = ""; // la valeur devient nulle
 
       
     }
         //fin fonction qui vide les zones de texte
 
     


 //insertion au click sur le boutton valider



		$(function() { 
            $("#valider").click(function() {
       
                /* VALUES */
                var libelle_maj= $("#libelle").val();
                var libelle =libelle_maj.toUpperCase();
                var qte_stock = $("#qte_stock").val();
                
                var achat_unitaire = $("#achat_unitaire").val();
                
                var vente_unitaire = $("#vente_unitaire").val();
               
                /* DATASTRING */
               
                var dataString = 'libelle='+libelle+'&qte_stock='+qte_stock+'&achat_unitaire='+achat_unitaire+'&vente_unitaire='+vente_unitaire+'&id_administrateur='+ id_administrateur;
                
         
          
                if(libelle=='' || qte_stock==''|| achat_unitaire==''|| vente_unitaire=='') { 
                    swal({
                    
                        title: "Erreur!",
                        text: "verifier les données",
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
                
                url: "php/stock/insert_stock.php",
                data: dataString,
                    success: function(){
                        charge_stock();
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
    
 //  fin  insertion au click sur le boutton valider

         
    // charger les texbox au click sur une ligne du tableau
    var id_tb_stock_produits;
    function afficher(libelle,qte_stock,cout_achat_unitaire,cout_vente_unitaire,id){
      
  
      var source = document.getElementById("libelle"); //On récupère la balise
    
     source.value = libelle; // la valeur devient nulle
      var source_qte_stock = document.getElementById("qte_stock"); //On récupère la balise
      source_qte_stock.value = qte_stock; // la valeur devient nulle
     
      
      var source_achat_unitaire = document.getElementById("achat_unitaire"); //On récupère la balise
   
      source_achat_unitaire.value = cout_achat_unitaire; // la valeur devient nulle

      
      var source_cout_vente_unitaire = document.getElementById("vente_unitaire"); //On récupère la balise
   
      source_cout_vente_unitaire.value =cout_vente_unitaire ; // la valeur devient nulle
      id_tb_stock_produits=id;
    
  
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
            var libelle = $("#libelle").val();
                var qte_stock = $("#qte_stock").val();
                
                var achat_unitaire = $("#achat_unitaire").val();
                
                var vente_unitaire = $("#vente_unitaire").val();
               
            var id=id_tb_stock_produits;
    
            /* DATASTRING */
            var dataString ='id='+id;
     
        
            if(libelle=='' || qte_stock==''|| achat_unitaire==''||  vente_unitaire==''|| id==null) { 
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
            
            url: "php/stock/delete_stock.php",
            data: dataString,
                success: function(){
                    swal({
                        title: "success!",
                        text: "suppression effectué!",
                        icon:"img/clean.png",
                        button: "ok!",
                      });
                      charge_stock();
                    vider();
                   
                    /* UNCOMMNENT TO SEND TO CONSOLE */
                    /* console.log (dataString); console.log ("AJAX DONE"); */
                    
                   }
    
            });   
                }//EOC
           return false;
           }else{

            charge_stock();
            vider();
           }
            }); //EOF
            
    
        });

          });
        /* VALUES */
      



//fin suppression au click du boutton supprimer


