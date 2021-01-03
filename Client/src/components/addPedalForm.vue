<template>
    <div id="add-pedal-form">
        <form id="pedal-details-form" v-on:submit="addPedal" method="post">
        <div class="form-input">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" placeholder="eg. Blues Driver" required autofocus>
        </div>
        <div class="form-input">
            <label for="manufacturer">Manufacturer:</label>
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
            <label for="retailPrice">Price:</label>
            <input type="number" id="retailPrice" v-model.number="retailPrice" placeholder= "5000" required/>
        </div>

        <div id="priority-labels">
            <label for="star-one" id="low">Low</label>
            <label for="star-five" id="high">High</label>
        </div>

        <div id="rating">
            <label for="star-zero"></label>
            <input type="radio" name="priority" value="0" class="#rating-clear" id="star-zero">
            <label for="star-one">1</label>
            <input type="radio" name="priority" value="1" id="star-one">
            <label for="star-two">2</label>
            <input type="radio" name="priority" value="2" id="star-two">
            <label for="star-three">3</label>
            <input type="radio" name="priority" value="3" id="star-three">
            <label for="star-four">4</label>
            <input type="radio" name="priority" value="4" id="star-four">            
            <label for="star-five">5</label>
            <input type="radio" name="priority" value="5" id="star-five">
            
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

#add-pedal-form {
    margin: 10px;
    display: block;
    border-radius: 10px;
}

.form-input > #name {
    border-radius: 3px;
    width: 140px;
    white-space: normal;
    display: block;
    left: 120px;
    top: -19px;
    position: relative;
}

.form-input > #manufacturer {
    border-radius: 3px;
    width: 140px;
    white-space: normal;
    display: block;
    left: 120px;
    top: -19px;
    position: relative;
}

.form-input > #type {
    border-radius: 3px;
    width: 140px;
    white-space: normal;
    display: block;
    left: 120px;
    top: -19px;
    position: relative;
}

.form-input > #retailPrice {
    border-radius: 3px;
    width: 140px;
    white-space: normal;
    display: block;
    left: 120px;
    top: -19px;
    position: relative;
}

#high {
    position: relative;
    left: 100px;
}

/* stars */

#rating {
  /* remove inline-block whitespace */
    font-size: 0;
  /* flip the order so we can use the + and ~ combinators */
    unicode-bidi: bidi-override;
    direction: ltr;
  /* the hidden clearer */
}
#rating * {
    font-size: 2rem;
}
#rating > input {
    display: none;
}
#rating > input + label {
  /* only enough room for the star */
    display: inline-block;
    overflow: hidden;
    text-indent: 9999px;
    width: 1em;
    white-space: nowrap;
    cursor: pointer;
}
#rating > input + label:before {
    display: inline-block;
    text-indent: -9999px;
    content: "☆";
    color: #888;
}
#rating > input:checked ~ label:before, #rating  > input + label:hover ~ label:before, #rating  > input + label:hover:before {
    content: "★";
    color: #e52;
    text-shadow: 0 0 1px #333;
}
#rating > .rating-clear + label {
    text-indent: -9999px;
    width: .5em;
    margin-left: -.5em;
}
#rating > .rating-clear + label:before {
    width: .5em;
}
#rating:hover > input + label:before {
    content: "☆";
    color: #888;
    text-shadow: none;
}
#rating:hover > input + label:hover ~ label:before, #rating:hover > input + label:hover:before {
    content: "★";
    color: #e52;
    text-shadow: 0 0 1px #333;
}

/* end of stars */

</style>
