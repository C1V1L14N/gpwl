<template>
    <div id="selected-pedal" >
        <div>
            <h3>Name: {{pedal.name}}</h3>

            <img :src="pedal.image" alt="image of pedal" width="100" height="100">

            <p>Manufacturer: {{pedal.manufacturer}}</p>
            <p>EffectType: {{pedal.type}}</p>
            <p>Price: {{pedal.retailPrice}}</p>
            <p>Rating: {{pedal.rating}}</p>
            <img :src="pedal.image" alt="image of pedal" width="50" height="60">

            <button v-on:click="deletePedal">Delete Pedal</button>
        </div>
    </div>
</template>
<script>
import { eventBus } from '@/main.js'
import pedalServices from '@/services/pedalServices.js'

    export default {
        name: 'pedal-detail',
        props: ['pedal'],

        methods: {
            deletePedal(){
                eventBus.$emit('pedal-deleted', this.pedal)
            }
        }
    }
</script>

<style>

#selected-pedal {
    background-color: pink;
    width: 33%;
    margin: 10px;
    border-radius: 10px;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 5.5px );
    border-radius: 10px;
}

</style>
