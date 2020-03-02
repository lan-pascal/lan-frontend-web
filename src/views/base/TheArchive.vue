<template>
    <v-col>
        <v-row>
            <v-col align="center" justify="center">
                <h1 class="display-3 accent--text">Archive</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col
            v-for="(item,i) in items"
            :key="i"
            class="d-flex child-flex"
            dense
            align="center"
            cols="6"
            sm="3"
            >
                <v-hover v-slot:default="{hover}">
                    <v-img :src="item.src" aspect-ratio="1" max-width="250" max-height="250">
                        <v-fade-transition>
                            <v-overlay v-if="hover" opacity="0.7" absolute z-index="1">
                                <v-col class="transparent pa-1">Album</v-col>
                            </v-overlay>
                        </v-fade-transition>

                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-hover>
            </v-col>
        </v-row>

        <v-row>
            <v-timeline id="event-timeline">
                <v-timeline-item v-for="(event, eventIndex) in events" :key="eventIndex">
                <template v-slot:opposite>
                    <span>{{event.date}} - {{event.place}}</span>
                </template>
                <v-card class="elevation-2">
                    <v-card-title class="accent--text">{{event.name}}</v-card-title>
                    <v-card-text>
                        <span class="d-block">Nombre de participants: {{event.numberParticipants}}</span>
                        <template v-for="(highlight, highlightIndex) in event.highlights">
                            <span class="d-block" :key="highlightIndex">- {{highlight.item}}</span>
                        </template>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-row>
    </v-col>
</template>

<script>
export default {
  name: "archive",
  components: {},
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      events: [
        {
          name: "LAN 5",
          date: "9 avril 2020",
          place: "À venir",
          numberParticipants: "À venir",
          highlights: [{ item: "À venir" }]
        },
        {
          name: "LAN 4",
          date: "23 juin 2019",
          place: "Gam1ng Café",
          numberParticipants: "49",
          highlights: [
            { item: "Premirère fois en présence d'un photographe (Sacha)" },
            { item: "Premières consoles en Local Area Network" },
            { item: "Premier tournoi de Tetris" }
          ]
        },
        {
          name: "LAN 3",
          date: "27 décembre 2018",
          place: "Gam1ng Café",
          numberParticipants: "51",
          highlights: [
            { item: "Plus de 50 personnes" },
            { item: "Ajout des jeux de sociétés" },
            { item: "Premier tounoir de DDR" },
            { item: "Permis permis d'alcool" },
            { item: "Premier tour de magie au LAN (Sami)" },
            { item: "On passe de 20 ordis à 32 (salle arrière)" }
          ]
        },
        {
          name: "LAN 2",
          date: "11 août 2018",
          place: "Gam1ng Café",
          numberParticipants: "23",
          highlights: [{ item: "Rien?" }]
        },
        {
          name: "LAN 1",
          date: "4 javier 2018",
          place: "Gam1ng Café",
          numberParticipants: "24",
          highlights: [
            { item: "Premier LAN" },
            { item: "Premier et dernier tournoi de CS:GO" },
            { item: "Premier tournoi de SSB" }
          ]
        }
      ]
    };
  }
};
</script>