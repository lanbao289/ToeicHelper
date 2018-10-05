package com.tma.toeicHelper.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tma.toeicHelper.model.AnswerPart;

public interface AnswerPartRepository extends MongoRepository<AnswerPart, Long>{
	List<AnswerPart> findBypartID(String partID);
}
