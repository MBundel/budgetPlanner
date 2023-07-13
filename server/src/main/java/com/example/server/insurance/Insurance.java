package com.example.server.insurance;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import javax.persistence.GenerationType;
import java.time.Instant;
import java.util.Date;


@Table(name = "insurance")
@Entity
public class Insurance {
    @jakarta.persistence.Id
    @Id
    @Getter
    @GeneratedValue @javax.persistence.GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
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



    public Insurance(String insuranceName, String companyName, double amount, byte payPeriodPerYear, Date endOfContract, Date payDay, boolean active, boolean necessary, byte percentageCover) {

        this.insuranceName = insuranceName;
        this.companyName = companyName;
        this.amount = amount;
        this.payPeriodPerYear = payPeriodPerYear;
        this.endOfContract = endOfContract;
        this.payDay = payDay;
        this.isActive = active;
        this.isNecessary = necessary;
        this.percentageCover = percentageCover;
        this.createdAt = Instant.now();

    }

}
