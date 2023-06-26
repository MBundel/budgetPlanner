package com.example.server.budgetbook.CashFlowDetails;



import javax.persistence.GenerationType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import org.springframework.data.annotation.Id;

import java.time.Instant;


@Table(name = "entry_cash_flow")
@Entity
public class EntryCashFlow {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue @javax.persistence.GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private double amount;
    private String category;


    private boolean isDebit;
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



    public String getName() {
        return name;
    }

    public double getAmount() {
        return amount;
    }

    public String getCategory() {
        return category;
    }


    public boolean isDebit() {
        return isDebit;
    }


    public Instant getCreatedAt(){
        return createdAt;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setDebit(boolean debit) {
        isDebit = debit;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
