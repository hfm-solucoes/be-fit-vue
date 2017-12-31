<template>
    <div class="container">
        <div class="header">
            <h2>{{this.nome}} - Medidas</h2>
            <p><router-link class="nav-link" to="/ClienteHome">Voltar</router-link></p>
        </div>
        <form  @submit.prevent="gravar()">
            <b-tabs>
                <b-tab title="Geral" active>
                    <div class="row">
                        <div class="col form-group">
                            <label for="altura">Altura</label>
                            <input type="text" 
                            class="form-control" 
                            id="altura" name="altura" 
                            v-model="medida.altura">
                        </div>
                        <div class="col form-group">
                            <label for="peso">Peso</label>
                            <input type="text" 
                            class="form-control" 
                            id="peso" name="peso" 
                            v-model="medida.peso">
                        </div>
                        <div class="col form-group">
                            <label for="osteopatia">Osteopatia</label>
                            <input type="text" 
                            class="form-control" 
                            id="osteopatia" name="osteopatia" 
                            v-model="medida.osteopatia">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col form-group">
                            <label for="imc">IMC</label>
                            <input type="text" 
                            class="form-control" 
                            id="imc" name="imc" 
                            v-model="medida.imc">
                        </div>
                        <div class="col form-group">
                            <label for="gorduraPercent">Percentual de Gordura</label>
                            <input type="text" 
                            class="form-control" 
                            id="gorduraPercent" name="gorduraPercent" 
                            v-model="medida.gorduraPercent">
                        </div>
                        <div class="col form-group">
                            <label for="gorduraExc">gorduraExc</label>
                            <input type="text" 
                            class="form-control" 
                            id="gorduraExc" name="gorduraExc" 
                            v-model="medida.gorduraExc">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col form-group">
                            <label for="gorduraKg">gorduraKg</label>
                            <input type="text" 
                            class="form-control" 
                            id="gorduraKg" name="gorduraKg" 
                            v-model="medida.gorduraKg">
                        </div>
                        <div class="col form-group">
                            <label for="idealPropPercen">idealPropPercen</label>
                            <input type="text" 
                            class="form-control" 
                            id="idealPropPercen" name="idealPropPercen" 
                            v-model="medida.idealPropPercen">
                        </div>
                        <div class="col form-group">
                            <label for="massaMagra">Massa Magra</label>
                            <input type="text" 
                            class="form-control" 
                            id="massaMagra" name="massaMagra" 
                            v-model="medida.massaMagra">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col form-group">
                            <label for="cardiopatia">Cardiopatia</label>
                            <select id="cardiopatia" class="form-control" v-model="medida.cardiopatia"> 
                                <option value="s">Sim</option>
                                <option value="n">Não</option>
                            </select>
                        </div>
                        <div class="col form-group">
                            <label for="osteopatia">Osteopatia</label>
                            <select id="osteopatia" class="form-control" v-model="medida.osteopatia"> 
                                <option value="s">Sim</option>
                                <option value="n">Não</option>
                            </select>
                        </div>
                        <div class="col form-group">
                            <label for="protocolo">Protocolo</label>
                            <input type="text" 
                            class="form-control" 
                            id="protocolo" name="protocolo" 
                            v-model="medida.protocolo">
                        </div>
                    </div>
                </b-tab>

                <b-tab title="Membros superiores">
                    <div class="row">
                        <div class="col form-group">
                            <label for="bracoDireito">Braço Direito</label>
                            <input type="text" 
                            class="form-control" 
                            id="bracoDireito" name="bracoDireito" 
                            v-model="medida.bracoDireito">
                        </div>
                        <div class="col form-group">
                            <label for="bracoEsquerdo">Braço Esquerdo</label>
                            <input type="text" 
                            class="form-control" 
                            id="bracoEsquerdo" name="bracoEsquerdo" 
                            v-model="medida.bracoEsquerdo">
                        </div>
                        <div class="col form-group">
                            <label for="antebracoDireito">Antebraço Direito</label>
                            <input type="text" 
                            class="form-control" 
                            id="antebracoDireito" name="antebracoDireito" 
                            v-model="medida.antebracoDireito">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col form-group">
                            <label for="antebracoEsquerdo">Antebraço Esquerdo</label>
                            <input type="text" 
                            class="form-control" 
                            id="antebracoEsquerdo" name="antebracoEsquerdo" 
                            v-model="medida.antebracoEsquerdo">
                        </div>
                        <div class="col form-group">
                            <label for="ombro">Ombro</label>
                            <input type="text" 
                            class="form-control" 
                            id="ombro" name="ombro" 
                            v-model="medida.ombro">
                        </div>
                        <div class="col form-group">
                            <label for="triceps">Triceos</label>
                            <input type="text" 
                            class="form-control" 
                            id="triceps" name="triceps" 
                            v-model="medida.triceps">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col form-group">
                            <label for="subEscapular">Subescapular</label>
                            <input type="text" 
                            class="form-control" 
                            id="subEscapular" name="subEscapular" 
                            v-model="medida.subEscapular">
                        </div>
                    </div>
                </b-tab>

                <b-tab title="Tronco">
                    <div class="row">
                        <div class="col form-group">
                            <label for="torax">Torax</label>
                            <input type="text" 
                            class="form-control" 
                            id="torax" name="torax" 
                            v-model="medida.torax">
                        </div>
                        <div class="col form-group">
                            <label for="cintura">Cintura</label>
                            <input type="text" 
                            class="form-control" 
                            id="cintura" name="cintura" 
                            v-model="medida.cintura">
                        </div>
                        <div class="col form-group">
                            <label for="abdomen">Abdomen</label>
                            <input type="text" 
                            class="form-control" 
                            id="abdomen" name="abdomen" 
                            v-model="medida.abdomen">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col form-group">
                            <label for="abdominal">Abdominal</label>
                            <input type="text" 
                            class="form-control" 
                            id="abdominal" name="abdominal" 
                            v-model="medida.abdominal">
                        </div>
                        <div class="col form-group">
                            <label for="supraIliaca">Supra-Ilíaca</label>
                            <input type="text" 
                            class="form-control" 
                            id="supraIliaca" name="supraIliaca" 
                            v-model="medida.supraIliaca">
                        </div>
                        <div class="col form-group">
                            <label for="riscoCintQuad">Risco Cintura Quadril</label>
                            <input type="text" 
                            class="form-control" 
                            id="riscoCintQuad" name="riscoCintQuad" 
                            v-model="medida.riscoCintQuad">
                        </div>
                    </div>

                </b-tab>

                <b-tab title="Membros Inferiores">
                    <div class="row">
                        <div class="col form-group">
                            <label for="quadril">Quadril</label>
                            <input type="text" 
                            class="form-control" 
                            id="quadril" name="quadril" 
                            v-model="medida.quadril">
                        </div>
                        <div class="col form-group">
                            <label for="coxaDireita">Coxa Direita</label>
                            <input type="text" 
                            class="form-control" 
                            id="coxaDireita" name="coxaDireita" 
                            v-model="medida.coxaDireita">
                        </div>
                        <div class="col form-group">
                            <label for="coxaEsquerda">Coxa Esquerda</label>
                            <input type="text" 
                            class="form-control" 
                            id="coxaEsquerda" name="coxaEsquerda" 
                            v-model="medida.coxaEsquerda">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col form-group">
                            <label for="panturrilhaDireita">Panturrilha Direita</label>
                            <input type="text" 
                            class="form-control" 
                            id="panturrilhaDireita" name="panturrilhaDireita" 
                            v-model="medida.panturrilhaDireita">
                        </div>
                        <div class="col form-group">
                            <label for="panturrilhaEsquerda">Panturrilha Esquerda</label>
                            <input type="text" 
                            class="form-control" 
                            id="panturrilhaEsquerda" name="panturrilhaEsquerda" 
                            v-model="medida.panturrilhaEsquerda">
                        </div>
                        <div class="col form-group">
                            <label for="coxa">Coxa</label>
                            <input type="text" 
                            class="form-control" 
                            id="coxa" name="coxa" 
                            v-model="medida.coxa">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col form-group">
                            <label for="panturrilha">Panturrilha</label>
                            <input type="text" 
                            class="form-control" 
                            id="panturrilha" name="panturrilha" 
                            v-model="medida.panturrilha">
                        </div>
                    </div>
                </b-tab>
            </b-tabs>
            <button type="submit" class="btn btn-primary">Incluir</button>
        </form>

       <!-- <b-table striped hover :items="medidas" :fields="fields">
        </b-table> -->

    </div>
</template>

<script>
    import Medidas from './Medidas.js'
    import MedidasService from './MedidasService.js'
    export default{
        created () {
            this.serviceMedida = new MedidasService(this.$resource);
            if(this.id){
                this.serviceMedida
                    .busca(this.id)
                    .then(medida => {
                        this.medida = medida
                    }, err => console.log(err))
            }
        },
        data () {
            return{
                id: this.$route.params.id,
                nome: this.$route.params.nome,
                medida: new Medidas(),
                medidas: [],
                fields: {
                    idMedida: {
                        label: 'ID Medida',
                        sortable: true
                    },
                    dtMedicao: {
                        label: 'Data da Medição',
                        sortable: true
                    },
                    peso: {
                        label: 'Peso',
                        sortable: true
                    },
                    imc: {
                        label: 'IMC',
                        sortable: true
                    },
                    abdomen:{
                        label: 'Abdomen',
                        sortable: true
                    },
                    acoes:{
                        label: 'Ações'
                    }
                },
            }
        },
        methods: {
            gravar () {
                this.medida.idUsuario = this.id;
                this.serviceMedida
                    .cadastra(this.medida)
                    .then(res => {
                    alert("Medida cadastrada com sucesso")
                    this.medida = new Medidas()
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
