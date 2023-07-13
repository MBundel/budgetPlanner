package com.example.server.insurance;

import lombok.Getter;
import lombok.Setter;
import java.util.Date;

public class InsuranceDTO {

    @Getter final   private Integer id;
    @Getter @Setter private String insuranceName;
    @Getter @Setter private String companyName;
    @Getter @Setter private double amount;
    @Getter @Setter private byte payPeriodPerYear;
    @Getter @Setter private Date endOfContract;
    @Getter @Setter private Date payDay;
    @Getter @Setter private boolean active;
    @Getter @Setter private boolean necessary;
    @Getter @Setter private byte percentageCover;

    public InsuranceDTO( String insuranceName, String companyName, double amount, byte payPeriodPerYear, Date endOfContract, Date payDay, boolean active, boolean necessary, byte percentageCover, Integer id) {
        this.insuranceName = insuranceName;
        this.companyName = companyName;
        this.amount = amount;
        this.payPeriodPerYear = payPeriodPerYear;
        this.endOfContract = endOfContract;
        this.payDay = payDay;
        this.active = active;
        this.necessary = necessary;
        this.percentageCover = percentageCover;
        this.id = id;
    }
}
