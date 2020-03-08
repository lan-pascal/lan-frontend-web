<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
h1, h2, h3, h4, h5, h6 {
    font-family: 'Teko', sans-serif;
}

.qdn-top{
  position: relative;
  z-index: 4;
  bottom: -30px;
}

.qdn-behind{
  position: relative;
  top: -65px;
  font-size:200px;
  width: fit-content;
}

.width {
  @include xs {
    width: 100%;
  }
  @include sm {
    width: 100%;
  }
  @include md {
    min-width: 900px;
    max-width:1500px;
    width: 70%; 
  }
  margin: 0 auto;
}
.fullscreen {
  width: 100%;
  height: 100vh;
}

.non-interactive
{
    cursor: default;

    &::selection {
        color: inherit;
        background: inherit;
    }
}
</style>