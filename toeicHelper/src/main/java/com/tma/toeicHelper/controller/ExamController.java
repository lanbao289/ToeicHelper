package com.tma.toeicHelper.controller;

import java.util.ArrayList;
import java.util.List;

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
import com.tma.toeicHelper.dao.ExamRepository;
import com.tma.toeicHelper.dao.ListeningPartRepository;
import com.tma.toeicHelper.dao.PartRepository;
import com.tma.toeicHelper.model.Exam;
import com.tma.toeicHelper.model.ListeningPart;
import com.tma.toeicHelper.model.Part;
import com.tma.toeicHelper.service.StorageService;

@RestController
@RequestMapping(value = "/api/", produces = { MediaType.APPLICATION_JSON_VALUE })
public class ExamController {

	@Autowired
	private ExamRepository examRepository;

	@Autowired
	private PartRepository partRepository;
	
	@Autowired
	private StorageService storageService;

	@Autowired
	private ListeningPartRepository listeningPartRepository;

	@Autowired
	private AnswerPartRepository answerPartRepository;

	// get all records in database
	@RequestMapping(value = "exams", method = RequestMethod.GET)
	public ResponseEntity<List<Exam>> getExams() {
		List<Exam> list;
		try {
			list = this.examRepository.findAll();
			if (list.isEmpty()) {
				return new ResponseEntity<List<Exam>>(new ArrayList<Exam>(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Exam>>(list, HttpStatus.OK);
	}

	// get all records for test in database
	@RequestMapping(value = "examsfortest", method = RequestMethod.GET)
	public ResponseEntity<List<Exam>> getExamsForTest() {
		List<Exam> list;
		try {
			list = this.examRepository.findByisTest("true");
			if (list.isEmpty()) {
				return new ResponseEntity<List<Exam>>(new ArrayList<Exam>(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Exam>>(list, HttpStatus.OK);
	}

	// get all records for training in database
	@RequestMapping(value = "examsfortrain", method = RequestMethod.GET)
	public ResponseEntity<List<Exam>> getExamsForTraining() {
		List<Exam> list;
		try {
			list = this.examRepository.findByisTest("false");
			for (Exam exam : list) {
				List<ListeningPart> listens = this.listeningPartRepository.findByexamID(exam.getExamID());
				List<Part> reads = this.partRepository.findByexamID(exam.getExamID());
				if (listens.size() < 4 || reads.size() < 3) {
					list.remove(exam);
				}
			}
			if (list.isEmpty()) {
				return new ResponseEntity<List<Exam>>(new ArrayList<Exam>(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Exam>>(list, HttpStatus.OK);
	}

	// get exam by examID
	@RequestMapping(value = "exam/{examID}", method = RequestMethod.GET)
	public ResponseEntity<Exam> getExamByExamID(@PathVariable String examID) {
		Exam exam;
		try {
			exam = this.examRepository.findByexamID(examID);
			if (exam == null) {
				return new ResponseEntity<Exam>(new Exam(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Exam>(exam, HttpStatus.OK);
	}

	// add new record in database
	@RequestMapping(value = "exam", method = RequestMethod.POST)
	public ResponseEntity<Exam> addExam(@RequestBody Exam exam) {
		try {
			this.examRepository.insert(exam);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Exam>(exam, HttpStatus.OK);
	}

	// delete exam and related elements by examID
	@RequestMapping(value = "exam/{examID}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteExam(@PathVariable String examID) {
		try {
			Exam exam = this.examRepository.findByexamID(examID);
			if (exam != null) {

				// find answerPart by partID in Part and delete it
				for (Part part : this.partRepository.findByexamID(examID)) {
					this.storageService.deleteFile(part.getPDFsrc());
					this.answerPartRepository.deleteAll(this.answerPartRepository.findBypartID(part.getPartID()));
				}

				// delete Parts that contains the examID
				this.partRepository.deleteAll(this.partRepository.findByexamID(examID));

				// find answerPart by partID in ListeningPart and delete it
				for (ListeningPart ltPart : this.listeningPartRepository.findByexamID(examID)) {
					this.storageService.deleteFile(ltPart.getPDFsrc());
					this.storageService.deleteFile(ltPart.getMP3src());
					this.answerPartRepository.deleteAll(this.answerPartRepository.findBypartID(ltPart.getPartID()));
				}

				// delete ListeningParts that contains the examID
				this.listeningPartRepository.deleteAll(this.listeningPartRepository.findByexamID(examID));

				// delete exam
				this.examRepository.delete(exam);
				return new ResponseEntity<Boolean>(true, HttpStatus.OK);
			} else {
				return new ResponseEntity<Boolean>(false, HttpStatus.OK);
			}
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
}
