<template>
    <div id="pedal-item">

        <h3>Name: {{pedal.name}}</h3>
        <p>Manufacturer: {{pedal.manufacturer}}</p>
        <p>EffectType: {{pedal.type}}</p>
        <p>Price: {{pedal.price}}</p>

        <button v-on:click="deletePedal">Delete Pedal</button>
    </div>
</template>
<script>
import { eventBus } from '@/main.js'
import pedalServices from '@/services/pedalServices.js'

    export default {
        name: 'pedal-item',
        props: ['pedal'],

        methods: {
            deletePedal(){
                eventBus.$emit('pedal-deleted', this.pedal)
            }
        }
    }
</script>

<style>

</style>
