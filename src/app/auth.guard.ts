import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SignInService } from './signin/signin.service';
import { Router } from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private userService: SignInService, private router: Router) {}

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
     const isValid = await this.userService.checkToken();
     if (!isValid) this.router.navigate(['/signin']);
     return isValid;
  }
}
