<template>
    <v-card flat width="4rem" height="78%">
        <v-card-title 
            ref="clockPiece"
            class="non-interactive justify-center display-2 mt-0 px-0">
                {{digits}}
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    props: {
        digits: {
            type : Number,
            required: true,
        }
    },
};
</script>

<style lang="scss" scoped>
</style>