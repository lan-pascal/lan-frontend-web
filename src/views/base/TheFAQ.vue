<template>
  <v-col>
    <v-row class="my-3">
      <v-col align="center" justify="center">
        <span class="display-3 accent--text">FAQ</span>
      </v-col>
    </v-row>

    <v-row>
      <v-card flat outlined class="outlined transparent ml-4" >
        <v-card-text>Filtres</v-card-text>
        <v-card-actions>
          <v-chip-group v-model="selection" column mandatory active-class="accent--text">
            <v-chip
              v-for="category in categories"
              :key="category"
              :value="category"
              filter
            >{{category}}</v-chip>
          </v-chip-group>
        </v-card-actions>
      </v-card>
    </v-row>

    <v-row>
      <v-expansion-panels multiple hover accordion flat>
        <v-expansion-panel
          v-for="(faq , faqIndex) in filteredFaqs"
          :key="faqIndex"
          class="transparent"
        >
          <v-expansion-panel-header>
            <div class="headline">{{faq.question}}</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pl-5">{{faq.answer}}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-col>
</template>

<style lang="scss" scoped>
.outlined{
  border: thin solid var(--v-secondary-base) !important;
}
</style>

<script>
//This class is a little bit nasty. Filters Option should be in another components Maybe I should describe categories first
export default {
  name: "faq",
  components: {},
  mounted() {
    //Find Categories
    this.faqs.forEach(f => {
      this.categories = this.categories.concat(
        f.categories.filter(i => this.categories.indexOf(i) == -1)
      );
    });
  },
  computed: {
    //FilteredFaqs based on option filters
    filteredFaqs() {
      if (this.selection === this.categories[0]) return this.faqs;

      return this.faqs.filter(f => f.categories.indexOf(this.selection) != -1);
    }
  },
  data() {
    return {
      categories: ["Tous"],
      selection: "Tous",
      faqs: [
        {
          categories: ["Populaire"],
          question: "Où sont les informations sur le prochain LAN?",
          answer: "Clique ici."
        },
        {
          categories: ["Populaire"],
          question: "Je veux aider avec le LAN, comment faire?",
          answer:
            "Cool! Contacte-nous ici. Peu importe ce que tu sais faire, on est veut connaître ton intérêt! Souvent aussi, on cherche du matériel, donc tu peux nous faire part de ce que tu as (surtout en matière jeux vidéo, jeux de société)"
        },
        {
          categories: ["Misc"],
          question:
            "J’ai des suggestions pour le prochain LAN/le futur du LAN. Comment les partager?",
          answer: "Super! Vas ici pour nous en faire part."
        },
        {
          categories: ["Misc"],
          question: "Je ne comprends pas trop c’est quoi le LAN.",
          answer:
            "Le LAN c'est une soirée que tu passes avec tes amis à faire ce que tu as le goût dans toutes les activités offertes (voir liste ci-bas)! Tu es libre d'aller jouer à ce que tu veux et quand tu veux. Tes même pas obligé de jouer, plusieurs viennent simplement socialiser. C'est aussi l'occasion parfaite pour rencontrer plein de nouveau monde. Et si tu penses que c'est pas pour toi parce que tes pas nerd, tu peux pas avoir moins raison, on y trouve de tous les goûts : jeux de sociétés, jeux vidéo accessibles (Just Dance, Dance Dance Revolution, Guitar Hero, etc.), karaoke & plus!"
        },
        {
          categories: ["Paiement"],
          question: "C’est où que j’achète mon billet?",
          answer: "Clique ici."
        },
        {
          categories: ["Populaire", "Paiement"],
          question: "Quelle méthode de paiement acceptez-vous?",
          answer: "On accepte […]"
        },
        {
          categories: ["Paiement"],
          question: "Puis-je me faire rembourser une fois mon billet acheté?",
          answer:
            "Normalement, toute vente est finale. Mais on est des humains et on comprend que ça arrive des empêchement dernière minute. Si tu crois que tu as une bonne raison pour te faire rembourser (garde en tête qu’on roule pas sur l’or et que donc nos option sont limitées), contacte-nous ici"
        },
        {
          categories: ["Populaire", "Misc"],
          question: "Acceptez-vous les dons?",
          answer: "De l’argent???? Oui!! Clique ici (xoxoxoxo)."
        },
        {
          categories: ["Misc"],
          question: "Avez-vous l’histoire des LANs?",
          answer: "Certainement, clique ici!"
        },
        {
          categories: ["Paiement"],
          question: "Puis-je acheter un billet sur place?",
          answer:
            "Malheureusement, à cause des complications que cela engendrerait non. Mais il est possible, qu’ils restent des billets. Si c’est le cas, ce sera indiqué sur le site et les médias sociaux."
        },
        {
          categories: ["Information"],
          question: "Comment rester au courant avec le LAN?",
          answer:
            "Tu peux t’abonner à notre info-lettre ici ou nous suivre sur les diverse plateformes que nous avons ici. Le site web est aussi souvent mis-à-jour, donc reviens de temps en temps!"
        },
        {
          categories: ["Misc"],
          question: "Comment s’inscrire aux tournois?",
          answer: "Quand tu achètes ton billet, l’option se présente à toi."
        },
        {
          categories: ["Tournoi"],
          question:
            "J’ai déjà acheté mon billet, puis-je tout de même m’ajouter à un tournoi?",
          answer: "Ça dépend des disponibilités. Contacte-nous ici."
        },
        {
          categories: ["Misc"],
          question:
            "Puis-je apporter mon ordinateur, ma console de jeu et/ou des jeux de société ?",
          answer:
            "Tu peux apporter ton ordinateur portable sans problème (par contre, tu en es responsable). Pour les ordinateurs « tours », il faut que tu vérifies avec nous avant en nous contactant ici et c’est toi qui  s’occupe d’apporter ton écran, clavier, souris, etc. Pour les consoles de jeu, ça dépend la disponibilité des télévisions, contacte-nous ici. Bien sûr les consoles de jeu portables sont les bienvenues! Pour les jeux de société, pas de problème!"
        },
        {
          categories: ["Misc"],
          question: "Puis-je apporter mon alcool et/ou ma nourriture?",
          answer:
            "Ça dépend de LAN en LAN (notamment de la personne qui nous loue la salle). Clique ici pour savoir pour le prochain LAN."
        }
      ]
    };
  }
};
</script>