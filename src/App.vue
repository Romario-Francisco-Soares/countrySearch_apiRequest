<template>
  <div id="app" >
    <h1>Lista de Países em  Estilo Cartão</h1>
    <pesquisar/>
    <div class="conteiner" >
      <div class="conteiterCartoesPaises">
        <cartoesPaises/>
      </div>
      <div class="conteinerPaginacao">
        <paginacao/>
      </div>
    </div>
    <informacoesContato/>
</div>
</template>

<script>
import pesquisar from './components/pesquisar'
import cartoesPaises from './components/cartoesPaises'
import paginacao from './components/paginacao'
import informacoesContato from './components/informacoesContato'

export default {
  name: 'App',
  components: {
    pesquisar,
    cartoesPaises,
    paginacao,
    informacoesContato,
  }
}
</script>

<style scoped>
@import url('./assets/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

.conteinerPaginacao{
  position: fixed;
  top: 200px;
  margin: 0 10px;
}
.conteiterCartoesPaises{
  display: flex;
  width: 100%;
  justify-content: center;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  color: #333;
}
.conteiner{
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0 7px 5px 4px rgba(2, 2, 19, 0.10);
}
h1{
  font-size: 2rem;
  margin: 90px 0 ;
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
    margin: 30px 0;
   }
}
@media screen and (max-width: 300px) and (max-width: 475px){
   h1{
    font-size: 1rem;
    margin: 25px 0;
   }
}

</style>
