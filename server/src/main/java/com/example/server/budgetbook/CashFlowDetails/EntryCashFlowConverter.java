package com.example.server.budgetbook.CashFlowDetails;

public class EntryCashFlowConverter {
    public static EntryCashFlowDTO toDTO(EntryCashFlow entry) {
        return new EntryCashFlowDTO(entry.getName(), entry.getAmount(), entry.getCategory(), entry.isDebit(), entry.getId());
    }

    public static EntryCashFlow fromDTO(EntryCashFlowDTO entryDTO) {
        return new EntryCashFlow(entryDTO.getName(), entryDTO.getAmount(), entryDTO.getCategory(), entryDTO.isDebit());
    }

}
