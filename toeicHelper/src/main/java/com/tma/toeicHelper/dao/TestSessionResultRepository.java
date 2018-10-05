package com.tma.toeicHelper.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tma.toeicHelper.model.TestSessionResult;

public interface TestSessionResultRepository extends MongoRepository<TestSessionResult, Long>{
	TestSessionResult findBytestResultID(String testResultID);
	List<TestSessionResult> findByusername(String username);
	List<TestSessionResult> findByroomID(String roomID);
}