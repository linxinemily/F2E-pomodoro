<template>
  <div class="wrapper">
    <div class="left-content" :class="{ show: openToolbox }">
      <Clock/>
    </div>
    <div class="right-content d-flex" :class="{ show: openToolbox }">
      <div>
        <!-- <div class="icon" :class="{ current: icon.name}"/> -->
        <div class="icon icon-add" @click="ChangeCurrentTab('AddTask')"></div>
        <div class="icon icon-list" @click="ChangeCurrentTab('TaskList')"></div>
        <div  class="icon icon-analysis" @click="ChangeCurrentTab('Analytics')"></div>
        <div class="icon icon-ringtone" @click="ChangeCurrentTab('Music')"></div>
      </div>
      <div class="content">
        <component :is="currentTab" />
      </div>
    <div class="collapse-icon" @click="toggleToolbox">
      <img src="@/assets/images/icons/tomato_small_color.svg" width="25px" height="25px"
       class="mr-3">
      <img src="@/assets/images/icons/arrow.svg" width="20px" height="14px">
    </div>
  </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddTask from '@/components/Tabs/AddTask.vue';
import Analytics from '@/components/Tabs/Analytics.vue';
import Music from '@/components/Tabs/Music.vue';
import TaskList from '@/components/Tabs/TaskList.vue';
import Clock from './components/Clock.vue';

@Component({
  components: {
      AddTask,
      Analytics,
      Music,
      TaskList,
      Clock
  }
})
export default class App extends Vue {
  private currentTab: string = 'AddTask'
  private openToolbox: boolean = false

  public toggleToolbox() {
      this.openToolbox = !this.openToolbox
  }
  public ChangeCurrentTab(tabName: string) {
    this.currentTab = tabName
  }
}


</script>

<style lang="scss" scoped>
@import './src/assets/scss/variables';

.wrapper {
  width: 100vw;
  height: 100vh;
  background: $secondaryLight-color;
  overflow: hidden;
  position: relative;
}

.left-content {
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 80px);
  height: 100%;
  transition: all 0.3s;
  &.show {
    width: 55%;
  }
}

.right-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 45%;
    height: 100%;
    background: $dark-color;
    border-right: 2px solid $darkLight-color;
    transform: translateX(calc(100% - 80px));
    transition: all 0.3s;
    &.show {
        transform: translateX(0);
    }
}
.icon {
  display: block;
  padding: 40px;
  transition: all 0.25s ease;
  background-size: 80px;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    background-color: $secondaryDark-color;
  }
  &.active {
    cursor: auto;
  }
}
.icon-add {
  background-image: url('./assets/images/icons/add_white.svg');
  &.active {
    background-image: url('./assets/images/icons/add_white.svg');
  }
}
.icon-list {
  background-image: url('./assets/images/icons/list_white.svg');
  &.active {
    background-image: url('./assets/images/icons/list_red.svg');
  }
}
.icon-analysis {
  background-image: url('./assets/images/icons/analysis_white.svg');
  &.active {
    background-image: url('./assets/images/icons/analysis_red.svg');
  }
}
.icon-ringtone {
  background-image: url('./assets/images/icons/ringtone_white.svg');
  &.active {
    background-image: url('./assets/images/icons/ringtone_red.svg');
  }
}
.collapse-icon {
  position: absolute;
  left: -25px;
  bottom: 10px;
  padding: 12px 20px 12px 12px;
  background: $light-color;
  transition: background-color 0.3s ease;
  border-radius: 50px 15px 15px 50px;
  cursor: pointer;
  &:hover {
    background: darken($light-color, 20);
  }
}

.content {
    padding: 40px;
    color: #fff;
    border-left: 2px solid #414141;
    width: 100%;
}

</style>