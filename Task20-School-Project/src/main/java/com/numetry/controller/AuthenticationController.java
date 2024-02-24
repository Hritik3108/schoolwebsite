package com.numetry.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.numetry.entity.AuthenticationRequest;
import com.numetry.entity.AuthenticationResponse;
import com.numetry.entity.ChangeUserPassword;
import com.numetry.entity.User;
import com.numetry.service.AuthenticationService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth/school")
@RequiredArgsConstructor
public class AuthenticationController {
	
	@Autowired
	private AuthenticationService service;

	@PostMapping("/register")
	  public ResponseEntity<AuthenticationResponse> register(
	      @RequestBody User request
	  ) {
		
//		System.out.println(request.getFirstName()+" "+request.getEmail()+" "+request.getLastName()
//		+" "+request.getCity()+" "+request.getGender()+" "+request.getPassword()+" "+request.getPincode()
//		+" "+request.getRole());
		
	    return ResponseEntity.ok(service.register(request));
	  }
	  
	  @PostMapping("/login")
	  public ResponseEntity<AuthenticationResponse> authenticate(
	      @RequestBody AuthenticationRequest request
	  ) throws Exception {
		  
		  System.out.println("Login id:"+request.getEmail());
	    return ResponseEntity.ok(service.authenticate(request));
	  }
	  
	  @PostMapping("/forgottenPassword")
	  public String changePassword(
	      @RequestBody ChangeUserPassword request
	  ) throws Exception {  
	    return service.ChangePassword(request);
	  }
	  
	  @PostMapping("/refresh-token")
	  public void refreshToken(
	      HttpServletRequest request,
	      HttpServletResponse response
	  ) throws Exception {
	    service.refreshToken(request, response);
	  }  
}
