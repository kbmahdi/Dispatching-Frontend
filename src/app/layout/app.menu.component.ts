import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {AuthService} from "../demo/service/auth.service";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    modelAdmin: any[] = [];
    role: string | null = '' ;

    constructor(public layoutService: LayoutService, private authService: AuthService) { }

    ngOnInit() {
        this.authService.fastload();
        this.role = this.authService.role;
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Etat Stock et vente', icon: 'pi pi-fw pi-clone', routerLink: ['/pages/etatStock'] }
                ]
            },
        ];
        this.modelAdmin = [
          {
            label: 'Orange',
            items: [
              { label: 'Users', icon: 'pi pi-fw pi-users', routerLink: ['/users'] },
              { label: 'Etat Stock et vente', icon: 'pi pi-fw pi-clone', routerLink: ['/pages/etatStock'] }
            ]
          },
        ];
    }
}
