package com.tma.toeicHelper.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "Exam")
public class Exam {
	
	private String id;
	
	@Field(value = "examID")
	private String examID;
	
	@Field(value = "isTest")
	private String isTest;

	public Exam() {
	}

	public Exam(String examID, String isTest) {
		super();
		this.examID = examID;
		this.isTest = isTest;
	}

	public String getId() {
		return id;
	}
	
	public String getExamID() {
		return examID;
	}

	public void setExamID(String examID) {
		this.examID = examID;
	}

	public String getIsTest() {
		return isTest;
	}

	public void setIsTest(String isTest) {
		this.isTest = isTest;
	}
	
}
