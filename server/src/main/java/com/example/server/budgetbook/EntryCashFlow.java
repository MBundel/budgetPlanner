package com.example.server.budgetbook;



import javax.persistence.GenerationType;
import javax.persistence.Table;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.time.Instant;


@Table(name = "entry_cash_flow")
@Entity
public class EntryCashFlow {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue @javax.persistence.GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Getter
    @Setter
    private String name;
    @Getter
    @Setter
    private double amount;
    @Getter
    @Setter
    private String category;
    @Getter
    @Setter
    private boolean isDebit;
    @Getter
    private Instant createdAt;

    public EntryCashFlow() {
    }

    public EntryCashFlow(String name, double amount, String category, boolean isDebit) {
        this.name = name;
        this.amount = amount;
        this.category = category;
        this.createdAt = Instant.now();
        this.isDebit = isDebit;

    }












}
