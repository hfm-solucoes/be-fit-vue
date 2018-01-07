<template>
    <div>
        <div class="container">
            <div class="header">
                <h2>Clientes</h2>
                <p><router-link class="nav-link" :to="{name: 'ClienteLogin'}">Adicionar novo cliente</router-link></p>
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
                            <button @click="apaga(data.item)">del</button>           
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
            this.service = new ClienteService(this.$resource);
            this.service
                .lista()
                .then(clientes => {
                    this.clientes = clientes.map(({idUsuario, nome, sexo, dtNasc, telefone}) => ({idUsuario, nome, sexo, dtNasc, telefone}))
                }, err => alert(err));
        },

        methods: {
            apaga(cliente){
                this.service
                    .apaga(cliente)
                    .then(res => {
                        alert("O cliente foi apagado com sucesso");
                        let indice = this.clientes.indexOf(cliente);
                        this.clientes.splice(indice, 1);
                    }, err => {
                        console.log(err)
                        alert("Não foi possivel apagar o cliente");
                    })
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