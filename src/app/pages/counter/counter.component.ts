import { Component, inject, signal, Signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-counter',
  imports: [RouterModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  private readonly router = inject(Router);

  counter : number = 0;
  counterSignal = signal(0);

  increeaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current - value);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

  go(){
    this.router.navigate(['/about-us']);
  }

}
