import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    let query = this.query;
    console.log("value of query is ",query);   
    // document.getElementById('sent-msg')!.innerHTML = query;
    document.getElementById('sent-msg')!.innerHTML = query;
    this.service.sendQuery(this.query).subscribe((response: any)=>{
      let jarvis = response;
      document.getElementById('message')!.innerHTML = jarvis;
      console.log(response);
    },(error: any)=>{
      console.log('Error is',error)
    }
    )
    this.inputForm.reset();
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
