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
                    <th scope="col">Idade</th>
                    <th scope="col">Contato</th>
                    <th scope="col">Açoes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Masculino</td>
                    <td>23</td>
                    <td>(24)99999-9999</td>
                    <td>
                        <router-link class="nav-link" to="/">Visualizar</router-link> /
                        <router-link class="nav-link" to="/">Alterar</router-link> /
                        <router-link class="nav-link" to="/">Excluir</router-link>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jane</td>
                    <td>Feminino</td>
                    <td>27</td>
                    <td>(24)99999-9999</td>
                    <td>
                        <router-link class="nav-link" to="/">Visualizar</router-link> /
                        <router-link class="nav-link" to="/">Alterar</router-link> /
                        <router-link class="nav-link" to="/">Excluir</router-link>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>37</td>
                    <td>Masculino</td>
                    <td>(24)99999-9999</td>
                    <td>
                        <router-link class="nav-link" to="/">Visualizar</router-link> /
                        <router-link class="nav-link" to="/">Alterar</router-link> /
                        <router-link class="nav-link" to="/">Excluir</router-link>
                    </td>
                    </tr>
                </tbody>
                </table>
        </div>
    </div>
  
</template>
