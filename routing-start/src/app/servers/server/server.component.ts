import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.data
    .subscribe(
      (data: Data) => {
        // this name 'server' here *must* match the name in the resolve call in app-routing.module.ts
        this.server = data['server']; 
      }

    );


    // // the + here converts the string id to a number.
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);

    // // if params change while still in this component, 
    // // this will subscribe to those changes and update
    // // the server accordingly.
    // this.route.params.subscribe((params: Params) => {
    //   // the + here converts the string id to a number.
    //   this.server = this.serversService.getServer(+params['id']);
    // });
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: "preserve" });
  }
}
