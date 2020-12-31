<template>
    <div id="pedal-board">
    
    <div class="col-3">
        <div class="p-2 alert alert-warning">
            <button v-on:click="makeDraggablePedalList">Button</button>
          <h3>Pedals</h3>
          <!-- Testing draggable component. Pass arrTested to list prop -->
          <div
            class="list-group-pedal-row"
            :list="draggablePedalList"
            :grid="20"
            group="tasks"
          >
            <movable
              class="list-group-item"
              v-for="element in draggablePedalList"
              :key="element.name"
              :list="draggablePedalList"
              :grid="20"
            >
              <img :src="element.image" alt="image of pedal" width="50" height="60">
            </movable>
          </div>
        </div>
        </div>
        <h3>Pedal Board</h3>
          <!-- Backlog draggable component. Pass arrBackLog to list prop -->
          <draggable
            class="list-group-pedal-board"
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
      
    </div>
</template>

<script>
import pedalItem from './pedalItem.vue'
import draggable from 'vuedraggable';

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
      this.makeDraggablePedalList();
  },
  methods: {
    //add new tasks method
    add: function() {
      if (this.newTask) {
        this.arrBackLog.push({ name: this.newTask });
        this.newTask = "";
      }
    },
    makeDraggablePedalList() {
        this.pedalList.forEach(pedal => {
            this.draggablePedalList.push(pedal)
        });
            
        }
               
        
            
        },
    options: {
        dropzoneSelector: '.list-group-pedal-board',
        showDropzoneAreas: true
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

.list-group-pedal-row {
    display: flex;
    flex-flow: row wrap;
}

.list-group-pedal-board {
    display: flex;
    flex-flow: row wrap;
    background-image: url("https://www.gak.co.uk/cdn-cgi/image/fit=scale-down,width=645,height=280/https://58eca9fdf76150b92bfa-3586c28d09a33a8c605ed79290ca82aa.ssl.cf3.rackcdn.com/pedaltrain-metro-16-pedalboard-gig-bag-327453.jpg");
    height: 280px;
    width: 500px;
}

</style>
