import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductoInfo } from '../auth/clases-productos/producto-info';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductoEdit } from '../auth/clases-productos/producto-edit';
import { UsuarioEdit } from '../auth/clases-usuarios/usuario-edit';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private url: string = 'http://localhost:8080/api/auth/usuarios/';
    
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
    
    constructor(private http: HttpClient){}

    getUsers(): Observable<UsuarioEdit[]>{
        
        return this.http.get(this.url).pipe(
            map(response => response as UsuarioEdit[])
        );
    }
}