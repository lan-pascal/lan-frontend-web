<template id="csrftoken">
        <input name="csrfmiddlewaretoken" type="hidden" v-bind:value="csrftoken"/>
</template>

<script>
const crypto = require('crypto-random-string')

export default {
  template: '#csrftoken',
  props: {
    length: {
      type: Number,
      default: 32
    }
  },
  async created(){
      this.$cookies.set('csrftoken', csrftoken())
  },
  computed: {
    csrftoken () {
      return crypto({length: this.length, type: "base64"})
    },
  }
}
</script>