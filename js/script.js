
// Esercizio MAIL
//Creare una lista di indirizzi mail
const emails = [
    'prova1@email.it',
    'prova2@email.it',
    'prova3@email.it',
    'prova4@email.it',
    'prova5@email.it',
    'prova6@email.it',
    'prova7@email.it',
    'prova8@email.it'
]
//Chiedere all'utente di inserire al propria mail
let user_mail = prompt('Inserisci il tuo indirizzo email: ')
//Verificare che l'utente sia presente nella lista
let email_found = false;
for(let i = 0; i< emails.length; i++){
    if(user_mail == emails[i]){
        email_found = true;
    }
}
//Stampare un messagggio
if (email_found){
    alert('Indirizzo email trovato!');
}else{
    alert('Indirizzo mail non trovato');
}