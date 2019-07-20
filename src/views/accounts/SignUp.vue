<template>
  <v-layout row wrap fill-height>

    <v-flex 
    xs12 
    sm7
    fill-height
    >
      <v-layout 
      column 
      align-center 
      justify-center 
      fill-height 
      class="text-xs-center">
        <v-flex  grow-shrink-0 class="text-xs-center">
          <v-form 
          ref="form" 
          pa-3 
          mt-5>
              <v-flex grow-shrink-0>
                <div class="display-1 font-weight-black">Sign up</div>
                <div class="grey--text text--lighten-1" >With</div>
              </v-flex>

              <v-flex
              grow-shrink-0>
                <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-3 white--text"
                outline 
                fab 
                depressed>
                  <v-icon color="grey darken-4" size="24px">{{ icon }}</v-icon>
                </v-btn>
              </v-flex>

              <v-flex grow-shrink-0>
                <div class="grey--text text--lighten-1" >Or</div>
              </v-flex>

            <v-layout align-content-space-between>
              <v-flex>
                <v-text-field
                label="First Name"
                color="primary"
                required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                label="Last Name"
                color="primary"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-text-field
            label="Pseudo"
            color="primary"
            ></v-text-field>
            <v-text-field
            label="E-mail"
            color="primary"
            required
            ></v-text-field>

            <v-layout align-content-space-between>
              <v-flex>
                <v-text-field
                label="Password"
                color="primary"
                :type="'password'"
                required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                label="Confirm"
                color="primary"
                :type="'password'"
                required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-btn rounded outlined large color="secondary">Sign up</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex 
    xs12
    sm5 
    fill-height 
    class="primary">
      <v-layout 
      column 
      justify-center 
      align-center 
      fill-height 
      class="text-xs-center">
        <v-flex grow-shrink-0>
            <p class="display-1 font-weight-black mb-3">Logo</p>
            <p class="subheading">Enter your personal details and start journey with us</p>
            <v-btn rounded outlined large :to ="{name:'signin'}">Sign in</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>

  </v-layout>
</template>

<script>
export default {
  name: "Sign up",
  data() {
    return {
       icons: [
        'mdi-facebook',
        'mdi-github-circle',
        'mdi-google'
      ]
    };
  }
};
</script>

<style>
.v-text-field
{
  padding: 0px 15px 0px 15px
}
</style>