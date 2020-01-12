import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { ProfileChangeInfo } from './profile-change-info';
import {ProductoInfo} from './clases-productos/producto-info';
import { ProductoEdit } from './clases-productos/producto-edit';
import { UsuarioEdit } from './clases-usuarios/usuario-edit';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
/*Llamada al backend de los controladores de login y registro */
  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
/*Llamada al backend de los controladore de producto */  
  private productoUrl = 'http://localhost:8080/api/auth/productos/productosalta';
  private deleteUrl = 'http://localhost:8080/api/auth/productos/deleteproducto';
/* Llamada al backend de los controladores de usuario */
  private changeUrl = 'http://localhost:8080/api/auth/usuarios/update';
  private userUrl= 'http://localhost:8080/api/auth/usuarios/getuser';
  private usereditUrl = 'http://localhost:8080/api/auth/usuarios/delete';

  private productoGetUrl = 'http://localhost:8080/api/auth/producto';
 
  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  changeProfile(info: ProfileChangeInfo, username):Observable<string>{
    return this.http.put<string>(this.changeUrl+'/'+ username, info, httpOptions);
  }
  productoCrear(info: ProductoInfo): Observable<string> {
    return this.http.post<string>(this.productoUrl, info, httpOptions);
  }
  productoDeleted(id: number): Observable<string> {
    return this.http.get<string>(this.deleteUrl+'/'+ id, httpOptions);
  }

  usuarioDeleted(id: number): Observable<string> {
    return this.http.get<string>(this.usereditUrl+'/'+ id, httpOptions);
  }
  productoEdit(producto: ProductoEdit, id_producto): Observable<any>{

    return this.http.put(this.deleteUrl+ '/'+id_producto, producto, httpOptions);
    
  }
  getProducto(id: number): Observable<ProductoEdit> {
    return this.http.get<ProductoEdit>(this.productoGetUrl+'/'+ id, httpOptions);
    
  }

 /* usuarioEdit(id: number, info: UsuarioEdit): Observable<string> {
    return this.http.put<string>(this.userUrl+'/'+ id, info, httpOptions);
  }*/

  getUsuario(username: string): Observable<UsuarioEdit> {
    return this.http.get<UsuarioEdit>(this.userUrl+'/'+username, httpOptions);
  }
  
}
