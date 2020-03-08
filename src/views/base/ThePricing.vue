<template>
<div class="width">
    <v-row align=center>
        <v-col class="pr-12" cols=12>
            <h1 class="display-3 ma-5 primary--text" align="center">Billets</h1>
        </v-col>
    </v-row>
    
    <v-row>
        <v-col>
            <v-row justify=center align=center>
                <v-col cols=10 sm=5 md=4 lg=3>
                    <v-card width=250px height="410">
                            <v-card-title class="justify-center pt-10 pb-0"><h2 align="center"><div style="z-index: 4;">Quart de Nuit</div><div class="primary--text qdn-behind">V</div></h2></v-card-title> <!-- Seems like a bug. The Name should be at the center. -->
                            <v-card-text class="py-0 white--text posfix" align="center"><i>Early Bird</i><br>50 premiers billets</v-card-text>
                            <v-card-text><span class="display-1">$ 20</span>.<span class="body">00</span></v-card-text> <!-- Seems like a bug. The Name should be at the center. -->
                            <v-divider/>
                            <v-card-text><v-text-field class="text-right" suffix="x" label="Nombre de billets" placeholder=2 :rules="[rules.number, rules.maximum]" width=30px height=30px></v-text-field>Billet d'entrée générale</v-card-text>
                            <v-card-actions class="justify-center pb-6"><v-btn class="primary">Acheter</v-btn></v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols=10 sm=5 md=4 lg=3>
                    <v-card width=250px height="410" disabled>
                            <v-card-title class="justify-center pt-10 pb-0"><h2 align="center"><div style="z-index: 4;">Quart de Nuit</div><div class="primary--text qdn-behind">V</div></h2></v-card-title> <!-- Seems like a bug. The Name should be at the center. -->
                            <v-card-text class="py-0 white--text posfix mb-5" align="center"><i>Régulier</i></v-card-text>
                            <v-card-text><span class="display-1">$ 25</span>.<span class="body">00</span></v-card-text> <!-- Seems like a bug. The Name should be at the center. -->
                            <v-divider/>
                            <v-card-text><v-text-field class="text-right" suffix="x" label="Nombre de billets" placeholder=2 :rules="[rules.number, rules.maximum]" width=30px height=30px></v-text-field>Billet d'entrée générale</v-card-text>
                            <v-card-actions class="justify-center pb-6"><v-btn class="primary">Acheter</v-btn></v-card-actions>
                    </v-card>
                </v-col>
                
            </v-row>
            <div>
                <p><br>
                    <b>Où :</b> Au Collège de Maisonneuve dans la salle Vivoir (3800 boul. Pie-IX, Montréal) (proche de station Pie-IX)<br>
                    <b>Quand? :</b> Le jeudi 9 avril 2020 de 20h00 à 3h00 (à noter qu'il y aura fermeture des portes à 22h00) (aussi noter que le vendredi et lundis sont fériés pour Pâques)<br>
                    <b>Quoi? :</b> Voir la <a href="/">page d'accueil</a> pour ces informations.
          
        </p></div>
        </v-col>
    </v-row>
    <v-row
    class=""
    justify="center">
      <v-card
      color="black"
      class="ma-2 pa-2">
        <v-row
        justify="center"
        class="ma-5">
            <h1 class="display-3 primary--text">TARIFS</h1>
        </v-row>
        <v-row
        v-for="item in price"
        :key="item">
            <v-col cols=2
            class="text-center">
              <v-icon x-large>{{item.icon}}</v-icon>
            </v-col>
            <v-col
            :cols="item.cols">
              <h2>{{item.name}}</h2>
            </v-col>
            <v-col
            class="text-right">
              <h3 class="primary--text mr-5">{{item.cost}}</h3>
            </v-col>
            <v-col cols=12>
              <ul>
              <li
              v-for="drink in item.array"
              :key="drink">{{drink}}</li>
              </ul>
            </v-col>
            <v-col cols=12>
              <h3 class="text-center">{{item.extra}}</h3>
            </v-col>
        </v-row>
        <v-row>
          <v-col
          v-for="icon in payicon"
          :key="icon"
          cols="4"
          align="center">
            <v-img
          :src="icon.src"
          width="45"></v-img>
          </v-col>
          
        </v-row>
      </v-card>
    </v-row>
</div>
    
</template>

<style lang="scss">
.posfix {
    position: relative;
    top: -15px;
}
.front {
    z-index: 3;
}
.qdn-behind{
    font-size: 70px;
    position: relative;
    z-index: 1;
    top: -30px;
}
</style>

<script>
export default {
  name: "pricing",
  data(){
      return {
           price: [
        {name: "Boisson", icon:"mdi-glass-cocktail", cost:"1 pour 3$ | 2 pour 5$", array: [ "Corona Extra","Coors Light","Stella Artois", "Pepito Sangria", "Palm Bay", "Shot de vodka", "Shot de Tequila"], extra:"Les shots sont aussi offerts à 10 pour 20$", cols:"4"},
        {name: "Boisson sans alcool", icon:"mdi-bottle-soda-classic", array:["Coca-Cola", "Sprite",  "Thé Glacé",  "Fruitopia",  "Eau pétillante"], cost:"2$", extra:"Eau offerte gratuitement sur place", cols:"7"},
      ],
          rules: {
              number: value => isFinite(value) || "Ceci n'est pas un chiffre valide",
              maximum: value => (value <= 3 & value > 0) || "Maximum de 3 billets par personne",
          }
      }
  }
};
</script>