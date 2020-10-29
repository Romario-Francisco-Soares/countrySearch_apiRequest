<template>
  <div class="modelCard" >
    <table class="conteinerDadosModel">
      <div>
        <img :src="pais.flag" :alt="pais.name" />
      </div>
      <td>
        <tr>
          <p><strong>Nome</strong></p>
          <p>{{ pais.name }}</p>
        </tr>
        <tr>
          <p><strong>Nome Nativo</strong></p>
          <p>{{ pais.nativeName }}</p>
        </tr>
        <tr>
          <p><strong>Capital</strong></p>
          <p>{{ pais.capital }}</p>
        </tr>
        <tr>
          <p><strong>Continente</strong></p>
          <p>{{ pais.region }}</p>
        </tr>
        <tr>
          <p><strong>Moeda Local</strong></p>
          <p>{{ pais.currencies[0].name }}</p>
        </tr>
        <tr>
          <p><strong>Área Geografica</strong></p>
          <p>{{ pais.area }}Km2</p>
        </tr>
        <tr>
          <p><strong>Código Alpha</strong></p>
          <p>{{ pais.alpha2Code }}</p>
        </tr>
        <tr>
          <p><strong>Sub-região</strong></p>
          <p>{{ pais.subregion }}</p>
        </tr>
        <tr>
          <p><strong>População</strong></p>
          <p>{{ pais.population }}Km2</p>
        </tr>
        <tr>
          <p><strong>Latitude/Long</strong></p>
          <div class="latitude"> 
              <p v-for="latlng in pais.latlng" :key="latlng" >
                {{latlng}}, 
              </p>
          </div>
         
        </tr>
      </td>
    </table>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
    name: "modelCard",

    data() {
        return {
            pais: [],
        };
    },
    methods:{
        fecharModal(){
            bus.$emit('fecharModalDetalhamento');
        }
    },
    beforeMount() {
        bus.$on("eventoDetalhamento", (dado) => {
        this.pais = dado;
        console.log(dado);
        });
    },
};
</script>

<style scooped>
.modelCard {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(53, 49, 49, 0.4);
  z-index: -2;
}
.conteinerDadosModel {
  display: flex;
  max-width: 50%;
  height: 300px;
  margin: 150px auto;
  position: relative;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: 0 0 10px 4px rgba(2, 2, 19, 0.1);
  background-color: #fcfcfc;
}
.modelCard img {
  width: 300px;
  height: 300px;
  float: left;
  border-radius: 10px;
}
.latitude{
    display:flex;
    margin: 0 auto;
}
</style>
