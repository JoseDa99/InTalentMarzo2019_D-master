export class ProfileChangeInfo {
    nombre: string;
    username: string;
    dni: string;
    direccion: string;

    constructor(nombre: string, username: string, dni: string, direccion: string) {
        this.nombre = nombre;
        this.username = username;
        this.dni = dni;
        this.direccion = direccion;
    }
}
