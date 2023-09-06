import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { $axios, } from '@/utils/nux-instance'
// import { User } from '@/models'

interface UpdatePayload {
    id: number,
    ativo: boolean,
    category: string
}

@Module({ name: 'ativo', stateFactory: true, namespaced: true })
export default class Ativo extends VuexModule {

    @Action
    public async update(payload: UpdatePayload) {
        await $axios.$put(`/users/${payload.id}`, payload)

    }
}