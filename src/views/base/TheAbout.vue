<template>
  <div class="about">
    <v-layout column>
      <v-flex>
        <v-sheet height="400px" color="secondary">
          <v-layout 
          row 
          align-center 
          justify-center 
          fill-height>
            <v-flex class="display-4 text-xs-center" >
                  About
            </v-flex>
          </v-layout>
        </v-sheet>
      </v-flex>

      <v-flex>
        Events:
          Descriptions:
      </v-flex>

      <v-flex>
        FAQ
        <v-expansion-panels
        accordion
        multiple>
          <v-expansion-panel
          v-for="(item,i) in 5"
          :key="i"
          >
            <v-expansion-panel-header>FAQ QUESTION {{item}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>

      <v-flex>
        Team
        <v-card>
          <v-card-title>
            Pascal
          </v-card-title>
        </v-card>
      </v-flex>
      
    </v-layout>
  </div>
</template>
