export class Professional 
{
    public name:string;
    public age:number;
    public weight:number;
    public height:number;
    public isRetired:boolean;
    public nationality:string;
    public oscarsNumber:number;
    public profession:string;

constructor(name:string,age:number,weight:number,height:number,isRetired:boolean,nacionality:string,oscarsNumber:number,profession:string)
{
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nacionality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;

}
    public printAll()
    {
        console.group(Professional)
            console.log("Name - " + this.name);
            console.log("Age - " + this.age);
            console.log("Weight - " + this.weight);
            console.log("Height - " + this.height);
            console.log("Is Retired? - " + this.isRetired);
            console.log("Nacionality - " + this.nationality);
            console.log("Oscars Numbers - " + this.oscarsNumber);
            console.log("Profession - " + this.profession);
        console.groupEnd(); 
    }
}