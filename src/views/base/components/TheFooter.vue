<template>
  <v-footer>
    <v-flex>
      <v-card
        text
        tile
        class="primary lighten-1 white--text text-xs-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="secondary--text pt-0">
          Site web fait par Karl-Étienne Bolduc & Pascal Vaillancourt (mais principalement Karl...) pour LAN, inc. 
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="grey--text">
          2020
        </v-card-text>
      </v-card>
    </v-flex>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style>

</style>
