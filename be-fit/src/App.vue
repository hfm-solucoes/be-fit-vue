<template>
  <div>
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Início</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/ClienteHome">Clientes</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Financeiro</a>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .nav{
    display: flex;
    flex-direction: row;
  }

</style>
