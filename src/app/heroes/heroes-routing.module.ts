import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateHeroComponent} from './create-hero/create-hero.component';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';

const routes: Routes = [
  {
    path: 'top-heroes',
    component: TopHeroesComponent
  },
  {
    path: 'create-hero',
    component: CreateHeroComponent
  },
  {
    path: 'list-heroes',
    component: ListHeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
