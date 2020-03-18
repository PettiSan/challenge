import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public firebaseAuth: AngularFireAuth, protected storageMap: StorageMap, private router: Router,
              private route: ActivatedRoute) {

    // this.storageMap.get('user').subscribe((user) => {
    //   if (user) {
    //     console.log('usuário já estava salvo na localStorage ', user);
    //     // this.router.navigate(['schedule']);
    //   }
    // });
  }

  public login(mail: string, password: string) {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.signInWithEmailAndPassword(mail, password)
        .then((loginRes) => {
          console.log(loginRes);
          const userLocalStorage = { email: loginRes.user.email, token: loginRes.user.refreshToken };
          this.storageMap.set('user', userLocalStorage).subscribe(() => {});

          resolve(loginRes);
        })
        .catch((loginError) => {
          resolve(loginError);
        });
    });
  }

  public logout() {
    this.firebaseAuth.signOut()
      .finally(() => {
        this.storageMap.delete('user').subscribe(() => {});

        this.router.navigate(['login']);
      }
    );
  }
}
