import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '@/utils/nux-instance'
import { Sector } from '@/models'

interface CreatePayload {
    sector: string
}

interface UpdatePayload {
    id: number
    sector: string
}

// interface DestroyPayload {
//     id: number
// }


@Module({ name: 'sector', stateFactory: true, namespaced: true })
export default class Sectors extends VuexModule {

    private sectors = {} as Sector
    private sector = {} as Sector

    get $all() {
        return this.sectors
    }

    get $single() {
        return this.sector
    }

    @Mutation
    INDEX_SECTOR(sectors: Sector) {
        this.sectors = sectors
    }

    @Mutation
    UPDATE_SECTOR(sector: Sector) {
        this.sector = sector
    }

    @Action
    public async index() {
        try {
            const sectors = await $axios.$get('/sector')
            this.context.commit('INDEX_SECTOR', sectors)
        } catch (error) {

        }
    }

    @Action
    public async create(payload: CreatePayload) {
        await $axios.$post('/sector', payload)
    }

    @Action
    public async update(payload: UpdatePayload) {

        try {
            const sector = await $axios.$get(`/sector/${payload.id}`)
            this.context.commit('UPDATE_USER', sector)
        } catch (error) {

        }
    }

    // @Action
    // public async destroy({ id }: DestroyPayload) {
    //     await $axios.$delete(`/sector/${id}`)
    // }


    // @Action
    // public async update(payload: UpdatePayload) {
    //     await $axios.$put('/unit', payload)

    // }
}