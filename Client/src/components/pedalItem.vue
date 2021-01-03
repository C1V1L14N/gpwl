<template>
    <div id="pedal-item">
        <ul>
            <li v-for="pedal in pedalList" :key="pedal.name">
                <button class="pedal-item"></button>
            </li>
        </ul>
    </div>
</template>
<script>
import { eventBus } from '@/main.js'
import pedalServices from '@/services/pedalServices.js'

    export default {
        name: 'pedal-item',
        props: ['pedal', 'pedalList'],

        methods: {
            
        }
    }
</script>

<style>

#pedal-item > p {
    margin: 2px;
    width: 100%;
}

</style>
