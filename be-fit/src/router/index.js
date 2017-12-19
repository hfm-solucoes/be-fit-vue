import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ClienteHome from '@/components/cliente/Home'
import ClientePerfil from '@/components/cliente/Perfil'
import ClienteMedidas from '@/components/cliente/Medidas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ClienteHome',
      name: 'ClienteHome',
      component: ClienteHome
    },
    {
      path: '/ClientePerfil',
      name: 'ClientePerfil',
      component: ClientePerfil
    },
    {
      path: '/ClientePerfil/:id',
      name: 'ClienteAlterar',
      component: ClientePerfil
    },
    {
      path: '/ClienteMedidas/:id',
      name: 'ClienteMedidas',
      component: ClienteMedidas
    }
  ]
})
