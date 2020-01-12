import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../auth/auth.service';
import { ProductoEdit } from '../auth/clases-productos/producto-edit';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {
  producto={};
  productoInfo: ProductoEdit;
  form : any = {};

  isChanged = false;
  isChangeFailed = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute,
    private authService: AuthService) { 

  }
  ngOnInit(): void {
    this.getProducto(this.route.snapshot.params['id_producto']);
  }
 
  getProducto(id_producto){
    this.authService.getProducto(id_producto).subscribe(data => this.producto = data);
  }
 
 /* goBack(): void {
    this.location.back();
  }*/
 
 edit(id_producto){
 console.log(this.form);
 this.productoInfo = new ProductoEdit(
  this.form.categoria,
  this.form.nombre,
  this.form.detalles,
  this.form.cantidad,
  this.form.id_producto
 );

 this.authService.productoEdit(this.productoInfo, id_producto).subscribe(
   data=> {
     console.log(data);
     this.isChanged = true;
     this.isChangeFailed = false;
   },
   error => {
     console.log(error);
     this.errorMessage = error.error.message;
     this.isChangeFailed = true;
   }
 )
  }
}
