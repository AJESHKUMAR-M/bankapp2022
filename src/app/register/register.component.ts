import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username="";
  acno=""
  pass=""
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var username=this.username
    var acno=this.acno
    var pass=this.pass

    const result=this.ds.register(username,acno,pass)
    
    if(result){
    alert("Register success")
  this.router.navigateByUrl("")  
  }
  else{
    alert("already existing user.....please login again")
  }
  }

}
