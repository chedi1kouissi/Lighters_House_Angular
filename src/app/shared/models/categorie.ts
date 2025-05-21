export class Categorie {
    id?: string;
    nom?: string;
    constructor(args:Categorie={}){
        this.id=args.id;
        this.nom=args.nom;
    }
}
