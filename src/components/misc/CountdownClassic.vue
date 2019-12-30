<template id="countdown">
    <v-flex grow-shrink-0>
    {{ days | two_digits}} jours : {{ hours | two_digits}} heures : {{ minutes | two_digits}} minutes : {{ seconds | two_digits}} secondes
    </v-flex>
</template>

<script>
export default {
  template: '#countdown',
  mounted() {
    window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000);
    },1000);
  },
  props: {
    date: {
      type: String
    }
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  },
  filters: {
    two_digits: function (value) {
      if(value < 0) 
        return '00';
      if(value.toString().length <= 1) 
        return '0'+ value;

      return value
    }
  }
}
</script>