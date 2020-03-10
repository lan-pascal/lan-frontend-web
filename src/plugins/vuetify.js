import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueI18n from 'vue-i18n'

Vue.use(Vuetify);
Vue.use(VueI18n)

const messages = {
  fr: {
    $vuetify: {
      test: 'test_fr',
    },
  },
  en: {
    $vuetify: {
      test: 'test_en',
    },
  },
}

const i18n = new VueI18n({
  locale: 'fr', // set locale
  messages, // set locale messages
})

export default new Vuetify({
    theme: {
        options: {
          customProperties: true
        },
        dark: true,
        themes: {
          dark: {
            primary: {
              base: "#40E0D0",
              lighten1: "#87E6DC",
              darken1: "#32ADA1",
              darken2: "#1C615A"
            },
            secondary: {
              base: "#399FED",
              lighten1: "#82C0F0",
              darken1: "#2D7DBA"
            },
            accent: {
              base: "#3BD7F7"
            },
            grey: {
              base: "#303030",
              lighten1: "#616161",
              darken1: "#202020",
              darken2: "#080808"
            }
          },
        }
    },
    lang: {
      t: (key, ...params) => i18n.t(key, params),
    },
});
