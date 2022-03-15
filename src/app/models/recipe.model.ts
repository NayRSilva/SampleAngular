import { Ingredient } from 'src/app/models/ingredient.model';
export class Recipe{
    public name:string;
    public body:string;
    public imagePath:string;
    public ingredients: Array<Ingredient>;

    constructor(name:string, body:string, imagePath:string){
        this.name = name;
        this.body = body;
        this.imagePath = imagePath;
        this.ingredients = [];
    }
}