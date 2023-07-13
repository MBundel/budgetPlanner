package com.example.server.budgetbook;

import lombok.Getter;
import lombok.Setter;

public class EntryCashFlowDTO {
    @Setter @Getter private Integer id;
    @Setter @Getter private String name;
    @Setter @Getter private double amount;
    @Setter @Getter private  String category;
    @Setter @Getter private boolean isDebit;
    public EntryCashFlowDTO(String name, double amount, String category, boolean isDebit, Integer id) {
        this.name = name;
        this.amount = amount;
        this.category = category;
        this.isDebit = isDebit;
        this.id = id;
    }

}
