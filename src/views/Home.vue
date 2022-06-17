<template>
  <div class="home">
    <div class="beginning">
      <div class="spaceX">
        <p> Space Exploration Technologies Corp. is an American spacecraft manufacturer, space launch provider, and a satellite communications corporation headquartered in Hawthorne, California.</p>
        <div class="rewatch">
          <a class="content__button" href="https://www.spacex.com/" target="blank">
					  <span class="text">SpaceX</span>
					  <div class="hover"></div>
			    </a>
        </div>
      </div>
      <div class="astronaut">
        <img class="astronautImg" src="./img/astronaut.png" alt="">
      </div>
    </div>
    <div class="rocket">
      <EveryRocket />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EveryRocket from "@/components/EveryRocket.vue";

export default {
  name: "Home",
  components: {
    EveryRocket,
  },
};
</script>
<style >
.beginning{
  padding-top: 90px;
  background: url(./img/sunrise.jpg); 
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.spaceX{
  max-width:35vw;
  font-size: 1.2rem;
  /* font-weight: bold; */
}
.rewatch{
  padding-top: 30px;
}
.astronautImg{
  height: 70vh;
  transform: rotate(20deg);
  animation: moveAstronaut 12s ease-in-out infinite alternate;
}
@keyframes moveAstronaut{
  50%{
    transform: translateY(100px) rotate(-30deg) scale(0.8)
  }
}
.content__button {
	border: 2px solid white;
	display: inline-block;
	position: relative;
	z-index: 2;
	margin-top: 0.5rem;
}

.content__button .text {
	font-weight: bold;
	font-size: 0.8rem;
	display: inline-block;
	text-transform: uppercase;
	padding: 1.2rem 2.5rem;
	transition: color 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.content__button .hover {
	position: absolute;
	top: 0;
	left: 0;
	background: white;
	height: 100%;
	width: 100%;
	z-index: -1;
	transform: scale3d(1, 0, 1);
	transform-origin: top center;
	transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.content__button:hover .hover {
	transform: scale3d(1, 1, 1);
	transform-origin: bottom center;
}
.content__button:hover .text {
	color: black;
}
</style>
