<template>
    <div>
        <div class="container">
            <b-alert class="alerta" :variant="alert.type" dismissible :show="alert.status" @dismissed="alert=false">
                {{alert.text}}
            </b-alert>
            <div class="header">
                <h2>Clientes</h2>
                <p><router-link class="nav-link" :to="{name: 'ClienteCadastro'}">Adicionar novo cliente</router-link></p>
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
            <b-table striped hover :items="clientes" :fields="fields"  :filter="filter">
                    <template slot="acoes" scope="data">
                        <div class="row">
                            <router-link class="nav-link" :to="{name: 'ClienteAlterar', params: {id: data.item.idUsuario}}">Alt</router-link>
                            <router-link class="nav-link" :to="{name: 'ClienteMedidas', params: {id: data.item.idUsuario, nome: data.item.nome}}">Med</router-link>    
                            <button @click="apaga(data.item.idUsuario, data.item)">del</button>           
                        </div>
                    </template>
            </b-table>
        </div>
    </div>
  
</template>

<script>
    import ClienteService from './ClienteService.js'

    export default{
        data () {
            return{
                filter: null,
                clientes: [],
                alert: {
                    status: false,
                    text: '',
                    type: ''
                },
                fields: {
                    idUsuario: {
                        label: 'Id',
                        sortable: true
                    },
                    nome: {
                        label: 'Nome',
                        sortable: true
                    },
                    sexo: {
                        label: 'Sexo',
                        sortable: true
                    },
                    dtNasc: {
                        label: 'Data de Nascimento',
                        sortable: true
                    },
                    telefone:{
                        label: 'Contato',
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
            this.service = new ClienteService(this.$resource);
            this.service
                .lista()
                .then(clientes => {
                    this.clientes = clientes.map(({idUsuario, nome, sexo, dtNasc, telefone}) => ({idUsuario, nome, sexo, dtNasc, telefone}))
                }, err => alert(err));
        },

        methods: {
            apaga(id, cliente){
                var confirma = confirm("Deseja excluir o cliente do sistema?")
                if(confirma){
                    this.service
                        .apaga(id)
                        .then(res => {
                            this.alert.status = true;
                            this.alert.text = "O cliente foi apagado com sucesso";
                            this.alert.type = "info"
                            let indice = this.clientes.indexOf(cliente);
                            this.clientes.splice(indice, 1);
                        }, err => {
                            this.alert.status = true;
                            this.alert.text = "Não foi possivel apagar o cliente";
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