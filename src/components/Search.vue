<template>
  <div>
    <Header />
    <div class="player-search">
      <div class="player-track">
        <h2>Track a player</h2>

        <form v-on:submit.prevent="onSearch">
          <div class="form-group">
            <label for="platform">Platform</label>
            <select class="form-control" v-model="platform">
              <option value="psn">PSN</option>
              <option value="origin">ORIGIN</option>
              <option value="xbl">XBOX</option>
            </select>
          </div>

          <div class="form-group">
            <label for="gamertag">Gamer tag</label>
            <input
              type="text"
              v-model="player"
              class="form-control"
              placeholder="PSN ID, Origin ID, Xbox ID..."
            />
          </div>

          <button type="submit" class="btn">Search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "search",
  data() {
    return {
      platform: "psn",
      player: ""
    };
  },
  components: { Header },
  methods: {
    onSearch() {
      
    }
  }
};
</script>
<style scoped>
.player-track {
  padding-left: 1em;
}
.player-track h2 {
  font-size: 20px;
  font-weight: 400;
}
.player-search {
  margin: 30px auto;
  padding: 1em;
  width: 90%;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
}
h2 {
  color: #000;
  font-weight: 900;
  font-size: 30px;
}
.form-group label {
  color: #000;
  font-weight: 700;
}
.form-group select {
  color: #000;
  font-weight: 400;
}
.form-group option {
  color: #000;
  font-weight: 400;
  background-color: bisque;
}
input::placeholder {
  color: red;
}
input {
  color: #000;
}
button {
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
  font-size: 20px;
  font-weight: 700;
}
</style>