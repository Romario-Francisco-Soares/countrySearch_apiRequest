<template>
    <div class="redesSociais" >
        <div  class="linkedin"><a href="https://www.linkedin.com/in/rom%C3%A1rio-francisco-4aa7151b2" target="blanck">
            <img src="../assets/iconeLinkedin.svg" alt="Meu Linkedin"/></a>
            <span class="spanLinkedin">Linkedin</span>
        </div> 
        <div class="gitHub"><a href="https://github.com/Romario-Francisco-Soares" target="blanck">
            <img src="../assets/iconeGithub.svg" alt="Meu GitHub"/></a>
            <span class="spanGithub">Github</span>     
        </div>   
    </div>
</template>

<script>
export default {
    name:'redesSociais',
}
</script>

<style scooped>
.redesSociais{
    display: flex;
}
.redesSociais span{
    position: absolute;
    margin: -65px 0 0 0;
    font-family: 'Work Sans', sans-serif;
    font-size: 0.8rem;
    opacity: 0;
    color: #33333371;
    transition-duration: 0.7s;
}
.linkedin:hover span, .gitHub:hover span{
    opacity: 1;
}
.linkedin, .gitHub{
    display: flex;
    width: 45px;
    height: 45px;
    margin: 30px 15px;
    justify-content: center;
    align-items: center;
    background-color:  #fcfcfc;
    box-shadow: 0 0 10px 4px rgba(2, 2, 19, 0.10);
    border-radius: 50%;
    transition-duration: 0.5s;
}
.linkedin:hover, .gitHub:hover{
    cursor: pointer;
    box-shadow: 0 0 15px 7px rgba(2, 2, 19, 0.10);
}
img{
    width: 25px;
}
</style>