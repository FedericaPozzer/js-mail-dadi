// console.log("HelloWorld");

// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull'esito del controllo.


// 1. creare una lista di tot e-mail (ARRAY)
// 2. inserire un prompt (che poi diventa input di testo nell'HTML) in cui chiedo la mail all'utente
// 3. IF l'indirizzo inserito dall'utente è presente nella lista dei miei indirizzi -- stampo benvenuto
// 4. ELSE l'indirizzo inserito dall'utente non è presente nella lista dei miai indirizzi -- stampo indirizzo non corretto


// step 1.
const my_mailing_list = [
    "mail-1@gmail.com",
    "mail-2@gmail.com",
    "mail-3@gmail.com",
    "mail-4@gmail.com",
    "mail-5@gmail.com",
    "mail-6@gmail.com",
    "mail-7@gmail.com",
    "mail-8@gmail.com",
    "mail-9@gmail.com",
    "mail-10@gmail.com",
    "mail-11@gmail.com",
    "mail-12@gmail.com",
    "mail-13@gmail.com",
    "mail-14@gmail.com",
    "mail-15@gmail.com"
];
// console.log(my_mailing_list);

// step 2.
const button = document.getElementById("button");

button.addEventListener("click", 
    function () {
    // console.log("ciao");
    let user_mail = document.getElementById("user-mail").value;
    document.querySelector(".user-mail").innerHTML = user_mail;
    // console.log(user_mail);
   
   
// steps 3. & 4.
let mail_absent = true;


for (i = 0; i < my_mailing_list.length; i++) {

    const current_mail = my_mailing_list[i];

    if (user_mail == current_mail) {
        mail_absent = false;
    }
}

if (mail_absent == false) {
    // console.log("Benvenuto " + user_mail);
    document.getElementById("welcome-or-not").innerHTML = "il tuo indirizzo è presente nella nostra mailing-list!";
}
else {
    // console.log("L'indirizzo e-mail inserito non è valido, ricarica la pagina per riprovare!");
    document.getElementById("welcome-or-not").innerHTML = "Ci dispiace, l'indirizzo e-mail che hai inserito non è valido!"
}
    }
);


