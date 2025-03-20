import { effect, Injectable, signal } from '@angular/core';
import { Hero } from '../interfaces/hero';

const LoadFromLocalStorage = () : Hero[] =>{
  const heroes = sessionStorage.getItem('heroes');
  return heroes ? JSON.parse(heroes) : [];
}

@Injectable({
  providedIn: 'root'
})

export class DragonballService {

  heroes = signal(LoadFromLocalStorage()); 

  SaveSesionStorage = effect( () => {
    console.log('Guardando en el storage, len: ', this.heroes().length);
    sessionStorage.setItem('heroes', JSON.stringify(this.heroes())) 
  });

  constructor() { }

  addHeroes(hero : Hero) {
    this.heroes.update( h => [...h, hero] );
  }

}
