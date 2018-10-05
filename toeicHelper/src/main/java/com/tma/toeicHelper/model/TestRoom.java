package com.tma.toeicHelper.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "TestRoom")
public class TestRoom {
	
	private String id;
	
	@Field(value = "roomID")
	private String roomID;
	
	@Field(value = "examID")
	private String examID;
	
	@Field(value = "startTime")
	private Date startTime;
	
	@Field(value = "userRegisteredList")
	private String[] userRegisteredList;
	
	@Field(value = "userJoinedList")
	private String[] userJoinedList;
	
	@Field(value = "userOnlineList")
	private String[] userOnlineList;
	
	public TestRoom() {
	}

	public TestRoom(String roomID, String examID, Date startTime, String[] userRegisteredList, String[] userJoinedList,
			String[] userOnlineList) {
		super();
		this.roomID = roomID;
		this.examID = examID;
		this.startTime = startTime;
		this.userRegisteredList = userRegisteredList;
		this.userJoinedList = userJoinedList;
		this.userOnlineList = userOnlineList;
	}

	public String getRoomID() {
		return roomID;
	}

	public void setRoomID(String roomID) {
		this.roomID = roomID;
	}

	public String getExamID() {
		return examID;
	}

	public void setExamID(String examID) {
		this.examID = examID;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public String[] getUserRegisteredList() {
		return userRegisteredList;
	}

	public void setUserRegisteredList(String[] userRegisteredList) {
		this.userRegisteredList = userRegisteredList;
	}

	public String[] getUserJoinedList() {
		return userJoinedList;
	}

	public void setUserJoinedList(String[] userJoinedList) {
		this.userJoinedList = userJoinedList;
	}

	public String[] getUserOnlineList() {
		return userOnlineList;
	}

	public void setUserOnlineList(String[] userOnlineList) {
		this.userOnlineList = userOnlineList;
	}

	public String getId() {
		return id;
	}
}
