package com.example.server.budgetbook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public List<EntryCashFlow> findAllByOrderByCreatedAtDesc() {

        return entryCashFlowRepository.findAllByOrderByCreatedAtDesc();
    }

    @PostMapping("/api/budgetbook")
    public List<EntryCashFlowDTO> write(@RequestBody EntryCashFlowDTO entryDTO) {
        EntryCashFlow entry = EntryCashFlowConverter.fromDTO(entryDTO);
        entryCashFlowRepository.save(entry);
        return entryCashFlowRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(EntryCashFlowConverter::toDTO)
                .collect(Collectors.toList());
    }
    @PutMapping("/api/budgetbook/{id}")
    public List<EntryCashFlowDTO> updateEntry(@PathVariable("id") Integer id, @RequestBody EntryCashFlowDTO entryDTO) {
        EntryCashFlow existingEntry = entryCashFlowRepository.findById(id)
                .orElseThrow();
        existingEntry.setName(entryDTO.getName());
        existingEntry.setAmount(entryDTO.getAmount());
        existingEntry.setCategory(entryDTO.getCategory());
        existingEntry.setDebit(entryDTO.isDebit());


        entryCashFlowRepository.save(existingEntry);

        return entryCashFlowRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(EntryCashFlowConverter::toDTO)
                .collect(Collectors.toList());
    }
    @DeleteMapping("/api/budgetbook/{id}")
    public List<EntryCashFlowDTO> deleteEntry(@PathVariable("id") Integer id) {
        EntryCashFlow existingEntry = entryCashFlowRepository.findById(id)
                .orElseThrow();

        entryCashFlowRepository.delete(existingEntry);

        return entryCashFlowRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(EntryCashFlowConverter::toDTO)
                .collect(Collectors.toList());
    }








}
