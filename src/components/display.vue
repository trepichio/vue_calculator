<template>
  <div class="display">
    {{ input }}
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss" scoped>
.display {
  background-color: #4DADC9;
  width: 100%;
  text-align: right;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #fff;
  font-family: monospace;
  font-size: 13rem;
  padding: 1rem 1rem 0 1rem;

  @media screen and (max-width: 361px) {
    font-size: 7rem;
  }
}
</style>