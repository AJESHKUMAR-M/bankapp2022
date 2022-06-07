import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 inter="PERFECT BANKING PARTNER"
 accno="WRITE YOUR ACCOUNT NUMBER"
 acno=""
 pass=""

 //formbuilder
 loginForm=this.fb.group({
  acno: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
  pass:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
 })
 
  constructor(private routing:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  passChange(event:any){
    this.pass=event.target.value
console.log(this.pass);

  }

  accnoChange(event:any){
    this.acno=event.target.value
console.log(this.acno);

  }


  login() {
var acno=this.loginForm.value.acno
var pass=this.loginForm.value.pass

if(this.loginForm.valid){

const result =this.ds.login(acno,pass)
if(result){
 
    alert("login success")
    this.routing.navigateByUrl('home')
  }
}
else{
  alert("INVALID FORM")
}
  }


//template referance variable


// login(a:any,p:any) {

//   var acno=a.value
//   var pass=p.value
//   let db=this.db
//   if(acno in db){
//     if(pass==db[acno]["password"]){
//       alert("login success")
//     }
//     else{ 
//       alert("incorrect password")
//     }
//   }
//   else{ 
//     alert("acno does not exist!!")
//   }
  
//     }
  
  
 }
