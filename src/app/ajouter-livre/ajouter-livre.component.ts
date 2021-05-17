import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray,ReactiveFormsModule} from '@angular/forms';
import { ListeLivresService } from 'app/liste-livres/liste-livres.service';

@Component({
  selector: 'app-ajouter-livre',
  templateUrl: './ajouter-livre.component.html',
  styleUrls: ['./ajouter-livre.component.css']
})
export class AjouterLivreComponent implements OnInit {
  selectFile:File=null
  addBookForm!:FormGroup

  constructor(private livre:ListeLivresService,
           private formBuilder:FormBuilder,
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addBookForm = this.formBuilder.group({
      dateAchat: ['', Validators.required],
      codeBar: ['', Validators.required],
      codeNfC: ['', [Validators.required, Validators.email]],
      titre: ['', Validators.required],
      auteur: ['', Validators.required],
      genreLitteraire: ['', Validators.required],
      motCle: ['', Validators.required],
      resume: ['', Validators.required],
    });
   }

  onFileSelected(event){
    this.selectFile=<File>event.target.files[0];
    console.log(this.selectFile);
  }
  
  async onSubmitForm(){
   
  
  
}

  upload(){
    const formValue = this.addBookForm.value
    const dateAchat = formValue['dateAchat'];
    const codeBar = formValue['codeBar'];
    const codeNfC = formValue['codeNfC'];
    const titre = formValue['titre'];
    const auteur = formValue['auteur'];
    const genreLitteraire = formValue['genreLitteraire'];
    const motCle = formValue['motCle'];
    const resume = formValue['resume'];
    console.log(formValue)
    var fd = new FormData();
    fd.append('file',this.selectFile,this.selectFile.name);
    fd.append('dateAchat',dateAchat);
    fd.append('codeBar',codeBar);
    fd.append('codeNfc',codeNfC);
    fd.append('titre',titre);
    fd.append('auteur',auteur);
    fd.append('genreLitteraire',genreLitteraire);
    fd.append('motCle',motCle);
    fd.append('resume',resume);
    fd.append('image',resume);
   
    //console.log(...fd); 

    this.livre.onUpload(fd).toPromise();
  }


}
