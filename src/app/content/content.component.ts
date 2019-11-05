import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ContentComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverId = 10;
  serverStatus = 'offline';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
