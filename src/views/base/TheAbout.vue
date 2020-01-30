<template>
  <div class="about">
    <v-layout column>
      <v-flex>
        <v-sheet height="400px" color="secondary">
          <v-layout row align-center justify-center fill-height>
            <v-flex class="display-4 text-xs-center">À Propos</v-flex>
          </v-layout>
        </v-sheet>
      </v-flex>
      <v-flex>
        <span class="pa-5 d-block headline">Foire aux questions</span>
        <v-expansion-panels accordion multiple>
          <v-expansion-panel v-for="(faq, faqIndex) in faqs" :key="faqIndex">
            <v-expansion-panel-header>{{faq.question}}</v-expansion-panel-header>
            <v-expansion-panel-content>{{faq.answer}}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
      <v-flex>
        <span class="pa-5 d-block headline">Équipe</span>
        <v-list>
          <v-list-item two-line v-for="(teammate, teammateIndex) in team" :key="teammateIndex">
            <v-list-item-content class="pa-3">
              <v-list-item-title>{{teammate.name}}</v-list-item-title>
              <v-list-item-subtitle>{{teammate.description}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "About",
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
          description:
            "Créateur du LAN. Passionné des jeux vidéo. Adore voir les gens s’amuser au LAN. Grumpy quand il a faim/a pas assez dormi. Parle à la 3e personne."
        },
        {
          name: "Karl-Étienne",
          description:
            "Fondateur du site web. Bénévole dès le début. N’a jamais manqué de LAN."
        },
        {
          name: "Simon",
          description:
            "Bras-droit du LAN. Toujours là quand shit hits the fan. Premier LAN : LAN #3."
        },
        {
          name: "Stephen",
          description:
            "Aide avec le site web. Bénévole dès le début. N’a jamais manqué de LAN."
        },
        {
          name: "Kevin",
          description: "Bénévole dès le début. N’a jamais manqué de LAN."
        },
        {
          name: "Alex",
          description: "Bénévole dès le début. N’a jamais manqué de LAN."
        },
        {
          name: "Étienne",
          description: "Bénévole dès le début. N’a jamais manqué de LAN."
        },
        {
          name: "Ayman",
          description: "Bénévole dès le début. N’a jamais manqué de LAN."
        },
        {
          name: "Arnaud",
          description: "Bénévole dès le début. N’a jamais manqué de LAN."
        },
        {
          name: "Lianne",
          description: "Bénévole. Premier LAN : LAN #4."
        },
        {
          name: "Soulaha",
          description: "Bénévole. Premier LAN : LAN #4."
        },
        {
          name: "Léon",
          description: "Créateur du logo du LAN."
        },
        {
          name: "Sacha",
          description: "Photographe officiel du LAN. Premier LAN : LAN #4."
        },
        {
          name: "Sami",
          description: "Magicien officiel du LAN. Premier LAN : LAN #3."
        }
      ]
    };
  }
};
</script>