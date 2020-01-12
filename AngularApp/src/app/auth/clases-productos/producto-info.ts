import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class ProductoInfo {
    categoria: string;
    nombre: string;
    detalles: string;
    cantidad: string;
    imagenes: URL;


constructor(categoria: string, nombre: string, detalles: string, cantidad: string, imagenes: URL) {
    this.categoria=categoria;
    this.nombre=nombre;
    this.detalles=detalles;
    this.cantidad=cantidad;
    this.imagenes=imagenes;
}
}