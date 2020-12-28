<template>
    <div id="add-pedal-form">
        <form id="pedal-details-form">
        <div class="form-input">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="eg. Blues Driver" required autofocus>
        </div>
        <div class="form-input">
            <label for="manufacturer">Pedal Manufacturer:</label>
            <input type="text" id="manufacturer" placeholder= "eg. Boss" required/>
        </div>
        <div class="form-input">
            <label for="type">Pedal Type:</label>
                <select name="pedal-type" id="type" required>
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
            <label for="price">Pedal Price:</label>
            <input type="number" id="price" placeholder= "5000" required/>
        </div>
        <button type="submit">Add Pedal</button>
    </form>

    </div>
</template>

<script>

import {eventBus} from '@/main.js'

export default {
    name: 'pedal-details-form',
    data() {
        return {
            name: '',
            manufacturer: '',
            type: '',
            price: 0
        }
    },
    methods: {
        addPedal(e){
            e.preventDefault()
            const pedal = {
                name: this.name,
                manufacturer: this.manufacturer,
                type: this.type,
                price: this.price
            }
        pedalServices.postPedal(pedal)
        .then(res => eventBus.$emit('pedal-added', res))
        }
    }
}
</script>

<style>

</style>
