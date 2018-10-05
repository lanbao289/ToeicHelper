package com.tma.toeicHelper.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.Repository;

import com.tma.toeicHelper.model.Part;

public interface PartRepository extends MongoRepository<Part, Long>, Repository<Part, Long> {
	List<Part> findBypartNo(int partNo);
	
	Part findBypartID(String partID);
	
	List<Part> findByexamID(String examID);
	
	@Query(value = "{'partNo': ?0 ,'examID': ?1 }")
	Part findbypartNoAndexamID(int partNo, String examID);
}
