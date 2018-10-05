package com.tma.toeicHelper.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "Part")
public class Part {
	
	private String id;
	
	@Field(value = "partID")
	private String partID;
	
	@Field(value = "examID")
	private String examID;
	
	@Field(value = "partNo")
	private int partNo;
	
	@Field(value = "pdfsrc")
	private String pdfsrc;

	public Part() {
	}
	
	public Part(String examID, int partNo, String pdfsrc) {
		super();
		this.examID = examID;
		this.partNo = partNo;
		this.pdfsrc = pdfsrc;
	}
	
	public String getId() {
		return id;
	}
	
	public String getPartID() {
		return partID;
	}

	public void setPartID(String partID) {
		this.partID = partID;
	}

	public String getExamID() {
		return examID;
	}

	public void setExamID(String examID) {
		this.examID = examID;
	}

	public int getPartNo() {
		return partNo;
	}

	public void setPartNo(int partNo) {
		this.partNo = partNo;
	}

	public String getPDFsrc() {
		return this.pdfsrc;
	}

	public void setPDFsrc(String pDFsrc) {
		this.pdfsrc = pDFsrc;
	}
	
}
