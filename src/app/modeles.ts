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
    id :number;
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
    role : string
}