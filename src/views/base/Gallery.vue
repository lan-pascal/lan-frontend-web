<template>
  <v-layout 
  column>

    <v-sheet height="400px" color="secondary">
        <v-layout 
        row 
        align-center 
        justify-center 
        fill-height>
          <v-flex class="display-4 text-xs-center" >
                Gallery
          </v-flex>
        </v-layout>
    </v-sheet>

    <v-container 
    grid-list-lg
    pa-5
    >
      <v-layout 
      row 
      wrap
      justify-center
      >
        <v-flex 
        v-for="(item,i) in items" 
        :key="i"
        grow-shrink-0
        >
          <v-hover>
            <v-card 
            slot-scope="{hover}"
            tile 
            height="240px" 
            width="240px"
            >
              <v-img 
              :src="item.src" 
              alt="lorem" 
              width="100%" 
              height="100%"
              >
              </v-img>

              <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    dark
                    absolute
                    z-index=1
                  >
                    <v-flex class="black">Album</v-flex>
                  </v-overlay>
              </v-fade-transition>

            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: "Gallery",
  components: {},
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>


<style>
</style>