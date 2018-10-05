package com.tma.toeicHelper.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "ListeningPart")
public class ListeningPart extends Part{
	
	@Field(value = "mp3src")
	private String mp3src;

	public ListeningPart() {
	}
	
	public ListeningPart(String examID, int partNo, String pdfsrc, String mp3src) {
		super(examID, partNo, pdfsrc);
		this.mp3src = mp3src;
	}
 
	public String getMP3src() {
		return this.mp3src;
	}

	public void setMP3src(String mp3src) {
		this.mp3src = mp3src;
	}
	
}
