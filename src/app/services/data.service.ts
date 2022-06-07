import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
curentUser:any
  db:any={
    100:{"acno":100,"username":"Ronaldo","password":101,"balance":10000,transaction:[]},
    101:{"acno":101,"username":"messi","password":102,"balance":1000,transaction:[]},
    102:{"acno":102,"username":"neymar","password":103,"balance":100,transaction:[]},
    103:{"acno":103,"username":"xavi","password":104,"balance":10600,transaction:[]},
    104:{"acno":104,"username":"lewandosky","password":105,"balance":100600,transaction:[]}
  }

  constructor() {
    this.getDetails()
   }
//getting data from local storage
getDetails(){
  if(localStorage.getItem("database")){
    this.db=JSON.parse(localStorage.getItem("database")||'')
  }
  if(localStorage.getItem("curentUser")){
    this.curentUser=JSON.parse(localStorage.getItem("curentUser")||'')
  }
}

  //SAVE DETAILS
  saveDetails(){
    if(this.db){
      localStorage.setItem("database",JSON.stringify(this.db));
    }
    if(this.curentUser){
      localStorage.setItem("curentUser",JSON.stringify(this.curentUser))
    }
  }
  login(acno:any,pass:any) {
  
    let db=this.db

    if(acno in db){
      if(pass==db[acno]["password"]){
this.curentUser=db[acno]["username"]
this.saveDetails()
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
            "balance":0,
            transaction:[]
          }
        }
        this.saveDetails()
        return true
      }

      //deposit

  deposit(acno:any,password:any,amt:any){
    var amount=parseInt(amt)
    let db=this.db

    if(acno in db){
      if(password ==db[acno]["password"]){
        db[acno]["balance"]+=amount
        db[acno].transaction.push({
          type: "CREDIT",
          amount:amount
        })
        this.saveDetails()
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
          db[acno].transaction.push({
            type: "DEBIT",
            amount:amount
          })
          this.saveDetails()
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

