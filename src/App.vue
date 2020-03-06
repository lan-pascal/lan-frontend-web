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