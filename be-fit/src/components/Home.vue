<template>
  <div>
    <div class="form-login" @submit.prevent="autentica()">
      <b-alert class="alerta" variant="danger" dismissible :show="alert.status" @dismissed="alert=false">
        {{alert.text}}
      </b-alert>
      <b-form>
        <b-form-group label="Email:" label-for="email">
          <b-form-input id="email" type="email" v-model="login.email"></b-form-input>
        </b-form-group>

        <b-form-group label="Senha:" label-for="senha">
          <b-form-input id="senha" type="password" v-model="login.senha"></b-form-input>
        </b-form-group>

        <b-button type="submit">Entrar</b-button>
        
      </b-form>
    </div>
  </div>
</template>

<script>
import Login from './login/Login.js'
import LoginService from './login/LoginService.js'
export default {
  created(){
    this.service = new LoginService(this.$resource);
  },

  data () {
    return{
      login: new Login(),
      alert: {
        status: false,
        text: '',
        type: ''
      }
    }
  },

  methods: {
    autentica () {
      this.service.autentica(this.login).then(res => {
        if(res.status == '200'){
          this.$store.state.autenticado = res
          this.$store.state.auth = true
          this.$router.push({name: 'ClienteHome'})
        } else if(res.status == '203'){
          this.alert.status = true
          this.alert.type = 'warning'
          this.alert.text = res.body
        }
      })
    }
  }
}
</script>


<style>
.form-login{
  height: 300px;
  width: 400px;
  margin-left: 75vmin;
  margin-top: 25vmin;
}

</style>
