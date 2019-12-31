<template>
  <v-layout column>

    <v-row pb-12>
      <v-img :src="require('@/assets/logo/LogoBlackBackground.svg')" contain width="100%" aspect-ratio="4"></v-img>
      <v-layout align-center column justify-center>
        <v-flex grow-shrink-0 class="secondary--text display-3 text-center">PROCHAIN LAN:</v-flex>
        <CountdownFlip class="secondary--text" date="2020-04-09 16:00:00"/>
      </v-layout>
    </v-row>

    <v-flex>
      <v-layout row align-center wrap justify-center>
        <v-card class="white" text tile>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs8 md4 hover>
                  <v-card class="elevation-10 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>

                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Material Design</div>
                    </v-card-title>

                    <v-card-text class="pt-2">
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs8 md4 align-center justify-center class="my-2">
                  <v-card class="elevation-10 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>

                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title>

                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs8 md4 class="my-2">
                  <v-card elevation-10 transparent hover>
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>

                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title>

                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-card>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import CountdownFlip from "@/components/misc/CountdownFlip";

export default {
  name: "TheHome",
  components: {
    CountdownFlip
  },
};
</script>