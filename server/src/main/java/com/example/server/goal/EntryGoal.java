package com.example.server.goal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import org.springframework.data.annotation.Id;

import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.criteria.CriteriaBuilder;
import java.time.Instant;
import java.util.Date;

@Table(name = "entry_goal")
@Entity
public class EntryGoal {

    @jakarta.persistence.Id
    @Id
    @GeneratedValue
    @javax.persistence.GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String investType;
    private String description;
    private Date deadLine;
    private Date startDate;
    private String status;
    private double cost;
    private String svgURL;
    private String imgUrl;
    private Instant createdAt;

    public EntryGoal(){}

    public EntryGoal(Integer id, String name, String investType, String description, Date deadLine, Date startDate, String status, double cost, String svgURL, String imgUrl ) {
        this.id = id;
        this.name = name;
        this.investType = investType;
        this.description = description;
        this.deadLine = deadLine;
        this.startDate = startDate;
        this.status = status;
        this.cost = cost;
        this.svgURL = svgURL;
        this.imgUrl = imgUrl;
        this.createdAt = Instant.now();
    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInvestType() {
        return investType;
    }

    public void setInvestType(String investType) {
        this.investType = investType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDeadLine() {
        return deadLine;
    }

    public void setDeadLine(Date deadLine) {
        this.deadLine = deadLine;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getSvgURL() {
        return svgURL;
    }

    public void setSvgURL(String svgURL) {
        this.svgURL = svgURL;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
