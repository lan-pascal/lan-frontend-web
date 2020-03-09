<template>
  <div>
    <v-row dense justify="center">
        <template v-for="(time,index) in times">
            <v-col class="d-flex-inline flex-grow-0" :key=index>
                <CountdownPiece class="clock__piece" :digits="time"/>
            </v-col>
      </template>
    </v-row>
    Date : {{deadlineDisplay}}
  </div>
</template>

<script>
import countdownMixin from "@/mixins/countdownMixin"
import CountdownPiece from "@/components/countdown/CountdownNormalPiece"

export default {
    template: "countdown-zwip",
    mixins : [
        countdownMixin
    ],
    components : {
        CountdownPiece
    },
    mounted(){
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' };

      this.deadlineDisplay = new Date(this.deadline).toLocaleDateString("fr",options)
    }
};
</script>

<style lang="scss" scoped>

</style>