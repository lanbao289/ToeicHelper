package com.tma.toeicHelper.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tma.toeicHelper.service.StorageService;

@RestController
@RequestMapping(value = "/api/", produces = { MediaType.APPLICATION_JSON_VALUE })
public class UploadController {
	@Autowired
	StorageService storageService;

	@RequestMapping(value = "upload", method = RequestMethod.POST)
	public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
		String message = "";
		try {

			String filename = "";
			filename = renameFile(file.getOriginalFilename());

			storageService.store(file, filename);

			// message = "You successfully uploaded " + file.getOriginalFilename() + "!";
			return new ResponseEntity<String>(filename, HttpStatus.OK);
		} catch (Exception e) {
			message = "FAIL to upload " + file.getOriginalFilename() + "!";
			return new ResponseEntity<String>(message, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@RequestMapping(value = "files/{filename:.+}", method = RequestMethod.GET)
	public ResponseEntity<Resource> getFile(@PathVariable String filename, HttpServletRequest request) {
		Resource file = storageService.loadFile(filename);
		String contentType = null;
		try {
			contentType = request.getServletContext().getMimeType(file.getFile().getAbsolutePath());
		} catch (IOException ex) {
			ex.getMessage();
		}

		// Fallback to the default content type if type could not be determined
		if (contentType == null) {
			contentType = "application/octet-stream";
		}
		return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType))
				.header(HttpHeaders.CONTENT_DISPOSITION).body(file);
	}

	@RequestMapping(value = "files/{filename:.+}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteFile(@PathVariable String filename) {
		try {
			if (!this.storageService.deleteFile(filename)) {
				return new ResponseEntity<Boolean>(false, HttpStatus.OK);
			}
		} catch (IOException ex) {
			ex.getMessage();
			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
		}
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	/*
	 * @RequestMapping(value="getpdf/{filename:.+}", method=RequestMethod.GET)
	 * public ResponseEntity<byte[]> getPDF(@PathVariable String filename) throws
	 * IOException {
	 * 
	 * Path rootLocation = Paths.get("upload-dir"); Path file =
	 * rootLocation.resolve(filename); byte[] data = Files.readAllBytes(file);
	 * return new ResponseEntity<byte[]>(data, HttpStatus.OK); }
	 */

	private static String renameFile(String fileName) {
		return FilenameUtils.getBaseName(fileName) + "-" + System.nanoTime() + "."
				+ FilenameUtils.getExtension(fileName);
	}

}
