import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed( () =>{
    const description = `${this.name()} - ${this.age()}`
    return description
  })

  getHeroDescription(){
    return `${this.name()} - ${this.age()}`
  }

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetHero(){
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(age : number){
    this.age.set(age);
  }
}
