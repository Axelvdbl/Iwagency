import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
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

import { PostService } from './cinema/post.service';
import { Cine1Service } from './cinema/cine1.service';
import { Cine2Service } from './cinema/cine2.service';
import { Salle1AService } from './salle/salle1A.service';
import { Salle1BService } from './salle/salle1B.service';
import { Salle1CService } from './salle/salle1C.service';
import { Salle2AService } from './salle/salle2A.service';
import { Salle2BService } from './salle/salle2B.service';
import { Salle2CService } from './salle/salle2C.service';
import { Star1Service } from './film/star1.service';
import { Transp1Service } from './film/transp1.service';
import { Bay1Service } from './film/bay1.service';
import { Seign1Service } from './film/seign1.service';
import { Tuches1Service } from './film/tuches1.service';
import { Fast1Service } from './film/fast1.service';
import { Mmm1Service } from './film/mmm1.service';
import { Momie1Service } from './film/momie1.service';
import { Pirate1Service } from './film/pirate1.service';
import { Trans1Service } from './film/trans1.service';
import { Mech1Service } from './film/mech1.service';
import { Wonder1Service } from './film/wonder1.service';
import { Bay2Service } from './film/bay2.service';
import { Pirate2Service } from './film/pirate2.service';
import { Mmm2Service } from './film/mmm2.service';
import { Mech2Service } from './film/mech2.service';
import { Star2Service } from './film/star2.service';
import { Fast2Service } from './film/fast2.service';
import { Trans2Service } from './film/trans2.service';
import { Transp2Service } from './film/transp2.service';
import { Seign2Service } from './film/seign2.service';
import { Momie2Service } from './film/momie2.service';
import { Tuches2Service } from './film/tuches2.service';
import { Wonder2Service } from './film/wonder2.service';

import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Cinema1Component,
    Cinema2Component,
    Salle1AComponent,
    Salle1BComponent,
    Salle1CComponent,
    Salle2AComponent,
    Salle2BComponent,
    Salle2CComponent,
    Star1Component,
    Transp1Component,
    Bay1Component,
    Seign1Component,
    Tuches1Component,
    Fast1Component,
    Mmm1Component,
    Momie1Component,
    Pirate1Component,
    Trans1Component,
    Mech1Component,
    Wonder1Component,
    Star2Component,
    Transp2Component,
    Bay2Component,
    Seign2Component,
    Tuches2Component,
    Fast2Component,
    Mmm2Component,
    Momie2Component,
    Pirate2Component,
    Trans2Component,
    Mech2Component,
    Wonder2Component,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    Cine1Service,
    Cine2Service,
    Salle1AService,
    Salle1BService,
    Salle1CService,
    Salle2AService,
    Salle2BService,
    Salle2CService,
    Star1Service,
    Transp1Service,
    Bay1Service,
    Seign1Service,
    Tuches1Service,
    Fast1Service,
    Mmm1Service,
    Momie1Service,
    Pirate1Service,
    Trans1Service,
    Mech1Service,
    Wonder1Service,
    Star2Service,
    Transp2Service,
    Bay2Service,
    Seign2Service,
    Tuches2Service,
    Fast2Service,
    Mmm2Service,
    Momie2Service,
    Pirate2Service,
    Trans2Service,
    Mech2Service,
    Wonder2Service,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
