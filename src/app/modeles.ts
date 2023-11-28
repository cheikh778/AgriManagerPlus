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

}

export interface  IntratAgricole
{

}

export interface  Publication
{

}

export interface  Materiel
{

}


export interface  AssignationTache
{

}
export interface  AssignationTache
{

}
