import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
          customProperties: true
        },
        dark: true,
        themes: {
          dark: {
            primary: {
              base: "#252525",
              lighten1: "#616161",
              darken1: "#202020",
              darken2: "#080808"
            },
            secondary: {
              base: "#d6d6d6",
              lighten1: "#e0e0e0",
              darken1: "#8f8f8f"
            },
            accent: {
              base: "#e86423"
            } 
          },
        }
    },
});
