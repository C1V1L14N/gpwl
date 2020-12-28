<template>
    <div id="app">
        <h1>Pedal Platform</h1>
        

        <pedal-list :pedalList="pedalCollection"></pedal-list>
    </div>
</template>
<script>
import addPedalForm from '@/components/addPedalForm.vue';
import pedalItem from '@/components/pedalItem.vue';
import pedalList from '@/components/pedalList.vue';
import pedalServices from '@/services/pedalServices.js';

import {eventBus} from '@/main.js'


export default {
    name: 'app',
    components: {
        'pedal-list': pedalList,
        'add-pedal-form': addPedalForm
    },
    data () {
        return {
            pedalCollection: []
        }
    },
    mounted() {
        this.fetchPedals();

        eventBus.$on('pedal-deleted', (pedal) => {
        pedalServices.deletePedal(pedal._id);
        // const index = this.pedal.findIndex(pedal => pedal._id === id);
        this.pedalCollection.splice(this.pedalCollection.indexOf(pedal), 1);
    });

        eventBus.$on('pedal-add', (pedal) => {
        pedalServices.postPedal(pedal)
        .then(pedalWithId => this.pedalCollection.push(pedalWithId));
    });
    },
    
    methods: {
        fetchPedals() {
            pedalServices.getPedals()
                .then(pedalCollection => this.pedalCollection = pedalCollection);
        }
    }
}


    

    

</script>

<style>

</style>
