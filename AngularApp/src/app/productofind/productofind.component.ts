import { Component, OnInit } from '@angular/core';
import { ProductoInfo } from '../auth/clases-productos/producto-info';
import {ProductoService} from '../productos/productos.service';
import { ProductoEdit } from '../auth/clases-productos/producto-edit';

@Component({
  selector: 'app-productofind',
  templateUrl: './productofind.component.html',
  styleUrls: ['./productofind.component.css']
})
export class ProductofindComponent implements OnInit {
  productos: ProductoEdit[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }

}
