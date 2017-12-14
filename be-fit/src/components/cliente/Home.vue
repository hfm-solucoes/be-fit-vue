<template>
    <div>
        <h2>Clientes 
            <small>
                <router-link class="nav-link" to="/ClienteCadastro">Adicionar Cliente</router-link>
            </small>
        </h2>
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Nascimento</th>
                    <th scope="col">Contato</th>
                    <th scope="col">Açoes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cliente of clientes">
                        <th scope="row">{{cliente.id}}</th>
                        <td>{{cliente.nome}}</td>
                        <td>{{cliente.sexo}}</td>
                        <td>{{cliente.dtNasc}}</td>
                        <td>{{cliente.telefone}}</td>
                        <td>
                            <router-link class="nav-link" to="/">Visualizar</router-link> /
                            <router-link class="nav-link" :to="{name: 'ClienteAlterar', params: {id: cliente.idUsuario}}">Alterar</router-link> /
                            <router-link class="nav-link" to="/">Excluir</router-link>
                        </td>
                    </tr>

                </tbody>
                </table>
        </div>
    </div>
  
</template>

<script>
    import ClienteService from './ClienteService.js'

    export default{
        data () {
            return{
                clientes: [],
            }
        },

        created(){
            this.service = new ClienteService(this.$resource);
            this.service
                .lista()
                .then(clientes => this.clientes = clientes, err => this.mensagem.erro = err.message);
        }
    }
</script>
