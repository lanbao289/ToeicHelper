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

import com.tma.toeicHelper.dao.TestResultRepository;
import com.tma.toeicHelper.model.TestResult;

@RestController
@RequestMapping(value = "/api/", produces = { MediaType.APPLICATION_JSON_VALUE })
public class TestResultController {

	@Autowired
	private TestResultRepository testResultRepository;

	// show all records in database
	@RequestMapping(value = "testresults", method = RequestMethod.GET)
	public ResponseEntity<List<TestResult>> getTestResults() {
		List<TestResult> list;
		try {
			list = this.testResultRepository.findAll();
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<TestResult>>(list, HttpStatus.OK);
	}

	// add new record in database
	@RequestMapping(value = "testresult", method = RequestMethod.POST)
	public ResponseEntity<TestResult> addTestResult(@RequestBody TestResult tResult) {
		try {
			tResult.setTestResultID(randomCode());
			this.testResultRepository.insert(tResult);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<TestResult>(tResult, HttpStatus.OK);
	}
	
	// get records by username
	@RequestMapping(value = "testresults/{username}", method = RequestMethod.GET)
	public ResponseEntity<List<TestResult>> getTestResultByUsername(@PathVariable String username){
		List<TestResult> list;
		try {
			list = this.testResultRepository.findByusername(username);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<TestResult>>(list, HttpStatus.OK);
	}
	
	// delete record by testResultID
	@RequestMapping(value = "testresult/{testResultID}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteTestResult(@PathVariable String testResultID) {
		try {
			TestResult tResult = this.testResultRepository.findBytestResultID(testResultID);
			if (tResult != null) {
				this.testResultRepository.delete(tResult);
			}else {
				return new ResponseEntity<Boolean>(false,HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Boolean>(true,HttpStatus.OK);
	}

	private String randomCode() {
		String allChar = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
		String[] allCharArray = allChar.split(",");
		String randomCode = "";

		Random rand = new Random();
		for (int i = 0; i < 11; i++) {
			int t = rand.nextInt(36);
			randomCode += allCharArray[t];
		}
		for (TestResult teResult : this.testResultRepository.findAll()) {
			if (teResult.getTestResultID().equals(randomCode)) {
				return randomCode();
			}
		}
		return randomCode;
	}
}
