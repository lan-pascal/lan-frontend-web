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
          <h1 class="accent--text">SCÈNE</h1>
        </v-row>
        <v-row>
          <v-img src="../../assets/media/board-game-stack.svg"></v-img>
        </v-row>  
      </v-col>
    </v-row>

    <v-row
    class="primary"
    align="center">
      <v-card>

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
        {name: "TETRIS", time: "21h", location: "Loundge", vector:"../../assets/media/tetris-vector.svg"},
        {name: "SUPER SMASH BROS.", time: "23h", location: "Loundge", vector:"../../assets/media/ssb-vector.svg"},
        {name: "DANCE DANCE REVOLUTION", time: "01h", location: "Scène principale", vector:"../../assets/media/board-game-stack.svg"}
      ]
    }
  }

}
</script>