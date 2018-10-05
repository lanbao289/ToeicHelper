package com.tma.toeicHelper.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tma.toeicHelper.dao.AnswerPartRepository;
import com.tma.toeicHelper.model.AnswerPart;

@RestController
@RequestMapping(value = "/api/", produces = { MediaType.APPLICATION_JSON_VALUE })
public class AnswerPartController {

	@Autowired
	private AnswerPartRepository answerPartRepository;

	// get all answerParts in database
	@RequestMapping(value = "answerparts", method = RequestMethod.GET)
	public ResponseEntity<List<AnswerPart>> getAnswerParts() {
		List<AnswerPart> list;
		try {
			list = this.answerPartRepository.findAll();
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<AnswerPart>>(list, HttpStatus.OK);
	}

	// get all answerParts by partID
	@RequestMapping(value = "answerparts/{partID}", method = RequestMethod.GET)
	private ResponseEntity<List<AnswerPart>> getAnswerPartsbyPartID(@PathVariable String partID) {
		List<AnswerPart> list;
		try {
			list = this.answerPartRepository.findBypartID(partID);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<List<AnswerPart>>(list, HttpStatus.OK);
	}

	// add new record list in database
	@RequestMapping(value = "answerparts", method = RequestMethod.POST)
	public ResponseEntity<Boolean> addAnswerParts(@RequestBody List<AnswerPart> list) {
		try {
			if (!list.isEmpty()) {
				this.answerPartRepository.insert(list);
				return new ResponseEntity<Boolean>(true, HttpStatus.OK);
			} else {
				return new ResponseEntity<Boolean>(false, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	// update record list in database
	@RequestMapping(value = "answerparts", method = RequestMethod.PUT)
	public ResponseEntity<Boolean> updateAnswerParts(@RequestBody List<AnswerPart> list) {
		try {
			if (!list.isEmpty()) {
				this.answerPartRepository.saveAll(list);
				return new ResponseEntity<Boolean>(true, HttpStatus.OK);
			} else {
				return new ResponseEntity<Boolean>(false, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	// return reading point in test toeic for user
	@RequestMapping(value = "readingpoint/{readCorrect}", method = RequestMethod.GET)
	public ResponseEntity<Integer> getReadingPoint(@PathVariable int readCorrect) {
		Map<Integer, Integer> readPointTable = new HashMap<Integer, Integer>();
		int rpoint = 0;
		for (int i = 0; i < 101; i++) {
			if (i < 10) {
				rpoint = 5;
			} else if (i == 25 || i == 28 || i == 39 || i == 43 || i == 47 || i == 52 || i == 55 || i == 64 || i == 89
					|| i == 92 || i == 94) {
				rpoint += 10;
			} else if (i == 82 || i > 97) {
				rpoint += 0;
			} else {
				rpoint += 5;
			}
			readPointTable.put(i, rpoint);
		}

		int readp = 0;
		for (Map.Entry<Integer, Integer> entry : readPointTable.entrySet()) {
			if (entry.getKey() == readCorrect) {
				readp = entry.getValue();
			}
		}
		return new ResponseEntity<Integer>(readp, HttpStatus.OK);
	}

	// return listening point in test toeic for user
	@RequestMapping(value = "listeningpoint/{listenCorrect}", method = RequestMethod.GET)
	public ResponseEntity<Integer> getListeningPoint(@PathVariable int listenCorrect) {
		Map<Integer, Integer> listenPointTable = new HashMap<Integer, Integer>();
		int lpoint = 0;
		for (int i = 0; i < 101; i++) {
			if (i < 7) {
				lpoint = 5;
			} else if (i == 31 || i == 39 || i == 44 || i == 45 || i == 54 || i == 58 || i == 70 || i == 75 || i == 80 || i == 85 || i == 88) {
				lpoint += 10;
			} else if (i > 93) {
				lpoint += 0;
			} else {
				lpoint += 5;
			}
			listenPointTable.put(i, lpoint);
		}

		int listenp = 0;
		for (Map.Entry<Integer, Integer> entry : listenPointTable.entrySet()) {
			if (entry.getKey() == listenCorrect) {
				listenp = entry.getValue();
			}
		}
		return new ResponseEntity<Integer>(listenp, HttpStatus.OK);
	}
}
