
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

//Esercizio DADI
//Generare un numero da 1 a 6 per il PC
let pc_num = Math.floor(Math.random()*6)+1;
alert(`Il numero assegnato al PC e' ${pc_num}`)
//Generare u numero da 1 a 6 per il giocatore
let player_num = Math.floor(Math.random()*6)+1;
alert(`Il numero assegnato al giocatore e' ${player_num}`)
//Verificare il vincitore
if(pc_num>player_num){
    alert(`PC VINCE! ${pc_num} e' piu' grande di ${player_num}`)
}else  if (pc_num<player_num){
    alert(`PLAYER VINCE! ${pc_num} e' piu' piccolo di ${player_num}`)
}else{
    alert(`PAREGGIO! ${pc_num} e' uguale a ${player_num}`)
}