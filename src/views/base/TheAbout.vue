<template>
    <v-col>
        <v-row>
            <v-col align=center justify=center>
                <h1 class="display-3 accent--text">À Propos</h1>
            </v-col>
        </v-row>

        <v-row>
            <span class="pa-5 d-block text--accent">Équipe</span>
            <v-row>
                <v-col v-for="(teammate, teammateIndex) in team" :key="teammateIndex" sm="3">
                    <v-card width="250" height="100%" class="mx-auto text-center">
                        <v-row justify="center">
                            <v-avatar color="secondary" size="128" class="mt-2"></v-avatar>
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
          title: "Créateur du LAN",
          description:
            "Passionné des jeux vidéo. Adore voir les gens s’amuser au LAN. Grumpy quand il a faim/a pas assez dormi. Parle à la 3e personne."
        },
        {
          name: "Karl-Étienne",
          title: "Fondateur du site web",
          description: " N’a jamais manqué de LAN."
        },
        {
          name: "Simon",
          title: "Bras-droit du LAN",
          description:
            "Toujours là quand shit hits the fan. Premier LAN : LAN #3."
        },
        {
          name: "Stephen",
          title: "Aide avec le site web/Bénévole dès le début",
          description: "N’a jamais manqué de LAN."
        },
                {
          name: "Léon",
          title: "Créateur du logo du LAN",
          description: "Créateur du logo du LAN."
        },
        {
          name: "Sacha",
          title: "Photographe officiel du LAN",
          description: "Premier LAN : LAN #4."
        },
        {
          name: "Sami",
          title: "Magicien officiel du LAN",
          description: "Premier LAN : LAN #3."
        },
        {
          name: "Kevin",
          title: "Bénévole dès le début",
          description: "N’a jamais manqué de LAN."
        },
        {
          name: "Alex",
          title: "Bénévole dès le début",
          description: "N’a jamais manqué de LAN."
        },
        {
          name: "Étienne",
          title: "Bénévole dès le début",
          description: "N’a jamais manqué de LAN."
        },
        {
          name: "Ayman",
          title: "Bénévole dès le début",
          description: "N’a jamais manqué de LAN."
        },
        {
          name: "Arnaud",
          title: "Bénévole dès le début",
          description: "N’a jamais manqué de LAN."
        },
        {
          name: "Lianne",
          title: "Bénévole",
          description: "Premier LAN : LAN #4."
        },
        {
          name: "Soulaha",
          title: "Bénévole",
          description: "Premier LAN : LAN #4."
        },
      ]
    };
  }
};
</script>