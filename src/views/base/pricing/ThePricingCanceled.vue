<template>
    <v-col>
        <v-row>
            <v-col align=center justify=center>
                <h1 class="display-3 primary--text">Oopsie doopsie!</h1>
            </v-col>
        </v-row>
        <div class="title">Introduction</div>

        <p>La transaction ne semble pas avoir fonctionné!</p>

        <p>Tu as peut-être :</p>
        <ul>
            <li>interrompu l’achat;</li>
            <li>cliqué sur la flèche retour de ton navigateur;</li>
            <li>ou c’est simplement un problème de notre part!</li>
        </ul>
        <p>Si c’est la dernière option ou si tu as un problème qui demande notre aide, contacte-nous à quartdenuitmtl@gmail.com</p>

        <v-row>
            <v-col align=center justify=center>
                <h1 class="display-3 primary--text"><br>Privacy Policy</h1>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
  name: "pricing-canceled",
};
</script>