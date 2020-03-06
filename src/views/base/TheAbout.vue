<template>
    <v-col>
        <v-row>
            <v-col align=center justify=center>
                <h1 class="display-3 accent--text">À Propos</h1>
            </v-col>
        </v-row>

        <v-row>
            <span class="pa-5 d-block text--accent">Équipe</span>
            <v-row justify=center justify-md=start>
                <v-col v-for="(teammate, teammateIndex) in team" :key="teammateIndex" cols=10 sm=5 md=4 lg=3>
                    <v-card height="100%" class="mx-auto text-center">
                        <v-row justify="center">
                            <v-avatar color="secondary" size="128" class="mt-5"></v-avatar>
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
          name: "Kevin",
          title: "Bénévole",
          description: "Aide depuis Quart de nuit 1."
        },
        {
          name: "Alex",
          title: "Bénévole",
          description: "Aide depuis Quart de nuit 1. Dort encore moins que Karl-Étienne."
        },
        {
          name: "Étienne",
          title: "Bénévole",
          description: "Bénévole depuis Quart de nuit 1. Fait de la musique!"
        },
        {
          name: "Ayman",
          title: "Bénévole",
          description: "Bénévole depuis Quart de nuit 1. Très très enthousiaste."
        },
        {
          name: "Arnaud",
          title: "Bénévole",
          description: "Bénévole depuis Quart de nuit 1. Oublie de s'occuper de son tournoi."
        },
        {
          name: "Soulaha",
          title: "Bénévole",
          description: "Bénévole depuis Quart de nuit 1."
        },
        {
          name: "Leon",
          title: "Créateur du logo du LAN",
          description: "Fais des caméléons photo-réaliste à la mine."
        },
        {
          name: "Sacha",
          title: "Photographe",
          description: "Prends de jolis photos et fait des t-shirt."
        },
        {
          name: "Sami",
          title: "Magicien",
          description: "A offert deux tours de magie aux Quarts de nuit."
        },
      ]
    };
  }
};
</script>