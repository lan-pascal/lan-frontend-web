<template>
      <v-app-bar
        color="primary"
        flat
        app
        class="pa-0"
      >
        <v-toolbar-title class="pr-6 hidden-sm-and-down">
          <router-link
          :to="{name:'home'}"
          tag="span"
          style="cursor: pointer"> 
            <v-img  :src="require('@/assets/logo/LogoWhiteFillEmptyBtns.svg')" contain width="60" height="120">
            </v-img>
          </router-link>
        </v-toolbar-title>
<!-- Desktop -->
        <v-flex class="hidden-sm-and-down">
          <v-btn
          v-for="link in links"
          :key="link.key"
          :ripple="false"
          class="underline white--text"
          router :to="link.route"
          text
          >{{link.name}}
          </v-btn>
        </v-flex>
<!-- Mobile -->
        <v-flex class="hidden-md-and-up">
          <v-menu offset-y class="justify-space-between">
            <template v-slot:activator="{ on }">
                <v-btn
                    v-on="on"
                    text
                    icon
                    x-large
                    class="px-0">
                    <v-icon class="menu-icon" large>mdi-menu</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item route: to="/home">Accueil</v-list-item>
                <v-list-item
                    v-for="link in links"
                    :key="link.text"
                    router :to="link.route"
                    class="white--text"
                    >
                    <v-list-item-title>{{ link.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
          </v-menu>
        </v-flex>
        <v-spacer/>

        <v-flex d-inline-flex justify-end class="hidden-sm-and-down">
          <v-btn class="accent mx-1 mx-sm-2" v-bind="size">Tarifs</v-btn>
          <v-divider dark vertical/>
          <v-btn outlined class="mx-1 mx-sm-2" route: to="/signin" v-bind="size">Connexion/inscription</v-btn>
        </v-flex>
      </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      links:  [
        {name: "QdN 2020", route: "/event"},
        {name: "Archives", route: "/archive"},
        {name: "FAQ", route: "/faq"},
        {name: "À propos", route: "/about"}
        ]
    }),
    computed: {
    size () {
      const size = {xs:'small',sm:'',lg:'',xl:''}[this.$vuetify.breakpoint.name];
      return size ? { [size]: true } : {}
    }
  }
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
    color: var(--v-accent-base) !important;
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