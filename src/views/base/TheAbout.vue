<template>
  <div class="width">

  
  <v-col>
    
    <v-row align="center" class="pt-12 my-12">
      <v-col class="pr-12" cols="12" md="8">
        <div class="display-3 primary--text">À propos</div>
        <div class="headline font">
          <p>
            Nous sommes un regroupement de personnes motivé à créer des événements, nommés
            <i>Quart de nuit</i>, qui incorporent diverse facettes du geek-culture et les rendent accessibles à tous.
          </p>
          <p>
            Notre mission est, qu'à chaque
            <i>Quart de nuit</i>, tout le monde se sente à sa place, tout en gardant la nature geek du
            <i>Quart</i> qui le rend si unique.
          </p>
          <p>
            <i>Les Quarts de nuits</i> vont souvent incorporer jeux vidéo, jeux de société, trivia, bar et karaoke. Il y en a, en général, deux par année. Le premier
            <i>Quart de nuit</i> date de janvier 2018 et comportait seulement 24 personnes!
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row class="grey">
        <v-col cols=12>
          <h1 class="title text--primary ">Contactez-nous</h1>
        </v-col>
        <v-col>
          <p class="pl-2">Vous pouvez nous rejoindre à l'aide des réseaux suivants:</p>
          <v-btn
            v-for="media in medias"
            :key="media.link"
            :href="media.link"
            target="_blank"
            class="mx-4"
            icon
          >
            <v-icon size="24px">{{ media.icon }}</v-icon>
          </v-btn>
        </v-col>
    </v-row>

    <v-row class="py-12 my-12">
      <v-col>
        <div class="title text--primary">Équipe</div>
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
              <v-avatar color="secondary" size="128" class="mt-5">
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
          description: ""
        },
        {
          name: "Karl-Étienne",
          title: "Développeur web en chef & assistant-technique",
          description:
            "Fondateur du site web. Aide bénévolement depuis le début. Côté rationnel à Pascal."
        },
        {
          name: "Stephen",
          title: "Développeur web & assistant-technique",
          description: "Aide bénévolement depuis le début."
        },
        {
          name: "Nicolas",
          title: "Développeur web",
          description: "Maître de l'esthétique du site."
        },
        {
          name: "Simon",
          title: "Assistant-technique",
          description: "Aide bénévolement depuis Quart de nuit III. Épicerie du Quart de nuit."
        },
        {
          name: "Lianne",
          title: "Conseillère financière & assistante-technique",
          description: "Aide bénévolement depuis Quart de nuit IV. Épicerie du Quart de nuit. Grâce à elle si le Quart n'est pas bankrupt."
        },
        {
          name: "Leon",
          title: "Créateur du logo officiel",
          description: "Fais des caméléons photo-réaliste à la mine."
        },
        {
          name: "Ayman",
          title: "Assistant-technique",
          description: "Aide bénévolement depuis le début. Très très enthousiaste."
        },
        {
          name: "Kevin",
          title: "Assistant-technique & service bar/vestiaire",
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
          name: "Arnaud",
          title: "Assistant-technique & service bar/vestiaire",
          description:
            "Aide bénévolement depuis le début. Oublie de s'occuper de son tournoi."
        },
        {
          name: "Roxanne",
          title: "Assistante-technique",
          description:
            "Aide bénévolement depuis le Quart de nuit V."
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
          name: "Sacha",
          title: "Photographe",
          description: "Prends de très jolies photos."
        },
        {
          name: "Hugues",
          title: "DJ & maître du son",
          description: "Grâce à lui si le Quart est pas un malaise silencieux! Son site : https://www.facebook.com/karaokedjhugz/"
        }
      ],
      medias: [
            {icon: "mdi-email", link: "mailto:quartdenuitmtl@gmail.com"},
            {icon: "mdi-instagram", link: "https://www.instagram.com/quartdenuit/"},
            {icon: "mdi-facebook", link: "https://www.facebook.com/groups/1950288465097742/"}
        ],
    };
  }
};
</script>