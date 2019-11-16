//Creare un array contenente una lista di email.
//Attraverso un prompt chiedere all'utente la sua email.
//Controllare se l'email dell'utente è presente nell'array e stampare un messaggio appropriato.

// array elenco emails
var iscritti = ["pippo.bianco@gmail.com", "minnie.rosso@gmail.com", "pluto.blu@gmail.com", "gambadilegno@gmail.com", "superpippo@gmail.com", "eta.beta@gmail.com", "clara.bella@gmail.com", "topolino.nero@gmail.com", "paperino.giallo@gmail.com", "winnie.pooh@gmail.com", "aliceinwonderland@gmail.com", "cappuccetto.rosso@gmail.com", "jasmine.8@gmail.com", "aladdin@gmail.com", "biancaneve@gmail.com", "cucciolo@gmail.com", "dotto91@gmail.com", "eolo@gmail.com", "mammolo@gmail.com", "brontolo@gmail.com", "frozen@gmail.com", "olaf@gmail.com", "flynn.ryder@gmail.com", "pocahontas@gmail.com", "john.smith@gmail.com"];
console.log (iscritti);

// chiedo all'utente di inserire la sua email
var mail = prompt ("Scrivi la tua mail");
console.log (mail);

// CICLO FOR per verificare che l'utente sia inserito nell'elenco di emails
for (var i = 0; i < iscritti.length; i++) {

    if (mail === iscritti[i]) {
        // se è iscritto
        console.log ("ci sei");
        //document.getElementById ("container-iscritto").setAttribute ("class", "visible");
    } else {
        //se non è iscritto
        console.log ("non ci sei");
        //document.getElementById ("container-non-iscritto").setAttribute ("class", "visible");
    }
}
