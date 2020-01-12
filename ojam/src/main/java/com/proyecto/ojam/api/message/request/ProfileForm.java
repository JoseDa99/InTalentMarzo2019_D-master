package com.proyecto.ojam.api.message.request;

import java.util.Set;

public class ProfileForm {

		private String nombre;
		
		private String username;
		
		private String direccion;
		
		private String dni;
		
		private Set<String> role;
				
		public String getNombre() {
			return nombre;
		}

		public void setNombre(String nombre) {
			this.nombre = nombre;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getDireccion() {
			return direccion;
		}

		public void setDireccion(String direccion) {
			this.direccion = direccion;
		}

		public String getDni() {
			return dni;
		}

		public void setDni(String dni) {
			this.dni = dni;
		}

		public Set<String> getRole() {
			
			return role;
		}


	}

