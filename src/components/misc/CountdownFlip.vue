<template id="countdown">
  <div>
    <v-row>
      <template v-for="el in timeElements">
        <v-col :key="el.label">
          <v-card class="px-4">
              <v-card-title class="justify-center">
                {{ el.current | two_digits}}
              </v-card-title>
              <v-card-text class="d-flex justify-center">
                {{ el.label }}
              </v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </div>
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
    deadline: {
      type: String,
      required: true,
      validator(value) {
        if (Date.parse(value)) {
          return false
        }
        return true
      }
    },
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      timeElements: [
        {
          current: 0,
          previous: 0,
          label: "jours",
        },
        {
          current: 0,
          previous: 0,
          label: "heures",
        },
        {
          current: 0,
          previous: 0,
          label: "minutes",
        },
        {
          current: 0,
          previous: 0,
          label: "secondes",
        }
      ]
    }
  },
  computed: {
    dateInMS() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.dateInMS - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMS - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMS - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMS - this.now) / 60 / 60 / 24);
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

<style scoped>

</style>