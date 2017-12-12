<template>
  <div >
    <h2>Cadastro de Cliente 
        <small>
            <router-link class="nav-link" to="/ClienteHome">Voltar</router-link>
        </small>
    </h2>
    <form class="container">
        <div class="row">
            <div class="col form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome">
            </div>
            <div class="col form-group">
                <label for="idade">Idade</label>
                <input type="date" class="form-control" id="idade">
            </div>
            <div class="col form-group">
                <label for="cpf">CPF</label>
                <input type="text" class="form-control" id="cpf">
            </div>
        </div>
        <div class="row">
            <div class="col form-group">
                <label for="rg">RG</label>
                <input type="text" class="form-control" id="rg">
            </div>
            <div class="col form-group">
                <label for="sexo">Sexo</label>
                <select id="sexo" class="form-control">
                    <option>Masculino</option>
                    <option>Feminino</option>
                </select>
            </div>
            <div class="col form-group">
                <label for="endereco">Endereço</label>
                <input type="text" class="form-control" id="endereco">
            </div>
        </div>
        <div class="row">
            <div class="col form-group">
                <label for="numero">Numero</label>
                <input type="text" class="form-control" id="numero">
            </div>
            <div class="col form-group">
                <label for="bairro">Bairro</label>
                <input type="text" class="form-control" id="bairro">
            </div>
            <div class="col form-group">
                <label for="cidade">Cidade</label>
                <input type="text" class="form-control" id="cidade">
            </div>
        </div>
        <div class="row">
            <div class="col form-group">
                <label for="uf">UF</label>
                <input type="text" class="form-control" id="uf">
            </div>
            <div class="col form-group">
                <label for="telefone">Telefone</label>
                <input type="text" class="form-control" id="telefone">
            </div>
        </div>


        <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
  </div>
</template>

<style scoped>
.row{
    display: flex;
}

.col{
    width: 100%;
    margin: 12px;
}
</style>
