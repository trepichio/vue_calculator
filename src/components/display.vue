<template>
  <div class="display" ref="dspInput">
    {{ input }}
  </div>
</template>

<script>
import textFit from 'textfit'
export default {

  name: 'Display',
  props: {
    input: {
      type: String,
      required: false,
      default: '0'
    }
  },
  data () {
    return {

    }
  },
  watch: {
    'input': function (val, oldVal) {
      this.$refs.dspInput.textContent = val
      this.$emit('onResize');
    }
  },
  mounted() {
    console.log('mounted display',this.$refs.dspInput)
    this.$emit('onResize');
  }
}
</script>

<style lang="scss" scoped>
.display {
  background-color: #4DADC9;
  min-width: 100%;
  text-align: right;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #fff;
  font-family: monospace;
  height: 15vmax;
  padding: 1rem 1rem 0 1rem;
  @media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
    height: 11vmax;
  }
}
</style>