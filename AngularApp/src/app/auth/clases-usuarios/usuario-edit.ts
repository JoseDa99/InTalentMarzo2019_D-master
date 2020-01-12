export class UsuarioEdit {
    id_user: number;
    nombre: string;
    username: string;
    dni: string;
    direccion: string;

    constructor(id_user: number,nombre: string, username: string, dni: string, direccion: string, password: string, role: string) {
        this.id_user = id_user;
        this.nombre = nombre;
        this.username = username;
        this.dni = dni;
        this.direccion = direccion;
    }
}