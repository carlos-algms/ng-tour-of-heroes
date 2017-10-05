import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HeroesRoutingModule } from './heroes-routing.module';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { AppFormsModule } from '../forms/forms.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HeroesRoutingModule,
    AppFormsModule
  ],
  declarations: [
    TopHeroesComponent,
    CreateHeroComponent,
    ListHeroesComponent
  ],
  exports: [
    TopHeroesComponent
  ]
})
export class HeroesModule { }
