package com.example.server.goal;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EntryGoalRepository extends JpaRepository<EntryGoal, Integer> {
    List<EntryGoal> findAllByOrderByCreatedAtDesc();
}
