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
  margin: 0 auto 0 auto;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #333;
}
h1{
  margin-bottom: 90px;
}
@media screen and (min-width: 542px) and (max-width: 690px){
   h1{
    font-size: 1.7rem;
    margin-bottom: 60px;
   }
}
@media screen and (max-width: 541px){
   h1{
    font-size: 1.4rem;
    margin-bottom: 30px;
   }
}
@media screen and (max-width: 300px) and (max-width: 475px){
   h1{
    font-size: 1rem;
    margin-bottom: 25px;
   }
}

</style>
