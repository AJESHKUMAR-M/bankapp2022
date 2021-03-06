import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  acno=""
  pass=""
  amount=""

  acno1=""
  pass1=""
  amount1=""

//homeform
 
homeFormDep=this.fb.group({
  acno: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
  pass:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['', [Validators.required, Validators.pattern('[0-9 ]*')]]
 })
 homeFormWit=this.fb.group({
  acno1: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
  pass1:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  amount1:['', [Validators.required, Validators.pattern('[0-9 ]*')]]
 })
 user:any
 lDate:any
  constructor(private ds:DataService,private fb:FormBuilder,private routing:Router) {
  this.user=this.ds.curentUser
  this.lDate=new Date
   }

  ngOnInit(): void {
    if (!localStorage.getItem('curentAcno')) {
      alert('Please Log In')
      this.routing.navigateByUrl("")
      
    }
  }

  deposit(){
    var acno=this.homeFormDep.value.acno
    var pass=this.homeFormDep.value.pass
    var amount=this.homeFormDep.value.amount
if(this.homeFormDep.valid){
    const result=this.ds.deposit(acno,pass,amount)

    if(result){
      alert(amount+" deposited successfully and new balance is"+result)
    }
  }
  else{
    alert("INVALID FORM")
  }
  
  }

  withdraw(){
    var acno=this.homeFormWit.value.acno1
    var pass=this.homeFormWit.value.pass1
    var amount=this.homeFormWit.value.amount1
if(this.homeFormWit.valid){
    const result=this.ds.withdraw(acno,pass,amount)

    if(result){
      alert(amount+" debited successfully and new balance is"+result)
    }
  }
  else{
    alert("INVALID FORM")
  }
  }
  logOut(){
    localStorage.removeItem("curentUser")
    localStorage.removeItem("curentAcno")
this.routing.navigateByUrl("")
  }



}


