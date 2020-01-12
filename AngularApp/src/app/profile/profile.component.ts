import { Component, OnInit } from '@angular/core';
import {TokenStorageService}from '../auth/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
info:any;
  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      nombre: this.token.getNombre(),
      direccion: this.token.getDireccion(),
      dni: this.token.getDni(),
      authorities: this.token.getAuthorities()
    };
  }
}
