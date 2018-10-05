package com.tma.toeicHelper.model;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "DiscussionRoom")
public class DiscussionRoom {
	
	private String id;
	
	@Field(value = "roomID")
	private String roomID;
	
	@Field(value = "name")
	private String name;
	
	@Field(value = "post")
	private String post;
	
	@Field(value = "comments")
	private ArrayList<Comment> comment;
	
	@Field(value = "status")
	private String status;
	
	@Field(value = "username")
	private String username;
	
	@Field(value = "viewusers")
	private ArrayList<String> viewusers;
	
	@Field(value = "datePost")
	private Date datePost;
	
	public DiscussionRoom() {}

	public DiscussionRoom(String roomID, String name, String post, String status, String username, Date datePost) {
		super();
		this.roomID = roomID;
		this.name = name;
		this.post = post;
		this.comment = new ArrayList<>();
		this.status = status;
		this.username = username;
		this.datePost = datePost;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getRoomID() {
		return roomID;
	}

	public void setRoomID(String roomID) {
		this.roomID = roomID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPost() {
		return post;
	}

	public void setPost(String post) {
		this.post = post;
	}

	public ArrayList<Comment> getComment() {
		return comment;
	}

	public void setComment(ArrayList<Comment> comment) {
		this.comment = comment;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public ArrayList<String> getViewusers() {
		return viewusers;
	}

	public void setViewusers(ArrayList<String> viewusers) {
		this.viewusers = viewusers;
	}

	public Date getDatePost() {
		return datePost;
	}

	public void setDatePost(Date datePost) {
		this.datePost = datePost;
	}
	

}
