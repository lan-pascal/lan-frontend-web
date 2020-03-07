<template>
    <v-col>
        <v-row align=center class="fullscreen">
            <v-col class="pr-12" cols=12 md=8>
                <div class="display-3">Billets</div>
                <div class="headline">Ici, vous avez la possibilité d'acheter votre billet pour le Quart de nuit V ainsi que consulter les tarifs pour le bar.
                    <p><br>Où : Au Collège de Maisonneuve dans la salle Vivoir (3800 boul. Pie-IX, Montréal) (proche de station Pie-IX)<br>
                        Combien : 20,00 $ pour les 50 premiers billets vendus. Ensuite, le prix monte à 25,00 $!<br>
                        Quand? : le jeudi 9 avril 2020 de 20h00 à 3h00 (à noter qu'il y aura fermeture des portes à 22h00) (aussi noter que le vendredi et lundis sont fériés pour Pâques)<br>
                        Quoi? : voir la page d'accueil pour ces informations.
              
            </p>
            <p><br>Voici les tarifs pour le bar.
            </p></div>
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

                                <v-card-actions class="justify-center"><v-btn class="primary">Acheter</v-btn></v-card-actions>
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