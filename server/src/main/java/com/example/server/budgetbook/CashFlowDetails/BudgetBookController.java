package com.example.server.budgetbook.CashFlowDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class BudgetBookController {
    private final EntryCashFlowRepository entryCashFlowRepository;

    @Autowired
    public BudgetBookController(EntryCashFlowRepository entryCashFlowRepository) {
        this.entryCashFlowRepository = entryCashFlowRepository;
    }

    @GetMapping("/api/budgetbook")
    public List<EntryCashFlowDTO> read() {
        List<EntryCashFlowDTO> response = new LinkedList<>();

        return entryCashFlowRepository
                .findAllByOrderByCreatedAtDesc()
                .stream()
                .map(EntryCashFlowConverter::toDTO)
                .collect(Collectors.toList());

    }

    @PostMapping("/api/budgetbook")
    public List<EntryCashFlowDTO> write(@RequestBody EntryCashFlowDTO entryDTO) {
        entryCashFlowRepository.save(EntryCashFlowConverter.fromDTO(entryDTO));
        return read();
    }



}
