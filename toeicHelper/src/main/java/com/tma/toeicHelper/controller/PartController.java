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

import com.tma.toeicHelper.dao.PartRepository;
import com.tma.toeicHelper.model.Part;
import com.tma.toeicHelper.service.StorageService;

@RestController
@RequestMapping(value = "/api/", produces = { MediaType.APPLICATION_JSON_VALUE })
public class PartController {

	@Autowired
	private PartRepository partRepository;

	@Autowired
	private StorageService storageService;

	// get all records in database
	@RequestMapping(value = "parts", method = RequestMethod.GET)
	public ResponseEntity<List<Part>> getParts() {
		List<Part> list;
		try {
			list = this.partRepository.findAll();
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Part>>(list, HttpStatus.OK);
	}

	// add new record in database
	@RequestMapping(value = "part", method = RequestMethod.POST)
	public ResponseEntity<Part> addPart(@RequestBody Part part) {
		try {
			part.setPartID(randomCode());
			this.partRepository.insert(part);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Part>(part, HttpStatus.OK);
	}

	// update record in database
	@RequestMapping(value = "part", method = RequestMethod.PUT)
	public ResponseEntity<Part> updatePart(@RequestBody Part part) {
		try {
			Part p = this.partRepository.findBypartID(part.getPartID());
			if (!part.getPDFsrc().equals(p.getPDFsrc())) {
				this.storageService.deleteFile(p.getPDFsrc());
			}
			this.partRepository.save(part);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Part>(part, HttpStatus.OK);
	}

	// find records by partNo
	@RequestMapping(value = "part/{partNo}", method = RequestMethod.GET)
	public ResponseEntity<List<Part>> getPartBypartNo(@PathVariable int partNo) {
		List<Part> list;
		try {
			list = this.partRepository.findBypartNo(partNo);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Part>>(list, HttpStatus.OK);
	}

	// get part for mini test
	@RequestMapping(value = "minitestpart/{examID}/{partNo}", method = RequestMethod.GET)
	public ResponseEntity<Part> getPartforMiniTest(@PathVariable int partNo, @PathVariable String examID) {
		Part part;
		try {
			part = this.partRepository.findbypartNoAndexamID(partNo, examID);
			if (part == null) {
				return new ResponseEntity<Part>(new Part(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Part>(part, HttpStatus.OK);
	}

	// find records by examID
	@RequestMapping(value = "parts/{examID}", method = RequestMethod.GET)
	public ResponseEntity<List<Part>> getPartByexamID(@PathVariable String examID) {
		List<Part> list;
		try {
			list = this.partRepository.findByexamID(examID);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Part>>(list, HttpStatus.OK);
	}

	// delete record in database
	@RequestMapping(value = "part/{partID}", method = RequestMethod.DELETE)
	private ResponseEntity<Boolean> deletePart(@PathVariable String partID) {
		try {
			Part part = this.partRepository.findBypartID(partID);
			if (part != null) {
				this.partRepository.delete(part);
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
		for (int i = 0; i < 12; i++) {
			int t = rand.nextInt(36);
			randomCode += allCharArray[t];
		}
		for (Part part : this.partRepository.findAll()) {
			if (part.getPartID().equals(randomCode)) {
				return randomCode();
			}
		}
		return randomCode;
	}
}
