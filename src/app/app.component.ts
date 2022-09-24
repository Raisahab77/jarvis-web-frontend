import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FlaskApiService } from './service/flask-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'chat-bot';
  // FlaskApiService: any;

  constructor(private service:FlaskApiService){

  }
  ngOnInit(){
    this.getApiData()
  }

  inputForm = new FormGroup({
    query : new FormControl()
  });

 get query() 
  {
    return this.inputForm.get('query')?.value;
  }

  postQuery(){
    console.log("value of query is ",this.query);
    this.service.sendQuery(this.query).subscribe((response: any)=>{
      let jarvis = response;
      document.getElementById('message')!.innerHTML = jarvis;
      console.log(response);
    },(error: any)=>{
      console.log('Error is',error)
    }
    )
  }

  getApiData(){
    this.service.getResponse().subscribe((response: any)=>{
      console.log("reached here")
      let jarvis = response;
      document.getElementById('message')!.innerHTML = jarvis;
      console.log(response);
    },(error: any)=>{
      console.log('Error is',error)
    }
    )  }
}
