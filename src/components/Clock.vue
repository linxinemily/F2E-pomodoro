<template>
    <div class="clock">
        <div class="mb-5 podomoro">
        PODOMORO
        </div>
        <div class="msg">
        You don’t have any task now,
        <span class="d-block">please add task first!</span>
        </div>
        <div class="footer">
        PODOMORO
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import './src/assets/scss/variables';
.clock {
  text-align: center;
}
.podomoro {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  background: $primary-color;
  border-radius: 50%;
  text-align: center;
  color: $light-color;
  font-size: $font-size-xl;
  font-weight: lighter;
  line-height: 300px;
  letter-spacing: $letter-space-x;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
    width: 56px;
    height: 72px;
    background: $success-color;
    border-radius: 100px;
    transform: rotate(50deg);
  }
}
.footer {
  color: $dark-color;
  font-size: $font-size-xxs;
  font-weight: lighter;
  letter-spacing: $letter-space-s;
}
</style>