package com.tma.toeicHelper.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.tma.toeicHelper.model.DiscussionRoom;

public interface DiscussionRoomRepository extends MongoRepository<DiscussionRoom, Long> {

	List<DiscussionRoom> findRoomByName(String name);
	
	List<DiscussionRoom> findRoomByUsername(String username);
	
	DiscussionRoom findRoomByRoomID(String roomID);
	
	@Query("{ 'name' : { $regex: ?0 } }")
	List<DiscussionRoom> findRoomsByRegexpName(String regexp);
}
