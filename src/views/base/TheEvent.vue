<template>
  <div class="about">
    <v-layout column>
      <v-flex>
        <v-sheet tile height="200px" color="secondary">
          <v-layout align-center justify-center fill-height>
            <span class="display-3 text-xs-center">Événement</span>
          </v-layout>
        </v-sheet>
      </v-flex>
      <v-flex class="pa-5">
        <v-timeline id="event-timeline">
          <v-timeline-item v-for="(event, eventIndex) in events" :key="eventIndex">
            <template v-slot:opposite>
              <span>{{event.date}} - {{event.place}}</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">{{event.name}}</v-card-title>
              <v-card-text>
                <span class="d-block">Nombre de participants: {{event.numberParticipants}}</span>
                <template v-for="(highlight, highlightIndex) in event.highlights">
                  <span class="d-block" :key="highlightIndex">- {{highlight.item}}</span>
                </template>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Event",
  components: {},
  data() {
    return {
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