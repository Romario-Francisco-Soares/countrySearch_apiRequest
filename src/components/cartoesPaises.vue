<template>
    <div class="containerCartoes" >
        <table v-for="pais in arrayPaisesVisiveis" :key="pais.id" @click="mostrarInformacoesOcultas()">
            <div class="bandeiraPais" >
                <img :src="pais.flag" :alt="pais.nome">
            </div>
            <td>
                <tr><p><strong>Nome</strong></p><p>{{pais.name}}</p></tr>
                <tr><p><strong>Nome Nativo</strong></p><p>{{pais.nativeName}}</p></tr>
                <tr><p><strong>Capital</strong></p><p>{{pais.capital}}</p></tr>
                <div class="informacoesOcultas">
                    <tr><p><strong>Nome</strong></p><p>{{pais.name}}</p></tr>
                    <tr><p><strong>Nome Nativo</strong></p><p>{{pais.nativeName}}</p></tr>
                    <tr><p><strong>Capital</strong></p><p>{{pais.capital}}</p></tr>
                </div>
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
            paginaAtual: 1,
            limitePaisesPorPagina: null
        }
    },
    methods:{
        mostrarInformacoesOcultas(){
                                // parei por aqui ---------------
        },
        buscarTodosPaises(){
            Paises.listar().then(resposta =>{
            this.arrayPaises = resposta.data;
            this.exibirPagina();
            bus.$emit('eventoTotalPaises', this.arrayPaises.length);
            });
        },
        buscarPorNome(arrayPesquisa, dadoPequisa){
            return arrayPesquisa = arrayPesquisa.filter((array)=> array.name == dadoPequisa);
        },
        buscarPorCapital(arrayPesquisa, dadoPequisa){
            return arrayPesquisa = arrayPesquisa.filter((array)=> array.capital == dadoPequisa);
        },
        buscarPorNomeNativo(arrayPesquisa, dadoPequisa){
            return arrayPesquisa = arrayPesquisa.filter((array)=> array.nativeName == dadoPequisa);
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
            let arrayVazia = 0;
            let auxiliar = [];
            ((auxiliar.length == arrayVazia) ? auxiliar= this.buscarPorNome(this.arrayPaises, dado) : '');
            ((auxiliar.length == arrayVazia) ? auxiliar= this.buscarPorCapital(this.arrayPaises, dado) : '');
            ((auxiliar.length == arrayVazia) ? auxiliar= this.buscarPorNomeNativo(this.arrayPaises, dado) : '');
            this.arrayPaisesVisiveis = auxiliar;
            this.verificarPesquisaNaoEncontrada(auxiliar.length);
        },
        exibirPagina(dado = 0){
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
    height: 130px;
    border-radius: 10px;
    box-shadow: 0 0 10px 4px rgba(2, 2, 19, 0.10);
    background-color: #fcfcfc;
    margin: 20px 0;
    transition-duration: 0.5s;
}
table:hover{
    cursor: pointer;
    box-shadow: 0 0 15px 7px rgba(2, 2, 19, 0.10);
}
.bandeiraPais{
    width: 150px;
    height: 130px;
}
table img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
td{
    display: flex;  
    align-items: center;
}
strong{
    font-weight: bold;
}
td p{
    width: 110px; 
    margin-right: 10px;
    text-align: center;
}
span{
    margin: 70px 0;
    font-size: 1.5rem;
    color: rgb(252, 150, 150);
}
.informacoesOcultas{
    display: none;
}
.mostrarInformacoesOcultas{
    display: flex;
}
@media screen and (min-width: 542px) and (max-width: 690px){
    .bandeiraPais{
        width: 90px;
        height: 90px;
    }
    table{
        height: 90px;
        margin: 20px 0;
    }
}
@media screen and (max-width: 541px){
    .bandeiraPais{
        width: 90px;
        height: 90px;
    }
    table{
        height: 90px;
        margin: 20px 0;
    }
}
@media screen and (min-width: 300px) and (max-width: 475px){
    .bandeiraPais{
        width: 70px;
        height: 70px;
    }
    td p{
        width: 65px; 
        margin-right: 5px;
        text-align: center;
        font-size: 0.6rem;
    }
    table{
        height: 70px;
        margin: 10px 0;
    }
}
</style>