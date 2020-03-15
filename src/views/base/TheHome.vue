<template>
  <div class="justify-center width">
    <!-- Présentation -->
    <v-row class="fullscreen ml-1" align="top" justify="center">
      <v-col justify="center" align="center" class="ma-0 pa-0">
        <v-row justify="center" class="mt-md-5 pa-md-7 px-7">
          <LogoSVG width="350" height="350" />
        </v-row>

        <v-row justify="center" class="pa-5">
          <QdnTitleSVG width="500" class="py-md-5" />
        </v-row>

        <v-row justify="center" class="px-4 py-12">
          <Countdown class="mt-n5" :deadline="deadline" />
        </v-row>
      </v-col>
    </v-row>

    <!-- Introduction -->
    <section>
      <!-- QdN c'est quoi? -->
      <v-row>
        <v-col cols="12" md="6" align-self="center">
          <v-col>
            <v-row justify="center">
              <h1 class="display-1">
                Le Quart de Nuit, c'est quoi
                <span class="display-2 primary--text">?</span>
              </h1>
            </v-row>
            <v-row class="pa-2">
              <p>
                Vous avez envie de relaxer avec des amis en jouant à des jeux vidéo de tous les genres? De prendre une petite bière en jouant
                à des jeux de société? De tester vos connaissances en pop-culture avec un trivia en équipe? De découvrir un talent musical caché au karaoké?
              </p>

              <p>Tout cela et plus encore vous attend au prochain Quart de nuit!</p>

              <p>
                Si tu lis ça, oui tu es invité.e! Et oui tu peux inviter tes ami.e.s!
                Même si tu n'as jamais touché à quelque chose d'électronique de ta vie, tu y trouveras quelque chose.
              </p>

              <p>
                Nous sommes un regroupement de personnes motivé à créer des événements, nommés
                <i>Quart de nuit</i>,
                qui incorporent diverses facettes du
                <i>geek-culture</i> et les rendent accessibles à tous.
              </p>

              <p>
                Notre mission est, qu'à chaque
                <i>Quart de nuit</i>, tout le monde se sente à sa place,
                tout en gardant la nature
                <i>geek</i> du
                <i>Quart</i> qui le rend si unique.
              </p>
            </v-row>
          </v-col>
        </v-col>
        <v-col cols="6" class="d-none d-md-flex">
          <v-img contain src="@/assets/media/ppl-game-pic.jpg" style="transfrom: skewY(4deg);"/>
        </v-col>
      </v-row>

      <!-- Quick Info -->
      <v-row id="quickinfo" class="pt-2 mx-2" align="center">
        <v-col v-for="info in quickinfo" :key="info" align="center" cols="6" md="3">
          <v-icon x-large color="primary">{{info.icon}}</v-icon>
          <h2>{{info.name}}</h2>
          <p>{{info.desc}}</p>
        </v-col>
      </v-row>
    </section>

    <!-- Activities -->
    <section>
      <v-divider class="white"/>

      <v-row wrap justify="center">`
        
        <v-col v-for="(info,infoIndex) in information" :key="infoIndex" cols="12" sm="8" md="5">
          <v-row align="center">
            <v-col cols="3" :order="(infoIndex % 2 === 0) ? '1' : '2'">
              <inline-svg width="70" :src="info.vector" />
            </v-col>

            <v-col cols="9" :order="(infoIndex % 2 === 1) ? '1' : '2'">
              <v-card flat class="transparent">
                <v-card-title class="primary--text">{{info.name}}</v-card-title>
                <v-card-text class="font-weight-regular">{{info.text}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-divider class="hidden-md-and-up" />
        </v-col>

        <v-col cols="12" sm="8" md="5">
          <v-row align="center">
            <v-col cols="3" order="1">
              <inline-svg width="70" :src="require('@/assets/media/activities/beer.svg')" />
            </v-col>
            <v-col cols="9" order="2">
              <v-card flat class="transparent">
                <v-card-title class="primary--text">BAR</v-card-title>
                <v-card-text
                  class="font-weight-regular"
                >Un bar sera aussi accessible durant toute la soirée. Différentes boissons seront offertes à des prix raisonnables.</v-card-text>
                <v-card-actions class="pl-4">
                  <v-btn :to="{name:'pricing'}" class="secondary">Tarif</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
     
      <v-divider/>

      <v-row align="center">
        <!-- Tournois-->
        <v-col cols="12" md="6">
          <v-row justify="center">
            <h1 class="primary--text display-1">TOURNOIS</h1>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="10">
              <p class="px-2 ma-0">
                Deux tournois se présenteront à cette 5e édition : un tournoi 2v2 de Super Smash Bros. (le 5e!)
                et un tournoi de Tetris 1v1 (le 2e!). Les finales auront lieu sur le grand écran de la scène. Des prix seront remis aux gagnants.
                Pour vous inscrire aux tournois, vous recevrez un courriel quelques jours avant le Quart si vous avez votre billet.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-slide-group center-active v-model="slide">
              <v-slide-item
                v-for="(game, index) in tournament"
                :key="index"
                v-slot:default="{ toggle }"
              >
                <v-card
                  height="300px"
                  width="225px"
                  tile
                  color="black"
                  class="text-center ma-4 card"
                  @click="toggle"
                >
                  <v-card-title
                    class="justify-center display-1 font-weight-light mb-5"
                    style="word-break: break-word;"
                  >{{game.name}}</v-card-title>
                  <v-card-text>
                    <inline-svg :src="game.vector" width="125" />
                  </v-card-text>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-row>
        </v-col>
        <v-divider vertical/>
        <!-- Jeux de sociétés -->
        <v-col cols="12" md="5">
          <!-- JEUX DE SOCIÉTÉ -->

          <v-row justify="center my-2">
            <h1 class="primary--text display-1">JEUX DE SOCIÉTÉ</h1>
          </v-row>
          <v-row>
            <p class="pa-2">
              Plusieurs jeux de société seront disponibles tout au long de la soirée.
              Il y aurait même un animateur présent pour aider avec les jeux!
              Plusieurs tables avec un bar à côté seront dédiées pour les jeux de société.
            </p>
          </v-row>
          <v-row justify="center">
            <GameStackSVG width="300px" />
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="white"/>
    </section>

    <!-- SCÈNE / LIGNE DU TEMPS -->
    <section>
      <v-row align=center>
        <v-col cols="12" md="6" class="my-2">
          <v-row justify="center">
            <h1 class="primary--text display-1">HORAIRE DE LA SCÈNE</h1>
          </v-row>
          <v-row>
            <p
              class="ma-0 ma-md-2 pa-2"
            >Une scène sera présente tout le long de la soirée. Avec son écran-projecteur, diverses activités se tiendront sur celle-ci.</p>
          </v-row>
        </v-col>
        <v-col>
          <v-timeline height="100%">
            <v-timeline-item
              v-for="(activity, index) in schedule"
              :key="index"
              small
              right
              :color="activity.color"
            >
              <template v-slot:opposite>
                <h3 v-text="activity.time"></h3>
              </template>
              <div class="py-4">
                <h3>{{activity.name}}</h3>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<style scoped lang="scss">
#activities {
  &::before {
    content: "";
    position: relative;
    z-index: -1;
    width: 100%;
    height: 180px;
    top: 0;
    background: var(--v-secondary-base);
    transform: skewY(12deg);
  }
}

#quickinfo {
  background: var(--v-grey-base);
  transform: skewY(-3deg);
  border-radius: 20px;
}

section {
  padding-top: 96px;
}
</style>

<script>
import QdnTitleSVG from "@/assets/logo/qdn-logo-vector.svg?inline";
import LogoSVG from "@/assets/logo/logo-bleu.svg?inline";
import GameStackSVG from "@/assets/media/activities/game-board-stack.svg?inline";

import Countdown from "@/components/countdown/CountdownNormal";

export default {
  length: 3,
  onboarding: 0,
  name: "TheHome",
  components: {
    Countdown,
    LogoSVG,
    QdnTitleSVG,
    GameStackSVG
  },
  data() {
    return {
      deadline: "2020/04/09 20:00:00",
      quickinfo: [
        {
          name: "Collège de Maisonneuve",
          desc: "3800 boul. Pie-IX, Montréal",
          icon: "mdi-map-marker"
        },
        {
          name: "Jeudi 9 avril 2020",
          desc: "Fériés vendredi et lundi",
          icon: "mdi-calendar-blank"
        },
        {
          name: "20h à 3h",
          desc: "Fermeture des portes à 22h",
          icon: "mdi-clock-outline"
        },
        {
          name: "20$",
          desc: "pour 50 premiers et 25$ pour 100 dernières places",
          icon: "mdi-currency-usd"
        }
      ],
      schedule: [
        {
          name: "Dance Dance Revolution & Just Dance",
          time: "20h",
          color: "accent"
        },
        { name: "", time: "", color: "grey" },
        { name: "Trivia Quiz", time: "22h", color: "accent" },
        { name: "", time: "", color: "grey" },
        { name: "Karaoke", time: "00h", color: "accent" },
        { name: "", time: "", color: "grey" },
        { name: "Rock Band & Guitar Hero", time: "02h", color: "accent" },
        { name: "", time: "", color: "grey" }
      ],
      tournament: [
        {
          name: "TETRIS",
          vector: require("@/assets/media/games/tetris.svg")
        },
        {
          name: "SMASH BROS.",
          vector: require("@/assets/media/games/ssb.svg")
        } //SVG NEEDS FIX
      ],
      information: [
        {
          name: "COUCH GAMING",
          vector: require("@/assets/media/activities/sofa.svg"),
          text:
            "Couch gaming c'est un terme pour désigner des jeux vidéo qui se jouent à plusieurs sur le même écran. Plusieurs jeux accessibles à tous (et amusants pour tous) se présenteront à ces espaces."
        },
        {
          name: "HALO REACH & BLACK OPS",
          vector: require("@/assets/media/activities/military.svg"),
          text:
            "Honnête à ses origines comme LAN, des méga-batailles Halo: Reach et Call of Duty: Black Ops se dérouleront au courant de la soirée. 12 joueurs par jeu!"
        },
        {
          name: "TRIVIA QUIZ",
          vector: require("@/assets/media/activities/head.svg"),
          text:
            "Un trivia quiz vous attend lors de la soirée! En équipe de trois et en utilisant Kahoot, une série de question portant sur le cinéma, les jeux vidéo et la musique défileront sur le grand écran. Le quiz est conçu de manière à ce qu'il soit accessible à tous : des connaissances en films Barbie peuvent autant aider que des connaissances en musique classique. Il y aura des prix pour les trois premières équipes!"
        },
        {
          name: "KARAOKE",
          vector: require("@/assets/media/activities/music.svg"),
          text:
            "Un karaoke sera de mise lors de la soirée grâce à la générosité de Karaoke DJ Hugz. C'est le temps de vous laisser aller avec vos chansons préférées!"
        }
      ]
    };
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
};
</script>

