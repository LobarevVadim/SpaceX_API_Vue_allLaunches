<template>
  <div class="about">
    <div class="section section__1">
      <transition name="appearance">
        <div class="quote">
          <p class="dream">“You want to wake up in the morning and think the future is </p>
          <p class="dream">being a spacefaring civilization is all about. It’s about believing in the future and thinking that the</p>
          <p class="dream">future will be better than the past. And I can’t think of anything more exciting than going out</p>
          <p class="dream">there and being among the stars.”</p>
          <p class="dream p-40">-Elon Musk</p>
        </div>
      </transition>
    </div>
    <div class="section section__2">
      <div class="multiplanetary">
        <div class="spaceX">
          <h1>MAKING HUMANITY</h1>
          <h1>MULTIPLANETARY</h1>
          <p class="p-40">Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built, capable of carrying humans to Mars and other destinations in the solar system.</p>
          <div class="rewatch">
            <a class="content__button" href="https://www.spacex.com/" target="blank">
					    <span class="text">SpaceX</span>
					    <div class="hover"></div>
			      </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section section__3">
      <div class="makingHistory">
        <div class="spaceX">
          <h1>MAKING HISTORY</h1>
          <p class="p-40">SpaceX has gained worldwide attention for a series of historic milestones. It is the only private company capable of returning a spacecraft from low-Earth orbit, and in 2012 our Dragon spacecraft became the first commercial spacecraft to deliver cargo to and from the International Space Station. And in 2020, SpaceX became the first private company to take humans there as well. Click through the timeline above to see some of our milestone accomplishments.</p>
        </div>
      </div>
    </div>
    <div class="section section__4">
      <div class="links" id="nav">
        <router-link class="link" to="/about/1">LANDING ZONE</router-link> |
        <router-link class="link" to="/about/0">DRONESHIP</router-link>
      </div>
      <router-view />
      <img class="mission" :src="this.missions[parseInt(this.$route.params.mission)]" alt="">
      <p class="dream">SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more </p>
      <p class="dream">exciting than one where we are not.</p>
      <p class="dream p-40 b-40">-Elon Musk</p>
      <div class="vl"></div>
      <div class="rewatch b-40">
            <a class="content__button" href="https://www.spacex.com/" target="blank">
					    <span class="text">FIND YOUR FUTURE</span>
					    <div class="hover"></div>
			      </a>
          </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
        missions:['https://www.spacex.com/static/images/infographics/F9_AUTONOMOUS_DRONESHIP_MOBILE.jpg',
                  'https://www.spacex.com/static/images/infographics/F9_LANDING_ZONE_MOBILE.jpg'
        ],
        show:false,
    }
  },
  computed:{
    missionId(){
      console.log(parseInt(this.$route.params.mission))
      console.log(this.missions[parseInt(this.$route.params.mission)])
      return this.missions[parseInt(this.$route.params.mission)]
    },
  },
  mounted() {
    
  }
  
}
</script>
<style>
.section__1{
  background: url('./img/earth.webp');
  padding-top: 90px;
  min-height: 100vh;
}
.section__2{
  background: url('./img/starship.webp') center;
  min-height:100vh;
}
.section__3{
  background: url('./img/space.webp') center;
  min-height:100vh;
}
.section__4{
  background-color: #000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.vl{
  border-left: 2px solid white;
    height: 150px;
}
.multiplanetary, .makingHistory{
  padding-left: 10vw;
  padding-top:30vh;
}
.quote{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:17vh ;
}
.mission{
  max-width: 60vw;
}
.b-40{
  padding-top: 10vh;
  padding-bottom: 10vh;
}
.dream{
  font-size: 1.5rem;
  padding-top:10px ;
}
.p-40{
  padding-top: 40px;
}
/* transition */

</style>
