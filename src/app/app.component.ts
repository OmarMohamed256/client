import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient){}
  
  ngOnInit() {
    this.getUsers()
  }


  getUsers(){
    this.http.get('https://localhost:7088/api/users/').subscribe({
    next: () => { (response: any) => {
      this.users = response;
    } }, // nextHandler
    error: () => { (error: any) => {
      console.log(error);
    } }    // errorHandler 
    })
  }
}
