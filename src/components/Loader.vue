<template>
<div class="all">
    <div class="scene">
        <div class="rocket">
            <img class="img" src="./img/rocket.png" alt="">
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Loader',
  data(){
      return{
        
    }
  },
  methods:{
      
  },
}
</script>


<style>
.scene{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: black;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.i{
    position: absolute;
    top: 0;
    background: rgba(255,255,255,0.5);
    animation: animateStars linear infinite;
}
@keyframes animateStars
{
    0%
    {
        transform: translateY(0);
    }
    100%
    {
        transform: translateY(82vh);
    }
}
.scene .rocket{
    position: relative;
    animation: animate 0.35s ease infinite;
}
@keyframes animate
{
    0%,100%
    {
        transform: translateY(-2px);
    }
    50%
    {
        transform: translateY(2px);
    }
}
.img{
    height: 120px;
}
</style>