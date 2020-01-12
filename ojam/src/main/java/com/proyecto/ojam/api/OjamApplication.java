package com.proyecto.ojam.api;



import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.ojam.api.services.StorageService;


@SpringBootApplication
@RestController
public class OjamApplication  implements CommandLineRunner{
	@Resource
	StorageService storageService;
	
	public static void main(String[] args) {
		SpringApplication.run(OjamApplication.class, args);
	}
	

	public void run(String... arg) throws Exception {
		storageService.deleteAll();
		storageService.init();
	}	
}

