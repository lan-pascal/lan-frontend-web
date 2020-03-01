<template>
    <v-col>
        <v-row class="my-3">
            <v-col align=center justify=center>
                <span class="display-3 accent--text">FAQ</span>
            </v-col>
        </v-row>
        <v-row>
            <v-expansion-panels multiple hover accordion flat>
                <v-expansion-panel v-for="(faq, faqIndex) in faqs" :key="faqIndex" class="transparent">
                    <v-expansion-panel-header><h3>{{faq.question}}</h3></v-expansion-panel-header>
                    <v-expansion-panel-content>{{faq.answer}}</v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
    </v-col>
</template>

<script>
export default {
  name: "faq",
  components: {},
  data() {
    return {
      faqs: [
        {
          question: "Où sont les informations sur le prochain LAN?",
          answer: "Clique ici."
        },
        {
          question: "Je veux aider avec le LAN, comment faire?",
          answer:
            "Cool! Contacte-nous ici. Peu importe ce que tu sais faire, on est veut connaître ton intérêt! Souvent aussi, on cherche du matériel, donc tu peux nous faire part de ce que tu as (surtout en matière jeux vidéo, jeux de société)"
        },
        {
          question:
            "J’ai des suggestions pour le prochain LAN/le futur du LAN. Comment les partager?",
          answer: "Super! Vas ici pour nous en faire part."
        },
        {
          question: "Je ne comprends pas trop c’est quoi le LAN.",
          answer:
            "Le LAN c'est une soirée que tu passes avec tes amis à faire ce que tu as le goût dans toutes les activités offertes (voir liste ci-bas)! Tu es libre d'aller jouer à ce que tu veux et quand tu veux. Tes même pas obligé de jouer, plusieurs viennent simplement socialiser. C'est aussi l'occasion parfaite pour rencontrer plein de nouveau monde. Et si tu penses que c'est pas pour toi parce que tes pas nerd, tu peux pas avoir moins raison, on y trouve de tous les goûts : jeux de sociétés, jeux vidéo accessibles (Just Dance, Dance Dance Revolution, Guitar Hero, etc.), karaoke & plus!"
        },
        {
          question: "C’est où que j’achète mon billet?",
          answer: "Clique ici."
        },
        {
          question: "Quelle méthode de paiement acceptez-vous?",
          answer: "On accepte […]"
        },
        {
          question: "Puis-je me faire rembourser une fois mon billet acheté?",
          answer:
            "Normalement, toute vente est finale. Mais on est des humains et on comprend que ça arrive des empêchement dernière minute. Si tu crois que tu as une bonne raison pour te faire rembourser (garde en tête qu’on roule pas sur l’or et que donc nos option sont limitées), contacte-nous ici"
        },
        {
          question: "Acceptez-vous les dons?",
          answer: "De l’argent???? Oui!! Clique ici (xoxoxoxo)."
        },
        {
          question: "Avez-vous l’histoire des LANs?",
          answer: "Certainement, clique ici!"
        },
        {
          question: "Puis-je acheter un billet sur place?",
          answer:
            "Malheureusement, à cause des complications que cela engendrerait non. Mais il est possible, qu’ils restent des billets. Si c’est le cas, ce sera indiqué sur le site et les médias sociaux."
        },
        {
          question: "Comment rester au courant avec le LAN?",
          answer:
            "Tu peux t’abonner à notre info-lettre ici ou nous suivre sur les diverse plateformes que nous avons ici. Le site web est aussi souvent mis-à-jour, donc reviens de temps en temps!"
        },
        {
          question: "Comment s’inscrire aux tournois?",
          answer: "Quand tu achètes ton billet, l’option se présente à toi."
        },
        {
          question:
            "J’ai déjà acheté mon billet, puis-je tout de même m’ajouter à un tournoi?",
          answer: "Ça dépend des disponibilités. Contacte-nous ici."
        },
        {
          question:
            "Puis-je apporter mon ordinateur, ma console de jeu et/ou des jeux de société ?",
          answer:
            "Tu peux apporter ton ordinateur portable sans problème (par contre, tu en es responsable). Pour les ordinateurs « tours », il faut que tu vérifies avec nous avant en nous contactant ici et c’est toi qui  s’occupe d’apporter ton écran, clavier, souris, etc. Pour les consoles de jeu, ça dépend la disponibilité des télévisions, contacte-nous ici. Bien sûr les consoles de jeu portables sont les bienvenues! Pour les jeux de société, pas de problème!"
        },
        {
          question: "Puis-je apporter mon alcool et/ou ma nourriture?",
          answer:
            "Ça dépend de LAN en LAN (notamment de la personne qui nous loue la salle). Clique ici pour savoir pour le prochain LAN."
        }
      ],
      team: [
        {
          name: "Pascal",
          title: "Créateur du LAN",
          description:
            "Passionné des jeux vidéo. Adore voir les gens s’amuser au LAN. Grumpy quand il a faim/a pas assez dormi. Parle à la 3e personne."
        },
        {
          name: "Karl-Étienne",
          title: "Fondateur du site web",
          description:
            " N’a jamais manqué de LAN."
        },
        {
          name: "Simon",
          title: "Bras-droit du LAN",
          description:
            "Toujours là quand shit hits the fan. Premier LAN : LAN #3."
        },
        {
          name: "Stephen",
          title: "Aide avec le site web/Bénévole dès le début",
          description:
            "N’a jamais manqué de LAN."
        },
        {
          name: "Kevin",
          title: "Bénévole dès le début",
          description: "N’a jamais manqué de LAN."
        },
        {
          name: "Alex",
          title: "Bénévole dès le début",
          description: "N’a jamais manqué de LAN."
        },
        {
          name: "Étienne",
          title: "Bénévole dès le début",
          description: "N’a jamais manqué de LAN."
        },
        {
          name: "Ayman",
          title: "Bénévole dès le début",
          description: "N’a jamais manqué de LAN."
        },
        {
          name: "Arnaud",
          title: "Bénévole dès le début",
          description: "N’a jamais manqué de LAN."
        },
        {
          name: "Lianne",
          title: "Bénévole",
          description: "Premier LAN : LAN #4."
        },
        {
          name: "Soulaha",
          title: "Bénévole",
          description: "Premier LAN : LAN #4."
        },
        {
          name: "Léon",
          title: "Créateur du logo du LAN",
          description: "Créateur du logo du LAN."
        },
        {
          name: "Sacha",
          title: "Photographe officiel du LAN",
          description: "Premier LAN : LAN #4."
        },
        {
          name: "Sami",
          title: "Magicien officiel du LAN",
          description: "Premier LAN : LAN #3."
        }
      ]
    };
  }
};
</script>