export class SignUpInfo {
    nombre: string;
    username: string;
    dni: string;
    direccion: string;
    role: string[];
    password: string;

    constructor(nombre: string, username: string, dni: string, direccion: string, password: string) {
        this.nombre = nombre;
        this.username = username;
        this.dni = dni;
        this.direccion = direccion;
        this.password = password;
        this.role = ['user'];
    }
}
