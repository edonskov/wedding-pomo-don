package com.wedding.landing.repository;

import com.wedding.landing.entity.PeopleEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeddingRepository extends CrudRepository<PeopleEntity, Long> {
}
