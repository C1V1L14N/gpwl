<template>
    <div id="pedal-list">
        <pedal-item v-for="pedal in pedalList" :pedal="pedal" :key="pedal._id" ></pedal-item>
    </div>
</template>

<script>
import pedalItem from './pedalItem.vue'

export default {
    name: 'pedal-list',
    props: ['pedalList'],
    components: {
        'pedal-item': pedalItem
    }
}

</script>

<style>

</style>