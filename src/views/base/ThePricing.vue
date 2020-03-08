<template>
  <v-col>
    <v-row align="center" justify="center">
      <v-col class="pr-12" cols="12" md="4">
        <div class="display-3 text-md-end text-center">
          Billeterie
          <v-icon size="45px">mdi-ticket</v-icon>
        </div>
      </v-col>
      <v-col align-self="center" cols="12" sm="7" md="5" lg="4" xl="3">
        <v-card flat width="100%" height="120%">
          <v-card-title>Quart de nuit V</v-card-title>
          <v-card-subtitle>
            <div>Collège de Maisonneuve</div>
            <div>
              <i>Jeudi 9 avril 2020, 20h à 3h (Vendredi et Lundi fériés)</i>
            </div>
            <div>
              <strong>
                <i>Fermeture des portes à 22h</i>
              </strong>
            </div>
          </v-card-subtitle>

          <v-card-text class="text-center">
            <div>
              <span class="display-1 primary--text">
                <strike>$24</strike>
              </span>.99
              <span class="display-1 pl-3 secondary--text">$19</span>.99
              <i>par billet</i>
            </div>
            <div>
              <u>pour les 50 premiers billets vendus</u>
            </div>
          </v-card-text>

          <v-divider />
          <v-card-text>
            <v-form
            v-model="ticket.valid">
            <v-row align="center" justify="center">
              <v-col cols="6">
                Billet d'entrée générale
                <v-text-field
                  v-model.number="ticket.quantity"
                  class="text-right"
                  label="Nombre de billets"
                  type="number"
                  :rules="[rules.maximum]"
                  min="1"
                  max="3"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md=4>
                <v-btn :disabled="!ticket.valid" class="primary" @click="checkout">Acheter!</v-btn>
              </v-col>
            </v-row>
            </v-form>
          </v-card-text>
        </v-card>
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
            <v-card light flat height="100%" width="250px" class="secondary darken-1">
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
        <v-col align-self="center" cols="12" sm="4" md="3" lg="2">
          <span class="headline">Mode de paiement accepté</span>
        </v-col>
        <v-col v-for="(icon,iconIndex) in payIcons" cols="2" md="1" :key="iconIndex" align="center">
          <v-img :src="icon.src" aspect-ratio="1" width=40px max-height="40px" min-height="20px" />
        </v-col>
      </v-row>
    </v-row>
  </v-col>
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
import {loadStripe} from '@stripe/stripe-js';

export default {
  name: "pricing",
  data() {
    return {
      test: process.env.STRIPE_PK ,
      ticket : {
        valid: true,
        sku: 'sku_GrrvrUDqX5KavF',
        quantity: 1,
      },
      rules: {
        maximum: value => {
          return (
            (value <= 3) & (value > 0) || "Maximum de 3 billets par personne"
          );
        }
      },

      payIcons: [
        { src: require("../../assets/media/vector/coin-vector.svg") },
        { src: require("../../assets/media/vector/cc-vector.svg") },
        { src: require("../../assets/media/vector/gpay-vector.svg") },
        { src: require("../../assets/media/vector/apay-vector.svg") },
        { src: require("../../assets/media/vector/interac-vector.svg") },
        { src: require("../../assets/media/vector/pp-vector.svg") }
      ]
    };
  },
  async mounted(){
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