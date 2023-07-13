package com.example.server.insurance;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import javax.persistence.GenerationType;
import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;


@Table(name = "insurance")
public class Insurance {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue
    @javax.persistence.GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Getter
    @Setter
    private String insuranceName;
    @Getter
    @Setter
    private String companyName;
    @Getter
    @Setter
    private double amount;
    @Getter
    @Setter
    private byte payPeriodPerYear;
    @Getter
    @Setter
    private Date endOfContract;
    @Getter
    @Setter
    private Date payDay;
    @Getter
    @Setter
    private boolean isActive;
    @Getter
    @Setter
    private boolean isNecessary;
    @Getter
    @Setter
    private byte percentageCover;
    @Getter
    private Instant createdAt;


    public Insurance() {
    }

    public Insurance(int id, String insuranceName, double amount) {
        this.id = id;
        this.insuranceName = insuranceName;
        this.companyName = "companyName";
        this.amount = amount;
        this.payPeriodPerYear = 12;
        this.endOfContract = java.sql.Date.valueOf(LocalDate.now());
        this.isActive = false;
        this.isNecessary = false;
        this.percentageCover = 0;
        this.payDay = java.sql.Date.valueOf(LocalDate.now());
        this.createdAt = Instant.now();
    }
}
