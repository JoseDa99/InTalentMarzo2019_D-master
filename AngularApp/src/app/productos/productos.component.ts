import { Component, OnInit } from '@angular/core';
import { ProductoInfo } from '../auth/clases-productos/producto-info';
import { ProductoService } from './productos.service';
import { AuthService } from '../auth/auth.service';
import { ProductoEdit } from '../auth/clases-productos/producto-edit';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
  productos: ProductoEdit[];
  productoEdit: ProductoEdit;
  

  constructor(private productoService: ProductoService, private authService: AuthService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }
  
  deleted(id: number){
    this.authService.productoDeleted(id).subscribe(data =>
      console.log(data)
      
     ) }
     
  
  }

