import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nux-instance'
import { User } from '@/models'

interface UpdatePayload {
    name: string
    username: string
    unitId: number
    password: string
    email: string
    ativo: boolean
    passwordConfirmation: string
}

interface CreatePayload {
    name: string
    unitId: number
    category: string
    password: string
    email: string
    passwordConfirmation: string
}

@Module({ name: 'users', stateFactory: true, namespaced: true })
export default class Users extends VuexModule {


    private user = {} as User
    private users = {} as User

    get $single() {
        return this.user
    }

    get $all() {
        return this.users
    }

    @Mutation
    UPDATE_USER(user: User) {
        this.user = user
    }

    @Mutation
    INDEX_UNIT(users: User) {
        this.users = users
    }

    @Action
    public async create(payload: CreatePayload) {
        console.log(payload)
        await $axios.$post('/users', payload)
    }


    @Action
    public async index() {
        const users = await $axios.$get('/users')
        this.context.commit('INDEX_UNIT', users)
    }


    @Action
    public async show() {

        if (!$cookies.get('token')) return

        try {
            const user = await $axios.$get('/user')
            this.context.commit('UPDATE_USER', user)
        } catch (error) {

        }
    }

    @Action
    public async update(payload: UpdatePayload) {
        await $axios.$put('/users', payload)

    }
}