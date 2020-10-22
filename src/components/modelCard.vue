<template>
    <div class="modelCard" >
            <table  class="conteinerDadosModel">
            <div class="bandeiraPais" >
                <img :src="pais.flag" :alt="pais.name">
            </div>
            <td>
                <tr><p><strong>Nome</strong></p><p>{{pais.name}}</p></tr>
                <tr><p><strong>Nome Nativo</strong></p><p>{{pais.nativeName}}</p></tr>
                <tr><p><strong>Capital</strong></p><p>{{pais.capital}}</p></tr>
                <tr><p><strong>Continente</strong></p><p>{{pais.region}}</p></tr>
                <tr><p><strong>Moeda Local</strong></p><p>{{pais.currencies}}</p></tr>
                <tr><p><strong>Área Geografica</strong></p><p>{{pais.area}}Km2</p></tr>
                <tr><p><strong>Código Alpha</strong></p><p>{{pais.alpha2code}}</p></tr>
                <tr><p><strong>Sub-região</strong></p><p>{{pais.subregion}}</p></tr>
                <tr><p><strong>População</strong></p><p>{{pais.population}}Km2</p></tr>
                <tr><p><strong>Latitude/Long</strong></p><p>{{pais.latlng}}</p></tr>
            </td>
        </table>
    </div>
</template>

<script>
//import { bus } from '../main'

export default {
    name:'modelCard',
    
    data(){
        return{
           pais:{
               flag:'https://th.bing.com/th/id/OIP.WL1xfp-Wn5dpZSgA1pmw_AHaE8?pid=Api&rs=1',
               name: 'brazil',
               nativeName: 'Brasil',
               capital: 'Brasília',
               region: 'america Sul',
               currencies:'real',
               area: 220,
               alpha2code: 0,
               subregion: 'brazil',
               population: 205220,
               latlng: '20.10.1'
           }
       }
    }
}
</script>

<style scooped>
.modelCard{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(53, 49, 49, 0.4);
    z-index: -2;
}
.conteinerDadosModel{
    display: flex;
    max-width: 50%;
    height: 300px;
    margin: 150px auto;
    position: relative;
    border-radius: 10px;
    justify-content: space-between;
    box-shadow: 0 0 10px 4px rgba(2, 2, 19, 0.10);
    background-color: #fcfcfc;
}
.conteinerDadosModel:hover{
    cursor: pointer;
    box-shadow: 0 0 15px 7px rgba(2, 2, 19, 0.10);
}
.bandeiraPais img{
    width: 300px;
    height: 300px;
    float: left;
    border-radius:10px;
}
td{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
tr{
    width: 110px;     
}
td p{
    text-align: center;
}
span{
    margin: 70px 0;
    font-size: 1.5rem;
    color: rgb(252, 150, 150);
}
@media screen and (min-width: 542px) and (max-width: 690px){
    .bandeiraPais img{
        width: 90px;
        height: 90px;
    }
    table{
        max-width: 520px;
        height: 90px;
        margin: 20px 0;
    }
}
@media screen and (max-width: 541px){
    .bandeiraPais img{
        width: 90px;
        height: 90px;
    }
    table{
        width: 90%;
        height: 90px;
        margin: 20px 0;
    }
}
@media screen and (min-width: 300px) and (max-width: 475px){
    .bandeiraPais img{
        width: 90px;
        height: 90px;
    }
    td{
        justify-content: space-around;
    }
    tr{
        width: 55px;
        margin-right: 5px;
    }
    td p{
        text-align: center;
        font-size: 0.5rem;
    }
    table{
        width: 300px;
        margin: 10px 0;
    }
}
</style>