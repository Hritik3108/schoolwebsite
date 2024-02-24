package com.numetry.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.numetry.entity.User;
import com.numetry.request.LoginRequest;
import com.numetry.service.RegistrationAndLoginService;

@RestController
@RequestMapping("/school")
public class SchoolController {

	@Autowired
	public RegistrationAndLoginService service;

	private Logger logger = LoggerFactory.getLogger(SchoolController.class);

	@PostMapping("/register")
	public ResponseEntity<User> userRegistration(@RequestBody User user) {
		logger.info("Controller user info |" + user);
		return new ResponseEntity<>(service.register(user), HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<?> userLogin(@RequestBody LoginRequest req) {
		logger.info("Controller login info |" + req);

		return new ResponseEntity<>(service.login(req), HttpStatus.ACCEPTED);
	}
}
