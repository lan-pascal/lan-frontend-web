<template>
      <v-app-bar
        color="primary"
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
          class="underline title"
          router :to="link.route"
          text
          >{{link.name}}
          </v-btn>
        </v-flex>
<!-- Mobile -->
        <!--
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
                <v-list-item route: to="/home" class="title">Accueil</v-list-item>
                <v-list-item
                    v-for="link in links"
                    :key="link.text"
                    router :to="link.route"
                    class="title"
                    >
                    <v-list-item-title>{{ link.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
          </v-menu>
        </v-flex>

        <v-spacer/>
--> 
        <v-col class="d-none d-md-flex justify-end">
          <v-btn class="accent title mx-1 mx-sm-2" v-bind="size">Tarifs</v-btn>
        </v-col>
   

        <v-row class="hidden-md-and-up" justify="space-between" align="center">
            <router-link
            :to="{name:'home'}"
            tag="span"
            style="cursor: pointer"> 
              <v-img  :src="require('@/assets/logo/LogoWhiteFillEmptyBtns.svg')" contain width="60" height="120">
              </v-img>
            </router-link>
            <v-btn
              @click.stop="drawer = !drawer"
              text
              icon
              x-large>
              <v-icon class="menu-icon" large>mdi-menu</v-icon>
            </v-btn>
        </v-row>
        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        height="400">
          
          <v-list>
            <v-list-item
            link
            router to="/">
              <v-list-item-icon>
                  <v-icon class="accent--text">mdi-home</v-icon>
                </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  Accueil
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-for="link in links"
              :key="link.name"
              link
              router :to="link.route">
              <v-list-item-icon>
                  <v-icon class="accent--text">{{link.icon}}</v-icon>
                </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{link.name}}
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-btn
              color="accent">
                <h3>TARIFS</h3>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        
        
      </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      links:  [
        {name: "QdN 2020", route: "/event", icon: "mdi-calendar-star"},
        {name: "FAQ", route: "/faq", icon: "mdi-frequently-asked-questions"},
        {name: "À propos", route: "/about", icon: "mdi-information-outline"}
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