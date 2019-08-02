import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  isAuthenticated = false;

  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe( user => {
      // inne zapis poniżej
      // this.isAuthenticated = !user ? false : true;
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

}
