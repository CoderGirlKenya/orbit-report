import { stringify } from "@angular/compiler/src/util";
import { NgForm } from "@angular/forms";

export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
   // shouldShowWarning: boolean = false;


    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
       this.operational = operational;
      
    }

    shouldShowWarning(): boolean{
        for(let i =0; i < this.type.length; i++){
        if (this.type[i] === 'Space Debris'){
            return true;
        } else {
            return false;
        }
    }
}  
}
