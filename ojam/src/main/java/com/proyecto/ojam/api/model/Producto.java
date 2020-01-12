package com.proyecto.ojam.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "producto")
public class Producto {

	@Id
	@Column(name="id_producto")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="categoria")
	private String categoria;
	
	@Column(name="nombre")
	private String nombre;
	
	@Column(name="detalles")
	private String detalles;
	
	@Column(name="cantidad")
	private int cantidad;
	
//	@JsonIgnore
//	private File imagen;

	public Producto() {}
	
	public Producto(String categoria, String nombre, String detalles, int cantidad/*, File imagen*/) {
		this.categoria = categoria;
		this.nombre = nombre;
		this.detalles = detalles;
		this.cantidad = cantidad;
	}
	

	public Long getId_producto() {
		return id;
	}

	public void setId_producto(Long id) {
		this.id = id;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDetalles() {
		return detalles;
	}

	public void setDetalles(String detalles) {
		this.detalles = detalles;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
//	public File getImagen() {
//		return imagen;
//	}
//
//	public void setImagen(File imagen) {
//		this.imagen = imagen;
//	}
}
