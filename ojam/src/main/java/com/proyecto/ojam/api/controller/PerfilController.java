package com.proyecto.ojam.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.proyecto.ojam.api.model.Usuario;
import com.proyecto.ojam.api.repository.RoleRepository;
import com.proyecto.ojam.api.repository.UsuarioRepository;
import com.proyecto.ojam.api.security.jwt.JwtProvider;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value= "/api/auth/usuarios")
public class PerfilController {

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

  
    
    @GetMapping("/")
    public List<Usuario> getAllUsuarios(){
    	return userRepository.findAll();
    }
    
    @GetMapping("/getuser/{username}")
    public Usuario getSingleUser(@PathVariable(value = "username") String username){
    	return userRepository.findByUsername(username);
    }
    
    @PutMapping("/update/{username}")
    public ResponseEntity<Usuario> changeUser(@PathVariable(value = "username") String username,
     @Valid @RequestBody Usuario usuarioDetails) throws ResourceNotFoundException {
        Usuario usuario = userRepository.findByUsername(username);
        

        
        usuario.setNombre(usuarioDetails.getNombre());
        usuario.setDireccion(usuarioDetails.getDireccion());
        
        final Usuario changeUser = userRepository.save(usuario);
        return ResponseEntity.ok(changeUser);
    }
    
    
    @GetMapping("/delete/{id}")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long usuarioId)
         throws ResourceNotFoundException {
        Usuario usuario = userRepository.findById(usuarioId)
       .orElseThrow(() -> new ResourceNotFoundException("Usuario  not found for this id :: " + usuarioId));

        userRepository.delete(usuario);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
       
  }
        
    
    
    
    
