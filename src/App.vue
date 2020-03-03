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