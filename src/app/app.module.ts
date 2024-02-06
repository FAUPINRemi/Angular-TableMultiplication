import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { OnetableComponent } from './component/onetable/onetable.component';
import { AlltableComponent } from './component/alltable/alltable.component';
import { FooterComponent } from './component/footer/footer.component';
import { IpdisplayComponent } from './component/ipdisplay/ipdisplay.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { IpServiceService } from './service/ip-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    OnetableComponent,
    AlltableComponent,
    FooterComponent,
    IpdisplayComponent,
    IpServiceService,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]



 

})
export class AppModule { }

