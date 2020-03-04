<template>
  <div class="justify-center primary">

    <v-row class="primary pa-4">
      <v-img 
      src="../../assets/logo/QDN2020_Artwork.png"
      width="450"
      contain
      ></v-img>
      <h2 class="accent--text">Ouverture des portes dès 20h</h2>
    </v-row>

    <v-row class="primary">
      <v-col>
        <v-row>
          <h1>Le QdN, c'est quoi<span class="accent--text rotate">?</span></h1>
        </v-row>
        <v-row>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, 
          voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, 
          voluptatum impedit laudantium magni dolores. Natus, in quas.
        </p>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="primary">
      <v-col>
        <v-row>
        <h1 class="accent--text">SCÈNE</h1>
      </v-row>
      <v-row>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, 
        voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, 
        voluptatum impedit laudantium magni dolores. Natus, in quas.
        </p>
      </v-row>
      </v-col>
      <v-timeline>
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
    </v-row>

    <v-row
    class="primary"
    align="center">
      <v-col>
        <v-row>
          <h1 class="accent--text">JEUX DE SOCIÉTÉ</h1>
        </v-row>
        <v-row>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, 
        voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, 
        voluptatum impedit laudantium magni dolores. Natus, in quas.
        </p>
      </v-row>
        <v-row
        justify="center">
          <v-img 
          class="ma-6"
          max-width="275"
          src="../../assets/media/board-game-stack.svg"></v-img>
        </v-row>  
      </v-col>
    </v-row>

    <v-row
    class="primary"
    align="center">
       <v-col>
           <v-row>
             <h1 class="accent--text">TOURNOIS</h1>
           </v-row>
           <v-row>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, 
             voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, 
             voluptatum impedit laudantium magni dolores. Natus, in quas.
             </p>
         </v-row>
       </v-col>
    </v-row>
    <v-row
    class="primary"
    align="center">
      <v-col>
        <v-card
        v-for="(game, index) in tournament"
        :key="index"
        width="225"
        height="325"
        tile
        color="black"
        class="text-center ma-4">
          <v-card-title
          class="accent--text justify-center">
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
            {{game.time}}
          </v-card-subtitle>
          <v-card-subtitle
          class="accent--text">
            {{game.location}}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row
    v-for="info in information"
    :key="info"
    class="primary"
    align="center">
       <v-col>
           <v-row>
             <h1 class="accent--text">{{info.name}}</h1>
           </v-row>
           <v-row>
             <p>
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

    <v-row
    class="primary">
      <v-card
      width="315"
      color="black">
        <v-row
        justify="center">
            <h1 class="accent--text">PRIX</h1>
        </v-row>
        <v-row
        v-for="item in price"
        :key="item">
            <v-col cols=2
            class="text-center">
              <v-icon x-large>{{item.icon}}</v-icon>
            </v-col>
            <v-col
            :cols="item.cols">
              <h2>{{item.name}}</h2>
            </v-col>
            <v-col
            class="text-right">
              <h3 class="accent--text mr-5">{{item.cost}}</h3>
            </v-col>
            <v-col cols=12>
              <ul>
              <li
              v-for="drink in item.array"
              :key="drink">{{drink}}</li>
              </ul>
            </v-col>
            <v-col cols=12>
              <h3>{{item.extra}}</h3>
            </v-col>
            <v-col cols=12>
              <h3>ADD PAYMENT ICONS HERE</h3>
              <v-icon>mdi-wave</v-icon>
            </v-col>
        </v-row>

      </v-card>
    </v-row>

  </div>
    
</template>
<style lang="scss">
.rotate {
  transform: rotate(20deg);
}
</style>

<script>
export default {
  name: "event",
  components: {},
  data() {
    return {
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
        {name: "TETRIS", time: "21h", location: "Loundge", vector:require("../../assets/media/tetris-vector.svg")},
        {name: "SUPER SMASH BROS.", time: "23h", location: "Loundge", vector:require("../../assets/media/ssb-vector.svg")}, //SVG NEEDS FIX
        {name: "DANCE DANCE REVOLUTION", time: "01h", location: "Scène principale", vector:require("../../assets/media/ddr-vector.svg")}
      ],
      information: [
        {name: "COUCH GAMING", vector: require("../../assets/media/sofa-vector.svg") , text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, oluptatum impedit laudantium magni dolores. Natus, in quas."},
        {name: "HALO REACH & BLACK OPS", vector: require("../../assets/media/military-vector.svg") , text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, oluptatum impedit laudantium magni dolores. Natus, in quas."},
        {name: "BAR", vector: require("../../assets/media/beer-vector.svg") , text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus, voluptatem dolorum repudiandae veniam fugiat quae minima vero porro dolore atque, oluptatum impedit laudantium magni dolores. Natus, in quas."}
      ],
      price: [
        {name: "Coût d'entrée", icon:"mdi-ticket", cost:"25$", cols:"6"},
        {name: "Boisson", icon:"mdi-glass-cocktail", cost:"1 pour 3$ | 2 pour 5$", array: [ "Corona Extra","Coors Light","Stella Artois", "Pepito Sangria", "Palm Bay", "Shot de vodka", "Shot de Tequila"], extra:"Les shots sont aussi offerts à 10 pour 20$", cols:"3"},
        {name: "Boisson sans alcool", icon:"mdi-bottle-soda-classic", array:["Coca-Cola", "Sprite",  "Thé Glacé",  "Fruitopia",  "Eau pétillante"], cost:"2$", extra:"Eau offerte gratuitement sur place", cols:"7"},
      ]
    }
  }

}
</script> 