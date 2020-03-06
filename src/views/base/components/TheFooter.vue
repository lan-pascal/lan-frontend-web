<template>
    <v-footer padless>
            <v-card
            flat
            tile
            class="text-center"
            width=100%
            >
        <v-col align=center no-gutters class="primary lighten-2">
            LAN © 2018 - 2020
        </v-col>

                <v-card-text class="pt-0">
                    <v-btn
                        v-for="link in links"
                        :key="link"
                        text
                        x-small
                        flat
                        :to="link.route"
                        class="my-2"
                    >
                        {{ link.name }}
                    </v-btn>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text>
                    {{ new Date().getFullYear() }} — <strong>Quart de nuit</strong>
                </v-card-text>
            </v-card>
    </v-footer>
</template>

<script>
export default {
  data: () => ({
  data: () => ({})
        links:  [
            {name: "Conditions d'utilisation", route: "terms_of_use"},
            {name: "Politique de confidentialité", route: "privacy_policy"}
        ]
  })
};
</script>

<style>
</style>
