<template>
  <div class="player-main-info">
    <div class="spinner" v-if="loading">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div class="not-found" v-if="error">
      <h1>{{error}}</h1>
      <router-link to="/">Go Back</router-link>
    </div>

    <div class="player-info" v-if="playerProfile">
      <div class="player-avatar">
        <div class="player-name">
          {{playerProfile.platformInfo.platformUserId}}
          <span
            v-if="playerProfile.platformInfo.avatarUrl"
          >
            <img :src="playerProfile.platformInfo.avatarUrl" />
          </span>
        </div>

        <div class="m-avatar">
          <!-- <img src="https://trackercdn.com/cdn/apex.tracker.gg/legends/lifeline-tile.png" /> -->
          <img :src="playerProfile.segments[1].metadata.imageUrl" alt />
        </div>

        <router-link to="/" class="go-back">Go Back</router-link>
      </div>
      <div class="player-stats">
        <ul>
          <li>
            <h3>Selected Legend</h3>
            <p>{{playerProfile.metadata.activeLegendName}}</p>
          </li>
          <li v-if="playerProfile.segments[0].stats.season2Wins">
            <h3>Season 2 Wins</h3>
            <p>
              {{playerProfile.segments[0].stats.season2Wins.displayValue}}
              <span>({{playerProfile.segments[0].stats.season2Wins.percentile}})</span>
            </p>
          </li>
          <li v-if="playerProfile.segments[0].stats.level">
            <h3>Apex Level</h3>
            <p>
              {{playerProfile.segments[0].stats.level.displayValue}}
              <span>({{playerProfile.segments[0].stats.level.percentile}}%)</span>
            </p>
          </li>
          <li v-if="playerProfile.segments[0].stats.kills">
            <h3>Lifetime Kills</h3>
            <p>
              {{playerProfile.segments[0].stats.kills.displayValue}}
              <span>({{playerProfile.segments[0].stats.kills.percentile}}%)</span>
            </p>
          </li>
          <li v-if="playerProfile.segments[0].stats.damage">
            <h3>Damage Done</h3>
            <p>
              {{playerProfile.segments[0].stats.damage.displayValue}}
              <span>({{playerProfile.segments[0].stats.damage.percentile}}%)</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "gamer",
  data() {
    return {
      loading: false,
      error: null,
      playerProfile: null
    };
  },
  async created() {
    this.loading = true;
    try {
     
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error = "Player " + error.response.data;
    }
  },
};
</script>