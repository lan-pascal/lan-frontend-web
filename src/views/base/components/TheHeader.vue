<template>
      <v-app-bar
        color="primary"
        flat
        app
      >
        <v-toolbar-title class="pr-6">
          <router-link
          :to="{name:'home'}"
          tag="span"
          style="cursor: pointer"> 
            <v-img  :src="require('@/assets/logo/LogoWhiteFillEmptyBtns.svg')" contain width="60" height="120">
            </v-img>
          </router-link>
        </v-toolbar-title>

        <v-flex class="hidden-sm-and-down">
            <v-btn :ripple="false" text class="underline" route: to="/event">Événement</v-btn>
            <v-btn :ripple="false" text class="underline" route: to="/gallery">Gallerie</v-btn>
            <v-btn :ripple="false" text class="underline" route: to="/poll-survey">Sondage</v-btn>
            <v-btn :ripple="false" text class="underline" route: to="/ranking">Classement</v-btn>
            <v-btn :ripple="false" text class="underline" route: to="/about">À propos</v-btn>
        </v-flex>

        <v-spacer/>

        <v-flex d-inline-flex justify-end class="hidden-sm-and-down">
          <v-btn class="accent mx-2">Prix</v-btn>
          <v-divider dark vertical/>
          <v-btn outlined class="mx-2" route: to="/signin">Connexion/inscription</v-btn>
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

<style lang="scss" scoped>
.underline {
  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    bottom: 0;
    left: 50%;
    position: absolute;
    background : var(--v-accent-base);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }
  
  &:hover, &.v-btn--active {
    color: var(--v-accent-base);
  }

  &:hover, &.v-btn:before {
    background-color: transparent;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
}
</style>
