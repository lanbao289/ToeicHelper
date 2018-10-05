package com.tma.toeicHelper.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "TestSessionResult")
public class TestSessionResult extends TestResult{
	
	@Field(value = "roomID")
	private String roomID;

	public TestSessionResult() {
	}
	
	public TestSessionResult(String username, String examID, Date dateTest, int readCorrect, int listenCorrect,
			int testScore, String roomID) {
		super(username, examID, dateTest, readCorrect, listenCorrect, testScore);
		this.roomID = roomID;
	}

	public String getRoomID() {
		return roomID;
	}

	public void setRoomID(String roomID) {
		this.roomID = roomID;
	}
	
}
