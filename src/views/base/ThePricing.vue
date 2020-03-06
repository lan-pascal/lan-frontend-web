<template>
    <v-col>
        <v-row align=center class="fullscreen">
            <v-col class="pr-12" cols=12 md=8>
                <div class="display-3">Billets</div>
                <div class="headline"><i>Nous vous présentons les nombreuses options disponibles afin d'assister à l'événement Quart de Nuit.</i></div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="display-1 align-center">Billets disponibles</div>
                <v-row justify=center align=center>
                    <v-col cols=10 sm=5 md=4 lg=3>
                        <v-card width=200px height=120%>
                                <v-card-title>Quart de nuit 2020</v-card-title> <!-- Seems like a bug. The Name should be at the center. -->
                                
                                <v-card-text><span class="display-1">$ 25</span>.<span class="body">00</span></v-card-text> <!-- Seems like a bug. The Name should be at the center. -->
                                <v-divider/>
                                <v-card-text><v-text-field class="text-right" suffix="x" label="Nombre de billets" placeholder=2 :rules="[rules.number, rules.maximum]" width=30px height=30px></v-text-field>Billet d'entrée générale</v-card-text>

                                <v-card-actions class="justify-center"><v-btn class="accent">Acheter</v-btn></v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
  name: "pricing",
  data(){
      return {
          rules: {
              number: value => isFinite(value) || "Ceci n'est pas un chiffre valide",
              maximum: value => (value <= 3 & value > 0) || "Maximum de 3 billets par personne",
          }
      }
  }
};
</script>