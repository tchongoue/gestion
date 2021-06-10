//RECUPERATION DE L'ID UTILISATEUR
var id_administrateur=localStorage.id_adminitrateur;




function txt_Quantite_vente_comptant(event) //fonction qui oblige l'utilisateur a entrer un nomble dans la zone de texte
{
    var source = document.getElementById("Quantite"); //On récupère la balise
    var value = source.value; //ici, sa valeur
    if (isNaN(parseFloat(value))) //cas où la valeur n'est pas du tout un nombre
    // Dans ce cas, parseFloat(value) est égal à NaN
    {
        source.value = ""; // la valeur devient nulle
    } else if (value != parseInt(value) + ".") // Cas ou ce n'est pas un nombre avec juste un point derrière (pour la virgule)
    {
        source.value = parseFloat(value); // La valeur devient la partie nombre
    }
}

function txt_Prix_unitaire_vente_comptant(event) //fonction qui oblige l'utilisateur a entrer un nomble dans la zone de texte
{
    var source = document.getElementById("Prix_unitaire"); //On récupère la balise
    var value = source.value; //ici, sa valeur
    if (isNaN(parseFloat(value))) //cas où la valeur n'est pas du tout un nombre
    // Dans ce cas, parseFloat(value) est égal à NaN
    {
        source.value = ""; // la valeur devient nulle
    } else if (value != parseInt(value) + ".") // Cas ou ce n'est pas un nombre avec juste un point derrière (pour la virgule)
    {
        source.value = parseFloat(value); // La valeur devient la partie nombre
    }
}
var stock_actuel;
var cout_vente;


document.getElementById("Aujourdhui").valueAsDate = new Date();

function select() {
    stock_actu();
    cout_vent();

    montant_produit();

}

function stock_actu() {
    var id_tb_stock_produits = $("#select").val();
    $.get("php/achat/quantite_stock.php", 'id_tb_stock_produits=' + id_tb_stock_produits+'&id_administrateur='+ id_administrateur, function(rep) { stock_actuel = rep; });

}

function cout_vent() {
    var id_tb_stock_produits = $("#select").val();
    $.get("php/achat/cout_vente.php", 'id_tb_stock_produits=' + id_tb_stock_produits+'&id_administrateur='+ id_administrateur, function(rep) { cout_vente = rep; });


}



function montant_produit() {

    var id_tb_stock_produits = $("#select").val();
    alert(id_tb_stock_produits);
    $.get("php/vente_comptant/prix_produit.php", 'id_tb_stock_produits=' + id_tb_stock_produits, function(rep) { $("#montant_produit").html(rep); });

}



function vente_du_jour() {


    $.get("php/vente_comptant/vente_du_jour.php",'id_administrateur=' + id_administrateur, function(rep) { $("#vente_du_jour").html(rep); });

}

var sum_vente;

function sum_vente_du_jour() {

    $.get("php/vente_comptant/sum_vente_du_jour.php",'id_administrateur=' + id_administrateur, function(re) {
        sum_vente = re;
        var span_sum = document.getElementById("sum");
        span_sum.innerHTML = sum_vente;
    });


}

// from load
var num_click;



// from load


// charger combobox produit

function charge_combobox_produit() {
    $.get("php/stock/select_stock.php",'id_administrateur=' + id_administrateur, function(reponse) {
        $("#select").html(reponse);
    });

}
// fin charger combobox produit

// insertion au click du boutton valider
var panier_actuel;
$(function() {
    $("#valider").click(function() {
        alert('ok');
        alert(stock_actuel);
        alert(cout_vente);
        /* VALUES */
        var combobox, texte_produit;
        combobox = document.getElementById("select");
        texte_produit = combobox.options[combobox.selectedIndex].text;

        var id_tb_stock_produits = $("#select").val();
        var Quantite = $("#Quantite").val();
        var achat_unitaire = $("#Prix_unitaire").val(); //ici c7 LE PRIX DE VENTE DU PRODUIT
        alert(texte_produit);
        alert(achat_unitaire);


        


        if (isNaN(parseFloat(id_tb_stock_produits)) || id_tb_stock_produits == '' || Quantite == '' || achat_unitaire == '') {
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
            alert("arriver");

            var achat_client;
            var cout_vente_produit;
            var stock_actuel_produit;
            var stock_client;
            cout_vente_produit = parseFloat(cout_vente);
            achat_client = parseFloat(achat_unitaire);
            stock_actuel_produit = parseFloat(stock_actuel);
            stock_client = parseFloat(Quantite);
            if (achat_client >= cout_vente_produit && stock_actuel_produit >= stock_client) {
                alert('ok');
                var cell, ligne;

                // on récupère l'identifiant (id) de la table qui sera modifiée
                var tableau = document.getElementById("idTable");
                // nombre de lignes dans la table (avant ajout de la ligne)
                var nbLignes = tableau.rows.length;

                ligne = tableau.insertRow(-1); // création d'une ligne pour ajout en fin de table
                // le paramètre est dans ce cas (-1)

                // création et insertion des cellules dans la nouvelle ligne créée
                cell = ligne.insertCell(0);
                cell.innerHTML = id_tb_stock_produits;

                cell = ligne.insertCell(1);
                cell.innerHTML = texte_produit;

                cell = ligne.insertCell(2);
                cell.innerHTML = Quantite;

                cell = ligne.insertCell(3);
                cell.innerHTML = achat_unitaire * Quantite;
                
                var nbLignes = tableau.rows.length;

                var prix = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[nbLignes].cells[3].innerHTML;

                var panier = prix;

                var ancien_panier = parseFloat(panier);
                panier_actuel = ancien_panier + panier_actuel;



                var currenth5 = document.getElementById('panier');
                currenth5.innerHTML = panier_actuel;
                vider();


               
                alert('COMPTE LIEN');
                // recuperation de l'id du tableau a controler
                var tableau_compter_ligne = document.getElementById("idTable");
                // nombre de lignes dans la table 
                var nbLignes_compte_ligne = tableau_compter_ligne.rows.length;
                if (nbLignes_compte_ligne >= 1) {
                    $('body a').click(function(event) {
                        event.preventDefault();
                    });
                    var nom_client = document.getElementById('nom_client');
                    var valeur_nom_client=nom_client.value;

                    var nom_client_facture = document.getElementById('nom_client_facture');
                    nom_client_facture.innerHTML = valeur_nom_client;
                    nom_client.disabled = true;
                    document.getElementById("Imprimer").disabled = false; 


                }
            } else {
                alert('NN');
                swal({

                    title: "Erreur!",
                    text: "verifier les données ou inspecter le stock",
                    icon: "img/cancel.png",
                    button: {
                        text: "ok!",

                    },

                });
                // vider();
            }


        } //EOC
        return false;
    }); //EOF


});

// fin insertion au click du boutton valider


// SUPPRESSION au click du boutton valider

$(function() {
    $("#Supprimer").click(function() {



        swal({

                title: "Attention!",
                text: "cet operation est irreversible",
                icon: "img/attention.png",
                buttons: true,
                dangerMode: true
            })
            .then((ok) => {
                if (ok) {

                    var num_pass = parseInt(num_click)
                    var num_table = num_pass - 1

                    var id_tb_stock_produits = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[num_pass].cells[0].innerHTML;
                    var prix = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[num_pass].cells[3].innerHTML;

                    alert(id_tb_stock_produits);
                    var Quantite = $("#Quantite").val();
                   

                    if (id_tb_stock_produits == null) {
                        swal({

                            title: "Erreur!",
                            text: "selectionnez un element sur le tableau",
                            icon: "img/cancel.png",
                            button: {
                                text: "ok!",

                            },

                        });
                        vider();
                        id_tb_stock_produits = null;
                        num_click = null;
                        
                        /* UNCOMMNENT TO SEND TO CONSOLE */
                        /* console.log ("SOMETHING HAPPENS"); */
                    } else {
                       
                        id_tb_stock_produits = null;
                        num_click = null;

                        const maTable = document.getElementById('idTable');
                        maTable.deleteRow(num_table);
                        var pri_produit_panier = prix;
                        var convertion_pri_produit_panier = parseFloat(pri_produit_panier);


                        panier_actuel = panier_actuel - convertion_pri_produit_panier;
                        // charge_credit_fournisseur();
                        // charge_montant_credit_fournisseur();

                        var currenth5 = document.getElementById('panier');
                        currenth5.innerHTML = panier_actuel;

                        swal({
                            title: "success!",
                            text: "suppression effectué!",
                            icon: "img/clean.png",
                            button: "ok!",
                        });
                        vider();

                         // recuperation de l'id du tableau a controler
                var tableau_compter_ligne = document.getElementById("idTable");
                // nombre de lignes dans la table 
                var nbLignes_compte_ligne = tableau_compter_ligne.rows.length;
             
                if (nbLignes_compte_ligne == 0) {
                    alert('ok');
                    $('body a').click(function(event) {
                      
            // Prevent infinite loop
            $(this).unbind('click');

            // Execute default action
            event.currentTarget.click();

                    });
                     //Désactive le bouton imprimer
                document.getElementById("Imprimer").disabled = true; 

                    var nom_client = document.getElementById('nom_client');
                    nom_client.disabled = false;
                    
                    nom_client.value='';

                    var nom_client_facture = document.getElementById('nom_client_facture');
                    nom_client_facture.innerHTML = nom_client.value;
                    
                    


                }
                        /* UNCOMMNENT TO SEND TO CONSOLE */
                        /* console.log (dataString); console.log ("AJAX DONE"); */


                    } //EOC
                    return false;
                } else {

                    //charge_credit_fournisseur();
                    //charge_montant_credit_fournisseur();
                    vider();
                    id_tb_stock_produits = null;
                    num_click = null;
                }


            });

    });
});

function vider() {
    var source = document.getElementById("Quantite"); //On récupère la balise
    var value = source.value; //ici, sa valeur
    source.value = ""; // la valeur devient nulle

   

    var source_Localisation = document.getElementById("Prix_unitaire"); //On récupère la balise
    var value_Localisation = source.value; //ici, sa valeur
    source_Localisation.value = ""; // la valeur devient nulle
    $('#select option').prop('selected', function() {
        return this.defaultSelected;
    });


}
var tableau_compter_ligne = document.getElementById("idTable");
// nombre de lignes dans la table 
var nbLignes_compte_ligne = tableau_compter_ligne.rows.length;

function el() {for(var i = 0; i <= tableau_compter_ligne.rows.length; i++){

    const maTable = document.getElementById('idTable');
    maTable.deleteRow(i-1);

}
            
}

$(function() {
    $("#Imprimer").click(function() {
alert('ok')

        var tableau_compter_ligne = document.getElementById("idTable");
        // nombre de lignes dans la table 
        var nbLignes_compte_ligne = tableau_compter_ligne.rows.length;
       
        if (nbLignes_compte_ligne >= 1) {
           
// Parcourir le tableau 
for(var i=1; i <= tableau_compter_ligne.rows.length; i++){
 
    
        var id_tb_stock_produits = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[i].cells[0].innerHTML;
        var Quantite = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[i].cells[2].innerHTML;
        var achat_unitaire = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[i].cells[3].innerHTML;
  
       
        var dataString1 = 'id_tb_stock_produits=' + id_tb_stock_produits+'&id_administrateur='+ id_administrateur;
     
        
        $.ajax({

            type: "GET",
            async:false,
            url: "php/achat/quantite_stock.php",
            data: dataString1,
            success: function(rep) { stock_actuel = rep; }

        });




        var dataString = 'id_tb_stock_produits=' + id_tb_stock_produits + '&Quantite=' + Quantite + '&achat_unitaire=' + achat_unitaire + '&stock_actuel=' + stock_actuel+'&id_administrateur='+ id_administrateur;
     
        
        $.ajax({

            type: "POST",
           url: "php/vente_comptant/insert_vente.php",
            data: dataString,
            success: function() {
                alert('SUCCESS')
            }

        });
        
}


var nom_client = document.getElementById('nom_client');
                    var valeur_nom_client=nom_client.value;
                    var date_daujourdhui = document.getElementById('Aujourdhui');
                    var valeur_date_daujourdhui=date_daujourdhui.value;
 // IMPRESSION DE LA FACTURE

 const element = document.getElementById("invoice");
 var opt = {
 margin:       1,
 filename:     ''+valeur_nom_client+'-'+valeur_date_daujourdhui+'.pdf',
 image:        { type: 'jpeg', quality: 0.98 },
 html2canvas:  { scale: 2 },
 jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
 };
 
 html2pdf()
   .from(element)
   .set(opt).save();
 
 
 
 //   FIN IMPRESSION DE LA FACTURE
                   
               

swal({
    title: "success!",
    text: "enregistrement effectué!",
    icon: "img/clean.png",
    button: "ok!",
    
});


vider();


//   ACTIVATION DES LIEN
$('body a').click(function(event) {
                      
    // Prevent infinite loop
    $(this).unbind('click');

    // Execute default action
    event.currentTarget.click();

            });
            var nom_client = document.getElementById('nom_client');
            nom_client.disabled = false;
            
           
            // FIN  ACTIVATION DES LIEN
            document.getElementById("Imprimer").disabled = true; 
            document.getElementById("valider").disabled = true; 
            

vente_du_jour();
sum_vente_du_jour();


        }else{
            swal({

                title: "Erreur!",
                text: "Effectuez une vente",
                icon: "img/cancel.png",
                button: {
                    text: "ok!",

                },

            });

        }

        

        return false;
    }); //EOF


});




//refresh le tableau

$(function() {
    $("#refresh_table").click(function() { 
        
        alert('ok')
                   
        var tableau_compter_ligne = document.getElementById("idTable");
        // nombre de lignes dans la table 
        var nbLignes_compte_ligne = tableau_compter_ligne.rows.length;
        
        if (nbLignes_compte_ligne >= 1) {
            panier_actuel = null;
        for(var i = 0; i <= tableau_compter_ligne.rows.length; i++){
            const maTable = document.getElementById('idTable');
            maTable.deleteRow(i-1);

        
        }
      
vider();
document.getElementById("Imprimer").disabled = true; 
document.getElementById("valider").disabled = false; 

//   ACTIVATION DES LIEN
$('body a').click(function(event) {
                      
    // Prevent infinite loop
    $(this).unbind('click');

    // Execute default action
    event.currentTarget.click();

            });
            var nom_client = document.getElementById('nom_client');
            nom_client.disabled = false;
            
            nom_client.value='';

            var nom_client_facture = document.getElementById('nom_client_facture');
            nom_client_facture.innerHTML = nom_client.value;
            
            // FIN  ACTIVATION DES LIEN

        }
        
        
        return false;
    }); //EOF


});