import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ClienteHome from '@/components/cliente/Home'
import ClienteCadastro from '@/components/cliente/Cadastro'

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
      path: '/ClienteCadastro',
      name: 'ClienteCadastro',
      component: ClienteCadastro
    },
    {
      path: '/ClienteCadastro/:id',
      name: 'ClienteAlterar',
      component: ClienteCadastro
    }
  ]
})
