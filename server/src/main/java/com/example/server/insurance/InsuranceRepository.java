package com.example.server.insurance;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InsuranceRepository  extends JpaRepository<Insurance, Integer> {
    List<Insurance> findAllByOrderByCreatedAtDesc();

}
