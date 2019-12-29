<template>
  <v-app class="primary">
    <Header></Header>
      <v-content>
          <router-view/>
      </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '@/views/base/components/Header'
import Footer from '@/views/base/components/Footer'

export default {
  name: "Layout",
  components: {
      Header,
      Footer
  },
};
</script>