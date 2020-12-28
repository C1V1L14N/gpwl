<template>
    <div id="add-pedal-form">
        <form id="pedal-details-form" v-on:submit="addPedal" method="post">
        <div class="form-input">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" placeholder="eg. Blues Driver" required autofocus>
        </div>
        <div class="form-input">
            <label for="manufacturer">Pedal Manufacturer:</label>
            <input type="text" id="manufacturer" v-model="manufacturer" placeholder= "eg. Boss" required/>
        </div>
        <div class="form-input">
            <label for="type">Effect Type:</label>
                <select name="pedal-type" id="type" v-model="type" required>
                    <option value="" disabled selected hidden>Select</option>
                    <option value="" disabled ></option>
                    <option value="saturation">Saturation</option>
                    <option value="reverb">Reverb</option>
                    <option value="delay">Delay</option>
                    <option value="modulation">Modulation</option>
                    <option value="compressor">Compressor</option>
                    <option value="looper">Looper</option>
                    <option value="multifx">Multi FX</option>
                    <option value="volume">Volume</option>
                    <option value="tuner">Tuner</option>
                </select>
        </div>
        <div class="form-input">
            <label for="retailPrice">Pedal Price:</label>
            <input type="number" id="retailPrice" v-model.number="retailPrice" placeholder= "5000" required/>
        </div>
        <button type="submit">Add Pedal</button>
    </form>

    </div>
</template>

<script>

import {eventBus} from '@/main.js'
import pedalServices from '@/services/pedalServices.js';

export default {
    name: 'pedal-details-form',
    data() {
        return {
            name: '',
            manufacturer: '',
            type: '',
            retailPrice: ''
        }
    },
    methods: {
        addPedal(event){
            event.preventDefault()
            const pedal = {
                name: this.name,
                manufacturer: this.manufacturer,
                type: this.type,
                retailPrice: this.retailPrice
            }
            eventBus.$emit('pedal-added', pedal)
            event.target.reset()
        }
    }
}
</script>

<style>

</style>
