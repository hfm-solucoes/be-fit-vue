<template>
  <div class="container">
    <div class="header">
        <h2>Perfil de Cliente</h2>
    </div>
    <form  @submit.prevent="gravar()">
        <b-tabs>
            <b-tab title="Login">
                <div class="row">
                    <div class="col form-group">
                        <label for="email">E-mail</label>
                        <input type="email" class="form-control" id="email" name="email" v-model="login.email">
                    </div>
                    <div class="col form-group">
                        <label for="senha">Senha</label>
                        <input type="password" class="form-control" id="senha" v-model="login.senha">
                    </div>
                </div>
                <div class="row">
                    <div class="col form-group">
                        <label for="nivel">Nível de Acesso</label>
                        <b-form-select id="nivel" v-model="login.nivel">
                            <option value="0">Aluno</option>
                            <option value="1">Personal</option>
                            <option value="2">ADM</option>
                        </b-form-select>
                    </div>
                    <div class="col form-group">
                        <label for="senha2">Confirmação de Senha</label>
                        <input type="password" class="form-control" id="senha2" v-model="senha">
                    </div>
                </div>
                <div class="row">
                    <b-button type="submit">Cadastrar</b-button>
                    <router-link to="/"><b-button>Voltar</b-button></router-link>
                </div>
            </b-tab>
        </b-tabs>
    </form>
   </div>
</template>

<script>
import Login from './Login.js'
import LoginService from './LoginService.js'
export default {
    created(){
        this.service = new LoginService(this.$resource);
    },

    data () {
        return{
            senha: '',
            login: new Login(),
            id: this.$route.params.id,
        }
    },

    methods: {
        gravar () {
            if(this.senha === this.login.senha){
                this.service
                    .cadastrar(this.login)
                    .then(res => {
                        this.login = new Login()
                        this.$router.push({name: 'ClientePerfil', params: { idLogin: res.body }})
                    }, err => {
                        alert(err)
                    })
            } else {
                alert("As senhas não conhecidem")
            }
        }
    }
}
</script>
