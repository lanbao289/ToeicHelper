package com.tma.toeicHelper.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.tma.toeicHelper.model.User;

public interface UserRepository extends MongoRepository<User,Long> {
	@Query(value = "{'empName': {$regex : ?0, $options: 'i'}}")
	List<User> findByusernameLike(String username);
	
	@Query(value = "{'username': ?0 ,'password': ?1 }")
	User findbyusernameAndpassword(String username, String password);
	
	@Query(value = "{'username': ?0 ,'password': ?1 ,'role': ?2}")
	User findbyusernameAndpasswordAndrole(String username, String password, String role);
	
	User findByusername(String username);
	
	User findByemail(String email);
}
