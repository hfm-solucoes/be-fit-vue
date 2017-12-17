<template>
    <div>
        <div class="container">
            <div class="header">
                <h2>Clientes</h2>
                <p><router-link class="nav-link" to="/ClienteCadastro">Adicionar Cliente</router-link></p>
            </div>
           <b-table striped hover :items="clientes" :fields="fields">
                <template slot="acoes" scope="data">
                    <router-link class="nav-link" :to="{name: 'ClienteAlterar', params: {id: data.idUsuario}}">Alterar</router-link>
                
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
                        label: 'Ações'
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
                }, err => this.mensagem.erro = err.message);
        }
    }
</script>

<style>
    .header{
        display: flex;
        flex-direction: row;
    }
</style>