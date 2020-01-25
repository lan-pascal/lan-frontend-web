<template>
  <div class="about">
    <v-layout column>
      <v-flex>
        <v-sheet height="400px" color="secondary">
          <v-layout row align-center justify-center fill-height>
            <v-flex class="display-4 text-xs-center">About</v-flex>
          </v-layout>
        </v-sheet>
      </v-flex>

      <v-flex>
        Events:
        Descriptions:
      </v-flex>

      <v-flex>
        FAQ
        <v-expansion-panels accordion multiple>
          <v-expansion-panel>
            <v-expansion-panel-header>Où sont les informations sur le prochain LAN?</v-expansion-panel-header>
            <v-expansion-panel-content>Clique ici.</v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Je veux aider avec le LAN, comment faire?</v-expansion-panel-header>
            <v-expansion-panel-content>
              Cool! Contacte-nous ici. Peu importe ce que tu sais faire, on est veut connaître ton intérêt! Souvent aussi, on cherche du matériel, donc tu peux nous faire part de ce que tu as (surtout en matière
              jeux vidéo, jeux de société.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>J’ai des suggestions pour le prochain LAN/le futur du LAN. Comment les partager?</v-expansion-panel-header>
            <v-expansion-panel-content>Super! Vas ici pour nous en faire part.</v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Je ne comprends pas trop c’est quoi le LAN.</v-expansion-panel-header>
            <v-expansion-panel-content>[copier brève description]</v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>C’est où que j’achète mon billet?</v-expansion-panel-header>
            <v-expansion-panel-content>Clique ici.</v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Quelle méthode de paiement acceptez-vous?</v-expansion-panel-header>
            <v-expansion-panel-content>On accepte […]</v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Puis-je me faire rembourser une fois mon billet acheté?</v-expansion-panel-header>
            <v-expansion-panel-content>
              Normalement, toute vente est finale. Mais on est des humains et on comprend que ça arrive des
              empêchement dernière minute. Si tu crois que tu as une bonne raison pour te faire rembourser (garde en
              tête qu’on roule pas sur l’or et que donc nos option sont limitées), contacte-nous ici
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Acceptez-vous les dons?</v-expansion-panel-header>
            <v-expansion-panel-content>De l’argent???? Oui!! Clique ici (xoxoxoxo).</v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Avez-vous l’histoire des LANs?</v-expansion-panel-header>
            <v-expansion-panel-content>Certainement, clique ici!</v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Puis-je acheter un billet sur place?</v-expansion-panel-header>
            <v-expansion-panel-content>
              Malheureusement, à cause des complications que cela engendrerait non. Mais il est possible, qu’ils
              restent des billets. Si c’est le cas, ce sera indiqué sur le site et les médias sociaux.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Comment rester au courant avec le LAN?</v-expansion-panel-header>
            <v-expansion-panel-content>
              Tu peux t’abonner à notre info-lettre ici ou nous suivre sur les diverse plateformes que nous avons ici.
              Le site web est aussi souvent mis-à-jour, donc reviens de temps en temps!
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Comment s’inscrire aux tournois?</v-expansion-panel-header>
            <v-expansion-panel-content>Quand tu achètes ton billet, l’option se présente à toi.</v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>J’ai déjà acheté mon billet, puis-je tout de même m’ajouter à un tournoi?</v-expansion-panel-header>
            <v-expansion-panel-content>Ça dépend des disponibilités. Contacte-nous ici.</v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Puis-je apporter mon ordinateur, ma console de jeu et/ou des jeux de société ?</v-expansion-panel-header>
            <v-expansion-panel-content>
              Tu peux apporter ton ordinateur portable sans problème (par contre, tu en es responsable). Pour les
              ordinateurs « tours », il faut que tu vérifies avec nous avant en nous contactant ici et c’est toi qui
              s’occupe d’apporter ton écran, clavier, souris, etc. Pour les consoles de jeu, ça dépend la disponibilité
              des télévisions, contacte-nous ici. Bien sûr les consoles de jeu portables sont les bienvenues! Pour les
              jeux de société, pas de problème!
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Puis-je apporter mon alcool et/ou ma nourriture?</v-expansion-panel-header>
            <v-expansion-panel-content>
              Ça dépend de LAN en LAN (notamment de la personne qui nous loue la salle). Clique ici pour savoir
              pour le prochain LAN.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>

      <v-flex>
        Team
        <v-card>
          <v-card-title>Pascal</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
