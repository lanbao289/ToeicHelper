
package com.tma.toeicHelper.controller;

import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tma.toeicHelper.dao.UserRepository;
import com.tma.toeicHelper.model.User;
import com.tma.toeicHelper.service.JwtService;

@RestController
@RequestMapping(value = "/api/", produces = { MediaType.APPLICATION_JSON_VALUE })
public class UserController {

	@Autowired
	private UserRepository UserRepository;

	@Autowired
	private JwtService jwtService;

	// check login using user name and password field
	@RequestMapping(value = "login", method = RequestMethod.POST)
	public ResponseEntity<String> checkLogin(@RequestParam String username, @RequestParam String password) {
		User acc;
		try {
			acc = this.UserRepository.findByusername(username);
			if (acc != null && BCrypt.checkpw(password, acc.getPassword())) {
				return new ResponseEntity<String>(jwtService.generateTokenLogin(username), HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("false", HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>("Server Error", HttpStatus.BAD_REQUEST);
		}
	}

	// get all users in database
	@RequestMapping(value = "users", method = RequestMethod.GET)
	public ResponseEntity<List<User>> getUsers() {
		List<User> list;
		try {
			list = this.UserRepository.findAll();
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<User>>(list, HttpStatus.OK);
	}

	// add new user for user role in database
	@RequestMapping(value = "userrole", method = RequestMethod.POST)
	public ResponseEntity<User> addUser(@RequestBody User acc) {
		try {
			acc.setRole("ROLE_USER");
			if (this.UserRepository.findByusername(acc.getUsername()) != null
					&& this.UserRepository.findByemail(acc.getEmail()) != null) {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			} else if (acc.getUsername() == null || acc.getEmail() == null) {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			} else {
				String hash = BCrypt.hashpw(acc.getPassword(), BCrypt.gensalt(5));
				acc.setPassword(hash);
				this.UserRepository.insert(acc);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<User>(acc, HttpStatus.OK);
	}

	// add new user for admin role in database
	@RequestMapping(value = "user", method = RequestMethod.POST)
	public ResponseEntity<User> addUserForAdmin(@RequestBody User acc) {
		try {
			if (acc.getRole() == null) {
				acc.setRole("ROLE_USER");
			}
			if (this.UserRepository.findByusername(acc.getUsername()) != null
					&& this.UserRepository.findByemail(acc.getEmail()) != null) {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			} else if (acc.getUsername() == null || acc.getEmail() == null) {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			} else {
				String hash = BCrypt.hashpw(acc.getPassword(), BCrypt.gensalt(5));
				acc.setPassword(hash);
				this.UserRepository.insert(acc);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<User>(acc, HttpStatus.OK);
	}

	// Update user in database
	@RequestMapping(value = "user", method = RequestMethod.PUT)
	public ResponseEntity<User> updateUser(@RequestBody User acc) {
		try {
			User user = this.UserRepository.findByusername(acc.getUsername());
			if (!user.getEmail().equals(acc.getEmail())) {
				if (this.UserRepository.findByemail(acc.getEmail()) != null) {
					return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
				}
			}
			if (!acc.getPassword().equals(user.getPassword())) {
				acc.setPassword(BCrypt.hashpw(acc.getPassword(), BCrypt.gensalt(5)));
			}
			this.UserRepository.save(acc);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);		
		}
		return new ResponseEntity<User>(acc, HttpStatus.OK);
	}

	// Get user by user name
	@RequestMapping(value = "user/{username}", method = RequestMethod.GET)
	public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
		User user;
		try {
			user = this.UserRepository.findByusername(username);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	// Check user is exists
	@RequestMapping(value = "checkuser", method = RequestMethod.POST)
	public ResponseEntity<Boolean> checkUser(@RequestParam String username) {
		User user;
		try {
			user = this.UserRepository.findByusername(username);
			if (user != null) {
				return new ResponseEntity<Boolean>(false, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	// Check email is exists
	@RequestMapping(value = "checkemail", method = RequestMethod.POST)
	public ResponseEntity<Boolean> checkEmail(@RequestParam String email) {
		User user;
		try {
			user = this.UserRepository.findByemail(email);
			if (user != null) {
				return new ResponseEntity<Boolean>(false, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	// Check old password is exists
	@RequestMapping(value = "checkoldpassword", method = RequestMethod.POST)
	public ResponseEntity<Boolean> checkOldPassword(@RequestParam String username, @RequestParam String password) {
		User acc;
		try {
			acc = this.UserRepository.findByusername(username);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		if (acc != null && BCrypt.checkpw(password, acc.getPassword())) {
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} else {
			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
		}
	}

	// Delete user in database
	@RequestMapping(value = "user/{username}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteUser(@PathVariable String username) {
		try {
			User user = this.UserRepository.findByusername(username);
			if (user != null) {
				this.UserRepository.delete(user);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(true, HttpStatus.OK);
	}

}
