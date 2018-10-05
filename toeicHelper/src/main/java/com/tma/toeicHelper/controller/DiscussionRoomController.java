package com.tma.toeicHelper.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tma.toeicHelper.dao.DiscussionRoomRepository;
import com.tma.toeicHelper.model.Comment;
import com.tma.toeicHelper.model.DiscussionRoom;
import com.tma.toeicHelper.model.Exam;
import com.tma.toeicHelper.model.Vote;


@RestController
@RequestMapping(value = "/api/", produces = { MediaType.APPLICATION_JSON_VALUE })
public class DiscussionRoomController {

	@Autowired
	private DiscussionRoomRepository discussionRoomRepository;
	
	// get list discussion room in database
	@RequestMapping(value = "discussionrooms", method = RequestMethod.GET)
	public ResponseEntity<List<DiscussionRoom>> getRooms() {
		List<DiscussionRoom> list;
		try {
			list = this.discussionRoomRepository.findAll();
			if (list.isEmpty()) {
				return new ResponseEntity<List<DiscussionRoom>>(new ArrayList<DiscussionRoom>(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<DiscussionRoom>>(list, HttpStatus.OK);
		/*return this.discussionRoomRepository.findAll();*/
	}

	// add new room in database
	@RequestMapping(value = "discussionroom", method = RequestMethod.POST)
	public ResponseEntity<DiscussionRoom> addRoom(@RequestBody DiscussionRoom dRoom) {
		try {
			dRoom.setComment(new ArrayList<>());
			dRoom.setViewusers(new ArrayList<>());
			this.discussionRoomRepository.insert(dRoom);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<DiscussionRoom>(dRoom, HttpStatus.OK);
	}
	
	@RequestMapping(value = "discussionroom/{roomID}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteRoom(@PathVariable String roomID) {
		try {
			DiscussionRoom dRoom = this.discussionRoomRepository.findRoomByRoomID(roomID);
			if(dRoom != null) {
				this.discussionRoomRepository.delete(dRoom);
				return new ResponseEntity<Boolean>(true, HttpStatus.OK);
			} else {
				return new ResponseEntity<Boolean>(false, HttpStatus.OK);
			}
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(value = "discussionroom/{roomID}", method = RequestMethod.GET)
	public ResponseEntity<DiscussionRoom> getRoomByRoomID(@PathVariable String roomID) {
		DiscussionRoom dRoom;
		try {
			dRoom = this.discussionRoomRepository.findRoomByRoomID(roomID);
			if (dRoom == null) {
				return new ResponseEntity<DiscussionRoom>(new DiscussionRoom(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<DiscussionRoom>(dRoom, HttpStatus.OK);
	}
	
	@RequestMapping(value = "postsbyusername/{username}", method = RequestMethod.GET)
	public ResponseEntity<List<DiscussionRoom>> getPostsByUsername(@PathVariable String username) {
		List<DiscussionRoom> list;
		try {
			list = this.discussionRoomRepository.findRoomByUsername(username);
			if (list.isEmpty()) {
				return new ResponseEntity<List<DiscussionRoom>>(new ArrayList<DiscussionRoom>(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<DiscussionRoom>>(list, HttpStatus.OK);
	}
	
	@RequestMapping(value = "addcomment/{roomID}", method = RequestMethod.PUT)
	public ResponseEntity<DiscussionRoom> addComment(@PathVariable String roomID, @RequestBody Comment comment) {
		DiscussionRoom dRoom;
		try {
			dRoom = this.discussionRoomRepository.findRoomByRoomID(roomID);
			comment.setVote(new ArrayList<>());
			comment.setId(new ObjectId());
			dRoom.getComment().add(comment);
			this.discussionRoomRepository.save(dRoom);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<DiscussionRoom>(dRoom, HttpStatus.OK);
	}
	
	@RequestMapping(value = "addvote/{roomID}/{username}", method = RequestMethod.PUT)
	public ResponseEntity<DiscussionRoom> addVote(@PathVariable String roomID, @RequestBody Comment comment, @PathVariable String username) {
		DiscussionRoom dRoom;
		try {
			dRoom = this.discussionRoomRepository.findRoomByRoomID(roomID);
			for(Comment co : dRoom.getComment()) {
				if(co.getId().toString().equals(comment.getId().toString())) {
					Vote vo = new Vote("AGREE", username);
					vo.setId(new ObjectId());
					co.getVote().add(vo);
				}
			}
			this.discussionRoomRepository.save(dRoom);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<DiscussionRoom>(dRoom, HttpStatus.OK);
	}
	
	@RequestMapping(value = "removevote/{roomID}/{username}", method = RequestMethod.PUT)
	public ResponseEntity<DiscussionRoom> removeVote(@PathVariable String roomID, @RequestBody Comment comment, @PathVariable String username) {
		DiscussionRoom dRoom;
		try {
			dRoom = this.discussionRoomRepository.findRoomByRoomID(roomID);
			for(Comment co : dRoom.getComment()) {
				if(co.getId().toString().equals(comment.getId().toString())) {
					for(Vote vo : co.getVote()) {
						if(vo.getUsername().equals(username)) {
							co.getVote().remove(vo);
							break;
						}
					}
				}
			}
			this.discussionRoomRepository.save(dRoom);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<DiscussionRoom>(dRoom, HttpStatus.OK);
	}
	
	@RequestMapping(value = "roomsbyname/{regexp}", method = RequestMethod.GET)
	public ResponseEntity<List<DiscussionRoom>> getRoomsByName(@PathVariable String regexp) {
		List<DiscussionRoom> list;
		try {
			list = this.discussionRoomRepository.findRoomsByRegexpName(regexp);
			if (list.isEmpty()) {
				return new ResponseEntity<List<DiscussionRoom>>(new ArrayList<DiscussionRoom>(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<DiscussionRoom>>(list, HttpStatus.OK);
	}
	
	@RequestMapping(value = "viewusers/{roomID}/{username}", method = RequestMethod.PUT)
	public ResponseEntity<DiscussionRoom> addUserView(@PathVariable String roomID, @PathVariable String username) {
		DiscussionRoom dRoom;
		try {
			dRoom = this.discussionRoomRepository.findRoomByRoomID(roomID);
			dRoom.getViewusers().add(username);
			if(dRoom.getStatus().equals("Opening")) {
				dRoom.setStatus("Active");
			}
			this.discussionRoomRepository.save(dRoom);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<DiscussionRoom>(dRoom, HttpStatus.OK);
	}
	
	@RequestMapping(value = "removeviewuser/{roomID}/{username}", method = RequestMethod.PUT)
	public ResponseEntity<DiscussionRoom> removeUserView(@PathVariable String roomID, @PathVariable String username) {
		DiscussionRoom dRoom;
		try {
			dRoom = this.discussionRoomRepository.findRoomByRoomID(roomID);
			dRoom.getViewusers().remove(username);
			if(dRoom.getViewusers().size() == 0 && dRoom.getStatus().equals("Active")) {
				dRoom.setStatus("Opening");
			}
			this.discussionRoomRepository.save(dRoom);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<DiscussionRoom>(dRoom, HttpStatus.OK);
	}
	
	@RequestMapping(value = "updatestatus/{roomID}", method = RequestMethod.PUT)
	public ResponseEntity<DiscussionRoom> updateStatus(@PathVariable String roomID) {
		DiscussionRoom dRoom;
		try {
			dRoom = this.discussionRoomRepository.findRoomByRoomID(roomID);
			dRoom.setStatus("Resolved");
			this.discussionRoomRepository.save(dRoom);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<DiscussionRoom>(dRoom, HttpStatus.OK);
	}
	
	@RequestMapping(value = "updatepost", method = RequestMethod.PUT)
	public ResponseEntity<DiscussionRoom> updateForum(@RequestBody DiscussionRoom dRoom) {
		try {
			this.discussionRoomRepository.save(dRoom);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<DiscussionRoom>(dRoom, HttpStatus.OK);
	}
	
	
}
