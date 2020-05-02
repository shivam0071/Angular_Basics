import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = 'Default Name';
  userName = '';
  serverCreated = false;
  servers = ["Test Server", "Dev Server"];
  theSecret = "the secret word is - All is Well";
  secret = false;
  toggleMe = 'Show Secret';
  toggle = false;
  counter = 0;
  clickLog = [];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true},2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: any){

    this.serverName = (<HTMLInputElement>event.target).value;

  }

  onResetUserName(){
      this.userName = '';
    }

    onSecret(){
      this.counter = this.counter + 1;
      this.clickLog.push(this.counter);
      console.log(this.clickLog);
      if (this.toggle){
        this.toggle = false;
        this.secret = false;
        this.toggleMe = 'Show secret';
      }
      else{
        this.toggle = true;
        this.secret = true;
        this.toggleMe = 'Hide secret';
      }
       
    }
    getColor() {
      return this.counter > 5 ? 'blue': 'white';
  }
}
