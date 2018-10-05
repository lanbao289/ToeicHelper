package com.tma.toeicHelper.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "TrainingResult")
public class TrainingResult {
	
	private String id;
	
	@Field(value = "trainResultID")
	private String trainResultID;
	
	@Field(value = "username")
	private String username;
	
	@Field(value = "examID")
	private String examID;
	
	@Field(value = "partNo")
	private int partNo;
	
	@Field(value = "dateTraining")
	private Date dateTraining;
	
	@Field(value = "answerCorrect")
	private int answerCorrect;
	
	@Field(value = "questionTotal")
	private int questionTotal;

	public TrainingResult(String username, String examID, int partNo, Date dateTraining, int answerCorrect,
			int questionTotal) {
		super();
		this.username = username;
		this.examID = examID;
		this.partNo = partNo;
		this.dateTraining = dateTraining;
		this.answerCorrect = answerCorrect;
		this.questionTotal = questionTotal;
	}

	public String getId() {
		return id;
	}

	public String getTrainResultID() {
		return trainResultID;
	}

	public void setTrainResultID(String trainResultID) {
		this.trainResultID = trainResultID;
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

	public Date getDateTraining() {
		return dateTraining;
	}

	public void setDateTraining(Date dateTraining) {
		this.dateTraining = dateTraining;
	}

	public int getAnswerCorrect() {
		return answerCorrect;
	}

	public void setAnswerCorrect(int answerCorrect) {
		this.answerCorrect = answerCorrect;
	}

	public int getQuestionTotal() {
		return questionTotal;
	}

	public void setQuestionTotal(int questionTotal) {
		this.questionTotal = questionTotal;
	}

	public int getPartNo() {
		return partNo;
	}

	public void setPartNo(int partNo) {
		this.partNo = partNo;
	}
	
}
