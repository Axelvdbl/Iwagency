import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cinema1Component } from './cinema/cinema1.component';
import { Cinema2Component } from './cinema/cinema2.component';
import { Salle1AComponent } from './salle/salle1A.component';
import { Salle1BComponent } from './salle/salle1B.component';
import { Salle1CComponent } from './salle/salle1C.component';
import { Salle2AComponent } from './salle/salle2A.component';
import { Salle2BComponent } from './salle/salle2B.component';
import { Salle2CComponent } from './salle/salle2C.component';
import { Star1Component } from './film/star1.component';
import { Transp1Component } from './film/transp1.component';
import { Bay1Component } from './film/bay1.component';
import { Seign1Component } from './film/seign1.component';
import { Tuches1Component } from './film/tuches1.component';
import { Fast1Component } from './film/fast1.component';
import { Mmm1Component } from './film/mmm1.component';
import { Momie1Component } from './film/momie1.component';
import { Pirate1Component } from './film/pirate1.component';
import { Trans1Component } from './film/trans1.component';
import { Mech1Component } from './film/mech1.component';
import { Wonder1Component } from './film/wonder1.component';
import { Bay2Component } from './film/bay2.component';
import { Pirate2Component } from './film/pirate2.component';
import { Mmm2Component } from './film/mmm2.component';
import { Mech2Component } from './film/mech2.component';
import { Star2Component } from './film/star2.component';
import { Fast2Component } from './film/fast2.component';
import { Trans2Component } from './film/trans2.component';
import { Transp2Component } from './film/transp2.component';
import { Seign2Component } from './film/seign2.component';
import { Momie2Component } from './film/momie2.component';
import { Tuches2Component } from './film/tuches2.component';
import { Wonder2Component } from './film/wonder2.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',                  component: HomepageComponent },
  { path: 'home/1',                component: Cinema1Component },
  { path: 'home/2',                component: Cinema2Component },
  { path: 'home/1/1',              component: Salle1AComponent },
  { path: 'home/1/2',              component: Salle1BComponent },
  { path: 'home/1/3',              component: Salle1CComponent },
  { path: 'home/2/1',              component: Salle2AComponent },
  { path: 'home/2/2',              component: Salle2BComponent },
  { path: 'home/2/3',              component: Salle2CComponent },
  { path: 'home/1/1/1',            component: Star1Component },
  { path: 'home/1/1/2',            component: Transp1Component },
  { path: 'home/1/1/3',            component: Bay1Component },
  { path: 'home/1/1/4',            component: Seign1Component },
  { path: 'home/1/2/1',            component: Tuches1Component },
  { path: 'home/1/2/2',            component: Fast1Component },
  { path: 'home/1/2/3',            component: Mmm1Component },
  { path: 'home/1/2/4',            component: Momie1Component },
  { path: 'home/1/3/1',            component: Pirate1Component },
  { path: 'home/1/3/2',            component: Trans1Component },
  { path: 'home/1/3/3',            component: Mech1Component },
  { path: 'home/1/3/4',            component: Wonder1Component },
  { path: 'home/2/1/1',            component: Star2Component },
  { path: 'home/2/1/2',            component: Wonder2Component },
  { path: 'home/2/1/3',            component: Pirate2Component },
  { path: 'home/2/1/4',            component: Fast2Component },
  { path: 'home/2/2/1',            component: Trans2Component },
  { path: 'home/2/2/2',            component: Momie2Component },
  { path: 'home/2/2/3',            component: Seign2Component },
  { path: 'home/2/2/4',            component: Transp2Component },
  { path: 'home/2/3/1',            component: Mech2Component },
  { path: 'home/2/3/2',            component: Mmm2Component },
  { path: 'home/2/3/3',            component: Bay2Component },
  { path: 'home/2/3/4',            component: Tuches2Component },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
