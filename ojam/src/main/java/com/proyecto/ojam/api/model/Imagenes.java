package com.proyecto.ojam.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "imagenes")
public class Imagenes {

	@Id 
	@Column(name="id_imagenes")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id_imagenes;
	
	@Column(name="nombre_imagenes")
	private String nombre_imagenes;
	
	@Column(name="imagenes_tipo")
	private String imagenes_tipo;
	
}
