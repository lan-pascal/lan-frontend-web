<template>
    <div class="justify-center width">
        <v-row class="fullscreen ml-0" align="center" >
            <v-col align="center">
                <v-img  class="my-0" src="@/assets/logo/LogoWhiteFillEmptyBtns.svg" contain width="100%" aspect-ratio="1.5" max-width="600px" min-width=275px />
                <div class="display-4 font-weight-bold"><div class="qdn-top">QUART DE NUIT</div> <div class="accent--text qdn-behind">V</div></div>
                <CountdownZwip :deadline="deadline"/>
            </v-col>
        </v-row>
    <!-- QdN c'est quoi? -->
        <v-row class="pa-4">
          <v-col
          cols=12
          md=6
          align-self="center">
          <v-col>
            <v-row justify="center">
              <h1 class="display-1">Le Quart de Nuit, c'est quoi<span class="display-2 primary--text">?</span></h1>
            </v-row>
            <v-row class="pa-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, 
              voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, 
              voluptatum impedit laudantium magni dolores. Natus, in quas.
            </p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, 
              voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, 
              voluptatum impedit laudantium magni dolores. Natus, in quas.
            </p>
            </v-row>
          </v-col>

          </v-col>
          <v-col
          cols=6
          class="d-none d-md-flex">
            <v-img
            src="@/assets/media/ppl-game-pic.png">
            </v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col
          v-for="info in quickinfo"
          :key="info"
          align="center"
          cols=6
          md=3>
            <v-icon x-large color="accent">{{info.icon}}</v-icon>
            <h2>{{info.name}}</h2>
            <p>{{info.desc}}</p>
          </v-col>
        </v-row>
    <!-- SCÈNE / LIGNE DU TEMPS -->
        <v-row class=" pa-4">
          <v-col>
          
          </v-col>
          <v-col
          cols=12
          md=6>
            <v-row justify="center">
              <h1 class="primary--text display-1">HORAIRE DE LA SCÈNE</h1>
            </v-row>
            <v-row>
              <p class="pa-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, 
              voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, 
              voluptatum impedit laudantium magni dolores. Natus, in quas.
              </p>
            </v-row>
            <v-timeline
            class="black">
              <v-timeline-item
              v-for="(activity, index) in schedule"
              :key="index"
              small
              right>
                <template v-slot:opposite>
                  <h3
                  v-text="activity.time"></h3>
                </template>
                <div class="py-4">
                  <h3>{{activity.name}}</h3>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-col>

        </v-row>
    <!-- JEUX DE SOCIÉTÉ -->
        <v-row
        class=" pa-4"
        align="center">
          <v-col>
            <v-row justify="center">
              <h1 class="primary--text display-1">JEUX DE SOCIÉTÉ</h1>
            </v-row>
            <v-row>
              <p class="pa-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, 
              voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, 
              voluptatum impedit laudantium magni dolores. Natus, in quas.
              </p>
            </v-row>
            <v-row
            justify="center">
              <v-img 
              class="ma-6"
              max-width="275"
              src="@/assets/media/vector/board-game-stack.svg"></v-img>
            </v-row>  
          </v-col>
        </v-row>
    <!-- TOURNOIS -->
        <v-row
        class=" pa-4"
        align="center">
           <v-col>
               <v-row justify="center">
                 <h1 class="primary--text display-1">TOURNOIS</h1>
               </v-row>
               <v-row>
                 <p class="pa-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, 
                 voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, 
                 voluptatum impedit laudantium magni dolores. Natus, in quas.
                 </p>
             </v-row>
           </v-col>
        </v-row>
        <v-row>
          <v-col class="scrolling-wrapper" align="center">
            <v-card
            v-for="(game, index) in tournament"
            :key="index"
            width="225"
            height="325"
            tile
            color="black"
            class="text-center ma-4 card justify-end">
              <v-card-title
              class="primary--text justify-center display-1">
                {{game.name}}
              </v-card-title>
              <v-row
              justify="center">
                <v-img
                :src="game.vector"
                max-width="100">
                </v-img>
              </v-row>
              <v-card-subtitle>
                <h2>{{game.time}}</h2>
              </v-card-subtitle>
              <v-card-subtitle
              class="primary--text">
                <h2>{{game.location}}</h2>
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
    <!-- AUTRES INFOS GÉNÉRAUX (Couch/Halo/Bar) -->
        <v-row 
        wrap
        justify="space-around">
           <v-col v-for="info in information"
            :key="info"
            class="pa-4"
            cols=12
            sm=6
            md=5

            >
               <v-row justify="center">
                 <h1 class="primary--text display-1">{{info.name}}</h1>
               </v-row>
               <v-row>
                 <p class="pa-2">
                   {{info.text}}
                 </p>
               </v-row>
               <v-row
               justify="center">
                 <v-img
                 max-width="100"
                 :src="info.vector"></v-img>
               </v-row>
           </v-col>
        </v-row>
    </div>
</template>

<style scoped lang="scss">
.midscreen {
  width: 100%;
  height: 30rem;
}

.qdn-top{
  position: relative;
  z-index: 4;
  bottom: -30px;
}

.qdn-behind{
  position: relative;
  top: -65px;
  font-size:200px;
  width: fit-content;
}
.scrolling-wrapper {
  -webkit-overflow-scrolling: touch;
  display:flex;
  flex-wrap: nowrap;
  overflow-x:auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .card {
    flex: 0 0 auto;
  }
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
        quickinfo: [
          {name: "Collège de Maisonneuve", desc: "Salle Vivoir, 3800 boul. Pie-IX, Montréal", icon:"mdi-map-marker"},
          {name: "150 places", desc: "Tu peux inviter tes amis!", icon:"mdi-seat"},
          {name: "20h à 3h00", desc: "Fermeture des portes à 22h00", icon:"mdi-clock-outline"},
          {name: "Seulement 25$", desc: "PAYER EN LIGNE", icon:"mdi-currency-usd"}

        ],
        deadline : "2020/04/09 20:00:00",
        schedule: [
        {name: "Rock Band & Guitar Hero", time: "20h"},
        {name: "Trivia Quiz", time: "21h"},
        {name: "", time: ""},
        {name: "Karaoke", time: "23h"},
        {name: "", time: ""},
        {name: "Tournois de Dance Dance Revolution", time: "01h"},
        {name: "", time: ""},
        {name: "Rock Band & Guitar Hero", time: "03h"},
      ],
      tournament: [
        {name: "TETRIS", time: "21h", location: "Loundge", vector: require("@/assets/media/vector/tetris-vector.svg")},
        {name: "SUPER SMASH BROS.", time: "23h", location: "Loundge", vector: require("@/assets/media/vector/ssb-vector.svg")}, //SVG NEEDS FIX
        {name: "DANCE DANCE REVOLUTION", time: "01h", location: "Scène principale", vector: require("@/assets/media/vector/ddr-vector.svg")}
      ],
      information: [
        {name: "COUCH GAMING", vector: require("@/assets/media/vector/sofa-vector.svg") , text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, oluptatum impedit laudantium magni dolores. Natus, in quas."},
        {name: "HALO REACH & BLACK OPS", vector: require("@/assets/media/vector/military-vector.svg") , text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, oluptatum impedit laudantium magni dolores. Natus, in quas."},
        {name: "BAR", vector: require("@/assets/media/vector/beer-vector.svg") , text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, oluptatum impedit laudantium magni dolores. Natus, in quas."}
      ],
      price: [
        {name: "Coût d'entrée", icon:"mdi-ticket", cost:"25$", cols:"6"},
        {name: "Boisson", icon:"mdi-glass-cocktail", cost:"1 pour 3$ | 2 pour 5$", array: [ "Corona Extra","Coors Light","Stella Artois", "Pepito Sangria", "Palm Bay", "Shot de vodka", "Shot de Tequila"], extra:"Les shots sont aussi offerts à 10 pour 20$", cols:"4"},
        {name: "Boisson sans alcool", icon:"mdi-bottle-soda-classic", array:["Coca-Cola", "Sprite",  "Thé Glacé",  "Fruitopia",  "Eau pétillante"], cost:"2$", extra:"Eau offerte gratuitement sur place", cols:"7"},
      ],
      payicon: [
        {src:require("@/assets/media/vector/coin-vector.svg")},
        {src:require("@/assets/media/vector/cc-vector.svg")},
        {src:require("@/assets/media/vector/gpay-vector.svg")},
        {src:require("@/assets/media/vector/apay-vector.svg")},
        {src:require("@/assets/media/vector/interac-vector.svg")},
        {src:require("@/assets/media/vector/pp-vector.svg")}
      ]
      }
    }
}
</script>

