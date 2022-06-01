import { Component, OnInit } from '@angular/core';
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

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  deposit(){
    var acno=this.acno
    var pass=this.pass
    var amount=this.amount

    const result=this.ds.deposit(acno,pass,amount)

    if(result){
      alert(amount+" deposited successfully and new balance is"+result)
    }
  
  }

  withdraw(){
    var acno=this.acno1
    var pass=this.pass1
    var amount=this.amount1

    const result=this.ds.withdraw(acno,pass,amount)

    if(result){
      alert(amount+" debited successfully and new balance is"+result)
    }
  }



}


