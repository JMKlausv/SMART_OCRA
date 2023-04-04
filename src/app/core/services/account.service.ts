import { Injectable } from '@angular/core';
import { catchError, map, Observable, ReplaySubject } from 'rxjs';
import { Account } from '../models/account';
import { Users } from '../models/users';
import { ApiService } from './api.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
   private currentUserSource = new ReplaySubject<Users>(1);
   $currentUser:Observable<Users> = this.currentUserSource.asObservable();
   buttonSending:boolean=false;
  constructor(
  public apiService: ApiService,
  private tokenService:TokenService
  ) { 
    
  }
 login(activeUser:Account){
  this.buttonSending=true;
  this.apiService.buttonSending.next(true);
  return this.apiService.post('User/login',activeUser).pipe(
    map(user=>{
    if(user){
      this.tokenService.saveToken(user);
      this.currentUserSource.next(user);
      this.apiService.buttonSending.next(false);
    }else{
      this.apiService.buttonSending.next(false);
    }
  }
  )
  )
 } 

setCurrentUser(user){
  this.currentUserSource.next(user);
}

logout(){
  this.tokenService.destroyToken();
  this.currentUserSource.next(null);
}
}
