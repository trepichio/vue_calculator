<template>
  <div id="app">
    <div class="calculator-container">
      <display
        :input="input"
      />
      <keyboard />
    </div>
  </div>
</template>

<script>
import display from '@/components/display.vue';
import keyboard from '@/components/keyboard.vue';
export default {
  name: 'app',
  components: {
    display,
    keyboard
  },
  data () {
    return {
      input: 0
    };
  }
}
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 62.5%;
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  font-size: 1.6rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.calculator-container {
  width: 60%;
  margin: 0 auto;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.7));
}

</style>
