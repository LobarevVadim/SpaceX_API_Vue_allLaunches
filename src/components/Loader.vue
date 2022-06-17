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
function rain(){
            let amount = 40;
            let body = document.querySelector('body');
            let i = 0;
            while(i< amount){
                let star = document.createElement('i');
                star.className = "i";

                let x = Math.floor(Math.random() * window.innerWidth);
                let duration = Math.random() * 1;
                let h = Math.random() * 100;
                star.style.left = x + 'px';
                star.style.width = 1 + 'px';
                star.style.height =50 + h + 'px';
                star.style.animationDuration = duration + 's';

                body.appendChild(star);
                i++
            }
        }
        rain()
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