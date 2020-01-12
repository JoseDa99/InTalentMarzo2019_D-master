package com.proyecto.ojam.api.security.jwt;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.proyecto.ojam.api.security.services.UserPrinciple;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

@Component
public class JwtProvider {

	private static final Logger logger = LoggerFactory.getLogger(JwtProvider.class);
	
	@Value("${ojam.app.jwtSecret}")
	private String jwtSecret;
	
	@Value("${ojam.app.jwtExpiration}")
	private int jwtExpiration;
	
	
	public String generateJwtToken(Authentication authentication) {
		UserPrinciple userPrincipal = (UserPrinciple) authentication.getPrincipal();
		
		return Jwts.builder()
				.setSubject((userPrincipal.getUsername()))
				.setIssuedAt(new Date())
				.setExpiration(new Date((new Date()).getTime() + jwtExpiration*1000))
				.signWith(SignatureAlgorithm.HS512, jwtSecret)
				.compact();
	}
	
	public boolean validateJwtToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
			return true;
		} catch (SignatureException e) {
			logger.error("Invalid JWT signature -> Message: {}", e);
		}catch (MalformedJwtException e) {
			logger.error("Invalid JWT token -> Message: {}", e);
		}catch (ExpiredJwtException e) {
			logger.error("Invalid JWT token -> Message: {}", e);
		}catch (UnsupportedJwtException e) {
			logger.error("Invalid JWT token -> Message: {}", e);
		}catch (IllegalArgumentException e) {
			logger.error("Invalid JWT token -> Message: {}", e);
		}
		
		return false;
		
	}
	
	public String getUserNameFromJwtToken(String token) {
		return Jwts.parser()
					.setSigningKey(jwtSecret)
					.parseClaimsJws(token)
					.getBody().getSubject();
	}
}
