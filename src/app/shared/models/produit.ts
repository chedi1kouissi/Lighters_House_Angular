export class Produit {
    id?: string;
    nom?: string;
    image?: string;
    image2?:string;
    prix?: number;
    description?: string;
    categId:string;
    stock:number;
    promo:number;
    currentImage?:string;
    constructor(args: Produit) {
    this.id = args.id;
    this.nom = args.nom;
    this.image = args.image;
    this.prix = args.prix;
    this.description = args.description;
    this.categId=args.categId;
    this.stock=args.stock;
    this.promo=args.promo;
    this.image2=args.image2;
    this.currentImage=args.currentImage;
 }
}
