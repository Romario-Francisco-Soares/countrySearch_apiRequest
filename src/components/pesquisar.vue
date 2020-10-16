<template>
    <div class="containerPesquisar" >
        <input @keypress.enter="tratarDado(dadoPais)" v-model="dadoPais" type="text" placeholder="Pesquisar Pais">
        <button @click="tratarDado(dadoPais)">Presquisar</button>
    </div>
</template>

<script>
import { bus } from '../main'

export default {
    name:'pesquisar',
    data(){
        return{
            dadoPais: null,
        }
    },
    methods:{
        pesquisarDado(dado){
            bus.$emit('eventoDadoPais', dado);
        },
        mostrarTodosPaises(){
            bus.$emit('eventoDadoPaisNull');
        },
        limparEspaços(dado){
            return dado.trim();
        },
        verificarExistenciaDado(dado){
            return ((dado == null || dado == '' || dado == ' ') ? false : true );
        },
        converterIniciaisCaixaAlta(dado){
            return dado= dado.toLowerCase().replace(/(?:^|\s)\S/g, (a)=> a.toUpperCase() );
        },
        tratarDado(dado){
            dado = this.converterIniciaisCaixaAlta(this.limparEspaços(dado));
            (this.verificarExistenciaDado(dado) == true) ?this.pesquisarDado(dado) :this.mostrarTodosPaises();
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
@media screen and (min-width: 542px) and (max-width: 690px){
    .containerPesquisar{
        margin-bottom: 40px;
    }
    input{
        width: 75%;
        font-size: 0.8rem;
        height: 45px;
    }
    button{
        width: 20%;
        font-size: 0.8rem;
        height: 45px;   
    }
}
@media screen and (max-width: 541px){
    .containerPesquisar{
        margin-bottom: 40px;
    }
    input{
        width: 330px;
        height: 40px;
        font-size: 0.7rem;
    }
    button{
        width: 80px;
        height: 40px;
        font-size: 0.7rem;
    }
}
@media screen and (max-width: 300px) and (max-width: 475px){
    .containerPesquisar{
        margin-bottom: 40px;
    }
    input{
        width: 230px;
        height: 40px;
        font-size: 0.7rem;
    }
    button{
        width: 70px;
        height: 40px;
        font-size: 0.6rem;
    }
}
</style>