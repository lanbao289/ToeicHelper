package com.tma.toeicHelper.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tma.toeicHelper.dao.ExamRepository;
import com.tma.toeicHelper.dao.TestRoomRepository;
import com.tma.toeicHelper.dao.TestSessionResultRepository;
import com.tma.toeicHelper.model.Exam;
import com.tma.toeicHelper.model.TestResult;
import com.tma.toeicHelper.model.TestRoom;
import com.tma.toeicHelper.model.TestSessionResult;

@RestController
@RequestMapping(value = "/api/", produces = { MediaType.APPLICATION_JSON_VALUE })
public class TestSessionResultController {
	@Autowired
	private TestSessionResultRepository testSessionResultRepository;

	@Autowired
	private TestRoomRepository testRoomRepository;

	@Autowired
	private ExamRepository examRepository;

	// add new record in database
	@RequestMapping(value = "testsessionresult", method = RequestMethod.POST)
	public ResponseEntity<TestSessionResult> addTestSessionResult(@RequestBody TestSessionResult tResult) {
		try {
			TestRoom tr = this.testRoomRepository.findByroomID(tResult.getRoomID());
			if (tr != null) {
				boolean check = true;
				if (tr.getUserJoinedList() != null) {
					for (int i = 0; i < tr.getUserJoinedList().length; i++) {
						if (tr.getUserJoinedList()[i] == tResult.getUsername()) {
							check = false;
						}
					}
				} else {
					check = true;
				}
				if (check) {
					tResult.setTestResultID(randomCode());
					this.testSessionResultRepository.insert(tResult);
					/*
					 * String[] list = tr.getUserRegisteredList(); list[list.length] =
					 * tResult.getUsername(); tr.setUserRegisteredList(list);
					 * this.testRoomRepository.save(tr);
					 */
					Exam exam = this.examRepository.findByexamID(tResult.getExamID());
					exam.setIsTest("false");
					System.out.println(exam.getIsTest());
					this.examRepository.save(exam);
				} else {
					return new ResponseEntity<TestSessionResult>(new TestSessionResult(), HttpStatus.OK);
				}
			} else {
				return new ResponseEntity<TestSessionResult>(new TestSessionResult(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<TestSessionResult>(tResult, HttpStatus.OK);
	}

	// get records by username
	@RequestMapping(value = "testsessionresults/{username}", method = RequestMethod.GET)
	public ResponseEntity<List<TestSessionResult>> getTestSessionResultByUsername(@PathVariable String username) {
		List<TestSessionResult> list;
		try {
			list = this.testSessionResultRepository.findByusername(username);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<TestSessionResult>>(list, HttpStatus.OK);
	}

	// get records by roomID
	@RequestMapping(value = "testsessionresultsbyroomid/{roomID}", method = RequestMethod.GET)
	public ResponseEntity<List<TestSessionResult>> getTestSessionResultByroomID(@PathVariable String roomID) {
		List<TestSessionResult> list;
		try {
			list = this.testSessionResultRepository.findByroomID(roomID);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<TestSessionResult>>(list, HttpStatus.OK);
	}

	// delete record by testResultID
	@RequestMapping(value = "testsessionresult/{testResultID}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteTestSessionResult(@PathVariable String testResultID) {
		try {
			TestSessionResult tResult = this.testSessionResultRepository.findBytestResultID(testResultID);
			if (tResult != null) {
				this.testSessionResultRepository.delete(tResult);
			} else {
				return new ResponseEntity<Boolean>(false, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	private String randomCode() {
		String allChar = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
		String[] allCharArray = allChar.split(",");
		String randomCode = "";

		Random rand = new Random();
		for (int i = 0; i < 13; i++) {
			int t = rand.nextInt(36);
			randomCode += allCharArray[t];
		}
		for (TestResult teResult : this.testSessionResultRepository.findAll()) {
			if (teResult.getTestResultID().equals(randomCode)) {
				return randomCode();
			}
		}
		return randomCode;
	}
}
