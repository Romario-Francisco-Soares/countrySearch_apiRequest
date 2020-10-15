<template>
    <div class="containerPesquisar" >
        <input v-model="paisPesquisado" type="text" placeholder="Pesquisar Pais">
        <button @click="enviarpaisPesquisado(paisPesquisado)">Presquisar</button>
    </div>
</template>

<script>
import { bus } from '../main'

export default {
    name:'pesquisar',
    data(){
        return{
            paisPesquisado: null,
        }
    },
    methods:{
        converterIniciaisCaixaAlta(dado){
            // utilização de expressões regulares para colocar Uppercase nas letras iniciais
            dado = dado.toLowerCase().replace(/(?:^|\s)\S/g, (a)=> a.toUpperCase() );
            return dado;
        },
        enviarpaisPesquisado(dado){
            dado = this.converterIniciaisCaixaAlta(dado);
            bus.$emit('eventoPaisPesquisado', dado);
        }
   }
}
</script>

<style scooped>
.containerPesquisar{
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 50px;
}   
input{
    width: 65%;
    height: 50px;
    font-size: 1rem;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 10px 0px 0px 10px;
}
button{
    width: 15%;
    font-size: 1rem;
    border: none;
    background-color: rgb(181, 255, 162);
    border-radius: 0px 10px  10px 0px;
    transition-duration: 0.5s;
}
button:hover{
    cursor: pointer;
    background-color: rgba(126, 253, 98, 0.715);
}
</style>