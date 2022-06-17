<template>
    <div class="launches">
        <div class="launches__beginning">
            <h1 class="big_text">LAUNCHES</h1>
            <p class="dream">Every launch made by SpaceX</p>
        </div>
        <div class="mainTimeLine">
            <TimeLine />
        </div>
    </div>
</template>
<script>
import TimeLine from'@/components/TimeLine.vue'
export default {
    name: "Launches",
  components: {
    TimeLine,
  },
}
</script>
<style>
.launches__beginning{
    background: url('./img/launch.jpg')  0 0/cover no-repeat;
    padding-top: 90px;
    min-height: 130vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.big_text{
    font-size: 80px;
}
.mainTimeLine{
    background: #000;
    padding-top: 40px;
}
.dream{
  font-size: 1.5rem;
  padding-top:10px ;
}
</style>