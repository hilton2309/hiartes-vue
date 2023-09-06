import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nux-instance'
import { Copy } from '@/models'

interface CreatePayload {
    sectorId: number
    amount: number
    type: string
    comment: string
}

@Module({ name: 'copies/register', stateFactory: true, namespaced: true })
export default class Copies extends VuexModule {


    private copy = {} as Copy
    private copies = {} as Copy

    get $single() {
        return this.copy
    }

    get $all() {
        return this.copies
    }

    @Mutation
    UPDATE_UNIT(copy: Copy) {
        this.copy = copy
    }

    @Mutation
    INDEX_UNIT(copies: Copy) {
        this.copies = copies
    }

    @Action
    public async index() {
        try {
            const units = await $axios.$get('/copy')
            this.context.commit('INDEX_UNIT', units)
        } catch (error) {

        }
    }

    @Action
    public async create(payload: CreatePayload) {
        console.log('passo 1')
        await $axios.$post('/copy', payload)
        console.log('passo 2')
    }

    // @Action
    // public async show({ id }: ShowPayload) {

    //     try {
    //         const unit = await $axios.$get(`/unit/${id}`)
    //         this.context.commit('UPDATE_UNIT', unit)
    //     } catch (error) {

    //     }
    // }

    // @Action
    // public async update(payload: UpdatePayload) {
    //     await $axios.$put('/unit', payload)

    // }
}