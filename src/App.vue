<template>
  <div id="app" >
    <h1>Lista de Países em  Estilo Cartão</h1>
    <pesquisar/>
    <cartoesPaises/>
</div>
</template>

<script>
import pesquisar from './components/pesquisar'
import cartoesPaises from './components/cartoesPaises'

export default {
  name: 'App',
  components: {
    pesquisar,
    cartoesPaises
  }
}
</script>

<style>
#app {
  display: flex;
  width: 95%;
  margin: 0px auto 0 auto;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #333;
}
h1{
  margin-bottom: 90px;
}

</style>
