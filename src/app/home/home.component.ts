import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  constructor(private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  deposit(){
    var acno=this.homeFormDep.value.acno
    var pass=this.homeFormDep.value.pass
    var amount=this.homeFormDep.value.amount

    const result=this.ds.deposit(acno,pass,amount)

    if(result){
      alert(amount+" deposited successfully and new balance is"+result)
    }
  
  }

  withdraw(){
    var acno=this.homeFormWit.value.acno1
    var pass=this.homeFormWit.value.pass1
    var amount=this.homeFormWit.value.amount1

    const result=this.ds.withdraw(acno,pass,amount)

    if(result){
      alert(amount+" debited successfully and new balance is"+result)
    }
  }



}


