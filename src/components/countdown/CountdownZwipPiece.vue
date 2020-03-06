<template>
    <v-card flat width="4rem" height="75%">
        <v-card-title 
            ref="clockPiece" 
            class="non-interactive justify-center display-2 px-0 pb-10">
                {{digits}}
        </v-card-title>
    </v-card>
</template>

<script>
import anime from "animejs"

export default {
    mounted() {
        this.ready = false;

        const { clockPiece } = this.$refs

        this.animation = anime.timeline({
                targets: clockPiece,
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

<style lang="scss" scoped>

</style>