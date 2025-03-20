import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { Hero } from '../../interfaces/hero';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball',
  imports: [
    CommonModule,
    CharacterListComponent,
    CharacterAddComponent
],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css'
})
export class DragonballSuperComponent {

  // DI
  dragonBallService = inject(DragonballService);

  heroes = this.dragonBallService.heroes;

  constructor() {
   
  }

  addHeroes(hero : Hero) {
    this.dragonBallService.addHeroes(hero);
  }

}
