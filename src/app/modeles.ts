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
<<<<<<< HEAD
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
=======
};
>>>>>>> 00c887a026285c701b8cc3e0ab4716dbbb2ae772
