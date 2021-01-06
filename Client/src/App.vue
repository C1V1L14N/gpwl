<template>
    <div id="app">
        <header>
            <h1>Pedaledal</h1>
            <nav id="nav">
                <img id="pedal-icon" src="../src/assets/nav/pedal2.png" alt="pedal icon">
                <img id="pedalboard-icon" src="../src/assets/nav/pedalboard@2x.png" alt="pedalboard-icon">
                <p>About</p>
            </nav>
        </header>
        
        <div id="collection-display">
            <add-pedal-form></add-pedal-form>
            <pedal-list :pedalCollection="pedalCollection"></pedal-list>
            <pedal-detail v-if="selectedPedal" :pedal="selectedPedal"></pedal-detail>
        </div>
        
        
        <pedal-board :pedalList="pedalCollection"></pedal-board>
    </div>
</template>


<script>

import addPedalForm from '@/components/addPedalForm.vue';
import pedalItem from '@/components/pedalItem.vue';
import pedalList from '@/components/pedalList.vue';
import pedalDetail from '@/components/pedalDetail.vue';
import pedalBoard from '@/components/pedalBoard.vue';
import pedalServices from '@/services/pedalServices.js';

import {eventBus} from '@/main.js'
import PedalDetail from './components/pedalDetail.vue';


export default {
    name: 'app',
    components: {
        'pedal-list': pedalList,
        'pedal-item': pedalItem,
        'pedal-detail': pedalDetail,
        'add-pedal-form': addPedalForm,
        'pedal-board': pedalBoard
    },
    data () {
        return {
            pedalCollection: [],
            selectedPedal: null
        }
    },
    mounted() {
        this.fetchPedals();

        eventBus.$on('pedal-deleted', (pedal) => {
        pedalServices.deletePedal(pedal._id);
        // const index = this.pedal.findIndex(pedal => pedal._id === id);
        this.pedalCollection.splice(this.pedalCollection.indexOf(pedal), 1);
        this.selectedPedal = null;
    });

        eventBus.$on('pedal-added', (pedal) => {
        pedalServices.postPedal(pedal)
        .then(pedalWithId => this.pedalCollection.push(pedalWithId));
    });
        eventBus.$on('selected-pedal', (pedal) => {
            this.selectedPedal = pedal;
        })
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
    
}

#app {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    background-image: url(../src/assets/4k-bg-2.jpg);
    background-size: 100%;
}

header {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    border: 0;
}

h1 {
    margin: 10px;
    font-size: 50px;
}

#pedal-icon {
    height: 50px;
    padding: 20px;
    margin-left: auto;
}

#pedalboard-icon {
    justify-content: flex-end;
    margin-left: auto;
    height: 50px;
    padding: 20px;
}

#nav > a {
    padding: 5px;
}

#collection-display {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    margin-top: 2em;
}

#add-pedal-form {
    width: 33%;

    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
    backdrop-filter: blur( 0.1px );
    -webkit-backdrop-filter: blur( 5.5px );
    border-radius: 10px;
}

#pedal-list {
    width: 33%;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
    backdrop-filter: blur( 0.1px );
    -webkit-backdrop-filter: blur( 5.5px );
    border-radius: 10px;
}

#pedal-detail {

    width: 33%;
    
}
</style>
