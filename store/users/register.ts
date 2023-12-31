import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nux-instance'
import { User } from '@/models'

interface CreatePayload {
    redirectUrl: string
    email: string
}

interface ShowPayload {
    key: string
}

interface UpdatePayload {
    key: string
    name: string
    password: string
    passwordConfirmation: string
}

@Module({ name: 'users/register', stateFactory: true, namespaced: true })

export default class UserRegister extends VuexModule {

    private user = {} as User

    get $user() {
        return this.user
    }

    @Mutation
    UPDATE_USER(user: User) {
        this.user = user
    }

    @Action
    public async create(payload: CreatePayload) {
        await $axios.$post('/users/register', payload)
    }

    @Action
    public async show({ key }: ShowPayload) {
        const user = await $axios.$get(`/users/register/${key}`)
        this.context.commit("UPDATE_USER", user)
    }

    @Action
    public async update(payload: UpdatePayload) {
        await $axios.$put('/users/register', payload)
    }

}