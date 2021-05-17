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
    AjouterLivreComponent
  ],
  providers: [FormBuilder,ReactiveFormsModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
