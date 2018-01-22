<template>
  <div>
    <b-nav class="menu" v-show="this.$store.state.auth">
      <b-nav-item active><router-link class="nav-link" to="/">Início</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-link" to="/LoginHome">Usuarios</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-link" to="/ClienteHome">Clientes</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-link" to="/">Financeiro</router-link></b-nav-item>
      <b-nav-item><v-btn @click="logout">Sair</v-btn></b-nav-item>
    </b-nav>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    logout(){
      this.$store.state.autenticado = {}
      this.$store.state.auth = false
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style>
  .menu{
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    margin-bottom: 20px;
  }
  .fade-leave-active {
    transition: opacity .1s
  }
  .fade-enter-active {
    transition: opacity .8s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
