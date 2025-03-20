import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface Heroe {
  name: string;
  power : number;
}
@Component({
  selector: 'app-dragonball',
  imports: [
    NgClass
  ],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {

  name = signal('Goku');
  power = signal(100);

  heroes = signal([
      {
        name: 'Goku',
        power: 100
      },
      {
        name: 'Vegeta',
        power: 90
      },
      {
        name: 'Gohan',
        power: 80
      }
  ]); 

  changeName(event : Event) {
    this.name.set((event.target as HTMLInputElement).value);
  }

   changePower(event : Event) {
    this.power.set((Number)((event.target as HTMLInputElement).value));
   } 

  addHero() {
    this.heroes.update( h => [...h, {name: this.name(), power: this.power()}]);
  }
}
