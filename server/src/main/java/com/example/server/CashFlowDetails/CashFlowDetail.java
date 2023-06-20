package com.example.server.CashFlowDetails;

public class CashFlowDetail {

    private long id;
    private String name;
    private double amount;


    public CashFlowDetail() {
    }

    public CashFlowDetail(String name, double amount) {
        this.name = name;
        this.amount = amount;
    }

    public String getName() {
        return name;
    }

    public double getAmount() {
        return amount;
    }

}
