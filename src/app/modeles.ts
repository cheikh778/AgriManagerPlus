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
  type : string;
  quantite: number;
  paysan_id: number;
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

export interface  Tache
{

}

export interface  ParcelleAgricole
{

}

export interface  Eau
{

}

export interface  intratAgricole
{

}

export interface  Publication
{

}

export interface  Materiel
{

}

export interface  Culture
{

}
