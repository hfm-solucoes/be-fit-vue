<template>
    <div>
        <div class="container">
            <b-alert class="alerta" :variant="alert.type" dismissible :show="alert.status" @dismissed="alert=false">
                    {{alert.text}}
            </b-alert>
            <div class="header">
                <h2>Usuários Cadastrados</h2>
                <p><router-link class="nav-link" :to="{name: 'LoginCadastro'}">Adicionar novo usuário</router-link></p>
            </div>
            <b-row>
                <b-col md="6" class="my-1">
                    <b-form-group horizontal label="Filtro" class="mb-0">
                        <b-input-group>
                            <b-form-input v-model="filter" placeholder="Type to Search" />
                            <b-input-group-button>
                            <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                            </b-input-group-button>
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-table striped hover :items="logins" :fields="fields"  :filter="filter">
                    <template slot="acoes" scope="data">
                        <div class="row">
                            <router-link class="nav-link" :to="{name: 'LoginAlterar', params: {id: data.item.idLogin}}">Alt</router-link>   
                            <button @click="apaga(data.item.idLogin, data.item)">del</button>           
                        </div>
                    </template>
            </b-table>
        </div>
    </div>
  
</template>

<script>
    import LoginService from './LoginService.js'

    export default{
        data () {
            return{
                filter: null,
                logins: [],
                alert: {
                    status: false,
                    text: '',
                    type: ''
                },
                alertText: '',
                fields: {
                    idLogin: {
                        label: 'Id',
                        sortable: true
                    },
                    email: {
                        label: 'E-mail',
                        sortable: true
                    },
                    nivel: {
                        label: 'Nível de Acesso',
                        sortable: true
                    },
                    acoes:{
                        label: 'Ações',
                        sortable: false
                    }
                },
            }
        },

        created(){
            if(!this.$store.state.auth){
                this.$router.push({name: 'Home'})
            }
            this.service = new LoginService(this.$resource);
            this.service
                .lista()
                .then(logins => {
                    this.logins = logins.map(({idLogin, email, nivel}) => ({idLogin, email, nivel}))
                }, err => alert(err));
        },

        methods: {
            apaga(id, login){
                var confirma = confirm("Deseja excluir o usuário do sistema?")
                if(confirma){
                    this.service
                        .apaga(id)
                        .then(res => {
                            this.alert.status = true;
                            this.alert.text = "O usuário foi apagado com sucesso";
                            this.alert.type = "info"
                            let indice = this.logins.indexOf(login);
                            this.logins.splice(indice, 1);
                        }, err => {
                            this.alert.status = true;
                            this.alert.text = "Não foi possivel apagar o usuário";
                            this.alert.type = "warning"
                        })
                }
            }
        }
    }
</script>

<style>
    .header{
        display: flex;
        flex-direction: row;
    }
</style>