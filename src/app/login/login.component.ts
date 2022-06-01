import { Component, OnInit } from '@angular/core';
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
 
  constructor(private routing:Router,private ds:DataService) { }

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
var acno=this.acno
var pass=this.pass
const result =this.ds.login(acno,pass)
if(result){
 
    alert("login success")
    this.routing.navigateByUrl('home')
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
