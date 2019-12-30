<template>
  <v-app class="primary">
    <TheHeader/>
      <v-content>
          <router-view/>
      </v-content>
    <TheFooter/>
  </v-app>
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