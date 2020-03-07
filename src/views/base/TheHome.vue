<template>
    <div class="justify-center width">
        <v-row class="fullscreen ml-0" align="center" >
            <v-col align="center">
                <v-img  class="my-0" src="@/assets/logo/LogoWhiteFillEmptyBtns.svg" contain width="100%" aspect-ratio="1.5" max-width="600px" min-width=275px />
                <div class="display-4 font-weight-bold"><div class="qdn-top">QUART DE NUIT</div> <div class="primary--text qdn-behind">V</div></div>
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
              <h1 class="display-1">Le Quart de Nuit, c'est quoi <span class="display-2 primary--text">?</span></h1>
            </v-row>
            <v-row class="pa-2">
              <p>Nous sommes un regroupement de personnes motivé à créer des événements, nommés <i>Quart de nuit</i>, 
              qui incorporent diverses facettes du <i>geek-culture</i> et les rendent accessibles à tous.
            </p>

            <p>Notre mission est, qu'à chaque <i>Quart de nuit</i>, tout le monde se sente à sa place, 
              tout en gardant la nature <i>geek</i> du <i>Quart</i> qui le rend si unique.
            </p>
            
            <p>Même si tu n'as jamais touché à quelque chose d'électronique de ta vie, tu y trouveras quelque chose.
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
            <v-icon x-large color="primary">{{info.icon}}</v-icon>
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
              <p class="ma-0 ma-md-2 pa-2">Une scène sera présente tout le long de la soirée. Avec son écran-projecteur, diverses activités se tiendront sur celle-ci.
              </p>
            </v-row>
            <v-timeline
            >
              <v-timeline-item
              v-for="(activity, index) in schedule"
              :key="index"
              small
              right
              :color="activity.color">
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
          <v-col
          cols=12
          md=6>
            <v-row justify="center">
              <h1 class="primary--text display-1">JEUX DE SOCIÉTÉ</h1>
            </v-row>
            <v-row>
              <p class="pa-2">Plusieurs jeux de société seront disponibles tout au long de la soirée. 
              Il y aurait même un animateur présent pour aider avec les jeux!
              Plusieurs tables avec un bar à côté seront dédiées pour les jeux de société.
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
               <v-row justify="center">
                 <v-col cols=12
                 md=7>
                   <p class="pa-2">Deux tournois se présenteront à cette 5e édition : un tournoi 2v2 de Super Smash Bros. (le 5e!)
                   et un tournoi de Tetris 1v1 (le 2e!). Les finales auront lieu sur le grand écran de la scène. Des prix seront remis aux gagnants.
                 </p>
                 </v-col>
                 
             </v-row>
           </v-col>
        </v-row>
        <v-row>
          <v-col class="scrolling-wrapper justify-md-center" align="center">
            <v-card
            v-for="(game, index) in tournament"
            :key="index"
            height=300px
            width=225px
            tile
            color="black"
            class="text-center ma-4 card justify-end">
              <v-card-title
              class="primary--text justify-center display-1"
              style="word-break: break-word;">
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
              <v-card-text
              class="primary--text">
                <h2>{{game.location}}</h2>
              </v-card-text>
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
  data () {
      return {
        deadline : "2020/04/09 20:00:00",
        quickinfo: [
          {name: "Collège de Maisonneuve", desc: "3800 boul. Pie-IX, Montréal", icon:"mdi-map-marker"},
          {name: "Jeudi 9 avril 2020", desc: "Fériés vendredi et lundi (Pâques!)", icon:"mdi-calendar-blank"},
          {name: "20h à 3h", desc: "Fermeture des portes à 22h", icon:"mdi-clock-outline"},
          {name: "20 $ pour 50 premiers", desc: "25 $ pour 100 dernières places", icon:"mdi-currency-usd"}

        ],
        schedule: [
        {name: "Rock Band & Guitar Hero", time: "20h", color: "primary"},
        {name: "Trivia Quiz", time: "21h", color: "primary"},
        {name: "", time: "", color: "grey"},
        {name: "Karaoke", time: "23h", color: "primary"},
        {name: "", time: "", color: "grey"},
        {name: "Tournois de Dance Dance Revolution", time: "01h", color: "primary"},
        {name: "", time: "", color:"grey"},
        {name: "Rock Band & Guitar Hero", time: "03h", color: "primary"},
      ],
      tournament: [
        {name: "TETRIS", time: "21h", location: "Loundge", vector: require("@/assets/media/vector/tetris-vector.svg")},
        {name: "SUPER SMASH BROS.", time: "23h", location: "Loundge", vector: require("@/assets/media/vector/ssb-vector.svg")}, //SVG NEEDS FIX
        {name: "DANCE DANCE REVOLUTION", time: "01h", location: "Scène principale", vector: require("@/assets/media/vector/ddr-vector.svg")}
      ],
      information: [
        {name: "COUCH GAMING", vector: require("@/assets/media/vector/sofa-vector.svg") , text:"Couch gaming c'est un terme pour désigner des jeux vidéo qui se jouent à plusieurs sur le même écran. Plusieurs jeux accessibles à tous (et amusants pour tous) se présenteront à ces espaces."},
        {name: "HALO REACH & BLACK OPS", vector: require("@/assets/media/vector/military-vector.svg") , text:"Honnête à ses origines comme LAN, des méga-batailles Halo: Reach et Call of Duty: Black Ops se dérouleront au courant de la soirée. 12 joueurs par jeu!"},
        {name: "BAR", vector: require("@/assets/media/vector/beer-vector.svg") , text:"Un bar sera aussi accessible durant toute la soirée. Différentes boissons seront offertes à des prix raisonnables. Les prix sont dans la section Billets."}
      ]
      }
    }
}
</script>

