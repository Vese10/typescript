// Definizione delle interfacce
// Implementazione delle classi
var Partecipante = /** @class */ (function () {
    function Partecipante(nome, cognome, paeseDiOrigine, livelloDiIstruzione, competenzeLinguistiche, ambitoDiFormazione) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseDiOrigine = paeseDiOrigine;
        this.livelloDiIstruzione = livelloDiIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoDiFormazione = ambitoDiFormazione;
    }
    Partecipante.prototype.iscrivitiCorso = function (corso) {
        corso.aggiungiPartecipante(this);
    };
    return Partecipante;
}());
var Corso = /** @class */ (function () {
    function Corso(titolo, descrizione, settoreProfessionale, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        this.elencoIscritti = [];
    }
    Corso.prototype.aggiungiPartecipante = function (partecipante) {
        this.elencoIscritti.push(partecipante);
    };
    return Corso;
}());
var Azienda = /** @class */ (function () {
    function Azienda(nomeAzienda, settoreDiAttivita, descrizione) {
        this.nomeAzienda = nomeAzienda;
        this.settoreDiAttivita = settoreDiAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = [];
    }
    Azienda.prototype.offriPosizione = function (partecipante, posizione) {
        if (this.posizioniAperte.includes(posizione)) {
            console.log("".concat(this.nomeAzienda, " offre la posizione di ").concat(posizione, " a ").concat(partecipante.nome, " ").concat(partecipante.cognome));
        }
        else {
            console.log("La posizione di ".concat(posizione, " non \u00E8 disponibile."));
        }
    };
    return Azienda;
}());
// Creazione delle istanze e test della logica
// Creazione di 12 partecipanti
var partecipanti = [
    new Partecipante("Mario", "Rossi", "Italia", "Diploma", ["Italiano", "Inglese"], "Informatica"),
    new Partecipante("Amr", "Nefertari", "Egitto", "Laurea", ["Arabo", "Inglese"], "Ceramica"),
    new Partecipante("Omar", "Layla", "Siria", "Diploma", ["Arabo", "Italiano"], "Cucina"),
    new Partecipante("Youssef", "Fatima", "Marocco", "Laurea", ["Arabo", "Francese"], "Informatica"),
    new Partecipante("Anis", "Amira", "Tunisia", "Diploma", ["Arabo", "Italiano"], "Ceramica"),
    new Partecipante("Chinedu", "Ada", "Nigeria", "Laurea", ["Inglese"], "Cucina"),
    new Partecipante("Elena", "Bianchi", "Italia", "Diploma", ["Italiano", "Inglese"], "Informatica"),
    new Partecipante("Amun", "Anippe", "Egitto", "Laurea", ["Arabo", "Inglese"], "Ceramica"),
    new Partecipante("Ibrahim", "Aisha", "Palestina", "Diploma", ["Arabo", "Italiano"], "Cucina"),
    new Partecipante("Elias", "Nour", "Libano", "Laurea", ["Arabo", "Francese"], "Informatica"),
    new Partecipante("Ahmed", "Sana", "Pakistan", "Diploma", ["Arabo", "Italiano"], "Ceramica"),
    new Partecipante("Mohamed", "Mariama", "Sierra Leone", "Laurea", ["Inglese"], "Cucina")
];
// Creazione di 3 corsi di formazione
var corsi = [
    new Corso("Corso di Informatica", "Impara a programmare", "Artigianato", 6),
    new Corso("Corso di Ceramica", "Tecniche di lavorazione della ceramica.", "Artigianato", 4),
    new Corso("Corso di Cucina", "Scopri l'arte della cucina tradizionale regionale", "Artigianato", 5)
];
// Creazione di 3 aziende partner
var aziende = [
    new Azienda("IT Ferrara", "Artigianato", "Azienda specializzata nella creazione di web app."),
    new Azienda("Ceramiche Artistiche", "Artigianato", "Azienda leader nella produzione di ceramiche artistiche."),
    new Azienda("Tri Scalin", "Artigianato", "Ristorante di cucina tradizionale emiliana")
];
// Definire le posizioni aperte per le aziende
aziende[0].posizioniAperte.push("Informatico");
aziende[1].posizioniAperte.push("Ceramista");
aziende[2].posizioniAperte.push("Cuoco");
// Iscrizione dei partecipanti ai corsi
partecipanti[0].iscrivitiCorso(corsi[0]);
partecipanti[1].iscrivitiCorso(corsi[1]);
partecipanti[2].iscrivitiCorso(corsi[2]);
partecipanti[3].iscrivitiCorso(corsi[0]);
partecipanti[4].iscrivitiCorso(corsi[1]);
partecipanti[5].iscrivitiCorso(corsi[2]);
partecipanti[6].iscrivitiCorso(corsi[0]);
partecipanti[7].iscrivitiCorso(corsi[1]);
partecipanti[8].iscrivitiCorso(corsi[2]);
partecipanti[9].iscrivitiCorso(corsi[0]);
partecipanti[10].iscrivitiCorso(corsi[1]);
partecipanti[11].iscrivitiCorso(corsi[2]);
// Offerta di posizioni lavorative
aziende[0].offriPosizione(partecipanti[0], "Informatico");
aziende[0].offriPosizione(partecipanti[3], "Informatico");
aziende[0].offriPosizione(partecipanti[6], "Informatico");
aziende[0].offriPosizione(partecipanti[9], "Informatico");
aziende[1].offriPosizione(partecipanti[1], "Ceramista");
aziende[1].offriPosizione(partecipanti[4], "Ceramista");
aziende[1].offriPosizione(partecipanti[7], "Ceramista");
aziende[1].offriPosizione(partecipanti[10], "Ceramista");
aziende[2].offriPosizione(partecipanti[2], "Cuoco");
aziende[2].offriPosizione(partecipanti[5], "Cuoco");
aziende[2].offriPosizione(partecipanti[8], "Cuoco");
aziende[2].offriPosizione(partecipanti[11], "Cuoco");
console.log(corsi[0].elencoIscritti);
console.log(corsi[1].elencoIscritti);
console.log(corsi[2].elencoIscritti);
