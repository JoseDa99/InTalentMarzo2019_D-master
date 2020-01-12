
export class ProductoEdit {
    id: number;
    categoria: string;
    nombre: string;
    detalles: string;
    cantidad: string;


constructor(categoria: string, nombre: string, detalles: string, cantidad: string, id: number) {
    this.categoria=categoria;
    this.nombre=nombre;
    this.detalles=detalles;
    this.cantidad=cantidad;
    this.id=id; 
}
}