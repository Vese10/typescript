// Definizione delle interfacce

interface IPartecipante {
  nome: string;
  cognome: string;
  paeseDiOrigine: string;
  livelloDiIstruzione: string;
  competenzeLinguistiche: string[];
  ambitoDiFormazione: string;
  iscrivitiCorso(corso: ICorso): void;
}

interface ICorso {
  titolo: string;
  descrizione: string;
  settoreProfessionale: string;
  durata: number;
  elencoIscritti: IPartecipante[];
  aggiungiPartecipante(partecipante: IPartecipante): void;
}

interface IAzienda {
  nomeAzienda: string;
  settoreDiAttivita: string;
  descrizione: string;
  posizioniAperte: string[];
  offriPosizione(partecipante: IPartecipante, posizione: string): void;
}

// Implementazione delle classi

class Partecipante implements IPartecipante {
  constructor(
    public nome: string,
    public cognome: string,
    public paeseDiOrigine: string,
    public livelloDiIstruzione: string,
    public competenzeLinguistiche: string[],
    public ambitoDiFormazione: string
  ) {}

  iscrivitiCorso(corso: ICorso): void {
    corso.aggiungiPartecipante(this);
  }
}

class Corso implements ICorso {
  public elencoIscritti: IPartecipante[] = [];

  constructor(
    public titolo: string,
    public descrizione: string,
    public settoreProfessionale: string,
    public durata: number
  ) {}

  aggiungiPartecipante(partecipante: IPartecipante): void {
    this.elencoIscritti.push(partecipante);
  }
}

class Azienda implements IAzienda {
  public posizioniAperte: string[] = [];

  constructor(
    public nomeAzienda: string,
    public settoreDiAttivita: string,
    public descrizione: string
  ) {}

  offriPosizione(partecipante: IPartecipante, posizione: string): void {
    if (this.posizioniAperte.includes(posizione)) {
      console.log(
        `${this.nomeAzienda} offre la posizione di ${posizione} a ${partecipante.nome} ${partecipante.cognome}`
      );
    } else {
      console.log(`La posizione di ${posizione} non è disponibile.`);
    }
  }
}

// Creazione delle istanze e test della logica

// Creazione di 12 partecipanti
const partecipanti: IPartecipante[] = [
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
const corsi: ICorso[] = [
  new Corso("Corso di Informatica", "Impara a programmare", "Artigianato", 6),
  new Corso("Corso di Ceramica", "Tecniche di lavorazione della ceramica.", "Artigianato", 4),
  new Corso("Corso di Cucina", "Scopri l'arte della cucina tradizionale regionale", "Artigianato", 5)
];

// Creazione di 3 aziende partner
const aziende: IAzienda[] = [
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