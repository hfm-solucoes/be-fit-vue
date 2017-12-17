<template>
  <div>
    <b-nav>
      <b-nav-item active><router-link class="nav-link" to="/">Início</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-link" to="/ClienteHome">Clientes</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-link" to="/">Financeiro</router-link></b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>