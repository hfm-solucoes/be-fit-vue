import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ClienteHome from '@/components/cliente/HomeCliente.vue'
import ClienteLogin from '@/components/login/Login.vue'
import ClientePerfil from '@/components/cliente/Cliente.vue'
import ClienteMedidas from '@/components/medidas/Medidas.vue'

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
      path: '/ClienteLogin',
      name: 'ClienteLogin',
      component: ClienteLogin
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
