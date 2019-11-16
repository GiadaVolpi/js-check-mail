// array elenco emails
var iscritti = ["pippo.bianco@gmail.com", "minnie.rosso@gmail.com", "pluto.blu@gmail.com", "gambadilegno@gmail.com", "superpippo@gmail.com", "eta.beta@gmail.com", "clara.bella@gmail.com", "topolino.nero@gmail.com", "paperino.giallo@gmail.com", "winnie.pooh@gmail.com", "aliceinwonderland@gmail.com", "cappuccetto.rosso@gmail.com", "jasmine.8@gmail.com", "aladdin@gmail.com", "biancaneve@gmail.com", "cucciolo@gmail.com", "dotto91@gmail.com", "eolo@gmail.com", "mammolo@gmail.com", "brontolo@gmail.com", "frozen@gmail.com", "olaf@gmail.com", "flynn.ryder@gmail.com", "pocahontas@gmail.com", "john.smith@gmail.com"];
console.log (iscritti);

// chiedo all'utente di inserire la sua email
var mail = prompt ("Scrivi la tua mail");
console.log (mail);


// CICLO FOR per verificare che l'utente sia inserito nell'elenco di emails
for (var i = 0; i < iscritti.length; i++) {
    if (mail === iscritti[i]) {
        // l'utente è iscritto
        document.getElementById ("container-iscritto").setAttribute ("class", "visible")
        var mailEsistente = vero;
    }
}

if (!mailEsistente) {
    // se la mail dell'utente non è nell'elenco
    document.getElementById ("container-non-iscritto").setAttribute ("class", "visible")
}
