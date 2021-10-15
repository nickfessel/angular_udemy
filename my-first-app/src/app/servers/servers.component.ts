import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', // attribute
  //selector: '.app-servers', // select by class <div class='app-servers'>
  // backticks allow multiline template string.
  // only use template if there is a small amount of markup. Otherwise, use templateUrl
  // a template "must" exist in the component. You don't need selector or styleUrls.
  //template: `<app-server></app-server>
  //          <br />
  //          <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "TestServer";
  userName = "";
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  secretMessageVisibility = false;
  buttonClicks = [];
  constructor() { 
    setTimeout(() => {this.allowNewServer = true;},2000);


  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.userName = "";
  }

  toggleVisibility() {
    this.secretMessageVisibility = !this.secretMessageVisibility;    
    this.buttonClicks.push(new Date());
    return this.secretMessageVisibility === true ? 'visible' : 'hidden';
  }
}
