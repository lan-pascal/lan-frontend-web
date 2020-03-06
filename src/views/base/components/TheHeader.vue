<template>
    <div>
        <v-app-bar
            dark
            clipped-right
        >  
            <v-btn :to="{name: 'home'}" :ripple="false" exact text class="noeffect"><v-img width="85px" :src="require('@/assets/logo/LogoWhiteFillEmptyBtns.svg')"/></v-btn>
        
            <v-btn v-for="(link, linkIndex) in links" :key="linkIndex" :to="link.to" :ripple="false" text class="title underline noeffect hidden-sm-and-down">
            {{ link.name }}
            </v-btn>
            
            <v-spacer> </v-spacer>
            
            <v-btn :to="{name:'pricing'}" class="accent hidden-sm-and-down">
                Billets
            </v-btn>

            <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                absolute
                floating
                right
                clipped
                width="200px"
                height="200px"
                class="hidden-md-and-up"
        >
            <v-list dense>

                <v-list-item
                v-for="link in links"
                :key="link.name"
                :to="link.to"
                >
                <v-list-item-icon>
                    <v-icon class="accent--text">{{ link.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title class="accent-text">{{ link.name }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
                <v-divider/>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      links:  [
        {name: "QdN 2020", to: "/event", icon: "mdi-calendar-star"},
        {name: "FAQ", to: "/faq", icon: "mdi-frequently-asked-questions"},
        {name: "À propos", to: "/about", icon: "mdi-information-outline"}
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
.noeffect {
    &:hover, &.v-btn:before {
        background-color: transparent;
    }
}
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

  &:hover:after {
    width: 100%;
    left: 0;
  }
}
</style>