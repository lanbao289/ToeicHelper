package com.tma.toeicHelper.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang3.ArrayUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tma.toeicHelper.dao.TestRoomRepository;
import com.tma.toeicHelper.model.TestRoom;

@RestController
@RequestMapping(value = "/api/", produces = { MediaType.APPLICATION_JSON_VALUE })
public class TestRoomController {

	@Autowired
	private TestRoomRepository testRoomRepository;

	// Get All records in database
	@RequestMapping(value = "testrooms", method = RequestMethod.GET)
	public ResponseEntity<List<TestRoom>> getTestRooms() {
		List<TestRoom> list;
		try {
			list = this.testRoomRepository.findAll();
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<TestRoom>>(list, HttpStatus.OK);
	}

	// Get room by roomID
	@RequestMapping(value = "testroom/{roomID}", method = RequestMethod.GET)
	public ResponseEntity<TestRoom> getTestRoomByRoomID(@PathVariable String roomID) {
		TestRoom tr;
		try {
			tr = this.testRoomRepository.findByroomID(roomID);
			if (tr == null) {
				return new ResponseEntity<TestRoom>(new TestRoom(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<TestRoom>(tr, HttpStatus.OK);
	}

	// Get room by examID
	@RequestMapping(value = "gettestroombyexamid/{examID}", method = RequestMethod.GET)
	public ResponseEntity<TestRoom> getTestRoomByexamID(@PathVariable String examID) {
		TestRoom tr;
		try {
			tr = this.testRoomRepository.findByexamID(examID);
			if (tr == null) {
				return new ResponseEntity<TestRoom>(new TestRoom(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<TestRoom>(tr, HttpStatus.OK);
	}

	// Add new record in database
	@RequestMapping(value = "testroom", method = RequestMethod.POST)
	public ResponseEntity<TestRoom> addTestRoom(@RequestBody TestRoom tr) {
		try {
			this.testRoomRepository.insert(tr);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<TestRoom>(tr, HttpStatus.OK);
	}

	// Update room in database
	// @SuppressWarnings("deprecation")
	@RequestMapping(value = "testroom", method = RequestMethod.PUT)
	public ResponseEntity<TestRoom> updateTestRoom(@RequestBody TestRoom tr) {
		try {
			/*
			 * Date current = new Date(); if ((tr.getStartTime().getYear() <
			 * current.getYear()) || (tr.getStartTime().getYear() == current.getYear() &&
			 * tr.getStartTime().getMonth() < current.getMonth()) ||
			 * (tr.getStartTime().getYear() == current.getYear() &&
			 * tr.getStartTime().getMonth() == current.getMonth() &&
			 * tr.getStartTime().getDate() < current.getDate()) ||
			 * (tr.getStartTime().getYear() == current.getYear() &&
			 * tr.getStartTime().getMonth() == current.getMonth() &&
			 * tr.getStartTime().getDate() == current.getDate() &&
			 * tr.getStartTime().getHours() < current.getHours() - 2)) {
			 */
			this.testRoomRepository.save(tr);
			/*
			 * } else { return new ResponseEntity<TestRoom>(new TestRoom(), HttpStatus.OK);
			 * }
			 */
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<TestRoom>(tr, HttpStatus.OK);
	}

	// Delete record in database
	@RequestMapping(value = "testroom/{roomID}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteTestRoom(@PathVariable String roomID) {
		try {
			TestRoom tr = this.testRoomRepository.findByroomID(roomID);
			if (tr != null) {
				this.testRoomRepository.delete(tr);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(true, HttpStatus.OK);
	}

	// Get current time on server
	@RequestMapping(value = "currenttime", method = RequestMethod.GET)
	public ResponseEntity<String> getCurrentTime() {
		String currentdate;
		try {
			Date date = new Date();
			SimpleDateFormat dateformater = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");
			currentdate = dateformater.format(date);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<String>(currentdate, HttpStatus.OK);
	}

	// Check user online in room session
	@RequestMapping(value = "checkuseronline", method = RequestMethod.POST)
	public ResponseEntity<Boolean> checkUserOnline(@RequestParam String username, @RequestParam String roomID) {
		try {
			TestRoom tr = this.testRoomRepository.findByroomID(roomID);
			if (tr.getUserOnlineList() != null || tr.getUserOnlineList().length > 0) {
				int cnt = 0;
				for (int i = 0; i < tr.getUserOnlineList().length; i++) {
					if (tr.getUserOnlineList()[i].equals(username)) {
						cnt++;
					}
				}
				if (cnt > 0) {
					return new ResponseEntity<Boolean>(false, HttpStatus.OK);
				} else {
					return new ResponseEntity<Boolean>(true, HttpStatus.OK);
				}
			} else {
				return new ResponseEntity<Boolean>(true, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	// Checkout user in room session
	@RequestMapping(value = "checkoutuser", method = RequestMethod.POST)
	public ResponseEntity<Boolean> checkoutUser(@RequestParam String username, @RequestParam String roomID) {
		try {
			TestRoom tr = this.testRoomRepository.findByroomID(roomID);
			for (int i = 0; i < tr.getUserOnlineList().length; i++) {
				if (tr.getUserOnlineList()[i].equals(username)) {
					tr.setUserOnlineList(ArrayUtils.remove(tr.getUserOnlineList(), i));
					this.testRoomRepository.save(tr);
				}
			}
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
}
