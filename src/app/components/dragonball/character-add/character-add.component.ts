import { Component, output, signal } from '@angular/core';
import { Hero } from '../../../interfaces/hero';

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css'
})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);
  newCharacter = output<Hero>();

  changeName(event : Event) {
    this.name.set((event.target as HTMLInputElement).value);
  }

   changePower(event : Event) {
    this.power.set((Number)((event.target as HTMLInputElement).value));
   } 

  addHero() {
    this.newCharacter.emit({name: this.name(), power: this.power()});
  }

}
