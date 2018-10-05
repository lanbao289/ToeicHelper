package com.tma.toeicHelper.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "AnswerPart")
public class AnswerPart {

	private String id;
	
	@Field(value = "questionOrder")
	private int questionOrder;
	
	@Field(value = "answer")
	private String answer;
	
	@Field(value = "partID")
	private String partID;

	public AnswerPart(int questionOrder, String answer, String partID) {
		super();
		this.questionOrder = questionOrder;
		this.answer = answer;
		this.partID = partID;
	}

	public String getId() {
		return id;
	}
	
	public int getQuestionOrder() {
		return questionOrder;
	}

	public void setQuestionOrder(int questionOrder) {
		this.questionOrder = questionOrder;
	}

	public String getPartID() {
		return partID;
	}

	public void setPartID(String partID) {
		this.partID = partID;
	}

	public String getAnswer() {
		return answer;
	}
	
}
