<template>
    <div id="pedal-board">
    <h3>Back Log</h3>
          <!-- Backlog draggable component. Pass arrBackLog to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrBackLog"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrBackLog"
              :key="element.name"
            >
              <img :src="element.image" alt="image of pedal" width="50" height="60">
            </div>
          </draggable>
    <div class="col-3">
        <div class="p-2 alert alert-warning">
          <h3>Testing</h3>
          <!-- Testing draggable component. Pass arrTested to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="pedalList"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in pedalList"
              :key="element.name"
            >
              <img :src="element.image" alt="image of pedal" width="50" height="60">
            </div>
          </draggable>
        </div>
      </div>
    </div>
</template>

<script>
import pedalItem from './pedalItem.vue'
import draggable from "vuedraggable";

export default {
    name: 'pedal-board',
    props: ['pedalList', 'pedal'],
    components: {
        'pedal-item': pedalItem,
        draggable
    },
    data() {
    return {
      // for new tasks
      newTask: "",
      // 4 arrays to keep track of our 4 statuses
      arrBackLog: [
        // { name: "Code Sign Up Page" },
        // { name: "Test Dashboard" },
        // { name: "Style Registration" },
        // { name: "Help with Designs" }
      ],
    //   arrTested: [],
    //   pedalList,
      draggablePedalList: []
      }},
  mounted() {
      this.makeDraggablePedalList(pedalList);
  },
  methods: {
    //add new tasks method
    add: function() {
      if (this.newTask) {
        this.arrBackLog.push({ name: this.newTask });
        this.newTask = "";
      }
    },
    makeDraggablePedalList(array) {
        array.forEach(pedal => {
            this.draggablePedalList.push(pedal)
        });
            
        }
               
        
            
        }
    }

</script>

<style>

#pedal-list {
    height: 100vh;
    width: 100%;
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

.col-3 {
    display: flex;
    flex-flow: row wrap;
}

</style>
