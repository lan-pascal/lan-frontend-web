<template>
  <div>

    <v-row pb-12>
      <v-col align="center">
          <v-img :src="require('@/assets/logo/LogoWhiteButterfly.svg')" contain width="100%" aspect-ratio="4"/>
          <div class="secondary--text display-3">PROCHAIN LAN:</div>
          <CountdownClassic class="secondary--text" date="2020-04-09 16:00:00"/>
      </v-col>
    </v-row>


  <v-row pa-12 align=center wrap justify=center>
        <v-card class="secondary" text tile>
          <v-col xs12>
              <v-row row wrap align-center>
                <v-col xs8 md4 hover>
                  <v-card class="elevation-10 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="black--text text--lighten-2">mdi-coin</v-icon>
                    </v-card-text>

                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Prix 1</div>
                    </v-card-title>

                    <v-card-text class="pt-2">
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col xs8 md4 align-center justify-center class="my-2">
                  <v-card class="elevation-10 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="black--text text--lighten-2">mdi-coin</v-icon>
                      <v-icon x-large class="black--text text--lighten-2">mdi-coin</v-icon>
                    </v-card-text>

                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Prix 2</div>
                    </v-card-title>

                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col xs8 md4 class="my-2">
                  <v-card elevation-10 transparent hover>
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="black--text text--lighten-2">mdi-coin</v-icon>
                      <v-icon x-large class="black--text text--lighten-2">mdi-coin</v-icon>
                      <v-icon x-large class="black--text text--lighten-2">mdi-coin</v-icon>
                    </v-card-text>

                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Prix 3</div>
                    </v-card-title>

                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
          </v-col>
        </v-card>
    </v-row>


    <v-row align=center class="secondary primary--text">
      <v-col cols=8>
     <div class="pl-12"> 
          Le LAN c'est un événement biannuel où tu te défoules avec des jeux de toutes les sortes!
           Accessible à tous (oui, oui, c’est pas un truc nerd-only), une variété d’activités différentes sont offertes.
        </div>
      </v-col>
      <v-col cols=4>
        <v-icon size = "100" class="black--text text--lighten-2 pr-12">mdi-help</v-icon>
      </v-col>
    </v-row>

    <v-row align=center class="primary secondary--text">
      <v-col cols=4>
        <v-icon size = "100" class="black--text text--lighten-2 pr-12">mdi-arrow-white-bold-outline</v-icon>
      </v-col>
      <v-col cols=8 class="white--text">
       Le prochain LAN sera le XX au YY. Il y a 100 places de disponibles. 
       Clique ici pour les prix. Clique ici pour toutes les informations sur le prochain LAN.
      </v-col>
    </v-row>

    <v-row align=center class="secondary primary--text">
      <v-col cols=8>
        <div class="pl-12"> 
          Au menu : karaoke, jeux de société animés par des employés de Randolph, 
          tournois de Dance Dance Revolution, Super Smash Bros. Ultimate & Tetris, 
          parties de 10 joueurs sur Halo: Reach & Call of Duty: Black Ops, « couch gaming »
           de 4 à 8 personnes et plus (clique ici pour la liste complète)!
        </div>
      </v-col>
      <v-col cols=4>
        <v-icon size = "100" class="black--text text--lighten-2 pr-12">mdi-gamepad-circle </v-icon>
      </v-col>
    </v-row>

  
  </div>
</template>

<script>
import CountdownClassic from "@/components/misc/CountdownClassic";

export default {
  name: "TheHome",
  components: {
    CountdownClassic
  },
};
</script>