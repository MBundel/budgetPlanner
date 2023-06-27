package com.example.server.goal;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class GoalController {
    private final EntryGoalRepository entryGoalRepository;

    @Autowired
    public GoalController(EntryGoalRepository entryGoalRepository){
        this.entryGoalRepository = entryGoalRepository;
    }
    @GetMapping("/api/goal")
    public List<EntryGoal> findAllByOrderByCreatedAtDesc() {


        return entryGoalRepository.findAllByOrderByCreatedAtDesc();
    }
    @PostMapping("/api/goal")
    public List<EntryGoalDTO> write(@RequestBody EntryGoalDTO entryDTO) {
        EntryGoal entry = EntryGoalConverter.fromDTO(entryDTO);
        entryGoalRepository.save(entry);
        return entryGoalRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(EntryGoalConverter::toDTO)
                .collect(Collectors.toList());
    }

    @PutMapping("/api/goal/{id}")
    public List<EntryGoalDTO> updateEntry(@PathVariable("id") Integer id, @RequestBody EntryGoalDTO entryDTO) {
        EntryGoal existingEntry = entryGoalRepository.findById(id)
                .orElseThrow();
        existingEntry.setName(entryDTO.getName());
        existingEntry.setInvestType(entryDTO.getInvestType());
        existingEntry.setDescription(entryDTO.getDescription());
        existingEntry.setDeadLine(entryDTO.getDeadLine());
        existingEntry.setStartDate(entryDTO.getStartDate());
        existingEntry.setStatus(entryDTO.getStatus());
        existingEntry.setCost(entryDTO.getCost());
        existingEntry.setSvgURL(entryDTO.getSvgURL());
        existingEntry.setImgUrl(entryDTO.getImgUrl());
        existingEntry.setCreatedAt(entryDTO.getCreatedAt());


        entryGoalRepository.save(existingEntry);

        return entryGoalRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(EntryGoalConverter::toDTO)
                .collect(Collectors.toList());
    }

    @DeleteMapping("/api/goal/{id}")
    public List<EntryGoalDTO> deleteEntry(@PathVariable("id") Integer id) {
        EntryGoal existingEntry = entryGoalRepository.findById(id)
                .orElseThrow();

        entryGoalRepository.delete(existingEntry);

        return entryGoalRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(EntryGoalConverter::toDTO)
                .collect(Collectors.toList());
    }




}
