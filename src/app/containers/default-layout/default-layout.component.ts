import {Component} from '@angular/core';
import { AuthServiceService } from '../../Services/auth-service.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  
  public sidebarMinimized = false;
  public navItems = navItems;
 
   constructor(public services: AuthServiceService) {}



  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  
  logout(){
       this.services.logout();
  }
}
