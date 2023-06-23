export interface Entry { name: string; amount: number; category: string, isDebit: boolean }

export  interface EntryList { key: string, value: Entry[] }
