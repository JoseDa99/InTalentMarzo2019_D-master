import { Component, OnInit } from '@angular/core';
import { ProductoInfo } from '../auth/clases-productos/producto-info';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  form: any = {};
  productoInfo: ProductoInfo;

  constructor(private authService: AuthService) { }


  ngOnInit() { }

  create(){
    console.log(this.form);

    this.productoInfo = new ProductoInfo (
     /* this.form.id,*/
      this.form.categoria,
      this.form.nombre,
      this.form.detalles,
      this.form.cantidad,
      this.form.imagenes
    );
    this.authService.productoCrear(this.productoInfo).subscribe(data =>
      console.log(data)
      
      )
  }



}
