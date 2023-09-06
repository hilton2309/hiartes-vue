import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

// import Mobile from '@/store/mobile'

import Auth from '@/store/auth'
import Users from '@/store/users'
import Units from '@/store/units'
import UserRegister from '@/store/users/register'
import Avatar from '@/store/users/avatar'
import Sectors from '@/store/sector'
import Ativo from '@/store/ativo'
import Copies from '@/store/copies/register'



/* eslint-disable import/no-mutable-exports */
// let mobile: Mobile
let auth: Auth
let users: Users
let units: Units
let userRegister: UserRegister
let avatar: Avatar
let sector: Sectors
let ativo: Ativo
let copies: Copies


const initializeStores = (store: Store<any>): void => {
    // mobile = getModule(Mobile, store)

    auth = getModule(Auth, store)
    users = getModule(Users, store)
    units = getModule(Units, store)
    userRegister = getModule(UserRegister, store)
    avatar = getModule(Avatar, store)
    sector = getModule(Sectors, store)
    ativo = getModule(Ativo, store)
    copies = getModule(Copies, store)

}

export { initializeStores, users, auth, userRegister, avatar, units, sector, ativo, copies }
