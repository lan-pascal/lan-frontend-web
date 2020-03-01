<template>
    <v-col>
      <v-row class="my-3">
            <v-col align=center justify=center>
                <span class="display-3 accent--text">Historique</span>
            </v-col>
      </v-row>

      <v-row>
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
      </v-row>
    </v-col>
</template>

<script>
export default {
  name: "event",
  components: {},

}
</script>