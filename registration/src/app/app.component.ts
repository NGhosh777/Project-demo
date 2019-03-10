import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './helpers/must-match.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  registerForm : FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder){}
  
  ngOnInit() {
     
    this.registerForm = this.formBuilder.group({

      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['',Validators.required]
    },
     {
      validator: MustMatch('password','confirmPassword')
    }
    );
  }

  get f(){ return this.registerForm.controls;}

  onSubmit()
  {
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }

    alert('success  ------)\n\n' + JSON.stringify(this.registerForm.value));
  }
  
}
