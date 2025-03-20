import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';
import { DragonballSuperComponent } from './pages/dragonball-super/dragonball-super.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'hero',
        component: HeroComponent
    },
    {
        path: 'dragon-ball',
        component: DragonballComponent
    },
    {
        path: 'dragon-ball-super',
        component: DragonballSuperComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
