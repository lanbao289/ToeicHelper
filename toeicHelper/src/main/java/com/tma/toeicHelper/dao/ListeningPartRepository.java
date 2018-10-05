package com.tma.toeicHelper.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.tma.toeicHelper.model.ListeningPart;

public interface ListeningPartRepository extends MongoRepository<ListeningPart, Long>{
	ListeningPart findBypartID(String partID);
	
	List<ListeningPart> findBypartNo(int partNo);
	
	List<ListeningPart> findByexamID(String examID);
	
	@Query(value = "{'partNo': ?0 ,'examID': ?1 }")
	ListeningPart findbypartNoAndexamID(int partNo, String examID);
}
