<template>
    <div class="containerCartoes" >
        <table v-for="pais in arrayPaisesVisiveis" :key="pais.id" @click="exibirDetalhamento(pais)">
            <div class="bandeiraPais" >
                <img :src="pais.flag" :alt="pais.name">
            </div>
            <td>
                <tr><p><strong>Nome</strong></p><p>{{pais.name}}</p></tr>
                <tr><p><strong>Nome Nativo</strong></p><p>{{pais.nativeName}}</p></tr>
                <tr><p><strong>Capital</strong></p><p>{{pais.capital}}</p></tr>
                <tr><p><strong>Continente</strong></p><p>{{pais.region}}</p></tr>
                <tr><p><strong>Moeda Local</strong></p><p>{{pais.currencies[0].name}}</p></tr>
                <tr><p><strong>Área Geografica</strong></p><p>{{pais.area}}Km2</p></tr>
            </td>
        </table>
        <span v-show="pesquisaInesistente">Ops, não encontramos este País, verifique o campo pesquisa</span>
    </div>
</template>

<script>
import { bus } from '../main'
import Paises from '../services/paises'

export default {
    name:'cartoesPaises',
    
    data(){
        return{
            pesquisaInesistente: false,
            arrayPaises:[],
            arrayPaisesVisiveis:[],
            primeiraPagina: 0,
            paginaAtual: 1,
            limitePaisesPorPagina: null,
        }
    },
    methods:{
        exibirDetalhamento(dado){
            bus.$emit('eventoDetalhamento', dado);
            bus.$emit('eventoAbrirModalPais');
        },
        emitirTotalPaises(dado){
            bus.$emit('eventoTotalPaises', dado.length);
        },
        buscarTodosPaises(){
            Paises.listar().then(resposta =>{
            this.arrayPaises = resposta.data;
            this.exibirPagina(this.primeiraPagina);
            this.emitirTotalPaises(this.arrayPaises);
            });
        },
        buscarPorNome(arrayPesquisa, dadoPesquisa){
            let armazenador = []
            let posicaoArmazenamento = 0;
            for (let i = 0; i < arrayPesquisa.length; i++) {
                if (arrayPesquisa[i].name.toLowerCase().indexOf(dadoPesquisa) != -1){
                    armazenador[posicaoArmazenamento] = arrayPesquisa[i];
                    posicaoArmazenamento += 1
                }
            }
            return armazenador;
        },
        buscarPorCapital(arrayPesquisa, dadoPesquisa){
            let armazenador = []
            let posicaoArmazenamento = 0;
            for (let i = 0; i < arrayPesquisa.length; i++) {
                if (arrayPesquisa[i].capital.toLowerCase().indexOf(dadoPesquisa) != -1){
                    armazenador[posicaoArmazenamento] = arrayPesquisa[i];
                    posicaoArmazenamento += 1
                }
            }
            return armazenador;
        },
        buscarPorNomeNativo(arrayPesquisa, dadoPesquisa){
            let armazenador = []
            let posicaoArmazenamento = 0;
            for (let i = 0; i < arrayPesquisa.length; i++) {
                if (arrayPesquisa[i].nativeName.toLowerCase().indexOf(dadoPesquisa) != -1){
                    armazenador[posicaoArmazenamento] = arrayPesquisa[i];
                    posicaoArmazenamento += 1
                }
            }
            return armazenador;
        },
        concatenarArrays(array1, array2, array3){
            let uniaoArrays = null;
            uniaoArrays = [...new Set([...array1, ...array2, ...array3])];
            return uniaoArrays;
        },
        verificarPesquisaNaoEncontrada(tamanhoArray){
            let arrayVazia = [];
            ((tamanhoArray == arrayVazia) ? this.exibirMensagemPesquisaNaoEncontrada() : this.esconderMensagemPesquisaNaoEncontrada());
        },
        exibirMensagemPesquisaNaoEncontrada(){
            this.pesquisaInesistente = true;
        },
        esconderMensagemPesquisaNaoEncontrada(){
            this.pesquisaInesistente = false;
        },
        arbitrarPesquisas(dado){
            let auxiliarA = [];
            let auxiliarB = [];
            let auxiliarC = [];
            auxiliarA = this.buscarPorNome(this.arrayPaises, dado);
            auxiliarB = this.buscarPorCapital(this.arrayPaises, dado);
            auxiliarC = this.buscarPorNomeNativo(this.arrayPaises, dado);
            auxiliarA = this.concatenarArrays(auxiliarA, auxiliarB, auxiliarC);
            this.arrayPaisesVisiveis = auxiliarA;
            this.verificarPesquisaNaoEncontrada(auxiliarA.length);
        },
        exibirPagina(dado){
            this.paginaAtual = dado;
            this.arrayPaisesVisiveis = this.arrayPaises.slice(
            this.paginaAtual*this.limitePaisesPorPagina,
            this.paginaAtual*this.limitePaisesPorPagina+this.limitePaisesPorPagina);
        }
    },
    created(){
        this.buscarTodosPaises();
    },
    beforeMount(){
        bus.$on('eventoDadoPais',(dado)=>{
            this.arbitrarPesquisas(dado);
        });
        bus.$on('eventoDadoPaisNull',()=>{
            this.esconderMensagemPesquisaNaoEncontrada();
            this.buscarTodosPaises();
        });
        bus.$on('eventoEmitirPagina',(dado)=>{
            this.exibirPagina(dado);
        });
        bus.$on('eventoLimitePaisesPorPagina', (dado)=>{
            this.limitePaisesPorPagina = dado;
        });
    }
}
</script>

<style scooped>
.containerCartoes{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
}
table{
    display: flex;
    max-width: 580px;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0 0 10px 4px rgba(2, 2, 19, 0.10);
    background-color: #fcfcfc;
    margin: 20px 0;
}
table:hover{
    cursor: pointer;
    box-shadow: 0 0 15px 7px rgba(2, 2, 19, 0.10);
}
.bandeiraPais img{
    width: 150px;
    height: 140px;
    border-radius:10px;
}
td{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
tr{
    width: 110px;     
}
td p{
    text-align: center;
}
span{
    margin: 70px 0;
    font-size: 1.5rem;
    color: rgb(252, 150, 150);
}
@media screen and (min-width: 542px) and (max-width: 690px){
    .bandeiraPais img{
        width: 90px;
        height: 90px;
    }
    table{
        max-width: 520px;
        height: 90px;
        margin: 20px 0;
    }
}
@media screen and (max-width: 541px){
    .bandeiraPais img{
        width: 90px;
        height: 90px;
    }
    table{
        width: 90%;
        height: 90px;
        margin: 20px 0;
    }
}
@media screen and (min-width: 300px) and (max-width: 475px){
    .bandeiraPais img{
        width: 90px;
        height: 90px;
    }
    td{
        justify-content: space-around;
    }
    tr{
        width: 55px;
        margin-right: 5px;
    }
    td p{
        text-align: center;
        font-size: 0.5rem;
    }
    table{
        width: 300px;
        margin: 10px 0;
    }
}
</style>