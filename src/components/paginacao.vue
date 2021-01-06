<template>
    <div class="paginacao">
        <nav>
            <ul v-for="botao in arrayBotoes" :key="botao.exibicao">
                <li data-pairar="Paginação"
                    @click="emitirPagina(botao.pesquisa)">{{botao.exibicao}}</li>
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
            limitePaisesPorPagina: 25,
            arrayBotoes:[],
        }
    },
    methods:{
        emitirPagina(dado){
            return bus.$emit('eventoEmitirPagina', dado);
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
[data-pairar] {
    position: relative;
}

[data-pairar]:after {
    content: attr(data-pairar);
    position: absolute;
    top: 55px;
    border-radius: 3px;
    left: calc(100% - 50px);
    white-space: nowrap;
    color: #33333371;
    font-size: 0.8rem;
    opacity: 0;
    transition-duration: 0.7s;
}

[data-pairar]:hover:after {
    opacity: 1;
}
.paginacao{
    display:flex;
    align-items: center;
}
.paginacao span{
    position: relative;
}
.paginacao:hover span{
    opacity: 1;
}
li {
  list-style-type: none;
}
.paginacao li {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    width: 40px;
    height: 40px;
    margin: 25px 5px 50px 5px;
    background-color: #fcfcfc;
    box-shadow: 0 0 10px 4px rgba(2, 2, 19, 0.10);
    border-radius: 50%;
    transition-duration: 0.5s;
}
.paginacao li:hover{
    cursor: pointer;
    background-color: #89f1b8;
}
.paginacao nav{
    display: flex;
    flex-direction: row;
}
</style>