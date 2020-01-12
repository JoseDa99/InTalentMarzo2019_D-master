import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductoInfo } from '../auth/clases-productos/producto-info';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductoEdit } from '../auth/clases-productos/producto-edit';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {
    private url: string = 'http://localhost:8080/api/auth/productos/';
    
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
    
    constructor(private http: HttpClient){}

    getProductos(): Observable<ProductoEdit[]>{
        
        return this.http.get(this.url).pipe(
            map(response => response as ProductoEdit[])
        );
    }

    create(producto: ProductoInfo): Observable <ProductoInfo>
    {
        return this.http.post<ProductoInfo>
        (this.url, producto, {headers:
        this.httpHeaders})
    }

   /* create(producto: Producto) : Observable<Producto> {
        return this.http.post<Producto>(this.url, producto, {headers: this.httpHeaders})
    }*/

   /* public create(producto) {
        return this.http.post<Producto>(this.url, producto);
    }*/
}