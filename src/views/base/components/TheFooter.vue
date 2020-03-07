<template>
    <v-footer padless>
            <v-card
            flat
            tile
            class="text-center"
            width=100%
            >
                <v-card-text>
                    <v-btn
                    v-for="media in medias"
                    :key="media.link"
                    :href="media.link"
                    target="_blank"
                    class="mx-4"
                    icon
                    >
                        <v-icon size="24px">{{ media.icon }}</v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-text class="pt-0">
                    <v-btn
                        v-for="link in links"
                        :key="link.route"
                        text
                        x-small
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
        medias: [
            {icon: "mdi-email", link: "mailto:quartdenuitmtl@gmail.com"},
            {icon: "mdi-instagram", link: "https://www.instagram.com/quartdenuit/"},
            {icon: "mdi-twitter", link: "https://twitter.com/quartdenuit"},
            {icon: "mdi-facebook", link: "facebook"}
        ],
        links:  [
            {name: "Conditions d'utilisation", route: "terms_of_use"},
            {name: "Politique de confidentialité", route: "privacy_policy"}
        ]
  })
};
</script>

<style>
</style>
