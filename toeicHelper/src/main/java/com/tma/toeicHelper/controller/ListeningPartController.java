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

import com.tma.toeicHelper.dao.ListeningPartRepository;
import com.tma.toeicHelper.model.ListeningPart;
import com.tma.toeicHelper.service.StorageService;

@RestController
@RequestMapping(value = "/api/", produces = { MediaType.APPLICATION_JSON_VALUE })
public class ListeningPartController {

	@Autowired
	private ListeningPartRepository listeningPartRepository;

	@Autowired
	private StorageService storageService;

	// get all records in database
	@RequestMapping(value = "listeningparts", method = RequestMethod.GET)
	public ResponseEntity<List<ListeningPart>> getListeningParts() {
		List<ListeningPart> list;
		try {
			list = this.listeningPartRepository.findAll();
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<ListeningPart>>(list, HttpStatus.OK);
	}

	// add new record in database
	@RequestMapping(value = "listeningpart", method = RequestMethod.POST)
	public ResponseEntity<ListeningPart> addListeningPart(@RequestBody ListeningPart ltPart) {
		try {
			ltPart.setPartID(randomCode());
			this.listeningPartRepository.insert(ltPart);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<ListeningPart>(ltPart, HttpStatus.OK);
	}

	// update record in database
	@RequestMapping(value = "listeningpart", method = RequestMethod.PUT)
	public ResponseEntity<ListeningPart> updateListeningPart(@RequestBody ListeningPart part) {
		try {
			ListeningPart ltPart = this.listeningPartRepository.findBypartID(part.getPartID());
			if (!part.getPDFsrc().equals(ltPart.getPDFsrc())) {
				this.storageService.deleteFile(ltPart.getPDFsrc());
			}
			if (!part.getMP3src().equals(ltPart.getMP3src())) {
				this.storageService.deleteFile(ltPart.getMP3src());
			}
			this.listeningPartRepository.save(part);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<ListeningPart>(part, HttpStatus.OK);
	}

	// find records by partNo
	@RequestMapping(value = "listeningpart/{partNo}", method = RequestMethod.GET)
	public ResponseEntity<List<ListeningPart>> getListeningPartBypartNo(@PathVariable int partNo) {
		List<ListeningPart> list;
		try {
			list = this.listeningPartRepository.findBypartNo(partNo);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<ListeningPart>>(list, HttpStatus.OK);
	}

	// get part for mini test
	@RequestMapping(value = "minitestlistenpart/{examID}/{partNo}", method = RequestMethod.GET)
	public ResponseEntity<ListeningPart> getListenPartforMiniTest(@PathVariable int partNo,
			@PathVariable String examID) {
		ListeningPart part;
		try {
			part = this.listeningPartRepository.findbypartNoAndexamID(partNo, examID);
			if (part == null) {
				return new ResponseEntity<ListeningPart>(new ListeningPart(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<ListeningPart>(part, HttpStatus.OK);
	}

	// find records by examID
	@RequestMapping(value = "listeningparts/{examID}", method = RequestMethod.GET)
	public ResponseEntity<List<ListeningPart>> getListeningPartByExamID(@PathVariable String examID) {
		List<ListeningPart> list;
		try {
			list = this.listeningPartRepository.findByexamID(examID);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<ListeningPart>>(list, HttpStatus.OK);
	}

	// delete record in database
	@RequestMapping(value = "listeningpart/{partID}", method = RequestMethod.DELETE)
	private ResponseEntity<Boolean> deleteListeningPart(@PathVariable String partID) {
		try {
			ListeningPart part = this.listeningPartRepository.findBypartID(partID);
			if (part != null) {
				this.listeningPartRepository.delete(part);
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
		for (int i = 0; i < 9; i++) {
			int t = rand.nextInt(36);
			randomCode += allCharArray[t];
		}
		for (ListeningPart ltpart : this.listeningPartRepository.findAll()) {
			if (ltpart.getPartID().equals(randomCode)) {
				return randomCode();
			}
		}
		return randomCode;
	}
}
