 package com.tma.toeicHelper.model;

import java.util.ArrayList;

import org.bson.types.ObjectId;

public class Comment {

	private ObjectId id;	
	private String content;
	private ArrayList<Vote> vote;
	private String username;

	public Comment(String content, String username) {
		super();
		this.content = content;
		this.vote = new ArrayList<>();
		this.username = username;
	}

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public ArrayList<Vote> getVote() {
		return vote;
	}

	public void setVote(ArrayList<Vote> vote) {
		this.vote = vote;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	
	
}
