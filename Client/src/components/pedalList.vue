<template>
    <div id="pedal-list">
        <draggable>
        <pedal-item id="pedal-item" v-for="pedal in pedalList" :pedal="pedal" :key="pedal._id" ></pedal-item>
        </draggable>
    </div>
</template>

<script>
import pedalItem from './pedalItem.vue'
import draggable from "vuedraggable";

export default {
    name: 'pedal-list',
    props: ['pedalList'],
    components: {
        'pedal-item': pedalItem,
        draggable
    }
}

</script>

<style>

#pedal-item {
    display: flex;
    flex-direction: column;
    border: solid black 5px;
    min-width: 150px;
    min-height: 150px;
}

</style>