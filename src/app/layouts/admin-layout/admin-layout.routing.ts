import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';

import { NotificationsComponent } from '../../notifications/notifications.component';
import { ListeLivresComponent } from '../../liste-livres/liste-livres.component';
import { AjouterLivreComponent } from '../../ajouter-livre/ajouter-livre.component';
import { InformationLivreComponent } from '../../information-livre/information-livre.component';
import { ListeUtilisateurComponent } from '../../liste-utilisateur/liste-utilisateur.component';
import { InfoUtilisateurComponent } from '../../info-utilisateur/info-utilisateur.component';
import { EnrengistrerRetourComponent } from '../../enrengistrer-retour/enrengistrer-retour.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'livres',          component: ListeLivresComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'enrengistrerretour',     component: EnrengistrerRetourComponent},  
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'ajouterlivre',        component: AjouterLivreComponent },
    { path: 'informationLivre',        component: InformationLivreComponent },
    { path: 'listeUtilisateur',        component: ListeUtilisateurComponent },
    { path: 'listeUtilisateur/:idUtilisateur',        component: InfoUtilisateurComponent },
];
