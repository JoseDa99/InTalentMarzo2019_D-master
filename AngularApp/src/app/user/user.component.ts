import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UsuarioService } from './user.service';
import { UsuarioEdit } from '../auth/clases-usuarios/usuario-edit';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
 
})
export class UserComponent implements OnInit {
  usuarios: UsuarioEdit[];

  constructor(private userService: UsuarioService ,private authService: AuthService) { }

  ngOnInit() {
   this.userService.getUsers().subscribe(
      usuarios => this.usuarios = usuarios
   )
  }
  deleted(id: number){
    this.authService.usuarioDeleted(id).subscribe(data =>
      console.log(data)
      
    )
  }
 
}
