<template>
    <div id="pedal-list">
        <ul>
            <button id="pedal-item" v-for="pedal in pedalCollection" v-on:click="getSelectedPedal(pedal)" :pedal="pedal" :key="pedal._id" >{{pedal.name}}</button>
        </ul>
    </div>
</template>

<script>
import pedalItem from './pedalItem.vue';
import draggable from "vuedraggable";
import { eventBus } from '@/main.js';

export default {
    name: 'pedal-list',
    props: ['pedal', 'pedalCollection'],
    components: {
        'pedal-item': pedalItem,
        draggable
    },

    methods: {
        getSelectedPedal: function (pedal) {
            eventBus.$emit('selected-pedal', pedal)
        }
    }
}

</script>

<style>

#pedal-list {
    background-color: pink;
    height: 100vh;
    margin: 10px;
    /* width: 100%; */
    height: 200px;
    overflow: scroll;
    border-radius: 10px;
}

ul {
    margin: 0;
    border: 0;
    padding: 0;
}

#pedal-item {
    display: flex;
    flex-direction: column;
    
    
}

</style>