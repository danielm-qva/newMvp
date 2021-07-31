import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Services/auth-service.service';
import {FormGroup , FormControl , Validator} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    
  Flogin = new FormGroup({
    user : new FormControl(),
    pass : new FormControl()
  })
    
  constructor(public service:AuthServiceService){

  }

  ngOnInit():void {
  
  }

  onSubmit(){
 
      let data:Object = {
        email : this.Flogin.value.user ,
        password : this.Flogin.value.pass
      }

     this.service.loggin(data).subscribe( (res:any) => {
       this.service.Autenticar(res.data.email , res.data.token);
     })
  }



 }
