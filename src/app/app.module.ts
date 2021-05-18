import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { AjouterLivreComponent } from './ajouter-livre/ajouter-livre.component';
import { InformationLivreComponent } from './information-livre/information-livre.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { InfoUtilisateurComponent } from './info-utilisateur/info-utilisateur.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ListeLivresComponent,
    AjouterLivreComponent,
    InformationLivreComponent,
    ListeUtilisateurComponent,
    InfoUtilisateurComponent
  ],
  providers: [FormBuilder,ReactiveFormsModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
