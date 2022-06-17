<template>
<!-- <transition name="fade">
  <Loader v-if="loading" />
</transition> -->
<header>
  <nav>
    <a href="#">
			<img class="logo" src="./assets/spacex-logo.png" alt="SpaceX" />
		</a>
    <div class="links" id="nav">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/about/1">About</router-link>
      <router-link class="link" to="/launches">Launches</router-link>
    </div>
  </nav> 
</header>
<main>
<router-view />
</main>
<footer class="footer">
			<ul class="footer__list">
        <li><div class="footer__text sel">SPACEX © 2021</div></li>
			</ul>
</footer>
</template>
<script>
import { mapGetters} from "vuex";
// import Loader from '@/components/Loader.vue'
export default{
  name: 'App',
  // components:{Loader},
  data(){
      return{
        loading: true,
        show:true,
    }
  },
  async mounted(){
    this.$store.dispatch('fetchLaunches').then(() => console.log(this.allLaunches)).then(() =>{
      this.loading = false
    })
  },
  computed: mapGetters(["allLaunches",]),
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Mohave:wght@700&family=Montserrat:wght@100;200;300;400;500;600;700&family=Nothing+You+Could+Do&display=swap');
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,body{
  height: 100%;
}
body{
  font-family: 'Montserrat', sans-serif;
  color: #fff;
}
#app{
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
main{
  min-height: 100vh;
}
header{
  padding: 20px;
  border-bottom: 1px solid gray;
  position: fixed;
  width: 100vw;
  background: linear-gradient(135deg, rgba(0,0,0,1), rgba(0,0,0,0.4));
  z-index: 100;
}
header nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
a{
  text-decoration: none;
  color: #fff;
}
.logo{
  width: 250px;
  padding-left: 30px;
}
.links{
  padding-right: 3vw;
}
.link{
  margin: 2vw;
	position: relative;
}
#nav a.router-link-exact-active {
  color: gray;
}
.links .link:after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 1px;
	background: white;
	transform: scaleX(0);
	transform-origin: right center;
	transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.links .link:hover:after {
	transform: scaleX(1);
	transform-origin: left center;
}
/* footer */
.footer {
	margin: 0;
	text-align: center;
	text-transform: uppercase;
	font-size: 0.7rem;
	font-weight: 400;
	padding:10px;
  position: fixed;
  bottom: 0;
}
ul{
	list-style: none;
}
.footer__text {
	color: #979797;
}
.footer__list {
  max-width: 50%;
}
</style>
