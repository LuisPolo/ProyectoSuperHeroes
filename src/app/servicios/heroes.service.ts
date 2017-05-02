import { Injectable } from '@angular/core';
import {heroes}  from './mockup/heroes.mock';

@Injectable()
export class HeroesService {

  private heroes : Heroe [] = heroes;

  constructor() {
    console.log("Servicio listo para usarse");
   }

   getHeroes():Heroe[]{
     return this.heroes;
   }
}

export interface Heroe{
nombre : string;
bio : string;
img : string;
aparicion : string;
casa : string;

}
