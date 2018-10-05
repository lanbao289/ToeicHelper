package com.tma.toeicHelper.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tma.toeicHelper.model.TestRoom;

public interface TestRoomRepository extends MongoRepository<TestRoom, Long> {
	TestRoom findByroomID(String roomID);
	
	TestRoom findByexamID(String examID);
}
