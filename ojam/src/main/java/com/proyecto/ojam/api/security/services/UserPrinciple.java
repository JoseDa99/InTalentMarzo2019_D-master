package com.proyecto.ojam.api.security.services;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.proyecto.ojam.api.model.Usuario;


public class UserPrinciple implements UserDetails {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id_user;
	private String nombre;
	private String username;
	private String direccion;
	private String dni;
	
	@JsonIgnore
	private String password;
	
	private Collection<? extends GrantedAuthority> authorities;
	
	
	
	

	public UserPrinciple(Long id_user, String nombre, String username, String direccion, String dni, String password,
			Collection<? extends GrantedAuthority> authorities) {
		super();
		this.id_user = id_user;
		this.nombre = nombre;
		this.username = username;
		this.direccion = direccion;
		this.dni = dni;
		this.password = password;
		this.authorities = authorities;
	}
	public static UserPrinciple build(Usuario user) {
		List<GrantedAuthority> authorities = user.getRoles().stream().map(role ->
		new SimpleGrantedAuthority(role.getName().name())
		).collect(Collectors.toList());
		
		return new UserPrinciple(user.getId_user(), user.getNombre(), user.getUsername(), user.getDireccion(), user.getDni(), user.getPassword(), authorities);
	}

	
	 
	public Long getId_user() {
		return id_user;
	}
	public String getNombre() {
		return nombre;
	}
	public String getDireccion() {
		return direccion;
	}
	public String getDni() {
		return dni;
	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
	@Override
	public boolean equals(Object o) {
		if(this == o) return true;
		if(o == null || getClass() != o.getClass()) return false;
		
		UserPrinciple user = (UserPrinciple) o;
		return Objects.equals(id_user, user.id_user);
	}
	

	

}
