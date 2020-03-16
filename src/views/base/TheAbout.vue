<template>
  <div class="width">


  <v-col>

    <v-row align="center" class="pt-12 my-12">
      <v-col class="pr-12" cols="12" md="10">
        <div class="display-3 primary--text">À propos</div>
        <div class="font-weight-light headline" style="font-family:'Teko', sans-serif;">
          <p>
            Nous sommes un regroupement de personnes motivées à créer des événements, nommés
            Quart de nuit, qui incorporent diverses facettes du geek-culture et qui les rendent accessibles à tous.
          </p>
          <p>
            Notre mission est, qu'à chaque
            Quart de nuit, tout le monde se sente à sa place, tout en gardant la nature geek du
            Quart qui le rend si unique.
          </p>
          <p>
            Les Quarts de nuits vont souvent incorporer jeux vidéo, jeux de société, trivia, bar et karaoke. Il y en a, en général, deux par année. Le premier
            Quart de nuit date de janvier 2018 et comportait seulement 24 personnes!
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row align="center">
        <v-col cols=12 sm=2>
          <h1 class="title text--primary mr-5">Contactez-nous</h1>
        </v-col>

        <v-col align=start>
          <v-btn
            v-for="media in medias"
            :key="media.link"
            :href="media.link"
            target="_blank"
            rel="noopener"
            class="mx-3"
            icon
            color="primary"
            x-large
          >
            <v-icon size="24px">{{ media.icon }}</v-icon>
          </v-btn>
        </v-col>
    </v-row>

    <v-row class="py-12 my-12">
      <v-col>
        <h1 class="text--primary display-1">Équipe</h1>
      </v-col>
      <v-row justify="center" justify-md="start">
        <v-col
          v-for="(teammate, teammateIndex) in team"
          :key="teammateIndex"
          cols="10"
          sm="5"
          md="4"
          lg="3"
        >
          <v-card height="100%" width="250px" class="mx-auto text-center">
            <v-row justify="center">
              <v-avatar color="grey" size="128" class="mt-5">
                <v-img :src="retrieveAssetByTeamName(teammate.name)" />
              </v-avatar>
            </v-row>
            <v-card-title>
              <v-col>{{teammate.name}}</v-col>
            </v-card-title>
            <!-- Seems like a bug. The Name should be at the center. -->

            <v-card-subtitle>{{teammate.title}}</v-card-subtitle>

            <v-card-text>{{teammate.description}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </v-col>
  </div>
</template>

<style>


</style>

<script>
export default {
  name: "about",
  components: {},
  methods: {
    retrieveAssetByTeamName(name) {
      try {
        let teamAsset = require(`@/assets/media/team/${name.toLowerCase()}.jpg`);
        return teamAsset;
      } catch (e) {
        return this.defaultPic;
      }
    }
  },
  data() {
    return {
      defaultPic: require("@/assets/media/team/nopic.jpg"),
      team: [
        {
          name: "Pascal",
          title: "Fondateur & organisateur du Quart de nuit",
          description: "Veut rendre le Quart de nuit au niveau des Olympiques. Parle à la troisième personne."
        },
        {
          name: "Karl-Étienne",
          title: "Développeur web en chef & assistant-technique",
          description:
            "Fondateur du site web. Aide bénévolement depuis le début. Côté rationnel de Pascal."
        },
        {
          name: "Lianne",
          title: "Conseillère financière & communications",
          description: "Aide bénévolement depuis Quart de nuit IV. Épicerie du Quart de nuit. C'est grâce à elle si le Quart n'est pas bankrupt."
        },
        {
          name: "Nicolas",
          title: "Designer web",
          description: "Maître de l'esthétique du site."
        },
        {
          name: "Stephen",
          title: "Développeur web & assistant-technique",
          description: "Aide bénévolement depuis le début."
        },
        {
          name: "Simon",
          title: "Assistant-technique",
          description: "Aide bénévolement depuis Quart de nuit III. Épicerie du Quart de nuit."
        },
        {
          name: "Leon",
          title: "Créateur du logo officiel",
          description: "Fait des caméléons photo-réaliste à la mine."
        },
        {
          name: "Sacha",
          title: "Photographe & maître-t-shirtier",
          description: "Prend de très jolies photos."
        },
        {
          name: "Hugues",
          title: "DJ & maître du son",
          description: "C'est grâce à lui si le Quart n'est pas un malaise silencieux! Son site : https://www.facebook.com/karaokedjhugz/"
        },
        {
          name: "Kevin",
          title: "Assistant-technique & service bar/vestiaire",
          description: "Aide bénévolement depuis le début."
        },
        {
          name: "Arnaud",
          title: "Assistant-technique & service bar/vestiaire",
          description:
            "Aide bénévolement depuis le début. Oublie de s'occuper de son tournoi."
        },
        {
          name: "Maude",
          title: "Service bar/vestiaire",
          description:
            "Aide bénévolement depuis le Quart de nuit V."
        },
        {
          name: "Raphaëlle",
          title: "Service bar/vestiaire",
          description:
            "Aide bénévolement depuis le Quart de nuit V."
        },
        {
          name: "Maïa",
          title: "Service bar/vestiaire",
          description:
            "Aide bénévolement depuis le Quart de nuit V."
        },
        {
          name: "Chris",
          title: "Service bar/vestiaire",
          description:
            "Aide bénévolement depuis le Quart de nuit V."
        },
        {
          name: "Ayman",
          title: "Assistant-technique",
          description: "Aide bénévolement depuis le début."
        },
        {
          name: "Alex",
          title: "Assistant-technique",
          description:
            "Aide bénévolement depuis le début. Dort encore moins que Karl-Étienne."
        },
        {
          name: "Étienne",
          title: "Assistant-technique",
          description: "Aide bénévolement depuis le début. Fait de la musique!"
        },
        {
          name: "Roxanne",
          title: "Assistante-technique",
          description:
            "Aide bénévolement depuis le Quart de nuit V."
        }
      ],
      medias: [
            {icon: "mdi-email", link: "mailto:quartdenuitmtl@gmail.com"},
            {icon: "mdi-instagram", link: "https://www.instagram.com/quartdenuit/"},
            {icon: "mdi-facebook", link: "https://www.facebook.com/quartdenuitofficiel/"},
            {icon: "mdi-facebook-messenger", link: "m.me/quartdenuitofficiel"}

        ],
    };
  }
};
</script>
