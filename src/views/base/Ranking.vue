<template>
    <v-layout column>
        
        <v-flex>
            <v-sheet height="400px" color="secondary">
                <v-layout 
                row 
                align-center 
                justify-center 
                fill-height>
                    <v-flex class="display-4 text-xs-center" >
                            Ranking
                    </v-flex>
                </v-layout>
            </v-sheet>
        </v-flex>

        <v-flex>
            <v-layout wrap row justify-center align-center>
                <v-flex xs12 sm4 md3 lg3>
                   <v-flex align-self-start class="display-1"> Édition: </v-flex>
                    <v-select>

                    </v-select>
                </v-flex>

                <v-flex xs12 sm4 md3 lg3>
                    <v-flex align-self-start class="display-1"> Category: </v-flex>
                    <v-chip-group
                        column
                        mandatory
                        active-class="primary--text"
                        >
                        <v-chip v-for="tag in tags" :key="tag">
                            {{ tag }}
                        </v-chip>
                    </v-chip-group>
                </v-flex>
            </v-layout>
            
        </v-flex>


        <v-flex>
            <v-card>
                <v-card-title>
                    <v-flex align-center> <strong> Here is a summary of the ranking </strong> </v-flex>
                </v-card-title>
                <v-card-text>
                    <v-data-table
                    :headers="headers"
                    :items="items"
                    class="elevation-1"
                    disable-pagination
                    hide-default-footer
                    >
                        <template v-slot:items="props">
                            <td class="text-xs-left">{{ props.item.name }}</td>
                            <td class="text-xs-left">{{ props.item.pow }}</td>
                            <td class="text-xs-left">{{ props.item.badge }}</td>
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>


export default {
    name:"Home",
    components: {
    },
    data () {
      return {
       headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Power level', value: 'pow' },
          { text: 'Badge', value: 'badge', sortable: false},
        ],
        items: [
          {
            name: 'Pascal',
            pow: 999,
            badge: 'none'
          }
        ],
        tags:[
            'All',
            'CS:GO',
            'Tetris',
            'Smash',
            'GoGo'
        ]
    }
  }
}
</script>

<style>
</style>