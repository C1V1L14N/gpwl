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

#pedal-list {
    display: flex;
    /* flex-direction: row; */
    /* flex-wrap: wrap; */
    height: 100vh;
    /* width: 100%; */
}

#pedal-item {
    display: flex;
    flex-direction: column;
    border: solid black 5px;
    max-width: 200px;
    max-height: auto;
    min-width: 150px;
    min-height: 150px;
}

</style>