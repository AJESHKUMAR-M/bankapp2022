import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  db:any={
    100:{"acno":100,"username":"abi","password":101,"balance":10000},
    101:{"acno":101,"username":"abin","password":102,"balance":1000},
    102:{"acno":102,"username":"sabi","password":103,"balance":100},
    103:{"acno":103,"username":"zavi","password":104,"balance":10600},
    104:{"acno":104,"username":"babi","password":105,"balance":100600}
  }

  constructor() { }
  login(acno:any,pass:any) {
  
    let db=this.db

    if(acno in db){
      if(pass==db[acno]["password"]){
       return true
      
  }
      else{ 
        alert("incorrect password")
        return false
      }
    }
    else{ 
      alert("acno does not exist!!")
      return false
    }
    
      }

      //register
      register(username:any,acno:any,pass:any){
        let db=this.db
        if(acno in db){
          return false
        }
        else{ 
          db[acno]={acno,
            username,
            "password":pass,
            "balance":0}
        }
        return true
      }

      //deposit

  deposit(acno:any,password:any,amt:any){
    var amount=parseInt(amt)
    let db=this.db

    if(acno in db){
      if(password ==db[acno]["password"]){
        db[acno]["balance"]+=amount
        return db[acno]["balance"]
      }
      else{
        alert("incorrect password")
        return false
      }

    }
    else{
      alert("user does not exist")
      return false
    }

  }

  //withdraw

  withdraw(acno:any,pass:any,amt:any){
    var amount=parseInt(amt)
    let db=this.db

    if(acno in db){
      if(pass ==db[acno]["password"]){

        if(db[acno]["balance"]>amount){
          db[acno]["balance"]-=amount
          return db[acno]["balance"]

        }
        else{
          alert("insufficent balance")
          return false
        }
        
      }
      else{
        alert("incorrect password")
        return false
      }

    }
    else{
      alert("user does not exist")
      return false
    }

  }
  
}

