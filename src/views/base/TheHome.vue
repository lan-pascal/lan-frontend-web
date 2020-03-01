<template>
  <div>
        <v-row class="fullscreen ml-0" align="center" >
            <v-col align="center">
                <v-img  class="mb-12" :src="require('@/assets/logo/LogoWhiteFillEmptyBtns.svg')" contain width="100%" aspect-ratio="4"/>
                <div class="display-3">PROCHAIN LAN:</div>
                <CountdownZwip deadline="2020/04/20 20:00:00"/>
            </v-col>
        </v-row>
        <v-row>

        </v-row>

        <v-divider class="hidden-sm-and-down"/>

        <v-row justify="space-around ml-0" align="center" class="fullscreen">
            <v-col xs=12 sm=12 lg=5>
                <div class="pr-2"> 
                    <v-card flat class="transparent">
                        <v-card-title class="accent--text"><h2>C'est quoi le LAN?</h2></v-card-title>
                        <v-card-text>
                            <h3>Le LAN c'est un événement biannuel où tu te défoules avec des jeux de toutes les sortes!
                            Accessible à tous (oui, oui, c’est pas un truc nerd-only), une variété d’activités différentes sont offertes.</h3>
                        
                        <h3 class="mt-3 bold">Au programme:</h3>

                        <ul class="mt-2">
                          <li>Jeux de société avec animateur</li>
                          <li>Call of Duty: Black Ops à 12 joueurs</li>
                          <li>Tournois de Dance Dance Revolution</li>
                          <li>Couch Gaming</li>
                          <li>et beaucoup plus...</li>
                        </ul>
                        </v-card-text>
                        
                        <v-btn
                        class="ml-4"
                        color="accent"
                        route: to="/event">En savoir plus</v-btn>
                    </v-card>
                </div>
            </v-col>
            <v-col class="hidden-sm-and-down" cols=6>
                <v-img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"></v-img>
            </v-col>
        </v-row>

        <v-divider class="hidden-sm-and-down"/>
        
        <v-row wrap class="fullscreen wrap">
          <v-row wrap justify="space-around" align="center" class="ml-0" height="50%">
            <v-col xs=12 sm=6 md=2>
                <div class="pl-2">
                    <v-card flat class="transparent" align="center">
                        <v-icon color="accent" size="75">mdi-map-marker</v-icon>
                        <v-card-title class="accent--text text-center">C'est où?</v-card-title>
                        <v-card-text>
                          Cegep de Maisonneuve dans la salle Vivoir
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
            <v-col xs=12 sm=6 md=2>
                <v-card flat class="transparent" align="center">
                        <v-icon size="75" color="accent">mdi-seat</v-icon>
                        <v-card-title class="accent--text">100 Places</v-card-title>
                        
                        <v-card-text>
                        </v-card-text>
                    </v-card>
            </v-col>
            <v-col xs=12 sm=6 md=2>
                <v-card flat class="transparent" align="center">
                        <v-icon size="75" color="accent">mdi-clock</v-icon>
                        <v-card-title class="accent--text">20h à 3h</v-card-title>
                        <v-card-text>
                            Fermeture des portes à 22h
                        </v-card-text>
                    </v-card>
            </v-col>
            <v-col xs=12 sm=6 md=2>
                <v-card flat class="transparent" align="center">
                        <v-icon size="75" color="accent">mdi-cash-usd</v-icon>
                        <v-card-title class="accent--text">25$</v-card-title>
                        <v-btn color="accent">Payer en Ligne</v-btn>
                    </v-card>
            </v-col>
        </v-row>
        <v-row height="50%">
            <GmapMap
               :center="{lat:45.550500, lng:-73.553563}"
               :zoom="16"
               :options="{styles:styles,
               zoomControl: false,
                     mapTypeControl: false,
                     scaleControl: false,
                     streetViewControl: false,
                     rotateControl: false,
                     fullscreenControl: false,
                     disableDefaultUi: false }"
               map-type-id="terrain"
               style="width: 100%; height: 300px"
               >
               <GmapMarker
                 :key="index"
                 v-for="(m, index) in markers"
                 :position="m.position"
                 @click="center=m.position"
                 
               />
            </GmapMap>
          </v-row>
        </v-row>

        <v-divider class="hidden-sm-and-down"/>

        <v-row justify="space-around" align="center" class="fullscreen">
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
                        <v-btn
                        class="ml-4"
                        color="accent">Liste des activités</v-btn>
                    </v-card>
                </div>
            </v-col>
            <v-col class="hidden-sm-and-down" cols=2 >
                <v-icon size = "100" class="accent--text text--lighten-2 pr-12">mdi-gamepad-circle </v-icon>
            </v-col>
        </v-row>

        <v-divider class="hidden-sm-and-down"/>
    </div>
</template>

<style scoped>
.midscreen {
  width: 100%;
  height: 30rem;
}
h3 {
  font-weight: 400;
}
.bold {
  font-weight: bold;
}
</style>

<script>
import CountdownZwip from "@/components/countdown/CountdownZwip";

export default {
  name: "TheHome",
  components: {
    CountdownZwip
  },
  data () {
      return {
        styles: [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#0e0e0e"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#746855"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#242f3e"
                  }
                ]
              },
              {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#d59563"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#d59563"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#263c3f"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#6b9a76"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#38414e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#212a37"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9ca5b3"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#746855"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#1f2835"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#f3d19c"
                  }
                ]
              },
              {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#2f3948"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#d59563"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#17263c"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#515c6d"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#17263c"
                  }
                ]
              }
            ]
      }
    }
}
</script>

