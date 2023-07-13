package com.example.server.insurance;

public class InsuranceConverter {

    public static InsuranceDTO toDTO(Insurance entry) {
        return new InsuranceDTO(
                entry.getInsuranceName(),
                entry.getCompanyName(),
                entry.getAmount(),
                entry.getPayPeriodPerYear(),
                entry.getEndOfContract(),
                entry.getPayDay(),
                entry.isActive(),
                entry.isNecessary(),
                entry.getPercentageCover(),
                entry.getId()

        );
    }
    public static Insurance fromDTO(InsuranceDTO entry){
        return new Insurance(
                entry.getInsuranceName(),
                entry.getCompanyName(),
                entry.getAmount(),
                entry.getPayPeriodPerYear(),
                entry.getEndOfContract(),
                entry.getPayDay(),
                entry.isActive(),
                entry.isNecessary(),
                entry.getPercentageCover()

        );
    }

}
