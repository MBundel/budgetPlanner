package com.example.server.budgetbook;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;



public interface EntryCashFlowRepository extends JpaRepository<EntryCashFlow, Integer> {
    List<EntryCashFlow> findAllByOrderByCreatedAtDesc();


}
