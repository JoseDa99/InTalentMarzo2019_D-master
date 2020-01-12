import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductoInfo } from '../auth/clases-productos/producto-info';


@Injectable({
  providedIn: 'root'
})
export class ProductofindService {
    productos: ProductoInfo[];

  constructor(private http:HttpClient) { }

  Url ='http://localhost:8080/productos';

  public getProductofind(productos){
    return this.http.get(this.Url + "/" + productos.id);
  }
}
