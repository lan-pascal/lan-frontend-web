<template>
    <div>
        <TheHeader/>
        <v-content class="bg">
            <v-alert dismissible type="error" class="mb-0">
               En raison du COVID-19, le Quart de nuit V est reporté. Toutes les informations concernant ce report sont dans la <v-btn outlined :to="{name : 'faq'}">FAQ <v-icon class="pl-1" size="20px">mdi-open-in-new</v-icon></v-btn> . À noter que toutes les informations promotionnelles sont à titre indicatif seulement et ne sont plus actuelles.
            </v-alert>
            <v-alert dismissible type="info" class="mb-0">
                Une nouvelle version du site est (déjà!) en construction. Alors, tout commentaire est plus que le bienvenu sur nos réseaux sociaux!
            </v-alert>
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
