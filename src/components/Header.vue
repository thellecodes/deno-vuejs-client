<template>
  <header>
    <h1>
      Deno &
      <span>VueJS</span> Api
    </h1>
    <div class="img-container">
      <div class="img-house">
        <img :src="image" />
      </div>
      <div class="img-house hide-on-1024px">
        <img :src="apex" />
      </div>
      <div class="img-house hide-on-1024px">
        <img :src="vue" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      image: require("@/assets/deno.png"),
      apex: require("@/assets/apex.png"),
      vue: require("@/assets/logo.png")
    };
  }
};
</script>

<style scoped>
.img-container {
  margin-top: 1em;
  padding: 0.5em;
  margin-bottom: 1em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
}
.img-house {
  width: 100px;
  height: 100px;
  margin-right: 1em;
}
img {
  width: 100%;
  height: 100%;
}
h1 {
  color: #000;
  font-weight: 900;
  text-transform: capitalize;
}
span {
  color: rgb(11, 22, 11);
}
@media (max-width: 1024px) {
  h1 {
    font-size: 20px;
  }
  .hide-on-1024px {
    display: none;
  }
}
</style>