<template>
    <div id="pedal-board">
        <section class="pedal-select-container">
            <label for="pedal-select">Select a Pedal:</label>
            <select id="pedal-select" v-model="selectedPedal">
                <option disabled value="">Select a Pedal</option>
                <option v-for="pedal in draggablePedalList" :key="pedal.name" :value="pedal" v-on:select="makeDraggablePedalList">{{pedal.name}}</option>
            </select>
        </section>
            <button v-on:click="makeDraggablePedalList">Add fave pedals</button>
            <h3>Pedals</h3>
                <div class="list-group-pedal-row">
                    <div
                        class="list-group-item"
                        v-for="pedal in draggablePedalList"
                        :key="pedal.name"
                        :list="draggablePedalList"
                    >
                        <input type="image" :src="pedal.image" alt="image of pedal" width="50" height="60" v-tooltip="pedal.name + '- Click to add to pedal board'" title="Click to add to pedal board" v-on:click="makeToScale(pedal), addToOnPedalList(pedal)">
                    </div>
                </div>
            <h3>Pedal Board</h3>
                <div
                    class="list-group-pedal-board"
                    :list="onBoardList"
                >
                </div>
            <movable
              v-for="(pedal, index) in onBoardList"
              :key="index"
              :grid="1"
            >
            <div class="img-wrap">
                <button class="close" @click="deleteFromPedalBoard(index)" v-tooltip="'Click to delete'">&times;</button>
            </div>
                <img :src="pedal.image" alt="image of pedal" :width="pedal.width" :height="pedal.depth" v-tooltip="'Click and hold to move around pedal board'">
            </movable>
            
            
            <div id="pedal-board-itself">
            </div>
    </div>
</template>

<script>
import pedalItem from './pedalItem.vue'

export default {
    name: 'pedal-board',
    props: ['pedalList', 'pedal'],
    components: {
        'pedal-item': pedalItem
    },
    data() {
    return {
      draggablePedalList: [],
      onBoardList: [],
      selectedPedal: null
        }
      },
  mounted() {
      this.makeDraggablePedalList();
            },
  methods: {
    makeDraggablePedalList() {
        this.pedalList.forEach(pedal => {
            this.draggablePedalList.push(pedal)
            });     
        },
    makeToScale(pedal){
        pedal.width = Math.round((pedal.width * 3.7795275591)/3)
        pedal.depth = Math.round((pedal.depth * 3.7795275591)/3)
        },
    addToOnPedalList(pedal){
        this.onBoardList.push(pedal);
        },
    deleteFromPedalBoard(index){
        this.onBoardList.splice(index,1)
    }
    
    }
}

</script>

<style>



.list-group-pedal-row {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

#pedal-board-itself {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: url('./basic_pedalBoard.png');
    height: 256px;
    width: 640px;
}

.list-group-pedal-board {
    display: flex;
    flex-flow: row wrap;
    /* background-image: url("https://www.gak.co.uk/cdn-cgi/image/fit=scale-down,width=645,height=280/https://58eca9fdf76150b92bfa-3586c28d09a33a8c605ed79290ca82aa.ssl.cf3.rackcdn.com/pedaltrain-metro-16-pedalboard-gig-bag-327453.jpg"); */
    
    /* Client/src/static/images/basic_pedalBoard.png
    Client/src/components/pedalBoard.vue */
    
    justify-content: center;
}

.list-group-item {
    display: flex;
    flex-flow: row wrap;
}

.img-wrap {
    position: relative;
}

.img-wrap .close {
    position: absolute;
    top: 2px;
    right: 2px;
    z-index: 100;
}

</style>
