import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { IntroComponent } from './store/intro.component';

@Injectable()
export class StoreFirstGaurd {
  private firstNavigation = true;
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component != IntroComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
