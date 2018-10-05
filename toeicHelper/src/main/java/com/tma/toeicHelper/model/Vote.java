package com.tma.toeicHelper.model;

import org.bson.types.ObjectId;

public class Vote {
	private ObjectId id;
	private String vot;
	private String username;
	
	public Vote() {}
	
	public Vote(String vot, String username) {
		super();
		this.vot = vot;
		this.username = username;
	}

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getVot() {
		return vot;
	}

	public void setVot(String vot) {
		this.vot = vot;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	
}
