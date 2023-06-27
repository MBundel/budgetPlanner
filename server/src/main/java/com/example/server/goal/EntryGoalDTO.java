package com.example.server.goal;

import java.time.Instant;
import java.util.Date;

public class EntryGoalDTO {
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

    public EntryGoalDTO(String name, String investType, String description, Date deadLine, Date startDate, String status, double cost, String svgURL, String imgUrl, Instant createdAt) {
        this.name = name;
        this.investType = investType;
        this.description = description;
        this.deadLine = deadLine;
        this.startDate = startDate;
        this.status = status;
        this.cost = cost;
        this.svgURL = svgURL;
        this.imgUrl = imgUrl;
        this.createdAt = createdAt;
    }

    public EntryGoalDTO(EntryGoal entryGoal) {
        this.name = entryGoal.getName();
        this.investType = entryGoal.getInvestType();
        this.description = entryGoal.getDescription();
        this.deadLine = entryGoal.getDeadLine();
        this.startDate = entryGoal.getStartDate();
        this.status = entryGoal.getStatus();
        this.cost = entryGoal.getCost();
        this.svgURL = entryGoal.getSvgURL();
        this.imgUrl = entryGoal.getImgUrl();
        this.createdAt = entryGoal.getCreatedAt();
    }

    // GETTER AND SETTER
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

    public Integer getId() {
        return this.id;
    }
}
