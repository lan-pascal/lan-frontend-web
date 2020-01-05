<template>
  <div>
    <v-row dense justify="center">
        <template v-for="(time,index) in times">
            <v-col class="d-flex-inline flex-grow-0" :key=index>
                <CountdownZwipPiece class="clock__piece" :digits="time"></CountdownZwipPiece>
            </v-col>
      </template>
    </v-row>
    Date : {{deadlineDisplay}}
  </div>
</template>

<script>
import countdownMixin from "@/mixins/countdownMixin"
import CountdownZwipPiece from "@/components/countdown/CountdownZwipPiece"

export default {
    template: "countdown-zwip",
    mixins : [
        countdownMixin
    ],
    components : {
        CountdownZwipPiece
    },
    mounted(){
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' };

      this.deadlineDisplay = new Date(this.deadline).toLocaleDateString("fr",options)
    }
};
</script>

<style lang="scss" scoped>
.clock__piece {
  background: var(--v-primary-darken1);
}
</style>