<template>
    <div id="app">

    </div>
</template>

<script>
import addPedalForm from '@/components/addPedalForm.js'
import pedalItem from '@/components/pedalItem.js'
import pedalList from '@/components/pedalList.js'

import {eventBus} from '@/main.js'

export default {
    name: 'app',
    components: {
        'pedal-item': pedalItem,
        'Pedal-List': pedalList
    },
    data () {
        return {

        }
    },

    mounted() {
        eventBus.$on('delete-pedal', (id) => {
        pedalServices.deletePedal(id);
        const index = this.pedal.findIndex(pedal => pedal._id === id);
        this.pedal.splice(index, 1);
    });
}

    methods: {
        
    }
}
</script>

<style>

</style>
