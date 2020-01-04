<template>
    <v-card flat width="5rem">
        <v-card-title 
            ref="clockPieceFlip" 
            class="justify-center display-2 px-0">
                {{digits}}
        </v-card-title>
    </v-card>
</template>

<script>
import anime from "animejs"

export default {
    mounted() {
        this.ready = false;

        const { clockPieceFlip } = this.$refs

        this.animation = anime.timeline({
                targets: clockPieceFlip,
                direction: "alternate",
                delay: 0
            })
            .add({
                rotateX: "+=90",
                duration: 300
            })
    },
    props: {
        digits: {
            type : Number,
            required: true,
        }
    },
    watch: {
        digits: function(newVal, oldVal) {
            if (this.ready) {
                if(newVal - oldVal !== 0){
                    this.animation.play()
                }
            }
            this.ready=true
        }
    }
};
</script>

<style scoped>
</style>