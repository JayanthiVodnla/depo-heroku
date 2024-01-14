import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-notcomponent',
  templateUrl: './notcomponent.component.html',
  styleUrl: './notcomponent.component.css'
})
export class NotcomponentComponent implements OnInit {
  user:any
  pass:any
 constructor(){ }
 ngOnInit(): void {
   
 }

 login(){
  const user='admin';
  const pass='pass';
  if(this.user == user && this.pass==pass){
  alert("login success")
 }
 else{
  alert("Invalid login")
 }
 }


}
