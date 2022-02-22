import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = new BehaviorSubject<boolean>(true);
  public isAuth: boolean = true;

  constructor(private router: Router, private http: HttpClient) {}

  async checkAuthenticated(): Promise<boolean> {
    const authenticated = this.isAuth;
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }

  async login(username: string, password: string, returnUrl: string = '/home'): Promise<void> {
    try {
      const transaction = await this.http.post(`${environment.apiUrl}/badel/korisnik/login`, { username, password }).toPromise()

      console.log(transaction)

      console.log({ username, password })

      if (!transaction) {
        throw Error('We cannot handle the ' + transaction + ' status');
      }
    } catch (error) {
      console.log(error)
    }
    this.isAuthenticated.next(true);
    this.isAuth = true

    await this.router.navigate([returnUrl]);

    // this.authClient.session.setCookieAndRedirect(transaction.sessionToken);
  }

  async logout(redirect: string = '/login'): Promise<void> {
    try {
      //await this.authClient.signOut();
      this.isAuthenticated.next(false);
      this.isAuth = false
      await this.router.navigate([redirect]);
    } catch (err) {
      console.error(err);
    }
  }
}
