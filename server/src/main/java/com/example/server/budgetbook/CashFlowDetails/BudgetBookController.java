package com.example.server.budgetbook.CashFlowDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class BudgetBookController {
    private final EntryCashFlowRepository entryCashFlowRepository;

    @Autowired
    public BudgetBookController(EntryCashFlowRepository entryCashFlowRepository) {
        this.entryCashFlowRepository = entryCashFlowRepository;
    }


    @GetMapping("/api/budgetbook/isDebit")
    public Map<String, List<EntryCashFlow>> getDebitEntriesByCategory() {
        List<EntryCashFlow> entries = entryCashFlowRepository.findAllByOrderByCreatedAtDesc();

        return entries.stream()
                .filter(EntryCashFlow::isDebit)
                .collect(Collectors.groupingBy(EntryCashFlow::getCategory));
    }

    @GetMapping("/api/budgetbook/isNotDebit")
    public Map<String, List<EntryCashFlow>> getNonDebitEntriesByCategory() {
        List<EntryCashFlow> entries = entryCashFlowRepository.findAllByOrderByCreatedAtDesc();

        return entries.stream()
                .filter(entry -> !entry.isDebit())
                .collect(Collectors.groupingBy(EntryCashFlow::getCategory));
    }

    @PostMapping("/api/budgetbook")
    public List<EntryCashFlowDTO> write(@RequestBody EntryCashFlowDTO entryDTO) {
        EntryCashFlow entry = EntryCashFlowConverter.fromDTO(entryDTO);
        entryCashFlowRepository.save(entry);
        return entryCashFlowRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(EntryCashFlowConverter::toDTO)
                .collect(Collectors.toList());
    }





}
