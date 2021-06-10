








// This script implements simple routing by loading partial HTML files 
// named corresponding to fragment identifiers.
//
// By Curran Kelleher October 2014

// Wrap everything in an immediately invoked function expression,
// so no global variables are introduced.
//$('body a').click(function(event) {
//event.preventDefault();
//});

(function() {

    // Stores the cached partial HTML pages.
    // Keys correspond to fragment identifiers.
    // Values are the text content of each loaded partial HTML file.
    var partialsCache = {}

    // Gets the appropriate content for the given fragment identifier.
    // This function implements a simple cache.
    function getContent(fragmentId, callback) {

        // If the page has been fetched before,
        if (partialsCache[fragmentId]) {

            // pass the previously fetched content to the callback.
            callback(partialsCache[fragmentId]);

        } else {
            // If the page has not been fetched before, fetch it.
            $.get(fragmentId + ".html", function(content) {

                // Store the fetched content in the cache.
                partialsCache[fragmentId] = content;

                // Pass the newly fetched content to the callback.
                callback(content);
            });
        }
    }

    // Sets the "active" class on the active navigation link.
    function setActiveLink(fragmentId) {
        $("#navbar a").each(function(i, linkElement) {
            var link = $(linkElement),
                pageName = link.attr("href").substr(1);
            if (pageName === fragmentId) {
                link.attr("class", "active");
            } else {
                link.removeAttr("class");
            }
        });
    }

    // Updates dynamic content based on the fragment identifier.
    function navigate() {

        // Isolate the fragment identifier using substr.
        // This gets rid of the "#" character.
        var fragmentId = location.hash.substr(1);

        // Set the "content" div innerHTML based on the fragment identifier.
        getContent(fragmentId, function(content) {
            $("#content").html(content);
if(localStorage.statut==0){
    $('body a[href="#fr_client"]').click(function(event) {
        event.preventDefault();
    });
    $('body a[href="#fr_register"]').click(function(event) {
        event.preventDefault();
    });
    $('body a[href="#fr_inventaire"]').click(function(event) {
        event.preventDefault();
    });
    $('body a[href="#fr_achat"]').click(function(event) {
        event.preventDefault();
    });
    $('body a[href="#fr_stock"]').click(function(event) {
        event.preventDefault();
    });
    $('body a[href="#fr_fournisseur"]').click(function(event) {
        event.preventDefault();
    });
    $('body a[href="#fr_connect"]').click(function(event) {
        event.preventDefault();
    });
    document.getElementById("modifier").disabled = true; 
    $('body a[href="#modifier_compte"]').click(function(event) {
        event.preventDefault();
    });

}




            if (location.hash == "#fr_fournisseur") {
            if(localStorage.id_adminitrateur!=null){




                document.getElementById("valider").disabled = false; 
                document.getElementById("Supprimer").disabled = false; 
                document.getElementById("modifier").disabled = false; 

                document.getElementById("valider_credit").disabled = false; 
                document.getElementById("Supprimer_credit_fournisseur").disabled = false; 
                document.getElementById("payer").disabled = false;
                charge_combobox_fournisseur();
                 vider_credit_fournisseur();
                  charge_fournisseur();
                charge_combobox_fournisseur();

                charge_credit_fournisseur();
                charge_montant_credit_fournisseur();




                }
                else
                {document.getElementById("valider").disabled = true; 
                document.getElementById("Supprimer").disabled = true; 
                document.getElementById("modifier").disabled = true; 

                document.getElementById("valider_credit").disabled = true; 
                document.getElementById("Supprimer_credit_fournisseur").disabled = true; 
                document.getElementById("payer").disabled = true; 

                }
            
            }
            if (location.hash == "#fr_client") {
                if(localStorage.id_adminitrateur!=null){




                    document.getElementById("valider").disabled = false; 
                    document.getElementById("Supprimer").disabled = false; 
                    document.getElementById("modifier").disabled = false; 
                charge_client(); }
                else
                {document.getElementById("valider").disabled = true; 
                document.getElementById("Supprimer").disabled = true; 
                document.getElementById("modifier").disabled = true; 
            }

            }
            if (location.hash == "#fr_stock_securite") {
                if(localStorage.id_adminitrateur!=null){




                    document.getElementById("valider").disabled = false; 
                    document.getElementById("Supprimer").disabled = false; 
                    document.getElementById("modifier").disabled = false; 
                vider();
         
                charge_combobox_produit();
        charge_table_stock_securite();
        charge_table_produit_plus_vendu();
        charge_stock_atteint(); }
        else
        {document.getElementById("valider").disabled = true; 
        document.getElementById("Supprimer").disabled = true; 
        document.getElementById("modifier").disabled = true; 
    }
       
            }
            if (location.hash == "#fr_stock") {
                if(localStorage.id_adminitrateur!=null){

                    alert('ok'); 


                    document.getElementById("valider").disabled = false; 
                    document.getElementById("Supprimer").disabled = false; 
                    document.getElementById("modifier").disabled = false; 
              
                charge_stock();
            }
                else
                {document.getElementById("valider").disabled = true; 
                document.getElementById("Supprimer").disabled = true; 
                document.getElementById("modifier").disabled = true; 
            }

            }
            if (location.hash == "#fr_achat") {
               
                if(localStorage.id_adminitrateur!=null){
                



                    document.getElementById("valider").disabled = false; 
                    document.getElementById("Supprimer").disabled = false; 
                    
                    alert('ok');
                charge_combobox_produit();
                charge_achat();
            }
            else
            {document.getElementById("valider").disabled = true; 
            document.getElementById("Supprimer").disabled = true; 
            document.getElementById("modifier").disabled = true; 
        }

            }
            if (location.hash == "#fr_vente_comptant") {
                if(localStorage.id_adminitrateur!=null){




                    document.getElementById("valider").disabled = false; 
                    document.getElementById("Supprimer").disabled = false; 
                    
                    
                //Désactive le bouton imprimer
                document.getElementById("Imprimer").disabled = true; 
                
                vente_du_jour();
                sum_vente_du_jour();
charge_combobox_produit();
                const maTable = document.getElementById('idTable');


                maTable.onclick = e => {
                    if (!e.target.matches('td')) return
                    num_click = ` ${e.target.parentNode.rowIndex} `
                    alert(num_click);
                }

                
                // fin selection de l'index de la ligne


                panier_actuel = null;

            }
            else
            {document.getElementById("valider").disabled = true; 
            document.getElementById("Supprimer").disabled = true; 
            document.getElementById("Imprimer").disabled = true; 
        }

              


            }

            if (location.hash == "#fr_vente_credit") {
                if(localStorage.id_adminitrateur!=null){




                    document.getElementById("valider").disabled = false; 
                    document.getElementById("Supprimer").disabled = false; 
                    
                //Désactive le bouton imprimer
                document.getElementById("Imprimer").disabled = true; 

                const maTable = document.getElementById('idTable');


                maTable.onclick = e => {
                    if (!e.target.matches('td')) return
                    num_click = ` ${e.target.parentNode.rowIndex} `
                    alert(num_click);
                }

                // fin selection de l'index de la ligne


                panier_actuel = null;
                cout_achat_total= null;


                vente_du_jour();
                sum_vente_du_jour();
                charge_combobox_produit();

             
               
                    charge_client();
                }
                else
                {document.getElementById("valider").disabled = true; 
                document.getElementById("Supprimer").disabled = true; 
                document.getElementById("Imprimer").disabled = true; 
            }
                   

        }
            if (location.hash == "#fr_reglement") {
                if(localStorage.id_adminitrateur!=null){




                    document.getElementById("modifier_depence_mois").disabled = false; 
                    document.getElementById("valide_depence_mois").disabled = false; 
                    
                charge_depence_mois();
                liste_des_credit(); }
                else
                {document.getElementById("valide_depence_mois").disabled = true; 
                document.getElementById("modifier_depence_mois").disabled = true; 
               
            }
                 
            }
            if (location.hash == "#fr_inventaire") {
                if(localStorage.id_adminitrateur!=null){




                    document.getElementById("search").disabled = false; 
                
                    
                }
                else
                {document.getElementById("search").disabled = true; 
               
               
            }
            }
            if (location.hash == "#fr_connect") {
                if(localStorage.id_adminitrateur!=null){
                    document.getElementById("modifier").disabled = false; 
                    $('body a[href="#modifier_compte"]').click(function(event) {
                                      
                        // Prevent infinite loop
                        $(this).unbind('click');
                    
                        // Execute default action
                        event.currentTarget.click();
                    
                                });
            }else{
                document.getElementById("modifier").disabled = true; 
                $('body a[href="#modifier_compte"]').click(function(event) {
                    event.preventDefault();
                });
            }
            }
        });

        // Toggle the "active" class on the link currently navigated to.
        setActiveLink(fragmentId);
    }

    // If no fragment identifier is provided,
    if (!location.hash) {

        // default to #home.
        location.hash = "#salutation";
    }

    // Navigate once to the initial fragment identifier.
    navigate();

    // Navigate whenever the fragment identifier value changes.
    $(window).bind('hashchange', navigate);
}());