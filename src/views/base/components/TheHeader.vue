<template>
      <v-app-bar
        color="primary"
      >
        <v-toolbar-title>
          <router-link
          :to="{name:'home'}"
          tag="span"
          style="cursor: pointer"> 
            <v-img  :src="require('@/assets/logo/LogoWhiteButterfly.svg')" contain width="60" height="120">
            </v-img>
          </router-link>
        </v-toolbar-title>

          <v-flex class="hidden-sm-and-down">
              <v-btn color="secondary" text class="lan-btn" route: to="/event">Événement</v-btn>
              <v-btn color="secondary" text route: to="/gallery" class="lan-btn">Gallerie</v-btn>
              <v-btn color="secondary" text route: to="/poll-survey" class="lan-btn">Sondage</v-btn>
              <v-btn color="secondary" text route: to="/ranking">Classement</v-btn>
              <v-btn color="secondary" text route: to="/about">À propos</v-btn>
          </v-flex>

          <v-spacer/>

          <v-flex d-inline-flex justify-end class="hidden-sm-and-down">
            <v-btn color="secondary" text route: to="/signin">Connexion/inscription</v-btn>
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
