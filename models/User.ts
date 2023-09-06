export interface User {
    id: number
    name: string
    username: string
    unitId: number
    category: string
    email: string
    createdAt: string
    updatedAt: string
    postsCount: number
    ativo: boolean
    units: {
        nome: string
        cidade: string
    }
}