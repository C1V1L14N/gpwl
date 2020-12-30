<template>
    <div id="app">
        <h1>Pedal Platform</h1>
        <nav id="nav">
            <a href="http://">My Pedals</a>
            <a href="http://">Find Pedals</a>
            <a href="http://">Board Planner</a>
        </nav>
        
        <add-pedal-form></add-pedal-form>

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

        eventBus.$on('pedal-added', (pedal) => {
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

body {
    margin: 0;
    border: 0;
    padding: 0;
    background-color: antiquewhite;
}

#app {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}

h1 {
    margin: 10px;
    font-size: 50px;
}

#nav > a {
    padding: 5px;
}

add-pedal-form {
    justify-content: left;
}

pedal-list {
    justify-content: center;
}

</style>
