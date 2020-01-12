package com.proyecto.ojam.api.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.proyecto.ojam.api.model.Role;



@Entity
@Table(name = "user")
public class Usuario {

	
	
	@Id
	@Column(name = "id_user")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id_user;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "username")
	private String username;
	
	@JsonIgnore
	@Column(name = "password")
	private String password;
	
	
	@Column(name = "direccion")
	private String direccion;
	
	
	@Column(name = "dni")
	private String dni;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "user_roles",
	joinColumns = @JoinColumn(name = "user_id"),
	inverseJoinColumns = @JoinColumn(name = "role_id"))
	  private Set<Role> roles = new HashSet<>();
	
	//@ElementCollection(targetClass=Tarjeta.class)
	//private List<Tarjeta> tarjeta = new ArrayList<>();

	public Usuario() {
		
	}
	public Usuario(String nombre, String username, String direccion, String dni) {
		this.nombre = nombre;
		this.username = username;
		this.direccion = direccion;
		this.dni = dni;
	}

	public Usuario(String nombre, String username, String password, String direccion, String dni) {
		this.nombre = nombre;
		this.username = username;
		this.password = password;
		this.direccion = direccion;
		this.dni = dni;

	}

	// generamos los get y set
	public Long getId_user() {
		return id_user;
	}
	
	public void setId_user(Long id_user) {
		this.id_user = id_user;
	}

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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	
}
