<template>
  <div>
        <v-row class="fullscreen" align="center">
            <v-col align="center">
                <v-img  class="mb-12" :src="require('@/assets/logo/LogoWhiteFillEmptyBtns.svg')" contain width="100%" aspect-ratio="4"/>
                <div class="display-3">PROCHAIN LAN:</div>
                <CountdownZwip deadline="2020/04/09 16:00:00"/>
            </v-col>
        </v-row>

        <v-row justify="space-around" align="center" class="midscreen">
            <v-col xs=12 sm=6 lg=5>
                <div class="pr-2"> 
                    <v-card flat class="transparent">
                        <v-card-title class="accent--text">Description</v-card-title>
                        <v-card-text>
                            Le LAN c'est un événement biannuel où tu te défoules avec des jeux de toutes les sortes!
                            Accessible à tous (oui, oui, c’est pas un truc nerd-only), une variété d’activités différentes sont offertes.
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
            <v-col class="hidden-sm-and-down" cols=2>
                <v-icon size = "100" class="accent--text text--lighten-2 pr-12">mdi-help</v-icon>
            </v-col>
        </v-row>

        <v-divider/>

        <v-row justify="space-around" align="center" class="midscreen">
            <v-col class="hidden-sm-and-down" cols=2>
                <v-icon size = "100" class="accent--text text--lighten-2 pr-12">mdi-play-outline</v-icon>
            </v-col>
            <v-col xs=12 sm=6 lg=5>
                <div class="pl-2">
                    <v-card flat class="transparent">
                        <v-card-title class="accent--text">Information Pertinente</v-card-title>
                        <v-card-text>
                            Le prochain LAN sera le XX au YY. Il y a 100 places de disponibles. 
                            Clique ici pour les prix. Clique ici pour toutes les informations sur le prochain LAN.
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row>

        <v-divider/>

        <v-row justify="space-around" align="center" class="midscreen">
            <v-col xs=12 sm=6 lg=5>
                <div class="pr-2"> 
                    <v-card flat class="transparent">
                        <v-card-title class="accent--text">Activités</v-card-title>
                        <v-card-text>
                            Au menu : karaoke, jeux de société animés par des employés de Randolph, 
                            tournois de Dance Dance Revolution, Super Smash Bros. Ultimate & Tetris, 
                            parties de 10 joueurs sur Halo: Reach & Call of Duty: Black Ops, « couch gaming »
                            de 4 à 8 personnes et plus (clique ici pour la liste complète)!
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
            <v-col class="hidden-sm-and-down" cols=2 >
                <v-icon size = "100" class="accent--text text--lighten-2 pr-12">mdi-gamepad-circle </v-icon>
            </v-col>
        </v-row>

        <v-divider/>
    </div>
</template>

<script>
import CountdownZwip from "@/components/countdown/CountdownZwip";

export default {
  name: "TheHome",
  components: {
    CountdownZwip
  },
};
</script>

<style scoped>
.midscreen {
  width: 100%;
  height: 30rem;
}
</style>