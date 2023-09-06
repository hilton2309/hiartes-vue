export interface Copy {
    id: number
    sectorId: number
    amount: number
    type: string
    comment: string
    created_at: Date
    updated_at: Date
    sectors: {
        sector: string
        id: number
    }
}
