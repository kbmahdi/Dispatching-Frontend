import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
    templateUrl: './dispatching.component.html'
})
export class DispatchingComponent implements OnInit{

  routeItems!: MenuItem[];

  async ngOnInit() {

    this.routeItems = [
      { label: 'Etat stock et vente', routerLink: '/pages/etatStock' },
      { label: 'Dispatching', routerLink: '/pages/dispatching' },
    ];

  }
}
