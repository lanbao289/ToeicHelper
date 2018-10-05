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

import com.tma.toeicHelper.dao.TrainingResultRepository;
import com.tma.toeicHelper.model.TrainingResult;

@RestController
@RequestMapping(value = "/api/", produces = { MediaType.APPLICATION_JSON_VALUE })
public class TrainingResultController {

	@Autowired
	private TrainingResultRepository trainingResultRepository;

	// Show alls record in database
	@RequestMapping(value = "trainingresults", method = RequestMethod.GET)
	public ResponseEntity<List<TrainingResult>> getTrainingResults() {
		List<TrainingResult> list;
		try {
			list = this.trainingResultRepository.findAll();
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<TrainingResult>>(list, HttpStatus.OK);
	}

	// add new record in database
	@RequestMapping(value = "trainingresult", method = RequestMethod.POST)
	public ResponseEntity<TrainingResult> addTrainingResult(@RequestBody TrainingResult tnResult) {
		try {
			tnResult.setTrainResultID(randomCode());
			this.trainingResultRepository.insert(tnResult);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<TrainingResult>(tnResult, HttpStatus.OK);
	}

	// get record by trainResultID
	@RequestMapping(value = "trainingresult/{trainResultID}", method = RequestMethod.GET)
	public ResponseEntity<TrainingResult> getTrainingResult(@PathVariable String trainResultID) {
		TrainingResult tnResult;
		try {
			tnResult = this.trainingResultRepository.findBytrainResultID(trainResultID);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<TrainingResult>(tnResult, HttpStatus.OK);
	}

	// get records by username
	@RequestMapping(value = "trainingresults/{username}", method = RequestMethod.GET)
	public ResponseEntity<List<TrainingResult>> getTrainingResultByUsername(@PathVariable String username) {
		List<TrainingResult> list;
		try {
			list = this.trainingResultRepository.findByusername(username);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<TrainingResult>>(list, HttpStatus.OK);
	}

	// delete record in database
	@RequestMapping(value = "trainingresult/{trainResultID}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteTrainingResult(@PathVariable String trainResultID) {
		try {
			TrainingResult tnResult = this.trainingResultRepository.findBytrainResultID(trainResultID);
			if (tnResult != null) {
				this.trainingResultRepository.delete(tnResult);
			} else {
				return new ResponseEntity<Boolean>(false, HttpStatus.OK);
			}
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	private String randomCode() {
		String allChar = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
		String[] allCharArray = allChar.split(",");
		String randomCode = "";

		Random rand = new Random();
		for (int i = 0; i < 10; i++) {
			int t = rand.nextInt(36);
			randomCode += allCharArray[t];
		}
		for (TrainingResult trResult : this.trainingResultRepository.findAll()) {
			if (trResult.getTrainResultID().equals(randomCode)) {
				return randomCode();
			}
		}
		return randomCode;
	}
}
