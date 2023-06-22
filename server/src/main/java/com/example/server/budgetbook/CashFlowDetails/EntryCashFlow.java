package com.example.server.budgetbook.CashFlowDetails;



import javax.persistence.GenerationType;
import javax.persistence.Table;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import org.springframework.data.annotation.Id;

import java.time.Instant;


@Table(name = "cash_flow_detail")
@Entity
public class EntryCashFlow {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue @javax.persistence.GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private double amount;
    private String category;
    private Instant createdAt;

    public EntryCashFlow() {
    }

    public EntryCashFlow(String name, double amount, String category) {
        this.name = name;
        this.amount = amount;
        this.category = category;
        this.createdAt = Instant.now();
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




    public Instant getCreatedAt(){
        return createdAt;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }
}
