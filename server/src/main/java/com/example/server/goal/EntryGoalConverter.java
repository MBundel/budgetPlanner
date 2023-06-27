package com.example.server.goal;


import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

public class EntryGoalConverter {
    public static EntryGoalDTO toDTO(EntryGoal entry) {
        return new EntryGoalDTO(
                entry.getName(),
                entry.getInvestType(),
                entry.getDescription(),
                entry.getDeadLine(),
                entry.getStartDate(),
                entry.getStatus(),
                entry.getCost(),
                entry.getSvgURL(),
                entry.getImgUrl(),
                entry.getCreatedAt()
        );
    }

    public static EntryGoal fromDTO(EntryGoalDTO entryDTO) {
        return new EntryGoal(
                entryDTO.getId(),
                entryDTO.getName(),
                entryDTO.getInvestType(),
                entryDTO.getDescription(),
                entryDTO.getDeadLine(),
                entryDTO.getStartDate(),
                entryDTO.getStatus(),
                entryDTO.getCost(),
                entryDTO.getSvgURL(),
                entryDTO.getImgUrl()

        );
    }

}
