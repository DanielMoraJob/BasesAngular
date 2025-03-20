import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { Hero } from '../../../interfaces/hero';

@Component({
  selector: 'app-character-list',
  imports: [NgClass],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {

  heroes = input.required<Hero[]>();
  listName = input.required<string>();

}
