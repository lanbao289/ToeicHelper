package com.tma.toeicHelper.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tma.toeicHelper.model.TrainingResult;

public interface TrainingResultRepository extends MongoRepository<TrainingResult, Long>{
	TrainingResult findBytrainResultID(String trainResultID);
	List<TrainingResult> findByusername(String username);
}
