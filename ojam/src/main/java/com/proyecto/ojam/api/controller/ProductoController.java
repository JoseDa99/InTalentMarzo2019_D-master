package com.proyecto.ojam.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.ojam.api.model.Producto;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping( value = "/api/auth/productos")
public class ProductoController {

	@Autowired
	private ProductoRepository productoRepository;
	
	@GetMapping("/")
	public List<Producto> getProducto(){
		return productoRepository.findAll();
	}
	@GetMapping("/producto")
	public List<Producto> getProductoo(){
		return productoRepository.findAll();
	}
	
	@GetMapping("/producto/{id_producto}")
	public Producto getSingleProduct(@PathVariable(value="id_producto") Long id_producto) {
		return productoRepository.getOne(id_producto);
	}
	
	@GetMapping("/getproducto/{id}")
	public ResponseEntity<Producto> getProductoById(@PathVariable(value="id") Long productoId) {
		Producto producto = productoRepository.findById(productoId)
				.orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado para este id ::" + productoId));
		return ResponseEntity.ok().body(producto);
	}

	@PostMapping("/productosalta")
    public Producto createProducto(@Valid @RequestBody Producto producto) {
        return productoRepository.save(producto);
    }
	
	@PutMapping("/updateproducto/{id}")
    public ResponseEntity<Producto> updateProducto(@PathVariable(value = "id") Long productoId,
         @Valid @RequestBody Producto productoDettales) throws ResourceNotFoundException {
        Producto producto = productoRepository.findById(productoId)
        .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con este id :: " + productoId));

        producto.setCategoria(productoDettales.getCategoria());
        producto.setNombre(productoDettales.getNombre());
        producto.setDetalles(productoDettales.getDetalles());
        producto.setCantidad(productoDettales.getCantidad());
        final Producto updatedProducto = productoRepository.save(producto);
        return ResponseEntity.ok(updatedProducto);
    }
	
	@GetMapping("/deleteproducto/{id}")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long productoId)
         throws ResourceNotFoundException {
        Producto producto = productoRepository.findById(productoId)
       .orElseThrow(() -> new ResourceNotFoundException("Producto  not found for this id :: " + productoId));

        productoRepository.delete(producto);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
	
}
