import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';


import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatInputModule,
  MatIconRegistry,
  MatProgressSpinnerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';
import { SimpleCarouselComponent} from './carousel/simple-carousel.component'
import {ApiCardComponent} from './api-card/api-card.component'
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { ProfileComponent } from './profile/profile.component';
import { ProfileChangeComponent } from './profile-change/profile-change.component';


import { ProductosComponent } from './productos/productos.component';
import { FormComponent } from './productosFormulario/form.component';
import{DetailsUploadComponent} from './details-upload/details-upload.component';
import {FormUploadComponent} from './form-upload/form-upload.component';
import {ListUploadComponent} from './list-upload/list-upload.component';
import {UploadFileService} from './Service/UploadFileService';
import {UploadFileComponent} from './upload-file/upload-file.component';
import { ProductofindComponent } from './productofind/productofind.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    SimpleCarouselComponent,
    ApiCardComponent,
    ProfileComponent,
    ProfileChangeComponent,
    ProductosComponent,
    FormComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    UploadFileComponent,
    ProductofindComponent,
    ProductoEditComponent



   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    BrowserAnimationsModule
    
  ],
  providers: [httpInterceptorProviders, UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
