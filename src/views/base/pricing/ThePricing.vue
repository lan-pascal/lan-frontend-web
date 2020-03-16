<template>
  <div class="width">
    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab v-for="sec in sections" :key="sec.name" class="display-2">
        {{ sec.name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="transparent">
      <!--Billeterie-->
      <v-tab-item>
        <v-row>
          <v-col>
            <v-row justify="center" align="center">
              <v-col class="scrolling-wrapper justify-md-center align-center">
                <v-card width="250px" height="435" class="mx-4" disabled>
                  <v-col class="pa-7">
                    <QdnTitleSVG width="200" />
                  </v-col>

                  <v-card-text class="py-0 white--text posfix" align="center">
                    <i>Early Bird</i>
                    <br />50 premiers billets
                  </v-card-text>
                  <v-card-text>
                    <span class="display-1">$ 20</span>.
                    <span class="body">00</span>
                  </v-card-text>
                  <!-- Seems like a bug. The Name should be at the center. -->
                  <v-divider />
                  <v-form v-model="tickets[0].valid">
                    <v-card-text align="center">
                      <v-text-field
                        class="text-right"
                        suffix="x"
                        label="Nombre de billets"
                        placeholder="2"
                        :rules="[rules.number, rules.maximum]"
                        width="30px"
                        height="30px"
                      ></v-text-field>Billet d'entrée générale
                    </v-card-text>
                    <v-card-actions class="justify-center pb-6">
                      <v-btn :disabled="!tickets[0].valid" class="secondary">Acheter</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>

                <v-card width="250px" height="435" class="mr-6" disabled>
                  <v-col class="pa-7">
                    <QdnTitleSVG width="200" />
                  </v-col>

                  <v-card-text class="py-0 white--text posfix pb-5" align="center">
                    <i>Régulier</i>
                    <br />
                  </v-card-text>
                  <v-card-text>
                    <span class="display-1">$ 25</span>.
                    <span class="body">00</span>
                  </v-card-text>
                  <!-- Seems like a bug. The Name should be at the center. -->
                  <v-divider />
                  <v-form v-model="tickets[1].valid">
                    <v-card-text align="center">
                      <v-text-field
                        class="text-right"
                        suffix="x"
                        label="Nombre de billets"
                        placeholder="2"
                        :rules="[rules.number, rules.maximum]"
                        width="30px"
                        height="30px"
                      ></v-text-field>Billet d'entrée générale
                    </v-card-text>
                    <v-card-actions class="justify-center pb-6">
                      <v-btn :disabled="!tickets[1].valid" class="secondary">Acheter</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-col>
            </v-row>
            <div>
                <p> 
                  <b>Où :</b> <span class="title error--text"> Information inconnue dù aux circonstances présentes</span> 
                </p>
                <p>
                  <b>Quand? :</b> <span class="title error--text"> Information inconnue dù aux circonstances présentes</span>
                </p>
                <p>
                  <b>Quoi? : </b> <span class="title error--text"> Information inconnue dù aux circonstances présentes</span>
                </p>
            </div>
          </v-col>
        </v-row>
      </v-tab-item>

      <!--Bar-->
      <v-tab-item>
        <v-row justify=center>
          <div class="display-2 error--text">Information inconnue dù aux circonstances présentes</div>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
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
.qdn-behind {
  font-size: 70px;
  position: relative;
  z-index: 1;
  top: -30px;
}
.scrolling-wrapper {
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .card {
    flex: 0 0 auto;
  }
}
</style>

<script>
import QdnTitleSVG from "@/assets/logo/qdn-logo-vector.svg?inline";
import { loadStripe } from "@stripe/stripe-js";

export default {
  name: "pricing",
  components: {
    QdnTitleSVG
  },
  data() {
    return {
      tickets: [
        {
          valid: true,
          sku: "sku_GrrvrUDqX5KavF",
          quantity: 1
        },
        {
          valid: true,
          sku: "sku_GrrvrUDqX5KavF",
          quantity: 1
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
      ],

      sections: [
        {
          name: "Billeterie",
          icon: "mdi-ticket"
        },
        {
          name: "Bar",
          icon: "mdi-glass-cocktail"
        }
      ],

      tab: null
    };
  },
  async created() {
    this.stripe = await loadStripe(
      "pk_test_Ayf3gYC9NwjtEyeZbbxtB4Ne00TTnLWJk4"
    );
  },
  methods: {
    checkout() {
      this.stripe
        .redirectToCheckout({
          items: [{ sku: this.ticket.sku, quantity: this.ticket.quantity }],

          // Do not rely on the redirect to the successUrl for fulfilling
          // purchases, customers may not always reach the success_url after
          // a successful payment.
          // Instead use one of the strategies described in
          // https://stripe.com/docs/payments/checkout/fulfillment
          successUrl: window.location.protocol + "//quartdenuit.com/success",
          cancelUrl: window.location.protocol + "//quartdenuit.com/canceled"
        })
        .then(function(result) {
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer.
            var displayError = document.getElementById("error-message");
            displayError.textContent = result.error.message;
          }
        });
    }
  }
};
</script>