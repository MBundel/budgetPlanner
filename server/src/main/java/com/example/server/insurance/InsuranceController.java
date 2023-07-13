package com.example.server.insurance;

import com.example.server.budgetbook.EntryCashFlowConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class InsuranceController {
    private final InsuranceRepository insuranceRepository;


    // Controller
    @Autowired
    public InsuranceController(InsuranceRepository insuranceRepository) {
        this.insuranceRepository = insuranceRepository;
    }

    // GET
    @GetMapping("/api/insurance")
    public List<Insurance> findAllByOrderByCreatedAtDesc() {

        return insuranceRepository.findAllByOrderByCreatedAtDesc();
    }
    // POST

    @PostMapping("/api/insurance")
    public List<InsuranceDTO> write(@RequestBody InsuranceDTO insuranceDTO) {
        Insurance insurance = InsuranceConverter.fromDTO(insuranceDTO);
        insuranceRepository.save(insurance);
        return insuranceRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(InsuranceConverter::toDTO)
                .collect(Collectors.toList());
    }

    // PUT
    @PutMapping("/api/insurance/{id}")
    public List<InsuranceDTO> update(@PathVariable Integer id, @RequestBody InsuranceDTO insuranceDTO) {
        Insurance existingInsurance = insuranceRepository.findById(id)
                .orElseThrow();
        existingInsurance.setInsuranceName(insuranceDTO.getInsuranceName());
        existingInsurance.setCompanyName(insuranceDTO.getCompanyName());
        existingInsurance.setAmount(insuranceDTO.getAmount());
        existingInsurance.setPayPeriodPerYear(insuranceDTO.getPayPeriodPerYear());
        existingInsurance.setEndOfContract(insuranceDTO.getEndOfContract());
        existingInsurance.setPayDay(insuranceDTO.getPayDay());
        existingInsurance.setActive(insuranceDTO.isActive());
        existingInsurance.setNecessary(insuranceDTO.isNecessary());
        existingInsurance.setPercentageCover(insuranceDTO.getPercentageCover());

        insuranceRepository.save(existingInsurance);
        return insuranceRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(InsuranceConverter::toDTO)
                .collect(Collectors.toList());
    }

    // DELETE
    @DeleteMapping("/api/insurance/{id}")
    public List<InsuranceDTO> delete(@PathVariable("id") Integer id) {
        Insurance insurance = insuranceRepository.findById(id)
                .orElseThrow();
        insuranceRepository.delete(insurance);
        return insuranceRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(InsuranceConverter::toDTO)
                .collect(Collectors.toList());
    }


}
