package com.example.server.budgetbook;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public interface EntryCashFlowRepository extends JpaRepository<EntryCashFlow, Integer> {
    List<EntryCashFlow> findAllByOrderByCreatedAtDesc();

    default Map<String, List<EntryCashFlow>> getEntriesByCategory() {
        List<EntryCashFlow> allEntries = findAllByOrderByCreatedAtDesc();
        Map<String, List<EntryCashFlow>> entriesByCategory = new HashMap<>();

        for (EntryCashFlow entry : allEntries) {
            String category = entry.getCategory();
            entriesByCategory.computeIfAbsent(category, k -> new ArrayList<>()).add(entry);
        }

        return entriesByCategory;
    }
}
