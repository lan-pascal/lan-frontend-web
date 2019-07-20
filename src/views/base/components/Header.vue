<template>
      <v-app-bar
        color="primary"
        app
      >
        <v-toolbar-title>
          <router-link
          :to="{name:'home'}"
          tag="span"
          style="cursor: pointer"> 
          Lan
          </router-link>
        </v-toolbar-title>

          <v-spacer/>

          <v-flex class="hidden-sm-and-down">
              <v-btn text class="lan-btn" route: to="/event">Event</v-btn>
              <v-btn text route: to="/gallery" class="lan-btn">Gallery</v-btn>
              <v-btn text route: to="/poll-survey" class="lan-btn">Survey</v-btn>
              <v-btn text route: to="/ranking">Ranking</v-btn>
              <v-btn text route: to="/about">About</v-btn>
              <v-btn text route: to="/signin">Sign in</v-btn>
          </v-flex>

      <v-menu left class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Test</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>   
        </v-list>
      </v-menu>
      </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style>
</style>
