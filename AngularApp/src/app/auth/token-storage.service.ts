import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const NOMBRE_KEY = 'AuthNombre';
const DIRECCION_KEY = 'AuthDireccion';
const DNI_KEY = 'AuthDni';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  private username:string;
  private nombre:string;
  private direccion:string;
  private dni: string;
  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }
  public saveNombre(nombre: string) {
    window.sessionStorage.removeItem(NOMBRE_KEY);
    window.sessionStorage.setItem(NOMBRE_KEY, nombre);
  }
  public getNombre(): string{
    return sessionStorage.getItem(NOMBRE_KEY);
     
  }
  public saveDni(dni: string) {
    window.sessionStorage.removeItem(DNI_KEY);
    window.sessionStorage.setItem(DNI_KEY, dni);
  }
  public getDni(): string{
    return sessionStorage.getItem(DNI_KEY);
     
  }
  public saveDireccion(direccion: string) {
    window.sessionStorage.removeItem(DIRECCION_KEY);
    window.sessionStorage.setItem(DIRECCION_KEY, direccion);
  }
  public getDireccion():string{
    return sessionStorage.getItem(DIRECCION_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles;
  }
}
