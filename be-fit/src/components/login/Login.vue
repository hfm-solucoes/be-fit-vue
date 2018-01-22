<template>
  <div class="container">
    <div class="header">
        <h2>Perfil de Cliente</h2>
    </div>
    <form  @submit.prevent="gravar()">
        <b-alert class="alerta" variant="danger" dismissible :show="alert.status" @dismissed="alert=false">
            {{alert.text}}
        </b-alert>
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
                    <b-button class="botao" type="submit">Cadastrar</b-button>
                    <router-link class="botao" to="/LoginHome"><b-button>Voltar</b-button></router-link>
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
        if(!this.$store.state.auth){
            this.$router.push({name: 'Home'})
        }
        this.service = new LoginService(this.$resource);
        if(this.id){
            this.service
                .busca(this.id)
                .then(login => {
                    this.login = login
                    this.senha = login.senha
                }, err => console.log(err))
        }
    },

    data () {
        return{
            senha: '',
            login: new Login(),
            id: this.$route.params.id,
            alert: {
                status: false,
                text: '',
                type: ''
            }
        }
    },

    methods: {
        gravar () {
            if(this.senha == this.login.senha){
                this.service
                    .cadastra(this.login)
                    .then(res => {
                        this.login = new Login()
                        this.alert.text = "Cadastro efetuado com sucesso"
                        this.alert.type = 'info'
                        this.alert.status = true
                        this.$router.push({name: 'LoginHome'})
                    }, err => {
                        this.alert.text = err
                        this.alert.type = 'warning'
                        this.alert.status = true
                    })
            } else {
                this.alert.text = "As senhas não conhecidem"
                this.alert.type = 'warning'
                this.alert.status = true
                
            }
        }
    }
}
</script>

<style>
.botao{
    margin-left: 12px;
}
</style>
