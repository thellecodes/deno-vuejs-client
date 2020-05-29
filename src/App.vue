<template>
  <div class="mcontainer">
    <div class="player-body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted(){
    document.body.className = "body-image-one"
  }
};
</script>

<style>
:root {
  --primary-color: #e92900;
}

.player-body {
  border-radius: 10px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  transition: 0.4s;
  width: 60%;
  background: rgba(255, 255, 255, 0.8);
  margin: auto;
  padding-bottom: 1em;
}

.body-image-one {
  background: var(--primary-color) url("./assets/bg.png") no-repeat top center;
}

@media (max-width: 1024px) {
  .player-body {
    width: 97%;
  }
}
</style>
