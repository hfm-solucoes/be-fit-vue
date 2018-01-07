<template>
  <div class="container">
    <div class="header">
        <h2>Perfil de Cliente</h2>
        <p><router-link class="nav-link" to="/ClienteHome">Voltar</router-link></p>
    </div>
    <form  @submit.prevent="gravar()">

        <b-tabs>
            <b-tab title="Funcionais">
                <div class="row">
                    <div class="col form-group">
                        <label for="nome">Nome</label>
                        <input type="text" class="form-control" id="nome" name="nome" v-model="cliente.nome">
                    </div>
                    <div class="col form-group">
                        <label for="dtNasc">Data de Nascimento</label>
                        <input type="date" class="form-control" id="dtNasc" v-model="cliente.dtNasc">
                    </div>
                    <div class="col form-group">
                        <label for="cpf">CPF</label>
                        <input type="text" class="form-control" id="cpf" v-model="cliente.cpf">
                    </div>
                </div>
                <div class="row">
                    <div class="col form-group">
                        <label for="rg">RG</label>
                        <input type="text" class="form-control" id="rg" v-model="cliente.rg">
                    </div>
                    <div class="col form-group">
                        <label for="sexo">Sexo</label>
                        <select id="sexo" class="form-control" v-model="cliente.sexo"> 
                            <option value="m">Masculino</option>
                            <option value="f">Feminino</option>
                        </select>
                    </div>
                    <div class="col form-group">
                        <label for="telefone">Telefone</label>
                        <input type="text" class="form-control" id="telefone" v-model="cliente.telefone">
                    </div>
                </div>
                
            </b-tab>
            <b-tab title="Endereço" >
                <div class="row">
                    <div class="col form-group">
                        <label for="endereco">Endereço</label>
                        <input type="text" class="form-control" id="endereco" v-model="cliente.endereco">
                    </div>
                    <div class="col form-group">
                        <label for="numero">Numero</label>
                        <input type="text" class="form-control" id="numero" v-model="cliente.numero">
                    </div>
                    <div class="col form-group">
                        <label for="bairro">Bairro</label>
                        <input type="text" class="form-control" id="bairro" v-model="cliente.bairro">
                    </div>
                </div>
                <div class="row">
                    <div class="col form-group">
                        <label for="cidade">Cidade</label>
                        <input type="text" class="form-control" id="cidade" v-model="cliente.cidade">
                    </div>
                    <div class="col form-group">
                        <label for="uf">UF</label>
                        <input type="text" class="form-control" id="uf" v-model="cliente.uf">
                    </div>
                    <div class="col form-group">
                        <label for="cep">CEP</label>
                        <input type="text" class="form-control" id="cep" v-model="cliente.cep">
                    </div>
                </div>
            </b-tab>
            <b-tab title="Financeiro" disabled>
                <br>Disabled tab!
            </b-tab>
        </b-tabs>
        
        <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
  </div>
</template>

<script>
    import Cliente from './Cliente.js'
    import ClienteService from './ClienteService.js'
    
    export default{
        created () {
            this.service = new ClienteService(this.$resource);
            if(this.id){
                this.service
                    .busca(this.id)
                    .then(cliente => {
                        this.cliente = cliente
                        this.cliente.dtNasc = this.moment(this.cliente.dtNasc).format('YYYY-MM-DD')
                    }, err => console.log(err))
            }
        },

        data () {
            return{
                cliente: new Cliente(),
                id: this.$route.params.id
            }
        },

        methods: {
            gravar () {
                this.service
                    .cadastra(this.cliente)
                    .then(res => {
                    alert("Cliente cadastrado com sucesso")
                    this.cliente = new Cliente()
                    this.$router.push({name: 'ClienteHome'})
                    }, err => alert(err))
            }
        }

    }

</script>

<style scoped>
.row{
    display: flex;
}

.col{
    width: 100%;
    margin: 12px;
}
</style>
