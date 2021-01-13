<template>
    <div class="mostrarMais" >
       <p @click="mostrarMais()">Mostrar Mais</p>
       <p class="mais">+</p>
    </div>
</template>

<script>
import { bus } from '../main'

export default {
    name:'mostrarMais',
    methods:{
        mostrarMais(){
            bus.$emit('eventoMostrarMais');
        }
    }
}
</script>

<style scooped>
.mostrarMais{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.mostrarMais .mais{
    margin-top: 10px;
}
</style>