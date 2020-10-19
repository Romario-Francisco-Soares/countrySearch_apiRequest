<template>
    <div class="informacoesContato" >
        <span class="amorFrontEnd">Front-End</span>
        <img class="imagemCoracao" src="../assets/Coracao.jpg" alt="">
        <div class="sobreMim">
            <p>Front-End Por: <a href="https://github.com/Romario-Francisco-Soares" target="_blank">Romário Francisco</a></p>
            <p>Api Por: <a href="https://github.com/lennertVanSever" target="_blank">lennertVanSever</a></p>
            <p>Icones: Feather Icons</p>
        </div>
        <redesSociais/>
    </div>
</template>

<script>
import redesSociais from './redesSociais'
export default {
    name:'informacoesContato',
    components:{
        redesSociais
    }
}
</script>

<style scooped>
@import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');

.informacoesContato{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.conectar{
    display: flex;
}
.amorFrontEnd{
    margin-top: 60px;
    font-size: 2.3rem;
    font-family: 'Italianno', cursive;
    color: #333;
}
.imagemCoracao{
    width: 80px;
    margin: -60px 0 20px 0;
}
.sobreMim{
    display: flex;
    width: 100%;
    height: 120px;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    color: #333;
}
.sobreMim p{
    margin: 10px 0;
}
.sobreMim a{
    text-transform: none;
    text-decoration: none;
    color:#333;
}
</style>