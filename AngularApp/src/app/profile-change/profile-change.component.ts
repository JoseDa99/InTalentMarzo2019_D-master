import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ProfileChangeInfo } from '../auth/profile-change-info';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-change',
  templateUrl: './profile-change.component.html',
  styleUrls: ['./profile-change.component.css']
})
export class ProfileChangeComponent implements OnInit {
    form: any = {};
    profileChangeInfo: ProfileChangeInfo;
    isChanged = false;
    isChangeFailed = false;
    errorMessage = '';
    info: any;
    usuario = {};
    constructor(private authService: AuthService,private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.getUsuario(this.route.snapshot.params['username']);
     }
    
     getUsuario(username) {
      this.authService.getUsuario(username).subscribe(data =>{
      this.usuario = data;
    });
  }
  
    edit(username) {
      console.log(this.form);
  
      this.profileChangeInfo = new ProfileChangeInfo(
        this.form.nombre,
        this.form.username,
        this.form.dni,
        this.form.direccion);
  
      this.authService.changeProfile(this.profileChangeInfo, username).subscribe(
        data => {
          console.log(data);
          this.isChanged = true;
          this.isChangeFailed = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isChangeFailed = true;
        }
      )}
  }