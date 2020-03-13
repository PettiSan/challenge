import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
// import { LocalStorage } from '@ngx-pwa/local-storage';
import { StorageMap } from '@ngx-pwa/local-storage';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user: Observable<firebase.User>;

  constructor(public firebaseAuth: AngularFireAuth, protected storageMap: StorageMap, private router: Router,
              private route: ActivatedRoute) {
    this.user = firebaseAuth.authState;
  }

  public login(mail: string, password: string) {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.signInWithEmailAndPassword(mail, password)
        .then((userRes) => {
          let userLocalStorage = { email: userRes.user.email, token: userRes.user.refreshToken };
          this.storageMap.set('user', userLocalStorage).subscribe(() => {});

          resolve(userRes);
        })
        .catch((userError) => {
          resolve(userError);
        });
    });
  }

  public logout() {
    return this.firebaseAuth.signOut();
  }
}
