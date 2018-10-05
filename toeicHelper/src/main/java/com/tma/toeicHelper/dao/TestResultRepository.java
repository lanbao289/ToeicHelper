package com.tma.toeicHelper.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tma.toeicHelper.model.TestResult;

public interface TestResultRepository extends MongoRepository<TestResult, Long>{
	TestResult findBytestResultID(String testResultID);
	List<TestResult> findByusername(String username);
}
