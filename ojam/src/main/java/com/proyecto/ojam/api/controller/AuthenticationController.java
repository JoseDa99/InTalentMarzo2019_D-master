package com.proyecto.ojam.api.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.proyecto.ojam.api.message.request.LoginForm;
import com.proyecto.ojam.api.message.request.SignUpForm;
import com.proyecto.ojam.api.message.response.ResponseMessage;
import com.proyecto.ojam.api.model.Role;
import com.proyecto.ojam.api.model.RoleName;
import com.proyecto.ojam.api.model.Usuario;
import com.proyecto.ojam.api.repository.RoleRepository;
import com.proyecto.ojam.api.repository.UsuarioRepository;
import com.proyecto.ojam.api.security.jwt.JwtProvider;
import com.proyecto.ojam.api.message.response.JwtResponse;
import com.proyecto.ojam.api.security.services.UserPrinciple;

import javax.validation.Valid;

import java.util.HashSet;
import java.util.Set;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping( value = "/api/auth")
public class AuthenticationController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UsuarioRepository userRepository;
    
    @Autowired
    RoleRepository roleRepository;
    
    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest){
    	
    	Authentication authentication = authenticationManager.authenticate(
    			new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
    	
    	SecurityContextHolder.getContext().setAuthentication(authentication);
    	
    	String jwt = jwtProvider.generateJwtToken(authentication);
    	UserDetails userDetails = (UserDetails) authentication.getPrincipal();
    	UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
    	
    	return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userPrinciple.getNombre(), userPrinciple.getDireccion(), userPrinciple.getDni(), userDetails.getAuthorities()));
    }
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
    	if(userRepository.existsByUsername(signUpRequest.getUsername())) {
    		return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
    				HttpStatus.BAD_REQUEST); 
    	}
    	if (userRepository.existsByDni(signUpRequest.getDni())) {
    		return new ResponseEntity<>(new ResponseMessage("Fail -> DNI is already in use!"),
    				HttpStatus.BAD_REQUEST);
    	}
    	//Creacion del nuevo usuario
    	Usuario user = new Usuario(signUpRequest.getNombre(), signUpRequest.getUsername(), encoder.encode(signUpRequest.getPassword()), signUpRequest.getDireccion(), signUpRequest.getDni());
    			Set<String> strRoles = signUpRequest.getRole();
    			Set<Role> roles = new HashSet<>();
    			
    			strRoles.forEach(role -> {
    				switch (role) {
					case "admin":
						Role adminRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
						.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find"));
						roles.add(adminRole);
						break;
					
					default:
						Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Fail! Cause: User Role not find"));
						roles.add(userRole);
						
					}
    				
    				
    			});
    			user.setRoles(roles);
    			userRepository.save(user);
    			return new ResponseEntity<>(new ResponseMessage("Usuario registrado con exito!"), HttpStatus.OK);
    }
    

    
    
}
