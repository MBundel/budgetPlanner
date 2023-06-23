package com.example.server.budgetbook.CashFlowDetails;

public class EntryCashFlowDTO {

    private String name;
    private double amount;
    private  String category;


    private boolean isDebit;

    public EntryCashFlowDTO(String name, double amount, String category, boolean isDebit) {
        this.name = name;
        this.amount = amount;
        this.category = category;
        this.isDebit = isDebit;
    }
public  EntryCashFlowDTO(EntryCashFlow entryCashFlow){
        this.name =entryCashFlow.getName();
        this.amount= entryCashFlow.getAmount();
        this.category = entryCashFlow.getCategory();
        this.isDebit = entryCashFlow.isDebit();
}
    // GETTER AND SETTER
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
    public boolean isDebit() {
        return isDebit;
    }

    public void setDebit(boolean debit) {
        isDebit = debit;
    }
}
