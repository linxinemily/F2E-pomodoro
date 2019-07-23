<template>
    <div>
        <h2>ADD NEW TASK</h2>
            <div class="control_group">
            <p class="title">TASK TITLE</p>
            <input
                type="text"
                placeholder="Type Your Task Name"
                v-model="newTaskName"
            >
          </div>
          <div class="control_group">
            <p class="title">ESTIMATED TOMOTO</p>
            <div class="estimate">
                <i
                    v-for="estimate in estimates"
                    :key="estimate.id"
                    :class="{ active: estimate.isEstimated }"
                    @click="checkEstimate(estimate)"
                    @mouseover="toggleEstimate(estimate, 'over')"
                    @mouseleave="toggleEstimate(estimate, 'leave')"
                ></i>
            </div>
          </div>
          <div class="btn_outer">
              <button class="btn-submit" @click="addTask" :disabled="!newTaskName">Add Task</button>
          </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface Estimate {
    id: number,
    isEstimated: boolean
}

@Component({})
export default class AddTask extends Vue {
    private newTaskName: string = ''
    private isEstimated: boolean = false
   
    private estimates : Estimate[] = [
        { id: 1, isEstimated: true },
        { id: 2, isEstimated: false },
        { id: 3, isEstimated: false },
        { id: 4, isEstimated: false },
        { id: 5, isEstimated: false },
        { id: 6, isEstimated: false },
        { id: 7, isEstimated: false },
        { id: 8, isEstimated: false },
        { id: 9, isEstimated: false },
        { id: 10, isEstimated: false },
    ]

    private currentEstimate =  this.estimates[0]

    public addTask() {
        if (!this.newTaskName) {
            return
        }
        this.$store.commit('addTask', {
            name: this.newTaskName,
            estimate: this.currentEstimate.id
        })
        this.newTaskName = ''
    }

    public checkEstimate(estimate: Estimate) {
        this.currentEstimate = estimate
        for(let i = 0; i < this.estimates.length; i++) {
            if (i >= this.currentEstimate.id) {
                this.estimates[i].isEstimated = false
            } else {
                this.estimates[i].isEstimated = true
            }

        }
    }

    public toggleEstimate(estimate: Estimate, status: string) {
        if (estimate.id < this.currentEstimate.id) {
            return
        }
        if (status === 'over') {
            for(let i = this.currentEstimate.id ; i < estimate.id; i++) {
                this.estimates[i].isEstimated = true
            }
        } else {
            for(let i = this.currentEstimate.id ; i < estimate.id; i++) {
                this.estimates[i].isEstimated = false
            }
        }
    } 

    
}

</script>

<style lang="scss" scoped>
.estimate {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    i {
        width: 25px;
        height: 25px;
        display: inline-block;
        cursor: pointer;
        background-image: url('../.././assets/images/icons/tomato_small_gray.svg');
        transition: all 0.3s;
        &:hover {
            transform: scale(1.1);
        }
        &.active {

            background-image: url('../.././assets/images/icons/tomato_small_color.svg');
        }
    }
}
</style>
