import { Plugin } from '@nuxt/types'
import { initializeAxios, initializeCookies } from '@/utils/nux-instance'

const accessor: Plugin = ({ app }) => {
  initializeAxios(app.$axios)
  initializeCookies(app.$cookies)
}

export default accessor