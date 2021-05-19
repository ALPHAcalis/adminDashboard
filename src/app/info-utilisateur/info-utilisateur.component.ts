import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { type } from 'os';
import { UtilisateurService } from './utilisateur.service';

@Component({
  selector: 'app-info-utilisateur',
  templateUrl: './info-utilisateur.component.html',
  styleUrls: ['./info-utilisateur.component.css']
})
export class InfoUtilisateurComponent implements OnInit {
  utilisateur:any;
  emprunts:any[];
  idUtilisateur:number;
  usersForm!:FormGroup



  constructor(private infoUtilisateur:UtilisateurService,private route:ActivatedRoute,private formBuilder:FormBuilder) {
    this.idUtilisateur = this.route.snapshot.params['idUtilisateur'];
   }

  ngOnInit(): void {
    
    this.getUtilisateur(this.idUtilisateur);
    this.geEmpruntUtilisateur(this.idUtilisateur);
    this.initForm()
  }

  initForm() {
    this.usersForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, ],
      number: ['', Validators.required],
      adresse: ['', Validators.required],
      bookquantity: ['', Validators.required],
      ExpireDate: ['', Validators.required],
      subsciprtionType: ['', Validators.required],
    }); 

   
   }

  async getUtilisateur(idUtilisateur:number){
     this.utilisateur = await this.infoUtilisateur.getSingleUser(idUtilisateur).toPromise();
     console.log(this.utilisateur);
  }
  async geEmpruntUtilisateur(idUtilisateur:number){
     this.emprunts = await this.infoUtilisateur.getUsersBooks(idUtilisateur).toPromise();

     this.usersForm.controls['firstName'].setValue(this.utilisateur.prenom)
     this.usersForm.controls['lastName'].setValue(this.utilisateur.nom)
     this.usersForm.controls['email'].setValue(this.utilisateur.email)  
     this.usersForm.controls['number'].setValue(this.utilisateur.numeroTele)
     this.usersForm.controls['adresse'].setValue(this.utilisateur.adresse)
     this.usersForm.controls['bookquantity'].setValue(this.utilisateur.nombreAuto)
     this.usersForm.controls['ExpireDate'].setValue(this.utilisateur.dateExpiration)
     this.usersForm.controls['subsciprtionType'].setValue(this.utilisateur.typeAbonnement)
  }

  getNameOfSubscription(codeAbonnement:string){
    var type=""
    switch(codeAbonnement){
      case "0":{type= "Basic";break }
      case "1":{type= "Essentiel";break}
      case "2":{type= "PRO";break}
      case "3":{type= "Etudiant";break}
    }
    return type;
  }

  getStatut(statut:string){
    var statutValue=""
    switch(statut){
      case "0":{statutValue= "en cours";break }
      case "1":{statutValue= "terminé";break}
    }
    return statutValue;
  }


  updateUsersData(){
    const formValue = this.usersForm.value
    const prenom=formValue['firstName']
    const nom=formValue['lastName']
    const email=formValue['email']
    const numero=formValue['number']
    const adresse=formValue['adresse']
    const nombreAuto=formValue['bookquantity']
    const dateExpiration=formValue['ExpireDate']
    const typeAbonnement=formValue['subsciprtionType']
    this.infoUtilisateur.updateUsersData(this.idUtilisateur,nom,prenom,email,numero,adresse,dateExpiration,typeAbonnement,nombreAuto).toPromise().then((response: any) => {
      const s = response.status;;
     console.log(s);
    
  })
}


  
  

}
