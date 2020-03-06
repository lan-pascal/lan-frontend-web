<template>
    <div>
        <v-row class="fullscreen ml-0" align="center" >
            <v-col align="center">
                <v-img  class="my-0" :src="require('@/assets/logo/LogoWhiteFillEmptyBtns.svg')" contain width="100%" aspect-ratio="1.5" max-width="600px" min-width=275px />
<<<<<<< HEAD
                <div class="display-4 font-weight-bold"><div class="qdn-top">QDN</div> <div class="primary--text qdn-behind">2020</div></div>
=======
                <div class="display-4 font-weight-bold"><div class="qdn-top">QUART DE NUIT</div> <div class="accent--text">V</div></div>
>>>>>>> 2c6a830605882a558ec3d12344e5c63caa999613
                <CountdownZwip :deadline="deadline"/>
            </v-col>
        </v-row>

        <v-row justify="space-around" align="center" class="fullscreen ml-0">
            <v-col cols=12 md=6>
                <div class="pr-2"> 
                    <v-card flat class="transparent">
                        <v-card-title class="primary--text"><div class="display-2 font-weight-medium font-italic">C'est quoi le LAN?</div></v-card-title>
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
                        color="primary"
                        route: to="/event">En savoir plus</v-btn>
                    </v-card>
                </div>
            </v-col>
            <v-col class="hidden-sm-and-down" cols=6>
                <v-img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"></v-img>
            </v-col>
        </v-row>
        
        <v-row class="fullscreen">
        <!--     <GmapMap
                ref="mapRef"
                :zoom="16"
                :options="{
                        zoomControl: true,
                        mapTypeControl: false,
                        scaleControl: false,
                        streetViewControl: false,
                        rotateControl: false,
                        fullscreenControl: true,
                        disableDefaultUi: true 
                        }"
                map-type-id="terrain"
                style="width: 100%; height: 50%;"
                >
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in map.markers"
                    :position="m.position"
                    @click="center=m.position"
                />
            </GmapMap> -->

            <iframe 
                    width=100% 
                    height=50% 
                    frameborder="0" 
                    style="border:0" 
                    :src="`https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=${map.coord}&amp;q=${map.location}&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed`">
            </iframe>'

            <v-row justify="space-around" align="center" class="ml-0" height="50%">
                <v-col cols=12 sm=6 md=2>
                    <div class="pl-2">
                        <v-card flat class="transparent" align="center">
                            <v-icon color="primary" size="75">mdi-map-marker</v-icon>
                            <v-card-title class="primary--text text-center">C'est où?</v-card-title>
                            <v-card-text>
                            Cegep de Maisonneuve dans la salle Vivoir {{map.markers}}
                            </v-card-text>
                        </v-card>
                    </div>
                </v-col>
                <v-col cols=12 sm=6 md=2>
                    <v-card flat class="transparent" align="center">
                            <v-icon size="75" color="primary">mdi-seat</v-icon>
                            <v-card-title class="primary--text">100 Places</v-card-title>
                            
                            <v-card-text>
                            </v-card-text>
                        </v-card>
                </v-col>
                <v-col cols=12 sm=6 md=2>
                    <v-card flat class="transparent" align="center">
                            <v-icon size="75" color="primary">mdi-clock</v-icon>
                            <v-card-title class="primary--text">20h à 3h</v-card-title>
                            <v-card-text>
                                Fermeture des portes à 22h
                            </v-card-text>
                        </v-card>
                </v-col>
                <v-col cols=12 sm=6 md=2>
                    <v-card flat class="transparent" align="center">
                            <v-icon size="75" color="primary">mdi-cash-usd</v-icon>
                            <v-card-title class="primary--text">25$</v-card-title>
                            <v-btn color="primary">Payer en Ligne</v-btn>
                        </v-card>
                </v-col>
            </v-row>

        </v-row>

        <v-row justify="space-around" align="center" class="fullscreen">
            <v-col cols=12 md=6>
                <div class="pr-2"> 
                    <v-card flat class="transparent">
                        <v-card-title class="primary--text display-2 font-weight-medium font-italic">Activités</v-card-title>
                        <v-card-text>
                            Au menu : karaoke, jeux de société animés par des employés de Randolph, 
                            tournois de Dance Dance Revolution, Super Smash Bros. Ultimate & Tetris, 
                            parties de 10 joueurs sur Halo: Reach & Call of Duty: Black Ops, « couch gaming »
                            de 4 à 8 personnes et plus (clique ici pour la liste complète)!
                        </v-card-text>
                        <v-btn
                        class="ml-4"
                        color="primary">Liste des activités</v-btn>
                    </v-card>
                </div>
            </v-col>
            <v-col class="hidden-sm-and-down" cols=2 >
                <v-icon size = "100" class="primary--text text--lighten-2 pr-12">mdi-gamepad-circle </v-icon>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.midscreen {
  width: 100%;
  height: 30rem;
}

.qdn-top{
  position: relative;
  bottom: -30px;
}

.qdn-behind{
  position: relative;
  top: -15px;
  transform: rotate(4deg);
  border: thick solid var(--v-primary-base);
  width: fit-content;
}
</style>

<script>
import CountdownZwip from "@/components/countdown/CountdownZwip";

export default {
  name: "TheHome",
  components: {
    CountdownZwip
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo(this.map.center)
    })
  },
  data () {
      return {
        deadline : "2020/04/20 20:00:00",
        map : {
            /* styles: [
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
            ],
            center : {lat:45.550500, lng:-73.553563},
            markers : [{position : {lat:45.550500, lng:-73.553563}}], */
            coord: "45.550500,-73.553563",
            api_key: "AIzaSyBdHhJCXc_-ygexFUz3D4hryzbUYMVsRQk",
            location: "College+de+maisonneuve,Montreal+QC+Canada",
        },
      }
    }
}
</script>

