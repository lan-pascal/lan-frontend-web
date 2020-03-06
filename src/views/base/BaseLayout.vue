<template>
    <div>
        <TheHeader/>
        
        <v-content class="bg">
            <v-container>
                <router-view/>
            </v-container>
        </v-content>

        <TheFooter/>
    </div>
</template>

<script>
import TheHeader from '@/views/base/components/TheHeader'
import TheFooter from '@/views/base/components/TheFooter'

export default {
  name: "Layout",
  components: {
      TheHeader,
      TheFooter
  },
};
</script>

<style lang="scss">
.bg {
  background-attachment: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle 1600px at 100% 0,var(--v-grey-base) 0%,var(--v-grey-darken2) 100%);
}
</style>