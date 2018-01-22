import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ClienteHome from '@/components/cliente/HomeCliente.vue'
import ClienteCadastro from '@/components/cliente/Cliente.vue'
import ClienteMedidas from '@/components/medidas/Medidas.vue'
import LoginCadastro from '@/components/login/Login.vue'
import LoginHome from '@/components/login/HomeLogin.vue'

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
      path: '/ClienteAlterar/:id',
      name: 'ClienteAlterar',
      component: ClienteCadastro
    },
    {
      path: '/ClienteMedidas/:id',
      name: 'ClienteMedidas',
      component: ClienteMedidas
    },

    {
      path: '/LoginHome',
      name: 'LoginHome',
      component: LoginHome
    },
    {
      path: '/LoginCadastro',
      name: 'LoginCadastro',
      component: LoginCadastro
    },
    {
      path: '/LoginAlterar/:id',
      name: 'LoginAlterar',
      component: LoginCadastro
    }
  ]
})
