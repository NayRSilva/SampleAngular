export class Recipe{
    public name:string;
    public body:string;
    public imagePath:string;

    constructor(name:string, body:string, imagePath:string){
        this.name = name;
        this.body = body;
        this.imagePath = imagePath;
    }
}