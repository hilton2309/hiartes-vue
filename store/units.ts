import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nux-instance'
import { Unit } from '@/models'

interface CreatePayload {
    nome: string
    uf: string
    cidade: string
}
interface ShowPayload {
    id: number
}

// interface UpdatePayload {
//     name: string
//     uf: string
//     cidade: string
// }



@Module({ name: 'units', stateFactory: true, namespaced: true })
export default class Units extends VuexModule {


    private unit = {} as Unit
    private units = {} as Unit

    get $single() {
        return this.unit
    }

    get $all() {
        return this.units
    }

    @Mutation
    UPDATE_UNIT(unit: Unit) {
        this.unit = unit
    }

    @Mutation
    INDEX_UNIT(units: Unit) {
        this.units = units
    }

    @Action
    public async index() {
        try {
            const units = await $axios.$get('/units')
            this.context.commit('INDEX_UNIT', units)
        } catch (error) {

        }
    }

    @Action
    public async create(payload: CreatePayload) {
        await $axios.$post('/unit', payload)
    }

    @Action
    public async show({ id }: ShowPayload) {

        try {
            const unit = await $axios.$get(`/unit/${id}`)
            this.context.commit('UPDATE_UNIT', unit)
        } catch (error) {

        }
    }

    // @Action
    // public async update(payload: UpdatePayload) {
    //     await $axios.$put('/unit', payload)

    // }
}