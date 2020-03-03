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
          categories: ["Aide"],
          question: "Où sont les informations sur le prochain Quart de nuit?",
          answer: "Clique ici."
        },
        {
          categories: ["Aide"],
          question: "Je ne comprends pas trop c’est quoi le Quart de nuit.",
          answer:
            "Le Quart de nuit c'est une soirée que tu passes avec tes amis à faire ce que tu as le goût dans toutes les activités offertes (clique ici pour la liste des activités)! Tu es libre d'aller jouer à ce que tu veux et quand tu veux. Tu n'es même pas obligé de jouer, plusieurs viennent simplement socialiser. C'est aussi l'occasion parfaite pour rencontrer plein de nouveau monde. Et si tu penses que c'est pas pour toi parce que tes pas nerd ou geek, tu peux pas avoir moins raison, on y trouve de tous les goûts : jeux de sociétés, karaoke, trivia, bar, jeux vidéo accessibles (Just Dance, Dance Dance Revolution, Guitar Hero, etc.) et plus!"
        },
         {
          categories: ["Paiement", "Aide"],
          question: "Où puis-je acheter mon billet?",
          answer: "Clique ici."
        },
        {
          categories: ["Paiement"],
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
          categories: ["Paiement"],
          question: "Puis-je acheter un billet sur place?",
          answer:
            "Malheureusement, à cause des complications que cela engendrerait : non. Mais il est possible, qu’ils restent des billets. Si c’est le cas, ce sera indiqué sur le site et les médias sociaux."
        },
        {
          categories: ["Divers"],
          question: "Puis-je apporter mon alcool et/ou ma nourriture?",
          answer:
            "Ça dépend d'année en année (notamment de l'organisme qui nous loue la salle). Pour le Quart de Nuit 5, il est interdit d'apporter de l'alcool, mais permis d'apporter de la nourriture. Clique ici pour savoir pour le prochain LAN."
        },
        {
          categories: ["Divers", "Contribuer"],
          question:
            "Puis-je apporter mon ordinateur, ma console de jeu et/ou des jeux de société ?",
          answer:
            "Tu peux apporter ton ordinateur portable sans problème (par contre, tu en es responsable). Pour les ordinateurs « tours », il faut que tu vérifies avec nous avant en nous contactant ici et c’est toi qui s’occupe d’apporter ton écran, clavier, souris, etc. Pour les consoles de jeu, ça dépend la disponibilité des télévisions, contacte-nous ici. Bien sûr les consoles de jeu portables sont les bienvenues! Pour les jeux de société, pas de problème (mais tu en es responsable aussi)!"
        },
        {
          categories: ["Contribuer"],
          question: "Je veux aider avec le Quart de nuit, comment faire?",
          answer:
            "Cool! Contacte-nous ici. Peu importe ce que tu sais faire, on est veut connaître ton intérêt! Souvent aussi, on cherche du matériel, donc tu peux nous faire part de ce que tu as (surtout en matière jeux vidéo, jeux de société)"
        },
        {
          categories: ["Contribuer"],
          question:
            "J’ai des suggestions pour le prochain Quart de nuit/le futur du Quart de nuit. Comment les partager?",
          answer: "Super! Vas ici pour nous en faire part."
        },
        {
          categories: ["Contribuer"],
          question: "Acceptez-vous les dons?",
          answer: "De l’argent??? Oui!! Clique ici (xoxoxoxo)."
        },
        {
          categories: ["Divers"],
          question: "Est-il possible de consulter le passé/archives de Quart de nuit?",
          answer: "Certainement, clique ici!"
        },
        {
          categories: ["Divers"],
          question: "Comment rester au courant avec le LAN?",
          answer:
            "Clique ici pour voir tous nos réseaux sociaux. Le site web est aussi souvent mis-à-jour, donc reviens de temps en temps!"
        }
      ]
    };
  }
};
</script>