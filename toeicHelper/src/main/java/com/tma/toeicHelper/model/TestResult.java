package com.tma.toeicHelper.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "TestResult")
public class TestResult {
	
	private String id;
	
	@Field(value = "testResultID")
	private String testResultID;
	
	@Field(value = "username")
	private String username;
	
	@Field(value = "examID")
	private String examID;
	
	@Field(value = "dateTest")
	private Date dateTest;
	
	@Field(value = "readCorrect")
	private int readCorrect;
	
	@Field(value = "listenCorrect")
	private int listenCorrect;
	
	@Field(value = "testScore")
	private int testScore;

	public TestResult() {
	}
	
	public TestResult(String username, String examID, Date dateTest, int readCorrect, int listenCorrect,
			int testScore) {
		super();
		this.username = username;
		this.examID = examID;
		this.dateTest = dateTest;
		this.readCorrect = readCorrect;
		this.listenCorrect = listenCorrect;
		this.testScore = testScore;
	}
	
	public String getId() {
		return id;
	}
	
	public String getTestResultID() {
		return testResultID;
	}

	public void setTestResultID(String testResultID) {
		this.testResultID = testResultID;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getExamID() {
		return examID;
	}

	public void setExamID(String examID) {
		this.examID = examID;
	}

	public Date getDateTest() {
		return dateTest;
	}

	public void setDateTest(Date dateTest) {
		this.dateTest = dateTest;
	}

	public int getReadCorrect() {
		return readCorrect;
	}

	public void setReadCorrect(int readCorrect) {
		this.readCorrect = readCorrect;
	}

	public int getListenCorrect() {
		return listenCorrect;
	}

	public void setListenCorrect(int listenCorrect) {
		this.listenCorrect = listenCorrect;
	}

	public int getTestScore() {
		return testScore;
	}

	public void setTestScore(int testScore) {
		this.testScore = testScore;
	}
	
}
