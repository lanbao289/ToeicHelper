package com.tma.toeicHelper.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tma.toeicHelper.model.Exam;

public interface ExamRepository extends MongoRepository<Exam, Long>{
	Exam findByexamID(String examID);
	
	List<Exam> findByisTest(String isTest);
}
