<template>
  <div>
    <v-app-bar dark app>
      <v-btn :to="{name: 'home'}" :ripple="false" exact text class="noeffect pa-0 pr-6">
        <v-img
          aspect-ratio="1"
          min-width="50"
          max-width="150"
          src="@/assets/logo/logo-bleu-blanc.svg"
        />
      </v-btn>

      <v-btn
        v-for="(link, linkIndex) in links"
        :key="linkIndex"
        :to="link.to"
        :ripple="false"
        text
        class="title underline noeffect hidden-sm-and-down"
      >{{ link.name }}</v-btn>

      <v-spacer></v-spacer>

      <v-btn :to="{name:'pricing'}" class="secondary hidden-sm-and-down">Tarifs</v-btn>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed right class="hidden-md-and-up grey darken-1">
      
      <v-list nav>
        <v-list-item>
           <v-list-item-content>
            <v-list-item-title class="display-1">
              <v-col align="center" class="pa-0 ma-0">
                <div class="font-weight-bold"><div class="qdn-top">QUART DE NUIT</div> <div class="primary--text qdn-behind">V</div></div>
              </v-col>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item link :to="{name: 'pricing'}">
          <v-list-item-icon>
            <v-icon class="primary--text">mdi-currency-usd</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="primary--text">Tarifs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider/>

        <v-list-item link :to="{name: 'home'}" exact>
          <v-list-item-avatar>
            <img src="@/assets/logo/logo-bleu-blanc.svg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-for="link in links" :key="link.name" :to="link.to">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

      <template v-slot:append>
            <v-card
            flat
            tile
            class="text-center"
            width=100%
            >
                <v-card-text>
                    <v-btn
                    v-for="media in medias"
                    :key="media.link"
                    :href="media.link"
                    target="_blank"
                    class="mx-4"
                    icon
                    >
                        <v-icon size="24px">{{ media.icon }}</v-icon>
                    </v-btn>
                </v-card-text>
            </v-card>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { name: "FAQ", to: "/faq", icon: "mdi-frequently-asked-questions" },
      { name: "À propos", to: "/about", icon: "mdi-information-outline" }
    ],
    medias: [
            {icon: "mdi-email", link: "mailto:quartdenuitmtl@gmail.com"},
            {icon: "mdi-instagram", link: "https://www.instagram.com/quartdenuit/"},
            {icon: "mdi-facebook", link: "facebook"}
    ],
  })
};
</script>

<style lang="scss" scoped>
.noeffect {
  &:hover,
  &.v-btn:before {
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
    background: var(--v-accent-base);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  &:hover,
  &.v-btn--active {
    color: var(--v-accent-base) !important;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
}

</style>