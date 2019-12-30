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
                  Events
            </v-flex>
          </v-layout>
        </v-sheet>
      </v-flex>

      <v-flex>
        <v-timeline>
            <v-timeline-item>
                Upcoming events
            </v-timeline-item>

            <v-timeline-item  v-for="(item,i) in 5" :key="i">
                <v-flex v-if="i % 2 ==0" class="text-xs-right">
                     Lan {{item}}
                </v-flex>
                <v-flex v-else>
                    Lan {{item}}
                </v-flex>
            </v-timeline-item>

        </v-timeline>
      </v-flex>
      
    </v-layout>
  </div>
</template>
