<template>
    <v-col>
        <v-row align=center class="fullscreen">
          <v-col class="pr-12" cols=12 md=8>
            <div class="display-3 primary--text">À propos</div>
            <div class="headline font"><br>Nous sommes un regroupement de personnes motivé à créer des événements, nommés <i>Quart de nuit</i>, qui incorporent diverse facettes du geek-culture et les rendent accessibles à tous. 
            <br><br>Notre mission est, qu'à chaque <i>Quart de nuit</i>, tout le monde se sente à sa place, tout en gardant la nature geek du <i>Quart</i> qui le rend si unique.
            <br><br><i>Les Quarts de nuits</i> vont souvent incorporer jeux vidéo, jeux de société, trivia, bar et karaoke. Il y en a, en général, deux par année. Le premier <i>Quart de nuit</i> date de janvier 2018 et comportait seulement 24 personnes!</div>
          </v-col>
        </v-row>

        <v-row>
            <span class="pa-5 d-block text--primary">Équipe</span>
            <v-row justify=center justify-md=start>
                <v-col v-for="(teammate, teammateIndex) in team" :key="teammateIndex" cols=10 sm=5 md=4 lg=3>
                    <v-card height="100%" width=250px class="mx-auto text-center">
                        <v-row justify="center">
                            <v-avatar color="secondary" size="128" class="mt-5" :src="teammate.picture"></v-avatar>
                        </v-row>
                        <v-card-title><v-col>{{teammate.name}}</v-col></v-card-title> <!-- Seems like a bug. The Name should be at the center. -->

                        <v-card-subtitle>{{teammate.title}}</v-card-subtitle>

                        <v-card-text>{{teammate.description}}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
    </v-col>
</template>

<script>
export default {
  name: "about",
  components: {},
  data() {
    return {
      team: [
        {
          name: "Pascal",
          picture: "",
          title: "Créateur du Quart de nuit",
          description:
            ""
        },
        {
          name: "Karl-Étienne",
          title: "Développeur web & bénévole",
          description: "Créateur du site web. Bénévole depuis le début. Ne dort pas beaucoup."
        },
        {
          name: "Stephen",
          title: "Développeur web & bénévole",
          description: "Aide avec le site web. Bénévole depuis le début."
        },
        {
          name: "Nicolas",
          title: "Développeur web",
          description: "Maître de l'esthétique du site."
        },
        {
          name: "Simon",
          title: "Bénévole",
          description: "Aide depuis Quart de nuit 3. Épicerie du Quart de nuit."
        },
        {
          name: "Lianne",
          title: "Bénévole",
          description: "Aide depuis Quart de nuit 4. Épicerie du Quart de nuit."
        },
        {
          name: "Ayman",
          title: "Bénévole",
          description: "Bénévole depuis le début. Très très enthousiaste."
        },
        {
          name: "Kevin",
          title: "Bénévole",
          description: "Aide depuis le début."
        },
        {
          name: "Alex",
          title: "Bénévole",
          description: "Aide depuis le début. Dort encore moins que Karl-Étienne."
        },
        {
          name: "Étienne",
          title: "Bénévole",
          description: "Bénévole depuis le début. Fait de la musique!"
        },
        {
          name: "Arnaud",
          title: "Bénévole",
          description: "Bénévole depuis le début. Oublie de s'occuper de son tournoi."
        },
        {
          name: "Leon",
          title: "Créateur du logo du LAN",
          description: "Fais des caméléons photo-réaliste à la mine."
        },
        {
          name: "Sacha",
          title: "Photographe",
          description: "Prends de très jolies photos."
        },
      ]
    };
  }
};
</script>