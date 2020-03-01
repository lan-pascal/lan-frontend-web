<template>
  <div class="about">
    <v-layout column>
      <v-flex>
        <v-sheet tile height="200px" color="secondary">
          <v-layout align-center justify-center fill-height>
            <span class="display-3 text-xs-center">Historique</span>
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

}
</script>