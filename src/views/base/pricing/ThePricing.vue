<template>
  <div class="width">
    
    <v-row align=center>
        <v-col class="" cols=12>
          <v-row class="display-3 text-md-end justify-center">
          Billeterie
          <v-icon class="pl-3" size="45px">mdi-ticket</v-icon>
        </v-row>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <v-row justify="center" align=center>
                <v-col class="scrolling-wrapper justify-md-center align-center">
                  <v-card width=250px height=415 class="mx-4">
                            <v-col class="pa-7"><QdnTitleSVG width="200"/></v-col>
                            
                            <v-card-text class="py-0 white--text posfix" align="center"><i>Early Bird</i><br>50 premiers billets</v-card-text>
                            <v-card-text><span class="display-1">$ 20</span>.<span class="body">00</span></v-card-text> <!-- Seems like a bug. The Name should be at the center. -->
                            <v-divider/>
                            <v-form v-model="tickets[0].valid">
                              <v-card-text><v-text-field class="text-right" suffix="x" label="Nombre de billets" placeholder=2 :rules="[rules.number, rules.maximum]" width=30px height=30px></v-text-field>Billet d'entrée générale</v-card-text>
                              <v-card-actions class="justify-center pb-6"><v-btn :disabled="!tickets[0].valid" class="secondary">Acheter</v-btn></v-card-actions>
                            </v-form>
                    </v-card>
                
                
                    <v-card width=250px height=415 class="mr-6" disabled>
                            <v-col class="pa-7"><QdnTitleSVG width="200"/></v-col>
                            
                            <v-card-text class="py-0 white--text posfix pb-5" align="center"><i>Régulier</i><br></v-card-text>
                            <v-card-text><span class="display-1">$ 25</span>.<span class="body">00</span></v-card-text> <!-- Seems like a bug. The Name should be at the center. -->
                            <v-divider/>
                            <v-form v-model="tickets[1].valid">
                              <v-card-text><v-text-field class="text-right" suffix="x" label="Nombre de billets" placeholder=2 :rules="[rules.number, rules.maximum]" width=30px height=30px></v-text-field>Billet d'entrée générale</v-card-text>
                              <v-card-actions class="justify-center pb-6"><v-btn :disabled="!tickets[1].valid" class="secondary">Acheter</v-btn></v-card-actions>
                            </v-form>
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

    <v-divider />

    <v-row>
      <v-col>
        <v-row>
          <v-col align="center" justify="center">
            <h1 class="display-3">
              Bar
              <v-icon size="45px">mdi-glass-cocktail</v-icon>
            </h1>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center">
          <v-col cols="6" sm="4" md="3" lg="2">
            <v-card light flat height="100%" width="250px" class="accent">
              <v-card-title>Alcool</v-card-title>
              <v-card-subtitle>
                <div>1 pour 3.99$</div>
                <div>2 pour 6.99$</div>
                <div>10 shot pour 24.99$</div>
              </v-card-subtitle>

              <v-card-text>
                <ul>
                  <li>Corona Extra</li>
                  <li>Coors Light</li>
                  <li>Stella Artois</li>
                  <li>Pepito Sangria</li>
                  <li>Palm Bay</li>
                  <li>Shot de vodka</li>
                  <li>Shot de Tequila</li>
                </ul>
              </v-card-text>

              <v-card-text></v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6" sm="4" md="3" lg="2">
            <v-card flat height="100%" width="250px" class="transparent">
              <v-card-title>Sans Alcool</v-card-title>

              <v-card-subtitle class>2.50$</v-card-subtitle>

              <v-card-text>
                Eau offerte sur place
                <ul>
                  <li>Coca-Cola</li>
                  <li>Sprite</li>
                  <li>Thé Glacé</li>
                  <li>Fruitopia</li>
                  <li>Eau pétillante</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-row no-gutters justify="center">
        <v-col v-for="(icon,iconIndex) in payIcons" cols="2" md="1" :key="iconIndex" align="center">
          <inline-svg :src="icon.src" width=40px height="40px"/>
        </v-col>
      </v-row>
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
.scrolling-wrapper {
  -webkit-overflow-scrolling: touch;
  display:flex;
  flex-wrap: nowrap;
  overflow-x:auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .card {
    flex: 0 0 auto;
  }
}
</style>

<script>
import QdnTitleSVG from "@/assets/logo/qdn-logo-vector.svg?inline"
import {loadStripe} from '@stripe/stripe-js';

export default {
  name: "pricing",
  components: {
    QdnTitleSVG,
  },
  data() {
    return {
      test: process.env.VUE_APP_STRIPE_PK ,
      tickets : [
        {
          valid: true,
          sku: 'sku_GrrvrUDqX5KavF',
          quantity: 1,
        },
        {
          valid: true,
          sku: 'sku_GrrvrUDqX5KavF',
          quantity: 1,
        }
      ],
      rules: {
        maximum: value => {
          return (
            (value <= 3) & (value > 0) || "Maximum de 3 billets par personne"
          );
        }
      },

      payIcons: [
        { src: require("@/assets/media/vector/coin-vector.svg") },
        { src: require("@/assets/media/vector/cc-vector.svg") },
        { src: require("@/assets/media/vector/gpay-vector.svg") },
        { src: require("@/assets/media/vector/apay-vector.svg") },
        { src: require("@/assets/media/vector/interac-vector.svg") },
        { src: require("@/assets/media/vector/pp-vector.svg") }
      ]
    };
  },
  async created(){
    this.stripe = await loadStripe("pk_test_Ayf3gYC9NwjtEyeZbbxtB4Ne00TTnLWJk4");
  },
  methods: {
    checkout() {
      
      this.stripe.redirectToCheckout({
      items: [{sku: this.ticket.sku, quantity: this.ticket.quantity}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: window.location.protocol + '//quartdenuit.com/success',
      cancelUrl: window.location.protocol + '//quartdenuit.com/canceled',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  },
  },
};
</script>