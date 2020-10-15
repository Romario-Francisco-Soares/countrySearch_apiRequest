<template>
    <div class="containerCartoes" >
        <table v-for="pais in arrayPaisesVisiveis" :key="pais.id">
            <div class="bandeiraPais" >
                <img :src="pais.flag" :alt="pais.nome">
            </div>
            <td>
                <tr><p><strong>Nome</strong></p><p>{{pais.name}}</p></tr>
                <tr><p><strong>Nome Nativo</strong></p><p>{{pais.nativeName}}</p></tr>
                <tr><p><strong>Capital</strong></p><p>{{pais.capital}}</p></tr>
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
    
    data:()=>{
        return{
            pesquisaInesistente: false,
            arrayPaises:[],
            arrayPaisesVisiveis:[]
        }
    },
    methods:{
        buscarTodosPaises(){
            Paises.listar().then(resposta =>{
            this.arrayPaises = resposta.data
            this.arrayPaisesVisiveis = this.arrayPaises
            })
        },
        buscarPorNome(arrayPesquisa, dadoPequisa){
            return arrayPesquisa = arrayPesquisa.filter((array)=> array.name == dadoPequisa)
        },
        buscarPorCapital(arrayPesquisa, dadoPequisa){
            return arrayPesquisa = arrayPesquisa.filter((array)=> array.capital == dadoPequisa)
        },
        buscarPorNomeNativo(arrayPesquisa, dadoPequisa){
            console.log('oi')
            return arrayPesquisa = arrayPesquisa.filter((array)=> array.nativeName == dadoPequisa)
        },
        exibirMensagemPesquisaInesistente(){
            this.pesquisaInesistente = true
        },
        esconderMensagemPesquisaInesistente(){
            this.pesquisaInesistente = false
        },
        arbitrarPesquisas(dado){
            this.arrayPaisesVisiveis = this.buscarPorNome(this.arrayPaises, dado)
            if ( this.arrayPaisesVisiveis.length == 0) {
                this.esconderMensagemPesquisaInesistente()
                this.arrayPaisesVisiveis = this.buscarPorCapital(this.arrayPaises, dado)
            }
            if ( this.arrayPaisesVisiveis.length == 0) {
                this.arrayPaisesVisiveis = this.buscarPorNomeNativo(this.arrayPaises, dado)
                this.esconderMensagemPesquisaInesistente()
            }
            if ( this.arrayPaisesVisiveis.length == 0 && (dado == null || dado == '' || dado == ' ')) {
                this.esconderMensagemPesquisaInesistente()
                this.buscarTodosPaises()
            }
            if( this.arrayPaisesVisiveis.length == 0 && (dado != null || dado != '' || dado != ' ')){
                this.exibirMensagemPesquisaInesistente()
            }
            if ( this.arrayPaisesVisiveis.length == 1 ) {
                this.esconderMensagemPesquisaInesistente()
            }
        }
    },
    mounted(){
        bus.$on('eventoPaisPesquisado',(dado)=>{
            this.arbitrarPesquisas(dado)
        });
        this.buscarTodosPaises()
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
    margin: 30px 0;
}
.bandeiraPais{
    width: 150px;
    height: 130px;
}
table img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-right: 5px;
}
td{
    display: flex;  
    align-items: center;
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
</style>