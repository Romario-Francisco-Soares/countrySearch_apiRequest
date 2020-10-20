<template>
    <div class="paginacao">
        <span>Paginação</span>
        <button @click="mostrarBotoes()">+</button>
        <nav v-show="mostrar">
            <ul v-for="botao in arrayBotoes" :key="botao.exibicao">
                <li @click="emitirPagina(botao.pesquisa)">{{botao.exibicao}}</li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { bus } from '../main'

export default {
    name:'paginacao',
    
    data(){
        return{
            mostrar: false,
            limitePaisesPorPagina: 50,
            arrayBotoes:[],
        }
    },
    methods:{
        emitirPagina(dado){
            return bus.$emit('eventoEmitirPagina', dado);
        },
        mostrarBotoes(){
            this.mostrar = !this.mostrar;
        },
        popularArrayBotoes(dado){
            this.arrayBotoes = [];
            let controle = dado/this.limitePaisesPorPagina;
            for (let a = 1; a <= controle; a++) {
                this.arrayBotoes.push({exibicao: a, pesquisa: a-1});
            }
        }
    },
    created(){
        this.emitirPagina();
    },
    beforeMount(){
        bus.$on('eventoTotalPaises', (dado)=>{
            this.popularArrayBotoes(dado);
        });  
    },
    mounted(){
        bus.$emit('eventoLimitePaisesPorPagina', this.limitePaisesPorPagina);
    }
}
</script>

<style scooped>
.paginacao{
    display:flex;
    align-items: center;
    flex-direction: column;
}
.paginacao span{
    margin: -25px -80px 10px 0;
    font-size: 0.8rem;
    opacity: 0;
    color: #33333371;
    transition-duration: 0.7s;
}
.paginacao:hover span{
    opacity: 1;
}
li {
  list-style-type: none;
}
.paginacao button,
.paginacao li {
    width: 40px;
    height: 40px;
    margin: 5px 0;
    background-color:  #fcfcfc;
    box-shadow: 0 0 10px 4px rgba(2, 2, 19, 0.10);
    border-radius: 50%;
}
.paginacao li{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
}
</style>