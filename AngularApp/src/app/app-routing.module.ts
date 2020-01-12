import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileChangeComponent } from './profile-change/profile-change.component';
import { ProductosComponent } from './productos/productos.component';
import { FormComponent } from './productosFormulario/form.component';
import { ApiCardComponent } from './api-card/api-card.component';
import { UploadFileService } from './Service/UploadFileService';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';




const routes: Routes = [
    {
        path: 'productos',
        component: ProductosComponent
    },

    {
        path: 'alta',
        component: FormComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path:'profile-change/:username',
        component: ProfileChangeComponent

    },
    {
        path:'productos/{id}',
        component: ApiCardComponent
    },
    {
        path: 'api/auth/post',
        component: UploadFileService
    },
    {
        path:'usuario',
        component : UserComponent
    },
    {
        path:'listaproductos',
        component: ApiCardComponent
    },
    {
        path:'producto-edit/:id_producto',
        component: ProductoEditComponent
    }
    
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
