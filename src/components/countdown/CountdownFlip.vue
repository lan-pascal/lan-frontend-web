<template id="countdown">
  <div>
    <v-row dense justify="center">
        <template v-for="(time,index) in times">
            <v-col class="d-flex-inline flex-grow-0" :key=index>
                <slot :digits="time"></slot>
            </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
import BaseCountdown from "@/components/countdown/BaseCountdown"
import CountdownFlipPiece from "@/components/countdown/CountdownFlipPiece"

export default {
    template: "#countdown-flip",
    components : {
        CountdownFlipPiece
    },
    props: {
        deadline: {
            type: String,
            required: true,
        }
    },
};
</script>

<style scoped>

</style>