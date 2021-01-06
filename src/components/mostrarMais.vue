<template>
    <div class="mostrarMais" >
       <p>Mostrar Mais</p>
       <p class="mais">+</p>
    </div>
</template>

<script>
export default {
    name:'mostrarMais',
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