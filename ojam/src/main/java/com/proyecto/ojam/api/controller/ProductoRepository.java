package com.proyecto.ojam.api.controller;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.ojam.api.model.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

}
