export interface Inscription{
    id : number;
    nom : string;
    prenom : string;
    contact : string;
    email : string;
    password : string;
};

export interface Authentification{
    email : string;
    password : string;
    role : string;
    token : string;
};

export interface ValidationProjet{
    idDemande :number;
    nomComplet : string;
    email : string;
    nomProjet : string;
    description : string;
    status : string;
}
export interface User{
    id : number;
    nom : string;
    prenom : string;
    contact : string;
    email : string;
    password : string;
    role : string;
    status : string;
    photo: string;
}




export interface Semence {
   id : number;
  nom : string;
  description : string;
  typeSemence : string;
  quantite: number;
}


export interface Mail{
    objet : string;
    message : string;
}

export interface  Culture
{
    id : number;
    nom : String;
    dateDebut : Date;
    dateFin : Date;
    paysan : number | null;
    
}

export enum CultureStatus {
  ENCOURS = 'ENCOURS',
  TERMINE = 'TERMINE'
}

export interface  Tache
{
    idTache : number,
    nomTache : string;
    description : string;
}

export interface  Employee
{
  id : number;
  firstName : string;
  lastName : string;
  mail : string;
  password : string;
}

export interface  Eau
{

    eauId:number;
    source:string;
    quantite:number;


}

export interface  ParcelleAgricole
{

     parcelle_id:number;
     parcelle_nom:string;
    parcelle_description:string;
     parcelle_type:string;
     parcelle_location:string;

}

export interface  Publication
{

}

export interface  Materiel
{
    materielId:number;
    nom:string;
    type:string;
    description:string;
    quantite:number;
}


export interface  AssignationTache
{
    assignationId : number;
    employee? : number;
    tache?: number;
    dateDebut : Date;
    dateFin : Date;
  // Add this line
    status : 'en_attente';
}
export enum AssignationTacheStatus {
    en_attente = 'en_attente',
    valider = 'valider'
  }

